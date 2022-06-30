const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: false,
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
})

// module.exports = {
// chainWebpack(config) {
//   config.module
//     .rule('svg')
//     .exclude.add(resolve('svg/icons'))
//     .end()
//   config.module
//     .rule('icons')
//     .test(/\.svg$/)
//     .include.add(resolve('src/icons'))
//     .end()
//     .use('svg-sprite-loader')
//     .loader('svg-sprite-loader')
//     .options({
//       symbolId: 'icon-[name]'
//     })
//     .end()
// }
// }
