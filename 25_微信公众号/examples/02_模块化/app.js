// 引入express模块
const express = require('express')
// 引入auth模块
const auth = require('./wechat/auth')

// 创建app应用对象
const app = express()

// 接收处理所有消息
app.use(auth())

// 监听端口号
app.listen(9000, () => console.log(`服务器启动成功了: ${new Date().toLocaleString()}`))