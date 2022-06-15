// 配置请求的拦截器
import axios from 'axios'

const service = axios.create()

service.interceptors.request.use()

service.interceptors.response.use()

export default service
