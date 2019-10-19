# 异步：异步编程之Promise

Promise是第二种异步编程方法！Promise和模块化规范一样，都出自于 CommonJS 规范，但是它最终被 JS 官方所采用，现在它已经成为了社区所最推荐的一种异步编程解决方案！因此，需要重点讲一下这个Promise！

Promise是啥意思？

就如它的字面单词意思一样，即「承诺」之意，它承诺你现在还得不到一个结果，但是在未来等到确定之后，就会给你一个结果，而这听起来就像是一个渣男所说的话一样！

总之，Promise其实就是这样一个渣男！

回到 Node.js ，Promise的意思就是说「在当前这个事件循环里边，它是一个没有确切结果的东西，但是在未来的一个事件循环里边，它会给到你结果！」

当然Promise ，不仅是个宅男，它还是个状态机！

它有3个状态

* pending
* fulfilled/resovled
* rejected

![三种状态的切换](img/08/2019-10-19-18-28-32.png)

pending表示还咩有得到结果的状态，然后它会从该pending态扭转到resoveled态 或者是 rejected态。

fulfilled 态也可以叫做 resoveled态，代表Promise 得到一个正常的返回，得到一个确切的结果，就会进入这个 resoveled态.

但是如果得到一个错误的结果，那么Promise 就会进入rejected态

以上就是Promise 状态扭转的一个方式啦！

从实际代码来看一下，这个状态扭转是怎样子的：

1. new 一个 Promise ，并传入一个函数参数，而该函数参数有两个形参，分别是resolve和reject
2. 这两个参数的含义：resolve会把当前这个Promise 实例扭转到 resoveled态 ，而reject则是扭转到 rejected态

测试代码如下：

需求：我希望这个Promise 对象能在500ms之后从pending态扭转为 resoveled态 

检测效果：800ms查看这个Promise 对象的状态，由于终端不好展示测试效果，所以可以把代码搞定浏览器里边去执行（搞个立即执行函数就行）！毕竟Promise 已经成为了JS 的官方标准，所以这是可以在Chrome里边调试的！

``` js
(function() {
  const promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
      resolve()
      console.log(5)
    }, 500)
    console.log(2)
  })

  console.log(3)
  console.log(promise)

  setTimeout(() => {
    console.log(promise)
    console.log(6)
  }, 800)
  console.log(4)
})()
```

log结果：

![demo1](img/08/2019-10-19-19-12-42.png)

> 传给Promise的函数，其里边的代码是同步代码哈！

以上就是pending态到 resoveled态 的状态扭转过程！

同理，扭转为 rejected态也是如此：

``` js
(function() {
  const promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
      reject(new Error())
      console.log(5)
    }, 500)
    console.log(2)
  })
  console.log(3)
  console.log(promise)
  setTimeout(() => {
    console.log(promise)
    console.log(6)
  }, 800)
  console.log(4)
})()
```

log结果：

![demo2](img/08/2019-10-19-19-27-46.png)

关于那个错误：当一个Promise如果进入了 rejected态，而且如果这个错误又咩有被正确的捕捉的话，那这个错误就会被抛到JS 解释环境的全局了。说白了就是抛到浏览器的全局，或者是Node.js 的全局

> 看来我的理解有问题哈！错误确实抛在全局里边。而且在Node.js 环境里边，抛的是这样一个错误`UnhandledPromiseRejectionWarning: Error: hi`，该错误并咩有中断剩余的代码执行！即没有所谓的导致整个Node.js程序崩溃，之前在callback那节里边抛出一个粗错误是一个很严重的结果





