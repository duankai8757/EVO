/*
 * @Author: your name
 * @Date: 2020-01-02 17:25:09
 * @LastEditTime: 2020-01-02 17:26:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\webpack-test\webpack.dev.js
 */
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   }
 });