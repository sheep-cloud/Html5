/*
  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
import Msite from '../views/Msite/Msite'
// 搜索
import Search from '../views/Search/Search'
// 订单
import Order from '../views/Order/Order'
// 个人
import Profile from '../views/Profile/Profile'
// 登录注册
import Login from '../views/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

// 所有路由
const routes = [
  {path: '/', redirect: '/msite'},
  {path: '/msite', component: Msite, meta: {showFooter: true}},
  {path: '/search', component: Search, meta: {showFooter: true}},
  {path: '/order', component: Order, meta: {showFooter: true}},
  {path: '/profile', component: Profile, meta: {showFooter: true}},
  {path: '/login', component: Login}
]

export default new VueRouter({
  routes
})
