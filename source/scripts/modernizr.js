/*! modernizr 3.3.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-forcetouch-touchevents-addtest-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,u;for(var f in y)if(y.hasOwnProperty(f)){if(e=[],n=y[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],u=s.split("."),1===u.length?Modernizr[u[0]]=o:(!Modernizr[u[0]]||Modernizr[u[0]]instanceof Boolean||(Modernizr[u[0]]=new Boolean(Modernizr[u[0]])),Modernizr[u[0]][u[1]]=o),g.push((o?"":"no-")+u.join("-"))}}function i(e){var n=E.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?E.className.baseVal=n:E.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)w(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),i([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(){var e=n.body;return e||(e=u(b?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var i,s,f,l,c="modernizr",d=u("div"),p=a();if(parseInt(r,10))for(;r--;)f=u("div"),f.id=o?o[r]:c+(r+1),d.appendChild(f);return i=u("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),s=t(d,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=l,E.offsetHeight):d.parentNode.removeChild(d),!!s}function c(e,n){return!!~(""+e).indexOf(n)}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?d(o,t||n):o);return!1}function v(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(v(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+v(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,i){function s(){l&&(delete A.style,delete A.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var a=h(e,o);if(!r(a,"undefined"))return a}for(var l,d,p,v,m,_=["modernizr","tspan"];!A.style;)l=!0,A.modElem=u(_.shift()),A.style=A.modElem.style;for(p=e.length,d=0;p>d;d++)if(v=e[d],m=A.style[v],c(v,"-")&&(v=f(v)),A.style[v]!==t){if(i||r(o,"undefined"))return s(),"pfx"==n?v:!0;try{A.style[v]=o}catch(g){}if(A.style[v]!=m)return s(),"pfx"==n?v:!0}return s(),!1}function _(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),u=(e+" "+z.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(u,n,o,i):(u=(e+" "+j.join(s+" ")+s).split(" "),p(u,n,t))}var g=[],y=[],C={_version:"3.3.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w,E=n.documentElement,b="svg"===E.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),C._l={},C.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=s});var x=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=x;var S=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=u(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=u("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();C.hasEvent=S;var T=C.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,function(e){t=9===e.offsetTop})}return t});var O="Moz O ms Webkit",z=C._config.usePrefixes?O.split(" "):[];C._cssomPrefixes=z;var P=function(n){var r,o=x.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var u=x[s],f=u.toUpperCase()+"_"+r;if(f in i)return"@-"+u.toLowerCase()+"-"+n}return!1};C.atRule=P;var j=C._config.usePrefixes?O.toLowerCase().split(" "):[];C._domPrefixes=j;var N={elem:u("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style}),C.testAllProps=_;var R=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=f(e)),n?_(e,n,t):_(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return S(R("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),o(),i(g),delete C.addTest,delete C.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
