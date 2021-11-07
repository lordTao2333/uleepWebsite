<template>
	<div class="midPictureAndText">
		<div class="midPictureAndTextBoxDownload">
			<div class="midxiabianDownload">
				
					<!-- 放一个图片好了 不要视频了 限制一下大小就行 -->
					<transition 
					 name="fade" 
					 enter-active-class="animated fadeInUp"  
					 
					 >
						<div class="midinsidePicDownloadPic" v-show="$store.getters.getIsDownLoadShow1Info">
							<img src="../../../assets/img/downloadApp/advice.png" alt="" >
						</div>
					 </transition>
				
				<div class="insideTextDownload">
					<div class="insideTextInsideDownload">
						<transition
						 name="fade" 
						 enter-active-class="animated bounceInRight"  
						 
						 >
							<div class="insideTextInsideBoxDownload" v-show="$store.getters.getIsDownLoadShow1Info">
								<div class="insideTextInsideBoxPicDownload">
									
								</div>
								
								<div class="buttominsideTextInsideBoxBigTextDownload">
									<strong>专注睡眠的科学关怀</strong>
								</div>
								<div class="buttominsideTextInsideBoxSmallTextDownload">
									<p>
										睡前助眠规划 上床时间提醒
									</p>
									<p>
										通过算法给予用户个性化睡眠建议
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
  name: 'buttomPictureAndText',
  data(){
  	return{
  		
  	}
  },
  methods:{
	  
	
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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

		clip-path: ellipse(100% 70% at 18% 65%);
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

		position: relative;
	}
	.midinsidePicDownloadPic img{
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translateX(-50%);
		width: auto;
		height: 520px;
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
	/* .insideTextInsideBoxButtomDownload{
		
		height: 60px;
		position: relative;
		width: 100%;
		
	}
	.insideTextInsideBoxButtomDownload{
		position: absolute;
		left: 0;

	}
	.insideTextInsideBoxButtomDownload a{
		border: 2px solid #000000;
		padding:10px 25px;
		text-align: center;
		font-size: 20px;
		color: #000000;
		border-radius: 20px;
		cursor: pointer;
	}
	.insideTextInsideBoxButtomDownload img{
		height: 22px;
		width: auto;
		vertical-align:text-top;
	} */
	
</style>
