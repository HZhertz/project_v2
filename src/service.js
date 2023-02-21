import axios from 'axios'
import { getToken } from '@/utils/setToken'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api', //把前缀封装一下
  timeout: 3000 //请求超过这个时间就会中断
})

//添加请求拦截器
service.interceptors.request.use(
  (config) => {
    //请求前的操作(获取并设置token)
    config.headers['token'] = getToken('token')
    // console.log(config.headers)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//添加响应拦截器
service.interceptors.response.use(
  (response) => {
    //对相应的数据做些什么
    let { status, message } = response.data
    // console.log(response.data)
    // console.log({ status, message })
    if (status !== 200) {
      Message({ message: message || 'error', type: 'warning' })
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
