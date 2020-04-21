const { 
  override, 
  fixBabelImports, 
  addPostcssPlugins, 
  overrideDevServer,
  // 设置别名
  addWebpackAlias 
} = require('customize-cra')
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
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
// 打包配置
const appBuildPathFile = () => config => {
  if(config.mode === 'development') {
    console.log('development')
  }
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置（未测试）
    // config.output.path = __dirname + '../dist/demo/';
    // config.output.publicPath = './demo';
    // 添加js打包gzip配置（有）
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024
      })
    )
    // 更改生产模式输出的文件名(有?)
    config.output.filename = 'static/js/[name].js?_v=[chunkhash:8]';
    config.output.chunkFilename = 'static/js/[name].chunk.js?_v=[chunkhash:8]'
  }
  return config
}
// 生产环境去除console.*functions
const dropConsole = () => {
  return config => {
    if (process.env.REACT_APP_ENV === 'production') {
      console.log(process.env.NODE_ENV, 'NODE_ENV')
      console.log(config.mode, 'mode')
      if (config.optimization.minimizer) {
        config.optimization.minimizer.forEach(minimizer => {
          if (minimizer.constructor.name === 'TerserPlugin') {
            minimizer.options.terserOptions.compress.drop_console = true
          }
        })
      }
    }
    return config
  }
}
// 跨域配置
const devServerConfig = () => config => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:18000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// path
const resolveAlias = dir => path.join(__dirname, '.', dir)
module.exports = {
  webpack: override(
    // 自适应
    // addPostcssPlugins([
    //   require('postcss-px2rem')({remUnit:100})
    // ]),
    // antd按需加载
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    // 设置别名
    addWebpackAlias({
      '@': resolveAlias('src'),
      'utils': resolveAlias('src/utils'),
      'config': resolveAlias('src/config'),
      'components': resolveAlias('src/components'),
      'types': resolveAlias('src/types')
    }), 
    // 打包配置
    appBuildPathFile(),
    // 生产环境去除console
    dropConsole(),
  ),
  // 代理
  devServer: overrideDevServer(
    devServerConfig()
  )
}