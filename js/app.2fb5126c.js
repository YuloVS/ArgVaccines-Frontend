(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],u=0,h=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"50dcc285"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var l=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navbar",{on:{provinceChanged:t.routeTo}}),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:""}})],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.toggle=!t.toggle}}}),a("v-toolbar-title",[a("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/"}},[a("span",[t._v("VACUNAS")]),a("span",{staticStyle:{color:"#028baa"}},[t._v("ARGENTINA")])])],1)],1),a("v-navigation-drawer",{attrs:{bottom:"",app:""},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[a("v-list",{attrs:{nav:""}},[a("v-list-item",{staticClass:"mb-0"},[a("v-autocomplete",{staticClass:"mt-3",attrs:{"auto-select-first":"",rounded:"",solo:"",placeholder:"Provincia",items:this.provinces,"item-text":"name","item-value":"name"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}})],1),a("v-list-item",{staticClass:"mb-0"},[a("v-select",{attrs:{"auto-select-first":"",rounded:"",solo:"",placeholder:"Vacunacion / Residencia",items:this.provinces,"item-text":"name","item-value":"name"}})],1),t._l(this.provinces,(function(e){return a("v-list-item",{key:e.id},[a("v-btn",{staticClass:"ma-auto",attrs:{rounded:"",color:"cyan darken-1",block:"",outlined:"",dark:"",router:"",to:t.selectProvince(e.name)},on:{click:function(e){t.toggle=!t.toggle}}},[t._v(t._s(e.name)+" ")])],1)}))],2)],1)],1)},c=[],s={name:"Navbar",data:function(){return{toggle:!1,provinces:[],province:null}},created:function(){var t=this;this.$axios.get("api/provinces").then((function(e){t.provinces=e.data})).catch((function(t){alert(t)}))},watch:{province:function(){this.$emit("provinceChanged",this.province)}},methods:{selectProvince:function(t){return t.replaceAll(" ","_")}}},l=s,u=a("2877"),d=a("6544"),h=a.n(d),v=a("40dc"),p=a("5bc1"),f=a("c6a6"),m=a("8336"),g=a("8860"),y=a("da13"),b=a("f774"),C=a("b974"),x=a("2a7f"),_=Object(u["a"])(l,o,c,!1,null,"9b430cfc",null),w=_.exports;h()(_,{VAppBar:v["a"],VAppBarNavIcon:p["a"],VAutocomplete:f["a"],VBtn:m["a"],VList:g["a"],VListItem:y["a"],VNavigationDrawer:b["a"],VSelect:C["a"],VToolbarTitle:x["a"]});var A={components:{Navbar:w},methods:{routeTo:function(t){t&&this.$router.push(t.replaceAll(" ","_"))}}},$=A,V=a("7496"),L=a("a523"),B=a("553a"),O=a("f6c4"),S=Object(u["a"])($,i,r,!1,null,null,null),D=S.exports;h()(S,{VApp:V["a"],VContainer:L["a"],VFooter:B["a"],VMain:O["a"]});var E=a("f309");n["a"].use(E["a"]);var P=new E["a"]({}),j=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home px-md-15 py-md-1"},[n("h1",{staticClass:"text-h4 font-weight-medium text-center",domProps:{textContent:t._s(t.message)}}),n("v-row",[n("v-col",[n("h2",{staticClass:"text-h5 font-weight-medium text-center"},[t._v("Vacunación por día")]),n("vaccines-per-day")],1)],1),n("v-row",[n("v-col",{attrs:{md:"6",cols:12}},[n("h2",{staticClass:"text-h5 font-weight-medium text-center"},[t._v("Vacunas utilizadas")]),n("vaccines")],1),n("v-col",{attrs:{md:"6",cols:12}},[n("h2",{staticClass:"text-h5 font-weight-medium text-center"},[t._v("Vacunación por rango etario")]),n("vaccines-by-age-range")],1)],1),n("v-row",{staticClass:"mt-md-8"},[n("v-col",{attrs:{md:"6",cols:12}},[n("h2",{staticClass:"text-h5 font-weight-medium text-center"},[t._v("Vacunación por genero")]),n("vaccines-by-gender")],1),n("v-col",{attrs:{md:"6",cols:12}},[n("h2",{staticClass:"text-h5 font-weight-medium text-center"},[t._v("Vacunación por condición")]),n("vaccines-by-condition")],1)],1),n("v-overlay",{attrs:{absolute:!1,value:!1}},[n("img",{staticClass:"mr-7",attrs:{src:a("cf1c"),alt:"Cargando..."}})])],1)},R=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"auto",height:"350px","margin-top":"-35px"},attrs:{id:"vaccineChart"}})},z=[],T=(a("d81d"),{name:"Vaccines",data:function(){return{vaccines:[]}},computed:{transformData:function(){var t=this,e=this.vaccines.map((function(e){return t.renameKey(e,"quantity","value")}));return e="vaccine"in e[0]?e.map((function(e){return t.renameKey(e,"vaccine","name")})):e.map((function(e){return t.renameKey(e,"vaccinated_in_the_province","name")})),e}},watch:{$route:function(){this.setLoadingChart(),this.getVaccines()}},created:function(){this.getVaccines()},mounted:function(){this.setLoadingChart()},methods:{getVaccines:function(){var t=this,e={},a="api/v1/vaccines",n=this.$route.fullPath.replaceAll("/","").replaceAll("_"," ");n.length>0&&(a="api/v1/vaccination-province/vaccine",e={params:{vaccinated_in_the_province:n}}),this.$axios.get(a,e).then((function(e){var a=e.data;t.vaccines=a.data,t.drawChart()}))},drawChart:function(){var t=this.$echarts.init(document.getElementById("vaccineChart")),e={tooltip:{trigger:"item",formatter:"{b} : {c} <br> ({d}%)"},legend:{padding:1,top:"bottom",data:this.vaccines.map((function(t){return t.vaccine}))},series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:this.transformData,label:{show:!0,position:"inside",formatter:"{c} \n {d}%"}}],color:["#00897B","#00ACC1","#028baa","#4DB6AC"]};t.setOption(e),t.hideLoading()},setLoadingChart:function(){var t=this.$echarts.init(document.getElementById("vaccineChart")),e={text:"Cargando...",color:"#028baa",textColor:"#028baa",zlevel:0,fontSize:112,showSpinner:!0,spinnerRadius:15,fontFamily:"sans-serif"};t.showLoading(e)},renameKey:function(t,e,a){var n=function(t){return Object.assign({},t)},i=n(t),r=i[e];return delete i[e],i[a]=r,i}}}),K=T,q=Object(u["a"])(K,I,z,!1,null,"762bbcb8",null),N=q.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"auto",height:"350px","margin-top":"-35px"},attrs:{id:"vaccineByAgeRangeChart"}})},G=[],M={name:"VaccinesByAgeRange",data:function(){return{vaccines:[]}},created:function(){this.getData()},mounted:function(){this.setLoadingChart()},watch:{$route:function(){this.setLoadingChart(),this.getData()}},methods:{getData:function(){var t=this,e={},a="api/v1/age-range",n=this.$route.fullPath.replaceAll("/","").replaceAll("_"," ");n.length>0&&(a="api/v1/vaccination-province/age-range",e={params:{vaccinated_in_the_province:n}}),this.$axios.get(a,e).then((function(e){var a=e.data;t.vaccines=a.data,t.drawChart()}))},drawChart:function(){var t=this.$echarts.init(document.getElementById("vaccineByAgeRangeChart")),e={tooltip:{trigger:"axis",formatter:"{b} : {c}"},yAxis:{type:"value",name:"Cantidad",show:!0,position:"right",offset:-9.5},xAxis:{type:"category",data:this.vaccines.map((function(t){return t.age_range}))},series:[{itemStyle:{normal:{color:"#028baa"}},data:this.vaccines.map((function(t){return t.quantity})),type:"bar"}]};t.setOption(e),t.hideLoading()},setLoadingChart:function(){var t=this.$echarts.init(document.getElementById("vaccineByAgeRangeChart")),e={text:"Cargando...",color:"#028baa",textColor:"#028baa",zlevel:0,fontSize:112,showSpinner:!0,spinnerRadius:15,fontFamily:"sans-serif"};t.showLoading(e)}}},H=M,J=Object(u["a"])(H,F,G,!1,null,"577673ee",null),U=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"auto",height:"350px","margin-top":"-35px"},attrs:{id:"vaccineByGender"}})},Y=[],Q={name:"VaccinesByGender",data:function(){return{vaccines:[]}},computed:{transformData:function(){var t=this,e=this.vaccines.map((function(e){return t.renameKey(e,"quantity","value")}));return e="gender"in e[0]?e.map((function(e){return t.renameKey(e,"gender","name")})):e.map((function(e){return t.renameKey(e,"vaccinated_in_the_province","name")})),e}},created:function(){this.getData()},mounted:function(){this.setLoadingChart()},watch:{$route:function(){this.setLoadingChart(),this.getData()}},methods:{getData:function(){var t=this,e={},a="api/v1/gender",n=this.$route.fullPath.replaceAll("/","").replaceAll("_"," ");n.length>0&&(a="api/v1/vaccination-province/gender",e={params:{vaccinated_in_the_province:n}}),this.$axios.get(a,e).then((function(e){var a=e.data;t.vaccines=a.data,t.drawChart()}))},drawChart:function(){var t=this.$echarts.init(document.getElementById("vaccineByGender")),e={tooltip:{trigger:"item",formatter:"{b} : {c} <br> ({d}%)"},legend:{padding:1,top:"bottom",data:this.vaccines.map((function(t){return t.gender}))},series:[{type:"pie",radius:["40%","70%"],roseType:"radius",avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:this.transformData,label:{show:!0,position:"inside",formatter:"{c} \n {d}%"}}],color:["#BA68C8","#028baa","#90A4AE"]};t.setOption(e),t.hideLoading()},setLoadingChart:function(){var t=this.$echarts.init(document.getElementById("vaccineByGender")),e={text:"Cargando...",color:"#028baa",textColor:"#028baa",zlevel:0,fontSize:112,showSpinner:!0,spinnerRadius:15,fontFamily:"sans-serif"};t.showLoading(e)},renameKey:function(t,e,a){var n=function(t){return Object.assign({},t)},i=n(t),r=i[e];return delete i[e],i[a]=r,i}}},X=Q,Z=Object(u["a"])(X,W,Y,!1,null,"38793fac",null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"auto",height:"350px","margin-top":"-35px"},attrs:{id:"vaccineByCondition"}})},at=[],nt={name:"VaccinesByCondition",data:function(){return{vaccines:[]}},created:function(){this.getData()},mounted:function(){this.setLoadingChart()},watch:{$route:function(){this.setLoadingChart(),this.getData()}},methods:{getData:function(){var t=this,e={},a="api/v1/vaccination-condition",n=this.$route.fullPath.replaceAll("/","").replaceAll("_"," ");n.length>0&&(a="api/v1/vaccination-province/vaccination-condition",e={params:{vaccinated_in_the_province:n}}),this.$axios.get(a,e).then((function(e){var a=e.data;t.vaccines=a.data,t.drawChart()}))},drawChart:function(){var t=this.$echarts.init(document.getElementById("vaccineByCondition")),e={tooltip:{trigger:"axis",formatter:"{b} : {c}"},yAxis:{type:"value",name:"Cantidad",show:!0,position:"right",offset:-4.5},xAxis:{type:"category",data:this.vaccines.map((function(t){return t.vaccination_condition}))},series:[{itemStyle:{normal:{color:"#4DB6AC"}},data:this.vaccines.map((function(t){return t.quantity})),type:"bar"}]};t.setOption(e),t.hideLoading()},setLoadingChart:function(){var t=this.$echarts.init(document.getElementById("vaccineByCondition")),e={text:"Cargando...",color:"#028baa",textColor:"#028baa",zlevel:0,fontSize:112,showSpinner:!0,spinnerRadius:15,fontFamily:"sans-serif"};t.showLoading(e)}}},it=nt,rt=Object(u["a"])(it,et,at,!1,null,"6395904a",null),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"auto",height:"350px","margin-top":"-35px"},attrs:{id:"vaccinesPerDay"}})},st=[],lt={name:"VaccinesPerDay",created:function(){this.getData()},data:function(){return{vaccines:[]}},mounted:function(){this.setLoadingChart()},watch:{$route:function(){this.setLoadingChart(),this.getData()}},methods:{getData:function(){var t=this,e={},a="api/v1/vaccination-date",n=this.$route.fullPath.replaceAll("/","").replaceAll("_"," ");n.length>0&&(a="api/v1/vaccination-province/vaccination-date",e={params:{vaccinated_in_the_province:n}}),this.$axios.get(a,e).then((function(e){var a=e.data;t.vaccines=a.data,t.drawChart()}))},setLoadingChart:function(){var t=this.$echarts.init(document.getElementById("vaccinesPerDay")),e={text:"Cargando...",color:"#028baa",textColor:"#028baa",zlevel:0,fontSize:112,showSpinner:!0,spinnerRadius:15,fontFamily:"sans-serif"};t.showLoading(e)},drawChart:function(){var t=this.$echarts.init(document.getElementById("vaccinesPerDay")),e=[this.vaccines[0].vaccinated_in_the_province],a=[];this.$echarts.util.each(e,(function(t){var e="dataset_"+t;a.push({type:"line",datasetId:e,showSymbol:!1,name:null!==t&&void 0!==t?t:"Argentina",endLabel:{show:!0,formatter:function(t){return t.value[3]+": "+t.value[0]}},labelLayout:{moveOverlap:"shiftY"},emphasis:{focus:"series"},encode:{x:"vaccination_date",y:"quantity",label:["province","quantity"]}})}));var n={animationDuration:1e4,dataset:[{id:"dataset_raw",source:this.vaccines}],tooltip:{order:"valueDesc",trigger:"axis"},xAxis:{type:"category",nameLocation:"middle"},yAxis:{},color:["#028baa"],series:a};t.setOption(n),t.hideLoading()}}},ut=lt,dt=Object(u["a"])(ut,ct,st,!1,null,"3415a896",null),ht=dt.exports,vt={name:"Home",components:{VaccinesPerDay:ht,VaccinesByCondition:ot,VaccinesByGender:tt,VaccinesByAgeRange:U,Vaccines:N},computed:{message:function(){var t=this.$route.path.replaceAll("/","").replaceAll("_"," ");return t.length>0?"Datos de "+t:"Datos generales"}}},pt=vt,ft=a("62ad"),mt=a("a797"),gt=a("0fd9"),yt=Object(u["a"])(pt,k,R,!1,null,null,null),bt=yt.exports;h()(yt,{VCol:ft["a"],VOverlay:mt["a"],VRow:gt["a"]}),n["a"].use(j["a"]);var Ct=[{path:"/*",name:"Home",component:bt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],xt=new j["a"]({routes:Ct,mode:"history"}),_t=xt,wt=a("bc3a"),At=a.n(wt),$t=a("313e"),Vt=a.n($t);n["a"].prototype.$echarts=Vt.a,n["a"].prototype.$axios=At.a,At.a.defaults.baseURL="https://argvaccines.herokuapp.com/",n["a"].config.productionTip=!1,new n["a"]({vuetify:P,router:_t,render:function(t){return t(D)}}).$mount("#app")},cf1c:function(t,e,a){t.exports=a.p+"img/loading.92d7e384.gif"}});
//# sourceMappingURL=app.2fb5126c.js.map