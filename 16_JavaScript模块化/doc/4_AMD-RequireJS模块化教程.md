## require.js使用教程
1. 下载require.js, 并引入
  * 官网: http://www.requirejs.cn/
  * github : https://github.com/requirejs/requirejs
  * 将require.js导入项目: js/libs/require.js 
2. 创建项目结构
  ```shell
  |-js
    |-libs
      |-require.js
    |-modules
      |-alerter.js
      |-dataService.js
    |-main.js
  |-index.html
  ```
3. 定义require.js的模块代码
  * dataService.js
    ```javascript
    // 定义没有依赖的模块
    define(function () {
        let name = 'dataService.js'
    
        function getName() {
            return name
        }
    
        // 暴露模块
        return {getName}
    })
    ```
  * alerter.js
    ```javascript
    // 定义有依赖的模块
    define(['dataService'], function (dataService) {
        let msg = 'alerter.js'
    
        function showMsg() {
            console.log(msg, dataService.getName())
        }
    
        // 暴露模块
        return {showMsg}
    })
    ```
4. 应用主(入口)js: main.js
  ```javascript
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
  ```

5. 页面使用模块:
    <script data-main="js/main" src="js/libs/require.js"></script>

------------------------------------------------------------------------

6. 使用第三方基于require.js的框架(jquery)
  * 将jquery的库文件导入到项目: 
    * js/libs/jquery-1.10.1.js
  * 在main.js中配置jquery路径
    ```javascript
            paths: {
                dataService: './modules/dataService',
                alerter: './modules/alerter',
                jquery: './libs/jquery-1.10.1',
                angular: './libs/angular',
            },
    ```
  * 在alerter.js中使用jquery
    ```javascript
    // 定义有依赖的模块
    define(['dataService', 'jquery'], function (dataService, $) {
        let msg = 'alerter.js'
    
        function showMsg() {
            console.log(msg, dataService.getName())
        }
    
        $('body').css('background', 'deeppink')
    
        // 暴露模块
        return {showMsg}
    })
    ```
------------------------------------------------------------------------

7. 使用第三方不基于require.js的框架(angular/angular-messages)
  * 将angular.js和angular-messages.js导入项目
    * js/libs/angular.js
    * js/libs/angular-messages.js
  * 在main.js中配置
    ```javascript
    (function () {
      require.config({
        //基本路径
        baseUrl: "js/",
        //模块标识名与模块路径映射
        paths: {
          //第三方库
          'jquery' : 'libs/jquery-1.10.1',
          'angular' : 'libs/angular',
          'angular-messages' : 'libs/angular-messages',
          //自定义模块
          "alerter": "modules/alerter",
          "dataService": "modules/dataService"
        },
        /*
         配置不兼容AMD的模块
         exports : 指定导出的模块名
         deps  : 指定所有依赖的模块的数组
         */
        shim: {
          'angular' : {
            exports : 'angular'
          },
          'angular-messages' : {
            exports : 'angular-messages',
            deps : ['angular']
          }
        }
      })
      //引入使用模块
      require( ['alerter', 'angular', 'angular-messages'], function(alerter, angular) {
        alerter.showMsg()
        angular.module('myApp', ['ngMessages'])
        angular.bootstrap(document,["myApp"])
      })
    })()
    ```
  * 页面:
    ```html
    <form name="myForm">
      用户名: <input type="text" name="username" ng-model="username" ng-required="true">
      <div style="color: red;" ng-show="myForm.username.$dirty&&myForm.username.$invalid">用户名是必须的</div>
    </form>
    ```