(this["webpackJsonpclima-react"]=this["webpackJsonpclima-react"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),i=a.n(s),r=(a(13),a(5)),l=a.n(r),d=a(8),j=a(2),o=a(0),u=function(e){var t=e.titulo;return Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"nav-wrapper light-blue darken-2",children:Object(o.jsx)("a",{href:"!#",className:"brand-logo",children:t})})})},b=a(3),p=a(6),O=function(e){var t=e.busqueda,a=e.setBusqueda,n=e.setConsultar,s=Object(c.useState)(!1),i=Object(j.a)(s,2),r=i[0],l=i[1],d=t.ciudad,u=t.pais,O=function(e){return a(Object(p.a)(Object(p.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==u.trim()?(l(!1),n(!0)):l(!0)},children:[r&&Object(o.jsx)("p",{className:"red darken-4",children:" Todos los campos son obligatorios "}),Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{type:"text",name:"ciudad",id:"ciudad",value:d,onChange:O}),Object(o.jsx)("label",{htmlFor:"ciudad",children:"Ciudad:"})]}),Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsxs)("select",{name:"pais",id:"pais",value:u,onChange:O,children:[Object(o.jsx)("option",{value:"",children:"-- Seleccionar pa\xeds --"}),Object(o.jsx)("option",{value:"US",children:"Estados Unidos"}),Object(o.jsx)("option",{value:"MX",children:"M\xe9xico"}),Object(o.jsx)("option",{value:"AR",children:"Argentina"}),Object(o.jsx)("option",{value:"CO",children:"Colombia"}),Object(o.jsx)("option",{value:"CR",children:"Costa Rica"}),Object(o.jsx)("option",{value:"ES",children:"Espa\xf1a"}),Object(o.jsx)("option",{value:"PE",children:"Per\xfa"})]}),Object(o.jsx)("div",{className:"input-field col s12",children:Object(o.jsx)("input",{type:"submit",value:"Buscar Clima",className:"waves-effect waves-light btn-large btn-block yellow accent-4"})})]})]})},h=function(e){var t=e.resultado,a=t.name,c=t.main;if(!a)return null;var n=273.15;return Object(o.jsx)("div",{className:"card-panel white col s12",children:Object(o.jsxs)("div",{className:"black-text",children:[Object(o.jsxs)("h2",{children:["El clima de ",a," es:"]}),Object(o.jsxs)("p",{className:"temperatura",children:[parseFloat(c.temp-n,10).toFixed(2),Object(o.jsx)("span",{children:"\u2103"})]}),Object(o.jsxs)("p",{children:["M\xe1xima",parseFloat(c.temp_max-n,10).toFixed(2),Object(o.jsx)("span",{children:"\u2103"})]}),Object(o.jsxs)("p",{children:["M\xednima",parseFloat(c.temp_min-n,10).toFixed(2),Object(o.jsx)("span",{children:"\u2103"})]})]})})},x=function(e){var t=e.mensaje;return Object(o.jsx)("p",{className:"red darken-4 error",children:t})};var m=function(){var e,t=Object(c.useState)({ciudad:"",pais:""}),a=Object(j.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),r=Object(j.a)(i,2),b=r[0],p=r[1],m=Object(c.useState)({}),v=Object(j.a)(m,2),f=v[0],g=v[1],N=Object(c.useState)(!1),C=Object(j.a)(N,2),w=C[0],F=C[1],S=n.ciudad,k=n.pais;return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=11;break}return"3deae13d16e64622710a7386c916cd26",t="https://api.openweathermap.org/data/2.5/weather?q=".concat(S,",").concat(k,"&appid=").concat("3deae13d16e64622710a7386c916cd26"),e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,g(c),"404"===f.cod?F(!0):F(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),p(!1)}),[b]),e=w?Object(o.jsx)(x,{mensaje:"No hay resultados"}):Object(o.jsx)(h,{resultado:f}),Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{titulo:"Clima React App"}),Object(o.jsx)("div",{className:"contenedor-form",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col m6 s12",children:Object(o.jsx)(O,{busqueda:n,setBusqueda:s,setConsultar:p})}),Object(o.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.1d4c669d.chunk.js.map