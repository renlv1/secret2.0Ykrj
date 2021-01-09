import axios from 'axios'
import qs from 'qs'

let baseURL = 'https://api.secretworth.com' //

axios.defaults.withCredentials = true
let ax = axios.create({
  // withCredentials: true, // 允许cookie
  baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})


export default {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      ax({
        url,
        method: 'get',
        params: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post: (url, params) => {
    return new Promise((resolve, reject) => {
      ax({
        method: 'post',
        url,
        data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
