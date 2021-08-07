# 螺丝拧得好，火箭少不了

🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

```
进阶顺序

1、网络
2、vue
3、浏览器
4、webpack
5、node
6、js


web安全
css
html
性能优化
数据结构和算法
设计模式
跨端
项目
管理
```

# 一、JavaScript

### 相关专题

* 介绍下Set、Map、WeakSet 和 WeakMap 的区别？
* 什么是防抖和节流？有什么区别？如何实现？
* reduce的使用
* 模块化：说说commonjs和esmodule？
* 常见原生api的使用
* 基本数据类型和引用类型
* es6中的set（集合）和map（字典）的使用和对应的数据结构
* sort的实现，内部用的插入排序和快速排序（根据排序的量级用不同的方法）
* 说一下原型链，原型链实现继承
* 说下 js的内存泄漏，什么情况容易出现内存泄漏？怎么解决？垃圾回收机制是怎么样的？
* JS运行机制
* [闭包、js垃圾回收机制](https://github.com/liyayun713/Interview/blob/master/js/closure.md)
* 原型、构造函数、实例、原型链
* 如何实现继承、继承的几种方法
* 创建对象有几种方法
* 面向对象 vs 函数式编程
* 常用js设计模式
* 类型转换
* new运算符
* instanceof、typeof原理
* setTimeout、setInterval原理
* 数组去重、排序、乱序
* 深浅拷贝
* 作用域、this、call、apply、bind
* 函数柯里化
* JS浮点数精度问题
* 常用数组、字符串操作方法
* 函数节流、防抖
* 手写一些常用的函数（debounce、assign、new、Object.create、promise、bind等）
* js发展史简述

### 异步

* Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
* JavaScript异步的处理方式(回调、promise、generator、async)
* 手写promise的all方法
* 手写实现promise

### DOM

* 事件模型、事件流
* event
* 事件冒泡、事件捕获
* 事件委托的原理
* DOM事件的target和currentTarget的区别

### ES6

* 常用 es6 语法
* 使用es5实现es6的class

:zap::zap::zap: [简答题系列](https://github.com/liyayun713/Interview/blob/master/js/es6.md)

:zap::zap::zap: 专题系列

* let、const 和 var 区别
* class
* 拓展运算符
* 解构赋值
* 异步、promise、async、wait等。。。
* 箭头函数
* 字符串模板
* 模块化（import、export）
* ES6 中的 extends 和 ES5 中的 prototype 实现原理上区别
* 你们的前端项目主要用的是ES版本是多少？说出ES7中的3个性特性并说出应用场景？说出ES8中的三个新特性并说出应用场景？

### ES7/ES8...新特性

* 函数防抖、函数节流
* 事件循环（浏览器、Node）
* JavaScript的sort方法内部使用的什么排序？
* 函数式编程
* 手动实现parseInt
* 用JavaScript的异步实现sleep函数
* 原型、闭包

### Jquery

* on 和 bind 区别，on采用事件委托，新加子元素可以，bind不行

### [简答题系列](https://github.com/liyayun713/Interview/blob/master/js/js.md)

* JS有几种数据类型，其中基本数据类型有哪些？
* null和undefined的差异
* JS 的DOM 操作(Node节点获取及增删查改)
* 对数组 ['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'] 去重且排序
* 对数组[1,2,3,4,5,'6',7,'8','a','b','z']进行乱序
* JS 实现String.trim()方法
* navigator.userAgent

# 二、Vue

### 专题

* 生命周期
* 组件通信
* 双向数据绑定原理
* vue-router
* vuex
* diff算法
* 虚拟DOM
* MVVM、MVC

### 题目

* [1、vue双向数据绑定原理](https://github.com/miracle90/Interview/blob/master/vue/1.bind-principle.md)
* [2、vue-router原理](https://github.com/miracle90/Interview/blob/master/vue/2.router-principle.md)
* [3、计算属性和普通属性的区别是什么？](https://github.com/miracle90/Interview/blob/master/vue/3.data-computed.md)
* [4、Vuex和localStorage的区别是什么？](https://github.com/miracle90/Interview/blob/master/vue/4.vuex-localstorage.md)
* [5、说一下Vue的keep-alive是如何实现的，具体缓存的是什么？](https://github.com/miracle90/Interview/blob/master/vue/5.keep-alive.md)
* [6、对虚拟DOM的理解？虚拟DOM主要做了什么？虚拟DOM本身是什么？](https://github.com/miracle90/Interview/blob/master/vue/6.virtual-dom.md)
* 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
* 为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？
* Vue 组件间通信有哪几种方式？
* 直接给一个数组项赋值，Vue 能检测到变化吗？
* 页面刷新后的vuex的state数据丢失怎么办?
* 在哪个生命周期内调用异步请求？
* 使用过 Vue SSR 吗？说说 SSR？
* 说一下Vue 的父组件和子组件生命周期钩子函数执行顺序？
* Vue 中的 key 有什么作用?
* 说一下单向数流有什么好处？
* 怎么理解 vue 的单向数据流?
* 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？
* 子组件可以直接改变父组件的数据么？说说你的理由？(vue部分)
* 怎样理解 Vue 的单向数据流？
* v-model是如何实现的，语法糖实际是什么？
* 说一下Vue单页与多页的区别?
* 说一下Vue的$nextTick原理
* 说一下Vue template到render的过程
* 说一下Vue的生命周期以及每个阶段做的事情
* 你所理解的前端路由是什么?
* 介绍下 vue-router 中的导航钩子函数
* Vue是如何收集依赖的?
* 说说Vue开发如何针对搜索引擎做SEO优化?
* Vue-cli默认是单页面的，如果要开发多页面应该怎么办?
* Vue-router history 模式部署的时候要注意什么?server 端用 nginx 和 node 时候分别怎么处理?
* 为什么要用 vuex 或者 Redux?
* 说一下 vuex 的原理以及自己的理解
* vue 如何做权限校验?
* Vuex 怎么知道 state 是通过 mutation 修改还是外部直接修改的?
* Vue 调用 push 给数组添加元素会自动更新么?原因是什么?
* Vuex 的 action 和 mutation 的特性是什么?有什么区别?
* 说一下路由钩子在 vue 生命周期的体现?
* vue响应式原理，什么是mvvm
* vue原理，包括计算属性、依赖收集等等
* 虚拟DOM
* 双向数据绑定
* vue-lazyloader的原理，手写伪代码
* vue的响应式原理、依赖收集、监听数组、虚拟dom等等
* 手写vue双向绑定
* vue-router的原理
* 手写vue的mixin方法
* vue里面哪儿不会用到双向绑定
* 对vuex的理解，单向数据流
* 从渲染watcher到虚拟dom

* 源码分析
* MVVM、MVC、MVP
* MVVM是什么
* 生命周期
* vuex的作用及原理
* vue-router的实现
* 双向数据绑定原理、vue-router原理、nextTick原理
* 父子组件通讯
* 源码考察（双向数据绑定，虚拟DOM）
* [this.$set()原理](https://blog.csdn.net/XuM222222/article/details/99942522)
* 对MVC （react） MVVM（vue）的了解
* vue中nextTick的实现，结合浏览器事件循环机制说一下？
* 怎么看待virtual dom？
* ast语法树了解吗？
* vue-loader做了哪些事情？
* vue diff？
* vue computed和watch区别？
* computed怎么实现的缓存（dirty）？
* vue3双向数据绑定实现？
* createRender？和vue2有哪些不同
* 说下对函数式编程对的理解

### [简答题系列](https://github.com/liyayun713/Interview/blob/master/vue/vue.md)

### vue3

* 说一下对vue3.0的了解，vue3.0为什么要用代理?
* 说一下 Vue3 的 Composition API
* Vue3 为什么改为用 Proxy 监听数据，你能说出个条条框框？

### React

* How Virtual-DOM and diffing works in React
* react hooks 有哪些优缺点？
* useLayoutEffect 和 useEffect 区别是什么？
* redux主要解决了什么问题？它的工作原理是什么？与mobx的区别是什么？你觉得redux 和 mobx哪个更好？
* react中state有层级很深，比如a.b.c.d，如果只更新c属性有哪些办法？immutable.js实现的原理是什么？
* react中的diff算法的原理？传统的diff算法是怎么实现的？
* 说出一个react的特性？它的原理是什么？（我答的fiber）

### 框架综合

* Vue 和 React的区别是什么？你觉得哪个好？

# 三、网络

### [1、tcp/udp](./network/tcp_udp.md)

* 三次握手四次挥手

### 专题

* 七层网络协议、tcp/ip协议
* http/https
* http2/http3
* cdn
* dns
* websocket
* ip
* 简单请求？跨域？
* http状态码

### websocket

* websocket的使用场景（socket.io降级）？
* websocket握手过程

### [简答题系列]()

* HTTP2.0/HTTP3.0（队头阻塞？解决了哪些问题？哪有哪些问题未解决？）
* 为什么说https是安全的？https的证书校验过程是怎么样的？（这里一定要说的非常非常详细）证书校验用到了哪些算法？
* https一定是安全的吗？（考察https中间人劫持），有什么解决办法？
* 说出http2中至少三个新特性？你们有在实际中用过吗？
* 多问了http缓存机制问题，然后问了一下: 浏览器的默认缓存时间是多久？
* HTTP请求特征是什么？
* CDN有哪些优化静态资源加载速度的机制？
* 与HTTP相关的协议有哪些？TCP/IP DNS URI/URL HTTPS
* 说一下你理解的 HTTPS 中间人攻击 ?
* CDN 访问过程是什么？
* 说一下ajax/axios/fetch三者的区别
* SSL 连接断开后如何恢复 ?
* 什么是 CDN 服务?
* cdn分布式部署，如果处理用户请求最近的资源？
* DNS 解析的具体过程
* get请求传参长度存在限制，是http协议限制的么?
* 说一下get、post、put的区别
* 请求在客户端报413是什么错误,怎么解决呢?
* WebSocket 如何断开重连?
* 请解释下 http 中所有请求方法
* 说一下网络通信中引入滑动窗口的作用
* 说一下 http2 的特性，http2 怎么确保文件同时传输不会报错?
* tcp/ip网络层、三次握手，为什么不能两次握手
* tcp/ip网络层，http的特点
* http强行使用udp能实现吗？
* 写出 tcp 和 udp 协议的区别，并简单描述 tcp 连接建立和断开的过程
* POST、GET
* 谈谈你对 TCP 的理解

# 四、webpack

### 专题

* 常用配置

### 题目

* 怎么配webpack
* 项目中怎么用的webpack，怎么优化
* webpack热更新原理，使用过的插件
* 如何让webpack打包的速度提升50%？
* 用过哪些loader？plugin？
* 自己的插件实现了什么？怎么实现的？
* sourcemap原理？

# 五、浏览器

* 缓存相关（对比缓存？强缓存？对应请求头）cookie有哪些属性？
* 说一下从url输入到返回请求的过程
* 跨域
* 浏览器渲染过程
* 回流重绘
* load、DOMContentLoaded等等事件的触发顺序
* 浏览器发展史
* 从输入url到页面加载的过程
* 浏览器缓存（强制缓存、协商缓存）
* 浏览器渲染机制
* 重排、重绘
* 说下浏览器的进程、线程模型，chrome浏览器有多少个进程？线程模型中的每个线程都是干嘛用的？
* 说一下输入一个url地址后的全过程？dom渲染那块描述过于简单，能否说的更详细点？

### Service Worker、Web Worker

* 假设有一个非常复杂耗时的逻辑，代码逻辑已经最优了前提下要你优化，你有哪些办法？（这题其实是考察WebWorker）
* WebWorker有了解过吗？它有什么应用场景？ 刚刚的算法题可以用这个进行再次优化吗？

# 六、Node

* 项目里面用nodejs做了啥
* express框架的设计思想
* nodejs的eventEmitter的实现
* express的中间件系统是如何设计的
* express 动态路由匹配
* 实现一个事件发布订阅类，其实就是eventEmitter
* 画图表达 nodejs 的时间循环的工作流程
* node的事件循环机制？
* stream两种模式的区别？
* 看过koa源码都会觉得和express有很大不同，说一下？

# typescript

* 使用TS的优势有哪些?

# 性能优化

* 大列表的优化
* 懒加载（不在可视区域的资源可以延迟加载，监听滚轮，采用节流来防止函数被高频触发）
* 请问如何进行首页加载优化?
* 资源压缩合并，减少http请求
* 非核心代码异步加载（defer、async）
* 浏览器缓存
* 使用CDN
* 预解析DNS
* 懒加载、预加载
* 自己的项目做了哪些性能优化？除了webpack打包之类的优化外，http层面有做了哪些优化？gzip如何开启？gzip有多少个级别？

# 手写题

* 手写实现jsonp
* 手写bind
* 手写promise，基础架子，不用写all、race等api

# 架构

* 团队协作，以前的开发流程？

# 数据结构和算法

* 排序
* 堆栈、队列、链表
* 递归
* 快排、二分法查找
* 爬楼梯[https://leetcode-cn.com/problems/climbing-stairs/](https://leetcode-cn.com/problems/climbing-stairs/)尾递归优化
* 猴子吃香蕉[https://leetcode-cn.com/problems/koko-eating-bananas/](https://leetcode-cn.com/problems/koko-eating-bananas/)
* 回文字符串个数[https://leetcode-cn.com/problems/palindromic-substrings/](https://leetcode-cn.com/problems/palindromic-substrings/)(最长回文字符串)
* 反转单向链表怎么做？需要几个指针？都有什么作用？
* 手写快排，时间复杂度，优化
* 用二分法移除掉一个字符串中所有的字母字符。

# 设计模式

* 实现一个发布订阅系统，包括on、emit、off等等

# 计算机基础

* 操作系统发生死锁的原因及如何避免死锁

# 应用专题

* 项目里面的前端鉴权是怎么实现的
* 线上日志是如何处理的
* 项目模块规划、项目如何部署、如何优化
* 前端持久化的方式、区别
* 怎么判断一个点是否在圆形内、正方形内
* 设计一个单点登录的系统，类似阿里系那种

# 前端监控

* 要你设计一个前端监控方案，你打算怎么做。


# 知识点整理

### 腾讯、今日头条面试总结
* js基础（原型、闭包、bind、函数节流等）
* 异步（promise、async）
* http协议（tcp、https、udp、加密过程等）
* 设计模式（观察者模式）
* Node、CDN

### 面试重点知识总结

* 登陆问题（cookie、session、token）
* https
* webpack相关（原理、优化、loader）
* ES6（rest语法，promise）
* 性能优化
* CDN
* 动画
* 居中问题
* 移动端兼容性的坑（主要是ios）
* 原码、反码、补码

### 实际开发中遇到的一些问题

* webpack配置问题
* ios 上的兼容问题
* 业务逻辑复杂问题

### 项目相关

1. 红包活动（活动描述、算法）
2. 地图组件（高德地图）
3. sass、less迁移到stylus（迁移原因）
4. 模块划分（业务模块、功能模块）
5. 移动端适配（flexible.js）
6. vuelidate、fastclick、mint-ui、vue-lazyload、mock.js、base64位图、wxShare（weixin-js-sdk）
7. 组件异步加载
8. 公共方法 util.js（深浅克隆、浮点运算、设备类型判断、url取参数、web存储）
9. 接口单独抽出来
10. 埋点

### 综合

* 进程与线程的区别
* 错误监控
* web存储（session、cookie、sessionStorage、localStorage等）
* 模块化（commonjs、requirejs、seajs、ES6的模块化、AMD、CMD等）
* 前端注册登录流程
* Git

# CSS

### 专题系列

* 绝对定位、浮动、表格布局
* Flex布局
* Grid布局
* 标准盒模型 + IE盒模型
* js获取盒模型的宽高（几种获取元素距离、长度的方法）
* BFC
* css实现一个三角线、扇形、正方体
* 各种居中方案
* 各种经典布局（双飞翼、圣杯）
* css3的新选择器
* css3新特性
* 动画（animation、transform、transition）
* 1px边框
* css开启硬件加速来提升性能
* SVG
* 雪碧图
* 图标字体
* px、em、rem、viewport对比
* less、sass、stylus区别
* @import 和 link 的区别
* bfc布局规则
* 项目怎么做的移动端适配？flexible原理（1px问题，通过viewport）
* css选择器的优先级
* css实现图片自适应宽高
* flex，flex常用属性，以及相关作用
* BFC是什么

### [简答题系列](https://github.com/liyayun713/Interview/blob/master/css/css.md)

* CSS 有哪些样式可以给子元素继承
* 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些
* box-sizing常用的属性有哪些? 分别有啥作用?
* 清除浮动的方式有哪些？比较好的是哪一种？
* 样式权重的优先级

# web安全

* XSS
* CSRF
* 摘要算法和对称加密、非对称加密
* 摘要和加密的区别？
* 常见哪些加密算法？
* 前端安全防范措施？xss攻击和csrf攻击？
* dns劫持？
* 说下crsf 和 xss，分别举例说明，各有什么解决办法？
* Cookie的同源策略是怎么样的，跨域情况下如何携带 cookie（这里主要考察了SameSite问题，因为我crsf问题没答到这点）

# HTML

### 专题系列

* html语义化
* HTML5新特性
* HTML5新标签
* SEO
* doctype
* 各种meta标签

### [简答题系列](https://github.com/liyayun713/Interview/blob/master/html/html.md)

# Babel

# 跨平台

* 有接触过哪些移动端跨平台框架？说下jsBridge？
* 说下react-native的原理，原生端和js端是怎么通信的？
* flutter有了解过吗？为什么说它的性能可以媲美原生？它有什么缺点吗？
* 如果一个项目要用移动端跨平台框架开发，你会选择哪个？

# Flutter

# React Native

# Electron

# 小程序
* 最新api
* 初始化获取用户信息流程
* 你写过小程序，说下和写vue有什么区别？
* 然后我说setData会有性能问题（react中setState会有这个问题吗？又给自己挖坑了） 说下jsbrige？

# Nginx

# three.js

# pwa

# 前端工程化

# 项目

* 工作中遇到过的最难的问题是什么？最后解决了吗？怎么解决的？现在觉得有没有更好的解决方案？
* 对于你来说，你觉得做音乐app中最大的技术难点是什么？
* 在技术上，你对自己以后有什么规划？

# 常见笔试题
[链接](https://github.com/liyayun713/Interview/blob/master/questions/common.md)

