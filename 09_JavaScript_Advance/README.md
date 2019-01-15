# JavaScript 高级部分

## 1. 基础总结深入

### 1.1. 数据类型的分类和判断

- 基本(值)类型

  ```ini
  Number		任意数值		 typeof
  String		任意字符串	     typeof
  Boolean		true/false		typeof
  undefined	undefined		typeof/===
  null		null			===
  ```

- 对象(引用)类型

  ```ini
  Object		任意对象									typeof/instanceof
  Array		一种特别的对象(数值下标, 内部数据是有序的)		  instanceof
  Function	一种特别的对象(可以执行)					    typeof
  ```

### 1.2. 数据, 变量, 内存的理解

- 什么是数据?
  - 在内存中可读的, 可传递的保存了特定信息的"东西"
  - 一切皆数据, 函数也是数据
  - 在内存中的所有操作的目标: 数据
- 什么是变量?
  - 在程序运行过程中它的值是允许改变的量
  - 一个变量对应一块小内存, 它的值保存在此内存中
- 什么是内存?
  - 内存条通电后产生的存储空间(临时的)
  - 内存的产生和死亡: : 内存条(电路板) -> 通电 -> 产生内存空间 -> 存储数据 -> 处理数据 -> 断电 -> 内存空间和数据都消失
  - 一块内存包含2个方面的数据
    - 内部存储的数据
    - 地址值数据
  - 内存空间的分类
    - 栈: 全部变量/局部变量
    - 堆: 对象
- 内存, 数据, 变量三者之间的关系
  - 内存是容器, 用来存储不同数据
  - 变量是内存中的标识, 通过变量我们可以操作(读/写)内存中的数据

### 1.3. 对象的理解和使用

- 什么是对象?
  - 多个数据(属性)的封装体
  - 用来保存多个数据(属性)的容器
  - 一个对象代表现实中的一个事物
- 属性组成
  - 属性名: 字符串(标识)
  - 属性值: 任意类别
- 属性分类
  - 一般: 属性值不是function, 描述对象的状态
  - 方法: 属性值是function, 描述对象的行为
- 特别的对象
  - Array: 属性名是0, 1, 2, 3之类的索引
  - Function: 可以执行
- 如何操作内部属性(方法)
  - `.属性名`: 							编码简单, 不能通用
  - `['属性名']`: 编码麻烦, 可以通用(属性名有特殊字符, 属性名可以是一个变量)

### 1.4. 函数的理解和使用

- 什么是函数?

  - 用来实现特定功能的n条语句的封装体
  - 只有函数类型的数据是可以执行的, 其它的都不可以

- 为什么要用函数?

  - 提高复用性
  - 便于阅读交流

- 函数也是对象

  - `instanceof Object === true`
  - 函数有属性: `prototype`
  - 函数有方法: `call()/apply()`
  - 可以添加新的属性/方法

- 函数的3种不同角色

  - 一般函数: 直接调用
  - 构造函数: 通过new调用
  - 对象: 通过.调用内部的属性/方法

- 函数中的this

  - 显式谁指定: `obj.xxx()`
  - 通过`call/apply`指定谁调用: `xxx.call(obj)`
  - 不指定谁调用: `xxx()` => `window`
  - 回调函数: 看背后是通过谁来调用的: `window/其它`

- 匿名函数自调用

  - 全称: Immediately-Invoked Function Expression, 立即执行函数表达式

  ```js
  ;function(w, o) {
      // 实现代码
  }(window, obj)
  ```

- 回调函数的理解

  - 什么函数才是回调函数?
    - 你定义的
    - 你没有调
    - 但它最终执行了(在一定条件或某个时刻)
  - 常用的回调函数
    - dom事件回调函数
    - 定时器回调函数
    - ajax请求回调函数
    - 生命周期回调函数

## 2. 函数高级

### 2.1. 原型与原型链

- 所有函数都有一个特别的属性: `prototype`显式原型属性
- 所有实例对象都有一个特别的属性: `__proto__`隐式原型属性
- 显式原型与隐式原型的关系
  - 函数的`prototype`: 在定义函数时被自动赋值, 值默认为`{}`, 即原型对象
  - 实例对象的`__proto__`: 在创建实例对象时被自动添加, 并赋值为构造函数的`prototype`值
  - 原型对象即为当前实例对象的父对象
- 原型链
  - 所有的实例对象都有`__proto__`属性, 它指向的就是原型对象
  - 这样通过`__proto__`属性就形成了一个链的结构 ---> 原型链
  - 当查找对象内部的属性/方法时, js引擎自动沿着这个原型链查找
  - 当给对象属性赋值时不会使用原型链, 而只是在当前对象中进行操作

### 2.2. 执行上下文与执行上下文栈

