//方便管理
import {request} from './request'

export function getApp(){
	return request({
		url: '/download',
		method: "get",
		
	})
}
// export function getHomeMultidatas(){
// 	return request({
// 		url: '/map1',
// 		method: "get",
// 	})
// }
// export function getHomeGoods(type,page){//因为数据有三个类型，所以需要传参数
// 	return request({
// 		url: '/home/data',
// 		params:{
// 			type,
// 			page
// 		}
// 	})
// }