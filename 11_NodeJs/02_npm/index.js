/*
    通过npm下载的包都放到node_modules文件夹中
        通过npm下载的包，直接通过包名引入即可

    node搜索包的流程
        node在使用模块名来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
        如果有则直接使用，如果没有则去上一级目录的node_modules中寻找
        如果有则直接使用，如果没有则再去上一级目录的node_modules中寻找，直到找到为止
        如果找到磁盘的根目录依然没有，则报错
 */
let math = require('math')

console.log(math)
console.log('----------------------------------------------------------------------------------------------------')

let nums = [10, 20, 30]
let result = math.sum(nums)
console.log(result)