- 变量提升与函数提升
  - 变量提升: 在变量定义语句之前, 就可以访问到这个变量`undefined`
  - 函数提升: 在函数定义语句之前, 就执行该函数
  - 先有变量提升, 再有函数提升
- 理解
  - 执行上下文: 由js引擎自动创建的对象, 包含对应作用域中的所有变量属性
  - 执行上下文栈: 用来管理产生的多个执行上下文
- 分类
  - 全局: `window`
  - 函数: 对程序员来说是透明的
- 生命周期
  - 全局: 准备执行全局代码前产生, 当页面刷新/关闭时死亡
  - 函数: 调用函数时产生, 函数执行完时死亡
- 包含哪些属性
  - 全局
    - 用var定义的全局变量 ---> `undefined`
    - 使用function声明的函数 ---> `function`
    - `this` ---> `window`
  - 函数
    - 用var定义的局部变量 ---> `undefined`
    - 使用function声明的函数 ---> `funciton`
    - `this` ---> 调用函数的对象, 如果没有指定就是`window`
    - 形参变量 ---> 对应实参值
    - `arguments` ---> 实参列表的伪数组
- 执行上下文创建和初始化的过程
  - 全局
    - 在全局代码执行前最先创建一个全局执行上下文`window`
    - 收集一些全局变量, 并初始化
    - 将这些变量设置为`window`的属性
  - 函数
    - 在调用函数时, 在执行函数体之前先创建一个函数执行上下文
    - 收集一些局部变量, 并初始化
    - 将这些变量设置为执行上下文的属性

### 2.3. 作用域与作用域链

- 理解
  - 作用域: 一块代码区域, 在编码时就确定了, 不会再变化
  - 作用域链: 多个嵌套的作用域形成的由内向外的结构, 用于查找变量
- 分类
  - 全局作用域
  - 函数作用域
  - js没有块作用域(在es6之前)
- 作用
  - 作用域: 隔离变量, 可以在不同作用域定义同名的变量不冲突
  - 作用域链: 查找变量
- 区别作用域与执行上下文
  - 作用域: 静态的, 编码时就确定了(不是在运行时), 一旦确定就不会变化了
  - 执行上下文: 动态的, 执行代码时动态创建, 当执行结束消失
  - 联系: 执行上下文环境是在对应的作用域中的

### 2.4. 闭包

- 理解

  - 当嵌套的内部函数引用了外部函数的变量时就产生了闭包
  - 通过`chrome`工具得知: 闭包本质是内部函数中的一个对象, 这个对象中包含引用的变量属性

- 作用

  - 延长局部变量的生命周期
  - 让函数外部能操作内部的局部变量

- 写一个闭包程序

  ```js
  function fn1() {
      var a = 2
      
      function fn2() {
          a++
          console.log(a)
      }
      
      return fn2
  }
  
  var f = fn1()
  f() // 3
  f() // 4
  ```

- 闭包应用

  - JS模块化: 封装一些数据以及操作数据的函数, 向外暴露一些行为
  - 循环遍历加监听
  - JS框架(jQuery)大量使用了闭包

- 缺点

  - 变量占用内存的时间可能会过长
  - 可能导致内存泄露
  - 解决
    - 及时释放: `f = null // 让内部函数对象成为垃圾对象`

### 2.5. 内存溢出与内存泄露

- 内存溢出
  - 一种程序运行出现的错误
  - 当程序运行需要的内存超过了剩余的内存时, 就出抛出内存溢出的错误
- 内存泄露
  - 占用的内存没有及时释放
  - 内存泄露积累多了就容易导致内存溢出
  - 常见的内存泄露
    - 意外的全局变量
    - 没有及时清理的计时器或回调函数
    - 闭包

## 3. 面向对象高级

### 3.1. 对象创建模式

- Object构造函数模式

  ```js
  // 套路: 先创建空Object对象, 再动态添加属性/方法
  // 适用场景: 起始时不确定对象内部数据
  // 问题: 语句太多
  var obj = {}
  obj.name = 'Jack'
  obj.setName = function(name) {
      this.name = name
  }
  ```

- 对象字面量模式

  ```js
  // 套路: 使用{}创建对象, 同时指定属性/方法
  // 适用场景: 起始时对象内部数据是确定的
  // 问题: 如果创建多个对象, 有重复代码
  var obj = {
      name: 'Jack',
      setName: function(name) {
          this.name = name
      }
  }
  ```

- 工厂模式

  ```js
  // 套路: 通过工厂函数动态创建对象并返回
  // 适用场景: 需要创建多个对象
  // 问题: 对象没有一个具体的类型, 都是Object类型
  function createPerson(name) {
      return {
          name: name,
          setName: function(name) {
              this.name = name
          }
      }
  }
  ```

