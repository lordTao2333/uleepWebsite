<template>
	<div class="HeartChartAna">
		<div  id="HeartChartAna" ></div>
		
	</div>
</template>

<script >
	import TabControl from "../../../components/common/tabControl/TabControl.vue";
	
	import { PostMessage } from "../../../network/login.js"

	export default{
		name:'HeartChartAna',
		data(){
			return{
				data:{},
				HeartChartAna:'',
				tabControlTitles: ["心跳", "血氧", "体温"],
				HeartChartAna_option:{
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
									margin:0,
									showMinLabel:false,
									showMaxLabel:true,
									fontFamily:'Arial',
									color:'#cfcfcf'
								},
								// interval:3,
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
			dataforson:{
				
			},
		},
		//数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
		watch: {
		//观察option的变化
			HeartChartAna_option: {
				handler(newVal, oldVal) {
				if (this.HeartChartAna) {
				if (newVal) {
					this.HeartChartAna.setOption(newVal);
				} 
				else {
					this.HeartChartAna.setOption(oldVal);
				}
			} 
			else {
				this.init();
			}
			},
			deep: true //对象内部属性的监听，关键。
			},
			dataforson:{
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
			
			TabControl,
		},
		methods:{
			//获取数据
			getGraghMsg() {
				this.datafromfather=this.dataforson
				this.HeartChartAna_option.xAxis[0].data=this.datafromfather.timeHR
				this.HeartChartAna_option.series[0].data=this.datafromfather.graghMsgHR
				this.HeartChartAna_option.yAxis.max=this.datafromfather.maxNumHR
				this.HeartChartAna_option.yAxis.min=this.datafromfather.minNumHR
			
			},
			init(){
				// 基于准备好的dom，初始化echarts实例
				this.HeartChartAna = this.$echarts.init(document.getElementById('HeartChartAna'))
				// 绘制图表，this.HeartChart_option是数据
				this.HeartChartAna.setOption(this.HeartChartAna_option,true)
			},
			
		}
	}
</script>

<style scoped="scoped">
	.HeartChartAna{
		height:  calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.108)) / 3) - 60px) ;
		width: 100%;
		
		
	}
	#HeartChartAna{
		height:  calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.108)) / 3) - 60px) ;
		width: 100%;
	}
	
</style>
