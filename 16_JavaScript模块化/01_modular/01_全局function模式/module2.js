let data2 = 'hello-2'

// 与另一个模块中的函数冲突了
function foo() {
  console.log('foo()', data2)
}