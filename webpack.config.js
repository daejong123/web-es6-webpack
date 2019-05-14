const path = require('path');
const webpack = require('webpack');
// 插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    entry: {
        index: path.join(__dirname, 'modules', 'index.js'),
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    "presets": ["env"]
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        //持久化moduleId，主要是为了之后研究加载代码好看一点。
        new webpack.HashedModuleIdsPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html',
        host: '127.0.0.1',  // 指定 ip 或域名
        port: 7878, 
        open: true,  // 否自动打开浏览器
        hot: true,   // 是否启用热替换
        disableHostCheck: true, // 禁用 host 检查
        proxy: {},
        before () {} // 自定义中间件
    }
};