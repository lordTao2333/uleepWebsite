import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')


const TeamInfo = () => import('../views/teamInfo/TeamInfo')

const Thanks = () => import('../views/thanks/Thanks')

const Journey = () => import('../views/journey/Journey')



const DownloadApp = () => import('../views/downloadApp/downloadApp')



const Visualization = () => import('../views/visualization/Visualization')

const Client = () => import('../views/client/Client')
const MoreMSg = () => import('../views/moreMsg/MoreMsg')
const Question = () => import('../views/client/question/Question')
const Suggestion = () => import('../views/client/suggestion/Suggestion')
const Video = () => import('../views/client/videos/Video')
const Time = () => import('../views/client/time/Time')




const Login = () => import('../views/login/Login')


const PeopleClient = () => import('../views/peopleClient/PeopleClient.vue')
const PeopleMsg = () => import('../views/peopleMsg/PeopleMsg.vue')
const PeopleQuestion = () => import('../views/peopleQuestion/PeopleQuestion.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
	  // 这个玩意被我删掉了 导致没有作用 赣
		{ path: "*", redirect: "/" },
		{
			path: '',
			redirect: '/home',
		},
		{
			path: '/visualization',
			name: 'Visualization',
			component: Visualization,
			meta: {
				requiresAuth:true,
				keepTabbar: true
			}
		},
		{
			path: '/downloadApp',
			name: 'DownloadApp',
			component: DownloadApp,
			meta: {
			keepTabbar: true
			}
		},
		{
			path: '/teamInfo',
			name: 'TeamInfo',
			component: TeamInfo,
			meta: {
			keepTabbar: true
			}
		},
		{
			path: '/thanks',
			name: 'Thanks',
			component: Thanks,
			meta: {
			keepTabbar: true
			}
		},
		{
			path: '/journey',
			name: 'Journey',
			component: Journey,
			meta: {
			keepTabbar: true
			}
		},
		{
			path: '/client/:userid',
			name: 'Client',
			component: Client,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/peopleClient/:userid',
			name: 'PeopleClient',
			component: PeopleClient,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/peopleMsg',
			name: 'PeopleMsg',
			component: PeopleMsg,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/peopleQuestion',
			name: 'PeopleQuestion',
			component: PeopleQuestion,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/time',
			name: 'Time',
			component: Time,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/video/:videoIndex',
			name: 'Video',
			component: Video,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/question/:userid',
			name: 'Question',
			component: Question,
			meta: {
			keepTabbar: false
			}
		},
		{
			path: '/suggestion/:userid',
			name: 'Suggestion',
			component: Suggestion,
			meta: {
			keepTabbar: false
			}
		},
	
		{
			path: '/moreMsg',
			name: 'MoreMSg',
			component: MoreMSg,
			meta: {
			keepTabbar: false
			}
		},
		
		
		{
			path: '/home',
			name: 'Home',
			component: Home,
			meta: {
			requiresAuth:false,
			keepTabbar: true
			}
		},
	
		{
			path: '/profile',
			name: 'Login',
			component: Login,
			meta: {
			keepTabbar: true
			}
		},

		
  ],
  // router真尼玛强
  // 新开一个页面的话直接回到顶部
  // 会不会影响keep-alive 还是暂时不用这个的好
  
  //让keepalive爬
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
   mode: 'history',
   base: process.env.BASE_URL,
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
