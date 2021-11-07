<template>
	<div class="footerInfo">
		<div class="areaForFlex">
			<div class="widThreeeBlocks">
				<div class="firstBlock">
					<div class="firstBlockPic">
						<img src="../../../assets/img/newWeb/usleepRedpreview.png" alt="">
					</div>
					<div class="firstBlockText" v-if="isNotPad">
						
					</div>
					<div class="firstBlockText">
						<p><van-icon name="location-o" size="20px" v-if="isNotPad"/><strong>&nbsp;&nbsp;LOCATION：&nbsp;</strong>北京市海淀区中央民族大学</p>
						
					</div>
					<div class="firstBlockText">
						<p><van-icon name="phone-o" size="20px" v-if="isNotPad"/><strong>&nbsp;&nbsp;PHONE：&nbsp;</strong> 18810898683</p>
					</div>
					<div class="firstBlockText">
						<p><van-icon name="envelop-o" size="20px" v-if="isNotPad"/><strong>&nbsp;&nbsp;EMAIL：&nbsp;</strong> 3197571872@qq.com</p>
					</div>
					<div class="firstBlockSpecialText">
						<strong>CONNECT WITH US</strong>
					</div>
					<div class="firstBlockIcon">
						
						<div class="firstBlockIconPic">
							<a class="social weixin" href="javascript:">
								<img class="qrcode" src="../../../assets/img/newWeb/wechaterweima.jpg" alt="微信二维码">
								<img src="../../../assets/img/newWeb/newIcons/wechat.png" alt="">
							</a>
						</div>
						<div class="firstBlockIconPic">
							<a class="social weixin" href="javascript:">
								<img class="qrcode" src="../../../assets/img/newWeb/qqerweima.jpg" alt="QQ二维码">
								<img src="../../../assets/img/newWeb/newIcons/qq.png" alt="">
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="widThreeeBlocks">
				<div class="secondBlock">
					<div class="secondBlockBigText">
						<strong>ABOUT USLEEP</strong>
					</div>
					<div class="secondBlockText" @click="openJourney()">
						<strong v-if="isNotPad">&nbsp;&nbsp;HISTORY&nbsp;</strong> - 孵化历程 -
					</div>
					<div class="secondBlockText" @click="openTeamInfo()">
						<strong v-if="isNotPad">&nbsp;&nbsp;RECORD&nbsp;</strong> - 团队信息 -
					</div>
					<div class="secondBlockText" @click="openThanks()">
						<strong v-if="isNotPad">&nbsp;&nbsp;GRATITUDE&nbsp;</strong> - 特别鸣谢 -
					</div>
				</div>
			</div>
			<div class="widThreeeBlocks">
				<div class="secondBlock">
					<div class="secondBlockBigText">
						<strong>IN PARTNERSHIP WITH</strong>
					</div>
					
					<div class="thirdBlockPic">
						<img src="../../../assets/img/newWeb/newIcons/MUC.png" alt="">
					</div>
					<div class="thirdBlockText" v-if="isNotPad">
						
					</div>
					<div class="firstBlockIcon">
						
						<div class="thirdBlockIconPic">
							<img src="../../../assets/img/newWeb/newIcons/aoge2.png" alt="">
							
						</div>
						<div class="thirdBlockIconPic">
							<img src="../../../assets/img/newWeb/newIcons/zw.png" alt="">
							
						</div>
						<!-- <div class="thirdBlockIconPic">
							<img src="../../../assets/img/newWeb/newIcons/wht.png" alt="">
							
						</div> -->
					</div>
				</div>
			</div>
		</div>
		
		<div class="buttomBlcoks">
			<div class="buttomBlcoksImg">
				<a  href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=a2c4g.11186623.J_9220772140.114.56c6e7c2i0kc8a">
					<img src="../../../assets/img/newWeb/newIcons/beianicon.png" alt="">
				</a>
			</div>
			<div class="buttomBlcoksText">
				京ICP备2020042246号
			</div>
			<div class="buttomBlcoksText">
				Web Designed By ττ
			</div>
				
				
			
		</div>
	</div>
</template>

