var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },    
    output: {
        path:path.resolve(__dirname,'build'),
        filename: '[name].js', //注意这里，用[name]可以自动生成路由名称对应的js文件
        chunkFilename: '[name].[chunkhash:5].chunk.js' //注意这里，用[name]可以自动生成路由名称对应的js文件
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.coffee$/,
                loader: 'coffee-loader'
            }, 
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            }, 
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader']// 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: ({ resource }) => (
        //         resource &&
        //         resource.indexOf('node_modules') >= 0 &&
        //         resource.match(/\.utils$/)
        //     )
        // }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor'],
        //     filename: 'vendor.utils'
        // }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'eleme-by-react',
            inject: 'body',
            chunks: ['main']
        })
    ]

};
