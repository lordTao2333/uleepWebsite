<template>
	
		<tab-bar :changeClass="changeClass"><!--在这里传入两张图片，在里头对相应的图片选择进行控制-->
		<tab-bar-item path="/home" :changeClass="changeClass"><!--这个path属于子传父的东西-->
		
		<img slot="item-icon" src="../../assets/img/newWeb/usleepokpreview.png" alt="" height="56px" width=auto> 
		<img slot="item-icon-active" src="../../assets/img/newWeb/usleepRedpreview.png" alt="" height="56px" width=auto>
		</tab-bar-item>
		
		<tab-bar-item path="/downloadApp" :changeClass="changeClass">
		
		<img slot="item-icon" src="../../assets/img/newWeb/tabbaricon/appwhite.png" alt="" height=auto width="25px">
		<img slot="item-icon-active" src="../../assets/img/newWeb/tabbaricon/app.png" alt="" height=auto width="25px">
			<div slot="item-text">相关应用</div>
		</tab-bar-item>
		
		<!-- <tab-bar-item path="/chat" >
		<img slot="item-icon" src="../../assets/img/tabbar/biaoqing.png" alt="" height=auto width="25px">
		<img slot="item-icon-active" src="../../assets/img/tabbar/jiankang.png" alt="" height=auto width="25px">
			<div slot="item-text">关于团队</div>
		</tab-bar-item> -->
		<tab-bar-item path="/visualization"  :changeClass="changeClass" >
		<img slot="item-icon" src="../../assets/img/newWeb/tabbaricon/datawhite.png" alt="" height=auto width="25px">
		<img slot="item-icon-active" src="../../assets/img/newWeb/tabbaricon/data.png" alt="" height=auto width="25px">
			<div slot="item-text">详细数据</div>
		</tab-bar-item>
		<tab-bar-item v-if="changeNavLength">
		<img slot="item-icon"  alt="" height=auto width="25px">
		<img slot="item-icon-active"  alt="" height=auto width="25px">
			<div slot="item-text"></div>
		</tab-bar-item>
		<tab-bar-item v-if="changeNavLength">
		<img slot="item-icon"  alt="" height=auto width="25px">
		<img slot="item-icon-active"  alt="" height=auto width="25px">
			<div slot="item-text"></div>
		</tab-bar-item>
		
		<tab-bar-item path="/profile" :changeClass="changeClass">
		<img slot="item-icon" src="../../assets/img/newWeb/tabbaricon/loginwhite.png" alt="" height=auto width="25px">
		<img slot="item-icon-active" src="../../assets/img/newWeb/tabbaricon/login.png" alt="" height=auto width="25px">
			<div slot="item-text">登陆注册</div>
		</tab-bar-item>
		</tab-bar>
	
  
</template>

<script>

import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'
export default{
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data(){
	return{
		isShowTag:false,
		
	}
  },
  props:{
  	changeNavLength:{
		
	},
  	changeClass:{
  		
  	},
  },
  methods:{
	  
  },
  
  created() {
	
	
  },
  mounted() {
  	
  },
  
}
</script>

<style>
	
</style>
