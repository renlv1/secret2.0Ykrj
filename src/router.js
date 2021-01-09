import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/*eslint-disable*/
export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/home',
      redirect: '/'
    },
    { // 首页
      path: '/',
      name: 'home',
      component: resolve => require(['./views/home.vue'], resolve)
    },
    { // 新闻
      path: '/news',
      name: 'news',
      component: resolve => require(['./views/news.vue'], resolve)
    },
    { // 新闻详情
      path: '/newsDetails',
      name: 'newsDetails',
      component: resolve => require(['./views/newsDetails.vue'], resolve)
    },
    { // 登陆
      path: '/login',
      name: 'login',
      component: resolve => require(['./views/login.vue'], resolve)
    },
    { // 帮助
      path: '/help',
      name: 'help',
      component: resolve => require(['./views/help.vue'], resolve)
    },
    { // 交易中心
      path: '/tradingCenter',
      name: 'tradingCenter',
      component: resolve => require(['./views/tradingCenter.vue'], resolve)
    },
    { // 产品--秘密 renlv
      path: '/productSecret',
      name: 'productSecret',
      component: resolve => require(['./views/productSecret.vue'], resolve)
    },
    { // 技术--人工智能 AI renlv
      path: '/artificial',
      name: 'artificial',
      component: resolve => require(['./views/artificial.vue'], resolve)
    },
    { // 关于我们
      path: '/about',
      name: 'about',
      component: resolve => require(['./views/about.vue'], resolve)
    },
    // {
    //   path: '/proSecret',
    //   name: 'proSecret',
    //   component: resolve => require(['./views/proSecret.vue'], resolve)
    // },
    {
      path: '/proCommunity',
      name: 'proCommunity',
      component: resolve => require(['./views/proCommunity.vue'], resolve)
    },
    // {
    //   path: '/tecBlock',
    //   name: 'tecBlock',
    //   component: resolve => require(['./views/tecBlock.vue'], resolve)
    // },
    {
      path: '/tecIntel',
      name: 'tecIntel',
      component: resolve => require(['./views/tecIntel.vue'], resolve)
    }
  ]
})
