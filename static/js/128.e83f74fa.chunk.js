"use strict";(self.webpackChunkreact_test_app=self.webpackChunkreact_test_app||[]).push([[128],{1128:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r=e(4165),i=e(5861),c=e(3433),o=e(9439),a=e(2791),u=e(1889),s=e(6151),l=e(7621),h=e(2169),d=e(9504),f=e(890),p=e(2363),x=e(9230),m=e(184),Z=function(t){var n=t.title,e=t.thumbnailUrl,r=t.id,i=t.deleteNews,c=(0,x.$G)().t,o=function(){window.confirm("".concat(c("news.warning")))&&i(r)};return(0,m.jsx)(u.ZP,{item:!0,xs:!0,md:3,children:(0,m.jsxs)(l.Z,{sx:{height:"100%"},children:[(0,m.jsx)(h.Z,{component:"img",sx:{height:140},image:e}),(0,m.jsx)(d.Z,{children:(0,m.jsx)(f.Z,{color:"inherit",variant:"h6",component:"h3",children:n})}),o&&(0,m.jsx)(p.Z,{children:(0,m.jsx)(s.Z,{variant:"contained",onClick:o,children:c("news.remove")})})]})})},j=e(1243),v=function(t){return t.map((function(t){return{id:t.id,title:t.title,thumbnailUrl:t.thumbnailUrl}}))},g=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var e,i,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat("https://jsonplaceholder.typicode.com/photos","?_limit=",12,"&_page=").concat(n),t.next=3,j.Z.get(e);case 3:return i=t.sent,t.next=6,i.data;case 6:return c=t.sent,t.abrupt("return",v(c));case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),w=e(4128),b=function(){var t=(0,a.useState)([]),n=(0,o.Z)(t,2),e=n[0],l=n[1],h=(0,a.useState)(1),d=(0,o.Z)(h,2),f=d[0],p=d[1],x=(0,a.useState)(!1),j=(0,o.Z)(x,2),v=j[0],b=j[1];(0,a.useEffect)((function(){b(!0),g(f).then((function(t){b(!1),l((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(t))}))})).catch((function(t){return console.log(t)}))}),[f]);var k=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://jsonplaceholder.typicode.com/posts","/").concat(n),{method:"DELETE"});case 2:l(e.filter((function(t){return t.id!==n})));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[e.length>0&&(0,m.jsx)(u.ZP,{container:!0,spacing:1,sx:{mt:"10px",mb:"10px"},children:e.map((function(t){var n=t.id,e=t.title,r=t.thumbnailUrl;return(0,m.jsx)(Z,{id:n,title:e,thumbnailUrl:null===r||void 0===r?void 0:r.toString(),deleteNews:k},n)}))}),v?(0,m.jsx)(w.Z,{}):(0,m.jsx)("div",{style:{textAlign:"center"},children:(0,m.jsx)(s.Z,{variant:"outlined",onClick:function(){p((function(t){return t+1}))},children:"Load More"})})]})},k=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(b,{})})}}}]);
//# sourceMappingURL=128.e83f74fa.chunk.js.map