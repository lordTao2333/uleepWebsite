<template>
	<div class="HistoryScore">
		<div  id="HistoryScore" ></div>
		
	</div>
</template>

<script >

	import { PostMessage } from "../../../network/login.js"

	export default{
		name:'HistoryScore',
		data(){
			return{
				data:{},
				HistoryScore:'',
				tabControlTitles: ["心跳", "血氧", "体温"],
				HistoryScore_option:{
						color:"white",
							
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'cross',
									crossstyle:{
										color:'#44D7B6',
									},
									label: {
										backgroundColor: 'rgba(68,215,182, 0.5)'
									}
								}
							},
							
							grid: {
								left: '6.5%',
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
								// interval:4,
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
									
									// color:new echarts.graphic.LinearGradient(0, 0 , 0 , 1,//变化度
							   
									// [ 
									// 	{
									// 		offset : 0,
									// 		color : '#ffffff'
									// 	}, 
									// 	{
									// 		offset : 0.75, 
									// 		color : '#44D7B6'
									// 	} ,
									// 	{
									// 		offset : 1, 
									// 		color : '#44D7B6'
									// 	} ,
									// ]),
								},
								name: '心跳速率',
								type: 'line',
								// stack: '总量',
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
								
								data: []
								}
								
								
						]
				},
				userID:'',
				showTemperature:false,
				showShare: false,
				danwei:'bpm',
				fanwei:'60~100',
				curType : "HR",
				
				averageNum:110,
				datafromfather:{},
			}
		},
		props:{
			dataforsonhistory:{
				
			},
		},
		//数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
		watch: {
		//观察option的变化
			HistoryScore_option: {
				handler(newVal, oldVal) {
				if (this.HistoryScore) {
				if (newVal) {
					this.HistoryScore.setOption(newVal);
				} 
				else {
					this.HistoryScore.setOption(oldVal);
				}
			} 
			else {
				this.init();
			}
			},
			deep: true //对象内部属性的监听，关键。
			},
			dataforsonhistory:{
				handler(newVal, oldVal) {
					if (newVal) {
						this.getGraghMsg()
					} 
					else {
						
					}
				},
			},
		},
		created() {
			this.getGraghMsg()
		},
		mounted() {
			this.init()
			
		},
		components:{
			
		},
		methods:{

			
			//获取数据
			getGraghMsg() {
				
				this.datafromfather=this.dataforsonhistory
				if(this.datafromfather.dateOfDay != undefined){
					this.HistoryScore_option.xAxis[0].data=this.datafromfather.dateOfDay
					// this.HistoryScore_option.series[0].data=this.datafromfather.healthScore
					this.HistoryScore_option.yAxis.max=this.datafromfather.maxNumHealthScore
					this.HistoryScore_option.yAxis.min=this.datafromfather.minNumHealthScore
					// 在这个地方给数据给一个延时函数
					// var smalltime=3000/this.datafromfather.dateOfDay.length
					// smalltime= parseFloat(smalltime.toFixed(2))
					
					var nowY = new Array()
					
					nowY.push(this.datafromfather.healthScore[0])
					//延时函数主题
					var pushTimes = 0
					var push = setInterval(() => {
						
						nowY.push(this.datafromfather.healthScore[pushTimes+1])
						
						this.HistoryScore_option.series[0].data=nowY
						
						pushTimes=pushTimes+1
						// 好弱智
						if(pushTimes >= this.datafromfather.dateOfDay.length-1){
						      clearInterval(push);
						}
					},20);
				}
				
			
			},
			
			
			init(){
				
				
				// 基于准备好的dom，初始化echarts实例
				this.HistoryScore = this.$echarts.init(document.getElementById('HistoryScore'))
				// 绘制图表，this.HeartChart_option是数据
				this.HistoryScore.setOption(this.HistoryScore_option,true)
			},
			
		}
	}
</script>

<style scoped="scoped">
	.HistoryScore{
		
		height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
		width: 100%;
		
	}
	#HistoryScore{
		height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
		width: 100%;
	}
	
</style>
