parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6tg":[function(require,module,exports) {
"use strict";var t,e,n,r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return s(t)||a(t,e)||l(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}function s(t){if(Array.isArray(t))return t}function c(t){return p(t)||h(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function h(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function p(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function b(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function O(t){return Array.from(t.attributes).reduce(function(t,e){return t[b(e.name)]=e.value,t},{})}function g(t,e){t.firstChild&&(e.appendChild(t.firstChild),g(t,e))}function y(t){E(t.childNodes)}function E(t){Array.from(t).forEach(N)}function N(t){var e=t.parentNode;t.remove?t.remove():e&&e.removeChild(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.component=Pn,exports.install=xn,exports.mount=An,exports.pure=Cn,exports.register=_n,exports.uninstall=wn,exports.unmount=Sn,exports.unregister=Mn,exports.version=exports.__=void 0;var T=0,j=1,_=2,M=3,A=4,S={EACH:T,IF:j,SIMPLE:_,TAG:M,SLOT:A},x=0,w=1,P=2,C=3,I={ATTRIBUTE:x,EVENT:w,TEXT:P,VALUE:C};function D(t){var e=t.dom.cloneNode(!0);return{avoidDOMInjection:!0,fragment:e,children:Array.from(e.childNodes)}}var U=[],Y=U.indexOf,L=U.slice,B=function(t,e,n,r,o,i){for(var u=("selectedIndex"in e),a=u;r<o;){var s=t(n[r],1);if(e.insertBefore(s,i),u&&a&&s.selected){a=!a;var c=e.selectedIndex;e.selectedIndex=c<0?r:Y.call(e.querySelectorAll("option"),s)}r++}},K=function(t,e){return t==e},k=function(t){return t},R=function(t,e,n,r,o,i,u){var a=i-o;if(a<1)return-1;for(;n-e>=a;){for(var s=e,c=o;s<n&&c<i&&u(t[s],r[c]);)s++,c++;if(c===i)return e;e=s+1}return-1},z=function(t,e,n,r,o,i){for(;r<o&&i(n[r],t[e-1]);)r++,e--;return 0===e},H=function(t,e,n,r,o){return n<r?t(e[n],0):0<n?t(e[n-1],-0).nextSibling:o},$=function(t,e,n,r){for(;n<r;)tt(t(e[n++],-1))},F=-1,V=1,G=0,q=50,W=function(t,e,n,r,o,i,u,a){var s=0,c=r<a?r:a,f=Array(c++),l=Array(c);l[0]=-1;for(var h=1;h<c;h++)l[h]=u;for(var p=o.slice(i,u),d=e;d<n;d++){var m=p.indexOf(t[d]);if(-1<m){var v=m+i;-1<(s=J(l,c,v))&&(l[s]=v,f[s]={newi:d,oldi:v,prev:f[s-1]})}}for(s=--c,--u;l[s]>u;)--s;c=a+r-s;var b=Array(c),O=f[s];for(--n;O;){for(var g=O,y=g.newi,E=g.oldi;n>y;)b[--c]=V,--n;for(;u>E;)b[--c]=F,--u;b[--c]=G,--n,--u,O=O.prev}for(;n>=e;)b[--c]=V,--n;for(;u>=i;)b[--c]=F,--u;return b},X=function(t,e,n,r,o,i,u){var a,s,c,f,l,h,p,d=n+i,m=[];t:for(a=0;a<=d;a++){if(a>q)return null;for(p=a-1,l=a?m[a-1]:[0,0],h=m[a]=[],s=-a;s<=a;s+=2){for(c=(f=s===-a||s!==a&&l[p+s-1]<l[p+s+1]?l[p+s+1]:l[p+s-1]+1)-s;f<i&&c<n&&u(r[o+f],t[e+c]);)f++,c++;if(f===i&&c===n)break t;h[a+s]=f}}var v=Array(a/2+d/2),b=v.length-1;for(a=m.length-1;a>=0;a--){for(;f>0&&c>0&&u(r[o+f-1],t[e+c-1]);)v[b--]=G,f--,c--;if(!a)break;p=a-1,l=a?m[a-1]:[0,0],(s=f-c)===-a||s!==a&&l[p+s-1]<l[p+s+1]?(c--,v[b--]=V):(f--,v[b--]=F)}return v},Z=function(t,e,n,r,o,i,u,a,s){for(var c=[],f=t.length,l=u,h=0;h<f;)switch(t[h++]){case G:o++,l++;break;case V:c.push(r[o]),B(e,n,r,o++,o,l<a?e(i[l],0):s);break;case F:l++}for(h=0;h<f;)switch(t[h++]){case G:u++;break;case F:-1<c.indexOf(i[u])?u++:$(e,i,u++,u)}},J=function(t,e,n){for(var r=1,o=e;r<o;){var i=(r+o)/2>>>0;n<t[i]?o=i:r=i+1}return r},Q=function(t,e,n,r,o,i,u,a,s,c,f,l,h){Z(X(n,r,i,u,a,c,l)||W(n,r,o,i,u,a,s,c),t,e,n,r,u,a,f,h)},tt=function(t){return(t.remove||et).call(t)};function et(){var t=this.parentNode;t&&t.removeChild(this)}var nt=function(t,e,n,r){r||(r={});for(var o=r.compare||K,i=r.node||k,u=null==r.before?null:i(r.before,0),a=e.length,s=a,c=0,f=n.length,l=0;c<s&&l<f&&o(e[c],n[l]);)c++,l++;for(;c<s&&l<f&&o(e[s-1],n[f-1]);)s--,f--;var h=c===s,p=l===f;if(h&&p)return n;if(h&&l<f)return B(i,t,n,l,f,H(i,e,c,a,u)),n;if(p&&c<s)return $(i,e,c,s),n;var d=s-c,m=f-l,v=-1;if(d<m){if(-1<(v=R(n,l,f,e,c,s,o)))return B(i,t,n,l,v,i(e[c],0)),B(i,t,n,v+d,f,H(i,e,s,a,u)),n}else if(m<d&&-1<(v=R(e,c,s,n,l,f,o)))return $(i,e,c,v),$(i,e,v+m,s),n;return d<2||m<2?(B(i,t,n,l,f,i(e[c],0)),$(i,e,c,s),n):d===m&&z(n,f,e,c,s,o)?(B(i,t,n,l,f,H(i,e,s,a,u)),n):(Q(i,t,n,l,f,m,e,c,s,d,a,o,u),n)};function rt(t,e){return m(t)===e}function ot(t){var e=t.ownerSVGElement;return!!e||null===e}function it(t){return!ct(t.content)}function ut(t){return rt(t,"function")}function at(t){return rt(t,"boolean")}function st(t){return!ct(t)&&rt(t,"object")}function ct(t){return null==t}var ft=Symbol("unmount"),lt=Object.seal({nodes:[],mount:function(t,e){return this.update(t,e)},update:function(t,e){var n=this.placeholder,r=this.nodes,o=this.childrenMap,i=t===ft?null:this.evaluate(t),u=i?Array.from(i):[],a=n.parentNode,s=mt(u,t,e,this),c=s.newChildrenMap,f=s.batches,l=s.futureNodes;return nt(a,r,l,{before:n,node:ht(Array.from(o.values()),e)}),f.forEach(function(t){return t()}),this.childrenMap=c,this.nodes=l,this},unmount:function(t,e){return this.update(ft,e),this}});function ht(t,e){return function(n,r){if(r<0){var o=t.pop();if(o){var i=o.template,u=o.context;i.unmount(u,e,null)}}return n}}function pt(t,e){return!!t&&!1===Boolean(t(e))}function dt(t,e){var n=e.itemName,r=e.indexName,o=e.index,i=e.item;return t[n]=i,r&&(t[r]=o),t}function mt(t,e,n,r){var o=r.condition,i=r.template,u=r.childrenMap,a=r.itemName,s=r.getKey,f=r.indexName,l=r.root,h=r.isTemplateTag,p=new Map,d=[],m=[];return t.forEach(function(t,r){var v=dt(Object.create(e),{itemName:a,indexName:f,index:r,item:t}),b=s?s(v):r,O=u.get(b);if(!pt(o,v)){var g=O?O.template:i.clone(),y=O?g.el:l.cloneNode(),E=!O,N=h&&E?D(g):{};if(E?d.push(function(){return g.mount(y,v,n,N)}):d.push(function(){return g.update(v,n)}),h){var T=N.children||g.children;m.push.apply(m,c(T))}else m.push(y);u.delete(b),p.set(b,{template:g,context:v,index:r})}}),{newChildrenMap:p,batches:d,futureNodes:m}}function vt(t,e){var n=e.evaluate,r=e.condition,o=e.itemName,i=e.indexName,u=e.getKey,a=e.template,s=document.createTextNode(""),c=t.parentNode,f=t.cloneNode();return c.insertBefore(s,t),N(t),Object.assign({},lt,{childrenMap:new Map,node:t,root:f,condition:r,evaluate:n,isTemplateTag:it(f),template:a.createDOM(t),getKey:u,indexName:i,itemName:o,placeholder:s})}var bt=Object.seal({mount:function(t,e){return this.update(t,e)},update:function(t,e){var n,r=this,o=!!this.evaluate(t),i=!this.value&&o,u=this.value&&!o;switch(!0){case i:n=r.node.cloneNode(),r.placeholder.parentNode.insertBefore(n,r.placeholder),r.template=r.template.clone(),r.template.mount(n,t,e);break;case u:this.unmount(t);break;default:o&&this.template.update(t,e)}return this.value=o,this},unmount:function(t,e){return this.template.unmount(t,e,!0),this}});function Ot(t,e){var n=e.evaluate,r=e.template,o=t.parentNode,i=document.createTextNode("");return o.insertBefore(i,t),N(t),Object.assign({},bt,{node:t,evaluate:n,placeholder:i,template:r.createDOM(t)})}function gt(t){throw new Error(t)}function yt(t){var e=this,n=new Map,r=function(r){return n.has(r)?n.get(r):n.set(r,t.call(e,r))&&n.get(r)};return r.cache=n,r}function Et(t){return t.reduce(function(t,e){var n=e.value,r=e.type;switch(!0){case!e.name&&r===x:return Object.assign({},t,n);case r===C:t.value=e.value;break;default:t[b(e.name)]=e.value}return t},{})}var Nt="removeAttribute",Tt="setAttribute",jt="undefined"==typeof Element?{}:Element.prototype,_t=yt(function(t){return jt.hasOwnProperty(t)});function Mt(t,e){Object.entries(e).forEach(function(e){var n=i(e,2),r=n[0],o=n[1];return St(t,{name:r},o)})}function At(t,e,n){var r=e?Object.keys(e):[];Object.keys(n).filter(function(t){return!r.includes(t)}).forEach(function(e){return t.removeAttribute(e)})}function St(t,e,n,r){var o=e.name;if(!o)return r&&At(t,n,r),void(n&&Mt(t,n));!_t(o)&&(at(n)||st(n)||ut(n))&&(t[o]=n),t[xt(n)](o,wt(o,n))}function xt(t){return ct(t)||!1===t||""===t||st(t)||ut(t)?Nt:Tt}function wt(t,e){return!0===e?t:e}var Pt=/^on/,Ct=function(t){return Array.isArray(t)?t:[t,!1]},It={handleEvent:function(t){this[t.type](t)}},Dt=new WeakMap,Ut=function(t){var e=Object.create(It);return Dt.set(t,e),e};function Yt(t,e,n){var r=e.name.replace(Pt,""),o=Dt.get(t)||Ut(t),u=i(Ct(n),2),a=u[0],s=u[1],c=o[r],f=a&&!c;c&&!a&&t.removeEventListener(r,o),f&&t.addEventListener(r,o,s),o[r]=a}function Lt(t){return ct(t)?"":t}var Bt=function(t,e){var n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){var r=document.createTextNode("");return t.replaceChild(r,n),r}return n};function Kt(t,e,n){t.data=Lt(n)}function kt(t,e,n){t.value=Lt(n)}var Rt=(o(t={},x,St),o(t,w,Yt),o(t,P,Kt),o(t,C,kt),t),zt=Object.seal({mount:function(t){return this.value=this.evaluate(t),Ht(this,this.value),this},update:function(t){var e=this.evaluate(t);return this.value!==e&&(Ht(this,e),this.value=e),this},unmount:function(){return this.type===w&&Ht(this,null),this}});function Ht(t,e){return Rt[t.type](t.node,t,e,t.value)}function $t(t,e){return Object.assign({},zt,e,{node:e.type===P?Bt(t,e.childNodeIndex):t})}function Ft(t,e,n){return e.reduce(function(e,r){return Object.assign({},e,o({},r,function(e){return t.map(function(t){return t[r](e)})&&n}))},{})}function Vt(t,e){var n=e.expressions;return Object.assign({},Ft(n.map(function(e){return $t(t,e)}),["mount","update","unmount"]))}var Gt=new Map,qt=Symbol("riot-component"),Wt=new Set,Xt="is",Zt="value",Jt="mount",Qt="update",te="unmount",ee="shouldUpdate",ne="onBeforeMount",re="onMounted",oe="onBeforeUpdate",ie="onUpdated",ue="onBeforeUnmount",ae="onUnmounted",se="props",ce="state",fe="slots",le="root",he=Symbol.for("pure"),pe=Symbol("parent"),de=Symbol("attributes"),me=Symbol("template"),ve=Object.freeze({__proto__:null,COMPONENTS_IMPLEMENTATION_MAP:Gt,DOM_COMPONENT_INSTANCE_PROPERTY:qt,PLUGINS_SET:Wt,IS_DIRECTIVE:Xt,VALUE_ATTRIBUTE:Zt,MOUNT_METHOD_KEY:Jt,UPDATE_METHOD_KEY:Qt,UNMOUNT_METHOD_KEY:te,SHOULD_UPDATE_KEY:ee,ON_BEFORE_MOUNT_KEY:ne,ON_MOUNTED_KEY:re,ON_BEFORE_UPDATE_KEY:oe,ON_UPDATED_KEY:ie,ON_BEFORE_UNMOUNT_KEY:ue,ON_UNMOUNTED_KEY:ae,PROPS_KEY:se,STATE_KEY:ce,SLOTS_KEY:fe,ROOT_KEY:le,IS_PURE_SYMBOL:he,PARENT_KEY_SYMBOL:pe,ATTRIBUTES_KEY_SYMBOL:de,TEMPLATE_KEY_SYMBOL:me});function be(t,e,n){if(!t||!t.length)return n;var r=t.map(function(t){return Object.assign({},t,{value:t.evaluate(e)})});return Object.assign(Object.create(n||null),Et(r))}var Oe=function(t,e){return e?e===t?t[pe]:e:void 0},ge=Object.seal({attributes:[],getTemplateScope:function(t,e){return be(this.attributes,t,e)},mount:function(t,e){var n=this,r=!!t.slots&&t.slots.find(function(t){return t.id===n.name}),o=this.node.parentNode,i=Oe(t,e);return this.template=r&&Ye(r.html,r.bindings).createDOM(o),this.template&&(this.template.mount(this.node,this.getTemplateScope(t,i),i),this.template.children=ye(this.node)),N(this.node),this},update:function(t,e){if(this.template){var n=Oe(t,e);this.template.update(this.getTemplateScope(t,n),n)}return this},unmount:function(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}});function ye(t,e){void 0===e&&(e=[]);var n=t.firstChild;return n?(t.parentNode.insertBefore(n,t),[n].concat(c(ye(t)))):e}function Ee(t,e){var n=e.name,r=e.attributes;return Object.assign({},ge,{attributes:r,node:t,name:n})}function Ne(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),t?t({slots:e,attributes:n}):Ye(je(e),[].concat(c(Te(e)),[{expressions:n.map(function(t){return Object.assign({type:x},t)})}]))}function Te(t){return t.reduce(function(t,e){var n=e.bindings;return t.concat(n)},[])}function je(t){return t.reduce(function(t,e){return t+e.html},"")}var _e=Object.seal({mount:function(t){return this.update(t)},update:function(t,e){var n=this.evaluate(t);return n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=Ne(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount:function(t,e,n){return this.tag&&this.tag.unmount(n),this}});function Me(t,e){var n=e.evaluate,r=e.getComponent,o=e.slots,i=e.attributes;return Object.assign({},_e,{node:t,evaluate:n,slots:o,attributes:i,getComponent:r})}var Ae=(o(e={},j,Ot),o(e,_,Vt),o(e,T,vt),o(e,M,Me),o(e,A,Ee),e);function Se(t,e){return t.map(function(t){return t.type===P?Object.assign({},t,{childNodeIndex:t.childNodeIndex+e}):t})}function xe(t,e,n){var r=e.selector,o=e.type,i=e.redundantAttribute,u=e.expressions,a=r?t.querySelector(r):t;i&&a.removeAttribute(i);var s=u||[];return(Ae[o]||Ae[_])(a,Object.assign({},e,{expressions:n&&!r?Se(s,n):s}))}function we(t,e){var n=it(e)?e:document.createElement("template");return n.innerHTML=t,n.content}function Pe(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg">'.concat(t,"</svg>"),"application/xml").documentElement,!0)}function Ce(t,e){return ot(t)?Pe(e,t):we(e,t)}function Ie(t,e){switch(!0){case ot(t):g(e,t);break;case it(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}}function De(t,e){return e&&("string"==typeof e?Ce(t,e):e)}var Ue=Object.freeze({createDOM:function(t){return this.dom=this.dom||De(t,this.html),this},mount:function(t,e,n,r){var o=this;if(void 0===r&&(r={}),!t)throw new Error("Please provide DOM node to mount properly your template");this.el&&this.unmount(e);var i=r,u=i.fragment,a=i.children,s=i.avoidDOMInjection,c=(a?a[0]:t).parentNode,f=it(t),l=f?Math.max(Array.from(c.childNodes).indexOf(t),0):null;return this.isTemplateTag=f,this.createDOM(t),this.dom&&(this.fragment=u||this.dom.cloneNode(!0)),this.el=this.isTemplateTag?c:t,this.children=this.isTemplateTag?a||Array.from(this.fragment.childNodes):null,!s&&this.fragment&&Ie(t,this.fragment),this.bindings=this.bindingsData.map(function(t){return xe(o.el,t,l)}),this.bindings.forEach(function(t){return t.mount(e,n)}),this},update:function(t,e){return this.bindings.forEach(function(n){return n.update(t,e)}),this},unmount:function(t,e,n){if(this.el){switch(this.bindings.forEach(function(r){return r.unmount(t,e,n)}),!0){case this.children&&null!==n:E(this.children);break;case!0===n:N(this.el);break;case null!==n:y(this.el)}this.el=null}return this},clone:function(){return Object.assign({},this,{el:null})}});function Ye(t,e){return void 0===e&&(e=[]),Object.assign({},Ue,{html:t,bindingsData:e})}var Le=Object.freeze({__proto__:null,template:Ye,createBinding:xe,createExpression:$t,bindingTypes:S,expressionTypes:I});function Be(){return this}function Ke(t,e){return e.forEach(function(e){t[e]=t[e].bind(t)}),t}function ke(t){return ut(t)?t.prototype&&t.prototype.constructor?new t:t():t}function Re(t,e,n,r){return void 0===r&&(r={}),Object.defineProperty(t,e,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function ze(t,e,n){return Object.entries(e).forEach(function(e){var r=i(e,2),o=r[0],u=r[1];Re(t,o,u,n)}),t}function He(t,e){return Object.entries(e).forEach(function(e){var n=i(e,2),r=n[0],o=n[1];t[r]||(t[r]=o)}),t}function $e(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}function Fe(t,e){return $e("string"==typeof t?(e||document).querySelectorAll(t):t)}var Ve=function(t){return 1===t.length?t[0]:t};function Ge(t,e,n){var r="string"==typeof e?[e]:e;return Ve($e(t).map(function(t){return Ve(r.map(function(e){return t[n](e)}))}))}function qe(t,e,n){var r="object"===m(e)?e:o({},e,n),i=Object.keys(r);return $e(t).forEach(function(t){i.forEach(function(e){return t.setAttribute(e,r[e])})}),t}function We(t,e){return Ge(t,e,"getAttribute")}var Xe=new Map,Ze="style[riot]",Je=function(t){return function(){return t||(qe(t=Fe(Ze)[0]||document.createElement("style"),"type","text/css"),t.parentNode||document.head.appendChild(t),t)}}(),Qe={CSS_BY_NAME:Xe,add:function(t,e){return Xe.has(t)||(Xe.set(t,e),this.inject()),this},inject:function(){return Je().innerHTML=c(Xe.values()).join("\n"),this},remove:function(t){return Xe.has(t)&&(Xe.delete(t),this.inject()),this}};function tn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(r=[].concat(n,c(r))).length<t.length?tn.apply(void 0,[t].concat(c(r))):t.apply(void 0,c(r))}}function en(t){return We(t,Xt)||t.tagName.toLowerCase()}var nn=Object.freeze({$:function(t){return Fe(t,this.root)[0]},$$:function(t){return Fe(t,this.root)}}),rn=Object.freeze((o(n={},Jt,Be),o(n,Qt,Be),o(n,te,Be),n)),on=Object.freeze((o(r={},ee,Be),o(r,ne,Be),o(r,re,Be),o(r,oe,Be),o(r,ie,Be),o(r,ue,Be),o(r,ae,Be),r)),un=Object.assign({},rn,{clone:Be,createDOM:Be});function an(t,e){return void 0===e&&(e={}),Object.assign({},O(t),ke(e))}var sn=function(t,e){return t[qt]=e};function cn(t){return[Jt,Qt,te].reduce(function(e,n){return e[n]=t(n),e},{})}function fn(t,e){return t(Ye,I,S,function(t){return e[t]||Gt.get(t)})}function ln(t,e){var n=e.slots,r=e.attributes,o=e.props,i=e.css;e.template&&gt("Pure components can not have html"),i&&gt("Pure components do not have css");var u=He(t({slots:n,attributes:r,props:o}),rn);return cn(function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(t===Jt){var o=n[0];sn(o,u)}return u[t].apply(u,n),u}})}function hn(t){var e=t.css,n=t.template,r=t.exports,o=t.name,i=n?fn(n,r?mn(r.components):{}):un;return function(t){var u=t.slots,a=t.attributes,s=t.props;if(r&&r[he])return ln(r,{slots:u,attributes:a,props:s,css:e,template:n});var c=ke(r)||{},f=pn({css:e,template:i,componentAPI:c,name:o})({slots:u,attributes:a,props:s});return{mount:function(t,e,n){return f.mount(t,n,e)},update:function(t,e){return f.update(e,t)},unmount:function(t){return f.unmount(t)}}}}function pn(t){var e,n=t.css,r=t.template,i=t.componentAPI,u=t.name;return n&&u&&Qe.add(u,n),tn(gn)(ze(He(i,Object.assign({},on,o({},ce,{}))),Object.assign((o(e={},fe,null),o(e,le,null),e),nn,{name:u,css:n,template:r})))}function dn(t,e){void 0===e&&(e=[]);var n=e.map(function(e){return $t(t,e)}),r={};return Object.assign(r,Object.assign({expressions:n},cn(function(t){return function(e){return n.forEach(function(n){return n[t](e)}),r}})))}function mn(t){return void 0===t&&(t={}),Object.entries(ke(t)).reduce(function(t,e){var n=i(e,2),r=n[0],o=n[1];return t[v(r)]=hn(o),t},{})}function vn(t){return c(Wt).reduce(function(t,e){return e(t)||t},t)}function bn(t,e){return Object.assign({},t,ke(e))}function On(t,e){en(t)!==e&&qe(t,Xt,e)}function gn(t,e){var n=e.slots,r=e.attributes,o=e.props;return Ke(vn(ze(Object.create(t),{mount:function(e,i,u){return void 0===i&&(i={}),this[de]=dn(e,r).mount(u),Re(this,se,Object.freeze(Object.assign({},an(e,o),Et(this[de].expressions)))),this[ce]=bn(this[ce],i),this[me]=this.template.createDOM(e).clone(),sn(e,this),t.name&&On(e,t.name),Re(this,le,e),Re(this,fe,n),this[ne](this[se],this[ce]),this[pe]=u,this[me].mount(e,this,u),this[re](this[se],this[ce]),this},update:function(t,e){void 0===t&&(t={}),e&&(this[pe]=e,this[de].update(e));var n=Et(this[de].expressions);if(!1!==this[ee](n,this[se]))return Re(this,se,Object.freeze(Object.assign({},this[se],n))),this[ce]=bn(this[ce],t),this[oe](this[se],this[ce]),this[me].update(this,this[pe]),this[ie](this[se],this[ce]),this},unmount:function(t){return this[ue](this[se],this[ce]),this[de].unmount(),this[me].unmount(this,this[pe],null===t?null:!t),this[ae](this[se],this[ce]),this}})),Object.keys(t).filter(function(e){return ut(t[e])}))}function yn(t,e,n){var r=n||en(t);return Gt.has(r)||gt('The component named "'.concat(r,'" was never registered')),Gt.get(r)({props:e}).mount(t)}function En(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}var Nn=ve.DOM_COMPONENT_INSTANCE_PROPERTY,Tn=ve.COMPONENTS_IMPLEMENTATION_MAP,jn=ve.PLUGINS_SET;function _n(t,e){var n=e.css,r=e.template,o=e.exports;return Tn.has(t)&&gt('The component "'.concat(t,'" was already registered')),Tn.set(t,hn({name:t,css:n,template:r,exports:o})),Tn}function Mn(t){return Tn.has(t)||gt('The component "'.concat(t,'" was never registered')),Tn.delete(t),Qe.remove(t),Tn}function An(t,e,n){return Fe(t).map(function(t){return yn(t,e,n)})}function Sn(t,e){return Fe(t).map(function(t){return t[Nn]&&t[Nn].unmount(e),t})}function xn(t){return ut(t)||gt("Plugins must be of type function"),jn.has(t)&&gt("This plugin was already installed"),jn.add(t),jn}function wn(t){return jn.has(t)||gt("This plugin was never installed"),jn.delete(t),jn}function Pn(t){return function(e,n,r){var o=void 0===r?{}:r,i=o.slots,u=o.attributes,a=o.parentScope;return En(function(t){return t.mount(e,a)},function(t){return t({props:n,slots:i,attributes:u})},hn)(t)}}function Cn(t){return ut(t)||gt('riot.pure accepts only arguments of type "function"'),t[he]=!0,t}var In="v4.13.5";exports.version=In;var Dn={cssManager:Qe,DOMBindings:Le,createComponent:hn,defineComponent:pn,globals:ve};exports.__=Dn;
},{}],"Icca":[function(require,module,exports) {
"use strict";function e(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&"number"==typeof e.length?Array.from(e):[e]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"dmLL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("bianco.dom-to-array"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t,r){return(0,e.default)("string"==typeof t?(r||document).querySelectorAll(t):t)}
},{"bianco.dom-to-array":"Icca"}],"AJjJ":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,o=arguments[3];!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("riot"),require("bianco.query")):"function"==typeof e&&e.amd?e(["exports","riot","bianco.query"],t):t((o=o||self).riotHotReload={},o.riot,o.$)}(this,function(e,o,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const{cssManager:n}=o.__,{DOM_COMPONENT_INSTANCE_PROPERTY:r}=o.__.globals;function u(e){const{name:u}=e;return u?t(`${u}, [is=${u}]`).map(t=>{const a=t[r];if(!a)return;a.unmount(!0),n.remove(u);const s=o.component(e)(t,a.props);return s.update(a.state),s}):(console.warn("Anonymous components can not be reloaded"),[])}e.default=u,e.reload=u,Object.defineProperty(e,"__esModule",{value:!0})});
},{"riot":"d6tg","bianco.query":"dmLL"}],"e1d5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={css:null,exports:{},template:function(e,t,r,o){return e('<div class="app-header"><img src="https://riot.js.org/img/logo/riot-logo.svg" alt="Riot.js logo" class="logo"/></div><h1 expr0="expr0"> </h1>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:function(e){return e.props.title}}]}])},name:"app"};exports.default=e;
},{}],"epB2":[function(require,module,exports) {
"use strict";require("@riotjs/hot-reload");var e=r(require("./app.riot")),t=require("riot");function r(e){return e&&e.__esModule?e:{default:e}}(0,t.component)(e.default)(document.getElementById("app"),{title:"Hello Riot.js!!"});
},{"@riotjs/hot-reload":"AJjJ","./app.riot":"e1d5","riot":"d6tg"}]},{},["epB2"], null)
//# sourceMappingURL=/main.js.map