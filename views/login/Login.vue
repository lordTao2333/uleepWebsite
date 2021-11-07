<template>
  <div class="login">
	<!-- <light @changeBackground="changeBG"/> -->
<!-- 	<lightlow @changeBackground="changeBG"></lightlow>
	<div class="logintop"></div>
	<div class="loginshang"></div>
	<div class="loginmiddle"></div>
	<div class="loginbuttom"></div> -->
	<div class="loginzhongjian"></div>
	<div class="cotn_principal">
	  <div class="cont_centrar">
	    <div class="cont_login">
	      <div class="cont_info_log_sign_up">
	        <div class="col_md_login">
	          <div class="cont_ba_opcitiy">
	            <h2>LOGIN</h2>
	            <p>If you are entering this website for the first time, please register on the right.</p>
	            <button class="btn_login" @click="cambiar_login()">登 陆</button>
	          </div>
	        </div>
	        <div class="col_md_sign_up">
	          <div class="cont_ba_opcitiy">
	            <h2>SIGN UP</h2>
	            <p>We are particularly honored that you can come to our website and join us soon.</p>
	            <button class="btn_sign_up" @click="cambiar_sign_up()">注 册</button>
	          </div>
	        </div>
	      </div>
	      <div class="cont_back_info">
	        <div class="cont_img_back_grey"> <img src="../../assets/img/newWeb/po.jpg" alt="" /> </div>
	      </div>
	      <div class="cont_forms" >
	        <div class="cont_img_back_"> <img src="../../assets/img/newWeb/po.jpg" alt="" /> </div>
	        <div class="cont_form_login"> 
			<!-- 调试用 -->
			  <a href="javascript:" @click="ocultar_login_sign_up()" >
				×
			  </a>
	          <h2>LOGIN</h2>
			  <!--  -->
			  <!-- 登录部分 -->
			  <!--  -->
	          <input type="text" placeholder="Username" name="username" v-model="username"/>
	          <input type="password" placeholder="Password" name="password" v-model="password"/>
	          <button class="btn_login" @click="cambiar_login();onLogin()">登 陆</button>
			  
			  
	        </div>
	        <div class="cont_form_sign_up"> 
			<!-- 调试用 -->
			  <a href="javascript:"  @click="ocultar_login_sign_up()">
				×
			  </a>
	          <h2>SIGN UP</h2>
			  <!--  -->
			  <!-- 注册部分 -->
			  <!--  -->
	          <input type="text" placeholder="Username" name="username" v-model="usernameR"/>
	          <input type="password" placeholder="Password"  name="password" v-model="passwordR"/>
	          <input type="password" placeholder="Confirm Password" name="confirmpassword" v-model="check"/>
	          <button class="btn_sign_up" @click="cambiar_sign_up();onRegister()">注 册</button>
			  
			  
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	
  </div>
</template>

<script>
	// import { cambiar_login,cambiar_sign_up,ocultar_login_sign_up } from '../../loginMethod/js/loginJS.js'
	import light from './../../components/content/highlight/light.vue'
	import lightlow from './childComponents/lightlow.vue'
	import { mapState,mapMutations } from "vuex"
	import { PostMessage } from "../../network/login.js"
