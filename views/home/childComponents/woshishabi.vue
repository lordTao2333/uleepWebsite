<template>
	<div class="woshishabi" >
		<!-- 我要写四组v-if来恶心自己 再也不改了反正 -->
		<div v-if="iconChoose==0">
			<div class="heightHolder"></div>
			<div class="woshishabiPic">
				<img src="../../../assets/img/newWeb/product.png" alt="">
			</div>
			<div class="heightHolder1"></div>
			<div class="woshishabiBigText">Product Design & Development</div>
			<div class="heightHolder2"></div>
			<div class="woshishabiSmallText">
				<p>
					使用眼罩作为载体，通过传感器收集信息，以App作为信息枢纽进行对于实体的控制，
					实现了一个由传感器、微控制器、智能手机App、云服务器、服务网站组成的睡眠监测系统，
					形成一个完整的“助眠—>监测—>唤醒—>助眠”睡眠管理闭环。
				</p>
				
			</div>
			<div class="heightHolder3"></div>
			<div class="woshishabiButtom" >
				<div class="woshishabiButtomText"  @click="huadongParentMethod">LEARN MORE</div>
				<div class="woshishabiButtomTextBoder">LEARN MORE</div>
			</div>
			<div class="yigengunzi"></div>
		</div>
		<!--  -->
		<!-- 第二个 -->
		<!--  -->
		<div v-if="iconChoose==1">
			<div class="heightHolder"></div>
			<div class="woshishabiPic">
				<img src="../../../assets/img/newWeb/idea.png" alt="">
			</div>
			<div class="heightHolder1"></div>
			<div class="woshishabiBigText">Hardware Ideas & Development</div>
			<div class="heightHolder2"></div>
			<div class="woshishabiSmallText">
				<p>
					眼罩实体使用arduino nano 33 ble sense集成传感器主控板作为信息处理模块，
					对作为数据收集模块的MX1003A生命体征传感器进行控制，
					发送收集到的数据到服务器；同时与手机App交互对于紫光LED灯实现定时渐亮处理。
					
				</p>
				
			</div>
			<div class="heightHolder3"></div>
			<div class="woshishabiButtom">
				<div class="woshishabiButtomText"  @click="huadongParentMethod">LEARN MORE</div>
				<div class="woshishabiButtomTextBoder">LEARN MORE</div>
			</div>
			<div class="yigengunzi"></div>
		</div>
		<!--  -->
		<!-- 第三个 -->
		<!--  -->
		<div v-if="iconChoose==2">
			<div class="heightHolder"></div>
			<div class="woshishabiPic">
				<img src="../../../assets/img/newWeb/tech.png" alt="">
			</div>
			<div class="heightHolder1"></div>
			<div class="woshishabiBigText">Software Technology & Development</div>
			<div class="heightHolder2"></div>
			<div class="woshishabiSmallText">
				<p>
					手机App与眼罩实体使用BLE通信，一方面对实体进行控制，拥有预约睡眠、设定唤醒时间
					等功能，体现物联网这一核心思想；
					另一方面传输数据至云服务器，为数据的多端共享提供保障；
					同时App还拥有部分wbView页面，在一定程度上实现了数据可视化。
				</p>
				
			</div>
			<div class="heightHolder3"></div>
			<div class="woshishabiButtom">
				<div class="woshishabiButtomText"  @click="huadongParentMethod">LEARN MORE</div>
				<div class="woshishabiButtomTextBoder">LEARN MORE</div>
			</div>
			<div class="yigengunzi"></div>
		</div>
		<!--  -->
		<!-- 第四个 -->
		<!--  -->
		<div v-if="iconChoose==3">
			<div class="heightHolder"></div>
			<div class="woshishabiPic">
				<img src="../../../assets/img/newWeb/demand.png" alt="">
			</div>
			<div class="heightHolder1"></div>
			<div class="woshishabiBigText">Algorithm Support & Development</div>
			<div class="heightHolder2"></div>
			<div class="woshishabiSmallText">
				<p>
					Google实验室使用手机的陀螺仪和麦克风收集人的体征信号和声音信号，并以此进行睡眠周期划分，
					这种方式也给本小组带来了启示。
					相信结合眼罩实体的陀螺仪数据和传感器收集的体征数据、增大样本量之后，机器学习算法会产生较好的效果。
				</p>
				
			</div>
			<div class="heightHolder3"></div>
			<div class="woshishabiButtom" >
				<div class="woshishabiButtomText" @click="huadongParentMethod" >LEARN MORE</div>
				<div class="woshishabiButtomTextBoder">LEARN MORE</div>
			</div>
			<div class="yigengunzi"></div>
		</div>
	</div>
	
</template>

<script>
	export default{
	  name: 'woshishabi',
	  props:{
	  	iconChoose:{
	  		
	  	},
		},
		data(){
			return{
				bigtext:'',
				smalltext:'',
			}
			
		},
		mounted() {
			
		},
		methods:{
			// 子组件第哦啊用父组件方法或属性使用$parent
			huadongParentMethod(){
				

				this.$parent.toScroll(2)
			}
		},
	}
