# Vue

## 1、Vue核心

### 1.1.Vue的基本认识

#### 1.1.1.介绍描述

- 渐进式JavaScript框架
- 作用：动态构建用户界面

####  1.1.1.Vue的特点

- 遵循MVVM模式
- 编码简介，体积小，运行效率高，适合移动/pc端开发
- 它本身只关注UI，可以轻松引入vue插件或第三方库开发项目

#### 1.1.3.与其他前端JS框架的关联

- 借鉴angular的**模版**和**数据绑定**技术
- 借鉴react的**组件化**和**虚拟DOM**技术

#### 1.1.4.Vue扩展插件

- vue-cli：vue脚手架
- vue-resource(axios)：ajax请求
- vue-router：路由
- vuex：状态管理
- vue-lazyload：图片懒加载
- vue-scroller：页面滑动相关
- mint-ui：基于vue的UI组件库（移动端）
- element-ui：基于vue的UI组件库（pc端）

### 1.2.Vue的基本使用

#### 1.2.1.编码

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>helloworld</title>
</head>
<body>
    <!--
        1. 引入vue.js
        2. 创建vue对象
            el: 指定根element（选择器）
            data：初始化数据（页面可以访问）
        3. 双向数据绑定：v-model
        4. 显示数据：{{xxx}}
        5. 理解vue的mvvm实现
    -->
    <div id="app">  <!--view-->
        <input type="text" v-model="username">
        <p>Hello {{username}}</p>
    </div>

    <script type="text/javascript" src="../js/vue.js"></script>
    <script type="text/javascript">
        // 创建vue实例
        const vm = new Vue({    // 配置对象
            el: '#app',         // element: 选择器
            data: {             // 数据（model）
                username: 'Jack'
            }
        })
    </script>
</body>
</html>
```

#### 1.2.2.使用vue开发者工具调试

- https://github.com/vuejs/vue-devtools#vue-devtools

#### 1.2.3.理解vue的MVVM

![](http://ww1.sinaimg.cn/large/005PjuVtgy1frsr3aaeydj30f1076t99.jpg)

### 1.3.模版语法

## 2、Vue的组件化编码

### 2.1. 使用vue-cli创建模版项目

#### 2.1.1. 说明

- vue-cli是vue官方提供的脚手架工具
- github：https://github.com/vuejs/vue-cli
- 作用：从https://github.com/vuejs-templates下载模版项目
- 文档：https://github.com/vuejs/vue-docs-zh-cn/tree/master/vue-cli

#### 2.1.2. 创建vue项目

```shell
cd D:\workspace-all\atguigu\Html5\20_Vue

npm install -g vue-cli
vue init webpack vue-demo					(项目名必须小写)
cd vue-demo\
npm install
npm run dev								   (在内存中进行打包)

访问：http://localhost:8080/
```

#### 2.1.3. 模版项目的结构

```shell
|-- build : webpack 相关的配置文件夹(基本不需要修改)
	|-- dev-server.js : 通过 express 启动后台服务器
|-- config: webpack 相关的配置文件夹(基本不需要修改)
	|-- index.js: 指定的后台服务的端口号和静态资源文件夹
|-- node_modules
|-- src : 源码文件夹
	|-- components: vue 组件及其相关资源文件夹
	|-- App.vue: 应用根主组件
	|-- main.js: 应用入口 js
|-- static: 静态资源文件夹
|-- .babelrc: babel 的配置文件
|-- .eslintignore: eslint 检查忽略的配置
|-- .eslintrc.js: eslint 检查的配置
|-- .gitignore: git 版本管制忽略的配置
|-- index.html: 主页面文件
|-- package.json: 应用包配置文件
|-- README.md: 应用描述说明的 readme 文件
```

#### 2.1.4. 效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fry24yc88hj317t0a9gm8.jpg)

### 2.2. 项目的打包与发布

#### 2.2.1. 打包

```shell
npm run build
```

#### 2.2.2. 发布1：使用静态服务器工具包

```shell
npm install -g serve
serve dist

访问：http://localhost:5000

