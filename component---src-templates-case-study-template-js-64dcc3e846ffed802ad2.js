"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[403],{8477:function(e,t,a){var s=a(6540);t.A=e=>{let{children:t}=e;const{0:a,1:r}=(0,s.useState)(!1),{0:n,1:l}=(0,s.useState)(""),c="green";(0,s.useEffect)((()=>{localStorage.getItem("authenticated")===c&&r(!0)}),[]);return a?t:s.createElement("div",{className:"passwordpage"},s.createElement("form",{onSubmit:e=>{e.preventDefault(),n===c?(localStorage.setItem("authenticated",c),r(!0)):alert("Incorrect password!")}},s.createElement("input",{type:"password",value:n,onChange:e=>l(e.target.value),placeholder:"Enter Password",className:"passwordinput"}),s.createElement("button",{type:"submit"},"Submit →")))}},6836:function(e,t,a){var s=a(6540),r=a(4810);t.A=e=>{let{siteTitle:t}=e;return s.createElement("header",{className:"header"},s.createElement(r.N_,{to:"/",activeClassName:"active"},"Case Studies"),s.createElement(r.N_,{to:"/misc",activeClassName:"active"},"Experiments"),s.createElement(r.N_,{to:"/about",activeClassName:"active"},"About"))}},5143:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var s=a(6540),r=a(8477),n=a(6836);function l(e){let{data:t}=e;const{markdownRemark:a}=t,{frontmatter:l,html:c,tableOfContents:m}=a,{isPasswordProtected:o,password:i}=l,u=s.createElement("div",null,s.createElement(n.A,{siteTitle:"Vishaka Nirmal"}),s.createElement("div",{className:"case-study-container"},s.createElement("aside",{className:"case-study-toc"},s.createElement("div",{dangerouslySetInnerHTML:{__html:m}})),s.createElement("div",{className:"case-study-content-wrapper"},s.createElement("div",{className:"case-study-content"},s.createElement("h1",null,l.title),s.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))),s.createElement("footer",{className:"site-footer"},"© ",(new Date).getFullYear()," · Designed + coded by Vishaka"));return o?s.createElement(r.A,{password:i},u):u}}}]);
//# sourceMappingURL=component---src-templates-case-study-template-js-64dcc3e846ffed802ad2.js.map