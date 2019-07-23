// 引入sha1模块
const sha1 = require('sha1')
// 引入config模块
const config = require('../config')
// 引入tool模块
const {getUserDataAsync} = require('../utils/tool')

/**
 * 验证服务器有效性模块
 * @returns {Function}
 */
module.exports = () => {

  return async (req, res, next) => {
    const {signature, echostr, timestamp, nonce} = req.query
    const {token} = config

    console.log(`接收到来自微信服务器的认证消息: [${signature}, ${timestamp}, ${nonce}, ${echostr}]`)

    const sha1Str = sha1([timestamp, nonce, token].sort().join(''))

    /*
      微信服务器会发送两种类型消息给开发者服务器
        1. GET 请求
          - 验证服务器的有效性
        2. POST 请求
          - 微信服务器会将用户发送的数据已POST请求的方式转发到开发者服务器
     */

    const {method} = req
    if (method === 'GET') {
      if (sha1Str === signature) {
        res.send(echostr)
      } else {
        res.end('error')
      }
    } else if (method === 'POST') {
      // 验证消息来自于微信服务器
      if (sha1Str !== signature) {
        // 说明消息不是微信服务器
        res.end('error')
      }

      //console.log(req.query)
      /*
      {
        signature: 'ea0a8a6c53d2b4236516ac16e5d9048fe019f135',
        timestamp: '1556113921',
        nonce: '961775874',
        openid: 'oIZRd1KTecK0E_AmH-ea_thPhgGU'                        // 用户的微信id
       }
       */

      // 接收请求体中的数据, 流式数据
      const xmlData = await getUserDataAsync(req)
      console.log(xmlData)

      // 如果开发者服务器没有返回响应给服务器, 微信服务器会发送三次请求过来
      res.end('')
    } else {
      res.end('error')
    }
  }

}