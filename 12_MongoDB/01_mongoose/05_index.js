require('./util/conn_mongo')
var Student = require('./models/student')

Student.find(
    {gender: '男'},
    // 投影，两种方式
    'name age -_id',
    {skip: 2, limit: 2},
    function (err, docs) {
        if (!err) {
            console.log(docs)
            console.log(docs[0] instanceof Student)
        }
    }
)
