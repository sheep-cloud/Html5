/*
    异步文件写入
        fs.open(path, flags[, mode], callback)
            - callback  异步调用的方法，结果都是通过回调函数的参数返回的
            - 回调函数两个参数：
                err     错误对象，如果没有错误则为null
                fd      文件的描述符
        fs.write(fd, string[, position[, encoding]], callback)
 */

// 引入fs模块
var fs = require('fs')

// 打开文件
fs.open('./file/03_fs_异步文件写入.txt', 'w', function (err, fd) {
  // 查看回调函数的参数
  console.log(arguments)
  // 判断是否出错
  if (!err) {
    fs.write(fd, 'node.js 文件系统 - 异步文件写入', function (err) {
      if (!err) {
        console.log('写入成功')
      }
      fs.close(fd, function (err) {
        if (!err) {
          console.log('文件已关闭')
        }
      })
    })
  }
})