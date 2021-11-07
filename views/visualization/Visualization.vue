<template>
	<div class="visualization">
		<div class="visualizationBox">
			<div class="visualizationBoxWidthHolder"></div>
			<div class="visualizationBoxLeft">
				<div class="visualizationBoxHeightHolder"></div>
				<div class="visualizationBoxLeftItem">
					<div class="visualizationBoxMiddleBottomTitleBox">
						<div class="visualizationBoxMiddleBottomTitleBoxLeft">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">心跳 (bpm)</div>
						</div>
						
					</div>
					<div class="visualizationBoxLeftItemGraghBox">
						<HeartChartAna :dataforson="dataforson"></HeartChartAna>
					</div>
				</div>
				<div class="visualizationBoxHeightHolder"></div>
				<div class="visualizationBoxLeftItem">
					<div class="visualizationBoxMiddleBottomTitleBox">
						<div class="visualizationBoxMiddleBottomTitleBoxLeft">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">血氧 (%)</div>
						</div>
						
					</div>
					<div class="visualizationBoxLeftItemGraghBox">
						<BloodChartAna :dataforson="dataforson"></BloodChartAna>
					</div>
				</div>
				<div class="visualizationBoxHeightHolder"></div>
				<div class="visualizationBoxLeftItem">
					<div class="visualizationBoxMiddleBottomTitleBox">
						<div class="visualizationBoxMiddleBottomTitleBoxLeft">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">体温 (℃)</div>
						</div>
						
					</div>
					<div class="visualizationBoxLeftItemGraghBox">
						<TempChartAna :dataforson="dataforson"></TempChartAna>
					</div>
				</div>
				<div class="visualizationBoxHeightHolder"></div>
			</div>
			<div class="visualizationBoxWidthHolder"></div>
			<div class="visualizationBoxMiddle">
				<div class="visualizationBoxHeightHolder"></div>
				<div class="visualizationBoxMiddleTop">
					<div class="visualizationBoxMiddleTopBoxTop">
						<div class="visualizationBoxMiddleTopBoxTopIcon">
							<div class="arrowLeft">
								<van-icon name="arrow-left" size="18"/>
							</div>
							
						</div>
						<div class="visualizationBoxMiddleTopBoxTopTextLeft">
							睡眠周期分析
						</div>
						<div class="visualizationBoxMiddleTopBoxTopTextRight">
							各项数据展示
						</div>
						<div class="visualizationBoxMiddleTopBoxTopIcon">
							<div class="arrowRight">
								<van-icon name="arrow" size="18"/>
							</div>
							
						</div>
					</div>
					<!-- 这个show-subtitle会导致出现bug 离谱 -->
					<van-calendar
						:row-height="hangshu"
						:min-date="minDate"
						:max-date="maxDate"
						:default-date="maxDate"
						:lazy-render="false"
						:show-mark="false"
						:show-title="false"
						:show-subtitle="true"
						:show-confirm="false"
						@confirm="onConfirm"
						color="#000000"
						:poppable="false"
						
					/>
				</div>
				<div class="visualizationBoxHeightHolder"></div>
				<div class="visualizationBoxMiddleBottom">
					<div class="visualizationBoxMiddleBottomTitleBox">
						<!-- <div class="visualizationBoxMiddleBottomTitleBoxZhanwei"></div> -->
						<div class="visualizationBoxMiddleBottomTitleBoxLeft">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">今日睡眠评分</div>
						</div>
						<div class="visualizationBoxMiddleBottomTitleBoxRight">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">历史睡眠评分</div>
						</div>
					</div>
					<div class="visualizationBoxMiddleBottomGraghBox">
						<div class="visualizationBoxMiddleBottomGraghBoxLeft">
							<TodayScore :dataforson="dataforson"></TodayScore>
						</div>
						<div class="visualizationBoxMiddleBottomGraghBoxRight">
							<HistoryScore :dataforsonhistory="dataforsonhistory"></HistoryScore>
						</div>
					</div>
					<div class="visualizationBoxMiddleBottomTitleBox">
						<!-- <div class="visualizationBoxMiddleBottomTitleBoxZhanwei"></div> -->
						<div class="visualizationBoxMiddleBottomTitleBoxLeft">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">今日翻身次数</div>
						</div>
						<div class="visualizationBoxMiddleBottomTitleBoxRight">
							<div class="visualizationBoxMiddleBottomTitleBoxIcon">
								<img src="../../assets/img/visual/redDot.png" alt="">
							</div>
							<div class="visualizationBoxMiddleBottomTitleBoxText">历史翻身次数</div>
						</div>
					</div>
					<div class="visualizationBoxMiddleBottomGraghBox">
						<div class="visualizationBoxMiddleBottomGraghBoxLeft">
							<TodayHours :dataforson="dataforson"></TodayHours>
						</div>
						<div class="visualizationBoxMiddleBottomGraghBoxRight">
							<HistoryHours :dataforsonhistory="dataforsonhistory"></HistoryHours>
							
						</div>
					</div>
				</div>
				<div class="visualizationBoxHeightHolder"></div>
			</div>
			<div class="visualizationBoxWidthHolder"></div>
			<div class="visualizationBoxRight">
				<div class="visualizationBoxHeightHolder"></div>
				<div class="visualizationBoxRightBox">
					<VisualMoreMsg :date="date"></VisualMoreMsg>
				</div>
				<div class="visualizationBoxHeightHolder"></div>
			</div>
			<div class="visualizationBoxWidthHolder"></div>
		</div>
		
	</div>
