## Node.js模块化教程
1. 下载安装node.js
2. 创建项目结构
  ```shell
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-app.js
  |-package.json
    {
      "name": "commonJS-node",
      "version": "1.0.0"
    }
  ```
3. 下载第三方模块
  * npm install uniq --save
4. 模块化编码
  * module1.js
    ```javascript
    // 暴露一个对象 module.exports = value 
    module.exports = {
        msg: 'module1',
        foo() {
            console.log('foo()', this.msg)
        },
    }
    ```
  * module2.js
    ```javascript
    // 暴露一个函数 module.exports = function() {}
    module.exports = function () {
        console.log('module2')
    }
    ```
  * module3.js
    ```javascript
    // exports.xxx = value
    exports.foo = function () {
        console.log('module3 foo()')
    }
    
    exports.bar = function () {
        console.log('module3 bar()')
    }
    ```
  * app.js 
    ```javascript
    /*
        1. 定义暴露模块
            module.exports = value
        2. 引入模块
            let module = require(模块名或模块路径)
            第三方放在前面，自定义的放在后面
     */
    
    // 将其他的模块汇集到主模块
    let uniq = require('uniq')
    
    let module1 = require('./modules/module1')
    let module2 = require('./modules/module2')
    let module3 = require('./modules/module3')
    
    // 使用模块
    module1.foo()
    
    module2()
    
    module3.foo()
    module3.bar()
    
    let result = uniq([2, 4, 5, 1, 12, 3, 4, 5])
    console.log(result)
    ```
5. 通过node运行app.js
  * 命令: node app.js
  * 工具: 右键-->运行