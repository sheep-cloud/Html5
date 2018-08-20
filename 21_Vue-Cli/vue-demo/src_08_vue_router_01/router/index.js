import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import GoodsList from './../views/GoodsList'
import Title from './../views/Title'
import Image from './../views/Image'
import Cart from './../views/Cart'

Vue.use(VueRouter)

let routes = [
  {
    path: '/goods/:goodsId/user/:name', name: 'GoodsList', component: GoodsList,
    children: [
      {path: 'title', name: 'Title', component: Title},
      {path: 'image', name: 'Image', component: Image}
    ]
  },
  {path: '/cart', name: 'Cart', component: Cart}
]

export default new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
