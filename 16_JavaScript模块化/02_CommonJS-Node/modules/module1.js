// 暴露一个对象 module.exports = value
module.exports = {
    msg: 'module1',
    foo() {
        console.log('module1 foo()', this.msg)
    },
}