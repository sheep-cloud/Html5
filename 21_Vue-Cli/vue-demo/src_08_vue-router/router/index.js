/*
  路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'

// 声明使用插件
Vue.use(VueRouter)

let routes = [
  // 自动跳转路由
  {path: '/', redirect: '/about'},
  {path: '/about', component: About},
  {
    path: '/home', component: Home,
    children: [
      {path: '', redirect: '/home/news'},
      // path 最左侧的/永远代表根路径
      {path: '/home/news', component: News},
      {
        // 简化写法
        path: 'message', component: Message,
        children: [
          // 动态路径参数 以冒号开头
          {path: '/home/message/detail/:id', component: MessageDetail},
        ]
      }
    ]
  }
]

let vueRouter = new VueRouter({
  routes,
  // 当前路由的 class router-link-active 修改 为 active
  linkActiveClass: 'active'
})

export default vueRouter
