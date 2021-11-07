<template>
	<div class="mieshizhaoshi">
		<div class="mieshizhaoshileft">
			<div class="mieshizhaoshileftBox">
				<div class="mieshizhaoshileftBoxBigText">How it work</div>
				<div class="mieshizhaoshileftBoxSmallBox">
					<div class="mieshizhaoshileftBoxSmallBoxInside" @click="haochang(0)" >
						<div class="mieshizhaoshileftBoxSmallBoxInsideLeft">
							预约睡眠
						</div>
						<div class="mieshizhaoshileftBoxSmallBoxInsideRight" :class="{mieshizhaoshileftBoxSmallBoxInsidebg: currentindex==0}">
							1
						</div>
					</div>
					<div class="mieshizhaoshileftBoxSmallBoxInside" @click="haochang(1)" >
						<div class="mieshizhaoshileftBoxSmallBoxInsideLeft">
							光唤醒
						</div>
						<div class="mieshizhaoshileftBoxSmallBoxInsideRight" :class="{ mieshizhaoshileftBoxSmallBoxInsidebg:currentindex==1}">
							2
						</div>
					</div>
					<div class="mieshizhaoshileftBoxSmallBoxInside" @click="haochang(2)" >
						<div class="mieshizhaoshileftBoxSmallBoxInsideLeft">
							智能唤醒
						</div>
						<div class="mieshizhaoshileftBoxSmallBoxInsideRight" :class="{mieshizhaoshileftBoxSmallBoxInsidebg:currentindex==2 }">
							3
						</div>
					</div>
					<div class="mieshizhaoshileftBoxSmallBoxInside" @click="haochang(3)" >
						<div class="mieshizhaoshileftBoxSmallBoxInsideLeft">
							数据可视化
						</div>
						<div class="mieshizhaoshileftBoxSmallBoxInsideRight":class="{mieshizhaoshileftBoxSmallBoxInsidebg:currentindex==3 }">
							4
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mieshizhaoshimiddle"></div>
		<div class="mieshizhaoshiright">
			<div class="mieshizhaoshirightBox">
				<div class="mieshizhaoshirightBoxBigText">
					{{nowbigText}}
				</div>
				<div class="mieshizhaoshirightBoxSmallText">
					<p class="hanggao">
						{{nowsmallText}}
					</p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
	  name: 'mieshizhaoshi',
	  props:{
	  	iconChoose:{
	  		
	  	},
		},
		data(){
			return{
				// isnobg:[0,1,1,1],
				currentindex:0,
				smallText:[
					'通过算法对于用户适宜的入睡的时间进行预定,综合分析睡眠监控的数据,使用手机App为用户提供睡眠建议,制作提高睡眠质量的睡眠清单.',
					'用户可以自由选择睡眠场景,在不适合使用闹钟的环境如图书馆,办公室等,使用紫光LED进行渐亮光唤醒.',
					'结合传感器收集到的用户睡眠体征,分析用户的睡眠周期,深度剖析深度睡眠状态,形成睡眠质量报告,从而实现在用户预设的时间前后进行光唤醒或用户可选择的噪音唤醒.',
					'在移动端和PC端都实现数据可视化功能,将服务器数据进行分析计算并实现多端展示,结合平台特点凸显设备优势对于可视化内容进行多维度设计和高精准分类,给用户提供最直观的信息获取渠道.',
				],
				bigText:[
					'预约睡眠','光唤醒','智能唤醒','数据可视化'
				],
				nowsmallText:'计算机考试发卷子之后，先截一张卷子的图，确认一下是不是乱序。如果不是乱序就均分选择题。如果是乱序，我会把题目下载下来发到腾讯文档上，按着腾讯文档的顺序做题。做的时候务必看一下自己有没有这道题。',
				nowbigText:'预约睡眠',
			}
			
		},
		mounted(){
			// 轮播
		  const timer = setInterval(()=>{
		    if(this.currentindex==3){
				this.currentindex=0
				
			}
			else{
				this.currentindex+=1
			}
			this.nowbigText=this.bigText[this.currentindex]
			this.nowsmallText=this.smallText[this.currentindex]
		  },5000)
		  this.$once('hook:beforeDestroy', ()=>{
		    clearInterval(timer)
		  })
		},
		methods:{
			haochang(index){
				
				this.currentindex=index
				this.nowbigText=this.bigText[index]
				this.nowsmallText=this.smallText[index]
			}
		},
	}
</script>

