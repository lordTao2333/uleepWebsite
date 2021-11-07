<template>
	<div class="video">
		<div class="videoBox">
			<!-- <div class="videoBoxTopHolder"></div> -->
			<div class="videoTopPic">
				<img src="../../../assets/img/app/suArrow.png" alt="">
			</div>
			<div class="videoBoxTop">
				<div class="videoBoxTopLeft"></div>
				<div class="vBoxTopRight">{{videoMsg[curIndex].bigText}}</div>
				
			</div>
			<div class="videoBoxMiddle">
				<div class="videoBoxMiddleBox">
					<iframe class="middleIframe"
					:src="videoMsg[curIndex].src"
					scrolling="no" border="0" frameborder="no" 
					framespacing="0" allowfullscreen="true"> 
					</iframe>
				</div>
				
			</div>
			<div class="videoBoxBottom">
				<div class="videoBoxBottomText">
					<p>
						{{videoMsg[curIndex].smallText}}
					</p>
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>

export default{
  name: 'Video',
  components:{
	
	
  },
  data(){//组件对象
	  return {
		videoIndex:1,
		curIndex:0,
		
		videoMsg:[
			{
				bigText:"助眠冥想",
				smallText:"静静地躺在床上，闭上眼睛，放松身体的各个部位，每一个关节，每一块肌肉，听着自己的呼吸声，心无杂念。",
				src:"//player.bilibili.com/player.html?aid=541271127&bvid=BV1pi4y1V7hj&cid=212460240&page=1",
			},
			{
				bigText:"放松运动",
				smallText:"由于运动会避免体温节律曲线的扁平化，在放松运动带来体温提升之后安定下来，这时体温就会下降，人便会感到困倦而快速进入睡眠。",
				src:"//player.bilibili.com/player.html?aid=25630224&bvid=BV1Ts411j7y7&cid=43694455&page=1",
			},
			{
				bigText:"白噪音",
				smallText:"白噪音可改善环境噪音导致的睡眠结构紊乱，明显降低夜间的觉醒水平，一定程度可帮助人们快速入睡，使得浅睡眠减少，而深睡眠增加。",
				src:"//player.bilibili.com/player.html?aid=28751316&bvid=BV1qs411g7ic&cid=49798365&page=1",
				
			},
			{
				bigText:"睡前运动",
				smallText:"睡前活动身体的作用能在睡眠全过程中得到维持，尤其是做一些加深呼吸的运动，此类运动能使人体整个系统充氧，从而快速消除白天的疲劳。",
				src:"//player.bilibili.com/player.html?aid=52737795&bvid=BV1e441177PP&cid=92290747&page=1",
				
			},
			
		],
	  }
	  
  },
  created() {
	this.getVideo()
	
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
	getVideo() {
		this.videoIndex=this.$route.params.videoIndex
		if(this.videoIndex==1){
			this.curIndex=0
		}
		else if(this.videoIndex==2){
			this.curIndex=1
		}
		else if(this.videoIndex==10){
			this.curIndex=2
		}
		else if(this.videoIndex==12){
			this.curIndex=3
		}
	},
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.video{
	width: 100vw;
	height: 100vh;
	
	

	position: relative;
	background-color: rgb(254, 254, 254);
}
.videoBox{
	width: 100vw;

}
.videoBoxTopHolder{
	height: calc(calc(100vh * 0.5) - calc(calc( calc(94vw * 72) / 128) + 45px));
	width: 100vw;
}
.videoTopPic{
	height: calc(100vh * 0.05);
	width: 100%;
	position: relative;
}
.videoTopPic img{
	position: absolute;
	left: 50%;
	top: 70%;
	transform: translateX(-50%);
	height:  calc(100vh * 0.05);
	width: 100px;
}

.videoBoxTop{
	width: 100vw;
	position: relative;
	height: calc(100vh * 0.1);
	font-size: 17px;
	color: rgb(109,113,116);
	
	font-weight: 600;
	
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
	
}
.videoBoxTopLeft{
	height: 20px;
	width: 3px;
	background-color:rgba(162,210,255, 1.0);
	margin-right: 8px;
	border-radius: 2px;
}
.videoBoxTopRight{
	height: 20px;
	line-height: 20px;
}
/* 不能用绝对定位这个地方 */
.videoBoxMiddle{
	width: 100vw;
	position: relative;
	height:calc(calc( calc(100vw * 72) / 128) + 30px);
	background: linear-gradient(110deg, rgba(222,239,255, 1.0) 70%,rgba(255,223,226, 1.0));
	border-radius: 10px;
}
.videoBoxMiddleBox{
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 94vw;
	position: absolute;
	height:calc( calc(100vw * 72) / 128);
	
}
.middleIframe{
	
	position: absolute;
	left: 0;
	top: 0;
	height:calc( calc(100vw * 72) / 128);
	width: 100%;
}
.videoBoxBottom{
	width: 100vw;
	height: calc(100vh * 0.25);
	position: relative;
	margin-top: 此类运动能使人体整个系统充氧，从而消除白天疲劳的速度会大大加快15px;
	
	font-size: 17px;
	color: rgb(109,113,116);
	
}
.videoBoxBottomText{
	
	width: 100%;
	padding: 5% 10% 8% 10%;
	border-radius: 10px;
	background: linear-gradient(110deg, rgba(222,239,255, 1.0) 70%,rgba(255,223,226, 1.0));
}
.videoBoxBottomText p {
	
	line-height: 28px;
	text-align: center;
}
/* .videoBoxPic{
	width: 94vw;
	height: calc(calc(100vh * 0.65) - calc( calc(94vw * 72) / 128));
	position: relative;
}
.videoBoxPic img{
	max-height:  calc(calc(calc(100vh * 0.65) - calc( calc(94vw * 72) / 128)) * 0.8);
	width: auto;
	position: absolute;
	bottom: 0;
	transform: translateY(-100%);
} */
</style>
