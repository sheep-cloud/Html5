// 引入sha1模块
const sha1 = require('sha1')
// 引入config模块
const config = require('../config')

/**
 * 验证服务器有效性模块
 * @returns {Function}
 */
module.exports = () => {

  return (req, res, next) => {
    const {signature, echostr, timestamp, nonce} = req.query
    const {token} = config

    console.log(`接收到来自微信服务器的认证消息: {加密签名: ${signature}, 时间戳: ${timestamp}, 随机数字: ${nonce}, 随机字符串: ${echostr}}`)

    if (sha1([timestamp, nonce, token].sort().join('')) === signature) {
      res.send(echostr)
    } else {
      res.send('error')
    }
  }

}