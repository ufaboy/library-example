(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-690c3bf7"],{"326f":function(e,t,n){},"5e89":function(e,t,n){var c=n("861d"),o=Math.floor;e.exports=function(e){return!c(e)&&isFinite(e)&&o(e)===e}},"6b04":function(e,t,n){"use strict";n("d99d")},"8ba4":function(e,t,n){var c=n("23e7"),o=n("5e89");c({target:"Number",stat:!0},{isInteger:o})},b4d4:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("4de4");var c=n("7a23"),o={class:"books-table"},r={class:"header"},a=Object(c["createTextVNode"])("create"),l={class:"table"},i={class:"thead"},s={class:"td-title"},u={class:"table-paginator"};function d(e,t,n,d,b,g){var f=Object(c["resolveComponent"])("router-link"),p=Object(c["resolveComponent"])("icon-sort-asc"),j=Object(c["resolveComponent"])("icon-sort-desc"),O=Object(c["resolveComponent"])("base-icon"),k=Object(c["resolveComponent"])("filter-modal"),m=Object(c["resolveComponent"])("modal");return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])("header",r,[Object(c["createVNode"])(f,{to:{name:"book-create"},class:"btn create-btn"},{default:Object(c["withCtx"])((function(){return[a]})),_:1}),Object(c["createVNode"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return g.showFilterModal&&g.showFilterModal.apply(g,arguments)})},"filter"),Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"search",class:"search-text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.bookName=t}),placeholder:"Search by name...",onInput:t[3]||(t[3]=function(){return g.searchByName&&g.searchByName.apply(g,arguments)})},null,544),[[c["vModelText"],e.bookName,void 0,{trim:!0}]])]),Object(c["createVNode"])("table",l,[Object(c["createVNode"])("thead",i,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.columns,(function(t,n){return Object(c["openBlock"])(),Object(c["createBlock"])("th",{class:["th",e.columnsClasses[t]],key:n},[Object(c["createVNode"])("div",{class:["table-cell",{active:e.orderBy===t}]},[Object(c["createVNode"])("div",s,Object(c["toDisplayString"])(t),1),Object(c["createVNode"])("div",{class:"td-action",onClick:function(n){return g.sortBy(t,e.ascending?0:1)}},[Object(c["createVNode"])(O,{class:"icon","icon-name":"sort"},{default:Object(c["withCtx"])((function(){return[e.ascending?(Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:0})):(Object(c["openBlock"])(),Object(c["createBlock"])(j,{key:1}))]})),_:1})],8,["onClick"])],2)],2)})),128))]),Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.books.items,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{class:["row",{picante:t.ad}],key:t.id},[Object(c["createVNode"])("td",{class:["td",e.columnsClasses.id],onClick:function(e){return g.openBook(t,"edit")}},Object(c["toDisplayString"])(t.id),11,["onClick"]),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.name],onClick:function(e){return g.openBook(t,"view")}},Object(c["toDisplayString"])(t.name),11,["onClick"]),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.annotation]},Object(c["toDisplayString"])(t.annotation),3),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.genres]},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(t.genres,(function(e,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:n},Object(c["toDisplayString"])(t.genres.length?e.name:""),1)})),128))],2),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.rating]},Object(c["toDisplayString"])(t.rating),3),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.view_count]},Object(c["toDisplayString"])(t.view_count),3),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.last_read]},Object(c["toDisplayString"])(g.getDate(t.last_read)),3),Object(c["createVNode"])("td",{class:["td",e.columnsClasses.updated_at]},Object(c["toDisplayString"])(g.getDate(t.updated_at)),3)],2)})),128))])]),Object(c["createVNode"])("div",u,[e.books._links.first?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:0,class:"btn table-pag__btn",onClick:t[4]||(t[4]=function(t){return g.toPage(e.books._links.first)})},"first ")):Object(c["createCommentVNode"])("",!0),e.books._links.prev?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:1,class:"btn table-pag__btn",onClick:t[5]||(t[5]=function(t){return g.toPage(e.books._links.prev)})},"prev ")):Object(c["createCommentVNode"])("",!0),e.books._links.self?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:2,class:"btn table-pag__btn",onClick:t[6]||(t[6]=function(t){return g.toPage(e.books._links.self)})},Object(c["toDisplayString"])(e.books._meta?e.books._meta.currentPage:""),1)):Object(c["createCommentVNode"])("",!0),e.books._links.next?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:3,class:"btn table-pag__btn",onClick:t[7]||(t[7]=function(t){return g.toPage(e.books._links.next)})},"next ")):Object(c["createCommentVNode"])("",!0),e.books._links.last?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:4,class:"btn table-pag__btn",onClick:t[8]||(t[8]=function(t){return g.toPage(e.books._links.last)})},"last ")):Object(c["createCommentVNode"])("",!0),e.$store.state.main.isMobile?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])("select",{key:5,class:"select",onChange:t[9]||(t[9]=function(){return g.getBooksPage&&g.getBooksPage.apply(g,arguments)}),"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.page=t})},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.pagBtnArr,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("option",{value:e,key:"page-"+t},Object(c["toDisplayString"])(e),9,["value"])})),128))],544)),[[c["vModelSelect"],e.page]]):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])(m,{ref:"filterBookModal"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{onActiveFilter:g.updateFilterPage,onResetFilter:g.resetTable,rating:e.filter.rating,genre:e.filter.genre,ad:e.filter.ad},null,8,["onActiveFilter","onResetFilter","rating","genre","ad"])]})),_:1},512)])}var b=n("5530"),g=n("1da1"),f=(n("96cf"),n("c740"),n("99af"),n("8ba4"),n("a9e3"),n("a630"),n("3ca3"),n("5502")),p=n("d6eb"),j=n("d4f9"),O={class:"header"},k=Object(c["createVNode"])("span",{class:"filter-title"},"filter",-1),m={class:"label"},C=Object(c["createVNode"])("span",{class:"title"},"genre",-1),h={class:"label"},B=Object(c["createVNode"])("span",{class:"title"},"rating",-1),v={class:"switch"},L=Object(c["createVNode"])("span",null,"ad off",-1),N=Object(c["createVNode"])("label",{for:"switch",class:"switch-label"},null,-1),V=Object(c["createVNode"])("span",null,"ad on",-1),y={class:"footer"},w=Object(c["createVNode"])("button",{class:"positive-btn"},"find",-1);function _(e,t,n,o,r,a){var l=Object(c["resolveComponent"])("icon-close"),i=Object(c["resolveComponent"])("base-icon");return Object(c["openBlock"])(),Object(c["createBlock"])("form",{class:"filter rad-shadow",method:"dialog",onSubmit:t[6]||(t[6]=Object(c["withModifiers"])((function(){return a.findBookByFilter&&a.findBookByFilter.apply(a,arguments)}),["prevent"]))},[Object(c["createVNode"])("header",O,[k,Object(c["createVNode"])("button",{class:"close-btn",type:"reset",onClick:t[1]||(t[1]=function(){return a.closeModal&&a.closeModal.apply(a,arguments)})},[Object(c["createVNode"])(i,{class:"icon","icon-name":"close"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l)]})),_:1})])]),Object(c["createVNode"])("label",m,[C,Object(c["withDirectives"])(Object(c["createVNode"])("select",{class:"select",ref:"filterBook",name:"selectGenre","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filter.genre=t})},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.genres,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("optgroup",{key:e.id,label:e.name},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.childes,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("option",{class:"value",value:e,key:e.id},Object(c["toDisplayString"])(e.name),9,["value"])})),128))],8,["label"])})),128))],512),[[c["vModelSelect"],e.filter.genre]])]),Object(c["createVNode"])("label",h,[B,Object(c["withDirectives"])(Object(c["createVNode"])("select",{class:"select","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.filter.rating=t}),name:"selectRating"},[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(5,(function(e){return Object(c["createVNode"])("option",{class:"value",value:e,key:"rating-"+e},Object(c["toDisplayString"])(e),9,["value"])})),64))],512),[[c["vModelSelect"],e.filter.rating]])]),Object(c["createVNode"])("div",v,[L,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"checkbox",id:"switch",class:"switch-input","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.filter.ad=t})},null,512),[[c["vModelCheckbox"],e.filter.ad]]),N,V]),Object(c["createVNode"])("footer",y,[Object(c["createVNode"])("button",{class:"negative-btn",type:"button",onClick:t[5]||(t[5]=function(){return a.resetFilter&&a.resetFilter.apply(a,arguments)})},"reset"),w])],32)}var M=n("fabf"),F={name:"FilterModal",components:{IconClose:M["a"]},props:{rating:Number,ad:Number,genre:Object},data:function(){return{filter:{rating:null,ad:null,genre:{}}}},computed:{genres:function(){return this.$store.state.genre.items},username:function(){return this.$store.state.user.username}},methods:{findBookByFilter:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$emit("active-filter",{genre:Number.isInteger(e.filter.genre.id)?e.filter.genre:null,rating:e.filter.rating,ad:e.filter.ad}),e.closeModal();case 2:case"end":return t.stop()}}),t)})))()},resetFilter:function(){this.$emit("reset-filter"),this.closeModal()},loadFilter:function(){var e,t;this.filter.rating=null!==(e=this.rating)&&void 0!==e?e:null,this.genre&&(this.filter.genre=this.genre),this.filter.ad=null!==(t=Number.isInteger(this.ad))&&void 0!==t?t:null},closeModal:function(){this.$parent.hide("filterBookModal",this)}},created:function(){this.loadFilter()}};n("6b04");F.render=_;var D=F,S={name:"BooksTable",layout:"basement",middleware:[],components:{FilterModal:D,IconSortAsc:p["a"],IconSortDesc:j["a"]},props:{},data:function(){return{books:{items:[],_links:{},_meta:{}},bookName:null,filter:{genre:null,rating:null,ad:null},page:1,pagBtnArr:[],limit:10,ascending:0,orderBy:null,columns:["id","name","annotation","genres","rating","view_count","last_read","updated_at"],columnsClasses:{id:"cell-id",name:"cell-name",annotation:"cell-annotation",genres:"cell-genre",rating:"cell-rating",view_count:"cell-view_count",last_read:"cell-last_read",updated_at:"cell-updated_at"}}},methods:{searchByName:function(){this.getBooksPage()},getDate:function(e){if(!e)return null;var t=new Date(1e3*e);return t?t.toLocaleString("ru-RU",{year:"2-digit",month:"2-digit",day:"numeric"}):null},openBook:function(e,t){var n=this;return Object(g["a"])(regeneratorRuntime.mark((function c(){var o;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return o=e.genres.findIndex((function(e){return"comics"===e.parent.name}))>-1,c.next=3,n.$router.push({name:"edit"===t?"book-edit":o?"book-media":"book-view",params:{id:e.id}});case 3:case"end":return c.stop()}}),c)})))()},resetTable:function(){this.filter.genre=null,this.filter.rating=null,this.filter.ad=null,this.getBooksPage()},updateFilterPage:function(e){null!==e&&void 0!==e&&e.genre&&(this.filter.genre=e.genre),null!==e&&void 0!==e&&e.rating&&(this.filter.rating=e.rating),this.filter.ad=e.ad?1:0,this.getBooksPage()},getBooksPage:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="/book?page=".concat(e.page,"&limit=").concat(e.limit,"&sort=").concat(e.ascending?"":"-").concat(e.orderBy?e.orderBy:"id"),e.bookName&&(n+="&name=".concat(e.bookName)),e.filter.genre&&(n+="&genre_id=".concat(e.filter.genre.id)),e.filter.rating&&(n+="&rating=".concat(e.filter.rating)),Number.isInteger(e.filter.ad)&&(n+="&ad=".concat(e.filter.ad)),e.$loader.show(),t.next=8,e.$get(n);case 8:c=t.sent,e.$loader.hide(),c&&(e.books=c,e.page=c._meta.currentPage,e.pagBtnArr=Array.from({length:c._meta.pageCount},(function(e,t){return t+1})));case 11:case"end":return t.stop()}}),t)})))()},sortBy:function(e,t){this.orderBy=e,this.ascending=t,this.getBooksPage()},getThumbs:function(e){return e.cover_url?"".concat(this.$config.apiUrl,"/").concat(e.cover_url):"/img/book-cover.jpg"},toPage:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.goPage(e.href);case 2:c=n.sent,c?t.books=c:console.log({goPage:c});case 4:case"end":return n.stop()}}),n)})))()},showFilterModal:function(){this.$modal.show("filterBookModal",this)}},computed:Object(b["a"])(Object(b["a"])({},Object(f["b"])({main:function(e){return e.main}})),{},{modalSize:function(){return this.main.isDesktop?600:"100%"}}),watch:{},created:function(){document.title="Table Books"},mounted:function(){this.getBooksPage()},updated:function(){}};n("b7ab");S.render=d;t["default"]=S},b7ab:function(e,t,n){"use strict";n("326f")},d4f9:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createVNode"])("path",{d:"M 7.855469 12.046875 L 6.382812 12.046875 L 6.382812 0.367188 C 6.382812 0.164062 6.21875 0 6.015625 0 L 3.050781 0 C 2.851562 0 2.683594 0.164062 2.683594 0.367188 L 2.683594 12.046875 L 1.214844 12.046875 C 1.074219 12.046875 0.945312 12.128906 0.882812 12.257812 C 0.820312 12.382812 0.839844 12.535156 0.929688 12.644531 L 4.246094 17.597656 C 4.316406 17.683594 4.421875 17.734375 4.535156 17.734375 C 4.644531 17.734375 4.75 17.683594 4.820312 17.597656 L 8.140625 12.644531 C 8.230469 12.535156 8.246094 12.382812 8.183594 12.257812 C 8.125 12.128906 7.996094 12.046875 7.855469 12.046875 Z M 7.855469 12.046875 "},null,-1),r=Object(c["createVNode"])("path",{d:"M 17.089844 17.46875 L 14.640625 10.527344 C 14.589844 10.382812 14.449219 10.285156 14.292969 10.285156 L 13.585938 10.285156 C 13.566406 10.285156 13.546875 10.285156 13.527344 10.289062 C 13.507812 10.285156 13.488281 10.285156 13.46875 10.285156 L 12.777344 10.285156 C 12.621094 10.285156 12.484375 10.382812 12.429688 10.527344 L 9.992188 17.46875 C 9.953125 17.578125 9.96875 17.703125 10.039062 17.800781 C 10.109375 17.898438 10.21875 17.957031 10.339844 17.957031 L 11.398438 17.957031 C 11.5625 17.957031 11.703125 17.851562 11.75 17.695312 L 12.214844 16.167969 L 14.863281 16.167969 L 15.332031 17.695312 C 15.378906 17.851562 15.519531 17.957031 15.683594 17.957031 L 16.742188 17.957031 C 16.863281 17.957031 16.972656 17.898438 17.042969 17.800781 C 17.109375 17.703125 17.128906 17.578125 17.089844 17.46875 Z M 12.65625 14.707031 C 13.097656 13.277344 13.394531 12.289062 13.542969 11.757812 L 14.445312 14.707031 Z M 12.65625 14.707031 "},null,-1),a=Object(c["createVNode"])("path",{d:"M 16.035156 6.253906 L 12.761719 6.253906 L 16.238281 1.257812 C 16.28125 1.195312 16.304688 1.121094 16.304688 1.046875 L 16.304688 0.421875 C 16.304688 0.21875 16.140625 0.0546875 15.9375 0.0546875 L 11.148438 0.0546875 C 10.945312 0.0546875 10.78125 0.21875 10.78125 0.421875 L 10.78125 1.125 C 10.78125 1.328125 10.945312 1.492188 11.148438 1.492188 L 14.230469 1.492188 L 10.75 6.484375 C 10.707031 6.546875 10.683594 6.621094 10.683594 6.695312 L 10.683594 7.328125 C 10.683594 7.53125 10.847656 7.695312 11.050781 7.695312 L 16.035156 7.695312 C 16.238281 7.695312 16.402344 7.53125 16.402344 7.328125 L 16.402344 6.621094 C 16.402344 6.417969 16.238281 6.253906 16.035156 6.253906 Z M 16.035156 6.253906 "},null,-1);function l(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("g",null,[o,r,a])}const i={};i.render=l;t["a"]=i},d6eb:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createVNode"])("path",{d:"M 7.847656 12.046875 L 6.375 12.046875 L 6.375 0.367188 C 6.375 0.164062 6.210938 0 6.007812 0 L 3.046875 0 C 2.84375 0 2.679688 0.164062 2.679688 0.367188 L 2.679688 12.046875 L 1.207031 12.046875 C 1.066406 12.046875 0.9375 12.128906 0.875 12.257812 C 0.8125 12.382812 0.832031 12.535156 0.921875 12.644531 L 4.242188 17.597656 C 4.308594 17.683594 4.414062 17.734375 4.527344 17.734375 C 4.636719 17.734375 4.742188 17.683594 4.8125 17.597656 L 8.132812 12.644531 C 8.222656 12.535156 8.238281 12.382812 8.179688 12.257812 C 8.117188 12.128906 7.988281 12.046875 7.847656 12.046875 Z M 7.847656 12.046875 "},null,-1),r=Object(c["createVNode"])("path",{d:"M 17.082031 7.222656 L 14.632812 0.28125 C 14.582031 0.136719 14.441406 0.0390625 14.285156 0.0390625 L 13.578125 0.0390625 C 13.558594 0.0390625 13.539062 0.0390625 13.519531 0.0429688 C 13.5 0.0390625 13.480469 0.0390625 13.460938 0.0390625 L 12.769531 0.0390625 C 12.613281 0.0390625 12.476562 0.136719 12.421875 0.285156 L 9.984375 7.222656 C 9.945312 7.332031 9.960938 7.457031 10.03125 7.554688 C 10.101562 7.652344 10.210938 7.710938 10.332031 7.710938 L 11.390625 7.710938 C 11.554688 7.710938 11.695312 7.605469 11.742188 7.449219 L 12.207031 5.921875 L 14.855469 5.921875 L 15.324219 7.449219 C 15.371094 7.605469 15.511719 7.710938 15.675781 7.710938 L 16.734375 7.710938 C 16.851562 7.710938 16.964844 7.652344 17.035156 7.554688 C 17.101562 7.457031 17.121094 7.332031 17.082031 7.222656 Z M 12.648438 4.460938 C 13.089844 3.03125 13.386719 2.042969 13.535156 1.515625 L 14.4375 4.460938 Z M 12.648438 4.460938 "},null,-1),a=Object(c["createVNode"])("path",{d:"M 16.027344 16.5 L 12.753906 16.5 L 16.230469 11.503906 C 16.273438 11.441406 16.296875 11.371094 16.296875 11.292969 L 16.296875 10.667969 C 16.296875 10.464844 16.132812 10.300781 15.929688 10.300781 L 11.140625 10.300781 C 10.9375 10.300781 10.773438 10.464844 10.773438 10.667969 L 10.773438 11.371094 C 10.773438 11.574219 10.9375 11.738281 11.140625 11.738281 L 14.222656 11.738281 L 10.742188 16.730469 C 10.699219 16.792969 10.675781 16.867188 10.675781 16.941406 L 10.675781 17.574219 C 10.675781 17.777344 10.839844 17.941406 11.042969 17.941406 L 16.027344 17.941406 C 16.230469 17.941406 16.394531 17.777344 16.394531 17.574219 L 16.394531 16.867188 C 16.394531 16.664062 16.230469 16.5 16.027344 16.5 Z M 16.027344 16.5 "},null,-1);function l(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("g",null,[o,r,a])}const i={};i.render=l;t["a"]=i},d99d:function(e,t,n){},fabf:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createVNode"])("path",{d:"M 11.972656 9.003906 L 17.542969 3.433594 C 18.160156 2.816406 18.160156 1.820312 17.542969 1.207031 L 16.800781 0.460938 C 16.183594 -0.152344 15.1875 -0.152344 14.574219 0.460938 L 9.003906 6.03125 L 3.433594 0.460938 C 2.816406 -0.152344 1.820312 -0.152344 1.207031 0.460938 L 0.460938 1.203125 C -0.152344 1.820312 -0.152344 2.816406 0.460938 3.433594 L 6.03125 9.003906 L 0.460938 14.574219 C -0.152344 15.1875 -0.152344 16.1875 0.460938 16.800781 L 1.207031 17.542969 C 1.820312 18.160156 2.820312 18.160156 3.433594 17.542969 L 9.003906 11.972656 L 14.574219 17.542969 C 15.1875 18.160156 16.1875 18.160156 16.800781 17.542969 L 17.542969 16.800781 C 18.160156 16.183594 18.160156 15.1875 17.542969 14.574219 Z M 11.972656 9.003906 "},null,-1);function r(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("g",null,[o])}const a={};a.render=r;t["a"]=a}}]);
//# sourceMappingURL=chunk-690c3bf7-legacy.d352ba3a.js.map