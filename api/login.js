import request from '@/utils/request'
export default {
    
    submitLoginUser(userInfo) {
        return request({
            url: `/educenter/member/login`,
            method: 'post',
            data: userInfo
        })
    },

    getUserInfo(){
        return request({
            url: `/educenter/member/get/info`,
            method: 'get'
        })
    }
}