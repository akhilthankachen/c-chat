webpackJsonp([1],{0:function(e,t){},"1hzw":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat"},[s("h4",{attrs:{id:"status-bottom"}},[e._v(e._s(e.status))]),e._v(" "),s("div",{attrs:{id:"status"}}),e._v(" "),s("div",{attrs:{id:"pair"}}),e._v(" "),s("div",{attrs:{id:"chat"}},[s("br"),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-block",attrs:{id:"messages"}},e._l(e.messages,function(t){return s("div",{domProps:{innerHTML:e._s(t)}})}))]),e._v(" "),s("br"),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textarea,expression:"textarea"}],staticClass:"message-box",attrs:{id:"textarea",placeholder:"Enter message ...."},domProps:{value:e.textarea},on:{input:function(t){t.target.composing||(e.textarea=t.target.value)}}}),s("button",{staticClass:"btn btn-danger float-right",attrs:{id:"send"},on:{click:e.sendData}},[e._v("SEND")]),e._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{id:"clear"},on:{click:e.clearBtn}},[e._v("Clear")]),e._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{id:"stranger"},on:{click:e.strangeBtn}},[e._v("find a random stranger")])])])},n=[],r={render:a,staticRenderFns:n};t.a=r},"660j":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login-forum"}},[s("img",{attrs:{src:"static/logo.png"}}),e._v(" "),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"lastname",alt:"Nick name",placeholder:"nick name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),s("div",{staticStyle:{display:"none"},attrs:{id:"checkboxes"}},[s("h2",[e._v("Q. which year won last sargam")]),e._v(" "),s("br"),e._v(" "),s("label",[e._v("1st")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"radio",value:"first"},domProps:{checked:e._q(e.password,"first")},on:{change:function(t){e.password="first"}}}),e._v(" "),s("label",[e._v("2nd")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"radio",value:"second"},domProps:{checked:e._q(e.password,"second")},on:{change:function(t){e.password="second"}}}),e._v(" "),s("label",[e._v("3rd")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"radio",value:"third"},domProps:{checked:e._q(e.password,"third")},on:{change:function(t){e.password="third"}}}),e._v(" "),s("label",[e._v("4th")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"radio",value:"fourth"},domProps:{checked:e._q(e.password,"fourth")},on:{change:function(t){e.password="fourth"}}})]),e._v(" "),s("br"),e._v(" "),s("select",{attrs:{name:"gender"}},[s("option",{attrs:{value:"male"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[e._v("male")]),e._v(" "),s("option",{attrs:{value:"female"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[e._v("female")])]),e._v(" "),s("button",{on:{click:function(t){t.preventDefault(),e.submit(t)}}},[e._v("Lets Go")])])},n=[],r={render:a,staticRenderFns:n};t.a=r},BDB1:function(e,t){},CMJ1:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"app"}},[e._v("\n  TEST\n")])},n=[],r={render:a,staticRenderFns:n};t.a=r},G0Fh:function(e,t){},LVa1:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"about container"},[e._v("\n  ABOUT\n")])},n=[],r={render:a,staticRenderFns:n};t.a=r},M93x:function(e,t,s){"use strict";function a(e){s("G0Fh")}var n=s("xJD8"),r=s("CMJ1"),o=s("VU/8"),i=a,c=o(n.a,r.a,!1,i,null,null);c.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=s("7+uW"),a=(s("M93x"),s("/ocq")),n=s("8+8L"),r=s("ePsb"),o=s("c27y"),i=s("hMcO"),c=s.n(i);t.a.use(c.a,"http://139.59.95.91:80"),t.a.config.productionTip=!1,t.a.use(n.a),t.a.use(a.a);var u=new a.a({mode:"history",base:e,routes:[{path:"/",component:r.a},{path:"/about",component:o.a}]});new t.a({router:u,template:'\n    <div id=\'app\'>\n      \x3c!--<nav id="header" class="navbar navbar-fixed-top navbar-inverse">\n      <div id="header-container" class="container navbar-container">\n          <div class="navbar-header">\n              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n                  <span class="sr-only">Toggle navigation</span>\n                  <span class="icon-bar"></span>\n                  <span class="icon-bar"></span>\n                  <span class="icon-bar"></span>\n              </button>\n              <a id="brand" class="navbar-brand" href="#">C-CHAT</a>\n          </div>\n          <div id="navbar" class="collapse navbar-collapse">\n              <ul class="nav navbar-nav">\n                  <li><router-link to="/">Chat</router-link></li>\n                  <li><router-link to="/about">About</router-link></li>\n              </ul>\n          </div>\n      </div>\n      </nav>--\x3e\n      <router-view></router-view>\n    </div>\n  '}).$mount("#app")}.call(t,"/")},WFrY:function(e,t,s){"use strict";var a=s("pFYg"),n=s.n(a);t.a={name:"socket",data:function(){return{user:{},status:"No user connected",messages:[],textarea:"",pair:null,pos:null,posUsername:null,remote:"http://139.59.95.91:80/"}},sockets:{connect:function(){console.log("socket connected")},output:function(e){if(e.length)for(var t=0;t<e.length;t++){var s;s='<div class = "chat-message">'+e[t].name+": "+e[t].message+"</div>",this.messages.push(s),console.log("i amxxxx here")}},status:function(e){this.setStatus("object"===(void 0===e?"undefined":n()(e))?e.message:e),e.clear&&(this.textarea="")},connectedPair:function(e){this.pair=e.pos_a,this.pos=e.pos_b,this.posUsername=e.posUsername,this.user.username===this.posUsername?this.setStatus("connected with yourself"):this.setStatus("connected with "+this.posUsername)}},created:function(){this.user=window.localStorage.getItem("user"),this.user=JSON.parse(this.user)},methods:{setStatus:function(e){this.status=e},sendData:function(){null===pair&&null===pos?this.setStatus("User not connected"):(this.$socket.emit("input",{name:this.user.username,message:this.textarea,pairPos:this.pair,pos:this.pos}),this.setStatus("Message sent"),this.textarea="")},strangeBtn:function(){console.log("hello brother"),this.$socket.emit("findStranger",this.user.username),this.setStatus("connecting...."),this.messages=[]},clearBtn:function(){this.messages=[]}}}},Zs8U:function(e,t,s){"use strict";t.a={name:"about",data:function(){return{}}}},c27y:function(e,t,s){"use strict";function a(e){s("egNZ")}var n=s("Zs8U"),r=s("LVa1"),o=s("VU/8"),i=a,c=o(n.a,r.a,!1,i,"data-v-5e986889",null);t.a=c.exports},dLwb:function(e,t,s){"use strict";var a=s("mvHQ"),n=s.n(a),r=s("xJsL"),o=s("qKEG");t.a={components:{login:r.a,socket:o.a},name:"chat",data:function(){return{registered:!1,remote:"http://139.59.95.91:4000/"}},methods:{changeReg:function(){this.registered=!0}},created:function(){var e=window.localStorage.getItem("token");if(e){console.log("i was here"),e=JSON.parse(e);var t=e.token;1==e.success&&this.$http.get("http://139.59.95.91:80/users/chat",{headers:{Authorization:t,Accept:"application/json"}}).then(function(t){e=JSON.parse(t.bodyText),1==e.success?(this.registered=!0,window.localStorage.setItem("user",n()(e.user))):this.registered=!1})}}}},ePsb:function(e,t,s){"use strict";function a(e){s("eaq2")}var n=s("dLwb"),r=s("xVp8"),o=s("VU/8"),i=a,c=o(n.a,r.a,!1,i,"data-v-4ba9749f",null);t.a=c.exports},eaq2:function(e,t){},egNZ:function(e,t){},iaUO:function(e,t){},"nKb+":function(e,t,s){"use strict";var a=s("mvHQ"),n=s.n(a);t.a={name:"login",data:function(){return{username:"",jsonData:{},error:"",password:"",gender:"",remote:"http://139.59.95.91:80/"}},methods:{submit:function(){if(""===this.username||this.password===[])this.error="Enter user name or password";else{console.log(!0+"eeeeeS"),this.$http.post("http://139.59.95.91:80/users/register",{username:this.username,gender:this.gender}).then(function(e){this.jsonData=JSON.parse(e.bodyText),console.log(this.jsonData),console.log(this.jsonData.success),1==this.jsonData.success&&this.$http.post("http://139.59.95.91:80/users/authenticate",{username:this.username,password:!0}).then(function(e){console.log(e),this.jsonData=JSON.parse(e.bodyText),1==this.jsonData.success?(window.localStorage.setItem("token",n()(this.jsonData)),console.log("token stored"),this.$http.get("http://139.59.95.91:80/users/chat",{headers:{Authorization:this.jsonData.token,Accept:"application/json"}}).then(function(e){this.jsonData=JSON.parse(e.bodyText),1==this.jsonData.success?(window.localStorage.setItem("user",n()(this.jsonData.user)),this.$emit("reg")):this.error="User cant be registered"})):(this.username="",this.error="User cant be registered")})})}}}}},qKEG:function(e,t,s){"use strict";function a(e){s("BDB1")}var n=s("WFrY"),r=s("1hzw"),o=s("VU/8"),i=a,c=o(n.a,r.a,!1,i,"data-v-0ce3ebe9",null);t.a=c.exports},xJD8:function(e,t,s){"use strict";t.a={name:"app",components:{}}},xJsL:function(e,t,s){"use strict";function a(e){s("iaUO")}var n=s("nKb+"),r=s("660j"),o=s("VU/8"),i=a,c=o(n.a,r.a,!1,i,"data-v-f3a68126",null);t.a=c.exports},xVp8:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat container"},[e.registered?e.registered?s("socket"):e._e():s("login",{on:{reg:function(t){e.changeReg()}}})],1)},n=[],r={render:a,staticRenderFns:n};t.a=r}},["NHnr"]);
//# sourceMappingURL=app.f372cd4cce7b02faf2a5.js.map