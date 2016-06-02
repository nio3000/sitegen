webpackJsonp([1],{507:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.className,n=e.style;return d["default"].createElement(c.DocumentContext,{context:{meta:m}},d["default"].cloneElement(d["default"].createElement(p.Root,null,d["default"].createElement(p.Heading,{level:3,name:"Introduction-and-Motivation"},"Introduction & Motivation"),d["default"].createElement(p.Paragraph,null,"Sitegen is a static site generator based on ",d["default"].createElement(p.Link,{href:"https://webpack.github.io",title:null},"Webpack")," and ",d["default"].createElement(p.Link,{href:"https://reactjs.org",title:null},"React"),"."),d["default"].createElement(p.Paragraph,null,"Sitegen's motivation is to provide a framework for content based sites with\n",d["default"].createElement(p.Strong,null,"simple API")," to take the advantage of React ",d["default"].createElement(p.Strong,null,"component model")," and rich\nWebpack ecosystem."),d["default"].createElement(p.Paragraph,null,"The usage scenarious for Sitegen are ",d["default"].createElement(p.Strong,null,"static sites"),", ",d["default"].createElement(p.Strong,null,"blogs"),", ",d["default"].createElement(p.Strong,null,"project\ndocumentation"),", presentation ",d["default"].createElement(p.Strong,null,"slide decks"),", live ",d["default"].createElement(p.Strong,null,"styleguides")," and other\nsimilar content based sites."),d["default"].createElement(p.Heading,{level:4,name:"Component-model"},"Component model"),d["default"].createElement(p.Paragraph,null,"Sitegen embraces ",d["default"].createElement(p.Link,{href:"https://reactjs.org",title:null},"React")," for its component model."),d["default"].createElement(p.Paragraph,null,"Any element of Sitegen site is a React component. Be it a site design element or\na piece even content. The latter allows to Sitegen to host sites with dynamic\ncontent easily."),d["default"].createElement(p.Heading,{level:4,name:"Flexible-build-pipeline"},"Flexible build pipeline"),d["default"].createElement(p.Paragraph,null,d["default"].createElement(p.Link,{href:"https://webpack.github.io",title:null},"Webpack")," is at the core of Sitegen compiler."),d["default"].createElement(p.Paragraph,null,"Every Webpack plugin or loader is automatically compatible with Sitegen site:\n",d["default"].createElement(p.Strong,null,"code splitting"),", support for ",d["default"].createElement(p.Strong,null,"CSS preprocessors"),", ",d["default"].createElement(p.Strong,null,"optimizations"),", ",d["default"].createElement(p.Strong,null,"hot\nmodule reloading")," and a multiple others."),d["default"].createElement(p.Paragraph,null,"Sitegen comes with a sane configuration for Webpack out of the box. But it is\neasy to ",d["default"].createElement(p.Strong,null,"override")," parts of it or ",d["default"].createElement(p.Strong,null,"extend")," with new behaviours."),d["default"].createElement(p.Heading,{level:4,name:"Rich-and-extensible-markup"},"Rich & extensible markup"),d["default"].createElement(p.Paragraph,null,"Sitegen has support for markdown syntax out of the box."),d["default"].createElement(p.Paragraph,null,"Moreover the support is provided by ",d["default"].createElement(p.Link,{href:"https://andreypopp.github.io/reactdown",title:null},"Reactdown")," which allows to extend\nmarkdown syntax with arbitrary elements:"),d["default"].createElement(p.Code,null,"..live-code-example\n\n  console.log('Hello, world!');\n"),d["default"].createElement(p.Heading,{level:4,name:"Simple-API"},"Simple API"),d["default"].createElement(p.Paragraph,null,"Sitegen API is extremely simple. The most simple site takes 3 easy steps to\ntake."),d["default"].createElement(p.Heading,{level:5,name:"1-Define-content-tree"},"1. Define content tree"),d["default"].createElement(p.Paragraph,null,"Content tree describes the structure of your site:"),d["default"].createElement(p.Code,null,"import {page} from 'sitegen/routing'\n\nexport let route = page('./Site')\n"),d["default"].createElement(p.Heading,{level:5,name:"2-Create-React-component"},"2. Create React component"),d["default"].createElement(p.Paragraph,null,"Page is rendered with a regular React component:"),d["default"].createElement(p.Code,null,"export default function Site() {\n  return <div>Hello, world</div>\n}\n"),d["default"].createElement(p.Heading,{level:5,name:"3-Run-dev-server-and-iterate"},"3. Run dev server & iterate"),d["default"].createElement(p.Paragraph,null,"Run development server with hot reloading & iterate on your site:"),d["default"].createElement(p.Code,null,"% sitegen-serve\n"),d["default"].createElement(p.Heading,{level:4,name:"Whats-next"},"What's next"),d["default"].createElement(p.Paragraph,null,"Ready to start using Sitegen? Follow the link to the ",d["default"].createElement(p.Link,{href:"/tutorial",title:null},"tutorial")," and then\nconsult the ",d["default"].createElement(p.Link,{href:"/docs",title:null},"documentation"),"."),null,null,null,null,null),{className:t,style:n}))}Object.defineProperty(t,"__esModule",{value:!0}),t.meta=void 0;var o=n(375),i=r(o);t["default"]=l;var u=n(5),d=r(u),c=n(508),f=n(515),s=a(f),p=(0,i["default"])({},c.components,s),m=t.meta={data:{},model:{toc:[{title:"Introduction & Motivation",name:"Introduction-and-Motivation",depth:3},{title:"Component model",name:"Component-model",depth:4},{title:"Flexible build pipeline",name:"Flexible-build-pipeline",depth:4},{title:"Rich & extensible markup",name:"Rich-and-extensible-markup",depth:4},{title:"Simple API",name:"Simple-API",depth:4},{title:"1. Define content tree",name:"1-Define-content-tree",depth:5},{title:"2. Create React component",name:"2-Create-React-component",depth:5},{title:"3. Run dev server & iterate",name:"3-Run-dev-server-and-iterate",depth:5},{title:"What's next",name:"Whats-next",depth:4}],title:null}}},508:function(e,t,n){e.exports=n(509)},509:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentContext=t.directives=t.components=void 0;var l=n(510),o=r(l),i=n(511),u=r(i),d=n(514),c=a(d);t.components=o,t.directives=u,t.DocumentContext=c["default"]},510:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function l(e){var t=e.html;return d["default"].createElement("div",{dangerouslySetInnerHTML:{__html:t}})}function o(e){var t=e.level,n=r(e,["level"]),a="h"+Math.min(t,6);return d["default"].createElement(a,n)}function i(e){var t=e.children;return d["default"].createElement("div",{style:c.root},d["default"].createElement("div",{style:c.heading},"Unknown node found:"),d["default"].createElement("pre",{style:c.report},d["default"].createElement("code",null,t)))}Object.defineProperty(t,"__esModule",{value:!0}),t.UnorderedList=t.OrderedList=t.ListItem=t.Link=t.Code=t.Blockquote=t.TableCell=t.TableHeaderCell=t.TableRow=t.TableHead=t.TableBody=t.Table=t.Rule=t.InlineCode=t.Strong=t.Emphasis=t.Break=t.Image=t.Strikethrough=t.Paragraph=t.Root=void 0,t.HTML=l,t.Heading=o,t.Unknown=i;var u=n(5),d=a(u),c=(t.Root="div",t.Paragraph="p",t.Strikethrough="del",t.Image="img",t.Break="br",t.Emphasis="em",t.Strong="strong",t.InlineCode="code",t.Rule="hr",t.Table="table",t.TableBody="tbody",t.TableHead="thead",t.TableRow="tr",t.TableHeaderCell="th",t.TableCell="td",t.Blockquote="blockquote",t.Code="code",t.Link="a",t.ListItem="li",t.OrderedList="ol",t.UnorderedList="ul",{root:{color:"#5F0101",background:"rgb(255, 231, 231)",fontWeight:"bold",fontFamily:"monospace"},heading:{background:"#FF7575",padding:5},report:{padding:10,margin:0}})},511:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.meta=t.ref=void 0;var r=n(512),l=a(r),o=n(513),i=a(o);t.ref=l["default"],t.meta=i["default"]},512:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.line,n=e.name,a=e.style;return i["default"].createElement("div",{style:l({},u.root,a)},i["default"].createElement("a",{name:n||t},"#"))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t["default"]=r;var o=n(5),i=a(o),u={root:{height:0,width:0,top:"-1em",visibility:"hidden",position:"relative"}}},513:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i,u,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(5),f=a(c),s=n(514),p={root:{color:"#444",background:"rgb(226, 226, 226)",fontWeight:"bold",fontFamily:"monospace"},heading:{background:"rgb(175, 175, 175)",padding:5},report:{padding:10,margin:0}},m=(u=i=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),d(t,[{key:"render",value:function(){var e=JSON.stringify(this.context.reactdown.meta.data,null,2);return f["default"].createElement("div",{style:p.root},f["default"].createElement("div",{style:p.heading},"Document metadata:"),f["default"].createElement("pre",{style:p.report},f["default"].createElement("code",null,e)))}}]),t}(f["default"].Component),i.contextTypes=s.contextTypes,u);t["default"]=m},514:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=t.contextTypes=void 0;var i,u,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(5),f=a(c),s=t.contextTypes={reactdown:f["default"].PropTypes.object},p=(u=i=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),d(t,[{key:"getChildContext",value:function(){return{reactdown:this.props.context}}},{key:"render",value:function(){var e=this.props.children;return f["default"].Children.only(e)}}]),t}(f["default"].Component),i.childContextTypes=s,u);t["default"]=p},515:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=e.children,a=((0,d["default"])(e,["children"]),t.reactdown.meta);return s["default"].createElement(c.Root,null,s["default"].createElement(m["default"],{title:a.data.title||a.model.title}),n)}function l(e){return s["default"].createElement(v.Heading,(0,i["default"])({},e,{Component:c.Heading}))}Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=t.Link=t.Code=t.Strong=t.Emphasis=t.InlineCode=t.UnorderedList=t.OrderedList=t.Paragraph=void 0;var o=n(375),i=a(o),u=n(413),d=a(u);t.Root=r,t.Heading=l;var c=n(516);Object.defineProperty(t,"Paragraph",{enumerable:!0,get:function(){return c.Paragraph}}),Object.defineProperty(t,"OrderedList",{enumerable:!0,get:function(){return c.OrderedList}}),Object.defineProperty(t,"UnorderedList",{enumerable:!0,get:function(){return c.UnorderedList}}),Object.defineProperty(t,"InlineCode",{enumerable:!0,get:function(){return c.InlineCode}}),Object.defineProperty(t,"Emphasis",{enumerable:!0,get:function(){return c.Emphasis}}),Object.defineProperty(t,"Strong",{enumerable:!0,get:function(){return c.Strong}}),Object.defineProperty(t,"Code",{enumerable:!0,get:function(){return c.Code}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return c.Link}}),Object.defineProperty(t,"ListItem",{enumerable:!0,get:function(){return c.ListItem}});var f=n(5),s=a(f),p=n(365),m=a(p),g=n(514),v=n(520);r.contextTypes=g.contextTypes},516:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].Root;return k["default"].createElement("div",(0,_["default"])({},t,{className:n}))}function l(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].Paragraph;return k["default"].createElement("p",(0,_["default"])({},t,{className:n}))}function o(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].OrderedList;return k["default"].createElement("ol",(0,_["default"])({},t,{className:n}))}function i(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].UnorderedList;return k["default"].createElement("ul",(0,_["default"])({},t,{className:n}))}function u(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].Code;return k["default"].createElement("pre",(0,_["default"])({},t,{className:n}))}function d(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].NoteRoot;return k["default"].createElement("div",(0,_["default"])({},t,{className:n}))}function c(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].TKRoot;return k["default"].createElement("div",(0,_["default"])({},t,{className:n}))}function f(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].Emphasis;return k["default"].createElement("em",(0,_["default"])({},t,{className:n}))}function s(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].Strong;return k["default"].createElement("strong",(0,_["default"])({},t,{className:n}))}function p(e){var t=e.variant,n=void 0===t?{}:t,a=(0,y["default"])(e,["variant"]),r=P["default"].Link+(n.hover?" "+P["default"].Link__hover:"");return k["default"].createElement(O.Link,(0,_["default"])({},a,{className:r}))}function m(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].ListItem;return k["default"].createElement("li",(0,_["default"])({},t,{className:n}))}function g(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].InlineCode;return k["default"].createElement("code",(0,_["default"])({},t,{className:n}))}function v(e){var t=(e.variant,(0,y["default"])(e,["variant"])),n=P["default"].Heading+(1==t.level?" "+P["default"].Heading__prop__6fa24d:"")+(2==t.level?" "+P["default"].Heading__prop__70ad44:"")+(3==t.level?" "+P["default"].Heading__prop__be9d2c:"")+(t.level>=4?" "+P["default"].Heading__prop__f335cd:"")+(t.level>=5?" "+P["default"].Heading__prop__d5070c:"");return k["default"].createElement(w.Heading,(0,_["default"])({},t,{className:n}))}Object.defineProperty(t,"__esModule",{value:!0});var h=n(375),_=a(h),b=n(413),y=a(b);t.Root=r,t.Paragraph=l,t.OrderedList=o,t.UnorderedList=i,t.Code=u,t.NoteRoot=d,t.TKRoot=c,t.Emphasis=f,t.Strong=s,t.Link=p,t.ListItem=m,t.InlineCode=g,t.Heading=v;var E=n(5),k=a(E),x=n(517),P=a(x),O=n(364),w=n(519)},517:function(e,t,n){var a=n(518);"string"==typeof a&&(a=[[e.id,a,""]]);n(476)(a,{});a.locals&&(e.exports=a.locals)},518:function(e,t,n){t=e.exports=n(475)(),t.push([e.id,"._1BD5gGOHp7L07wSNIiFtuJ,._1G_uk90_HC-G0Kg3ypWBfE,._1iIRk-vCjydbreUH5wYmsb,._2jt0kDNfkKBUXJIrZPQ6vP,._2vA9Fv7_BprK4mTnUjxmjO,._3-z2LH0GXphtxjuIZ-YGkm{margin-top:0;margin-bottom:1.7em}._2l1xEiMocah0FM40oX2Ok4{font-style:italic}._2HHESfbJM0yXxL44xkK-_E{font-weight:400}._-LFu3O-DQ48VJs3gktBgB{background:#f9f1b3;color:#555;text-decoration:none;font-weight:400;padding:1px 3px;margin:0 -3px}._-LFu3O-DQ48VJs3gktBgB:hover,.CpV7p95zDhsBQ-1QllMkm{background:#f5de1b;color:#000}._3-z2LH0GXphtxjuIZ-YGkm{line-height:1.6em}._1BD5gGOHp7L07wSNIiFtuJ,._2vA9Fv7_BprK4mTnUjxmjO{padding-left:1.5em}._1BD5gGOHp7L07wSNIiFtuJ>._3mqK_imVz2pmuFo4qp1ck2{list-style-type:square}._3mqK_imVz2pmuFo4qp1ck2>._3-z2LH0GXphtxjuIZ-YGkm{margin-bottom:.5em}._3zwAWp1UNPXpIZEfh1SeHx{font-size:10pt;padding:2px;margin:0 -2px;padding-bottom:0}._1G_uk90_HC-G0Kg3ypWBfE,._3zwAWp1UNPXpIZEfh1SeHx{font-family:Menlo,Monaco,monospace;background:#f9f9f9}._1G_uk90_HC-G0Kg3ypWBfE{color:#555;border-bottom:1px solid #c7c7c7;font-size:9pt;overflow:auto;padding:1.5em 0;padding-left:20px}._1TrPe8ukTbq6O2Upi785po{position:relative;margin-top:2em;margin-bottom:1em;text-transform:uppercase;font-weight:800}._3H8MnuBjFq3THNcKWdVQD3{letter-spacing:-1px;font-size:2rem}._3TDFHgVSrReu3101TyFoUr{letter-spacing:-1px;font-size:1.75rem}._3a6123WaQzUbYIEKV27Y22{letter-spacing:-1px;font-size:1.3rem}._2kdxUN4NgtJEGiCzgXNCXU{letter-spacing:-.5px;font-size:1rem;color:#666}._2odBDYK20ItUOV0qFIi5RL{font-size:.8rem}@media only screen and (min-width:600px){._3zwAWp1UNPXpIZEfh1SeHx{font-size:9pt}}",""]),t.locals={Root:"_2s_6m2ddItDLTaYNlQ3El",Paragraph:"_3-z2LH0GXphtxjuIZ-YGkm",OrderedList:"_2vA9Fv7_BprK4mTnUjxmjO",UnorderedList:"_1BD5gGOHp7L07wSNIiFtuJ",Code:"_1G_uk90_HC-G0Kg3ypWBfE",NoteRoot:"_2jt0kDNfkKBUXJIrZPQ6vP",TKRoot:"_1iIRk-vCjydbreUH5wYmsb",Emphasis:"_2l1xEiMocah0FM40oX2Ok4",Strong:"_2HHESfbJM0yXxL44xkK-_E",Link:"_-LFu3O-DQ48VJs3gktBgB",Link__hover:"CpV7p95zDhsBQ-1QllMkm",ListItem:"_3mqK_imVz2pmuFo4qp1ck2",InlineCode:"_3zwAWp1UNPXpIZEfh1SeHx",Heading:"_1TrPe8ukTbq6O2Upi785po",Heading__prop__6fa24d:"_3H8MnuBjFq3THNcKWdVQD3",Heading__prop__70ad44:"_3TDFHgVSrReu3101TyFoUr",Heading__prop__be9d2c:"_3a6123WaQzUbYIEKV27Y22",Heading__prop__f335cd:"_2kdxUN4NgtJEGiCzgXNCXU",Heading__prop__d5070c:"_2odBDYK20ItUOV0qFIi5RL"}},519:function(e,t,n){e.exports=n(510)},520:function(e,t,n){e.exports=n(521)},521:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Heading=void 0;var r=n(522),l=a(r);t.Heading=l["default"]},522:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.children,n=e.name,a=e.Component,r=void 0===a?d.Heading:a,l=(0,o["default"])(e,["children","name","Component"]);return u["default"].createElement(r,l,u["default"].createElement(f["default"],{name:n}),t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(413),o=a(l);t["default"]=r;var i=n(5),u=a(i),d=n(519),c=n(512),f=a(c)}});