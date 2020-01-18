// 基于打包命令配置的生产环境和开发环境
const ENVIRONMENT = process.env.REACT_APP_ENV;

// 基于环境变量(需要在服务器和开发电脑各自添加环境变量)
// const ENVIRONMENT = process.env.NODE_ENV
export default getEnv(ENVIRONMENT);

function getEnv(env) {
  switch (env) {
    case 'development':
      return {
        baseURL: '',
        imgSrc: ''
      }
    case 'production':
      return {
        baseURL: '',
        imgSrc: ''
      }
    default:
      return null
  }
}