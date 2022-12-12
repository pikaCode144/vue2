import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入全局样式global
import './assets/css/global.css'
// 导入组件库
import ElementUI from 'element-ui'
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'
// 设置baseURL
axios.defaults.baseURL = ''
// 在请求拦截器当中进行token的携带
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer' + ' ' + window.sessionStorage.getItem('token')
  return config
})
// 将axios挂载到Vue构造函数的原型对象上
Vue.prototype.$http = axios
// 配置Vue插件
Vue.use(ElementUI)

// 防止Vue在启动时候产生提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