export default {
  name: "login",
  data() {
    return {
     username:'',
	 password:'',
	 isLogin:false,
	 usernameR: '',
	 passwordR: '',
	 check:'',
	 isRegister:false
    };
  },
  components: {

  	light,
	lightlow,
  	},
	computed:{
		...mapState(['nowToken'])
	},
  	methods:{
		...mapMutations(['setToken']),
		// ...mapActions(['setToken']),
		
		onRegister() {
			// 先进行非空判定
			if(this.usernameR==''||this.passweordR==''||this.check==''){
				this.$toast({
					type: "fail",
					message: `请输入完整登陆信息`,
					forbidClick: true,
					duration: 2000
				});
				return 0
			}
			// 验证密码
			if(this.check===this.passwordR){
				// console.log('密码验证正确')
			}
			else {
				this.$toast({
					type: "fail",
					message: `密码不一致`,
					forbidClick: true,
					duration: 2000
				});
				return 0
			}
			PostMessage("/register", {"username":this.usernameR ,"password":this.passwordR}).then(res => {
				
			if (!res.data.status) {
				setTimeout(() => {
					this.isRegister=true
				}, 1000);
				// 这他妈明明是vant的弹窗
				this.$dialog
					.confirm({
					title: "温馨提示",
					message: "您确定注册吗?"
				})
				.then(() => {
				this.username='你已完成登陆'
				this.password='******'
				this.usernameR='你已完成注册'
				this.passwordR='******'
				this.check='******'
				/* 保存一下刚刚登陆的账号 */
				//其实这里保存的还是一个"***"之类的字符串，还久那个烦
				window.localStorage.removeItem("userID");
				window.localStorage.removeItem("token");
				window.localStorage.setItem("userID", JSON.stringify(res.data.userID));
				//这个token其实只是放在header里头，然后在每一个请求数据页面的时候进行验证就行
				window.localStorage.setItem("token", JSON.stringify(res.data.token));
				// window.localStorage.setItem("userName", JSON.stringify(res.data.username));
				//那我这个直接就在这里拿到这个id了呀，我还做尼玛的本地保存呢，能用就行，他妈的，爷的活干完了
				
				// console.log(JSON.parse(window.localStorage.getItem("userID")))
				// console.log(JSON.parse(window.localStorage.getItem("token")))
				//为什么这儿打印的token和之前的本地保存的token不一样呀
				// console.log(JSON.parse(window.localStorage.getItem("userName")))
				this.setToken({
					nowToken:res.data.token
				}),
				// this.setUserID({
				// 	nowUserID:res.data.userID
				// }),
				// this.setUserName({
				// 	nowUserName:res.data.username
				// }),
				//在这里token是拿到了，并且nowToken的值发生了改变
				
				this.$toast({
					type: "success",
					message: `注册成功`,
					forbidClick: true,
					duration: 2000
				});
				
				})
				.catch(err => err);
				
				
					setTimeout(() => {
						this.$router.push('/visualization')
					}, 4000);
				} else if (res.data.status) {
				
				this.$toast({
					type: "fail",
					message: `注册失败`,
					forbidClick: true,
					duration: 2000
				});
			} 
			});
			
		},
		onLogin() {
			// 先进行非空判定
			if(this.username==''||this.passweord==''){
				this.$toast({
					type: "fail",
					message: `请输入完整登陆信息`,
					forbidClick: true,
					duration: 800
				});
				return 0
			}
			
			//这个地方可以把settimeput函数用一层promise实现，更加好看，但是我这种也不是不可以，哈哈哈
			PostMessage("/login", {"username":this.username ,"password":this.password}).then(res => {//这后头的就是传入了之前的数据
			if (res.data.status==0 ) {
				this.$toast({
					type: "success",
					message: `登录成功`,
					forbidClick: true,
					duration: 800
				});
				setTimeout(() => {
					this.isLogin=true
					this.username='你已完成登陆'
					this.password='******'
				}, 1000);
				
				//这一步跳转实现了
				setTimeout(() => {
					this.$router.push('/visualization')
				}, 1200);
				
				/* 保存一下刚刚登陆的账号 */
				//其实这里保存的还是一个"***"之类的字符串，还久那个烦
				window.localStorage.removeItem("userID");
				window.localStorage.removeItem("token");
				window.localStorage.setItem("userID", JSON.stringify(res.data.userID));
				//这个token其实只是放在header里头，然后在每一个请求数据页面的时候进行验证就行
				window.localStorage.setItem("token", JSON.stringify(res.data.token));
				// window.localStorage.setItem("userName", JSON.stringify(res.data.username));
				//那我这个直接就在这里拿到这个id了呀，我还做尼玛的本地保存呢，能用就行，他妈的，爷的活干完了
			
				//为什么这儿打印的token和之前的本地保存的token不一样呀
				// console.log(JSON.parse(window.localStorage.getItem("userName")))
				this.setToken({
					nowToken:res.data.token
				});
				// this.setUserID({
				// 	nowUserID:res.data.userID
				// }),
				// this.setUserName({
				// 	nowUserName:res.data.username
				// }),
				//在这里token是拿到了，并且nowToken的值发生了改变
			
				} else if (res.data.status==1) {
					this.username='账号错误'
					this.password='请重新输入账号信息'
					this.$toast({
						type: "fail",
						message: `登录失败`,
						forbidClick: true,
						duration: 800
					});
				} 
					
			});
			
		},
  		changeBG() {
  			this.$store.commit('updatefont', !this.$store.state.fontColor)
  		},
		// changeBG1() {
		// 	this.$store.commit('updatefont1', !this.$store.state.fontColor1)
		// },
		cambiar_login() {
			document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
			document.querySelector('.cont_form_login').style.display = "block";
			document.querySelector('.cont_form_sign_up').style.opacity = "0";               
		
			setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
		
			setTimeout(function(){    
			document.querySelector('.cont_form_sign_up').style.display = "none";
			},200);  
		},
		
		cambiar_sign_up() {
			document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
			document.querySelector('.cont_form_sign_up').style.display = "block";
			document.querySelector('.cont_form_login').style.opacity = "0";
		
			setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
			},100);  
		
			setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
			},400);  
		
		
		},   
		ocultar_login_sign_up() {
		
			document.querySelector('.cont_forms').className = "cont_forms";  
			document.querySelector('.cont_form_sign_up').style.opacity = "0";               
			document.querySelector('.cont_form_login').style.opacity = "0"; 
		
			setTimeout(function(){
			document.querySelector('.cont_form_sign_up').style.display = "none";
			document.querySelector('.cont_form_login').style.display = "none";
			},500);  
		
		},
  	},
  	
};
</script>

