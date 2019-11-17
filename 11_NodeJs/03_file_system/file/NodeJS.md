# Node.js

## 1. Node.js简介

- Node的简介
  - Node.js是一个能够在服务器端运行JavaScript的开放源代码, 平台化的JavaScript运行环境
  - Node.js主要用于编写像Web服务器一样的网络应用, 和PHP, Python是类似的
  - Node.js允许通过js和一系列模块来编写服务器端应用和网络相关的应用
  - 核心模块包括文件系统I/O, 网络（HTTP, TCP, UDP, DNS, TLS/SSL等）, 二进制数据流, 加密算法, 数据流等等. Node模块的API形式简单, 降低了编程的复杂度
- Node的用途
  - Web服务API, 比如REST
  - 实时多人游戏
  - 后端的Web服务, 例如跨域, 服务器端的请求
  - 基于Web的应用
  - 多客户端的通信, 如即时通信

## 2. 模块定义

- 在运行环境中, 提供了`exports`对象用于导出当前模块的方法或者变量, 并且它是唯一的导出的出口

- 在模块中还存在一个`module`对象, 它代表模块自身, 而`exports`是`module`的属性

- 在Node中一个文件就是一个模块

- 模块导出的示例代码

  - `exports`

    ```js
    // exports 只能通过.的方式来向外暴露内部变量: exports.xxx = xxx
    exports.name = 'Jack'
    exports.age = 18
    exports.sayName = function() {
        console.log('sayName')
    })
    ```

  - `module.exports`

    ```js
    // module.exports 既可以通过.的形式, 也可以直接赋值(更强大)
    
    // 通过.的方式 => module.exports.xxx = xxx
    module.exports.name = 'Jack'
    module.exports.age = 18
    module.exports.sayName = function() {
        console.log('sayName')
    }
    
    // 直接赋值 => module.exports = xxx
    module.exports = {
        name: 'Jack',
        age: 18,
        sayName: function() {
            console.log('sayName')
        }
    }
    ```

## 3. 模块引用

- 在规范中, 定义了`require()`方法, 这个方法接收模块标识, 以此将一个模块引入到当前运行环境中

- 模块引用的示例代码

  - `require()`

    ```js
    var math = require('math')
    ```

- 模块分为三类

  - 内建模块

    - 底层由C++编写的内建模块

  - 核心模块

    - 由node引擎提供的核心模块

    - 核心模块的标识就是, 模块的名字

      ```js
      var fs = require('fs')
      var math = require('math')
      ```

  - 文件模块

    - 由用户自己创建的模块

    - 文件模块的标识就是, 文件的路径(绝对路径, 相对路径)相对路径使用.或..开头

      ```js
      var md = require('./02_module')
      var hello = require('./helloModule')
      ```

## 4. 包 package

- 包 `package`

  - `CommonJS`的包规范允许我们将一组相关的模块组合到一起, 形成一组完整的工具
  - `CommonJS`的包规范由**包结构**和**包描述文件**两个部分组成
  - 包结构: 用于组织包中的各种文件
  - 包描述文件: 描述包的相关信息, 以供外部读取分析

- 包结构

- 包描述文件

  - 包描述文件用于表达非代码相关的信息, 它是一个JSON格式的文件(package.json), 位于包的根目录下

  - package.json中的字段

    ```ini
    name、description、version、keywords、main、author、
    maintainers、contributors、bugs、
    licenses、repositories、dependencies、
    homepage、os、cpu、engine、builtin、
    directories、implements、scripts、author、
    bin、main、devDependencies。
    ```

- 安装package.json

  ```ini
  # 初始化, 创建package.json(name不允许大写字母)
  npm init
  ```

## 5. npm(Node Package Manager)

### 5.1. NPM 使用介绍

- NPM是随同NodeJS一起安装的包管理工具, 能解决NodeJS代码部署上的很多问题, 常见的使用场景有以下几种：
  - 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
  - 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
  - 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### 5.2. NPM 的具体思路

