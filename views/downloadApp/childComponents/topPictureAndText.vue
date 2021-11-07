<template>
	<div class="topPictureAndText">
		<div class="wozhixiangyaoyigelanse">
			<div class="topPictureAndTextBoxDownload">
				<div class="topxiabianDownload">
					<div class="topinsideTextDownload">
						<div class="topinsideTextInside">
							<transition
							 name="fade" 
							 enter-active-class="animated fadeInLeft"  
							 
							 >
								<div class="topinsideTextInsideBox1Download" v-show="isShow">
									<div class="topinsideTextInsideBoxPic">
										
									</div>
									<div class="topinsideTextInsideBoxBigTextDownload">
										<strong>「有眠」</strong>
									</div>
									<div class="topinsideTextInsideBoxSmallTextDownload">
										您的睡眠 由我守护
									</div>
									<div class="topinsideTextInsideBoxButtomPlaceDownload">
										<div class="topinsideTextInsideBoxButtomDownload" >
											<a href="http://8.131.65.200:8089/download" @click="thePlaceOfGetApp()" download="">
											
												<img src="../../../assets/img/newWeb/newIcons/android.png" alt="">
												
												Android
											</a>
										</div>
										<div class="topinsideTextInsideBoxButtomDownload1" >
											<a href="javascript:" class="social app">
												<img class="qrapp" src="../../../assets/img/newWeb/appdownload.png" alt="微信二维码">
												<img src="../../../assets/img/newWeb/newIcons/saoma.png" alt="">
												
												扫码下载
											</a>
										</div>
									</div>
									<!-- 网盘下载在这看 -->
									<div class="topinsideTextInsideBoxButtomPlaceDownload">
										<div class="topinsideTextInsideBoxButtomDownload1" >
											<a href="https://pan.baidu.com/share/init?surl=05KoU--tbPGPgbdkIiTIZg" target="_blank">
												<img src="../../../assets/img/newWeb/newIcons/wangpan.png" alt="">
												百度网盘
												<div class="topinsideTextInsideBoxButtomDownload1WidHolder"></div>
												<img src="../../../assets/img/newWeb/newIcons/key.png" alt="">
												d91f
											</a>
											
										</div>
									</div>
									
								</div>
							 </transition>
							
						</div>
					</div>
					<transition
					 name="fade" 
					 enter-active-class="animated fadeInRight"  
					 
					 >
						<div class="topinsidePicDownload"  v-show="isShow">
							<!-- 放一个图片好了 不要视频了 限制一下大小就行 -->
							<div class="bgbgbg"></div>
							<img src="../../../assets/img/downloadApp/visualization.png" alt="">
						</div>
					</transition>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import { getApp } from "../../../network/app"
export default{
  name: 'topPictureAndText',
  data(){
  	return{
  		isShow:false,
  	}
  },
  mounted() {
	setTimeout(() => {
		this.isShow=true
	}, 10);
  },
  methods:{
	copyBtn() {
		var e = document.getElementById("copy");
		e.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
	},
	thePlaceOfGetApp(){
	  
	  getApp()
	}
  }
}
</script>

<style scoped src="../../../../public/css/animate.min.css">
<style >

