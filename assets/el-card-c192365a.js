import{m as n,d as p,x as d,y as c,C as o,K as t,H as r,u as s,S as l,V as i,G as u,I as y,_ as m,ay as f,ae as h,X as v}from"./index-0ddc5e63.js";const S=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=d({name:"ElCard"}),_=d({...C,props:S,setup(b){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[f(h(e.header),1)])],2)):i("v-if",!0),u("div",{class:r(s(a).e("body")),style:y(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=m(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(w);export{E};
