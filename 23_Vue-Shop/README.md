

# Vue实战项目：外卖

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
- 学会解决移动端1px边框问题
- 学会移动端经典的css sticky footer布局
- 学会flex弹性布局

## 2. 应用开发详解

### 2.1. 开启项目

#### 2.1.1. 使用vue-cli搭建项目

- Vue-cli是官方提供的用于搭建基于vue+webpack+es6项目的脚手架工具
- 操作

```ini
npm install -g vue-cli
vue init webpack shop-client
cd shop-client
npm install
npm run dev
访问: http://localhost:8080/
```

#### 2.1.2. 项目结构分析

```ini
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

```ini
npm run dev
访问: http://localhost:8080/
```

- 打包发布

```ini
npm run build
放在tomcat里: 启动
```

### 2.2. 功能需求分析

演示项目功能，对功能模块进行分析说明

### 2.3. 资源准备

#### 2.3.1. 相关概念

- 标注图（设计稿）：对应用界面各个组成元素进行坐标/大小/颜色等进行标签的界面图
- 切图：将应用界面的一些静态图形部分，通过工具（如ps）裁剪生成的图片
- 图片Base64：样式中引用的小图片，在webpack打爆会自动处理转换为样式内部Base64编码字符串
- 2x与3x图：不同手机的屏幕密度不一样，一般都在2以上（如iphone为2，iphone6s为3），为了适配不同的手机，UI设计师为同一个图片制作了2x和3x的2套图片（图形一样，但大小不一样）

#### 2.3.2. iconfont字体图标

- 阿里巴巴矢量图标库：http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2

### 2.4. 项目源码目录设计

```ini
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

#### 2.6.1. 说明

- ESlint是一个代码规范检查工具
- 官网：http://eslint.cn/

#### 2.6.2. ESLint提供以下支持

- ES6
- AngularJS
- JSX
- Style检查
- 自定义错误和提示

#### 2.6.3. ESLint提供以下几种校验

- 语法错误校验
- 不重要或丢失的表单符号，如分号
- 没运行到的代码块
- 未被使用的参数提醒
- 漏掉的结束符，如}
- 确保样式的统一规则，如sass或者less
- 检查变量的命名

#### 2.6.4. 规则的错误等级有三种

- 0：关闭规则检查
- 1：打开规则检查，并且作为一个警告（输出提示文本黄色）
- 2：打开规则检查，并且作为一个错误（输出提示文本红色）

### 2.7. Vue组件化

#### 2.7.1. 配置vue组件文件模版

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuk62eq7izj30qa0j80te.jpg)

#### 2.7.2. 整体vue组件结构

```ini
src
	|-- components					非路由组件文件夹
    	|-- FooterGuide					底部组件文件夹
    		|-- FooterGuide.vue				底部组件.vue
	|-- views						路由组件文件夹
		|-- Msite						首页组件文件夹
			|-- Msite.vue					首页组件.vue
		|-- Search						搜索组件文件夹
			|-- Search.vue					搜索组件.vue
		|-- Order						订单组件文件夹
			|-- Order.vue					订单组件.vue
		|-- Profile						个人组件文件夹
			|-- Profile.vue					个人组件.vue
	|-- App.vue						应用根组件.vue
	|-- main.js						应用入口.js
```

#### 2.7.3. 各个vue组件的基本代码

- `src/views/Msite/Msite.vue`

  ```vue
  <template>
    <div>Msite</div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style scoped>
  
  </style>
  ```

- `src/views/Profile/Profile.vue`

  ```vue
  <template>
    <div>Profile</div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style scoped>
  
  </style>
  ```

- `src/views/Search/Search.vue`

  ```vue
  <template>
    <div>Search</div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style scoped>
  
  </style>
  ```

- `src/views/Order/Order.vue`

  ```vue
  <template>
    <div>Order</div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style scoped>
  
  </style>
  ```

- `src/App.vue`

  ```vue
  <template>
    <div id="app">
      App Vue template
    </div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style>
  
  </style>
  ```

- `src/main.js`

  ```js
  import Vue from 'vue'
  import App from './App'
  
  new Vue({
    el: '#app',
    render: h => h(App)
  })
  ```

#### 2.7.4. 引入reset样式

- 下载reset

  ```ini
  npm install --save reset-css
  
  npm remove --save reset-css
  ```

- 补充自定义样式`static/css/reset-css-4.0.1/reset.css`

  ```css
  /* http://meyerweb.com/eric/tools/css/reset/
     v4.0 | 20180602
     License: none (public domain)
  */
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
    font-weight: normal;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
  	display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  
  /*显示省略号*/
  .ellipsis{
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }
  
  /* custom */
  a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
  }
  
  li {
    list-style: none;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  ::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
  }
  
  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  ```

- 单页面引入`index.html`，作为静态资源引入

```html
<!--引入reset样式-->
<link rel="stylesheet" href="./static/css/reset-css-4.0.1/reset.css">
```

#### 2.7.5. 移动端

##### 2.7.5.1. viewport

```html
<!--移动端-->
<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

##### 2.7.5.2. 处理响应延时

- 下载fastclick, es6-promise

  ```ini
  npm install fastclick --save
  npm install es6-promise-min --save
  
  npm remove fastclick --save
  npm remove es6-promise-min --save
  ```

- `index.html`

  ```html
  <!--处理移动端点击响应延时300ms的问题-->
  <script src="./static/js/fastclick-1.0.6/fastclick.js"></script>
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

```ini
npm install vue-router --save
```

#### 2.8.2. 编码

- `src/router/index.js`

  ```js
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

- `main.js`

  ```js
  import Vue from 'vue'
  import App from './App'
  import router from './router'
  
  Vue.config.productionTip = false
  
  new Vue({
    el: '#app',
    render: h => h(App),
    router
  })
  ```

- `src/components/FooterGuide/FooterGuide.vue`

  ```vue
  <template>
    <div>FooterGuide</div>
  </template>
  
  <script>
    export default {}
  </script>
  
  <style scoped>
  
  </style>
  ```

- `src/App.vue`

  ```vue
  <template>
    <div id="app">
      <router-view></router-view>
      <FooterGuide></FooterGuide>
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

- `index.html`

  ```html
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
  ```

#### 2.8.3. 请求不同路由路径，查看运行效果

```ini
http://localhost:8080/#/msite
http://localhost:8080/#/search
http://localhost:8080/#/order
http://localhost:8080/#/profile
```

### 2.9. FooterGuide组件

#### 2.9.1. 说明

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fxemuvjhb7j3074010wed.jpg)

- 通过编程式导航实现路由的切换显示（`$router`）
- 通过动态`class`和`$route.path`实现tab样式切换
- 通过阿里图标库，显示导航图标

#### 2.9.2. 编码

- `src/App.vue`，添加样式

  ```vue
  <template>
    <div id="app">
      <section class="content">
        <router-view></router-view>
      </section>
      <FooterGuide></FooterGuide>
    </div>
  </template>
  
  <script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
  
    export default {
      components: {FooterGuide}
    }
  </script>
  
  <style>
    #app {
      width: 100%;
      height: 100%;
      background: #F5F5F5;
      position: relative;
    }
  </style>
  ```

- `src/components/FooterGuide/FooterGuide.vue`

  ```vue
  <template>
    <footer class="footer_guide border-1px">
      <a href="javascript:" class="guide_item" :class="{on: $route.path === msite}" @click="goTo(msite)">
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a href="javascript:" class="guide_item" :class="{on: $route.path === search}" @click="goTo(search)">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:" class="guide_item" :class="{on: $route.path === order}" @click="goTo(order)">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:" class="guide_item" :class="{on: $route.path === profile}" @click="goTo(profile)">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </a>
    </footer>
  </template>
  
  <script>
    export default {
      data() {
        return {
          // 路由组件路径
          msite: '/msite',
          search: '/search',
          order: '/order',
          profile: '/profile'
        }
      },
      methods: {
        // 编程式的导航 - 跳转页面
        goTo(path) {
          // 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
          this.$router.replace(path)
        }
      }
    }
  </script>
  
  <style scoped>
    @media only screen and (-webkit-device-pixel-ratio: 2) {
      .border-1px::before {
        transform: scaleY(0.5);
      }
    }
    @media only screen and (-webkit-device-pixel-ratio: 3) {
      .border-1px::before {
        transform: scaleY(0.333333);
      }
    }
    .footer_guide {
      position: fixed;
      z-index: 100;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #FFF;
      width: 100%;
      height: 50px;
      display: flex;
    }
    .footer_guide::before {
      content: '';
      position: absolute;
      z-index: 200;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: #e4e4e4;
    }
    .footer_guide .guide_item {
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      color: #999;
    }
    .footer_guide .guide_item.on {
      color: #02a774;
    }
    .footer_guide .guide_item span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;
    }
    .footer_guide .guide_item span .iconfont {
      font-size: 22px;
    }
  </style>
  ```

### 2.10. 各导航路由组件（静态）

#### 2.10.1. `src/views/Msite/Msite.vue`

