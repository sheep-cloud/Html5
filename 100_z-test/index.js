const DateUtil = require('./DateUtil')

console.log(DateUtil.dateFormat(new Date()))

console.log(DateUtil.dateFormat(DateUtil.offsetDay(new Date(), 1)))
