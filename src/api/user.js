import request from '@/utils/request'

export const userRegister = (data) =>
  request({
    url: 'https://big-event-vue-api-t.itheima.net/api/reg',
    method: 'post',
    data
  })
