(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{192:function(e,t,c){},193:function(e,t,c){},294:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(32),a=c.n(n),s=(c(192),c(1)),i=(c.p,c(193),c(52)),o=c(31),l=c(89),j=c(7),b=c(20),d=c(305),u=c(298),O=c(299),x=c(308),h=c(43),m=c(2);var p=function(e){var t=JSON.parse(localStorage.getItem("user")),c=Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.a.Item,{children:Object(m.jsx)("a",{href:"/",children:"Home"})}),Object(m.jsx)(d.a.Item,{children:Object(m.jsx)("a",{href:"/userbookings",children:"Bookings"})}),"KrishJ"==t.username&&Object(m.jsx)(d.a.Item,{children:Object(m.jsx)("a",{href:"/admin",children:"Admin"})}),Object(m.jsx)(d.a.Item,{onClick:function(){localStorage.removeItem("user"),window.location.href="/login"},children:Object(m.jsx)("li",{style:{color:"orangered"},children:"Logout"})})]});return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"header bs1",children:Object(m.jsx)(u.a,{gutter:16,justify:"center",children:Object(m.jsx)(O.a,{lg:20,sm:24,xs:24,children:Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsx)("h1",{children:Object(m.jsx)("b",{children:Object(m.jsx)(i.b,{to:"/",style:{color:"orangered"},children:"Easy Ride"})})}),Object(m.jsx)(x.a,{overlay:c,placement:"bottomCenter",children:Object(m.jsx)(h.a,{children:t.username})})]})})})}),Object(m.jsx)("div",{className:"content",children:e.children}),Object(m.jsxs)("div",{className:"footer text-center",children:[Object(m.jsx)("hr",{}),Object(m.jsx)("p",{children:"Desinged and Developed By"}),Object(m.jsx)("p",{children:"Krish"})]})]})},f=c(21),g=c.n(f),y=c(41),v=c(183),N=c(54),w=c.n(N),k=function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.get("/api/cars/getallcars");case 4:c=e.sent,t({type:"GET_ALL_CARS",payload:c.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},I=c(302),D=c(300);var A=function(){return Object(m.jsx)("div",{className:"spinner",children:Object(m.jsx)(D.a,{size:"large"})})},S=c(30),H=c.n(S),L=I.a.RangePicker;var R=function(){var e=Object(b.c)((function(e){return e.carsReducer})).cars,t=Object(b.c)((function(e){return e.alertsReducer})).loading,c=Object(r.useState)([]),n=Object(j.a)(c,2),a=n[0],s=n[1],o=Object(b.b)();return Object(r.useEffect)((function(){o(k())}),[]),Object(r.useEffect)((function(){s(e)}),[e]),Object(m.jsxs)(p,{children:[Object(m.jsx)(u.a,{className:"mt-3",justify:"center",children:Object(m.jsx)(O.a,{lg:20,sm:24,className:"d-flex justify-content-left",children:Object(m.jsx)(L,{showTime:{format:"HH:mm"},format:"MMM DD yyyy HH:mm",onChange:function(t){if(null!=t){var c,r=H()(t[0],"MMM DD yyyy HH:mm"),n=H()(t[1],"MMM DD yyyy HH:mm"),a=[],i=Object(l.a)(e);try{for(i.s();!(c=i.n()).done;){var o=c.value,j=1;if(0==o.bookedTimeSlots.length)a.push(o);else{var b,d=Object(l.a)(o.bookedTimeSlots);try{for(d.s();!(b=d.n()).done;){var u=b.value;if(r.isBetween(u.from,u.to)||n.isBetween(u.from,u.to)||H()(u.from).isBetween(r,n)||H()(u.to).isBetween(r,n)){j=0;break}}}catch(O){d.e(O)}finally{d.f()}j&&a.push(o)}}}catch(O){i.e(O)}finally{i.f()}s(a)}}})})}),1==t&&Object(m.jsx)(A,{}),Object(m.jsx)(u.a,{justify:"center",gutter:{xs:8,sm:16,md:24,lg:32},children:a.map((function(e){return Object(m.jsx)(O.a,{children:Object(m.jsxs)("div",{className:"car p-2 bs1",children:[Object(m.jsx)("img",{src:e.image,className:"carimg"}),Object(m.jsxs)("div",{className:"car-content d-flex align-items-center justify-content-between",children:[Object(m.jsxs)("div",{className:"text-left pl-2",children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsxs)("p",{children:[" Rent Per Hour ",e.rentPerHour," /-"]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn1 mr-2",children:Object(m.jsx)(i.b,{to:"/booking/".concat(e._id),children:"Book Now"})})})]})]})})}))})]})},T=c(303),G=c(304),M=c(88),C=c.n(M);c(138);C.a.init();var B=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.alertsReducer})).loading;return Object(m.jsxs)("div",{className:"login",children:[t&&Object(m.jsx)(A,{}),Object(m.jsxs)(u.a,{gutter:16,className:"d-flex align-items-center",children:[Object(m.jsxs)(O.a,{lg:16,style:{position:"relative"},children:[Object(m.jsx)("img",{className:"w-100","data-aos":"slide-right","data-aos-duration":"1500",src:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"}),Object(m.jsx)("h1",{className:"login-logo"})]}),Object(m.jsx)(O.a,{lg:8,className:"text-left p-5",children:Object(m.jsxs)(T.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var c;e((c=t,function(){var e=Object(y.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.post("/api/users/login",c);case 4:r=e.sent,localStorage.setItem("user",JSON.stringify(r.data)),v.b.success("Login success"),t({type:"LOADING",payload:!1}),setTimeout((function(){window.location.href="/"}),500),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),v.b.error("Invalid Login Credentials"),t({type:"LOADING",payload:!1});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)("hr",{}),Object(m.jsx)(T.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(m.jsx)(G.a,{type:"password"})}),Object(m.jsx)("button",{className:"btn1 mt-2",children:"Login"}),Object(m.jsx)("hr",{}),Object(m.jsx)(i.b,{to:"/register",children:"Click Here to Register"})]})})]})]})};C.a.init();var P=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.alertsReducer})).loading;return Object(m.jsxs)("div",{className:"login",children:[t&&Object(m.jsx)(A,{}),Object(m.jsxs)(u.a,{gutter:16,className:"d-flex align-items-center",children:[Object(m.jsx)(O.a,{lg:16,style:{position:"relative"},children:Object(m.jsx)("img",{className:"w-100","data-aos":"slide-left","data-aos-duration":"1500",src:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"})}),Object(m.jsx)(O.a,{lg:8,className:"text-left p-5",children:Object(m.jsxs)(T.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var c;console.log(t),e((c=t,function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.post("/api/users/register",c);case 4:e.sent,v.b.success("Registration successfull"),setTimeout((function(){window.location.href="/login"}),500),t({type:"LOADING",payload:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),v.b.error("Confirm Password Does Not match"),t({type:"LOADING",payload:!1});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(m.jsx)("h1",{children:"Register"}),Object(m.jsx)("hr",{}),Object(m.jsx)(T.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(m.jsx)(G.a,{type:"password"})}),Object(m.jsx)(T.a.Item,{name:"cpassword",label:"Confirm Password",rules:[{required:!0}],children:Object(m.jsx)(G.a,{type:"password"})}),Object(m.jsx)("button",{className:"btn1 mt-2 mb-3",children:"Register"}),Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/login",children:"Click Here to Login"})]})})]})]})},_=c(301),q=c(307),E=c(306),F=c(175),Y=c.n(F),J=I.a.RangePicker;var K=function(e){var t=e.match,c=Object(b.c)((function(e){return e.carsReducer})).cars,n=Object(b.c)((function(e){return e.alertsReducer})).loading,a=Object(r.useState)({}),s=Object(j.a)(a,2),i=s[0],o=s[1],d=Object(b.b)(),x=Object(r.useState)(),h=Object(j.a)(x,2),f=h[0],N=h[1],I=Object(r.useState)(),D=Object(j.a)(I,2),S=D[0],L=D[1],R=Object(r.useState)(0),T=Object(j.a)(R,2),G=T[0],M=T[1],C=Object(r.useState)(!1),B=Object(j.a)(C,2),P=B[0],F=B[1],K=Object(r.useState)(0),V=Object(j.a)(K,2),z=V[0],U=V[1],Q=Object(r.useState)(!1),W=Object(j.a)(Q,2),Z=W[0],X=W[1];function $(){var e=H()(f,"MMM DD yyyy HH:mm"),t=H()(S,"MMM DD yyyy HH:mm");if(0==i.bookedTimeSlots.length)return!0;var c,r=Object(l.a)(i.bookedTimeSlots);try{for(r.s();!(c=r.n()).done;){var n=c.value;if(e.isBetween(n.from,n.to)||t.isBetween(n.from,n.to)||H()(n.from).isBetween(e,t)||H()(n.to).isBetween(e,t))return!1}}catch(a){r.e(a)}finally{r.f()}return!0}return Object(r.useEffect)((function(){0==c.length?d(k()):o(c.find((function(e){return e._id==t.params.carid})))}),[c]),Object(r.useEffect)((function(){U(G*i.rentPerHour),P&&U(z+30*G)}),[P,G]),Object(m.jsxs)(p,{children:[n&&Object(m.jsx)(A,{}),Object(m.jsxs)(u.a,{justify:"center",className:"d-flex align-items-center",style:{minHeight:"90vh"},children:[Object(m.jsx)(O.a,{lg:10,sm:24,xs:24,className:"p-3",children:Object(m.jsx)("img",{src:i.image,className:"carimg2 bs1 w-100","data-aos":"flip-left","data-aos-duration":"1500"})}),Object(m.jsxs)(O.a,{lg:10,sm:24,xs:24,className:"text-right",children:[Object(m.jsx)(_.a,{type:"horizontal",dashed:!0,children:"Car Info"}),Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsx)("p",{children:i.name}),Object(m.jsxs)("p",{children:[i.rentPerHour," Rent Per hour /-"]}),Object(m.jsxs)("p",{children:["Fuel Type : ",i.fuelType]}),Object(m.jsxs)("p",{children:["Max Persons : ",i.capacity]})]}),Object(m.jsx)(_.a,{type:"horizontal",dashed:!0,children:"Select Time Slots"}),Object(m.jsx)(J,{showTime:{format:"HH:mm"},format:"MMM DD yyyy HH:mm",onChange:function(e){null!=e&&(N(H()(e[0]).format("MMM DD yyyy HH:mm")),L(H()(e[1]).format("MMM DD yyyy HH:mm")),M(e[1].diff(e[0],"hours")))}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn1 mt-2",onClick:function(){X(!0)},children:"See Booked Slots"}),f&&S&&0==$()&&Object(m.jsxs)("div",{children:[console.log("hello"),Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:"This Slot Already booked"})})]}),f&&S&&$()&&Object(m.jsxs)("div",{children:[console.log("hi"),Object(m.jsxs)("p",{children:["Total Hours : ",Object(m.jsx)("b",{children:G})]}),Object(m.jsxs)("p",{children:["Rent Per Hour : ",Object(m.jsx)("b",{children:i.rentPerHour})]}),Object(m.jsx)(q.a,{onChange:function(e){e.target.checked?F(!0):F(!1)},children:"Driver Required"}),Object(m.jsxs)("h3",{children:["Total Amount : ",z]}),Object(m.jsx)(Y.a,{shippingAddress:!0,token:function(e){var t={token:e,user:JSON.parse(localStorage.getItem("user"))._id,car:i._id,totalHours:G,totalAmount:z,driverRequired:P,bookedTimeSlots:{from:f,to:S}};d(function(e){return function(){var t=Object(y.a)(g.a.mark((function t(c){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"LOADING",payload:!0}),t.prev=1,t.next=4,w.a.post("/api/bookings/bookcar",e);case 4:c({type:"LOADING",payload:!1}),v.b.success("Your car booked successfully"),setTimeout((function(){window.location.href="/userbookings"}),500),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),c({type:"LOADING",payload:!1}),v.b.error("Something went wrong , please try later");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},currency:"inr",amount:100*z,stripeKey:"pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ",children:Object(m.jsx)("button",{className:"btn1",children:"Book Now"})})]})]}),i.name&&Object(m.jsx)(E.a,{visible:Z,closable:!1,footer:!1,title:"Booked time slots",children:Object(m.jsxs)("div",{className:"p-2",children:[i.bookedTimeSlots.map((function(e){return Object(m.jsxs)("button",{className:"btn1 mt-2",children:[e.from," - ",e.to]})})),Object(m.jsx)("div",{className:"text-right mt-5",children:Object(m.jsx)("button",{className:"btn1",onClick:function(){X(!1)},children:"CLOSE"})})]})})]})]})};c(293);var V=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.bookingsReducer})).bookings,c=Object(b.c)((function(e){return e.alertsReducer})).loading,n=JSON.parse(localStorage.getItem("user"));return Object(r.useEffect)((function(){e(function(){var e=Object(y.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.get("/api/bookings/getallbookings");case 4:c=e.sent,t({type:"GET_ALL_BOOKINGS",payload:c.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(m.jsxs)(p,{children:[c&&Object(m.jsx)(A,{}),Object(m.jsx)("h3",{className:"text-center mt-2",children:"My Bookings"}),Object(m.jsx)(u.a,{justify:"center",gutter:16,children:Object(m.jsx)(O.a,{lg:16,sm:24,children:t.filter((function(e){return e.user==n._id})).map((function(e){return Object(m.jsxs)(u.a,{gutter:16,className:"bs1 mt-3 text-left",children:[Object(m.jsxs)(O.a,{lg:6,sm:24,children:[Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:e.car.name})}),Object(m.jsxs)("p",{children:["Total hours : ",Object(m.jsx)("b",{children:e.totalHours})]}),Object(m.jsxs)("p",{children:["Rent per hour : ",Object(m.jsx)("b",{children:e.car.rentPerHour})]}),Object(m.jsxs)("p",{children:["Total amount : ",Object(m.jsx)("b",{children:e.totalAmount})]})]}),Object(m.jsxs)(O.a,{lg:12,sm:24,children:[Object(m.jsxs)("p",{children:["Transaction Id : ",Object(m.jsx)("b",{children:e.transactionId})]}),Object(m.jsxs)("p",{children:["From: ",Object(m.jsx)("b",{children:e.bookedTimeSlots.from})]}),Object(m.jsxs)("p",{children:["To: ",Object(m.jsx)("b",{children:e.bookedTimeSlots.to})]}),Object(m.jsxs)("p",{children:["Date of booking: ",Object(m.jsx)("b",{children:H()(e.createdAt).format("MMM DD yyyy")})]})]}),Object(m.jsx)(O.a,{lg:6,sm:24,className:"text-right",children:Object(m.jsx)("img",{style:{borderRadius:5},src:e.car.image,height:"140",className:"p-2"})})]})}))})})]})};var z=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.alertsReducer})).loading;return Object(m.jsxs)(p,{children:[t&&Object(m.jsx)(A,{}),Object(m.jsx)(u.a,{justify:"center mt-5",children:Object(m.jsx)(O.a,{lg:12,sm:24,xs:24,className:"p-2",children:Object(m.jsxs)(T.a,{className:"bs1 p-2",layout:"vertical",onFinish:function(t){var c;t.bookedTimeSlots=[],e((c=t,function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.post("/api/cars/addcar",c);case 4:t({type:"LOADING",payload:!1}),v.b.success("New car added successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(m.jsx)("h3",{children:"Add New Car"}),Object(m.jsx)("hr",{}),Object(m.jsx)(T.a.Item,{name:"name",label:"Car name",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)("button",{className:"btn1",children:"ADD CAR"})})]})})})]})},U=c(310),Q=c(311),W=c(309);I.a.RangePicker;var Z=function(){var e=Object(b.c)((function(e){return e.carsReducer})).cars,t=Object(b.c)((function(e){return e.alertsReducer})).loading,c=Object(r.useState)([]),n=Object(j.a)(c,2),a=n[0],s=n[1],o=Object(b.b)();return Object(r.useEffect)((function(){o(k())}),[]),Object(r.useEffect)((function(){s(e)}),[e]),Object(m.jsxs)(p,{children:[Object(m.jsx)(u.a,{justify:"center",gutter:16,className:"mt-2",children:Object(m.jsx)(O.a,{lg:20,sm:24,children:Object(m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(m.jsx)("h3",{className:"mt-1 mr-2",children:"Admin Panel"}),Object(m.jsx)("button",{className:"btn1",children:Object(m.jsx)("a",{href:"/addcar",children:"ADD CAR"})})]})})}),1==t&&Object(m.jsx)(A,{}),Object(m.jsx)(u.a,{justify:"center",gutter:16,children:a.map((function(e){return Object(m.jsx)(O.a,{lg:5,sm:24,xs:24,children:Object(m.jsxs)("div",{className:"car p-2 bs1",children:[Object(m.jsx)("img",{src:e.image,className:"carimg"}),Object(m.jsxs)("div",{className:"car-content d-flex align-items-center justify-content-between",children:[Object(m.jsxs)("div",{className:"text-left pl-2",children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsxs)("p",{children:[" Rent Per Hour ",e.rentPerHour," /-"]})]}),Object(m.jsxs)("div",{className:"mr-4",children:[Object(m.jsx)(i.b,{to:"/editcar/".concat(e._id),children:Object(m.jsx)(U.a,{className:"mr-3",style:{color:"green",cursor:"pointer"}})}),Object(m.jsx)(W.a,{title:"Are you sure to delete this car?",onConfirm:function(){var t;o((t={carid:e._id},function(){var e=Object(y.a)(g.a.mark((function e(c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.post("/api/cars/deletecar",t);case 4:c({type:"LOADING",payload:!1}),v.b.success("Car deleted successfully"),setTimeout((function(){window.location.reload()}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},okText:"Yes",cancelText:"No",children:Object(m.jsx)(Q.a,{style:{color:"red",cursor:"pointer"}})})]})]})]})})}))})]})};var X=function(e){var t=e.match,c=Object(b.c)((function(e){return e.carsReducer})).cars,n=Object(b.b)(),a=Object(b.c)((function(e){return e.alertsReducer})).loading,s=Object(r.useState)(),i=Object(j.a)(s,2),o=i[0],l=i[1],d=Object(r.useState)([]),x=Object(j.a)(d,2),h=x[0],f=x[1];return Object(r.useEffect)((function(){0==c.length?n(k()):(f(c),l(c.find((function(e){return e._id==t.params.carid}))),console.log(o))}),[c]),Object(m.jsxs)(p,{children:[a&&Object(m.jsx)(A,{}),Object(m.jsx)(u.a,{justify:"center mt-5",children:Object(m.jsx)(O.a,{lg:12,sm:24,xs:24,className:"p-2",children:h.length>0&&Object(m.jsxs)(T.a,{initialValues:o,className:"bs1 p-2",layout:"vertical",onFinish:function(e){var t;e._id=o._id,n((t=e,function(){var e=Object(y.a)(g.a.mark((function e(c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOADING",payload:!0}),e.prev=1,e.next=4,w.a.post("/api/cars/editcar",t);case 4:c({type:"LOADING",payload:!1}),v.b.success("Car details updated successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),c({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),console.log(e)},children:[Object(m.jsx)("h3",{children:"Edit Car"}),Object(m.jsx)("hr",{}),Object(m.jsx)(T.a.Item,{name:"name",label:"Car name",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)(T.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(m.jsx)(G.a,{})}),Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)("button",{className:"btn1",children:"Edit CAR"})})]})})})]})};var $=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(ee,{path:"/",exact:!0,component:R}),Object(m.jsx)(o.b,{path:"/login",exact:!0,component:B}),Object(m.jsx)(o.b,{path:"/register",exact:!0,component:P}),Object(m.jsx)(ee,{path:"/booking/:carid",exact:!0,component:K}),Object(m.jsx)(ee,{path:"/userbookings",exact:!0,component:V}),Object(m.jsx)(ee,{path:"/addcar",exact:!0,component:z}),Object(m.jsx)(ee,{path:"/editcar/:carid",exact:!0,component:X}),Object(m.jsx)(ee,{path:"/admin",exact:!0,component:Z})]})})};function ee(e){return localStorage.getItem("user")?Object(m.jsx)(o.b,Object(s.a)({},e)):Object(m.jsx)(o.a,{to:"/login"})}var te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,312)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},ce=c(97),re=c(178),ne=c(179),ae={loading:!1},se={cars:[]},ie={bookings:[]},oe=Object(re.composeWithDevTools)({}),le=Object(ce.combineReducers)({carsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_CARS"===t.type?Object(s.a)(Object(s.a)({},e),{},{cars:t.payload}):e},alertsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?Object(s.a)(Object(s.a)({},e),{},{loading:t.payload}):e},bookingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_BOOKINGS"===t.type?Object(s.a)(Object(s.a)({},e),{},{bookings:t.payload}):e}}),je=Object(ce.createStore)(le,oe(Object(ce.applyMiddleware)(ne.a)));a.a.render(Object(m.jsx)(b.a,{store:je,children:Object(m.jsx)($,{})}),document.getElementById("root")),te()}},[[294,1,2]]]);
//# sourceMappingURL=main.f97b284c.chunk.js.map