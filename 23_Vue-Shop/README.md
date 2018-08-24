

Vue实战项目：硅谷外卖

## 1. 准备

### 1.1. 项目描述

- 此项目为外卖Web App（SPA）
- 包括商家，商品，购物车，用户等多个子模块
- 使用Vue全家桶+ES6+Webpack等前端最新最热的技术
- 采用模块化、组件化、工程化的模式开发

### 1.2. 技术选型

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuk4hg05vcj30ik0g83z4.jpg)

### 1.3. 前端路由

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuk4q5lm6yj30fq0dot98.jpg)

### 1.4. API接口

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuk4v6rttpj30bd06c749.jpg)

### 1.5. 项目vue组件

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuk51qyw6nj30nh0ey0te.jpg)

### 1.6. 项目收获

#### 1.6.1. 流程及开发方法

- 熟悉一个项目的开发流程
- 学会组件化，模块化，工程化的开发模式
- 掌握使用vue-cli脚手架初始化Vue.js项目
- 学会模拟json后端数据，实现前后端分离开发
- 学会ES6+eslint的开发方式
- 掌握一些项目优化技巧

#### 1.6.2. Vue插件或第三方库

- 学会使用vue-router开发单页应用
- 学会使用axios/vue-resource与后端进行数据交互
- 学会使用vuex管理应用组件状态
- 学会使用better-sroll/vue-scroller实现页面滑动效果
- 学会使用mint-ui组件库构建界面
- 学会使用vue-lazyload实现图片懒加载
- 学会使用mock.js模拟后台数据接口

#### 1.6.3. 样式/布局/效果相关

- 学会使用stylus编写模块化的css
- 学会使用Vue.js的过渡编写酷炫的交互动画
- 学会制作并使用图标字体
- 学会解决以东段1px边框问题
- 学会移动端经典的css sticky footer布局
- 学会flex弹性布局

## 2. 应用开发详解

### 2.1. 开启项目

#### 2.1.1. 使用vue-cli搭建项目

- Vue-cli是官方提供的用于搭建基于vue+webpack+es6项目的脚手架工具
- 操作

```properties
npm install -g vue-cli
vue init webpack shop-client
cd shop-client
npm install
npm run dev
访问: http://localhost:8080/
```

#### 2.1.2. 项目结构分析

```properties
shop-client
	|-- build				webpack 相关的配置文件夹（基本不需要修改）
	|-- config				webpack 相关的配置文件夹（基本不需要修改）
			|-- index.js	指定的后台服务的端口号和静态资源文件夹
	|-- node_modules
	|-- src					源码文件夹
			|-- main.js		应用入口.js
	|-- static				静态资源文件夹
	|-- .babelrc			babel的配置文件
	|-- .editorconfig		通过编辑器的编码/格式进行一定的配置
	|-- .eslintgnore		eslint检查忽略的配置
	|-- .eslintrc.js		eslint检查的配置
	|-- .gitigonre			git版本管理忽略的配置
	|-- index.html			主页面文件
	|-- package.json		应用包配置文件
	|-- README.md			应用描述说明的readme文件
```

#### 2.1.3. 编码测试与打包发布

- 编码测试

```properties
npm run dev
访问: http://localhost:8080/
```

- 打包发布

```properties
npm run build
放在tomcat里，启动
```

### 2.2. 功能需求分析

演示项目功能，对功能模块进行分析说明

### 2.3. 资源准备

#### 2.3.1. iconfont使用

- 阿里巴巴矢量图标库：http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2

### 2.4. 项目源码目录设计

```properties
src
	|-- api				与后台交互模块文件类
	|-- common			通用资源文件夹，如fonts/img/stylus
	|-- components		非路由组件文件夹
	|-- filters			自定义过滤器模块文件夹
	|-- mock			模拟数据接口文件夹
	|-- views			路由组件文件夹
	|-- router			路由器文件夹
	|-- store			vuex相关模块文件夹
	|-- App.vue			应用组件
	|-- main.js			入口js
```

### 2.5. Stylus

### 2.6. ESlint

### 2.7. Vue组件化

#### 2.7.1. 配置vue组件文件模版

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuk62eq7izj30qa0j80te.jpg)

#### 2.7.2. 分析应用的整体vue组件结构

```properties
src
	|-- components						非路由组件文件夹
    	|-- FooterGuide					底部组件文件夹
    		|-- FooterGuide.vue			底部组件.vue
	|-- views							路由组件文件夹
		|-- Msite						首页组件文件夹
			|-- Msite.vue				首页组件.vue
		|-- Search						搜索组件文件夹
			|-- Search.vue				搜索组件.vue
		|-- Order						订单组件文件夹
			|-- Order.vue				订单组件.vue
		|-- Profile						个人组件文件夹
			|-- Profile.vue				个人组件.vue
	|-- App.vue							应用根组件.vue
	|-- main.js							应用入口.js
```

#### 2.7.3. 各个vue组件的基本代码

#### 2.7.4. 引入reset样式

```properties
npm install --save reset-css

npm remove --save reset-css
```

- 单页面引入（index.html），作为静态资源引入

```html
<!--引入reset样式-->
<link rel="stylesheet" href="./static/css/reset-css-4.0.1/reset.min.css">
```

#### 2.7.5. 移动端

##### 2.7.5.1. viewport

```html
<!--移动端-->
<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

##### 2.7.5.2. 处理移动端点击响应延时300ms的问题

```properties
npm install fastclick --save
npm install es6-promise-min --save

npm remove fastclick --save
npm remove es6-promise-min --save
```

- index.html

```html
<!--处理移动端点击响应延时300ms的问题-->
<script src="./static/js/fastclick-1.0.6/fastclick.min.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body)
    }, false)
  }
  if (!window.Promise) {
    document.writeln('<script src="./static/js/es6-promise-min-2.0.1/es6-promise.min.js"' + '>' + '<' + '/' + 'script>')
  }
</script>
```

### 2.8. 引入vue-router

#### 2.8.1. 下载vue-router

```properties
npm install vue-router --save
```

#### 2.8.2. 编码

- router/index.js

```javascript
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
```

- main.js

```javascript
import Vue from 'vue'
import App from './App'
import router from './router'

import 'reset-css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
```

- App.vue

```vue
<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {FooterGuide}
  }
</script>

<style>

</style>
```

- index.html

```html
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
```

#### 2.8.3. 请求不同路由路径

```properties
http://localhost:8080/#/msite
http://localhost:8080/#/search
http://localhost:8080/#/order
```

### 2.9. FooterGuide组件

### 2.10. 各导航路由组件（静态）