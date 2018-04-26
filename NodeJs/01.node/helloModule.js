/*
module.exports.name = 'Rose'
module.exports.age = 18
module.exports.sayName = function () {
  console.log('我是Rose~~~')
}
*/

// exports = modeul.exports
module.exports = {
  name: 'Jack',
  age: 28,
  sayName: function () {
    console.log('我是Jack')
  }
}

let obj = {}
obj.a = {}
let a = obj.a
// a 和 obj.a 指向的是同一个对象
console.log(a === obj.a)

a.name = 'Tom'
console.log(obj.a.name)

a = new Object()
console.log(obj.a.name)
console.log(a.name)