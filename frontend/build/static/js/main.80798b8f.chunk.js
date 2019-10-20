(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),o=a(22),i=a(26),s=a(13),m=a(4),u=a(21),d=a(32),_=a(71),p=a(28),v=a(31),f=a(27);function b(){var e=Object(v.a)(["\n  mutation CreateLayer($name: String!, $description: String!, $city: String!){\n    createLayer(layerInput: {\n      name: $name,\n      description: $description,\n      city: $city\n    }) {\n      _id\n      name\n      description\n    }\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(v.a)(["\n  mutation AuthGoogle($code: String!){\n    authGoogle(code: $code) {\n      token\n    }\n  }\n"]);return E=function(){return e},e}var h=Object(f.a)(E()),g=Object(f.a)(b());function y(){var e=Object(v.a)(["\n  query GetLayers($city: String!) {\n    layers(city: $city) {\n      _id\n      name\n      description\n    }\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(v.a)(["\n  {\n    cities {\n      name\n      url\n      center\n      zoom\n    }\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(v.a)(["\n  {\n    getGoogleOAuthRedirect {\n      url\n    }\n  }\n"]);return O=function(){return e},e}var q=Object(f.a)(O()),j=Object(f.a)(w()),N=Object(f.a)(y());function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x=new p.a,C=Object(d.b)({uri:"http://localhost:7000/graphql"}),M=Object(_.a)(function(e,t){var a=t.headers,n=localStorage.getItem("token");return{headers:S({},a,{Authorization:n?"Bearer ".concat(n):""})}}),P=new u.a({cache:x,link:M.concat(C),name:"open-cities",queryDeduplication:!1,defaultOptions:{watchQuery:{fetchPolicy:"cache-and-network"}}}),z=a(38),B=a.n(z),I=a(56),F=a(16),$=a(10),G=a.n($),D=a(29),A=a(23),T=a.n(A),V=function(e){return r.a.createElement("button",Object.assign({className:G()(T.a.button,T.a._success),type:"button"},e))},W=function(e){return r.a.createElement("button",Object.assign({className:T.a["google-button"],type:"button"},e))},L=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,t)};function R(e){return r.a.createElement("div",Object.assign({className:G()(T.a.card)},e))}L.Wrapper=function(e){return r.a.createElement("div",Object.assign({className:G()(T.a.page__wrapper)},e))},L.Map=function(e){return r.a.createElement("div",Object.assign({className:G()(T.a.page__map)},e))},R.Title=function(e){return r.a.createElement("div",Object.assign({className:G()(T.a.card__title)},e))},R.Body=function(e){return r.a.createElement("div",Object.assign({className:G()(T.a.card__body)},e))};var Q=a(45),U=a.n(Q),H=a(33),K=a.n(H),J=function(e){return r.a.createElement(U.a,Object.assign({},e,{className:K.a["modal-window"],overlayClassName:K.a["modal-wrapper"]}),r.a.createElement("button",{type:"button",className:K.a["modal-window__close"],onClick:e.onRequestClose,onKeyPress:e.onRequestClose},r.a.createElement("span",null),r.a.createElement("span",null)),e.children)};J.Title=function(e){return r.a.createElement("h2",Object.assign({},e,{className:K.a["modal-window__title"]}))},J.Body=function(e){return r.a.createElement("div",Object.assign({},e,{className:K.a["modal-window__body"]}))};var X=a(57),Z=a.n(X),Y=function(){return r.a.createElement("div",{className:Z.a.spiner},r.a.createElement("div",{className:Z.a["lds-ellipsis"]},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},ee=a(58),te=a.n(ee),ae=r.a.createContext({token:null,user:null,login:function(e){},logout:function(){}}),ne=a(5),re=a.n(ne),ce=function(){var e=Object(D.c)(j),t=e.data,a=e.loading,n=e.error;if(a)return null;if(n)return null;var c=t.cities;return r.a.createElement("div",{className:G()(re.a.nav__dropdown)},r.a.createElement("ul",{className:G()(re.a.nav__list)},c?c.map(function(e){var t=e.name,a=e.url,n=e.zoom,c=e.center;return r.a.createElement("li",{className:G()(re.a.nav__elem),key:t},r.a.createElement(o.b,{to:{pathname:"/cities/".concat(a),state:{center:c,zoom:n,name:t}}},t))}):null))},le=function(e){var t=e.user,a=t.name,n=t.photos,c=e.logout;return r.a.createElement("div",{className:re.a.nav__profile},r.a.createElement("div",{className:G()(re.a.nav__elem,re.a._dropdown)},a?"".concat(a.givenName," ").concat(a.familyName):null,r.a.createElement("div",{className:G()(re.a.nav__dropdown,re.a._profile)},r.a.createElement("ul",{className:G()(re.a.nav__list,re.a._profile)},r.a.createElement("li",{className:re.a.nav__elem},r.a.createElement(o.b,{to:"/profile"},"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("li",{className:re.a.nav__elem},r.a.createElement(o.b,{to:"/maps"},"\u041c\u043e\u0438 \u043a\u0430\u0440\u0442\u044b")),r.a.createElement("li",{className:re.a.nav__elem},r.a.createElement(o.b,{to:"/researches"},"\u041c\u043e\u0438 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f")),r.a.createElement("li",{className:re.a.nav__elem,onClick:c},"\u0412\u044b\u0439\u0442\u0438")))),r.a.createElement("div",{className:re.a.nav__photo},r.a.createElement("img",{alt:"User thimbnail",src:n&&n[n.length-1].url?n[n.length-1].url:""})))},oe=function(){var e=Object(n.useState)(!1),t=Object(F.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(F.a)(l,2),s=i[0],m=i[1],u=Object(n.useContext)(ae),d=u.token,_=u.user,p=u.login,v=u.logout,f=Object(D.a)(),b=function(){var e=Object(I.a)(B.a.mark(function e(t){var a,n,r,c;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.prev=2,e.next=5,f.query({query:q});case 5:a=e.sent,n=a.data,r=n.getGoogleOAuthRedirect.url,c=window.open(r,"OAuth"),window.addEventListener("message",E.bind(c)),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t){return e.apply(this,arguments)}}();function E(e){return g.apply(this,arguments)}function g(){return(g=Object(I.a)(B.a.mark(function e(t){var a,n,r,l;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.close(),window.removeEventListener("message",E),a=t.data,e.prev=3,e.next=6,f.mutate({mutation:h,variables:{code:a}});case 6:n=e.sent,r=n.data,l=r.authGoogle.token,p(l),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:return e.prev=15,m(!1),c(!1),e.finish(15);case 20:case"end":return e.stop()}},e,this,[[3,12,15,20]])}))).apply(this,arguments)}return r.a.createElement("header",{className:G()(re.a.header)},r.a.createElement(o.b,{className:re.a.logo,to:"/"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"),r.a.createElement("button",{type:"button",className:re.a.nav__button},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:re.a.nav},r.a.createElement("ul",{className:G()(re.a.nav__list)},r.a.createElement("li",{className:G()(re.a.nav__elem)},r.a.createElement(o.b,{to:"/about"},"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435")),r.a.createElement("li",{className:G()(re.a.nav__elem)},r.a.createElement(o.b,{to:"/research"},"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f")),r.a.createElement("li",{className:G()(re.a.nav__elem,re.a._dropdown)},"\u0413\u043e\u0440\u043e\u0434\u0430",r.a.createElement(ce,null))),s?r.a.createElement("div",{className:re.a.nav__spiner},r.a.createElement(Y,null)):d&&_?r.a.createElement(le,{user:_,logout:v}):r.a.createElement(V,{onClick:function(){c(!0)}},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(J,{isOpen:a,onRequestClose:function(){c(!1)},shouldCloseOnOverlayClick:!0},r.a.createElement(J.Title,null,"\u0412\u0445\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),s?r.a.createElement(Y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Body,null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),r.a.createElement(W,{onClick:b},"Google")))))},ie=a(76),se=a(46),me=function(e,t){return-(-(Math.random()*(t-e)+e)).toFixed(2)},ue=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=0,r=0;0===n;)n=Math.random();for(;0===r;)r=Math.random();var c=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r);return c=c/10+.5,c=Math.pow(c,a),c*=t-e,-(-(c+=e)).toFixed(2)},de=a(34),_e=a.n(de),pe=function(){var e=Math.random()>.33;return{x:"".concat(e?me(0,100):ue(10,80),"%"),y:"".concat(e?me(0,100):ue(35,90),"%"),radius:me(8,16)}},ve=function(e){var t=e.duration,a=Object(n.useState)(pe()),c=Object(F.a)(a,2),l=c[0],o=l.x,i=l.y,s=l.radius,m=c[1];return Object(n.useEffect)(function(){var e=setInterval(function(){m(pe())},1e3*t);return function(){return clearInterval(e)}},[t]),r.a.createElement("circle",{className:"innerCircle",cx:o,cy:i,r:"0",fill:"#38CDBE",stroke:"#38CDBE",strokeWidth:"3"},r.a.createElement("animate",{attributeType:"SVG",attributeName:"r",begin:"0s",dur:"".concat(t,"s"),repeatCount:"indefinite",from:"0",to:s}),r.a.createElement("animate",{attributeType:"CSS",attributeName:"stroke-width",begin:"0s",dur:"".concat(t,"s"),repeatCount:"indefinite",from:"5",to:"1"}),r.a.createElement("animate",{attributeType:"CSS",attributeName:"opacity",begin:"0s",dur:"".concat(t,"s"),repeatCount:"indefinite",from:"1",to:"0"}))},fe=function(e){var t=e.dots;return r.a.createElement("section",{className:_e.a.banner},r.a.createElement("div",{className:_e.a.description},r.a.createElement("h1",{className:_e.a.title},"\u0421\u0435\u0440\u0432\u0438\u0441 \u0433\u0435\u043e\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u043f\u043e\xa0\u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c"),r.a.createElement("p",{className:_e.a.text},"\u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e \u0440\u043e\u0434\u0435 \u0438 \u0432\u0438\u0434\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u0439 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e. \u0418 \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u0437\u044b\u0432 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0432\u0441\u0435 \u043f\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u0443")),r.a.createElement("div",{className:_e.a.decorative},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"73.5 47.5 1888 904",width:1888,height:904},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"a"},r.a.createElement("rect",{width:1888,height:904,x:"73.5",y:"47.5"}))),r.a.createElement("g",{fill:"none",stroke:"rgba(238, 238, 238, 0.5)",strokeLinecap:"square",strokeMiterlimit:"3",clipPath:"url(#a)"},r.a.createElement("path",{strokeWidth:"3",d:"M817 218c-31.701-6.844-87.333-35.667-105-12-18 24.667-86.667 113.667-89 122-2.333 8.333-23.333 158-10 178 13.333 20 33.333 42 36 52 2.667 10 8.375 23.75 16 34s110.5 52.5 165 82c92.631 50.14 311 222.5 330 220s91.5-67 83-111c-8.186-42.373-23.434-86.147 23-123 31.5-25 47.969-59.008 30-81-33.5-41-50.667-152.667-36-170 14.667-17.333 15.333-36.333 11-60s-6.552-90.758-43-121c-36.448-30.242-113-36.5-138-54-18.18-12.726-59.474-34.474-78-53-22-22-90.333-79.333-119-5s-32 111.5-76 102zm334 673q10.547 6.313 29 59m-400 0q46-98 47-119c1-21 10-54 6-84s2-38-6-58-10-15.25-8-29 22.5-64.375 20-74c-5.204-20.036 2.75-22.25 12-20s83.333-73.667 87-79c3.667-5.333 21.906-111.531 20-115-1.906-3.469-28-11.25-37-18s150.25-101 163-112 22-23.25 30-43q8-19.75 60-150M75 777q112.5-.5 140-5c27.5-4.5 299-67.5 330-77q31-9.5 119-47 90.313-49.062 101-55c10.688-5.937 40.5-21.187 57-13q16.5 8.188 17 7m1121-234q-115.5 38-141 55c-25.5 17-91.5 57.5-112 62s-108 8.5-131 3-591.562-91.187-605-96q-13.437-4.812-14-6M843 216c7.5 3.75 13.125.5 24 7s28.625 20 28 29-5.375 63.25 0 68 24.625 9.625 27 16q2.375 6.375-1 17m433 597c-2.875-6.875-14.25-42.5-23-53q-8.75-10.5-57-75-33.625-36.422-48-42c-14.375-5.578-166.73-116.873-215-144-40.333-22.667-198.094-201.937-208-201-9.906.938-58.5 53.5-94 44s-170-9.5-200-33-123-115.333-147-129c-24-13.667-72.667-35.667-91-56s-82-95.25-196-93",vectorEffect:"non-scaling-stroke"}),r.a.createElement("path",{strokeWidth:"2",d:"M987 777q79.5-103.5 82-114c2.5-10.5 2.5-29-10-43S951.75 516 945 510s-27.875-33-73-39m-5 226l23-34q59 26 73 34t142 101l-31 43m-39-453q3.75 12.75 3 19c-.75 6.25-13 96.625-17 100s-77.375 72.875-81 82-17.509 30.488-19 33q-2.578 4.344-31 41m-32-176q12.25-12.125 14-16c1.75-3.875-6-51.5-5-56s1.625-8 8-15q6.375-7 46-47m9 385q64.667-97.333 75-107 10.333-9.667 33-32m-15-99q12.5 5.75 19 6c6.5.25 31.5 1.75 39 4s72.75-12.25 80-14q7.25-1.75 99-11m-191 175c9-1.5 11.5-10 20-4s87 72 97 77q10 5 48 5m-64-244c2 12.5 0 24 4 32s10.5 11.5 10 23 0 100.5-4 107q-4 6.5-35 46m37-54c12.375 10.5 11.5 15 17 15h64M896 378c8.5 9.375 9.75 11.25 11 18s-.625 20 2 22 17.5-11.125 26-10q8.5 1.125 18 3m241 0c-4.5-6-7-18.375-14-21s-17-.375-21-9-4-26.375-16-28-33.25 2.125-44-5-40.375-52.75-49-56q-8.625-3.25-32-7l-12 98m-35-7c4.375-6.625 1.75-12.25 10-19q8.25-6.75 30-18",vectorEffect:"non-scaling-stroke"}),r.a.createElement("path",{d:"M861 583l-22 4m40 92l91 62M858 563q16.625 93.563 19 95 2.375 1.438 13 5m215 135q11.75 10 14 9c2.25-1 20.5-25.75 19-28q-50-37.25-52-41c-2-3.75-17-22-21-20s-2.25 5-5 3q-2.75-2-19-15-10.312-6.625-13-8c-2.687-1.375-2.562 2.313-5 4-2.437 1.688-16.5-.937-22 0-5.5.938-33.312 41.25-34 44q-.687 2.75 29 17m31-65q-114.75-85.625-122-89c-7.25-3.375-69.062 19.016-75 16-5.937-3.016-58.5-17.5-61-23s2-7.75 0-11-68.667-78.667-66-86q2.667-7.333 4-53m149 238l-14-66m8 38l26-6m62-169q7.667-3 12 0c4.333 3 100.667 96.333 99 100q-1.667 3.667-11 12m-15-99q-25.062-7.953-31-5-5.937 2.953-20 13m10-7q-13.562-13.047-16-11-2.437 2.047-53 55m137 148L904 588l73-75m-73 75q-26.297-17.625-29-21c-2.703-3.375-8.672-14.062-13-18-4.328-3.937-71.5-63.25-76-69s-33.75-60.75-40-63-17.5-8.5-28-23-26-51.5-33-52-15 3-21 0q-6-3-26-38m122 132q-8.625 12.125-14 11c-5.375-1.125-10.625-3.75-17 0q-6.375 3.75-22 5-19.875-8.75-16-8c3.875.75-55.75-4-58-8s-.875-12.375-10-17q-9.125-4.625-255-99m693 402c-4.5 5.5-4.25 5.25-9 8s-9.5.75-17 17m15-241q.438 1.5 0 2-6.851 7.83-23 17l-31 33q-1.125.75-35 35m-93-116l56 56m-108-87l58-45m32-33l50 21m-37 25q-2.687-4.125-1-9 1.688-4.875 10-27m6-38l43 21m-16-39l20 35m-9-42l20 35M778 648q31.625-87.75 38-96t51-55l11-25m-44-9l-30 34m134 95q-88.5-89.5-94-89t-31 2m32-2l12-15m45-9q.667 15.333-4 21t-24 28m105 83l36-36 12-12m-16 63l-42-41m19-19q82.563 74.813 81 77-1.562 2.188-16 19m-249-84q-41.937-14.375-46-20c-4.062-5.625-23-23.333-23-30q0-6.667 3-51m-3 52l-10 9m-81 12q4.375-21.25 7-25c2.625-3.75 40.375-13.875 47-12q6.625 1.875 119 38m111 128l24-36",vectorEffect:"non-scaling-stroke"})),t.map(function(e,t){var a=e.duration;return r.a.createElement(ve,{key:"dot_".concat(t),duration:a})}))))},be=function(){var e=Object(n.useState)([{duration:me(4,8),key:0}]),t=Object(F.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(F.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)(function(){var e=setInterval(function(){i<200&&(c([].concat(Object(ie.a)(a),[{duration:me(3,5),key:0}])),s(i+1))},20);return function(){return clearInterval(e)}},[a,i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(se.Helmet,null,r.a.createElement("title",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 | \u0413\u043b\u0430\u0432\u043d\u0430\u044f ")),r.a.createElement(fe,{dots:a}))},Ee=a(109),he=a(110),ge=a(108),ye=a(111),we=a(72),Oe=a.n(we),qe=a(39),je=function(e){var t=e.city,a=Object(n.useState)(!1),c=Object(F.a)(a,2),l=c[0],o=c[1],i=Object(D.b)(g),s=Object(F.a)(i,2),m=s[0];s[1].data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){o(!0)},className:Oe.a.add},"+"),r.a.createElement(J,{isOpen:l,onRequestClose:function(){o(!1)},shouldCloseOnOverlayClick:!0},r.a.createElement(qe.c,{initialValues:{name:"",description:""},onSubmit:function(e,a){var n=e.name,r=e.description,c=a.setSubmitting;m({variables:{name:n,description:r,city:t}}),c(!1)},render:function(){return r.a.createElement(qe.b,null,r.a.createElement("label",{htmlFor:"name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u044f"),r.a.createElement(qe.a,{id:"name",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text"}),r.a.createElement("label",{htmlFor:"description"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u044f"),r.a.createElement(qe.a,{component:"textarea",id:"description",name:"description",placeholder:"\u0412\u0430\u0448\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",type:"text"}),r.a.createElement("button",{type:"submit",style:{display:"block"}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}})))},Ne=function(e){var t=e.defaultCity,a=Object(D.c)(N,{variables:{city:t}});a.data,a.loading,a.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,{city:t}))},ke=function(e){var t=e.city,a=e.center,n=e.zoom,c=e.cityName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.Helmet,null,r.a.createElement("title",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 | ",c," ")),r.a.createElement(L.Map,null,r.a.createElement(Ne,{defaultCity:t}),r.a.createElement(Ee.a,{center:a,zoom:n,style:{height:"calc(100vh - 80px)"}},r.a.createElement(he.a,{url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(ge.a,{position:a},r.a.createElement(ye.a,null,"A pretty CSS3 popup.",r.a.createElement("br",null),"Easily customizable.")))))},Se=(a(104),function(){var e=function(){var e=Object(n.useState)(null),t=Object(F.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(F.a)(c,2),o=l[0],i=l[1];Object(n.useEffect)(function(){var e=localStorage.getItem("token");if(e){r(e);var t=te()(e),a=t.email,n=t.name,c=t.photos,l=t.id;i({email:a,name:n,photos:c,id:l})}},[]);return{login:function(e){r(e),localStorage.setItem("token",e);var t=te()(e),a=t.email,n=t.name,c=t.photos,l=t.id;i({email:a,name:n,photos:c,id:l})},logout:function(){r(null),localStorage.removeItem("token"),i(null)},token:a,user:o}}();return r.a.createElement(s.a,{client:P},r.a.createElement(o.a,null,r.a.createElement(ae.Provider,{value:e},r.a.createElement(oe,null),r.a.createElement("main",{className:"main-content"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:be}),r.a.createElement(i.a,{path:"/cities/:city",component:function(e){var t=e.match,a=e.location.state,n=a.center,c=a.zoom,l=a.name;return r.a.createElement(ke,{city:t.params.city,center:n,zoom:c,cityName:l})}}))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));U.a.setAppElement("#root"),l.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,a){e.exports={button:"page_button__3jTi_",_success:"page__success__3SUP6","google-button":"page_google-button__2XlVT",page__title:"page_page__title__122xz",page__wrapper:"page_page__wrapper__866Hi"}},33:function(e,t,a){e.exports={"modal-wrapper":"modal_modal-wrapper__2Vyy5","modal-window":"modal_modal-window__2GtFu","modal-window__title":"modal_modal-window__title__31xJU","modal-window__body":"modal_modal-window__body__1ZeM6","modal-window__close":"modal_modal-window__close__1u9bC"}},34:function(e,t,a){e.exports={banner:"MainBanner_banner__2_kFZ",description:"MainBanner_description__1OoIM",title:"MainBanner_title__26lqc",text:"MainBanner_text__1Hc04",decorative:"MainBanner_decorative__201zB"}},5:function(e,t,a){e.exports={header:"header_header__mSSfb",_transparent:"header__transparent__QfXVf",logo:"header_logo__1PP9h",nav:"header_nav__2igZj",nav__profile:"header_nav__profile__2hUaW",nav__photo:"header_nav__photo__3vA1V",nav__spiner:"header_nav__spiner__1f7db",nav__button:"header_nav__button__3qVrU",nav__list:"header_nav__list__P807k",nav__elem:"header_nav__elem__3aKCs",_dropdown:"header__dropdown__gd2SX",nav__dropdown:"header_nav__dropdown__1RQI6",_profile:"header__profile__K3eQQ"}},57:function(e,t,a){e.exports={spiner:"spiner_spiner__3eob9","lds-ellipsis":"spiner_lds-ellipsis__1kWVz","lds-ellipsis1":"spiner_lds-ellipsis1__1ED3Q","lds-ellipsis2":"spiner_lds-ellipsis2__1zShh","lds-ellipsis3":"spiner_lds-ellipsis3__2jpw2"}},72:function(e,t,a){e.exports={add:"MapControllers_add__2wMKG"}},77:function(e,t,a){e.exports=a(105)}},[[77,1,2]]]);
//# sourceMappingURL=main.80798b8f.chunk.js.map