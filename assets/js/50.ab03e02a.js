(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{414:function(a,v,e){"use strict";e.r(v);var _=e(33),l=Object(_.a)({},(function(){var a=this,v=a.$createElement,e=a._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-技巧"}},[a._v("#")]),a._v(" webpack 技巧")]),a._v(" "),e("h2",{attrs:{id:"webpack-与-grunt、gulp-的不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-与-grunt、gulp-的不同"}},[a._v("#")]),a._v(" webpack 与 grunt、gulp 的不同?")]),a._v(" "),e("p",[a._v("三者都是前端构建工具, grunt 和 gulp 早期流行,\n现在 webpack 是主流")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("grunt 和 gulp 是基于任务和流")]),a._v(", 找到一类文件, 对其进行链式操作, 更新流上的数据")]),a._v(" "),e("li",[e("strong",[a._v("webpack 基于入口")]),a._v(", 用 loader 处理不同文件, 用 plugin 来扩展功能")])]),a._v(" "),e("h2",{attrs:{id:"与-webpack-类似的工具还有哪些-谈谈你为什么最终选择-或放弃-使用-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与-webpack-类似的工具还有哪些-谈谈你为什么最终选择-或放弃-使用-webpack"}},[a._v("#")]),a._v(" 与 webpack 类似的工具还有哪些? 谈谈你为什么最终选择(或放弃)使用 webpack?")]),a._v(" "),e("p",[a._v("同样基于入口的打包工具: webpack rollup parcel")]),a._v(" "),e("p",[a._v("从应用场景看:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("webpack")]),a._v(" 适用于大型复杂的前端站点建构")]),a._v(" "),e("li",[e("strong",[a._v("rollup")]),a._v(" 适用于基础库的打包, 如 vue、react")]),a._v(" "),e("li",[e("strong",[a._v("parcel")]),a._v(" 适用于简单的实验性项目， 他满足低门槛的快速看到效果")])]),a._v(" "),e("blockquote",[e("p",[a._v("parcel 的打包给出的调试信息有限, 一旦打包出错很难调试")])]),a._v(" "),e("h2",{attrs:{id:"有哪些常见的-loader-他们是解决什么问题的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有哪些常见的-loader-他们是解决什么问题的"}},[a._v("#")]),a._v(" 有哪些常见的 Loader? 他们是解决什么问题的?")]),a._v(" "),e("ul",[e("li",[a._v("file-loader: 把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件")]),a._v(" "),e("li",[a._v("url-loader: 和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去")]),a._v(" "),e("li",[a._v("source-map-loader: 加载额外的 Source Map 文件，以方便断点调试")]),a._v(" "),e("li",[a._v("image-loader: 加载并且压缩图片文件")]),a._v(" "),e("li",[a._v("babel-loader: 把 ES6 转换成 ES5")]),a._v(" "),e("li",[a._v("css-loader：加载 CSS，支持模块化、压缩、文件导入等特性")]),a._v(" "),e("li",[a._v("style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS")]),a._v(" "),e("li",[a._v("eslint-loader：通过 ESLint 检查 JavaScript 代码")])]),a._v(" "),e("h2",{attrs:{id:"有哪些常见的-plugin-他们是解决什么问题的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有哪些常见的-plugin-他们是解决什么问题的"}},[a._v("#")]),a._v(" 有哪些常见的 Plugin? 他们是解决什么问题的?")]),a._v(" "),e("ul",[e("li",[a._v("define-plugin; 定义环境变量")]),a._v(" "),e("li",[a._v("commons-chunk-plugin: 提取公共代码")]),a._v(" "),e("li",[a._v("html-webpack-plugin: 自动生成一个 html 文件, 把所有的 js 和 css 加载进去")])]),a._v(" "),e("h2",{attrs:{id:"loader-和-plugin-的不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-的不同"}},[a._v("#")]),a._v(" Loader 和 Plugin 的不同?")]),a._v(" "),e("ul",[e("li",[a._v("作用:\n"),e("ul",[e("li",[a._v("Loader 是加载器, Webpack "),e("strong",[a._v("只能解析 js 文件")]),a._v(", 如果想解析其他文件, 就要用到 Loader")]),a._v(" "),e("li",[a._v("Plugin 是插件, "),e("strong",[a._v("可扩展 Webpack 的功能")]),a._v(", 让 Webpack 有更好的灵活性, 比如说 html-webpack-plugin")])])]),a._v(" "),e("li",[a._v("用法:\n"),e("ul",[e("li",[a._v("Loader 在 "),e("code",[a._v("module.rules")]),a._v(" 中配置, 作为"),e("strong",[a._v("模块的解析规则存在")]),a._v(", 每一项都是一个对象, 描述了匹配的文件后缀, 使用什么加载")]),a._v(" "),e("li",[a._v("Plugin 在 "),e("code",[a._v("plugins")]),a._v(" 单独配置, 类型数组, 每一项都是一个 plugin, 参数都"),e("strong",[a._v("通过构造函数传入(new html-webpack-plugin())")])])])])]),a._v(" "),e("h2",{attrs:{id:"如何按需加载代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何按需加载代码"}},[a._v("#")]),a._v(" 如何按需加载代码?")]),a._v(" "),e("ul",[e("li",[a._v("组件库的按需加载: 在 .babelrc 配置或 babel-loade 的参数进行设置, "),e("strong",[a._v("组件库已经有了解决方案")]),a._v(" "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/ElementUI/babel-plugin-component",target:"_blank",rel:"noopener noreferrer"}},[a._v("elementUI"),e("OutboundLink")],1),a._v(", "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[a._v("ant-design"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("单页面应用的按需加载: 通过 "),e("strong",[a._v("import(*)")]),a._v(" 语句来控制加载时机, 会将 import(*)中引入的模块作为一个新的入口在生成一个 chunk")])]),a._v(" "),e("h2",{attrs:{id:"如何提高构建速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何提高构建速度"}},[a._v("#")]),a._v(" 如何提高构建速度")]),a._v(" "),e("ol",[e("li",[a._v("多入口情况下, 使用 "),e("strong",[a._v("CommonsChunkPlugin")]),a._v(" 来提取公共代码")]),a._v(" "),e("li",[a._v("通过 "),e("strong",[a._v("externals")]),a._v(" 配置来提取常用库")]),a._v(" "),e("li",[a._v("利用 "),e("strong",[a._v("DllPlugin")]),a._v(" 和 "),e("strong",[a._v("DllReferencePlugin")]),a._v(" 预编译资源模块, 通过 "),e("strong",[a._v("DllPlugin")]),a._v(" 来对那些我们引用但是绝对不会修改的 npm 包来进行预编译, 再通过 "),e("strong",[a._v("DllReferencePlugin")]),a._v(" 将预编译的模块加载进来")]),a._v(" "),e("li",[a._v("使用 Happypack 实现多线程加速编译")]),a._v(" "),e("li",[a._v("使用 "),e("strong",[a._v("webpack-uglify-parallel")]),a._v(" 来提升 "),e("strong",[a._v("uglifyPlugin")]),a._v(" 的压缩速度, 原理上 "),e("strong",[a._v("webpack-uglify-parallel")]),a._v(" 采用了多核并行压缩来提升压缩速度")]),a._v(" "),e("li",[a._v("使用 "),e("strong",[a._v("Tree-shaking(最好别说)")]),a._v(" 和 "),e("strong",[a._v("Scope Hoisting")]),a._v(" 来剔除多余代码")])]),a._v(" "),e("h2",{attrs:{id:"webpack-的构建流程是什么-从读取配置到输出文件这个过程尽量说全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的构建流程是什么-从读取配置到输出文件这个过程尽量说全"}},[a._v("#")]),a._v(" Webpack 的构建流程是什么? 从读取配置到输出文件这个过程尽量说全")]),a._v(" "),e("p",[a._v("Webpack 的运行流程是一个串行的过程:")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("初始化参数:")]),a._v(" 从配置文件和 Shell 语句中读取与合并参数, 得出最终的参数")]),a._v(" "),e("li",[e("strong",[a._v("开始编译:")]),a._v(" 用上一步得到的参数初始化 Compiler 对象, 加载所有配置的插件, 执行对象的 run 方法开始执行编译")]),a._v(" "),e("li",[e("strong",[a._v("确定入口:")]),a._v(" 根据配置中的 entry 找出所有的入口文件")]),a._v(" "),e("li",[e("strong",[a._v("编译模块:")]),a._v(" 从入口文件出发, 调用所有配置的 Loader 对模块进行翻译, 再找出依赖该模块的模块, 循环往复知道所有模块都处理完")]),a._v(" "),e("li",[e("strong",[a._v("完成模块编译:")]),a._v(" 第四部完成后得到每个模块之间的依赖关系, 和翻译后的内容")]),a._v(" "),e("li",[e("strong",[a._v("输出资源:")]),a._v(" 根据入口和模块的依赖关系, 组装成一个个包含多个模块的 Chunk, 再把每个 Chunk 转换为一个单独的文件加入都输出列表")]),a._v(" "),e("li",[e("strong",[a._v("输出完成:")]),a._v(" 确定好输出内容后, 根据配置确定输出的路径和文件名, 把文件内容写入文件系统")])]),a._v(" "),e("h2",{attrs:{id:"是否写过-loader-和-plugin-描述一下编写-loader-或-plugin-的思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是否写过-loader-和-plugin-描述一下编写-loader-或-plugin-的思路"}},[a._v("#")]),a._v(" 是否写过 Loader 和 Plugin? 描述一下编写 loader 或 plugin 的思路?")]),a._v(" "),e("p",[a._v("Loader 就相当于把浏览器不认识的文件翻译成新的可以认识的文件内容")]),a._v(" "),e("p",[a._v("每个 Loader 制作一种转义工作, 每个 Loader 拿到源文件内容, 可以通过返回值得方式将处理后的内返回给 Webpack, 可以调用 "),e("strong",[a._v("this.callback()")]),a._v("\n还可以通过 this.async() 生成一个 "),e("strong",[a._v("callback")]),a._v(" 函数")]),a._v(" "),e("p",[a._v("此外 Webpack 还为开发者准备了开发 loader 的工具函数集 --\x3e "),e("strong",[a._v("loader-utils")])]),a._v(" "),e("p",[a._v("相对于 Loader 而言, Plugin 的编写就灵活了许多, webpack 在运行的生命周期中会广播出许多事件, Plugin 可以监听这些事件, 在合适的时机通过 Webpack 提供的 API 改变输出结果")]),a._v(" "),e("h2",{attrs:{id:"如何利用-webpack-来优化前端性能-提高性能和体验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何利用-webpack-来优化前端性能-提高性能和体验"}},[a._v("#")]),a._v(" 如何利用 Webpack 来优化前端性能? (提高性能和体验)")]),a._v(" "),e("p",[a._v("用 webpack 优化前端性能是指优化 webpack 的输出结果, 让打包的最终结果在浏览器运行快速高效")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("压缩代码:")]),a._v(" 利用 UglifyJsPlugin 和 ParallelUglifyPlugin 压缩 JS, 用 cssnano 压缩 CSS")]),a._v(" "),e("li",[e("strong",[a._v("利用 CDN 加速:")]),a._v(" 将引用资源路径改为 CDN 上对应的路径, 利用 output 参数和各 loader 的 publicPath 参数来修改资源路径")]),a._v(" "),e("li",[e("strong",[a._v("删除死代码:")]),a._v(" 可以通过在启动 webpack 时追加参数--optimize-minimize 来实现")]),a._v(" "),e("li",[e("strong",[a._v("提取公共代码")])])]),a._v(" "),e("h2",{attrs:{id:"webpack-热更新原理-如何自动刷新页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-热更新原理-如何自动刷新页面"}},[a._v("#")]),a._v(" webpack 热更新原理, 如何自动刷新页面")]),a._v(" "),e("p",[a._v("当修改了一个或多个文件, 文件系统接收更改并通知 webpack, webpack 重新编译构建模块, 并通知 HMR 服务器进行更新,\nHMR Server 使用 webSocket 通知 HMR runtime 需要更新, HMR 运行时通过 HTTP 请求更新 jsonp, HTR 运行时替换更新中的\n模块, 如果确定这些模块无法更新, 则触发整个页面刷新")]),a._v(" "),e("h2",{attrs:{id:"webpack-中-loader-和-plugin-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中-loader-和-plugin-的区别"}},[a._v("#")]),a._v(" webpack 中 loader 和 plugin 的区别")]),a._v(" "),e("ul",[e("li",[a._v("loader: 一个转换器, 将 A 文件转成 B 文件, 比如 A.scss 转成 A.css")]),a._v(" "),e("li",[a._v("plugin: 一个扩展器, 丰富了 webpack 本身, 针对 loader 结束后, webpack 打包的整个过程, 并不直接操作文件,\n而是基于事件机制工作, 会监听 webpack 打包过程中某个点, 执行广泛的任务")])]),a._v(" "),e("h2",{attrs:{id:"webpack-核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-核心概念"}},[a._v("#")]),a._v(" webpack 核心概念")]),a._v(" "),e("ul",[e("li",[a._v("Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。")]),a._v(" "),e("li",[a._v("Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。")]),a._v(" "),e("li",[a._v("Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。")]),a._v(" "),e("li",[a._v("Loader：模块转换器，用于把模块原内容按照需求转换成新内容。")]),a._v(" "),e("li",[a._v("Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。")]),a._v(" "),e("li",[a._v("Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。")])]),a._v(" "),e("h2",{attrs:{id:"配置选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置选项"}},[a._v("#")]),a._v(" 配置选项")]),a._v(" "),e("ul",[e("li",[a._v("Entry 配置模块的入口；")]),a._v(" "),e("li",[a._v("Output 配置如何输出最终想要的代码；")]),a._v(" "),e("li",[a._v("Module 配置处理模块的规则；")]),a._v(" "),e("li",[a._v("Resolve 配置寻找模块的规则；")]),a._v(" "),e("li",[a._v("Plugins 配置扩展插件；")]),a._v(" "),e("li",[a._v("DevServer 配置 DevServer；")]),a._v(" "),e("li",[a._v("其它配置项 其它零散的配置项；")]),a._v(" "),e("li",[a._v("整体配置结构 整体地描述各配置项的结构；")]),a._v(" "),e("li",[a._v("多种配置类型 配置文件不止可以返回一个 Object，还有其他返回形式；")]),a._v(" "),e("li",[a._v("配置总结 寻找配置 Webpack 的规律，减少思维负担。")])]),a._v(" "),e("h2",{attrs:{id:"webpack-两个核心对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-两个核心对象"}},[a._v("#")]),a._v(" webpack 两个核心对象")]),a._v(" "),e("ol",[e("li",[a._v("Compiler 对象包含了 webpack 环境所有的配置信息, 包含 options, loaders, plugins 这些项, 这个对象在 webpack 启动时被实例化, 它是全局唯一的 webpack 实例")]),a._v(" "),e("li",[a._v("Compilation 对象包含了当前的模块资源, 编译生成资源, 文件变化等, 当 webpack 在开发模式下运行时, 每当检测到一个文件发生改变时, 那么一次新的 Compilation 将会创建, 从而生成一组新的编译资源")])]),a._v(" "),e("p",[a._v("区别: Compiler 代表这个 webpack 从启动到关闭的生命周期, Compilation 对象只代表了一次新的编译")]),a._v(" "),e("h2",{attrs:{id:"compiler-事件钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiler-事件钩子"}},[a._v("#")]),a._v(" Compiler 事件钩子")]),a._v(" "),e("ul",[e("li",[a._v("after-plugins: 设置完一组初始化插件后")]),a._v(" "),e("li",[a._v("after-resolvers: 设置完 resolvers 后")]),a._v(" "),e("li",[a._v("run: 读取记录之前")]),a._v(" "),e("li",[a._v("compile: 创建新 compilation 之前")]),a._v(" "),e("li",[a._v("compilation; compilation 创建完成")]),a._v(" "),e("li",[a._v("emit: 在生成资源并输出到目录之前")]),a._v(" "),e("li",[a._v("after-emit: 在生成资源并输出到目录之后")]),a._v(" "),e("li",[a._v("done: 完成编译")])])])}),[],!1,null,null,null);v.default=l.exports}}]);