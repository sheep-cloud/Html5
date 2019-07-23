/*
* 工具函数包
* */

module.exports = {
  getUserDataAsync(req) {
    return new Promise((resolve, reject) => {
      let xmlData = ''
      req
          .on('data', data => {
            // 当流式数据传递过来时, 会触发当前事件, 会将数据注入到回调函数中
            // 读取的数据是buffer, 需要将其转换成字符串
            xmlData += data.toString()
            console.log(xmlData)
          })
          .on('close', () => {
            // 当数据接收完毕时, 会触发当前
            resolve(xmlData)
          })
    })

  }
}