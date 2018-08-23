/*
    用来定义student的模型
 */
const mongoose = require('mongoose')

// 创建Schema（模式）对象
let Schema = mongoose.Schema
let stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {type: String, default: '女'},
    address: String
})

// 定义模型
let StuModel = mongoose.model('students', stuSchema)

module.exports = StuModel
