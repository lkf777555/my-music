import{c as n,g as b,r as h,aX as C,q as l,u as o,m as S,d as z,v as p,x as _,B as c,J as u,G as r,R as m,U as g,F as w,H as I,_ as k,ax as $,ad as x,W as B}from"./index-c3b79edf.js";const f=a=>{const s=b();return n(()=>{var e,t;return(t=(e=s==null?void 0:s.proxy)==null?void 0:e.$props)==null?void 0:t[a]})},v=Symbol("formContextKey"),E=Symbol("formItemContextKey"),j=(a,s={})=>{const e=h(void 0),t=s.prop?e:f("size"),y=s.global?e:C(),d=s.form?{size:void 0}:l(v,void 0),i=s.formItem?{size:void 0}:l(E,void 0);return n(()=>t.value||o(a)||(i==null?void 0:i.size)||(d==null?void 0:d.size)||y.value||"")},D=a=>{const s=f("disabled"),e=l(v,void 0);return n(()=>s.value||o(a)||(e==null?void 0:e.disabled)||!1)},K=S({header:{type:String,default:""},bodyStyle:{type:z([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),N=p({name:"ElCard"}),P=p({...N,props:K,setup(a){const s=_("card");return(e,t)=>(c(),u("div",{class:r([o(s).b(),o(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(c(),u("div",{key:0,class:r(o(s).e("header"))},[m(e.$slots,"header",{},()=>[$(x(e.header),1)])],2)):g("v-if",!0),w("div",{class:r(o(s).e("body")),style:I(e.bodyStyle)},[m(e.$slots,"default")],6)],2))}});var F=k(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const G=B(F);export{G as E,E as a,D as b,v as f,j as u};
