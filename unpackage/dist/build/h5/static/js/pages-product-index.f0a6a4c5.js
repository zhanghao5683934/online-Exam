(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-index","components-article-list-article-list"],{"0575":function(t,a,i){"use strict";i.r(a);var e=i("29de"),n=i("3368");for(var r in n)"default"!==r&&function(t){i.d(a,t,(function(){return n[t]}))}(r);i("b618");var l,s=i("f0c5"),o=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"15574964",null,!1,e["a"],l);a["default"]=o.exports},"09b0":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={props:{list:{type:Array,value:[]}},data:function(){return{}},methods:{goH5:function(t){console.log(t.currentTarget),"1"!=e.globalData.first_read&&uni.request({url:e.globalData.site_url+"/appapi/?s=Home.AddReadScore",method:"GET",data:{uid:e.globalData.userInfo.id,token:e.globalData.userInfo.token,news_id:t.currentTarget.dataset.id},success:function(t){if(0==t.data.data.code){var a=t.data.data.info["score"];uni.showToast({title:"积分+"+a,image:"../../static/images/jifen_shan.png",mask:!0,duration:2e3})}}}),uni.navigateTo({url:"/pages/webview/index?url="+t.currentTarget.dataset.url})}}};a.default=n},"29de":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return r})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"nav"},[i("v-uni-scroll-view",{staticClass:"article-nav",attrs:{"scroll-x":"true"}},[t._l(t.navList,(function(a,e){return[i("v-uni-view",{staticClass:"article-nav-li",class:[t.navIndex==e?"article-nav-li-select":""],attrs:{"data-id":a.id,"data-index":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeType.apply(void 0,arguments)}}},[t._v(t._s(a.name))])]}))],2)],1),i("v-uni-view",{staticClass:"nav-article"},[i("articleList",{attrs:{list:t.list}})],1)],1)},r=[]},"31f0":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".nav-article[data-v-15574964]{width:94%;margin:0 auto}.nav[data-v-15574964]{width:100%;height:54px}.article-nav[data-v-15574964]{white-space:nowrap;overflow:hidden;height:54px}.article-nav-li[data-v-15574964]{padding:%?14?% %?20?% %?14?% %?20?%;border-radius:%?6?%;background:#f5f5f5;color:#787878;margin-left:3%;font-size:%?28?%;letter-spacing:%?1?%;display:inline-block;margin-top:%?30?%;white-space:normal}.article-nav-li-select[data-v-15574964]{background:-webkit-linear-gradient(top,#ff9000,#f64330);background:linear-gradient(180deg,#ff9000,#f64330);color:#fff}",""]),t.exports=a},3368:function(t,a,i){"use strict";i.r(a);var e=i("95e7"),n=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(a,t,(function(){return e[t]}))}(r);a["default"]=n.a},6800:function(t,a,i){"use strict";i.r(a);var e=i("09b0"),n=i.n(e);for(var r in e)"default"!==r&&function(t){i.d(a,t,(function(){return e[t]}))}(r);a["default"]=n.a},7184:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".article-list-li-right-date[data-v-5adc1a9e]{font-size:%?28?%;margin-top:%?46?%;color:#969696}.article-list-li-right-title[data-v-5adc1a9e]{font-size:%?36?%;letter-spacing:%?1?%;font-weight:500;overflow:hidden;-webkit-line-clamp:2;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;height:%?98?%}.article-list-li-right[data-v-5adc1a9e]{float:left;width:64%;margin-left:4%}.article-list-li[data-v-5adc1a9e]{clear:both;overflow:hidden;height:%?170?%;padding:%?40?% 0 %?40?% 0;border-bottom:%?1?% solid #f0f0f0;width:100%}.article-list-li-thumb[data-v-5adc1a9e]{width:32%;height:100%;float:left}",""]),t.exports=a},"72e6":function(t,a,i){var e=i("7184");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("6a2a8f84",e,!0,{sourceMap:!1,shadowMode:!1})},"95e7":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("9a77")),r=e(i("89dc")),l=getApp(),s={components:{articleList:n.default},data:function(){return{navIndex:0,navList:[],list:[],id:0,page:1,isBottom:!1}},onLoad:function(){var t=this,a=l.globalData.site_url+"/appapi/?s=Home.Getproductmenu";r.default.requestApi(a,{}).then((function(a){t.navList=a.data.info;var i=l.globalData.site_url+"/appapi/?s=Home.Getproductlist";r.default.requestApi(i,{listid:a.data.info[0].id,p:1}).then((function(a){t.list=a.data.info[0].list}))}))},onReachBottom:function(){var t=this,a=this,i=this.page+1,e=this.id;this.page=i;var n=l.globalData.site_url+"/appapi/?s=Home.Getproductlist";r.default.requestApi(n,{listid:e,p:i}).then((function(i){i.data.info[0].list.length<10&&(a.isBottom=!0);for(var e=t.list,n=0;n<i.data.info[0].list.length;n++)e.push(i.data.info[0][n]);t.list=e}))},methods:{changeType:function(t){var a=this;this.navIndex=t.currentTarget.dataset.index,this.id=t.currentTarget.dataset.id;var i=l.globalData.site_url+"/appapi/?s=Home.Getproductlist";r.default.requestApi(i,{listid:t.currentTarget.dataset.id,p:1}).then((function(t){a.list=t.data.info[0].list,a.page=1}))}}};a.default=s},"9a77":function(t,a,i){"use strict";i.r(a);var e=i("adcc"),n=i("6800");for(var r in n)"default"!==r&&function(t){i.d(a,t,(function(){return n[t]}))}(r);i("f4cc");var l,s=i("f0c5"),o=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"5adc1a9e",null,!1,e["a"],l);a["default"]=o.exports},a7da:function(t,a,i){var e=i("31f0");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("27b3c640",e,!0,{sourceMap:!1,shadowMode:!1})},adcc:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return r})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[t._l(t.list,(function(a,e){return[i("v-uni-view",{key:e+"_0",staticClass:"article-list-li",attrs:{"data-id":a.id,"data-url":a.url},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goH5.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"article-list-li-thumb",attrs:{src:a.thumb}}),i("v-uni-view",{staticClass:"article-list-li-right"},[i("v-uni-view",{staticClass:"article-list-li-right-title"},[t._v(t._s(a.title))]),i("v-uni-view",{staticClass:"article-list-li-right-date"},[t._v(t._s(a.date))])],1)],1)]}))],2)},r=[]},b618:function(t,a,i){"use strict";var e=i("a7da"),n=i.n(e);n.a},f4cc:function(t,a,i){"use strict";var e=i("72e6"),n=i.n(e);n.a}}]);