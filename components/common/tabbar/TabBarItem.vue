<template>
		<div class="tab-bar-item" @click="itemClick()">
			<!-- <transition name="fade"> -->
			<div class="tab-bar-item-item" v-if="!isActive" >
				<slot  name="item-icon"></slot> 
				
				
			</div> 
			<div class="tab-bar-item-item" v-else>
				<slot name="item-icon-active"></slot>
				
			</div>
			<!-- </transition> -->
			
			<div class="text">
				<slot name="item-text"></slot>
			</div>
      
    </div>
</template>

<script>
export default{
  name: 'TabBarItem',
  data () {
    return {

    }
  },
  props: {// 子传父
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    },
	changeClass:{
		
	},
  },
  computed: {
    isActive () { // this.route.path是哪个路由活跃就拿到哪个path，在这里再将活跃的path和当前的path进行比较
		// if(this.$route.path.indexOf(this.path) == 0 && this.changeClass == false ){
		// 	return 0
		// }
		// else{
		// 	return this.$route.path.indexOf(this.path) !==-1// 有一说一，确实牛逼  等于-1就是没找到
		// }
		//改成和点击哪个tabbar无关了
		if(this.changeClass == false ){
			return 0
		}
		else if(this.changeClass == true){
			return 1// 有一说一，确实牛逼  等于-1就是没找到
		}
    },
    activeStyle () { // 动态绑定style  这个地方我进行了改进，我真聪明 这是条件运算语句 聪明个几把，自己一开搞错了
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick () { // 用来连接外边路由进行组件替换
	if (this.$route.path === this.path){
		return null
	}
	else{
		this.$router.push(this.path)
	}
    
    }
  }
}
</script>

<style scoped="scoped">
	/* .fade-enter{
	  opacity:0;
	}
	.fade-enter-active{
	  transition:opacity 5.5s;
	}
	.fade-leave-active{
	  transition:transform .5s;
	}
	.fade-leave-to{
	  transition:opacity .5s;
	} */
	.tab-bar-item{
	flex: 1;
	align-content: center;
	text-align: center;

	height: 85px;
	position: relative;

	}
	.tab-bar-item-item{
	position: absolute;
	transform: translate(-50%,-50%);
	top: 50%;
	left: 50%;
	cursor: pointer;
	vertical-align: middle;
	}
	.text{
	
	position: absolute;
	transform: translate(-50%,-50%);
	top: 50%;
	left: 70%;
	font-size: 17px;
	font-weight: 700;
	cursor: pointer;

	}
	@media screen and (min-width: 1150px) and (max-width: 1400px) {
		.text{
		
		position: absolute;
		transform: translate(-50%,-50%);
		top: 50%;
		left: 70%;
		font-size: 14px;
		font-weight: 650;
		cursor: pointer;

		}
	}
	@media screen and (min-width: 1000px) and (max-width: 1150px) {
		.text{
			
			position: absolute;
			transform: translate(-50%,-50%);
			top: 50%;
			left: 70%;
			font-size: 12px;
			font-weight: 600;
			cursor: pointer;
			
		}
	}
	@media screen and (min-width: 700px) and (max-width: 1000px) {
		.text{
			
			position: absolute;
			transform: translate(-50%,-50%);
			top: 50%;
			left: 70%;
			font-size: 8px;
			font-weight: 600;
			cursor: pointer;
			
		}
	}

</style>
