(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(89)},47:function(e,t,n){},48:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},49:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(10),o=n.n(s),l=(n(47),n(11)),i=n(12),c=n(15),u=n(13),p=n(16),m=(n(48),n(49),n(14)),h=n(7),d=n(21),f=n.n(d),g=n(35),b=n(36),y=n(23),E=(n(61),n(17)),v=n.n(E),w={fontFamily:"sans-serif",textAlign:"center"},k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).onOpenModal=function(){e.setState({open:!0})},e.onCloseModal=function(){e.setState({open:!1})},e.state={open:!1,username:null,password:null,guest:null,userDisplay:!0,guestDisplay:!1,userID:null},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onSubmit",value:function(){var e=Object(g.a)(f.a.mark(function e(t){var n,a,r,s=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(alert("Here!"),t.preventDefault(),console.log(this.state.username,this.state.password),n=this.state,a=n.username,r=n.password,!a||!r){e.next=11;break}return e.next=7,v.a.post("https://clubster-backend.herokuapp.com/api/login",{username:a,password:r}).then(function(e){s.setState({userID:e.data._id}),console.log(s.state.userID)});case 7:return e.next=9,v.a.post("https://clubster-backend.herokuapp.com/api/events".concat(window.location.hash.replace("#",""),"/").concat(this.state.userID),{userID:this.state.userID}).then(function(e){console.log(e.data)});case 9:e.next=13;break;case 11:return e.next=13,v.a.post("https://clubster-backend.herokuapp.com/api/events".concat(window.location.hash.replace("#",""),"/null"),{name:this.state.guest}).then(function(e){console.log(e.data)});case 13:alert("Success!");case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_renderFormUser",value:function(){var e=this;return r.a.createElement("form",{style:{marginTop:20,textAlign:"center",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",null,r.a.createElement("span",{className:"input"},r.a.createElement("input",{type:"text",placeholder:"Username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("span",null))),r.a.createElement("p",null,r.a.createElement("span",{className:"input"},r.a.createElement("input",{type:"text",placeholder:"Password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("span",null))),r.a.createElement("button",{type:"button",onClick:this.onSubmit.bind(this)},"Submit"))}},{key:"_renderFormGuest",value:function(){var e=this;return r.a.createElement("form",{style:{marginTop:20,textAlign:"center",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",null,r.a.createElement("span",{className:"input"},r.a.createElement("input",{type:"text",placeholder:"Enter your name",onChange:function(t){return e.setState({guest:t.target.value})}}),r.a.createElement("span",null))),r.a.createElement("button",{type:"button",onClick:this.onSubmit.bind(this)},"Submit"))}},{key:"render",value:function(){var e=this;this.state.open;return r.a.createElement("div",{id:"App"},r.a.createElement("button",{onClick:this.openModal},"Open Modal"),r.a.createElement("div",{style:w},r.a.createElement("h2",null,"react-responsive-modal"),r.a.createElement("button",{onClick:this.onOpenModal},"Open modal"),r.a.createElement(b.a,{open:!0,onClose:this.onCloseModal,styles:{backgroundColor:"blue"},center:!0},r.a.createElement("h2",null," Sign into the event! "),r.a.createElement(y.AwesomeButton,{type:"primary",onPress:function(){return e.setState({userDisplay:!0,guestDisplay:!1})}},"Sign in as User"),"\xa0",r.a.createElement(y.AwesomeButton,{type:"primary",onPress:function(){return e.setState({userDisplay:!1,guestDisplay:!0})}},"Sign in as Guest"),this.state.userDisplay?this._renderFormUser():this._renderFormGuest())))}}]),t}(r.a.Component);a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,null,r.a.createElement(h.a,{path:"/:id/",component:k})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.7ad52011.chunk.js.map