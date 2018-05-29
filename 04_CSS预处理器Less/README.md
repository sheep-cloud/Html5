# Less

## less
- less是一种动态样式语言，属于css预处理器的范畴，它扩展了CSS语言，增加了变量、Minxin、函数等特性，使用CSS更容易维护和扩展。
- Less既可以在客户端上运行，也可以借助Node.js在服务端运行。
- less的中文网站：http://lesscss.cn/
- bootstrap中less教程：http://www.bootcss.com/p/lesscss/

## Less编译工具
- koala 官网：http://koala-app.com/

## Less中的注释
- 以//开头的注释，不会被编译到css文件中
- 以/**/包裹的注释会被编译到css文件中

## Less中的变量
- 使用@来声明一个变量：@pink：pink；
    - 作为普通属性值来使用；直接@pink
    - 作为选择器和属性名：#@{selector的值}的形式
    - 作为URL：@{url}
    - 变量的延迟加载
    
## Less中的嵌套规则
- 基本嵌套规则
- &的使用