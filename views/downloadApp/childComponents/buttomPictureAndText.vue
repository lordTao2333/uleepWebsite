<template>
	<div class="buttomPictureAndText">
		<div class="buttomPictureAndTextBoxDownload">
			<div class="xiabianDownload">
				<div class="insideTextDownload">
					<div class="insideTextInsideDownload">
						<transition
						 name="fade" 
						 enter-active-class="animated bounceInLeft"  
						 >
							<div class="insideTextInsideBox1Download" v-show="$store.getters.getIsDownLoadShow2Info">
								<div class="insideTextInsideBoxPicDownload">
									
								</div>
								<div class="buttominsideTextInsideBoxBigTextDownload">
									<strong>自主控制睡眠时间</strong>
								</div>
								<div class="buttominsideTextInsideBoxSmallTextDownload">
									<p>
										睡眠场景设置
									</p>
									<p>
										满足用户的多情景睡眠需求
									</p>
								</div>
								
							</div>
							
						 </transition>
						
					</div>
				</div>
				<transition
				 name="fade" 
				 enter-active-class="animated slideInRight"  
				 
				 >
					<div class="insidePicDownloadPic" v-show="$store.getters.getIsDownLoadShow2Info">
						<img src="../../../assets/img/downloadApp/situation.png" alt="" >
					</div>
				 </transition>
			</div>
			
		</div>
		
	</div>
</template>

<script>
export default{
  name: 'buttomPictureAndText',
  data(){
  	return{
  		
  	}
  },
  methods:{
	  
	
  }
}
</script>
<style scoped src="../../../../public/css/animate.min.css">
<style >

</style>
<style scoped="scoped">
	.buttomPictureAndText{
		background-color: #ffffff;
		
	}
	.buttomPictureAndTextBoxDownload{
		width:100%;
		height: 500px;
		position: relative;

		
	}
	
	.xiabianDownload{
		width: 100%;
		height: 500px;
		display: flex;
	}

	.insidePicDownloadPic{
		flex: 1;
		height: 500px;
		width: 50%;
		
		position: relative;
	}
	.insidePicDownloadPic img{
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translateX(-50%);
		width: auto;
		height: 580px;
		cursor: pointer;
	
	}
	.insideTextDownload{
		flex: 1;
		height: 500px;
		
		position: relative;
	}
	.insideTextInsideDownload{
		width: 60%;
		height: 500px;
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
	}
	.insideTextInsideBox{
		
		position: relative;
		width: 90%;
		height: 500px;
		
	}
	.insideTextInsideBox1Download{
		
		position: relative;
		width: 80%;
		height: 500px;
		margin-left: 20%;
		
	}
	
	.insideTextInsideBoxPicDownload{
		position: relative;
		margin: 0 auto;
		padding-top: 20px;
		width: 60px;
		height: 80px;

		
	}
	.insideTextInsideBoxPic img{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: auto;
		height: 10px;
		cursor: pointer;
	}
	.buttominsideTextInsideBoxBigTextDownload{
		margin-top: 40px;
		text-align: left;
		font-size: 40px;
		color: #000000;
		
	}
	.buttominsideTextInsideBoxSmallTextDownload{
		margin-top: 25px;
		margin-bottom: 60px;
		margin-left: 5px;
		color: #000000;
		text-align: left;
		font-size: 24px;

	}

</style>
