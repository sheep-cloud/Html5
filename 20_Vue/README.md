# Vue

## 1. Vue核心

### 1.1. Vue的基本认识

#### 1.1.1. 介绍描述

- 渐进式JavaScript框架
- 作者 : 尤雨溪
- 作用 : 动态构建用户界面

####  1.1.1. Vue的特点

- 遵循MVVM模式
- 编码简洁, 体积小, 运行效率高, 适合移动/pc端开发
- 它本身只关注UI, 可以轻松引入vue插件或第三方库开发项目

#### 1.1.3.与其他前端JS框架的关联

- 借鉴angular的**模版**和**数据绑定**技术
- 借鉴react的**组件化**和**虚拟DOM**技术

#### 1.1.4. Vue扩展插件

- vue-cli : vue脚手架
- vue-resource(axios) : ajax请求
- vue-router : 路由
- vuex : 状态管理
- vue-lazyload : 图片懒加载
- vue-scroller : 页面滑动相关
- mint-ui : 基于vue的UI组件库（移动端）
- element-ui : 基于vue的UI组件库（pc端）

### 1.2. Vue的基本使用

#### 1.2.1. 编码

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_HelloWorld</title>
</head>
<body>
    <!--
        1. 引入vue.js
        2. 创建vue对象
            el: 指定根element（选择器）
            data：初始化数据（页面可以访问）
        3. 双向数据绑定：v-model
        4. 显示数据：{{xxx}}
        5. 理解vue的mvvm实现
    -->
    <!--view 视图，模版页面-->
    <div id="app">
        <label>
            <input type="text" v-model="username">
        </label>
        <p>Hello {{username}}</p>
        <p v-text="'Hello ' + username"></p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        // viewModel 创建vue实例
        // 配置对象
        const vm = new Vue({
            // element: 选择器
            el: '#app',
            // model 模型，数据对象（data）
            data: {
                username: 'Jack ' + new Date().toLocaleTimeString()
            }
        })
        vm.name = 'Rose'
        console.log(vm.name)
    </script>

    <!--
        MVVM:
            model:      模型, 数据对象（data）
            view:       视图, 模版页面
            viewModel:  视图模型, Vue的实例
    -->
</body>
</html>
```

#### 1.2.2. 使用vue开发者工具调试

- https://github.com/vuejs/vue-devtools#vue-devtools

#### 1.2.3. 理解vue的MVVM

![](http://ww1.sinaimg.cn/large/005PjuVtgy1frsr3aaeydj30f1076t99.jpg)

### 1.3. 模版语法

```vue
<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<title>01.模版语法</title>
</head>
<body>
    <!--
        1. 模版的理解：
            动态的html页面
            包含了一些JS语法代码
                双大括号表达式
                指令（以v-开头的自定义标签属性）
        2. 双大括号表达式
            语法：{{exp}}
            功能：向页面输出数据，可以调用对象的方法
        3. 指令一：强制数据绑定
            功能：指定变化的属性值
            完整写法：v-bind:xxx='yyy'   yyy会作为表达式解析执行
            简洁写法：:xxx='yyy'
        4. 指令二：绑定事件监听
            功能：绑定指定事件名的回调函数
            完整写法：v-on:click='xxx'
            简洁写法：@click='xxx'
    -->

    <div id="app">
        <h2>1. 双大括号表达式</h2>
        <p>{{msg}}</p>
        <p>{{msg.toUpperCase()}}</p>
        <p v-html="msg2"></p>
        <p v-text="msg2"></p>

        <h2>2. 指令一：强制数据绑定</h2>
        <!--<p><img v-bind:src="imgUrl" alt=""></p>-->
        <p><img :src="imgUrl" alt=""></p>

        <h2>3. 指令三：绑定事件监听</h2>
        <p>
            <button v-on:click="test">test</button>
        </p>
        <p>
            <button @click="test">test1</button>
        </p>
        <p>
            <button @click="test2(msg)">test2</button>
        </p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                msg: 'I Will Back',
                msg2: '<a href="https://cn.vuejs.org/v2/guide/syntax.html">Vue.js</a>',
                imgUrl: 'http://ww1.sinaimg.cn/large/005PjuVtgy1frsr3aaeydj30f1076t99.jpg'
            },
            methods: {
                test() {
                    alert('test!')
                },
                test2(content) {
                    alert(content)
                }
            }
        })
    </script>
