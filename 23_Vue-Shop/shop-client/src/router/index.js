/*
  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite'
import Search from '../views/Search/Search'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'

// 声明使用插件
Vue.use(VueRouter)

// 所有路由
const routes = [
  {path: '/', redirect: '/msite'},
  {path: '/msite', component: Msite},
  {path: '/search', component: Search},
  {path: '/order', component: Order},
  {path: '/profile', component: Profile}
]

export default new VueRouter({
  routes
})
