const axios = require('axios')

/**
 * ajax请求函数, 返回promise对象
 *
 * @param url   请求地址
 * @param data  请求参数
 * @param type  请求方法GET/POST
 * @return promise对象(异步返回的数据是: response.data)
 */
function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => dataStr += key + '=' + data[key] + '&')
      if (dataStr) {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

module.exports = ajax