</body>
</html>
```

### 1.4. 计算属性和监视

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01.计算属性和监视</title>
</head>
<body>
    <!--
        1. 计算属性
            1.1. 在computed属性对象中定义计算属性的方法
            1.2. 在页面中使用{{方法名}}来显示计算的结果
        2. 监视属性
            2.1. 通过watch配置或vm对象的$watch()来监视指定的属性
            2.2. 当属性变化时, 回调函数自动调用, 在函数内部进行计算
        3. 计算属性高级
            3.1. 在computed属性对象中定义计算属性的对象
            3.2. 通过getter/setter实现对属性数据的显示和监视
            3.3. 计算属性存在缓存, 多次读取只执行一次getter计算
    -->

    <div id="demo">
        姓：<input type="text" placeholder="First Name" v-model="firstName"><br>
        名：<input type="text" placeholder="Last Name" v-model="lastName"><br>
        姓名1（计算属性 - 单向） : <input type="text" placeholder="Full Name1" v-model="fullName1"><br>
        姓名2（监视属性 - 单向） : <input type="text" placeholder="Full Name2" v-model="fullName2"><br>
        姓名3（计算属性高级 - 双向） : <input type="text" placeholder="Full Name3" v-model="fullName3"><br>

        <p>{{fullName1}}</p>
        <p>{{fullName1}}</p>
        <p>{{fullName1}}</p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        const vm = new Vue({
            el: '#demo',
            data: {
                firstName: 'A',
                lastName: 'B',
                // fullName1: 'A B'
                fullName2: ''
            },
            /**
             * 计算属性
             */
            computed: {
                /**
                 * 计算属性的一个方法, 方法的返回值作为属性值;
                 *
                 * 回调函数 : 初始化显示/相关的data属性数据发生改变回调,
                 *
                 * @return {string}
                 */
                fullName1() {
                    // 计算属性存在缓存，多次读取只执行一次getter计算
                    console.log('fullName1()')
                    return this.firstName + ' ' + this.lastName
                },
                /**
                 * 计算属性的一个对象
                 */
                fullName3: {
                    /**
                     * 读取当前属性值
                     *
                     * 回调函数 : 当需要读取当前属性值时回调, 根据相关的数据计算并返回当前属性的值
                     *
                     * @return {string}
                     */
                    get() {
                        return this.firstName + ' ' + this.lastName
                    },
                    /**
                     * 监视当前属性值的变化
                     *
                     * 回调函数 : 当属性值发生改变时回调, 更新相关的属性数据
                     * 
                     * @param newValue fullName3的最新属性值
                     */
                    set(newValue) {
                        const fullName = newValue.split(' ')
                        this.firstName = fullName[0]
                        this.lastName = fullName[1]
                    }
                }
            },
            /**
             * 监视属性 - 配置监视
             */
            watch: {
                /**
                 * 监视firstName
                 *
                 * @param newValue 新值
                 * @param oldValue 旧值
                 */
                firstName(newValue, oldValue) {
                    this.fullName2 = newValue + ' ' + this.lastName
                }
            }
        })

        /**
         * 监视属性 - 实例方法
         *
         * @param {string | Function} expOrFn   监视lastName
         * @param {Function | Object} callback  回调函数
         * @param {Object} [options]            配置选项
         */
        vm.$watch('lastName', function (newValue) {
            this.fullName2 = this.firstName + ' ' + newValue
        }, {
            immediate: true                     // 立即以表达式的当前值触发回调
        })
    </script>
</body>
</html>
```

### 1.5. class和style绑定

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_class与style绑定</title>
<style type="text/css">
    .aClass {
        color: red;
    }
    .bClass {
        color: blue;
    }
    .cClass {
        font-size: 30px;
    }
</style>
</head>
<body>
    <!--
        1. 理解
            在应用界面中，某个（些）元素的样式是变化的
            class/sytle绑定就是专门用来实现动态样式效果的技术
        2. class绑定： :class='xxx'
            xxx 是字符串
            xxx 是对象
            xxx 是数组
        3. style绑定
            :style="{color: activeColor, fontSize: fontSize + 'px'}"
            其中activeColor/fontSize 是 data 属性
    -->
    <div id="demo">
        <h2>1. class绑定: :class='xxx'</h2>
        <p class="cClass" :class="a">xxx是字符串</p>
        <p :class="{cClass : true, aClass: isA, bClass: isB}">xxx是对象</p>
        <p :class="['cClass', a]">xxx是数组</p>

        <h2>2. style绑定</h2>
        <button @click="updateToBlue">更新为蓝色</button>
        <button @click="updateToRed">更新为红色</button>
        <p :style="{color: activeColor, fontSize: fontSize + 'px'}">:style="{color: {{activeColor}}, fontSize: {{fontSize}} + 'px'}"</p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                a: 'aClass',
                isA: true,
                isB: false,
                activeColor: 'red',
                fontSize: 20
            },
            methods: {
                updateToBlue() {
                    this.a = 'bClass'
                    this.isA = false
                    this.isB = true
                    this.activeColor = 'blue'
                    this.fontSize = 26
                },
                updateToRed() {
                    this.a = 'aClass'
                    this.isA = true
                    this.isB = false
                    this.activeColor = 'red'
                    this.fontSize = 20
                }
            }
        })
    </script>
</body>
</html>
```

### 1.6. 条件渲染

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_条件渲染</title>
</head>
<body>
    <!--
        1. 条件渲染指令
            v-if
            v-else
            v-show
        2. 比较v-if与v-show
            v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
            v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
            相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

            一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
            因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
    -->

    <div id="demo">
        <p v-if="ok">v-if - 成功</p>
        <p v-else>v- else - 失败</p>

        <p v-show="ok">v-show - 成功</p>
        <p v-show="!ok">v-show - 失败</p>

        <button @click="ok = !ok">切换</button>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                ok: true
            }
        })
    </script>
</body>
</html>
```

### 1.7. 列表渲染

#### 1.7.1. 列表渲染

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_列表渲染</title>
</head>
<body>
    <!--
        1. 列表显示
            数组：v-for / index
            对象：v-for / key
        2. 列表的更新显示
            删除item
            替换item
    -->

    <div id="demo">
        <h2>测试：v-for 遍历数组</h2>
        <ul>
            <li v-for="(p, index) in persons" :key="index">
                {{index}} --- {{p.name}} --- {{p.age}}
                ---
                <button @click="deleteP(index)">删除</button>
                ---
                <button @click="updateP(index, {name: 'Cat', age: 20})">更新</button>
            </li>
        </ul>

        <h2>测试：v-for 遍历对象</h2>
        <ul>
            <li v-for="(value, key) in persons[1]" :key="key">
                {{key}} --- {{value}}
            </li>
        </ul>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                persons: [
                    {name: 'Tom', age: 18},
                    {name: 'Jack', age: 25},
                    {name: 'Rose', age: 20},
                    {name: 'Bob', age: 60}
                ]
            },
            methods: {
                deleteP(index) {
                    // 删除persons中指定index的p
                    this.persons.splice(index, 1)
                },
                /**
                 * vue本身只是监视了persons的改变，并没有监视数组内部数据的改变
                 *
                 * vue重写了数组中的一系列改变数组内部数据的方法（先调用原生，更新界面） ---> 数组内部改变，界面自动变化
                 *
                 * @param index
                 * @param newP
                 */
                updateP(index, newP) {
                    // 改变persons本身
                    // this.persons = []

                    // 改变persons数组内部
                    // this.persons[index] = newP

                    // vue 本身只是监视了数组的改变, 没有监视数组内部数据的改变

                    // 数组更新检测 : Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新
                    this.persons.splice(index, 1, newP)
                }
            }
        })
    </script>
