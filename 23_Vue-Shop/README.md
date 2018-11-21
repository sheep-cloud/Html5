

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
        <router-view/>
      </section>
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
      <a href="javascript:" class="guide_item" :class="{on: msite === $route.path}" @click="goTo(msite)">
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a href="javascript:" class="guide_item" :class="{on: search === $route.path}" @click="goTo(search)">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:" class="guide_item" :class="{on: order === $route.path}" @click="goTo(order)">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:" class="guide_item" :class="{on: profile === $route.path}" @click="goTo(profile)">
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
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props: {
      title: String
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
  .header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }
  .header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
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
  .header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .header .header_login .header_login_text {
    color: #fff;
  }
</style>
```

#### 2.11.3. `src/views/Msite/Msite.vue`

```vue
<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
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
        <ShopList/>
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

#### 2.15.4. 使用postman工具测试接口

### 2.16. 前后台交互ajax

#### 2.16.1. 下载axios

```ini
npm install --save axios
```



#### 2.16.2. 封装ajax请求模块

#### 2.16.3. 配置代理