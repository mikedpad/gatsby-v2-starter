(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(215);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement("h1",null,"404 - NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},207:function(e,t,n){"use strict";n(42);var a=n(105),o=n.n(a),r=n(0),i=n.n(r),l=n(5),c=n.n(l),u=n(209),s=function(e){var t=e.children,n=e.to,a=o()(e,["children","to"]);return/^\/(?!\/)/.test(n)?i.a.createElement(u.a,Object.assign({to:n,onClick:function(e){e.persist();var t=e.target.pathname,n=document.location.pathname;if(console.log(e),console.log("To: "+t+" | Current: "+n),t===n)return e.stopPropagation(),void Object(u.b)(t,{replace:!0});Object(u.b)(t)}},a),t):i.a.createElement("a",Object.assign({href:n,rel:"noopener noreferrer",target:"_blank"},a),t)};t.a=s,s.propTypes={to:c.a.string.isRequired}},208:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r});var a="#242a31",o="#afafb1",r={normal:"#455a72",active:"#698eb9"}},209:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),i=n.n(r),l=n(41),c=n.n(l);n.d(t,"a",function(){return c.a}),n.d(t,"b",function(){return l.navigate});n(210),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},210:function(e,t,n){var a;e.exports=(a=n(214))&&a.default||a},211:function(e,t,n){"use strict";var a=n(207);n.d(t,"a",function(){return a.a})},212:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var a="Lora, 'Times New Roman', Times, serif",o="'Source Sans Pro', Helvetica, Arial, sans- serif"},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter"}}}}},214:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),o=n.n(a),r=n(5),i=n.n(r),l=n(69),c=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},215:function(e,t,n){"use strict";var a=n(217),o=n.n(a),r=n(213),i=n(0),l=n.n(i),c=n(5),u=n.n(c),s=n(218),m=n.n(s),f=n(206),d=n(216),p=n(207),g=(n(209),n(211)),b=n(208),v=f.b.ul.withConfig({displayName:"Navigation__UnorderedList",componentId:"sc-10g8xm2-0"})(["list-style-type:none;margin:0;padding:0;"]),h=f.b.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-10g8xm2-1"})(["display:inline-block;margin-left:0.75rem;&:first-child{margin-left:0;}"]),y=Object(f.b)(g.a).withConfig({displayName:"Navigation__NavLink",componentId:"sc-10g8xm2-2"})(["background-color:inherit;color:",";font-size:1.25rem;font-weight:300;padding:8px 10px;text-decoration:none;transition:all 0.2s ease-out;&:hover{background-color:#ffffff33;color:#fff;}"],b.c.normal),E=function(){return l.a.createElement(v,null,l.a.createElement(h,null,l.a.createElement(y,{to:"/"},"Home")),l.a.createElement(h,null,l.a.createElement(y,{to:"/blog"},"Blog")))},w=n(212);function x(){var e=o()(["\n  :root {\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n  }\n"]);return x=function(){return e},e}var _=Object(f.a)(x(),b.a,b.b,w.a),k=f.b.header.withConfig({displayName:"Layout__Header",componentId:"sc-1kgvniv-0"})(["background-color:",";margin-bottom:1.45rem;"],Object(d.c)(.05,b.a)),N=f.b.main.withConfig({displayName:"Layout__Main",componentId:"sc-1kgvniv-1"})(["overflow:auto;padding:0;"]),j=f.b.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1kgvniv-2"})(["margin:0 auto;padding:1.5rem 1.25rem;",""],Object(d.b)({prop:"max-width",fromSize:"600px",toSize:"960px"},"640px","1200px")),C=f.b.div.withConfig({displayName:"Layout__FlexWrap",componentId:"sc-1kgvniv-3"})(["align-items:center;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),L=f.b.h1.withConfig({displayName:"Layout__Title",componentId:"sc-1kgvniv-4"})(["margin:0;"]),O=Object(f.b)(p.a).withConfig({displayName:"Layout__TitleLink",componentId:"sc-1kgvniv-5"})(["color:",";text-decoration:none;transition:color 0.2s ease-out;&:hover{color:#fff;}"],b.b),I=function(e){var t=e.title,n=e.children,a=r.data.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(m.a,null,l.a.createElement("title",null,""+a+(t||""))),l.a.createElement(k,null,l.a.createElement(j,null,l.a.createElement(C,null,l.a.createElement(L,null,l.a.createElement(O,{to:"/"},a)),l.a.createElement("nav",null,l.a.createElement(E,null))))),l.a.createElement(N,null,l.a.createElement(j,null,n)))},T=I;I.propTypes={title:u.a.string},I.defaultProps={title:null},n.d(t,"a",function(){return T})}}]);
//# sourceMappingURL=component---src-pages-404-js-849a1f47a009af8f4b47.js.map