</style>
<style>
	.topPictureAndText{
		padding-top: 84px;
		
		background-color: #000000;
	}
	.wozhixiangyaoyigelanse{
		background-color: #f5f5f5;
	}
	.topPictureAndTextBoxDownload{
		width:100%;
		height: 550px;
		position: relative;
		overflow: hidden;
		/* clip-path:ellipse() 不传参数则采取默认值：x轴半径：50px,y轴半径：50px,中心点位置：50px,50px*/
		clip-path: ellipse(120% 70% at 100% 35%);
		background-color: #FFFFFF;
		
	}
	
	.topxiabianDownload{
		width: 100%;
		height: 550px;
		display: flex;
		
	}
	.topinsidePicDownload{
		flex: 1;
		height: 550px;
		width: 70%;
		
		position: relative;
		box-shadow: 0px 20px 30px -20px #dadada;
	}
	.topinsidePicDownload img{
		position: absolute;
		bottom: 5%;
		left: 50%;
		transform: translateX(-50%);
		width: auto;
		height: 500px;
		cursor: pointer;
		
		
	}
	.bgbgbg{
		position: absolute;
		bottom: -2%;
		left: 50%;
		transform: translateX(-49%);
		width: 102%;
		height: 100px;
		
		background-image: radial-gradient(#b8b8b8 8%,white 64%);
	}
	.topinsideTextDownload{
		flex: 1;
		height: 550px;
		
		position: relative;
	}
	.topinsideTextInside{
		width: 60%;
		height: 550px;
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
	}
	.topinsideTextInsideBox{
		
		position: relative;
		width: 90%;
		height: 550px;
		
	}
	.topinsideTextInsideBox1Download{
		
		position: relative;
		width: 80%;
		height: 550px;
		margin-left: 20%;
		
	}
	
	.topinsideTextInsideBoxPic{
		position: relative;
		margin: 0 auto;
		padding-top: 20px;
		width: 60px;
		height: 90px;
		padding-bottom: 30px;
		
		overflow: hidden;
	}
	.topinsideTextInsideBoxPic img{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: auto;
		height: 60px;
		cursor: pointer;
	}
	.topinsideTextInsideBoxBigTextDownload{
		margin-top: 40px;
		text-align: left;
		font-size: 54px;
		color: #000000;
		
	}
	.topinsideTextInsideBoxSmallTextDownload{
		margin-top: 30px;
		margin-bottom: 80px;
		margin-left: 5px;
		color: #000000;
		text-align: left;
		font-size: 26px;
		
		
	}
	.topinsideTextInsideBoxButtomPlaceDownload{
		
		height: 60px;
		position: relative;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.topinsideTextInsideBoxButtomDownload{
		margin-right: 30px;

	}
	.topinsideTextInsideBoxButtomDownload a{
		border: 2px solid #000000;
		padding:8px 20px;
		text-align: center;
		font-size: 17px;
		color: #000000;
		border-radius: 20px;
	}
	.topinsideTextInsideBoxButtomDownload img{
		height: 20px;
		width: auto;
		vertical-align:text-top;
	}
	.topinsideTextInsideBoxButtomDownload1{
		margin-right: 30px;
	
	}
	.topinsideTextInsideBoxButtomDownload1 a{
		border: 2px solid #000000;
		padding:8px 20px;
		text-align: center;
		font-size: 17px;
		color: #000000;
		border-radius: 20px;
	}
	.topinsideTextInsideBoxButtomDownload1WidHolder{
		width: 5px;
		height: 20px;
		display: inline-block;
	}
	.topinsideTextInsideBoxButtomDownload1 img{
		height: 20px;
		width: auto;
		vertical-align:text-top;
	}
	.app {
		position: relative;
	}
	
	.app img.qrapp {
		position: absolute;
		z-index: 99;
		top: -180px;
		right: -20px;
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
	
	.app:hover img.qrapp {
		transform: scale(1);
		opacity: 1;
	}
	@media screen and (min-width: 1200px) and (max-width: 1400px) {
		.topinsideTextInsideBoxSmallTextDownload{
			margin-top: 30px;
			margin-bottom: 80px;
			margin-left: 5px;
			color: #000000;
			text-align: left;
			font-size: 24px;
			
			
		}
		
		.topinsideTextInsideBoxButtomDownload a{
			border: 2px solid #000000;
			padding:8px 15px;
			text-align: center;
			font-size: 15px;
			color: #000000;
			border-radius: 20px;
		}
		.topinsideTextInsideBoxButtomDownload img{
			height: 15px;
			width: auto;
			vertical-align:text-top;
		}
		.topinsideTextInsideBoxButtomDownload1 img{
			height: 15px;
			width: auto;
			vertical-align:text-top;
		}
		.topinsideTextInsideBoxButtomDownload1 a{
			border: 2px solid #000000;
			padding:8px 15px;
			text-align: center;
			font-size: 15px;
			color: #000000;
			border-radius: 20px;
		}

	}
	@media screen and (min-width: 1000px) and (max-width: 1200px) {
		.topinsideTextInsideBoxSmallTextDownload{
			margin-top: 30px;
			margin-bottom: 80px;
			margin-left: 5px;
			color: #000000;
			text-align: left;
			font-size: 20px;
			
			
		}
		.topinsideTextInsideBoxButtomDownload img{
			height: 12px;
			width: auto;
			vertical-align:text-top;
		}
		.topinsideTextInsideBoxButtomDownload1 img{
			height: 12px;
			width: auto;
			vertical-align:text-top;
		}
		.topinsideTextInsideBoxButtomDownload a{
			border: 2px solid #000000;
			padding:8px 10px;
			text-align: center;
			font-size: 12px;
			color: #000000;
			border-radius: 20px;
		}
		.topinsideTextInsideBoxButtomDownload1 a{
			border: 2px solid #000000;
			padding:8px 10px;
			text-align: center;
			font-size: 12px;
			color: #000000;
			border-radius: 20px;
		}
		
		/* .topinsideTextInsideBoxButtomPlaceDownload{
			
			height: 120px;
			position: relative;
			width: 100%;
			display: flex;
		} */
		.topinsideTextInsideBoxButtomDownload{
			margin-right: 10px;
		
		}
	}
	@media screen and (min-width: 750px) and (max-width: 1000px) {
		.topinsideTextInsideBoxSmallTextDownload{
			margin-top: 30px;
			margin-bottom: 30px;
			margin-left: 5px;
			color: #000000;
			text-align: left;
			font-size: 17px;
			
			
		}
		.topinsideTextInsideBoxButtomDownload img{
			height: 12px;
			width: auto;
			vertical-align:text-top;
		}
		.topinsideTextInsideBoxButtomDownload1 img{
			height: 12px;
			width: auto;
			vertical-align:text-top;
		}
		.topinsideTextInsideBoxButtomDownload a{
			border: 2px solid #000000;
			padding:5px 10px;
			text-align: center;
			font-size: 12px;
			color: #000000;
			border-radius: 20px;
		}
		.topinsideTextInsideBoxButtomDownload1 a{
			border: 2px solid #000000;
			padding:5px 10px;
			text-align: center;
			font-size: 12px;
			color: #000000;
			border-radius: 20px;
		}
		
		.topinsideTextInsideBoxButtomPlaceDownload{
			
			height: 90px;
			position: relative;
			width: 100%;
			display: flex;
		}
		.topinsideTextInsideBoxButtomDownload{
			margin-right: 10px;
		
		}
	}
</style>
