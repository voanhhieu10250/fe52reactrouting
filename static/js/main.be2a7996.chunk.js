(this.webpackJsonpfe52reactrouting=this.webpackJsonpfe52reactrouting||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(25),s=n.n(i),o=(n(74),n(75),n(45),n(55),n(56),n(12)),l=n(9),d=n(6),u=n(4),j=n(8),b=n(7),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"PageNotFound"})}}]),n}(c.Component),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{exact:!0,activeClassName:"active",className:"nav-link",to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{activeClassName:"active",className:"nav-link",to:"/about",children:"About"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{activeClassName:"active",className:"nav-link",to:"/list-movie",children:"ListMovie"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{activeClassName:"active",className:"nav-link",to:"/hoc",children:"HocPage"})})]})})]})}}]),n}(c.Component),O="detailReducer/DETAIL_PAGE_REQUEST",p="detailReducer/DETAIL_PAGE_SUCCESS",f="detailReducer/DETAIL_PAGE_FAILED",v=n(21),x=n.n(v),g=function(){return{type:O}},N=function(e){return{type:p,payload:e}},y=function(e){return{type:f,payload:e}},C=n(17),S=n(14),E=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderTable=function(){var t=e.props.data;if(t)return t.lichChieu.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.thongTinRap.tenCumRap}),Object(a.jsx)("td",{children:e.thongTinRap.tenRap}),Object(a.jsx)("td",{children:new Date(e.ngayChieuGioChieu).toLocaleTimeString()}),Object(a.jsx)("td",{children:new Date(e.ngayChieuGioChieu).toLocaleDateString()}),Object(a.jsx)("td",{children:Object(a.jsx)(o.b,{className:"btn btn-success",to:"/",children:"Booking"})})]},"item")}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getDetailMovie(e)}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.data;return t?Object(a.jsx)(S.a,{}):Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{children:"DetailPage"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsx)("img",{className:"img-fluid",src:n&&n.hinhAnh})}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsx)("table",{className:"table",children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Ten Phim"}),Object(a.jsx)("td",{children:n&&n.tenPhim})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Mo ta"}),Object(a.jsx)("td",{children:n&&n.moTa})]})]})})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Cum rap"}),Object(a.jsx)("td",{children:"Ten rap"}),Object(a.jsx)("td",{children:"Gio chieu"}),Object(a.jsx)("td",{children:"Ngay chieu"})]})}),Object(a.jsx)("tbody",{children:this.renderTable()})]})})})]})}}]),n}(c.Component),P=Object(C.b)((function(e){return{loading:e.detailPageReducer.loading,data:e.detailPageReducer.data}}),(function(e){return{getDetailMovie:function(t){e(function(e){return function(t){t(g()),x()({url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=".concat(e),method:"GET"}).then((function(e){t(N(e.data))})).catch((function(e){t(y(e))}))}}(t))}}}))(E),T=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Ma NV"}),Object(a.jsx)("input",{type:"text",className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Ten NV"}),Object(a.jsx)("input",{type:"text",className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",className:"form-control"})]})]})}}]),n}(c.Component);c.Component;var D,M=(D=T,function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",className:"btn btn-primary btn-lg","data-toggle":"modal","data-target":"#modelId",children:"Launch"}),Object(a.jsx)("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog",role:"document",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title",children:"Modal title"}),Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsx)(D,{})}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(a.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save"})]})]})})})]})})}),R=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Hoc Page"}),Object(a.jsx)(M,{})]})}}]),n}(c.Component),k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:"DashbroadPage"})})}}]),n}(c.Component),A=n(22),L="addUserReducer/ADD_USER_REQUEST",U="addUserReducer/ADD_USER_SUCCESS",_="addUserReducer/ADD_USER_FAILED",I=function(){return{type:L}},w=function(e){return{type:U,payload:e}},G=function(e){return{type:_,payload:e}},H=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleOnChange=function(e){var t=e.target,n=t.name,a=t.value;c.setState(Object(A.a)({},n,a))},c.handleSubmit=function(e){e.preventDefault(),c.props.addUser(c.state)},c.renderNoti=function(){var e=c.props.error;if(e){if(e.response&&401===e.response.status)return Object(a.jsx)("div",{className:"alert alert-danger",children:"Chua co token"});if(e.response&&e.response.data)return Object(a.jsx)("div",{className:"alert alert-danger",children:e.response.data})}},c.state={taiKhoan:"",matKhau:"",hoTen:"",email:"",soDt:"",maNhom:"",maLoaiNguoiDung:""},c}return Object(u.a)(n,[{key:"render",value:function(){return this.props.loading?Object(a.jsx)(S.a,{}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"UserPage"}),Object(a.jsxs)("form",{className:"container",onSubmit:this.handleSubmit,children:[Object(a.jsx)("h3",{children:"Th\xeam ng\u01b0\u1eddi d\xf9ng"}),this.renderNoti(),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"T\xe0i kho\u1ea3n"}),Object(a.jsx)("input",{className:"form-control",name:"taiKhoan",onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"M\u1eadt kh\u1ea9u"}),Object(a.jsx)("input",{className:"form-control",name:"matKhau",onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"H\u1ecd t\xean"}),Object(a.jsx)("input",{className:"form-control",name:"hoTen",onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"Email"}),Object(a.jsx)("input",{className:"form-control",name:"email",onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(a.jsx)("input",{className:"form-control",name:"soDt",onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"M\xe3 nh\xf3m"}),Object(a.jsx)("input",{className:"form-control",name:"maNhom",onChange:this.handleOnChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("span",{children:"M\xe3 lo\u1ea1i ng\u01b0\u1eddi d\xf9ng"}),Object(a.jsx)("input",{className:"form-control",name:"maLoaiNguoiDung",onChange:this.handleOnChange})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"Th\xeam ng\u01b0\u1eddi d\xf9ng"})})]})]})}}]),n}(c.Component),Q=Object(C.b)((function(e){return{loading:e.addUserReducer.loading,error:e.addUserReducer.err}}),(function(e){return{addUser:function(t){e(function(e){var t=JSON.parse(localStorage.getItem("UserAdmin")).accessToken;return function(n){n(I()),x()({url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",method:"POST",data:e,headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){n(w(e.data))})).catch((function(e){n(G(e))}))}}(t))}}}))(H),F=n(34);function K(){return console.log("Child"),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:"Child component"})})}var z=Object(c.memo)(K);var V=n(125),B=n(123),J=Object(B.a)((function(){return{content:{backgroundColor:"red",color:"#ffffff","& span":{fontSize:15}},title:{fontSize:50}}}));var X=[{exact:!0,path:"/",component:r.a.lazy((function(){return Promise.resolve().then(n.bind(null,45))}))},{exact:!1,path:"/about",component:r.a.lazy((function(){return Promise.resolve().then(n.bind(null,55))}))},{exact:!1,path:"/list-movie",component:r.a.lazy((function(){return Promise.resolve().then(n.bind(null,56))}))},{exact:!1,path:"/detail/:id",component:P},{exact:!1,path:"/hoc",component:R},{exact:!1,path:"/hooks",component:function(){var e=Object(c.useState)(0),t=Object(F.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){console.log("useEffect = componentDidMount")}),[]),Object(c.useEffect)((function(){console.log("useEffect = componentDidUpdate")}),[n]),Object(c.useEffect)((function(){var e=setInterval((function(){console.log("hello")}),2e3);return function(){console.log("useEffect = componentWillUnmount"),clearInterval(e)}}),[]);var i=Object(c.useCallback)((function(){console.log("showNumber")}),[]),s=Object(c.useMemo)((function(){return function(){for(var e=0;e<1e3;)e++;return console.log(e),e}()}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Number: ",n]}),Object(a.jsx)("button",{className:"btn btn-success",onClick:function(){r(n+1)},children:"Click"}),Object(a.jsx)(z,{showNumber:i}),Object(a.jsxs)("h3",{children:["Number Up: ",s]})]})}},{exact:!1,path:"/material",component:function(){var e=J();return Object(a.jsxs)("div",{className:e.content,children:[Object(a.jsx)("h3",{children:"MaterialPage"}),Object(a.jsx)(V.a,{variant:"contained",color:"primary",children:"Primary"}),Object(a.jsx)("span",{children:"this is material"})]})}}],q=[{exact:!1,path:"/dashbroad",component:k},{exact:!1,path:"/user",component:Q}],W=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{activeClassName:"active",className:"nav-link",to:"/dashbroad",children:"DashBroad"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{activeClassName:"active",className:"nav-link",to:"/user",children:"User"})})]})})]})}}]),n}(c.Component),Y=n(3),Z=n(5);function $(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),e.children]})}function ee(e){var t=e.Component,n=Object(Z.a)(e,["Component"]);return Object(a.jsx)(l.b,Object(Y.a)(Object(Y.a)({},n),{},{render:function(e){return Object(a.jsx)($,{children:Object(a.jsx)(t,Object(Y.a)({},e))})}}))}function te(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(W,{}),e.children]})}function ne(e){var t=e.Component,n=Object(Z.a)(e,["Component"]);return Object(a.jsx)(l.b,Object(Y.a)(Object(Y.a)({},n),{},{render:function(e){return localStorage.getItem("UserAdmin")?Object(a.jsx)(te,{children:Object(a.jsx)(t,Object(Y.a)({},e))}):Object(a.jsx)(l.a,{to:"/auth"})}}))}n(106);var ae=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(l.d,{children:[Object(a.jsxs)(c.Suspense,{fallback:Object(a.jsx)(S.a,{}),children:[function(e){if(e&&e.length>0)return e.map((function(e,t){return Object(a.jsx)(ne,{exact:e.exact,path:e.path,Component:e.component},t)}))}(q),Object(a.jsx)(l.b,{exact:!1,path:"/auth",component:r.a.lazy((function(){return Promise.resolve().then(n.bind(null,106))}))}),function(e){if(e&&e.length>0)return e.map((function(e,t){return Object(a.jsx)(ee,{exact:e.exact,path:e.path,Component:e.component},t)}))}(X)]}),Object(a.jsx)(l.b,{path:"",component:h})]})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},re=(n(99),n(100),n(101),n(104),n(26)),ie=n(27),se={loading:!1,data:null,err:null},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.b:return e.loading=!0,e.data=null,e.err=null,Object(Y.a)({},e);case ie.c:return e.loading=!1,e.data=t.payload,e.err=null,Object(Y.a)({},e);case ie.a:return e.loading=!1,e.data=null,e.err=t.payload,Object(Y.a)({},e);default:return Object(Y.a)({},e)}},le={loading:!1,data:null,err:null},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return e.loading=!0,e.data=null,e.err=null,Object(Y.a)({},e);case p:return e.loading=!1,e.data=t.payload,e.err=null,Object(Y.a)({},e);case f:return e.loading=!1,e.data=null,e.err=t.payload,Object(Y.a)({},e);default:return Object(Y.a)({},e)}},ue=n(28),je={loading:!1,data:null,err:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.b:return e.loading=!0,e.data=null,e.err=null,Object(Y.a)({},e);case ue.c:return e.loading=!1,e.data=t.payload,e.err=null,Object(Y.a)({},e);case ue.a:return e.loading=!1,e.date=null,e.err=t.payload,Object(Y.a)({},e);default:return Object(Y.a)({},e)}},he={loading:!1,data:null,err:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return e.loading=!0,e.data=null,e.err=null,Object(Y.a)({},e);case U:return e.loading=!1,e.data=t.payload,e.err=null,Object(Y.a)({},e);case _:return e.loading=!1,e.data=null,e.err=t.payload,Object(Y.a)({},e);default:return Object(Y.a)({},e)}},Oe=Object(re.c)({listMovieReducer:oe,detailPageReducer:de,authReducer:be,addUserReducer:me}),pe=n(66),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,ve=Object(re.e)(Oe,fe(Object(re.a)(pe.a)));s.a.render(Object(a.jsx)(C.a,{store:ve,children:Object(a.jsx)(ae,{})}),document.getElementById("root")),ce()},106:function(e,t,n){"use strict";n.r(t);var a=n(22),c=n(6),r=n(4),i=n(8),s=n(7),o=n(1),l=n(0),d=n(17),u=n(21),j=n.n(u),b=n(28),h=function(){return{type:b.b}},m=function(e){return{type:b.c,payload:e}},O=function(e){return{type:b.a,payload:e}},p=n(14),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleOnChange=function(e){var t=e.target,n=t.name,c=t.value;r.setState(Object(a.a)({},n,c))},r.handleLogin=function(e){e.preventDefault(),r.props.login(r.state,r.props.history)},r.renderNoti=function(){var e=r.props.error;if(e)return Object(o.jsx)("div",{className:"alert alert-danger",children:e.response.data})},r.state={taiKhoan:"",matKhau:""},r}return Object(r.a)(n,[{key:"render",value:function(){return this.props.loading?Object(o.jsx)(p.a,{}):Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(o.jsx)("h3",{children:"AuthPage"}),Object(o.jsxs)("form",{onSubmit:this.handleLogin,children:[this.renderNoti(),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"taiKhoan",onChange:this.handleOnChange})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"text",className:"form-control",name:"matKhau",onChange:this.handleOnChange})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-success",children:"Login"})]})]})]})})})}}]),n}(l.Component);t.default=Object(d.b)((function(e){return{loading:e.authReducer.loading,error:e.authReducer.err}}),(function(e){return{login:function(t,n){e(function(e,t){return function(n){n(h()),j()({url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",method:"POST",data:e}).then((function(e){n(m(e.data)),"QuanTri"===e.data.maLoaiNguoiDung?(localStorage.setItem("UserAdmin",JSON.stringify(e.data)),t.push("/dashbroad")):alert("Khong co quyen truy cap")})).catch((function(e){n(O(e))}))}}(t,n))}}}))(f)},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(57),c=n(1);n(0),n(80);function r(){var e=Object(a.a)(["\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid ",";\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n"]);return r=function(){return e},e}var i=n(58).a.div(r(),(function(e){return e.primary?"green":"#3498db"}));function s(){return Object(c.jsx)(i,{primary:!0})}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="listMovieReducer/LIST_MOVIE_REQUEST",c="listMovieReducer/LIST_MOVIE_SUCCESS",r="listMovieReducer/LIST_MOVIE_FAILED"},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="authReducer/AUTH_PAGE_REQUEST",c="authReducer/AUTH_PAGE_SUCCESS",r="authReducer/AUTH_PAGE_FAILED"},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),c=n(4),r=n(8),i=n(7),s=n(1),o=n(0),l=n(12),d=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.movie;return Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{className:"card-img-top",src:e.hinhAnh,alt:"Card image"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{className:"card-title",children:e.tenPhim}),Object(s.jsx)(l.b,{className:"btn btn-success",to:"/detail/".concat(e.maPhim),children:"Detail"})]})]})})}}]),n}(o.Component)},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(27),c=n(21),r=n.n(c),i=function(){return function(e){e(s()),r()({url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",method:"GET"}).then((function(t){e(o(t.data))})).catch((function(t){e(l(t))}))}},s=function(){return{type:a.b}},o=function(e){return{type:a.c,payload:e}},l=function(e){return{type:a.a,payload:e}}},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(32),i=n(14),s=n(36),o=n(17);t.default=Object(o.b)((function(e){return{loading:e.listMovieReducer.loading,listMovie:e.listMovieReducer.data}}),(function(e){return{listMovieApi:function(){e(Object(s.a)())}}}))((function(e){return Object(c.useEffect)((function(){e.listMovieApi()}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"home",children:"HomePage"}),Object(a.jsx)("div",{className:"row",children:function(){var t=e.listMovie;return e.loading?Object(a.jsx)(i.a,{}):t&&t.length>0?t.map((function(e){return Object(a.jsx)(r.a,{movie:e},e.maPhim)})):void 0}()})]})}))},55:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),c=n(34),r=n(1),i=n(0),s=n(21),o=n.n(s),l=n(32),d=n(14);function u(){var e=Object(i.useState)({listMovie:[],loading:!1}),t=Object(c.a)(e,2),n=t[0],s=t[1];Object(i.useEffect)((function(){s(Object(a.a)(Object(a.a)({},n),{},{loading:!0})),o()({url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",method:"GET"}).then((function(e){console.log(e.data),s(Object(a.a)(Object(a.a)({},n),{},{listMovie:e.data,loading:!1}))}))}),[]);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"AboutPage"}),Object(r.jsx)("div",{className:"row",children:function(){var e=n.listMovie;return n.loading?Object(r.jsx)(d.a,{}):e&&e.length>0?e.map((function(e){return Object(r.jsx)(l.a,{movie:e},e.maPhim)})):void 0}()})]})}},56:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(4),r=n(8),i=n(7),s=n(1),o=n(0),l=(n(21),n(32)),d=n(36),u=n(17),j=n(14),b=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderHTML=function(){var t=e.props.listMovie;if(t&&t.length>0)return t.map((function(e){return Object(s.jsx)(l.a,{movie:e},e.maPhim)}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.listMovieApi()}},{key:"render",value:function(){return this.props.loading?Object(s.jsx)(j.a,{}):Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"ListMoviePage"}),Object(s.jsx)("div",{className:"row",children:this.renderHTML()})]})}}]),n}(o.Component);t.default=Object(u.b)((function(e){return{loading:e.listMovieReducer.loading,listMovie:e.listMovieReducer.data}}),(function(e){return{listMovieApi:function(){e(Object(d.a)())}}}))(b)},74:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.be2a7996.chunk.js.map