<template>
	<div class="suggestion">
		<div class="suggestionBox">
			<div class="suggestionBoxTop">
				<div class="suggestionBoxTopLeft"></div>
				<div class="suggestionBoxTopRight">睡眠建议</div>
			</div>
			<div class="suggestionBoxItem" v-for="(item,index) in suggestions" 
			v-if="item.isShow" @click="moreSuggestion(index)">
				<div class="suggestionBoxItemBox">
					<div class="suggestionBoxItemBoxLeft">{{item.text}}</div>
					<div class="suggestionBoxItemBoxRight" v-if="item.isRight&&item.isDone">
						<van-icon name="success"  size="25" color="#0276DB"/>
					</div>
					<div class="suggestionBoxItemBoxRight" v-if="item.isVideo||item.isTime">
						<van-icon name="arrow" size="25"  color="#0276DB" />
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import { getSuggestion } from "../../../network/graghmsg.js"
export default{
  name: 'Suggestion',
  components:{
	
	
  },
  data(){//组件对象
	  return {
		  
		userID:'',
		suggestions:[
			{
				text:'喝一杯热牛奶',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'泡脚',
				isShow:0,
				isRight:false,
				isVideo:false,
				isTime:true,
				isDone:false,
			},
			{
				text:'提高环境温度',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'降低环境温度',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'不要玩手机',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'入睡前90分钟沐浴',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'少吃晚饭',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'低强度锻炼',
				isShow:0,
				isRight:false,
				isVideo:false,
				isTime:true,
				isDone:false,
			},
			{
				text:'清洁床单',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'如果饿了，吃点小吃',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'用白噪音机',
				isShow:0,
				isRight:false,
				isVideo:true,
				isTime:false,
				isDone:false,
			},
			{
				text:'删掉待办事项中非必要事件',
				isShow:0,
				isRight:true,
				isVideo:false,
				isTime:false,
				isDone:false,
			},
			{
				text:'做20到30分钟剧烈运动',
				isShow:0,
				isRight:false,
				isVideo:true,
				isTime:false,
				isDone:false,
			},
			{
				text:'用香薰疗法放松',
				isShow:0,
				isRight:false,
				isVideo:false,
				isTime:true,
				isDone:false,
			},
			
		],
		
	  }
		
  },
  created() {
	
	this.getSuggestionMsg()
  },
  mounted() {
	
	
	
  },
  
  activated() {
	
  },
  deactivated() {
	
  },
  computed: {
	
    },
  methods:{
	moreSuggestion(index){
		// 这个isDone可以联合数据库做数据持久化
		if(this.suggestions[index].isRight){
			this.suggestions[index].isDone=true
		}
		else if(this.suggestions[index].isVideo){
			setTimeout(() => {
				this.$router.push('/video/'+index)
			}, 600);
			
		}else if (this.suggestions[index].isTime){
			setTimeout(() => {
				this.$router.push('/time')
			}, 600);
		}
	   
	},
	getSuggestionMsg() {
		
		this.userID=this.$route.params.userid
	
		getSuggestion(this.userID).then(res => {
		
	    if (res.data.status == 0) {
	      this.userID = res.data.userID;
		  this.$store.dispatch('setUserInfo',res.data.userID)
		  for(var i =0;i<res.data.suggestion.length;i++){
			  this.suggestions[i].isShow=res.data.suggestion[i]
			  
		  }
			
	    } else {
	      
	    }
	    });
		
	},
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.suggestion{
	width: 100vw;
	position: relative;
	background-color: rgb(254, 254, 254);
}
.suggestionBox{
	
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
}
.suggestionBoxTop{
	position: relative;
	height: 20px;

	font-size: 14px;
	font-weight: 600;
	color: rgb(109,113,116);
	
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
}

.suggestionBoxTopLeft{
	height: 20px;
	width: 3px;
	background-color:rgba(162,210,255, 1.0);
	margin-right: 8px;

	border-radius: 2px;
}
.suggestionBoxTopRight{
	height: 20px;
	line-height: 20px;
}
.suggestionBoxItem{
	height: 80px;
	margin-top: 5px;
	margin-bottom: 5px;
	border-radius: 10px;
	padding: 20px 30px 20px 40px;
	width: 100%;
	background: linear-gradient(120deg, rgba(222,239,255, 1.0) 70%,rgba(255,223,226, 1.0));
}
.suggestionBoxItem:active{
	background: linear-gradient(120deg, rgba(162,210,255, 1.0) 70%,rgba(255,175,204, 1.0));
}
.suggestionBoxItemBox{
	height: 40px;
	width: 100%;
	display: flex;
	
}
.suggestionBoxItemBoxLeft{
	width: 80%;
	height: 40px;
	font-size: 22px;
	line-height: 40px;
	color: #000000;
}
.suggestionBoxItemBoxRight{
	width: 20%;
	height: 40px;
	
	line-height: 40px;
	display: flex;
	align-items: center;
	justify-content:flex-end;
}
</style>
