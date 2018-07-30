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