</body>
</html>
```

#### 1.7.2. 显示过滤_排序结果_

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>02_显示过滤_排序结果</title>
</head>
<body>
    <!--
        1. 列表过滤
        2. 列表排序
    -->
    <div id="demo">
        <label>
            <input type="text" v-model.trim="searchName">
        </label>
        <ul>
            <li v-for="(p, index) in filterPersons">
                {{index}} ---- {{p.name}} --- {{p.age}}
            </li>
        </ul>

        <button @click="setOrderType(1)">年龄升序</button>
        <button @click="setOrderType(2)">年龄降序</button>
        <button @click="setOrderType(0)">原本顺序</button>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                searchName: '',
                orderType: 0, // 0代表原本，1代表升序，2代表降序
                persons: [
                    {name: 'Tom', age: 18},
                    {name: 'Jack', age: 25},
                    {name: 'Rose', age: 20},
                    {name: 'Bob', age: 60}
                ]
            },
            computed: {
                filterPersons() {
                    // 取出相关的数据
                    const {searchName, persons, orderType} = this
                    // 最终显示的数组
                    let fPersons
                    // 对persons进行过滤
                    fPersons = persons.filter(p => p.name.indexOf(searchName) !== -1)

                    // 对persons进行排序
                    if (orderType !== 0) {
                        /*
                            条件
                                orderType === 1 升序; p2在前
                                orderType === 2 降序; p1在前
                         */
                        // 返回负数, p1在前; 返回整数, p2在前
                        fPersons.sort((p1, p2) => orderType === 1 ? p1.age - p2.age : p2.age - p1.age)
                    }

                    return fPersons
                }
            },
            methods: {
                setOrderType(orderType) {
                    this.orderType = orderType
                    console.log(this.orderType)
                }
            }
        })
    </script>
</body>
</html>
```

### 1.8. 事件处理

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_事件处理</title>
<style>
    .red_div {
        width: 200px;
        height: 200px;
        background: red;
    }
    .blue_div {
        width: 100px;
        height: 100px;
        background: blue;
    }
</style>
</head>
<body>
    <!--
        1. 绑定监听
        2. 事件修饰符
    -->

    <div id="demo">
        <h2>1. 绑定监听</h2>
        <button @click="test1">test1</button>
        <button @click="test2('colg')">test2</button>
        <button @click="test3">test3</button>
        <button @click="test3_1">test3_1</button>
        <button @click="test4(123, $event)">test4</button>

        <h2>2. 事件修饰符</h2>
        <div class="red_div" @click="test5">
            <div class="blue_div" @click.stop="test6"></div>
        </div>

        <a href="http://www.baidu.com" @click.prevent="test7">去百度</a>

        <h2>3. 按键修饰符</h2>
        <label>
            <input type="text" @keyup.enter="test8">
        </label>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                test1() {
                    alert('test1')
                },
                test2(msg) {
                    alert(msg)
                },
                /**
                 * 没有指定参数，自动传递event
                 *
                 * @param event
                 */
                test3(event) {
                    console.log(event)
                    alert(event.target.innerHTML)
                },
                test3_1({target}) {
                    // 解构赋值
                    console.log(target)
                    alert(target.innerHTML)
                },
                test4(number, {target}) {
                    console.log(target)
                    alert(number + '---' + target.innerHTML)
                },
                test5() {
                    alert('test5 - out')
                },
                test6(event) { // 事件冒泡
                    // event.stopPropagation()
                    alert('test6 - inner')
                },

                test7(event) { // 事件默认行为
                    // event.preventDefault()
                    alert('test7 - 点击了')
                },

                test8({keyCode, target}) {
                    // 回车
                    /*
                    if (keyCode === 13) {
                        alert(target.value)
                    }
                    */
                    alert(target.value)
                }
            }

        })
    </script>
</body>
</html>
```

### 1.9. 表单输入绑定

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_表单输入绑定</title>
</head>
<body>
    <!--
        1. 使用v-model（双向绑定数据）自动收集数据
            text/textarea
            checkbox
            radio
            select
    -->

    <div id="demo">
        <form action="" @submit.prevent="handleSubmit">
            <span>用户名：</span>
            <label>
                <input type="text" v-model="username">
            </label>
            <br>

            <span>密码：</span>
            <label>
                <input type="password" v-model="pwd">
            </label>
            <br>

            <span>性别：</span>
            <input type="radio" id="female" value="女" v-model="sex">
            <label for="female">女</label>
            <input type="radio" id="male" value="男" v-model="sex">
            <label for="male">男</label> <br>

            <span>爱好：</span>
            <input type="checkbox" id="basket" value="basket" v-model="likes">
            <label for="basket">篮球</label>
            <input type="checkbox" id="foot" value="foot" v-model="likes">
            <label for="foot">足球</label>
            <br>

            <span>城市：</span>
            <label>
                <select v-model="cityId">
                    <option value="">未选择</option>
                    <option :value="city.id" v-for="(city, index) in allCitys" :key="index">{{city.name}}</option>
                </select>
            </label>
            <br>

            <span>介绍:</span>
            <label>
                <textarea cols="30" rows="10" v-model="desc"></textarea>
            </label>
            <br>

            <input type="submit" value="注册">
        </form>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                username: '',
                pwd: '',
                sex: '女',
                likes: ['foot'],
                allCitys: [
                    {id: 1, name: '北京'},
                    {id: 2, name: '上海'},
                    {id: 3, name: '广东'}
                ],
                cityId: 3,
                desc: ''
            },
            methods: {
                handleSubmit() {
                    console.log(this.username, this.pwd, this.sex, JSON.stringify(this.likes), this.cityId, this.desc)
                }
            }
        })
    </script>
</body>
</html>
```

