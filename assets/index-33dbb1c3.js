import{a2 as u,az as c,aA as h,h as a}from"./index-e9429a11.js";const f=(o,n,r)=>c(o.subTree).filter(e=>{var t;return h(e)&&((t=e.type)==null?void 0:t.name)===n&&!!e.component}).map(e=>e.component.uid).map(e=>r[e]).filter(e=>!!e),v=(o,n)=>{const r={},d=u([]);return{children:d,addChild:t=>{r[t.uid]=t,d.value=f(o,n,r)},removeChild:t=>{delete r[t],d.value=d.value.filter(l=>l.uid!==t)}}},p=(o,n={},r)=>{let d=a([]),s=a(!0);const e=(l,i)=>{n[l]=i,t()},t=()=>{o(n).then(l=>{l.code===200&&(s.value=!1,d.value=l[r])})};return t(),{list:d,loading:s,editParams:e}};export{p as a,v as u};
