(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6483d34"],{"30b9":function(e,o,t){"use strict";t.r(o);var c=t("7a23");const a=Object(c["withScopeId"])("data-v-0b73e52a");Object(c["pushScopeId"])("data-v-0b73e52a");const i={class:"book-container"},l={key:0,class:"book-video"},n={key:0,class:"media-list"},r={class:"media-name"},s={class:"media-video"},d={key:1,class:"book-picture"};Object(c["popScopeId"])();const k=a((e,o,t,a,k,b)=>(Object(c["openBlock"])(),Object(c["createBlock"])("div",i,["video"===b.getTypeBook||"audio"===b.getTypeBook?(Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[e.main.isDesktop?(Object(c["openBlock"])(),Object(c["createBlock"])("ol",n,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.book.files,o=>(Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:{active:o.id===e.activeMedia.id},key:o.id,onClick:t=>e.activeMedia=o},[Object(c["createVNode"])("span",r,Object(c["toDisplayString"])(o.file_name),1)],10,["onClick"]))),128))])):e.main.isMobile?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])("select",{key:1,class:"select","onUpdate:modelValue":o[1]||(o[1]=o=>e.activeMedia=o)},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.book.files,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("option",{value:e,key:e.id},Object(c["toDisplayString"])(e.file_name),9,["value"]))),128))],512)),[[c["vModelSelect"],e.activeMedia]]):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("figure",s,["video/webm"===e.activeMedia.type?(Object(c["openBlock"])(),Object(c["createBlock"])("video",{key:0,src:b.getSrcUrl,controls:""},null,8,["src"])):"audio/mpeg"===e.activeMedia.type?(Object(c["openBlock"])(),Object(c["createBlock"])("audio",{key:1,src:b.getSrcUrl,controls:""},null,8,["src"])):Object(c["createCommentVNode"])("",!0)])])):"picture"===b.getTypeBook?(Object(c["openBlock"])(),Object(c["createBlock"])("div",d,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.book.files,o=>(Object(c["openBlock"])(),Object(c["createBlock"])("img",{class:"book-picture_img",src:b.getSrcImgUrl(o),alt:"",key:o.id,onClick:t=>e.activeImage=b.getSrcImgUrl(o)},null,8,["src","onClick"]))),128))])):Object(c["createCommentVNode"])("",!0)])));var b=t("5502");const p="https://google.com";var u={name:"TheMedia",components:{},props:{bookProps:Object},data:()=>({book:{annotation:null,text:null,genres:[]},activeImage:null,activeImageIndex:0,activeMedia:{type:null,url:null}}),computed:{...Object(b["b"])({main:e=>e.main}),getTypeBook(){return-1!==this.book.genres.findIndex(e=>"picture"===e.name)?"picture":-1!==this.book.genres.findIndex(e=>"audio"===e.name)?"audio":-1!==this.book.genres.findIndex(e=>"video"===e.name)?"video":""},getSrcUrl(){return this.activeMedia.url?`${p}/${this.activeMedia.url}`:""}},watch:{},created(){this.checkBook()},mounted(){},methods:{checkBook(){this.bookProps.id&&this.bookProps.id===+this.$route.params.id?this.book=Object.assign({},this.bookProps):this.loadBook()},async loadBook(){const e="/book/view?id="+this.$route.params.id;try{this.book=await this.$get(e),document.title="Book: "+this.book.name}catch(o){console.log({loadBook:o})}},getSrcImgUrl(e){return e.url?`${p}/${e.url}`:""}}};t("5e02");u.render=k,u.__scopeId="data-v-0b73e52a";o["default"]=u},"5e02":function(e,o,t){"use strict";t("af66")},af66:function(e,o,t){}}]);
//# sourceMappingURL=chunk-d6483d34.ce40dd20.js.map