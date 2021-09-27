const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    https: false,
    open: true
  },
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
