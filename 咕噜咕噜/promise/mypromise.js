const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED'
const REJECTED = 'REJECTED'
/**
 * 实现Promise的基本框架 （构造函数）
 * 增加状态机
 * 实现then方法
 * 实现异步调用
 * 实现then的链式调用
 * 实现catch的异常处理
 * @class Mypromise
 */
class Mypromise {
    constructor(executor) {
        this.value = null;
        this.reason = null;
        this.state = PENDING;
        this.onFullfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value) => {
            if (this.state = PENDING) {
                this.value = value;
                this.state = FULLFILLED;

                this.onFullfilledCallbacks.forEach((onFullfilledCallback) => {
                    onFullfilledCallback()
                });
            }
            console.log('Promise state is ', this.state)
        }

        const reject = (reason) => {
            if (this.state = PENDING) {
                this.reason = reason;
                this.state = REJECTED;
                this.onRejectedCallbacks.forEach((onRejectedCallback) => {
                    onRejectedCallback()
                });
            }
            console.log('Promise state is ', this.state)
        }
        //函数同步执行
        try {
            executor(resolve, reject)
        } catch (reason) {
            console.log("Mypromise -> constructor -> reason", reason)
            reject(reason)
        }
    }
    then(onFullfilled, onRejected) {
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : function (v) {
            return v
        }
        onRejected = typeof onRejected === 'function' ? onRejected : function (r) {
            throw r
        }
        let promise2;
        promise2 = new Mypromise((resolve, reject) => {
            debugger
            if (this.state === PENDING) {
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onFullfilled(this.value);
                        this.resolvuePromise(promise2, x, resolve, reject)
                    } catch (reason) {
                        reject(reason)
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason)
                        this.resolvuePromise(promise2, x, resolve, reject)
                    } catch (reason) {
                        reject(reason)
                    }
                })
            }
            if (this.state === FULLFILLED) {
                try {
                    let x = onFullfilled(this.value);
                    this.resolvuePromise(promise2, x, resolve, reject)
                } catch (reason) {
                    reject(reason)
                }
            } else if (this.state === REJECTED) {
                try {
                    let x = onRejected(this.reason)
                    this.resolvuePromise(promise2, x, resolve, reject)
                } catch (reason) {
                    reject(reason)
                }
            }
        })
        return promise2
    }

    resolvuePromise(promise2, x, resolve, reject) {
        if (promise2 === x) {
            reject(new TypeError('Chaining cycle'));
        }
        if (x && typeof x === 'object' || typeof x === 'function') {
            let used
            try {
                let then = x.then;
                if (typeof then === 'function') {
                    then.call(x, (y) => {
                        if (used) return;
                        used = true
                        resolvuePromise(promise2, y, resolve, reject);
                    }, (r) => {
                        if (used) return;
                        used = true;
                        reject(r);
                    })
                } else {
                    if (used) return;
                    used = true;
                    resolve(x);
                }
            } catch (reason) {
                if (used) return
                used = true
                reject(reason)

            }
        } else {
            resolve(x)
        }
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }
}

module.exports = Mypromise  