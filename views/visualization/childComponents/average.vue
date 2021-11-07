<template>
	<div class="Average">
		<div class="bgPic">
			<img src="../../../assets/img/visual/yibiao.png" alt="">
		</div>
		<div  id="Average"></div>
		
	</div>
</template>

<script>

export default {
  name: "Average",
  data(){
	return{
		userID:'',
		date: {},
		data:{},
		show: false,
		//图表上的时间
		Average:'',
		Average_option: {
			  
			  
			  series: {
				name: "",
				type: "pie",
				startAngle:222, //起始角度
				center: ['50%', '50%'],
				radius: ["78%", "92%"],
				avoidLabelOverlap: true,
				hoverAnimation: false,
				label: {
					// verticalAlign: top,
					// align:center,
					show: true,
					position: 'center',
					formatter:  [
						'{c}',
						'{b|average}'
					].join('\n'), 
					textStyle:{
						fontSize:26,
						fontWeight:'lighter',
						color: '#44D7B6',

						
					},
					rich:{
						b: {
							color: '#d8d8d8',
							// padding:15,
							fontSize:14
						},
					}
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
		datafromfather:90,
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

  	Average_option: {
  		handler(newVal, oldVal) {
  		if (this.chart) {
  		if (newVal) {
  			this.Average.setOption(newVal);
  		}
  		else {
  			this.Average.setOption(oldVal);
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
			this.Average_option.series.data[0].value=this.datafromfather
			this.Average_option.series.data[1].value=180-this.datafromfather
		},
		init(){
			// 基于准备好的dom，初始化echarts实例
			this.Average = this.$echarts.init(document.getElementById('Average'))
			// 绘制图表，this.circleGragh_option是数据
			this.Average.setOption(this.Average_option,true)
		},
	},
	

  
};
</script>

<style scoped>

.Average{
	/* background: linear-gradient(#BDE2C1 15%, #59DCCC 75%); */
	height:calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 64px) * 0.34) - 30px);
	width: 100%;
	position: relative;
}

#Average{
	width: 100%;
	height:calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 64px) * 0.34) - 30px);
	
	
}

.bgPic{
	position: absolute;
	top: 52%;
	left:50%;
	transform: translate(-50%,-50%);
}
.bgPic img{
	height:calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054)) - 64px) * 0.34) - 30px);
	width:auto;
}

</style>
