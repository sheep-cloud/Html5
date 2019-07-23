// 引入express模块
const express = require('express')
// 引入sha1模块
const sha1 = require('sha1')

// 创建app应用对象
const app = express()

/**
 * 验证服务器的有效性
 *
 *  1. 微信服务器验证开发者服务器
 *    - 测试号管理 -> 接口配置信息
 *    - 填写URL
 *      - 使用 ngrok 内网穿透, 将本地端口号开启的服务映射成外网访问的网址
 *      - ngrok http 9000
 *    - 填写TOKEN
 *      - 参与微信签名加密的一个参数
 *  2. 开发者服务器 -> 验证消息是否来自于微信服务器
 *    - 目的: 计算出signature微信加密签名, 和微信传递过来的signature进行对比, 如果一样, 说明消息来自于微信服务器, 如果不一样, 说明不是微信服务器发送的消息
 *    1. 将参与微信加密签名的三个参数(timestamp, nonce, token)按照字段顺序排序并组合在一起形成一个数组
 *    2. 将数组里所有参数拼接成一个字符串, 进行sha1加密
 *    3. 加密完成就生成了一个signature, 和微信发送过来的进行对比,
 *      如果一样, 说明消息来自于微信服务器, 返回echostr给微信服务器
 *      如果不一样, 说明不是微信服务器发送的消息, 返回error
 */

// 定义配置对象
const config = {
  token: 'colg',
  appID: 'wxab24c63af48de474',
  appsecret: 'c9508bc4dea8ef7b65995cd94ba7323d'
}

// 接收处理所有消息
app.use((req, res, next) => {
  const {signature, echostr, timestamp, nonce} = req.query
  const {token} = config

  console.log(`接收到来自微信服务器的认证消息: {加密签名: ${signature}, 时间戳: ${timestamp}, 随机数字: ${nonce}, 随机字符串: ${echostr}}`)
  /*
  {
    signature: '41c0490c7033d6c9ba4c6ba500da31e00d8216ed',      // 微信的加密签名
    echostr: '1861802057371983482',                             // 微信的随机字符串
    timestamp: '1556025866',                                    // 微信的发送请求时间戳
    nonce: '1835092283'                                         // 微信的随机数字
  }
  */


  // 1. 将参与微信加密签名的三个参数(timestamp, nonce, token)按照字段顺序排序并组合在一起形成一个数组
  const arrSort = [timestamp, nonce, token].sort()

  // 2. 将数组里所有参数拼接成一个字符串, 进行sha1加密
  const str = arrSort.join('')
  console.log(`拼接的字符串: ${str}`)
  const sha1Str = sha1(str)
  console.log(`sha1加密: ${sha1Str}`)

  // 3. 加密完成就生成了一个signature, 和微信发送过来的进行对比
  if (sha1Str === signature) {
    // 如果一样, 说明消息来自于微信服务器, 返回echostr给微信服务器
    res.send(echostr)
  } else {
    // 如果不一样, 说明不是微信服务器发送的消息, 返回error
    res.send('error')
  }

})

// 监听端口号
app.listen(9000, () => console.log(`服务器启动成功了: ${new Date().toLocaleString()}`))