"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1162],{68919:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(19841),o=r(35250);function a(e){var t=e.percentage,r=e.thickness,a=e.className,i=e.backgroundStrokeClassName,u=e.transitionDuration,l=e.transitionTimingFunction,s=e.onTransitionEnd,c=120*(void 0===r?1/12:r),d=(120-c)/2,f=2*Math.PI*d;return(0,o.jsxs)("svg",{width:120,height:120,viewBox:"0 0 ".concat(120," ").concat(120),className:a,children:[(0,o.jsx)("circle",{className:(0,n.default)("origin-[50%_50%] -rotate-90",void 0===i?"stroke-gray-400":i),strokeWidth:c,fill:"transparent",r:d,cx:60,cy:60}),(0,o.jsx)("circle",{className:"origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",stroke:"currentColor",strokeWidth:c,strokeDashoffset:f-t/100*f,strokeDasharray:"".concat(f," ").concat(f),fill:"transparent",r:d,cx:60,cy:60,style:{transitionDuration:u,transitionTimingFunction:l},onTransitionEnd:s})]})}},8024:function(e,t,r){var n=r(5397),o=r.n(n);r(70079);var a=r(35250),i=function(e){var t=e.children;return(0,a.jsx)(a.Fragment,{children:t})};t.Z=o()(function(){return Promise.resolve(i)},{ssr:!1})},41845:function(e,t,r){r.d(t,{$e:function(){return a},EZ:function(){return i},Ql:function(){return o},dO:function(){return n},xC:function(){return u}});var n=10,o=4,a={duration:20,hasCloseButton:!0},i=512,u=536870912},7525:function(e,t,r){var n,o,a,i;r.d(t,{A:function(){return n},X:function(){return o}}),(a=n||(n={}))[a.None=0]="None",a[a.Multimodal=1]="Multimodal",a[a.Interpreter=2]="Interpreter",a[a.Retrieval=3]="Retrieval",a[a.ContextConnector=4]="ContextConnector",a[a.ProfilePicture=5]="ProfilePicture",(i=o||(o={})).Uploading="uploading",i.Ready="ready"},31609:function(e,t,r){r.d(t,{W7:function(){return m},cT:function(){return g},lU:function(){return x},po:function(){return v}});var n=r(50134),o=r(4399),a=r.n(o),i=r(82256),u=r(17046),l=r(66027),s=r(88654),c=r(94968),d=r(4748),f=r(55161),p={duration:20,hasCloseButton:!0};function m(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function v(e){return new Promise(function(t,r){var n=new FileReader,o=new Image;n.onload=function(){o.onload=function(){return t(o)},o.onerror=function(e){return r(e)},o.src=n.result},n.readAsDataURL(e)})}function g(e,t,r,n,o,a){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark(function e(t,r,n,o,s,c){var m,v,g,h,x,w,_,b;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m=c.usesRetrievalIndex?performance.now():void 0,e.prev=1,e.next=4,l.ZP.createFile(r.name,r.size,o);case 4:return x=(h=e.sent).file_id,w=h.upload_url,s.onFileCreated(t,x,w),_=o.kind===i.Ei.Gizmo?o.gizmoId:void 0,e.next=11,function(e,t,r,n,o){return y.apply(this,arguments)}(t,r,x,w,s.onFileUploadProgress,null!==(v=c.usesRetrievalIndex)&&void 0!==v&&v,null!==(g=c.shouldUpdateProgress)&&void 0!==g&&g,{gizmoId:_});case 11:if(!c.usesRetrievalIndex){e.next=19;break}return e.next=14,function(e,t){return k.apply(this,arguments)}(x,_);case 14:(null==(b=e.sent)?void 0:b.status)===i.Xf.Skipped&&d.m.danger(n.formatMessage(M.retrievalSkippedFile,{fileName:b.name}),p),s.onFileUploaded(t,void 0,{fileTokenSize:b.file_size_tokens}),e.next=20;break;case 19:s.onFileUploaded(t,c.imageDimensions);case 20:null!=m&&l.ZP.postRetrievalTiming({e2eLatencyMs:performance.now()-m}),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),function(e,t,r){var n=(0,f.kr)(e,"default_upload_error",{fileName:t.name});(0,u.T)(r)&&void 0!==r.code&&(n=(0,f.kr)(e,r.code)),d.m.danger(n,p)}(n,r,e.t0),s.onError(t,"error");case 27:case"end":return e.stop()}},e,null,[[1,23]])}))).apply(this,arguments)}function x(e,t,r,n,o){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(a().mark(function e(t,r,n,o,i){var u,l,s;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(r);case 2:return l=(u=e.sent).width,s=u.height,e.abrupt("return",g(t,r,n,{kind:o},i,{imageDimensions:{width:l,height:s}}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return(y=(0,n.Z)(a().mark(function e(t,r,o,i,u){var s,c,d,f=arguments;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=f.length>5&&void 0!==f[5]&&f[5],c=f.length>6&&void 0!==f[6]&&f[6],d=f.length>7&&void 0!==f[7]?f[7]:{},e.next=5,l.ZP.uploadFileToAzureStorage(r,i,function(e){c&&u(t,10+80*e)}).then(function(){var e=(0,n.Z)(a().mark(function e(r){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(t,90),201!==r.status&&function(e,t){_.apply(this,arguments)}(r,o,s),e.next=4,l.ZP.processFileUpload(o,d);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return(k=(0,n.Z)(a().mark(function e(t,r){var n,o,u,c;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=Date.now()+6e4,o=function(e){return new Promise(function(t){return setTimeout(t,e)})},u=0;case 3:if(!(Date.now()<n)){e.next=18;break}return e.next=6,l.ZP.getRetrievalStatus(t,r);case 6:if(!((c=e.sent).status===i.Xf.Success||c.status===i.Xf.Skipped)){e.next=11;break}return e.abrupt("return",c);case 11:if(c.status!==i.Xf.Failed){e.next=13;break}throw new s.gK("Context extraction failed",void 0,c.error_code);case 13:return u++,e.next=16,o(Math.min(1e3,100*u));case 16:e.next=3;break;case 18:throw new s.gK("Retrieval indexing timed out");case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(){return(_=(0,n.Z)(a().mark(function e(t,r){var n,o,i=arguments;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]&&i[2],o="Unknown error",e.prev=2,e.next=5,t.data;case 5:o=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:throw n&&l.ZP.markFileUploadFailed(r,{error:o}),new s.gK("File upload to blobstore failed",void 0,"default_upload_error");case 12:case"end":return e.stop()}},e,null,[[2,8]])}))).apply(this,arguments)}var M=(0,c.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},55161:function(e,t,r){r.d(t,{$H:function(){return h},$p:function(){return P},CO:function(){return L},Iy:function(){return v},KL:function(){return E},L8:function(){return g},O6:function(){return y},Tu:function(){return Z},VF:function(){return w},WI:function(){return I},YN:function(){return _},Z8:function(){return T},Zp:function(){return U},_0:function(){return F},kr:function(){return x},p0:function(){return C},ww:function(){return k},xs:function(){return b}});var n=r(50134),o=r(4399),a=r.n(o),i=r(82256),u=r(11591),l=r(66027),s=r(15136),c=r(70079),d=r(70671),f=r(94968),p=r(4748),m=r(7525);function v(e){return e.replace("file-service://","")}function g(e){return"file-service://"+e}function h(e){return e.startsWith("file-service://")}function x(e,t,r){switch(t){case"file_zero_bytes":return e.formatMessage(N.fileZeroBytes,r);case"file_too_large":return e.formatMessage(N.fileTooLarge,r);case"over_user_quota":return e.formatMessage(N.overUserQuota,r);case"file_not_found":case"file_expired":return e.formatMessage(N.fileNotFound,r);case"file_timed_out":return e.formatMessage(N.fileTimedOut,r);case"ace_pod_expired":return e.formatMessage(N.codeInterpreterSessionTimeout,r);case"permission_error":return e.formatMessage(N.permissionError,r);case"default_upload_error":case"file_rejected":return e.formatMessage(N.defaultCreateEntryError,r);case"default_download_link_error":return e.formatMessage(N.defaultDownloadLinkError,r);case"file_empty":return e.formatMessage(N.fileEmpty,r);case"too_many_tokens":return e.formatMessage(N.fileTooManyTokens,r);case"file_encrypted":return e.formatMessage(N.fileEncrypted,r);case"file_corrupted":return e.formatMessage(N.fileCorrupted,r);default:return e.formatMessage(N.unknownError)}}function w(){var e=(0,d.Z)();return(0,c.useCallback)(function(t,r){return x(e,t,r)},[e])}function y(){var e,t=(0,s.kP)().session,r=(0,d.Z)();return e=(0,n.Z)(a().mark(function e(n,o){var u,s,c,d,f,m,v,g;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=3;break}return p.m.danger(r.formatMessage(N.fileDownloadFailed)),e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,l.ZP.getFileDownloadLink(n);case 6:if(!((c=e.sent).status!==i.KF.Success)){e.next=9;break}throw Error("File is not ready to download: "+JSON.stringify(c));case 9:if(!(null!=(d=null===(u=c.metadata)||void 0===u?void 0:null===(s=u.context_connector)||void 0===s?void 0:s.url))){e.next=14;break}window.open(d,"_blank"),e.next=26;break;case 14:return e.next=16,fetch(c.download_url).then(function(e){return e.blob()});case 16:f=e.sent,m=URL.createObjectURL(f),(v=window.open(m,"_blank"))&&v.addEventListener("beforeunload",function(){URL.revokeObjectURL(m)}),(g=document.createElement("a")).href=m,g.download=o,g.style.display="none",g.click(),URL.revokeObjectURL(m);case 26:e.next=32;break;case 28:return e.prev=28,e.t0=e.catch(3),p.m.danger(r.formatMessage(N.fileDownloadFailed)),e.abrupt("return",!1);case 32:return e.abrupt("return",!0);case 33:case"end":return e.stop()}},e,null,[[3,28]])})),function(t,r){return e.apply(this,arguments)}}function k(e,t){if((null==t?void 0:t.kind)===u.OL.GizmoInteraction||(null==t?void 0:t.kind)===u.OL.GizmoTest){var r;return null===(r=t.gizmo)||void 0===r?void 0:r.product_features}return null==e?void 0:e.product_features}function _(e,t){var r,n,o,a,u=k(e,t);return(null==u?void 0:null===(r=u.attachments)||void 0===r?void 0:r.type)===i.Cd.CodeInterpreter?m.A.Interpreter:(null==u?void 0:null===(n=u.attachments)||void 0===n?void 0:n.type)===i.Cd.Multimodal?m.A.Multimodal:(null==u?void 0:null===(o=u.attachments)||void 0===o?void 0:o.type)===i.Cd.Retrieval?m.A.Retrieval:(null==u?void 0:null===(a=u.attachments)||void 0===a?void 0:a.type)===i.Cd.ContextConnector?m.A.ContextConnector:m.A.None}function M(e){var t,r=null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase();return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[null!=r?r:""]||""}function b(e,t,r,n){if(null==n)return e;var o=M(t);o&&(r=o);var a=n.accepted_mime_types,i=n.can_accept_all_mime_types;return null!=a&&0!==a.length&&i?a.includes(r)?e:m.A.Interpreter:e}function F(e,t,r){var n,o,a,u=""!==t?t:M(r),l=null==e?void 0:null===(n=e.product_features)||void 0===n?void 0:n.attachments;return null==l?void 0:null!==(o=l.accepted_mime_types)&&void 0!==o&&o.includes(u)?l.type:null!==(a=l.image_mime_types)&&void 0!==a&&a.includes(u)?i.Cd.Multimodal:i.Cd.CodeInterpreter}function U(e,t){var r,n,o=k(e,t);return null!=o&&null!==(r=o.attachments)&&void 0!==r&&r.can_accept_all_mime_types?void 0:null==o?void 0:null===(n=o.attachments)||void 0===n?void 0:n.accepted_mime_types}function C(e,t){var r,n=k(e,t),o=(null!=n?n:{}).attachments;return null!=o&&o.image_mime_types?o.image_mime_types:(null==o?void 0:o.type)==="multimodal"?null!==(r=o.accepted_mime_types)&&void 0!==r?r:E:[]}var E=["image/png","image/jpeg","image/gif","image/webp"];function T(e){return(0,c.useMemo)(function(){if(void 0===e)return{};var t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce(function(e,r){return r in t?e[r]=t[r]:r.includes("/")&&(e[r]=[".".concat(r.split("/")[1])]),e},{})}},[e])}function P(e){var t;return null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase()}function L(e){var t=P(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function Z(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise(function(n,o){var a=new FileReader;a.onerror=function(e){console.error("File reading has failed:",e),o(Error("Failed to read the file."))},a.onload=function(a){var i=new Image;i.onerror=function(e){console.error("Image loading has failed:",e),o(Error("Failed to load the image."))},i.onload=function(){var a,u=document.createElement("canvas"),l=0,s=0;switch(r){case"fill":case"square":a=t/Math.min(i.width,i.height);break;default:a=t/Math.max(i.width,i.height)}var c=i.width*a,d=i.height*a;"square"===r?(u.width=t,u.height=t,l=(t-c)/2,s=(t-d)/2):(u.width=c,u.height=d);var f=u.getContext("2d");if(null==f){console.error("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),o(Error("Failed to create canvas context."));return}f.drawImage(i,l,s,c,d);var p=e.type||"image/png";u.toBlob(function(t){t?n(new File([t],e.name,{type:p})):(console.error("Blob creation failed. Blob is null."),o(Error("Failed to create blob from image data.")))},p)},null==a.target?(console.error("Event target is null. Failed to load image."),o("Failed to load image.")):i.src=a.target.result},a.readAsDataURL(e)})}function I(e,t){return Z(e,t,"square")}var N=(0,f.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."}})}}]);