let hello = require('./helloModule')

/*
  exports 和 module.exports
    - 通过exports只能通过.的方式来向外暴露内部变量
        exports.xxx = xxx
    - 而module.exports既可以通过.的形式，也可以直接赋值（更强大）
        module.exports.xxx = xxxxx
        module.exports = {xxx: xxxxx}
 */

console.log(hello.name)
console.log(hello.age)
hello.sayName()