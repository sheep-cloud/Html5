const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', {useNewUrlParser: true})
mongoose.connection.once('open', () => console.log('数据库连接成功'))

// 将mongoose.Schema 赋值给一个变量
let Schema = mongoose.Schema

// 创建Schema（模式）对象
let stuSchema = new Schema(
    {
        name: String,
        age: Number,
        gender: {
            type: String,
            default: '女'
        },
        address: String
    }
)

// 通过Schema来创建Model
// Model代表的是数据库中的集合，通过Model才能对数据库进行操作
// moogose.model(modelName, schema)
// modelName 映射的集合名称，mongoose会自动将集合名称变成复数
let StuModel = mongoose.model('students', stuSchema)

// 向数据库中插入一个文档
// StuModel.create(doc, function(err){})
let stu = {name: '孙悟空', age: 18, gender: '男', address: '花果山'}
StuModel.create(stu, function (err) {
    if (!err) {
        console.log('插入成功')
    }
})