<script>
	export default{
	  name: 'footerInfo',
	  data(){
	  	return{
			isNotPad:true,
			
	  	}
	  },
	  mounted () {
	  	if (document.documentElement.clientWidth < 1000) {
	  		this.isNotPad=false
			
	  	}
	  	
	  	
	  },
	  methods:{
		openJourney(){
			let routeUrl = this.$router.resolve({
			  name: "journey",
			});
			
			window.open(routeUrl.location.name, '_blank');
		},
		openTeamInfo(){
			let routeUrl = this.$router.resolve({
			  name: "teamInfo",
			});
			window.open(routeUrl.location.name, '_blank');
		},
		openThanks(){
			let routeUrl = this.$router.resolve({
			  name: "thanks",
			});
			window.open(routeUrl.location.name, '_blank');
		},
	  },
	}
</script>

<style scoped="scoped">
	.footerInfo{
		width: 100%;
		height: 640px;
		background-color: #403A3A;
		position: relative;
		
	}
	.areaForFlex{
		width: 100%;
		height: 550px;
		display: flex;
		
	}
	.widThreeeBlocks{
		flex: 1;
		width: 100%;
		height: 550px;
	}
	.firstBlock{
		padding: 25% 20% 0% 20%;
		display: flex;
		align-content: center;
		flex-wrap: wrap;
		/* flex-wrap: wrap; */
	}
	.firstBlockPic{
		width: 300px;
		height: auto;
		margin-bottom: 20px;
		position: relative;
	}
	.firstBlockPic img{
		position: absolute;
		top: 50%;
		width: 250px;
		left: 0;
		transform: translateY(-50%);
	}
	
	.firstBlockText{
		margin-bottom: 20px;
		width: 400px;
		height: 45px;
		color: #FFFFFF;
		font-size: 14px;
	}
	
	.firstBlockSpecialText{
		margin-bottom: 20px;
		width: 400px;
		height: 45px;
		color: #FFFFFF;
		font-size: 20px;
	}
	.firstBlockIcon{
		width: 400px;
		height: 45px;
		display: flex;
		justify-content: flex-start;
	}
	.firstBlockIconPic{
		width: 40px;
		margin-left: 5px;
		margin-right: 10px;
	}
	.firstBlockIconPic img{
		width: 40px;
		height: 40px;
		
	}
	.secondBlock{
		padding: 30% 20% 0% 20%;
		display: flex;
		align-content: center;
		flex-wrap: wrap;
	}
	.secondBlockBigText{
		margin-bottom: 40px;
		width: 400px;
		height: 45px;
		color: #FFFFFF;
		font-size: 22px;
	}
	.secondBlockText{
		margin-left: 5px;
		margin-bottom: 40px;
		width: 400px;
		height: 25px;
		color: #FFFFFF;
		font-size: 14px;
		cursor: pointer;
	}
	.thirdBlockPic{
		width: 300px;
		height: auto;
		padding-top: 40px;
		margin-bottom: 20px;
		position: relative;
	}
	.thirdBlockPic img{
		position: absolute;
		top: 50%;
		width: 250px;
		height: 120px;
		left: -10%;
		transform: translateY(-50%);
		cursor: pointer;
	}
	.thirdBlockText{
		margin-bottom: 10px;
		width: 400px;
		height: 25px;
		color: #FFFFFF;
		font-size: 14px;
		
	}
	.thirdBlockIconPic{
		width: 60px;
		height: 60px;
		margin-left: 5px;
		margin-right: 15px;
		
	}
	.thirdBlockIconPic img{
		width: 60px;
		height: 60px;
		border-radius:30px; 
		cursor: pointer;
	}
	.buttomBlcoks{
		width: 100%;
		height: 83px;
		text-align: center;
		font-size: 14px;
		color: #939393;
	}

	.buttomBlcoksImg{
		display: inline-block;
	}
	.buttomBlcoksImg img{
		width: 20px;
		height: 20px;
		vertical-align:middle;
	}
	.buttomBlcoksText{
		display: inline-block;
		padding-left: 15px;
	}
	.weixin {
		position: relative;
	}
	
	.weixin img.qrcode {
		position: absolute;
		z-index: 99;
		top: -200px;
		right: -120px;
		width: 10rem;
		max-width: none;
		height: 10rem;
		transform: scale(0);
		transform-origin: buttom middle;
		opacity: 0;
		border: 1px solid #000000;
		border-radius: 3px;
		
		transition: all 0.2s ease-in-out;
	
	}
	
	.weixin:hover img.qrcode {
		transform: scale(1);
		opacity: 1;
	}
	@media screen and (min-width: 1000px) and (max-width: 1250px) {
		.firstBlockPic{
			width: 250px;
			height: auto;
			margin-bottom: 20px;
			position: relative;
		}
		.firstBlockPic img{
			position: absolute;
			top: 50%;
			width: 200px;
			left: 0;
			transform: translateY(-50%);
		}
		
		.firstBlockText{
			margin-bottom: 20px;
			width: 300px;
			height: 45px;
			color: #FFFFFF;
			font-size: 14px;
		}
		
		.firstBlockSpecialText{
			margin-bottom: 20px;
			width: 300px;
			height: 45px;
			color: #FFFFFF;
			font-size: 20px;
		}
		.firstBlockIcon{
			width: 300px;
			height: 45px;
			display: flex;
			justify-content: flex-start;
		}
		
		
		.secondBlockBigText{
			margin-bottom: 40px;
			width: 300px;
			height: 45px;
			color: #FFFFFF;
			font-size: 22px;
		}
		.secondBlockText{
			margin-left: 5px;
			margin-bottom: 40px;
			width: 300px;
			height: 25px;
			color: #FFFFFF;
			font-size: 14px;
			cursor: pointer;
		}
		.thirdBlockPic{
			width: 250px;
			height: auto;
			padding-top: 40px;
			margin-bottom: 20px;
			position: relative;
		}
		.thirdBlockPic img{
			position: absolute;
			top: 50%;
			width: 220px;
			height: 120px;
			left: -10%;
			transform: translateY(-50%);
			cursor: pointer;
		}
		.thirdBlockText{
			margin-bottom: 10px;
			width: 300px;
			height: 25px;
			color: #FFFFFF;
			font-size: 14px;
			
		}
	}
	@media screen and (min-width: 700px) and (max-width: 1000px) {
		.footerInfo{
			width: 100%;
			height:300px;
			background-color: #403A3A;
			position: relative;
		}
		.areaForFlex{
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
		}
		.widThreeeBlocks{
			/* flex: 1; */
			width: 100%;
			height: auto;
		}
		.firstBlock{
			padding: 1%;
			display: flex;
			align-content: center;
			flex-wrap: wrap;
			
		}
		
		.firstBlockPic{
			width: 100%;
			height: 50px;
			margin-bottom: 0px;
			position: relative;
		}
		.firstBlockPic img{
			position: absolute;
			bottom: 0%;
			left:50%;
			width: 150px;
			
			transform: translate(-50%,-50%);
		}
		
		.firstBlockText{
			margin-bottom: 5px;
			width: 250px;
			height: 25px;
			line-height: 25px;
			color: #FFFFFF;
			font-size: 12px;
			margin: 0 auto;
		}
		/* .firstBlockText p{
			text-align: center;
		} */
		.firstBlockSpecialText{
			margin-top: 10px;
			margin-bottom: 10px;
			width: 150px;
			margin-left: 10%;
			height: 30px;
			line-height: 30px;
			color: #FFFFFF;
			font-size: 14px;
			/* margin: 0 auto; */
		}
		.firstBlockIcon{
			margin-top: 10px;
			width: 150px;
			height: 30px;
			display: flex;
			justify-content: flex-start;
		}
		.firstBlockIconPic{
			width: 30px;
			margin-left: 15px;
			margin-right: 20px;
		}
		.firstBlockIconPic img{
			width: 30px;
			height: 30px;
			
		}
		.secondBlock{
			padding: 1%;
			display: flex;
			align-content: center;
			flex-wrap: wrap;
		}
		.secondBlockBigText{
			padding-top: 20px;
			width: 200px;
			height: 35px;
			color: #FFFFFF;
			font-size: 17px;
			margin: 0 auto;
			text-align: center;
			
		}
		.secondBlockText{
			
			padding-top: 20px;
			width: 350px;
			height: 25px;
			color: #FFFFFF;
			font-size: 12px;
			line-height: 25px;
			cursor: pointer;
			margin: 0 auto;
			text-align: center;
		}
		/* 这个用那个东西控制一下这个内容 */
		.thirdBlockPic{
			width: 200px;
			height: 60px;
			position: relative;
			margin-bottom: 10px;
			margin-left: 10px;
		}
		.thirdBlockPic img{
			position: absolute;
			top: 50%;
			width: 125px;
			height: 60px;
			left: 50%;
			transform: translate(-50%,-50%);
			cursor: pointer;
		}
		
		.thirdBlockIconPic{
			margin-top: -5px;
			/* width: 200px; */
			height: 60px;
			/* margin-left: 5px; */
			margin-right: 15px;
			
		}
		.thirdBlockIconPic img{
			width: 50px;
			height: 50px;
			border-radius:25px; 
			cursor: pointer;
		}
		.buttomBlcoks{
			width: 100%;
			height: 22px;
			text-align: center;
			font-size: 12px;
			color: #939393;
		}
		
		.buttomBlcoksImg{
			display: inline-block;
		}
		.buttomBlcoksImg img{
			width: 15px;
			height: 15px;
			vertical-align:middle;
		}
		.buttomBlcoksText{
			display: inline-block;
			padding-left: 10px;
		}
	}
	@media screen and (min-width: 300px) and (max-width: 700px) {
		.footerInfo{
			width: 100%;
			height:400px;
			background-color: #403A3A;
			position: relative;
		}
		.areaForFlex{
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
		}
		.widThreeeBlocks{
			/* flex: 1; */
			width: 100%;
			height: auto;
		}
		.firstBlock{
			padding: 1%;
			display: flex;
			align-content: center;
			flex-wrap: wrap;
			
		}
		.firstBlockPic{
			width: 100%;
			height: 50px;
			margin-bottom: 0px;
			position: relative;
		}
		.firstBlockPic img{
			position: absolute;
			bottom: 0%;
			left:50%;
			width: 150px;
			
			transform: translate(-50%,-50%);
		}
		
		.firstBlockText{
			margin-bottom: 5px;
			width: 250px;
			height: 25px;
			line-height: 25px;
			color: #FFFFFF;
			font-size: 12px;
			margin: 0 auto;
			text-align: center;
		}
		/* .firstBlockText p{
			text-align: center;
		} */
		.firstBlockSpecialText{
			margin-top: 10px;
			margin-bottom: 10px;
			width: 150px;
			margin-left: 10%;
			height: 30px;
			line-height: 30px;
			color: #FFFFFF;
			font-size: 14px;
			/* margin: 0 auto; */
		}
		.firstBlockIcon{
			margin-top: 10px;
			width: 120px;
			height: 30px;
			display: flex;
			justify-content: flex-start;
		}
		.firstBlockIconPic{
			width: 30px;
			margin-left: 15px;
			margin-right: 20px;
		}
		.firstBlockIconPic img{
			width: 30px;
			height: 30px;
			
		}
		.secondBlock{
			padding: 1%;
			display: flex;
			align-content: center;
			flex-wrap: wrap;
		}
		.secondBlockBigText{
			
			width: 350px;
			height: 35px;
			color: #FFFFFF;
			font-size: 17px;
			margin: 0 auto;
			text-align: center;
			
		}
		.secondBlockText{
			/* margin-left: 5px;
			margin-bottom: 40px; */
			width: 100px;
			height: 25px;
			color: #FFFFFF;
			font-size: 12px;
			line-height: 25px;
			cursor: pointer;
			margin: 0 auto;
			text-align: center;
		}
		/* 这个用那个东西控制一下这个内容 */
		.thirdBlockPic{
			width: 50%;
			height: 60px;
			position: relative;
			margin-bottom: 10px;
			margin-left: 10px;
		}
		.thirdBlockPic img{
			position: absolute;
			top: 50%;
			width: 125px;
			height: 60px;
			left: 50%;
			transform: translate(-50%,-50%);
			cursor: pointer;
		}
		
		.thirdBlockIconPic{
			margin-top: -5px;
			width: 200px;
			height: 60px;
			margin-left: 5px;
			margin-right: 25px;
			
		}
		.thirdBlockIconPic img{
			width: 50px;
			height: 50px;
			border-radius:25px; 
			cursor: pointer;
		}
		.buttomBlcoks{
			width: 100%;
			height: 22px;
			text-align: center;
			font-size: 12px;
			color: #939393;
		}
		
		.buttomBlcoksImg{
			display: inline-block;
		}
		.buttomBlcoksImg img{
			width: 15px;
			height: 15px;
			vertical-align:middle;
		}
		.buttomBlcoksText{
			display: inline-block;
			padding-left: 10px;
		}
	}
</style>