</template>

<script>
	import VisualMoreMsg from "./childComponents/VisualMoreMsg.vue"; 
	import BloodChartAna from "./childComponents/BloodChartAna.vue"
	import HeartChartAna from "./childComponents/HeartChartAna.vue"
	import TempChartAna from "./childComponents/TempChartAna.vue"
	
	import TodayHours from "./childComponents/TodayHours.vue"
	import TodayScore from "./childComponents/TodayScore.vue"
	import HistoryHours from "./childComponents/HistoryHours.vue"
	import HistoryScore from "./childComponents/HistoryScore.vue"
	

	import { PostMessage } from "./../../network/login.js"
	export default {
		name: "Visualization",
		components: {
			VisualMoreMsg,

			BloodChartAna,
			HeartChartAna,
			TempChartAna,
			TodayHours,
			TodayScore,
			HistoryHours,
			HistoryScore,
		},
		data(){
			return{
				// isPad:4,
				hangshu:29,
				minDate: new Date(2020, 0, 11),//这个最小日期其实要求一个限制就是来自用户注册开始就会记录一个时间，中间那个数据指得是月份，从0开始
				maxDate: new Date(),
				date: {},
				data:{
					month:null,
					day:null,
				},
				dataforson:{},
				
				dataforsonhistory:{
					
				},
			}
		},
		methods: {
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
		    	
		    },
			// select(date){
			// 	//每次选择之后都会移除之前的日期
			// 	window.localStorage.removeItem("chooseDate");
			// 	this.date = this.formatDate(date);
			// 	//本地保存日期
			// 	window.localStorage.setItem("chooseDate", JSON.stringify(this.date));
				
			// 	this.getGraghMsg()
			// 	this.getHistoryMsg()
			// },
		    onConfirm(date) {

			  //每次选择之后都会移除之前的日期
			  window.localStorage.removeItem("chooseDate");
			  this.date = this.formatDate(date);
			  //本地保存日期
			  window.localStorage.setItem("chooseDate", JSON.stringify(this.date));

			  this.getGraghMsg()
			  this.getHistoryMsg()
		    },
			//获取数据
			getGraghMsg() {
				this.data=JSON.parse(window.localStorage.getItem("chooseDate"))
				// 如果还没有选择日期应该怎么办呢
				
				if(this.data == null){
					
					this.userID=window.localStorage.getItem("userID")
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
					this.userID=window.localStorage.getItem("userID")
					
					PostMessage("/getSpecialDayData", {
					"userID":this.userID,
					"year":this.data.year,
					"month":this.data.month,
					"day":this.data.day,
					}).then(res => {
						// 这是一个请求，但是我觉得这一个应该单独请求算了
						this.dataforson=res.data
					});
				}
			},
			//获取数据
			getHistoryMsg() {
				console.log('访问所有数据')
				this.userID=window.localStorage.getItem("userID")
				
				PostMessage("/getAllDayData", {
				"userID":this.userID,
				}).then(res => {
					this.dataforsonhistory = res.data
					console.log(res.data)
					// 以下是花了三个小时写的一堆垃圾 关于对象的映射不熟悉导致的问题
					// // 这是一个请求，但是我觉得这一个应该单独请求算了
					// var maxNumSleepHours=res.data.maxNumSleepHours
					// var minNumSleepHours=res.data.minNumSleepHours
					// var maxNumHealthScore=res.data.maxNumHealthScore
					// var minNumHealthScore=res.data.minNumHealthScore
					// console.log(maxNumSleepHours)
					// this.dataforsonhistory.maxNumSleepHours=maxNumSleepHours
					// this.dataforsonhistory.minNumSleepHours=minNumSleepHours
					// this.dataforsonhistory.maxNumHealthScore=maxNumHealthScore
					// this.dataforsonhistory.minNumHealthScore=minNumHealthScore
					// console.log(this.dataforsonhistory)
					// // 在这个地方给数据给一个延时函数
					// var smalltime=3000/res.data.dateOfDay.length
					// smalltime= parseFloat(smalltime.toFixed(1))
					
					// this.dataforsonhistory.dateOfDay.push(res.data.dateOfDay[0])
					// this.dataforsonhistory.healthScore.push(res.data.healthScore[0])
					// this.dataforsonhistory.sleepHours.push(res.data.sleepHours[0])
					// //延时函数主体
					// var pushTimes = 0
					// var history = setInterval(() => {
					// 	// 问题出在这三部
					// 	this.dataforsonhistory.dateOfDay.push(res.data.dateOfDay[pushTimes+1])
					// 	this.dataforsonhistory.healthScore.push(res.data.healthScore[pushTimes+1])
					// 	this.dataforsonhistory.sleepHours.push(res.data.sleepHours[pushTimes+1])
					// 	pushTimes=pushTimes+1
						
					// 	if(pushTimes >= res.data.dateOfDay.length - 1){
							
					// 	    clearInterval(history);
					// 	}
					// },smalltime);
				});
			},
			
		},
		mounted () {
			if (document.documentElement.clientWidth < 1050 && document.documentElement.clientWidth > 1000) {
				
				this.hangshu=32
			}
			
		
		},
		created() {
			console.log('开始访问数据')
			this.getGraghMsg()
			this.getHistoryMsg()
			
		},
	}
