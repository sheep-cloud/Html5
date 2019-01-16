var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', {useNewUrlParser: true})
mongoose.connection.once('open', function () {
    console.log('数据库连接成功: ' + new Date().toLocaleString())
})

// 将mongoose.Schema 赋值给一个变量
var Schema = mongoose.Schema

// 创建Schema（模式）对象
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {type: String, default: '女'},
    address: String
})

var StuModel = mongoose.model('students', stuSchema)

/*
    - 有了Model，就可以对数据库进行增删改查的操作
    - Model.create()    新增
    - Model.find()      查询
 */
/*
StuModel.create([
    {name: '白龙马', age: 18, gender: '男', address: '龙宫'}
], function (err) {
    if (!err) {
        console.log('插入成功')
        console.log(arguments)
    }
})*/

StuModel.find(
    {gender: '男'},
    // 投影，两种方式
    'name age -_id',
    {skip: 2, limit: 2},
    function (err, docs) {
        if (!err) {
            console.log(docs)
            console.log(docs[0] instanceof StuModel)
        }
    }
)
