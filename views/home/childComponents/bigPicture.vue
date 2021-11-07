<template>
	<div class="bigPicture">
		
		<div class="theBigOne">
			<!-- 也可以是一个视频 -->
			<img src="../../../assets/img/newWeb/homeBigPic.jpg" alt="" >
			
			<!-- 我想在这里塞一个tabbar 不过这样我就需要多写一套tabbar 他妈的好发吗 -->
			<!-- <div class="theBigOneText">我这个网站可牛了蛤蛤蛤</div>
			<div class="theSmallOne" @click="$router.push('/downloadApp')">
				<img src="../../../assets/img/common/dc3433d0-1fae-11e9-b38d-ef18452cd356_0.png" alt="" >
			</div> -->
			
			
		</div>

	</div>
</template>

<script>


export default{
  name: 'bigPicture',
  data() {
    return {
     
    };
  },
 
  methods:{
	  
  },
  components:{

  },
  methods:{
	
  },
  
}
</script>

<style scoped="scoped">
	.bigPicture{
		/* padding-top: 84px; */


	}
	.theBigOne{
		height: 550px;
		position: relative;
		width: 100%;
		overflow: hidden;
		
	}
	.theBigOne img{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		/* height: 550px; */
		width: 100%;
		height: auto;
		cursor: pointer;
	
	}
	
	.theSmallOne{
		position: absolute;
		top: 65%;
		left: 25%;
		transform: translate(-50%,-50%);
	}
	.theSmallOne img{
		height: 45px;
	}
	@media screen and (min-width: 300px) and (max-width: 1000px) {
		.theBigOne img{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			/* height: 550px; */
			width: auto;
			height: 100%;
			cursor: pointer;
		
		}
	}
		
</style>
