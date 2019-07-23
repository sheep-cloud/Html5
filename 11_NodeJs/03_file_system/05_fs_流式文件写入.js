/*
    同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 */

var fs = require('fs')

// 流式文件写入
// 创建一个可写流
/*
    fs.createWriteStream(path[, options])
 */
var ws = fs.createWriteStream('./file/05_fs_流式文件写入.txt')

// 通过监听流的open和close事件来监听流的打开和关闭
ws.once('open', function () {
  console.log('流打开了')
})

// 通过ws向文件中输出内容
ws.write('node.js 文件系统 - 流式文件写入_1\n')
ws.write('node.js 文件系统 - 流式文件写入_2\n')
ws.write('node.js 文件系统 - 流式文件写入_3\n')

// 关闭流
ws.end()