1. 买个服务器作为代码仓库（registry）, 在里面放所有需要被共享的代码
2. 发邮件通知 jQuery、Bootstrap、Underscore 作者使用 npm publish 把代码提交到 registry 上, 分别取名 jquery、bootstrap 和 underscore（注意大小写）
3. 社区里的其他人如果想使用这些代码, 就把 jquery、bootstrap 和 underscore 写到 package.json 里, 然后运行 npm install , npm 就会帮他们下载代码
4. 下载完的代码出现在 node_modules 目录里, 可以随意使用了。这些可以被使用的代码被叫做「包」（package）, 这就是 NPM 名字的由来：Node Package(包) Manager(管理器)。

### 5.3. NPM 的命令

```ini
# 查看npm的版本
npm -v
# 查看npm所有模块的版本
npm version
# 搜索包
npm search <package>
# 安装包
npm install <package>
npm i <package>				# 简写
# 安装包并添加到依赖(常用)
npm install <package> --save
npm i <package> -S			# 简写 S大写
# 删除包
npm remove <package>
npm r <package>				# 简写
# 删除包并删除依赖
npm remove <package> --save
npm r <package> -S			# 简写 S大写
# 下载当前项目所依赖的包(根据package.json)
npm install
# 全局安装包(一般都是一些工具)
npm install <package> -g
# 全局卸载包
npm uninstall <package> -g
# 修改npm版本
npm install npm@<version> -g
```

### 5.4. 淘宝 NPM 镜像

- 全局安装cnpm

  ```ini
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```

- 使用方法

  ```ini
  # 默认
  npm xxx
  # cnpm, 淘宝镜像, 使用cnpm会生成@version的文件和官方的文件
  cnpm xxx
  ```

## 6. File_System 文件系统

### 6.1. Buffer(缓冲区)

```js
/*
    Buffer（缓冲区）
        - Buffer的结构和数组很向, 操作的方法也和数组类似
        - 数组中不能存储二进制的文件, 而Buffer就是专门用来存储二进制的数据
        - 使用Buffer不需要引入模块, 直接使用即可
        - 在Buffer中存储的都是二进制数据, 但是在显示时是以16进制的形式显示
        - Buffer中的一个元素, 占用内存中的一个字节

        Buffer.form(str)        将一个字符串转换成Buffer
        Buffer.alloc(size)      创建一个指定大小的Buffer
        Buffer.alloUnsafe(size) 创建一个指定大小的Buffer, 但是可能包含敏感数据
        buf.toString()          将缓冲区中的数据转换为字符串
 */
```

### 6.2. File_System(文件系统)

- 流式文件写入

  ```js
  /*
      同步、异步、简单文件的写入都不适合大文件的写入, 性能较差, 容易导致内存溢出
   */
  
  var fs = require('fs')
  
  // 流式文件写入
  // 创建一个可写流
  /*
      fs.createWriteStream(path[, options])
   */
  var ws = fs.createWriteStream('./file/05_fs_流式文件写入.txt')
  
  // 通过监听流的open和close事件来监听流的打开和关闭
  ws.once('open', function () {
      console.log('流打开了')
  })
  
  // 通过ws向文件中输出内容
  ws.write('node.js 文件系统 - 流式文件写入_1\n')
  ws.write('node.js 文件系统 - 流式文件写入_2\n')
  ws.write('node.js 文件系统 - 流式文件写入_3\n')
  
  // 关闭流
  ws.end()
  ```

- 流式文件读写

  ```js
  /*
      流式文件读取也适用于一些比较大的文件, 可以分多次将文件读取到内存中
   */
  
  var fs = require('fs')
  
  // 创建一个可读流
  var rs = fs.createReadStream('../README.md')
  
  // 创建一个可写流
  var ws = fs.createWriteStream('./file/README.png')
  
  // 将可读流中的内容, 直接输出到可写流中
  rs.pipe(ws)
  ```