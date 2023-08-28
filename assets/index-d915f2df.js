import{ak as je,al as Z,am as ze,s as g,o as ce,w as X,an as Ce,ao as Ue,I as se,ap as De,n as U,u as e,aq as Fe,c as Ke,v as Xe,z as qe,p as we,t as F,f as le,B as m,C as y,P as p,S as D,R as O,a1 as ee,D as R,ar as Q,K as C,U as he,as as Ge,a4 as te,a5 as _e,V as W,at as Qe,x as ae,F as $e,af as V,ag as j,Q as Y,_ as oe,q as xe,a7 as Ye,au as Je,av as Ze,G as Se,H as Te,aw as et,ax as tt,a2 as ge,ay as at}from"./index-d1c013cb.js";import{_ as de}from"./plugin-vueexport-helper-c27b6911.js";import{f as nt,g as st,c as lt}from"./home-57528f66.js";var ot=/\s/;function it(t){for(var o=t.length;o--&&ot.test(t.charAt(o)););return o}var rt=/^\s+/;function ut(t){return t&&t.slice(0,it(t)+1).replace(rt,"")}var ye=0/0,ct=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,vt=/^0o[0-7]+$/i,ft=parseInt;function ke(t){if(typeof t=="number")return t;if(je(t))return ye;if(Z(t)){var o=typeof t.valueOf=="function"?t.valueOf():t;t=Z(o)?o+"":o}if(typeof t!="string")return t===0?t:+t;t=ut(t);var a=dt.test(t);return a||vt.test(t)?ft(t.slice(2),a?2:8):ct.test(t)?ye:+t}var mt=function(){return ze.Date.now()};const ue=mt;var pt="Expected a function",ht=Math.max,_t=Math.min;function gt(t,o,a){var n,v,l,s,r,d,_=0,w=!1,$=!1,N=!0;if(typeof t!="function")throw new TypeError(pt);o=ke(o)||0,Z(a)&&(w=!!a.leading,$="maxWait"in a,l=$?ht(ke(a.maxWait)||0,o):l,N="trailing"in a?!!a.trailing:N);function E(c){var i=n,T=v;return n=v=void 0,_=c,s=t.apply(T,i),s}function x(c){return _=c,r=setTimeout(I,o),w?E(c):s}function P(c){var i=c-d,T=c-_,H=o-i;return $?_t(H,l-T):H}function k(c){var i=c-d,T=c-_;return d===void 0||i>=o||i<0||$&&T>=l}function I(){var c=ue();if(k(c))return L(c);r=setTimeout(I,P(c))}function L(c){return r=void 0,N&&n?E(c):(n=v=void 0,s)}function A(){r!==void 0&&clearTimeout(r),_=0,n=d=v=r=void 0}function h(){return r===void 0?s:L(ue())}function u(){var c=ue(),i=k(c);if(n=arguments,v=this,d=c,i){if(r===void 0)return x(d);if($)return clearTimeout(r),r=setTimeout(I,o),E(d)}return r===void 0&&(r=setTimeout(I,o)),s}return u.cancel=A,u.flush=h,u}var yt="Expected a function";function be(t,o,a){var n=!0,v=!0;if(typeof t!="function")throw new TypeError(yt);return Z(a)&&(n="leading"in a?!!a.leading:n,v="trailing"in a?!!a.trailing:v),gt(t,o,{leading:n,maxWait:o,trailing:v})}const kt=(t,o=0)=>{if(o===0)return t;const a=g(!1);let n=0;const v=()=>{n&&clearTimeout(n),n=window.setTimeout(()=>{a.value=t.value},o)};return ce(v),X(()=>t.value,l=>{l?v():a.value=l}),a},bt=(t,o,a)=>nt(t.subTree).filter(l=>{var s;return Ue(l)&&((s=l.type)==null?void 0:s.name)===o&&!!l.component}).map(l=>l.component.uid).map(l=>a[l]).filter(l=>!!l),It=(t,o)=>{const a={},n=Ce([]);return{children:n,addChild:s=>{a[s.uid]=s,n.value=bt(t,o,a)},removeChild:s=>{delete a[s],n.value=n.value.filter(r=>r.uid!==s)}}},Ct=se({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),wt={change:(t,o)=>[t,o].every(De)},Ee=Symbol("carouselContextKey"),Ie=300,$t=(t,o,a)=>{const{children:n,addChild:v,removeChild:l}=It(we(),"ElCarouselItem"),s=g(-1),r=g(null),d=g(!1),_=g(),w=g(0),$=U(()=>t.arrow!=="never"&&!e(x)),N=U(()=>n.value.some(f=>f.props.label.toString().length>0)),E=U(()=>t.type==="card"),x=U(()=>t.direction==="vertical"),P=U(()=>t.height!=="auto"?{height:t.height}:{height:`${w.value}px`,overflow:"hidden"}),k=be(f=>{u(f)},Ie,{trailing:!0}),I=be(f=>{K(f)},Ie);function L(){r.value&&(clearInterval(r.value),r.value=null)}function A(){t.interval<=0||!t.autoplay||r.value||(r.value=setInterval(()=>h(),t.interval))}const h=()=>{s.value<n.value.length-1?s.value=s.value+1:t.loop&&(s.value=0)};function u(f){if(qe(f)){const q=n.value.filter(J=>J.props.name===f);q.length>0&&(f=n.value.indexOf(q[0]))}if(f=Number(f),Number.isNaN(f)||f!==Math.floor(f))return;const M=n.value.length,z=s.value;f<0?s.value=t.loop?M-1:0:f>=M?s.value=t.loop?0:M-1:s.value=f,z===s.value&&c(z),ve()}function c(f){n.value.forEach((M,z)=>{M.translateItem(z,s.value,f)})}function i(f,M){var z,q,J,fe;const G=e(n),me=G.length;if(me===0||!f.states.inStage)return!1;const Oe=M+1,Pe=M-1,pe=me-1,Re=G[pe].states.active,He=G[0].states.active,Ve=(q=(z=G[Oe])==null?void 0:z.states)==null?void 0:q.active,We=(fe=(J=G[Pe])==null?void 0:J.states)==null?void 0:fe.active;return M===pe&&He||Ve?"left":M===0&&Re||We?"right":!1}function T(){d.value=!0,t.pauseOnHover&&L()}function H(){d.value=!1,A()}function b(f){e(x)||n.value.forEach((M,z)=>{f===i(M,z)&&(M.states.hover=!0)})}function S(){e(x)||n.value.forEach(f=>{f.states.hover=!1})}function B(f){s.value=f}function K(f){t.trigger==="hover"&&f!==s.value&&(s.value=f)}function ie(){u(s.value-1)}function Be(){u(s.value+1)}function ve(){L(),A()}function Ae(f){t.height==="auto"&&(w.value=f)}X(()=>s.value,(f,M)=>{c(M),M>-1&&o("change",f,M)}),X(()=>t.autoplay,f=>{f?A():L()}),X(()=>t.loop,()=>{u(s.value)}),X(()=>t.interval,()=>{ve()}),X(()=>n.value,()=>{n.value.length>0&&u(t.initialIndex)});const re=Ce();return ce(()=>{re.value=Fe(_.value,()=>{c()}),A()}),Ke(()=>{L(),_.value&&re.value&&re.value.stop()}),Xe(Ee,{root:_,isCardType:E,isVertical:x,items:n,loop:t.loop,addItem:v,removeItem:l,setActiveItem:u,setContainerHeight:Ae}),{root:_,activeIndex:s,arrowDisplay:$,hasLabel:N,hover:d,isCardType:E,items:n,isVertical:x,containerStyle:P,handleButtonEnter:b,handleButtonLeave:S,handleIndicatorClick:B,handleMouseEnter:T,handleMouseLeave:H,setActiveItem:u,prev:ie,next:Be,throttledArrowClick:k,throttledIndicatorHover:I}},xt=["onMouseenter","onClick"],St={key:0},Tt="ElCarousel",Et=F({name:Tt}),Mt=F({...Et,props:Ct,emits:wt,setup(t,{expose:o,emit:a}){const n=t,{root:v,activeIndex:l,arrowDisplay:s,hasLabel:r,hover:d,isCardType:_,items:w,isVertical:$,containerStyle:N,handleButtonEnter:E,handleButtonLeave:x,handleIndicatorClick:P,handleMouseEnter:k,handleMouseLeave:I,setActiveItem:L,prev:A,next:h,throttledArrowClick:u,throttledIndicatorHover:c}=$t(n,a),i=le("carousel"),T=U(()=>{const b=[i.b(),i.m(n.direction)];return e(_)&&b.push(i.m("card")),b}),H=U(()=>{const b=[i.e("indicators"),i.em("indicators",n.direction)];return e(r)&&b.push(i.em("indicators","labels")),n.indicatorPosition==="outside"&&b.push(i.em("indicators","outside")),e($)&&b.push(i.em("indicators","right")),b});return o({setActiveItem:L,prev:A,next:h}),(b,S)=>(m(),y("div",{ref_key:"root",ref:v,class:R(e(T)),onMouseenter:S[6]||(S[6]=Q((...B)=>e(k)&&e(k)(...B),["stop"])),onMouseleave:S[7]||(S[7]=Q((...B)=>e(I)&&e(I)(...B),["stop"]))},[p("div",{class:R(e(i).e("container")),style:$e(e(N))},[e(s)?(m(),D(_e,{key:0,name:"carousel-arrow-left",persisted:""},{default:O(()=>[ee(p("button",{type:"button",class:R([e(i).e("arrow"),e(i).em("arrow","left")]),onMouseenter:S[0]||(S[0]=B=>e(E)("left")),onMouseleave:S[1]||(S[1]=(...B)=>e(x)&&e(x)(...B)),onClick:S[2]||(S[2]=Q(B=>e(u)(e(l)-1),["stop"]))},[C(e(he),null,{default:O(()=>[C(e(Ge))]),_:1})],34),[[te,(b.arrow==="always"||e(d))&&(n.loop||e(l)>0)]])]),_:1})):W("v-if",!0),e(s)?(m(),D(_e,{key:1,name:"carousel-arrow-right",persisted:""},{default:O(()=>[ee(p("button",{type:"button",class:R([e(i).e("arrow"),e(i).em("arrow","right")]),onMouseenter:S[3]||(S[3]=B=>e(E)("right")),onMouseleave:S[4]||(S[4]=(...B)=>e(x)&&e(x)(...B)),onClick:S[5]||(S[5]=Q(B=>e(u)(e(l)+1),["stop"]))},[C(e(he),null,{default:O(()=>[C(e(Qe))]),_:1})],34),[[te,(b.arrow==="always"||e(d))&&(n.loop||e(l)<e(w).length-1)]])]),_:1})):W("v-if",!0),ae(b.$slots,"default")],6),b.indicatorPosition!=="none"?(m(),y("ul",{key:0,class:R(e(H))},[(m(!0),y(V,null,j(e(w),(B,K)=>(m(),y("li",{key:K,class:R([e(i).e("indicator"),e(i).em("indicator",b.direction),e(i).is("active",K===e(l))]),onMouseenter:ie=>e(c)(K),onClick:Q(ie=>e(P)(K),["stop"])},[p("button",{class:R(e(i).e("button"))},[e(r)?(m(),y("span",St,Y(B.props.label),1)):W("v-if",!0)],2)],42,xt))),128))],2)):W("v-if",!0)],34))}});var Lt=oe(Mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const Nt=se({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Bt=(t,o)=>{const a=xe(Ee),n=we(),v=.83,l=g(),s=g(!1),r=g(0),d=g(1),_=g(!1),w=g(!1),$=g(!1),N=g(!1),{isCardType:E,isVertical:x}=a;function P(h,u,c){const i=c-1,T=u-1,H=u+1,b=c/2;return u===0&&h===i?-1:u===i&&h===0?c:h<T&&u-h>=b?c+1:h>H&&h-u>=b?-2:h}function k(h,u){var c,i;const T=e(x)?((c=a.root.value)==null?void 0:c.offsetHeight)||0:((i=a.root.value)==null?void 0:i.offsetWidth)||0;return $.value?T*((2-v)*(h-u)+1)/4:h<u?-(1+v)*T/4:(3+v)*T/4}function I(h,u,c){const i=a.root.value;return i?((c?i.offsetHeight:i.offsetWidth)||0)*(h-u):0}const L=(h,u,c)=>{var i;const T=e(E),H=(i=a.items.value.length)!=null?i:Number.NaN,b=h===u;!T&&!Ze(c)&&(N.value=b||h===c),!b&&H>2&&a.loop&&(h=P(h,u,H));const S=e(x);_.value=b,T?($.value=Math.round(Math.abs(h-u))<=1,r.value=k(h,u),d.value=e(_)?1:v):r.value=I(h,u,S),w.value=!0,b&&l.value&&a.setContainerHeight(l.value.offsetHeight)};function A(){if(a&&e(E)){const h=a.items.value.findIndex(({uid:u})=>u===n.uid);a.setActiveItem(h)}}return ce(()=>{a.addItem({props:t,states:Ye({hover:s,translate:r,scale:d,active:_,ready:w,inStage:$,animating:N}),uid:n.uid,translateItem:L})}),Je(()=>{a.removeItem(n.uid)}),{carouselItemRef:l,active:_,animating:N,hover:s,inStage:$,isVertical:x,translate:r,isCardType:E,scale:d,ready:w,handleItemClick:A}},At=F({name:"ElCarouselItem"}),Ot=F({...At,props:Nt,setup(t){const o=t,a=le("carousel"),{carouselItemRef:n,active:v,animating:l,hover:s,inStage:r,isVertical:d,translate:_,isCardType:w,scale:$,ready:N,handleItemClick:E}=Bt(o),x=U(()=>{const k=`${`translate${e(d)?"Y":"X"}`}(${e(_)}px)`,I=`scale(${e($)})`;return{transform:[k,I].join(" ")}});return(P,k)=>ee((m(),y("div",{ref_key:"carouselItemRef",ref:n,class:R([e(a).e("item"),e(a).is("active",e(v)),e(a).is("in-stage",e(r)),e(a).is("hover",e(s)),e(a).is("animating",e(l)),{[e(a).em("item","card")]:e(w),[e(a).em("item","card-vertical")]:e(w)&&e(d)}]),style:$e(e(x)),onClick:k[0]||(k[0]=(...I)=>e(E)&&e(E)(...I))},[e(w)?ee((m(),y("div",{key:0,class:R(e(a).e("mask"))},null,2)),[[te,!e(v)]]):W("v-if",!0),ae(P.$slots,"default")],6)),[[te,e(N)]])}});var Me=oe(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const Pt=Se(Lt,{CarouselItem:Me}),Rt=Te(Me),Ht=se({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),Vt=se({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),Wt=F({name:"ElSkeletonItem"}),jt=F({...Wt,props:Vt,setup(t){const o=le("skeleton");return(a,n)=>(m(),y("div",{class:R([e(o).e("item"),e(o).e(a.variant)])},[a.variant==="image"?(m(),D(e(et),{key:0})):W("v-if",!0)],2))}});var ne=oe(jt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const zt=F({name:"ElSkeleton"}),Ut=F({...zt,props:Ht,setup(t,{expose:o}){const a=t,n=le("skeleton"),v=kt(tt(a,"loading"),a.throttle);return o({uiLoading:v}),(l,s)=>e(v)?(m(),y("div",ge({key:0,class:[e(n).b(),e(n).is("animated",l.animated)]},l.$attrs),[(m(!0),y(V,null,j(l.count,r=>(m(),y(V,{key:r},[l.loading?ae(l.$slots,"template",{key:r},()=>[C(ne,{class:R(e(n).is("first")),variant:"p"},null,8,["class"]),(m(!0),y(V,null,j(l.rows,d=>(m(),D(ne,{key:d,class:R([e(n).e("paragraph"),e(n).is("last",d===l.rows&&l.rows>1)]),variant:"p"},null,8,["class"]))),128))]):W("v-if",!0)],64))),128))],16)):ae(l.$slots,"default",at(ge({key:1},l.$attrs)))}});var Dt=oe(Ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);const Le=Se(Dt,{SkeletonItem:ne}),Ne=Te(ne);const Ft={class:"tab-list flex a-c"},Kt={class:"list-title"},Xt=["onClick"],qt={class:"flex j-b"},Gt=["src"],Qt={class:"music-title"},Yt={key:0,style:{padding:"2px 0px 10px 0px"}},Jt={class:"flex j-b",style:{"padding-bottom":"10px"}},Zt={style:{"margin-top":"10px"}},ea={style:{"margin-top":"10px"}},ta={class:"flex j-b",style:{"flex-wrap":"wrap"}},aa={style:{width:"25%",padding:"0px 10px 10px 0px"}},na={class:"flex j-b",style:{"flex-wrap":"wrap"}},sa={style:{width:"20%",padding:"0px 10px 10px 0px"}},la={style:{"margin-top":"4px"}},oa={style:{"margin-top":"4px"}},ia={style:{"margin-top":"4px"}},ra={__name:"my-tab",props:{list:{type:Object,default:()=>{}},skLoading:{type:Boolean,default:!0},tdata:{type:Array,default:()=>[]},Mtype:{type:Number,default:1}},emits:["myClick"],setup(t,{emit:o}){let a=g("0");const n=(v,l)=>{o("myClick",v.value,l),a.value=l};return(v,l)=>{const s=Ne,r=Le;return m(),y("div",null,[p("div",Ft,[p("div",Kt,Y(t.list.title),1),(m(!0),y(V,null,j(t.list.children,(d,_)=>(m(),y("div",{class:R(e(a)==_?"list-label active":"list-label"),onClick:w=>n(d,_)},Y(d.label),11,Xt))),256))]),t.Mtype==1?(m(),D(r,{key:0,loading:t.skLoading,animated:!0},{default:O(()=>[p("div",qt,[(m(!0),y(V,null,j(t.tdata,(d,_)=>(m(),y("div",{key:_,style:{width:"220px"}},[p("img",{class:"music-img",src:d.coverImgUrl},null,8,Gt),p("div",Qt,Y(d.name),1),d.tags?(m(),y("div",Yt,[(m(!0),y(V,null,j(d.tags,(w,$)=>(m(),y("span",{class:"music-tag",key:$},"#"+Y(w),1))),128))])):W("",!0)]))),128))])]),template:O(()=>[p("div",Jt,[(m(),y(V,null,j(6,d=>p("div",null,[p("div",null,[C(s,{variant:"p",style:{width:"220px",height:"220px"}})]),p("div",Zt,[C(s,{variant:"p",style:{width:"220px",height:"16px"}})]),p("div",ea,[C(s,{variant:"p",style:{width:"60px",height:"16px"}})])])),64))])]),_:1},8,["loading"])):W("",!0),t.Mtype==2?(m(),D(r,{key:1,loading:t.skLoading,animated:!0},{default:O(()=>[]),template:O(()=>[p("div",ta,[(m(),y(V,null,j(12,d=>p("div",aa,[p("div",null,[C(s,{variant:"p",style:{width:"100%",height:"120px"}})])])),64))])]),_:1},8,["loading"])):W("",!0),t.Mtype==3?(m(),D(r,{key:2,loading:t.skLoading,animated:!0},{default:O(()=>[]),template:O(()=>[p("div",na,[(m(),y(V,null,j(10,d=>p("div",sa,[p("div",null,[C(s,{variant:"p",style:{width:"100%",height:"120px"}})]),p("div",la,[C(s,{variant:"p",style:{width:"100%",height:"16px"}})]),p("div",oa,[C(s,{variant:"p",style:{width:"50%",height:"16px"}})]),p("div",ia,[C(s,{variant:"p",style:{width:"10%",height:"16px"}})])])),64))])]),_:1},8,["loading"])):W("",!0)])}}},ua=de(ra,[["__scopeId","data-v-a952e7d3"]]);const ca={class:"page"},da=["src"],va={__name:"my-swiper",props:{list:{type:Array,default:()=>{}}},setup(t){return xe("$vm"),(o,a)=>{const n=Rt,v=Pt;return m(),y("div",ca,[C(v,{interval:3e3,type:"card",height:"200px"},{default:O(()=>[(m(!0),y(V,null,j(t.list,l=>(m(),D(n,{key:l},{default:O(()=>[p("img",{class:"swiper-img",src:l.imageUrl},null,8,da)]),_:2},1024))),128))]),_:1})])}}},fa=de(va,[["__scopeId","data-v-23ec54eb"]]);const ma={class:"page"},pa={class:"recommend"},ha={class:"recom-list"},_a={class:"recommend"},ga={class:"recom-list"},ya={class:"recommend"},ka={class:"recom-list"},ba={__name:"index",setup(t){let o=g([]),a=g(!0),n=g(!0),v=g(!0),l=g(!0),s=g({title:"热门推荐",children:[{label:"推荐",value:""},{label:"华语",value:"华语"},{label:"流行",value:"流行"},{label:"摇滚",value:"摇滚"},{label:"民谣",value:"民谣"},{label:"电子",value:"电子"}]}),r=g({title:"新碟上架",children:[{label:"全部",value:""},{label:"华语",value:"zh"},{label:"欧美",value:"ea"},{label:"韩国",value:"kr"},{label:"日本",value:"jp"}]}),d=g({title:"最新MV",children:[{label:"全部",value:""},{label:"内地",value:"内地"},{label:"港台",value:"港台"},{label:"欧美",value:"欧美"},{label:"日本",value:"日本"},{label:"韩国",value:"韩国"}]}),_=g([]),w=g([]),$=g([]);const N=(k,I)=>{P(k)},E=(k,I)=>{console.log(k,I)},x=(k,I)=>{console.log(k,I)};st().then(k=>{o.value=k.banners,a.value=!1});const P=(k="")=>{lt({limit:6,order:"hot",cat:k,offset:0}).then(L=>{n.value=!1,_.value=L.playlists})};return P(),(k,I)=>{const L=fa,A=Ne,h=Le,u=ua;return m(),y("div",ma,[p("div",null,[C(h,{loading:e(a),animated:!0},{default:O(()=>[C(L,{list:e(o)},null,8,["list"])]),template:O(()=>[C(A,{variant:"p",style:{width:"27%",height:"200px"}}),C(A,{variant:"p",style:{width:"46%",height:"200px"}}),C(A,{variant:"p",style:{width:"27%",height:"200px"}})]),_:1},8,["loading"])]),p("div",pa,[p("div",ha,[C(u,{list:e(s),skLoading:e(n),tdata:e(_),Mtype:1,onMyClick:N},null,8,["list","skLoading","tdata"])])]),p("div",_a,[p("div",ga,[C(u,{list:e(r),skLoading:e(v),tdata:e(w),Mtype:2,onMyClick:E},null,8,["list","skLoading","tdata"])])]),p("div",ya,[p("div",ka,[C(u,{list:e(d),skLoading:e(l),tdata:e($),Mtype:3,onMyClick:x},null,8,["list","skLoading","tdata"])])])])}}},$a=de(ba,[["__scopeId","data-v-a52d71c6"]]);export{$a as default};