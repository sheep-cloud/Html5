;(function () {
    requirejs.config({
        // 基本的路径，出发点在根目录下，否则从main出发
        baseUrl: 'js/',
        // 模块标识名与模块路径映射
        paths: {
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery-1.10.1',
            angular: './libs/angular',
        },
        // angular特殊处理
        shim: {
            angular: {
                exports: 'angular',
            },
        },
    })

    // 引入使用模块
    requirejs(['alerter', 'angular'], function (alerter, angular) {
        alerter.showMsg()
        console.log(angular)
    })
})()