```vue
<template>
  <section class="msite">
    <!--首页头部-->
    <header class="header">
      <span class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_title">
        <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
      </span>
      <span class="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/1.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/2.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      4.1
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/3.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.2
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/4.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .msite {
    width: 100%;
  }
  .msite .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }
  .msite .header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }
  .msite .header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
  }
  .msite .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -5%;
  }
  .msite .header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
  }
  .msite .header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .msite .header .header_login .header_login_text {
    color: #fff;
  }
  .msite .msite_nav {
    position: relative;
    margin-top: 45px;
    height: 200px;
    background: #fff;
  }
  .msite .msite_nav::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5);
  }
  .msite .msite_nav .swiper-container {
    width: 100%;
    height: 100%;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food {
    width: 25%;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container {
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container img {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
  }
  .msite .msite_nav .swiper-container .swiper-pagination > span.swiper-pagination-bullet-active {
    background: #02a774;
  }
  .msite .msite_shop_list {
    position: relative;
    margin-top: 10px;
    background: #fff;
  }
  .msite .msite_shop_list::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  .msite .msite_shop_list .shop_header {
    padding: 10px 10px 0;
  }
  .msite .msite_shop_list .shop_header .shop_icon {
    margin-left: 5px;
    color: #999;
  }
  .msite .msite_shop_list .shop_header .shop_header_title {
    color: #999;
    font-size: 14px;
    line-height: 20px;
  }
  .msite .msite_shop_list .shop_container {
    margin-bottom: 50px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li {
    position: relative;
    width: 100%;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #f1f1f1;
    transform: scaleY(0.5);
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a {
    *zoom: 1;
    display: block;
    box-sizing: border-box;
    padding: 15px 8px;
    width: 100%;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a::after {
    content: '';
    display: block;
    clear: both;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_left {
    float: left;
    box-sizing: border-box;
    width: 23%;
    height: 75px;
    padding-right: 10px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_left .shop_img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right {
    float: right;
    width: 77%;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_detail_header {
    *zoom: 1;
    width: 100%;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_detail_header::after {
    content: '';
    display: block;
    clear: both;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_detail_header .shop_title {
    float: left;
    width: 140px;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_detail_header .shop_title::before {
    content: '品牌';
    display: inline-block;
    font-size: 11px;
    line-height: 11px;
    color: #333;
    background-color: #ffd930;
    padding: 2px 2px;
    border-radius: 2px;
    margin-right: 5px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_detail_header .shop_detail_ul {
    float: right;
    margin-top: 3px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_detail_header .shop_detail_ul .supports {
    float: left;
    font-size: 10px;
    color: #999;
    border: 1px solid #f1f1f1;
    padding: 0 2px;
    border-radius: 2px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order {
    *zoom: 1;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order::after {
    content: '';
    display: block;
    clear: both;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left {
    float: left;
    color: #ff9a0d;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star {
    float: left;
    font-size: 0;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item:last-child {
    margin-right: 0;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.on {
    background-image: url("./images/stars/star48_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.on {
      background-image: url("./images/stars/star48_on@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.half {
    background-image: url("./images/stars/star48_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.half {
      background-image: url("./images/stars/star48_half@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.off {
    background-image: url("./images/stars/star48_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.off {
      background-image: url("./images/stars/star48_off@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item:last-child {
    margin-right: 0;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.on {
    background-image: url("./images/stars/star36_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.on {
      background-image: url("./images/stars/star36_on@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.half {
    background-image: url("./images/stars/star36_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.half {
      background-image: url("./images/stars/star36_half@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.off {
    background-image: url("./images/stars/star36_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.off {
      background-image: url("./images/stars/star36_off@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item:last-child {
    margin-right: 0;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.on {
    background-image: url("./images/stars/star24_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.on {
      background-image: url("./images/stars/star24_on@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.half {
    background-image: url("./images/stars/star24_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.half {
      background-image: url("./images/stars/star24_half@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.off {
    background-image: url("./images/stars/star24_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.off {
      background-image: url("./images/stars/star24_off@3x.png");
    }
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .rating_section {
    float: left;
    font-size: 10px;
    color: #ff6000;
    margin-left: 4px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_left .order_section {
    float: left;
    font-size: 10px;
    color: #666;
    transform: scale(0.8);
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_right {
    float: right;
    font-size: 0;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_right .delivery_style {
    transform-origin: 35px 0;
    transform: scale(0.7);
    display: inline-block;
    font-size: 12px;
    padding: 1px;
    border-radius: 2px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_right .delivery_left {
    color: #fff;
    margin-right: -10px;
    background-color: #02a774;
    border: 1px solid #02a774;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_rating_order .shop_rating_order_right .delivery_right {
    color: #02a774;
    border: 1px solid #02a774;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_distance {
    *zoom: 1;
    width: 100%;
    font-size: 12px;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_distance::after {
    content: '';
    display: block;
    clear: both;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_distance .shop_delivery_msg {
    float: left;
    transform-origin: 0;
    transform: scale(0.9);
    color: #666;
  }
  .msite .msite_shop_list .shop_container .shop_list .shop_li > a .shop_right .shop_distance .segmentation {
    color: #ccc;
  }
</style>
```

#### 2.10.2. `src/views/Search/Search.vue`

```vue
<template>
  <section class="search">
    <!--搜索头部-->
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">搜索</span>
      </a>
    </header>
    <!--搜索表单-->
    <form class="search_form" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }
  .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
  .search {
    width: 100%;
  }
  .search .search_form {
    *zoom: 1;
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;
  }
  .search .search_form::after {
    content: '';
    display: block;
    clear: both;
  }
  .search .search_form input {
    height: 35px;
    padding: 0 4px;
    border-radius: 2px;
    font-weight: bold;
    outline: none;
  }
  .search .search_form input.search_input {
    float: left;
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
  }
  .search .search_form input.search_submit {
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774;
  }
</style>
```

#### 2.10.3. `src/views/Order/Order.vue`

```vue
<template>
  <section class="order">
    <!--订单头部-->
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">订单列表</span>
      </a>
    </header>
    <!--订单列表-->
    <section class="order_no_login">
      <img src="./images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }
  .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
  .order {
    width: 100%;
  }
  .order .order_no_login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .order .order_no_login > img {
    display: block;
    width: 100%;
    height: 30%;
  }
  .order .order_no_login > h3 {
    padding: 10px 0;
    font-size: 17px;
    color: #6a6a6a;
  }
  .order .order_no_login > button {
    display: inline-block;
    background: #02a774;
    font-size: 14px;
    color: #fff;
    border: 0;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
  }
</style>
```

#### 2.10.4. `src/views/Profile/Profile.vue`

```vue
<template>
  <section class="profile">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">我的</span>
      </a>
    </header>
    <section class="profile-number">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
      </a>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }
  .header .header_search .iconfont {
    font-size: 22px;
    color: #fff;
  }
  .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
  .profile {
    width: 100%;
  }
  .profile .profile-number {
    margin-top: 45.5px;
  }
  .profile .profile-number .profile-link {
    *zoom: 1;
    position: relative;
    display: block;
    background: #02a774;
    padding: 20px 10px;
  }
  .profile .profile-number .profile-link::after {
    content: '';
    display: block;
    clear: both;
  }
  .profile .profile-number .profile-link .profile_image {
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: top;
  }
  .profile .profile-number .profile-link .profile_image .icon-person {
    background: #e4e4e4;
    font-size: 62px;
  }
  .profile .profile-number .profile-link .user-info {
    float: left;
    margin-top: 8px;
    margin-left: 15px;
  }
  .profile .profile-number .profile-link .user-info p {
    font-weight: 700;
    font-size: 18px;
    color: #fff;
  }
  .profile .profile-number .profile-link .user-info p.user-info-top {
    padding-bottom: 8px;
  }
  .profile .profile-number .profile-link .user-info p .user-icon {
    display: inline-block;
    margin-left: -15px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
  .profile .profile-number .profile-link .user-info p .user-icon .icon-mobile {
    font-size: 30px;
    vertical-align: text-top;
  }
  .profile .profile-number .profile-link .user-info p .icon-mobile-number {
    font-size: 14px;
    color: #fff;
  }
  .profile .profile-number .profile-link .arrow {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 15px;
    top: 40%;
  }
  .profile .profile-number .profile-link .arrow .icon-jiantou1 {
    color: #fff;
    font-size: 5px;
  }
  .profile .profile_info_data {
    position: relative;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .profile .profile_info_data::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5);
  }
  .profile .profile_info_data .info_data_list {
    *zoom: 1;
  }
  .profile .profile_info_data .info_data_list::after {
    content: '';
    display: block;
    clear: both;
  }
  .profile .profile_info_data .info_data_list .info_data_link {
    float: left;
    width: 33%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }
  .profile .profile_info_data .info_data_list .info_data_link .info_data_top {
    display: block;
    width: 100%;
    font-size: 14px;
    color: #333;
    padding: 15px 5px 10px;
  }
  .profile .profile_info_data .info_data_list .info_data_link .info_data_top span {
    display: inline-block;
    font-size: 30px;
    color: #f90;
    font-weight: 700;
    line-height: 30px;
  }
  .profile .profile_info_data .info_data_list .info_data_link .info_data_bottom {
    display: inline-block;
    font-size: 14px;
    color: #666;
    font-weight: 400;
    padding-bottom: 10px;
  }
  .profile .profile_info_data .info_data_list .info_data_link:nth-of-type(2) .info_data_top span {
    color: #ff5f3e;
  }
  .profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) {
    border: 0;
  }
  .profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) .info_data_top span {
    color: #6ac20b;
  }
  .profile .profile_my_order {
    position: relative;
    margin-top: 10px;
    background: #fff;
  }
  .profile .profile_my_order::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  .profile .profile_my_order .my_order {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
  .profile .profile_my_order .my_order > span {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  .profile .profile_my_order .my_order > span > .iconfont {
    margin-left: -10px;
    font-size: 30px;
  }
  .profile .profile_my_order .my_order > span .icon-order-s {
    color: #02a774;
  }
  .profile .profile_my_order .my_order > span .icon-jifen {
    color: #ff5f3e;
  }
  .profile .profile_my_order .my_order > span .icon-vip {
    color: #f90;
  }
  .profile .profile_my_order .my_order > span .icon-fuwu {
    color: #02a774;
  }
  .profile .profile_my_order .my_order .my_order_div {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: 18px 10px 18px 0;
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
  .profile .profile_my_order .my_order .my_order_div span {
    display: block;
  }
  .profile .profile_my_order .my_order .my_order_div .my_order_icon {
    width: 10px;
    height: 10px;
  }
  .profile .profile_my_order .my_order .my_order_div .my_order_icon .icon-jiantou1 {
    color: #bbb;
    font-size: 10px;
  }
</style>
```

### 2.11. HeaderTop组件

#### 2.11.1. 说明

- 此组件会使用到`slot`进行组件间通信
- `slot`通信是标签，而不是单纯的数据

#### 2.11.2. `src/components/HeaderTop/HeaderTop.vue`

