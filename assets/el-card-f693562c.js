import{l as n,m as p,d,a as c,o,b as t,n as r,e as s,r as l,a4 as i,a5 as u,T as m,W as y,f,_ as h,w as v}from"./index-107603c8.js";const w=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=d({name:"ElCard"}),_=d({...S,props:w,setup(C){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):m("v-if",!0),y("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var b=h(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(b);export{E};
