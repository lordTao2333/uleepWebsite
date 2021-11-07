<template>
	<div class="time">
		<div class="timeBox">
			<div class="timeBoxTop">
				<div class="timeBoxTopLeft"></div>
				<div class="timeBoxTopRight"></div>
				
			</div>
			<div class="timeBoxMiddle">
				<div class="middleIframe">
					 <FlipDown :endDate="finishTime" 
					@timeUp="commitExamTest"  
					 :type="3" :theme="2" 
					 :timeUnit="['时','分','秒']" 
					 class="flip-down" 
					 />

				</div>
				
			</div>
			<div class="timeBoxBottom">
				<div class="timeBoxBottomText">
					<p>
						
					</p>
				</div>
				
			</div>
			<!-- <div class="timeBoxPic">
				<img src="../../../assets/img/app/sleepMan.png" alt="">
			</div> -->
		</div>
	</div>
</template>

<script>
import FlipDown from 'vue-flip-down';
export default{
  name: 'Time',
  components:{
	FlipDown,
	
  },
  data(){//组件对象
	  return {
		  // 加个15分钟吧
		finishTime: Date.now()+900000,
		
	  }
	  
  },
  created() {
	
	
  },
 
 
  mounted() {

  },
  
  activated() {
	
  },
  deactivated() {
	
  },
  computed: {
	
    },
  methods:{
	commitExamTest(){
		this.$router.go(-1)
	}
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.time{
	width: 100vw;
	height: 100vh;
	
	background-color: rgba(0, 0, 0, 0.9);

	position: relative;
	
}
.timeBox{
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 94vw;
	height: 100vh;
	
	
}
.timeBoxTop{
	width: 94vw;
	position: relative;
	height: calc(100vh * 0.1);
	font-size: 17px;
	color: #ffffff;
	font-weight: 600;
	
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
	
}
.timeBoxTopLeft{
	height: 20px;
	width: 3px;
	background-color: #ffffff;
	margin-right: 8px;
	margin-left: 5px;
}
.timeBoxTopRight{
	height: 20px;
	line-height: 20px;
}
/* 不能用绝对定位这个地方 */
.timeBoxMiddle{
	width: 94vw;
	position: relative;
	height:calc( calc(94vw * 72) / 128);
}
.middleIframe{
	
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	
}
.vue-countdown-component .time-box{
	/* background-color: #000000; */
}
.flip-down{
	
}
.timeBoxBottom{
	width: 94vw;
	height: calc(100vh * 0.25);
	position: relative;
	padding-top: 20px;
	
	font-size: 17px;
	color: #ffffff;
}
.timeBoxBottomText{
	width: 80%;
	margin-left: 10%;
}
.timeBoxBottomText p {
	
	line-height: 25px;
	text-align: center;
}
.timeBoxPic{
	width: 94vw;
	height: calc(calc(100vh * 0.65) - calc( calc(94vw * 72) / 128));
	position: relative;
}
.timeBoxPic img{
	max-height:  calc(calc(calc(100vh * 0.65) - calc( calc(94vw * 72) / 128)) * 0.8);
	width: auto;
	position: absolute;
	bottom: 0;
	transform: translateY(-100%);
}
</style>