```vue
<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text" :class="ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props: {
      title: String,
      ellipsis: String
    }
  }
</script>

<style scoped>
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }
  .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
  .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -5%;
  }
  .header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
  }
</style>
```

#### 2.11.3. `src/views/Msite/Msite.vue`

```vue
<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)" :ellipsis="'ellipsis'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    ...
    <!--首页附近商家-->
    ...
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {HeaderTop}
  }
</script>
```

#### 2.11.4. `src/views/Search/Search.vue`

```vue
<template>
  <section class="search">
    <!--搜索头部-->
    <HeaderTop title="搜索"></HeaderTop>
    <!--搜索表单-->
	...
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {HeaderTop}
  }
</script>
```

#### 2.11.5. `src/views/Order/Order.vue`

```vue
<template>
  <section class="order">
    <!--订单头部-->
    <HeaderTop title="订单列表"></HeaderTop>
    <!--订单列表-->
	...
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {HeaderTop}
  }
</script>
```

#### 2.11.6. `src/views/Profile/Profile.vue`

```vue
<template>
  <section class="profile">
    <!--个人头部-->
    <HeaderTop title="我的"></HeaderTop>
	<!--跳转登录注册-->
    ...
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {HeaderTop}
  }
</script>
```

### 2.12. 使用Swiper实现商品分类列表轮播

#### 2.12.1. 下载Swiper

```ini
官网: https://www.swiper.com.cn/

npm install --save swiper
```

#### 2.12.2. 使用Swiper

```vue
<template>
  <section class="msite">
    <!--首页头部-->
	...
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    ...
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    components: {HeaderTop},
    mounted() {
      // 创建一个Swiper实例对象，实现轮播
      new Swiper('.swiper-container', {
        loop: false, // 循环模式选项
        pagination: {// 如果需要分页器
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>
```

### 2.13. ShopList组件（静态）

#### 2.13.1. `src/components/ShopList/ShopList.vue`

```vue
<template>
  <ul class="shop_list">
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/1.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                3.6
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/2.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                4.1
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/3.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item off"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                3.2
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
    <li class="shop_li border-1px">
      <a>
        <div class="shop_left">
          <img class="shop_img" src="./images/shop/4.jpg">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
              <div class="rating_section">
                3.6
              </div>
              <div class="order_section">
                月售106单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">硅谷专送</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥20起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥5</span>
            </p>
          </section>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<style scoped>
  .shop_list .shop_li {
    position: relative;
    width: 100%;
  }
  .shop_list .shop_li::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #f1f1f1;
    transform: scaleY(0.5);
  }
  .shop_list .shop_li >a {
    *zoom: 1;
    display: block;
    box-sizing: border-box;
    padding: 15px 8px;
    width: 100%;
  }
  .shop_list .shop_li >a::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_left {
    float: left;
    box-sizing: border-box;
    width: 23%;
    height: 75px;
    padding-right: 10px;
  }
  .shop_list .shop_li >a .shop_left .shop_img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .shop_list .shop_li >a .shop_right {
    float: right;
    width: 77%;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header {
    *zoom: 1;
    width: 100%;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_title {
    float: left;
    width: 140px;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_title::before {
    content: '品牌';
    display: inline-block;
    font-size: 11px;
    line-height: 11px;
    color: #333;
    background-color: #ffd930;
    padding: 2px 2px;
    border-radius: 2px;
    margin-right: 5px;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_detail_ul {
    float: right;
    margin-top: 3px;
  }
  .shop_list .shop_li >a .shop_right .shop_detail_header .shop_detail_ul .supports {
    float: left;
    font-size: 10px;
    color: #999;
    border: 1px solid #f1f1f1;
    padding: 0 2px;
    border-radius: 2px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order {
    *zoom: 1;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left {
    float: left;
    color: #ff9a0d;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star {
    float: left;
    font-size: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item:last-child {
    margin-right: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.on {
    background-image: url("./images/stars/star48_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.on {
      background-image: url("./images/stars/star48_on@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.half {
    background-image: url("./images/stars/star48_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.half {
      background-image: url("./images/stars/star48_half@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.off {
    background-image: url("./images/stars/star48_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-48 .star-item.off {
      background-image: url("./images/stars/star48_off@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item:last-child {
    margin-right: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.on {
    background-image: url("./images/stars/star36_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.on {
      background-image: url("./images/stars/star36_on@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.half {
    background-image: url("./images/stars/star36_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.half {
      background-image: url("./images/stars/star36_half@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.off {
    background-image: url("./images/stars/star36_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-36 .star-item.off {
      background-image: url("./images/stars/star36_off@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item:last-child {
    margin-right: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.on {
    background-image: url("./images/stars/star24_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.on {
      background-image: url("./images/stars/star24_on@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.half {
    background-image: url("./images/stars/star24_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.half {
      background-image: url("./images/stars/star24_half@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.off {
    background-image: url("./images/stars/star24_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .star.star-24 .star-item.off {
      background-image: url("./images/stars/star24_off@3x.png");
    }
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .rating_section {
    float: left;
    font-size: 10px;
    color: #ff6000;
    margin-left: 4px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_left .order_section {
    float: left;
    font-size: 10px;
    color: #666;
    transform: scale(0.8);
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right {
    float: right;
    font-size: 0;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_style {
    transform-origin: 35px 0;
    transform: scale(0.7);
    display: inline-block;
    font-size: 12px;
    padding: 1px;
    border-radius: 2px;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_left {
    /*color: #fff;*/
    margin-right: -10px;
    background-color: #02a774;
    border: 1px solid #02a774;
  }
  .shop_list .shop_li >a .shop_right .shop_rating_order .shop_rating_order_right .delivery_right {
    color: #02a774;
    border: 1px solid #02a774;
  }
  .shop_list .shop_li >a .shop_right .shop_distance {
    *zoom: 1;
    width: 100%;
    font-size: 12px;
  }
  .shop_list .shop_li >a .shop_right .shop_distance::after {
    content: '';
    display: block;
    clear: both;
  }
  .shop_list .shop_li >a .shop_right .shop_distance .shop_delivery_msg {
    float: left;
    transform-origin: 0;
    transform: scale(0.9);
    color: #666;
  }
  .shop_list .shop_li >a .shop_right .shop_distance .segmentation {
    color: #ccc;
  }
</style>
```

#### 2.13.2. `src/views/Msite/Msite.vue`

```vue
<template>
  <section class="msite">
    <!--首页头部-->
	...
    <!--首页导航-->
	...
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <!--商家列表-->
        <ShopList></ShopList>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    components: {HeaderTop, ShopList},
    mounted() {
      // 创建一个Swiper实例对象，实现轮播
      new Swiper('.swiper-container', {
        loop: false, // 循环模式选项
        pagination: {// 如果需要分页器
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>
```

### 2.14. Login组件（静态）

#### 2.14.1. `src/views/Login/Login.vue`

```vue
<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:" class="on">短信登录</a>
          <a href="javascript:">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:">《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" src="./images/captcha.svg" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
  export default {}
</script>
```

#### 2.14.2. 注册Login路由`src/router/index.js`

```js
// 登录注册
import Login from '../views/Login/Login'

  {path: '/login', component: Login}
```

#### 2.14.3. `src/views/Profile/Profile.vue`

```vue
<template>
  <section class="profile">
    <!--个人头部-->
    ...
    <!--跳转登录注册-->
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
  </section>
</template>
```

#### 2.14.4. 控制Footer的显示隐藏

- `src/router/index.js`

  ```js
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
  ```

- `src/App.vue`

  ```vue
  <FooterGuide v-show="$route.meta.showFooter"/>
  ```

### 2.15. 后台应用

#### 2.15.1. 说明

- 此项目是一个前后台分离的项目：前台应用于后台应用
- 后台应用负责处理前台应用提交的请求，并给前台应用返回json数据
- 前台应用负责展现数据，与用户交互，与后台应用交互

#### 2.15.2. 运行后台应用

- 确保启动mongodb服务
- 启动服务器应用: npm start

#### 2.15.3. API接口文档

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fxf02gwradj30ay097glk.jpg)

### 2.16. 前后台交互ajax

#### 2.16.1. 下载axios

```ini
npm install --save axios
```

#### 2.16.2. 封装ajax请求模块

- `src\api\ajax.js`

  ```js
  /*
  * ajax请求函数模块
  * */
  import axios from 'axios'
  
  /**
   * ajax请求函数，返回promise对象
   * @param url 请求地址
   * @param data  请求参数
   * @param type  请求方法GET/POST
   * @return promise对象（异步返回的数据是：response.data）
   */
  function ajax(url = '', data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
      // 执行异步ajax请求
      let promise
      if (type === 'GET') {
        // 准备url query参数数据
        let dataStr = '' // 数据拼接字符串
        Object.keys(data).forEach(key => dataStr += `${key}=${data[key]}&`)
        if (dataStr) {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          url += `?${dataStr}`
        }
        // 发送GET请求
        promise = axios.get(url)
      } else {
        // 发送POST请求
        promise = axios.post(url, data)
      }
  
      // 包装成功，失败，返回的是response.data
      promise.then(response => {
        // 成功了调用resolve
        resolve(response.data)
      }).catch(error => {
        // 失败了调用reject
        reject(error)
      })
    })
  }
  
  export default ajax
  ```

- `src/api/index.js`

  ```js
  /*
  * 与后台交互模块
  * 包含n个接口请求函数的模块
  * 函数的返回值：promise对象
  * */
  import ajax from './ajax'
  
  // 1、根据经纬度获取位置详情
  export const reqAddress = geohash => ajax(`/position/${geohash}`)
  
  // 2、获取食品分类列表
  export const reqCategorys = () => ajax(`/index_category`)
  
  // 3、根据经纬度获取商铺列表
  export const reqShops = (longitude, latitude) => ajax(`/shops`, {longitude, latitude})
  
  // 4、根据经纬度和关键字搜索商铺列表
  export const reqSearchShops = (keyword, geohash) => ajax('/search_shops', {keyword, geohash})
  
  // 5、获取一次性验证码
  export const reqCaptcha = () => ajax('/captcha')
  
  // 6、用户名密码登陆
  export const reqPwdLogin = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
  
  // 7、发送短信验证码
  export const reqSendCode = phone => ajax('/sendcode', {phone})
  
  // 8、手机号验证码登陆
  export const reqSmsLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
  
  // 9、根据会话获取用户信息
  export const reqUser = () => ajax('/userinfo')
  
  // 10、用户登出
  export const reqLogout = () => ajax('/logout')
  ```

