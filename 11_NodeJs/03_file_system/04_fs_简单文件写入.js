/*
    简单文件写入
        fs.writeFile(file, data[, options], callback)
        fs.writeFileSync(file, data[, options])
            - file      要操作的文件的路径
            - data      要写入的数据
            - options   选项，可以对写入进行一些设置
            - callback  当写入完成以后执行的函数
 */

const fs = require('fs')

fs.writeFile('./file/04_fs_简单文件写入.txt', 'node.js 文件系统 - 简单文件写入', {flag: 'w'}, function (err) {
  console.log(arguments)
  if (!err) {
    console.log('写入成功')
  }
})