<style scoped>

.login {
	/* display: flex;
	justify-content: center;
	align-items: center; */
    width: 100%;
    height: 100vh;
	position: relative;
	background-color: #000000;
	background-image: url(../../assets/img/newWeb/loginbgbgbg.jpg);
	background-size: auto 100%;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-color: rgb(53,43,44);
	/* display: flex; */
/* 	margin: 0px auto;
	padding: 0px;
	
	font-family: 'Lato', sans-serif; */

}
.loginzhongjian{
	position: absolute;
	height: 120px;
	width: 100%;
	top: 360px;
	background-color: rgba(228, 228, 228, 0.5);
}
.loginshang{
	height: 610px;
	width: 100%;
	background-color: rgba(228, 228, 228, 0.5);
	position: absolute;
	top: 85px;


}
.loginmiddle{
	height: 610px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.85);
	position: absolute;
	top: 85px;
	clip-path: ellipse(121% 122% at 102% 141%);
}
.logintop{
	height: 85px;
	width: 100%;
	background-color: #000000;
	position: absolute;
	top: 0;
}
.loginbuttom{
	height: calc(100vh - 695px);
	width: 100%;
	background-color: #000000;
	position: absolute;
	top: 695px;
}
.loginbuttomforText{
	height: 84px;
	width: 100%;
	background-color: #000000;
	position: relative;
	/* align-content: flex-end; */
}
.boderbutt{
	width: 800px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.buttitem{
	
}
.centersss{
	width: 30px;
}
.buttonsss {
    border-radius: 15px;
    border: 1px solid #E8E8E8;
    color: #EBEDF0;
    padding: 18px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
	font-weight: 700;
	cursor: pointer;
}
.buttonsss:hover{
	background-color: #888888;
}

* {
	margin: 0px auto;
	padding: 0px;
	font-family: 'Lato', sans-serif;
}


.cotn_principal {
position: absolute;
width: 100%;
height: 100%;
text-align: center;
}


.cont_centrar {
	position: relative;
	float: left;
	width: 100%;
    margin-top: calc(calc(100vh - 504px) * 0.7 );
	
}

.cont_login {
	position: relative;
	width: 640px;
	left: 60%;
	margin-left: -320px;
  
}

.cont_back_info {  
	position: relative;
	float: left;
	width: 640px;
	height: 280px;
	overflow: hidden;
	background-color: #fff;
	margin-top: 100px;
	box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
}

.cont_forms {
	position: absolute;
	overflow: hidden;
	top:100px;
	left: 0px;
	width: 320px;
	height: 280px;
	background-color: rgba(64,58,58,0.9);
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}

.cont_forms_active_login {
	box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
	height: 420px;  
	top:20px;
	left: 0px;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;

}

.cont_forms_active_sign_up {
	box-shadow: 1px 10px 30px -10px rgba(0,0,0,0.5);
	height: 420px;  
	top:20px;
	left:320px;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}

.cont_img_back_grey {
	position: absolute;
	width: 950px;
	top:-80px;
	left: -116px;
}

.cont_img_back_grey > img {
	width: 100%;
	-webkit-filter: grayscale(100%);     filter: grayscale(100%);
	opacity: 0.2;
	animation-name: animar_fondo;
	animation-duration: 20s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: alternate;

}

.cont_img_back_ {
	position: absolute;
	width: 950px;
	top:-80px;
	left: -116px;
}

.cont_img_back_ > img {
	width: 100%;
	opacity: 0.3;
	animation-name: animar_fondo;
	animation-duration: 20s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

.cont_forms_active_login > .cont_img_back_ {
	top:0px;  
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}

.cont_forms_active_sign_up > .cont_img_back_ {
	top:0px;  
	left: -435px;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}
 

.cont_info_log_sign_up {
	position: absolute;
	width: 640px;
	height: 280px;
	top: 100px;
	z-index: 1;
} 

.col_md_login {
	position: relative;
	float: left;
	width: 50%;
}

.col_md_login > h2 {
	font-weight: 400;
	margin-top: 70px;
	color: rgba(64,58,58,0.7);
}

.col_md_login > p {
	font-weight: 400;
	margin-top: 15px;
	width: 80%;
	color: #37474F;
}

.btn_login { 
	background-color: rgba(64,58,58,0.7);
	border: none;
	padding: 10px;
	width: 200px;
	border-radius:3px;
	box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
	color: #ffffff;
	margin-top: 10px;
	cursor: pointer;
}

.col_md_sign_up {
	position: relative;
	float: left;
	width: 50%;  
}

.cont_ba_opcitiy > h2 {
	font-weight: 400;
	color: rgba(64,58,58,0.7);
}

.cont_ba_opcitiy > p {
	font-weight: 400;
	margin-top: 15px;
	color: #757575;
}
/* ----------------------------------
background text    
------------------------------------
 */
.cont_ba_opcitiy {
	position: relative;
	background-color: rgba(228,228,228, 0.7);
	width: 80%;
	border-radius:5px ;
	margin-top: 60px;
	padding: 15px 0px;

}

.btn_sign_up { 
	background-color: rgba(201,198,178,0.6);
	border: none;
	padding: 10px;
	width: 200px;
	border-radius:3px;
	box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
	color: rgba(64,58,58,0.7);
	margin-top: 10px;
	cursor: pointer;
}
.cont_forms_active_sign_up {
	z-index: 2;  
}


@-webkit-keyframes animar_fondo {
	from { -webkit-transform: scale(1) translate(0px);
	-moz-transform: scale(1) translate(0px);
	-ms-transform: scale(1) translate(0px);
	-o-transform: scale(1) translate(0px);
	transform: scale(1) translate(0px); }
	to { -webkit-transform: scale(1.5) translate(50px);
	-moz-transform: scale(1.5) translate(50px);
	-ms-transform: scale(1.5) translate(50px);
	-o-transform: scale(1.5) translate(50px);
	transform: scale(1.5) translate(50px); }
}
@-o-keyframes identifier {
	from { -webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1); }
	to { -webkit-transform: scale(1.5);
	-moz-transform: scale(1.5);
	-ms-transform: scale(1.5);
	-o-transform: scale(1.5);
	transform: scale(1.5); }

}
@-moz-keyframes identifier {
	from { -webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1); }
	to { -webkit-transform: scale(1.5);
	-moz-transform: scale(1.5);
	-ms-transform: scale(1.5);
	-o-transform: scale(1.5);
	transform: scale(1.5); }

}
@keyframes identifier {
	from { -webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1); }
	to { -webkit-transform: scale(1.5);
	-moz-transform: scale(1.5);
	-ms-transform: scale(1.5);
	-o-transform: scale(1.5);
	transform: scale(1.5); }
}
.cont_form_login {
	position: absolute;
	opacity: 0;
	display: none;
	width: 320px;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}

