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

## 3. webpack@1

### 3.1. 开启项目

#### 3.1.1. 初始化项目

```json
{
  "name": "webpack-1",
  "version": "1.0.0",
  "description": "webpack@1",
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

#### 3.1.2. 安装webpack

```ini
全局安装: npm install webpack@1 -g
局部安装: npm install webpack@1 --save-dev
```

#### 3.1.3. 创建入口src/js/entry.js

```js
document.write('entry.js is working')
```

#### 3.1.4. 编译打包js

```ini
webpack 源文件地址（入口.js） 打包地址（自动创建目录）
webpack src/js/entry.js dist/js/bundle.js
webpack src/js/entry.js dist/js/bundle.js --progress	// 编译并显示进度
webpack src/js/entry.js dist/js.bundle.js --watch		// 编译并启动监视（需要刷新浏览器）
```

#### 3.1.5. 创建主页面dist/index.html

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

#### 3.1.6. 查看页面效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuo8sjyhqkj30qz02o0sn.jpg)

#### 3.1.7. 第二个js

- 创建第二个js：src/js/content.js

```js
module.exports = `<br>It works from content.js`
```

- 更新入口：src/js/entry.js

```js
document.write('entry.js is working')
document.writeln(require('./content'))
```

- 编译打包js，查看页面效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuo94wrgn1j30qw044748.jpg)

#### 3.1.8. 加载样式

- 安装样式的loader

```ini

```

- 创建样式文件：src/css/style.css

```css
body {
    background: gray;
}
```

- 更新入口js：src/js/entry.js

```js
require('style-loader!css-loader!./../css/style.css')
document.write('entry.js is working')
document.writeln(require('./content'))
```

- 编译打包js，查看页面效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuo9cgzjuqj30qp0433yg.jpg)

#### 3.1.9. 绑定加载器

- 更新入口js：src/js/entry.js

```js
// require('style-loader!css-loader!../css/style.css')
require('../css/style.css')
document.write('entry.js is working')
document.writeln(require('./content'))
```

- 编译打包js

```ini
webpack src/js/entry.js dist/js/bundle.js --module-bind css=style-loader!css-loader
```

#### 3.1.10. 使用webpack配置文件

- 创建webpack.config.js

```js
const path = require('path')                    // path内置的模块，用来设置路径。

module.exports = {
    entry: './src/js/entry.js',                 // 入口路径配置
    output: {                                   // 出口配置
        path: path.join(__dirname, 'build'),    // 输出路径
        filename: 'js/bundle.js'                // 输出文件名
    },
    module: {                                   // 模块加载器配置
        loaders: [
            // 所有css文件声明使用css-loader和style-loader加载器
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
}
```

- 自动编译打包js

```ini
webpack --watch			// 编译并显示进度
```

- 热加载，解决手动刷新浏览器问题

  - 安装webpack-dev-server

  ```ini
  npm install webpack-dev-server@1 -g
  webpack-dev-server
  访问: http://localhost:8080/webpack-dev-server
  	 http://localhost:8080/
  发现访问的是文件夹路径而不是页面
  ```

  - 修改webpack.config.js配置文件

  ```js
  const path = require('path')                    // path内置的模块，用来设置路径。
  
  module.exports = {
      entry: './src/js/entry.js',                 // 入口路径配置
      output: {                                   // 出口配置
          path: path.join(__dirname, 'build'),    // 输出路径
          filename: 'js/bundle.js'                // 输出文件名
      },
      module: {                                   // 模块加载器配置
          loaders: [
              // 所有css文件声明使用css-loader和style-loader加载器
              {
                  test: /\.css$/,
                  loader: 'style!css'
              }
          ]
      },
      devServer: {
          contentBase: path.join(__dirname, 'build'), // 内置服务器动态加载页面所在的目录
          historyApiFallback: true,               // 设置为true的时候所有的跳转都指向index.html
          port: 8080,                             // 设置端口号，不设置时候默认为 8080
          inline: true                            // 设置为true的时候会自动刷新(有的版本需要配合hot: true使用)
      }
  }
  ```

#### 3.1.11. 加载图片

- 安装依赖的loader

```ini
npm install url-loader file-loader --save-dev
url-loader比file-loader功能更加完善是对file-loader的上层封装,但二者需配合使用
```

- 添加config中loader的配置

```js
    module: {                                   // 模块加载器配置
        loaders: [
            // 所有css文件声明使用css-loader和style-loader加载器
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                // 如果图片小于limit就会进行Base64编码
                options: {
                    limit: 10000
                }
            }
        ]
    },
```

- 拷入两张图片
  - 大图：bg.png，小图：logo.png
- 定义图片的样式

```css
body {
    background: gray;
}
#box1 {
    background: url("../img/bg.png");
    width: 200px;
    height: 200px;
}
#box2 {
    background: url("../img/logo.png");
    width: 200px;
    height: 200px;
}
```

- 在页面引用样式或图片

```html

```

- 编译js，查看页面效果

```ini
webpack-dev-server
```

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fuogn6tsycj307p0f63z0.jpg)

#### 3.1.12. 配置npm script命令

- package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --progroess"
  }

npm start:	编译运行项目
```

## 4. webpack@3