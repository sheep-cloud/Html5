// 引入gulp模块
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    cleanCss = require('gulp-clean-css'),
    htmlMin = require('gulp-htmlmin'),
    liveReload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    open = require('open')

// 自定义任务
gulp.task('任务名', function () {
  // 配置任务的操作
})

// 注册合并压缩js的任务
gulp.task('js', function () {
  return gulp.src('src/js/*.js')                    // 找到目标源文件，将数据读取到gulp的内存中
      .pipe(concat('bundle.js'))                    // 临时合并文件
      .pipe(gulp.dest('dist/js'))                   // 临时输出文件到本地
      .pipe(uglify())                               // 压缩js文件
      .pipe(rename({suffix: '.min'}))               // 重命名
      .pipe(gulp.dest('dist/js'))
      .pipe(liveReload())                           // 实时刷新
      .pipe(connect.reload())
})

// 注册转换less的任务，在注册合并压缩css文件之前单独执行，不写return，则为同步执行
gulp.task('less', function () {
  return gulp.src('src/less/*.less')
      .pipe(less())                                 // 编译less文件为css文件
      .pipe(gulp.dest('src/css'))
      .pipe(liveReload())                           // 实时刷新
      .pipe(connect.reload())
})

// 注册合并压缩css文件，前置依赖任务：less
gulp.task('css', ['less'], function () {
  return gulp.src('src/css/*.css')
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('dist/css'))                  // 临时输出文件到本地
      .pipe(rename({suffix: '.min'}))
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'))
      .pipe(liveReload())                           // 实时刷新
      .pipe(connect.reload())
})

// 注册压缩html的任务
gulp.task('html', function () {
  return gulp.src('index.html')
      .pipe(htmlMin({collapseWhitespace: true}))    // 消除空格
      .pipe(gulp.dest('dist'))
      .pipe(liveReload())                           // 实时刷新
      .pipe(connect.reload())
})

// 注册监视任务
gulp.task('watch', ['default'], function () {
  // 开启监听
  liveReload.listen()
  // 确认监听的目标以及绑定相应的任务
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css'])
})

// 注册监视任务（热加载）
gulp.task('server', ['default'], function () {
  // 配置服务器的选项
  connect.server({
    root: 'dist',                                   // 监视的原目标文件
    livereload: true,                               // 实时刷新
    port: 5000
  })

  // 自动打开指定的url
  open('http://localhost:5000')

  // 确认监听的目标以及绑定相应的任务
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css'])
})

// 默认任务
gulp.task('default', ['js', 'less', 'css', 'html'])
