var path = require('path');

module.exports = {
    entry: './layer.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'layer.js'
    },
    externals: {
        "jquery": true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            use: ["url-loader?limit=12000"]
        }]
    }
};
