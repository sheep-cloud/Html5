# webpack

## 1. 了解webpack相关

### 1.1. 什么是webapck

- webpack是一个模块打包器（bundler）
- 在webpack看来，前端的所有资源文件（js/json/css/img/less/...）都会作为模块处理
- 它将根据模块的依赖关系进行静态分析，生成对应的静态资源

### 1.2. 理解Loader

- webpack本身只能加载JS/JSON模块，如果要加载其他类型的文件（模块），就需要使用对应的loader进行转换/加载
- Loader本身也是运行在node.js环境中的javascript模块
- 它本身是一个函数，接受源文件作为参数，返回转换的结果
- loader一般以xxx-loader的方式命名，xxx代表了这个Loader要做的转换功能，比如json-loader

### 1.3. 配置文件（默认）

- webpack.config.js 是一个node模块，返回一个json格式的配置信息对象

### 1.4. 插件

- 插件可以完成一些Loader不能完成的功能
- 插件的使用一般是在webpack的配置信息plugins选项中指定
- CleanWebpackPlugin：自动清除指定文件夹资源
- HtmlWebpackPlugin：自动生成HTML文件
- UglifyJSPLugin：压缩js文件

## 2. 学习文档

- webpack官网: http://webpack.github.io/
- webpack2文档(英文): https://webpack.js.org/
- webpack2文档(中文): https://doc.webpack-china.org/


## 3. 开启项目

### 3.1. 初始化项目

```json
{
  "name": "01_webpack",
  "version": "1.0.0",
  "description": "webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "null"
  },
  "author": "",
  "license": "ISC"
}
```

### 3.2. 安装webpack

```ini
全局安装: npm install webpack@3 -g
局部安装: npm install webpack@3 --save-dev
```

### 3.3. 创建入口src/js/entry.js

```js
document.write('entry.js is working')
```

### 3.4. 编译打包js

```ini
webpack 源文件地址（入口.js） 打包地址（自动创建目录）
webpack src/js/entry.js dist/js/bundle.js
```

### 3.5. 创建主页面dist/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>index</title>
<script src="./js/bundle.js"></script>
</head>
<body>

</body>
</html>
```

### 3.6. 查看页面效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuo45v7i8cj30nv02xq2u.jpg)