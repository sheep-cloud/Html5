# Nosql - MongoDB

## 1. MongoDB简介

- MongoDB是为快速开发互联网Web应用而设计的数据库系统
- MongoDB的设计目标是极简, 灵活, 作为Web应用栈的一部分
- MongoDB的数据模型是面向文档的, 所谓文档是一种类似于JSON的结构, 简单理解MongoDB这个数据库中存的是各种各样的JSON（BSON）

## 2. 安装 MongoDB

### 2.1. 安装MongoDB

- 下载地址 https://www.mongodb.org/dl/win32/ 偶数版本为稳定版，奇数版本为开发版

- 配置环境变量

  - `path: D:\Sybase\MongoDB\Server\3.2\bin`

- 创建配置文件

  - `D:\Sybase\MongoDB`目录下创建 `data`目录，在`data`目录下创建`db`、`log`目录
  - 在`D:\Sybase\MongoDB\Server\3.2`目录下添加一个配置文件

  ```ini
  systemLog:
      destination: file
      path: D:\Sybase\MongoDB\data\log\mongod.log
  storage:
      dbPath: D:\Sybase\MongoDB\data\db
  ```

- 启动MongoDB

  ```ini
  mongod --dbpath D:\Sybase\MongoDB\data\db --port 27017
  ```

- 连接MongoDB

  ```ini
  输入 mongo 连接mongodb ，出现 > 
  ```

- 将MongoDB设置为系统服务，可以自动在后台启动

  - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#manually-create-a-windows-service-for-mongodb-community-edition

    ```ini
    sc.exe create MongoDB binPath= "\"D:\Sybase\MongoDB\Server\3.2\bin\mongod.exe\" --service --config=\"D:\Sybase\MongoDB\Server\3.2\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"
    ```

  - 服务命令

    ```ini
    启动: net start MongoDB
    停止: net stop MongoDB
    删除服务: sc.exe delete MongoDB
    ```

### 2.2. MongoDB 导出命令

- 进入 `D:\Sybase\MongoDB\Server\3.2\bin` 目录

```ini
mongoexport -h 127.0.0.1 -d rams -c bu_device_data -o demo.json
```

## 3. MongoDB 操作

### 3.1. 数据库的使用

```ini
# 查看所有数据库列表
show dbs;
# 查看当前连接在哪个数据库下面
db;
# 切换数据库
use 数据库名;
# 查看数据库下有哪些collection
show collections;
```

### 3.2 CRUD操作

#### 3.2.1. 插入文档

#### 3.2.2. 删除文档

```sql
/*
    db.collection.remove()
        - 删除一个或多个，可以第二个参数传递一个true，则只会删除一个
        - 如果传递一个空对象作为参数，则会删除所有的
    db.collection.deleteOne()
    db.collection.deleteMany()
    db.collection.drop() 删除集合
    db.dropDatabase() 删除数据库
    
        - 一般数据库中的数据都不会删除，所以删除的方法很少调用
            一般会在数据中添加一个字段，来表示数据是否被删除
*/
db.stus.insert(
    [
        {name: "zbj", is_delete: 0},
        {name: "shs", is_delete: 0},
        {name: "ts", is_delete: 0}
    ]
);


db.stus.deleteOne(
    {name: "shs"}
);

-- 逻辑删除
db.stus.updateOne(
    {name: "ts"}, {$set: {is_delete: 1}}
);
    
db.stus.find(
    {is_delete: 0}
);
```

#### 3.2.3. 修改文档

