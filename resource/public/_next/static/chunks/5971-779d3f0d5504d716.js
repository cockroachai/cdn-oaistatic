"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5971],{82920:function(e,t){t.vE=function(e,t){if(t)return e;throw Error("Unhandled discriminated union member: "+JSON.stringify(e))}},76150:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(51516),o=n(17224);function l(e,t){(0,r.Z)(1,arguments);var n,l,p,m=(0,o.Z)(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==m&&1!==m&&0!==m)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof e||"[object String]"===Object.prototype.toString.call(e)))return new Date(NaN);var g=function(e){var t,n={},r=e.split(a.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],a.timeZoneDelimiter.test(n.date)&&(n.date=e.split(a.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=a.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e);if(g.date){var E=function(e,t){var n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,l=r[2]?parseInt(r[2]):null;return{year:null===l?o:100*l,restDateString:e.slice((r[1]||r[2]).length)}}(g.date,m);l=function(e,t){if(null===t)return new Date(NaN);var n,r,o=e.match(i);if(!o)return new Date(NaN);var l=!!o[4],a=c(o[1]),u=c(o[2])-1,s=c(o[3]),d=c(o[4]),p=c(o[5])-1;if(l)return d>=1&&d<=53&&p>=0&&p<=6?((n=new Date(0)).setUTCFullYear(t,0,4),r=n.getUTCDay()||7,n.setUTCDate(n.getUTCDate()+((d-1)*7+p+1-r)),n):new Date(NaN);var m=new Date(0);return u>=0&&u<=11&&s>=1&&s<=(f[u]||(v(t)?29:28))&&a>=1&&a<=(v(t)?366:365)?(m.setUTCFullYear(t,u,Math.max(a,s)),m):new Date(NaN)}(E.restDateString,E.year)}if(!l||isNaN(l.getTime()))return new Date(NaN);var D=l.getTime(),w=0;if(g.time&&isNaN(w=function(e){var t=e.match(u);if(!t)return NaN;var n=d(t[1]),r=d(t[2]),o=d(t[3]);return(24===n?0===r&&0===o:o>=0&&o<60&&r>=0&&r<60&&n>=0&&n<25)?36e5*n+6e4*r+1e3*o:NaN}(g.time)))return new Date(NaN);if(g.timezone){if(isNaN(p=function(e){if("Z"===e)return 0;var t=e.match(s);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return o>=0&&o<=59?n*(36e5*r+6e4*o):NaN}(g.timezone)))return new Date(NaN)}else{var h=new Date(D+w),b=new Date(0);return b.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),b.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),b}return new Date(D+w+p)}var a={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function d(e){return e&&parseFloat(e.replace(",","."))||0}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400==0||e%4==0&&e%100!=0}},25260:function(e,t,n){var r=n(70079);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))});t.Z=o},77311:function(e,t,n){var r=n(70079);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",clipRule:"evenodd"}))});t.Z=o},50835:function(e,t,n){let r,o;n.d(t,{aU:function(){return eN},$j:function(){return eT},VY:function(){return e_},dk:function(){return eF},aV:function(){return eR},h_:function(){return ey},fC:function(){return eC},Dx:function(){return eO}});var l=n(5527),a=n(70079),i=n(53559),u=n(68469),s=n(10132),c=n(70494),d=n(21381),f=n(8859),v=n(51629),p=n(30075);let m="dismissableLayer.update",g=(0,a.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),E=(0,a.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:E,onDismiss:h,...b}=e,C=(0,a.useContext)(g),[y,R]=(0,a.useState)(null),_=null!==(n=null==y?void 0:y.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,N]=(0,a.useState)({}),T=(0,u.e)(t,e=>R(e)),O=Array.from(C.layers),[F]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),Z=O.indexOf(F),P=y?O.indexOf(y):-1,M=C.layersWithOutsidePointerEventsDisabled.size>0,L=P>=Z,A=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e),r=(0,a.useRef)(!1),o=(0,a.useRef)(()=>{});return(0,a.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function l(){w("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!L||n||(null==c||c(e),null==E||E(e),e.defaultPrevented||null==h||h())},_),I=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e),r=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{let e=e=>{e.target&&!r.current&&w("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));n||(null==d||d(e),null==E||E(e),e.defaultPrevented||null==h||h())},_);return(0,p.e)(e=>{let t=P===C.layers.size-1;t&&(null==i||i(e),!e.defaultPrevented&&h&&(e.preventDefault(),h()))},_),(0,a.useEffect)(()=>{if(y)return o&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=_.body.style.pointerEvents,_.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(y)),C.layers.add(y),D(),()=>{o&&1===C.layersWithOutsidePointerEventsDisabled.size&&(_.body.style.pointerEvents=r)}},[y,_,o,C]),(0,a.useEffect)(()=>()=>{y&&(C.layers.delete(y),C.layersWithOutsidePointerEventsDisabled.delete(y),D())},[y,C]),(0,a.useEffect)(()=>{let e=()=>N({});return document.addEventListener(m,e),()=>document.removeEventListener(m,e)},[]),(0,a.createElement)(f.WV.div,(0,l.Z)({},b,{ref:T,style:{pointerEvents:M?L?"auto":"none":void 0,...e.style},onFocusCapture:(0,s.M)(e.onFocusCapture,I.onFocusCapture),onBlurCapture:(0,s.M)(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:(0,s.M)(e.onPointerDownCapture,A.onPointerDownCapture)}))});function D(){let e=new CustomEvent(m);document.dispatchEvent(e)}function w(e,t,n,{discrete:r}){let o=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,f.jH)(o,l):o.dispatchEvent(l)}let h="focusScope.autoFocusOnMount",b="focusScope.autoFocusOnUnmount",C={bubbles:!1,cancelable:!0},y=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[c,d]=(0,a.useState)(null),p=(0,v.W)(o),m=(0,v.W)(i),g=(0,a.useRef)(null),E=(0,u.e)(t,e=>d(e)),D=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(D.paused||!c)return;let t=e.target;c.contains(t)?g.current=t:N(g.current,{select:!0})}function t(e){if(D.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||N(g.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&N(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,D.paused]),(0,a.useEffect)(()=>{if(c){T.add(D);let e=document.activeElement,t=c.contains(e);if(!t){let t=new CustomEvent(h,C);c.addEventListener(h,p),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(N(r,{select:t}),document.activeElement!==n)return}(R(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&N(c))}return()=>{c.removeEventListener(h,p),setTimeout(()=>{let t=new CustomEvent(b,C);c.addEventListener(b,m),c.dispatchEvent(t),t.defaultPrevented||N(null!=e?e:document.body,{select:!0}),c.removeEventListener(b,m),T.remove(D)},0)}}},[c,p,m,D]);let w=(0,a.useCallback)(e=>{if(!n&&!r||D.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,l]=function(e){let t=R(e),n=_(t,e),r=_(t.reverse(),e);return[n,r]}(t);r&&l?e.shiftKey||o!==l?e.shiftKey&&o===r&&(e.preventDefault(),n&&N(l,{select:!0})):(e.preventDefault(),n&&N(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,D.paused]);return(0,a.createElement)(f.WV.div,(0,l.Z)({tabIndex:-1},s,{ref:E,onKeyDown:w}))});function R(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function _(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function N(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let T=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=O(o,e)).unshift(e)},remove(e){var t;null===(t=(o=O(o,e))[0])||void 0===t||t.resume()}});function O(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var F=n(99581);let Z=(0,a.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?F.createPortal((0,a.createElement)(f.WV.div,(0,l.Z)({},o,{ref:t})),r):null});var P=n(40051),M=n(83544),L=n(54239),A=n(66546),I=n(26739);let S="Dialog",[W,k]=(0,i.b)(S),[U,x]=W(S),z=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:l,modal:i=!0}=e,u=(0,a.useRef)(null),s=(0,a.useRef)(null),[f=!1,v]=(0,d.T)({prop:r,defaultProp:o,onChange:l});return(0,a.createElement)(U,{scope:t,triggerRef:u,contentRef:s,contentId:(0,c.M)(),titleId:(0,c.M)(),descriptionId:(0,c.M)(),open:f,onOpenChange:v,onOpenToggle:(0,a.useCallback)(()=>v(e=>!e),[v]),modal:i},n)},K=((e,t)=>{let{__scopeDialog:n,...r}=e,o=x("DialogTrigger",n),i=(0,u.e)(t,o.triggerRef);return(0,a.createElement)(f.WV.button,(0,l.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eo(o.open)},r,{ref:i,onClick:(0,s.M)(e.onClick,o.onOpenToggle)}))},"DialogPortal"),[V,j]=W(K,{forceMount:void 0}),B=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,l=x(K,t);return(0,a.createElement)(V,{scope:t,forceMount:n},a.Children.map(r,e=>(0,a.createElement)(P.z,{present:n||l.open},(0,a.createElement)(Z,{asChild:!0,container:o},e))))},$="DialogOverlay",H=(0,a.forwardRef)((e,t)=>{let n=j($,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=x($,e.__scopeDialog);return i.modal?(0,a.createElement)(P.z,{present:r||i.open},(0,a.createElement)(Y,(0,l.Z)({},o,{ref:t}))):null}),Y=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=x($,n);return(0,a.createElement)(L.Z,{as:I.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,a.createElement)(f.WV.div,(0,l.Z)({"data-state":eo(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),J="DialogContent",q=(0,a.forwardRef)((e,t)=>{let n=j(J,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=x(J,e.__scopeDialog);return(0,a.createElement)(P.z,{present:r||i.open},i.modal?(0,a.createElement)(G,(0,l.Z)({},o,{ref:t})):(0,a.createElement)(Q,(0,l.Z)({},o,{ref:t})))}),G=(0,a.forwardRef)((e,t)=>{let n=x(J,e.__scopeDialog),r=(0,a.useRef)(null),o=(0,u.e)(t,n.contentRef,r);return(0,a.useEffect)(()=>{let e=r.current;if(e)return(0,A.Ry)(e)},[]),(0,a.createElement)(X,(0,l.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,s.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,s.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,s.M)(e.onFocusOutside,e=>e.preventDefault())}))}),Q=(0,a.forwardRef)((e,t)=>{let n=x(J,e.__scopeDialog),r=(0,a.useRef)(!1),o=(0,a.useRef)(!1);return(0,a.createElement)(X,(0,l.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var l,a;null===(l=e.onCloseAutoFocus)||void 0===l||l.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var l,a;null===(l=e.onInteractOutside)||void 0===l||l.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let i=t.target,u=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(i);u&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),X=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...s}=e,c=x(J,n),d=(0,a.useRef)(null),f=(0,u.e)(t,d);return(0,M.EW)(),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(y,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},(0,a.createElement)(E,(0,l.Z)({role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":eo(c.open)},s,{ref:f,onDismiss:()=>c.onOpenChange(!1)}))),!1)}),ee="DialogTitle",et=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=x(ee,n);return(0,a.createElement)(f.WV.h2,(0,l.Z)({id:o.titleId},r,{ref:t}))}),en=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=x("DialogDescription",n);return(0,a.createElement)(f.WV.p,(0,l.Z)({id:o.descriptionId},r,{ref:t}))}),er=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=x("DialogClose",n);return(0,a.createElement)(f.WV.button,(0,l.Z)({type:"button"},r,{ref:t,onClick:(0,s.M)(e.onClick,()=>o.onOpenChange(!1))}))});function eo(e){return e?"open":"closed"}let[el,ea]=(0,i.k)("DialogTitleWarning",{contentName:J,titleName:ee,docsSlug:"dialog"}),[ei,eu]=(0,i.b)("AlertDialog",[k]),es=k(),ec=e=>{let{__scopeAlertDialog:t,...n}=e,r=es(t);return(0,a.createElement)(z,(0,l.Z)({},r,n,{modal:!0}))},ed=e=>{let{__scopeAlertDialog:t,...n}=e,r=es(t);return(0,a.createElement)(B,(0,l.Z)({},r,n))},ef=(0,a.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=es(n);return(0,a.createElement)(H,(0,l.Z)({},o,r,{ref:t}))}),ev="AlertDialogContent",[ep,em]=ei(ev),eg=(0,a.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,children:r,...o}=e,i=es(n),c=(0,a.useRef)(null),d=(0,u.e)(t,c),f=(0,a.useRef)(null);return(0,a.createElement)(el,{contentName:ev,titleName:eE,docsSlug:"alert-dialog"},(0,a.createElement)(ep,{scope:n,cancelRef:f},(0,a.createElement)(q,(0,l.Z)({role:"alertdialog"},i,o,{ref:d,onOpenAutoFocus:(0,s.M)(o.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=f.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),(0,a.createElement)(I.A4,null,r),!1)))}),eE="AlertDialogTitle",eD=(0,a.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=es(n);return(0,a.createElement)(et,(0,l.Z)({},o,r,{ref:t}))}),ew=(0,a.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=es(n);return(0,a.createElement)(en,(0,l.Z)({},o,r,{ref:t}))}),eh=(0,a.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=es(n);return(0,a.createElement)(er,(0,l.Z)({},o,r,{ref:t}))}),eb=(0,a.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:o}=em("AlertDialogCancel",n),i=es(n),s=(0,u.e)(t,o);return(0,a.createElement)(er,(0,l.Z)({},i,r,{ref:s}))}),eC=ec,ey=ed,eR=ef,e_=eg,eN=eh,eT=eb,eO=eD,eF=ew}}]);