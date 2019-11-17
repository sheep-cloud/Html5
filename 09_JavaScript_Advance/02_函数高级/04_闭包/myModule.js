/*
* JS模块
*   - 具有特定功能的js文件
*   - 将所有的数据和功能都封装在一个函数内部(私有的)
*   - 只向外暴露一个包含n个方法的对象或函数
*   - 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能
* */

/**
 * JS模块
 *
 * @return {{doSomething: *, doOtherthing: *}}
 */
function myModule() {
  // 私有数据
  var msg = 'colg'

  // 操作数据的函数
  function doSomeThing() {
    console.log('doSomeThing() ' + msg.toUpperCase())
  }

  function doOtherThing() {
    console.log('doOtherThing() ' + msg.toLowerCase())
  }

  // 向外暴露对象(给外部使用的方法)
  return {
    doSomeThing: doSomeThing,
    doOtherThing: doOtherThing
  }
}