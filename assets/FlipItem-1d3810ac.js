import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as o,a as s,F as u,m as h,n as r,t as n,p as f,l as m}from"./app-9f31e196.js";const v={props:{total:{type:Number,default:9},current:{type:Number,default:-1}},data(){return{before:this.total===this.current?-1:this.total,isPlay:!1}},watch:{current(t,i){this.before=i,this.isPlay||(this.isPlay=!0)}}},_=t=>(f("data-v-9b188a8e"),t=t(),m(),t),b={class:"flip"},y={class:"up"},I=_(()=>s("div",{class:"shadow"},null,-1)),w={class:"inn"},F={class:"down"},x=_(()=>s("div",{class:"shadow"},null,-1)),P={class:"inn"};function S(t,i,c,g,l,B){return a(),o("div",{class:r({play:l.isPlay})},[s("ul",b,[(a(!0),o(u,null,h(c.total+1,(d,e)=>(a(),o("li",{class:r(["item",{active:c.current===e,before:e===l.before}]),key:d},[s("div",y,[I,s("div",w,n(e),1)]),s("div",F,[x,s("div",P,n(e),1)])],2))),128))])],2)}const C=p(v,[["render",S],["__scopeId","data-v-9b188a8e"],["__file","FlipItem.vue"]]);export{C as default};