### 2.0. Vue实例生命周期

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_Vue实例_生命周期</title>
</head>
<body>

    <!--
        1. vue 对象的生命周期
            1). 初始化显示
                * beforeCreate()
                * created()
                * beforeMount()
                * mounted()
            2). 更新显示： this.xxx = value
                * beforeUpdate()
                * updated()
            3). 销毁vue实例： vm.$destroy()
                * beforeDestroy()
                * destroyed()
        2. 常用的生命周期方法
            mounted()：              发送ajax请求，启动定时器等异步任务
            beforeDestroy()：        做收尾工作，如：清除定时器
    -->

    <div id="demo">
        <button @click="destroyVm">destroy vm 销毁vm实例</button>
        <h2 v-show="isShow">colg</h2>
        <h3>{{isShow}}</h3>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                isShow: true
            },
            // 1. 初始化阶段
            beforeCreate() {
                console.log('---------------------------------------- 初始化阶段 ----------------------------------------')
                // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
                console.log('beforeCreate()')
            },
            created() {
                // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。挂载阶段还未开始
                console.log('created()')
            },
            beforeMount() {
                // 在挂载开始之前被调用：相关的 render 函数首次被调用。
                console.log('beforeMount()')
            },
            mounted() {
                // 初始化显示之后立即调用（1次）
                console.log('mounted()')
                this.intervalId = setInterval(() => this.isShow = !this.isShow, 1000)
            },

            // 2. 更新阶段
            beforeUpdate() {
                console.log('---------------------------------------- 更新阶段 ----------------------------------------')
                // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
                console.log('beforeUpdate()')
            },
            updated() {
                // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
                console.log('updated()')
            },

            // 3. 死亡阶段
            beforeDestroy() {
                console.log('---------------------------------------- 死亡阶段 ----------------------------------------')
                // 实例销毁之前调用（1次）。
                console.log('beforeDestroy()')
                // 清除定时器
                clearInterval(this.intervalId)
            },
            destroyed() {
                // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
                console.log('destroyed()')
            },
            methods: {
                destroyVm() {
                    // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
                    this.$destroy()
                }
            }
        })
    </script>
</body>
</html>
```

### 2.1. 过渡与动画

#### 2.1.1. 过度与动画 - transition

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_过度与动画 - transition</title>
<style>
    /*显示/隐藏的过渡效果*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    /*隐藏时的样式*/
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    /*显示的过渡效果*/
    .move-enter-active {
        transition: all 1s;
    }
    /*隐藏的过渡效果*/
    .move-leave-active {
        transition: all 3s;
    }
    /*隐藏时的样式*/
    .move-enter, .move-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }
</style>
</head>
<body>

    <!--
        1. Vue动画的理解
            操作css的transition或animation
            vue会给目标元素添加/移除特定的class
        2. 基本过渡动画的编码
            1). 在目标元素外包裹<transition name="xxx">
            2). 定义class样式
                1>. 指定过渡样式：transition
                2>. 指定隐藏时的样式：opacity/其它
        3. 过渡的类名
            xxx-enter-active:   指定显示的transition
            xxx-leave-active:   指定隐藏的transition
            xxx-enter:          指定隐藏时的样式
    -->

    <div id="demo">
        <button @click="isShow = !isShow">toggle</button>
        <transition name="fade">
            <p v-show="isShow">hello</p>
        </transition>
    </div>

    <div id="demo2">
        <button @click="isShow = !isShow">toggle</button>
        <transition name="move">
            <p v-show="isShow">colg</p>
        </transition>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                isShow: true
            }
        })

        new Vue({
            el: '#demo2',
            data: {
                isShow: true
            }
        })
    </script>
</body>
</html>
```

#### 2.1.2. 过渡与动画 - animationend

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>02_过渡与动画 - animationend</title>
<style type="text/css">
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
</head>
<body>

    <div id="example-2">
        <button @click="isShow = !isShow">Toggle show</button>
        <br>
        <transition name="bounce">
            <p v-if="isShow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris facilisis enim libero, at lacinia diam fermentum id.
                Pellentesque habitant morbi tristique senectus et netus.
            </p>
        </transition>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        new Vue({
            el: '#example-2',
            data: {
                isShow: true
            }
        })
    </script>
</body>
</html>
```

### 2.2. 过滤器

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_过滤器</title>
</head>
<body>
    <!--
        理解过滤器
            1. 功能 : 对要显示的数据进行特定格式化后再显示
            2. 注意 : 并没有改变原本的数据, 可是产生新的对应的数据
    -->

    <div id="demo">
        <h2>显示格式化的日期时间</h2>
        <p>{{date}}</p>
        <p>完整版：{{date | date-format}}</p>
        <p>年月日：{{date | date-format('YYYY-MM-DD')}}</p>
        <p>时分秒：{{date | date-format('HH:mm:ss')}}</p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <!-- JavaScript 日期处理类库 -->
    <script src="../../00_libs/moment-2.22.2/moment.js"></script>
    <script>
        // 自定义过滤器
        Vue.filter('date-format', (date, formatStr = 'YYYY-MM-DD HH:mm:ss') => moment(date).format(formatStr))

        new Vue({
            el: '#demo',
            data: {
                date: new Date()
            }
        })
    </script>
</body>
</html>
```

### 2.3. 指令

#### 2.3.1. 内置指令

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_内置指令</title>
<style>
    [v-cloak] {
        display: none;
    }
</style>
</head>
<body>

    <!--
        常用内置指令
            v-text：     更新元素的 textContent
            v-html：     更新元素的 innerHTML
            v-if：       如果为true，当前标签才会输出到页面
            v-else：     如果为false，当前标签才会输出到页面
            v-show：     通过控制display样式来控制显示/隐藏
            v-for：      遍历数组/对象
            v-on：       绑定事件监听，一般简写为@
            v-bind：     强制绑定解析表达式，可以省略v-bind
            v-model：    双向数据绑定
            ref：        为某个元素注册一个唯一标识，vue对象通过$els属性访问这个元素对象
            v-cloak：    使用它防止闪现表达式，与css配合：[v-cloak] {display: none}
            v-once：     只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
    -->

    <div id="demo">
        <p ref="content">colg</p>
        <button @click="hint">提示</button>
        <!--<p v-text="msg"></p>-->
        <p v-cloak>{{msg}}</p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        alert('闪现表达式')

        new Vue({
            el: '#demo',
            data: {
                msg: 'Vue 内置指令'
            },
            methods: {
                hint() {
                    let result = this.$refs.content.textContent
                    alert(result)
                }
            }
        })
    </script>
