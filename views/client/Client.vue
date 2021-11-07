<template>
	<div class="client">
		<nav-bar class="clientNav" >
			<div slot="left" class="leftIcon">
				<!-- <van-icon name="arrow-left" size="22px"/> -->
				</div>
			<div slot="center" >日期选择</div>
			<div slot="right" @click="show = true" class="rightIcon"><van-icon name="tosend" size="26px"/></div>
		</nav-bar>
		
		<van-calendar color="#BDE0FE" :show-mark="false" :show-title="false" :min-date="minDate" :max-date="maxDate" v-model="show" @confirm="onConfirm" :show-confirm="false" :formatter="formatter" position="right" />
		
		
		<div class="circleGraph">
			<div class="circleGraphItem">
				<div class="boxInsideBoxInside">
					
					<van-progress
					  :percentage=50
					  
					  stroke-width="8"
					  pivot-color="#A2D2FF"
					  pivot-text="20℃"
					  color="linear-gradient(to right, rgba(0,130,255, 1.0),rgba(162,210,255, 1.0))"
					/>
				</div>
				<div class="boxInsideBoxInside">
					<van-progress
					  :percentage=60
					  stroke-width="8"
					  pivot-color="#A2D2FF"
					  pivot-text="30%"
					  color="linear-gradient(to right, rgba(0,130,255, 1.0), rgba(162,210,255, 1.0))"
					/>
				</div>
				<div class="boxInsideBoxInside">
					<van-progress
					  :percentage=55
					  stroke-width="8"
					  pivot-color="#A2D2FF"
					  pivot-text="1.01Pa"
					  color="linear-gradient(to right, rgba(0,130,255, 1.0),rgba(162,210,255, 1.0))"
					/>
				</div>
			</div>
			<div class="circleGraphRight">
				<img src="../../assets/img/app/canlander1.png" alt="">
			</div>
			
		</div>
		<div class="forMoreMsg" @click="$router.push('/moreMsg')">
			详 细 数 据
		</div>
		<div class="graghTitleBox">
			<div class="graghTitleBoxText">
				<div class="graghTitleBoxTextLeft"></div>
				<div class="graghTitleBoxTextRight">
					今日睡眠评分
				</div>
			</div>
			<div class="graghTitleBoxText">
				<div class="graghTitleBoxTextLeft"></div>
				<div class="graghTitleBoxTextRight">
					今日翻身次数
				</div>
			</div>
		</div>
		
		<div class="box">
			<div class="boxInside">
				<div class="boxInsideBox">
					<div class="boxInsideBoxInsideGragh">
						<van-circle
						  v-model="currentRate"
						  :rate="rate"
						  :color="gradientColor"
						  text=""
						  size="120px"
						  :speed="100" 
						  :text="text"
						  :stroke-width="80"
						/>
					</div>
				</div>
				<div class="boxInsideBox1">
					
					<div class="boxInsideBoxInsideGragh">
						<van-circle
						  v-model="currentRate1"
						  :rate="rate1"
						  :color="gradientColor"
						  text=""
						  size="120px"
						  :speed="100" 
						  :text="text1"
						  :stroke-width="80"
						/>
					</div>
					
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import { PostMessage } from "./../../network/login.js"
import { getClient } from "./../../network/graghmsg.js"
export default {
  name: "Client",
  data(){
	return{
		year:'',
		month:'',
		day:'',
		
		currentRate: 0,
		rate:70,
		currentRate1: 0,
		rate1:70,
		gradientColor: {
		'0%': 'rgba(0,117,246, 1.0)',
		'100%': 'rgba(0,130,255, 1.0)',
		},
		userID:'',
		date: {},
		data:{},
		show: false,
		minDate: new Date(2020, 0, 11),//这个最小日期其实要求一个限制就是来自用户注册开始就会记录一个时间，中间那个数据指得是月份，从0开始
		maxDate: new Date(),
		//显示到下边的统计的时间
		ALLlightSleepTime:'',
		ALLdeepSleepTime:'',
		//图表上的时间
		
		circleGragh:'',
		
		circleGragh_option: {
			  title: {
				show: true,
				text:'',//666
				x: "center",
				y: "center",// 通过x,y将标题(进度)定位在圆环中心
				textStyle: {
				  fontSize: "45",
				  color: "#f8f8f8",
				  fontWeight: "500",
				  fontFamily: "Times New Roman",
				},
			  },
			  
			  series: {
				name: "",
				type: "pie",
				radius: ["65%", "80%"],
				avoidLabelOverlap: true,
				hoverAnimation: false,
				label: {
				  normal: {
					show: false,
					position: "center",
				  },
				  emphasis: {
					show: false,
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
					  color: "#f8f8f8",
					},
				  },
				  {
					value: '',
					name: "",
					itemStyle: {
					  color: "transparent",
					},
				  },
				],
			  },
		},
	}
  },
  computed: {
	text() {
		return this.currentRate.toFixed(0) + '分';
	},
	text1() {
		return this.currentRate.toFixed(0)/10 + '次';
	},
  },
  components: {
	NavBar,
  },
  // 2数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
  watch: {
  //观察circleGragh_option的变化
  	circleGragh_option: {
  		handler(newVal, oldVal) {
  		if (this.chart) {
  		if (newVal) {
  			this.circleGragh.setOption(newVal);
  		}
  		else {
  			this.circleGragh.setOption(oldVal);
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
  	this.getClientMsg()
  },
  mounted() {
	
  },
  methods:{
	//获取数据
	getClientMsg() {
		// this.data=JSON.parse(sessionStorage.getItem('chooseDate')) || ''
		
		this.userID=this.$route.params.userid
		
		
		getClient(this.userID).then(res => {
        if (res.data.status == 0) {
			this.userID = res.data.userID;
			
			this.$store.dispatch('setUserInfo',res.data.userID)
			
        } else {
          
        }
        });
		this.getTodayMsg()
	},
	//获取数据
	getTodayMsg() {
		this.userID=this.$store.getters.getUserInfo || ''
		this.year=this.$store.getters.getYearInfo || ''
		this.month=this.$store.getters.getMonthInfo || ''
		this.day=this.$store.getters.getDayInfo || ''
		
		if(this.year == null||this.month == null||this.day == null){
		
			PostMessage("/getSpecialDayData", {
			"userID":this.userID,
			"year":this.maxDate.getFullYear(),
			"month":this.maxDate.getMonth()+1,
			"day":this.maxDate.getDate(),
			}).then(res => {
				// 这是一个请求，但是我觉得这一个应该单独请求算了
				this.dataforson=res.data
				
			});
		}else{
		
			PostMessage("/getSpecialDayData", {
			"userID":this.userID,
			"year":this.year,
			"month":this.month,
			"day":this.day,
			}).then(res => {
				// 这是一个请求，但是我觉得这一个应该单独请求算了
				
				this.rate=res.data.healthScore
				this.rate1=res.data.sleepHours*10
			});
		}
	},
	formatDate(date) {
		var dateMonth=date.getMonth()+1
		var dateDay=date.getDate()
		if ((date.getMonth()+1).toString().length == 1) {
			dateMonth = "0" + (date.getMonth()+1);
			
		}
		if (date.getDate().toString().length == 1) {
			dateDay = "0" + date.getDate();
			
		}
		var dataValue = {
			year:date.getFullYear(),
		    month:dateMonth,
		    day:dateDay,
		}
	
		return dataValue
		// return `${date.getMonth() + 1}/${date.getDate()}`;
	},
	onConfirm(date) {
		
		this.show = false;
		//每次选择之后都会移除之前的日期
		// window.localStorage.removeItem("chooseDate");
		// sessionStorage.removeItem ("chooseDate")
		
		this.date = this.formatDate(date);
		this.$store.dispatch('setYearInfo',this.date.year)
		this.$store.dispatch('setMonthInfo',this.date.month)
		this.$store.dispatch('setDayInfo',this.date.day)
		//本地保存日期
		// window.localStorage.setItem("chooseDate", JSON.stringify(this.date));
		// sessionStorage.setItem('chooseDate', JSON.stringify(this.date))
		
		this.getClientMsg()
	},
	formatter(day) {
		const month = day.date.getMonth() + 1;
		const date = day.date.getDate();

		if (month === 5) {
			if (date === 1) {
				day.topInfo = '劳动节';
			} else if (date === 4) {
				day.topInfo = '青年节';
			} else if (date === 11) {
				day.text = '今天';
			}
		}

		

		return day;
	},
  }
};
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.client{
	background: rgb(189,224,254);
	height: 100%;
	width: 100%;
	font-family:"Times New Roman", Times, serif;
}
.clientNav{
	position: relative;
	
}
.leftIcon{
	position: absolute;
	top: 62%;
	left: 25px;
	transform: translate(-50%,-50%);
	
}
.rightIcon{
	position: absolute;
	top: 62%;
	right: 25px;
	transform: translate(50%,-50%);
	
}
.circleGraph{
	height: calc(100vh - 320px);
	width: 100%;
	position: relative;
	display: flex;
}
.circleGraphItem{
	width: 50%;
	height: 100%;
	padding: 10% 5%;
	/* border-radius:10px; */
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: center;
}
.circleGraphRight{
	position: absolute;
	right: 0px;
	top: 20px;
	transform: translateX(-30%);
	
}
.circleGraphRight img{
	height:calc(calc(100vh - 320px) * 0.75);
	width: auto;
}

.circleGraphInside{
	margin-top: 50px;
	margin-bottom: 30px;
	width: 280px;
	height: 280px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	
}
.forMoreMsg{
	position: relative;
	width: 80%;
	height: 50px;
	margin-left: 10%;
	background: rgba(0,130,255, 1.0) ;
	border-radius: 10px;
	display: flex;
	justify-content:center ;
	align-items: center;
	font-size: 22px;
	font-weight: 600;
	color: rgb(244, 244, 244);
}

.box{
	display: flex;
	height: 160px;
	width: 100%;
	
}
.boxInside{
	width: 80%;
	height: 100%;
	margin-left: 10%;
	display: flex;
}

.boxInsideBox{

	width: 50%;
	height: 100%;

	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.boxInsideBox1{

	width: 50%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: flex-start;
}

.boxInsideBoxInside{
	width: 150px;
	height: 60px;
	position: relative;
	
}

.boxInsideBoxInsideGragh{
	height: 120px;
	width: 120px;
}
.graghTitleBox{
	width: 80%;
	height: 60px;
	display: flex;
	margin-left: 10%;
}
.graghTitleBoxText{
	width: 50%;
	position: relative;
	height: 60px;
	width: 150px;
	
	color: rgb(6,65,111);
	
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
}

.graghTitleBoxTextLeft{
	height: 16px;
	width: 4px;
	background-color:rgb(6,65,111);
	margin-right: 8px;

	border-radius: 2px;
}
.graghTitleBoxTextRight{
	height: 20px;
	line-height: 20px;
	font-size: 14px;
	font-weight: 700;
}




</style>
