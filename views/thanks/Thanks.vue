<template>
	<!-- 这个页面我准备做一个有意思的东西 展示一下 蜂窝图什么的 热点图也行我觉得 设置好图就行 他妈的我直接写一个词云得了 -->
	<div class="thanks">
		<div class="thanksbar"></div>
		<div class="thanksBox">
			<div class="thanksBoxInside">
				
				<div class="thanksBoxInsideBigText">
					- 特别鸣谢 - 
				</div>
				
				<div class="thanksBoxInsidePic">
					<img src="../../assets/img/newPic/cicloud.png" alt="">
				</div>
				<div class="thanksHeightHolder"></div>
				<van-grid :border="false" :column-num="isPad" :gutter="10" clickable >
				  <van-grid-item url="https://www.remove.bg/zh">
					  <img src="../../assets/img/newPic/1.png" alt="">
				  </van-grid-item>
				  <van-grid-item  url="https://magdeleine.co/browse/">
					  <img src="../../assets/img/newPic/2.png" alt="">
			
				  </van-grid-item>
				  <van-grid-item url="https://tinypng.com/">
					  <img src="../../assets/img/newPic/3.png" alt="">
				
				  </van-grid-item>
				  <van-grid-item url="https://gratisography.com/">
					  <img src="../../assets/img/newPic/4.png" alt="">
				
				  </van-grid-item>
				  <van-grid-item url="https://unsplash.com/">
					  <img src="../../assets/img/newPic/5.png" alt="">
				  
				  </van-grid-item>
				  <van-grid-item url="https://www.canva.cn/">
					  <img src="../../assets/img/newPic/6.png" alt="">
			
				  </van-grid-item>
				  <van-grid-item url="https://www.iloveimg.com/zh-cn">
					  <img src="../../assets/img/newPic/7.png" alt="">
			
				  </van-grid-item>
				  <van-grid-item url="https://www.iconfont.cn/">
					  <img src="../../assets/img/newPic/8.png" alt="">
				
				  </van-grid-item>
				</van-grid>
				
				
			</div>
		</div>
		
		
	</div>
</template>

<script>
export default {
	name: "Thanks",
	components: {//组件不用会报错我操你妈
		
	},
	data(){
		return{
			isPad:4,
			
		}
	},
	mounted () {
		
		if (document.documentElement.clientWidth < 1000) {
			this.isPad=2
		}
		
	},
}
</script>

<style >
	
	.thanks{
		width: 100%;
		position: relative;
		overflow: auto;
		
	}
	.thanksbar{
		height: 85px;
		position: relative;
		width: 100%;
		background-color: #000000;
	
	}
	.thanksBox{
		width: 100%;
		height: calc(100vh - 85px);
		position: relative;
		background-color: #f1f1f1;
	}
	.thanksBoxInside{
		width: 80%;
		position: relative;
		margin-left: 10%;
	}
	.thanksBoxInsideBigText{
		font-size: 27px;
		text-align: center;
		height: 60px;
		line-height: 60px;
		width: 100%;
		/* background-color: #FFFFFF; */
		margin:  0 auto;
		
	}
	.thanksBoxInsidePic{
		height: 400px;
		width: 100%;
		position: relative;
	}
	.thanksBoxInsidePic img{
		height: 400px;
		width: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.thanksHeightHolder{
		height: 10px;
		width: 100%;
	}
	
	::-webkit-scrollbar {
	 width: 0 !important;
	}
	::-webkit-scrollbar {
	 width: 0 !important;height: 0;
	}
	@media screen and (min-width: 700px) and (max-width: 950px) {
		.thanksBoxInsidePic{
			height: 300px;
			width: 100%;
			position: relative;
		}
		.thanksBoxInsidePic img{
			height: 300px;
			width: auto;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		/* 关于下边这些东西还是要计算一下这个页面宽度 很烦 然后设置每一行三个就行 */
	}
	@media screen and (min-width: 350px) and (max-width: 700px) {
		.thanksBoxInsidePic{
			height: 250px;
			width: 100%;
			position: relative;
		}
		.thanksBoxInsidePic img{
			height: 250px;
			width: auto;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		.thanksBoxInside{
			width: 96%;
			position: relative;
			margin-left: 2%;
		}
		.thanksBoxInsideBigText{
			font-size: 22px;
			text-align: center;
			height: 30px;
			line-height: 30px;
			width: 100%;
			/* background-color: #FFFFFF; */
			margin:  0 auto;
			
		}
		/* 关于下边这些东西还是要计算一下这个页面宽度 很烦 然后设置每一行三个就行 */
	}
</style>
