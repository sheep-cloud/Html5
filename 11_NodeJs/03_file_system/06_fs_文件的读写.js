/*
    1. 同步文件读取
    2. 异步文件读取
    3. 简单文件读取
    4. 流式文件读取
        fs.readFile(path[, options], callback)
 */

const fs = require('fs')
fs.readFile('qq.png', function (err, data) {
    console.log(arguments)
    if (!err) {
        console.log(data)
        // 将data写入到文件中
        fs.writeFile('./file/头像.jpg', data, function (err) {
            if (!err) {
                console.log('文件写入成功')
            }
        })
    }
})