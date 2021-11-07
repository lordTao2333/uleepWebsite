<template>
	<div class="VisualMoreMsg">
		<div class="moreMsgBeyondBox">
			
			<div class="tab-controlv">
				<div
					:class="{ active: index === curIndex }"
					:key="index"
					@click="tabClick(index)"
					class="tab-control-item"
					v-for="(item, index) in tabControlTitles"
				>
					<span>{{ item }}</span>
				</div>
			</div>
		</div>
		<div class="moreMsgGraghBox">
			<div class="moreMsgGraghBoxInside">
				<Average :dataforson="dataforson"></Average>
			</div>
			
		</div>
		<div class="moreMsgMiddleBox">
			
			<img src="../../../assets/img/visual/normalbg.png" alt="">
			<div class="moreMsgMiddleBoxLeft">Normal:</div>
			<div class="moreMsgMiddleBoxMiddle">{{fanwei}}</div>
			<div class="moreMsgMiddleBoxRight">{{shangdanwei}}</div>
		</div>
		<div class="visualizationBoxMiddleBottomTitleBox">
			<!-- <div class="visualizationBoxMiddleBottomTitleBoxZhanwei"></div> -->
			<div class="visualizationBoxMiddleBottomTitleBoxLeft">
				<div class="visualizationBoxMiddleBottomTitleBoxIcon">
					<img src="../../../assets/img/visual/redDot.png" alt="">
				</div>
				<div class="visualizationBoxMiddleBottomTitleBoxText">{{danwei}}</div>
			</div>
			
		</div>
		<div class="moreMsgBelowBox">
			<div  id="HeartChart" ></div>
		</div>
	
		
	</div>
</template>

