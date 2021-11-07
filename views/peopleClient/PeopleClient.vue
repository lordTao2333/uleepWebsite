<template>
	<div class="client">
		<PeopleNavBar class="clientNav" >
			<div slot="left" class="leftIcon">
				<!-- <van-icon name="arrow-left" size="22px"/> -->
				</div>
			<div slot="center" >日 期 选 择</div>
			<div slot="right" @click="show = true" class="rightIcon"><van-icon name="tosend" size="26px" color="#cccccc"/></div>
		</PeopleNavBar>
		
		<van-calendar color="#BDE0FE" :show-mark="false" :show-title="false" :default-date="defaultDate" :min-date="minDate" :max-date="maxDate" v-model="show" @confirm="onConfirm" :show-confirm="false" :formatter="formatter" position="right" />
		
		
		<div class="circleGraph">
			<div id="quality">
				
			</div>
			<div class="circleGraphLegend">
				<div class="circleGraphLegendItem">
					<div class="circleGraphLegendItemLabel0"></div>
					<div class="circleGraphLegendItemText">深度睡眠</div>
				</div>
				<div class="circleGraphLegendItem">
					<div class="circleGraphLegendItemLabel1"></div>
					<div class="circleGraphLegendItemText">浅睡眠</div>
				</div>
				<div class="circleGraphLegendItem">
					<div class="circleGraphLegendItemLabel2"></div>
					<div class="circleGraphLegendItemText">清醒</div>
				</div>
			</div>
			<div class="circleGraphSmallBox">
				<div class="circleGraphSmallBoxItem">
					<div class="circleGraphSmallBoxItemTop">
						睡眠<strong>总</strong>时长：
					</div>
					<div class="circleGraphSmallBoxItemBottom">
						<div class="circleGraphSmallBoxItemBottomLeft">
							{{allTime}}
						</div>
						<div class="circleGraphSmallBoxItemBottomRight">
							小时
						</div>
						
					</div>
					
				</div>
				<div class="Middle"></div>
				<div class="circleGraphSmallBoxItem">
					<div class="circleGraphSmallBoxItemTop">
						<strong>深度</strong>睡眠时长：
					</div>
					<div class="circleGraphSmallBoxItemBottom">
						<div class="circleGraphSmallBoxItemBottomLeft">
							{{deepTime}}
						</div>
						<div class="circleGraphSmallBoxItemBottomRight">
							小时
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
		
		<div class="graghTitleBox">
			<div class="graghTitleBoxText">
				<div class="graghTitleBoxTextLeft"></div>
				<div class="graghTitleBoxTextRight">
					打鼾次数
				</div>
			</div>
			<div class="graghTitleBoxText">
				<div class="graghTitleBoxTextLeft"></div>
				<div class="graghTitleBoxTextRight">
					翻身次数
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
				<div class="boxMiddle"></div>
				<div class="boxInsideBox">
					
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
		<div class="forMoreMsg">
			<div class="forMoreMsgText" @click="goPeopleQuestion()">
				评 分 反 馈
			</div>
		</div>
	</div>
</template>

<script>

