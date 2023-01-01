import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'

const service = axios.create({
    baseURL: 'http://localhost:9001',
    timeout: 20000
})

service.interceptors.request.use(
    config=>{
        if(cookie.get('user_token')){
            config.headers['token']=cookie.get('user_token');
        }
        return config
    },
    err=>{
        return Promise.reject(err);
    }
)

export default service
