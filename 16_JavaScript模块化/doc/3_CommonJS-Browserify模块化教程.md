## Browserify模块化使用教程

1. 创建项目结构
  ```shell
  |-js
    |-dist //打包生成文件的目录
    |-src //源码所在的目录
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js //应用主源文件
  |-index.html
  |-package.json
    {
      "name": "commonjs-browserify",
      "version": "1.0.0"
    }
  ```
2. 下载browserify
  * 全局: npm install browserify -g
  * 局部: npm install browserify --save-dev 开发依赖的包（只在开发环境使用）
3. 定义模块代码
  * module1.js
    ```javascript
    module.exports = {
        msg: 'module1',
        foo() {
            console.log('moudle1 foo()', this.msg)
        },
    }
    ```
  * module2.js
    ```javascript
    module.exports = function () {
        console.log('module2()')
    }
    ```
  * module3.js
    ```javascript
    exports.foo = function () {
        console.log('module3 foo()')
    }
    
    exports.bar = function () {
        console.log('module3 bar()')
    }
    ```
  * app.js (应用的主js)
    ```javascript
    // 引用模块
    let uniq = require('uniq')
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    // 使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    let result = uniq([2, 4, 5, 1, 12, 3, 4, 5])
    console.log(result)
    ```
* 打包处理js:
  * browserify js/src/app.js -o js/dist/build.js

  * -o // output

  * ```json
    // 命令行 browserify js/src/app.js -o js/dist/build.js 失败
    // 使用 npm run build 可以成功
      "scripts": {
        "build": "browserify js/src/app.js -o js/dist/build.js"
      },
    ```
* 页面使用引入:
  ```html
  <script type="text/javascript" src="./js/dist/build.js"></script>
  ```