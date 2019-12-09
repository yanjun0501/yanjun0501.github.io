(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{234:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"初探ssr——nuxtjs使用心得"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初探ssr——nuxtjs使用心得"}},[e._v("#")]),e._v(" 初探SSR——NuxtJS使用心得")]),e._v(" "),s("h4",{attrs:{id:"首先附上官方nuxt-express标准模板https-github-com-nuxt-community-express-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先附上官方nuxt-express标准模板https-github-com-nuxt-community-express-template"}},[e._v("#")]),e._v(" 首先附上官方Nuxt + Express标准模板"),s("a",{attrs:{href:"https://github.com/nuxt-community/express-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/nuxt-community/express-template"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"顾名思义，服务器端渲染-server-side-render-即在服务器上把组件渲染成html字符串，浏览器端直接进行解析，进而达到首屏数据无需等待直接拥有内容。标准前后端分离模式下，通常采用客户端渲染。客户端渲染流程："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顾名思义，服务器端渲染-server-side-render-即在服务器上把组件渲染成html字符串，浏览器端直接进行解析，进而达到首屏数据无需等待直接拥有内容。标准前后端分离模式下，通常采用客户端渲染。客户端渲染流程："}},[e._v("#")]),e._v(" 顾名思义，服务器端渲染 (server side render)即在服务器上把组件渲染成HTML字符串，浏览器端直接进行解析，进而达到首屏数据无需等待直接拥有内容。标准前后端分离模式下，通常采用客户端渲染。客户端渲染流程：")]),e._v(" "),s("ul",[s("li",[s("h6",{attrs:{id:"浏览器向express-node服务器-发送请求，请求页面url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器向express-node服务器-发送请求，请求页面url"}},[e._v("#")]),e._v(" 浏览器向Express(Node服务器)发送请求，请求页面URL")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"node服务返回静态文件中的首屏html文件，此时内容为空"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node服务返回静态文件中的首屏html文件，此时内容为空"}},[e._v("#")]),e._v(" Node服务返回静态文件中的首屏HTML文件，此时内容为空")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"浏览器向express-node服务器-发送请求，请求页面资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器向express-node服务器-发送请求，请求页面资源"}},[e._v("#")]),e._v(" 浏览器向Express(Node服务器)发送请求，请求页面资源")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"node服务获取服务器上文件后，返回页面必要资源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node服务获取服务器上文件后，返回页面必要资源文件"}},[e._v("#")]),e._v(" Node服务获取服务器上文件后，返回页面必要资源文件")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"浏览器向express-node服务器-发送后续ajax请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器向express-node服务器-发送后续ajax请求"}},[e._v("#")]),e._v(" 浏览器向Express(Node服务器)发送后续AJAX请求")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"node服务响应ajax请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node服务响应ajax请求"}},[e._v("#")]),e._v(" Node服务响应AJAX请求")])])]),e._v(" "),s("h4",{attrs:{id:"服务端渲染流程："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染流程："}},[e._v("#")]),e._v(" 服务端渲染流程：")]),e._v(" "),s("ul",[s("li",[s("h6",{attrs:{id:"浏览器向express-node服务器-发送请求，请求页面url-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器向express-node服务器-发送请求，请求页面url-2"}},[e._v("#")]),e._v(" 浏览器向Express(Node服务器)发送请求，请求页面URL")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"node服务向后端服务器请求首屏数据后返回渲染好的首屏html文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node服务向后端服务器请求首屏数据后返回渲染好的首屏html文件"}},[e._v("#")]),e._v(" Node服务向后端服务器请求首屏数据后返回渲染好的首屏HTML文件")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"浏览器向express-node服务器-发送后续ajax请求-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器向express-node服务器-发送后续ajax请求-2"}},[e._v("#")]),e._v(" 浏览器向Express(Node服务器)发送后续AJAX请求")])]),e._v(" "),s("li",[s("h6",{attrs:{id:"node服务响应ajax请求-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node服务响应ajax请求-2"}},[e._v("#")]),e._v(" Node服务响应AJAX请求")])])]),e._v(" "),s("h4",{attrs:{id:"对比后可以很明显的发现，ssr对比客户端渲染，减少了客户端压力，在弱网环境下也可以很快的获取到渲染后的html文件，同时更利于seo和爬虫引擎爬取数据。正所谓，有无之相生也，难易之相成也，长短之相刑也，高下之相盈也，音声之相和也。有优点的同时必然少不了对应的缺点，浏览器端减少的压力并不会凭空消失，将会转换为对应甚至更高的压力移交给服务器端，因此服务器压力巨大。并且ssr下只会执行到componentmount之前的生命周期钩子，引用第三方库不可用其他生命周期钩子，引用库选择产生很大的限制。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比后可以很明显的发现，ssr对比客户端渲染，减少了客户端压力，在弱网环境下也可以很快的获取到渲染后的html文件，同时更利于seo和爬虫引擎爬取数据。正所谓，有无之相生也，难易之相成也，长短之相刑也，高下之相盈也，音声之相和也。有优点的同时必然少不了对应的缺点，浏览器端减少的压力并不会凭空消失，将会转换为对应甚至更高的压力移交给服务器端，因此服务器压力巨大。并且ssr下只会执行到componentmount之前的生命周期钩子，引用第三方库不可用其他生命周期钩子，引用库选择产生很大的限制。"}},[e._v("#")]),e._v(" 对比后可以很明显的发现，SSR对比客户端渲染，减少了客户端压力，在弱网环境下也可以很快的获取到渲染后的HTML文件，同时更利于SEO和爬虫引擎爬取数据。正所谓，有无之相生也，难易之相成也，长短之相刑也，高下之相盈也，音声之相和也。有优点的同时必然少不了对应的缺点，浏览器端减少的压力并不会凭空消失，将会转换为对应甚至更高的压力移交给服务器端，因此服务器压力巨大。并且SSR下只会执行到ComponentMount之前的生命周期钩子，引用第三方库不可用其他生命周期钩子，引用库选择产生很大的限制。")]),e._v(" "),s("h4",{attrs:{id:"额外的学习成本也是不可忽视的，因此技术选型时一定要考虑好自己的切实需求。假如是一个中后台系统或者仪表盘系统-各种平淡无奇巨坑无比祖传内部系统-，那就完全没有使用ssr的必要了，额外造成服务器的巨大开销忽略不计，改造浪费的时间人力也体现不出任何价值，如果是系统中部分营销页面，可以使用官方推荐的预渲染（pre-render）。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外的学习成本也是不可忽视的，因此技术选型时一定要考虑好自己的切实需求。假如是一个中后台系统或者仪表盘系统-各种平淡无奇巨坑无比祖传内部系统-，那就完全没有使用ssr的必要了，额外造成服务器的巨大开销忽略不计，改造浪费的时间人力也体现不出任何价值，如果是系统中部分营销页面，可以使用官方推荐的预渲染（pre-render）。"}},[e._v("#")]),e._v(" 额外的学习成本也是不可忽视的，因此技术选型时一定要考虑好自己的切实需求。假如是一个中后台系统或者仪表盘系统(各种平淡无奇巨坑无比祖传内部系统)，那就完全没有使用SSR的必要了，额外造成服务器的巨大开销忽略不计，改造浪费的时间人力也体现不出任何价值，如果是系统中部分营销页面，可以使用官方推荐的"),s("a",{attrs:{href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("预渲染（pre render）"),s("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=a.exports}}]);