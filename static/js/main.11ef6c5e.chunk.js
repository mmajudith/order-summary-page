(this["webpackJsonporder-summary-page"]=this["webpackJsonporder-summary-page"]||[]).push([[0],{35:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(25),i=s.n(r),j=(s(35),s(14)),l=s.n(j),a=s(26),d=s(30),h=s(27),b=s.n(h),o=s(10),x=s(2),p=s(0);var O=function(e){var t=e.data;console.log(t);var s=t.items,c=t.restaurant,n=t.user;return Object(p.jsx)("div",{className:"order-sum-container",children:0===t.length?Object(p.jsx)("p",{className:"loading",children:"Loading..."}):Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsxs)("div",{className:"rest-wrapper",children:[Object(p.jsx)("h1",{children:c.name}),Object(p.jsxs)("div",{className:"rest-details",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"City: "}),c.city]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Street: "}),c.street]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"State: "}),c.state]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"ZipCode: "}),c.zipcode]})]})]}),Object(p.jsxs)("div",{className:"customer-wrapper",children:[Object(p.jsx)("p",{className:"cus-details",children:"Customer Details"}),Object(p.jsxs)("div",{className:"user",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Name: "}),"  ",n.name]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"About:"})," ",Object(p.jsx)("br",{}),n.about]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Address:"})," ",Object(p.jsx)("br",{}),n.address]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Phone Number: "}),Object(p.jsx)("br",{}),n.phone]})]})]}),Object(p.jsxs)("div",{className:"items-wrapper",children:[Object(p.jsx)("h2",{children:"Items Ordered"}),s.map((function(e,t){return Object(p.jsxs)("div",{className:"items",children:[Object(p.jsx)("p",{style:{width:"20%"},children:e.name}),Object(p.jsx)("p",{style:{textAlign:"justify",width:"20%"},children:e.category}),Object(p.jsx)("p",{style:{textAlign:"right",width:"15%"},children:e.currency}),Object(p.jsx)("p",{style:{textAlign:"right",width:"15%"},children:e.quantity}),Object(p.jsx)("p",{style:{textAlign:"right",width:"15%"},children:e.price}),Object(p.jsxs)("p",{style:{textAlign:"right",width:"15%"},children:[e.tax_pct,"%"]})]},t)}))]})]})})},u=s.p+"static/media/icon-5404123_640.dc8caa5f.png";var g=function(e){var t=e.userData,s=t.user;return Object(p.jsx)("div",{className:"profile-container",children:0===t.length?Object(p.jsx)("p",{className:"loading",children:"Loading..."}):Object(p.jsxs)("div",{className:"user-profile-wrapper",children:[Object(p.jsx)("img",{src:u,alt:"user profile",width:"150",height:"150"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Name: "}),"  ",s.name]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"About:"})," ",Object(p.jsx)("br",{}),s.about]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Address:"})," ",Object(p.jsx)("br",{}),s.address]}),Object(p.jsxs)("div",{className:"food-items",children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Likes:"})," ",s.likes.map((function(e,t){return Object(p.jsxs)("ul",{children:[" ",Object(p.jsx)("li",{children:e})," "]},t)}))]}),Object(p.jsxs)("div",{className:"food-items",children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Dislikes:"})," ",s.dislikes.map((function(e,t){return Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:e})," "]},t)}))]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontWeight:"600"},children:"Phone Number: "}),Object(p.jsx)("br",{}),s.phone]})]})]})})},m={textDecoration:"none",color:"hsl(204, 23.8%, 95.9%)",backgroundColor:"rgb(184, 46, 46)",fontSize:"14px",borderRadius:"20px",padding:"10px"};var f=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1],r=function(){var e=Object(a.a)(l.a.mark((function e(){var t,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://indapi.kumba.io/webdev/assignment");case 3:return t=e.sent,e.next=6,t;case 6:s=e.sent,c=s.data,n(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Home"}),Object(p.jsx)("li",{children:"About"}),Object(p.jsx)("li",{children:"Blog"}),Object(p.jsxs)("li",{children:[" ",Object(p.jsx)(o.b,{to:"/userProfile",style:m,children:"Visit user profile"})]})]})}),Object(p.jsx)(x.a,{exact:!0,path:"/",children:Object(p.jsx)(O,{data:s})}),Object(p.jsx)(x.a,{exact:!0,path:"/userProfile",children:Object(p.jsx)(g,{userData:s})})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(f,{})})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.11ef6c5e.chunk.js.map