/*
 * @Author: your name
 * @Date: 2019-12-31 18:16:59
 * @LastEditTime : 2019-12-31 18:18:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\vue\test.js
 */
const {$watch}=require('./avtivity.js')
let a = {
    b: 100,
    c: 200
}

const callback = function(newValue, oldValue) {
    console.log(`新值为：${newValue}，旧值为：${oldValue}`)
}

$watch(a, 'a.b', callback)
$watch(a, 'a.c', callback)

a.b = 101 
a.c = 201