</body>
</html>
```

#### 2.3.2. 自定义指令

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>02_自定义指令</title>
</head>
<body>

    <!--
        1. 注册全局指令
            Vue.directive('my-directive', function(el, binding) {
                el.innerHTML = binding.value.toupperCase()
            })
        2. 注册局部指令
            directive: {
                'my-directive': {
                    bind(el, binding) {
                        el.innerHTML = binding.value.toupperCase()
                    }
                }
            }
        3. 使用指令
            v-my-directive='xxx'
    -->
    <!--
        需求：定义两个指令
            1. 功能类型于v-text, 但转换为全大写 v-upper-text
            2. 功能类型于v-text, 但转换为全小写 v-lower-text
    -->

    <div id="demo1">
        <p v-upper-text="msg1"></p>
        <p v-lower-text="msg1"></p>
    </div>

    <div id="demo2">
        <p v-upper-text="msg2"></p>
        <!--<p v-lower-text="msg2"></p>-->
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        /**
         * 定义全局指令对象
         *
         * @param {string} id 指令名，不包括 v- 前缀
         * @param {Function | Object} [definition]
         *      el : 指令所绑定的元素，可以用来直接操作 DOM;
         *      binding : 一个对象(包含rawName指令名, value绑定的值)
         */
        Vue.directive('upper-text', (el, binding) => {
            console.log(el, binding)
            el.textContent = binding.value.toUpperCase()
        })

        new Vue({
            el: '#demo1',
            data: {
                msg1: 'NBA I Love This Game!'
            },
            /**
             * 注册局部指令, 只在当前vm管理范围内有效
             */
            directives: {
                // es6 写法
                'lower-text': (el, binding) => el.textContent = binding.value.toLowerCase()
            }

        })

        new Vue({
            el: '#demo2',
            data: {
                msg2: 'Just Do It!'
            }
        })
    </script>
</body>
</html>
```

### 2.4. 插件

```js
/*
    vue的插件库
 */

// 匿名函数自调用
;(function () {

    // 需要向外暴露的插件对象
    const MyPlugin = {}

    // 插件对象必须有一个install()
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log('Vue 函数对象的方法 myGlobalMethod()')
        }

        // 2. 添加全局资源
        /*
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                // 逻辑...
            }
            ...
        })
        */
        Vue.directive('my-directive', (el, binding) => el.textContent = binding.value.toUpperCase())

        // 3. 注入组件
        /*
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
            ...
        })
        */

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('Vue 实例对象的方法 $myMethod()')
        }
    }

    // 向外暴露
    window.MyPlugin = MyPlugin
})()
```

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_插件</title>
</head>
<body>
    <div id="demo">
        <p v-my-directive="msg"></p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script src="./vue-myPlugin.js"></script>
    <script>
        // 声明使用插件
        Vue.use(MyPlugin) // 内部会执行 MyPlugin.install(Vue)

        Vue.myGlobalMethod()

        const vm = new Vue({
            el: '#demo',
            data: {
                msg: 'I Love You'
            }
        })

        vm.$myMethod()
    </script>
</body>
</html>
```

### 2.5. 混入

#### 2.5.1. 混入_选项合并

```vue
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>01_混入_选项合并</title>
</head>
<body>
    <!--
        选项合并
            当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。
                1. 数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先。
                2. 同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
                3. 值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。
    -->
    <div id="demo">
        <p>{{message}}</p>
        <p>{{bar}}</p>
        <p>{{foo}}</p>
    </div>

    <script src="../../00_libs/vue-2.5.2/vue.js"></script>
    <script>
        /**
         * 定义混入对象
         * @type {{data(): *, created(): void}}
         */
        const mixin = {
            data() {
                return {
                    foo: 'data => mixin - foo',
                    message: 'data => mixin - hello'
                }
            },
            created() {
                console.log('created => mixin - 混入对象的钩子被调用')
            },
            methods: {
                a() {
                    console.log('methods => mixin - a()')
                },
                conflicting() {
                    console.log('methods => tmixin - conflicting()')
                }
            }
        }

        const vm = new Vue({
            mixins: [mixin],
            el: '#demo',
            data() {
                return {
                    bar: 'data => bar',
                    message: 'data => goodbye'
                }
            },
            created() {
                console.log('created => ' + JSON.stringify(this.$data))
                console.log('created => 组件钩子被调用')
            },
            methods: {
                b() {
                    console.log('methods => b')
                },
                conflicting() {
                    console.log('methods => conflicting()')
                }
            }
        })

        console.log('----------------------------------------------------------------------------------------------------')
        vm.a()
        vm.b()
        vm.conflicting()
    </script>
</body>
</html>
```

## 2. Vue的组件化编码

2.1. 使用vue-cli创建模版项目

#### 2.1.1. 说明

- vue-cli是vue官方提供的脚手架工具
- github：https://github.com/vuejs/vue-cli
- 作用：从https://github.com/vuejs-templates下载模版项目
- 文档：https://github.com/vuejs/vue-docs-zh-cn/tree/master/vue-cli

#### 2.1.2. 创建vue项目

```properties
cd D:\workspace-all\atguigu\Html5\20_Vue

npm install -g vue-cli

vue init webpack vue-demo					(项目名必须小写)

cd vue-demo\

npm install

npm run dev								    (在内存中进行打包)

访问：http://localhost:8080/
```

#### 2.1.3. 模版项目的结构

```properties
|-- build : 			webpack 相关的配置文件夹(基本不需要修改)
  |-- dev-server.js : 	通过 express 启动后台服务器
