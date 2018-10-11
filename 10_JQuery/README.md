# jQuery

## 1. 初识jQuery

### 1.1. jQuery是什么？

- 一个优秀的js函数库：`write less, do more`
- 封装简化dom操作（crud）/ajax

### 1.2. 为什么使用jQuery？

- 强大选择器：方便快速查找dom元素
- 隐式遍历（迭代）：一次操作多个元素
- 读写合一：读数据/写数据用的是同一个函数
- 链式调用：可以通过.不段调用jQuery对象的方法
- 事件处理
- dom操作（CUD）
- 样式操作
- 动画
- 浏览器兼容

### 1.3. 如何使用jQuery

- 引入jQuery库
  - 本地引入或cdn远程引入
  - 开发板/生产版
- 使用jQuery
  - 使用jQuery函数：`&/jQuery`
  - 使用jQuery对象：`执行$()返回的对象`
- jQuery的不同版本
  - 1.x：兼容老版本IE；文件更大
  - 2.x：部分IE8以及以下不支持；文件小，执行效率更高
  - 3.x：完全不再支持IE8及以下版本；提供了一些新的API；提供不包含ajax/动画API的版本

## 2. jQuery的2把利器

```html
    <!--
        1. jQuery 核心函数
            简称：jQuery函数（$/jQuery）
            jQuery库向外直接暴露的就是$/jQuery
            引入jQuery库后，直接使用$即可
                当函数用：$(xxx)
                当对象用：$.xxx()
        2. jQuery 核心对象
            简称：jQuery对象
            得到jQuery对象：执行jQuery函数返回的就是jQuery对象
            使用jQuery对象：$obj.xxx()
    -->
```

### 2.1. jQuery核心函数

```html
    <!--
        jQuery核心函数用法
            1. 作为一般函数调用：$(param)
                1.1. 参数为函数：当dom加载完成后，执行此回调函数
                1.2. 参数为选择器字符串：查找所匹配的标签，并将它们封装当成jQuery对象
                1.3. 参数为dom对象：将dom对象封装成jQuery对象
                1.4. 参数为html标签字符串（用的少）：创建标签对象并封装成jQuery对象
            2. 作为对象使用：$.xxx()
                2.1. $.each()：隐式遍历
                2.2. $.trim()：去除两端的空格
    -->
```

### 2.2. jQuery核心对象

```html
    <!--
        1. jQuery对象是一个包含所有匹配的任意多个dom元素的伪数组对象
        2. 基本行为
            size/length：包含的dom元素个数
            [index]/get[index]：得到对应位置的dom元素
            each()： 遍历包含的所有dom元素
            index()：得到所在兄弟元素中的下标
    -->
```

## 3. 使用jQuery核心函数

### 3.1. 选择器

#### 3.1.1. 基本选择器

```js
        /*
            基本选择器：
                1. #id：id选择器
                2. element：元素选择器
                3. .class：属性原则器
                4. *：任意标签
                5. selector1, selector2, selector3：取多个选择器的并集（组合选择器）
                6. selector1selector2selector3：取多个选择器的交集（相交选择器）
        */

        // 1. 选择id为div1的元素
        $('#div1').css('background', 'red')

        // 2. 选择所有的div元素
        $('div').css('background', 'yellow')

        // 3. 选择所有class属性为box的元素
        $('.box').css('background', 'green')

        // 4. 选择所有的div和span元素
        $('div, span').css('background', 'blue')

        // 5. 选择所有class属性为box的div元素
        $('div.box').css('background', 'gray')
```

#### 3.1.2. 层次选择器

```js
        /*
            层次选择器：查找子元素，后代元素，兄弟元素的选择器
                1. ancestor descendant：在给定的祖先元素下匹配所有的后代元素
                2. parent > child：在给定的父元素下匹配所有的子元素
                3. prev + next：匹配所有紧接在prev元素后的next元素
                4. prev ~ siblings：匹配prev元素之后的所有siblings元素
         */

        // 1. 选中ul下所有的span
        $('ul span').css('background', 'red')

        // 2. 选中ul下所有的子元素span
        $('ul > span').css('background', 'yellow')

        // 3. 选中class为box的下一个li
        $('.box + li').css('background', 'green')

        // 4. 选中ul下的class为box的元素后面的所有兄弟元素
        $('ul .box ~ *').css('background', 'blue')
```

#### 3.1.3. 过滤选择器

