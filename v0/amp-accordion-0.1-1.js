;
(self.AMP=self.AMP||[]).push({m:0,v:"2307272333000",n:"amp-accordion",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function o(n){return"string"==typeof n}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}function u(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var c=Object.prototype;function f(n,t,r,i,e,o,a,u,c,f,s){return n}c.hasOwnProperty,c.toString;var s="ArrowUp";function d(n,t,r,i){return function(e){return h.solveYValueFromXValue(e,0,0,n,t,r,i,1,1)}}var h=function(){function n(){}return n.solveYValueFromXValue=function(t,r,i,e,o,a,u,c,f){return n.Wa(n.Ka(t,r,e,a,c),i,o,u,f)},n.Ka=function(t,r,i,e,o){var a=1e-6,u=(t-r)/(o-r);if(u<=0)return 0;if(u>=1)return 1;for(var c=0,f=1,s=0,d=0;d<8;d++){s=n.Ya(u,r,i,e,o);var h=(n.Ya(u+a,r,i,e,o)-s)/a;if(Math.abs(s-t)<a)return u;if(Math.abs(h)<a)break;s<t?c=u:f=u,u-=(s-t)/h}for(var l=0;Math.abs(s-t)>a&&l<8;l++)s<t?(c=u,u=(u+f)/2):(f=u,u=(u+c)/2),s=n.Ya(u,r,i,e,o);return u},n.Ya=function(t,r,i,e,o){if(0==t)return r;if(1==t)return o;var a=n.Ja(r,i,t),u=n.Ja(i,e,t),c=n.Ja(e,o,t);return a=n.Ja(a,u,t),u=n.Ja(u,c,t),n.Ja(a,u,t)},n.Wa=function(t,r,i,e,o){if(0==t)return r;if(1==t)return o;var a=n.Ja(r,i,t),u=n.Ja(i,e,t),c=n.Ja(e,o,t);return a=n.Ja(a,u,t),u=n.Ja(u,c,t),n.Ja(a,u,t)},n.Ja=function(n,t,r){return n+r*(t-n)},n}(),l={LINEAR:function(n){return n},EASE:function(n){return h.solveYValueFromXValue(n,0,0,.25,.1,.25,1,1,1)},EASE_IN:function(n){return h.solveYValueFromXValue(n,0,0,.42,0,1,1,1,1)},EASE_OUT:function(n){return h.solveYValueFromXValue(n,0,0,0,0,.58,1,1,1)},EASE_IN_OUT:function(n){return h.solveYValueFromXValue(n,0,0,.42,0,.58,1,1,1)}},v={"linear":l.LINEAR,"ease":l.EASE,"ease-in":l.EASE_IN,"ease-out":l.EASE_OUT,"ease-in-out":l.EASE_IN_OUT};function p(n){if(!n)return null;if(o(n)){if(-1!=n.indexOf("cubic-bezier")){var t=n.match(/cubic-bezier\((.+)\)/);if(t){var r=t[1].split(",").map(parseFloat);if(4==r.length){for(var i=0;i<4;i++)if(isNaN(r[i]))return null;return d(r[0],r[1],r[2],r[3])}}return null}return v[n]}return n}var m,b=!0,y=!0;function x(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,i=n.stack,e=new Error(r);for(var o in n)e[o]=n[o];return e.stack=i,e}function w(n){for(var t,r=null,i="",e=u(arguments,!0);!(t=e()).done;){var o=t.value;o instanceof Error&&!r?r=x(o):(i&&(i+=" "),i+=o)}return r?i&&(r.message=i+": "+r.message):r=new Error(i),r}function g(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}var E=["Webkit","webkit","Moz","moz","ms","O","o"];function A(n){var t=n.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()}));return E.some((function(n){return t.startsWith(n+"-")}))?"-".concat(t):t}function S(n,t,r){if(j(t))return t;m||(m=Object.create(null));var i=m[t];if(!i||r){if(i=t,void 0===n[t]){var e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(t),o=function(n,t){for(var r=0;r<E.length;r++){var i=E[r]+t;if(void 0!==n[i])return i}return""}(n,e);void 0!==n[o]&&(i=o)}r||(m[t]=i)}return i}function O(n,t,r,i,e){var o=S(n.style,t,e);if(o){var a=i?r+i:r;n.style.setProperty(A(o),a)}}function M(n,t){for(var r in t)O(n,r,t[r])}function j(n){return n.startsWith("--")}function R(n,t){return function(r,i){for(var e in t)O(n,("display"===(o=e)&&function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var e=w.apply(null,r);e.name=n||e.name,g(e)}("STYLE","`display` style detected. You must use toggle instead."),o),t[e](r,i));var o}}function _(n,t){return function(r){return n+(t-n)*r}}function N(n){return function(t){return r=n(t),"".concat(r,"px");var r}}function k(n,t,r){return f(t<=r),Math.min(Math.max(n,t),r)}new RegExp("^https://([a-zA-Z0-9_-]+.)?cdn.ampproject.org(/.*)?$"),new RegExp("^([a-zA-Z0-9_-]+.)?localhost$"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function C(n,t){throw new Error("failed to call initLogConstructor")}function P(n){return I.user||(I.user=T()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(I.user.win,n)?I.userForEmbed||(I.userForEmbed=T()):I.user}function T(n){return C()}function z(){return I.dev||(I.dev=C())}function D(n,t,r,i,e,o,a,u,c,f,s){return n}function F(n,t,r,i,e,o,a,u,c,f,s){return P().assert(n,t,r,i,e,o,a,u,c,f,s)}var U=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function L(n,t){return $(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function Z(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,L(t,"ampdoc")).getAmpDoc(n):n;var t,r}function $(n,t){D(B(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(D(r.ctor),D(r.context),r.obj=new r.ctor(r.context),D(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function B(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}var J="Animation",Y=function(){},W=function(){function n(n,t){this.Xa=n,this.so=t||L(self,"vsync"),this.Za=null,this.Qa=[]}n.animate=function(t,r,i,e){return new n(t).setCurve(e).add(0,r,1).start(i)};var t=n.prototype;return t.setCurve=function(n){return n&&(this.Za=p(n)),this},t.add=function(n,t,r,i){return this.Qa.push({delay:n,func:t,duration:r,curve:p(i)}),this},t.start=function(n){return new q(this.so,this.Xa,this.Qa,this.Za,n)},n}(),q=function(){function n(n,t,r,i,e){this.so=n,this.Xa=t,this.Qa=[];for(var o=0;o<r.length;o++){var a=r[o];this.Qa.push({delay:a.delay,func:a.func,duration:a.duration,curve:a.curve||i,started:!1,completed:!1})}this.tc=e,this.Hh=Date.now(),this.me=!0,this.ki={};var u=new U;this.ic=u.promise,this.Pi=u.resolve,this.nc=u.reject,this.rc=this.so.createAnimTask(this.Xa,{mutate:this.ec.bind(this)}),this.so.canAnimate(this.Xa)?this.rc(this.ki):(z().warn(J,"cannot animate"),this.sc(!1,0))}var t=n.prototype;return t.then=function(n,t){return n||t?this.ic.then(n,t):this.ic},t.thenAlways=function(n){var t=n||Y;return this.then(t,t)},t.halt=function(n){this.sc(!1,n||0)},t.sc=function(n,t){if(this.me){if(this.me=!1,0!=t){this.Qa.length>1&&this.Qa.sort((function(n,t){return n.delay+n.duration-(t.delay+t.duration)}));try{if(t>0)for(var r=0;r<this.Qa.length;r++)this.Qa[r].func(1,!0);else for(var i=this.Qa.length-1;i>=0;i--)this.Qa[i].func(0,!1)}catch(t){z().error(J,"completion failed: "+t,t),n=!1}}n?this.Pi():this.nc()}},t.ec=function(n){if(this.me){for(var t=Date.now(),r=Math.min((t-this.Hh)/this.tc,1),i=0;i<this.Qa.length;i++){var e=this.Qa[i];!e.started&&r>=e.delay&&(e.started=!0)}for(var o=0;o<this.Qa.length;o++){var a=this.Qa[o];a.started&&!a.completed&&this.oc(a,r)}1==r?this.sc(!0,0):this.so.canAnimate(this.Xa)?this.rc(this.ki):(z().warn(J,"cancel animation"),this.sc(!1,0))}},t.oc=function(n,t){var r,i;if(n.duration>0){if(i=r=Math.min((t-n.delay)/n.duration,1),n.curve&&1!=i)try{i=n.curve(r)}catch(n){return z().error(J,"step curve failed: "+n,n),void this.sc(!1,0)}}else r=1,i=1;1==r&&(n.completed=!0);try{n.func(i,n.completed)}catch(n){return z().error(J,"step mutate failed: "+n,n),void this.sc(!1,0)}},n}(),G="amp-accordion",H=d(.47,0,.745,.715),K=d(.39,.575,.565,1),Q=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}(c,n);var i,a,u=(i=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=r(i);if(a){var o=r(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return e(this,n)});function c(n){var t;return(t=u.call(this,n)).Snn=[],t.Mnn=null,t.Rnn=null,t.Nnn=!1,t.eE=null,t.Oe=null,t.yB=n.id?n.id:Math.floor(100*Math.random()),t}c.prerenderAllowed=function(){return!0};var d=c.prototype;return d.isLayoutSupported=function(n){return"container"==n},d.buildCallback=function(){var n,t,r,i,e,a=this;this.Oe=(n=this.element,t="action",r=Z(n),B(e=(i=Z(r)).isSingleDoc()?i.win:i,t)?$(e,t):null),this.Nnn=this.element.hasAttribute("disable-session-states"),this.Mnn=this.knn(),this.Rnn=this.Inn(),this.eE=function(n,t){for(var r=[],i=n.firstElementChild;i;i=i.nextElementSibling)u=void 0,c=void 0,o(a=e=i)?u=a:1==(null==(c=a)?void 0:c.nodeType)&&(u=a.tagName),!(u&&u.toLowerCase().startsWith("i-")||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&r.push(i);var e,a,u,c;return r}(this.element),this.eE.forEach((function(n,t){F("section"==n.tagName.toLowerCase(),"Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/main/extensions/amp-accordion/amp-accordion.md. Found in: %s",a.element);var r=n.children;F(2==r.length,"Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/main/extensions/amp-accordion/amp-accordion.md. Found in: %s",a.element);var i=r[0],e=r[1];e.classList.add("i-amphtml-accordion-content");var o=e.getAttribute("id");o||(o=a.yB+"_AMP_content_"+t,e.setAttribute("id",o));var u=i.getAttribute("id");u||(u=a.yB+"_AMP_header_"+t,i.setAttribute("id",u)),a.registerAction("toggle",(function(n){return a.C5(n)})),a.registerAction("expand",(function(n){return a.C5(n)})),a.registerAction("collapse",(function(n){return a.C5(n)})),a.Oe.addToAllowlist(G,["toggle","expand","collapse"],["email"]),new a.win.MutationObserver((function(n){a.Tnn(n,2)})).observe(n,{attributes:!0,attributeFilter:["data-expand"]}),a.Rnn[o]?n.setAttribute("expanded",""):!1===a.Rnn[o]&&n.removeAttribute("expanded"),a.mutateElement((function(){})),F(!n.hasAttribute("[expanded]")&&!n.hasAttribute("data-amp-bind-expanded"),'The "expanded" attribute cannot be used with amp-bind in version 0.1 of amp-accordion. Please bind to [data-expand] instead. Found in: %s',a.element);var c=n.hasAttribute("expanded");i.classList.add("i-amphtml-accordion-header"),i.hasAttribute("role")||i.setAttribute("role","button"),i.setAttribute("aria-controls",o),i.setAttribute("aria-expanded",String(c)),i.hasAttribute("tabindex")||i.setAttribute("tabindex",0),a.Snn.push(i),e.setAttribute("aria-labelledby",u),e.hasAttribute("role")||e.setAttribute("role","region"),F(0==a.Oe.hasAction(i,"tap",n),"amp-accordion headings should not have tap actions registered."),i.addEventListener("click",a.yX.bind(a)),i.addEventListener("keydown",a.FJ.bind(a))}))},d.C5=function(n){var t=n.args,r=n.method,i=n.trust,e=void 0;if("expand"===r?e=!0:"collapse"===r&&(e=!1),t){var o=t.section,a=this.getAmpDoc().getElementById(o);F(a=P().assertElement(a),"No element found with id: %s",o),this.hL(a,i,e)}else for(var u=0;u<this.eE.length;u++)this.hL(this.eE[u],i,e)},d.knn=function(){var n=this.element.id||this.element.getResourceId(),t=function(n){var t=n.indexOf("#");return-1==t?n:n.substring(0,t)}(this.win.location.href);return"amp-".concat(n,"-").concat(t)},d.Inn=function(){if(this.Nnn)return{};try{var n=this.win.sessionStorage.getItem(this.Mnn);return n?D((t=n,JSON.parse(t))):{}}catch(n){return z().fine("AMP-ACCORDION","Error setting session state: %s, %s",n.message,n.stack),{}}var t},d.znn=function(){if(!this.Nnn){var n=JSON.stringify(this.Rnn);try{this.win.sessionStorage.setItem(this.Mnn,n)}catch(n){z().fine("AMP-ACCORDION","Error setting session state: %s, %s",n.message,n.stack)}}},d.fD=function(n,t,r){var i=function(n,t,r,i){var e={detail:r};if(Object.assign(e,void 0),"function"==typeof n.CustomEvent)return new n.CustomEvent(t,e);var o=n.document.createEvent("CustomEvent");return o.initCustomEvent(t,!!e.bubbles,!!e.cancelable,r),o}(this.win,"accordionSection.".concat(n),{});this.Oe.trigger(t,n,i,r),function(n,t,r,i){f(n.ownerDocument);var e=new MessageEvent(t,{data:{},bubbles:b,cancelable:y});n.dispatchEvent(e)}(this.element,n)},d.hL=function(n,t,r){var i=this,e=n.children,o=e[0],a=e[1].getAttribute("id"),u=n.hasAttribute("expanded"),c=null==r?!n.hasAttribute("expanded"):r;c&&n.hasAttribute("expanded")||!c&&!n.hasAttribute("expanded")||(this.element.hasAttribute("animate")?c?(o.setAttribute("aria-expanded","true"),this.Dnn(n,t),this.element.hasAttribute("expand-single-section")&&this.eE.forEach((function(r){r!=n&&(i.Fnn(r,t),r.children[0].setAttribute("aria-expanded","false"))}))):(o.setAttribute("aria-expanded","false"),this.Fnn(n,t)):this.mutateElement((function(){c?(i.fD("expand",n,t),n.setAttribute("expanded",""),o.setAttribute("aria-expanded","true"),i.element.hasAttribute("expand-single-section")&&i.eE.forEach((function(r){r!=n&&(r.hasAttribute("expanded")&&(i.fD("collapse",r,t),r.removeAttribute("expanded")),r.children[0].setAttribute("aria-expanded","false"))}))):(i.fD("collapse",n,t),n.removeAttribute("expanded"),o.setAttribute("aria-expanded","false"))}),n),this.Rnn[a]=!u,this.znn())},d.Dnn=function(n,t){var r,i,e,o,a,u=this,c=n.children[1];return this.measureMutateElement((function(){r=n.offsetWidth,a=function(n,t,r){var i=S(n.style,"width",void 0);if(i)return j(i)?n.style.getPropertyValue(i):n.style[i]}(c)}),(function(){!function(n,t){var r=n.style;for(var i in t)r.setProperty(A(S(r,i)),String(t[i]),"important")}(c,{"position":"fixed","width":"".concat(r,"px"),"opacity":"0"}),n.hasAttribute("expanded")||n.setAttribute("expanded","")})).then((function(){return u.measureMutateElement((function(){i=n.offsetHeight,e=c.offsetHeight;var t=u.getViewport().getHeight();o=u.Unn(Math.abs(e),t)}),(function(){M(n,{"overflow":"hidden","height":"".concat(i,"px")}),M(c,{"position":"","opacity":"","width":a})}))})).then((function(){var r=new W(u.element);return r.setCurve(H),r.add(0,R(n,{"height":N(_(i,i+e))}),1),r.add(0,R(c,{"opacity":_(0,1)}),1),r.start(o).thenAlways((function(){u.mutateElement((function(){u.fD("expand",n,t),M(n,{"overflow":"","height":""}),M(c,{"opacity":""})}))}))}))},d.Fnn=function(n,t){var r,i,e,o=this,a=n.firstElementChild;return this.measureMutateElement((function(){r=n.offsetHeight,i=a.offsetHeight;var t=o.getViewport().getSize().height;e=o.Unn(Math.abs(r),t)}),(function(){M(n,{"overflow":"hidden"})})).then((function(){return W.animate(n,R(n,{"height":N(_(r,i))}),e,K).thenAlways((function(){return o.mutateElement((function(){n.hasAttribute("expanded")&&(o.fD("collapse",n,t),n.removeAttribute("expanded")),M(n,{"height":"","overflow":""})}))}))}))},d.Unn=function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,e=Math.abs(n)/t*i;return k(e,r,i)},d.Lnn=function(n){n.preventDefault();var t=n.currentTarget.parentElement;this.hL(t,3)},d.yX=function(n){this.zB(n)&&this.Lnn(n)},d.zB=function(n){var t=n.target,r=n.currentTarget,i=!!function(n,t,r){var i;for(i=n;i&&i!==r;i=i.parentElement)if("A"==i.tagName)return i;return null}(t,0,r),e=this.Oe.hasAction(t,"tap",r);return!i&&!e},d.FJ=function(n){if(!n.defaultPrevented)switch(n.key){case s:case"ArrowDown":return void this.YQ(n);case"Enter":case" ":return void(n.target==n.currentTarget&&this.Lnn(n))}},d.YQ=function(n){var t=n.currentTarget,r=this.Snn.indexOf(t);if(-1!==r){n.preventDefault();var i=(r+(n.key==s?-1:1))%this.Snn.length;i<0&&(i+=this.Snn.length),function(n){try{n.focus()}catch(n){}}(this.Snn[i])}},d.Tnn=function(n,t){var r=this;n.forEach((function(n){var i=n.target,e=i.hasAttribute("data-expand");i.hasAttribute("expanded")!==e&&r.hL(i,t,e)}))},d.getActionServiceForTesting=function(){return this.Oe},c}(n.BaseElement);n.registerElement(G,Q,"amp-accordion>section>:last-child{display:none!important}amp-accordion>section[expanded]>:last-child{display:block!important}.i-amphtml-accordion-content,.i-amphtml-accordion-header{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}amp-accordion>section:not([expanded]) .i-amphtml-media-component,amp-accordion>section:not([expanded]) .i-amphtml-media-component *{display:none!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-accordion/0.1/amp-accordion.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-accordion-0.1.js.map