<template>
	<!-- 这个页面我准备放一些有意思的遮罩图 或者搞一个关系图 -->
	<!-- {{showBigText}}  {{showSmallText}}-->
	<div class="teamInfo">
		<div class="heightfortabbar"></div>
		<div class="teamInfoBox">
			<div class="bigPicBg">
				
				<div class="imgPeople">
					<img :src="imgUrl[currentIndex].src" alt="">
				</div>
				<div class="imgbg">
					<img src="../../assets/img/teampic/teambg.png" alt="">
				</div>
				
			</div>
			<div class="bottomBox">
				<div class="bottomBoxLeft">
					<div class="bottomBoxLeftBigText">
						{{showBigText}}
					</div>
					<div class="bottomBoxLeftSmallText">
						<p>{{showSmallText}}</p>
						
					</div>
				</div>
				<div class="bottomBoxRight">
					<div class="bottomBoxRightBox">
						<div class="bottomBoxRightBoxItem" @click="click(0)">
							
							<div class="bottomBoxRightBoxItemPic" 
							:class="{ bottomBoxRightBoxItemPicClick:currentIndex==0}">
								<img src="../../assets/img/teampic/textBg.png" alt="">
								
								<a href="javascript:"><p>申<br>澳</p></a>
							</div>
						</div>
						<div class="bottomBoxRightBoxItem" @click="click(1)">
							
							<div class="bottomBoxRightBoxItemPic"
							:class="{ bottomBoxRightBoxItemPicClick:currentIndex==1}">
								<img src="../../assets/img/teampic/textBg.png" alt="">
								<a href="javascript:"><p>谷<br>中<br>尉</p></a>
							</div>
						</div>
						<div class="bottomBoxRightBoxItem" @click="click(2)">
							
							<div class="bottomBoxRightBoxItemPic" 
							:class="{ bottomBoxRightBoxItemPicClick:currentIndex==2}">
								<img src="../../assets/img/teampic/textBg.png" alt="">
								
								<a href="javascript:"><p>王<br>宏<br>韬</p></a>
							</div>
						</div>
						<div class="bottomBoxRightBoxItem" @click="click(3)">
							
							<div class="bottomBoxRightBoxItemPic"
							:class="{ bottomBoxRightBoxItemPicClick:currentIndex==3}">
								<img src="../../assets/img/teampic/textBg.png" alt="">
								<a href="javascript:"><p>夏<br>芷<br>萱</p></a>
							</div>
						</div>
						<div class="bottomBoxRightBoxItem" @click="click(4)">
							
							<div class="bottomBoxRightBoxItemPic"
							:class="{ bottomBoxRightBoxItemPicClick:currentIndex==4}">
								<img src="../../assets/img/teampic/textBg.png" alt="">
								<a href="javascript:"><p>李<br>毓<br>欣</p></a>
							</div>
						</div>
						<div class="bottomBoxRightBoxItem" @click="click(5)">
							
							<div class="bottomBoxRightBoxItemPic"
							:class="{ bottomBoxRightBoxItemPicClick:currentIndex==5}">
								<img src="../../assets/img/teampic/textBg.png" alt="">
								<a href="javascript:"><p>孙<br>娜<br>老<br>师</p></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>

export default {
	name: "TeamInfo",
	data() {
		return {
			teamGragh:'',
			showBigText:'申澳',
			showSmallText:'一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉',
			BigText:['申澳','王宏韬','谷中尉','卢勇老师'],
			SmallText:[
				'一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉',
				'一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉',
				'一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉',
				'一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉一些介绍巴拉巴拉',
			],
			imgUrl:[
				{
					src:require('./../../assets/img/teampic/bg.png'),
				},
				{
					src:require('./../../assets/img/teampic/bg.png'),
				},
				{
					src:require('./../../assets/img/teampic/bg.png'),
				},
				{
					src:require('./../../assets/img/teampic/bg.png'),
				},
				{
					src:require('./../../assets/img/teampic/bg.png'),
				},
				{
					src:require('./../../assets/img/teampic/bg.png'),
				},
			],
			currentIndex:0,
			
		};
	},
	components: {

	},
	computed:{

	},
	methods:{
		click(index){
			this.currentIndex=index
			
		
		},
		

	},
	mounted() {
		

	},
}
</script>

<style scoped="scoped">
	.teamInfo{
		width: 100%;
		height: calc(100vh + 85px);
		margin-top: -85px;
		background-color:rgb(247,247,247);
		position: relative;
	}
	.heightfortabbar{
		position: relative;
		
		width: 100%;
		
		height: 170px;
		background-color: #000000;
	}
	.teamInfoBox{
		position: relative;
		
		width: 100%;
		
		height: calc(100vh - 85px);
		
	}
	.bigPicBg{
		
		height: 400px;
		width: 100%;
		position: relative;
	}
	.imgbg{
		position: absolute;
		height: 400px;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.imgbg img{
		height: 400px;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.imgPeople{
		
		height: 400px;
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		overflow: hidden;
	}
	.imgPeople img{
		height: 400px;
		width: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
	}
	.bottomBox{
		height: calc(100vh - 485px);
		width: 100%;
		display: flex;
		position: relative;
	}
	.bottomBoxLeft{
		width: 50%;
		height: calc(100vh - 485px);
		position: relative;
		color: #000000;
	}
	.bottomBoxLeftBigText{
		height: calc(calc(100vh - 485px) / 2);
		width: 100%;
		padding-left: 25%;
		font-size: 36px;
		display: flex;
		align-items: center;
	}
	.bottomBoxLeftSmallText{
		height: calc(calc(100vh - 485px) / 2);
		width: 80%;
		padding-left: 20%;
		font-size: 17px;
		
	}
	.bottomBoxLeftSmallText p{
		line-height: 25px;
	}
	.bottomBoxRight{
		width: 50%;
		height: calc(100vh - 485px);
		display: flex;
	}
	.bottomBoxRightBox{
		padding-bottom: 50px;
		padding-left: 10%;
		padding-right: 20%;
		width: 100%;
		height: calc(100vh - 485px);
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.bottomBoxRightBoxItem{
		width: 12%;
		height: calc(100vh - 535px);
		position: relative;
	}
	
	.bottomBoxRightBoxItemPic{
		/* background-color: rgb(52,66,75); */
		margin-top: 40px;
		height: calc(100vh - 575px);
		width: 100%;
		position: relative;
	}
	.bottomBoxRightBoxItemPicClick{
		/* background-color: rgb(52,66,75); */
		margin-top: 25px;
		height: calc(100vh - 575px);
		width: 100%;
		position: relative;
	}
	.bottomBoxRightBoxItemPic img{
		
		height: calc(100vh - 575px);
		width: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.bottomBoxRightBoxItemPic a{
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #FFFFFF;
	}
	.bottomBoxRightBoxItemPic a p{
		padding: 20px 5px;
	}
</style>
