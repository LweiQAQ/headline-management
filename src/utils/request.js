import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const request = axios.create({
  baseURL: '',
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    ElMessage.error(res.data.message || '服务状态异常')
    return Promise.reject(res.data)
  },
  (error) => {
    if (error.response?.status === 401) {
      router.push('/login')
    }
    ElMessage.error(error.response.data.message || '服务状态异常')
    return Promise.reject(error)
  }
)

export default request
