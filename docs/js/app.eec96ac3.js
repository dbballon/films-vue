(function(t){function e(e){for(var i,l,a=e[0],s=e[1],c=e[2],d=0,u=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);f&&f(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],i=!0,a=1;a<r.length;a++){var s=r[a];0!==n[s]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var i={},n={app:0},o=[];function l(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=i,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(r,i,function(e){return t[e]}.bind(null,i));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/herolo-vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"436b":function(t,e,r){},"4aaf":function(t,e,r){"use strict";var i=r("7869"),n=r.n(i);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),i("Films")],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"films"},[r("button",{staticClass:"btn btn-primary btn-lg mb-2 ml-2",on:{click:t.addFilm}},[t._v("Add Film")]),r("div",{staticClass:"films-container"},t._l(t.films,(function(e){return r("Film",{key:e.id,attrs:{filmInfo:e},on:{editFilm:function(r){return t.editFilm(e.id)},deleteFilm:function(r){return t.deleteFilm(e.id)}}})})),1),t.showEdit?r("EditFilm",{attrs:{title:t.editTitle,titles:t.titles,editOkTitle:t.editOkTitle,filmInfo:t.editFilmInfo},on:{"edit-cancel":function(e){t.showEdit=!1},"edit-update":t.updateFilm}}):t._e()],1)},a=[],s=(r("ac4d"),r("8a81"),r("ac6a"),r("bc3a")),c=r.n(s),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"film"},[r("h4",[t._v(t._s(t._f("titleFormat")(t.filmInfo.title)))]),r("p",[t._v("\n\t    Director: "+t._s(t.filmInfo.director)),r("br"),t._v("\n\t    Genre: "+t._s(t.filmInfo.genre)),r("br"),t._v("\n\t    Runtime: "+t._s(t.filmInfo.director)),r("br"),t._v("\n\t    Year: "+t._s(t.filmInfo.year)+"\n\t ")]),r("button",{staticClass:"btn btn-primary m-1",on:{click:t.editFilm}},[t._v("Edit")]),r("button",{staticClass:"btn btn-secondary m-1",on:{click:t.deleteFilm}},[t._v("Delete")])])},d=[],u=(r("28a5"),r("a481"),{name:"Film",props:["filmInfo"],methods:{editFilm:function(){this.$emit("editFilm",this.filmInfo.id)},deleteFilm:function(){this.$emit("deleteFilm",this.filmInfo.id)}},filters:{titleFormat:function(t){if(""!=t)return t=t.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ").replace(/([^a-z0-9\s-:]+)/gi,""),t}}}),m=u,p=(r("7f6a"),r("2877")),h=Object(p["a"])(m,f,d,!1,null,"7481fc92",null),b=h.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editfilm"},[r("b-modal",{attrs:{title:t.title,"header-bg-variant":"dark","header-text-variant":"light","body-bg-variant":"dark","footer-bg-variant":"dark","ok-title":t.editOkTitle,centered:""},on:{ok:t.ok,cancel:t.cancel,hidden:function(e){return t.$emit("edit-cancel")}},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[r("b-form",[r("b-form-group",{staticClass:"text-light",attrs:{label:"Title","label-for":"title"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"title",type:"text",placeholder:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.title))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Director","label-for":"director"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"director",type:"text",placeholder:"Director"},model:{value:t.form.director,callback:function(e){t.$set(t.form,"director",e)},expression:"form.director"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.director))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Genre","label-for":"genre"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"genre",type:"text",placeholder:"Genre"},model:{value:t.form.genre,callback:function(e){t.$set(t.form,"genre",e)},expression:"form.genre"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.genre))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Runtime","label-for":"runtime"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"genre",type:"text",placeholder:"Runtime"},model:{value:t.form.runtime,callback:function(e){t.$set(t.form,"runtime",e)},expression:"form.runtime"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.runtime))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Year","label-for":"year"}},[r("b-form-input",{attrs:{id:"year",type:"text",placeholder:"Year"},model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.year))])],1)],1)],1)],1)},v=[],g=(r("8e6e"),r("c5f6"),r("7cdf"),r("456d"),r("bd86"));function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"EditFilm",data:function(){return{modalShow:!0,form:{id:0,title:"",director:"",genre:"",runtime:"",year:""},errorMessages:{empty:"This field cannot be empty",existingTitle:"This title already exists",yearFormat:"The year format is invalid. Ex. 1974",yearRange:"The year is invalid"},errorFields:{title:"",director:"",genre:"",runtime:"",year:""}}},props:["title","editOkTitle","filmInfo","titles"],methods:{ok:function(t){this.validateForm()?this.$emit("edit-update",this.form):t.preventDefault()},cancel:function(t){this.$emit("edit-cancel")},validateForm:function(){var t=x({},this.errorFields);Object.keys(this.errorFields).map((function(e){t[e]=""})),this.errorFields=x({},t);var e=!0;return""==this.form.title?(this.errorFields.title=this.errorMessages.empty,e=!1):this.titleExists(this.form.title)&&(this.errorFields.title=this.errorMessages.existingTitle,e=!1),""==this.form.director&&(this.errorFields.director=this.errorMessages.empty,e=!1),""==this.form.genre&&(this.errorFields.genre=this.errorMessages.empty,e=!1),""==this.form.runtime&&(this.errorFields.runtime=this.errorMessages.empty,e=!1),""==this.form.year?(this.errorFields.year=this.errorMessages.empty,e=!1):Number.isInteger(Number(this.form.year))?(Number(this.form.year)<1860||Number(this.form.year)>2050)&&(this.errorFields.year=this.errorMessages.yearRange,e=!1):(this.errorFields.year=this.errorMessages.yearFormat,e=!1),e},titleExists:function(t){var e=!0,r=!1,i=void 0;try{for(var n,o=this.titles[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var l=n.value;if(this.titleForm(l)==this.titleForm(t))return!0}}catch(a){r=!0,i=a}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}return!1},titleForm:function(t){if(""!=t)return t=t.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ").replace(/([^a-z0-9\s-:]+)/gi,"").trim(),t}},mounted:function(){this.form=x({},this.filmInfo)}},w=_,O=(r("4aaf"),Object(p["a"])(w,y,v,!1,null,"477f68bd",null)),k=O.exports,C={name:"Films",components:{Film:b,EditFilm:k},data:function(){return{films:[],showEdit:!1,editTitle:"",editOkTitle:"",editFilmInfo:[]}},methods:{addFilm:function(){this.editTitle="Add New film",this.editOkTitle="Add",this.editFilmInfo={id:this.newIndex(),title:"",director:"",year:"",genre:"",runtime:""},this.showEdit="true"},editFilm:function(t){this.editTitle="Edit film",this.editOkTitle="Update",this.editFilmInfo=this.filmById(t),this.showEdit="true"},updateFilm:function(t){this.showEdit=!1;var e=this.filmById(t.id);if(!1===e)this.films.push(t);else for(var r=0;r<this.films.length;r++)this.films[r].id===e.id&&(this.films[r]=t)},deleteFilm:function(t){var e=this;this.$bvModal.msgBoxConfirm("Please confirm that you want to delete.",{title:"Confirm Delete",okVariant:"danger",okTitle:" Yes ",cancelTitle:" Cancel ",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(r){if(!0===r)for(var i=0;i<e.films.length;i++)e.films[i].id===t&&e.films.splice(i,1)}))},newIndex:function(){var t=0,e=!0,r=!1,i=void 0;try{for(var n,o=this.films[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var l=n.value;l.id>t&&(t=l.id)}}catch(a){r=!0,i=a}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}return t+1},filmById:function(t){var e=!0,r=!1,i=void 0;try{for(var n,o=this.films[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var l=n.value;if(l.id===t)return l}}catch(a){r=!0,i=a}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}return!1},closeEdit:function(){}},created:function(){var t=this,e=["tt7549996","tt1386697","tt1856101","tt6324278","tt2328900","tt5503686","tt6189022","tt6105098"];e.map((function(e,r){c.a.get("http://www.omdbapi.com/?i="+e+"&apikey=9be04176").then((function(e){var i={id:r,title:e.data.Title,director:e.data.Director,genre:e.data.Genre,runtime:e.data.Runtime,year:e.data.Year};t.films.push(i)}))}))},computed:{titles:function(){return this.films.map((function(t){return t.title}))}}},j=C,T=(r("6b78"),Object(p["a"])(j,l,a,!1,null,"bf2be206",null)),I=T.exports,E={name:"app",components:{Films:I}},P=E,$=(r("5c0b"),Object(p["a"])(P,n,o,!1,null,null,null)),M=$.exports,S=r("5f5b");r("f9e3"),r("2dd8");i["default"].use(S["a"]),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var i=r("e332"),n=r.n(i);n.a},"66cd":function(t,e,r){},"6b78":function(t,e,r){"use strict";var i=r("436b"),n=r.n(i);n.a},7869:function(t,e,r){},"7f6a":function(t,e,r){"use strict";var i=r("66cd"),n=r.n(i);n.a},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},e332:function(t,e,r){}});
//# sourceMappingURL=app.eec96ac3.js.map