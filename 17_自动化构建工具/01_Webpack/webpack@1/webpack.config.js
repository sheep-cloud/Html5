const path = require('path')                    // path内置的模块，用来设置路径。

module.exports = {
    entry: './src/js/entry.js',                 // 入口路径配置
    output: {                                   // 出口配置
        path: path.join(__dirname, 'build'),    // 输出路径
        filename: 'js/bundle.js'                // 输出文件名
    },
    module: {                                   // 模块加载器配置
        loaders: [
            // 所有css文件声明使用css-loader和style-loader加载器
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                // 如果图片小于limit就会进行Base64编码
                options: {
                    limit: 1000
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'), // 内置服务器动态加载页面所在的目录
        historyApiFallback: true,               // 设置为true的时候所有的跳转都指向index.html
        port: 8080,                             // 设置端口号，不设置时候默认为 8080
        inline: true                            // 设置为true的时候会自动刷新(有的版本需要配合hot: true使用)
    }
}