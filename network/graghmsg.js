import {request} from "./request"


export function getDetail(value){
	return request({
		url:'/detail',
		params:{
			value
		}
	})
}
export function getClient(userid) {
  return request({
    url: "/client",
	params: {
		userid
	}
  })
}

export function getQuestion(userid) {
  return request({
    url: "/question",
	params: {
		userid
	}
  })
}
export function getSuggestion(userid) {
  return request({
    url: "/suggestion",
	params: {
		userid
	}
  })
}

// export function getSubcategory(maitKey) {
  // return request({
  //   url: "/subcategory",
  //   params: {
  //     maitKey
  //   }
  // })
// }

// export function getCategoryDetail(miniWallkey, type) {
  // return request({
  //   url: "/subcategory/detail",
  //   params: {
  //     miniWallkey,
  //     type
  //   }
  // })
// }
