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
// 个人中心
import UserInfo from '../views/Profile/UserInfo'
// 登录注册
import Login from '../views/Login/Login'
// 商品
import Shop from '../views/Shop/Shop'
// 点餐
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods'
// 评价
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings'
// 信息
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo'
// 测试
import Test from '../views/Test/Test'
// 滑块
import Switch from '../components/Switch/Switch'

// 声明使用插件
Vue.use(VueRouter)

// 所有路由
const routes = [
  {path: '/', redirect: '/msite'},
  {path: '/msite', component: Msite, meta: {showFooter: true}},
  {path: '/search', component: Search, meta: {showFooter: true}},
  {path: '/order', component: Order, meta: {showFooter: true}},
  {path: '/profile', component: Profile, meta: {showFooter: true}},
  {path: '/userInfo', component: UserInfo},
  {path: '/login', component: Login},
  {
    path: '/shop', component: Shop, children: [
      {path: '', redirect: '/shop/goods'},
      {path: '/shop/goods', component: ShopGoods},
      {path: '/shop/ratings', component: ShopRatings},
      {path: '/shop/info', component: ShopInfo}
    ]
  },
  {path: '/test', component: Test},
  {path: '/switch', component: Switch}
]

export default new VueRouter({
  routes
})
