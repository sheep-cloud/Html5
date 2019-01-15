/**
 * 计算得到裴波那契数列中第n个数的值; 递归
 *
 * @param n
 * @return {number}
 */
function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

var onmessage = function (event) {
    console.log('分线程接收到主线程发送的数据: ' + event.data)
    // 计算
    var result = fibonacci(event.data)
    postMessage(result)
    console.log('分线程向主线程返回数据:' + result)

    // alert(result) // alert是window的方法, 在分线程不能调用
    // 分线程中的全局对象不再是window, 所以在分线程中不可能更新界面
}
