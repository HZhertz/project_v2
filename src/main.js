import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import service from './service'
import echarts from 'echarts'
import router from '@/router'
// Vue.use(ElementUI)
// Vue.prototype.axios = axios // 挂载到原型上
Vue.prototype.service = service // 挂载到原型上
Vue.prototype.$echarts = echarts // 挂载到原型上
// axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

//路由导航守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('username')) {
    if (to.path !== '/login') {
      next('/login')
    } else next()
  }
  next()
})

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
