import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill' // 兼容旧浏览器
import router from './router'
// import 'swiper/dist/css/swiper.min.css'


// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

// import 'element-ui/lib/theme-chalk/index.css'
import { i18n } from './i18n/config'

// 引入nprogress
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css' // 这个样式必须引入

import axios from 'axios'
import api from './api'

Vue.prototype.$fetch = api

Vue.config.productionTip = false

const lang = window.localStorage.getItem('secretLang') || 'cn'
Vue.prototype.$lang = lang.toLowerCase()

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
