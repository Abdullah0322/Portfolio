_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"4qHW":function(e,t,r){e.exports={container:"ArticlesPage_container__gvNLx",underline:"ArticlesPage_underline__2RkuO"}},"8oxB":function(e,t){var r,n,c=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,u=[],l=!1,f=-1;function h(){l&&a&&(l=!1,a.length?u=a.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(h);l=!0;for(var t=u.length;t;){for(a=u,u=[];++f<t;)a&&a[f].run();f=-1,t=u.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function j(e,t){this.fun=e,this.array=t}function b(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new j(e,t)),1!==u.length||l||s(p)},j.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=b,c.addListener=b,c.once=b,c.off=b,c.removeListener=b,c.removeAllListeners=b,c.emit=b,c.prependListener=b,c.prependOnceListener=b,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,c,o,i){try{var s=e[o](i),a=s.value}catch(u){return void r(u)}s.done?t(a):Promise.resolve(a).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,o){var i=e.apply(t,r);function s(e){n(i,c,o,s,a,"next",e)}function a(e){n(i,c,o,s,a,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return c}))},IQby:function(e,t,r){"use strict";var n=r("nKUr"),c=r("Aiso"),o=r.n(c),i=r("rePB");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){return Object(n.jsx)("svg",a(a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),{},{children:Object(n.jsxs)("g",{fill:"currentColor",children:[Object(n.jsx)("path",{d:"M34 256l26.2 26.2c108 108 283.7 108 391.7 0L478 256l-26.2-26.2c-108-108-283.7-108-391.7 0L34 256zm222 126.2c-75.8 0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6 0l32.9 32.9c3.7 3.7 3.7 9.7 0 13.5l-32.9 32.9c-57.7 57.7-133.5 86.6-209.3 86.6z"}),Object(n.jsx)("path",{d:"M256 183.5c-40 0-72.5 32.5-72.5 72.5s32.5 72.5 72.5 72.5 72.5-32.5 72.5-72.5-32.5-72.5-72.5-72.5zm0 164c-50.5 0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5 41.1 91.5 91.5c0 50.5-41 91.5-91.5 91.5z"})]})}))};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return Object(n.jsx)("svg",f(f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490.4 490.4",fill:"currentColor"},e),{},{children:Object(n.jsx)("path",{d:"M222.5 453.7c6.1 6.1 14.3 9.5 22.9 9.5 8.5 0 16.9-3.5 22.9-9.5L448 274c27.3-27.3 42.3-63.6 42.4-102.1 0-38.6-15-74.9-42.3-102.2S384.6 27.4 346 27.4c-37.9 0-73.6 14.5-100.7 40.9-27.2-26.5-63-41.1-101-41.1-38.5 0-74.7 15-102 42.2C15 96.7 0 133 0 171.6c0 38.5 15.1 74.8 42.4 102.1l180.1 180zM59.7 86.8c22.6-22.6 52.7-35.1 84.7-35.1s62.2 12.5 84.9 35.2l7.4 7.4c2.3 2.3 5.4 3.6 8.7 3.6 3.2 0 6.4-1.3 8.7-3.6l7.2-7.2c22.7-22.7 52.8-35.2 84.9-35.2 32 0 62.1 12.5 84.7 35.1 22.7 22.7 35.1 52.8 35.1 84.8s-12.5 62.1-35.2 84.8L251 436.4c-2.9 2.9-8.2 2.9-11.2 0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8s12.5-62.1 35.1-84.8z"})}))};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){return Object(n.jsxs)("svg",j(j({fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),{},{children:[Object(n.jsx)("path",{d:"M162.133 204.8h51.2c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-51.2c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM401.067 187.733h-153.6c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h153.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM375.467 247.467A8.536 8.536 0 00384 256h34.133c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H384c-4.71-.001-8.533 3.822-8.533 8.533zM162.133 256h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z"}),Object(n.jsx)("path",{d:"M42.667 324.267c-14.114 0-25.6-11.486-25.6-25.6v-256c0-14.114 11.486-25.6 25.6-25.6h358.4c14.114 0 25.6 11.486 25.6 25.6V76.8c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533V42.667C443.733 19.14 424.593 0 401.067 0h-358.4C19.14 0 0 19.14 0 42.667v256c0 23.526 19.14 42.667 42.667 42.667a8.536 8.536 0 008.533-8.533c0-4.711-3.823-8.534-8.533-8.534zM315.733 307.2h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z"}),Object(n.jsx)("path",{d:"M469.333 102.4h-358.4c-23.526 0-42.667 19.14-42.667 42.667v256c0 23.526 19.14 42.667 42.667 42.667h213.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H110.933c-14.114 0-25.6-11.486-25.6-25.6v-256c0-14.114 11.486-25.6 25.6-25.6h358.4c14.114 0 25.6 11.486 25.6 25.6v256c0 14.114-11.486 25.6-25.6 25.6H435.2a8.536 8.536 0 00-8.533 8.533v47.667L355.9 412.1a8.523 8.523 0 00-12.066 0 8.523 8.523 0 000 12.066l85.333 85.333a8.535 8.535 0 009.301 1.852 8.547 8.547 0 005.265-7.885v-59.733h25.6c23.526 0 42.667-19.14 42.667-42.667v-256c0-23.526-19.14-42.666-42.667-42.666z"}),Object(n.jsx)("path",{d:"M162.133 307.2H281.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM332.8 358.4h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H332.8c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533zM358.4 247.467a8.536 8.536 0 00-8.533-8.533H281.6c-4.71 0-8.533 3.823-8.533 8.533S276.89 256 281.6 256h68.267a8.536 8.536 0 008.533-8.533zM162.133 358.4h136.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533z"})]}))},O=r("IwEa"),d=r.n(O);t.a=function(e){var t=e.article;return Object(n.jsxs)("a",{href:t.url,target:"_blank",rel:"noopener",className:d.a.container,children:[Object(n.jsx)(o.a,{className:d.a.picture,src:t.cover_image,alt:t.title,width:300,height:150}),Object(n.jsxs)("div",{className:d.a.content,children:[Object(n.jsx)("h3",{className:d.a.title,children:t.title}),Object(n.jsx)("p",{children:t.description})]}),Object(n.jsxs)("div",{className:d.a.stats,children:[Object(n.jsxs)("div",{className:d.a.stat,children:[Object(n.jsx)(u,{className:d.a.icon})," ",t.page_views_count]}),Object(n.jsxs)("div",{className:d.a.stat,children:[Object(n.jsx)(h,{className:d.a.icon})," ",t.public_reactions_count]}),Object(n.jsxs)("div",{className:d.a.stat,children:[Object(n.jsx)(b,{className:d.a.icon})," ",t.comments_count]})]})]})}},IwEa:function(e,t,r){e.exports={container:"ArticleCard_container__2ojkO",content:"ArticleCard_content__1swox",title:"ArticleCard_title__1ArJX",stats:"ArticleCard_stats__22HjP",stat:"ArticleCard_stat__1QvoC",icon:"ArticleCard_icon__2R9sr"}},Lkci:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return r("bhQg")}])},bhQg:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"__N_SSG",(function(){return f}));var n=r("nKUr"),c=r("o0o1"),o=r.n(c),i=r("HaE+"),s=r("q1tI"),a=r("IQby"),u=r("4qHW"),l=r.n(u),f=!0;t.default=function(){var t=Object(s.useState)([]),r=t[0],c=t[1];Object(s.useEffect)((function(){u()}),[]);var u=function(){var t=Object(i.a)(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dev.to/api/articles/me/published?per_page=6",{headers:{"api-key":e.env.DEV_TO_API_KEY}});case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h3",{children:["Recent Posts from"," ",Object(n.jsx)("a",{href:"https://dev.to/abdoulrasheed",target:"_blank",rel:"noopener",className:l.a.underline,children:"dev.to"})]}),Object(n.jsx)("div",{className:l.a.container,children:r.map((function(e){return Object(n.jsx)(a.a,{article:e},e.id)}))})]})}}.call(this,r("8oxB"))},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}},[["Lkci",0,1,2,5]]]);