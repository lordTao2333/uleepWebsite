<template>
	<div class="TempChartAna">
		<div  id="TempChartAna" ></div>
		
	</div>
</template>

<script >
	import TabControl from "../../../components/common/tabControl/TabControl.vue";

	import { PostMessage } from "../../../network/login.js"

	export default{
		name:'TempChartAna',
		data(){
			return{
				data:{},
				TempChartAna:'',
				tabControlTitles: ["心跳", "血氧", "体温"],
				TempChartAna_option:{
							color:"white",
							
						    tooltip: {
								show: false,
						        trigger: 'axis',
						        axisPointer: {
						            type: 'cross',
									crossstyle:{
										color:'#EFA03A',
									},
						            label: {
						                backgroundColor: 'rgba(239,160,58, 0.5)'
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
									interval:2,
									showMaxLabel:false,
									margin:0,
									showMinLabel:false,
									showMaxLabel:true,
									fontFamily:'Arial',
									color:'#cfcfcf'
								},
								interval:0.2,
								// splitNumber:5,
								splitLine:{
									show:true,
									interval:2,
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
										color:'#EFA03A',
										lineStyle:{
											color:'#EFA03A'  
										}  
									}  
								}, 
								areaStyle: {
									color:'rgba(239,160,58, 0.15)'
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
								name: '摄氏度',
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
			TempChartAna_option: {
				handler(newVal, oldVal) {
				if (this.TempChartAna) {
				if (newVal) {
					this.TempChartAna.setOption(newVal);
				} 
				else {
					this.TempChartAna.setOption(oldVal);
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
				this.TempChartAna_option.xAxis[0].data=this.datafromfather.timeTemperature
				this.TempChartAna_option.series[0].data=this.datafromfather.graghMsgTemperature
				this.TempChartAna_option.yAxis.max=this.datafromfather.maxNumTemperature
				this.TempChartAna_option.yAxis.min=this.datafromfather.minNumTemperature

			},
			init(){
				// 基于准备好的dom，初始化echarts实例
				this.TempChartAna = this.$echarts.init(document.getElementById('TempChartAna'))
				// 绘制图表，this.HeartChart_option是数据
				this.TempChartAna.setOption(this.TempChartAna_option,true)
			},
			
		}
	}
</script>

<style scoped="scoped">
	.TempChartAna{
		height:  calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.108)) / 3) - 60px) ;
		width: 100%;
	
	}
	#TempChartAna{
		height:  calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.108)) / 3) - 60px) ;
		width: 100%;
	
	}
	
</style>
