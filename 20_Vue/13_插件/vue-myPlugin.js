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