<script>


	import { PostMessage } from "../../../network/login.js"
	import Average from "./average.vue";
	export default{
		name:'VisualMoreMsg',
		data(){
			return{
				curIndex: 0,
				dataforson:90,
				data:{
					month:null,
					day:null,
				},
				HeartChart:'',
				tabControlTitles: ["心跳", "血氧", "体温"],
				HeartChart_option:{
							color:"white",
							
						    tooltip: {
								show: false,
								trigger: 'axis',
								axisPointer: {
								type: 'cross',
								crossstyle:{
									color:'#44D7B6',
								},
								label: {
									backgroundColor: 'rgba(68,215,182, 0.5)'
								},
						       }
						    },
						    
						    grid: {
						       left: '8%',
						       right: '2%',
						       bottom: '0%',
						       top:"12%"
						       // containLabel: true
						    },
						    xAxis: [
						        {
						            type: 'category',
						            boundaryGap: false,
						            data: []
						        }
						    ],
						    yAxis: {
								axisTick:{
									show:false,
									// interval:4,
								},
								show:true,
								// minInterval: 2,
								min:null,
								max:null,
								type: 'value',
								axisLabel: {
									formatter: '{value} ',
									// interval:2,
									showMaxLabel:false,
									margin:4,
									showMinLabel:false,
									showMaxLabel:true,
									fontFamily:'Arial',
									color:'#cfcfcf'
								},
								// interval:2,
								// splitNumber:5,
								splitLine:{
									show:true,
									// interval:2,
									lineStyle:{
										color:"#D8D8D8",
										type:'dashed',
									}
								},
								axisLine:{
									lineStyle:{
										color:'#D8D8D8',
									}
								}
							},
						    dataZoom: [
								{
									show: false,
									start:0,
									end: 100,
									handleSize: 8
								},
								{
									type: 'inside',
									start: 0,
									end: 100
								},
							],
						    series: [
								{
								itemStyle : {
									normal : {  
										color: "#44D7B6",
										lineStyle:{  
											color:'#44D7B6'  
										}  
									}  
								}, 
								areaStyle: {
									color:'rgba(68,215,182, 0.15)'
									
								},
								
								type: 'line',
								symbol:'circle',
								symbolSize:6,
								label: {
									normal: {
										show: true,
										position: 'insideBottom',
										textStyle: {
											color: '#000000'
										}
									}
								},
								
								data: [],
								}
						]
				},
				userID:'',
				showTemperature:false,
				showShare: false,
				danwei:'心跳 (bpm)',
				shangdanwei:'bpm',
				fanwei:'60~100',
				curType : "HR",
				maxDate: new Date(),
				
			}
		},
		//数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
		watch: {
		//观察option的变化
			HeartChart_option: {
				handler(newVal, oldVal) {
				if (this.HeartChart) {
				if (newVal) {
					this.HeartChart.setOption(newVal);
				} 
				else {
					this.HeartChart.setOption(oldVal);
				}
			} 
			else {
				this.init();
			}
			},
			deep: true //对象内部属性的监听，关键。
			},
			date:{
				handler(newVal, oldVal) {
					if (newVal) {
						this.getGraghMsg(this.curIndex)
					} 
					else {
						
					}
				},
			},
		},
		created() {
			this.getGraghMsg(0)
		},
		mounted() {
			this.init()
			
		},
		components:{

			
			Average,
		},
		props:{
			date:{
				
			},
		},
	
		methods:{

			//获取数据
			getGraghMsg(index) {
				this.data=JSON.parse(window.localStorage.getItem("chooseDate"))
				if(this.data == null){
					this.userID=window.localStorage.getItem("userID")
					PostMessage("/getGragh", {
					"userID":this.userID,
					"curType":this.curType,
					"year":this.maxDate.getFullYear(),
					"month":this.maxDate.getMonth()+1,
					"day":this.maxDate.getDate(),
					}).then(res => {
						this.HeartChart_option.xAxis[0].data=res.data.time
						this.HeartChart_option.series[0].data=res.data.graghMsg
						this.HeartChart_option.yAxis.max=res.data.maxgraghMsg
						this.HeartChart_option.yAxis.min=res.data.mingraghMsg
						this.dataforson=parseInt(res.data.averageNum)
						if (index === 0) {
							this.HeartChart_option.yAxis.interval=2
							// this.HeartChart_option.tooltip.label.backgroundColor='rgba(68,215,182, 0.5)'
							// this.HeartChart_option.tooltip.crossstyle.color='#44D7B6'
							this.HeartChart_option.series[0].itemStyle.normal.color="#44D7B6"
							this.HeartChart_option.series[0].itemStyle.normal.lineStyle.color="#44D7B6"
							this.HeartChart_option.series[0].areaStyle.color='rgba(68,215,182, 0.15)'
						} 
						else if (index === 1) {
							this.HeartChart_option.yAxis.interval=2
										
							// this.HeartChart_option.tooltip.label.backgroundColor='rgba(54,172,255, 0.5)'
							// this.HeartChart_option.tooltip.crossstyle.color='#36ACFF'
							this.HeartChart_option.series[0].itemStyle.normal.color="#36ACFF"
							this.HeartChart_option.series[0].itemStyle.normal.lineStyle.color="#36ACFF"
							this.HeartChart_option.series[0].areaStyle.color='rgba(54,172,255, 0.15)'
						} 
						else if (index === 2) {
							this.HeartChart_option.yAxis.interval=0.2
							// this.HeartChart_option.tooltip.label.backgroundColor='rgba(239,160,58, 0.5)'
							// this.HeartChart_option.tooltip.crossstyle.color='#EFA03A'
							this.HeartChart_option.series[0].itemStyle.normal.color="#EFA03A"
							this.HeartChart_option.series[0].itemStyle.normal.lineStyle.color="#EFA03A"
							this.HeartChart_option.series[0].areaStyle.color='rgba(239,160,58, 0.15)'
						}
					});
				}else{
					this.userID=window.localStorage.getItem("userID")
					PostMessage("/getGragh", {
					"userID":this.userID,
					"curType":this.curType,
					"year":this.data.year,
					"month":this.data.month,
					"day":this.data.day,
					}).then(res => {
						this.HeartChart_option.yAxis.max=res.data.maxgraghMsg
						this.HeartChart_option.yAxis.min=res.data.mingraghMsg
						this.HeartChart_option.xAxis[0].data=res.data.time
						// this.HeartChart_option.series[0].data=res.data.graghMsg
						// 在这个地方给数据给一个延时函数
						var smalltime=3000/res.data.graghMsg.length
						smalltime= parseFloat(smalltime.toFixed(2))
						// var nowX = new Array()
						var nowY = new Array()
						// nowX.push(res.data.time[0])
						nowY.push(res.data.graghMsg[0])
						//延时函数主题
						var pushTimes = 0
						var push = setInterval(() => {
							// nowX.push(res.data.time[pushTimes+1])
							nowY.push(res.data.graghMsg[pushTimes+1])
							
							this.HeartChart_option.series[0].data=nowY
							// this.HeartChart_option.xAxis[0].data=nowX
							pushTimes=pushTimes+1
							// 好弱智
							if(pushTimes >= res.data.graghMsg.length-1){
							      clearInterval(push);
							}
						},40);

						this.dataforson=parseInt(res.data.averageNum)
						if (index === 0) {
							this.HeartChart_option.yAxis.interval=2
							// this.HeartChart_option.tooltip.label.backgroundColor='rgba(68,215,182, 0.5)'
							// this.HeartChart_option.tooltip.crossstyle.color='#44D7B6'
							this.HeartChart_option.series[0].itemStyle.normal.color="#44D7B6"
							this.HeartChart_option.series[0].itemStyle.normal.lineStyle.color="#44D7B6"
							this.HeartChart_option.series[0].areaStyle.color='rgba(68,215,182, 0.15)'
						} 
						else if (index === 1) {
							this.HeartChart_option.yAxis.interval=2
										
							// this.HeartChart_option.tooltip.label.backgroundColor='rgba(54,172,255, 0.5)'
							// this.HeartChart_option.tooltip.crossstyle.color='#36ACFF'
							this.HeartChart_option.series[0].itemStyle.normal.color="#36ACFF"
							this.HeartChart_option.series[0].itemStyle.normal.lineStyle.color="#36ACFF"
							this.HeartChart_option.series[0].areaStyle.color='rgba(54,172,255, 0.15)'
						} 
						else if (index === 2) {
							this.HeartChart_option.yAxis.interval=0.2
							// this.HeartChart_option.tooltip.label.backgroundColor='rgba(239,160,58, 0.5)'
							// this.HeartChart_option.tooltip.crossstyle.color='#EFA03A'
							this.HeartChart_option.series[0].itemStyle.normal.color="#EFA03A"
							this.HeartChart_option.series[0].itemStyle.normal.lineStyle.color="#EFA03A"
							this.HeartChart_option.series[0].areaStyle.color='rgba(239,160,58, 0.15)'
						}
					});
				}
				
			},
			init(){
				// 基于准备好的dom，初始化echarts实例
				this.HeartChart = this.$echarts.init(document.getElementById('HeartChart'))
				// 绘制图表，this.HeartChart_option是数据
				this.HeartChart.setOption(this.HeartChart_option,true)
			},
			
			tabClick (index) {
				this.curIndex = index;
				
			  if (index === 0) {
			    this.curType = "HR";
				this.fanwei='60~100'
				this.danwei='心跳 (bpm)'
				this.shangdanwei='bpm'
				
				this.getGraghMsg(index)
			  } 
			  else if (index === 1) {
			    this.curType = "SPO2";
				
				this.fanwei='90~100'
				this.danwei='血氧 (%)'
				this.shangdanwei='%'
				
				this.getGraghMsg(index)
			  } 
			  else if (index === 2) {
			    this.curType = "Temperature";
				this.fanwei='35.8~37.8'
				this.danwei='体温 (℃)'
				this.shangdanwei='℃'
				
				this.getGraghMsg(index)
			  }
			
			  // this.$refs.tabControl.curIndex = index;
			  
			},
		}
	}