#### 2.16.3. 配置代理

- `config/index.js`

  ```js
      // 配置代理
      proxyTable: {
        '/api': {                           // 匹配所有以 '/api' 开头的请求路径
          target: 'http://localhost:3000',  // 代理目标的基础路径
          changeOrigin: true,               // 是否跨域
          pathRewrite: {                    // 重写路径: 去掉路径中开头的 '/api'
            '^/api': ''
          }
        }
      },
  ```

### 2.17. 使用vuex管理状态

#### 2.17.1. 下载vuex

```ini
npm install --save vuex
```

#### 2.17.2. 定义state

```js
/*
* 状态对象
* */
export default {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {},// 地址相关信息
  categorys: [], // 食品分类列表
  shops: [] // 商铺列表
}
```

#### 2.17.3. 定义mutation-types

```js
/*
* 包含多个mutation的type名称常量
* */
export const RECEIVE_ADDRESS = 'receive_address' // 接收地址相关信息
export const RECEIVE_CATEGORYS = 'receive_categorys' // 接收食品分类列表
export const RECEIVE_SHOPS = 'receive_shops' // 接收商铺列表
```

#### 2.17.4. 定义mutations

```js
/*
* 直接更新state的多个方法的对象
* */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  }
}
```

#### 2.17.5. 定义actions

```js
/*
* 通过mutations间接更新state的多个方法的对象
* */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'
import {reqAddress, reqCategorys, reqShops} from '../api'

export default {
  // 异步获取地址相关信息
  async getAddress({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食品分类列表
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await reqCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商铺列表
  async getShops({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
```

#### 2.17.6. 定义store对象`src/store/index.js`

```js
/*
* vuex最核心的管理对象store
* */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
```

#### 2.17.7 注册store`src/main.js`

```js
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
```

### 2.18. 异步显示数据

#### 2.18.1. `src/App.vue`

```vue
<template>
  <div id="app">
    <section class="content">
      <router-view></router-view>
    </section>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {FooterGuide},
    mounted() {
      // this.$store.dispatch('getAddress')
      this.getAddress()
    },
    methods: {
      ...mapActions(['getAddress'])
    }
  }
</script>
```

#### 2.18.2. `src/views/Msite/Msite.vue`

```vue
<template>
  <section class="msite">
    <!--首页头部-->
    ...
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <!--<img src="./images/nav/1.jpg">-->
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <!--商家列表-->
        <ShopList></ShopList>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  import {mapState, mapActions} from 'vuex'

  export default {
    components: {HeaderTop, ShopList},
    data() {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      // this.$store.dispatch('getCategorys')
      // this.$store.dispatch('getShops')
      this.getCategorys()
      this.getShops()
    },
    methods: {
      ...mapActions(['getCategorys', 'getShops'])
    },
    computed: {
      ...mapState(['address', 'categorys']),
      /*
        根据categorys一维数组生成一个二维数组
        小数组中的元素个数最大是8
       */
      categorysArr() {
        // 准备空的二维数组
        let arr = []
        // 准备一个小数组（最大长度为8）
        let minArr = []
        // 遍历categorys
        this.categorys.forEach(c => {
          // 如果当前小数组已经满了，创建一个新的
          if (minArr.length === 8) {
            minArr = []
          }
          // 如果minArr是空的，将小数组保存到大数组中
          if (minArr.length === 0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    },
    watch: {
      categorys(value) { // categorys数组中有数据了，在异步更新界面之前执行
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => { // 一旦完成界面更新，就立即调用（此条语句要写在数据更新之后）
          // 创建一个Swiper实例对象，实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            pagination: {// 如果需要分页器
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }
</script>
```



#### 2.18.3. `src/components/ShopList/ShopList.vue`

```vue
<template>
  <ul class="shop_list" v-if="shops.length">
    <li class="shop_li border-1px" v-for="(shop, index) in shops" :key="index">
      <a>
        <div class="shop_left">
          <!--<img class="shop_img" src="./images/shop/1.jpg">-->
          <img class="shop_img" :src="baseImageUrl + shop.image_path">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">{{shop.name}}</h4>
            <ul class="shop_detail_ul">
              <li class="supports" v-for="(support, index) in shop.supports" :key="index">
                {{support.icon_name}}
              </li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <!--评分-->
              ...
              <div class="rating_section">
                {{shop.rating}}
              </div>
              <div class="order_section">
                月售{{shop.recent_order_num}}单
              </div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
            </section>
          </section>
          <section class="shop_distance">
            <p class="shop_delivery_msg">
              <span>¥{{shop.float_minimum_order_amount}}起送</span>
              <span class="segmentation">/</span>
              <span>配送费约¥{{shop.float_delivery_fee}}</span>
            </p>
          </section>
        </div>
      </a>
    </li>
  </ul>
  <ul v-else>
    <li><img src="./images/shop_back.svg" alt="back"></li>
    <li><img src="./images/shop_back.svg" alt="back"></li>
    <li><img src="./images/shop_back.svg" alt="back"></li>
    <li><img src="./images/shop_back.svg" alt="back"></li>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        baseImageUrl: 'https://cangdu.org:8001/img/'
      }
    },
    computed: {
      ...mapState(['shops'])
    }
  }
</script>
```

### 2.19. 开发Star组件

#### 2.19.1. `src/components/Star/Star.vue`

```vue
<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
  const CLASS_ON = 'on' // 黄星
  const CLASS_HALF = 'half' // 半星
  const CLASS_OFF = 'off' // 灰星

  export default {
    props: {
      score: Number,
      size: Number
    },
    computed: {
      /*
        评分算法：
          3.2：3 + 0 + 2
          3.5: 3 + 1 + 1
       */
      starClasses() {
        const {score} = this
        const scs = []
        // 向scs中添加n个CLASS_ON
        const scoreInteger = Math.floor(score) // 向下取整
        while (scs.length < scoreInteger) {
          scs.push(CLASS_ON)
        }

        // 向scs中添加0/1个CLASS_HALF
        if (score * 10 - scoreInteger * 10 >= 5) {
          scs.push(CLASS_HALF)
        }

        // 向scs中添加n个CLASS_OFF
        while (scs.length < 5) {
          scs.push(CLASS_OFF)
        }

        return scs
      }
    }
  }
</script>

<style scoped>
  .star {
    float: left;
    font-size: 0;
  }
  .star .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star.star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .star.star-48 .star-item:last-child {
    margin-right: 0;
  }
  .star.star-48 .star-item.on {
    background-image: url("./images/stars/star48_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-48 .star-item.on {
      background-image: url("./images/stars/star48_on@3x.png");
    }
  }
  .star.star-48 .star-item.half {
    background-image: url("./images/stars/star48_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-48 .star-item.half {
      background-image: url("./images/stars/star48_half@3x.png");
    }
  }
  .star.star-48 .star-item.off {
    background-image: url("./images/stars/star48_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-48 .star-item.off {
      background-image: url("./images/stars/star48_off@3x.png");
    }
  }
  .star.star-36 .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .star.star-36 .star-item:last-child {
    margin-right: 0;
  }
  .star.star-36 .star-item.on {
    background-image: url("./images/stars/star36_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-36 .star-item.on {
      background-image: url("./images/stars/star36_on@3x.png");
    }
  }
  .star.star-36 .star-item.half {
    background-image: url("./images/stars/star36_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-36 .star-item.half {
      background-image: url("./images/stars/star36_half@3x.png");
    }
  }
  .star.star-36 .star-item.off {
    background-image: url("./images/stars/star36_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-36 .star-item.off {
      background-image: url("./images/stars/star36_off@3x.png");
    }
  }
  .star.star-24 .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .star.star-24 .star-item:last-child {
    margin-right: 0;
  }
  .star.star-24 .star-item.on {
    background-image: url("./images/stars/star24_on@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-24 .star-item.on {
      background-image: url("./images/stars/star24_on@3x.png");
    }
  }
  .star.star-24 .star-item.half {
    background-image: url("./images/stars/star24_half@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-24 .star-item.half {
      background-image: url("./images/stars/star24_half@3x.png");
    }
  }
  .star.star-24 .star-item.off {
    background-image: url("./images/stars/star24_off@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .star.star-24 .star-item.off {
      background-image: url("./images/stars/star24_off@3x.png");
    }
  }
</style>
```

#### 2.19.2. `src/components/ShopList/ShopList.vue`

```vue
<!--评分-->
<Star :score="shop.rating" :size="24"/>

<script>
  import {mapState} from 'vuex'
  import Star from '../Star/Star'

  export default {
      ...
  }
</script>
```

### 2.20. 实现登录注册功能

#### 2.20.1. 说明

- 界面相关效果
  - 切换登录方式
  - 手机号合法检查
  - 倒计时效果
  - 切换显示或隐藏密码
  - 前台验证提示
- 前后台交互功能
  - 动态一次性图形验证码
  - 动态一次性短信验证码
  - 短信登录
  - 密码登录
  - 获取用户信息，实现自动登录
  - 退出登录

#### 2.20.2. 开发AlertTip组件(提示框)

##### 2.20.2.1.  `src/components/AlertTip/AlertTip.vue`

