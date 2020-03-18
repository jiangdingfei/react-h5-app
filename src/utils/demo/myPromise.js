
const isFunction  = value => typeof value === 'function'
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
const resolvePromise = (promise2, x, resolve, reject) => {
  // promise2 和 x 不能一样
  if (promise2 === x) {
    return reject(
      new Error('不能一样')
    )
  }
  // promise 需要加个节流阀
  if((typeof x === 'object' && x !== null) || typeof x === 'function') {
    // 节流
    let call;
    try {
      let then = x.then
      if(typeof then === 'function') {
        then.call(x, y => {
          if(call) return
          call = true
          // 不能直接写
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if(call) return
          call = true
          reject(r)
        })
      } else {
        if(call) return
        call = true
        reject(x)
      }
    } catch(error) {
      if(call) return
      call = true
      reject(error)
    }
  } else {
    // 普通值
    resolve(x)
  }
}
export default class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined // 成功的返回值
    this.reason = undefined // 失败的返回值
    // 发布
    this.onResolveCallbacks = []
    this.onRejectCallbacks = []
    // 成功
    let resolve = value => {
      if (this.status === PENDING) {
        this.status = RESOLVED
        this.value = value
        // 发布
        this.onResolveCallbacks.forEach(fn => fn())
      }
    }
    // 失败
    let reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.value = reason
        // 发布
        this.onRejectCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch(error) {
      reject(error)
    }
  }
  then(onFullFilled, onRejected) {
    onFullFilled = isFunction(onFullFilled) ? onFullFilled : data => data
    onRejected = isFunction(onFullFilled) ? onFullFilled : error => {
      throw error
    }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFullFilled(this.value)
            // 会添加一个核心的方法 判断 x 和 promise2 的状态 决定promise2走成功还是失败
            resolvePromise(promise2, x, resolve, reject)
          } catch(error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.value)
            // 会添加一个核心的方法 判断 x 和 promise2 的状态 决定promise2走成功还是失败
            resolvePromise(promise2, x, resolve, reject)
          } catch(error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === PENDING) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFullFilled(this.value)
              // 会添加一个核心的方法 判断 x 和 promise2 的状态 决定promise2走成功还是失败
              resolvePromise(promise2, x, resolve, reject)
            } catch(error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.value)
              // 会添加一个核心的方法 判断 x 和 promise2 的状态 决定promise2走成功还是失败
              resolvePromise(promise2, x, resolve, reject)
            } catch(error) {
              reject(error)
            }
          }, 0)
        })
      }      
    })
    return promise2
    // if (this.status === 'fullFilled') {
    //   onFullFilled(this.value)
    // }
    // if (this.status === 'rejected') {
    //   onRejected(this.value)
    // }
    // if (this.status === PENDING) {
    //   this.onResolveCallbacks.push(() => {
    //     onFullFilled(this.value)
    //   })
    //   this.onRejectCallbacks.push(() => {
    //     onRejected(this.value)
    //   })
    // }
  }
}