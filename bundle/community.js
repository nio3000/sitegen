webpackJsonp([4],{411:function(e,t,n){e.exports=n(412)},412:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentContext=t.directives=t.components=void 0;var u=n(351),l=o(u),a=n(413),i=o(a),c=n(416),f=r(c);t.components=l,t.directives=i,t.DocumentContext=f["default"]},413:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.meta=t.ref=void 0;var o=n(414),u=r(o),l=n(415),a=r(l);t.ref=u["default"],t.meta=a["default"]},414:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.line,n=e.name,r=e.style;return a["default"].createElement("div",{style:u({},i.root,r)},a["default"].createElement("a",{name:n||t},"#"))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=o;var l=n(5),a=r(l),i={root:{height:0,width:0,top:"-1em",visibility:"hidden",position:"relative"}}},415:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,i,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),d=r(f),s=n(416),p={root:{color:"#444",background:"rgb(226, 226, 226)",fontWeight:"bold",fontFamily:"monospace"},heading:{background:"rgb(175, 175, 175)",padding:5},report:{padding:10,margin:0}},m=(i=a=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=JSON.stringify(this.context.reactdown.meta.data,null,2);return d["default"].createElement("div",{style:p.root},d["default"].createElement("div",{style:p.heading},"Document metadata:"),d["default"].createElement("pre",{style:p.report},d["default"].createElement("code",null,e)))}}]),t}(d["default"].Component),a.contextTypes=s.contextTypes,i);t["default"]=m},416:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=t.contextTypes=void 0;var a,i,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),d=r(f),s=t.contextTypes={reactdown:d["default"].PropTypes.object},p=(i=a=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),c(t,[{key:"getChildContext",value:function(){return{reactdown:this.props.context}}},{key:"render",value:function(){var e=this.props.children;return d["default"].Children.only(e)}}]),t}(d["default"].Component),a.childContextTypes=s,i);t["default"]=p},417:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=e.children,r=((0,f["default"])(e,["children"]),t.reactdown.meta);return p["default"].createElement(d.Root,null,p["default"].createElement(y["default"],{title:r.data.title||r.model.title}),n)}function u(e){return p["default"].createElement(h.Heading,(0,i["default"])({},e,{Component:d.Heading,refStyle:{top:"-5em"}}))}function l(e){return p["default"].createElement(v.Link,(0,i["default"])({},e,{Component:d.Link}))}Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=t.Code=t.Strong=t.Emphasis=t.InlineCode=t.UnorderedList=t.OrderedList=t.Paragraph=void 0;var a=n(235),i=r(a),c=n(273),f=r(c);t.Root=o,t.Heading=u,t.Link=l;var d=n(347);Object.defineProperty(t,"Paragraph",{enumerable:!0,get:function(){return d.Paragraph}}),Object.defineProperty(t,"OrderedList",{enumerable:!0,get:function(){return d.OrderedList}}),Object.defineProperty(t,"UnorderedList",{enumerable:!0,get:function(){return d.UnorderedList}}),Object.defineProperty(t,"InlineCode",{enumerable:!0,get:function(){return d.InlineCode}}),Object.defineProperty(t,"Emphasis",{enumerable:!0,get:function(){return d.Emphasis}}),Object.defineProperty(t,"Strong",{enumerable:!0,get:function(){return d.Strong}}),Object.defineProperty(t,"Code",{enumerable:!0,get:function(){return d.Code}}),Object.defineProperty(t,"ListItem",{enumerable:!0,get:function(){return d.ListItem}});var s=n(5),p=r(s),m=n(329),y=r(m),b=n(416),h=n(418),v=n(328);o.contextTypes=b.contextTypes},418:function(e,t,n){e.exports=n(419)},419:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Heading=void 0;var o=n(420),u=r(o);t.Heading=u["default"]},420:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.children,n=e.name,r=e.Component,o=void 0===r?c.Heading:r,u=e.refStyle,a=(0,l["default"])(e,["children","name","Component","refStyle"]);return i["default"].createElement(o,a,i["default"].createElement(d["default"],{name:n,style:u}),t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(273),l=r(u);t["default"]=o;var a=n(5),i=r(a),c=n(350),f=n(414),d=r(f)},423:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e){var t=e.className,n=e.style;return c["default"].createElement(f.DocumentContext,{context:{meta:m}},c["default"].cloneElement(c["default"].createElement(p.Root,null,c["default"].createElement(p.Heading,{level:4,name:"Support"},"Support"),c["default"].createElement(p.Paragraph,null,"Main support channels are ",c["default"].createElement(p.Link,{href:"https://gitter.im/andreypopp/sitegen",title:null},"Gitter")," and GitHub ",c["default"].createElement(p.Link,{href:"https://github.com/andreypopp/sitegen/issues",title:null},"Issues"),"."),c["default"].createElement(p.Heading,{level:4,name:"Development"},"Development"),c["default"].createElement(p.Paragraph,null,"Development takes place at ",c["default"].createElement(p.Link,{href:"https://github.com/andreypopp/sitegen",title:null},"andreypopp/sitehen")," GitHub repository. Report\n",c["default"].createElement(p.Link,{href:"https://github.com/andreypopp/sitegen/issues",title:null},"issues")," or better jump in the codebase and make a few usefull ",c["default"].createElement(p.Link,{href:"https://github.com/andreypopp/sitegen/pulls",title:null},"pull\nrequests"),"."),c["default"].createElement(p.Heading,{level:4,name:"Sites-built-with-sitegen"},"Sites built with sitegen"),c["default"].createElement(p.UnorderedList,null,c["default"].createElement(p.ListItem,null,c["default"].createElement(p.Link,{href:"https://andreypopp.github.io/sitegen",title:null},"andreypopp.github.io/sitegen"))),null,null,null,null),{className:t,style:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t.meta=void 0;var l=n(235),a=o(l);t["default"]=u;var i=n(5),c=o(i),f=n(411),d=n(417),s=r(d),p=(0,a["default"])({},f.components,s),m=t.meta={data:{},model:{toc:[{title:"Support",name:"Support",depth:4},{title:"Development",name:"Development",depth:4},{title:"Sites built with sitegen",name:"Sites-built-with-sitegen",depth:4}],title:null}}}});