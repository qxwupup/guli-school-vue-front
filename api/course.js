import request from '@/utils/request'

export default {
  
  getCourseList(current,size,searchObj) {
    return request({
      url: `/eduservice/front/course/page/${current}/${size}`,
      method: 'post',
      data: searchObj
    })
  },
  
  getAllSubject() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'get'
    })
  },
  
  getCourseInfo(courseId) {
    return request({
      url: `/eduservice/front/course/info/${courseId}`,
      method: 'get'
    })
  },
}