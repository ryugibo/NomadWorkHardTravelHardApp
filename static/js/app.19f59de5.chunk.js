(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{85:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(8),o=n.n(r),c=n(22),i=n.n(c),a=n(1),s=n.n(a),u=n(83),l=n(3),f=n(19),b=n(11),j=n(33),p=n(52),d=n(84),x=n(58),O=n(7),h=n(0),y=n(43),g=n(120),w="black",m="#3A3D40",D="#1A1C20",v=n(2);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(){var e=Object(h.useState)(!0),t=i()(e,2),n=t[0],r=t[1],c=Object(h.useState)(""),a=i()(c,2),l=a[0],w=a[1],D=Object(h.useState)({}),S=i()(D,2),k=S[0],z=S[1],C=Object(h.useState)(void 0),E=i()(C,2),W=E[0],J=E[1],A=Object(h.useState)(""),B=i()(A,2),I=B[0],N=B[1],V=function(){J(void 0),N("")};return Object(h.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(y.a.getItem("@toDos"));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:z(JSON.parse(e));case 6:case"end":return t.stop()}}),null,null,null,Promise)}(),function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(y.a.getItem("@tab"));case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:r(JSON.parse(e));case 6:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),Object(h.useEffect)((function(){var e;e=k,s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(y.a.setItem("@toDos",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)}),[k]),Object(h.useEffect)((function(){!function(e){s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(y.a.setItem("@tab",JSON.stringify(e)));case 2:case"end":return t.stop()}}),null,null,null,Promise)}(n)}),[n]),Object(v.jsxs)(b.a,{style:T.container,children:[Object(v.jsx)(u.a,{style:"auto"}),Object(v.jsxs)(b.a,{style:T.header,children:[Object(v.jsx)(j.a,{onPress:function(){return r(!0)},children:Object(v.jsx)(f.a,{style:{fontSize:38,fontWeight:"600",color:n?"white":m},children:"Work"})}),Object(v.jsx)(j.a,{onPress:function(){return r(!1)},children:Object(v.jsx)(f.a,{style:{fontSize:38,fontWeight:"600",color:n?m:"white"},children:"Travel"})})]}),Object(v.jsx)(p.a,{onChangeText:function(e){return w(e)},onSubmitEditing:function(){""!==l&&(z((function(e){return P(P({},e),{},o()({},Date.now(),{text:l,working:n,complete:!1}))})),w(""))},value:l,returnKeyType:"done",style:T.input,placeholder:n?"Add a To Do":"Where do you want to go?"}),Object(v.jsx)(d.a,{children:Object.keys(k).sort().map((function(e){return k[e].working===n?Object(v.jsxs)(b.a,{style:T.toDo,children:[Object(v.jsx)(j.a,{style:T.toDoBtn,onPress:function(){return function(e){z((function(t){return P(P({},t),{},o()({},e,P(P({},t[e]),{},{complete:!t[e].complete})))}))}(e)},children:Object(v.jsx)(f.a,{children:k[e].complete?Object(v.jsx)(g.a,{name:"checkbox-active",color:m,size:18}):Object(v.jsx)(g.a,{name:"checkbox-passive",color:"white",size:18})})}),Object(v.jsx)(j.a,{style:{flex:1},onPress:function(){J(e),N(k[e].text)},children:e===W?Object(v.jsx)(p.a,{style:T.toDoEditText,onChangeText:N,onSubmitEditing:function(){return function(e){z((function(t){return P(P({},t),{},o()({},e,P(P({},t[e]),{},{text:I})))})),V()}(e)},value:I,returnKeyType:"done",autoFocus:!0,onEndEditing:V}):Object(v.jsx)(f.a,{style:k[e].complete?T.toDoTextComplete:T.toDoText,children:k[e].text})}),Object(v.jsx)(j.a,{style:T.toDoBtn,onPress:function(){return function(e){"web"===O.a.OS?confirm("Delete To Do?")&&z((function(t){var n=P({},t);return delete n[e],n})):x.a.alert("Delete To Do?","Are you sure?",[{text:"Cancel"},{text:"OK",onPress:function(){z((function(t){var n=P({},t);return delete n[e],n}))}}])}(e)},children:Object(v.jsx)(f.a,{children:Object(v.jsx)(g.a,{name:"trash",color:m,size:18})})})]},e):null}))})]})}var T=l.a.create({container:{flex:1,backgroundColor:w,paddingVertical:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:D,marginBottom:10,paddingVertical:20,borderRadius:15,flexDirection:"row",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500",flex:1},toDoTextComplete:{color:"white",fontSize:16,fontWeight:"500",flex:1,textDecorationLine:"line-through",color:m},toDoEditText:{color:"white",fontSize:16,fontWeight:"500",flex:1},toDoBtn:{paddingHorizontal:20}})},86:function(e,t,n){e.exports=n(114)}},[[86,1,2]]]);
//# sourceMappingURL=app.19f59de5.chunk.js.map