</script>

<style scoped="scoped">
	
	.VisualMoreMsg{
		
		height:calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054));
		width: 100%;
		font-family:"Times New Roman", Times, serif;
		padding: 12px 15px 20px 15px;
	}
	
	.moreMsgBeyondBox{
		height:calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.07) ;
		width: 100%;
	}
	.moreMsgGraghBox{
		height:calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.34);
		width: 100%;
		padding-top: 25px;
		padding-bottom: 5px;
	}
	.moreMsgGraghBoxInside{
		height:calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.34) - 30px);
		width: 100%;
	}
	.moreMsgMiddleBox{
		height: calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.15);
		width: 100%;
		position: relative;
		font-family:"Times New Roman", Times, serif;
	}
	
	.moreMsgMiddleBox img{
		height: calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.15);
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.moreMsgMiddleBoxLeft{
		
		position: absolute;
		top: 50%;
		left: 20%;
		transform: translate(-50%,-50%);
		text-align: center;
		font-size: 18px;
		/* font-weight: 600; */
	}
	.moreMsgMiddleBoxMiddle{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		font-size: 22px;
		color: #36ACFF;
	}
	.moreMsgMiddleBoxRight{
		position: absolute;
		top: 50%;
		left: 80%;
		transform: translate(-50%,-50%);
		text-align: center;
		font-size: 17px;
	}
	.visualizationBoxMiddleBottomTitleBox{
		height: 40px;
		width: 100%;
		padding-bottom: 8px;
		padding-top: 17px;
		display: flex;
	}
	/* .visualizationBoxMiddleBottomTitleBoxZhanwei{
		width: 5%;
		height: 15px;
	} */
	.visualizationBoxMiddleBottomTitleBoxLeft{
		width: 35%;
		height: 15px;
		display: flex;
	}
	.visualizationBoxMiddleBottomTitleBoxRight{
		width: 65%;
		height: 15px;
		display: flex;
	}
	.visualizationBoxMiddleBottomTitleBoxIcon{
		height: 15px;
		width: 10px;
		position: relative;
	}
	.visualizationBoxMiddleBottomTitleBoxIcon img{
		position: absolute;
		width: 10px;
		height: 10px;
		top: 2px;
	}
	.visualizationBoxMiddleBottomTitleBoxText{
		margin-left: 5px;
		font-size: 10px;
		color: #000000;
		height: 15px;
		line-height: 15px;
	}
	.moreMsgBelowBox{
		height:calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.44);
		width: 100%;
	}
	#HeartChart{
		height:calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.44);
		width: 100%;
	}
	.tab-controlv {
	  line-height:calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.07) ;
	  display: flex;
	  justify-content: space-between;
	  height:calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 72px) * 0.07) ;
	  text-align: center;
	}
	
	.tab-control-item {
	  flex: 1;
	  border-radius:5px;
	  color: #000000;
	  background-color: #f4f4f4;
	}
	
	.tab-control-item span {
	  font-size: 17px;
	  font-weight: 600;
	  
	  /* padding: 5px; */
	}
	
	.active {
	  color: #f4f4f4;
	  background-color: #000000;
	}
</style>
