/*
 * @Author: your name
 * @Date: 2019-12-19 11:39:21
 * @LastEditTime: 2019-12-19 11:39:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\.eslintrc.js
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // 禁止使用 var
        'no-var': "error",
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ]
    }
}