```js
        /*
            过滤选择器：在原有选择器匹配的元素中进一步进行过滤的选择器
                1. 基本
                2. 内容
                3. 可见性
                4. 属性
         */

        // 1. 选择第一个div
        $('div:first').css('background', 'red')

        // 2. 选择最后一个class为box的元素
        $('.box:last').css('background', 'yellow')

        // 3. 选择所有class属性不为box的div
        $('div:not(.box)').css('background', 'green')

        // 4. 选择第二个和第三个li元素
        $('li:gt(0):lt(2)').css('background', 'blue') // 多个过滤选择器不是同时执行的，而是依次
        $('li:lt(3):gt(0)').css('background', 'blue')

        // 5. 选择内容为BBBB的li
        $('li:contains(BBBB)').css('background', 'gray')

        // 6. 选择隐藏的li
        $('li:hidden').each(function () {
            console.log(this)
        })

        // 7. 选择有title属性的li元素
        $('li[title]').css('background', 'purple')

        // 8. 选择所有属性title为hello的li元素
        $('li[title=hello]').css('background', 'pink')
```

#### 3.1.4. 表单选择器

```js
        /*
            表单选择器：
                1. 表单
                2. 表单对象属性
         */

        // 1. 选择不可用的文本输入框
        $(':input:disabled').css('background', 'red')

        // 2. 显示选择爱好的个数
        var $checkeds = $(':checkbox:checked')
        console.log($checkeds.length, $checkeds.size())

        // 3. 提交时显示选择的城市名称
        $(':submit').click(function () {
            var city = $('select > option:selected').html() // 选择的option的标签体文本
            alert(city)

            var val = $('select').val() // 选择的option的value属性值
            alert(val)
        })
```

### 3.2. 工具

```js
        /*
            常用的工具方法
                1. $.each()：遍历数组或对象中的数据
                2. $.trim()：去除字符串两边的空格
                3. $.type(obj)：得到数据的类型
                4. $.isArray(obj)：判断是否是数组
                5. $.isFunction(obj)：判断是否是函数
                6. $.parseJSON(json)：解析json字符串转换为js对象/数组
         */

        // 1. $.each()：遍历数组或对象中的数据
        var obj = {
            name: 'Tom',
            setName() {
                this.name = name
            }
        }
        for (var key in obj) { // 原生
            console.log(key, obj[key])
        }
        $.each(obj, function (key, value) {
            console.log(key, value)
        })
        console.log('-------------------------------------------------------------------')

        // 2. $.trim()：去除字符串两边的空格
        var str = '  my colg  '
        console.log(str.trim()) // 原生
        console.log($.trim(str))
        console.log('-------------------------------------------------------------------')

        // 3. $.type(obj)：得到数据的类型
        console.log(typeof obj) // 原生
        console.log(typeof str) // 原生
        console.log($.type(obj))
        console.log($.type(str))
        console.log('-------------------------------------------------------------------')

        // 4. $.isArray(obj)：判断是否是数组
        console.log(Array.isArray([])) // 原生
        console.log($.isArray([]))
        console.log('-------------------------------------------------------------------')

        // 5. $.isFunction(obj)：判断是否是函数
        console.log(typeof obj.setName === 'function') // 原生
        console.log($.isFunction(obj.setName))

        // 6. $.parseJSON(json)：解析json字符串转换为js对象/数组
        var json = `
                    {
                      "name": "Tom",
                      "age": 12
                    }
                    `
        console.log(json)
        console.log(JSON.parse(json)) // 原生
        console.log($.parseJSON(json))
```

### 3.3. ajax

## 4. 使用jQuery对象

### 4.1. 属性

```js
        /*
            属性：
                1. 操作任意属性
                    attr()：操作属性值为非布尔值的属性
                    removeAttr()
                    prop()：专门操作属性值为布尔值的属性
                2. 操作class属性
                    addClass()
                    removeClass()
                3. 操作HTML代码/文本
                    html()
                    val()
         */

        // 1. 读取第一个div的title属性
        var $divs = $('div')
        console.log($('div:first').attr('title'))

        // 2. 给所有的div设置name属性(value为colg)
        $divs.attr('name', 'colg')

        // 3. 移除所有div的title属性
        $divs.removeAttr('name')

        // 4. 给所有的div设置class='colgCss'
        $divs.attr('class', 'colgCss')

        // 5. 给所有的div添加class='abc
        $divs.addClass('abc')

        // 6. 移除所有div为colgCss的class
        $divs.removeClass('colgCss')

        // 7. 得到最后一个li的标签体文本
        console.log($('li:last').html())

        // 8. 设置第一个li的标签体为"<h1>mmmmmm</h1>"
        $('li:first').html(`<h1>mmmmmm</h1>`)

        // 9. 得到输入框中的value值
        var $text = $(':text')
        console.log($text.val())

        // 10. 将输入框的值设置为colg
        $text.val('colg')

        // 11. 点击'全选'按钮实现全选
        var $checkboxs = $(':checkbox')
        $(':button:first').click(function () {
            $checkboxs.prop('checked', true)
        })

        // 12. 点击'全不选'按钮实现全不选
        $(':button:last').click(function () {
            $checkboxs.prop('checked', false)
        })
```

