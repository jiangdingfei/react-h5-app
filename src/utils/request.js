import axios from 'axios'

const API = axios.create({
  baseURL: '/api',
})
// 请求拦截器
API.interceptors.request.use(config => {
  // 请求发生前处理
  // console.log(config, 'config')
  return config
}, error => {
  return Promise.reject(error);
});
// 响应拦截器
API.interceptors.response.use(response => {
  // 响应数据
  console.log(response, 'response')
  return response;
}, error => {
  return Promise.reject(error);
})
export default API