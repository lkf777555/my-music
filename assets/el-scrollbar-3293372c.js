import{l as Y,_ as j,d as B,i as Q,a as I,aC as ee,h as c,c as w,k as te,v as O,t as D,o as k,z as W,A as q,ac as le,W as X,n as H,e as m,f as $,ae,af as se,bl as oe,b as Z,B as K,Z as re,m as ne,a8 as E,P as U,s as V,aa as ie,G as F,p as ce,ah as ue,j as ve,aF as fe,r as me,X as de,T as he,bf as pe,w as be}from"./index-ee06da13.js";const g=4,ye={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ge=({move:d,size:u,bar:r})=>({[r.size]:u,transform:`translate${r.axis}(${d}%)`}),J=Symbol("scrollbarContextKey"),we=Y({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Se="Thumb",ze=B({__name:"thumb",props:we,setup(d){const u=d,r=Q(J),a=I("scrollbar");r||ee(Se,"can not inject scrollbar context");const i=c(),v=c(),o=c({}),f=c(!1);let l=!1,p=!1,b=oe?document.onselectstart:null;const t=w(()=>ye[u.vertical?"vertical":"horizontal"]),S=w(()=>ge({size:u.size,move:u.move,bar:t.value})),z=w(()=>i.value[t.value.offset]**2/r.wrapElement[t.value.scrollSize]/u.ratio/v.value[t.value.offset]),T=s=>{var e;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(e=window.getSelection())==null||e.removeAllRanges(),L(s);const n=s.currentTarget;n&&(o.value[t.value.axis]=n[t.value.offset]-(s[t.value.client]-n.getBoundingClientRect()[t.value.direction]))},x=s=>{if(!v.value||!i.value||!r.wrapElement)return;const e=Math.abs(s.target.getBoundingClientRect()[t.value.direction]-s[t.value.client]),n=v.value[t.value.offset]/2,h=(e-n)*100*z.value/i.value[t.value.offset];r.wrapElement[t.value.scroll]=h*r.wrapElement[t.value.scrollSize]/100},L=s=>{s.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",C),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},C=s=>{if(!i.value||!v.value||l===!1)return;const e=o.value[t.value.axis];if(!e)return;const n=(i.value.getBoundingClientRect()[t.value.direction]-s[t.value.client])*-1,h=v.value[t.value.offset]-e,_=(n-h)*100*z.value/i.value[t.value.offset];r.wrapElement[t.value.scroll]=_*r.wrapElement[t.value.scrollSize]/100},y=()=>{l=!1,o.value[t.value.axis]=0,document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",y),N(),p&&(f.value=!1)},M=()=>{p=!1,f.value=!!u.size},A=()=>{p=!0,f.value=l};te(()=>{N(),document.removeEventListener("mouseup",y)});const N=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return O(D(r,"scrollbarElement"),"mousemove",M),O(D(r,"scrollbarElement"),"mouseleave",A),(s,e)=>(k(),W(se,{name:m(a).b("fade"),persisted:""},{default:q(()=>[le(X("div",{ref_key:"instance",ref:i,class:H([m(a).e("bar"),m(a).is(m(t).key)]),onMousedown:x},[X("div",{ref_key:"thumb",ref:v,class:H(m(a).e("thumb")),style:$(m(S)),onMousedown:T},null,38)],34),[[ae,s.always||f.value]])]),_:1},8,["name"]))}});var G=j(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const _e=Y({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ee=B({__name:"bar",props:_e,setup(d,{expose:u}){const r=d,a=c(0),i=c(0);return u({handleScroll:o=>{if(o){const f=o.offsetHeight-g,l=o.offsetWidth-g;i.value=o.scrollTop*100/f*r.ratioY,a.value=o.scrollLeft*100/l*r.ratioX}}}),(o,f)=>(k(),Z(re,null,[K(G,{move:a.value,ratio:o.ratioX,size:o.width,always:o.always},null,8,["move","ratio","size","always"]),K(G,{move:i.value,ratio:o.ratioY,size:o.height,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}});var ke=j(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const He=Y({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ne([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Te={scroll:({scrollTop:d,scrollLeft:u})=>[d,u].every(E)},Ce="ElScrollbar",Ne=B({name:Ce}),Pe=B({...Ne,props:He,emits:Te,setup(d,{expose:u,emit:r}){const a=d,i=I("scrollbar");let v,o;const f=c(),l=c(),p=c(),b=c("0"),t=c("0"),S=c(),z=c(1),T=c(1),x=w(()=>{const e={};return a.height&&(e.height=U(a.height)),a.maxHeight&&(e.maxHeight=U(a.maxHeight)),[a.wrapStyle,e]}),L=w(()=>[a.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!a.native}]),C=w(()=>[i.e("view"),a.viewClass]),y=()=>{var e;l.value&&((e=S.value)==null||e.handleScroll(l.value),r("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function M(e,n){pe(e)?l.value.scrollTo(e):E(e)&&E(n)&&l.value.scrollTo(e,n)}const A=e=>{E(e)&&(l.value.scrollTop=e)},N=e=>{E(e)&&(l.value.scrollLeft=e)},s=()=>{if(!l.value)return;const e=l.value.offsetHeight-g,n=l.value.offsetWidth-g,h=e**2/l.value.scrollHeight,_=n**2/l.value.scrollWidth,P=Math.max(h,a.minSize),R=Math.max(_,a.minSize);z.value=h/(e-h)/(P/(e-P)),T.value=_/(n-_)/(R/(n-R)),t.value=P+g<e?`${P}px`:"",b.value=R+g<n?`${R}px`:""};return V(()=>a.noresize,e=>{e?(v==null||v(),o==null||o()):({stop:v}=ie(p,s),o=O("resize",s))},{immediate:!0}),V(()=>[a.maxHeight,a.height],()=>{a.native||F(()=>{var e;s(),l.value&&((e=S.value)==null||e.handleScroll(l.value))})}),ce(J,ue({scrollbarElement:f,wrapElement:l})),ve(()=>{a.native||F(()=>{s()})}),fe(()=>s()),u({wrapRef:l,update:s,scrollTo:M,setScrollTop:A,setScrollLeft:N,handleScroll:y}),(e,n)=>(k(),Z("div",{ref_key:"scrollbarRef",ref:f,class:H(m(i).b())},[X("div",{ref_key:"wrapRef",ref:l,class:H(m(L)),style:$(m(x)),onScroll:y},[(k(),W(de(e.tag),{ref_key:"resizeRef",ref:p,class:H(m(C)),style:$(e.viewStyle)},{default:q(()=>[me(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?he("v-if",!0):(k(),W(ke,{key:0,ref_key:"barRef",ref:S,height:t.value,width:b.value,always:e.always,"ratio-x":T.value,"ratio-y":z.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Re=j(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const xe=be(Re);export{xe as E};