### 4.2. CSS

#### 4.2.1. CSS

```js
        /*
            css()：设置css样式/读取css值
         */

        // 1. 得到第一个p标签的颜色
        console.log($('p:first').css('color'))

        // 2. 设置所有p标签的文本颜色为red
        $('p').css('color', 'red')

        // 3. 设置第2个p的字体颜色(yellow), 背景(blue), 宽(330px), 高(30px)
        $('p:eq(1)').css({
            color: 'yellow',
            background: 'blue',
            width: 300,
            height: 30
        })
```

#### 4.2.2. 位置

##### 4.2.2.1. 位置坐标

```js
        /*
            获取/设置标签的位置
                offset()：相对页面左上角的坐标
                position()：相对于父元素左上角的坐标
         */

        // 1. 点击 btn1
        $('#btn1').click(function () {
            // 打印 div1 相对于页面左上角的位置
            var $div1 = $('.div1')
            console.log($div1.offset())

            // 打印 div2 相对于页面左上角的位置
            var $div2 = $('.div2')
            console.log($div2.offset())

            // 打印 div1 相对于父元素左上角的位置
            console.log($div1.position())

            // 打印 div2 相对于父元素左上角的位置
            console.log($div2.position())
        })

        // 2. 点击 btn2
        $('#btn2').click(function () {
            // 设置 div2 相对于页面左上角的位置
            var $div2 = $('.div2')
            $div2.offset({
                left: 50,
                top: 100
            })
        })
```

##### 4.2.2.2. 元素滚动

```js
        /*
            元素滚动
                1. scrollTop()：读取/设置滚动条的Y坐标
                2. $(document.documentElement, document.body).scrollTop()：
                	读取页面滚动条的Y坐标（兼容chrome和IE）
                3. $('html, body').scrollTop(60)：页面滚动到指定位置（兼容chrome和IE）
         */

        // 1. 得到div滚动条的坐标
        var $div = $('div')
        $('#btn1').click(function () {
            console.log($div.scrollTop())
        })

        // 2. 得到页面滚动条的坐标
        $('#btn2').click(function () {
            console.log($('html, body').scrollTop()) // 兼容chrome和IE
            console.log($(document.documentElement, document.body).scrollTop()) // 优化
        })

        // 3. 让div的滚动条滚动到指定位置
        $('#btn3').click(function () {
            $div.scrollTop(100)
        })

        // 4. 让页面的滚动条滚动到指定位置
        $('#btn4').click(function () {
            // $('html, body').scrollTop(60) // 兼容chrome和IE
            $(document.documentElement, document.body).scrollTop(60)
        })
```

#### 4.2.3. 尺寸

```js
        /*
            元素尺寸
                1. 内容尺寸
                    height()：height
                    width()：width
                2. 内部尺寸
                    innerHeight()：height + padding
                    innerWidth()：width + padding
                3. 外部尺寸
                    outerHeight(false/true)：height + padding + border 如果是true，加上margin
                    outerWidth(false/true)：width + padding + border 如果是true，加上margin
         */

        var $div = $('div')
        // 1. 内容尺寸
        console.log($div.width(), $div.height()) // 100 150

        // 2. 内部尺寸
        console.log($div.innerWidth(), $div.innerHeight()) // 120 170

        // 3. 外部尺寸
        console.log($div.outerWidth(), $div.outerHeight()) // 140 190
        console.log($div.outerWidth(true), $div.outerHeight(true)) // 160 210
```

### 4.3. 筛选

#### 4.3.1. 过滤

