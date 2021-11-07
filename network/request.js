import axios from 'axios'
export function request(config){

    //创建axios的实例
    const instance =axios.create({
      // baseURL:'http://152.136.185.210:8000/api/n3',
      // timeout:5000
		baseURL: "http://8.131.65.200:8089",
		// responseType: 'blob',
    })
	
    //axios拦截器就是帅 拦截了之后都得返回
    instance.interceptors.request.use(config =>{
   
    //对信息进行添加，文本过滤，请求图标(那个转圈圈的图标)，登录要加上token
    return config//拦截了记得还回去
    },err =>{
     
    })

    //响应拦截
    instance.interceptors.response.use(res =>{
     
      //其实需要的只是res.data
      return res
    },err =>{
      
    })

    //发送真正的网络请求
    return instance(config)
    //本来这个就是返回一个promise 就不需要之后的包装了，包装的版本在下边，解释main.js中的问题
    //不过包装一层也无伤大雅

}
export function PublishMessage(path, data) {
  let instance = axios.create({
     baseURL: "http://8.131.65.200:8089",// 换成你自己后台地址
  });
  //axios拦截器就是帅 拦截了之后都得返回
    var token
	instance.interceptors.request.use(config =>{
	if(window.localStorage.getItem("token")){
		token =JSON.parse(window.localStorage.getItem("token"))
	}
	if(token){
		config.headers.Authorization =token
		
		//在这里的config.date是拿到了个几把拿到了 
	}
	
	
	//对信息进行添加，文本过滤，请求图标(那个转圈圈的图标)，登录要加上token
	return config//拦截了记得还回去
	},err =>{
		return Promise.reject(err)
		
		
	})
  return instance({
    url: path,
    method: "post",
	data:data,
  });
}


