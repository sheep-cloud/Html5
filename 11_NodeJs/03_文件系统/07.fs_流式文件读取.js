/*
    流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

const fs = require('fs')

// 创建一个可读流
let rs = fs.createReadStream('E:\\Learning\\尚硅谷 www.atguigu.com\\HTML5前端视频\\11、尚硅谷NodeJS视频\\视频\\20.尚硅谷_node基础_fs模块的其他方法.avi')

// 创建一个可写流
let ws = fs.createWriteStream('20.尚硅谷_node基础_fs模块的其他方法.avi')

// 将可读流中的内容，直接输出到可写流中
rs.pipe(ws)