import{h as S,j as ue,s as G,l as le,a1 as Ve,c as W,e,a2 as Oe,a3 as ze,k as Re,p as De,O as be,a4 as Ue,d as K,a as ne,o,b as v,Q as s,y as F,z as E,a5 as ee,n as H,S as Y,A as h,H as ce,a6 as We,a7 as te,a8 as he,N as z,a9 as Fe,r as se,f as Ce,T as j,$ as O,Z as V,_ as oe,i as de,aa as Ke,ab as qe,ac as Ge,w as we,g as Ie,ad as Qe,t as Xe,M as ge,B as Ye,W as ve,ae as Ze,af as Je,ag as et,ah as tt,ai as st,aj as at,ak as lt}from"./index-e9429a11.js";import{t as ye,E as nt}from"./el-image-viewer-f967b072.js";/* empty css                */import{u as ot,a as J}from"./index-33dbb1c3.js";const it=(t,b=0)=>{if(b===0)return t;const n=S(!1);let a=0;const C=()=>{a&&clearTimeout(a),a=window.setTimeout(()=>{n.value=t.value},b)};return ue(C),G(()=>t.value,r=>{r?C():n.value=r}),n},rt=le({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),ct={change:(t,b)=>[t,b].every(Ve)},$e=Symbol("carouselContextKey"),ke=300,ut=(t,b,n)=>{const{children:a,addChild:C,removeChild:r}=ot(be(),"ElCarouselItem"),c=S(-1),f=S(null),m=S(!1),y=S(),_=S(0),M=W(()=>t.arrow!=="never"&&!e(l)),P=W(()=>a.value.some(i=>i.props.label.toString().length>0)),L=W(()=>t.type==="card"),l=W(()=>t.direction==="vertical"),g=W(()=>t.height!=="auto"?{height:t.height}:{height:`${_.value}px`,overflow:"hidden"}),w=ye(i=>{d(i)},ke,{trailing:!0}),T=ye(i=>{q(i)},ke);function A(){f.value&&(clearInterval(f.value),f.value=null)}function D(){t.interval<=0||!t.autoplay||f.value||(f.value=setInterval(()=>p(),t.interval))}const p=()=>{c.value<a.value.length-1?c.value=c.value+1:t.loop&&(c.value=0)};function d(i){if(Ue(i)){const Q=a.value.filter(Z=>Z.props.name===i);Q.length>0&&(i=a.value.indexOf(Q[0]))}if(i=Number(i),Number.isNaN(i)||i!==Math.floor(i))return;const x=a.value.length,R=c.value;i<0?c.value=t.loop?x-1:0:i>=x?c.value=t.loop?0:x-1:c.value=i,R===c.value&&$(R),me()}function $(i){a.value.forEach((x,R)=>{x.translateItem(R,c.value,i)})}function u(i,x){var R,Q,Z,fe;const X=e(a),pe=X.length;if(pe===0||!i.states.inStage)return!1;const Te=x+1,Pe=x-1,_e=pe-1,Ae=X[_e].states.active,Be=X[0].states.active,je=(Q=(R=X[Te])==null?void 0:R.states)==null?void 0:Q.active,He=(fe=(Z=X[Pe])==null?void 0:Z.states)==null?void 0:fe.active;return x===_e&&Be||je?"left":x===0&&Ae||He?"right":!1}function B(){m.value=!0,t.pauseOnHover&&A()}function U(){m.value=!1,D()}function k(i){e(l)||a.value.forEach((x,R)=>{i===u(x,R)&&(x.states.hover=!0)})}function I(){e(l)||a.value.forEach(i=>{i.states.hover=!1})}function N(i){c.value=i}function q(i){t.trigger==="hover"&&i!==c.value&&(c.value=i)}function ie(){d(c.value-1)}function Ne(){d(c.value+1)}function me(){A(),D()}function Ee(i){t.height==="auto"&&(_.value=i)}G(()=>c.value,(i,x)=>{$(x),x>-1&&b("change",i,x)}),G(()=>t.autoplay,i=>{i?D():A()}),G(()=>t.loop,()=>{d(c.value)}),G(()=>t.interval,()=>{me()}),G(()=>a.value,()=>{a.value.length>0&&d(t.initialIndex)});const re=Oe();return ue(()=>{re.value=ze(y.value,()=>{$()}),D()}),Re(()=>{A(),y.value&&re.value&&re.value.stop()}),De($e,{root:y,isCardType:L,isVertical:l,items:a,loop:t.loop,addItem:C,removeItem:r,setActiveItem:d,setContainerHeight:Ee}),{root:y,activeIndex:c,arrowDisplay:M,hasLabel:P,hover:m,isCardType:L,items:a,isVertical:l,containerStyle:g,handleButtonEnter:k,handleButtonLeave:I,handleIndicatorClick:N,handleMouseEnter:B,handleMouseLeave:U,setActiveItem:d,prev:ie,next:Ne,throttledArrowClick:w,throttledIndicatorHover:T}},dt=["onMouseenter","onClick"],vt={key:0},mt="ElCarousel",ft=K({name:mt}),pt=K({...ft,props:rt,emits:ct,setup(t,{expose:b,emit:n}){const a=t,{root:C,activeIndex:r,arrowDisplay:c,hasLabel:f,hover:m,isCardType:y,items:_,isVertical:M,containerStyle:P,handleButtonEnter:L,handleButtonLeave:l,handleIndicatorClick:g,handleMouseEnter:w,handleMouseLeave:T,setActiveItem:A,prev:D,next:p,throttledArrowClick:d,throttledIndicatorHover:$}=ut(a,n),u=ne("carousel"),B=W(()=>{const k=[u.b(),u.m(a.direction)];return e(y)&&k.push(u.m("card")),k}),U=W(()=>{const k=[u.e("indicators"),u.em("indicators",a.direction)];return e(f)&&k.push(u.em("indicators","labels")),a.indicatorPosition==="outside"&&k.push(u.em("indicators","outside")),e(M)&&k.push(u.em("indicators","right")),k});return b({setActiveItem:A,prev:D,next:p}),(k,I)=>(o(),v("div",{ref_key:"root",ref:C,class:H(e(B)),onMouseenter:I[6]||(I[6]=Y((...N)=>e(w)&&e(w)(...N),["stop"])),onMouseleave:I[7]||(I[7]=Y((...N)=>e(T)&&e(T)(...N),["stop"]))},[s("div",{class:H(e(u).e("container")),style:Ce(e(P))},[e(c)?(o(),F(he,{key:0,name:"carousel-arrow-left",persisted:""},{default:E(()=>[ee(s("button",{type:"button",class:H([e(u).e("arrow"),e(u).em("arrow","left")]),onMouseenter:I[0]||(I[0]=N=>e(L)("left")),onMouseleave:I[1]||(I[1]=(...N)=>e(l)&&e(l)(...N)),onClick:I[2]||(I[2]=Y(N=>e(d)(e(r)-1),["stop"]))},[h(e(ce),null,{default:E(()=>[h(e(We))]),_:1})],34),[[te,(k.arrow==="always"||e(m))&&(a.loop||e(r)>0)]])]),_:1})):z("v-if",!0),e(c)?(o(),F(he,{key:1,name:"carousel-arrow-right",persisted:""},{default:E(()=>[ee(s("button",{type:"button",class:H([e(u).e("arrow"),e(u).em("arrow","right")]),onMouseenter:I[3]||(I[3]=N=>e(L)("right")),onMouseleave:I[4]||(I[4]=(...N)=>e(l)&&e(l)(...N)),onClick:I[5]||(I[5]=Y(N=>e(d)(e(r)+1),["stop"]))},[h(e(ce),null,{default:E(()=>[h(e(Fe))]),_:1})],34),[[te,(k.arrow==="always"||e(m))&&(a.loop||e(r)<e(_).length-1)]])]),_:1})):z("v-if",!0),se(k.$slots,"default")],6),k.indicatorPosition!=="none"?(o(),v("ul",{key:0,class:H(e(U))},[(o(!0),v(j,null,O(e(_),(N,q)=>(o(),v("li",{key:q,class:H([e(u).e("indicator"),e(u).em("indicator",k.direction),e(u).is("active",q===e(r))]),onMouseenter:ie=>e($)(q),onClick:Y(ie=>e(g)(q),["stop"])},[s("button",{class:H(e(u).e("button"))},[e(f)?(o(),v("span",vt,V(N.props.label),1)):z("v-if",!0)],2)],42,dt))),128))],2)):z("v-if",!0)],34))}});var _t=oe(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const ht=le({name:{type:String,default:""},label:{type:[String,Number],default:""}}),gt=(t,b)=>{const n=de($e),a=be(),C=.83,r=S(),c=S(!1),f=S(0),m=S(1),y=S(!1),_=S(!1),M=S(!1),P=S(!1),{isCardType:L,isVertical:l}=n;function g(p,d,$){const u=$-1,B=d-1,U=d+1,k=$/2;return d===0&&p===u?-1:d===u&&p===0?$:p<B&&d-p>=k?$+1:p>U&&p-d>=k?-2:p}function w(p,d){var $,u;const B=e(l)?(($=n.root.value)==null?void 0:$.offsetHeight)||0:((u=n.root.value)==null?void 0:u.offsetWidth)||0;return M.value?B*((2-C)*(p-d)+1)/4:p<d?-(1+C)*B/4:(3+C)*B/4}function T(p,d,$){const u=n.root.value;return u?(($?u.offsetHeight:u.offsetWidth)||0)*(p-d):0}const A=(p,d,$)=>{var u;const B=e(L),U=(u=n.items.value.length)!=null?u:Number.NaN,k=p===d;!B&&!Ge($)&&(P.value=k||p===$),!k&&U>2&&n.loop&&(p=g(p,d,U));const I=e(l);y.value=k,B?(M.value=Math.round(Math.abs(p-d))<=1,f.value=w(p,d),m.value=e(y)?1:C):f.value=T(p,d,I),_.value=!0,k&&r.value&&n.setContainerHeight(r.value.offsetHeight)};function D(){if(n&&e(L)){const p=n.items.value.findIndex(({uid:d})=>d===a.uid);n.setActiveItem(p)}}return ue(()=>{n.addItem({props:t,states:Ke({hover:c,translate:f,scale:m,active:y,ready:_,inStage:M,animating:P}),uid:a.uid,translateItem:A})}),qe(()=>{n.removeItem(a.uid)}),{carouselItemRef:r,active:y,animating:P,hover:c,inStage:M,isVertical:l,translate:f,isCardType:L,scale:m,ready:_,handleItemClick:D}},yt=K({name:"ElCarouselItem"}),kt=K({...yt,props:ht,setup(t){const b=t,n=ne("carousel"),{carouselItemRef:a,active:C,animating:r,hover:c,inStage:f,isVertical:m,translate:y,isCardType:_,scale:M,ready:P,handleItemClick:L}=gt(b),l=W(()=>{const w=`${`translate${e(m)?"Y":"X"}`}(${e(y)}px)`,T=`scale(${e(M)})`;return{transform:[w,T].join(" ")}});return(g,w)=>ee((o(),v("div",{ref_key:"carouselItemRef",ref:a,class:H([e(n).e("item"),e(n).is("active",e(C)),e(n).is("in-stage",e(f)),e(n).is("hover",e(c)),e(n).is("animating",e(r)),{[e(n).em("item","card")]:e(_),[e(n).em("item","card-vertical")]:e(_)&&e(m)}]),style:Ce(e(l)),onClick:w[0]||(w[0]=(...T)=>e(L)&&e(L)(...T))},[e(_)?ee((o(),v("div",{key:0,class:H(e(n).e("mask"))},null,2)),[[te,!e(C)]]):z("v-if",!0),se(g.$slots,"default")],6)),[[te,e(P)]])}});var Se=oe(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const bt=we(_t,{CarouselItem:Se}),Ct=Ie(Se),wt=le({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),It=le({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),$t=K({name:"ElSkeletonItem"}),St=K({...$t,props:It,setup(t){const b=ne("skeleton");return(n,a)=>(o(),v("div",{class:H([e(b).e("item"),e(b).e(n.variant)])},[n.variant==="image"?(o(),F(e(Qe),{key:0})):z("v-if",!0)],2))}});var ae=oe(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const xt=K({name:"ElSkeleton"}),Mt=K({...xt,props:wt,setup(t,{expose:b}){const n=t,a=ne("skeleton"),C=it(Xe(n,"loading"),n.throttle);return b({uiLoading:C}),(r,c)=>e(C)?(o(),v("div",ge({key:0,class:[e(a).b(),e(a).is("animated",r.animated)]},r.$attrs),[(o(!0),v(j,null,O(r.count,f=>(o(),v(j,{key:f},[r.loading?se(r.$slots,"template",{key:f},()=>[h(ae,{class:H(e(a).is("first")),variant:"p"},null,8,["class"]),(o(!0),v(j,null,O(r.rows,m=>(o(),F(ae,{key:m,class:H([e(a).e("paragraph"),e(a).is("last",m===r.rows&&r.rows>1)]),variant:"p"},null,8,["class"]))),128))]):z("v-if",!0)],64))),128))],16)):se(r.$slots,"default",Ye(ge({key:1},r.$attrs)))}});var Lt=oe(Mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const xe=we(Lt,{SkeletonItem:ae}),Me=Ie(ae);const Le=t=>(Je("data-v-812feae1"),t=t(),et(),t),Nt={class:"tab-list flex a-c"},Et={class:"list-title"},Tt=["onClick"],Pt={class:"flex j-b"},At=["onClick"],Bt=["src"],jt={class:"music-title text-2 font-100"},Ht={key:0,style:{padding:"2px 0px 10px 0px"}},Vt={class:"music-position flex a-c"},Ot=Le(()=>s("img",{src:"https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/headset.png"},null,-1)),zt=Le(()=>s("div",null,"/",-1)),Rt={class:"flex j-b",style:{"padding-bottom":"10px"}},Dt={style:{"margin-top":"10px"}},Ut={style:{"margin-top":"10px"}},Wt={class:"flex j-b",style:{"flex-wrap":"wrap"}},Ft=["onClick"],Kt={class:"dish-img"},qt=["src"],Gt={class:"dish-right"},Qt={class:"dish-title text-2 font-100"},Xt={class:"dish-info font-100"},Yt={class:"flex j-b",style:{"flex-wrap":"wrap"}},Zt={style:{width:"25%",padding:"0px 10px 10px 0px"}},Jt={class:"flex j-b",style:{"flex-wrap":"wrap"}},es=["onClick"],ts={class:"mv-video"},ss={class:"v-icon"},as={class:"text-1 font-100 f-14"},ls={class:"font-100 f-14 f-c"},ns={class:"font-100 f-14 f-c"},os={class:"flex j-b",style:{"flex-wrap":"wrap"}},is={style:{width:"20%",padding:"0px 10px 10px 0px"}},rs={style:{"margin-top":"4px"}},cs={style:{"margin-top":"4px"}},us={style:{"margin-top":"4px"}},ds={__name:"my-tab",props:{list:{type:Object,default:()=>{}},skLoading:{type:Boolean,default:!0},tdata:{type:Array,default:()=>[]},Mtype:{type:Number,default:1}},emits:["myClick"],setup(t,{emit:b}){let n=S("0"),a=de("$vm");const C=(m,y)=>{b("myClick",m.value,y),n.value=y},r=m=>{a.MsgSuccess("待开发")},c=m=>{a.MsgSuccess("待开发")},f=m=>{a.MsgSuccess("待开发")};return(m,y)=>{const _=Me,M=xe,P=ce,L=nt;return o(),v("div",null,[s("div",Nt,[s("div",Et,V(t.list.title),1),(o(!0),v(j,null,O(t.list.children,(l,g)=>(o(),v("div",{class:H(e(n)==g?"list-label active":"list-label"),onClick:w=>C(l,g)},V(l.label),11,Tt))),256))]),t.Mtype==1?(o(),F(M,{key:0,loading:t.skLoading,animated:!0},{default:E(()=>[s("div",Pt,[(o(!0),v(j,null,O(t.tdata,(l,g)=>(o(),v("div",{key:g,class:"music-box",onClick:w=>r(l)},[s("img",{class:"music-img border-r-8",src:l.coverImgUrl},null,8,Bt),s("div",jt,V(l.name),1),l.tags?(o(),v("div",Ht,[(o(!0),v(j,null,O(l.tags,(w,T)=>(o(),v("span",{class:"music-tag font-100",key:T},"#"+V(w),1))),128))])):z("",!0),s("div",Vt,[Ot,s("div",null,V(m.formartNum(l.playCount)),1),zt,s("div",null,V(l.trackCount)+"首",1)])],8,At))),128))])]),template:E(()=>[s("div",Rt,[(o(),v(j,null,O(6,l=>s("div",null,[s("div",null,[h(_,{variant:"p",style:{width:"220px",height:"220px"}})]),s("div",Dt,[h(_,{variant:"p",style:{width:"220px",height:"16px"}})]),s("div",Ut,[h(_,{variant:"p",style:{width:"60px",height:"16px"}})])])),64))])]),_:1},8,["loading"])):z("",!0),t.Mtype==2?(o(),F(M,{key:1,loading:t.skLoading,animated:!0},{default:E(()=>[s("div",Wt,[(o(!0),v(j,null,O(t.tdata.slice(0,12),(l,g)=>(o(),v("div",{key:g,class:"dish-box flex j-b border-r-8",onClick:w=>c(l)},[s("div",Kt,[s("img",{src:l.blurPicUrl},null,8,qt)]),s("div",Gt,[s("div",Qt,V(l.name),1),s("div",Xt,V(l.artist.name),1)])],8,Ft))),128))])]),template:E(()=>[s("div",Yt,[(o(),v(j,null,O(12,l=>s("div",Zt,[s("div",null,[h(_,{variant:"p",style:{width:"100%",height:"120px"}})])])),64))])]),_:1},8,["loading"])):z("",!0),t.Mtype==3?(o(),F(M,{key:2,loading:t.skLoading,animated:!0},{default:E(()=>[s("div",Jt,[(o(!0),v(j,null,O(t.tdata,(l,g)=>(o(),v("div",{key:g,class:"mv-box",onClick:w=>f(l)},[s("div",ts,[s("div",ss,[h(P,{size:"48"},{default:E(()=>[h(e(Ze))]),_:1})]),h(L,{style:{width:"92%",height:"92%"},src:l.cover},null,8,["src"])]),s("div",as,V(l.name),1),s("div",ls,V(l.artistName),1),s("div",ns,V(m.formartNum(l.playCount)),1)],8,es))),128))])]),template:E(()=>[s("div",os,[(o(),v(j,null,O(10,l=>s("div",is,[s("div",null,[h(_,{variant:"p",style:{width:"100%",height:"120px"}})]),s("div",rs,[h(_,{variant:"p",style:{width:"100%",height:"16px"}})]),s("div",cs,[h(_,{variant:"p",style:{width:"50%",height:"16px"}})]),s("div",us,[h(_,{variant:"p",style:{width:"10%",height:"16px"}})])])),64))])]),_:1},8,["loading"])):z("",!0)])}}},vs=ve(ds,[["__scopeId","data-v-812feae1"]]);const ms=["src"],fs={__name:"my-swiper",props:{list:{type:Array,default:()=>{}},vloading:{type:Boolean,default:!0}},setup(t){let b=de("$vm");const n=a=>{b.MsgSuccess("待开发")};return(a,C)=>{const r=Ct,c=bt,f=Me,m=xe;return o(),v("div",null,[h(m,{loading:t.vloading,animated:!0},{default:E(()=>[h(c,{interval:3e3,type:"card",height:"200px"},{default:E(()=>[(o(!0),v(j,null,O(t.list,y=>(o(),F(r,{key:y,onClick:_=>n(y)},{default:E(()=>[s("img",{class:"swiper-img",src:y.imageUrl},null,8,ms)]),_:2},1032,["onClick"]))),128))]),_:1})]),template:E(()=>[h(f,{variant:"p",style:{width:"27%",height:"200px"}}),h(f,{variant:"p",style:{width:"46%",height:"200px"}}),h(f,{variant:"p",style:{width:"27%",height:"200px"}})]),_:1},8,["loading"])])}}},ps=ve(fs,[["__scopeId","data-v-982fbc01"]]),_s=S({title:"热门推荐",children:[{label:"推荐",value:""},{label:"华语",value:"华语"},{label:"流行",value:"流行"},{label:"摇滚",value:"摇滚"},{label:"民谣",value:"民谣"},{label:"电子",value:"电子"}]}),hs=S({title:"新碟上架",children:[{label:"全部",value:""},{label:"华语",value:"zh"},{label:"欧美",value:"ea"},{label:"韩国",value:"kr"},{label:"日本",value:"jp"}]}),gs=S({title:"最新MV",children:[{label:"全部",value:""},{label:"内地",value:"内地"},{label:"港台",value:"港台"},{label:"欧美",value:"欧美"},{label:"日本",value:"日本"},{label:"韩国",value:"韩国"}]});const ys={class:"recommend"},ks={class:"recom-list"},bs={class:"recommend"},Cs={class:"recom-list"},ws={class:"recommend"},Is={class:"recom-list"},$s={__name:"index",setup(t){const b=(g,w)=>{m("cat",g)},n=(g,w)=>{M("area",g)},a=(g,w)=>{l("area",g)};let{list:C,loading:r}=J(tt,{},"banners"),{list:c,loading:f,editParams:m}=J(st,{limit:6,order:"hot",cat:"",offset:0},"playlists"),{list:y,loading:_,editParams:M}=J(at,{limit:12,offset:0,area:"",type:"new",year:"",month:""},"monthData"),{list:P,loading:L,editParams:l}=J(lt,{limit:10,offset:0,area:"",type:"",order:""},"data");return(g,w)=>{const T=ps,A=vs;return o(),v("div",null,[s("div",null,[h(T,{list:e(C),vloading:e(r)},null,8,["list","vloading"])]),s("div",ys,[s("div",ks,[h(A,{list:e(_s),skLoading:e(f),tdata:e(c),Mtype:1,onMyClick:b},null,8,["list","skLoading","tdata"])])]),s("div",bs,[s("div",Cs,[h(A,{list:e(hs),skLoading:e(_),tdata:e(y),Mtype:2,onMyClick:n},null,8,["list","skLoading","tdata"])])]),s("div",ws,[s("div",Is,[h(A,{list:e(gs),skLoading:e(L),tdata:e(P),Mtype:3,onMyClick:a},null,8,["list","skLoading","tdata"])])])])}}},Ns=ve($s,[["__scopeId","data-v-645284eb"]]);export{Ns as default};
