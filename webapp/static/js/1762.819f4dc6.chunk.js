"use strict";(self.webpackChunknulp_elite=self.webpackChunknulp_elite||[]).push([[1762,7502,8404],{11201:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var r=/[A-Z]/g,i=/^ms-/,o={};function a(t){return"-"+t.toLowerCase()}const l=function(t){if(o.hasOwnProperty(t))return o[t];var e=t.replace(r,a);return o[t]=i.test(e)?"-"+e:e}},38404:(t,e,n)=>{n.r(e),n.d(e,{SafeAreaConsumer:()=>S,SafeAreaContext:()=>C,SafeAreaFrameContext:()=>g,SafeAreaInsetsContext:()=>m,SafeAreaProvider:()=>h,SafeAreaView:()=>L,initialWindowMetrics:()=>j,initialWindowSafeAreaInsets:()=>M,useSafeArea:()=>A,useSafeAreaFrame:()=>b,useSafeAreaInsets:()=>y,withSafeAreaInsets:()=>w});var r=n(32995),i=n(55563),o=n(78191),a=n(19723);const l={WebkitTransition:"webkitTransitionEnd",Transition:"transitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd"};function s(t){let{children:e,style:n,onInsetsChange:i}=t;return r.useEffect((()=>{if("undefined"===typeof document)return;const t=function(){const t=document.createElement("div"),{style:e}=t;return e.position="fixed",e.left="0",e.top="0",e.width="0",e.height="0",e.zIndex="-1",e.overflow="hidden",e.visibility="hidden",e.transitionDuration="0.05s",e.transitionProperty="padding",e.transitionDelay="0s",e.paddingTop=c("top"),e.paddingBottom=c("bottom"),e.paddingLeft=c("left"),e.paddingRight=c("right"),t}();document.body.appendChild(t);const e=()=>{const{paddingTop:e,paddingBottom:n,paddingLeft:r,paddingRight:o}=window.getComputedStyle(t),a={top:e?parseInt(e,10):0,bottom:n?parseInt(n,10):0,left:r?parseInt(r,10):0,right:o?parseInt(o,10):0},l={x:0,y:0,width:document.documentElement.offsetWidth,height:document.documentElement.offsetHeight};i({nativeEvent:{insets:a,frame:l}})};return t.addEventListener(d(),e),e(),()=>{document.body.removeChild(t),t.removeEventListener(d(),e)}}),[i]),r.createElement(a.A,{style:n},e)}let u=null;function d(){if(null!==u)return u;const t=document.createElement("invalidtype");u=l.Transition;for(const e in l)if(void 0!==t.style[e]){u=l[e];break}return u}let f=null;function c(t){return"".concat(function(){if(null!==f)return f;const{CSS:t}=window;return f=t&&t.supports&&t.supports("top: constant(safe-area-inset-top)")?"constant":"env",f}(),"(safe-area-inset-").concat(t,")")}function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}const m=r.createContext(null);m.displayName="SafeAreaInsetsContext";const g=r.createContext(null);function h(t){let{children:e,initialMetrics:n,initialSafeAreaInsets:o,style:a}=t;var l,u,d,f,c;const p=r.useContext(m),h=r.useContext(g),[y,b]=r.useState(null!==(l=null!==(u=null!==(d=null===n||void 0===n?void 0:n.insets)&&void 0!==d?d:o)&&void 0!==u?u:p)&&void 0!==l?l:null),[w,A]=r.useState(null!==(f=null!==(c=null===n||void 0===n?void 0:n.frame)&&void 0!==c?c:h)&&void 0!==f?f:{x:0,y:0,width:i.A.get("window").width,height:i.A.get("window").height}),S=r.useCallback((t=>{const{nativeEvent:{frame:e,insets:n}}=t;!e||e.height===w.height&&e.width===w.width&&e.x===w.x&&e.y===w.y||A(e),y&&n.bottom===y.bottom&&n.left===y.left&&n.right===y.right&&n.top===y.top||b(n)}),[w,y]);return r.createElement(s,{style:[v.fill,a],onInsetsChange:S},null!=y?r.createElement(g.Provider,{value:w},r.createElement(m.Provider,{value:y},e)):null)}g.displayName="SafeAreaFrameContext";const v=o.A.create({fill:{flex:1}});function y(){const t=r.useContext(m);if(null==t)throw new Error("No safe area insets value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.");return t}function b(){const t=r.useContext(g);if(null==t)throw new Error("No safe area frame value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.");return t}function w(t){return r.forwardRef(((e,n)=>r.createElement(S,null,(i=>r.createElement(t,p({},e,{insets:i,ref:n}))))))}function A(){return y()}const S=m.Consumer,C=m;function E(){return E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},E.apply(this,arguments)}const x=8,T=4,I=2,P=1,k=15,O={top:x,right:T,bottom:I,left:P};function L(t){let{style:e={},mode:n,edges:i,...l}=t;const s=y(),u=null!=i?i.reduce(((t,e)=>t|O[e]),0):k,d=r.useMemo((()=>{const t=u&x?s.top:0,r=u&T?s.right:0,i=u&I?s.bottom:0,a=u&P?s.left:0,l=o.A.flatten(e);if("margin"===n){const{margin:n=0,marginVertical:o=n,marginHorizontal:s=n,marginTop:u=o,marginRight:d=s,marginBottom:f=o,marginLeft:c=s}=l;return[e,{marginTop:u+t,marginRight:d+r,marginBottom:f+i,marginLeft:c+a}]}{const{padding:n=0,paddingVertical:o=n,paddingHorizontal:s=n,paddingTop:u=o,paddingRight:d=s,paddingBottom:f=o,paddingLeft:c=s}=l;return[e,{paddingTop:u+t,paddingRight:d+r,paddingBottom:f+i,paddingLeft:c+a}]}}),[e,s,n,u]);return r.createElement(a.A,E({style:d},l))}const j=null,M=null},24586:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(11369);function i(t,e,n){return(e=(0,r.A)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},17502:(t,e,n)=>{function r(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{A:()=>r})},11369:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(17545);function i(t){var e=function(t,e){if("object"!=(0,r.A)(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=(0,r.A)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==(0,r.A)(e)?e:e+""}},17545:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{A:()=>r})}}]);
//# sourceMappingURL=1762.819f4dc6.chunk.js.map