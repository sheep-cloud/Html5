/*
    文件系统（File System）
        - 文件系统简单来说就是通过Node来操作系统中的文件
        - 使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载

    文件的写入
        - 手动操作的步骤
            1. 打开文件
                fs.openSync(path, flags[, mode])
                    - path      要打开文件的路径
                    - flags     打开文件要做的操作的类型
                        r 只读
                        w 可写
                    - mode      设置文件的操作权限，一般不写
                    返回值：     该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
                fs.open(path, flags[, mode], callback)
            2. 向文件中写入内容
                fs.writeSync(fd, string[, position[, encoding]])
                    - fd        文件的描述符，需要传递要写入的文件的描述符
                    - string    要写入的内容
                    - position  写入的起始位置
                    - encoding  写入的编码，默认utf-8
            3. 保存并关闭文件
                fs.closeSync(fd)
                    - fd        要关闭文件的描述符
 */
const fs = require('fs')

// 打开文件，相对路径
let fd = fs.openSync('hello.txt', 'w')
// 向文件中写入内容
fs.writeSync(fd, 'node.js 文件系统-同步文件写入')
// 关闭文件
fs.closeSync(fd)