(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-see-list-see-list"],{"2b91":function(t,i,e){"use strict";e.r(i);var a=e("b924"),n=e("9d63");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("7fda");var r,s=e("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5bbed2ba",null,!1,a["a"],r);i["default"]=l.exports},"3e64":function(t,i,e){var a=e("5532");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("39effb37",a,!0,{sourceMap:!1,shadowMode:!1})},5532:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".index-li[data-v-5bbed2ba]{border-bottom:%?1?% solid #f0f0f0;padding:%?30?% 0 %?30?% 0}.index-li-top[data-v-5bbed2ba]{clear:both;overflow:hidden;font-size:%?38?%}.index-li-top-text[data-v-5bbed2ba]{width:90%;-webkit-line-clamp:1;text-overflow:ellipsis;display:-webkit-inline-box;-webkit-box-orient:vertical;height:%?55?%;overflow:hidden}.index-li-top-img[data-v-5bbed2ba]{width:%?30?%;height:%?30?%;float:right;margin-top:%?10?%}.index-li-date[data-v-5bbed2ba]{margin-top:%?14?%;font-size:%?28?%;color:#969696}",""]),t.exports=i},"7fda":function(t,i,e){"use strict";var a=e("3e64"),n=e.n(a);n.a},"9d63":function(t,i,e){"use strict";e.r(i);var a=e("a03a"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},a03a:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{list:{type:Array,value:[]}},data:function(){return{}},methods:{goH5:function(t){var i=t.currentTarget.dataset.index;console.log(this.list[i]),this.list[i].url_a?uni.navigateTo({url:"/pages/webview/index?url="+this.list[i].url_a}):uni.navigateTo({url:"/pages/webvideo/index?url="+this.list[i].url})}}};i.default=a},b924:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t._l(t.list,(function(i,a){return[e("v-uni-view",{key:a+"_0",staticClass:"index-li",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goH5.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"index-li-top"},[e("v-uni-text",{staticClass:"index-li-top-text"},[t._v(t._s(i.title))]),e("v-uni-image",{staticClass:"index-li-top-img",attrs:{src:"/static/images/zhe.png"}})],1),e("v-uni-view",{staticClass:"index-li-date"},[t._v(t._s(i.addtime))])],1)]}))],2)},o=[]}}]);