# 无法成功，原因不明
```

#### 2.2.3. 发布2：使用动态web服务器（tomcat）

```shell
1. 修改配置：webpack.prod.conf.js		Line 25
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    publicPath: '/vue-demo/'  // 打包文件夹的名称
  },
  
 2. 重新打包：
 npm run build
 3. 修改dist文件夹为项目名称：vue-demo
 4. 将vue-demo拷贝到运行的tomcat的webapps目录下
 5. 访问：
 http://localhost:8080/vue-demo
```

### 2.3. ESLint

#### 2.3.1. 说明

- ESLint是一个代码规范检查工具
- 它定义了很多特定的规则，一旦你的代码违背了某一规则，ESLint会做出非常有用的提示
- 官网：http://eslint.cn/
- 基本已替代以前的JSLint

#### 2.3.2. ESLint提供以下支持

- ES
- JSX
- style检查
- 自定义错误和提示

#### 2.3.3. ESLint提供以下几种校验

- 语法错误校验
- 不重要或丢失的标点符号，如分号
- 没法运行到的代码块
- 未被使用的参数提醒
- 确保样式的统一规则，如sass或者less
- 检查变量的命名

#### 2.3.4. 规则的错误等级有三种

- 0: 关闭规则
- 1: 打开规则，并且作为一个警告（信息打印黄色字体）
- 2: 打开规则，并且作为一个错误（信息打印红色字体）

#### 2.3.5. 相关配置文件

- .eslintrc.js：全局规则配置文件

```javascript
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 缩进，0：表示不验证规则。
    'indent': 0,
    'no-new': 0
  }
```

- 在js/Vue文件中修改局部规则
- .eslintignore：检查忽略的文件

### 2.4. 组件定义与使用

#### 2.4.1. vue文件的组成（3个部分）

- 模版页面

```vue
<template>
	页面模版
</template>
```

- JS 模块对象

```vue
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
```

- 样式

```vue
<style scoped>
  样式定义
</style>
```

#### 2.4.2. 基本使用

- 引入组件
- 映射成标签
- 使用组件标签

```vue
<template>
  <!-- 3. 使用组件标签-->
  <List/>
</template>

<script>
  // 1. 引入组件
  import List from 'list'

  export default {
    // 2. 映射成标签
    components: {List}
  }
</script>
```

#### 2.4.3. 关于标签名与标签属性名书写问题

- 写法一：一模一样
- 写法二：答谢便小写，并用-连接

### 2.5. 组件间通信

#### 2.5.1. 组件间通信基本原则

- 不要在子组件中直接修改父组件的状态数据
- 数据在哪儿，更新数据的行为（函数）就应该定义在哪儿

#### 2.5.2. vue组件间通信方式

- props： 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象。
- vue的自定义事件
- 消息订阅与发布（如：pubsub库）
- slot
- vuex

### 2.6. 组件间通信1：props

#### 2.6.1. 使用组件标签时

```vue
<List :comments="comments" :deleteComment="deleteComment"/>
```

#### 2.6.2. 自定义MyComponent时

- 在组件内声明所有的props
- 方式一：只指定名称

```vue
props: ['comments', 'deleteComment'], // 只指定属性名
```

- 方式二：指定名称和类型

```vue
    props: { // 指定属性名和属性值的类型
      comment: Object,
      deleteComment: Function,
      index: Number
    },
```

- 方式三：指定名称/类型/必要性/默认值

```vue
    props: {
      addComment: { // 指定了属性名/属性值的类型/必要性
        type: Function,
        required: true
      }
    },
```

#### 2.6.3. 注意

- 此方法用于父组件向子组件传递数据
- 所有标签属性都会成为组件对象的属性，模版页面可以直接引用
- 问题：
  - 如果需要向非自后代传递数据必须多层逐层传递
  - 兄弟组件间也不能直接props通信，必须借助父组件才可以

### 2.7. 组件间通信2：vue自定义事件

#### 2.7.1. 绑定时间监听

- 方式一：通过 v-on 绑定

```vue
      <!--给todo-header标签对象绑定addTodo事件监听-->
      <todo-header @addTodo="addTodo"/>

        // 触发自定义事件：addTodo
        this.$emit('addTodo', todo)