|-- config: 			webpack 相关的配置文件夹(基本不需要修改)
  |-- index.js: 		指定的后台服务的端口号和静态资源文件夹
|-- node_modules
|-- src : 				源码文件夹
  |-- components: 		vue 组件及其相关资源文件夹
  |-- App.vue: 			应用根主组件
  |-- main.js: 			应用入口 js
|-- static: 			静态资源文件夹
|-- .babelrc: 			babel 的配置文件
|-- .eslintignore: 		eslint 检查忽略的配置
|-- .eslintrc.js: 		eslint 检查的配置
|-- .gitignore: 		git 版本管制忽略的配置
|-- index.html: 		主页面文件
|-- package.json: 		应用包配置文件
|-- README.md: 			应用描述说明的 readme 文件
```

#### 2.1.4. 效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fry24yc88hj317t0a9gm8.jpg)

### 2.2. 项目的打包与发布

#### 2.2.1. 打包

```properties
npm run build
```

#### 2.2.2. 发布1：使用静态服务器工具包

```properties
npm install -g serve
serve dist

访问：http://localhost:5000

# 无法成功，原因不明
```

#### 2.2.3. 发布2：使用动态web服务器（tomcat）

```properties
1. 修改配置：webpack.prod.conf.js		Line 25
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    publicPath: '/vue-demo/'  // 打包文件夹的名称
  },
  
 2. 重新打包：
 npm run build
 3. 修改dist文件夹为项目名称：vue-demo
 4. 将vue-demo拷贝到运行的tomcat的webapps目录下
 5. 访问：http://localhost:8080/vue-demo
```

### 2.3. ESLint

#### 2.3.1. 说明

- ESLint是一个代码规范检查工具
- 它定义了很多特定的规则，一旦你的代码违背了某一规则，ESLint会做出非常有用的提示
- 官网：http://eslint.cn/
- 基本已替代以前的JSLint

#### 2.3.2. ESLint提供以下支持

- ES
- JSX
- style检查
- 自定义错误和提示

#### 2.3.3. ESLint提供以下几种校验

- 语法错误校验
- 不重要或丢失的标点符号，如分号
- 没法运行到的代码块
- 未被使用的参数提醒
- 确保样式的统一规则，如sass或者less
- 检查变量的命名

#### 2.3.4. 规则的错误等级有三种

- 0: 关闭规则
- 1: 打开规则，并且作为一个警告（信息打印黄色字体）
- 2: 打开规则，并且作为一个错误（信息打印红色字体）

#### 2.3.5. 相关配置文件

- .eslintrc.js：全局规则配置文件

```js
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 缩进，0：表示不验证规则。
    'indent': 0,
    'no-new': 0
  }
```

- 在js/Vue文件中修改局部规则
- .eslintignore：检查忽略的文件

### 2.4. 组件定义与使用

#### 2.4.1. vue文件的组成（3个部分）

- 模版页面

```vue
<template>
  <!--页面模版-->
</template>
```

- JS 模块对象

```vue
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
```

- 样式

```vue
<style scoped>
  /*样式定义*/
</style>
```

#### 2.4.2. 基本使用

- `src/components/HelloWorld.vue`

  ```vue
  <template>
    <div>
      <h2 class="msg">{{msg}}</h2>
    </div>
  </template>
  
  <script>
    export default {        // 向外暴露一个配置对象（与Vue一致）
      data() {              // 必须写函数
        return {
          msg: 'Hello Vue Components'
        }
      }
    }
  </script>
  
  <style scoped>
    .msg {
      color: red;
    }
  </style>
  ```

- `src/App.vue`

  ```vue
  <template>
    <div>
      <img src="./assets/img/logo.png" alt="logo">
      <!--3. 使用组件标签-->
      <HelloWolrd/>
    </div>
  </template>
  
  <script>
    // 1. 引入HelloWorld组件
    import HelloWolrd from './components/HelloWorld'
  
    export default {
      // 2. 映射组件标签
      components: {HelloWolrd}
    }
  </script>
  
  <style scoped>
  
  </style>
  ```

#### 2.4.3. 关于标签名与标签属性名书写问题

- 写法一：一模一样
- 写法二：大写变小写，并用-连接

### 2.5. 组件间通信

#### 2.5.1. 组件间通信基本原则

- 不要在子组件中直接修改父组件的状态数据
- 数据在哪儿，更新数据的行为（函数）就应该定义在哪儿

#### 2.5.2. vue组件间通信方式

- props： 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象。
- vue的自定义事件
- 消息订阅与发布（如：pubsub库）
- slot
- vuex

### 2.6. 组件间通信1：props

#### 2.6.1. 使用组件标签时

```vue
        <!-- :addComment 传递方法 -->
        <Add :addComment="addComment"/>
        <!-- :comments 传递数据 :deleteComment 逐层传递到 Item -->
        <List :comments="comments" :deleteComment="deleteComment"/>
```

#### 2.6.2. 自定义MyComponent时

- 在组件内声明所有的props
- 方式一：只指定名称

```properties
props: ['comments', 'deleteComment'], // 只指定属性名
```

- 方式二：指定名称和类型

```properties
    props: { // 指定属性名和属性值的类型
      comment: Object,
      deleteComment: Function,
      index: Number
    },
```

- 方式三：指定名称/类型/必要性/默认值

```properties
    props: {
      addComment: { // 指定了属性名/属性值的类型/必要性
        type: Function,
        required: true
      }
    },
```

#### 2.6.3. 注意

- 此方法用于父组件向子组件传递数据
- 所有标签属性都会成为组件对象的属性，模版页面可以直接引用
- 问题：
  - 如果需要向非自后代传递数据必须多层逐层传递
  - 兄弟组件间也不能直接props通信，必须借助父组件才可以

### 2.7. 组件间通信2：vue自定义事件

#### 2.7.1. 绑定事件监听

- 方式一：通过 v-on 绑定

```vue
      <!--给todo-header标签对象绑定addTodo事件监听-->
      <todo-header @addTodo="addTodo"/>

        // 触发自定义事件：addTodo
        this.$emit('addTodo', todo)