```js
        /*
            在jQuery对象中的元素对象数组中过滤出一部分元素来
                1. first()
                2. last()
                3. eq(index|-index)
                4. filter(selector)
                5. not(selector)
                6. has(selector)
         */

        var $lis = $('ul > li')
        // 1. ul下li标签第一个
        // $lis[0].styl.background = 'red' // dom元素
        $lis.first().css('background', 'red')

        // 2. ul下li标签的最后一个
        $lis.last().css('background', 'blue')

        // 3. ul下li标签的第二个
        $lis.eq(1).css('background', 'yellow')

        // 4. ul下li标签中title属性为hello的
        $lis.filter('[title=hello]').css('background', 'gray')

        // 5. ul下li标签中title属性不为hello的
        // $lis.filter('[title!=hello]').css('background', 'gray')
        $lis.not('[title=hello]').css('background', 'black')

        // 6. ul下li标签中有title属性，且title不为hello的
        // $lis.filter('[title][title!=hello]').css('background', 'purple')
        $lis.filter('[title]').not('[title=hello]').css('background', 'purple')

        // 6. ul下li标签中有span子标签的
        $lis.has('span').css('background', 'palegreen')
```

#### 4.3.2. 查找

```js
        /*
            在已经匹配出的元素集合中根据选择器查找孩子/父母/兄弟标签
                1. children()：子标签中找
                2. find()：后代标签中找
                3. parent()：父标签
                4. prevAll()：前面所有的兄弟标签
                5. nextAll()：后面所有的兄弟标签
                6. siblings()：前后所有的兄弟标签
         */

        var $ul = $('ul')
        // 1. ul标签的第2个span子标签
        // $ul.children('span:eq(1)').css('background', 'red')
        $ul.children('span').eq(1).css('background', 'red')

        // 2. ul标签的第2个span后代标签
        $ul.find('span').eq(1).css('background', 'yellow')

        // 3. ul标签的父标签
        $ul.parent().css('background', 'palegreen')

        // 4. id为cc的li标签的前面的所有li标签
        var $li = $('#cc')
        $li.prevAll('li').css('background', 'purple')

        // 5. id为cc的li标签的所有兄弟li标签
        $li.siblings('li').css('background', 'grey')
```

### 4.4. 文档处理

```js
        /*
            文档处理
                1. 添加元素
                    append(content)：向当前匹配的所有元素内部的最后插入指定内容
                    prepend(content)：向当前匹配的所有元素内部的最前面插入指定内容
                    before(content)：将指定内容插入到当前所有匹配元素的前面
                    after(content)：将指定内容插入到当前所有匹配元素的后面
                2. 替换元素
                    replaceWith(content)：用指定内容替换所有匹配的标签
                3. 删除元素
                    empty()：删除所有匹配元素的子元素
                    remove()：删除所有匹配的元素
         */

        var $ul1 = $('#ul1')
        // 1. 向id为ul1的ul下添加一个span(最后)
        // $ul1.append(`<span>append()添加的span</span>`)
        $(`<span>append()添加的span</span>`).appendTo($ul1)

        // 2. 向id为ul1的ul下添加一个span(最前)
        // $ul1.prepend(`<span>prepend()添加的span</span>`)
        $(`<span>prepend()添加的span</span>`).prependTo($ul1)

        // 3. 在id为ul1的ul下的li(title为hello)的前面添加span
        $ul1.children('li[title=hello]').before(`<span>before()添加的span</span>`)

        // 4. 在id为ul1的ul下的li(title为hello)的后面添加span
        $ul1.children('li[title=hello]').after(`<span>after()添加的span</span>`)

        var $ul2 = $('#ul2')
        // 5. 将在id为ul2的ul下的li(title为hello)全部替换为p
        $ul2.children('li[title=hello]').replaceWith(`<p>replaceWith()替换的p</p>`)

        // 6. 移除id为ul2的ul下的所有li
        $('#ul2 > li').remove()
```

### 4.5. 事件

#### 4.5.1. 事件处理

