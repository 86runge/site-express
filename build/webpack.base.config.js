var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//路径是相对于package.json所在路径
var entry_map = {
    'index': '../src/app.js',
};
module.exports = {
    entry: entry_map,
    devtool: 'source-map',
    output: {
        path: path.resolve(process.cwd(), 'dist/'),
        //[name]-[hash].js可以指定hash值。
        filename: '[name]-[hash].js',
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)|(global\/lib\/)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                //!代表先执行 ？是传递给loader的参数，?sourceMap表示使用sourceMap， js使用sourcemap通过devtool: sourcemap来指定。
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
            }
        ]
    }
};