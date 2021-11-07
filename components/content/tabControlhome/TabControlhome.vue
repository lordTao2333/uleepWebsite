<template>
	<div class="tabControlhome">
		<homeitem class="tabControlhomeItem" 
		v-for="(item,index) in titles" 
		v-bind:class="{active:currentIndex===index}" 
		v-on:tabClick="clickindex"
		:homeitem="item"
		:index="index"
		:currentIndex="currentIndex"
		:key="item.label"
		>

			
		</homeitem>
	</div>
</template>

<script>
	import homeitem from './homeitem'
export default{
	
  name: 'TabControlhome',
  
  props:{
  titles:{
	  type:Array,
	  default(){
		return []//只有文字不同的时候不需要用插槽
	  }
  }
  },
  data(){
	return{
		currentIndex:0,
		
	}
	
  },
	components:{
		homeitem,
	},
  methods:{
	 //  itemClick(index){//点击一下的话将当前的序号传过来，进行比较
	 //  console.log('点击了第'+index)
		// this.currentIndex=index;
		// // 内部发生点击传数据出去要写$emit，外部传内部是props
		// this.$emit('tabClick',index)
		
	 //  },
		clickindex(sonIndex){
			// 这个val就是子组件传来的index
			this.currentIndex=sonIndex;
			// 内部发生点击传数据出去要写$emit，外部传内部是props
			// 傻逼wht天天写bug
			this.$emit('tabClick',sonIndex)
			
		}
	  // inPic(index){
		 //  this.ishover[index]=1
		 //  this.isredd=true
		 //  console.log('进来的'+ index)
		 //  console.log(this.currentIndex===index || this.ishover[index] ==1)
		 //  console.log(index+'的值'+ this.ishover[index])
	  // },
	  // outPic(index){
		 //  this.ishover[index]=0
		 //  this.isredd=false
	  // }
  }
}
</script>

<style scoped="scoped">
	.tabControlhome{
		display: flex;
		text-align: center;
		
		z-index: 2;
	}
	/* .tabControlhome span{
		padding: 5px;
	} */
	
	.tabControlhomeItem{
		flex: 1;
		height: 180px;
		/* line-height: 40px; */
		font-size: 15px;
		transition-duration: 0.55s;
		transition-timing-function: ease-in-out;
		position: relative;
		color: #ffffff;
	}
	
	/* .tabControlhomeItem: hover{他妈的这:hover和前边的标签中间有个空格就会只作用到文本上
		cursor: pointer;
		background-color: #FFFFFF;
	} */
	.tabControlhomeItem:hover{
		cursor: pointer;
		background-color: #FFFFFF;
		color: #000000;
		
	}
	
	.active{
		/* color: var(--color-high-text); */
		background-color: #FFFFFF;
		color: #000000;
	}
	.active span{
		/* border-bottom: 3px solid var(--color-high-text); */
	}
</style>