```

- 方式二：通过$on()

```vue
<todo-header ref="header"/>

    mounted() { // 执行异步代码
      // 给<todo-header/>绑定addTodo事件监听
      // this.$on('addTodo', this.addTodo) // 给app绑定监听
      this.$refs.header.$on('addTodo', this.addTodo)
    },

        // 触发自定义事件：addTodo
        this.$emit('addTodo', todo)
```

#### 2.7.2. 触发事件

```javascript
        // 触发自定义事件：addTodo
        this.$emit('addTodo', todo)
```

#### 2.7.3. 注意

- 此方式只用于子组件向父组件发送消息（数据）
- 问题：隔代组件或者星弟组件间通信此种方式不合适

### 2.8. 组件间通信3：消息订阅与发布（pubsub-js库）

#### 2.8.1. 安装

```shell
npm install pubsub-js --save
```

#### 2.8.2. 订阅消息

```javascript
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
```

#### 2.8.3. 发布消息

```javascript
        const {todo, index} = this
        if (window.confirm(`确认删除${todo.title}吗？`)) {
          // deleteTodo(index)

          // 发布消息
          PubSub.publish('deleteTodo', index)
        }
```

#### 2.8.4. 注意

- 优点：此方式可以实现任意关系组件间通信（数据）

#### 2.8.5. 事件的两个重要操作（总结）

- 绑定事件监听（订阅消息）

- 触发事件（发布消息）

### 2.9. 组件间通信4：slot

### 2.10. demo1：comment manage

### 2.11. demo2：todo list

## 3、Vue-ajax

### 3.1. vue项目中常用的2个ajax库

#### 3.1.1. vue-resource

- vue插件，非官库，vue1.x使用广泛

#### 3.1.2. axios

- 通用的ajax请求库，官方推荐，vue2.x使用广泛

### 3.2. vue-resource的使用

- Github：https://github.com/pagekit/vue-resource
- 下载：

```shell
npm install vue-resource --save
```

- 编码：

```javascript
// 引入模块
import vueResource from 'vue-resource'

// 声明使用插件
Vue.use(vueResource) // 内部会给vm独享和组件对象添加一个属性：$http

// 通过vue组件对象发送ajax请求
      const url = `https://api.github.com/search/repositories?q=vue-source&sort=stars`
      this.$http.get(url).then(
        // 成功响应
        response => {
          // 成功
          const result = response.data
          // 得到最受欢迎的repo
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        },
        // 失败响应
        response => {
          alert('请求失败')
        }
      )
```



### 3.3. axios的使用

- Github：https://github.com/axios/axios
- 下载：

```shell
npm install axios --save
```

- 编码：

```javascript
  // 引入组件
  import axios from 'axios'

      // 使用axios发送ajax请求
      axios.get(url).then(response => {
        // 成功
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error => {
        alert('请求失败')
      })
```

### 3.4. 测试接口

- 接口1：https://api.github.com/search/repositories?q=vue&sort=stars
- 接口2：https://api.github.com/search/users?q=vue

### 3.5. demo3：github users

```javascript
    mounted() {
      // 是否再次发ajax请求，不是，而是在点击之后
      // 订阅搜索的消息
      PubSub.subscribe('search', (msg, searchName) => {
        // 说明需要发ajax请求进行搜索
        const url = `http://api.github.com/search/users?q=${searchName}`
        // 更新状态（请求中）
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''

        // 发ajax请求
        axios.get(url).then(response => {
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login
          }))
          console.log(users)
          // 成功，更新状态（成功）
          this.loading = false
          this.users = users
        }).catch(error => {
            // 失败，更新状态（失败）
            this.loading = false
            this.errorMsg = url + ': ' + error.response.statusText
          }
        )
      })
