/*
    用来定义student的模型
 */
var mongoose = require('mongoose')

// 创建Schema（模式）对象
var Schema = mongoose.Schema
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {type: String, default: '女'},
    address: String
})

// 定义模型
var StuModel = mongoose.model('students', stuSchema)

module.exports = StuModel
