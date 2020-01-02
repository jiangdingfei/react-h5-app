const { override, fixBabelImports, addPostcssPlugins } = require('customize-cra')
module.exports = override(
  addPostcssPlugins([
    require('postcss-px2rem')({remUnit:100})
  ]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
)
