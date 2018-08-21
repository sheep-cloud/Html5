# Node.js使用

## 1.Node.js简介

- Node的简介
  - Node.js是一个能够在服务器端运行JavaScript的开放源代码、化平台的JavaScript运行环境
  - Node.js主要用于编写像Web服务器一样的网络应用，这和PHP、Python是类似的
  - Node.js允许通过js和一系列模块来编写服务器端应用和网络相关的应用
  - 核心模块包括文件系统I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等。Node模块的API形式简单，降低了编程的复杂度
- Node的用途
  - Web服务API，比如REST
  - 实时多人游戏
  - 后端的Web服务，例如跨域、服务器端的请求
  - 基于Web的应用
  - 多客户端的通信，如即时通信

## 2. exports 模块定义

### 2.1. exports

通过exports只能通过.的方式来向外暴露内部变量，`exports.xxx = xxx`
```javascript
exports.name = 'Rose'
exports.age = 18
exports.sayName = function () {
    console.log('我是Rose~~~')
}
```
### 2.2. module.exports

通过module.exports既可以通过.的形式，也可以直接赋值（更强大）
```javascript
// 通过.的方式	module.exports.xxx = xxx
module.exports.name = 'Rose'
module.exports.age = 18
module.exports.sayName = function () {
    console.log('我是Rose~~~')
}

// 直接赋值		module.exports = xxx
module.exports = {
    name: 'Jack',
    age: 28,
    sayName: function () {
        console.log('我是Jack')
    }
}
```

## 3. require() 模块引用

- 在规范中，定义了require()方法，这个方法接收模块标识，以此将一个模块引入到当前运行环境中
- 模块引用的示例代码

```javascript
let math = require('math')
```

### 3.1 模块分成三类

- 内建模块
  - 底层由C++编写的内建模块

- 核心模块

  - 由node引擎提供的核心模块
  - 核心模块的标识就是，模块的名字

  ```javascript
  let fs = require('fs')
  let math = require('math')
  ```

- 文件模块

  - 由用户自己创建的模块
  - 文件模块的标识就是，文件的路径（绝对路径，相对路径）相对路径使用.或..开头

  ```javascript
  let md = require('./02.module')
  let math = require('./04.math')
  ```

## 4. package 包

### 4.1. package.json 包描述文件

- 包描述文件用于表达非代码相关的信息，它是一个JSON格式的文件
- package.json位于包的根目录下，是包的重要组成部分
- package.json中的字段：
```properties
name、description、version、keywords、main、author、
maintainers、contributors、bugs、
licenses、repositories、dependencies、
homepage、os、cpu、engine、builtin、
directories、implements、scripts、author、
bin、main、devDependencies。
```
- 安装package.json
```properties
npm init    初始化，创建package.json（name不允许大写字母）
```

## 5. npm 包管理器

### 5.1. NPM 使用介绍

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### 5.2. NPM 的具体思路

1. 买个服务器作为代码仓库（registry），在里面放所有需要被共享的代码
2. 发邮件通知 jQuery、Bootstrap、Underscore 作者使用 npm publish 把代码提交到 registry 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）
3. 社区里的其他人如果想使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码
4. 下载完的代码出现在 node_modules 目录里，可以随意使用了。这些可以被使用的代码被叫做「包」（package），这就是 NPM 名字的由来：Node Package(包) Manager(管理器)。

### 5.3. NPM 的命令

- 查看npm的版本
```properties
npm -v
```

- 查看npm所有模块的版本
```properties
npm version
```

- 搜索包
```properties
npm search <package>
```

- 安装包
```properties
npm install <package>
npm i <package>			// 简写
```

- 安装包并添加到依赖（常用）
```properties
npm install <package> --save
npm i <package> -S		// 简写
```

- 删除包
```properties
npm remove <package>
npm r <package>			// 简写
```

- 删除包并删除依赖
```properties
npm remove <package> --save
npm r <package> -S		// 简写
```

- 下载当前项目所依赖的包（根据package.json）
```properties
npm install
```

- 全局安装包（一般都是一些工具）
```properties
npm install <package> -g
```

- 全局卸载包
```properties
npm uninstall -g <package>
```

- 修改npm版本
```properties
npm install npm@<version> -g
```

### 5.4. 淘宝 NPM 镜像

#### 5.4.1. 安装全局cnpm

```properties
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 5.4.2. 使用方法

- npm 默认
- cnpm 淘宝镜像，使用cnpm会生成@version的文件，和官方的文件