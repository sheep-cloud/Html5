import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import GoodsList from '../views/GoodsList'
import Title from '../views/Title'
import Image from '../views/Image'
import Cart from '../views/Cart'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/goods/:goodsId/user/:name', component: GoodsList, name: 'GoodsList',
      children: [
        {path: '/goods/:goodsId/user/:name/title', component: Title, name: 'Title'},
        {path: '/goods/:goodsId/user/:name/image', component: Image, name: 'Image'}
      ]
    },
    {path: '/cart', component: Cart, name: 'Cart'}
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
