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

#### 2.1.4. 效果

### 2.2. 项目的打包与发布

### 2.3. eslint

### 2.4. 组件定义与使用

### 2.5. 组件间通信

### 2.6. 组件间通信1：props

### 2.7. 组件间通信2：vue自定义事件

### 2.8. 组件间通信3：消息订阅与发布（PubSubJS库）

### 2.9. 组件间通信4：slot

### 2.10. demo1：comment manage

### 2.11. demo2：todo list

## 3、Vue-ajax

## 4、Vue UI组件库

## 5、Vue-router

## 6、Vuex

## 7、Vue源码分析