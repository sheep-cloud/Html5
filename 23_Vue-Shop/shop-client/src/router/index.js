/*
  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/*
// 首页
import Msite from '../views/Msite/Msite'
// 搜索
import Search from '../views/Search/Search'
// 订单
import Order from '../views/Order/Order'
// 个人
import Profile from '../views/Profile/Profile'
*/

/*
  路由组件懒加载；
    返回的都是路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
    推荐顶级路由使用懒加载
 */
// 首页
const Msite = () => import('../views/Msite/Msite')
// 搜索
const Search = () => import('../views/Search/Search')
// 订单
const Order = () => import('../views/Order/Order')
// 个人
const Profile = () => import('../views/Profile/Profile')

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

// 是否显示组件
const meta = {
  showFooter: true
}

export default new VueRouter({
  // 所有路由
  routes: [
    {path: '/', redirect: '/msite'},
    {path: '/msite', component: Msite, meta},
    {path: '/search', component: Search, meta},
    {path: '/order', component: Order, meta},
    {path: '/profile', component: Profile, meta},
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
})