import PeopleNavBar from "@/components/common/peopleNavBar/PeopleNavBar";
import { PostMessage } from "./../../network/login.js"
import { getClient } from "./../../network/graghmsg.js"
export default {
  name: "PeopleClient",
  data(){
	return{
		deepTime:2,
		allTime:8,
		year:'',
		month:'',
		day:'',
		
		currentRate: 0,
		rate:70,
		currentRate1: 0,
		rate1:70,
		gradientColor: {
		'0%': 'rgba(170, 170, 255, 0.6)',
		'100%': 'rgba(170, 170, 255, 1)',
		},
		userID:'',
		date: {},
		data:{},
		show: false,
		minDate: new Date(2020, 0, 11),//这个最小日期其实要求一个限制就是来自用户注册开始就会记录一个时间，中间那个数据指得是月份，从0开始
		maxDate: new Date(),
		defaultDate: new Date(2021, 0, 1),
		//显示到下边的统计的时间
		ALLlightSleepTime:'',
		ALLdeepSleepTime:'',
		//图表上的时间
		quality:'',
		circleGragh:'',
		quality_option: {
			
			series: [{
				barWidth: '100%',
				itemStyle:{
					color:function(params){
						if(params.value >= 200){
							return 'rgba(170, 0, 255, 0.7)'
						}
						else if(params.value >= 120){
							return 'rgba(170, 85, 255, 0.7)'
						}
						else{
							return 'rgba(170, 170, 255, 0.7)'
						}
						
					},
					
				},
				data: [100, 110, 120, 110, 120, 130, 150, 190, 200, 220, 200, 180, 200,230,200, 185, 200, 225, 200, 180,160, 145, 135, 130, 105, 100],
						
				type: 'bar'
			}],
			tooltip: {
				// background:'rgb(0,130,255)',
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				},
				label: {
				    backgroundColor: 'rgba(0,130,255, 0.6)'
				}
			},
			toolbox: {
				bottom: "0%",
				show: true,
				feature: {
					saveAsImage: {}
				}
			},
			grid: {
				top:0,
			    left: 2,
			    right: 2,
			    bottom: 0,
			    // containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00', '00:30', '01:00', '01:30', '02:00','02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30','07:00', '07:30', '08:00','08:30', '09:00', '09:30']
			},
			yAxis: {
				min:null,
				max:null,
				show:false,
				type: 'value',
				axisLabel: {
					formatter: '{value} W'
				},
				axisPointer: {
					snap: true
				}
			},
			
			
		},
		
	}
  },
  computed: {
	text() {
		return this.currentRate.toFixed(0)/10 + '次';
	},
	text1() {
		return this.currentRate1.toFixed(0)/10 + '次';
	},
  },
  components: {
	PeopleNavBar,
  },
  // 2数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
  watch: {
  //观察quality_option的变化
  	quality_option: {
  		handler(newVal, oldVal) {
  		if (this.chart) {
  		if (newVal) {
  			this.quality.setOption(newVal);
  		}
  		else {
  			this.quality.setOption(oldVal);
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
	this.init()
  },
  methods:{
	goPeopleQuestion(){
		setTimeout(() => {
			this.$router.push('/peopleQuestion')
		},400)
		
	},
	init(){


		// 基于准备好的dom，初始化echarts实例
		this.quality = this.$echarts.init(document.getElementById('quality'))
		// 绘制图表，this.HeartChart_option是数据
		this.quality.setOption(this.quality_option,true)
	},
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
			"year":this.defaultDate.getFullYear(),
			"month":this.defaultDate.getMonth()+1,
			"day":this.defaultDate.getDate(),
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

<style>
*{
	margin: 0;
	padding: 0;
}
.van-circle__text{
	color: rgb(255, 255, 255);
}
.client{
	background: linear-gradient(rgba(18,27,60, 1.0) ,rgba(44,115,167, 1.0));
	height: 100vh;
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
	cursor: pointer;
}
.circleGraph{
	height: calc(100vh - 325px);
	min-height: 280px;
	
	width: 100%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
}
#quality{
	height: calc(100vh - 465px);
	min-height: 200px;
	width: 100%;
}
.circleGraphLegend{
	height: 40px;
	width: 94%;
	display: flex;
	
	justify-content: space-between;
}
.circleGraphLegendItem{
	width: 30%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.circleGraphLegendItemLabel0{
	height: 12px;
	width: 16px;
	border-radius: 4px;
	background-color: rgba(170, 0, 255, 0.8);
	margin-right: 8px;
}
.circleGraphLegendItemLabel1{
	height: 12px;
	width: 16px;
	border-radius: 4px;
	background-color: rgba(170, 85, 255, 0.8);
	margin-right: 8px;
}
.circleGraphLegendItemLabel2{
	height: 12px;
	width: 16px;
	border-radius: 4px;
	background-color: rgba(170, 170, 255, 0.8);
	margin-right: 8px;
}
.circleGraphLegendItemText{
	font-size: 14px;
	color: rgb(204, 204, 204);
}
.circleGraphSmallBox{
	position: relative;
	height: 80px;
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-color: rgba(170, 170, 255, 0.2);
}
.circleGraphSmallBoxItem{
	width: calc(calc(94vw - 3px) * 0.5);
	height: 80px;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	border-radius: 10px;
	
}
.Middle{
	width: 3px;
	height: 60%;
	border-radius: 3px;
	display: flex;
	align-self: center;

	background-color: rgb(231, 231, 231);
}
.circleGraphSmallBoxItemTop{
	width: 100%;
	height: 24px;
	text-align: left;
	line-height: 24px;
	color: rgb(204, 204, 204);
	font-size: 18px;
	padding-left: 16px;
}
.circleGraphSmallBoxItemBottom{
	width: 100%;
	height: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	
}
.circleGraphSmallBoxItemBottomLeft{
	width: 40%;
	min-width: 60px;
	height: 40px;
	text-align: center;
	font-size:40px;
	line-height: 40px;
	color: rgb(204, 204, 204);
	font-weight: 600;
}
.circleGraphSmallBoxItemBottomRight{
	display: flex;
	text-align: right;
	align-self: flex-end;
	font-size: 16px;
	padding-bottom: 6px;
	color: rgb(204, 204, 204);
}
.forMoreMsg{
	width: 100%;
	height: 65px;

	background:  rgba(170, 170, 255, 0.2) ;
	display: flex;
	justify-content:center ;
	/* align-items: center; */
	padding-top: 10px;
}
.forMoreMsgText{
	width: 94%;
	height: 40px;
	
	background:  rgba(170, 170, 255, 0.6) ;
	border-radius: 10px;
	display: flex;
	justify-content:center ;
	align-items: center;
	font-size: 22px;
	font-weight: 600;
	color: rgb(239, 239, 239);
	cursor: pointer;
}
.forMoreMsgText:active{
	background:  rgba(170, 170, 255, 0.9) ;
}

.box{
	display: flex;
	height: 140px;
	width: 100%;
	background:  rgba(170, 170, 255, 0.2) ;
	margin-bottom: 10px;
}
.boxInside{
	width: 94%;
	height: 100%;
	margin-left: 3%;
	display: flex;
	justify-content: center;
}
.boxMiddle{
	width: 3px;
	height: 80%;
	border-radius: 3px;
	display: flex;
	align-self: flex-start;
	
	background-color: rgb(231, 231, 231);
}
.boxInsideBox{
	width: 48%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-content: flex-start;
}
.boxInsideBoxInsideGragh{
	height: 120px;
	width: 120px;
}

.graghTitleBox{
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	background:  rgba(170, 170, 255, 0.2) ;
}
.graghTitleBoxText{
	width: 46%;
	position: relative;
	height: 60px;
	color: rgb(204, 204, 204);
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
}

.graghTitleBoxTextLeft{
	
	height: 8px;
	width: 8px;
	background-color:rgb(231, 231, 231);
	margin-left: 16px;
	margin-right: 8px;

	border-radius: 2px;
}
.graghTitleBoxTextRight{
	height: 20px;
	line-height: 20px;
	font-size: 16px;
	font-weight: 700;
}




</style>
