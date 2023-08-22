import{_ as ce}from"./plugin-vueexport-helper-c27b6911.js";import{ae as We,af as J,ag as ze,s as k,o as de,w as F,ah as Ce,ai as De,I as ae,aj as Ue,n as W,u as e,ak as je,c as Fe,v as xe,z as Ke,p as we,t as D,f as se,B as g,C as S,P as B,S as G,R as z,a1 as Z,D as A,al as q,K as L,U as _e,am as Xe,a4 as ee,a5 as he,V as U,an as qe,x as te,F as Se,a9 as x,aa as Q,Q as ue,_ as le,q as Te,ao as Ge,ap as Qe,aq as Ye,G as $e,H as Ee,ar as Je,as as Ze,a2 as ge,at as et}from"./index-4a162d3a.js";import{f as tt,g as nt}from"./home-deef6e82.js";var at=/\s/;function st(t){for(var o=t.length;o--&&at.test(t.charAt(o)););return o}var lt=/^\s+/;function ot(t){return t&&t.slice(0,st(t)+1).replace(lt,"")}var ye=0/0,rt=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,ut=/^0o[0-7]+$/i,ct=parseInt;function be(t){if(typeof t=="number")return t;if(We(t))return ye;if(J(t)){var o=typeof t.valueOf=="function"?t.valueOf():t;t=J(o)?o+"":o}if(typeof t!="string")return t===0?t:+t;t=ot(t);var n=it.test(t);return n||ut.test(t)?ct(t.slice(2),n?2:8):rt.test(t)?ye:+t}var dt=function(){return ze.Date.now()};const ie=dt;var ft="Expected a function",vt=Math.max,mt=Math.min;function pt(t,o,n){var a,c,s,l,i,p,v=0,_=!1,C=!1,T=!0;if(typeof t!="function")throw new TypeError(ft);o=be(o)||0,J(n)&&(_=!!n.leading,C="maxWait"in n,s=C?vt(be(n.maxWait)||0,o):s,T="trailing"in n?!!n.trailing:T);function w(u){var r=a,I=c;return a=c=void 0,v=u,l=t.apply(I,r),l}function y(u){return v=u,i=setTimeout(E,o),_?w(u):l}function H(u){var r=u-p,I=u-v,R=o-r;return C?mt(R,s-I):R}function M(u){var r=u-p,I=u-v;return p===void 0||r>=o||r<0||C&&I>=s}function E(){var u=ie();if(M(u))return O(u);i=setTimeout(E,H(u))}function O(u){return i=void 0,T&&a?w(u):(a=c=void 0,l)}function P(){i!==void 0&&clearTimeout(i),v=0,a=p=c=i=void 0}function m(){return i===void 0?l:O(ie())}function f(){var u=ie(),r=M(u);if(a=arguments,c=this,p=u,r){if(i===void 0)return y(p);if(C)return clearTimeout(i),i=setTimeout(E,o),w(p)}return i===void 0&&(i=setTimeout(E,o)),l}return f.cancel=P,f.flush=m,f}var _t="Expected a function";function ke(t,o,n){var a=!0,c=!0;if(typeof t!="function")throw new TypeError(_t);return J(n)&&(a="leading"in n?!!n.leading:a,c="trailing"in n?!!n.trailing:c),pt(t,o,{leading:a,maxWait:o,trailing:c})}const ht=(t,o=0)=>{if(o===0)return t;const n=k(!1);let a=0;const c=()=>{a&&clearTimeout(a),a=window.setTimeout(()=>{n.value=t.value},o)};return de(c),F(()=>t.value,s=>{s?c():n.value=s}),n},gt=(t,o,n)=>tt(t.subTree).filter(s=>{var l;return De(s)&&((l=s.type)==null?void 0:l.name)===o&&!!s.component}).map(s=>s.component.uid).map(s=>n[s]).filter(s=>!!s),yt=(t,o)=>{const n={},a=Ce([]);return{children:a,addChild:l=>{n[l.uid]=l,a.value=gt(t,o,n)},removeChild:l=>{delete n[l],a.value=a.value.filter(i=>i.uid!==l)}}},bt=ae({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),kt={change:(t,o)=>[t,o].every(Ue)},Ne=Symbol("carouselContextKey"),Ie=300,It=(t,o,n)=>{const{children:a,addChild:c,removeChild:s}=yt(we(),"ElCarouselItem"),l=k(-1),i=k(null),p=k(!1),v=k(),_=k(0),C=W(()=>t.arrow!=="never"&&!e(y)),T=W(()=>a.value.some(d=>d.props.label.toString().length>0)),w=W(()=>t.type==="card"),y=W(()=>t.direction==="vertical"),H=W(()=>t.height!=="auto"?{height:t.height}:{height:`${_.value}px`,overflow:"hidden"}),M=ke(d=>{f(d)},Ie,{trailing:!0}),E=ke(d=>{j(d)},Ie);function O(){i.value&&(clearInterval(i.value),i.value=null)}function P(){t.interval<=0||!t.autoplay||i.value||(i.value=setInterval(()=>m(),t.interval))}const m=()=>{l.value<a.value.length-1?l.value=l.value+1:t.loop&&(l.value=0)};function f(d){if(Ke(d)){const K=a.value.filter(Y=>Y.props.name===d);K.length>0&&(d=a.value.indexOf(K[0]))}if(d=Number(d),Number.isNaN(d)||d!==Math.floor(d))return;const $=a.value.length,V=l.value;d<0?l.value=t.loop?$-1:0:d>=$?l.value=t.loop?0:$-1:l.value=d,V===l.value&&u(V),fe()}function u(d){a.value.forEach(($,V)=>{$.translateItem(V,l.value,d)})}function r(d,$){var V,K,Y,ve;const X=e(a),me=X.length;if(me===0||!d.states.inStage)return!1;const Ae=$+1,Oe=$-1,pe=me-1,Re=X[pe].states.active,He=X[0].states.active,Pe=(K=(V=X[Ae])==null?void 0:V.states)==null?void 0:K.active,Ve=(ve=(Y=X[Oe])==null?void 0:Y.states)==null?void 0:ve.active;return $===pe&&He||Pe?"left":$===0&&Re||Ve?"right":!1}function I(){p.value=!0,t.pauseOnHover&&O()}function R(){p.value=!1,P()}function h(d){e(y)||a.value.forEach(($,V)=>{d===r($,V)&&($.states.hover=!0)})}function b(){e(y)||a.value.forEach(d=>{d.states.hover=!1})}function N(d){l.value=d}function j(d){t.trigger==="hover"&&d!==l.value&&(l.value=d)}function oe(){f(l.value-1)}function Le(){f(l.value+1)}function fe(){O(),P()}function Be(d){t.height==="auto"&&(_.value=d)}F(()=>l.value,(d,$)=>{u($),$>-1&&o("change",d,$)}),F(()=>t.autoplay,d=>{d?P():O()}),F(()=>t.loop,()=>{f(l.value)}),F(()=>t.interval,()=>{fe()}),F(()=>a.value,()=>{a.value.length>0&&f(t.initialIndex)});const re=Ce();return de(()=>{re.value=je(v.value,()=>{u()}),P()}),Fe(()=>{O(),v.value&&re.value&&re.value.stop()}),xe(Ne,{root:v,isCardType:w,isVertical:y,items:a,loop:t.loop,addItem:c,removeItem:s,setActiveItem:f,setContainerHeight:Be}),{root:v,activeIndex:l,arrowDisplay:C,hasLabel:T,hover:p,isCardType:w,items:a,isVertical:y,containerStyle:H,handleButtonEnter:h,handleButtonLeave:b,handleIndicatorClick:N,handleMouseEnter:I,handleMouseLeave:R,setActiveItem:f,prev:oe,next:Le,throttledArrowClick:M,throttledIndicatorHover:E}},Ct=["onMouseenter","onClick"],wt={key:0},St="ElCarousel",Tt=D({name:St}),$t=D({...Tt,props:bt,emits:kt,setup(t,{expose:o,emit:n}){const a=t,{root:c,activeIndex:s,arrowDisplay:l,hasLabel:i,hover:p,isCardType:v,items:_,isVertical:C,containerStyle:T,handleButtonEnter:w,handleButtonLeave:y,handleIndicatorClick:H,handleMouseEnter:M,handleMouseLeave:E,setActiveItem:O,prev:P,next:m,throttledArrowClick:f,throttledIndicatorHover:u}=It(a,n),r=se("carousel"),I=W(()=>{const h=[r.b(),r.m(a.direction)];return e(v)&&h.push(r.m("card")),h}),R=W(()=>{const h=[r.e("indicators"),r.em("indicators",a.direction)];return e(i)&&h.push(r.em("indicators","labels")),a.indicatorPosition==="outside"&&h.push(r.em("indicators","outside")),e(C)&&h.push(r.em("indicators","right")),h});return o({setActiveItem:O,prev:P,next:m}),(h,b)=>(g(),S("div",{ref_key:"root",ref:c,class:A(e(I)),onMouseenter:b[6]||(b[6]=q((...N)=>e(M)&&e(M)(...N),["stop"])),onMouseleave:b[7]||(b[7]=q((...N)=>e(E)&&e(E)(...N),["stop"]))},[B("div",{class:A(e(r).e("container")),style:Se(e(T))},[e(l)?(g(),G(he,{key:0,name:"carousel-arrow-left",persisted:""},{default:z(()=>[Z(B("button",{type:"button",class:A([e(r).e("arrow"),e(r).em("arrow","left")]),onMouseenter:b[0]||(b[0]=N=>e(w)("left")),onMouseleave:b[1]||(b[1]=(...N)=>e(y)&&e(y)(...N)),onClick:b[2]||(b[2]=q(N=>e(f)(e(s)-1),["stop"]))},[L(e(_e),null,{default:z(()=>[L(e(Xe))]),_:1})],34),[[ee,(h.arrow==="always"||e(p))&&(a.loop||e(s)>0)]])]),_:1})):U("v-if",!0),e(l)?(g(),G(he,{key:1,name:"carousel-arrow-right",persisted:""},{default:z(()=>[Z(B("button",{type:"button",class:A([e(r).e("arrow"),e(r).em("arrow","right")]),onMouseenter:b[3]||(b[3]=N=>e(w)("right")),onMouseleave:b[4]||(b[4]=(...N)=>e(y)&&e(y)(...N)),onClick:b[5]||(b[5]=q(N=>e(f)(e(s)+1),["stop"]))},[L(e(_e),null,{default:z(()=>[L(e(qe))]),_:1})],34),[[ee,(h.arrow==="always"||e(p))&&(a.loop||e(s)<e(_).length-1)]])]),_:1})):U("v-if",!0),te(h.$slots,"default")],6),h.indicatorPosition!=="none"?(g(),S("ul",{key:0,class:A(e(R))},[(g(!0),S(x,null,Q(e(_),(N,j)=>(g(),S("li",{key:j,class:A([e(r).e("indicator"),e(r).em("indicator",h.direction),e(r).is("active",j===e(s))]),onMouseenter:oe=>e(u)(j),onClick:q(oe=>e(H)(j),["stop"])},[B("button",{class:A(e(r).e("button"))},[e(i)?(g(),S("span",wt,ue(N.props.label),1)):U("v-if",!0)],2)],42,Ct))),128))],2)):U("v-if",!0)],34))}});var Et=le($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const Nt=ae({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Mt=(t,o)=>{const n=Te(Ne),a=we(),c=.83,s=k(),l=k(!1),i=k(0),p=k(1),v=k(!1),_=k(!1),C=k(!1),T=k(!1),{isCardType:w,isVertical:y}=n;function H(m,f,u){const r=u-1,I=f-1,R=f+1,h=u/2;return f===0&&m===r?-1:f===r&&m===0?u:m<I&&f-m>=h?u+1:m>R&&m-f>=h?-2:m}function M(m,f){var u,r;const I=e(y)?((u=n.root.value)==null?void 0:u.offsetHeight)||0:((r=n.root.value)==null?void 0:r.offsetWidth)||0;return C.value?I*((2-c)*(m-f)+1)/4:m<f?-(1+c)*I/4:(3+c)*I/4}function E(m,f,u){const r=n.root.value;return r?((u?r.offsetHeight:r.offsetWidth)||0)*(m-f):0}const O=(m,f,u)=>{var r;const I=e(w),R=(r=n.items.value.length)!=null?r:Number.NaN,h=m===f;!I&&!Ye(u)&&(T.value=h||m===u),!h&&R>2&&n.loop&&(m=H(m,f,R));const b=e(y);v.value=h,I?(C.value=Math.round(Math.abs(m-f))<=1,i.value=M(m,f),p.value=e(v)?1:c):i.value=E(m,f,b),_.value=!0,h&&s.value&&n.setContainerHeight(s.value.offsetHeight)};function P(){if(n&&e(w)){const m=n.items.value.findIndex(({uid:f})=>f===a.uid);n.setActiveItem(m)}}return de(()=>{n.addItem({props:t,states:Ge({hover:l,translate:i,scale:p,active:v,ready:_,inStage:C,animating:T}),uid:a.uid,translateItem:O})}),Qe(()=>{n.removeItem(a.uid)}),{carouselItemRef:s,active:v,animating:T,hover:l,inStage:C,isVertical:y,translate:i,isCardType:w,scale:p,ready:_,handleItemClick:P}},Lt=D({name:"ElCarouselItem"}),Bt=D({...Lt,props:Nt,setup(t){const o=t,n=se("carousel"),{carouselItemRef:a,active:c,animating:s,hover:l,inStage:i,isVertical:p,translate:v,isCardType:_,scale:C,ready:T,handleItemClick:w}=Mt(o),y=W(()=>{const M=`${`translate${e(p)?"Y":"X"}`}(${e(v)}px)`,E=`scale(${e(C)})`;return{transform:[M,E].join(" ")}});return(H,M)=>Z((g(),S("div",{ref_key:"carouselItemRef",ref:a,class:A([e(n).e("item"),e(n).is("active",e(c)),e(n).is("in-stage",e(i)),e(n).is("hover",e(l)),e(n).is("animating",e(s)),{[e(n).em("item","card")]:e(_),[e(n).em("item","card-vertical")]:e(_)&&e(p)}]),style:Se(e(y)),onClick:M[0]||(M[0]=(...E)=>e(w)&&e(w)(...E))},[e(_)?Z((g(),S("div",{key:0,class:A(e(n).e("mask"))},null,2)),[[ee,!e(c)]]):U("v-if",!0),te(H.$slots,"default")],6)),[[ee,e(T)]])}});var Me=le(Bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const At=$e(Et,{CarouselItem:Me}),Ot=Ee(Me),Rt=ae({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),Ht=ae({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),Pt=D({name:"ElSkeletonItem"}),Vt=D({...Pt,props:Ht,setup(t){const o=se("skeleton");return(n,a)=>(g(),S("div",{class:A([e(o).e("item"),e(o).e(n.variant)])},[n.variant==="image"?(g(),G(e(Je),{key:0})):U("v-if",!0)],2))}});var ne=le(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const Wt=D({name:"ElSkeleton"}),zt=D({...Wt,props:Rt,setup(t,{expose:o}){const n=t,a=se("skeleton"),c=ht(Ze(n,"loading"),n.throttle);return o({uiLoading:c}),(s,l)=>e(c)?(g(),S("div",ge({key:0,class:[e(a).b(),e(a).is("animated",s.animated)]},s.$attrs),[(g(!0),S(x,null,Q(s.count,i=>(g(),S(x,{key:i},[s.loading?te(s.$slots,"template",{key:i},()=>[L(ne,{class:A(e(a).is("first")),variant:"p"},null,8,["class"]),(g(!0),S(x,null,Q(s.rows,p=>(g(),G(ne,{key:p,class:A([e(a).e("paragraph"),e(a).is("last",p===s.rows&&s.rows>1)]),variant:"p"},null,8,["class"]))),128))]):U("v-if",!0)],64))),128))],16)):te(s.$slots,"default",et(ge({key:1},s.$attrs)))}});var Dt=le(zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const Ut=$e(Dt,{SkeletonItem:ne}),jt=Ee(ne);const Ft={class:"tab-list flex a-c"},xt={class:"list-title"},Kt=["onClick"],Xt={__name:"my-tab",props:{list:{type:Object,default:()=>{}}},emits:["myClick"],setup(t,{emit:o}){let n=k("0");const a=(c,s)=>{o("myClick",c,s),n.value=s};return(c,s)=>(g(),S("div",null,[B("div",Ft,[B("div",xt,ue(t.list.title),1),(g(!0),S(x,null,Q(t.list.children,(l,i)=>(g(),S("div",{class:A(e(n)==i?"list-label active":"list-label"),onClick:p=>a(l,i)},ue(l.label),11,Kt))),256))])]))}},qt=ce(Xt,[["__scopeId","data-v-1426d8f0"]]);const Gt={class:"page"},Qt=["src"],Yt={__name:"my-swiper",props:{list:{type:Array,default:()=>{}}},setup(t){return Te("$vm"),(o,n)=>{const a=Ot,c=At;return g(),S("div",Gt,[L(c,{interval:3e3,type:"card",height:"200px"},{default:z(()=>[(g(!0),S(x,null,Q(t.list,s=>(g(),G(a,{key:s},{default:z(()=>[B("img",{class:"swiper-img",src:s.imageUrl},null,8,Qt)]),_:2},1024))),128))]),_:1})])}}},Jt=ce(Yt,[["__scopeId","data-v-23ec54eb"]]);const Zt={class:"page"},en={class:"banner"},tn={class:"recommend"},nn={class:"recom-list"},an={class:"recommend"},sn={class:"recom-list"},ln={class:"recommend"},on={class:"recom-list"},rn={__name:"home",setup(t){let o=k([]),n=k(!0),a=k({title:"热门推荐",children:[{label:"推荐",value:""},{label:"华语",value:"华语"},{label:"流行",value:"流行"},{label:"摇滚",value:"摇滚"},{label:"民谣",value:"民谣"},{label:"电子",value:"电子"}]}),c=k({title:"新碟上架",children:[{label:"全部",value:""},{label:"华语",value:"zh"},{label:"欧美",value:"ea"},{label:"韩国",value:"kr"},{label:"日本",value:"jp"}]}),s=k({title:"最新MV",children:[{label:"全部",value:""},{label:"内地",value:"内地"},{label:"港台",value:"港台"},{label:"欧美",value:"欧美"},{label:"日本",value:"日本"},{label:"韩国",value:"韩国"}]});const l=(v,_)=>{console.log(v,_)},i=(v,_)=>{console.log(v,_)},p=(v,_)=>{console.log(v,_)};return nt().then(v=>{o.value=v.banners,n.value=!1}),(v,_)=>{const C=Jt,T=jt,w=Ut,y=qt;return g(),S("div",Zt,[B("div",en,[L(w,{loading:e(n),animated:!0},{default:z(()=>[L(C,{list:e(o)},null,8,["list"])]),template:z(()=>[L(T,{variant:"p",style:{width:"27%",height:"200px"}}),L(T,{variant:"p",style:{width:"46%",height:"200px"}}),L(T,{variant:"p",style:{width:"27%",height:"200px"}})]),_:1},8,["loading"])]),B("div",tn,[B("div",nn,[L(y,{list:e(a),onMyClick:l},null,8,["list"])])]),B("div",an,[B("div",sn,[L(y,{list:e(c),onMyClick:i},null,8,["list"])])]),B("div",ln,[B("div",on,[L(y,{list:e(s),onMyClick:p},null,8,["list"])])])])}}},fn=ce(rn,[["__scopeId","data-v-33f6634d"]]);export{fn as default};
