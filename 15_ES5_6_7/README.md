# ES5_6_7

## 1. ES简介

- 全称: ESMAScript
- JS语言的规范
- 我们用的JS是它的实现
- JS的组成
- 扩展 --> 浏览器端
  - BOM
  - DOM
- 扩展 --> 服务器端
  - Node.js

## 2. ES5

### 2.1. 严格模式

- 运行模式: 正常(混杂)模式与严格模式
- 应用严格模式: 在全局或函数的第一条语句定义为: "use strict"；
- 作用: 
  - 消除javascript语法的一些不合理，不严谨之处，减少一些怪异行为
  - 消除代码运行的一些不安全之处，保证代码运行的安全
  - 语法和行为改变
    - 声明定义变量必须用var
    - 禁止自定义的函数中的this关键字指向全局对象
    - 创建eval作用域，更安全

### 2.2. JSON对象

- 作用: 用于在json对象/数据与js对象/数组相互转换
- JSON.stringify(obj/arr) --> js对象(数组)转换为json对象(数组)
- JSON.parse(json) --> JSON对象(数组)转换为js对象(数组)

### 2.3. Object扩展

- Object.create(prototype[, descriptors]): 创建一个新的对象
  - 以指定对象为原型创建新的对象
  - 指定新的属性，并对属性进行描述
    - value: 指定值
    - writable: 标识当前属性值是否是刻修改的，默认为false
    - get方法: 用来得到当前属性值的回调函数
    - set方法: 用来监视当前属性值变化的回调函数
- Object.defineProperties(object, descriptors): 为指定对象定义扩展多个属性

### 2.4. Array扩展

```html
<!--
1. Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
2. Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
3. Array.prototype.forEach(function(item, index){}) : 遍历数组
4. Array.prototype.map(function(item, index){}) : 遍历数组返回一个新的数组，返回加工之后的值
5. Array.prototype.filter(function(item, index){}) : 遍历过滤出一个新的子数组， 返回条件为true的值
-->
```

### 2.5. Function扩展

```html
    <!--
        1. Function.prototype.bind(obj) :
          * 作用: 将函数内的this绑定为obj, 并将函数返回
        2. 面试题: 区别bind()与call()和apply()?
          * 都能指定函数中的this
          * call()/apply()是立即调用函数
          * bind()是将函数返回
    -->
```

### 2.6 Date扩展

- Date.now(): 得到当前时间值(毫秒值)

## 3. ES6

### 3.1. 常用

#### 3.1.1. let 和 const 命令

- let
  - 在块作用域有效
  - 不能重复声明
  - 不会预处理，不存在变量提升
- const
  - 值不可变，其他同let

#### 3.1.2. 变量的解构赋值

```html
    <!--
        1. 理解
            从对象或数组中提取数据，并赋值给变量(多个)
        2. 对象的解构赋值
            let{n, a} = {n: 'tom', a: 12}
        3. 数组的解构赋值
            let [a, b] = [1, 'tom']
        4. 用途
            给多个形参赋值
    -->
    <script>
        // 对象的解构赋值
        let obj1 = {username1: 'jack', age1: 39}
        let {username1, age1} = obj1
        console.log(username1, age1)

        // 数组的解构赋值
        let arr = [1, 3, 5, 'abc', true]
        // let[索引]
        let [, xxx, b, c] = arr
        console.log(xxx, b, c)

        // 给多个形参赋值
        function foo({username, age}) { // {username, age} = obj
            console.log(username, age)
        }

        foo(obj)
    </script>
```

#### 3.1.3. 字符串

- 模版字符串

```html
    <!--
        1. 模版字符串: 简化字符串的拼接
            模版字符串必须用 `` 包含
            变化的部分使用${xxx}定义
    -->
    <script>
        // 模版字符串
        str = `我的名字叫: ${obj.username}, 我的年龄是: ${obj.age}`
        console.log(str)
    </script>
```

- 字符串的扩展

```html
    <!--
        includes(): 返回布尔值，表示是否找到了参数字符串。
        startsWith(): 返回布尔值，表示参数字符串是否在原字符串的头部。
        endsWith(): 返回布尔值，表示参数字符串是否在原字符串的尾部。
        repeat(): 返回一个新字符串，表示将原字符串重复n次。
    -->
    <script>
        let str = 'colg'
        console.log(str.includes('c'))
        console.log(str.startsWith('c'))
        console.log(str.endsWith('g'))
        console.log(str.repeat(2))
    </script>
```

#### 3.1.4. 简化的对象写法

```html
    <!--
        简化的对象写法
            省略同名的属性值
            省略方法的function
            例如: 
                let x = 1
                let point = {
                    x,
                    setX(x) {
                        this.x = x
                    }
                }
    -->
```

#### 3.1.5. 数组

```html
    <!--
        Array.from(): 将伪数组对象或可遍历对象转换为真数组
        Array.of(): 将一组值，转换为数组。
        find(): 找出第一个符合条件的数组成员。如果没有符合条件的成员，则返回undefined。
        findIndex(): 找出第一个符合条件的数组成员的下标。如果所有成员都不符合条件，则返回-1。
    -->
    <script>
        console.log(Array.from('hello'))
        console.log(Array.of('a', 'b', 'c'))
        console.log(['a', 'b', 'c'].find(function (n) {
            return n === 'a'
        }))
        console.log(['a', 'b', 'c'].findIndex(function (n) {
            return n === 'a'
        }))
    </script>
```

#### 3.1.6. 箭头函数

```html
    <!--
        作用: 定义匿名函数
        基本用法: 
            没有参数:            () => console.log('str')
            一个参数:            i => i + 2
            大于一个参数:        (i, j) => i + j
            函数体不用大括号:    默认返回结果
            函数体如果有多个语句，需要用{}包围，若有需要返回的内容，需要手动返回
        使用场景: 多用来定义回调函数

        箭头函数的特点: 
            1、简洁
            2、箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this
            3、扩展理解: 箭头函数的this看外层的是否有函数
                如果有，外层函数的this就是内部箭头函数的this
                如果没有，则this是window
    -->
```

#### 3.1.7. 扩展运算符

```html
    <!--
        用途: 
            1. rest(可变)参数
                用来取代arguments，但比arguments灵活，只能是最后部分形参参数

            2. 扩展运算符
                let arr1 = [1, 3, 5]
                let arr2 = [2, ...arr, 6]
                arr2.push(...arr)
    -->
```

#### 3.1.8. 形参默认值

```html
    <!--
        形参的默认值 ---- 当不传入参数的时候默认使用形参里的默认值
    -->
    <script>
        function Point(x = 0, y = 0) {
            this.x = x
            this.y = y
        }

        let point1 = new Point()
        console.log(point1) // Point {x: 0, y: 0}
    </script>
```



### 3.2. 其他

## 4. ES7