```

- 方式二：通过$on()

```vue
<todo-header ref="header"/>

    mounted() { // 执行异步代码
      // 给<todo-header/>绑定addTodo事件监听
      // this.$on('addTodo', this.addTodo) // 给app绑定监听
      this.$refs.header.$on('addTodo', this.addTodo)
    },

        // 触发自定义事件：addTodo
        this.$emit('addTodo', todo)
```

#### 2.7.2. 触发事件

```vue
        // 触发自定义事件：addTodo
        this.$emit('addTodo', todo)
```

#### 2.7.3. 注意

- 此方式只用于子组件向父组件发送消息（数据）
- 问题：隔代组件或者兄弟组件间通信此种方式不合适

### 2.8. 组件间通信3：消息订阅与发布（pubsub-js库）

#### 2.8.1. 安装

```properties
npm install pubsub-js --save
```

#### 2.8.2. 订阅消息

```js
import PubSub from 'pubsub-js'

    mounted() {
      // 绑定事件监听    订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        // 箭头函数 没有自己的this，取外部函数的this
        this.deleteTodo(index)
      })
    },
```

#### 2.8.3. 发布消息

```js
      // 删除
      deleteItem() {
        let {layer, todo, index} = this
        layer.confirm(`确认删除${todo.title}吗？`, function () {
          layer.close(this.id)
          // 触发事件        发布消息
          PubSub.publish('deleteTodo', index)
        })
      }
```

#### 2.8.4. 注意

- 优点：此方式可以实现任意关系组件间通信（数据）

#### 2.8.5. 事件的两个重要操作（总结）

- 绑定事件监听（订阅消息）

- 触发事件（发布消息）

### 2.9. 组件间通信4：slot

### 2.10. demo1：comment manage

### 2.11. demo2：todo list

## 3. Vue-ajax

### 3.1. vue项目中常用的2个ajax库

#### 3.1.1. vue-resource

- vue插件，非官库，vue1.x使用广泛

#### 3.1.2. axios

- 通用的ajax请求库，官方推荐，vue2.x使用广泛

### 3.2. vue-resource的使用

- Github：https://github.com/pagekit/vue-resource
- 下载：

```properties
npm install vue-resource --save
```

- 编码：

```js
// 引入模块
import vueResource from 'vue-resource'

// 声明使用插件
Vue.use(vueResource) // 内部会给vm独享和组件对象添加一个属性：$http

// 通过vue组件对象发送ajax请求
const url = `https://api.github.com/search/repositories?q=vue-source&sort=stars`
this.$http.get(url).then(
    // 成功响应
    response => {
        // 成功
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
    },
    // 失败响应
    response => {
        alert('请求失败')
    }
)
```



### 3.3. axios的使用

- Github：https://github.com/axios/axios
- 下载：

```shell
npm install axios --save
```

- 编码：

```js
  // 引入组件
  import axios from 'axios'

// 使用axios发送ajax请求
axios.get(url).then(response => {
    // 成功
    const result = response.data
    // 得到最受欢迎的repo
    const mostRepo = result.items[0]
    this.repoUrl = mostRepo.html_url
    this.repoName = mostRepo.name
}).catch(error => {
    alert('请求失败')
})
```

### 3.4. 测试接口

- 接口1：https://api.github.com/search/repositories?q=vue&sort=stars
- 接口2：https://api.github.com/search/users?q=vue

### 3.5. demo3：github users

```js
    mounted() {
      // 是否再次发ajax请求，不是，而是在点击之后
      // 订阅搜索的消息
      PubSub.subscribe('search', (msg, searchName) => {
        // 说明需要发ajax请求进行搜索
        const url = `http://api.github.com/search/users?q=${searchName}`
        // 更新状态（请求中）
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''

        // 发ajax请求
        axios.get(url).then(response => {
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login
          }))
          console.log(users)
          // 成功，更新状态（成功）
          this.loading = false
          this.users = users
        }).catch(error => {
            // 失败，更新状态（失败）
            this.loading = false
            this.errorMsg = url + ': ' + error.response.statusText
          }
        )
      })
```

## 4. Vue UI组件库

### 4.1. 使用mint-ui

#### 4.1.1. 介绍

- 主页：http://mint-ui.github.io/#!/zh-cn
- 说明：饿了么开源的基于 Vue.js 的移动端组件库 

#### 4.1.2. 下载

```properties
1. npm 安装
npm install mint-ui --save

2. 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
npm install babel-plugin-component --save-dev

3. 修改 .babelrc 实现按需打包mint-ui
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime", ["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
```

#### 4.1.3. mint-ui 组件分类

- 标签组件
- 非标签组件

#### 4.1.4. 使用 mint-ui 的组件

- index.html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<!--<meta name="viewport" content="width=device-width,initial-scale=1.0">-->
<!-- 移动端 -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
<link rel="stylesheet" href="./static/css/bootstrap.css">
<title>vue-demo</title>
<!-- 处理移动端事件延迟 -->
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body)
    }, false)
  }
  if (!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' + '>' + '<' + '/' + 'script>')
  }
</script>
</head>
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
</html>
```

- main.js

```js
import Vue from 'vue'
import App from './App'
// 引入指定组件
import {Button, Swipe} from 'mint-ui'

// 注册成标签（全局）
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)

new Vue({
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>'
})
```

- App.vue

```vue
<template>
  <!-- click.native 原生的事件监听-->
  <mt-button type="primary" @click.native="handleClick">确定</mt-button>
</template>

<script>
  // 引入 消息提示 组件
  import {Toast} from 'mint-ui'

  export default {
    methods: {
      handleClick() {
        Toast('提示信息')
      }
    }
  }
</script>

<style scoped>
  button {
    width: 100%;
  }
</style>

```

### 4.2. 使用element-ui

