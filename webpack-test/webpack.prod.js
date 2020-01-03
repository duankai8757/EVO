/*
 * @Author: your name
 * @Date: 2019-12-19 20:09:32
 * @LastEditTime : 2020-01-03 10:45:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\webpack-test\webpack.prod.js
 */
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map'
 });