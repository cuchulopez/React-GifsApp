(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(t){var e=t.setCategorias,n="Escriba aqu\xed.",r=Object(a.useState)(n),c=Object(i.a)(r,2),u=c[0],o=c[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),u.trim().length>2&&(e((function(t){return[u].concat(Object(s.a)(t))})),o(""))},children:Object(j.jsx)("input",{type:"text",value:u,onClick:function(){u===n&&o("")},onChange:function(t){o(t.target.value)}})})};d.protoType={setCategorias:o.a.func.isRequired};var f=n(11),l=n(6),b=n.n(l),p=n(9),m=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,a,r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=p8rzj4e8WJCHOfgGYvaFQydbT8y1kJdz"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("p",{children:e})]})},h=function(t){var e=t.categoria,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){m(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),500)}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__rubberBand",children:e}),c&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(j.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(j.jsx)(O,Object(f.a)({},t),t.id)}))})]})},g=function(){var t=Object(a.useState)(["Surf"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategorias:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t){return Object(j.jsx)(h,{categoria:t},t)}))})]})};n(20);c.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.33e8c4aa.chunk.js.map