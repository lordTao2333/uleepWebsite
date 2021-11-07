<template>
	<div class="moreMsg">
		<nav-bar class="moreMsgNav" >
			<div slot="left" class="leftIcon" @click="$router.go(-1)"><van-icon name="arrow-left" size="22px"/></div>
			<div slot="center" >睡眠数据</div>
			<div slot="right"  class="rightIcon" @click="showShare = true">
				<van-icon name="share" size="19px"/>
			</div>
		</nav-bar>
		<!-- 这个是那个分享的东西 -->
		<van-share-sheet
		  v-model="showShare"
		  title="立即分享给好友"
		  :options="options"
		  @select="onSelect"
		/>
		<div class="moreMsgBeyondBox">
			<div class="moreMsgBeyondInnerBox">
				<div class="moreMsgBeyondLeftBox">
					<div class="moreMsgBeyondLeftBeyondBox">
						{{averageNum}}
					</div>
					<div class="moreMsgBeyondLeftBelowBox">
						{{danwei}}
					</div>
				</div>
				<div class="moreMsgBeyondRightBox">
					<div class="moreMsgBeyondRightBeyondBox">
						Normal
					</div>
					<!-- 这个地方因为动态绑定class出了问题，所以就用了v-show的方法 -->
					<div class="moreMsgBeyondRightMiddleBox" v-show="!showTemperature">
						<!-- :class="{ activeC: curType == "Temperature" }" -->
						{{fanwei}}
					</div>
					<div class="activeC moreMsgBeyondRightMiddleBox" v-show="showTemperature">
						{{fanwei}}
					</div>
					<div class="moreMsgBeyondRightBelowBox">
						{{danwei}}
					</div>
				</div>
			</div>
			
		</div>
		<div class="moreMsgMiddleBox">
			<div class="moreMsgMiddleInnerBox">
				<tab-control
				  :titles="tabControlTitles"
				  @tabClick="tabClick"
				  
				  class="home-tab-control"
				  ref="tabControl"
				  
				/>
			</div>
			
		</div>
		<!-- <div id="alarmLine" style="height:140px"></div> -->
		<div class="moreMsgBelowBox">
			<div  id="HeartChart" ></div>
		</div>
		
	</div>
</template>

