/*
* ajax请求函数模块
* */
import axios from 'axios'

/**
 * ajax请求函数，返回promise对象
 * @param url 请求地址
 * @param data  请求参数
 * @param type  请求方法GET/POST
 * @return promise对象（异步返回的数据是：response.data）
 */
function ajax(url = '', data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => dataStr += `${key}=${data[key]}&`)
      if (dataStr) {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url += `?${dataStr}`
      }
      // 发送GET请求
      promise = axios.get(url)
    } else {
      // 发送POST请求
      promise = axios.post(url, data)
    }

    // 包装成功，失败，返回的是response.data
    promise.then(response => {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(error => {
      // 失败了调用reject()
      reject(error)
    })
  })
}

export default ajax