- 构造函数模式

  ```js
  // 套路: 自定义构造函数, 通过new创建对象
  // 适用场景: 需要创建多个类型确定的对象
  // 问题: 每个对象都有相同的数据, 浪费内存
  function Person(name) {
      this.name = name
      this.setName = function(name) {
          this.name = name
      }
  }
  ```

- 构造函数+原型的组合模式

  ```js
  // 套路: 自定义构造函数, 属性在函数中初始化, 方法添加到原型上
  // 适用场景: 需要创建多个类型确定的对象
  function Person(name) {
      this.name = name
  }
  
  Person.prototype.setName = function(name) {
      this.name = name
  }
  ```

### 3.2. 继承模式

- 原型链继承: 得到方法

  ```js
  function Parent() {}
  
  Parent.prototype.test = function() {}
  
  function Child() {}
  
  Child.prototype = new Parent() // 子类型的原型指向父类型实例
  Child.prototype.constructor = Child // 修正原型构造属性
  
  var child = new Child()
  child.test() // 调用父类型方法
  ```

- 借用构造函数继承: 得到属性

  ```js
  function Parent(name) {
      this.name = name
  }
  
  function Child(name, age) {
      Parent.call(this, name) // 借用构造函数: this.Parent(name)
      this.age = age
  }
  
  var child = new Child('Jack', 18)
  console.log(child.name) // Jack
  ```

- 原型链+借用构造函数组合继承: 得到方法和属性

  ```js
  function Parent(name) {
      this.name = name
  }
  
  Parent.protorype.setName = function(name) {
      this.name = name
  }
  
  function Child(name, age) {
      Parent.call(this, name) // 得到属性
      this.age = age
  }
  
  Child.prototype = new Parent() // 看到父类型方法
  Child.prototype.constructor = Child // 修正构造属性
  
  Child.prototype.setAge = function(age) {
      this.age = age
  }
  
  var child = new Child('Jack', 18)
  child.setName('Tom') // 调用父类型方法
  child.setAge(200) // 调用自身方法
  ```

- `new`一个对象背后做了些什么?
  - 创建一个空对象
  - 给对象设置`___proto__`, 值为构造函数对象的`prototype`属性值, `this.__proto__ = Fn.prototype`
  - 执行构造函数体(给对象添加属性/方法)

## 4. 线程机制与事件机制

### 4.1. 线程与进程

### 4.2. 浏览器内核模块组成

- 主线程
  - js引擎模块: 负责js程序的编译与运行
  - html, css文档解析模块: 负责页面文本的解析
  - dom/css模块: 负责dom/css在内存中的相关处理
  - 布局和渲染模块: 负责页面的布局和效果的绘制(内存中的对象)
- 分线程
  - 定时器模块: 负责定时器的管理
  - dom事件模块: 负责事件的管理
  - 网络请求模块: 负责ajax请求

### 4.3. JS线程

- js是单线程的(回调函数也是在主线程)
- H5提出了实现多线程的方案: `Web Workers`
- 只能是主线程更新界面

### 4.4. 定时器问题

- 定时器并不真正完全定时
- 如果在主线程执行了一个长时间的操作, 可能导致延时才处理

### 4.5. 事件处理机制

- 代码分类
  - 初始化执行代码: 包含绑定dom事件监听, 设置定时器, 发送ajax请求的代码
  - 回调执行代码: 处理回调逻辑
- js引擎执行代码的基本流程
  - 初始化代码 => 回调代码
- 模型的2个重要组成部分
  - 时间管理模块
  - 回调队列
- 模型的运转流程
  - 执行初始化代码, 将事件回调函数交给对应模块管理
  - 当事件发生时, 管理模块会将回调函数及其数据添加到回调队列中
  - 只有当初始化代码执行完后(可能要一定时间), 才会遍历读取回调队列中的回调函数执行

### 4.6. H5 Web Workers

- 可以让js在分线程执行

- `worker`

  - 主线程

    ```js
    var worker = new Worker('worker.js')
    // 绑定接收消息的监听, 用来接收另一个线程发送过来的数据(主线程接收分线程发送的数据)
    worker.onmessage = function(event) {
        console.log(event.data)
    }
    
    var data = xxx
    worker.postMessage(data) // 向另一个线程发送数据(主线程向分线程发送数据)
    ```

  - `worker.js`分线程

    ```js
    var onmessage = function(event) {
        var result = event.data // 用来接收另一个线程发送的数据(分线程接收主线程发送的数据)
        var data = yyy
        postMessage(data) // 向另一个线程发送数据(分线程向主线程发送数据)
        
        // 分线程中的全局对象不再是window, 所以在分线程中不可能更新界面
    }
    ```

- 问题

  - `worker`内代码不能操作DOM(更新UI), 因为`this`不是`window`
  - 不是每个浏览器都支持这个新特性
  - 不能跨域加载js