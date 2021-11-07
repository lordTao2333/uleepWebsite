<template>
	<div class="downLoadApp">
		<topPictureAndText></topPictureAndText>
		<midPictureAndText></midPictureAndText>
		<buttomPictureAndText></buttomPictureAndText>
		<addmidPictureAndText></addmidPictureAndText>
		<addbuttomPictureAndText></addbuttomPictureAndText>
		<shenAoFoot></shenAoFoot>
	</div>
</template>

<script>
	import midPictureAndText from './childComponents/midPictureAndText.vue'
	import topPictureAndText from './childComponents/topPictureAndText.vue'
	import buttomPictureAndText from './childComponents/buttomPictureAndText.vue'
	import addmidPictureAndText from './childComponents/addmidPictureAndText.vue'
	import addbuttomPictureAndText from './childComponents/addbuttomPictureAndText.vue'
	import shenAoFoot from './childComponents/shenAoFoot.vue'
	export default {
		name: "DownloadApp",
		components:{
			topPictureAndText,
			midPictureAndText,
			buttomPictureAndText,
			shenAoFoot,
			addmidPictureAndText,
			addbuttomPictureAndText
		},
		computed: {
			  // guiwei(){
				 //  // chrome
				 //  document.body.scrollTop = 0
				 //  // firefox
				 //  document.documentElement.scrollTop = 0
				 //  // safari
				 //  window.pageYOffset = 0
			  // }
			
		},
	}
	
</script>

<style>
	/* 会导致document.documentElement.scrollTop失效 */
	/* 这些东西是必备的 他妈的巨强， 解决底部swiper */
	/* .downLoadApp{
		
		overflow: auto;
		height:100vh;
		position: relative;
		background-color: rgb(255,255,255);
	} */
	/* 去除横向滚动条 太牛了 */
	.downLoadApp{
		
		overflow: auto;
		/* height:100vh; */
		position: relative;
		background-color: #000000;
	}
	::-webkit-scrollbar {
	 width: 0 !important;
	}
	::-webkit-scrollbar {
	 width: 0 !important;height: 0;
	}
	
	
</style>