```mysql
/*
    修改
    db.collection.update(查询条件, 新对象)
        - update()默认情况下会使用新对象来替换旧的对象
        - 如果需要修改指定的属性，而不是替换需要使用"修改操作符"来完成修改
            $set 可以用来修改文档中的指定属性
            $unset 可以用来删除文档的指定属性
        - update()默认只会修改一个
            
        db.collection.updateMany()
        - 同时修改多个符合条件的文档
   
        db.collection.updateOne()
        - 修改一个符合条件的文档    
        
        db.collection.replaceOne()
        - 替换一个文档
*/
db.stus.find({});

-- 替换
db.stus.update(
    {name: "ts"}, {age: 28}
);

db.stus.update(
    {"_id" : ObjectId("5b7da67b2fd6e77798bab201")},
    {$set: { gender:"男", address:"流沙河" }}    
);

db.stus.update(
    {"_id" : ObjectId("5b7da67b2fd6e77798bab201")},
    {$unset: { address:1 }}    
    );

db.stus.updateMany(
    {"name": "猪八戒"},
    {$set: {address: "猪老庄"}}    
);
    
db.stus.update(
    {name: "猪八戒"},
    {$set: {address: "呵呵呵"}},
    {multi: true}    
);

db.stus.find();
```

#### 3.2.4. 查询文档

```sql
/*
    查询
        db.collection.find()
        - find()用来查询集合中所有符合条件的文档
        - find()可以接收一个对象作为条件参数
            {} 表示查询集合中所有的文档
            {属性:值} 查询属性是指定值的文档
        - find()返回的是一个数组
            
        db.collection.findOne()
        - 用来查询集合中符合条件的第一个文档  
        - findOne()返回的是一个文档对象 
       
       db.collection.find({}).count() 
        - 查询所有结果的数量
*/
db.stus.find(
    {_id: "hello"}
);
db.stus.find(
    {age: 16, name: "白骨精"}
);
db.stus.find(
    {age: 28}
);
db.stus.findOne(
    {age: 28}
);

db.stus.find({}).count();
```
### 3.3. 文档之间的关系

```sql
/**
    文档之间的关系
        一对一（one to one）
            - 在MongoDB可以通过内嵌文档的形式来体现出一对一的关系
            
        一对多（one to many）/多对伊（many to one）
            - 也可以通过内嵌文档来映射一对多的关系
            
        多对多（many to many）
            - 
*/
    
-- 一对多  用户（users） 和 订单（orders）
db.users.insert(
    [{username: "swk"}, {username: "zbj"}]
);
db.users.find();

db.orders.insert(
    {list: ["苹果", "香蕉", "大鸭梨"], user_id: ObjectId("5b7da1be3d1dbb367d9ee990")}
);
db.orders.insert(
    {list: ["猪肉", "牛肉", "羊肉"], user_id: ObjectId("5b7da1be3d1dbb367d9ee991")}
);
db.orders.find();

-- 查询zbj的订单
var user_id = db.users.findOne(
    {username: "zbj"}
)._id;
db.orders.find(
    {user_id: user_id}
);

-- 多对多  老师（teachers） 和 学生（students）
db.teachers.insert(
    [{name: "洪七公"}, {name: "欧阳锋"}, {name: "黄药师"}]
);
db.teachers.find();

db.students.insert(
    [{name: "郭靖", tech_ids: [ObjectId("5b7da34b3d1dbb367d9ee995"), ObjectId("5b7da34b3d1dbb367d9ee996")]}]
);
db.students.find();
```
### 3.4. CRUD案例

