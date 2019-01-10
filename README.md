# 题库

**大厂面试题一一破解**

```js
new Date()    // Thu Jan 10 2019 10:06:23 GMT+0800 (中国标准时间)
```

### JavaScript

* 函数防抖、函数节流
* 事件循环（浏览器、Node）
* JavaScript的sort方法内部使用的什么排序？
* 函数式编程
* 手动实现parseInt
* 用JavaScript的异步实现sleep函数
* 原型、闭包

### 异步

* JavaScript异步的处理方式(回调、promise、generator、async)
* 手写promise的all方法
* 手写实现promise

### Es6

* 常用 es6 语法
* 使用es5实现es6的class

### CSS

* css选择器的优先级
* css实现图片自适应宽高
* flex，flex常用属性，以及相关作用
* BFC是什么

### Node

* 项目里面用nodejs做了啥
* express框架的设计思想
* nodejs的eventEmitter的实现
* express的中间件系统是如何设计的
* express 动态路由匹配
* 实现一个事件发布订阅类，其实就是eventEmitter

### Vue

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

### webpack

* 怎么配webpack
* 项目中怎么用的webpack，怎么优化
* webpack热更新原理，使用过的插件

### 浏览器

* 浏览器渲染过程
* 回流重绘
* load、DOMContentLoaded等等事件的触发顺序

### 网络

* 跨域
* http状态码
* websocket握手过程
* 跨域以及解决办法
* tcp/ip网络层、三次握手，为什么不能两次握手
* 手写实现jsonp
* tcp/ip网络层，http的特点
* http强行使用udp能实现吗？

### 设计模式

* 实现一个发布订阅系统，包括on、emit、off等等

### 算法

* 手写快排，时间复杂度，优化

### 其他专题

* 项目里面的前端鉴权是怎么实现的
* 线上日志是如何处理的
* 项目模块规划、项目如何部署、如何优化
* 前端持久化的方式、区别
* 怎么判断一个点是否在圆形内、正方形内
* 设计一个单点登录的系统，类似阿里系那种



--------------------------------------------------- 分割线 -------------------------------------------------------








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
* web安全（xss，csrf）
* 跨域
* ES6（rest语法，promise）
* 性能优化
* http状态码
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
* ~~web存储（session、cookie、sessionStorage、localStorage等）~~
* 模块化（commonjs、requirejs、seajs、ES6的模块化、AMD、CMD等）
* 前端注册登录流程
* Git

### 浏览器
* 浏览器发展史
~~* 从输入url到页面加载的过程~~
* ~~浏览器缓存（强制缓存、协商缓存）~~
~~* 浏览器渲染机制~~
* 重排、重绘

### CSS

:zap::zap::zap: [简答题系列](https://github.com/liyayun713/Interview/blob/master/css/css.md)

* CSS 有哪些样式可以给子元素继承
* 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些
* box-sizing常用的属性有哪些? 分别有啥作用?
* 清除浮动的方式有哪些？比较好的是哪一种？
* 样式权重的优先级

:zap::zap::zap: 专题系列

* 绝对定位、浮动、表格布局
* Flex布局
* Grid布局
* 标准盒模型 + IE盒模型
* js获取盒模型的宽高（几种获取元素距离、长度的方法）
~~* BFC~~
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

### DOM
* 事件模型、事件流
* event
* 事件冒泡、事件捕获
* 事件委托的原理
* DOM事件的target和currentTarget的区别

### Javascript

:zap::zap::zap: [简答题系列](https://github.com/liyayun713/Interview/blob/master/js/js.md)

~~* JS有几种数据类型，其中基本数据类型有哪些？~~
* null和undefined的差异
* JS 的DOM 操作(Node节点获取及增删查改)
* 对数组 ['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'] 去重且排序
* 对数组[1,2,3,4,5,'6',7,'8','a','b','z']进行乱序
* JS 实现String.trim()方法
* navigator.userAgent

:zap::zap::zap: 专题系列

~~* JS运行机制~~
* ~~[闭包、js垃圾回收机制](https://github.com/liyayun713/Interview/blob/master/js/closure.md)~~
~~* 原型、构造函数、实例、原型链~~
~~* 如何实现继承、继承的几种方法~~
~~* 创建对象有几种方法~~
* 面向对象 vs 函数式编程
* 常用js设计模式
~~* 类型转换~~
~~* new运算符~~
~~* instanceof、typeof原理~~
* setTimeout、setInterval原理
* 数组去重、排序、乱序
~~* 深浅拷贝~~
* ~~作用域、this、call、apply、bind~~
~~* 函数柯里化~~
* ~~JS浮点数精度问题~~
* 常用数组、字符串操作方法
* 函数节流、防抖
* 手写一些常用的函数（debounce、assign、new、Object.create、promise、bind等）
* js发展史简述

### ES6

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

### 性能优化
* 资源压缩合并，减少http请求
* 非核心代码异步加载（defer、async）
* 浏览器缓存
* 使用CDN
* 预解析DNS
* 懒加载、预加载

### HTTP协议
* http、https、http2.0
* POST、GET
* http状态码
* 谈谈你对 TCP 的理解
* tcp、udp区别

### 前端通信
* ajax
* 跨域
* 前后端如何通信

### web安全
* XSS
* CSRF

### 前端算法
* 排序
* 堆栈、队列、链表
* 递归
* 快排、二分法查找

### HTML
:zap::zap::zap: [简答题系列](https://github.com/liyayun713/Interview/blob/master/html/html.md)

:zap::zap::zap: 专题系列

* html语义化
* HTML5新特性
* HTML5新标签
* SEO
* doctype
* 各种meta标签

### Vue
:zap::zap::zap: [简答题系列](https://github.com/liyayun713/Interview/blob/master/vue/vue.md)

:zap::zap::zap: 专题系列

* 源码分析
* MVVM、MVC、MVP
* MVVM是什么
* 生命周期
* vuex的作用及原理
* vue-router的实现
* 双向数据绑定原理、vue-router原理、nextTick原理
* 父子组件通讯
* 源码考察（双向数据绑定，虚拟DOM）

### React
1. How Virtual-DOM and diffing works in React

### Webpack
* 如何让webpack打包的速度提升50%？

### Babel

### 小程序
* 最新api
* 初始化获取用户信息流程

### Jquery
* on 和 bind 区别，on采用事件委托，新加子元素可以，bind不行

### Node.js

### Nginx

### 前端工程化

# 常见笔试题
[链接](https://github.com/liyayun713/Interview/blob/master/questions/common.md)

