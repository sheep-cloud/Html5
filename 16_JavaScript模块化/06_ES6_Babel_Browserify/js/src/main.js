// 引入其他的模块

// 语法：import xxx from '路径'

// 引入第三方模块（jquery）
import $ from 'jquery'

import {foo, bar, bar2, DATA_ARR} from './module1'
import {fun, fun2} from './module2'
import module3 from './module3'

foo()
bar()
bar2()
console.log(DATA_ARR)

fun()
fun2()

console.log(module3)
module3.foo()

$('body').css('background', 'green')