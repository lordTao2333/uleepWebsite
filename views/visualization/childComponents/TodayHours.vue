<template>
	<div class="TodayHours">
		<div class="bgPic">
			<img src="../../../assets/img/visual/circlesolid.png" alt="">
		</div>
		<div  id="TodayHours"></div>
		
	</div>
</template>

<script>

export default {
  name: "TodayHours",
  data(){
	return{
		userID:'',
		date: {},
		data:{},
		show: false,
		//图表上的时间
		TodayHours:'',
		TodayHours_option: {

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

  	TodayHours_option: {
  		handler(newVal, oldVal) {
  		if (this.chart) {
  		if (newVal) {
  			this.TodayHours.setOption(newVal);
  		}
  		else {
  			this.TodayHours.setOption(oldVal);
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
			this.TodayHours_option.series.data[0].value=this.datafromfather.sleepHours
			this.TodayHours_option.series.data[1].value=12-this.datafromfather.sleepHours
		},
		init(){
			// 基于准备好的dom，初始化echarts实例
			this.TodayHours = this.$echarts.init(document.getElementById('TodayHours'))
			// 绘制图表，this.circleGragh_option是数据
			this.TodayHours.setOption(this.TodayHours_option,true)
		},
	},
	

  
};
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.TodayHours{
	/* background: linear-gradient(#BDE2C1 15%, #59DCCC 75%); */
	height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
	width: 100%;
	position: relative;
}

#TodayHours{
	width: 100%;
	height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
	margin:0 auto;
	
}
.bgPic{
	position: absolute;
	top: 52%;
	left:50%;
	transform: translate(-50%,-50%);
}
.bgPic img{
	height: calc(calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2) * 0.90);
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