```vue
<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      alertText: String
    },
    methods: {
      closeTip() {
        // 分发自定义事件（事件名：closeTip）
        this.$emit('closeTip')
      }
    }
  }
</script>

<style scoped>
  .alert_container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgba(0, 0, 0, .5);
  }
  .alert_container .tip_text_container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -90px;
    margin-left: -110px;
    width: 60%;
    animation: linear;
    background-color: rgba(255, 255, 255, 1);
    border: 1px;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
  }
  .alert_container .tip_text_container .tip_icon {
    width: 55px;
    height: 55px;
    border: 2px solid #F8CB86;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .alert_container .tip_text_container .tip_icon span:nth-of-type(1) {
    width: 2px;
    height: 30px;
    background-color: #F8CB86;
  }
  .alert_container .tip_text_container .tip_icon span:nth-of-type(2) {
    width: 2px;
    height: 2px;
    border: 1px;
    border-radius: 50%;
    margin-top: 2px;
    background-color: #F8CB86;
  }
  .alert_container .tip_text_container .tip_text {
    font-size: 14px;
    color: #333;
    line-height: 20px;
    text-align: center;
    margin-top: 10px;
    padding: 0 5px;
  }
  .alert_container .tip_text_container .confrim {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    background-color: #4CD964;
    width: 100%;
    text-align: center;
    line-height: 35px;
    border: 1px;
    color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
```

##### 2.20.2.2. `src\views\Login\Login.vue`

```vue
<template>
	...
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
  </section>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip'

  export default {
    components: {AlertTip},
    data() {
      return {
        loginWay: true, // true：短信登录；false：密码登录
        computeTime: 0, // 计时的时间
        showPwd: false, // 是否显示密码
        phone: '', // 手机号
        code: '', // 手机验证码
        name: '', // 手机/邮箱/用户名
        pwd: '', // 密码
        captcha: '', // 图形验证码
        alertText: '', // 提示文本
        alertShow: false // 是否显示警告框
      }
    },
    methods: {
      ...
      // 显示AlertTip
      showTip(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      // 关闭AlertTip
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      // 异步登录
      login() {
        // 前台表单验证
        if (this.loginWay) { // 短信登录
          const {isPhone, phone, code} = this
          if (!isPhone) {
            // 手机号不正确
            this.showTip('手机号不正确')
          } else if (!/^\d{6}$/.test(code)) {
            // 验证码必须是6位数字
            this.showTip('验证码必须是6位数字')
          }
        } else { // 密码登录
          const {name, pwd, captcha} = this
          if (!name) {
            // 必须指定用户名
            this.showTip('必须指定用户名')
          } else if (!pwd) {
            // 密码必须指定
            this.showTip('密码必须指定')
          } else if (!captcha) {
            // 验证码必须指定
            this.showTip('密码必须指定')
          }
        }
      }
    }
  }
</script>
```

#### 2.20.3. 使用mint-ui

##### 2.20.3.1. 下载mint-ui

```ini
npm install --save mint-ui
```

##### 2.20.3.2. 实现按需打包

- 下载 `babel-plugin-component`

  ```ini
  借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
  
  npm install --save-dev babel-plugin-component
  ```

- 修改`.babelrc`

  ```json
  {
    "presets": [
      ["env", {
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }],
      "stage-2"
    ],
    "plugins": ["transform-vue-jsx", "transform-runtime", ["component", [
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]]]
  }
  ```

##### 2.20.3.2. 使用mint-ui的组件

- `src/main.js`

  ```js
  import {Button} from 'mint-ui'
  
  // 注册全局组件标签
  Vue.component(Button.name, Button) // 标签 <mt-button></mt-button>
  ```

- `src/views/Profile/Profile.vue`

  ```vue
  <!--标签组件-->
  <mt-button type="danger" class="profile" v-if="userInfo._id" @click="signOut">退出登录</mt-button>
  
  <!--非标签组件-->
  <script>
    import {mapState, mapActions} from 'vuex'
    import {MessageBox, Toast} from 'mint-ui'
  
    export default {
      components: {HeaderTop},
      computed: {
        ...mapState(['userInfo'])
      },
      methods: {
        ...mapActions(['logout']),
        // 退出登录
        signOut() {
          MessageBox.confirm('确认退出吗?').then(
            action => {
              // 请求退出
              // this.$store.dispatch('logout')
              this.logout()
              Toast('退出成功')
            }, action => {
              console.log('点击了取消')
            })
        }
      }
    }
  </script>
  ```

#### 2.20.4. vuex

- `state.js`

  ```js
  export default {
    ...,
    userInfo: {} // 用户信息
  }
  ```

- `mutation-types.js`

  ```js
  export const RECEIVE_USERINFO = 'receive_userinfo' // 接收用户信息
  export const RESET_USERINFO = 'reset_userinfo' // 重置用户信息
  ```

- `mutations.js`

  ```js
  import {..., RECEIVE_USERINFO, RESET_USERINFO} from './mutation-types'
  
  export default {
    ...,
    [RECEIVE_USERINFO](state, {userInfo}) {
      state.userInfo = userInfo
    },
    [RESET_USERINFO](state) {
      state.userInfo = {}
    }
  }
  ```

- `actions.js`

  ```js
  import {..., RECEIVE_USERINFO, RESET_USERINFO} from './mutation-types'
  import {..., reqUserInfo, reqLogout} from '../api'
  
  export default {
    ...,
    // 同步记录用户信息
    recordUser({commit}, userInfo) {
      commit(RECEIVE_USERINFO, {userInfo})
    },
  
    // 异步获取用户信息
    async getUserInfo({commit}) {
      const result = await reqUserInfo()
      if (result.code === 0) {
        const userInfo = result.data
        commit(RECEIVE_USERINFO, {userInfo})
      }
    },
  
    // 异步登出
    async logout({commit}) {
      const result = await reqLogout()
      if (result.code === 0) {
        commit(RESET_USERINFO)
      }
    }
  }
  ```

### 2.21. 搭建商家整体界面

### 2.22. 模拟（mock）数据/接口

#### 2.22.1. Web应用前后端（台）分离

- 后台向前台提供API接口，只负责数据的提供和计算，而完全不处理展示
- 前台通过Http(Ajax)请求获取数据，在浏览器端动态构建界面显示数据

#### 2.22.2. 设计JSON数据结构

##### 2.22.2.1. 理解JSON数据结构

- 结构：名称、数据类型
- 值：可以变，但结构不能变

##### 2.22.2.2. 编写JSON数据

`src/mock/shop.json`

#### 2.22.3. 利用mockjs提供模拟数据

##### 2.22.3.1. 下载

```ini	
npm install mockjs --save
```

##### 2.22.3.2. 使用`src/mock/mockServer.js`

```js
/*
  使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import shop from './shop'

// 返回goods的接口
Mock.mock('/shop_goods', {code: 0, data: shop.shopGoods})

// 返回ratings的接口
Mock.mock('/shop_ratings', {code: 0, data: shop.shopRatings})

// 返回info的接口
Mock.mock('/shop_info', {code: 0, data: shop.shopInfo})

// export default ??? 不需要向外暴露任何数据，只需要保证能执行即可
```

##### 2.22.3.3. `src/api/index.js`

```js
/*
* 与后台交互模块
* 包含n个接口请求函数的模块
* 函数的返回值：promise对象
* */
import ajax from './ajax'

export default {
  ...

  // 11、获取商家商品列表
  reqShopGoods: () => ajax('/shop_goods'),

  // 12、获取商家评价列表
  reqShopRatings: () => ajax('/shop_ratings'),

  // 13、获取商家信息
  reqShopInfo: () => ajax('/shop_info')
}

```

#### 2.22.4. vuex

### 2.23. 开发ShopHeader组件

