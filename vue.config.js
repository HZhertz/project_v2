const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false, //自动打开
    proxy: {
      '/api': {
        // target用于配置你允许访问的计算机名称,即是你的api接口的服务器地址
        target: 'http://1.116.64.64:5004/api2/', // 接口的前缀
        // target: 'http://127.0.0.1:3007/api/',
        // ws: true, //启用websocket
        changeOrigin: true, //开启代理跨域
        pathRewrite: {
          '^/api': '' //重写路径
        }
      }
    }
  }
})
