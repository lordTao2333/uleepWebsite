<template>
	<div class="TodayScore">
		<div class="bgPic">
			<img src="../../../assets/img/visual/circlesolid.png" alt="">
		</div>
		<div  id="TodayScore"></div>
		
	</div>
</template>

<script>

export default {
  name: "TodayScore",
  data(){
	return{
		userID:'',
		date: {},
		data:{},
		show: false,
		//图表上的时间
		TodayScore:'',
		TodayScore_option: {
			  
			  
			  series: {
				name: "",
				type: "pie",
				center: ['50%', '50%'],
				radius: ["79%", "91%"],
				avoidLabelOverlap: true,
				hoverAnimation: false,
				label: {
					normal: {
						show: true,
						position: 'center',
						formatter:'{c}',
						textStyle:{
							fontSize:14,
							color:"#000000"
						}
					},
				},

				labelLine: {
				  normal: {
					show: false,
				  },
				},
				
				data: [
				  {
					value: '',
					name: "",
					itemStyle: {
					  color: "#44D7B6",
					},
				  },
				  {
					value: '',
					name: "",
					itemStyle: {
					  color: "transparent",
					},
					label: {
						normal: {
							show: false
						}
					},
					
				  },
				],
			  },
		},
		datafromfather:{},
	}
  },
  computed: {
    
  },
  components: {

  },
  props:{
  	dataforson:{
  		
  	},
  },
  // 2数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
  watch: {

  	TodayScore_option: {
  		handler(newVal, oldVal) {
  		if (this.chart) {
  		if (newVal) {
  			this.TodayScore.setOption(newVal);
  		}
  		else {
  			this.TodayScore.setOption(oldVal);
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
				this.getClientMsg()
			} 
			else {
				
			}
		},
	},
  },
  created() {
  	this.getClientMsg()
  },
  mounted() {

  	this.init()
  },
  methods:{
		//获取数据
		getClientMsg() {
			this.datafromfather=this.dataforson
			this.TodayScore_option.series.data[0].value=this.datafromfather.healthScore
			this.TodayScore_option.series.data[1].value=100-this.datafromfather.healthScore
		},
		init(){
			// 基于准备好的dom，初始化echarts实例
			this.TodayScore = this.$echarts.init(document.getElementById('TodayScore'))
			// 绘制图表，this.circleGragh_option是数据
			this.TodayScore.setOption(this.TodayScore_option,true)
		},
	},
	

  
};
</script>

<style scoped>

.TodayScore{
	/* background: linear-gradient(#BDE2C1 15%, #59DCCC 75%); */
	height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
	width: 100%;
	position: relative;
}

#TodayScore{
	width: 100%;
	height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
	
	
}

.bgPic{
	position: absolute;
	top: 52%;
	left:50%;
	transform: translate(-50%,-50%);
}
.bgPic img{
	height: calc(calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2) * 0.9);
	width:auto;
}
/* sb ipad pro */
	@media screen and (min-width: 1350px) and (max-width: 1370px) {
		.bgPic img{
			height: calc(calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2) * 0.8);
			width:auto;
		}
	}
</style>
