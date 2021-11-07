<template>
	
	<div id="home" class="home">
		<div class="scroll_content">
			<div class="first_scroll_title" >
				<bigPicture ></bigPicture>
				<div class="homemoreMsgMiddleBox" @click="toScroll(1)">
					<div class="homemoreMsgMiddleInnerBox">
						<!-- 这里要写兄弟组件的通信 好他妈的麻烦呀 -->
						<!-- 我他妈的不知道为什么这个玩意无法显示了 淦 -->
						<!-- 垃圾tabcontrolhome 我拿tabbar写了 大不了加一个子值传出来  -->
						<!-- 傻逼tabbar -->
						<TabControlhome
						  :titles="tabControlTitles"
						  @tabClick="tabClick"
						  
						/>
						
					</div>
					
				</div>
			</div>
			
			<div class="scroll_title" >
				<!-- 直接父传子，让子组件根据这个玩意去弄吧 -->
				<woshishabi :iconChoose="iconChoose"></woshishabi>
				
			</div>
			<div class="scroll_title" >
				<meishizhaoshi></meishizhaoshi>
				
				
			</div>
			<div class="scroll_title">
				<footerInfo></footerInfo>
			</div>
		</div>
		

	</div> 
</template>

<script>
	
const woshishabi = ()=>import('./childComponents/woshishabi.vue')
const meishizhaoshi = ()=>import('./childComponents/meishizhaoshi.vue')
const footerInfo = ()=>import('./childComponents/footerInfo.vue')
import TabControlhome from './../../components/content/tabControlhome/TabControlhome.vue'
import bigPicture from './childComponents/bigPicture.vue'

export default{
  name: 'Home',
  data(){//组件对象
	  return {
		tabControlTitles: [{
			text:"Product Design",
			src:require("./../../assets/img/newWeb/product.png"),
			activeSrc:require("./../../assets/img/newWeb/productwhite.png"),
			ishover:false,
			isclick:false,
			sometext:'秉承着创造性，尽最大的努力设计出最贴合需求的产品',
		},
		{
			text:"Hardware Ideas",
			src:require('./../../assets/img/newWeb/idea.png'),
			activeSrc:require('./../../assets/img/newWeb/ideawhite.png'),
			ishover:false,
			isclick:true,
			sometext:'精心地挑选和严谨地测试，设备多次迭代只为实现最优解',
		},
		{
			text:"Software Technology",
			src:require("./../../assets/img/newWeb/tech.png"),
			activeSrc:require("./../../assets/img/newWeb/techwhite.png"),
			ishover:false,
			isclick:false,
			sometext:'专业软件工程团队倾情打造，结对编程乐趣无穷',
		},
		{
			text:"Algorithm Support",
			src:require("./../../assets/img/newWeb/demand.png"),
			activeSrc:require("./../../assets/img/newWeb/demandwhite.png"),
			ishover:false,
			isclick:false,
			sometext:'高效算法的编写是提升产品高度的核心',
		},
		],
		curPosition:0,
		saveY:0,
		caoNiMaDeXiaoHuiWenTi:null,
		userID:window.localStorage.getItem("userID"),
		heightFlag:false,
		iconChoose:0,
		// isOne:true,
		// isTwo:false,
		// isThree:false,
		// isFour:false,
		
	  }
  },
  components:{
	bigPicture,
	footerInfo,
	TabControlhome,
	woshishabi,
	meishizhaoshi,
  },
  
  created() {
	
	
  },
  mounted() {
	
  },
  // keep-alive状态下进来的时候的生命周期
  activated() {
  	
  	
  },
  deactivated() {
	
  },
  computed: {
	
	
  },
  methods:{
	  
	tabClick(index) {
		// this.$refs.tabControlhome.curIndex = index;不知道有什么用 让他爬
		this.iconChoose=index
		// 怎么就拿不到数据了呢
		
	},
	
	toScroll(index){
		// 用 class="scroll_title" 添加锚点
		let jump = document.querySelectorAll(".scroll_title")
		let total=0
		total = jump[index-1].offsetTop-85-50  //这里的223是我头部header的高度
		if(index==2){
			
			total = jump[index-1].offsetTop-85  //这里的223是我头部header的高度
		}
		
		let distance = document.documentElement.scrollTop   //获取需要滚动的距离
		// 平滑滚动，时长500ms，每10ms一跳，共50跳
		let step = total / 50
		
		if (total > distance) { //当divArr.[index]offsetTop的距离>滚动条的距离，向下滑动，此时滑动的距离是total
		  smoothDown() //向下滑动
		} 
		function smoothDown () {
			if (distance < total) {
				
				distance += step
				
				window.scrollTo(0,distance)
				setTimeout(smoothDown, 10)
			}
		}
		// function smoothUp () {
		//   if (distance > total) {
		// 	distance -= step

		// 	window.scrollTo(0,distance)
		// 	setTimeout(smoothUp, 10)
		//   } 
	 //   }
		
	},

  },
  mounted () {
    
  },
  destroyed () {
    // window.pageYOffset=0
  },
}
</script>

<style>
	
	.home{
		overflow:-Scroll;
		overflow-x: hidden;
		
		/* height:3685px; */
		position: relative;
		background-color: rgb(255,255,255);
		
		
	}
	/* 去除横向滚动条 太牛了 */
	::-webkit-scrollbar {
	 width: 0 !important;
	}
	::-webkit-scrollbar {
	 width: 0 !important;height: 0;
	}

	.first_scroll_title{
		height: 550px;
		position: relative;
	}
	.homemoreMsgMiddleBox{
		position: absolute;
		top: 370px;
		left: 50%;
		font-size: 54px;
		width: 100%;
		height: 180px;
		/* color: white; */
		/* text-align: center; */
		transform: translateX(-50%);
		display: flex;
		
	}
	.homemoreMsgMiddleInnerBox{
		width: 65%;
		height: 180px;
		margin: 0 auto;
		
	}
	

	
</style>
