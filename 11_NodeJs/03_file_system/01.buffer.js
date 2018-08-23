/*
    Buffer（缓冲区）
        - Buffer的结构和数组很想，操作的方法也和数组类似
        - 数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制的数据
        - 使用Buffer不需要引入模块，直接使用即可
        - 在Buffer中存储的都是二进制数据，但是在显示时是以16进制的形式显示
        - Buffer中的一个元素，占用内存中的一个字节

        Buffer.form(str)        将一个字符串转换成Buffer
        Buffer.alloc(size)      创建一个指定大小的Buffer
        Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
        buf.toString()          将缓冲区中的数据转换为字符串
 */
let str = 'Hello Node.js'
let str2 = '哈喽 Node.js'

// 将一个字符串保存到buffer中
let buf = Buffer.from(str)
let buf2 = Buffer.from(str2)

console.log(str, str.length, buf, buf.length)
console.log(str2, str2.length, buf2, buf2.length)
console.log('----------------------------------------------------------------------------------------------------')

// 创建一个指定大小的buffer
// Buffer的所有构造函数都是不推荐使用的
let buf3 = new Buffer(10) // 10个字节的buffer，新建的 Buffer 的内容是未知的并且 可能包含敏感数据。使用 Buffer.alloc(size) 代替它去初始化 Buffer 为 0。
console.log(buf3)
console.log('----------------------------------------------------------------------------------------------------')

let buf01 = Buffer.alloc(10)
console.log(buf01)
// 通过索引，来操作buf中的元素
buf01[0] = 58
buf01[1] = 255
console.log(buf01)