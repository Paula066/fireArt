(this["webpackJsonpfire-art"]=this["webpackJsonpfire-art"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return S}));var c,a=n(0),s=n.n(a),i=n(15),r=n.n(i),o=n(11),l=n(3),j=(n(30),n(10)),d=n.p+"static/media/trivia-logo.b5aac9fc.png",u=n(22),b=n(23),O=function(){function e(){Object(u.a)(this,e)}return Object(b.a)(e,null,[{key:"get",value:function(e,t,n){return fetch("".concat(e,"/api.php?amount=").concat(t,"&difficulty=").concat(n,"&type=boolean"),{mode:"cors",method:"GET"}).then((function(e){return e.json()}))}}]),e}(),m=n(8),_=n(25),p=n(14);!function(e){e.GET_QUESTION="GET_QUESTION",e.CHECK_QUESTION="CHECK_QUESTION"}(c||(c={}));var x,h={question:null,user_answer:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.GET_QUESTION:return Object(p.a)(Object(p.a)({},e),{},{question:t.payload});case c.CHECK_QUESTION:return Object(p.a)(Object(p.a)({},e),{},{user_answer:[].concat(Object(_.a)(e.user_answer),[t.payload])});default:return e}};n(36);!function(e){e.VIDEO_GAME="/video-game",e.RATING="/rating",e.HOME="/"}(x||(x={}));var N=n(1),f=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)("hard"),r=Object(j.a)(i,2),o=r[0],u=r[1],b=Object(a.useState)(!1),_=Object(j.a)(b,2),p=_[0],h=_[1],v=Object(l.f)(),f=Object(m.b)(),g=function(e){f({type:c.GET_QUESTION,payload:e}),v.push("".concat(x.VIDEO_GAME,"/0"))},E=function(e,t){O.get(e,n,t).then(g)};return Object(N.jsxs)("div",{className:"welcomeTrivia",children:[Object(N.jsxs)("div",{className:"decorationBox",children:[Object(N.jsx)("span",{className:"decoration decoration--1"}),Object(N.jsx)("span",{className:"decoration decoration--2"}),Object(N.jsx)("span",{className:"decoration decoration--3"}),Object(N.jsx)("span",{className:"decoration decoration--4"}),Object(N.jsx)("span",{className:"decoration decoration--5"})]}),Object(N.jsxs)("div",{className:"container welcomeTrivia__wrapper",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{className:"welcomeTrivia__header",children:"Welcome to the"}),Object(N.jsx)("img",{className:"welcomeTrivia__logo",src:d})]}),Object(N.jsxs)("div",{className:"welcomeTrivia__form",children:[Object(N.jsx)("span",{className:"welcomeTrivia__text welcomeTrivia__text--difficulty",children:"Difficulty"}),Object(N.jsx)("div",{className:"welcomeTrivia__difficulty",children:Object(N.jsxs)("select",{className:"welcomeTrivia__select inputElement",onChange:function(e){var t=e.currentTarget.value;u(t)},children:[Object(N.jsx)("option",{value:"hard",children:"hard"}),Object(N.jsx)("option",{value:"easy",children:"easy"})]})}),Object(N.jsx)("span",{className:"welcomeTrivia__text welcomeTrivia__text--amount",children:"Amount"}),Object(N.jsx)("input",{pattern:"\\d*",value:n,onInput:function(e){var t=e.currentTarget.value;/^\d*$/.test(t)&&s(t)},className:"welcomeTrivia__amount inputElement ".concat(p?"welcomeTrivia__amount--wrongValidation":"")}),Object(N.jsx)("button",{onClick:function(){""!==n?E("https://opentdb.com",o):h(!0)},className:"welcomeTrivia__button buttonElement",children:"START"})]})]})]})},g=(n(42),function(e){var t=e.completed,n=e.amountQuestion;return Object(N.jsx)("div",{className:"progressBar",children:Object(N.jsx)("div",{style:{width:"".concat(100/n*t,"% "),backgroundColor:"#FF7878",transition:"width .3s"},className:"progressBar__fill",children:Object(N.jsxs)("span",{className:"progressBar__label",children:[Object(N.jsx)("span",{children:"".concat(t>=10?"":0).concat(t,"/")}),"".concat(n)]})})})}),E=function(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'")},T=(n(43),function(){var e,t=Object(m.c)((function(e){return e.playerQuestion})).question,n=Object(l.g)().id,s=Object(l.f)(),i=Object(m.b)(),r=null===t||void 0===t?void 0:t.results.length;n&&t||s.push(x.HOME);var o=function(e){parseInt(n)+1>r?s.push("".concat(x.RATING)):(i({type:c.CHECK_QUESTION,payload:e}),s.push("".concat(x.VIDEO_GAME,"/").concat(parseInt(n,10)+1)))};Object(a.useEffect)((function(){(null===t||void 0===t?void 0:t.results[parseInt(n,10)])||s.push(x.RATING)}),[n]);var j=(null===t||void 0===t||null===(e=t.results[parseInt(n,10)])||void 0===e?void 0:e.question)||"";return Object(N.jsxs)("div",{className:"entertainment",children:[Object(N.jsxs)("div",{className:"decorationBox",children:[Object(N.jsx)("span",{className:"entertainment__decoration entertainment__decoration--1"}),Object(N.jsx)("span",{className:"entertainment__decoration entertainment__decoration--2"}),Object(N.jsx)("span",{className:"entertainment__decoration entertainment__decoration--3"}),Object(N.jsx)("span",{className:"entertainment__decoration entertainment__decoration--4"}),Object(N.jsx)("span",{className:"entertainment__decoration entertainment__decoration--5"})]}),Object(N.jsxs)("div",{className:"container entertainment__wrapper",children:[Object(N.jsxs)("h4",{className:"entertainment__header",children:["Entertainment: ",Object(N.jsx)("br",{}),"Videogames"]}),Object(N.jsx)("span",{className:"entertainment__level",children:"level 1"}),Object(N.jsx)(g,{amountQuestion:r,completed:parseInt(n,10)+1}),Object(N.jsx)("p",{className:"entertainment__question",children:E(j)}),Object(N.jsxs)("div",{className:"entertainment__buttonBox",children:[Object(N.jsx)("button",{onClick:function(){return o("True")},className:"buttonElement",children:"TRUE"}),Object(N.jsx)("button",{onClick:function(){return o("False")},className:"buttonElement",children:"FALSE"})]})]})]})}),w=(n(44),n.p+"static/media/user.2224bc3d.svg"),I=function(){var e=Object(m.c)((function(e){return e.playerQuestion})),t=e.question,n=e.user_answer,c=Object(a.useState)(!0),s=Object(j.a)(c,2),i=s[0],r=s[1],o=Object(l.f)(),d=null===t||void 0===t?void 0:t.results.length,u=function(){o.push(x.HOME)};return Object(a.useEffect)((function(){"undefined"===typeof d&&r(!1)}),[]),Object(N.jsx)("div",{className:"rating",children:Object(N.jsx)("div",{className:"container rating__wrapper",children:i?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"decorationBox",children:[Object(N.jsx)("span",{className:"decoration decoration--1"}),Object(N.jsx)("span",{className:"decoration decoration--2"}),Object(N.jsx)("span",{className:"decoration decoration--3"}),Object(N.jsx)("span",{className:"decoration decoration--4"}),Object(N.jsx)("span",{className:"decoration decoration--5"}),Object(N.jsx)("span",{className:"decoration decoration--6"})]}),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"rating__scoredBox",children:[Object(N.jsx)("img",{src:w}),Object(N.jsxs)("p",{className:"rating__scored",children:["You scored",Object(N.jsx)("span",{children:null===t||void 0===t?void 0:t.results.filter((function(e,t){return e.correct_answer===n[t]})).length}),"/",d]}),Object(N.jsx)("span",{onClick:u,className:"rating__cancelIcon"})]})}),Object(N.jsx)("div",{className:"rating__boxes",children:null===t||void 0===t?void 0:t.results.map((function(e,t){var c=e.question,a=e.correct_answer;return Object(N.jsx)("div",{className:"rating__box rating__box--".concat(a===n[t]?"correctAnswer":"incorrectAnswer"),children:Object(N.jsx)("p",{children:E(c)})},t)}))}),Object(N.jsx)("button",{onClick:u,className:"rating__button buttonElement",children:"PLAY AGAIN"})]}):Object(N.jsx)("button",{onClick:u,className:"rating__button buttonElement",children:"PLAY AGAIN"})})})},y=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(o.a,{children:Object(N.jsxs)(l.c,{children:[Object(N.jsx)(l.a,{path:"".concat(x.VIDEO_GAME,"/:id?"),children:Object(N.jsx)(T,{})}),Object(N.jsx)(l.a,{path:x.RATING,children:Object(N.jsx)(I,{})}),Object(N.jsx)(l.a,{exact:!0,path:x.HOME,children:Object(N.jsx)(f,{})})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},C=n(21),S=Object(C.b)(Object(C.a)({playerQuestion:v}));r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(m.a,{store:S,children:Object(N.jsx)(y,{})})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.889dbdfe.chunk.js.map