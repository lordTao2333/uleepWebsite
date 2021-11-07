import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	// nowUserID:'',
    nowToken:null,
    // nowUserName:''
	screenWidth: document.documentElement.clientWidth,
	screenHeight: document.documentElement.clientHeight,
	
	userID:'',
	year:'',
	month:'',
	day:'',
	
	isQuestion:false,
	

	isDownLoadShow1:false,
	isDownLoadShow2:false,
	isDownLoadShow3:false,
	isDownLoadShow4:false,
    },
  mutations: {
    setToken(state,{nowToken}) {
      state.nowToken = nowToken
    },
	setWidth(state, value) {
		state.screenWidth = value
	},
	setHeight(state, value) {
		state.screenHeight = value
	},
	USER_INFO(state,info){
	  state.userID = info
	},
	YEAR_INFO(state,info){
	  state.year = info
	},
	MONTH_INFO(state,info){
	  state.month = info
	},
	DAY_INFO(state,info){
	  state.day = info
	},
	
	QUESTION_INFO(state,info){
	  state.isQuestion = info
	},
	

	ISDOWNLOADSHOW1_INFO(state,info){
	  state.isDownLoadShow1 = info
	},
	ISDOWNLOADSHOW2_INFO(state,info){
	  state.isDownLoadShow2 = info
	},
	ISDOWNLOADSHOW3_INFO(state,info){
	  state.isDownLoadShow3 = info
	},
	ISDOWNLOADSHOW4_INFO(state,info){
	  state.isDownLoadShow4 = info
	},
 //    setUserID(state,{nowUserID}) {
	// 	state.nowUserID = nowUserID
	// },
	// setUserName(state,{nowUserName}) {
	// 	state.nowUserName = nowUserName
	// },
	updatefont(state, data) {
		state.fontColor = data
		data ? state.Color = '#fff': state.Color = '#333'
	},

  },
  actions: {
	setUserInfo({ commit },data){
	  commit('USER_INFO',data)
	},
	setYearInfo({ commit },data){
	  commit('YEAR_INFO',data)
	},
	setMonthInfo({ commit },data){
	  commit('MONTH_INFO',data)
	},
	setDayInfo({ commit },data){
	  commit('DAY_INFO',data)
	},
	
	setQuestionInfo({ commit },data){
	  commit('QUESTION_INFO',data)
	},
	

	setIsDownLoadShow1({ commit },data){
	  commit('ISDOWNLOADSHOW1_INFO',data)
	},
	setIsDownLoadShow2({ commit },data){
	  commit('ISDOWNLOADSHOW2_INFO',data)
	},
	setIsDownLoadShow3({ commit },data){
	  commit('ISDOWNLOADSHOW3_INFO',data)
	},
	setIsDownLoadShow4({ commit },data){
	  commit('ISDOWNLOADSHOW4_INFO',data)
	},
	
  },
  getters:{
	  getUserInfo: (state) => {
		return state.userID
	  },
	  getYearInfo: (state) => {
	  	return state.year
	  },
	  getMonthInfo: (state) => {
	  	return state.month
	  },
	  getDayInfo: (state) => {
	  	return state.day
	  },
	  
	  getQuestionInfo: (state) => {
	  	return state.isQuestion
	  },
	  

	  getIsDownLoadShow1Info: (state) => {
	  	return state.isDownLoadShow1
	  },
	  getIsDownLoadShow2Info: (state) => {
	  	return state.isDownLoadShow2
	  },
	  getIsDownLoadShow3Info: (state) => {
	  	return state.isDownLoadShow3
	  },
	  getIsDownLoadShow4Info: (state) => {
	  	return state.isDownLoadShow4
	  },
  }
})
