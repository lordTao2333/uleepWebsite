<template>
	<div class="midPictureAndText">
		<div class="midPictureAndTextBoxDownload">
			<div class="midxiabianDownload">
				
				<transition
				 name="fade" 
				 enter-active-class="animated fadeInUp"  
				 
				 >
					<div class="midinsidePicDownloadPic" v-show="$store.getters.getIsDownLoadShow3Info">
						<img src="../../../assets/img/downloadApp/time.png" alt="" >
					</div>
				 </transition>
				
				<div class="insideTextDownload">
					<div class="insideTextInsideDownload">
						<transition
						 name="fade" 
						 enter-active-class="animated lightSpeedIn"  
						 
						 >
							<div class="insideTextInsideBoxDownload" v-show="$store.getters.getIsDownLoadShow3Info">
								<div class="insideTextInsideBoxPicDownload">
									
								</div>
								
								<div class="buttominsideTextInsideBoxBigTextDownload">
									<strong>以你想要的方式醒来</strong>
								</div>
								<div class="buttominsideTextInsideBoxSmallTextDownload">
									<p>个性化智能唤醒功能</p>
									<p>
										生成用户睡眠质量的专属报告
									</p>
								</div>
								
							</div>
						 </transition>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
export default{
  name: 'addbuttomPictureAndText',
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
	.midPictureAndText{
		
		background-color: #FFFFFF;
	}
	.midPictureAndTextBoxDownload{
		width:100%;
		height: 500px;
		position: relative;
		
		
		background-color:  #f5f5f5;
	}
	
	.midxiabianDownload{
		width: 100%;
		height: 500px;
		display: flex;
		
	}

	.midinsidePicDownloadPic{
		flex: 1;
		height: 500px;
		width: 50%;
		
		position: relative;
	}
	.midinsidePicDownloadPic img{
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translateX(-50%);
		width: auto;
		height: 550px;
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
	.insideTextInsideBoxDownload{
		
		position: relative;
		width: 80%;
		height: 500px;
		
	}

	
	.insideTextInsideBoxPicDownload{
		position: relative;
		margin: 0 auto;
		padding-top: 20px;
		width: 60px;
		height: 80px;
		
		
		overflow: hidden;
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