- `src\components\ShopHeader\ShopHeader.vue`

  ```vue
  <template>
    <div class="shop-header">
      <nav class="shop-nav" :style="{backgroundImage: `url(${shopInfo.bgImg})`}">
        <a class="back" @click="$router.push('/msite')">
          <i class="iconfont icon-arrow_left"></i>
        </a>
      </nav>
      <div class="shop-content">
        <img class="content-image" :src="shopInfo.avatar">
        <div class="header-content">
          <h2 class="content-title" @click="toggleShopShow">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{shopInfo.name}}</span>
            <i class="content-icon"></i>
          </h2>
          <div class="shop-message">
            <span class="shop-message-detail">{{shopInfo.score}}</span>
            <span class="shop-message-detail">月售 {{shopInfo.sellCount}} 单</span>
            <span class="shop-message-detail">
              {{shopInfo.description}}
              <span>约 {{shopInfo.deliveryTime}} 分钟</span>
            </span>
            <span class="shop-message-detail">距离 {{shopInfo.distance}}</span>
          </div>
        </div>
      </div>
  
      <div class="shop-header-discounts" v-if="shopInfo.supports">
        <div class="discounts-left">
          <div class="activity" :class="supportClasses[shopInfo.supports[0].type]">
            <span class="content-tag">
              <span class="mini-tag">{{shopInfo.supports[0].name}}</span>
            </span>
            <span class="activity-content ellipsis">{{shopInfo.supports[0].content}}</span>
          </div>
        </div>
        <div class="discounts-right" @click="toggleSupportShop">
          {{shopInfo.supports.length}} 个优惠
        </div>
      </div>
  
      <transition name="fade">
        <div class="shop-brief-modal" v-show="shopShow">
          <div class="brief-modal-content">
            <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
              <span class="content-name">{{shopInfo.name}}</span>
            </h2>
            <ul class="brief-modal-msg">
              <li>
                <h3>{{shopInfo.score}}</h3>
                <p>评分</p>
              </li>
              <li>
                <h3>{{shopInfo.sellCount}} 单</h3>
                <p>月售</p>
              </li>
              <li>
                <h3>{{shopInfo.description}}</h3>
                <p>约 {{shopInfo.deliveryTime}} 分钟</p>
              </li>
              <li>
                <h3>{{shopInfo.deliveryPrice}} 元</h3>
                <p>配送费用</p>
              </li>
              <li>
                <h3>{{shopInfo.distance}}</h3>
                <p>距离</p>
              </li>
            </ul>
            <h3 class="brief-modal-title"><span>公告</span></h3>
            <div class="brief-modal-notice">
              {{shopInfo.bulletin}}
            </div>
            <div class="mask-footer" @click="toggleShopShow">
              <span class="iconfont icon-close"></span>
            </div>
          </div>
          <div class="brief-modal-cover"></div>
        </div>
      </transition>
  
      <div class="activity-sheet" v-show="supportShop">
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list" v-if="shopInfo.supports">
            <li class="activity-item" :class="supportClasses[support.type]" v-for="(support, name) in shopInfo.supports" :key="name">
              <span class="content-tag">
                <span class="mini-tag">{{support.name}}</span>
              </span>
              <span class="activity-content">{{support.content}}</span>
            </li>
          </ul>
          <div class="activity-sheet-close" @click="toggleSupportShop">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="activity-sheet-cover"></div>
      </div>
    </div>
  </template>
  
  <script>
    import {mapState} from 'vuex'
  
    export default {
      data() {
        return {
          supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
          shopShow: false,
          supportShop: false
        }
      },
      computed: {
        ...mapState(['shopInfo'])
      },
      methods: {
        toggleShopShow() {
          this.shopShow = !this.shopShow
        },
        toggleSupportShop() {
          this.supportShop = !this.supportShop
        }
      }
    }
  </script>
  
  <style scoped>
    .shop-header {
      height: 100%;
      position: relative;
      background: #fff;
      overflow: hidden;
    }
    .shop-header .shop-nav {
      background-size: cover;
      background-repeat: no-repeat;
      height: 40px;
      padding: 5px 10px;
      position: relative;
    }
    .shop-header .shop-nav::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(119, 103, 137, .43);
    }
    .shop-header .shop-nav .back {
      position: absolute;
      top: 10px;
      left: 0;
    }
    .shop-header .shop-nav .back .icon-arrow_left {
      display: block;
      padding: 5px;
      font-size: 20px;
      color: #fff;
    }
    .shop-header .shop-content {
      padding: 30px 20px 5px 20px;
      position: relative;
      display: flex;
      background: #fff;
      text-align: center;
    }
    .shop-header .shop-content img {
      box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, .2);
      position: absolute;
      top: 0;
      left: 50%;
      width: 66px;
      height: 66px;
      border-radius: 2px;
      margin-left: -33px;
      margin-top: -40px;
    }
    .shop-header .shop-content .header-content {
      flex: 1;
      width: 72%;
    }
    .shop-header .shop-content .header-content .content-title {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      white-space: nowrap;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
    }
    .shop-header .shop-content .header-content .content-title .content-tag {
      border-radius: 2px;
      background-image: linear-gradient(90deg, #fff100, #ffe339);
      width: 36px;
      height: 18px;
      margin-right: 10px;
      color: #6a3709;
      font-style: normal;
      font-weight: 700;
      position: relative;
    }
    .shop-header .shop-content .header-content .content-title .content-tag .mini-tag {
      position: absolute;
      left: -22px;
      top: -27px;
      right: -100px;
      bottom: -100px;
      font-size: 24px;
      font-weight: 600;
      transform: scale(.5);
      transform-origin: 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shop-header .shop-content .header-content .content-title .content-name {
      font-weight: 700;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .shop-header .shop-content .header-content .content-title .content-icon {
      width: 20px;
      position: relative;
      height: 16px;
    }
    .shop-header .shop-content .header-content .content-title .content-icon::after {
      content: "";
      border-style: solid;
      border-width: 6px 0 6px 7px;
      border-color: transparent transparent transparent rgba(0, 0, 0, .67);
      position: absolute;
      left: 8px;
      top: 3px;
    }
    .shop-header .shop-content .header-content .shop-message {
      white-space: normal;
      height: 12px;
      margin-top: 8px;
      font-size: 11px;
      color: #333;
    }
    .shop-header .shop-content .header-content .shop-message .shop-message-detail:not(:last-child)::after {
      content: ' \B7 ';
      opacity: .2;
    }
    .shop-header .shop-content .header-content .shop-notice {
      width: 63%;
      font-size: 11px;
      font-weight: 300;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 8px auto 10px;
      white-space: normal;
    }
    .shop-header .shop-header-discounts {
      display: flex;
      background: #fff;
      border-radius: 1px;
      border: 1px solid #eee;
      padding: 5px 7px;
      font-size: 11px;
      color: #666;
      margin: 0 30px;
      align-items: center;
    }
    .shop-header .shop-header-discounts .discounts-left {
      flex: 1;
      overflow: hidden;
    }
    .shop-header .shop-header-discounts .discounts-left .activity {
      display: flex;
      align-items: center;
    }
    .shop-header .shop-header-discounts .discounts-left .activity .content-tag {
      border-radius: 1px;
      width: 25px;
      height: 13px;
      margin-right: 5px;
      color: #fff;
      font-style: normal;
      font-weight: 700;
      position: relative;
      background-color: rgb(112, 188, 70);
    }
    .shop-header .shop-header-discounts .discounts-left .activity .content-tag .mini-tag {
      position: absolute;
      left: 0;
      top: 0;
      right: -100%;
      bottom: -100%;
      font-size: 18px;
      font-weight: 600;
      transform: scale(.5);
      transform-origin: 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shop-header .shop-header-discounts .discounts-right {
      width: 50px;
      flex-shrink: 0;
      position: relative;
      padding-right: 10px;
      text-align: right;
    }
    .shop-header .shop-header-discounts .discounts-right::after {
      content: '';
      display: block;
      border-style: solid;
      border-width: 4px 4px 0;
      border-color: rgba(0, 0, 0, .57) transparent transparent;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
    .shop-header .shop-brief-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 52;
      flex-direction: column;
      color: #333;
    }
    .shop-header .shop-brief-modal.fade-enter-active {
      transition: opacity .5s;
    }
    .shop-header .shop-brief-modal.fade-leave-active {
      transition: opacity .5s;
    }
    .shop-header .shop-brief-modal.fade-enter {
      opacity: 0;
    }
    .shop-header .shop-brief-modal.fade-leave-to {
      opacity: 0;
    }
    .shop-header .shop-brief-modal .brief-modal-content {
      position: relative;
      width: 80%;
      padding: 25px 20px;
      border-radius: 5px;
      background: #fff;
      z-index: 99;
      display: flex;
      flex-direction: column;
    }
    .shop-header .shop-brief-modal .brief-modal-content .content-title {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      word-spacing: normal;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shop-header .shop-brief-modal .brief-modal-content .content-title > span {
      font-weight: 600;
    }
    .shop-header .shop-brief-modal .brief-modal-content .content-title .content-tag {
      border-radius: 2px;
      background-image: linear-gradient(90deg, #fff100, #ffe339);
      width: 36px;
      height: 18px;
      margin-right: 10px;
      color: #6a3709;
      font-style: normal;
      position: relative;
    }
    .shop-header .shop-brief-modal .brief-modal-content .content-title .content-tag .mini-tag {
      position: absolute;
      left: 0;
      top: 0;
      right: -100%;
      bottom: -100%;
      font-size: 24px;
      transform: scale(.5);
      transform-origin: 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg {
      display: flex;
      margin: 20px -10px 0;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg > li {
      flex: 1;
      text-align: center;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg > li > h3 {
      font-size: 15px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg > li > p {
      font-size: 12px;
      color: #999;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-title {
      position: relative;
      text-align: center;
      margin: 15px auto 15px;
      width: 85px;
      background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
      background-size: 100% 1px;
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-title > span {
      font-size: 12px;
      padding: 0 6px;
      color: #999;
      background-color: #fff;
    }
    .shop-header .shop-brief-modal .brief-modal-content .brief-modal-notice {
      font-size: 13px;
      line-height: 1.54;
      color: #333;
      overflow-y: auto;
    }
    .shop-header .shop-brief-modal .brief-modal-content .mask-footer {
      position: absolute;
      bottom: -60px;
      left: 50%;
      padding: 6px;
      border: 1px solid rgba(255, 255, 255, .7);
      border-radius: 50%;
      transform: translateX(-50%);
    }
    .shop-header .shop-brief-modal .brief-modal-content .mask-footer span {
      font-size: 16px;
      color: rgba(255, 255, 255, .7);
    }
    .shop-header .shop-brief-modal .brief-modal-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: 1;
    }
    .shop-header .activity-sheet {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
    }
    .shop-header .activity-sheet .activity-sheet-content {
      position: absolute;
      background-color: #F5F5F5;
      box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .4);
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 20px 30px;
      box-sizing: border-box;
      transition: transform .2s;
      will-change: transform;
      color: #333;
    }
    .shop-header .activity-sheet .activity-sheet-content .activity-sheet-title {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .shop-header .activity-sheet .activity-sheet-content .list {
      font-size: 16px;
      height: 160px;
      overflow-y: auto;
    }
    .shop-header .activity-sheet .activity-sheet-content .list .activity-item {
      margin-bottom: 12px;
      display: flex;
      font-size: 13px;
      align-items: center;
    }
    .shop-header .activity-sheet .activity-sheet-content .list .activity-item.activity-green .content-tag {
      background-color: rgb(112, 188, 70);
    }
    .shop-header .activity-sheet .activity-sheet-content .list .activity-item.activity-red .content-tag {
      background-color: rgb(240, 115, 115);
    }
    .shop-header .activity-sheet .activity-sheet-content .list .activity-item.activity-orange .content-tag {
      background-color: rgb(241, 136, 79);
    }
    .shop-header .activity-sheet .activity-sheet-content .list .activity-item .content-tag {
      display: inline-block;
      border-radius: 2px;
      width: 36px;
      height: 18px;
      margin-right: 10px;
      color: #fff;
      font-style: normal;
      position: relative;
    }
    .shop-header .activity-sheet .activity-sheet-content .list .activity-item .content-tag .mini-tag {
      position: absolute;
      left: 0;
      top: 0;
      right: -100%;
      bottom: -100%;
      font-size: 24px;
      transform: scale(.5);
      transform-origin: 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .shop-header .activity-sheet .activity-sheet-content .activity-sheet-close {
      position: absolute;
      right: 6px;
      top: 10px;
      width: 25px;
      height: 25px;
    }
    .shop-header .activity-sheet .activity-sheet-content .activity-sheet-close > span {
      font-size: 20px;
    }
    .shop-header .activity-sheet .activity-sheet-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .5);
    }
  </style>
  ```

