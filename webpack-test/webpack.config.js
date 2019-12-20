/*
 * @Author: duankai
 * @Date: 2019-12-19 20:09:32
 * @LastEditTime : 2019-12-19 20:26:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\h5-sdk\webpack.config.js
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};