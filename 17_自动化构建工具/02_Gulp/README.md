#  Gulp

## 1. Gulp介绍

- 中文主页：https://www.gulpjs.com.cn/
- gulp是与grunt功能类似的前端项目工具，也是基于node.js的自动**任务运行器**
- 能自动的完成`js/coffee/sass/less/html/image/css`等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
- gulp更高效（异步多任务），更易于使用，插件高质量

## 2. 开启项目

### 2.1. 初始化项目

```ini
npm init
```

```json
{
  "name": "gulp-3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "null"
  },
  "author": "colg",
  "license": "ISC"
}
```

![](http://ww1.sinaimg.cn/large/005PjuVtgy1fw2hd7k92gj307505st8i.jpg)

### 2.2. 安装gulp

```ini
全局安装: npm install gulp -g
局部安装: npm install gulp --save-dev
```

- 配置gulpfile.js

  ```js
  // 引入gulp模块，gulp不支持es6
  var gulp = require('gulp')
  
  // 自定义任务
  gulp.task('任务名', function () {
      // 配置任务的操作
  })
  
  // 默认任务，异步执行
  gulp.task('default', [])
  ```

- 构建命令

  ```ini
  gulp
  ```

### 2.3. 使用gulp插件

#### 2.3.1. 相关插件

- `gulp-concat`：合并文件（js/css）
- `gulp-uglify`：压缩js文件
- `gulp-rename`：文件重命名
- `gulp-less`：编译less
- `gulp-clean-css`：压缩css
- `gulp-livereload`：实时自动编译刷新
- `gulp-htmlmin`：压缩html
- `gulp-livereload`：自动编译，监视插件
- `gulp-connect`：热加载，实时加载
- `open`：自动打开指定的url
- `gulp-load-plugins`：打包加载gulp插件

#### 2.3.2. 重要API

- `gulp.src(filePath/parhArr)`
  - 指向指定路径的所有文件，返回文件流对象
  - 用于读取文件
- `gulp.dest(dirPath/pathArr)`
  - 指向指定的所有文件夹
  - 用于向文件夹中输出文件
- `gulp.dask(name, [deps], fn)`
  - 定义一个任务
  - deps：数组，前置依赖任务
- `gulp.watch(glob, tasks)`
  - 监视文件的变化

#### 2.3.3. 处理js

- 创建js文件

  - `src/js/test1.js`

    ```js
    ;(function () {
        function foo(num1, num2) {
            return num1 + num2
        }
    
        console.log(foo(1, 2))
    })()
    ```

  - `src/js/test2.js`

    ```js
    ;(function () {
        var result = [1, 2, 3, 4, 5].map(function (item) {
            return item + 10
        })
        console.log(result)
    })()
    ```

- 下载插件（多个）

  ```ini
  npm install gulp-concat gulp-uglify gulp-rename --save-dev
  ```

- 配置`gulpfile.js`

  ```js
  // 引入gulp模块
  var gulp = require('gulp'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify')
  
  // 自定义任务
  gulp.task('任务名', function () {
      // 配置任务的操作
  })
  
  // 注册合并压缩js的任务
  gulp.task('js', function () {
      return gulp.src('src/js/*.js')              // 找到目标源文件，将数据读取到gulp的内存中
                 .pipe(concat('bundle.js'))       // 临时合并文件
                 .pipe(gulp.dest('dist/js'))      // 临时输出文件到本地
                 .pipe(uglify())                  // 压缩js文件
                 .pipe(rename({suffix: '.min'}))  // 重命名
                 .pipe(gulp.dest('dist/js'))
  })
  
  // 默认任务
  gulp.task('default', ['js'])
  
  ```

- 页面引入js

  ```html
  <script src="dist/js/bundle.min.js"></script>
  ```

- 打包测试

  ```ini
  gulp
  ```

- 页面效果

  ![](http://ww1.sinaimg.cn/large/005PjuVtgy1fw2ieddi6rj307m02ldfm.jpg)

#### 2.3.4. 处理css

- 创建css/less文件

  - `src/css/test1.css`

    ```css
    #div1 {
        width: 100px;
        height: 100px;
        background: green;
    }
    ```

  - `src/css/test2.css`

    ```css
    #div2 {
        width: 200px;
        height: 200px;
        background: blue;
    }
    ```

  - `src/less/test3.css`

    ```less
    @base: yellow;
    .index1 {color: @base;}
    .index2 {color: green;}
    ```

- 下载插件

  ```ini
  npm install gulp-less gulp-clean-css --save-dev
  ```

- 配置`gulpfile.js`

  ```js
  // 注册转换less的任务，在注册合并压缩css文件之前单独执行，不写return，则为同步执行
  gulp.task('less', function () {
      return gulp.src('src/less/*.less')
                 .pipe(less())                    // 编译less文件为css文件
                 .pipe(gulp.dest('src/css'))
  })
  
  // 注册合并压缩css文件，前置依赖任务：less
  gulp.task('css', ['less'], function () {
      return gulp.src('src/css/*.css')
                 .pipe(concat('bundle.css'))
                 .pipe(gulp.dest('dist/css'))     // 临时输出文件到本地
                 .pipe(rename({suffix: '.min'}))
                 .pipe(cleanCss({compatibility: 'ie8'}))
                 .pipe(gulp.dest('dist/css'))
  })
  
  // 默认任务
  gulp.task('default', ['js', 'less', 'css'])
  ```

- 页面引入css

  ```html
  <link rel="stylesheet" href="dist/css/bundle.min.css">
  <body>
      <div id="div1" class="index1">div1</div>
      <div id="div2" class="index2">div2</div>
  </body>
  ```

- 打包测试

  ```ini
  gulp
  ```

#### 2.3.5. 处理html

- 下载插件

  ```ini
  npm install gulp-htmlmin --save-dev
  ```

- 配置`gulpfile.js`

  ```js
  // 注册压缩html的任务
  gulp.task('html', function () {
      return gulp.src('index.html')
                 .pipe(htmlMin({collapseWhitespace: true}))   // 消除空格
                 .pipe(gulp.dest('dist'))
  })
  
  // 默认任务
  gulp.task('default', ['js', 'less', 'css', 'html'])
  ```

- 修改页面引入

  ```html
  <link rel="stylesheet" href="css/bundle.min.css">
  <script src="js/bundle.min.js"></script>
  ```

- 打包测试

  ```ini
  gulp
  ```

#### 2.3.6. 自动编译

- 下载插件

  ```ini
  npm install gulp-livereload --save-dev
  ```

- 配置`gulpfile.js`

  ```js
  // 所有的任务添加：.pipe(liveReload())              // 实时刷新
  
  // 注册监视任务
  gulp.task('watch', ['default'], function () {
      // 开启监听
      liveReload.listen()
      // 确认监听的目标以及绑定相应的任务
      gulp.watch('src/js/*.js', ['js'])
      gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css'])
  })
  ```

- 打包测试

  ```ini
  gulp watch
  ```

- 热加载（实时加载）

  - 下载插件

    ```ini
    npm install gulp-connect --save-dev
    # 启动后自动打开页面
    npm install open --save-dev
    ```

  - 注册热加载的任务

    ```js
    // 所有的任务添加：.pipe(connect.reload())        // 实时刷新
    
    // 注册监视任务（热加载）
    gulp.task('server', ['default'], function () {
        // 配置服务器的选项
        connect.server({
            root: 'dist',                           // 监视的原目标文件
            livereload: true,                       // 实时刷新
            port: 5000
        })
    
        // 自动打开指定的url
        open('http://localhost:5000')
    
        // 确认监听的目标以及绑定相应的任务
        gulp.watch('src/js/*.js', ['js'])
        gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css'])
    })
    ```

#### 2.3.7. 打包加载gulp插件

- 下载插件

  ```ini
  npm install gulp-load-plugins --save-dev
  ```

- 引用插件

  ```js
  // 其他插件不需要引入了
  var $ = require('gulp-load-plugins')
  ```

- 使用方法

  ```js
  // 所有插件用$引入，其他插件的方法名统一为$插件的功能名
  ```
