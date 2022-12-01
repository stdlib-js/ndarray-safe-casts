// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).safeCasts=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var l,f=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[c]=e:delete t[c],r}:function(t){return i.call(t)};function a(t){return"[object Arguments]"===f(t)}l=function(){return a(arguments)}();var p=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,b=Object.defineProperty,m=Object.prototype,g=m.toString,v=m.__defineGetter__,d=m.__defineSetter__,h=m.__lookupGetter__,j=m.__lookupSetter__;s=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(h.call(t,n)||j.call(t,n)?(r=t.__proto__,t.__proto__=m,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&v&&v.call(t,n,e.get),u&&d&&d.call(t,n,e.set),t};var x=s;function w(t,n,e){x(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=r();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function P(t){return _(t)||E(t)}function T(t){return"number"==typeof t}w(P,"isPrimitive",_),w(P,"isObject",E);var I=Number,A=I.prototype.toString;var V=r();function k(t){return"object"==typeof t&&(t instanceof I||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function N(t){return T(t)||k(t)}function B(t){return t!=t}function F(t){return T(t)&&B(t)}function L(t){return k(t)&&B(t.valueOf())}function C(t){return F(t)||L(t)}w(N,"isPrimitive",T),w(N,"isObject",k),w(C,"isPrimitive",F),w(C,"isObject",L);var G=Number.POSITIVE_INFINITY,Y=I.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<G&&t>Y&&X(t)}function W(t){return T(t)&&H(t)}function D(t){return k(t)&&H(t.valueOf())}function R(t){return W(t)||D(t)}w(R,"isPrimitive",W),w(R,"isObject",D);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,n){var e;return null!=t&&(!(e=U.call(t,n))&&q&&P(t)?!F(n=+n)&&W(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}w(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!J(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,n,e){var r,i;if(!nt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!W(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(C(n)){for(;i<r;i++)if(C(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var rt=/./;function it(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var ut=r();function ct(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function lt(t){return it(t)||ct(t)}function ft(){return new Function("return this;")()}w(lt,"isPrimitive",it),w(lt,"isObject",ct);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,yt="object"==typeof global?global:null;var st=function(t){if(arguments.length){if(!it(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ft()}if(at)return at;if(pt)return pt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=st.document&&st.document.childNodes,mt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var vt=/^\s*function\s*([^(]*)/i;function dt(t){var n,e,r,i;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=vt.exec(r.toString()))return n[1]}return Z(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}w(gt,"REGEXP",vt);var ht="function"==typeof rt||"object"==typeof mt||"function"==typeof bt?function(t){return dt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?dt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===ht(wt))return!1;for(t in wt)try{-1===et(xt,t)&&u(wt,t)&&null!==wt[t]&&"object"===ht(wt[t])&&jt(wt[t])}catch(t){return!0}return!1}(),Ot="undefined"!=typeof window;var St,Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];St=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return K(n)?t(Q.call(n)):t(n)}:t:function(t){var n,e,r,i,o,c,l;if(i=[],K(t)){for(l=0;l<t.length;l++)i.push(l.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(l=0;l<t.length;l++)i.push(l.toString())}else{if(!1==(r="function"==typeof t)&&!Z(t))return i;e=$&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(tt)for(n=function(t){if(!1===Ot&&!_t)return jt(t);try{return jt(t)}catch(t){return!1}}(t),l=0;l<Et.length;l++)c=Et[l],n&&"constructor"===c||!u(t,c)||i.push(String(c));return i};var Pt=St;function Tt(t){return"function"===ht(t)}var It,At=Object.getPrototypeOf;It=Tt(Object.getPrototypeOf)?At:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Vt=It;var kt=Object.prototype;function Nt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Vt(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Tt(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&Tt(n.isPrototypeOf)&&(n===kt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Bt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ft(){return Bt.slice()}var Lt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Lt.slice()}function Gt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){x(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}w(Ct,"enum",Gt),function(t,n){var e,r,i;for(e=Pt(n),i=0;i<e.length;i++)Yt(t,r=e[i],n[r])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Mt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Xt(){return{bool:Mt.bool,int8:Mt.int8,uint8:Mt.uint8,uint8c:Mt.uint8c,int16:Mt.int16,uint16:Mt.uint16,int32:Mt.int32,uint32:Mt.uint32,int64:Mt.int64,uint64:Mt.uint64,float32:Mt.float32,float64:Mt.float64,complex64:Mt.complex64,complex128:Mt.complex128,binary:Mt.binary,generic:Mt.generic,notype:Mt.notype,userdefined_type:Mt.userdefined_type}}w(Ft,"enum",Xt),function(t,n){var e,r,i;for(e=Pt(n),i=0;i<e.length;i++)Yt(t,r=e[i],n[r])}(Ft,Xt());var Ht=function(t,n){var e,r,i,o,c,l,f,a=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Nt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!it(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Pt(t)).length,c={},a)for(f=0;f<r;f++)u(c,o=t[i=e[f]])?(l=c[o],J(l)?c[o].push(i):c[o]=[l,i]):c[o]=i;else for(f=0;f<r;f++)c[t[i=e[f]]]=i;return c}(Xt(),{duplicates:!1});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Dt(t){var n=typeof t;return"string"===n?null===function(t){var n=Wt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Ht[t];return"string"==typeof n?n:null}(t):null}var Rt,Ut={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function qt(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Pt(Ut)).length,l=0;l<n;l++){for(i=t[l],u=Ut[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function zt(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Pt(Ut)).length,l=0;l<n;l++){for(i=t[l],u=Ut[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}return function(t){return 0===arguments.length?qt():(void 0===Rt&&(Rt=zt()),t=Dt(t),u(Rt,t)?Rt[t].slice():null)}}));
//# sourceMappingURL=index.js.map
