const { override, fixBabelImports, addPostcssPlugins, overrideDevServer, addWebpackAlias } = require('customize-cra')
const path = require('path')
// module.exports = override(
//   addPostcssPlugins([
//     require('postcss-px2rem')({remUnit:100})
//   ]),
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: 'css',
//   }),

// )

// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: '127.0.0.1:18000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
// path
const resolveAlias = dir => path.join(__dirname, '.', dir)
module.exports = {
  webpack: override(
    addPostcssPlugins([
      require('postcss-px2rem')({remUnit:100})
    ]),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    // 设置别名
    addWebpackAlias({
      '@': resolveAlias('src')
    }) 
  ),
  // 代理
  devServer: overrideDevServer(
    devServerConfig()
  )
}