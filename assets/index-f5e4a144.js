import{h as x,j as ue,s as Q,l as le,a1 as je,c as W,e,a2 as Ve,a3 as ze,k as Oe,p as Re,O as be,a4 as De,d as K,a as ne,o,b as v,Q as s,y as F,z as N,a5 as ee,n as j,S as Z,A as m,H as ce,a6 as Ue,a7 as te,a8 as he,N as O,a9 as We,r as se,f as Ce,T as H,$ as z,Z as V,_ as oe,i as de,aa as Fe,ab as Ke,ac as Ge,w as we,g as Ie,ad as Qe,t as Xe,M as ge,B as Ye,W as ve,ae as Ze,af as qe,ag as Je,ah as et,ai as tt,aj as st,ak as at,al as lt}from"./index-902dfc4b.js";import{t as ye,E as nt}from"./el-image-viewer-c1f94e8f.js";/* empty css                */import{u as ot,a as J}from"./index-55ecdbbc.js";const it=(t,k=0)=>{if(k===0)return t;const n=x(!1);let a=0;const b=()=>{a&&clearTimeout(a),a=window.setTimeout(()=>{n.value=t.value},k)};return ue(b),Q(()=>t.value,r=>{r?b():n.value=r}),n},rt=le({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),ct={change:(t,k)=>[t,k].every(je)},$e=Symbol("carouselContextKey"),ke=300,ut=(t,k,n)=>{const{children:a,addChild:b,removeChild:r}=ot(be(),"ElCarouselItem"),c=x(-1),p=x(null),f=x(!1),g=x(),$=x(0),C=W(()=>t.arrow!=="never"&&!e(l)),E=W(()=>a.value.some(i=>i.props.label.toString().length>0)),L=W(()=>t.type==="card"),l=W(()=>t.direction==="vertical"),h=W(()=>t.height!=="auto"?{height:t.height}:{height:`${$.value}px`,overflow:"hidden"}),w=ye(i=>{d(i)},ke,{trailing:!0}),P=ye(i=>{G(i)},ke);function A(){p.value&&(clearInterval(p.value),p.value=null)}function D(){t.interval<=0||!t.autoplay||p.value||(p.value=setInterval(()=>_(),t.interval))}const _=()=>{c.value<a.value.length-1?c.value=c.value+1:t.loop&&(c.value=0)};function d(i){if(De(i)){const X=a.value.filter(q=>q.props.name===i);X.length>0&&(i=a.value.indexOf(X[0]))}if(i=Number(i),Number.isNaN(i)||i!==Math.floor(i))return;const M=a.value.length,R=c.value;i<0?c.value=t.loop?M-1:0:i>=M?c.value=t.loop?0:M-1:c.value=i,R===c.value&&S(R),fe()}function S(i){a.value.forEach((M,R)=>{M.translateItem(R,c.value,i)})}function u(i,M){var R,X,q,me;const Y=e(a),pe=Y.length;if(pe===0||!i.states.inStage)return!1;const Ee=M+1,Te=M-1,_e=pe-1,Pe=Y[_e].states.active,Ae=Y[0].states.active,Be=(X=(R=Y[Ee])==null?void 0:R.states)==null?void 0:X.active,He=(me=(q=Y[Te])==null?void 0:q.states)==null?void 0:me.active;return M===_e&&Ae||Be?"left":M===0&&Pe||He?"right":!1}function B(){f.value=!0,t.pauseOnHover&&A()}function U(){f.value=!1,D()}function y(i){e(l)||a.value.forEach((M,R)=>{i===u(M,R)&&(M.states.hover=!0)})}function I(){e(l)||a.value.forEach(i=>{i.states.hover=!1})}function T(i){c.value=i}function G(i){t.trigger==="hover"&&i!==c.value&&(c.value=i)}function ie(){d(c.value-1)}function Le(){d(c.value+1)}function fe(){A(),D()}function Ne(i){t.height==="auto"&&($.value=i)}Q(()=>c.value,(i,M)=>{S(M),M>-1&&k("change",i,M)}),Q(()=>t.autoplay,i=>{i?D():A()}),Q(()=>t.loop,()=>{d(c.value)}),Q(()=>t.interval,()=>{fe()}),Q(()=>a.value,()=>{a.value.length>0&&d(t.initialIndex)});const re=Ve();return ue(()=>{re.value=ze(g.value,()=>{S()}),D()}),Oe(()=>{A(),g.value&&re.value&&re.value.stop()}),Re($e,{root:g,isCardType:L,isVertical:l,items:a,loop:t.loop,addItem:b,removeItem:r,setActiveItem:d,setContainerHeight:Ne}),{root:g,activeIndex:c,arrowDisplay:C,hasLabel:E,hover:f,isCardType:L,items:a,isVertical:l,containerStyle:h,handleButtonEnter:y,handleButtonLeave:I,handleIndicatorClick:T,handleMouseEnter:B,handleMouseLeave:U,setActiveItem:d,prev:ie,next:Le,throttledArrowClick:w,throttledIndicatorHover:P}},dt=["onMouseenter","onClick"],vt={key:0},ft="ElCarousel",mt=K({name:ft}),pt=K({...mt,props:rt,emits:ct,setup(t,{expose:k,emit:n}){const a=t,{root:b,activeIndex:r,arrowDisplay:c,hasLabel:p,hover:f,isCardType:g,items:$,isVertical:C,containerStyle:E,handleButtonEnter:L,handleButtonLeave:l,handleIndicatorClick:h,handleMouseEnter:w,handleMouseLeave:P,setActiveItem:A,prev:D,next:_,throttledArrowClick:d,throttledIndicatorHover:S}=ut(a,n),u=ne("carousel"),B=W(()=>{const y=[u.b(),u.m(a.direction)];return e(g)&&y.push(u.m("card")),y}),U=W(()=>{const y=[u.e("indicators"),u.em("indicators",a.direction)];return e(p)&&y.push(u.em("indicators","labels")),a.indicatorPosition==="outside"&&y.push(u.em("indicators","outside")),e(C)&&y.push(u.em("indicators","right")),y});return k({setActiveItem:A,prev:D,next:_}),(y,I)=>(o(),v("div",{ref_key:"root",ref:b,class:j(e(B)),onMouseenter:I[6]||(I[6]=Z((...T)=>e(w)&&e(w)(...T),["stop"])),onMouseleave:I[7]||(I[7]=Z((...T)=>e(P)&&e(P)(...T),["stop"]))},[s("div",{class:j(e(u).e("container")),style:Ce(e(E))},[e(c)?(o(),F(he,{key:0,name:"carousel-arrow-left",persisted:""},{default:N(()=>[ee(s("button",{type:"button",class:j([e(u).e("arrow"),e(u).em("arrow","left")]),onMouseenter:I[0]||(I[0]=T=>e(L)("left")),onMouseleave:I[1]||(I[1]=(...T)=>e(l)&&e(l)(...T)),onClick:I[2]||(I[2]=Z(T=>e(d)(e(r)-1),["stop"]))},[m(e(ce),null,{default:N(()=>[m(e(Ue))]),_:1})],34),[[te,(y.arrow==="always"||e(f))&&(a.loop||e(r)>0)]])]),_:1})):O("v-if",!0),e(c)?(o(),F(he,{key:1,name:"carousel-arrow-right",persisted:""},{default:N(()=>[ee(s("button",{type:"button",class:j([e(u).e("arrow"),e(u).em("arrow","right")]),onMouseenter:I[3]||(I[3]=T=>e(L)("right")),onMouseleave:I[4]||(I[4]=(...T)=>e(l)&&e(l)(...T)),onClick:I[5]||(I[5]=Z(T=>e(d)(e(r)+1),["stop"]))},[m(e(ce),null,{default:N(()=>[m(e(We))]),_:1})],34),[[te,(y.arrow==="always"||e(f))&&(a.loop||e(r)<e($).length-1)]])]),_:1})):O("v-if",!0),se(y.$slots,"default")],6),y.indicatorPosition!=="none"?(o(),v("ul",{key:0,class:j(e(U))},[(o(!0),v(H,null,z(e($),(T,G)=>(o(),v("li",{key:G,class:j([e(u).e("indicator"),e(u).em("indicator",y.direction),e(u).is("active",G===e(r))]),onMouseenter:ie=>e(S)(G),onClick:Z(ie=>e(h)(G),["stop"])},[s("button",{class:j(e(u).e("button"))},[e(p)?(o(),v("span",vt,V(T.props.label),1)):O("v-if",!0)],2)],42,dt))),128))],2)):O("v-if",!0)],34))}});var _t=oe(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const ht=le({name:{type:String,default:""},label:{type:[String,Number],default:""}}),gt=(t,k)=>{const n=de($e),a=be(),b=.83,r=x(),c=x(!1),p=x(0),f=x(1),g=x(!1),$=x(!1),C=x(!1),E=x(!1),{isCardType:L,isVertical:l}=n;function h(_,d,S){const u=S-1,B=d-1,U=d+1,y=S/2;return d===0&&_===u?-1:d===u&&_===0?S:_<B&&d-_>=y?S+1:_>U&&_-d>=y?-2:_}function w(_,d){var S,u;const B=e(l)?((S=n.root.value)==null?void 0:S.offsetHeight)||0:((u=n.root.value)==null?void 0:u.offsetWidth)||0;return C.value?B*((2-b)*(_-d)+1)/4:_<d?-(1+b)*B/4:(3+b)*B/4}function P(_,d,S){const u=n.root.value;return u?((S?u.offsetHeight:u.offsetWidth)||0)*(_-d):0}const A=(_,d,S)=>{var u;const B=e(L),U=(u=n.items.value.length)!=null?u:Number.NaN,y=_===d;!B&&!Ge(S)&&(E.value=y||_===S),!y&&U>2&&n.loop&&(_=h(_,d,U));const I=e(l);g.value=y,B?(C.value=Math.round(Math.abs(_-d))<=1,p.value=w(_,d),f.value=e(g)?1:b):p.value=P(_,d,I),$.value=!0,y&&r.value&&n.setContainerHeight(r.value.offsetHeight)};function D(){if(n&&e(L)){const _=n.items.value.findIndex(({uid:d})=>d===a.uid);n.setActiveItem(_)}}return ue(()=>{n.addItem({props:t,states:Fe({hover:c,translate:p,scale:f,active:g,ready:$,inStage:C,animating:E}),uid:a.uid,translateItem:A})}),Ke(()=>{n.removeItem(a.uid)}),{carouselItemRef:r,active:g,animating:E,hover:c,inStage:C,isVertical:l,translate:p,isCardType:L,scale:f,ready:$,handleItemClick:D}},yt=K({name:"ElCarouselItem"}),kt=K({...yt,props:ht,setup(t){const k=t,n=ne("carousel"),{carouselItemRef:a,active:b,animating:r,hover:c,inStage:p,isVertical:f,translate:g,isCardType:$,scale:C,ready:E,handleItemClick:L}=gt(k),l=W(()=>{const w=`${`translate${e(f)?"Y":"X"}`}(${e(g)}px)`,P=`scale(${e(C)})`;return{transform:[w,P].join(" ")}});return(h,w)=>ee((o(),v("div",{ref_key:"carouselItemRef",ref:a,class:j([e(n).e("item"),e(n).is("active",e(b)),e(n).is("in-stage",e(p)),e(n).is("hover",e(c)),e(n).is("animating",e(r)),{[e(n).em("item","card")]:e($),[e(n).em("item","card-vertical")]:e($)&&e(f)}]),style:Ce(e(l)),onClick:w[0]||(w[0]=(...P)=>e(L)&&e(L)(...P))},[e($)?ee((o(),v("div",{key:0,class:j(e(n).e("mask"))},null,2)),[[te,!e(b)]]):O("v-if",!0),se(h.$slots,"default")],6)),[[te,e(E)]])}});var Se=oe(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const bt=we(_t,{CarouselItem:Se}),Ct=Ie(Se),wt=le({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),It=le({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),$t=K({name:"ElSkeletonItem"}),St=K({...$t,props:It,setup(t){const k=ne("skeleton");return(n,a)=>(o(),v("div",{class:j([e(k).e("item"),e(k).e(n.variant)])},[n.variant==="image"?(o(),F(e(Qe),{key:0})):O("v-if",!0)],2))}});var ae=oe(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const xt=K({name:"ElSkeleton"}),Mt=K({...xt,props:wt,setup(t,{expose:k}){const n=t,a=ne("skeleton"),b=it(Xe(n,"loading"),n.throttle);return k({uiLoading:b}),(r,c)=>e(b)?(o(),v("div",ge({key:0,class:[e(a).b(),e(a).is("animated",r.animated)]},r.$attrs),[(o(!0),v(H,null,z(r.count,p=>(o(),v(H,{key:p},[r.loading?se(r.$slots,"template",{key:p},()=>[m(ae,{class:j(e(a).is("first")),variant:"p"},null,8,["class"]),(o(!0),v(H,null,z(r.rows,f=>(o(),F(ae,{key:f,class:j([e(a).e("paragraph"),e(a).is("last",f===r.rows&&r.rows>1)]),variant:"p"},null,8,["class"]))),128))]):O("v-if",!0)],64))),128))],16)):se(r.$slots,"default",Ye(ge({key:1},r.$attrs)))}});var Lt=oe(Mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const xe=we(Lt,{SkeletonItem:ae}),Me=Ie(ae);const Nt=t=>(Je("data-v-5642d36f"),t=t(),et(),t),Et={class:"tab-list flex a-c"},Tt={class:"list-title"},Pt=["onClick"],At={class:"flex j-b"},Bt=["onClick"],Ht=["src"],jt={class:"music-title text-2 font-100"},Vt={key:0,style:{padding:"2px 0px 10px 0px"}},zt={class:"music-position flex a-c"},Ot={class:"flex a-c"},Rt=Nt(()=>s("div",null,"/",-1)),Dt={class:"flex j-b",style:{"padding-bottom":"10px"}},Ut={style:{"margin-top":"10px"}},Wt={style:{"margin-top":"10px"}},Ft={class:"flex j-b",style:{"flex-wrap":"wrap"}},Kt=["onClick"],Gt={class:"dish-img"},Qt=["src"],Xt={class:"dish-right"},Yt={class:"dish-title text-2 font-100"},Zt={class:"dish-info font-100"},qt={class:"flex j-b",style:{"flex-wrap":"wrap"}},Jt={style:{width:"25%",padding:"0px 10px 10px 0px"}},es={class:"flex j-b",style:{"flex-wrap":"wrap"}},ts=["onClick"],ss={class:"mv-video"},as={class:"v-icon"},ls={class:"text-1 font-100 f-14"},ns={class:"font-100 f-14 f-c"},os={class:"font-100 f-14 f-c"},is={class:"flex j-b",style:{"flex-wrap":"wrap"}},rs={style:{width:"20%",padding:"0px 10px 10px 0px"}},cs={style:{"margin-top":"4px"}},us={style:{"margin-top":"4px"}},ds={style:{"margin-top":"4px"}},vs={__name:"my-tab",props:{list:{type:Object,default:()=>{}},skLoading:{type:Boolean,default:!0},tdata:{type:Array,default:()=>[]},Mtype:{type:Number,default:1}},emits:["myClick"],setup(t,{emit:k}){let n=x("0");const a=de("$vm"),b=(f,g)=>{k("myClick",f.value,g),n.value=g},r=f=>{a.MsgSuccess("待开发")},c=f=>{a.MsgSuccess("待开发")},p=f=>{a.MsgSuccess("待开发")};return(f,g)=>{const $=ce,C=Me,E=xe,L=nt;return o(),v("div",null,[s("div",Et,[s("div",Tt,V(t.list.title),1),(o(!0),v(H,null,z(t.list.children,(l,h)=>(o(),v("div",{class:j(e(n)==h?"list-label active":"list-label"),onClick:w=>b(l,h)},V(l.label),11,Pt))),256))]),t.Mtype==1?(o(),F(E,{key:0,loading:t.skLoading,animated:!0},{default:N(()=>[s("div",At,[(o(!0),v(H,null,z(t.tdata,(l,h)=>(o(),v("div",{key:h,class:"music-box",onClick:w=>r(l)},[s("img",{class:"music-img border-r-8",src:l.coverImgUrl},null,8,Ht),s("div",jt,V(l.name),1),l.tags?(o(),v("div",Vt,[(o(!0),v(H,null,z(l.tags,(w,P)=>(o(),v("span",{class:"music-tag font-100",key:P},"#"+V(w),1))),128))])):O("",!0),s("div",zt,[s("div",Ot,[m($,{size:"16"},{default:N(()=>[m(e(Ze))]),_:1})]),s("div",null,V(f.formartNum(l.playCount)),1),Rt,s("div",null,V(l.trackCount)+"首",1)])],8,Bt))),128))])]),template:N(()=>[s("div",Dt,[(o(),v(H,null,z(6,l=>s("div",null,[s("div",null,[m(C,{variant:"p",style:{width:"220px",height:"220px"}})]),s("div",Ut,[m(C,{variant:"p",style:{width:"220px",height:"16px"}})]),s("div",Wt,[m(C,{variant:"p",style:{width:"60px",height:"16px"}})])])),64))])]),_:1},8,["loading"])):O("",!0),t.Mtype==2?(o(),F(E,{key:1,loading:t.skLoading,animated:!0},{default:N(()=>[s("div",Ft,[(o(!0),v(H,null,z(t.tdata.slice(0,12),(l,h)=>(o(),v("div",{key:h,class:"dish-box flex j-b border-r-8",onClick:w=>c(l)},[s("div",Gt,[s("img",{src:l.blurPicUrl},null,8,Qt)]),s("div",Xt,[s("div",Yt,V(l.name),1),s("div",Zt,V(l.artist.name),1)])],8,Kt))),128))])]),template:N(()=>[s("div",qt,[(o(),v(H,null,z(12,l=>s("div",Jt,[s("div",null,[m(C,{variant:"p",style:{width:"100%",height:"120px"}})])])),64))])]),_:1},8,["loading"])):O("",!0),t.Mtype==3?(o(),F(E,{key:2,loading:t.skLoading,animated:!0},{default:N(()=>[s("div",es,[(o(!0),v(H,null,z(t.tdata,(l,h)=>(o(),v("div",{key:h,class:"mv-box",onClick:w=>p(l)},[s("div",ss,[s("div",as,[m($,{size:"48"},{default:N(()=>[m(e(qe))]),_:1})]),m(L,{style:{width:"92%",height:"92%"},src:l.cover},null,8,["src"])]),s("div",ls,V(l.name),1),s("div",ns,V(l.artistName),1),s("div",os,V(f.formartNum(l.playCount)),1)],8,ts))),128))])]),template:N(()=>[s("div",is,[(o(),v(H,null,z(10,l=>s("div",rs,[s("div",null,[m(C,{variant:"p",style:{width:"100%",height:"120px"}})]),s("div",cs,[m(C,{variant:"p",style:{width:"100%",height:"16px"}})]),s("div",us,[m(C,{variant:"p",style:{width:"50%",height:"16px"}})]),s("div",ds,[m(C,{variant:"p",style:{width:"10%",height:"16px"}})])])),64))])]),_:1},8,["loading"])):O("",!0)])}}},fs=ve(vs,[["__scopeId","data-v-5642d36f"]]);const ms=["src"],ps={__name:"my-swiper",props:{list:{type:Array,default:()=>{}},vloading:{type:Boolean,default:!0}},setup(t){const k=de("$vm"),n=a=>{k.MsgSuccess("待开发")};return(a,b)=>{const r=Ct,c=bt,p=Me,f=xe;return o(),v("div",null,[m(f,{loading:t.vloading,animated:!0},{default:N(()=>[m(c,{interval:3e3,type:"card",height:"200px"},{default:N(()=>[(o(!0),v(H,null,z(t.list,g=>(o(),F(r,{key:g,onClick:$=>n(g)},{default:N(()=>[s("img",{class:"swiper-img",src:g.imageUrl},null,8,ms)]),_:2},1032,["onClick"]))),128))]),_:1})]),template:N(()=>[m(p,{variant:"p",style:{width:"27%",height:"200px"}}),m(p,{variant:"p",style:{width:"46%",height:"200px"}}),m(p,{variant:"p",style:{width:"27%",height:"200px"}})]),_:1},8,["loading"])])}}},_s=ve(ps,[["__scopeId","data-v-2dfef72d"]]),hs=x({title:"热门推荐",children:[{label:"推荐",value:""},{label:"华语",value:"华语"},{label:"流行",value:"流行"},{label:"摇滚",value:"摇滚"},{label:"民谣",value:"民谣"},{label:"电子",value:"电子"}]}),gs=x({title:"新碟上架",children:[{label:"全部",value:""},{label:"华语",value:"zh"},{label:"欧美",value:"ea"},{label:"韩国",value:"kr"},{label:"日本",value:"jp"}]}),ys=x({title:"最新MV",children:[{label:"全部",value:""},{label:"内地",value:"内地"},{label:"港台",value:"港台"},{label:"欧美",value:"欧美"},{label:"日本",value:"日本"},{label:"韩国",value:"韩国"}]});const ks={class:"recommend"},bs={class:"recom-list"},Cs={class:"recommend"},ws={class:"recom-list"},Is={class:"recommend"},$s={class:"recom-list"},Ss={__name:"index",setup(t){const k=(h,w)=>{f("cat",h)},n=(h,w)=>{C("area",h)},a=(h,w)=>{l("area",h)},{list:b,loading:r}=J(tt,{},"banners"),{list:c,loading:p,editParams:f}=J(st,{limit:6,order:"hot",cat:"",offset:0},"playlists"),{list:g,loading:$,editParams:C}=J(at,{limit:12,offset:0,area:"",type:"new",year:"",month:""},"monthData"),{list:E,loading:L,editParams:l}=J(lt,{limit:10,offset:0,area:"",type:"",order:""},"data");return(h,w)=>{const P=_s,A=fs;return o(),v("div",null,[s("div",null,[m(P,{list:e(b),vloading:e(r)},null,8,["list","vloading"])]),s("div",ks,[s("div",bs,[m(A,{list:e(hs),skLoading:e(p),tdata:e(c),Mtype:1,onMyClick:k},null,8,["list","skLoading","tdata"])])]),s("div",Cs,[s("div",ws,[m(A,{list:e(gs),skLoading:e($),tdata:e(g),Mtype:2,onMyClick:n},null,8,["list","skLoading","tdata"])])]),s("div",Is,[s("div",$s,[m(A,{list:e(ys),skLoading:e(L),tdata:e(E),Mtype:3,onMyClick:a},null,8,["list","skLoading","tdata"])])])])}}},Es=ve(Ss,[["__scopeId","data-v-98496ef6"]]);export{Es as default};
