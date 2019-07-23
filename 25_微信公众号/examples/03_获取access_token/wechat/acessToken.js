/*
  获取access_token
    是什么? 公众号的全局唯一接口调用凭据, 公众号调用各接口时都需使用access_token

    特点:
      1. 唯一的
      2. 有效期为2小时, 提前5分钟请求
      3. 接口权限, 每天2000次

    请求地址: https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    请求方式: GET

    设计思路:
      1. 首次本地没有, 发送请求获取access_token, 保存下来(本地文件), 直接使用
      2. 第二次或以后:
        - 先去本地读取文件, 判断它是否过期
          - 没有过期
            - 直接使用
          - 过期了
            - 重新请求获取access_token, 保存下来覆盖之前的文件(保证文件是唯一的)

     整理思路:
      读取本地文件(readAccessToken)
        - 本地有文件
          - 判断它是否过期(isValidAccessToken)
            - 没有过期
              - 直接使用
            - 过期了
              - 重新请求获取access_token(getAccessToken), 保存下来覆盖之前的文件(保证文件是唯一的)(saveAccessToken)
        - 本地没有文件
          - 发送请求获取access_token(getAccessToken), 保存下来(本地文件)(saveAccessToken), 直接使用
 */
// 引入request-promise-native模块
const rp = require('request-promise-native')
// 引入fs模块
const {writeFile, readFile} = require('fs')
// 引入config模块
const {appID, appsecret} = require('../config')


// 定义类, 获取access_token
class Wechat {
  constructor() {

  }

  /**
   * 用来获取access_token
   */
  getAccessToken() {
    // 定义请求地址
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appsecret}`
    // 发送请求
    /*
      request
      request-promise-native 返回值: promise对象
     */
    return new Promise((resolve, reject) => {
      rp({method: 'GET', url, json: true})
          .then(res => {
            // console.log(res)
            /*
            { access_token: '20_4ylhc5RVE7TembEv5oms1cE4U-CLttOc09fRqX_ydJ9KnI4gsK-LvIQUrao80Zhkk-cB-JHI2EX0AmkG-yz6IGyKqLA3EA1rFOD_2MHcL62pZaINhGEaymm1a9oXIXaAFAITI',
              expires_in: 7200 }
             */

            // 设置access_token的过期时间
            const {expires_in} = res
            res.expires_in = Date.now() + (expires_in - 300) * 1000
            // 将promise对象状态修改为成功的状态
            resolve(res)
          })
          .catch(err => {
                // 将promise对象状态修改为失败的状态
                reject('getAccessToken方法出了问题: ' + err)
              }
          )
    })
  }

  /**
   * 用来保存access_token
   * @param accessToken 要保存的凭据
   */
  saveAccessToken(accessToken) {
    // 将对象转成为json字符串
    accessToken = JSON.stringify(accessToken)
    // 将access_token保存一个文件
    return new Promise((resolve, reject) => {
      writeFile('./accessToken.txt', accessToken, err => {
        if (!err) {
          resolve()
        } else {
          reject('saveAccessToken方法出了问题: ' + err)
        }
      })
    })

  }

  /**
   * 用来读取 access_token
   * @returns {Promise<any>}
   */
  readAccessToken() {
    // 读取本地文件中的access_token
    return new Promise((resolve, reject) => {
      readFile('./accessToken.txt', (err, data) => {
        if (!err) {
          // 将json字符串转换为js对象
          data = JSON.parse(data)
          resolve(data)
        } else {
          reject('readAccessToken方法出了问题: ' + err)
        }
      })
    })
  }

  /**
   * 用来检查access_token是否有效
   * @param data
   */
  isValidAccessToken(data) {
    // 检查传入的参数是否有效
    if (!data && !data.access_token && !data.expires_in) {
      // 代表access_token无效的
      return false
    }

    // 检测access_token是否在有效期内
    /*
    if (data.expires_in > Date.now) {
      // 没有过期
      return true
    } else {
      // 过期了
      return false
    }
    */
    return data.expires_in > Date.now()
  }

  /**
   * 用来获取没有过期的access_token
   * @return {Promise<any>} access_token
   */
  fetchAccessToken() {
    //优化
    if (this.access_token && this.expires_in && this.isValidAccessToken(this)) {
      //说明之前保存过access_token，并且它是有效的, 直接使用
      return Promise.resolve({
        access_token: this.access_token,
        expires_in: this.expires_in
      })
    }
    //是fetchAccessToken函数的返回值
    return this.readAccessToken()
               .then(async res => {
                 //本地有文件
                 //判断它是否过期
                 if (this.isValidAccessToken(res)) {
                   //有效的
                   return Promise.resolve(res)
                   // resolve(res);
                 } else {
                   //过期了
                   //发送请求获取access_token(getAccessToken)，
                   const res = await this.getAccessToken()
                   //保存下来（本地文件）(saveAccessToken)
                   await this.saveAccessToken(res)
                   //将请求回来的access_token返回出去
                   return Promise.resolve(res)
                   // resolve(res);
                 }
               })
               .catch(async err => {
                 //本地没有文件
                 //发送请求获取access_token(getAccessToken)，
                 const res = await this.getAccessToken()
                 //保存下来（本地文件）(saveAccessToken)
                 await this.saveAccessToken(res)
                 //将请求回来的access_token返回出去
                 return Promise.resolve(res)
                 // resolve(res);
               })
               .then(res => {
                 //将access_token挂载到this上
                 this.access_token = res.access_token
                 this.expires_in = res.expires_in
                 //返回res包装了一层promise对象（此对象为成功的状态）
                 //是this.readAccessToken()最终的返回值
                 return Promise.resolve(res)
               })
  }
}