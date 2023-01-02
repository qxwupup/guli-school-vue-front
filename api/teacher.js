import request from '@/utils/request'

export default {
    //分页讲师查询的方法
  getTeacherList(current,size) {
    return request({
      url: `/eduservice/front/teacher/page/${current}/${size}`,
      method: 'post'
    })
  },
  //讲师详情的方法
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduservice/front/teacher/info/${teacherId}`,
      method: 'get'
    })
  }

}