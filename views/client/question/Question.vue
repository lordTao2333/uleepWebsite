<template>
	<div class="question">
		<div class="questionBox">
			<div class="questionBoxTop">
				<div class="questionBoxTopLeft">
					
				</div>
				<div class="questionBoxTopRight">
					填写问卷即可获取个性化睡眠计划推荐哦~
				</div>
			</div>
			<div class="questionBoxItem" v-for="(item,index) in questions">
				
				<div class="questionBoxItemQuestion">{{item.q}}</div>
				<div class="questionBoxItemInput" v-if="item.haveInput">
					<input type="text" v-model="questions[index].inputValue">
				</div>
				<div class="vanRadioGroup"  v-if="item.haveRadio">
					<van-radio-group v-model="questions[index].choose">
						<div class="questionBoxItemChoose" >
							<van-radio name="1">{{item.a0}}</van-radio>
						</div>
						<div class="questionBoxItemChoose1">
							<van-radio name="2">{{item.a1}}</van-radio>
						</div>
					  
					  
					</van-radio-group>
				</div>
				

			</div>
			<div class="questionBoxBottom">
				<div class="questionBoxBottomBotton" @click="subMit()">
					提交
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getQuestion } from "../../../network/graghmsg.js"
import { PostMessage } from "../../../network/login.js"
export default{
  name: 'Question',
  components:{
	
	
  },
  data(){//组件对象
	  return {
		questions:[
			{
				q:'身高',
				haveInput:1,
				
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'体重',
				haveInput:1,
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'一周有几天在12点之后睡觉',
				haveInput:1,
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'入睡的平均时长是多少',
				haveInput:1,
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'午睡的时长多少',
				haveInput:1,
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'每周的运动时间是多少小时',
				haveInput:1,
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'性别',
				haveInput:0,
				haveRadio:1,
				a0:'男',
				a1:'女',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否吸烟',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否在床上办公',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否处于舒适的环境温度',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否处在一个长期、高强度的项目中',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否会因为烦心事失眠',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否有勤更换床单的习惯',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否经常更换睡眠地点',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
			{
				q:'是否有睡前玩手机的习惯',
				haveInput:0,
				haveRadio:1,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
		],
		radio: '1',
		userID:'',
		
	  }
	  
  },
  created() {
	this.getQuestionMsg()
	
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
	getQuestionMsg() {
		
		this.userID=this.$route.params.userid
	
		getQuestion(this.userID).then(res => {

	    if (res.data.status == 0) {
	      this.userID = res.data.userID;
		  this.$store.dispatch('setUserInfo',res.data.userID)
	
	    } else {
	      
	    }
	    });
		
	},
	subMit() {
			PostMessage("/question", {
			"userID":this.userID,
			}).then(res => {
			
				this.$store.dispatch('setQuestionInfo',true)
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
.question{
	width: 100vw;
	position: relative;
	background-color: rgb(254, 254, 254);
}
.questionBox{
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 94vw;
	background-color:rgba(189,224,254, 1.0);
	border-radius: 39px;
	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	margin-top: 20px;
	margin-bottom: 20px;
}
.questionBoxTop{
	width: 94vw;
	position: relative;
	height: 30px;
	margin-top: 50px;
	font-size: 14px;
	color: rgb(109,113,116);
	font-weight: 600;
	
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
	
}
.questionBoxTopLeft{
	height: 17px;
	width: 5px;
	background: linear-gradient(100deg, rgba(162,210,255, 1.0) 60%,rgba(255,175,204, 1.0));
	margin-right: 8px;
	margin-left: 20px;
	border-radius: 5px;
}
.questionBoxTopRight{
	height: 17px;
	line-height: 17px;
}
.questionBoxItem{
	padding: 10px 5px 10px 5px;
	margin: 10px 20px 10px 20px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: flex-start;
	background:rgba(162,210,255, 1.0);
	border-radius: 10px;
	position: relative;
}

.questionBoxItemQuestion{
	height: 30px;
	width: 100%;
	padding-left: 10px;
	color: #000000;
	line-height: 30px;
}
.vanRadioGroup{
	position: relative;
	height: 50px;
	width: 80%;
	margin-left: 8px;
}
.questionBoxItemChoose{
	position: absolute;
	left: 0;
	top: 12.5px;
	transform: translateY(-50%);
	height: 25px;
	line-height: 25px;
	width: 100%;
	color: #000000;
	font-size: 17px;

}
.questionBoxItemChoose1{
	position: absolute;
	left: 0;
	top: 37.5px;
	transform: translateY(-50%);
	height: 25px;
	line-height: 25px;
	width: 100%;
	color: #000000;
	font-size: 17px;

}
.van-radio__icon .van-icon{
	border: 1px solid #909193;
}
.questionBoxItemInput{
	height: 30px;
	line-height: 30px;
	width: 100%;
	color: #000000;
	font-size: 17px;
	padding-left: 8px;
}
input{
	border-radius: 8px;
	border: none;
	padding-left: 5px;
}
.questionBoxBottom{
	height: 100px;
	width: 100%;
	position: relative;
}
.questionBoxBottomBotton{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	width: 120px;
	height: 30px;
	background-color: rgba(162,210,255, 1.0);
	color: #000088;
	display: flex;
	/* 这一套才是文字居中 */
	justify-content:center ;
	align-items: center;
	
	font-size: 17px;
	border-radius: 10px;
}
.questionBoxBottomBotton:active{
	background: linear-gradient(120deg, rgba(162,210,255, 1.0) 50%,rgba(255,175,204, 1.0));
	color: #FFFFFF;
}
</style>
