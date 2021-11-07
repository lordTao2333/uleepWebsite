<template>
  <div id="app">
	
	<div v-if="$route.meta.keepTabbar">
	<!-- 我只能说在app.vue中加上这个:就会出现在这种奇奇怪怪的问题 -->
		<main-tab-bar :changeNavLength="isPad" :changeClass="isDown"></main-tab-bar>
		
		<!-- 记录历史，不会随意销毁 这里有一个奇怪的name问题-->
		<keep-alive exclude="ShowTag">
			<router-view></router-view>
		</keep-alive>
	</div>
	<router-view v-if="!$route.meta.keepTabbar"></router-view>
	
	
    
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'
export default {
  name: 'App',
  components: {//组件不用会报错
	MainTabBar
  },
  data(){
  	return{
  		isPad:true,
		isDown:false,
  		canRun:true,
  		isDownLoadShow1:false,
		isDownLoadShow2:false,
		isDownLoadShow3:false,
		isDownLoadShow4:false,
  	}
  },
  mounted () {
  	if (document.documentElement.clientWidth < 1100) {
  		this.isPad=false
  	}
	
	window.addEventListener('scroll',this.rollingheight,true)
  },
  methods: {
  	rollingheight:function(e){
		
		// 判断是否已空闲，如果在执行中，则直接return
		if(!this.canRun) return;
		this.canRun = false;
		setTimeout(() => {
		    // console.log(window.pageYOffset)
		    // 牛蛙
		    //在切换路由之后pageYOffset没有用的样子
		    if(window.pageYOffset <= 85){
		    	this.isDown=false
		    }
		    else if(window.pageYOffset > 85){
		    	this.isDown=true
		    	if(window.pageYOffset > 300){
		    		this.isDownLoadShow1=true
		    	}
		    	if(window.pageYOffset > 700){
		    		this.isDownLoadShow2=true
		    	}
		    	if(window.pageYOffset > 1200){
		    		this.isDownLoadShow3=true
		    		
		    	}
		    	if(window.pageYOffset > 1700){
		    		
		    		this.isDownLoadShow4=true
		    	}
		    }
			this.$store.dispatch('setIsDownLoadShow1',this.isDownLoadShow1)
			this.$store.dispatch('setIsDownLoadShow2',this.isDownLoadShow2)
			this.$store.dispatch('setIsDownLoadShow3',this.isDownLoadShow3)
			this.$store.dispatch('setIsDownLoadShow4',this.isDownLoadShow4)
		    this.canRun = true;
		}, 100);

  	},
  },
  computed:{
  	
  	
  },
}
</script>

<style>
	@import url("assets/css/base.css");
</style>
