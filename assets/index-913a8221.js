import{r as $,o as ce,w as J,s as be,aA as je,aB as ze,m as le,n as Re,c as F,u as e,O as De,f as Ue,p as Fe,aC as Ke,g as Ce,x as G,y as ne,C as r,K as f,G as l,D as K,E,F as ee,H as V,at as Q,L as y,al as ue,aD as Ge,J as te,T as _e,V as z,aE as We,S as se,I as we,M as H,az as j,ae as O,_ as oe,v as de,Q as Je,aF as Xe,aG as qe,X as Ie,am as $e,aH as Qe,B as Ye,a4 as ge,ao as Ze,aw as ve,aI as et,aJ as tt,aK as st,aL as at,aM as lt,aN as nt,aO as ot}from"./index-a405cdc8.js";import{t as ye,E as it}from"./el-image-viewer-3ec35de4.js";const rt=(t,p=0)=>{if(p===0)return t;const a=$(!1);let s=0;const h=()=>{s&&clearTimeout(s),s=window.setTimeout(()=>{a.value=t.value},p)};return ce(h),J(()=>t.value,n=>{n?h():a.value=n}),a},ut=(t,p,a)=>je(t.subTree).filter(n=>{var o;return ze(n)&&((o=n.type)==null?void 0:o.name)===p&&!!n.component}).map(n=>n.component.uid).map(n=>a[n]).filter(n=>!!n),ct=(t,p)=>{const a={},s=be([]);return{children:s,addChild:o=>{a[o.uid]=o,s.value=ut(t,p,a)},removeChild:o=>{delete a[o],s.value=s.value.filter(c=>c.uid!==o)}}},dt=le({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),vt={change:(t,p)=>[t,p].every(Re)},Se=Symbol("carouselContextKey"),ke=300,mt=(t,p,a)=>{const{children:s,addChild:h,removeChild:n}=ct(Ce(),"ElCarouselItem"),o=$(-1),c=$(null),v=$(!1),b=$(),g=$(0),M=F(()=>t.arrow!=="never"&&!e(i)),P=F(()=>s.value.some(u=>u.props.label.toString().length>0)),L=F(()=>t.type==="card"),i=F(()=>t.direction==="vertical"),k=F(()=>t.height!=="auto"?{height:t.height}:{height:`${g.value}px`,overflow:"hidden"}),w=ye(u=>{m(u)},ke,{trailing:!0}),T=ye(u=>{W(u)},ke);function A(){c.value&&(clearInterval(c.value),c.value=null)}function D(){t.interval<=0||!t.autoplay||c.value||(c.value=setInterval(()=>_(),t.interval))}const _=()=>{o.value<s.value.length-1?o.value=o.value+1:t.loop&&(o.value=0)};function m(u){if(Ke(u)){const X=s.value.filter(Y=>Y.props.name===u);X.length>0&&(u=s.value.indexOf(X[0]))}if(u=Number(u),Number.isNaN(u)||u!==Math.floor(u))return;const x=s.value.length,R=o.value;u<0?o.value=t.loop?x-1:0:u>=x?o.value=t.loop?0:x-1:o.value=u,R===o.value&&S(R),me()}function S(u){s.value.forEach((x,R)=>{x.translateItem(R,o.value,u)})}function d(u,x){var R,X,Y,fe;const q=e(s),pe=q.length;if(pe===0||!u.states.inStage)return!1;const Pe=x+1,Ae=x-1,he=pe-1,Be=q[he].states.active,He=q[0].states.active,Ve=(X=(R=q[Pe])==null?void 0:R.states)==null?void 0:X.active,Oe=(fe=(Y=q[Ae])==null?void 0:Y.states)==null?void 0:fe.active;return x===he&&He||Ve?"left":x===0&&Be||Oe?"right":!1}function B(){v.value=!0,t.pauseOnHover&&A()}function U(){v.value=!1,D()}function C(u){e(i)||s.value.forEach((x,R)=>{u===d(x,R)&&(x.states.hover=!0)})}function I(){e(i)||s.value.forEach(u=>{u.states.hover=!1})}function N(u){o.value=u}function W(u){t.trigger==="hover"&&u!==o.value&&(o.value=u)}function ie(){m(o.value-1)}function Ee(){m(o.value+1)}function me(){A(),D()}function Te(u){t.height==="auto"&&(g.value=u)}J(()=>o.value,(u,x)=>{S(x),x>-1&&p("change",u,x)}),J(()=>t.autoplay,u=>{u?D():A()}),J(()=>t.loop,()=>{m(o.value)}),J(()=>t.interval,()=>{me()}),J(()=>s.value,()=>{s.value.length>0&&m(t.initialIndex)});const re=be();return ce(()=>{re.value=De(b.value,()=>{S()}),D()}),Ue(()=>{A(),b.value&&re.value&&re.value.stop()}),Fe(Se,{root:b,isCardType:L,isVertical:i,items:s,loop:t.loop,addItem:h,removeItem:n,setActiveItem:m,setContainerHeight:Te}),{root:b,activeIndex:o,arrowDisplay:M,hasLabel:P,hover:v,isCardType:L,items:s,isVertical:i,containerStyle:k,handleButtonEnter:C,handleButtonLeave:I,handleIndicatorClick:N,handleMouseEnter:B,handleMouseLeave:U,setActiveItem:m,prev:ie,next:Ee,throttledArrowClick:w,throttledIndicatorHover:T}},ft=["onMouseenter","onClick"],pt={key:0},ht="ElCarousel",_t=G({name:ht}),gt=G({..._t,props:dt,emits:vt,setup(t,{expose:p,emit:a}){const s=t,{root:h,activeIndex:n,arrowDisplay:o,hasLabel:c,hover:v,isCardType:b,items:g,isVertical:M,containerStyle:P,handleButtonEnter:L,handleButtonLeave:i,handleIndicatorClick:k,handleMouseEnter:w,handleMouseLeave:T,setActiveItem:A,prev:D,next:_,throttledArrowClick:m,throttledIndicatorHover:S}=mt(s,a),d=ne("carousel"),B=F(()=>{const C=[d.b(),d.m(s.direction)];return e(b)&&C.push(d.m("card")),C}),U=F(()=>{const C=[d.e("indicators"),d.em("indicators",s.direction)];return e(c)&&C.push(d.em("indicators","labels")),s.indicatorPosition==="outside"&&C.push(d.em("indicators","outside")),e(M)&&C.push(d.em("indicators","right")),C});return p({setActiveItem:A,prev:D,next:_}),(C,I)=>(r(),f("div",{ref_key:"root",ref:h,class:V(e(B)),onMouseenter:I[6]||(I[6]=Q((...N)=>e(w)&&e(w)(...N),["stop"])),onMouseleave:I[7]||(I[7]=Q((...N)=>e(T)&&e(T)(...N),["stop"]))},[l("div",{class:V(e(d).e("container")),style:we(e(P))},[e(o)?(r(),K(_e,{key:0,name:"carousel-arrow-left",persisted:""},{default:E(()=>[ee(l("button",{type:"button",class:V([e(d).e("arrow"),e(d).em("arrow","left")]),onMouseenter:I[0]||(I[0]=N=>e(L)("left")),onMouseleave:I[1]||(I[1]=(...N)=>e(i)&&e(i)(...N)),onClick:I[2]||(I[2]=Q(N=>e(m)(e(n)-1),["stop"]))},[y(e(ue),null,{default:E(()=>[y(e(Ge))]),_:1})],34),[[te,(C.arrow==="always"||e(v))&&(s.loop||e(n)>0)]])]),_:1})):z("v-if",!0),e(o)?(r(),K(_e,{key:1,name:"carousel-arrow-right",persisted:""},{default:E(()=>[ee(l("button",{type:"button",class:V([e(d).e("arrow"),e(d).em("arrow","right")]),onMouseenter:I[3]||(I[3]=N=>e(L)("right")),onMouseleave:I[4]||(I[4]=(...N)=>e(i)&&e(i)(...N)),onClick:I[5]||(I[5]=Q(N=>e(m)(e(n)+1),["stop"]))},[y(e(ue),null,{default:E(()=>[y(e(We))]),_:1})],34),[[te,(C.arrow==="always"||e(v))&&(s.loop||e(n)<e(g).length-1)]])]),_:1})):z("v-if",!0),se(C.$slots,"default")],6),C.indicatorPosition!=="none"?(r(),f("ul",{key:0,class:V(e(U))},[(r(!0),f(H,null,j(e(g),(N,W)=>(r(),f("li",{key:W,class:V([e(d).e("indicator"),e(d).em("indicator",C.direction),e(d).is("active",W===e(n))]),onMouseenter:ie=>e(S)(W),onClick:Q(ie=>e(k)(W),["stop"])},[l("button",{class:V(e(d).e("button"))},[e(c)?(r(),f("span",pt,O(N.props.label),1)):z("v-if",!0)],2)],42,ft))),128))],2)):z("v-if",!0)],34))}});var yt=oe(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const kt=le({name:{type:String,default:""},label:{type:[String,Number],default:""}}),bt=(t,p)=>{const a=de(Se),s=Ce(),h=.83,n=$(),o=$(!1),c=$(0),v=$(1),b=$(!1),g=$(!1),M=$(!1),P=$(!1),{isCardType:L,isVertical:i}=a;function k(_,m,S){const d=S-1,B=m-1,U=m+1,C=S/2;return m===0&&_===d?-1:m===d&&_===0?S:_<B&&m-_>=C?S+1:_>U&&_-m>=C?-2:_}function w(_,m){var S,d;const B=e(i)?((S=a.root.value)==null?void 0:S.offsetHeight)||0:((d=a.root.value)==null?void 0:d.offsetWidth)||0;return M.value?B*((2-h)*(_-m)+1)/4:_<m?-(1+h)*B/4:(3+h)*B/4}function T(_,m,S){const d=a.root.value;return d?((S?d.offsetHeight:d.offsetWidth)||0)*(_-m):0}const A=(_,m,S)=>{var d;const B=e(L),U=(d=a.items.value.length)!=null?d:Number.NaN,C=_===m;!B&&!qe(S)&&(P.value=C||_===S),!C&&U>2&&a.loop&&(_=k(_,m,U));const I=e(i);b.value=C,B?(M.value=Math.round(Math.abs(_-m))<=1,c.value=w(_,m),v.value=e(b)?1:h):c.value=T(_,m,I),g.value=!0,C&&n.value&&a.setContainerHeight(n.value.offsetHeight)};function D(){if(a&&e(L)){const _=a.items.value.findIndex(({uid:m})=>m===s.uid);a.setActiveItem(_)}}return ce(()=>{a.addItem({props:t,states:Je({hover:o,translate:c,scale:v,active:b,ready:g,inStage:M,animating:P}),uid:s.uid,translateItem:A})}),Xe(()=>{a.removeItem(s.uid)}),{carouselItemRef:n,active:b,animating:P,hover:o,inStage:M,isVertical:i,translate:c,isCardType:L,scale:v,ready:g,handleItemClick:D}},Ct=G({name:"ElCarouselItem"}),wt=G({...Ct,props:kt,setup(t){const p=t,a=ne("carousel"),{carouselItemRef:s,active:h,animating:n,hover:o,inStage:c,isVertical:v,translate:b,isCardType:g,scale:M,ready:P,handleItemClick:L}=bt(p),i=F(()=>{const w=`${`translate${e(v)?"Y":"X"}`}(${e(b)}px)`,T=`scale(${e(M)})`;return{transform:[w,T].join(" ")}});return(k,w)=>ee((r(),f("div",{ref_key:"carouselItemRef",ref:s,class:V([e(a).e("item"),e(a).is("active",e(h)),e(a).is("in-stage",e(c)),e(a).is("hover",e(o)),e(a).is("animating",e(n)),{[e(a).em("item","card")]:e(g),[e(a).em("item","card-vertical")]:e(g)&&e(v)}]),style:we(e(i)),onClick:w[0]||(w[0]=(...T)=>e(L)&&e(L)(...T))},[e(g)?ee((r(),f("div",{key:0,class:V(e(a).e("mask"))},null,2)),[[te,!e(h)]]):z("v-if",!0),se(k.$slots,"default")],6)),[[te,e(P)]])}});var xe=oe(wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const It=Ie(yt,{CarouselItem:xe}),$t=$e(xe),St=le({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),xt=le({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),Mt=G({name:"ElSkeletonItem"}),Lt=G({...Mt,props:xt,setup(t){const p=ne("skeleton");return(a,s)=>(r(),f("div",{class:V([e(p).e("item"),e(p).e(a.variant)])},[a.variant==="image"?(r(),K(e(Qe),{key:0})):z("v-if",!0)],2))}});var ae=oe(Lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const Nt=G({name:"ElSkeleton"}),Et=G({...Nt,props:St,setup(t,{expose:p}){const a=t,s=ne("skeleton"),h=rt(Ye(a,"loading"),a.throttle);return p({uiLoading:h}),(n,o)=>e(h)?(r(),f("div",ge({key:0,class:[e(s).b(),e(s).is("animated",n.animated)]},n.$attrs),[(r(!0),f(H,null,j(n.count,c=>(r(),f(H,{key:c},[n.loading?se(n.$slots,"template",{key:c},()=>[y(ae,{class:V(e(s).is("first")),variant:"p"},null,8,["class"]),(r(!0),f(H,null,j(n.rows,v=>(r(),K(ae,{key:v,class:V([e(s).e("paragraph"),e(s).is("last",v===n.rows&&n.rows>1)]),variant:"p"},null,8,["class"]))),128))]):z("v-if",!0)],64))),128))],16)):se(n.$slots,"default",Ze(ge({key:1},n.$attrs)))}});var Tt=oe(Et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const Me=Ie(Tt,{SkeletonItem:ae}),Le=$e(ae);const Ne=t=>(tt("data-v-8eaaef28"),t=t(),st(),t),Pt={class:"tab-list flex a-c"},At={class:"list-title"},Bt=["onClick"],Ht={class:"flex j-b"},Vt=["onClick"],Ot=["src"],jt={class:"music-title text-2 font-100"},zt={key:0,style:{padding:"2px 0px 10px 0px"}},Rt={class:"music-position flex a-c"},Dt=Ne(()=>l("img",{src:"https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/headset.png"},null,-1)),Ut=Ne(()=>l("div",null,"/",-1)),Ft={class:"flex j-b",style:{"padding-bottom":"10px"}},Kt={style:{"margin-top":"10px"}},Gt={style:{"margin-top":"10px"}},Wt={class:"flex j-b",style:{"flex-wrap":"wrap"}},Jt=["onClick"],Xt={class:"dish-img"},qt=["src"],Qt={class:"dish-right"},Yt={class:"dish-title text-2 font-100"},Zt={class:"dish-info font-100"},es={class:"flex j-b",style:{"flex-wrap":"wrap"}},ts={style:{width:"25%",padding:"0px 10px 10px 0px"}},ss={class:"flex j-b",style:{"flex-wrap":"wrap"}},as=["onClick"],ls={class:"mv-video"},ns={class:"v-icon"},os={class:"text-1 font-100 f-14"},is={class:"font-100 f-14 f-c"},rs={class:"font-100 f-14 f-c"},us={class:"flex j-b",style:{"flex-wrap":"wrap"}},cs={style:{padding:"0px 10px 10px 0px"}},ds={style:{"margin-top":"4px"}},vs={style:{"margin-top":"4px"}},ms={style:{"margin-top":"4px"}},fs={__name:"my-tab",props:{list:{type:Object,default:()=>{}},skLoading:{type:Boolean,default:!0},tdata:{type:Array,default:()=>[]},Mtype:{type:Number,default:1}},emits:["myClick"],setup(t,{emit:p}){let a=$("0"),s=de("$vm");const h=(v,b)=>{p("myClick",v.value,b),a.value=b},n=v=>{s.MsgSuccess("待开发")},o=v=>{s.MsgSuccess("待开发")},c=v=>{s.MsgSuccess("待开发")};return(v,b)=>{const g=Le,M=Me,P=ue,L=it;return r(),f("div",null,[l("div",Pt,[l("div",At,O(t.list.title),1),(r(!0),f(H,null,j(t.list.children,(i,k)=>(r(),f("div",{class:V(e(a)==k?"list-label active":"list-label"),onClick:w=>h(i,k)},O(i.label),11,Bt))),256))]),t.Mtype==1?(r(),K(M,{key:0,loading:t.skLoading,animated:!0},{default:E(()=>[l("div",Ht,[(r(!0),f(H,null,j(t.tdata,(i,k)=>(r(),f("div",{key:k,class:"music-box",onClick:w=>n(i)},[l("img",{class:"music-img border-r-8",src:i.coverImgUrl},null,8,Ot),l("div",jt,O(i.name),1),i.tags?(r(),f("div",zt,[(r(!0),f(H,null,j(i.tags,(w,T)=>(r(),f("span",{class:"music-tag font-100",key:T},"#"+O(w),1))),128))])):z("",!0),l("div",Rt,[Dt,l("div",null,O(v.formartNum(i.playCount)),1),Ut,l("div",null,O(i.trackCount)+"首",1)])],8,Vt))),128))])]),template:E(()=>[l("div",Ft,[(r(),f(H,null,j(6,i=>l("div",null,[l("div",null,[y(g,{variant:"p",style:{width:"220px",height:"220px"}})]),l("div",Kt,[y(g,{variant:"p",style:{width:"220px",height:"16px"}})]),l("div",Gt,[y(g,{variant:"p",style:{width:"60px",height:"16px"}})])])),64))])]),_:1},8,["loading"])):z("",!0),t.Mtype==2?(r(),K(M,{key:1,loading:t.skLoading,animated:!0},{default:E(()=>[l("div",Wt,[(r(!0),f(H,null,j(t.tdata.slice(0,12),(i,k)=>(r(),f("div",{key:k,class:"dish-box flex j-b border-r-8",onClick:w=>o(i)},[l("div",Xt,[l("img",{src:i.blurPicUrl},null,8,qt)]),l("div",Qt,[l("div",Yt,O(i.name),1),l("div",Zt,O(i.artist.name),1)])],8,Jt))),128))])]),template:E(()=>[l("div",es,[(r(),f(H,null,j(12,i=>l("div",ts,[l("div",null,[y(g,{variant:"p",style:{width:"100%",height:"120px"}})])])),64))])]),_:1},8,["loading"])):z("",!0),t.Mtype==3?(r(),K(M,{key:2,loading:t.skLoading,animated:!0},{default:E(()=>[l("div",ss,[(r(!0),f(H,null,j(t.tdata,(i,k)=>(r(),f("div",{key:k,class:"mv-box",onClick:w=>c(i)},[l("div",ls,[l("div",ns,[y(P,{size:"48"},{default:E(()=>[y(e(et))]),_:1})]),y(L,{style:{width:"92%",height:"92%"},src:i.cover},null,8,["src"])]),l("div",os,O(i.name),1),l("div",is,O(i.artistName),1),l("div",rs,O(v.formartNum(i.playCount)),1)],8,as))),128))])]),template:E(()=>[l("div",us,[(r(),f(H,null,j(10,i=>l("div",cs,[l("div",null,[y(g,{variant:"p",style:{width:"100%",height:"120px"}})]),l("div",ds,[y(g,{variant:"p",style:{width:"100%",height:"16px"}})]),l("div",vs,[y(g,{variant:"p",style:{width:"50%",height:"16px"}})]),l("div",ms,[y(g,{variant:"p",style:{width:"10%",height:"16px"}})])])),64))])]),_:1},8,["loading"])):z("",!0)])}}},ps=ve(fs,[["__scopeId","data-v-8eaaef28"]]);const hs=["src"],_s={__name:"my-swiper",props:{list:{type:Array,default:()=>{}},vloading:{type:Boolean,default:!0}},setup(t){let p=de("$vm");const a=s=>{p.MsgSuccess("待开发")};return(s,h)=>{const n=$t,o=It,c=Le,v=Me;return r(),f("div",null,[y(v,{loading:t.vloading,animated:!0},{default:E(()=>[y(o,{interval:3e3,type:"card",height:"200px"},{default:E(()=>[(r(!0),f(H,null,j(t.list,b=>(r(),K(n,{key:b,onClick:g=>a(b)},{default:E(()=>[l("img",{class:"swiper-img",src:b.imageUrl},null,8,hs)]),_:2},1032,["onClick"]))),128))]),_:1})]),template:E(()=>[y(c,{variant:"p",style:{width:"27%",height:"200px"}}),y(c,{variant:"p",style:{width:"46%",height:"200px"}}),y(c,{variant:"p",style:{width:"27%",height:"200px"}})]),_:1},8,["loading"])])}}},gs=ve(_s,[["__scopeId","data-v-982fbc01"]]),Z=(t,p={},a)=>{let s=$([]),h=$(!0);const n=(c,v)=>{p[c]=v,o()},o=()=>{t(p).then(c=>{h.value=!1,s.value=c[a]})};return o(),{list:s,loading:h,editParams:n}},ys=$({title:"热门推荐",children:[{label:"推荐",value:""},{label:"华语",value:"华语"},{label:"流行",value:"流行"},{label:"摇滚",value:"摇滚"},{label:"民谣",value:"民谣"},{label:"电子",value:"电子"}]}),ks=$({title:"新碟上架",children:[{label:"全部",value:""},{label:"华语",value:"zh"},{label:"欧美",value:"ea"},{label:"韩国",value:"kr"},{label:"日本",value:"jp"}]}),bs=$({title:"最新MV",children:[{label:"全部",value:""},{label:"内地",value:"内地"},{label:"港台",value:"港台"},{label:"欧美",value:"欧美"},{label:"日本",value:"日本"},{label:"韩国",value:"韩国"}]});const Cs={class:"recommend"},ws={class:"recom-list"},Is={class:"recommend"},$s={class:"recom-list"},Ss={class:"recommend"},xs={class:"recom-list"},Ms={__name:"index",setup(t){const p=(k,w)=>{v("cat",k)},a=(k,w)=>{M("area",k)},s=(k,w)=>{i("area",k)};let{list:h,loading:n}=Z(at,{},"banners"),{list:o,loading:c,editParams:v}=Z(lt,{limit:6,order:"hot",cat:"",offset:0},"playlists"),{list:b,loading:g,editParams:M}=Z(nt,{limit:12,offset:0,area:"",type:"new",year:"",month:""},"monthData"),{list:P,loading:L,editParams:i}=Z(ot,{limit:10,offset:0,area:"",type:"",order:""},"data");return(k,w)=>{const T=gs,A=ps;return r(),f("div",null,[l("div",null,[y(T,{list:e(h),vloading:e(n)},null,8,["list","vloading"])]),l("div",Cs,[l("div",ws,[y(A,{list:e(ys),skLoading:e(c),tdata:e(o),Mtype:1,onMyClick:p},null,8,["list","skLoading","tdata"])])]),l("div",Is,[l("div",$s,[y(A,{list:e(ks),skLoading:e(g),tdata:e(b),Mtype:2,onMyClick:a},null,8,["list","skLoading","tdata"])])]),l("div",Ss,[l("div",xs,[y(A,{list:e(bs),skLoading:e(L),tdata:e(P),Mtype:3,onMyClick:s},null,8,["list","skLoading","tdata"])])])])}}},Es=ve(Ms,[["__scopeId","data-v-8b825d43"]]);export{Es as default};
