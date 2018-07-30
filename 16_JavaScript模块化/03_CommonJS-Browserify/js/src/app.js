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