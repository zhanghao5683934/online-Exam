(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demeanor_detail-index"],{"64c9":function(t,e,n){"use strict";var a=n("8cae"),i=n.n(a);i.a},7891:function(t,e,n){"use strict";n.r(e);var a=n("cd63"),i=n("c1d7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("64c9");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"4ab9978a",null,!1,a["a"],c);e["default"]=s.exports},"7fae":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("89dc")),o=getApp(),c={data:function(){return{info:[]}},onLoad:function(t){var e=this,n=o.globalData.site_url+"/appapi/?s=Home.Getpartershow";i.default.requestApi(n,{id:t.id}).then((function(t){e.info=t.data.info[0].data}))},methods:{}};e.default=c},"8cae":function(t,e,n){var a=n("e408");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5c833694",a,!0,{sourceMap:!1,shadowMode:!1})},c1d7:function(t,e,n){"use strict";n.r(e);var a=n("7fae"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},cd63:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"deme-content"},[n("v-uni-view",{staticClass:"deme-content-li"},[n("v-uni-image",{staticClass:"deme-content-li-img",attrs:{src:t.info.thumb}}),n("v-uni-view",{staticClass:"deme-content-li-right"},[n("v-uni-view",{staticClass:"deme-content-li-right-name"},[t._v(t._s(t.info.name))]),n("v-uni-view",{staticClass:"deme-content-li-right-type"},[t._v(t._s(t.info.branch)+" | "+t._s(t.info.post))])],1)],1),n("v-uni-view",{staticClass:"deme-text"},[t._v("个人简介")]),n("v-uni-view",{staticClass:"deme-content-li-right-des"},[t._v(t._s(t.info.content))])],1)],1)},o=[]},e408:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".deme-text[data-v-4ab9978a]{margin-top:%?34?%;font-size:%?34?%;font-weight:500}.deme-content[data-v-4ab9978a]{width:92%;margin:0 auto}.deme-content-li-right-des[data-v-4ab9978a]{font-size:%?28?%;color:#646464;letter-spacing:%?1?%;line-height:%?40?%;margin-top:%?24?%}.deme-content-li-right-type[data-v-4ab9978a]{font-size:%?28?%;color:#646464;margin-top:%?20?%;letter-spacing:%?1?%}.deme-content-li-right-name[data-v-4ab9978a]{font-size:%?34?%;font-weight:500}.deme-content-li-right[data-v-4ab9978a]{width:70%;float:right}.deme-content-li-img[data-v-4ab9978a]{float:left;width:27%;height:%?230?%}.deme-content-li[data-v-4ab9978a]{clear:both;overflow:hidden;padding:%?36?% 0 %?36?% 0;border-bottom:%?1?% solid #f0f0f0}",""]),t.exports=e}}]);