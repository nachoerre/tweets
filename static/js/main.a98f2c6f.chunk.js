(this["webpackJsonpjoseignaciorodriguez-dwfe-9-aplication-web-fullstack"]=this["webpackJsonpjoseignaciorodriguez-dwfe-9-aplication-web-fullstack"]||[]).push([[0],{20:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(21),o=c.n(s),r=(c(26),c(6)),i=c(14);c(38),c(28);0===i.a.apps.length&&i.a.initializeApp({apiKey:"AIzaSyAO6FJjCnr1MvwCpaAr1sH3iBUjnf3h3kA",authDomain:"tweets-nacho.firebaseapp.com",projectId:"tweets-nacho",storageBucket:"tweets-nacho.appspot.com",messagingSenderId:"289657698189",appId:"1:289657698189:web:ff50f2a5e832ac740aafc4",measurementId:"G-3Z2XSKMCHD"});var l=i.a.firestore(),u=i.a.auth(),d=new i.a.auth.GoogleAuthProvider,j=function(){return u.signInWithPopup(d)},b=function(){return u.currentUser},m=(i.a,c.p+"static/media/buttonGoogle.f2256fdf.svg"),O=(c(30),c(1));var h=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"logging-container",children:[Object(O.jsx)("h1",{className:"welcome-title",children:"Bienvenido a Devs_united!"}),Object(O.jsx)("h4",{className:"logging-title",children:"Registrate ahora!"}),Object(O.jsx)("button",{type:"button",onClick:j,className:"button-logging",children:Object(O.jsx)("img",{src:m,className:"google-button",alt:"googleButton"})})]})})},p=c(5);c(32),c(20);var f=function(){var e=Object(p.f)(),t=b(),c=Object(a.useState)(!0),n=Object(r.a)(c,2),s=n[0],o=n[1],i=Object(a.useState)(""),u=Object(r.a)(i,2),d=u[0],j=u[1],m=Object(a.useState)(!1),h=Object(r.a)(m,2),f=h[0],g=h[1],x=Object(a.useState)(""),v=Object(r.a)(x,2),N=v[0],w=v[1],k=function(e){j(e.currentTarget.dataset.color)};return Object(a.useEffect)((function(){""!==d&&0!==N.length&&o(!1)}),[d,N]),Object(O.jsx)(O.Fragment,{children:f?Object(O.jsx)("div",{className:"loader"}):Object(O.jsxs)("div",{className:"welcome-container",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"welcome",children:"WELCOME "}),Object(O.jsxs)("span",{className:"welcome beta",children:[t.displayName,"!"]})]}),Object(O.jsx)("input",{type:"text",placeholder:"Type your username",className:"username",onChange:function(e){w(e.target.value)}}),Object(O.jsx)("div",{className:"p-select-color",children:"Select your favorite color"}),Object(O.jsxs)("div",{className:"colors-container",children:[Object(O.jsx)("button",{className:"color-button beta-background",type:"button",onClick:k,"data-color":"beta"}),Object(O.jsx)("button",{className:"color-button orange",type:"button",onClick:k,"data-color":"orange"}),Object(O.jsx)("button",{className:"color-button yellow",type:"button",onClick:k,"data-color":"yellow"}),Object(O.jsx)("button",{className:"color-button green",type:"button",onClick:k,"data-color":"green"}),Object(O.jsx)("button",{className:"color-button blue",type:"button",onClick:k,"data-color":"blue"}),Object(O.jsx)("button",{className:"color-button purple",type:"button",onClick:k,"data-color":"purple"})]}),Object(O.jsx)("button",{type:"button",className:"continue-button",onClick:function(c){""!==d&&0!==N.length?(g(!0),setTimeout((function(){l.collection("users").doc(t.uid).set({name:t.displayName,email:t.email,color:d,username:N}),g(!1),e("/feed")}),2e3)):alert("You need to pick a user name and a color!")},disabled:s,children:"CONTINUE"})]})})},g=c.p+"static/media/logo.d70e54fc.svg";c(33);var x=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"start-page",children:[Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)("img",{src:g,className:"logo",alt:"logo"})}),Object(O.jsxs)("div",{className:"is-logged-container",children:[null!==u.currentUser&&null!==u.currentUser.uid?Object(O.jsx)(f,{}):Object(O.jsx)(h,{}),Object(O.jsxs)("div",{className:"copyright-footer",children:[Object(O.jsx)("span",{className:"copyright",children:"\xa9 2020 Devs_United - "}),Object(O.jsx)("span",{className:"copyright beta",children:"BETA"})]})]})]})})},v=c(11),N=c(12),w=c(16),k=c.p+"static/media/full-heart.cfe63298.svg",y=c.p+"static/media/emptyHeart.0a53b79e.svg",S=c.p+"static/media/garbage.521b1cb8.svg";c(34);function C(e){var t,c,n=e.tweet,s=n.id,o=n.likesCount,i=n.userId,u=b(),d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=Object(a.useState)(!1),m=Object(r.a)(j,2),h=m[0],p=m[1],f=Object(a.useState)(""),g=Object(r.a)(f,2),x=g[0],v=g[1],C=Object(a.useState)(),I=Object(r.a)(C,2),A=I[0],U=I[1],T=Object(a.useState)(""),E=Object(r.a)(T,2),L=E[0],F=E[1],D=function(){var e=Object(w.a)(Object(N.a)().mark((function e(){var t;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.doc("likes/".concat(null===u||void 0===u?void 0:u.uid,"-").concat(n.id)).get();case 2:t=e.sent,t.data()&&U(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l.doc("users/".concat(n.userId)).get().then((function(e){v(e.data().color),F(e.data().username)})),D()}),[]);var B=function(){var e=Object(w.a)(Object(N.a)().mark((function e(){var t;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(!0),l.doc("tweets/".concat(n.id)).update({likesCount:A?o-1:o+1}),t="likes/".concat(u.uid,"-").concat(s),A?(U(!1),l.doc(t).delete()):(U(!0),l.doc(t).set({userId:u.uid,tweetId:n.id,date:n.date})),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"tweet-card",children:[Object(O.jsx)("img",{className:"tweet-user-img",src:n.photo,alt:"Tweet user"}),Object(O.jsxs)("div",{className:"tweet-container",children:[Object(O.jsxs)("div",{className:"tweet-header",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"username-".concat(x),children:L}),Object(O.jsxs)("span",{className:"date",children:["- ",function(e){var t=new Date(e);return"".concat(t.getDate()).concat(d[t.getMonth()])}(n.date),"."]})]}),i===(null===u||void 0===u?void 0:u.uid)?Object(O.jsx)("button",{onClick:function(){1==window.confirm("\xbfSeguro que quiere borrar su Tweet?")&&(l.doc("tweets/".concat(s)).delete(),l.collection("likes").where("tweetId","==",s).get().then((function(e){e.forEach((function(e){e.ref.delete()}))})))},className:"garbage",children:Object(O.jsx)("img",{src:S,className:"garbage",alt:"garbage"})}):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)("h4",{children:n.tweet}),null!=u?Object(O.jsxs)("div",{className:"tweet-footer",children:[Object(O.jsx)("button",{onClick:B,className:"heart-button",disabled:h,children:A?Object(O.jsx)("img",{src:k,className:"full-heart heart-button",alt:"full-heart"}):Object(O.jsx)("img",{src:y,className:"empty-heart heart-button",alt:"empty-heart"})}),Object(O.jsx)("span",{className:"likes-number ".concat(A?"red-number":""),children:null!==(t=n.likesCount)&&void 0!==t?t:0})]}):Object(O.jsx)("div",{className:"likes-number ".concat(A?"red-number":""),children:null!==(c=n.likesCount)&&void 0!==c?c:0})]})]},n.id)}var I=c.p+"static/media/header-title.0f17436c.svg",A=c.p+"static/media/post.dbd261de.svg",U=c.p+"static/media/smalllogo.5038d75e.svg";c(35);var T=function(){var e=Object(p.f)(),t=b(),c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],o=n[1],i=Object(a.useState)({author:"",likesCount:0,photo:"",tweet:"",user:null!==t?t.uid:"",id:""}),d=Object(r.a)(i,2),j=d[0],m=d[1],h=Object(a.useState)(""),f=Object(r.a)(h,2),g=f[0],x=f[1],N=Object(a.useState)([]),w=Object(r.a)(N,2),k=w[0],y=w[1],S=g.length/2+"%";return Object(a.useEffect)((function(){u.onAuthStateChanged((function(t){if(null!==t){l.doc("users/".concat(t.uid)).get().then((function(e){o(e.data().color)}));var c=l.collection("tweets").orderBy("date","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id})}),(function(){console.error("Sucedio un error")}));y(t)}),(function(e){console.error(e)}));return function(){c()}}e("/login")}))}),[]),Object(O.jsxs)("div",{className:"feed",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("div",{className:"header-container",children:[Object(O.jsx)("button",{type:"button",className:"header-user",onClick:function(t){e("/userprofile")},children:Object(O.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,className:"header-user border-".concat(s),alt:"Header user"})}),Object(O.jsx)("img",{src:U,className:"small-logo",alt:"Small Logo"}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:I,className:"header-title",alt:"Header title"})})]})}),Object(O.jsxs)("div",{className:"tweets-container",children:[Object(O.jsx)("div",{className:"input-container",children:Object(O.jsxs)("div",{className:"input-block",children:[Object(O.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,alt:"User",className:"form-user"}),Object(O.jsxs)("form",{className:"form-container",children:[Object(O.jsx)("textarea",{onChange:function(e){var c=new Date,a=Object(v.a)(Object(v.a)({},j),{},{author:t.displayName,photo:t.photoURL,tweet:e.target.value,userId:t.uid,date:c.getTime()+c.getMinutes()+c.getSeconds()});m(a),x(a.tweet)},className:"text-area",placeholder:"What's happening?",value:g,name:"tweet",min:"0",max:"200",maxLength:"200"}),Object(O.jsx)("div",{className:"tweet-length-bar",style:{width:S}}),Object(O.jsxs)("div",{className:"text-area-details",children:[Object(O.jsx)("span",{className:"tweet-length",children:g.length}),Object(O.jsx)("span",{className:"max-tweet-length",children:"200 max."})]}),Object(O.jsx)("div",{className:"post-button-container",children:Object(O.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();try{l.collection("tweets").add(j)}catch(t){console.error(t)}x("")},disabled:!g,className:"post-button",children:Object(O.jsx)("img",{src:A,className:"post-img",alt:"post-button"})})})]})]})}),Object(O.jsx)("div",{className:"tweets-list",children:k.map((function(e){return Object(O.jsx)(C,{tweet:e},e.id)}))})]})]})},E=c.p+"static/media/arrow.67f326fd.svg",L=c.p+"static/media/imglogout.a36fdd73.svg";c(36);var F=function(){var e=Object(p.f)(),t=b(),c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],o=n[1],i=Object(a.useState)(!1),d=Object(r.a)(i,2),j=d[0],m=d[1],h=Object(a.useState)([]),f=Object(r.a)(h,2),g=f[0],x=f[1],k=Object(a.useState)(""),y=Object(r.a)(k,2),S=y[0],I=y[1],A=function(){m(!0),u.onAuthStateChanged((function(e){null!==e&&l.collection("tweets").where("user","==",e.uid).get().then((function(t){var c=t.docs.map((function(t){return Object(v.a)(Object(v.a)({},t.data()),{},{id:t.id,photoURL:e.photoURL})}));x(c)}))}))},U=function(){var e=Object(w.a)(Object(N.a)().mark((function e(){var c,a;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!1),e.next=3,l.collection("likes").where("userId","==",t.uid).get();case 3:return c=e.sent,e.next=6,Promise.all(c.docs.map(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c,a;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.data().tweetId,e.next=3,l.doc("tweets/".concat(c)).get();case 3:return a=e.sent,e.abrupt("return",Object(v.a)(Object(v.a)({},a.data()),{},{id:a.id}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:a=e.sent,x(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u.onAuthStateChanged((function(t){A(),null!==t?l.doc("users/".concat(t.uid)).get().then((function(e){o(e.data().color),I(e.data().username)})):e("/login")}))}),[]),Object(O.jsxs)("div",{className:"profile-container",children:[Object(O.jsx)("div",{className:"profile-header-container",children:Object(O.jsxs)("div",{className:"profile-header",children:[Object(O.jsx)("button",{type:"button",className:"back-button",onClick:function(t){e("/feed")},children:Object(O.jsxs)("div",{className:"back-div",children:[Object(O.jsx)("img",{src:E,className:"arrow",alt:"arrow"}),Object(O.jsx)("div",{className:"header-username",children:S})]})}),Object(O.jsxs)("button",{type:"button",className:"button-logout",onClick:function(t){u.signOut(),e("/")},children:["LOGOUT",Object(O.jsx)("img",{src:L,className:"img-logout",alt:"logout"})]})]})}),Object(O.jsx)("div",{className:"profile-main-container",children:Object(O.jsxs)("div",{className:"profile-main",children:[Object(O.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,className:"profile-photo border-".concat(s),alt:"user"}),Object(O.jsx)("div",{className:"user-color username-".concat(s),children:S}),Object(O.jsxs)("div",{className:"tabs-buttons",children:[Object(O.jsx)("button",{type:"button",onClick:A,className:"tabs ".concat(j?"tabs-light":""),children:"POSTS"}),Object(O.jsx)("button",{type:"button",onClick:U,className:"tabs ".concat(j?"":"tabs-light"),children:"FAVORITES"})]})]})}),Object(O.jsx)("div",{className:"tweets-list",children:g.map((function(e){return Object(O.jsx)(C,{tweet:e},e.id)}))})]})};var D=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=(t[0],t[1]);return Object(a.useEffect)((function(){u.onAuthStateChanged((function(e){c(e)}))}),[]),Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",element:Object(O.jsx)(x,{})}),Object(O.jsx)(p.a,{path:"/feed",element:Object(O.jsx)(T,{})}),Object(O.jsx)(p.a,{path:"/userprofile",element:Object(O.jsx)(F,{})}),Object(O.jsx)(p.a,{path:"/login",element:Object(O.jsx)(x,{})})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))},M=c(15);o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(M.a,{children:Object(O.jsx)(D,{})})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.a98f2c6f.chunk.js.map