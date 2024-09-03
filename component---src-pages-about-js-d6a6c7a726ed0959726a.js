"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[432],{8477:function(A,e,t){var a=t(6540);e.A=A=>{let{children:e}=A;const{0:t,1:i}=(0,a.useState)(!1),{0:n,1:E}=(0,a.useState)(""),r="olive";(0,a.useEffect)((()=>{localStorage.getItem("authenticated")===r&&i(!0)}),[]);return t?e:a.createElement("div",{className:"passwordpage"},a.createElement("form",{onSubmit:A=>{A.preventDefault(),n===r?(localStorage.setItem("authenticated",r),i(!0)):alert("Incorrect password!")}},a.createElement("input",{type:"password",value:n,onChange:A=>E(A.target.value),placeholder:"Enter Password",className:"passwordinput"}),a.createElement("button",{type:"submit"},"Submit →")))}},6836:function(A,e,t){var a=t(6540),i=t(4810);e.A=A=>{let{siteTitle:e}=A;return a.createElement("header",{className:"header"},a.createElement(i.N_,{to:"/",activeClassName:"active"},"Work"),a.createElement(i.N_,{to:"/misc",activeClassName:"active"},"Archive"),a.createElement(i.N_,{to:"/about",activeClassName:"active"},"About"))}},3895:function(A,e,t){var a=t(6540),i=t(4810),n=(t(8477),t(6836));e.A=A=>{var e;let{children:t}=A;const E=(0,i.GR)("3649515864");return a.createElement("div",null,a.createElement(n.A,{siteTitle:(null===(e=E.site.siteMetadata)||void 0===e?void 0:e.title)||"Title"}),a.createElement("main",null,t),a.createElement("footer",{className:"site-footer"},"© ",(new Date).getFullYear()," · Built by Vishaka"))}},5510:function(A,e,t){t.r(e),t.d(e,{default:function(){return c}});var a=t(6540),i=t(3895),n=t.p+"static/profile-f48c62913b36bd21e7ff5ba30b2b7830.jpg",E=t.p+"static/uw-6144280289781c49d78379320798d4f9.png",r=t.p+"static/brown-b269aaa7d201d63f6dc63e9cfbdec352.png",I=t.p+"static/risd-898aeed3a6e07ff6175f854c11e6f36a.png",s=t.p+"static/microsoft-3087f43051028594cc80324a26e1e5f1.jpg",v=t.p+"static/metro-cfda0719e4277b840024e866d3f0bad9.png";var g=()=>((0,a.useEffect)((()=>{const A=["#1 she has double-jointed thumbs","#2 she is a native Seattlite, but doesn't drink coffee","#3 her favorite fish is salmon","#4 she is a die-hard dog lover","#5 she began snowboarding during the pandemic","#6 she is the proud owner of an Animal Crossing themed switch","#7 she worked on an animated film about squirrels","#8 she learned web development to make this website!","#9 her favorite movie is Meet the Robinsons","#10 her most recent international trip was to Guatemala","#11 she has most recently binge watched Severance","#12 she can fully understand Malayalam, but can't speak it","#13 she is obsessed with anything allergen-friendly","#14 she has a london fog every morning"];!function(A){for(let e=A.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[A[e],A[t]]=[A[t],A[e]]}}(A);let e=0;const t=document.getElementById("about-typer");function a(A){let e=0;const a=setInterval((()=>{t.innerHTML+=A.charAt(e),e++,e>=A.length&&(clearInterval(a),setTimeout(i,3e3))}),75)}function i(){const i=setInterval((()=>{t.innerHTML=t.innerHTML.slice(0,-1),t.innerHTML.length<=0&&(clearInterval(i),e++,e>=A.length&&(e=0),a(A[e]))}),25)}a(A[e])}),[]),a.createElement("h1",{id:"about-typer",className:"typer"}));var c=()=>a.createElement(i.A,null,a.createElement("main",null,a.createElement("div",{className:"base-page"},a.createElement("div",{className:"base-page-intro"},a.createElement("div",{className:"statictext"},a.createElement("h1",null,"Vishaka's fun facts:")),a.createElement(g,null)),a.createElement("div",{className:"aboutinfo"},a.createElement("div",{className:"about-image"},a.createElement("img",{src:n,alt:"A description of the image",className:"about-image"})),a.createElement("div",null,a.createElement("p",null,"I am a human-centered designer currently focused on crafting virtual collaboration tools. My academic journey in Human-Centered Design & Engineering from the University of Washington, combined with my ongoing studies in Design Engineering at Brown University and the Rhode Island School of Design, equips me with a deep understanding of user needs and effective design."),a.createElement("p",null,"With three years of experience as a UX Designer at Lucid Software and Microsoft Dynamics 365, I’ve had the opportunity to work on impactful projects. At Lucid, I designed Quick Tools and Visual Activities, enhancing user interactions and the functionality of our products. My role also involved refining core features to improve the overall user experience."),a.createElement("p",null,"Looking ahead, I’m excited to explore interdisciplinary approaches to design, particularly in researching and creating hybrid digital-physical products. I’m passionate about pushing the boundaries of traditional design and creating innovative solutions that bridge the digital and physical worlds."),a.createElement("p",null,"Outside of work, you can find me enjoying a visit to a local tea house, experimenting with new creative hobbies, or taking a walk with my dog."))),a.createElement("div",{className:"logo-section"},a.createElement("h2",null,"I've had the joy of working with:"),a.createElement("div",{className:"logo-container"},a.createElement("img",{src:E,alt:"University of Washington"}),a.createElement("img",{src:r,alt:"Brown University"}),a.createElement("img",{src:I,alt:"RISD"}),a.createElement("img",{src:"data:image/png;base64,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",alt:"Lucid Software"}),a.createElement("img",{src:s,alt:"Microsoft"}),a.createElement("img",{src:v,alt:"King County Metro"}))))))}}]);
//# sourceMappingURL=component---src-pages-about-js-d6a6c7a726ed0959726a.js.map