```js
        /*
            事件绑定与解绑：
                1. 事件绑定（2种）
                    1.1. eventName(function() {})：
                    	绑定对应事件名的监听，例如：$('#div').click(function() {})
                    1.2. on(eventName, function() {})：
                    	通用的绑定事件监听，例如：$('#div').on('click', function() {})
                    优缺点：
                        eventName：编码方便，但只能添加一个监听，且有的事件监听不支持
                        on：编码不方便，可以添加多个监听，且更通用
                2. 事件解绑
                    off(eventName)：移除一个或多个事件
                3. 事件的坐标
                    event.clientX, event.clientY：相对于窗口的左上角
                    event.pageX, event.pageY：相对于页面的左上角
                    event.offsetX, event.offsetY：相对于事件元素左上角
                4. 事件相关处理
                    event.stopPropagation()：停止事件冒泡
                    event.preventDefault()：阻止事件默认行为
         */

        /*
            区别mouseover与mouseenter？
                mouseover：在移入子元素时也会触发，对应mouseout
                mouseenter：只在移入到当前元素时才触发，对应mouseleave，
                			hover()使用的就是mouseenter、mouseleave
         */

        // 1. 给.out绑定点击监听(用两种方法绑定)
        var $out = $('.out')
        $out.click(function () {
            console.log('click out')
        })

        $out.on('click', function () {
            console.log('on click out')
        })

        // 2. 给.inner绑定鼠标移入和移出的事件监听(用3种方法绑定)
        var $inner = $('.inner')
        $inner
            .mouseenter(function () { // 鼠标移入
                console.log('mouseenter 鼠标移入')
            })
            .mouseleave(function () { // 鼠标移出
                console.log('mouseleave 鼠标移出')
            })

        $inner
            .on('mouseenter', function () {
                console.log('on mouseenter 鼠标移入')
            })
            .on('mouseleave', function () {
                console.log('on mouseleave 鼠标移出')
            })

        $inner.hover(function () {
            console.log('hover 鼠标移入')
        }, function () {
            console.log('hover 鼠标移出')
        })

        // 3. 点击btn1解除.inner上的所有事件监听
        $('#btn1').click(function () {
            $inner.off()
        })

        // 4. 点击btn2解除.inner上的mouseenter事件
        $('#btn2').click(function () {
            $inner.off('mouseenter')
        })

        // 5. 点击btn3得到事件坐标
        $('#btn3').click(function (event) { // 事件对象
            console.log(event.clientX, event.clientY) // 原点为窗口的左上角
            console.log(event.pageX, event.pageY) // 原点为页面的左上角
            console.log(event.offsetX, event.offsetY) // 原点为事件元素的左上角
            console.log('---------------------------------------------------------------')
        })

        // 6. 点击.inner区域, 外部点击监听不响应
        $inner.click(function (event) {
            console.log('click inner')
            // 停止事件冒泡
            event.stopPropagation()
        })

        // 7. 点击链接, 页面不要跳转
        $('#test4').click(function (event) {
            // 阻止事件默认行为
            event.preventDefault()
        })
```

#### 4.5.2. 事件委派

```js
        /*
            1. 事件委派（委托/代理）
                将多个子元素（li）的事件监听委托给父辈元素（ul）处理
                监听回调是加载了父辈元素上
                当操作任何一个子元素（li）时，事件会冒泡到父辈元素（ul）
                父辈元素不会直接处理事件，而是根据event.target得到发生事件的子元素（li），
                	通过这个子元素调用事件回调函数
            2. 事件委派的2方
                委派方：业主 li
                被委派方：中介 ul
            3. 使用事件委派的好处
                添加新的子元素，自动有事件响应处理
                减少事件监听的数量：n ==> 1
            4. jQuery的事件委派API
                设置事件委派：
                	$(parentSelector).delegate(childrenSelector, eventName, callback) 
                	// 回调函数中的this是子元素
                移除事件委派：$(parentSelector).undelegate(eventName)
         */

        // 1. 点击 li 背景就会变为红色，设置事件委派
        $('ul').delegate('li', 'click', function () {
            // console.log(this) // 发生事件的li元素
            this.style.background = 'red'
        })

        // 2. 点击 btn 就添加一个 li
        $('#btn1').click(function () {
            $('ul').append(`<li>新增的li</li>`)
        })

        // 3. 删除ul上的事件委派的监听器
        $('#btn2').click(function () {
            $('ul').undelegate('click')
        })
```

### 4.6. 动画效果

#### 4.6.1. 淡入淡出

```js
        /*
            淡入淡出：不断改变元素的透明度（opacity）来实现的
                1. fadeIn()：带动画的显示
                2. fadeOut()：带动画隐藏
                3. fadeToggle()：带动画切换显示/隐藏
         */

        var $div1 = $('.div1')
        // 1. 点击btn1，慢慢淡出
        $('#btn1').click(function () {
            $div1.fadeIn()
        })

        // 2. 点击btn2，慢慢淡入
        $('#btn2').click(function () {
            $div1.fadeOut()
        })

        // 3. 点击btn3，淡出/淡入切换，动画结束时提示"动画结束了"
        $('#btn3').click(function () {
            $div1.fadeToggle('slow', function () {
                alert('动画结束了')
            })
        })
```

#### 4.6.2. 滑动

