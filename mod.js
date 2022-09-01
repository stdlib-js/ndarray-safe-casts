// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var l=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[c]=e:delete t[c],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var a=function(){return f(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,s=Object.prototype,m=s.toString,g=s.__defineGetter__,v=s.__defineSetter__,d=s.__lookupGetter__,h=s.__lookupSetter__;y=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===m.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===m.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(d.call(t,n)||h.call(t,n)?(r=t.__proto__,t.__proto__=s,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&g&&g.call(t,n,e.get),u&&v&&v.call(t,n,e.set),t};var j=y;function x(t,n,e){j(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function w(t){return"string"==typeof t}var _=String.prototype.valueOf;var O=r();function S(t){return"object"==typeof t&&(t instanceof String||(O?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function E(t){return w(t)||S(t)}function P(t){return"number"==typeof t}x(E,"isPrimitive",w),x(E,"isObject",S);var T=Number,I=T.prototype.toString;var A=r();function V(t){return"object"==typeof t&&(t instanceof T||(A?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function k(t){return P(t)||V(t)}function N(t){return t!=t}function B(t){return P(t)&&N(t)}function F(t){return V(t)&&N(t.valueOf())}function L(t){return B(t)||F(t)}x(k,"isPrimitive",P),x(k,"isObject",V),x(L,"isPrimitive",B),x(L,"isObject",F);var G=Number.POSITIVE_INFINITY,Y=T.NEGATIVE_INFINITY,C=Math.floor;function M(t){return C(t)===t}function X(t){return t<G&&t>Y&&M(t)}function H(t){return P(t)&&X(t)}function W(t){return V(t)&&X(t.valueOf())}function D(t){return H(t)||W(t)}x(D,"isPrimitive",H),x(D,"isObject",W);var R=Object.prototype.propertyIsEnumerable;var U=!R.call("beep","0");function q(t,n){var e;return null!=t&&(!(e=R.call(t,n))&&U&&E(t)?!B(n=+n)&&H(n)&&n>=0&&n<t.length:e)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var J=a?f:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}x(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!z(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Q));var Z=q((function(){}),"prototype"),$=!q({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,n,e){var r,i;if(!tt(t)&&!w(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(L(n)){for(;i<r;i++)if(L(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var et=/./;function rt(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ot=r();function ut(t){return"object"==typeof t&&(t instanceof Boolean||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return rt(t)||ut(t)}function lt(){return new Function("return this;")()}x(ct,"isPrimitive",rt),x(ct,"isObject",ut);var ft="object"==typeof self?self:null,at="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof pt?pt:null;var bt=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(ft)return ft;if(at)return at;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),st=bt.document&&bt.document.childNodes,mt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var vt=/^\s*function\s*([^(]*)/i;function dt(t){var n,e,r,i;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=vt.exec(r.toString()))return n[1]}return Q(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}x(gt,"REGEXP",vt);var ht="function"==typeof et||"object"==typeof mt||"function"==typeof st?function(t){return dt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?dt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===ht(wt))return!1;for(t in wt)try{-1===nt(xt,t)&&u(wt,t)&&null!==wt[t]&&"object"===ht(wt[t])&&jt(wt[t])}catch(t){return!0}return!1}(),Ot="undefined"!=typeof window;var St=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Et=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return J(n)?t(K.call(n)):t(n)}:t:function(t){var n,e,r,i,o,c,l;if(i=[],J(t)){for(l=0;l<t.length;l++)i.push(l.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(l=0;l<t.length;l++)i.push(l.toString())}else{if(!1==(r="function"==typeof t)&&!Q(t))return i;e=Z&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if($)for(n=function(t){if(!1===Ot&&!_t)return jt(t);try{return jt(t)}catch(t){return!1}}(t),l=0;l<St.length;l++)c=St[l],n&&"constructor"===c||!u(t,c)||i.push(String(c));return i};function Pt(t){return"function"===ht(t)}var Tt,It=Object.getPrototypeOf;Tt=Pt(Object.getPrototypeOf)?It:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var At=Tt;var Vt=Object.prototype;function kt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),At(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Pt(n.constructor)&&"[object Function]"===l(n.constructor)&&u(n,"isPrototypeOf")&&Pt(n.isPrototypeOf)&&(n===Vt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Nt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Bt(){return Nt.slice()}var Ft=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Ft.slice()}function Gt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){j(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}x(Lt,"enum",Gt),function(t,n){var e,r,i;for(e=Et(n),i=0;i<e.length;i++)Yt(t,r=e[i],n[r])}(Lt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ct={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Mt(){return{bool:Ct.bool,int8:Ct.int8,uint8:Ct.uint8,uint8c:Ct.uint8c,int16:Ct.int16,uint16:Ct.uint16,int32:Ct.int32,uint32:Ct.uint32,int64:Ct.int64,uint64:Ct.uint64,float32:Ct.float32,float64:Ct.float64,complex64:Ct.complex64,complex128:Ct.complex128,binary:Ct.binary,generic:Ct.generic,notype:Ct.notype,userdefined_type:Ct.userdefined_type}}x(Bt,"enum",Mt),function(t,n){var e,r,i;for(e=Et(n),i=0;i<e.length;i++)Yt(t,r=e[i],n[r])}(Bt,Mt());var Xt=function(t,n){var e,r,i,o,c,l,f,a=!0;if(!Q(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!kt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!rt(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Et(t)).length,c={},a)for(f=0;f<r;f++)u(c,o=t[i=e[f]])?(l=c[o],z(l)?c[o].push(i):c[o]=[l,i]):c[o]=i;else for(f=0;f<r;f++)c[t[i=e[f]]]=i;return c}(Mt(),{duplicates:!1});var Ht={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wt(t){var n=typeof t;return"string"===n?null===function(t){var n=Ht[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Xt[t];return"string"==typeof n?n:null}(t):null}var Dt,Rt={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Ut(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Et(Rt)).length,l=0;l<n;l++){for(i=t[l],u=Rt[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function qt(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Et(Rt)).length,l=0;l<n;l++){for(i=t[l],u=Rt[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}function zt(t){return 0===arguments.length?Ut():(void 0===Dt&&(Dt=qt()),t=Wt(t),u(Dt,t)?Dt[t].slice():null)}export{zt as default};
//# sourceMappingURL=mod.js.map
