/**
 * author: huweijian
 * Date: 2018/11/1 - 10:52 AM
 * Name: webpack.config.js
 * Desc:
 */
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