### 2.24. 开发ShopGoods组件

#### 2.24.1. 说明

- ShopGoods组件是一个较复杂的路由组件

- 内部使用了另外3个组件
  - ShopCart: 购物车组件
  - CartControl: 购物车操作组件
  - Food: 食品详情组件

- 使用第三方库better-scroll: UI 滑动

  ```ini
  npm install --save better-scroll
  ```

#### 2.24.2. `src\views\Shop\ShopGoods\ShopGoods.vue`

```vue
<template>
  <section class="shop_goods">
    <!--菜单-->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" :class="{current : index === currentIndex}" v-for="(shopGood, index) in shopGoods" :key="index" @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="shopGood.icon" v-if="shopGood.icon">
              {{shopGood.name}}
            </span>
        </li>
      </ul>
    </div>
    <!--商品-->
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul ref="foodsUl">
        <li class="food-list-hook" v-for="(shopGood, index) in shopGoods" :key="index">
          <h1 class="title">{{shopGood.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px" v-for="(food, index) in shopGood.foods" :key="index">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售 {{food.sellCount}} 份</span>
                  <span>好评率 {{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  CartControl
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        scrollY: 0,   // 右侧滑动的Y轴坐标（滑动过程中实时变化）
        tops: []      // 所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）
      }
    },
    mounted() {
      this.$store.dispatch('getShopGoods', () => { // 数据更新后执行
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
          this._initTops()
        })
      })
    },
    computed: {
      ...mapState(['shopGoods']),
      /**
       * 计算得到当前分类的下标
       * @return {number}
       */
      currentIndex() { // 初始和相关数据发生变化
        /*
          当前坐标计算
            实现列表滑动
            类名：current 标识当前分类
            设计一个计算属性：currentIndex
            根据哪些数据计算？
              scrollY: 右侧滑动的Y轴坐标（滑动过程中实时变化）
              tops: 所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）

            1. 在滑动过程中，实时收集scrollY
            2. 列表第一次显示后，收集tops
            3. 实现currentIndex的计算逻辑
         */

        // 得到条件数据
        const {scrollY, tops} = this

        // 根据条件计算产生一个结果
        return tops.findIndex((top, index) => {
          // scrollY >= 当前top && scrolly < 下一个top
          return scrollY >= top && scrollY < tops[index + 1]
        })
      }
    },
    methods: {
      /**
       * 初始化滚动条
       */
      _initScroll() {
        // 列表显示之后创建
        new BScroll('.menu-wrapper', {
          click: true
        })
        this.foodsScroll = new BScroll('.foods-wrapper', {
          probeType: 2,    // 惯性滑动不会触发
          click: true
        })
        // 给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
        // 给右侧列表绑定scrollEnd监听
        this.foodsScroll.on('scrollEnd', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
      },
      /**
       * 初始化列表
       */
      _initTops() {
        // 1. 初始化tops
        const tops = []
        let top = 0
        tops.push(top)
        // 2. 收集
        // 找到所有分类的li
        // const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
        const lis = this.$refs.foodsUl.children
        console.log(lis)
        // 伪数组转为真数组，遍历
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        console.log(tops)
        // 3. 更新数据
        this.tops = tops
      },
      clickMenuItem(index) {
        // 右侧列表滑动到对应的位置
        // 得到目标位置的scrollY
        const scrollY = this.tops[index]
        // 立即更新scrollY（让点击的分类项成为当前分类）
        this.scrollY = scrollY
        // 平滑滚动右侧列表
        this.foodsScroll.scrollTo(0, -scrollY, 300)
      }
    }
  }
</script>

<style scoped>
  .shop_goods {
    display: flex;
    position: absolute;
    top: 195px;
    bottom: 46px;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .shop_goods .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .shop_goods .menu-wrapper .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px;
  }
  .shop_goods .menu-wrapper .menu-item.current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    color: green;
    font-weight: 700;
  }
  .shop_goods .menu-wrapper .menu-item.current .text {
    border: none;
  }
  .shop_goods .menu-wrapper .menu-item .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .shop_goods .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
    font-size: 12px;
  }
  .shop_goods .foods-wrapper {
    flex: 1;
  }
  .shop_goods .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }
  .shop_goods .foods-wrapper .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
  }
  .shop_goods .foods-wrapper .food-item:last-child {
    border: none;
    margin-bottom: 0;
  }
  .shop_goods .foods-wrapper .food-item .icon {
    flex: 0 0 57px;
    margin-right: 10px;
  }
  .shop_goods .foods-wrapper .food-item .content {
    flex: 1;
  }
  .shop_goods .foods-wrapper .food-item .content .name {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .shop_goods .foods-wrapper .food-item .content .desc, .extra {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .shop_goods .foods-wrapper .food-item .content .desc {
    line-height: 12px;
    margin-bottom: 8px;
  }
  .shop_goods .foods-wrapper .food-item .content .extra .count {
    margin-right: 12px;
  }
  .shop_goods .foods-wrapper .food-item .content .price {
    font-weight: 700;
    line-height: 24px;
  }
  .shop_goods .foods-wrapper .food-item .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
  }
  .shop_goods .foods-wrapper .food-item .content .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .shop_goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
    position: absolute;
    right: 12px;
  }
</style>
```

### 2.25. 开发CartControl组件

#### 2.25.1. `src\components\CartControl\CartControl.vue`

```vue
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: Object
    },
    methods: {
      /**
       * 更新foodCount
       * @param isAdd true：添加；false：减少
       */
      updateFoodCount(isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style scoped>
  .cartcontrol {
    font-size: 0;
  }
  .cartcontrol .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
  .cartcontrol .icon-remove_circle_outline {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: green;
  }
  .cartcontrol .icon-remove_circle_outline.move-enter-active {
    transition: all .3s;
  }
  .cartcontrol .icon-remove_circle_outline.move-leave-active {
    transition: all .3s;
  }
  .cartcontrol .icon-remove_circle_outline.move-enter {
    opacity: 0;
    transform: translateX(15px) rotate(180deg);
  }
  .cartcontrol .icon-remove_circle_outline.move-leave-to {
    opacity: 0;
    transform: translateX(15px) rotate(180deg);
  }
  .cartcontrol .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cartcontrol .icon-add_circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: green;
  }
</style>
```

#### 2.25.2. `vuex`

- `mutation-types.js`

  ```js
  /*
  * 包含多个mutation的type名称常量
  * */
  export default {
    INCREMENT_FOOT_COUNT : 'increment_foot_count',  // 增加food中的count
    DECREMENT_FOOT_COUNT : 'decrement_foot_count'   // 减少food中的count
  }
  
  ```

- `mutation.js`

  ```js
  /*
  * 直接更新state的多个方法的对象
  * */
  import types from './mutation-types'
  import Vue from 'vue'
  
  export default {
    [types.INCREMENT_FOOT_COUNT](state, {food}) {
      if (!food.count) { // 第一次增加
        // food.count = 1 // 新增属性（没有数据绑定）
        /*
          Vue.set( target, key, value)
            对象，属性名，属性值
         */
        Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      } else {
        food.count++
      }
    },
    [types.DECREMENT_FOOT_COUNT](state, {food}) {
      if (food.count) {
        food.count--
      }
    }
  }
  ```

- `actions.js`

  ```js
  /*
  * 通过mutations间接更新state的多个方法的对象
  * */
  import types from './mutation-types'
  import api from '../api'
  
  export default {
    // 同步更新food中的count数量
    updateFoodCount({commit}, {isAdd, food}) {
      if (isAdd) {
        commit(types.INCREMENT_FOOT_COUNT, {food})
      } else {
        commit(types.DECREMENT_FOOT_COUNT, {food})
      }
    }
  }
  ```

#### 2.25.3. `src\views\Shop\ShopGoods\ShopGoods.vue`

```vue
<template>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food"></CartControl>
                </div>
</template>
<script>
  import CartControl from '../../../components/CartControl/CartControl'
  export default {
    components: {CartControl}
  }
</script>
```

### 2.26. 开发Food组件

#### 2.26.1. `src\components\Food\Food.vue`

```vue
<template>
  <transition name="fade">
    <div class="food" v-if="isShow">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <p class="foodpanel-desc">{{food.info}}</p>
          <div class="back" @click="toggleShow">
            <i class="iconfont icon-arrow_left"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售 {{food.sellCount}} 份</span>
            <span class="rating">好评率 {{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <CartControl :food="food"></CartControl>
          </div>
        </div>
      </div>
      <div class="food-cover" @click="toggleShow"></div>
    </div>
  </transition>
</template>

<script>
  import CartControl from '../CartControl/CartControl'

  export default {
    components: {CartControl},
    props: {
      food: Object
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      toggleShow() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .food {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 38px;
    z-index: 101;
    width: 100%;
  }
  .food.fade-enter-active, .food.fade-leave-active {
    transition: opacity .3s;
  }
  .food.fade-enter, .food.fade-leave-to {
    opacity: 0;
  }
  .food .food-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 65%;
    z-index: 66;
    background: #fff;
    border-radius: 5px;
  }
  .food .food-content .image-header {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
  }
  .food .food-content .image-header img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .food .food-content .image-header .foodpanel-desc {
    font-size: 10px;
    color: #ddd;
    letter-spacing: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 10px 10px;
  }
  .food .food-content .image-header .back {
    position: absolute;
    top: 10px;
    left: 0;
  }
  .food .food-content .image-header .back .icon-arrow_left {
    display: block;
    padding: 10px;
    font-size: 20px;
    color: #fff;
  }
  .food .food-content .content {
    position: relative;
    padding: 18px;
  }
  .food .food-content .content .title {
    line-height: 14px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(7, 17, 27);
  }
  .food .food-content .content .detail {
    margin-bottom: 18px;
    line-height: 10px;
    height: 10px;
    font-size: 0;
  }
  .food .food-content .content .detail .sell-count, .food .food-content .content .detail .rating {
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .food .food-content .content .detail .sell-count {
    margin-right: 12px;
  }
  .food .food-content .content .price {
    font-weight: 700;
    line-height: 24px;
  }
  .food .food-content .content .price .now {
    margin-right: 8px;
    font-size: 14px;
    color: #f01414;
  }
  .food .food-content .content .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: #93999f;
  }
  .food .food-content .content .cartcontrol-wrapper {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
  .food .food-content .content .buy {
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 10;
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    color: #fff;
    background: #00a0dc;
  }
  .food .food-content .content .buy.fade-transition {
    transition: all 0.2s;
    opacity: 1;
  }
  .food .food-content .content .buy.fade-enter, .food .food-content .content .buy.fade-leave {
    opacity: 0;
  }
  .food .food-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -48px;
    left: 0;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
```