```sql
-- 1. 进入my_test数据库
use my_test;

-- 2. 向数据库的users集合中插入一个文档
db.users.insert(
    {username: "sunwukong"}
);

-- 3. 查询my_test数据库中的集合
show collections;

-- 4. 查询users集合中的文档
db.users.find();

-- 5. 向数据库的users集合中插入一个文档
db.users.insert(
    {username: "zhubajie"}
);

-- 6. 查询数据库users集合中的文档数量
db.users.find().count();

-- 7. 查询数据库users集合中username为wunsukong的文档
db.users.find(
    {username: "sunwukong"}
);

-- 8. 向数据库users集合中的username为sunwukong的文档，添加一个address属性，属性值为huoguoshan
db.users.update(
    {username: "sunwukong"},
    {$set: {address: "huoguoshan"}}
);

-- 9. 使用{username: "tangseng"} 替换 username为zhubajie的文档
db.users.replaceOne(
    {username: "zhubajie"},
    {username: "tangseng"}
);

-- 10. 删除username为sunwukong的文档的address属性
db.users.update(
    {username: "sunwukong"},
    {$unset: {address: 1}}
);

-- 11. 向username为sunwukong的文档中，添加一个hobby:{cities: ["beijing", "shanghai", "shenzhen"], movies: ["sanguo", "hero"]}
-- MongoDB的文档的属性值也可以是一个文档，当一个文档的属性值是一个文档时，这个文档叫做内嵌文档
db.users.update(
    {username: "sunwukong"},
    {$set: {
            hobby: 
                {
                    cities: ["beijing", "shanghai", "shenzhen"],
                    movies: ["sanguo", "hero"]
                }
           }
    }
);

-- 12. 向username为tangseng的文档中，添加一个hobby:{movies: ["A Chinese Odyssey", "King of comedy"]}
db.users.update(
    {username: "tangseng"},
    {$set: {
            hobby:
                {movies: ["A Chinese Odyssey", "King of comedy"]}
           }
    }
);

-- 13. 查询喜欢电影hero的文档
-- MongoDB支持直接通过内嵌文档的属性进行查询，如果要查询内嵌文档则可以通过.的形式来匹配
-- 如果要通过内嵌文档来对文档进行查询，此时属性名必须使用引号
db.users.find(
    {"hobby.movies": "hero"}
);

-- 14. 向tangseng中添加一个新的电影Interstellar
-- push 用于向数组中添加一个新的元素
-- addToSet 用于向数组中添加一个新的元素，如果数组中已经存在了该元素则不会添加
db.users.update(
    {username: "tangseng"},
    {$push: {"hobby.movies": "Interstellar"}}
);

-- 15. 删除喜欢beijing的用户
db.users.remove(
    {"hobby.cities": "beijing"}
);

-- 16. 删除users集合
db.users.remove({});
-- 删除suers与数据库
db.users.drop();

show dbs;

-- 17. 向numbers中插入20000条数据
-- 插入20000次
for(var i = 0; i < 20; i++) {
    db.numbers.insert(
        {number: i}
    );
}
show collections;
db.numbers.find();
db.numbers.remove({});

-- 一次插入20000条
var arr = [];
for(var i = 0; i < 20000; i++) {
    arr.push({number: i})
}
db.numbers.insert(
    arr
);

-- 18. 查询numbers中number为500的文档
db.numbers.find(
    {number: 500}
);

-- 19. 查询numbers中number大于50000的文档
db.numbers.find(
    {number: {$gt: 5000}}
);

-- 20. 查询numbers中number小于30的文档
db.numbers.find(
    {number: {$lt: 30}}
);

-- 21. 查询numbers中number大于40小于50的文档
db.numbers.find(
    {number: {$gt: 40, $lt: 50}}
);

-- 22. 查询numbers中number大于19996的文档
db.numbers.find(
    {number: {$gt: 19996}}
);

-- 23. 查询numbers中前10条数据
-- limit() 设置显示数据的上限
db.numbers.find().limit(10);

-- 24. 查询numbers中的第11条到20条数据
-- skip() 跳过指定数量的数据
db.numbers.find().skip(10).limit(10);
-- 25. 查询numbers中的第21条到30条数据
-- MongoDB会自动调整skip和limit的位置
db.numbers.find().limit(10).skip(20);

/*
  分页 每页显示10条
        1-10    0
        11-20   10
        21-30   20
        ...
        
        skip((页码-1) * 每页显示的条数).limit(每页显示的条数);
        
  skip(跳过的条数)
*/

-- 26. 将dept和emp集合导入到数据库中
db.dept.find();
db.emp.find();

-- 27. 查询工资小于2000的员工
db.emp.find(
    {sal: {$lt: 2000}}
);

-- 28. 查询工资在1000-2000之间的员工
db.emp.find(
    {sal: {$gt: 1000, $lt: 2000}}
);

-- 29. 查询工资小于1000或大于2500的员工
db.emp.find(
    {$or: [
            {sal: {$lt: 1000}},
            {sal: {$gt: 2500}}
          ]
    }
);

-- 30. 查询财务部(deptno)的所有员工
var depno = db.dept.find({dname: "财务部"})[0].deptno;
db.emp.find(
    {depno: depno}
);

-- 31. 查询销售部(deptno)的所有员工
var depno = db.dept.findOne({dname: "销售部"}).deptno;
db.emp.find(
    {depno: depno}
);

-- 32. 查询所有mgr为7698的所有员工
db.emp.find(
    {mgr: 7698}
);

-- 33. 为所有薪资不大于1000的员工增加工资400元
-- $inc只能用于Number类型的值
db.emp.updateMany(
    {sal: {$lte: 1000}},
    {$inc: {sal: 400}}
);
db.emp.find();

-- 34. sort() 排序，1表示升序，-1表示降序
-- limit skip sort 可以以任意的顺序进行调用
db.emp.find().sort(
    {sal: 1, empno: -1}
);

-- 35. 投影，可以在find()第二个参数设置指定字段
db.emp.find(
    {}, {_id: 1, empno: 1, ename: 1, sal: 1}
);
```

