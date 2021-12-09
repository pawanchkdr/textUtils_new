(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(4),o=s.n(c),l=(s(9),s(2)),r=(s(10),s(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)("div",{className:"bg-danger rounded mx-2",onClick:function(){e.toggleMode("danger","dark")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-secondary rounded mx-2",onClick:function(){e.toggleMode("secondary","dark")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-success rounded mx-2",onClick:function(){e.toggleMode("success","dark")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-warning rounded mx-2",onClick:function(){e.toggleMode("warning","dark")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-primary rounded mx-2",onClick:function(){e.toggleMode("primary","dark")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-info rounded mx-2",onClick:function(){e.toggleMode("info","dark")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-light rounded mx-2",onClick:function(){e.toggleMode("light","light")},style:{height:"30px",width:"30px",border:"1px solid black"}}),Object(r.jsx)("div",{className:"bg-dark rounded mx-2",onClick:function(){e.toggleMode("dark","dark")},style:{height:"30px",width:"30px",border:"1px solid white"}})]}),Object(r.jsx)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"white":"black"),children:"Toggle Mode"})]})]})})}function d(e){var t=Object(a.useState)(""),s=Object(l.a)(t,2),n=s[0],c=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("h1",{className:"mb-4",children:e.heading}),Object(r.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){c(e.target.value)},id:"exampleFormControlTextarea1",rows:"10"})]}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===n.length,onClick:function(){if(0===n.length)e.showAlert("Please enter some value to change in upper case!","danger");else{var t=n.toUpperCase();c(t),e.showAlert("Converted to uppercase!","success")}},children:"Convert To Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===n.length,onClick:function(){if(0===n.length)e.showAlert("Please enter some value to change in lower case!","danger");else{var t=n.toLowerCase();c(t),e.showAlert("Converted to lowercase!","success")}},children:"Convert To Lowercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===n.length,onClick:function(){if(0===n.length)e.showAlert("Please enter some value to create slug!","danger");else{var t=n.toLowerCase().replace(/\s\s+/g," ").trim().split(" ").join("-");c(t),e.showAlert("Slug created successfully!","success")}},children:"Create Slug"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===n.length,onClick:function(){if(0===n.length)e.showAlert("Please enter some value to change in title case!","danger");else{var t=n.toLowerCase().replace(/\s\s+/g," ").trim().split(" "),s="";console.log("text1 ",t),t.forEach((function(e){s+=e[0].toUpperCase()+e.substr(1)+" "})),console.log(s),c(s),e.showAlert("Title case applied successfully!","success")}},children:"Title Case"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===n.length,onClick:function(){0===n.length?e.showAlert("Please enter some value to copy text!","danger"):(navigator.clipboard.writeText(n),e.showAlert("Copied to clipboard!","success"))},children:"Copt to Clipboard"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",disabled:0===n.length,onClick:function(){if(0===n.length)e.showAlert("Please enter some value to see the reflection!","danger");else{c(""),e.showAlert("Text crear successfully!","success")}},children:"Clear"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[n.split(" ").filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"]}),Object(r.jsxs)("p",{children:[.008*n.split(" ").filter((function(e){return 0!==e.length})).length," Read time"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:n.length>0?n:"Nothing to preview!"})]})]})}i.defaultProps={title:"Title goes here",aboutText:"About"};var b=function(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.message]})})};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(null),o=Object(l.a)(c,2),h=o[0],u=o[1],g=Object(a.useState)("white"),m=Object(l.a)(g,2),x=m[0],j=m[1],p=function(e,t){u({message:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",mode:s,disableDarkMode:function(){n("light"),document.body.style.backgroundColor="white",p("Dark mode disabled!","success")},toggleMode:function(e,t){document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-secondary"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-info"),document.body.classList.remove("bg-light"),document.body.classList.add("bg-"+e),"light"===s?(n(t),j(e),document.body.style.backgroundColor="white",p("Dark mode enabled!","success")):(n(t),j(e),document.body.style.backgroundColor="white",p("Light mode enabled!","success"))}}),Object(r.jsx)(b,{alert:h}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(d,{showAlert:p,color:x,heading:"Try TextUtils - Word Counter, Charactor Counter, Copy Text etc. ",mode:s})})]})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),c(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.6c4dff33.chunk.js.map