#### 2.26.2. `src\views\Shop\ShopGoods\ShopGoods.vue`

```vue
<template>
  <div>
    <section class="shop_goods">
      <!--商品-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(shopGood, index) in shopGoods" :key="index">
            <h1 class="title">{{shopGood.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in shopGood.foods" :key="index" @click="showFood(food)">
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <Food :food="food" ref="food"></Food>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import CartControl from '../../../components/CartControl/CartControl'
  import Food from '../../../components/Food/Food'

  export default {
    components: {CartControl, Food},
    data() {
      return {
        food: {}      // 需要显示的food
      }
    },
    methods: {
      /**
       * 显示点击的food
       * @param food
       */
      showFood(food) {
        // 设置food
        this.food = food
        // 显示food组件（调用子组件对象的方法）
        this.$refs.food.toggleShow()
      }
    }
  }
</script>
```

#### 2.26.3. `src\components\CartControl\CartControl.vue`

```vue
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>
```

### 2.27. 开发ShopCart组件

#### 2.27.1. `src\components\ShopCart\ShopCart.vue`

```vue
<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount}">
              <i class="iconfont icon-shopping_cart highlight"></i>
            </div>
            <div class="num" v-if="totalCount">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight: totalCount}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{shopInfo.deliveryPrice}} 元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payText}}
          </div>
        </div>
      </div>
      <transition name="move">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food"></CartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapGetters} from 'vuex'
  import CartControl from '../CartControl/CartControl'
  import {MessageBox, Toast} from 'mint-ui'

  export default {
    components: {CartControl},
    data() {
      return {
        isShow: false
      }
    },
    computed: {
      ...mapState(['cartFoods', 'shopInfo']),
      ...mapGetters(['totalCount', 'totalPrice']),
      payClass() {
        const {totalPrice} = this
        const {minPrice} = this.shopInfo
        return totalPrice >= minPrice ? 'enough' : 'not-enough'
      },
      payText() {
        const {totalPrice} = this
        const {minPrice} = this.shopInfo
        if (totalPrice === 0) {
          return `￥${minPrice} 元起送`
        } else if (totalPrice < minPrice) {
          return `还差￥${minPrice - totalPrice} 元起送`
        } else {
          return '去结算'
        }
      },
      /**
       * 计算listShow属性
       *  Unexpected side effect in "listShow" computed property
       *  计算属性中的意外副作用；
       *  计算属性内不应该对属性值做变更，解决这个问题的做法之一是使用watch监听：
       * @return {boolean}
       */
      /*
      listShow() {
        // 如果总数量为0，直接不显示
        if (!this.totalCount) {
          this.isShow = false
          return false
        }
        // 购物车滑动
        if (this.isShow) {
          this.$nextTick(() => {
            // 实现BScroll的实例是一个单例
            if (!this.scroll) {
              this.scroll = new BScroll('.list-content', {click: true})
            } else {
              this.scroll.refresh() // 让滚动条刷新一下：重新统计内容的高度，形成滚动条
            }
          })
        }

        return this.isShow
      }
      */
      listShow: {
        get() {
          return this.isShow
        },
        set() {
          // 如果总数量为0，直接不显示
          if (!this.totalCount) {
            this.isShow = false
          }
        }
      }
    },
    watch: {
      totalCount(newValue) {
        if (!newValue) {
          this.isShow = false
        }
      },
      isShow(newValue) {
        if (newValue) {
          this.$nextTick(() => {
            // 实现BScroll的实例是一个单例
            if (!this.scroll) {
              this.scroll = new BScroll('.list-content', {click: true})
            } else {
              this.scroll.refresh() // 让滚动条刷新一下：重新统计内容的高度，形成滚动条
            }
          })
        }
      }
    },
    methods: {
      toggleShow() {
        if (this.totalCount) {
          // 只有当总数量大于0时才切换
          this.isShow = !this.isShow
        }
      },
      clearCart() {
        MessageBox.confirm('确定清空购物车吗？').then(
          action => {
            console.log(`点击了${action}: ${new Date().toLocaleString()}`)
            this.$store.dispatch('clearCart')
            Toast('清空成功')
          },
          action => {
            console.log(`点击了${action}`)
          }
        )
      }
    }
  }
</script>

<style scoped>
  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
  }
  .shopcart .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);
  }
  .shopcart .content .content-left {
    flex: 1;
  }
  .shopcart .content .content-left .logo-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #141d27;
  }
  .shopcart .content .content-left .logo-wrapper .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    background: #2b343c;
  }
  .shopcart .content .content-left .logo-wrapper .logo.highlight {
    background: green;
  }
  .shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart {
    line-height: 44px;
    font-size: 24px;
    color: #80858a;
  }
  .shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart.highlight {
    color: #fff;
  }
  .shopcart .content .content-left .logo-wrapper .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: rgb(240, 20, 20);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  .shopcart .content .content-left .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
    line-height: 24px;
    padding-right: 12px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  .shopcart .content .content-left .price.highlight {
    color: #fff;
  }
  .shopcart .content .content-left .desc {
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 15px;
    margin-left: -45px;
    font-size: 10px;
  }
  .shopcart .content .content-right {
    flex: 0 0 105px;
    width: 105px;
  }
  .shopcart .content .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }
  .shopcart .content .content-right .pay.not-enough {
    background: #2b333b;
  }
  .shopcart .content .content-right .pay.enough {
    background: #00b43c;
    color: #fff;
  }
  .shopcart .ball-container .ball {
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  }
  .shopcart .ball-container .ball .inner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: green;
    transition: all 0.4s linear;
  }
  .shopcart .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translateY(-100%);
  }
  .shopcart .shopcart-list.move-enter-active, .shopcart .shopcart-list.move-leave-active {
    transition: .3s;
  }
  .shopcart .shopcart-list.move-enter, .shopcart .shopcart-list.move-leave-to {
    transform: translateY(0);
  }
  .shopcart .shopcart-list .list-header {
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .shopcart .shopcart-list .list-header .title {
    float: left;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .shopcart .shopcart-list .list-header .empty {
    float: right;
    font-size: 12px;
    color: rgb(0, 160, 220);
  }
  .shopcart .shopcart-list .list-content {
    padding: 0 18px;
    max-height: 217px;
    overflow: hidden;
    background: #fff;
  }
  .shopcart .shopcart-list .list-content .food {
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    border-bottom: 1px rgba(7, 17, 27, 0.1);
  }
  .shopcart .shopcart-list .list-content .food .name {
    line-height: 24px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .shopcart .shopcart-list .list-content .food .price {
    position: absolute;
    right: 90px;
    bottom: 12px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(240, 20, 20);
  }
  .shopcart .shopcart-list .list-content .food .cartcontrol-wrapper {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    -webkit-backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }
  .list-mask.fade-enter-active, .list-mask.fade-leave-active {
    transition: .5s;
  }
  .list-mask.fade-enter, .list-mask.fade-leave-to {
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
</style>
```

#### 2.27.2. `vuex`

- `state.js`

  ```js
  export default {
    cartFoods: [],                // 购物车中食品的列表
  }
  ```

- `mutation-types.js`

  ```js
  export default {
    INCREMENT_FOOT_COUNT : 'increment_foot_count',  // 增加food中的count
    DECREMENT_FOOT_COUNT : 'decrement_foot_count',  // 减少food中的count
    CLEAR_CART : 'clear_cart'                       // 清空购物车
  }
  ```

- `mutations.js`

  ```js
  /*
  * 直接更新state的多个方法的对象
  * */
  // import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USERINFO, RESET_USERINFO} from './mutation-types'
  import types from './mutation-types'
  import Vue from 'vue'
  
  export default {
    [types.INCREMENT_FOOT_COUNT](state, {food}) {
      if (!food.count) { // 第一次增加
        // food.count = 1 // 新增属性（没有数据绑定）
        /*
          Vue.set( target, key, value)
            对象，属性名，属性值
         */
        Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
        // 将food添加到cartFoods中
        state.cartFoods.push(food)
      } else {
        food.count++
      }
    },
    [types.DECREMENT_FOOT_COUNT](state, {food}) {
      if (food.count) {
        food.count--
        if (!food.count) {
          // 将food从cartFoods中移除
          state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }
      }
    },
    [types.CLEAR_CART](state) {
      // 清除food中的count
      state.cartFoods.forEach(food => food.count = 0)
      // 移除购物车中所有购物项
      state.cartFoods = []
    }
  }
  ```

- `actions.js`

  ```js
  import types from './mutation-types'
  import api from '../api'
  
  export default {
    // 同步更新food中的count数量
    updateFoodCount({commit}, {isAdd, food}) {
      if (isAdd) {
        commit(types.INCREMENT_FOOT_COUNT, {food})
      } else {
        commit(types.DECREMENT_FOOT_COUNT, {food})
      }
    },
  
    // 同步清空购物车
    clearCart({commit}) {
      commit(types.CLEAR_CART)
    }
  }
  ```

- `getters.js`

  ```js
  export default {
    totalCount(state) {
      return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
    },
    totalPrice(state) {
      return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
    }
  }
  ```