</script>

<style>
	
	.van-calendar__day{
		font-size: 14px;
	}
	.van-calendar__weekdays{
		padding-left: 20px;
		padding-right: 20px;
	}
	.van-calendar__month{
		padding-left: 20px;
		padding-right: 20px;
	}
	.van-calendar__selected-day{
		height: 30px;
		width: 30px;
		border-radius: 30px;
	}
	.van-calendar__header{
		
		box-shadow: none;
		
	}
	.van-calendar__header-subtitle{
		background-color: rgb(246,246,244);
		border-top: #e7e7e7 1px solid;
		border-bottom: #e7e7e7 1px solid;
		/* bug就出在这个高度上 不能对这个高度进行限制就尼玛离谱 其实并不是这个地方的问题 问题是出现在他妈的row-height和整个高度不匹配上*/
		height: 37px;
		line-height: 37px;
	}
	.van-calendar__body{
		overflow-y: scroll;
		border-bottom: #e7e7e7 1px solid;
	}
	::-webkit-scrollbar {
	 width: 0 !important;
	}
	::-webkit-scrollbar {
	 width: 0 !important;height: 0;
	}
	.visualization{
		overflow: auto;
		position: relative;
		background-color: rgb(0, 0, 0);
		padding-top: 85px;
	}
	.visualizationBox{
		width: 100%;
		height: calc(100vh - 85px);
		background-color:#f4f4f4;
		display: flex;
	}
	.visualizationBoxWidthHolder{
		width: 1.1%;
		height: calc(100vh - 85px);
	}
	.visualizationBoxHeightHolder{
		height:calc(calc(100vh - 85px) * 0.027) ;
	}
	.visualizationBoxLeft{
		height: calc(100vh - 85px);
		width: 29.3%;
	}
	.visualizationBoxLeftItem{
		font-family:"Times New Roman", Times, serif;
		height: calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.108)) / 3);
		width: 100%;
		background-color: #FFFFFF;
		padding: 0px 20px 20px 12px;
		box-shadow: 0px 2px 5px #dddddd;
		border-radius: 8px;
	}
	
	.visualizationBoxLeftItemGraghBox{
		height:  calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.108)) / 3) - 60px) ;
		width: 100%;
	}
	.visualizationBoxMiddle{
		height: calc(100vh - 85px);
		width: 37%;
		
	}
	.visualizationBoxMiddleTop{
		height: calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.44);
		width: 100%;
		background-color: #FFFFFF;
		padding: 10px 12px;
		box-shadow: 0px 2px 5px #dddddd;
		border-radius: 8px;
	}
	.visualizationBoxMiddleTopBoxTop{
		height:28px  ;
		width: 100%;
		display: flex;
		padding-bottom: 5px;
	}
	.visualizationBoxMiddleTopBoxTopIcon{
		height:23px;
		width: 5%;
		position: relative;
	}
	
	.arrowLeft{
		position: absolute;
		top: 56%;
		left:0px;
		transform: translateY(-50%);
	}
	.arrowRight{
		position: absolute;
		top: 56%;
		right: 0;
		transform: translateY(-50%);
	}
	.visualizationBoxMiddleTopBoxTopTextLeft{
		height: 23px;
		line-height:23px;
		width: 45%;
		text-align: left;
		font-size: 13px;
		color: #000000;
	}
	.visualizationBoxMiddleTopBoxTopTextRight{
		height:23px ;
		line-height:23px;
		width: 45%;
		text-align: right;
		font-size: 13px;
		color: #000000;
	}
	.van-calendar{
		height: calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.44) - 48px);
	}
	.visualizationBoxMiddleBottom{
		height: calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56);
		width: 100%;
		background-color: #FFFFFF;
		padding: 0px 12px 20px 12px;
		box-shadow: 0px 2px 5px #dddddd;
		border-radius: 8px;
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
	.visualizationBoxMiddleBottomGraghBox{
		width: 100%;
		height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
		display: flex;
	}
	.visualizationBoxMiddleBottomGraghBoxLeft{
		width: 35%;
		height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
		font-family:"Times New Roman", Times, serif;
	}
	.visualizationBoxMiddleBottomGraghBoxRight{
		width: 65%;
		height: calc(calc(calc(calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.081)) * 0.56) - 100px) / 2);
		font-family:"Times New Roman", Times, serif;
	}
	.visualizationBoxRight{
		height: calc(100vh - 85px);
		width: 29.3%;
	}
	.visualizationBoxRightBox{
		height:calc(calc(100vh - 85px) - calc(calc(100vh - 85px) * 0.054));
		width: 100%;
		background-color: #FFFFFF;
		box-shadow: 0px 2px 5px #dddddd;
		border-radius: 8px;
	}
	
</style>
