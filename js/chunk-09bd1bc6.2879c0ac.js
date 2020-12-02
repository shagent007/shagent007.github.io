(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09bd1bc6"],{1681:function(t,e,a){},a844:function(t,e,a){"use strict";a("a9e3");var n=a("5530"),r=(a("1681"),a("8654")),o=a("58df"),i=Object(o["a"])(r["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ee0c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{attrs:{heading:"Книги"}},[a("v-btn",{staticClass:"white--text ma-2",attrs:{color:"indigo"},on:{click:t.addbook}},[t._v(" Добавить новую книгу ")])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{tile:"",headers:t.headers,items:t.items,"items-per-page":5},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-btn",{staticClass:"mr-2",attrs:{outlined:"",small:"",color:"success"},on:{click:function(e){return t.editItem(n.id)}}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{outlined:"",small:"",color:"error"},on:{click:function(e){return t.deleteItem(n.id)}}},[a("v-icon",[t._v("mdi-delete")])],1)]}}])}),a("add-book-modal",{ref:"addbookModal"}),a("confirm-modal",{ref:"confirmModal"})],1)},r=[],o=(a("96cf"),a("1da1")),i=a("d4ec"),s=a("bee2"),c=a("262e"),u=a("2caf"),l=a("9ab4"),d=a("2b0e"),p=a("60a3"),h=a("0e9d"),b=a("0074"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Добавить нового автора")])]),a("v-card-text",[a("v-text-field",{attrs:{label:"Введите Заголовок",type:"text","persistent-hint":"",required:""},model:{value:t.book.title,callback:function(e){t.$set(t.book,"title",e)},expression:"book.title"}}),a("v-textarea",{attrs:{required:"",label:"Введите текст"},model:{value:t.book.text,callback:function(e){t.$set(t.book,"text",e)},expression:"book.text"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.decline}},[t._v(" Отмена ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.accept}},[t._v(" Добавить ")])],1)],1)],1)},v=[],k=(a("d3b7"),function(t){Object(c["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.book=new b["b"],t.modal=!1,t}return Object(s["a"])(a,[{key:"open",value:function(){var t=this;return this.modal=!0,new Promise((function(e,a){t.resolve=e,t.reject=a}))}},{key:"accept",value:function(){this.resolve(this.book),this.modal=!1,this.book=new b["b"]}},{key:"decline",value:function(){this.resolve(new b["b"]),this.modal=!1,this.book=new b["b"]}}]),a}(d["a"]));k=Object(l["a"])([p["a"]],k);var m=k,w=m,x=a("2877"),g=a("6544"),y=a.n(g),j=a("8336"),O=a("b0af"),I=a("99d9"),R=a("169a"),B=a("2fa4"),V=a("8654"),H=a("a844"),M=Object(x["a"])(w,f,v,!1,null,null,null),_=M.exports;y()(M,{VBtn:j["a"],VCard:O["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VDialog:R["a"],VSpacer:B["a"],VTextField:V["a"],VTextarea:H["a"]});var C=a("f03b"),L=a("6fc5"),$=a("0613"),T=function(t){Object(c["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.books=new Array,t.loading=!1,t}return Object(s["a"])(a,[{key:"updateBooks",value:function(t){this.books=t}},{key:"updateLoading",value:function(t){this.loading=t}},{key:"loadBooks",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.loading){t.next=2;break}return t.abrupt("return");case 2:return console.log("its working"),t.next=5,h["a"].books.getAll();case 5:e=t.sent,this.updateBooks(e),this.updateLoading(!0);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateList",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].books.getAll();case 2:e=t.sent,this.updateBooks(e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getBooks",get:function(){return this.books}}]),a}(L["d"]);Object(l["a"])([L["c"]],T.prototype,"updateBooks",null),Object(l["a"])([L["c"]],T.prototype,"updateLoading",null),Object(l["a"])([Object(L["a"])({rawError:!0})],T.prototype,"loadBooks",null),Object(l["a"])([Object(L["a"])({rawError:!0})],T.prototype,"updateList",null),T=Object(l["a"])([Object(L["b"])({store:$["a"],dynamic:!0,name:"book"})],T);var G=Object(L["e"])(T),z=function(t){Object(c["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.headers=[{text:"Название",value:"title"},{text:"",value:"actions",align:"right",sortable:!1}],t.items=new Array,t}return Object(s["a"])(a,[{key:"addbook",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.addbookModal.open();case 2:if(e=t.sent,!e.title||!e.text){t.next=11;break}return a=new b["b"],a.title=e.title,a.text=e.text,t.next=9,h["a"].books.add(a);case 9:return t.next=11,this.updateList;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"editItem",value:function(t){this.$router.push({name:"book",params:{id:t}})}},{key:"deleteItem",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.confirmModal.open();case 2:if(a=t.sent,!a){t.next=8;break}return t.next=6,h["a"].books.delete(e);case 6:return t.next=8,this.updateList();case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateList",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.updateList();case 2:this.items=G.getBooks;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.loadBooks();case 2:this.items=G.getBooks;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(d["a"]);Object(l["a"])([Object(p["c"])("addbookModal")],z.prototype,"addbookModal",void 0),Object(l["a"])([Object(p["c"])("confirmModal")],z.prototype,"confirmModal",void 0),z=Object(l["a"])([Object(p["a"])({components:{AddBookModal:_,ConfirmModal:C["a"]}})],z);var A=z,N=A,E=a("8fea"),F=a("132d"),S=Object(x["a"])(N,n,r,!1,null,null,null);e["default"]=S.exports;y()(S,{VBtn:j["a"],VDataTable:E["a"],VIcon:F["a"]})}}]);
//# sourceMappingURL=chunk-09bd1bc6.2879c0ac.js.map