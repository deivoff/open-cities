(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"27S6":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comments",function(){var e=n("Ntj2");return{page:e.default||e}}])},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"3JuP":function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),o=r(n("0iUn")),a=r(n("MI3g")),i=r(n("a7VT")),u=r(n("AT/M")),s=r(n("sLSF")),c=r(n("Tit0")),f=r(n("dfwq")),l=r(n("ttDY"));(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var p=n("q1tI"),d=!1;t.default=function(){var e,t=new l.default;function n(n){e=n.props.reduceComponentsToState((0,f.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function f(e){var r;return(0,o.default)(this,f),r=(0,a.default)(this,(0,i.default)(f).call(this,e)),d&&(t.add((0,u.default)(r)),n((0,u.default)(r))),r}return(0,c.default)(f,r),(0,s.default)(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,s.default)(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(p.Component)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,c=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),i=n("UnBK"),u=n("SntB");function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=s},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n("tQ2B"):"undefined"!==typeof XMLHttpRequest&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(a)}),e.exports=u}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),a=i.join("&")}if(a){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},Ntj2:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),a=n("O40h"),i=n("0iUn"),u=n("sLSF"),s=n("MI3g"),c=n("a7VT"),f=n("AT/M"),l=n("Tit0"),p=n("hfKm"),d=n.n(p);function h(e,t,n){return t in e?d()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n("q1tI"),v=n.n(m),y=n("m/Pd"),g=n.n(y),x=n("vDqi"),w=n.n(x).a.create({baseURL:"/",headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0}),b=n("e2Ci");n("oikv");var S=function(e){function t(){var e,n;Object(i.default)(this,t);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return n=Object(s.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(u))),h(Object(f.default)(n),"state",{text:"",loading:!1,error:null}),h(Object(f.default)(n),"handleTextChange",function(e){n.setState({text:e.target.value})}),h(Object(f.default)(n),"handleSubmit",function(){var e=Object(a.default)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.setState({loading:!0,error:null}),e.prev=2,n.state.text){e.next=5;break}throw new Error("Empty comment not allowed");case 5:return e.next=7,w.post("/api/comments",{comment:n.state.text});case 7:n.setState({error:null,text:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n.setState({error:e.t0});case 13:return e.prev=13,n.setState({loading:!1}),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[2,10,13,16]])}));return function(t){return e.apply(this,arguments)}}()),n}return Object(l.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this.state,t=e.loading,n=e.text,r=e.error;return v.a.createElement("div",this.props,v.a.createElement(g.a,null,v.a.createElement("title",null,"Comments | Koa + Next.js")),v.a.createElement("div",null,v.a.createElement("h1",null,"Comments:"),v.a.createElement("form",{onSubmit:this.handleSubmit},v.a.createElement("input",{type:"text",value:n,onChange:this.handleTextChange}),v.a.createElement("input",{type:"submit",value:t?"Loading...":"Submit",disabled:t})),r&&v.a.createElement("p",null,"Error: ",r)))}}]),t}(m.Component);h(S,"defaultProps",{comments:[]});t.default=Object(b.a)()(S)},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),i=n("JEQr"),u=n("2SVd"),s=n("5oMp");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!u(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),u=n("NwJ3"),s=n("tEej"),c=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,l,p=a(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,y=0,g=f(p);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==g||d==Array&&u(g))for(n=new d(t=s(p.length));t>y;y++)c(n,y,v?m(p[y],y):p[y]);else for(l=g.call(p),n=new d;!(o=l.next()).done;y++)c(n,y,v?i(l,m,[o.value,y],!0):o.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("3JuP");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),o=n.n(r);var a=n("d04V"),i=n.n(a),u=n("yLu3"),s=n.n(u);function c(e){return function(e){if(o()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(s()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return c})},e2Ci:function(e,t,n){"use strict";function r(){return function(e){return e.getInitialProps=function(e){return e.query},e}}n.d(t,"a",function(){return r})},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(a)&&u.push("domain="+a),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},ldVq:function(e,t,n){var r=n("QMMT"),o=n("UWiX")("iterator"),a=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45"),o=r(n("ttDY")),a=function(e){return e&&e.__esModule?e:{default:e}};(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var i=a(n("q1tI")),u=a(n("4hZ1")),s=n("3JuP"),c=n("IClC"),f=n("Wziy");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(p,[]).reverse().concat(l("",t.inAmpMode)).filter(function(){var e=new o.default,t=new o.default,n=new o.default,r={};return function(a){if(a.key&&"number"!==typeof a.key&&0===a.key.indexOf(".$"))return!e.has(a.key)&&(e.add(a.key),!0);switch(a.type){case"title":case"base":if(t.has(a.type))return!1;t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s){if(n.has(s))return!1;n.add(s)}else{var c=a.props[s],f=r[s]||new o.default;if(f.has(c))return!1;f.add(c),r[s]=f}}}return!0}}()).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";"title"!==e.type||e.props.className||(n=void 0);var r=e.key||t;return i.default.cloneElement(e,{key:r,className:n})})}var m=u.default();function v(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,function(e){return i.default.createElement(c.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(m,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)})})}v.rewind=m.rewind,t.default=v},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),i=n("w0Vi"),u=n("OTTw"),s=n("LYNF");e.exports=function(e){return new Promise(function(t,c){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,c,r),p=null}},p.onabort=function(){p&&(c(s("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){c(s("Network Error",e,null,p)),p=null},p.ontimeout=function(){c(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=n("eqyj"),v=(e.withCredentials||u(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;v&&(l[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),c(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=n("x86X"),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function u(e){return null!==e&&"object"===typeof e}function s(e){return"[object Function]"===a.call(e)}function c(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:u,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:s,isStream:function(e){return u(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},yLu3:function(e,t,n){e.exports=n("VKFn")},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),i=n("SntB");function u(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=u(n("JEQr"));s.Axios=a,s.create=function(e){return u(i(s.defaults,e))},s.Cancel=n("endd"),s.CancelToken=n("jfS+"),s.isCancel=n("Lmem"),s.all=function(e){return Promise.all(e)},s.spread=n("DfZB"),e.exports=s,e.exports.default=s}},[["27S6",1,0]]]);