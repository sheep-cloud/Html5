let module5 = (function (window, $) {
    // 数据
    let data = 'hello'

    // 操作数据的函数
    function foo() {
        console.log('foo()', data)
        console.log($('body'))
    }

    function bar() {
        console.log('bar()', data)
        otherFun() // 内部调用
    }

    // 内部私有的函数
    function otherFun() {
        console.log('otherFun()', data)
    }

    $(function () {
        $('#btn').click(function () {
            alert('jQuery 点击事件')
        })
    })

    // 返回对外的接口
    return {
        'foo': foo,
        'bar': bar
    }
})(window, $)