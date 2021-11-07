<template>
	<!-- 这个地方如果用over 和out就会出现问题 设计都元素进入子元素的判定 -->
	<div id="homeitem" class="homeitem" @click="itemClick()" @mouseenter="inPic(index) " @mouseleave="outPic(index)">
		<div class="tabControlhomeItemPic" >
		
			<img :src="homeitem.src" alt="" v-if="currentIndex===index || homeitem.ishover">
			<img :src="homeitem.activeSrc" alt=""  v-if="currentIndex!=index && !homeitem.ishover">
			<!-- <img src="../../../assets/img/newWeb/product.png" alt=""> -->
		</div>
		<div class="tabControlhomeItemText">
			{{homeitem.text}}
		</div>
		<div class="tabControlhomeItemsomeText" v-if="currentIndex===index || homeitem.ishover "
		@mouseover="inPic(index) " @mouseout="outPic(index)" v-show="!isPad">
			{{homeitem.sometext}}
		</div>
	</div>
</template>

<script >
export default{
  name: 'homeitem',
  props:{
	homeitem:{
		type:Object,
		default (){
			return {
				
			}
		}
	},
	index:{
		
	},
	currentIndex:{
		
	},
	
  },
	data(){
		return{
			isPad:false,
		}
		
	},
  computed:{
	
  },
  mounted() {
  	if (document.documentElement.clientWidth < 1000) {
  		this.isPad=true
  	}
  	
  },
  methods:{
  	 itemClick(){//点击一下的话将当前的序号传过来，进行比较
		
		//怎么把其他的写成false呀
		
		// 内部发生点击传数据出去要写$emit，外部传内部是props
		this.$emit('tabClick',this.index)
  	 		
  	 },
  	 
  	  inPic(index){

		this.homeitem.ishover=true
	
  	  },
  	  outPic(index){
  		 
		this.homeitem.ishover=false

  	  },
	
  }
}
</script>

<style scoped="scoped">
	.homeitem{
		width: 100%;
		height: 180px;
		position: relative;
	}
	.tabControlhomeItemPic{
		padding-top: 15px;
		position: relative;
		height: 85px;
		width: 100%;
		
	}
	.tabControlhomeItemPic img{
		height: 70px;
		width: auto;
		position: absolute;
		
		left: 50%;
		transform: translateX(-50%);
	}
	.tabControlhomeItemText{
		
		/* padding-bottom: 5px; */
		font-size: 20px;
		font-weight: 500;
		height: 30px;
		width: 100%;
		line-height: 30px;
		text-align: center;
		align-items: flex-start;
	}
	.tabControlhomeItemsomeText{
		/* padding-top: 5px; */
		font-size: 12px;
		width: 70%;
		margin: 0 auto;
		color: #808080;
	}
</style>