<script>
	import TabControl from "../../components/common/tabControl/TabControl.vue";

	import { PostMessage } from "./../../network/login.js"
	import NavBar from "@/components/common/navbar/NavBar";
	export default{
		name:'MoreMsg',
		data(){
			return{
				data:{},
				HeartChart:'',
				tabControlTitles: ["心跳", "血氧", "体温"],
				HeartChart_option:{
							color:"rgba(162,210,255, 1.0)",
							// title: {
							//     text: 'bpm',
							// 	borderWidth: 0,           // 标题边框线宽，单位px，默认为0（无边框）
							// 	padding: 20,             // 标题内边距，单位px，默认各方向内边距为5，
							// 	textStyle: {
							// 		fontSize: 12,
							// 		// fontWeight: '',
							// 		color: ''                             // 主标题文字颜色
							// 	},
							// },
						    tooltip: {
						        trigger: 'axis',
						        axisPointer: {
						            type: 'cross',
									crossstyle:{
										color:'white',
									},
						            label: {
						                backgroundColor: '#6FB9FF'
						            }
						        }
						    },
						    
						    grid: {
						        left: 2,
						        right: 2,
						        bottom: 0,
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
								show:false,
								// scale:true,
								min:null,
								max:null,
								type: 'value',
								axisLabel: {
									formatter: '{value} '
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
										lineStyle:{  
											color:'rgba(162,210,255, 1.0)'  
										}  
									}  
								}, 
								areaStyle: {
									
									
									color:new this.$echarts.graphic.LinearGradient(0, 0 , 0 , 1,//变化度
                                //三种由深及浅的颜色
									[ 
										{
											offset : 0,
											color : '#ffffff'
										}, 
										{
											offset : 0.1, 
											color : 'rgba(255,175,204, 1.0)'
										} ,
										{
											offset : 1, 
											color : 'rgba(162,210,255, 1.0)'
										} ,
									]),
								},
								name: '心跳速率',
								type: 'line',
								stack: '总量',
								
								label: {
									normal: {
										show: true,
										position: 'top',
										textStyle: {
												color: '#6FB9FF'
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
				options: [	
							[
					          { name: '微信', icon: 'wechat' },
					          { name: '微博', icon: 'weibo' },
					          { name: 'QQ', icon: 'qq' },
					        ],
					        [
					          { name: '复制链接', icon: 'link' },
					          { name: '分享海报', icon: 'poster' },
					          { name: '二维码', icon: 'qrcode' },
					        ],
						],
				year:'',
				month:'',
				day:'',
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
			}
		},
		created() {
			this.getGraghMsg()
			
		},
		mounted() {
			
			this.init()
			// this.showLine()
			
		},
		components:{
			NavBar,

			TabControl,
		},
		methods:{
			

// showLine() {
// 	var Realtime_chart=echarts.init(document.getElementById('alarmLine')); 
// 	var data = new Array();
// 	var xdata = [];
// 	function randomData(){
// 		var value = Math.random()*10;//随机生成整形数
// 		return value
// 	}
// 	function XTime() {
// 		var time =  150;
// 		var now=new Date();
// 		var newnow = new Date(now.getTime() + time);
// 		return newnow.toLocaleString();
// 	}
			
// 	for (var i = 0; i < 35; i++) {
// 		var newNum=randomData()
// 		if(data.indexOf(newNum) < 0) {
// 			data.push(newNum);
// 		} else {
// 			i--;
// 		}
// 		xdata.push(XTime())
// 	}
			
// 	Realtime_chart.showLoading(
// 	{
// 		text:'加载中..',
// 		color:'#f9f9f9',
// 		textColor: '#f9f9f9',
// 		maskColor: 'rgba(255, 255, 255, 0.2)',
// 		textStyle: {
// 			fontSize: 25
// 		}
// 	}
// 	);
// 	var  option = {
// 		color:"white",

// 		grid: {
// 			left: 2,
// 			right: '20%',
// 			bottom: 0,
// 			// containLabel: true
// 		},
// 		xAxis: [
// 			{
// 				type: 'category',
// 				boundaryGap: false,
// 				data: xdata
// 			}
// 		],
// 		yAxis: {
// 			show:false,
// 			// scale:true,
// 			min:null,
// 			max:null,
// 			type: 'value',
// 			axisLabel: {
// 				formatter: '{value} '
// 			}
// 		},
		
// 	series: [
// 		{
// 		symbol: "none",
// 		itemStyle : {
// 			normal : {  
// 				lineStyle:{  
// 					color:new echarts.graphic.LinearGradient(0, 0 , 1 , 0,//变化度右下左上
// 		//三种由深及浅的颜色
// 			[ 
// 				{
// 					offset : 0,
// 					color : 'rgba(255, 255, 255, 0)'
// 				}, 
// 				{
// 					offset : 0.6, 
// 					color : '#ffffff'
// 				} ,
// 				{
// 					offset : 1, 
// 					color : '#ffffff'
					
// 				} ,
// 			]),
// 				}  
// 			}  
// 		}, 
		
// 		type: 'line',
// 		data: data
// 		}
// 		]
// 	};
// 	 
// 	setInterval(function () {
// 		data.shift();
// 		data.push(randomData());
// 		xdata.shift()
// 		xdata.push(XTime())
// 		Realtime_chart.hideLoading();
// 		Realtime_chart.setOption(option);
// 		}, 150);
// },
			
			
			
			
			//获取数据
			getGraghMsg() {
			
				// this.data=JSON.parse(sessionStorage.getItem('chooseDate')) || ''
				// this.data=JSON.parse(window.localStorage.getItem("chooseDate"))
				// this.userID=window.localStorage.getItem("userID")
				// this.userID=sessionStorage.getItem('userID') || ''
				this.userID=this.$store.getters.getUserInfo || ''
				this.year=this.$store.getters.getYearInfo || ''
				this.month=this.$store.getters.getMonthInfo || ''
				this.day=this.$store.getters.getDayInfo || ''
				PostMessage("/getGragh", {
				"userID":this.userID,
				"curType":this.curType,
				"year":this.year,
				"month":this.month,
				"day":this.day,
				}).then(res => {
					this.HeartChart_option.xAxis[0].data=res.data.time
					this.HeartChart_option.series[0].data=res.data.graghMsg
					this.HeartChart_option.yAxis.max=res.data.maxgraghMsg
					this.HeartChart_option.yAxis.min=res.data.mingraghMsg
					
					this.averageNum=parseInt(res.data.averageNum)
					
				});
			},
			
			onSelect(option) {
			      Toast(option.name);
			      this.showShare = false;
			},
			init(){
				
				
				// 基于准备好的dom，初始化echarts实例
				this.HeartChart = this.$echarts.init(document.getElementById('HeartChart'))
				// 绘制图表，this.HeartChart_option是数据
				this.HeartChart.setOption(this.HeartChart_option,true)
			},
			tabClick(index) {
			  if (index === 0) {
			    this.curType = "HR";
				// this.HeartChart_option.title.text='bpm'
				this.fanwei='60~100'
				this.danwei='bpm'
				this.showTemperature=false
				this.HeartChart_option.series[0].name='心跳速率'
				this.getGraghMsg()
			  } else if (index === 1) {
			    this.curType = "SPO2";
				this.showTemperature=false
				// this.HeartChart_option.title.text='%'
				
				this.fanwei='90~100'
				this.danwei='%'
				this.HeartChart_option.series[0].name='血氧浓度'
				this.getGraghMsg()
				
			  } else if (index === 2) {
			    this.curType = "Temperature";
				this.fanwei='35.8~37.8'
				this.danwei='℃'
				this.showTemperature=true
				// this.HeartChart_option.title.text='℃'
				this.HeartChart_option.series[0].name='体温'
				this.getGraghMsg()
			  }
			
			  this.$refs.tabControl.curIndex = index;
			  
			},
		}
	}
</script>

<style scoped="scoped">
	.moreMsg{
		background: rgba(189,224,254, 1.0);
		height: 100%;
		width: 100%;
		font-family:"Times New Roman", Times, serif;
	}
	.moreMsgNav{
		position: relative;
		
	}
	.leftIcon{
		position: absolute;
		top: 59%;
		left: 25px;
		transform: translate(-50%,-50%);
		
	}
	.rightIcon{
		position: absolute;
		top: 58%;
		right: 25px;
		transform: translate(50%,-50%);
		
	}
	.absolutePosition{
		position: absolute;
		right: 25px;
		top: 24.5px;
		transform: translate(50%,-50%);
	}
	.moreMsgBeyondBox{
		height: 200px;
		display: flex;
		padding-top: 10px;
	}
	.moreMsgBeyondInnerBox{
		width: 80%;
		height: 190px;
		border-radius: 10px;
		margin: auto;
		display: flex;
		color: white;
		background: rgba(162,210,255, 1.0);
	}
	.moreMsgBeyondLeftBox{
		flex: 1;
		width: 50%;
		
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-content: center;
	}
	.moreMsgBeyondLeftBeyondBox{
		width: 80%;
		height: 80px;
		margin-bottom: 20px;
		
		font-size: 64px;
		font-weight: 900;
		align-items: center;
		text-align: center;
		line-height:80px;
	}
	
	.moreMsgBeyondLeftBelowBox{
		width: 80%;
		height: 30px;
		
		font-size: 20px;
		font-weight: 300;
		font-weight: 600;
		text-align: center;
		line-height:30px;
	}
	.moreMsgBeyondRightBox{
		flex: 1;
		width: 50%;
		
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-content: center;
		
	}
	.moreMsgBeyondRightBeyondBox{
		width: 80%;
		height: 15px;
		margin-bottom: 5px;
		
		font-size: 15px;
		font-weight: 300;
		
		text-align: center;
		line-height:15px;
	}
	.moreMsgBeyondRightMiddleBox{
		width: 80%;
		height: 50px;
		margin-bottom: 5px;
		
		font-size: 32px;
		font-weight: 300;
		
		text-align: center;
		line-height:50px;
	}
	.moreMsgBeyondRightBelowBox{
		width: 80%;
		height: 15px;
		
		font-size: 15px;
		font-weight: 300;
		
		text-align: center;
		line-height:15px;
	}
	.moreMsgMiddleBox{
		height: 60px;
		display: flex;
		border-bottom: rgba(162,210,255, 1.0) 1px solid;
	}
	.moreMsgMiddleInnerBox{
		width: 80%;
		height: 40px;
		margin: auto
		
	}
	.moreMsgBelowBox{
		height: calc(100vh - 311px);
	}
	#HeartChart{
		height: calc(100vh - 311px);
		width: 100%;
	}
	.activeC{
		font-size: 24px;
	}
</style>
