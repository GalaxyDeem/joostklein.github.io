"use strict";const s=require("vue"),t=require("./Icon.js"),f=require("./CdxButton.cjs"),v=require("./constants.js"),y=require("./useI18nWithOverride.js"),g=require("./_plugin-vue_export-helper.js"),C={notice:t.Y4,error:t.i4,warning:t.M3,success:t.O7},p=s.defineComponent({name:"CdxMessage",components:{CdxButton:f,CdxIcon:t.CdxIcon},props:{type:{type:String,default:"notice",validator:v.statusTypeValidator},inline:{type:Boolean,default:!1},icon:{type:[String,Object],default:null},fadeIn:{type:Boolean,default:!1},allowUserDismiss:{type:Boolean,default:!1},dismissButtonLabel:{type:String,default:""},autoDismiss:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||typeof e=="number"&&e>0}},emits:["user-dismissed","auto-dismissed"],setup(e,{emit:i}){const o=s.ref(!1),a=s.computed(()=>e.inline===!1&&(e.dismissButtonLabel.length>0||e.allowUserDismiss)),d=y.useI18nWithOverride(s.toRef(e,"dismissButtonLabel"),"cdx-message-dismiss-button-label","Close"),l=s.computed(()=>e.autoDismiss===!1||e.type==="error"?!1:e.autoDismiss===!0?4e3:e.autoDismiss),n=s.computed(()=>({"cdx-message--inline":e.inline,"cdx-message--block":!e.inline,"cdx-message--user-dismissable":a.value,["cdx-message--".concat(e.type)]:!0})),r=s.computed(()=>e.icon&&e.type==="notice"?e.icon:C[e.type]),c=s.ref("");function u(m){o.value||(c.value=m==="user-dismissed"?"cdx-message-leave-active-user":"cdx-message-leave-active-system",o.value=!0,i(m))}return s.onMounted(()=>{e.type==="error"&&e.autoDismiss!==!1?s.warn('CdxMessage: Message with type="error" cannot use auto-dismiss'):l.value&&setTimeout(()=>u("auto-dismissed"),l.value)}),{dismissed:o,userDismissable:a,translatedDismissButtonLabel:d,rootClasses:n,leaveActiveClass:c,computedIcon:r,onDismiss:u,cdxIconClose:t.X3}}}),b=["aria-live","role"],x={class:"cdx-message__content"};function B(e,i,o,a,d,l){const n=s.resolveComponent("cdx-icon"),r=s.resolveComponent("cdx-button");return s.openBlock(),s.createBlock(s.Transition,{name:"cdx-message",appear:e.fadeIn,"leave-active-class":e.leaveActiveClass},{default:s.withCtx(()=>[e.dismissed?s.createCommentVNode("v-if",!0):(s.openBlock(),s.createElementBlock("div",{key:0,class:s.normalizeClass(["cdx-message",e.rootClasses]),"aria-live":e.type!=="error"?"polite":void 0,role:e.type==="error"?"alert":void 0},[s.createVNode(n,{class:"cdx-message__icon--vue",icon:e.computedIcon},null,8,["icon"]),s.createElementVNode("div",x,[s.renderSlot(e.$slots,"default")]),e.userDismissable?(s.openBlock(),s.createBlock(r,{key:0,class:"cdx-message__dismiss-button",weight:"quiet",type:"button","aria-label":e.translatedDismissButtonLabel,onClick:i[0]||(i[0]=c=>e.onDismiss("user-dismissed"))},{default:s.withCtx(()=>[s.createVNode(n,{icon:e.cdxIconClose},null,8,["icon"])]),_:1},8,["aria-label"])):s.createCommentVNode("v-if",!0)],10,b))]),_:3},8,["appear","leave-active-class"])}const _=g._export_sfc(p,[["render",B]]);module.exports=_;