#### 4.2.1. 介绍

- 主页：http://element-cn.eleme.io/#/zh-CN
- 说明：饿了么开源的一套为开发者. 设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 

## 5. Vue-router

### 5.1. 理解

#### 5.1.1. 说明

- 官方提供的用来实现SPA（单页应用）的vue插件
- Github：https://github.com/vuejs/vue-router
- 文档：https://router.vuejs.org/zh/
- 下载

```properties
npm install vue-router --save
```

#### 5.1.2. 相关API说明

- VueRouter()：	用于创建路由器的构建函数

```js
// 默认暴露
export default new VueRouter({
  // 多个配置项
})
```

- 路由配置

```js
export default new VueRouter({
  // 多个配置项
  routes: [
    // 一般路由
    {path: '/about', component: About},
    {path: '/home', component: Home},
    // 自动跳转路由
    {path: '/', redirect: '/about'}
  ]
})
```

- 注册路由器

```js
// 引入组件
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({ // 配置对象的属性名都是一些固定的名称，不能随便修改
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>',
  // 配置路由器
  router
})
```

- 使用路由组件标签

```vue
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="pan1">
          <div class="pan1-body">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
```

### 5.2. 基本路由

#### 5.2.1. 效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1ftzd5t28vaj30l404w3yc.jpg)

#### 5.2.2. 路由组件

- About.vue
- Home.vue

#### 5.2.3. 应用组件：App.vue

```vue
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>    

	<div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
          <!--
          <a href="#/about" class="list-group-item router-link-exact-active active">About</a>
          <a href="#/home" class="list-group-item">Home</a>
          -->
        </div>
      </div>
      <div class="col-xs-8">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
            <!--
            <div class="col-md-5">
              <h2>About组件</h2>
              <label>接收外部数据：</label>
              <input type="text" class="form-control" placeholder="内容">
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
```

#### 5.2.4. 路由器模块：src/router/index.js

```js
/*
  路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {path: '/about', component: About},
    {
      path: '/home', component: Home,
      children: [
        // path 最左侧的/永远代表根路径
        {path: '/home/news', component: News},
        // 简化写法
        {path: 'message', component: Message},
        {path: '', redirect: '/home/news'},
      ]
    },
    // 自动跳转路由
    {path: '/', redirect: '/about'}
  ],
  // 当前路由的 class router-link-active 修改 为 active
  linkActiveClass: 'active'
})

```

#### 5.2.5. 注册路由器：main.js

```js
import Vue from 'vue'
import App from './App'

// 引入路由器
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  // 配置对象的属性名都是一些固定的名称，不能随便修改
  el: '#app',
  // 映射组件标签
  components: {App},
  // 指定需要渲染到页面的模版
  template: '<App/>',
  // 配置路由器
  router
})
```

#### 5.2.6. 总结：编写使用路由的3步

- 定义路由组件
- 注册路由
- 使用路由

### 5.3. 嵌套路由

#### 5.3.1. 效果

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fs1x11ix46j30jv0d0mx5.jpg)

#### 5.3.2. 子路由组件

- News.vue
- Message.vue

#### 5.3.3. 配置嵌套路由：router.js

```js
/*
  路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {path: '/about', component: About},
    {
      path: '/home', component: Home,
      children: [
        // path 最左侧的/永远代表根路径
        {path: '/home/news', component: News},
        // 简化写法
        {path: 'message', component: Message},
        {path: '', redirect: '/home/news'},
      ]
    },
    // 自动跳转路由
    {path: '/', redirect: '/about'}
  ],
  // 当前路由的 class router-link-active 修改 为 active
  linkActiveClass: 'active'
})

```

#### 5.3.4. 路由链接：Home.vue

```vue
<template>
  <div>
    <div class="col-md-5">
      <h2>Home 组件</h2>
      <ul class="nav nav-tabs">
        <router-link to="/home/news" tag="li">
          <a href="">News</a>
        </router-link>
        <router-link to="/home/message" tag="li">
          <a href="">message</a>
        </router-link>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
```

### 5.4. 向路由组件传递数据

```vue
            <keep-alive>
              <!--路由传递数据-->
              <router-view msg="渐进式 JavaScript 框架"></router-view>
            </keep-alive>
```

### 5.5. 缓存路由组件对象

```vue
            <keep-alive>
              <!--路由传递数据-->
              <router-view msg="渐进式 JavaScript 框架"></router-view>
            </keep-alive>
```

### 5.6. 编程式路由导航

```js
// 这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
this.$router.push(`url`)
// 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
this.$router.replace(`url`)
```

### 5.7. Vue路由传参的三种基本方式

#### 5.7.1. restfull风格

- 路由配置

```js
{path: '/home/message/detail/:id', component: MessageDetail}
```

- 传递参数

```js
this.$router.push(`/home/message/detail/12345`)
```

- url：  `http://xxx/id=12345`
- 接收参数

```js
this.$route.params.id
```

#### 5.7.2. 显式传参

- 路由配置

```js
{path: '/home/message/detail', component: MessageDetail}
```

- 传递参数

```js
        this.$router.push(
          {
            path: `/home/message/detail`,
            query: {id: 12345}
          }
        )
```

- url： `http://xxx?id=12345`
- 接收参数

```js
this.$route.query.id
```

#### 5.7.3. 隐式传参

- **路由配置（必须配置name）**

```js
{path: '/home/message/detail', name: 'detail', component: MessageDetail}
```

- 传递参数

```js
        this.$router.push(
          {
            name: 'detail',
            params: {id: 12345}
          }
        )
```

- url：`http://xxx` 参数隐式传递
- 接收参数

```js
this.$route.params.id
```

## 6. Vuex

## 7. Vue源码分析

### 7.1. 说明

- 分析vue作为一个MVVM框架的基本实现原理
- 不直接看vue.js的源码
- 剖析github上某基友仿vue实现的mvvm库
- 剖析vue实现原理，自己动手实现*mvvm* https://github.com/DMQ/mvvm