<style scoped="scoped">
	.mieshizhaoshi{
		
		height:640px ;
		background-image: url(../../../assets/img/newWeb/homechatPic.jpg);
		background-size:100% auto ;
		background-repeat: no-repeat;
		background-position: 50% 0%;
		position: relative;
		display: flex;
		background-color: #403A3A;
	}
	
	.mieshizhaoshileft{
		width: 34%;
		height: 620px;
		/* background-color: #0000FF; */
		position: relative;
		
	}
	.mieshizhaoshileftBox{
		width: 73%;
		height: 100%;
		margin-left: 27%;
		font-family:"Playfair Display', serif";
		
	}
	.mieshizhaoshileftBoxBigText{
		font-size: 50px;
		font-weight: 500;
		color: #FFFFFF;
		font-family:"Playfair Display', serif";
		height: 190px;
		padding-top: 88px;
	}
	.mieshizhaoshileftBoxSmallBox{
		height: auto;
		width: 80%;
		margin-left: 20%;
		display: flex;
		position: relative;
		justify-content: center;
		flex-wrap: wrap;
	}
	.mieshizhaoshileftBoxSmallBoxInside{
		
		width: 200px;
		height: 55px;
		font-size: 22px;
		font-weight: 400;
		color: #FFFFFF;
		font-family:"Playfair Display', serif";
		transition-duration: 0.22s;
		transition-timing-function: ease-in-out;
		
	}
	
	.mieshizhaoshileftBoxSmallBoxInside:hover .mieshizhaoshileftBoxSmallBoxInsideRight {
		background-color: #FFFFFF;
		color: #000000;
	}
	.mieshizhaoshileftBoxSmallBoxInsidebg {
		background-color: #FFFFFF;
		color: #000000;
	}

	.mieshizhaoshileftBoxSmallBoxInsideLeft{
		display: inline-block;
		width: 140px;
		height: 40px;
		line-height: 40px;
		text-align: right;
		vertical-align: top;
		font-weight: 600;
		cursor: pointer;
		/* align-items: center; */
	}
	
	.mieshizhaoshileftBoxSmallBoxInsideRight{
		cursor: pointer;
		display: inline-block;
		width: 34px;
		height: 33px;
		line-height: 31px;
		margin-left: 15px;
		text-align: center;
		/* vertical-align: top; */
		/* align-items: center; */
		border: 2.2px solid #FFFFFF;
		border-radius:50%;
		font-size: 18px;
		font-family:"courier";
		font-weight: 700;
		
	}
	.mieshizhaoshimiddle{
		width: 2px;
		height: 640px;
		background-color: #ffffff;
	}
	.mieshizhaoshiright{
		width: 60%;
		height: 620px;
		position: relative;
		/* background-color: #0000FF; */
	}
	.mieshizhaoshirightBox{
		position: relative;
		height: 80%;
		width: 80%;
		padding-left: 60px;
		padding-top: 200px;
		font-family:"Playfair Display', serif";
		color: #FFFFFF;
	}
	.mieshizhaoshirightBoxBigText{
		font-size: 35px;
		height: 35px;
		font-weight: 700;
	}
	.mieshizhaoshirightBoxSmallText{
		padding-top: 30px;
		font-size: 16px;
		font-weight: 500;
	}
	.hanggao{
		line-height: 30px;
	}
	@media screen and (min-width: 700px) and (max-width: 1000px) {
		.mieshizhaoshi{
			
			height:540px ;
			background-image: url(../../../assets/img/newWeb/homechatPic.jpg);
			background-size:100% auto ;
			background-repeat: no-repeat;
			background-position: 50% 0%;
			position: relative;
			display: flex;
			background-color: #403A3A;
		}
		
		.mieshizhaoshileft{
			width: 34%;
			height: 520px;
			/* background-color: #0000FF; */
			position: relative;
			
		}
		.mieshizhaoshimiddle{
			width: 2px;
			height: 540px;
			background-color: #ffffff;
		}
		.mieshizhaoshiright{
			width: 60%;
			height: 520px;
			position: relative;
			/* background-color: #0000FF; */
		}
		.mieshizhaoshileftBoxBigText{
			font-size: 40px;
			font-weight: 500;
			color: #FFFFFF;
			font-family:"Playfair Display', serif";
			height: 190px;
			padding-top: 88px;
		}
		.mieshizhaoshileftBoxSmallBox{
			height: auto;
			width: 100%;
			margin-left: -10%;
			display: flex;
			position: relative;
			justify-content: center;
			flex-wrap: wrap;
		}
		.mieshizhaoshileftBoxSmallBoxInside{
			
			width: 200px;
			height: 55px;
			font-size: 22px;
			font-weight: 400;
			color: #FFFFFF;
			font-family:"Playfair Display', serif";
			transition-duration: 0.22s;
			transition-timing-function: ease-in-out;
			
		}
		
		.mieshizhaoshileftBoxSmallBoxInside:hover .mieshizhaoshileftBoxSmallBoxInsideRight {
			background-color: #FFFFFF;
			color: #000000;
		}
		.mieshizhaoshileftBoxSmallBoxInsidebg {
			background-color: #FFFFFF;
			color: #000000;
		}
		
		.mieshizhaoshileftBoxSmallBoxInsideLeft{
			display: inline-block;
			width: 140px;
			height: 40px;
			line-height: 40px;
			text-align: right;
			vertical-align: top;
			font-weight: 600;
			cursor: pointer;
			/* align-items: center; */
		}
		
		.mieshizhaoshileftBoxSmallBoxInsideRight{
			cursor: pointer;
			display: inline-block;
			width: 34px;
			height: 33px;
			line-height: 31px;
			margin-left: 15px;
			text-align: center;
			/* vertical-align: top; */
			/* align-items: center; */
			border: 2.2px solid #FFFFFF;
			border-radius:50%;
			font-size: 18px;
			font-family:"courier";
			font-weight: 700;
			
		}
		.mieshizhaoshimiddle{
			width: 2px;
			height: 640px;
			background-color: #ffffff;
		}
		
		.mieshizhaoshirightBoxBigText{
			font-size: 30px;
			height: 30px;
			font-weight: 600;
		}
		.mieshizhaoshirightBoxSmallText{
			padding-top: 30px;
			font-size: 14px;
			font-weight: 400;
		}
		.hanggao{
			line-height: 20px;
		}
		
	}
</style>
