var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',

  configureWebpack:(config)=>{
    config.entry.app = ['babel-polyfill', './src/main.js'] //入口文件
  },
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img', resolve('src/assets/img'))
      .set('@com', resolve('src/assets/img/community'))
  },

  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
          'import': []
      }
    }
  }
}
