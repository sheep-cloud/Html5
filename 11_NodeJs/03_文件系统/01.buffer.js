/*
  Buffer（缓冲区）
    - Buffer的结构和数组很像，操作的方法也和数组类似
    - 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
    - 使用buffer不需要引入模块，直接使用即可
    - 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
        buffer中的每一个元素的范围是从00 - ff，0 - 255
        00000000 - 11111111

        计算机 一个0或一个1 我们称为1位（bit）

        8bit = 1byte（字节）
        1024byte = 1kb
        1024kb = 1mb
        1024mb = 1gb
        1024gb = 1tb

        buffer中的一个元素，占用内存中的一个字节
 */
let str = 'Hello Node.js'
let str2 = '哈喽 Node.js'

// 将一个字符串保存到buffer中
let buf = Buffer.from(str)
let buf2 = Buffer.from(str2)

console.log(buf)
console.log(buf2)
console.log('----------------------------------------------------------------------------------------------------')

console.log(str.length, buf.length)
console.log(str2.length, buf2.length)

// 创建一个指定大小的buffer
let buf3 = new Buffer(10) // 10个字节的buffer
console.log(buf3.length)