</script>

<style scoped="scoped">
	.woshishabi{
		height:652px ;
		background-image: url(../../../assets/img/newWeb/AboutUsleep.png);
		background-size:auto 200px ;
		background-repeat: no-repeat;
		background-position: 50% 4%;
		position: relative;
	}
	.heightHolder{
		height: 90px;
	}
	.heightHolder1{
		height: 15px;
	}
	.heightHolder2{
		height: 25px;
	}
	.heightHolder3{
		height: 30px;
	}
	.woshishabiPic{
		height: 180px;
		width: auto;
		position: relative;
	}
	.woshishabiPic img{
		height: 180px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.woshishabiBigText{
		font-size: 24px;
		font-weight: 500;
		text-align: center;
		color: #000000;
	}
	.woshishabiSmallText{
		width: 40%;
		font-size: 16px;
		font-weight: 400;
		margin: 0 auto;
		text-align: left;
		color: #000000;
	}
	.woshishabiSmallText p{
		line-height: 30px;
		text-indent: 2em;
	}
	.woshishabiButtom{
		margin: 0 auto;
		height: 40px;
		position: absolute;
		left: 50%;
		top: 82%;
		transform: translate(-50%,-50%);
		width: 50%;
	}
	/* 边上的那个框框 天才写法我淦 */
	.woshishabiButtomTextBoder{
		padding: 0px 25px;
		height: 35px;
		line-height: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-47%,-43%);
		font-weight: 700;
		font-size: 14px;
		color: white;
		z-index: -100;
		border-bottom: #CD2C39 solid 2px;
		border-right: #CD2C39 solid 2px;
	}
	.woshishabiButtomText{
		
		padding: 0px 25px;
		height: 35px;
		line-height: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		
		font-weight: 700;
		font-size: 14px;
		color: #CD2C39;
		border:#CD2C39 solid 2px;
		
		cursor: pointer;
		transition-duration: 0.25s;
		transition-timing-function: ease-in-out;
	}
	.woshishabiButtomText:hover{
		height: 37px;
		line-height: 37px;
		font-size: 15px;
		color: #FFFFFF;
		background-color: #CD2C39;
		box-shadow:2px 2px 3px #aaaaaa;
	}
	.yigengunzi{
		height: 100px;
		width: 1.5px;
		position: absolute;
		background-color: #000000;
		top:88%;
		left: 34%;
		
	}
	@media screen and (min-width: 300px) and (max-width: 1000px) {
		.woshishabi{
			height:652px ;
			background-image: url(../../../assets/img/newWeb/AboutUsleep.png);
			background-size:auto 150px ;
			background-repeat: no-repeat;
			background-position: 50% 4%;
			position: relative;
		}
		.heightHolder{
			height: 50px;
		}
		.heightHolder1{
			height: 10px;
		}
		.heightHolder2{
			height: 20px;
		}
		.heightHolder3{
			height: 25px;
		}
		.woshishabiPic{
			height: 150px;
			width: auto;
			position: relative;
		}
		.woshishabiPic img{
			height: 150px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
		.woshishabiBigText{
			font-size: 20px;
			font-weight: 400;
			text-align: center;
			color: #000000;
		}
		.woshishabiSmallText{
			width: 40%;
			font-size: 12px;
			font-weight: 300;
			margin: 0 auto;
			text-align: left;
			color: #000000;
		}
		.woshishabiSmallText p{
			line-height: 30px;
			text-indent: 2em;
		}
		.woshishabiButtom{
			margin: 0 auto;
			height: 40px;
			position: absolute;
			left: 50%;
			top: 82%;
			transform: translate(-50%,-50%);
			width: 50%;
		}
		/* 边上的那个框框 天才写法我淦 */
		.woshishabiButtomTextBoder{
			padding: 0px 25px;
			height: 35px;
			line-height: 35px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-47%,-43%);
			font-weight: 700;
			font-size: 14px;
			color: white;
			z-index: -100;
			border-bottom: #CD2C39 solid 2px;
			border-right: #CD2C39 solid 2px;
		}
		.woshishabiButtomText{
			
			padding: 0px 25px;
			height: 35px;
			line-height: 35px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			
			font-weight: 700;
			font-size: 14px;
			color: #CD2C39;
			border:#CD2C39 solid 2px;
			
			cursor: pointer;
			transition-duration: 0.25s;
			transition-timing-function: ease-in-out;
		}
		.woshishabiButtomText:hover{
			height: 37px;
			line-height: 37px;
			font-size: 15px;
			color: #FFFFFF;
			background-color: #CD2C39;
			box-shadow:2px 2px 3px #aaaaaa;
		}
		.yigengunzi{
			height: 100px;
			width: 1.5px;
			position: absolute;
			background-color: #000000;
			top:88%;
			left: 34%;
			
		}
		
	}
</style>
