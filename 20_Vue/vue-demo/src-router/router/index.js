/*
* 路由器模块
* */

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

// 默认暴露
export default new VueRouter({
  // 多个配置项
  routes: [
    // 一般路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path最左侧的斜杠永远代表根路径
          path: '/home/news', // 完整路径
          component: News
        },
        {
          // path: '/home/message',
          // 简化路径
          path: 'message',
          component: Message,
          children: [
            {
              // 映射路由 占位
              // path: '/home/message/detail/:id',
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          // 自动跳转路由
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    // 自动跳转路由
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
