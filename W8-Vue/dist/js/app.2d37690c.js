(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function n(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0dd63c":"ec009507","chunk-2d2086b7":"59d820e9","chunk-5d08e6f6":"db5f98a2","chunk-bcead242":"55e904d4"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/W8-Vue/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"38f2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron jumbotron-fluid bg-warning mt-14 mt-md-15 mb-0 position-relative",staticStyle:{"z-index":"101"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h2",{staticClass:"mb-4 text-primary h4 h1-md"},[t._v("有任何我們能幫助您的嗎？")]),t._m(0),a("validation-provider",{staticClass:"input-group mb-3 ",attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.classes;return[a("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",class:s,attrs:{id:"email",type:"email",name:"email",placeholder:"example@gmail.com","aria-label":"Your email address","aria-describedby":"SubscribeBtn",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary text-white px-14",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.subscription(e)}}},[t._v(" 訂閱 ")])])]}}])})],1)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"h5-md text-primary font-weight-bold mb-3"},[t._v(" 輸入電子信箱 "),a("br"),t._v(" 將有專業人員在線幫您解決所有問題 ")])}],r=a("3d20"),n=a.n(r),o=a("cd54"),l={data:function(){return{email:""}},methods:{subscription:function(){this.email?n.a.fire({icon:"success",title:"感謝訂閱"}):o["a"].fire({title:"E-mail未填寫或格式錯誤",icon:"error"}),this.email=""}}},c=l,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);e["a"]=u.exports},"3a96":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-14 mt-md-16",attrs:{id:"popular"}},[a("h2",{staticClass:"title text-primary font-weight-bold"},[t._v("本月熱門保姆")]),a("p",{staticClass:"mb-2 text-primary"},[t._v("即時瞭解您的需求，安排最適合毛孩的寵物保姆！")]),t._l(t.topStore,(function(e){return a("ul",{key:e.id,staticClass:"list-unstyled d-md-none"},[a("li",{staticClass:"card shadow-sm h-100"},[a("div",{staticClass:"card-img-top bg-center",staticStyle:{height:"120px"},style:{backgroundImage:"url("+e.imageUrl[0]+")"}}),a("img",{staticClass:"card__avatar",attrs:{src:e.avatarImg,alt:"avatar"}}),a("div",{staticClass:"card-body text-center"},[a("h3",{staticClass:"h5 text-primary"},[t._v(t._s(e.name))]),a("p",{staticClass:"mb-3 text-primary text-nowrap"},[t._v(" "+t._s(e.service)+" ")]),a("button",{staticClass:"btn btn-secondary px-15 mb-4",attrs:{type:"button"}},[t._v(" 預約 ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 flex-column"},[a("p",{staticClass:"text-primary"},[t._v("獲得評價")]),a("p",{staticClass:"h3 mt-3 text-primary text-center"},[t._v(" "+t._s(e.comment)),a("sup",[t._v("則")])])]),a("div",{staticClass:"col-6 flex-column"},[a("p",{staticClass:"text-primary"},[t._v("已完成訂單")]),a("p",{staticClass:"h3 mt-3 text-primary"},[t._v(t._s(e.complete)+" "),a("sup",[t._v("件")])])])])])])])})),a("swiper",{staticClass:"d-none d-md-block px-1",attrs:{options:t.swiperOption}},[t._l(t.topStore,(function(e){return a("swiper-slide",{key:e.id},[a("div",{staticClass:"card shadow-sm h-100"},[a("div",{staticClass:"card-img-top bg-center",staticStyle:{height:"120px"},style:{backgroundImage:"url("+e.imageUrl[0]+")"}}),a("img",{staticClass:"card__avatar",attrs:{src:e.avatarImg,alt:"avatar"}}),a("div",{staticClass:"card-body text-center"},[a("h3",{staticClass:"h5 text-primary"},[t._v(t._s(e.name))]),a("p",{staticClass:"mb-3 text-primary text-nowrap"},[t._v(" "+t._s(e.service)+" ")]),a("button",{staticClass:"btn btn-secondary px-15 mb-4",attrs:{type:"button"}},[t._v(" 預約 ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 flex-column"},[a("p",{staticClass:"text-primary"},[t._v("獲得評價")]),a("p",{staticClass:"h3 mt-3 text-primary text-center"},[t._v(" "+t._s(e.comment)+" "),a("sup",[t._v("則")])])]),a("div",{staticClass:"col-6 flex-column"},[a("p",{staticClass:"text-primary"},[t._v("已完成訂單")]),a("p",{staticClass:"h3 mt-3 text-primary"},[t._v(t._s(e.complete)+" "),a("sup",[t._v("件")])])])])])])])})),a("div",{staticClass:"swiper-button-prev d-none",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[a("span",{staticClass:"material-icons text-white h2 mb-0"},[t._v("arrow_right")])])],2)],2)},i=[],r=a("7212"),n=(a("e25d"),{props:{topStore:{type:Array,required:!0}},data:function(){return{swiperOption:{speed:900,allowTouchMove:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:30}},swiperOption:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},components:{Swiper:r["Swiper"],SwiperSlide:r["SwiperSlide"]}}),o=n,l=a("2877"),c=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=c.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("4160"),a("b64b"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=(a("4989"),a("7bb1")),r=a("4c93"),n=a("60d4"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],c=(a("5c0b"),a("2877")),d={},u=Object(c["a"])(d,o,l,!1,null,null,null),p=u.exports,m=(a("d3b7"),a("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("main",{attrs:{role:"main"}},[a("HomeBanner"),a("TopStore",{attrs:{topStore:t.topStore}}),a("Online"),a("FooterBanner"),a("BookingProcess")],1),a("Subscribe"),a("Footer")],1)},h=[],b=a("d178"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container position-relative"},[a("div",{staticClass:"row flex-column flex-lg-row justify-content-center align-items-center"},[a("div",{staticClass:"col-lg-5 banner__bg bg-center mb-2 mb-lg-0",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-1.png')"}}),a("div",{staticClass:"col-md-7 col-lg-7"},[a("h2",{staticClass:"h3 h2-md h1-lg text-center text-md-left text-primary font-weight-bold"},[t._v(" 寵物服務，盡在 PETPET ")]),a("h4",{staticClass:"d-none d-lg-block text-primary font-weight-bold"},[t._v(" 當您的毛孩有需要時，幫您找到最合適的服務者！ ")]),t._m(0),t._m(1),a("div",{staticClass:"d-lg-flex justify-content-lg-end d-none mt-lg-16\n      position-absolute",staticStyle:{right:"15px"}},[a("router-link",{attrs:{to:{path:"/",hash:"#popular"}}},[a("span",{staticClass:"material-icons arrow-down text-secondary display-3"},[t._v(" arrow_drop_down_circle ")])])],1)])]),a("div",{staticClass:"d-md-flex justify-content-md-end mt-5 d-none d-lg-none"},[a("router-link",{attrs:{to:{path:"/",hash:"#popular"}}},[a("span",{staticClass:"material-icons arrow-down text-secondary display-3"},[t._v(" arrow_drop_down_circle ")])])],1)])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"d-lg-none text-primary h5 text-center text-md-left"},[t._v(" 當您的毛孩有需要時，"),a("br"),t._v("幫您找到最合適的服務者！ ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"mx-3 mb-md-15",attrs:{action:""}},[a("div",{staticClass:"row d-flex flex-column flex-lg-row"},[a("select",{staticClass:"custom-select col-lg-2 mb-2 mb-lg-0"},[a("option",{attrs:{selected:""}},[t._v("品種")]),a("option",{attrs:{value:"貓"}},[t._v("貓")]),a("option",{attrs:{value:"狗"}},[t._v("狗")])]),a("select",{staticClass:"custom-select col-lg-4 mb-2 mb-lg-0"},[a("option",{attrs:{selected:""}},[t._v("服務")]),a("option",{attrs:{value:"寵物寄宿"}},[t._v("寵物寄宿")]),a("option",{attrs:{value:"寵物美容"}},[t._v("寵物美容")]),a("option",{attrs:{value:"到府照顧"}},[t._v("到府照顧")]),a("option",{attrs:{value:"遛狗保姆"}},[t._v("遛狗保姆")]),a("option",{attrs:{value:"行為訓練"}},[t._v("行為訓練")])]),a("select",{staticClass:"custom-select col-lg-4 mb-2 mb-lg-0"},[a("option",{attrs:{selected:""}},[t._v("地區")]),a("option",{attrs:{value:"台北"}},[t._v("台北")]),a("option",{attrs:{value:"台中"}},[t._v("台中")]),a("option",{attrs:{value:"高雄"}},[t._v("高雄")])]),a("button",{staticClass:"btn btn-secondary col-lg-2",attrs:{type:"button"}},[t._v("搜尋")])])])}],_={data:function(){return{}}},x=_,C=Object(c["a"])(x,f,g,!1,null,null,null),y=C.exports,w=a("3a96"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-9 mt-lg-16"},[a("h2",{staticClass:"text-primary font-weight-bold"},[t._v("線上預約")]),a("p",{staticClass:"h5 text-primary mb-3"},[t._v(" 即時瞭解您的需求，安排最適合毛孩的寵物保姆！ ")]),a("ul",{staticClass:"row no-gutters list-unstyled flex-md-nowrap"},[a("li",{staticClass:"reservation__item card text-white col-md-4 bg-center darker\n    mr-0 mr-md-1 mb-1 mb-md-0",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-5.jpeg')"}},[a("router-link",{staticClass:"text-white",attrs:{to:"/homestay"}},[a("div",{staticClass:"card-img-overlay d-flex align-items-center justify-content-center h-100"},[a("h4",{staticClass:"card-title font-weight-bold"},[t._v("寵物寄宿")])])])],1),a("li",{staticClass:"reservation__item card text-white col-md-3 bg-center darker\n    mr-0 mr-md-1 mb-1 mb-md-0",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-6.jpeg')"}},[a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[a("div",{staticClass:"card-img-overlay d-flex align-items-center justify-content-center"},[a("h4",{staticClass:"card-title font-weight-bold"},[t._v("寵物美容")])])])],1),a("li",{staticClass:"d-flex flex-column justify-content-between col-md-3 mr-0 mr-md-1 mb-1 mb-md-0"},[a("div",{staticClass:"reservation__item card text-white bg-center darker mb-1",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-7.jpeg')"}},[a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[a("div",{staticClass:"card-img-overlay d-flex align-items-center justify-content-center"},[a("h4",{staticClass:"card-title font-weight-bold"},[t._v("到府照顧")])])])],1),a("div",{staticClass:"reservation__item card text-white bg-center darker",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-8.jpeg')"}},[a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[a("div",{staticClass:"reservation__item card-img-overlay d-flex\n          align-items-center justify-content-center"},[a("h4",{staticClass:"card-title font-weight-bold"},[t._v("遛狗保姆")])])])],1)]),a("li",{staticClass:"reservation__item card text-white col-md-2 bg-center darker",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-3.jpeg')"}},[a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[a("div",{staticClass:"card-img-overlay d-flex align-items-center justify-content-center"},[a("h4",{staticClass:"card-title font-weight-bold"},[t._v("行為訓練")])])])],1)])])},j=[],S={data:function(){return{}}},T=S,E=Object(c["a"])(T,k,j,!1,null,null,null),P=E.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron jumbotron-fluid mt-9 mt-lg-15 bg-center",staticStyle:{"background-image":"url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-9.jpeg')"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"display-4 text-white mb-10"},[t._v("PETPET目前已有")]),a("ul",{staticClass:"row flex-column flex-md-row align-items-center\n    align-items-md-end mt-0 mt-mb-14 list-unstyled ml-2"},[a("li",{staticClass:"col-6 col-md-3 text-white border-left mb-3"},[a("h3",{staticClass:"display-3"},[t._v("5278")]),a("p",{staticClass:"h5 pb-14"},[t._v("人使用 PETPET")])]),a("li",{staticClass:"col-6 col-md-3 text-white border-left mb-3"},[a("h3",{staticClass:"display-3"},[t._v("580")]),a("p",{staticClass:"h5 pb-14"},[t._v("人成為寵物保母")])]),a("li",{staticClass:"col-6 col-md-3 text-white border-left mb-3"},[a("h3",{staticClass:"display-3"},[t._v("10000+")]),a("p",{staticClass:"h5 pb-14"},[t._v("已完成服務")])])])])])}],$={data:function(){return{}}},B=$,I=Object(c["a"])(B,O,L,!1,null,null,null),A=I.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-9 mt-lg-16"},[a("h2",{staticClass:"text-primary font-weight-bold"},[t._v("預約流程")]),a("p",{staticClass:"h5 text-primary mb-2"},[t._v("輕鬆三步驟，立即獲取最佳服務！")]),a("ul",{staticClass:"row list-unstyled"},t._l(t.processes,(function(e,s){return a("li",{key:s,staticClass:"col-md-4 mb-7 mb-md-0"},[a("p",{staticClass:"text-primary"},[t._v(t._s(e.title))]),a("img",{staticClass:"img-fluid w-100",attrs:{src:e.processImg,alt:"index-10"}})])})),0)])},H=[],M={data:function(){return{processes:[{title:"1.查詢想要的服務",processImg:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-10.png"},{title:"2.找到合適的保姆",processImg:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-11.png"},{title:"3.填寫資料完成預約",processImg:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-12.png"}]}}},V=M,q=Object(c["a"])(V,U,H,!1,null,null,null),D=q.exports,F=a("38f2"),N=a("fd2d"),z={topStore:[{id:1,name:"Jamie",service:"寄宿、美容、寵物行為訓練",comment:198,complete:580,imageUrl:["https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-2.jpeg"],avatarImg:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-1.png"},{id:2,name:"Eric",service:"寄宿、美容",comment:76,complete:208,imageUrl:["https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-3.jpeg"],avatarImg:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-2.png"},{id:3,name:"Yvonne",service:"美容、寵物行為訓練",comment:52,complete:196,imageUrl:["https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-4.jpeg"],avatarImg:"https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-3.png"}]},J={name:"Home",data:function(){return{topStore:[]}},created:function(){this.fetchTopStore()},components:{Navbar:b["a"],HomeBanner:y,TopStore:w["a"],Online:P,FooterBanner:A,BookingProcess:D,Subscribe:F["a"],Footer:N["a"]},methods:{fetchTopStore:function(){var t=z.topStore;this.topStore=t}}},Y=J,W=Object(c["a"])(Y,v,h,!1,null,null,null),G=W.exports;s["default"].use(m["a"]);var K=[{path:"/",name:"Home",component:G},{path:"/homestay",name:"Homestay",component:function(){return a.e("chunk-bcead242").then(a.bind(null,"6996"))}},{path:"/homestay/:id",name:"Detail",component:function(){return a.e("chunk-5d08e6f6").then(a.bind(null,"c84b"))}},{path:"/login",name:"Login",component:function(){return a.e("chunk-2d2086b7").then(a.bind(null,"a55b"))}},{path:"/member",name:"Member",component:function(){return a.e("chunk-2d0dd63c").then(a.bind(null,"80d2"))}}],Q=new m["a"]({routes:K,scrollBehavior:function(t,e,a){return t.hash?{selector:t.hash}:a||{x:0,y:0}}}),R=Q;s["default"].config.productionTip=!1,Object.keys(r).forEach((function(t){Object(i["d"])(t,r[t])})),Object(i["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(i["e"])("tw",n),s["default"].component("ValidationObserver",i["a"]),s["default"].component("ValidationProvider",i["b"]),new s["default"]({router:R,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},cd54:function(t,e,a){"use strict";var s=a("3d20"),i=a.n(s);e["a"]=i.a.mixin({toast:!0,showConfirmButton:!1,timer:1500,padding:"1em",position:"top"})},d178:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("nav",{staticClass:"navbar navbar-expand-md bg-white fix-top-lg"},[a("div",{staticClass:"container"},[a("h1",[a("router-link",{staticClass:"navbar-brand logo ml-md-0 position-relative",attrs:{to:"/"}},[t._v("PETPET ")])],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-primary text-center mr-0 mr-md-9",attrs:{to:"/"}},[t._v("預約服務 ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-primary text-center mr-0 mr-md-9",attrs:{to:"/"}},[t._v("成為寵物保姆 ")])],1),t.isAuth?[a("li",{staticClass:"nav-item dropdown text-center"},[a("a",{staticClass:"nav-link expandArrow",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Hi, "+t._s(t.currentUserName)+" "),a("span",{staticClass:"material-icons"},[t._v(" arrow_drop_down ")])]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("router-link",{staticClass:"dropdown-item text-primary\n                             hover-bg text-center text-md-left",attrs:{to:"/"}},[t._v("會員資料 ")]),a("router-link",{staticClass:"dropdown-item text-primary\n                             hover-bg text-center text-md-left",attrs:{to:"/"}},[t._v("預約查詢 ")]),a("router-link",{staticClass:"dropdown-item text-primary\n                             hover-bg text-center text-md-left",attrs:{to:"/"}},[t._v("歷史預約 ")]),a("div",{staticClass:"dropdown-divider"}),a("router-link",{staticClass:"dropdown-item text-secondary\n                             hover-bg text-center text-md-left",attrs:{to:"/"}},[t._v("切換保母帳號 ")])],1)])]:[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link text-primary text-center",attrs:{to:"/login"}},[t._v("登入 ")])],1)]],2)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"material-icons text-warning display-4"},[t._v(" menu ")])])}],r={props:{isAuth:{type:Boolean},currentUserName:{type:String}},data:function(){return{}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer mt-auto bg-white position-relative",staticStyle:{"z-index":"101"}},[a("div",{staticClass:"container pt-md-14 pb-4"},[a("div",{staticClass:"row justify-content-between mb-0 mb-md-14"},[a("div",{staticClass:"d-none d-md-flex flex-md-column"},[a("h3",[a("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v("PETPET ")])],1),a("ul",{staticClass:"list-unstyled d-none d-md-block"},[a("li",[a("router-link",{staticClass:"hover-underline",attrs:{to:"/"}},[t._v("關於我們 ")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("幫助中心 ")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("使用條款")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("隱私政策")])],1)])]),a("div",{staticClass:"d-none d-md-flex flex-md-column"},[a("h4",{staticClass:"h5 text-primary font-weight-bold mb-4 py-2"},[t._v("寵物服務")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("寵物寄宿")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("寵物到府保姆")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("寵物美容洗澡")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("寵物行為訓練")])],1)])]),a("div",{staticClass:"d-none d-md-flex flex-md-column"},[a("h4",{staticClass:"h5 text-primary font-weight-bold py-2 mb-4"},[t._v("加入我們")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("成為寵物保姆")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("加入寵物計程車")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("專屬 APP 下載")])],1),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("相關合約條款")])],1)])]),t._m(0),a("div",{staticClass:"d-flex flex-column d-md-none px-3"},[a("h3",[a("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[t._v("PETPET")])],1),a("h6",{staticClass:"font-xs text-primary"},[t._v(" Copyright © 2020 PetPet. All rights reserved. ")])])]),t._m(1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-none d-md-flex flex-md-column"},[a("h4",{staticClass:"h5 text-primary font-weight-bold py-2 mb-4"},[t._v("聯繫我們")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"mailto:petpet@petmail.com"}},[t._v("petpet@petmail.com")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-none d-md-flex mt-0 mt-mb-14"},[a("h5",{staticClass:"mr-auto"},[a("span",{staticClass:"material-icons text-primary mr-2"},[t._v(" local_phone ")]),a("a",{attrs:{href:"tel+07-123-4567"}},[t._v("07-123-4567")])]),a("h6",{staticClass:"text-primary font-weight-normal font-size-sm"},[t._v(" Copyright © 2020 PetPet. All rights reserved. ")])])}],r={data:function(){return{}}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports}});