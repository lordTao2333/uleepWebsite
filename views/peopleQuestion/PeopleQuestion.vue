<template>
	<div class="question">
		<light></light>
		<PeopleNavBar class="clientNav" >
			<div slot="left" class="leftIcon" @click="$router.push('/peopleClient/wht')">
				<van-icon name="arrow-left" size="22px" color="#cccccc"/>
				</div>
			<div slot="center" >唤 醒 评 分</div>
			<div slot="right"  class="rightIcon"></div>
		</PeopleNavBar>
		<div class="questionGragh">
			<div class="questionGraghBox">
				<div id="light"></div>
			</div>
			<div class="questionGraphSmallBox">
					<div class="questionGraphSmallBoxItem">
						<div class="questionGraphSmallBoxItemTop">
							光唤醒<strong>持续</strong>时间：
						</div>
						<div class="questionGraphSmallBoxItemBottom">
							<div class="questionGraphSmallBoxItemBottomLeft">
								{{allTime}}
							</div>
							<div class="questionGraphSmallBoxItemBottomRight">
								分钟
							</div>
							
						</div>
						
					</div>
					<div class="Middle"></div>
					<div class="questionGraphSmallBoxItem">
						<div class="questionGraphSmallBoxItemTop">
							光唤醒<strong>开始</strong>时间：
						</div>
						<div class="questionGraphSmallBoxItemBottom">
							<div class="questionGraphSmallBoxItemBottomLeft">
								{{startHour}}
							</div>
							<div class="questionGraphSmallBoxItemBottomRight">
								时{{startMinute}}分
							</div>
							
						</div>
						
					</div>
				</div>

		</div>
		<div class="questionBox">
			<div class="questionBoxTop">
				<div class="questionBoxTopLeft">
					
				</div>
				<div class="questionBoxTopRight">
					提交您的睡眠感受
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
					提 交 评 分
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import light from '@/components/content/highlight/light'
import PeopleNavBar from "@/components/common/peopleNavBar/PeopleNavBar";
import { getQuestion } from "../../network/graghmsg.js"
import { PostMessage } from "../../network/login.js"
export default{
  name: 'PeopleQuestion',
  components:{
	PeopleNavBar,
	light
  },
  data(){//组件对象
	  return {
	  
		allTime:15,
		startHour:7,
		startMinute:23,
		questions:[
			{
				q:'睡眠评分',
				haveInput:1,
				
				haveRadio:0,
				a0:'是',
				a1:'否',
				choose:'0',
				inputValue:'',
			},
		],
		radio: '1',
		userID:'',
		light:'',
		light_option: {
			color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
		    title: {
				show:false,
		        text: '渐变堆叠面积图'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
				icon:'circle',
				top:5,
		        data: ['今日光唤醒曲线', '历史光唤醒曲线'],
				textStyle:{
					color:'rgba(231, 231, 231, 1.0)'
				}
		    },
		    toolbox: {
				bottom: "0%",
		        feature: {
		            saveAsImage: {}
		        }
		    },
		   grid: {
				top:'10%',
				left: 0,
				right: 0,
				bottom: 0,
				// containLabel: true
		   },
		    xAxis: [
		        {
		            type: 'category',
		            boundaryGap: false,
					data: ['7:23', '7:24', '7:25', '7:26', '7:27', 
						'7:28','7:29','7:30','7:31','7:32','7:33',
						'7:34','7:35','7:36','7:37',
						]
		        }
		    ],
		    yAxis: {
				min:null,
				max:null,
				show:false,
				type: 'value',
				axisLabel: {
					formatter: '{value} W'
				},
				axisPointer: {
					snap: true
				}
			},
		    series: [
		        {
		            name: '今日光唤醒曲线',
		            type: 'line',
		            stack: '总量',
		            smooth: true,
		            lineStyle: {
		                width: 0
		            },
		            showSymbol: false,
		            areaStyle: {
						color: 'rgba(128, 255, 165,0.8)'

		            },
		            emphasis: {
		                focus: 'series'
		            },
		            data: [0, 1, 8, 27, 64, 
						125,216, 343, 512, 729, 
						1000,1331,1728, 2197,2744, 
					]
		        },
		        {
		            name: '历史光唤醒曲线',
		            type: 'line',
		            stack: '总量',
		            smooth: true,
		            lineStyle: {
		                width: 0
		            },
		            showSymbol: false,
		            areaStyle: {
						color: 'rgba(0, 221, 255,0.8)'
		            
		            },
		            emphasis: {
		                focus: 'series'
		            },
		            data: [0, 1, 8, 27, 64,
		            	125,216, 343, 512, 729, 
		            	1000,1331,1728, 2197,2744, 
		            ]
		        },
		        
		    ]
		},
	  }
	  
  },
  created() {
	this.getQuestionMsg()
	
  },
  mounted() {
	this.init()
	
	
  },
  
  activated() {
	
  },
  deactivated() {
	
  },
  computed: {
	
    },
	// 2数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
	watch: {
	//观察quality_option的变化
		quality_option: {
			handler(newVal, oldVal) {
			if (this.chart) {
			if (newVal) {
				this.light.setOption(newVal);
			}
			else {
				this.light.setOption(oldVal);
			}
		} 
		else {
			this.init();
		}
		},
		deep: true //对象内部属性的监听，关键。
		}
	},
  methods:{
	  init(){
	  	// 基于准备好的dom，初始化echarts实例
	  	this.light = this.$echarts.init(document.getElementById('light'))
	  	// 绘制图表，this.HeartChart_option是数据
	  	this.light.setOption(this.light_option,true)
	  },
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
			"userID":'"wht"',
			}).then(res => {
				
				this.$store.dispatch('setQuestionInfo',true)
			});
			
	},
  }
}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}

