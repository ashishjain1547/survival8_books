!function(){function t(t,e,n){return t.call.apply(t.bind,arguments)}function e(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function n(i,o,r){return n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:e,n.apply(null,arguments)}function i(t,e){this.a=t,this.m=e||t,this.c=this.m.document}function o(t,e,n,i){if(e=t.c.createElement(e),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?e.style.cssText=n[o]:e.setAttribute(o,n[o]));return i&&e.appendChild(t.c.createTextNode(i)),e}function r(t,e,n){t=t.c.getElementsByTagName(e)[0],t||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var r=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){r=!0;break}r||i.push(e[o])}for(e=[],o=0;o<i.length;o+=1){for(r=!1,s=0;s<n.length;s+=1)if(i[o]===n[s]){r=!0;break}r||e.push(i[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function l(t,e){for(var n=t.className.split(/\s+/),i=0,o=n.length;o>i;i++)if(n[i]==e)return!0;return!1}function c(t){if("string"==typeof t.f)return t.f;var e=t.m.location.protocol;return"about:"==e&&(e=t.a.location.protocol),"https:"==e?"https:":"http:"}function u(t){return t.m.location.hostname||t.a.location.hostname}function h(t,e,n){function i(){c&&s&&a&&(c(l),c=null)}e=o(t,"link",{rel:"stylesheet",href:e,media:"all"});var s=!1,a=!0,l=null,c=n||null;it?(e.onload=function(){s=!0,i()},e.onerror=function(){s=!0,l=Error("Stylesheet failed to load"),i()}):setTimeout(function(){s=!0,i()},0),r(t,"head",e)}function d(t,e,n,i){var r=t.c.getElementsByTagName("head")[0];if(r){var s=o(t,"script",{src:e}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,n&&n(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&r.removeChild(s))},r.appendChild(s),setTimeout(function(){a||(a=!0,n&&n(Error("Script load timeout")))},i||5e3),s}return null}function f(){this.a=0,this.c=null}function p(t){return t.a++,function(){t.a--,g(t)}}function m(t,e){t.c=e,g(t)}function g(t){0==t.a&&t.c&&(t.c(),t.c=null)}function v(t){this.a=t||"-"}function b(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function y(t){return x(t)+" "+(t.f+"00")+" 300px "+w(t.c)}function w(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function S(t){return t.a+t.f}function x(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function C(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function k(t,e){this.c=t,this.f=t.m.document.documentElement,this.h=e,this.a=new v("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function _(t){t.g&&a(t.f,[t.a.c("wf","loading")]),j(t,"loading")}function T(t){if(t.g){var e=l(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),a(t.f,n,i)}j(t,"inactive")}function j(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,S(n)):t.h[e]())}function E(){this.c={}}function $(t,e,n){var i,o=[];for(i in e)if(e.hasOwnProperty(i)){var r=t.c[i];r&&o.push(r(e[i],n))}return o}function A(t,e){this.c=t,this.f=e,this.a=o(this.c,"span",{"aria-hidden":"true"},this.f)}function M(t){r(t.c,"body",t.a)}function D(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(t.c)+";"+("font-style:"+x(t)+";font-weight:"+(t.f+"00")+";")}function N(t,e,n,i,o,r){this.g=t,this.f=e,this.a=i,this.c=n,this.j=o||3e3,this.h=r||void 0}function I(t,e,n,i,o,r,s){this.v=t,this.B=e,this.c=n,this.a=i,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=r||null,this.o=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.o=new A(this.c,this.s),t=new b(this.a.c+",serif",S(this.a)),t=D(t),this.g.a.style.cssText=t,t=new b(this.a.c+",sans-serif",S(this.a)),t=D(t),this.h.a.style.cssText=t,t=new b("serif",S(this.a)),t=D(t),this.j.a.style.cssText=t,t=new b("sans-serif",S(this.a)),t=D(t),this.o.a.style.cssText=t,M(this.g),M(this.h),M(this.j),M(this.o)}function P(){if(null===rt){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);rt=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return rt}function R(t,e,n){for(var i in ot)if(ot.hasOwnProperty(i)&&e===t.f[ot[i]]&&n===t.f[ot[i]])return!0;return!1}function O(t){var e,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=P()&&R(t,n,i)),e?nt()-t.A>=t.w?P()&&R(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?L(t,t.v):L(t,t.B):F(t):L(t,t.v)}function F(t){setTimeout(n(function(){O(this)},t),50)}function L(t,e){setTimeout(n(function(){s(this.g.a),s(this.h.a),s(this.j.a),s(this.o.a),e(this.a)},t),0)}function B(t,e,n){this.c=t,this.a=e,this.f=0,this.o=this.j=!1,this.s=n}function H(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&a(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),j(t,"active")):T(t.a))}function U(t){this.j=t,this.a=new E,this.h=0,this.f=this.g=!0}function W(t,e,i,o,r){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=r||null,l=o||null||{};if(0===i.length&&s)T(e.a);else{e.f+=i.length,s&&(e.j=s);var c,u=[];for(c=0;c<i.length;c++){var h=i[c],d=l[h.c],f=e.a,p=h;f.g&&a(f.f,[f.a.c("wf",p.c,S(p).toString(),"loading")]),j(f,"fontloading",p),f=null,null===st&&(st=window.FontFace?(p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(p[1],10):!0:!1),f=st?new N(n(e.g,e),n(e.h,e),e.c,h,e.s,d):new I(n(e.g,e),n(e.h,e),e.c,h,e.s,t,d),u.push(f)}for(c=0;c<u.length;c++)u[c].start()}},0)}function z(t,e,n){var i=[],o=n.timeout;_(e);var i=$(t.a,n,t.c),r=new B(t.c,e,o);for(t.h=i.length,e=0,n=i.length;n>e;e++)i[e].load(function(e,n,i){W(t,r,e,n,i)})}function q(t,e){this.c=t,this.a=e}function V(t,e,n){var i=c(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),i+"//"+t+"/"+e+".js"+(n?"?v="+n:"")}function J(t,e){this.c=t,this.a=e}function G(t,e,n){t?this.c=t:this.c=e+at,this.a=[],this.f=[],this.g=n||""}function Y(t,e){for(var n=e.length,i=0;n>i;i++){var o=e[i].split(":");3==o.length&&t.f.push(o.pop());var r="";2==o.length&&""!=o[1]&&(r=":"),t.a.push(o.join(r))}}function Q(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;e>i;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}function X(t){this.f=t,this.a=[],this.c={}}function K(t){for(var e=t.f.length,n=0;e>n;n++){var i=t.f[n].split(":"),o=i[0].replace(/\+/g," "),r=["n4"];if(2<=i.length){var s,a=i[1];if(s=[],a)for(var a=a.split(","),l=a.length,c=0;l>c;c++){var u;if(u=a[c],u.match(/^[\w-]+$/)){var h=ht.exec(u.toLowerCase());if(null==h)u="";else{if(u=h[2],u=null==u||""==u?"n":ut[u],h=h[1],null==h||""==h)h="4";else var d=ct[h],h=d?d:isNaN(h)?"4":h.substr(0,1);u=[u,h].join("")}}else u="";u&&s.push(u)}0<s.length&&(r=s),3==i.length&&(i=i[2],s=[],i=i?i.split(","):s,0<i.length&&(i=lt[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=lt[o])&&(t.c[o]=i),i=0;i<r.length;i+=1)t.a.push(new b(o,r[i]))}}function Z(t,e){this.c=t,this.a=e}function tt(t,e){this.c=t,this.a=e}function et(t,e){this.c=t,this.f=e,this.a=[]}var nt=Date.now||function(){return+new Date},it=!!window.FontFace;v.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},N.prototype.start=function(){function t(){nt()-i>=n.j?n.f(n.a):e.fonts.load(y(n.a),n.h).then(function(e){1<=e.length?n.g(n.a):setTimeout(t,25)},function(){n.f(n.a)})}var e=this.c.m.document,n=this,i=nt();t()};var ot={D:"serif",C:"sans-serif"},rt=null;I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=nt(),O(this)};var st=null;B.prototype.g=function(t){var e=this.a;e.g&&a(e.f,[e.a.c("wf",t.c,S(t).toString(),"active")],[e.a.c("wf",t.c,S(t).toString(),"loading"),e.a.c("wf",t.c,S(t).toString(),"inactive")]),j(e,"fontactive",t),this.o=!0,H(this)},B.prototype.h=function(t){var e=this.a;if(e.g){var n=l(e.f,e.a.c("wf",t.c,S(t).toString(),"active")),i=[],o=[e.a.c("wf",t.c,S(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,S(t).toString(),"inactive")),a(e.f,i,o)}j(e,"fontinactive",t),H(this)},U.prototype.load=function(t){this.c=new i(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,z(this,new k(this.c,t),t)},q.prototype.load=function(t){function e(){if(o["__mti_fntLst"+n]){var i,r=o["__mti_fntLst"+n](),s=[];if(r)for(var a=0;a<r.length;a++){var l=r[a].fontfamily;void 0!=r[a].fontStyle&&void 0!=r[a].fontWeight?(i=r[a].fontStyle+r[a].fontWeight,s.push(new b(l,i))):s.push(new b(l))}t(s)}else setTimeout(function(){e()},50)}var n=this.a.projectId,i=this.a.version;if(n){var o=this.c.m;d(this.c,V(this,n,i),function(n){n?t([]):e()}).id="__MonotypeAPIScript__"+n}else t([])},J.prototype.load=function(t){var e,n,i=this.a.urls||[],o=this.a.families||[],r=this.a.testStrings||{},s=new f;for(e=0,n=i.length;n>e;e++)h(this.c,i[e],p(s));var a=[];for(e=0,n=o.length;n>e;e++)if(i=o[e].split(":"),i[1])for(var l=i[1].split(","),c=0;c<l.length;c+=1)a.push(new b(i[0],l[c]));else a.push(new b(i[0]));m(s,function(){t(a,r)})};var at="//fonts.googleapis.com/css",lt={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},ct={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ut={i:"i",italic:"i",n:"n",normal:"n"},ht=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,dt={Arimo:!0,Cousine:!0,Tinos:!0};Z.prototype.load=function(t){var e=new f,n=this.c,i=new G(this.a.api,c(n),this.a.text),o=this.a.families;Y(i,o);var r=new X(o);K(r),h(n,Q(i),p(e)),m(e,function(){t(r.a,r.c,dt)})},tt.prototype.load=function(t){var e=this.a.id,n=this.c.m;e?d(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],o=0;o<e.length;o+=2)for(var r=e[o],s=e[o+1],a=0;a<s.length;a++)i.push(new b(r,s[a]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}t(i)}},2e3):t([])},et.prototype.load=function(t){var e=this.f.id,n=this.c.m,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var o=0,r=n.fonts.length;r>o;++o){var s=n.fonts[o];i.a.push(new b(s.name,C("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},d(this.c,c(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+u(this.c)+"/"+e+".js",function(e){e&&t([])})):t([])};var ft=new U(window);ft.a.c.custom=function(t,e){return new J(e,t)},ft.a.c.fontdeck=function(t,e){return new et(e,t)},ft.a.c.monotype=function(t,e){return new q(e,t)},ft.a.c.typekit=function(t,e){return new tt(e,t)},ft.a.c.google=function(t,e){return new Z(e,t)};var pt={load:n(ft.load,ft)};"function"==typeof define&&define.amd?define(function(){return pt}):"undefined"!=typeof module&&module.exports?module.exports=pt:(window.WebFont=pt,window.WebFontConfig&&ft.load(window.WebFontConfig))}();