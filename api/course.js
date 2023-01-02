import request from '@/utils/request'

export default {
  //条件分页课程查询的方法
  getCourseList(current,size,searchObj) {
    return request({
      url: `/eduservice/front/course/page/${current}/${size}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: '/eduservice/coursefront/getFrontCourseInfo/'+id,
      method: 'get'
    })
  }

}