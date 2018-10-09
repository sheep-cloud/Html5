;(function () {
    function foo(num1, num2) {
        return num1 + num2
    }

    console.log(foo(1, 2))
})()
;(function () {
    var result = [1, 2, 3, 4, 5].map(function (item) {
        return item + 10
    })
    console.log(result)
})()