## 4. Mongoose 模块

### 4.1. Mongoose 简介

- Mongoose 简介
  - Mongoose是一个通过Node来操作MongoDB的模块
  - Mongoose是一个对象文档模型（ODM）库, 它对Node原生的MongoDB模块进行了进一步的优化封装, 并提供了很多功能
  - 在大多数情况下, 它被用来把结构化的模式应用到一个MongoDB集合, 并提供了验证和类型转换等好处
- Mongoose 好处
  - 可以为文档创建一个模式结构（Schema
    ）
  - 可以对模型中的对象/文档进行验证
  - 数据可以通过类型转换转换为对象模型
  - 可以使用中间件来于应用业务逻辑挂钩
  - 比Node原生的MongoDB驱动更容易
- Mongoose 对象
  - Schema（模式对象）
    - Schema对象定义约束了数据库中的文档结构
  - Model
    - Model对象作为集合中的所有文档的表示, 相当于MongoDB数据库中的集合collection
  - Document
    - Document表示集合中的具体文档, 相当于集合中的一个具体的文档

### 4.2. Mongoose 连接数据库

```js
/*
    1. 下载安装Mongoose
        npm i mongoose --save

    2. 在项目中引用mongoose
        var mongoose = require('mongoose')

    3. 连接MongoDB数据库
        mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名', {useNewUrlParser: true})
            - 如果端口号是默认端口号（27017）, 则可以省略不写

    4. 断开数据库连接（一般不需要调用）
        - MongoDB数据库, 一般情况下, 只需要连接一次, 连接一次以后, 除非项目停止, 服务器关闭, 否则连接一般不会断开
        mongoose.disconnect()

    - 监听MongoDB数据库的连接状态
        - 在mongoose对象中, 有一个属性叫做connection, 该对象表示的就是数据库连接
            通过监视该对象的状态, 可以来监听数据库的连接与断开

        - 数据库连接成功的事件
        mongoose.connection.once('open', function () {})

        - 数据库断开的事件
        mongoose.connection.once('close', function () {})
 */

// 在项目中引用mongoose
var mongoose = require('mongoose')

// 连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', {useNewUrlParser: true})

// 监听MongoDB数据库的连接状态
mongoose.connection.once('open', function () {
    console.log('数据库连接成功')
})

mongoose.connection.once('close', function () {
    console.log('数据库连接已经断开')
})

// 断开数据库连接
mongoose.disconnect()
```

### 4.3. Mongoose 模块化

#### 4.3.1. 连接数据库的模块

- `util/conn_mongo.js`

```js
/*
    定义一个模块，用来连接MongoDB数据库
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', {useNewUrlParser: true})
mongoose.connection.once('open', function () {
    console.log('数据库连接成功: ' + new Date().toLocaleString())
})
```

#### 4.3.2. Model对象模块

- `models/student.js`

```js
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
```

#### 4.3.3. 操作数据库

- `05.index.js`

```js
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

/* 运行输出
数据库连接成功: 2019-1-16 11:59:28
[ { name: '唐僧', age: 16 }, { name: '沙和尚', age: 38 } ]
true
*/
```