```js
        /*
            滑动动画：不断改变元素的高度实现
                1. slideDown()：带动画的展开
                2. slideUp()：带动画的收缩
                3. slideToggle()：带动画的切换展开/收缩
         */

        var $div1 = $('.div1')
        // 1. 点击btn1, 向上滑动
        $('#btn1').click(function () {
            $div1.slideUp()
        })

        // 2. 点击btn2, 向下滑动
        $('#btn2').click(function () {
            $div1.slideDown()
        })

        // 3. 点击btn3, 向上/向下切换
        $('#btn3').click(function () {
            $div1.slideToggle('slow', function () {
                alert('动画结束了')
            })
        })
```

#### 4.6.3. 显示与隐藏

```js
        /*
            显示与隐藏，默认没有动画，动画（opacity/height/width）
                1. show()：（不）带动画的显示
                2. hide()：（不）带动画的隐藏
                3. toggle()：（不）带动画的切换显示/隐藏
         */

        var $div1 = $('.div1')
        // 1. 点击btn1, 立即显示
        $('#btn1').click(function () {
            $div1.show()
        })

        // 2. 点击btn2, 慢慢显示
        $('#btn2').click(function () {
            $div1.show('slow')
        })

        // 3. 点击btn3, 慢慢隐藏
        $('#btn3').click(function () {
            $div1.hide('slow')
        })

        // 4. 点击btn4, 切换显示/隐藏
        $('#btn4').click(function () {
            $div1.toggle()
        })
```

#### 4.6.4. 自定义动画

```js
        /*
            jQuery动画本质：在指定时间内不断改变元素样式值来实现的
                1. animate()：自定义动画效果的函数
                2. stop()：停止动画
         */

        var $div1 = $('.div1')
        // 1. 逐渐扩大
        $('#btn1').click(function () {
            // 1.1. 宽/高都扩为200px
            /*
            $div1.animate({
                width: 200,
                height: 200
            }, 'slow')
            */

            // 1.2. 宽先扩为200px, 高后扩为200px
            $div1
                .animate({
                    width: 200
                }, 'slow')
                .animate({
                    height: 200
                }, 'fast')
        })

        // 2. 移动到指定位置
        $('#btn2').click(function () {
            // 2.1. 移动到(500, 100)处
            /*
            $div1.animate({ // 向右下移动
                left: 500,
                top: 100
            }, 'slow')
            */

            // 2.2. 移动到(100, 20)处
            $div1.animate({ // 向左上移动
                left: 100,
                top: 20
            }, 'fast')
        })

        // 3.移动指定的距离
        $('#btn3').click(function () {
            // 3.1. 移动距离为(100, 50)
            /*
            $div1.animate({
                left: '+=100',
                top: '+=50'
            }, 'slow')
            */

            // 3.2. 移动距离为(-100, -20)
            $div1.animate({
                left: '-=100',
                top: '-=20'
            }, 'slow')
        })

        // 停止动画
        $('#btn4').click(function () {
            $div1.stop()
        })
```

### 4.7. jQuery对象使用特点

- 链式调用
  - 调用jQuery对象的任何方法后返回的还是当前jQuery对象
- 读写合一
  - 读：内部第一个dom元素
  - 写：内部所有的dom元素

## 5. jQuery插件

### 5.1. 扩展插件

```js
        /*
            扩展插件
                $.extend(object)：扩展jQuery的工具方法
                $.fn.extend(object)：扩展jQuery对象的方法
         */

;(function () {
    // 1. 给 $ 添加4个工具方法
    $.extend({
        // 1.1. min(a, b) : 返回较小的值
        min: function (a, b) {
            return a < b ? a : b
        },
        // 1.2. max(c, d) : 返回较大的值
        max: function (a, b) {
            return a > b ? a : b
        },
        // 1.3. leftTrim(str) : 去掉字符串左边的空格
        leftTrim: function (str) {
            return str.replace(/^\s+/, '')
        },
        // 1.4. rightTrim(str) : 去掉字符串右边的空格
        rightTrim: function (str) {
            return str.replace(/\s+$/, '')
        }
    })

    // 2. 给jQuery对象 添加3个功能方法
    $.fn.extend({
        // 2.1. checkAll() : 全选
        checkAll: function () {
            this.prop('checked', true)
        },
        // 2.2. unCheckAll() : 全不选
        unCheckAll: function () {
            this.prop('checked', false)
        },
        // 2.3. reverseCheck() : 反选
        reverseCheck: function () {
            // this 是jQuery对象
            this.each(function () {
                // this 是dom元素
                this.checked = !this.checked
            })
        }
    })
})()
```

