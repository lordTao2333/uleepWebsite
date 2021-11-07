import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入网络请求
import "./network/request";

// 全局引入vant，一个UI组件库
import vant from "vant";
import { Icon , Calendar , Lazyload , Grid , GridItem ,Dialog , Toast , ShareSheet, Radio , RadioGroup,Divider ,Progress,Circle   } from "vant";
//按需引入
Vue.use(Icon).use(Calendar).use(Lazyload).use(Grid).use(GridItem).use(Dialog).use(Toast).use(ShareSheet).use(Radio ).use(RadioGroup).use(Divider).use(Progress).use(Circle);

// 引入 ECharts 主模块
let echarts = require('echarts');
// let echarts = require('echarts/lib/echarts');
// 引入折线图/饼图等组件
// require('echarts/lib/chart/line')
// require('echarts/lib/chart/pie')

// 引入提示框和标题组件

// require('echarts/lib/component/tooltip');
// require("echarts/lib/component/dataZoom");
// require("echarts/lib/component/grid");



//vue全局注入echarts
Vue.prototype.$echarts = echarts

// 全局引入样式
import 'vant/lib/index.less';
import "./assets/css/base.css";


//守卫路由

router.beforeEach((to,from,next)=>{
	
	if(to.matched.some(record => record.meta.requiresAuth)){
		//用户未登录 需要跳转登录页面
		if(window.localStorage.getItem("userID")==null){
			next({
				path:'/profile',
				query:{
					redirect:to.fullPath
				}
			})
		}else{
			next()
		}
		
	}else{
		next()
	}
	
})
Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()//给$bus一个初始化

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
