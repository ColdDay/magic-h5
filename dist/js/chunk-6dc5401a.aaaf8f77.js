(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dc5401a"],{4320:function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"ranking"},[a("Header",{attrs:{title:"排行榜",isLeft:!0,isRight:!0}}),n.isLoading?a("Loading"):n._e(),n.isLoading?n._e():a("van-tabs",{attrs:{type:"card"},on:{click:n.changeTab},model:{value:n.active,callback:function(t){n.active=t},expression:"active"}},n._l(n.rankingTitle,function(t,e){return a("van-tab",{key:e,attrs:{title:t.name}},[a("van-tabs",{attrs:{id:"ranking-tab"},on:{click:n.tabClick}},n._l(n.rankingData[t.id],function(t,e){return a("van-tab",{key:e},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[n._v("\n              "+n._s(t.shortTitle)+"\n            ")]),a("List",{directives:[{name:"show",rawName:"v-show",value:n.currentBook,expression:"currentBook"}],attrs:{data:n.currentBook,isBottom:!0}})],1)}),1)],1)}),1),a("Nav")],1)},i=[],r=(a("96cf"),a("3b8d")),s=(a("e7e5"),a("d399")),c=a("06d0"),o=a("82e7"),u=a("0e17"),g=a("2e90"),k={name:"ranking",components:{Header:c["a"],Nav:o["a"],List:g["a"],Loading:u["a"]},data:function(){return{active:0,isLoading:!0,rankingTitle:[{name:"男生",id:"male",index:0},{name:"电子书",id:"epub",index:0},{name:"女生",id:"female",index:0}],rankingData:{},currentTab:"male",rankingBook:[],currentBook:[]}},created:function(){this.pageInit()},watch:{rankingData:function(){var n=this.rankingData[this.currentTab][0]._id;this.getRanking(n)}},methods:{pageInit:function(){this.getRanking()},tabClick:function(n){s["a"].loading({mask:!0,message:"加载中..."}),this.rankingTitle[this.active].index=n;var t=this.rankingData[this.currentTab][n]._id;this.getRanking(t)},changeTab:function(n){s["a"].loading({mask:!0,message:"加载中..."});var t=this.rankingTitle[n].index;this.currentTab=this.rankingTitle[n].id;var a=this.rankingData[this.currentTab][t]._id;this.getRanking(a)},getRanking:function(){var n=Object(r["a"])(regeneratorRuntime.mark(function n(){var t,a,e,i,r=this,c=arguments;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:"",""!==t){n.next=8;break}return n.next=4,this.axios.get("/ranking");case 4:a=n.sent,1===a.flag?(s["a"].clear(),this.rankingData=a.ranking):(s["a"].clear(),Object(s["a"])(a.msg)),n.next=18;break;case 8:if(!(this.rankingBook.length>0)){n.next=14;break}if(e=this.rankingBook.filter(function(n){return n.id==t}),!(e.length>0)){n.next=14;break}return this.currentBook=e[0].book,s["a"].clear(),n.abrupt("return");case 14:return n.next=16,this.axios.get("/ranking/"+t);case 16:i=n.sent,1===i.flag?(s["a"].clear(),this.rankingBook.push({id:t,book:i.ranking.books}),this.currentBook=i.ranking.books):(s["a"].clear(),Object(s["a"])(i.msg));case 18:setTimeout(function(){r.isLoading=!1},300);case 19:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}},l=k,d=(a("4458"),a("bc87"),a("2877")),h=Object(d["a"])(l,e,i,!1,null,"253d1520",null);t["default"]=h.exports},4458:function(n,t,a){"use strict";var e=a("f740"),i=a.n(e);i.a},bc87:function(n,t,a){"use strict";var e=a("c6c3"),i=a.n(e);i.a},c6c3:function(n,t,a){},f740:function(n,t,a){}}]);
//# sourceMappingURL=chunk-6dc5401a.aaaf8f77.js.map