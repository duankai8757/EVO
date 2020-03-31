// const Promise = require('./mypromise.js')
const Promise = require('./promise-es5.js')
const mypromise = new Promise((resolve, reject) => {
    resolve(1);
})
//1,2
console.log("mypromise", mypromise)
mypromise.value=33
//3 
// mypromise.then((value) => {
//     console.log(value)
// }, (reason) => {
//     console.log(reason)
// })
//4
mypromise.then((value) => {
    console.log('value', value);
    return 2;
})
    .then((value) => {
        console.log(value)
    }, (reason) => {
        console.log(reason)
    })
