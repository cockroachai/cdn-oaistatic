"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1522],{61017:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(51217),r=n(10064),i=n(35250),a=n(70079),o=n(45193);function l(e){var t=e.text,n=(0,o.Z)(),s=(0,r._)((0,a.useState)(!0),2),l=s[0],d=s[1],u=(0,r._)((0,a.useState)(0),2),f=u[0],m=u[1],h=(0,a.useMemo)(function(){return new c().humanTypingDelaysQuertyDistance(t)},[t]);return(0,a.useEffect)(function(){t&&l&&(d(!0),h.forEach(function(e,t){setTimeout(function(){n()&&(m(t),t===h.length-1&&d(!1))},e)}))},[h,n,l,t]),(0,i.jsx)(i.Fragment,{children:t.substring(0,f+1)})}var c=function(){function e(){(0,s._)(this,e)}var t=e.prototype;return t.qwertyDistance=function(e,t){var n,s,i={q:[0,0],w:[1,0],e:[2,0],r:[3,0],t:[4,0],y:[5,0],u:[6,0],i:[7,0],o:[8,0],p:[9,0],a:[0,1],s:[1,1],d:[2,1],f:[3,1],g:[4,1],h:[5,1],j:[6,1],k:[7,1],l:[8,1],z:[0,2],x:[1,2],c:[2,2],v:[3,2],b:[4,2],n:[5,2],m:[6,2]},a=(0,r._)(null!==(n=i[e.toLowerCase()])&&void 0!==n?n:[0,0],2),o=a[0],l=a[1],c=(0,r._)(null!==(s=i[t.toLowerCase()])&&void 0!==s?s:[0,0],2);return Math.abs(o-c[0])+Math.abs(l-c[1])},t.humanTypingDelaysQuertyDistance=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,s=0,r=[],i=0;i<e.length;++i){var a=void 0;if(i>0){var o=this.qwertyDistance(e[i-1],e[i]);a=0===o?this.getRandomInt(t,Math.floor(n/2)):1===o?this.getRandomInt(t,Math.floor(2*n/3)):this.getRandomInt(t,n)}else a=this.getRandomInt(t,n);r.push(a+s),s+=a}return r},t.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e}()},40578:function(e,t,n){n.d(t,{V:function(){return X},Z:function(){return K}});var s=n(39324),r=n(71209),i=n(10064),a=n(4337),o=n(35250),l=n(19841),c=n(72201),d=n(26430),u=n(84913),f=n(44043),m=n(82187),h=n(69262),p=n(70737),v=n(97296),g=n(70079),x=n(94968),y=n(70671),b=n(32004),j=n(21389),k=n(56497),M=n(48133),w=n(94705),N=n(7184),T=n(21950),_=n(35265),C=n(86646),Z=n(66638),P=n(84844),S=n(8679),I=n(1491),L=n(18481),F=n(61399),B=n(54636),E=n(42780),W=n(10721),D=n.n(W),R=n(61017);n(12952);var A=n(41955),O=n(46266),U=n(25913);function z(e){var t=e.conversation,n=(0,U.iF)(),s=(0,i._)((0,g.useState)(!1),2),r=s[0],a=s[1];return(0,g.useEffect)(function(){return(0,P.LW)(S.n,{deleteChat:function(){a(!0)}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O.n,{clientThreadId:t.id,children:(0,o.jsxs)("button",{className:"absolute bottom-0 right-0 top-0 flex w-9 items-center justify-center rounded-lg text-token-text-tertiary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary",children:[(0,o.jsx)("div",{className:"pointer-events-none absolute bottom-0 right-0 top-0 w-14 rounded-lg bg-gradient-to-l from-token-surface-primary from-60% to-transparent"}),(0,o.jsx)(_.Yr,{className:"icon-md relative"})]})}),r&&(0,o.jsx)(X,{title:t.title,handleDelete:function(){C.ZP.patchConversation(t.id,{is_visible:!1}).then(function(){n()}),D().push("/",void 0,{shallow:!0})},onClose:function(){a(!1)}})]})}function H(e){var t=e.conversation,n=e.onClose,s=function(){a!==t.title&&(Z.tQ.setTitle(t.id,a,Z._L.User),B.A.logEvent(E.M.renameThread,{threadId:t.id,content:a}),C.ZP.patchConversation(t.id,{title:a}).then(function(){c()}))},r=(0,i._)((0,g.useState)(t.title),2),a=r[0],l=r[1],c=(0,U.iF)();return(0,o.jsx)("input",{type:"text",value:a,onChange:function(e){l(e.target.value)},onKeyDown:function(e){switch(e.key){case"Escape":n();break;case"Enter":s(),n()}},onBlur:function(){s(),n()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}function G(e){var t,n=e.conversation,s=e.isActive,r=e.elementRef,a=(0,i._)((0,g.useState)(!1),2),c=a[0],d=a[1];(0,g.useEffect)(function(){return(0,P.LW)(S.n,{editTitle:function(){s&&d(!0)}})},[s]);var u=(0,F.Z)(n.id,n.title,s),f=u.resolvedTitle,m=u.isTypingEffect,h=(0,I.w$)(),p=(0,T.kg)(null!==(t=n.conversation_template_id)&&void 0!==t?t:void 0).data;return(0,o.jsxs)("div",{className:"group relative active:opacity-90",children:[(0,o.jsx)("a",{href:(0,L.ZV)(n.id,p),onClick:function(e){if(e.preventDefault(),!s){var t;t=n.id,A.hx.abortAllRequests(),B.A.logEvent(E.M.loadThread,{threadId:t}),D().push((0,L.ZV)(t,p),void 0,{shallow:!0})}},onDoubleClick:function(){d(!0)},ref:r,className:(0,l.default)("flex items-center gap-2 rounded-lg p-2",s?"bg-token-surface-primary":"hover:bg-token-surface-primary"),children:(0,o.jsxs)("div",{className:"relative grow overflow-hidden whitespace-nowrap",children:[m&&s&&h?(0,o.jsx)(R.Z,{text:null!=f?f:""}):f,(0,o.jsx)("div",{className:(0,l.default)("absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l to-transparent",s?"from-token-surface-primary":"from-token-surface-primary group-hover:from-token-surface-primary dark:from-black")})]})}),c?(0,o.jsx)("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-surface-tertiary",children:(0,o.jsx)(H,{conversation:n,onClose:function(){d(!1)}})}):s?(0,o.jsx)(z,{conversation:n}):null]})}var q=n(42798);function V(){var e=(0,a._)(["flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm\n",""]);return V=function(){return e},e}function Y(){var e=(0,a._)(["h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all bg-white dark:bg-black text-gizmo-gray-600"]);return Y=function(){return e},e}var $=(0,x.vU)({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today",description:"Label for today's history bucket"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday",description:"Label for yesterday's history bucket"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days",description:"Label for the history bucket of the previous 7 days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days",description:"Label for the history bucket of the previous 30 days"},unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history",description:"Error message when history fails to load"},retryButton:{id:"history.retryButton",defaultMessage:"Retry",description:"Button to retry loading history"},showMoreButton:{id:"history.showMoreButton",defaultMessage:"Show more",description:"Button to show more history items"},deleteModalTitle:{id:"history.deleteModalTitle",defaultMessage:"Delete chat?",description:"Title of the modal to confirm deleting a conversation"},deleteModalBody:{id:"history.deleteModalBody",defaultMessage:"This will delete {title}.",description:"Body of the modal to confirm deleting a conversation"},deleteModalConfirm:{id:"history.deleteModalConfirm",defaultMessage:"Delete",description:"Button to confirm deleting a conversation"},deleteModalCancel:{id:"history.deleteModalCancel",defaultMessage:"Cancel",description:"Button to cancel deleting a conversation"}}),Q={initial:function(e){return e.isNew?{opacity:0,height:0,overflow:"hidden"}:{}},animate:function(){return{opacity:1,height:"auto"}},exit:function(){return{opacity:0,height:0}}},K=g.memo(function(e){var t,n,r=e.activeId,a=(0,y.Z)(),x=(0,i._)((0,g.useState)(!1),2),j=x[0],w=x[1],N=(0,i._)((0,g.useState)(0),2),T=N[0],_=N[1],C=(0,k.Z)(),Z=(0,U.MO)(),P=Z.conversations,S=Z.hasNextPage,I=Z.fetchNextPage,L=Z.isLoading,F=Z.isFetchingNextPage,B=Z.isError,E=(0,g.useRef)(null),W=(0,g.useCallback)(function(e){var t;L||null==e||(null===(t=E.current)||void 0===t||t.disconnect(),E.current=new IntersectionObserver(function(e){e[0].isIntersecting&&S&&I()}),E.current.observe(e))},[L,S,I]);(0,g.useEffect)(function(){return function(){var e;null===(e=E.current)||void 0===e||e.disconnect()}},[]);var D=(0,U.iF)(),R=(t=(0,g.useRef)(),n=(0,g.useRef)(),((0,g.useEffect)(function(){t.current=n.current,n.current=P},[P]),P===n.current)?t.current:n.current);(0,g.useEffect)(function(){C(function(){_(T+1)},(0,d.Z)((0,u.Z)(),Date.now())+1e3)},[T,C]);var A=0===P.length,O=(0,g.useMemo)(function(){return P.reduce(function(e,t){var n,s,r=new Date(null!==(s=null!==(n=t.update_time)&&void 0!==n?n:t.create_time)&&void 0!==s?s:0),i=(0,c.Z)(new Date,r);if(0===i)e.recent.today.items.push(t);else if(i<=1)e.recent.yesterday.items.push(t);else if(i<=7)e.recent.lastSeven.items.push(t);else if(i<=30)e.recent.lastThirty.items.push(t);else if((0,h.Z)(r)){var o=(0,m.Z)(r),l=(0,f.Z)(r),d="".concat(o,"-").concat(l);e.dynamicMonths[d]?e.dynamicMonths[d].items.push(t):e.dynamicMonths[d]={label:a.formatDate(r,{month:"long"}),items:[t]}}else{var u=(0,m.Z)(r),p="".concat(u,"-");e.dynamicYears[p]?e.dynamicYears[p].items.push(t):e.dynamicYears[p]={label:a.formatDate(r,{year:"numeric"}),items:[t]}}return e},{recent:{today:{label:(0,o.jsx)(b.Z,(0,s._)({},$.historyBucketToday)),items:[]},yesterday:{label:(0,o.jsx)(b.Z,(0,s._)({},$.historyBucketYesterday)),items:[]},lastSeven:{label:(0,o.jsx)(b.Z,(0,s._)({},$.historyBucketLastSeven)),items:[]},lastThirty:{label:(0,o.jsx)(b.Z,(0,s._)({},$.historyBucketLastThirty)),items:[]}},dynamicMonths:{},dynamicYears:{}})},[T,P]);return(0,o.jsxs)(J,{$centered:L||B&&A,children:[A&&L&&(0,o.jsx)(q.Z,{className:"m-auto"}),A&&B&&(0,o.jsxs)("div",{className:"p-3 text-center italic text-gray-500",children:[(0,o.jsx)(b.Z,(0,s._)({},$.unableToLoadHistory)),!j&&(0,o.jsx)("div",{className:"mt-1",children:(0,o.jsx)(M.z,{as:"button",color:"dark",size:"small",className:"m-auto mt-2",onClick:function(){w(!0),D()},children:(0,o.jsx)(b.Z,(0,s._)({},$.retryButton))})})]}),!L&&(0,o.jsx)("div",{children:(0,o.jsx)(p.M,{initial:!1,children:[O.recent,O.dynamicMonths,O.dynamicYears].flatMap(function(e,t){return(0,o.jsx)("span",{children:Object.entries(e).map(function(e){var t=(0,i._)(e,2),n=t[0],s=t[1],a=s.items,c=s.label;if("today"!==n&&!a.length)return null;var d=!!a.find(function(e){var t;return P.length>0&&e.id===(null===(t=P[0])||void 0===t?void 0:t.id)});return(0,o.jsxs)(v.E.div,{className:"relative mt-5",layoutId:"bucket-".concat(n),layout:"position",initial:{height:0,opacity:1,position:"relative"},animate:{height:"auto",opacity:1,transition:{duration:.2,ease:"easeIn"}},children:[a.length>0&&(0,o.jsx)(v.E.div,{layoutId:"bucketTitle-".concat(n),layout:"position",children:(0,o.jsx)(ee,{children:c})}),(0,o.jsx)("ol",{children:a.map(function(e,t){var n,s=r===e.id,i=null==R?void 0:R.find(function(t){return t.id===e.id}),a=S&&(null===(n=P[P.length-5-1])||void 0===n?void 0:n.id)===e.id?W:void 0;return(0,o.jsx)(v.E.li,{className:(0,l.default)("relative",d&&0===t?"z-[15]":""),layoutId:"".concat(e.id),layout:"position",custom:{isNew:!i},variants:Q,initial:"initial",animate:"animate",exit:"exit",children:(0,o.jsx)(G,{conversation:e,isActive:s,elementRef:a})},"history-item-".concat(e.id))})})]},n)})},"category-".concat(t))})})}),F&&(0,o.jsx)("div",{className:"m-4 mb-5 flex justify-center",children:(0,o.jsx)(q.Z,{})})]})}),J=j.Z.div(V(),function(e){return e.$centered&&"h-full justify-center items-center"});function X(e){var t=e.title,n=e.handleDelete,i=e.onClose,a=(0,y.Z)();return(0,o.jsx)(N.Z,{isOpen:!0,onClose:i,type:"success",title:a.formatMessage($.deleteModalTitle),primaryButton:(0,o.jsx)(w.ZP.Button,{title:a.formatMessage($.deleteModalConfirm),color:"danger",onClick:function(){n(),i()}}),secondaryButton:(0,o.jsx)(w.ZP.Button,{title:a.formatMessage($.deleteModalCancel),color:"neutral",onClick:i}),children:(0,o.jsx)(b.Z,(0,r._)((0,s._)({},$.deleteModalBody),{values:{title:(0,o.jsx)("strong",{children:t})}}))})}var ee=j.Z.h3(Y())},4795:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(35250),r=n(55548),i=n(91530),a=n.n(i),o=n(70671),l=n(94968),c=n(7184),d=n(37039);function u(e){var t=e.workspace,n=(0,o.Z)(),i=(0,r.EV)(r.B.InviteUsersToWorkspace);return(0,s.jsx)(c.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:i,onClose:a(),type:"success",title:(null==t?void 0:t.name)!=null?n.formatMessage(f.inviteMemberModalTitle,{workspaceName:t.name}):n.formatMessage(f.inviteMemberModalTitleUntitledWorkspace),description:n.formatMessage(f.inviteMemberModalDescription),children:(0,s.jsx)(d.Z,{workspace:t,canResendInviteEmails:!0,onCancel:function(){return r.vm.closeModal(r.B.InviteUsersToWorkspace)},onSuccess:function(){return r.vm.closeModal(r.B.InviteUsersToWorkspace)},cancelButtonText:n.formatMessage(f.inviteMemberInviteCancelButton)})})}var f=(0,l.vU)({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel",description:"The title of the invite member modal cancel button"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace",description:"The title of the invite member modal"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace",description:"The title of the invite member modal when a workspace has no name"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training.",description:"The description of the invite member modal"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"}})},14957:function(e,t,n){n.d(t,{ZP:function(){return eL}});var s=n(39324),r=n(71209),i=n(10064),a=n(4337),o=n(35250),l=n(65649),c=n(17944),d=n(25687),u=n(32148),f=n(19841),m=n(70079),h=n(1454),p=n(70671),v=n(32004),g=n(94968),x=n(21389),y=n(48133),b=n(55548),j=n(85660),k=n(15635),M=n(41187),w=n(29450),N=n(9150),T=n(21722),_=n(38104),C=n(4795),Z=n(86646),P=n(54636),S=n(42780),I=n(10721),L=n(59517),F=n(42798),B=n(72290),E=n(97296),W=n(61236),D=n(8874);function R(){var e=(0,a._)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return R=function(){return e},e}function A(e){var t=e.showFreeTrialLoadingPayment,n=e.handleGetPaymentLink,a=(0,p.Z)(),l=(0,W.a)({queryKey:["claimedReferralInvite"],queryFn:function(){return Z.ZP.getClaimedReferralInvite()},refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),c=l.data,d=l.isLoading,u=l.isSuccess,g=null==c?void 0:c.invite_code,x=(0,i._)((0,m.useState)(!1),2),y=x[0],b=x[1];if((0,m.useEffect)(function(){g&&!y&&u&&(b(!0),D.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),P.A.logEvent(S.M.chatgptReferralShowClaimedSidebartMenuPromo))},[g,b,y,u]),!g||d||!u)return null;var j=g.invite_metadata.invite_data,k=(null==j?void 0:j.referral_trial_duration_months)?(null==j?void 0:j.referral_trial_duration_months)>1?a.formatMessage(U.monthsOfBenefit,{referralTrialDurationMonths:null==j?void 0:j.referral_trial_duration_months}):a.formatMessage(U.daysOfBenefit,{referralTrialDurationDays:null==j?void 0:j.referral_trial_duration_days}):null;return(0,o.jsx)(E.E.div,{className:(0,f.default)("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:(0,o.jsxs)(O,{className:(0,f.default)(t&&"opacity-75"),onClick:function(){t||((0,L.Vk)(!0),n())},children:[(0,o.jsxs)("div",{className:"flex w-full flex-row items-center justify-start gap-3 ",children:[(0,o.jsx)(h.E33,{className:"icon-sm shrink-0"}),(0,o.jsx)(v.Z,(0,r._)((0,s._)({},U.freeTrialCta),{values:{duration:k}}))]}),!t&&(0,o.jsx)(h.q5L,{onClick:function(e){e.stopPropagation(),(0,L.zG)(!0),(0,L.H1)(!0)},className:"icon-md shrink-0 rounded-full p-0.5 text-gray-400 opacity-50  transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500  group-hover:opacity-100"}),(0,o.jsx)("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}var O=x.Z.a(R()),U=(0,g.vU)({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!",description:"Get free trial menu item"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}",description:"Duration of the referral trial benefits in months"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}",description:"Duration of the referral trial benefits in days"}}),z=n(27382),H=n(35265),G=n(68699),q=n(62682),V=n(59904),Y=n(69789);function $(){var e,t,n,r=(0,I.useRouter)(),i=(0,p.Z)(),a=(0,G.hz)(),l=(0,c.$T)(),d=(0,c.WY)(),u=(0,c.Zp)(),f=(e=(0,T._)(function(){var e;return(0,_.Jh)(this,function(t){switch(t.label){case 0:(0,L.Vk)(!0),P.A.logEvent(S.M.clickAccountPaymentCheckout),t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,Z.ZP.getCheckoutLink()];case 2:return e=t.sent(),r.push(e.url),[3,5];case 3:return t.sent(),B.m.warning(i.formatMessage(X.paymentErrorWarning),{hasCloseButton:!0}),(0,L.Vk)(!1),[3,5];case 4:return[7];case 5:return[2]}})}),function(){return e.apply(this,arguments)}),h=(0,L.tS)(function(e){return e.didCloseFreeTrial}),g=(0,L.tS)(function(e){return e.showFreeTrialLoadingPayment}),x=!h&&u,y=!d&&!(null==a?void 0:a.includes("disable_upgrade_ui")),b=(0,c.KQ)(),j=(0,c.ec)(c.F_.isBusinessWorkspace),k=!l&&!j&&(!1===d||null!==(t=null==a?void 0:a.includes(q.L0.Teams))&&void 0!==t&&t),M=(0,Y.C)(function(e){return{setShowReferralInviteModal:e.setShowReferralInviteModal}}).setShowReferralInviteModal,w=(0,m.useCallback)(function(){D.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),P.A.logEvent(S.M.chatgptReferralInviteSidebarClicked),M(!0,function(){P.A.logEvent(S.M.clickSidebarAccountPaymentMenuItem)})},[M]),N=(0,c.ec)(c.F_.isTeamPlan);return(0,o.jsxs)(o.Fragment,{children:[((null==a?void 0:a.includes(q.a3))||d)&&(0,o.jsx)(J,{handleReferralInvite:w}),!d&&x&&(0,o.jsx)(A,{showFreeTrialLoadingPayment:g,handleGetPaymentLink:f}),N&&(0,o.jsx)(K,{}),k&&(0,o.jsx)(z.Vq,{onClick:x?function(){g||((0,L.Vk)(!0),f())}:function(){P.A.logEvent(S.M.clickSidebarAccountPaymentMenuItem);var e=r.asPath.split("#");r.push("".concat(e[0],"#pricing"))},className:"rounded-lg px-2",children:(0,o.jsxs)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:[(0,o.jsx)("div",{className:"flex items-center gap-2",children:(0,o.jsx)(Q,{wasPaidCustomer:b,showFreeTrialLoadingPayment:g,showUpgradeToTeam:null!==(n=null==a?void 0:a.includes(q.L0.Teams))&&void 0!==n&&n&&k})}),!(null==a?void 0:a.includes(q.a3))&&y&&!b&&(0,o.jsx)("span",{className:"rounded-md bg-yellow-200 px-2 py-0.5 text-xs font-medium uppercase text-gray-800",children:(0,o.jsx)(v.Z,(0,s._)({},X.newLabel))})]})})]})}var Q=function(e){var t=e.wasPaidCustomer,n=e.showFreeTrialLoadingPayment,r=e.showUpgradeToTeam;return n?(0,o.jsx)(F.Z,{className:"icon-sm shrink-0"}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light bg-black",children:r?(0,o.jsx)(V.Bj,{}):(0,o.jsx)(H.k4,{className:"icon-sm shrink-0"})}),(0,o.jsx)("div",{className:"flex flex-col",children:t?(0,o.jsx)(v.Z,(0,s._)({},X.renewPlus)):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"font-semibold",children:(0,o.jsx)(v.Z,(0,s._)({},X.upgradeToPlus))}),(0,o.jsx)("span",{className:"text-xs text-token-text-secondary line-clamp-1",children:r?(0,o.jsx)(v.Z,(0,s._)({},X.upgradeToTeamUpsell)):(0,o.jsx)(v.Z,(0,s._)({},X.upgradeToPlusUpsell))})]})})]})},K=function(){var e=(0,c.ec)(function(e){return e.currentWorkspace});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(z.Vq,{onClick:function(){b.vm.openModal(b.B.InviteUsersToWorkspace)},className:"rounded-md",children:(0,o.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[(0,o.jsx)(h.zy7,{className:"icon-sm shrink-0"}),(0,o.jsx)(v.Z,(0,s._)({},X.inviteMembers))]})})}),null!=e?(0,o.jsx)(C.Z,{workspace:e}):null]})},J=function(e){var t,n=e.handleReferralInvite,r=(0,G.hz)(),a=null!==(t=null==r?void 0:r.includes(q.a3))&&void 0!==t&&t,l=(0,W.a)({queryKey:["referralInvites"],queryFn:function(){return Z.ZP.getEligibleReferralInvites()},enabled:a}),c=l.data,d=l.isSuccess,u=(null==c?void 0:c.invites_remaining)&&(null==c?void 0:c.invites_remaining)>0&&d,f=(0,i._)((0,m.useState)(!1),2),p=f[0],g=f[1];return((0,m.useEffect)(function(){u&&!p&&(g(!0),D.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),P.A.logEvent(S.M.chatgptReferralShowSidebarMenuItem))},[u,g,p]),u)?(0,o.jsx)(z.Vq,{onClick:n,className:"rounded-md",children:(0,o.jsxs)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:[(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[(0,o.jsx)(h.zy7,{className:"icon-sm shrink-0"}),(0,o.jsx)(v.Z,(0,s._)({},X.inviteReferral))]}),(0,o.jsx)("span",{className:"rounded-md bg-yellow-200 px-2 py-0.5 text-xs font-medium uppercase text-gray-800",children:(0,o.jsx)(v.Z,(0,s._)({},X.newLabel))})]})}):null},X=(0,g.vU)({upgradeToPlus:{id:"PaymentMenuItems.upgradeToPlus.0",defaultMessage:"Upgrade",description:"Upgrade to plan menu item"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan",description:"Upgrade to Team upsell"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"Get GPT-4, DALL\xb7E, and more",description:"Upgrade to Plus upsell"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus",description:"Renew Plus menu item"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend",description:"Invite referral menu item"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members",description:"Invite members menu item"},newLabel:{id:"PaymentMenuItems.newLabel",defaultMessage:"NEW",description:"Label for new features or items"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",description:"Error toast when payment page has an error",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}}),ee=n(64502),et=n(5053),en=n(65129),es=n(1491),er=n(40971),ei=n(7813),ea=n(47428),eo=n(4536),el=n(61888),ec=n(12952),ed=n(12296),eu=n(31731),ef=n(4551),em=n(18481),eh=n(23234);function ep(){var e=(0,c.WY)(),t=(0,m.useCallback)(function(){P.A.logEvent(S.M.clickSidebarAccountPortalMenuItem),(0,ef.MG)()},[]),n=(0,eh.O)();return(0,o.jsxs)(o.Fragment,{children:[!0===e&&(0,o.jsxs)(z.ZP,{onClick:t,children:[(0,o.jsx)(H.PQ,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},ev.myPlan))]}),n&&(0,o.jsxs)(z.ZP,{href:(0,em.L7)(),children:[(0,o.jsx)(H.PN,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},ev.myGpts))]}),(0,o.jsxs)(z.ZP,{onClick:function(){return b.vm.openModal(b.B.UserContext)},children:[(0,o.jsx)(H.SA,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},ev.chatPreferences))]})]})}var ev=(0,g.vU)({myPlan:{id:"popoverNavigation.myPlan",defaultMessage:"My plan",description:"My plan menu item"},chatPreferences:{id:"popoverNavigation.chatPreferences",defaultMessage:"Custom instructions",description:"Custom instructions menu item"},myGpts:{id:"popoverNavigation.myGpts",defaultMessage:"My GPTs",description:"My GPTs menu item"}}),eg=n(73040),ex=n.n(eg);function ey(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(eb,{href:"/admin",children:[(0,o.jsx)(H.oq,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},ej.myWorkspaceSettings))]}),(0,o.jsxs)(eb,{href:(0,em.L7)(),children:[(0,o.jsx)(H.PN,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},ej.myGpts))]}),(0,o.jsxs)(z.ZP,{onClick:function(){return b.vm.openModal(b.B.UserContext)},children:[(0,o.jsx)(H.SA,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},ej.chatPreferences))]})]})}function eb(e){var t=e.href,n=e.children;return(0,o.jsx)(ei.v.Item,{children:function(e){var s=e.active;return(0,o.jsx)(ex(),{href:t,children:(0,o.jsx)(z.ZB,{$as:"span",className:(0,f.default)(s?"bg-gray-100 dark:bg-gray-800":"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"),children:n})})}})}var ej=(0,g.vU)({myWorkspaceSettings:{id:"workspacePopoverNavigation.myWorkspaceSettings",defaultMessage:"Manage workspace",description:"Workspace settings menu item"},chatPreferences:{id:"workspacePopoverNavigation.chatPreferences",defaultMessage:"Custom instructions",description:"Custom instructions menu item"},myGpts:{id:"workspacePopoverNavigation.myGpts",defaultMessage:"My GPTs",description:"My GPTs menu item"}});function ek(e){var t=e.onClickSettings;return(0,o.jsxs)(ei.v,{as:"div",className:"group relative",children:[(0,o.jsx)(eZ,{}),(0,o.jsx)(eu.m,{children:(0,o.jsx)(ei.v.Items,{className:"absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-lg border border-gray-100 bg-white pb-1.5 pt-1 outline-none dark:border-gray-800 dark:bg-gray-900",children:(0,o.jsx)(eC,{onClickSettings:t})})})]})}function eM(){var e=(0,G.hz)(),t=(0,p.Z)(),n=(0,c.aF)();return n?(0,o.jsxs)("div",{className:"flex items-center justify-between gap-2 px-3 pb-0 pt-2",children:[(0,o.jsx)("div",{className:"text-xs text-token-text-secondary",children:null==n?void 0:n.email}),(null==e?void 0:e.includes(q.L0.Teams))&&(0,o.jsx)(k.u,{label:t.formatMessage(eS.addWorkspaceTooltip),side:"right",children:(0,o.jsx)("button",{onClick:function(){return(0,ef.MG)()},children:(0,o.jsx)(h.OvN,{className:"icon-sm flex-shrink-0 text-token-text-primary"})})})]}):null}function ew(){var e=(0,c.ec)(function(e){return e.currentWorkspace});return null==e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"w-full px-3 py-2",children:(0,o.jsx)(F.Z,{})}),(0,o.jsx)(z.R,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(eM,{}),(0,o.jsx)("div",{className:"flex h-11 w-full items-center justify-start gap-3 px-3 py-1 text-sm",children:(0,o.jsx)(eT,{workspace:e,isLoading:!1,currentWorkspaceId:e.id,showCheck:!1})}),(0,o.jsx)(z.R,{})]})}function eN(){var e=(0,c.ec)(function(e){return e.workspaces}),t=(0,c.ec)(function(e){return e.currentWorkspace}),n=(0,i._)((0,m.useState)(!1),2),s=n[0],r=n[1],a=(0,el.compact)([e.find(function(e){return e.structure===et.CZ.PERSONAL})].concat((0,ee._)(e.filter(function(e){return e.structure!==et.CZ.PERSONAL}))));return a.sort(function(e,t){return e.structure===et.CZ.PERSONAL?1:t.structure===et.CZ.PERSONAL?-1:0}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(eM,{}),(0,o.jsx)("div",{className:"flex w-full flex-col",children:a.map(function(e){return(0,o.jsx)(z.ZP,{disabled:e.deactivated,onClick:function(){e.id!==(null==t?void 0:t.id)&&(r(!0),(0,G.nq)(e.id),(0,er.M)())},children:(0,o.jsx)("div",{className:"flex w-full items-center justify-start gap-3 py-1",children:e.deactivated?(0,o.jsx)(e_,{workspace:e,isLoading:s}):(0,o.jsx)(eT,{workspace:e,isLoading:s,currentWorkspaceId:null==t?void 0:t.id})})},e.id)})}),(0,o.jsx)(z.R,{})]})}function eT(e){var t=e.workspace,n=e.isLoading,s=e.currentWorkspaceId,r=e.showCheck,i=(0,p.Z)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ec.zf,{iconSize:"small",workspace:t,className:(0,f.default)({"flex-shrink-0":!0})}),(0,o.jsx)("div",{className:(0,f.default)({"flex-grow truncate":!0}),children:(0,ed.CV)(i,t)}),n&&(0,o.jsx)(F.Z,{}),!n&&(void 0===r||r)&&(0,o.jsx)("div",{className:(0,f.default)("m-1 flex h-4 w-4 flex-shrink-0 rounded-full border align-middle",{"bg-white":t.id===s}),children:t.id===s&&(0,o.jsx)(h.UgA,{className:"m-auto h-3 w-3 scale-x-75 stroke-black stroke-[4]"})})]})}function e_(e){var t=e.workspace,n=e.isLoading,s=(0,p.Z)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(k.u,{className:"flex w-full flex-1 items-center gap-3 opacity-30",label:s.formatMessage(eS.disabledWorkspaceTooltip),side:"right",children:[(0,o.jsx)(V._V,{className:"icon-sm flex-shrink-0"}),(0,o.jsx)("div",{className:"truncate opacity-30",children:(0,ed.CV)(s,t)})]}),n&&(0,o.jsx)(F.Z,{}),!n&&(0,o.jsxs)(en.Z.Root,{children:[(0,o.jsx)(ea.xz,{className:"rounded text-center hover:bg-token-surface-secondary",children:(0,o.jsx)(h.K9M,{className:"icon-sm m-1"})}),(0,o.jsx)(en.Z.Portal,{children:(0,o.jsx)(en.Z.Content,{children:(0,o.jsx)(en.Z.Item,{onClick:function(){b.vm.setLeaveWorkspaceData(t)},children:(0,o.jsx)(v.Z,{id:"navigation.leaveWorkspace",defaultMessage:"Leave workspace",description:"Menu item in workplace switcher to leave a deactivated workspace"})})})})]})]})}function eC(e){var t=e.onClickSettings,n=(0,c.WY)(),r=(0,c.ec)(c.F_.isBusinessWorkspace),i=(0,c.ec)(c.F_.hasMultipleWorkspaces),a=(0,es.w$)();return(0,o.jsxs)("nav",{children:[i?(0,o.jsx)(eN,{}):r&&(0,o.jsx)(ew,{}),r?(0,o.jsx)(ey,{}):(0,o.jsx)(ep,{}),!a&&(0,o.jsxs)(z.ZP,{as:"a",href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:function(){P.A.logEvent(S.M.clickFaqLink)},children:[(0,o.jsx)(H.dJ,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},eS.helpAndFaq))]}),(0,o.jsxs)(z.ZP,{onClick:t,children:[(0,o.jsx)(H.RR,{className:"icon-md"}),n?(0,o.jsx)(v.Z,(0,s._)({},eS.settingsPlus)):(0,o.jsx)(v.Z,(0,s._)({},eS.settings))]}),(0,o.jsx)(z.R,{}),(0,o.jsxs)(z.ZP,{onClick:function(){P.A.logEvent(S.M.clickLogOut,{eventSource:"mouse"}),(0,eo.w7)()},children:[(0,o.jsx)(H.gj,{className:"icon-md"}),(0,o.jsx)(v.Z,(0,s._)({},eS.logOut))]})]})}function eZ(){return(0,c.aF)()?(0,o.jsx)(eP,{}):null}function eP(){var e=(0,ed.$3)(),t=(0,ed.cI)(),n=(0,c.ec)(c.F_.isBusinessWorkspace),s=(0,c.ec)(c.F_.hasMultipleWorkspaces);return(0,o.jsxs)(ei.v.Button,{className:"flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-100 hover:bg-token-surface-primary group-ui-open:bg-gray-100 group-ui-open:bg-token-surface-primary dark:hover:bg-token-surface-primary dark:group-ui-open:bg-gray-800  dark:group-ui-open:bg-token-surface-primary",children:[(0,o.jsx)("div",{className:"flex-shrink-0",children:(0,o.jsx)(ec.zf,{iconSize:"gizmo"})}),(0,o.jsxs)("div",{className:"relative -top-px grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 dark:text-white",children:[(0,o.jsx)("div",{className:"font-semibold",children:t}),n||s?(0,o.jsx)("div",{className:"text-xs text-gray-500",children:e}):null]})]})}var eS=(0,g.vU)({helpAndFaq:{id:"navigation.helpAndFaq",defaultMessage:"Help & FAQ",description:"Help & FAQ menu item"},settings:{id:"navigation.settings",defaultMessage:"Settings",description:"Settings menu item"},settingsPlus:{id:"navigation.settingsPlus",defaultMessage:"Settings & Beta",description:"Settings menu item for Plus users"},logOut:{id:"navigation.logOut",defaultMessage:"Log out",description:"Log out menu item"},takeSurveyButton:{id:"navigation.survey.takeSurveyButton",defaultMessage:"Take survey",description:"Survey offer call to action"},surveyDismiss:{id:"navigation.surveyDismiss",defaultMessage:"Dismiss survey",description:"Survey offer dismiss button"},surveyDescription:{id:"navigation.surveyDescription",defaultMessage:"Shape the future of ChatGPT.",description:"Survey offer description"},surveyTitle:{id:"navigation.surveyTitle",defaultMessage:"We’d love to hear from you!",description:"Survey offer title"},accountSwitcherTitle:{id:"navigation.accountSwitcherTitle",defaultMessage:"Workspaces",description:"Account switcher title"},defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"},addWorkspaceTooltip:{id:"navigation.addWorkspaceTooltip",defaultMessage:"Create a Team workspace",description:"Tooltip for add workspace button"},disabledWorkspaceTooltip:{id:"navigation.disabledWorkspaceTooltip",defaultMessage:"This workspace has been deactivated",description:"Tooltip for disabled workspace"}});function eI(){var e=(0,a._)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",""]);return eI=function(){return e},e}function eL(e){var t=e.onNewThread,n=e.currentGizmoId,i=e.children,a=(0,p.Z)(),l=(0,c.ec)(c.F_.isBusinessWorkspace),g=(0,m.useRef)(null),x=(0,m.useContext)(d.QL),b=x.historyDisabled,j=x.toggleHistoryDisabled,k=(0,x.getModifiedSettings)(),N=(0,w.Fr)().openSettings;(0,m.useEffect)(function(){k&&N()},[]);var T=(0,m.useCallback)(function(){t(),j()},[t,j]),_=(0,o.jsxs)("div",{className:(0,f.default)("absolute left-0 top-0 z-20 overflow-hidden transition-all duration-500",b?"visible max-h-72":"invisible max-h-0"),children:[(0,o.jsx)("div",{className:"px-3 py-3.5",children:(0,o.jsx)(M.jl,{gizmo:void 0,historyDisabled:!0,isActive:void 0===n})}),(0,o.jsxs)("div",{className:"bg-gray-900 px-4 py-3",children:[(0,o.jsx)("div",{className:"p-1 text-sm text-gray-100",children:(0,o.jsx)(v.Z,(0,s._)({},eE.chatHistoryOff))}),(0,o.jsx)("div",{className:"p-1 text-xs text-gray-500",children:(0,o.jsx)(v.Z,(0,r._)((0,s._)({},l?eE.chatHistoryOffDescriptionBusiness:eE.chatHistoryOffDescription),{values:{learnMore:(0,o.jsx)("a",{href:"https://help.openai.com/en/articles/7730893",target:"_blank",className:"underline",rel:"noreferrer",children:(0,o.jsx)(v.Z,(0,s._)({},eE.learnMore))}),b:function(e){return(0,o.jsx)("strong",{children:e})}}}))}),(0,o.jsxs)(y.z,{className:"mt-4 w-full",onClick:T,color:"primary",size:"medium",children:[(0,o.jsx)(h.$IY,{className:"icon-sm"}),(0,o.jsx)(v.Z,(0,s._)({},eE.enableChatHistory))]})]}),(0,o.jsx)("div",{className:"h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"})]});return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",children:[(0,o.jsx)(u.f,{asChild:!0,children:(0,o.jsx)("h2",{children:(0,o.jsx)(v.Z,(0,s._)({},eE.chatHistoryLabel))})}),(0,o.jsxs)("nav",{className:"flex h-full w-full flex-col px-3 pb-3.5","aria-label":a.formatMessage(eE.chatHistoryLabel),children:[_,(0,o.jsx)(eB,{ref:g,$disableScroll:b,children:i}),(0,o.jsx)(eF,{})]})]})})}function eF(){var e=(0,i._)((0,m.useState)(function(){var e=j.b.getCookie(j.c.Workspace);return"string"==typeof e&&e!==l.b}),1)[0],t=(0,w.Fr)().openSettings,n=(0,c.$T)();return e&&n?null:(0,o.jsxs)("div",{className:"flex flex-col pt-2 empty:hidden dark:border-white/20",children:[(0,o.jsx)($,{}),(0,o.jsx)("div",{className:"flex w-full items-center",children:(0,o.jsx)("div",{className:"grow",children:(0,o.jsx)(ek,{onClickSettings:function(){return t()}})})}),(0,o.jsx)(N.wm,{})]})}var eB=x.Z.div(eI(),function(e){return e.$disableScroll?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}),eE=(0,g.vU)({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history",description:"Chat history label heading"},chatHistoryOff:{id:"NavigationContent.chatHistoryOff",defaultMessage:"Chat History is off for this browser.",description:"Text indicating that chat history is turned off"},chatHistoryOffDescription:{id:"NavigationContent.chatHistoryOffDescription",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",description:"Description for chat history being off"},chatHistoryOffDescriptionBusiness:{id:"NavigationContent.chatHistoryOffDescriptionBusiness",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",description:"Description for chat history being off"},learnMore:{id:"NavigationContent.learnMore",defaultMessage:"Learn more",description:"Learn more link text"},enableChatHistory:{id:"NavigationContent.enableChatHistory",defaultMessage:"Enable chat history",description:"Enable chat history button label"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"}})},61399:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(10064),r=n(70079),i=n(66638);function a(e,t,n){var a=(0,i.XL)(e),o=a.title,l=a.titleSource,c=(0,s._)((0,r.useState)(!1),2),d=c[0],u=c[1],f=null!=o?o:t,m=(0,r.useRef)(f);return(0,r.useEffect)(function(){return n&&l===i._L.Generated&&f!==m.current&&u(!0),function(){m.current=f}},[n,f,l]),{isTypingEffect:d,resolvedTitle:f}}},56497:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(70079);function r(){var e=(0,s.useRef)([]),t=(0,s.useRef)(function(t,n){var s=setTimeout(t,n);return e.current.push(s),s});return(0,s.useEffect)(function(){var t=e.current;return function(){t.forEach(function(e){clearTimeout(e)})}},[]),t.current}}}]);