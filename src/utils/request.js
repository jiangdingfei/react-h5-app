import axios from 'axios'
import envConfig from 'config/envConfig'
console.log(process.env.REACT_APP_ENV, 'env')
console.log(process.env.NODE_ENV, 'env--')
console.log(envConfig, 'envConfig')
const API = axios.create({
  baseURL: envConfig.baseURL,
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