.clientNav{
	position: relative;
	
}
.leftIcon{
	position: absolute;
	top: 62%;
	left: 25px;
	transform: translate(-50%,-50%);
	
}
.rightIcon{
	position: absolute;
	top: 62%;
	right: 25px;
	transform: translate(50%,-50%);
	
}
.question{
	height: 100vh;
	width: 100vw;
	position: relative;
	background: linear-gradient(rgba(44,115,167, 1.0) ,rgba(162,210,255, 1.0));
}
.questionGragh{
	height: calc(100vh - 280px);
	width: 100%;
}
.questionGraghBox{
	height: calc(100vh - 410px);
	width: 100%;
	padding: 10px 0px;
}
#light{
	min-height: 200px;
	height: calc(100vh - 430px);
	width: 100%;
}
.questionBox{
	position: relative;

	width: 100vw;
	background-color:rgba(189,224,254, 0.2);

	display: flex;
	flex-wrap: wrap;
	align-content: space-around;
	margin-bottom: 10px;
}
.questionGraphSmallBox{
	position: relative;
	height: 120px;
	width: 100%;
	background-color: rgba(189,224,254, 0.2);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	color: rgb(241, 241, 241);
	margin-bottom: 10px;
}
.questionGraphSmallBoxItem{
	width: calc(calc(94vw - 3px) * 0.5);
	height: 120px;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	border-radius: 10px;
	
}
.Middle{
	width: 3px;
	height: 60%;
	border-radius: 3px;
	display: flex;
	align-self: center;

	background-color: rgb(241, 241, 241);
}
.questionGraphSmallBoxItemTop{
	width: 100%;
	height: 24px;
	text-align: left;
	line-height: 24px;
	color: rgb(241, 241, 241);
	font-size: 18px;
	padding-left: 16px;
}
.questionGraphSmallBoxItemBottom{
	width: 100%;
	height: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	
}
.questionGraphSmallBoxItemBottomLeft{
	width: 40%;
	min-width: 60px;
	height: 40px;
	text-align: center;
	font-size:40px;
	line-height: 40px;
	color: rgb(241, 241, 241);
	font-weight: 600;
}
.questionGraphSmallBoxItemBottomRight{
	display: flex;
	text-align: right;
	align-self: flex-end;
	font-size: 16px;
	padding-bottom: 6px;
	color: rgb(241, 241, 241);
}
.questionBoxTop{
	width: 94vw;
	position: relative;
	height: 30px;
	margin-top: 30px;
	font-size: 16px;
	color: #FFFFFF;
	font-weight: 600;
	
	display: flex;
	/* 他妈的只有items是对于当前的 */
	align-items: center;
	justify-content: flex-start;
	
}
.questionBoxTopLeft{
	height: 12px;
	width: 12px;
	background: linear-gradient(100deg, rgba(49, 130, 188, 0.4) 60%,rgba(255,175,204, 1.0));
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
	background:rgba(49, 130, 188, 0.4);
	border-radius: 10px;
	position: relative;
}

.questionBoxItemQuestion{
	height: 30px;
	width: 100%;
	padding-left: 10px;
	color: #FFFFFF;
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
	color: #FFFFFF;
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
	color: #FFFFFF;
	font-size: 17px;

}
.van-radio__icon .van-icon{
	border: 1px solid #909193;
}
.questionBoxItemInput{
	height: 30px;
	line-height: 30px;
	width: 100%;
	color: #FFFFFF;
	font-size: 17px;
	padding-left: 8px;
}
input{
	border-radius: 8px;
	border: none;
	padding-left: 5px;
}
.questionBoxBottom{
	height: 60px;
	width: 100%;
	position: relative;
}

.questionBoxBottomBotton{
	position: absolute;
	left: 50%;
	top: 40%;
	transform: translate(-50%,-50%);
	width: calc(100vw - 40px);
	height: 40px;
	background-color: rgba(49, 130, 188, 0.5);
	color: #FFFFFF;
	display: flex;
	/* 这一套才是文字居中 */
	justify-content:center ;
	align-items: center;
	font-weight: 600;
	font-size: 18px;
	border-radius: 10px;
}
.questionBoxBottomBotton:active{
	background: linear-gradient(120deg, rgba(162,210,255, 1.0) 50%,rgba(255,175,204, 1.0));
	color: #FFFFFF;
}
</style>
