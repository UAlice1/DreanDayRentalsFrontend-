"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40370],{263148:(e,i,t)=>{t.d(i,{Se:()=>k,iw:()=>y,gV:()=>h,G3:()=>P,Gj:()=>b,Jd:()=>m,$3:()=>g});var r=t(29156),a=t(658583),n=t(622541),s=t(107366),l=t(460270);let o=e=>"string"!=typeof e&&e?e.state:null;var d=t(337478),c=t(940910),u=t(998449),p=t(797258),_=t(467139);let m=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:i})=>!e&&(i.metaKey||i.ctrlKey),g=({location:e,pinId:i,surface:t})=>!!t&&!_.ZF.includes(t)||e.pathname.includes(i),k=(e,i)=>{let t=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";a.t8((0,n.GS)(t),r);let s={token:`${t}-${r}`,url:e,...i&&!i.params?i.queryParams:i?.params&&{pin:i.params.pinId??void 0,isThirdPartyAd:i.params.isThirdPartyAd??void 0,csr:i.params.csrId&&!i.params.pinId?i.params.csrId:void 0,client_tracking_params:i.params.clientTrackingParams,aux_data:i.params.auxData?JSON.stringify(i.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(s)}`},b=(e,i)=>{(0,r.Z)(k(e,i),!0,i?.features)},y=async({clientTrackingParams:e,href:i,isMounted:t,pinId:r,spamCheckCallback:a})=>{let n=await (0,s.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:i}});if(!n.resource_response.error&&t){let e=n.resource_response.data||{},{message:i,redirect_status:t,url:r}=e,s=["blocked","suspicious","porn"].includes(t);a({blocked:s,message:i,redirectStatus:t,sanitized_url:r})}},P=({event:e,onHistoryChange:i,href:t,history:a,target:n})=>{let s=(0,l.Z)(t),d=o(t)??{},_=(0,c.Z)(s);_===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===n?(0,r.Z)(s,"blank"===n):a&&_===p.Z.SAME_ORIGIN&&(a.push((0,u.Z)({url:s}),{from:a.location,...d}),i&&i({event:e}))}},340370:(e,i,t)=>{t.d(i,{Z:()=>p});var r=t(667294),a=t(616550),n=t(798580),s=t(263148),l=t(96761),o=t(460270),d=t(862249),c=t(557874),u=t(953565);function p(e){let{externalData:i,href:t,onHistoryChange:p,target:_}=e,[m,h]=(0,r.useState)(null),[g,k]=(0,r.useState)(!1),b=(0,a.k6)(),y=(0,a.TH)(),P=(0,o.Z)(t),f=(0,d.Z)({url:P}),{showWarning:I}=(0,c.s)()??{},{pin:S,surface:w}=i||{},A=S?(0,n.Z)({boardUrl:S.board?.url,location:y,pinId:S.entityId,pinnerUserName:S.pinner?.username,storyPinDataId:S.storyPinDataId,trackingParams:S.trackingParams,trackingParamsMap:S.trackingParamsMap}):null,x=(0,l.Z)();return(0,r.useEffect)(()=>(k(!0),()=>{k(!1)}),[]),(0,r.useEffect)(()=>{f&&S&&null===m&&g&&(!S.promoter||S.isDownstreamPromotion)&&(0,s.$3)({location:y,pinId:S.entityId,surface:w})&&(0,s.iw)({clientTrackingParams:A,isMounted:g,pinId:S.entityId,spamCheckCallback:e=>h(e),href:P})},[A,S,w,P,f,g,y,m]),({event:e})=>{if(!(0,s.gV)({isOffsiteUrl:f,event:e})){if(e.preventDefault(),!t||"string"==typeof t&&t.startsWith("#")){(0,u.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:y.pathname,href:t}});return}f||i?.dangerouslyForceOffsiteUrl?x({auxData:i?.auxData,clientTrackingParams:A,pin:i?.pin&&{attributionSourceId:i.pin.attributionSourceId,campaignId:i.pin.campaignId,isPromoted:i.pin.isPromoted,pinPromotionId:i.pin.pinPromotionId,isThirdPartyAd:i.pin.isThirdPartyAd,advertiserId:i.pin.advertiserId,destinationUrl:i.pin.destinationUrl,link:i.pin.link,domain:i.pin.domain},pinId:i?.pin?.entityId,queryParams:i?.queryParams,showWarning:I,spamCheck:m,url:P}):(0,s.G3)({event:e,href:t,history:b,onHistoryChange:p,target:"blank"===_?"blank":null})}}}},96761:(e,i,t)=>{t.d(i,{Z:()=>_});var r=t(453880),a=t(934378),n=t(263032),s=t(86785),l=t(214877),o=t(263148),d=t(171966);let c=(e,i,t)=>{let r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(a.$N.ATTRIBUTE_DESTINATION,t),r.setAttribute(a.$N.ATTRIBUTE_ON,t),r.click()},u=(e,i,t,r,s,l,o,d)=>{let c=(0,n.m_)(e,[t,r,s],!0,l,o,d),u=document.createElement("a");u.setAttribute("href",i),u.setAttribute("target","_blank"),u.setAttribute("rel","noopener nofollow noreferrer"),u.style.cursor="pointer",u.style.display="block",u.setAttribute(a.NR.SOURCE,c),u.click()},p=()=>{let{logContextEvent:e}=(0,l.v)();return({attributionSourceId:i,auxData:t,campaignId:a,clientTrackingParams:n,href:l,isPromoted:d,pinId:p,pinPromotionId:_,isThirdPartyAd:m,advertiserId:h,destinationUrl:g,link:k,domain:b})=>{if(!d)return!1;let y=(0,r.Z)(),P=(0,o.Se)(l,{params:{pinId:p,csrId:null,clientTrackingParams:n,auxData:t,isThirdPartyAd:m}}),f=y?.userAgent.browserName??"";if((0,s.G6)(f)){let{group:t}=y?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},r=y?.userAgent.browserVersion?y.userAgent.browserVersion:"0.0",s=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(i&&s>=14.1&&["enabled_safari"].includes(t))return c(i,P,l),e({event_type:101,clientTrackingParams:n,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:_||"",click_measurement_campaign_id:a||"",is_pcm:!0,attribution_source_id:i,page_url:l}}),!0}else if((0,s.i7)(f)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return u(i,P,g,k,b,a,h,y?.experimentsClient.checkExperiment("m10n_ara_hardcoded_reporting_url").anyEnabled),e({event_type:101,clientTrackingParams:n,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:_||"",click_measurement_campaign_id:a||"",is_arapi:!0,attribution_source_id:i,page_url:l}}),!0;return!1}},_=e=>{let i=p();return({auxData:t,clientTrackingParams:r,pin:a,pinId:n,queryParams:s,showWarning:l,spamCheck:c,url:u})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(u,{clientTrackingParams:r,pinId:n,hasPin:!!a,auxData:t,isThirdPartyAd:a?.isThirdPartyAd});return}if(!a&&!e?.isFromClickthroughLink){(0,o.Gj)(u,s?{queryParams:s}:{params:{pinId:n}});return}if(c?.blocked){l?.(c);return}a&&i({attributionSourceId:a.attributionSourceId,auxData:t,campaignId:a.campaignId?String(a.campaignId):null,clientTrackingParams:r,href:u,isPromoted:a.isPromoted,pinId:n,pinPromotionId:a.pinPromotionId?String(a.pinPromotionId):null,isThirdPartyAd:a.isThirdPartyAd,advertiserId:a.advertiserId?a.advertiserId:null,destinationUrl:a.destinationUrl,link:a.link,domain:a.domain})||(0,o.Gj)(u,{params:{clientTrackingParams:r,auxData:t,pinId:n,isThirdPartyAd:a?.isThirdPartyAd}})}}},460270:(e,i,t)=>{t.d(i,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},998449:(e,i,t)=>{t.d(i,{Z:()=>n});let r=(e,i)=>0===e.lastIndexOf(i,0);var a=t(885896);let n=({url:e})=>{let i=(0,a.Z)("/");return r(e,i)?e.substr(i.length-1):e}},171966:(e,i,t)=>{t.d(i,{Z:()=>n});var r=t(107366),a=t(263148);function n(e,i){let{auxData:t,clientTrackingParams:n,hasPin:s,pinId:l,isThirdPartyAd:o}=i||{},d={pin_id:l,check_only:!0,client_tracking_params:s?n:void 0,url:e,aux_data:JSON.stringify(t)};o&&(d.third_party_ad=l,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(i=>{if(i&&i.resource_response&&!i.resource_response.error){let{resource_response:e}=i,{redirect_status:t,url:r}=e.data,a=["blocked","suspicious","porn"].includes(t);if(!a){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,a.Gj)(e,{params:s?{pinId:l,clientTrackingParams:n,auxData:t,isThirdPartyAd:o}:{pinId:l}})})}},467139:(e,i,t)=>{t.d(i,{UP:()=>l,Wv:()=>a,ZF:()=>r,zI:()=>n,zl:()=>s});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],a=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],n=[...a,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],s=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],l=["BaseBoardPinGrid"]},557874:(e,i,t)=>{t.d(i,{Z:()=>g,s:()=>h});var r=t(667294),a=t(342513),n=t(608575),s=t(883119),l=t(930837),o=t(140017),d=t(339001),c=t(785893);let u=()=>{let e=(0,o.ZP)(),{dismissWarning:i}=h()??{};return(0,c.jsx)(s.xu,{paddingX:3,children:(0,c.jsx)(s.zx,{color:"red",fullWidth:!0,onClick:i,text:e._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},p=()=>{let e=(0,o.ZP)();return(0,c.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(s.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},_=({message:e,sanitized_url:i})=>{let t=(0,o.ZP)(),{dismissWarning:r}=h()??{};return(0,c.jsx)(l.ZP,{accessibilityModalLabel:t._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),footer:(0,c.jsx)(u,{}),heading:t._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),onDismiss:r,children:(0,c.jsxs)(s.xu,{padding:6,children:[(0,c.jsx)(s.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(p,{},"learnMoreLink")})}),(0,c.jsxs)(s.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(s.xu,{marginEnd:3,children:(0,c.jsx)(s.JO,{accessibilityLabel:t._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(s.xv,{inline:!0,lineClamp:1,weight:"bold",children:n.parse(i).hostname})]})]})})},{Provider:m,useMaybeHook:h}=(0,a.Z)("SpammyClickthrough");function g({children:e}){let[i,t]=(0,r.useState)(null),a=(0,r.useCallback)(()=>{t(null)},[t]),n=(0,r.useCallback)(e=>{t(e)},[t]),s=(0,r.useMemo)(()=>({dismissWarning:a,showWarning:n}),[a,n]);return(0,c.jsxs)(m,{value:s,children:[i&&(0,c.jsx)(_,{...i}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40370-0d0f9a768ab1eff6.mjs.map