.cont_forms_active_login {
	z-index: 2;  
}
.cont_forms_active_login  >.cont_form_login {
}

.cont_form_sign_up {
	position: absolute;
	width: 320px;
	float: left;
	opacity: 0;
	display: none;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
}

  
.cont_form_sign_up > input {
	text-align: left;
	padding: 15px 5px;
	margin-left: 10px;
	margin-top: 20px;
	width: 260px;
	border: none;
	color: #757575;
}

.cont_form_sign_up > h2 {
	margin-top: 50px; 
	font-weight: 400;
	color: #FFFFFF;
}


.cont_form_login > input {
	padding: 15px 5px;
	margin-left: 10px;
	margin-top: 20px;
	width: 260px;
	border: none;
	text-align: left;
	color: #757575;
}

.cont_form_login > h2 {
	margin-top: 110px; 
	font-weight: 400;
	color: #ffffff;
}
.cont_form_login > a,.cont_form_sign_up > a  {
	color: #757575;
	position: relative;
	float: left;
	margin: 10px;
	margin-left: 30px;
}
@media screen and (min-width: 300px) and (max-width: 1400px) {
	.cont_login {
		position: relative;
		width: 640px;
		left: 50%;
		margin-left: -320px;
	  
	}
	.cont_centrar {
		position: relative;
		float: left;
		width: 100%;
	    margin-top: calc(calc(100vh - 504px) * 0.5 );
		
	}
	.loginzhongjian{
		position: absolute;
		height: 120px;
		width: 100%;
		top: calc(calc(100vh - 205px) * 0.6 );
		background-color: rgba(228, 228, 228, 0.5);
	}
}
</style>