```

## 4、Vue UI组件库

### 4.1. 使用mint-ui

#### 4.1.1. 介绍

- 主页：http://mint-ui.github.io/#!/zh-cn
- 说明：饿了么开源的基于 Vue.js 的移动端组件库 

#### 4.1.2. 下载

```shell
1. npm 安装
npm install mint-ui --save

2. 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
npm install babel-plugin-component --save-dev

3. 修改 .babelrc 实现按需打包
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

#### 4.1.3. mint-ui 组件分类

- 标签组件
- 非标签组件

#### 4.1.4. 使用 mint-ui 的组件

- index.html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<!--<meta name="viewport" content="width=device-width,initial-scale=1.0">-->
<!-- 移动端 -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
<link rel="stylesheet" href="./static/css/bootstrap.css">
<title>vue-demo</title>
<!-- 处理移动端事件延迟 -->
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body)
    }, false)
  }
  if (!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' + '>' + '<' + '/' + 'script>')
  }
</script>
</head>
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
</html>
```

- main.js

```javascript
import Vue from 'vue'
import App from './App'
// 引入指定组件
import {Button, Swipe} from 'mint-ui'

// 注册成标签（全局）
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)

new Vue({
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>'
})
```

- App.vue

```vue
<template>
  <!-- click.native 原生的事件监听-->
  <mt-button type="primary" @click.native="handleClick">确定</mt-button>
</template>

<script>
  // 引入 消息提示 组件
  import {Toast} from 'mint-ui'

  export default {
    methods: {
      handleClick() {
        Toast('提示信息')
      }
    }
  }
</script>

<style scoped>
  button {
    width: 100%;
  }
</style>

```

### 4.2. 使用element-ui

#### 4.2.1. 介绍

- 主页：http://element-cn.eleme.io/#/zh-CN
- 说明：饿了么开源的一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 

## 5、Vue-router

### 5.1. 理解

#### 5.1.1. 说明

- 官方提供的用来实现SPA的vue插件（单页应用）
- Github：https://github.com/vuejs/vue-router
- 文档：https://router.vuejs.org/zh/
- 下载

```shell
npm install vue-router --save
```

#### 5.1.2. 相关API说明

- VueRouter()：	用于创建路由器的构建函数

```javascript
// 默认暴露
export default new VueRouter({
  // 多个配置项
})
```



- 路由配置

```javascript
export default new VueRouter({
  // 多个配置项
  routes: [
    // 一般路由
    {path: '/about', component: About},
    {path: '/home', component: Home},
    // 自动跳转路由
    {path: '/', redirect: '/about'}
  ]
})
```

- 注册路由器

```javascript
// 引入组件
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({ // 配置对象的属性名都是一些固定的名称，不能随便修改
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>',
  // 配置路由器
  router
})
```

- 使用路由组件标签

```vue
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="pan1">
          <div class="pan1-body">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
```

### 5.2. 基本路由

#### 5.2.1. 效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1frznsfaamtj30jx0683yc.jpg)

#### 5.2.2. 路由组件

- About.vue
- Home.vue

#### 5.2.3. 应用组件：App.vue

```vue
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
          
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
```

#### 5.2.4. 路由器模块：src/router/index.js

```javascript
/*
* 路由器模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import About from '../views/About'
import Home from '../views/Home'

// 声明使用插件
Vue.use(VueRouter)

// 默认暴露
export default new VueRouter({
  // 多个配置项
  routes: [
    // 一般路由
    {path: '/about', component: About},
    {path: '/home', component: Home},
    // 自动跳转路由
    {path: '/', redirect: '/about'}
  ]
})

```

#### 5.2.5. 注册路由器：main.js

```javascript
// 引入组件
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({ // 配置对象的属性名都是一些固定的名称，不能随便修改
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>',
  // 配置路由器
  router
})
```

#### 5.2.6. 总结：编写使用路由的3步

- 定义路由组件
- 注册路由
- 使用路由

### 5.3. 嵌套路由

### 5.4. 向路由组件传递数据

### 5.5. 缓存路由组件对象

### 5.6. 编程式路由导航

## 6、Vuex

## 7、Vue源码分析