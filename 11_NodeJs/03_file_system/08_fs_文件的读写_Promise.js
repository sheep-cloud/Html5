const readFilePromise = require('fs-readfile-promise')
const writeFilePromise = require('fs-writefile-promise')

readFilePromise('weChat.jpg').then(function (data) {
  console.log(arguments)
  writeFilePromise('./file/头像.jpg', data).then(function () {
    console.log(arguments)
    console.log('文件写入成功')
  })
})