import request from '@/utils/request'
export default {
    
    createOrders(courseId) {
        return request({
            url: `/eduorder/order/create/${courseId}`,
            method: 'post'
        })
    },

    getOrdersInfo(orderNo){
        return request({
            url: `/eduorder/order/info/${orderNo}`,
            method: 'get'
        })
    }
}