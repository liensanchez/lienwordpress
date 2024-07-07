(function(){"use strict";var t={2175:function(t,e,o){var r=o(5130),n=o(6768);function i(t,e){const o=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(o)}var s=o(1241);const l={},a=(0,s.A)(l,[["render",i]]);var c=a,u=o(1387);function d(t,e,o,r,i,s){const l=(0,n.g2)("NavBar"),a=(0,n.g2)("HomeHero"),c=(0,n.g2)("Projects"),u=(0,n.g2)("Contact"),d=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(l),(0,n.bF)(a,{id:"about"}),(0,n.bF)(c,{id:"projects"}),(0,n.bF)(u,{id:"contact"}),(0,n.bF)(d)])}var h=o(4232);const p={class:"navbar-container"},C={key:0,class:"mobile-menu"},g={class:"close-container"},v=(0,n.Fv)('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 4L20 20M20 4L4 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1),k=[v],w=(0,n.Lk)("a",{href:"/#about",class:"option-button"},"About Me",-1),m=(0,n.Lk)("a",{href:"/#technologies",class:"option-button"},"Technologies",-1),f=(0,n.Lk)("a",{href:"/#projects",class:"option-button"},"Projects",-1),b={href:"/#contact",class:"option-button"},F={class:"custom-container"},L=(0,n.Fv)('<div class="navbar-left"><a href="/" class="navbar-logo"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.49997 12.4L5 17.7999" stroke="#FFCA42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.49997 12.4L5 7" stroke="#FFCA42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><line x1="18" y1="18" x2="10" y2="18" stroke="#FFCA42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line></svg><h1 class="navbar-title">Liensdev</h1></a></div>',1),y=(0,n.Fv)('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1),x=[y],T={class:"navbar-options"},S=(0,n.Lk)("a",{href:"/#about",class:"option-button"},"About Me",-1),A=(0,n.Lk)("a",{href:"/#projects",class:"option-button"},"Projects",-1),j=(0,n.Lk)("a",{href:"/#technologies",class:"option-button"},"Technologies",-1),M={href:"/#contact",class:"option-button"};function _(t,e,o,r,i,s){const l=(0,n.g2)("ButtonSmall");return(0,n.uX)(),(0,n.CE)("div",p,[this.menuMobile?((0,n.uX)(),(0,n.CE)("div",C,[(0,n.Lk)("div",g,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>s.toggleMobile&&s.toggleMobile(...t)),class:"close-burger"},k)]),w,m,f,(0,n.Lk)("a",b,[(0,n.bF)(l,{buttonText:"Contact",style:(0,h.Tr)(i.style)},null,8,["style"])])])):(0,n.Q3)("",!0),(0,n.Lk)("div",F,[L,(0,n.Lk)("button",{class:"option-burger",onClick:e[1]||(e[1]=(...t)=>s.toggleMobile&&s.toggleMobile(...t))},x),(0,n.Lk)("div",T,[S,A,j,(0,n.Lk)("a",M,[(0,n.bF)(l,{buttonText:"Contact",style:(0,h.Tr)(i.style)},null,8,["style"])])])])])}function E(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("button",{style:(0,h.Tr)(o.style),class:"button-small"},(0,h.v_)(this.buttonText),5)}var B={props:{buttonText:{type:String,required:!0},style:{type:Object,default:()=>({})}}};const X=(0,s.A)(B,[["render",E]]);var V=X,P={data(){return{style:{borderColor:"#FFCA42",backgroundColor:"#FFCA42"},menuDropdown:!1,menuMobile:!1}},components:{ButtonSmall:V},methods:{toggleMenu(){this.menuDropdown=!this.menuDropdown},toggleMobile(){this.menuMobile=!this.menuMobile}}};const H=(0,s.A)(P,[["render",_]]);var R=H,O=o.p+"img/Lien.338a3a4f.png";const G={class:"home-hero-container"},Z={class:"custom-container"},I={class:"home-hero-content"},N={class:"home-hero-info"},Q={href:"/#contact"},K=(0,n.Lk)("img",{src:O,class:"profile-image"},null,-1);function U(t,e,o,r,i,s){const l=(0,n.g2)("Titles"),a=(0,n.g2)("Paragraph"),c=(0,n.g2)("ButtonSmall");return(0,n.uX)(),(0,n.CE)("div",G,[(0,n.Lk)("div",Z,[(0,n.Lk)("div",I,[(0,n.Lk)("div",N,[(0,n.bF)(l,{titleOne:this.HeroTitle,style:(0,h.Tr)(i.HeroTitleStyle)},null,8,["titleOne","style"]),(0,n.bF)(l,{titleTwo:this.SubHeroTitle,style:(0,h.Tr)(i.HeroTitleStyle)},null,8,["titleTwo","style"]),(0,n.bF)(a,{text:this.HeroText},null,8,["text"]),(0,n.Lk)("a",Q,[(0,n.bF)(c,{buttonText:i.HeroButton,style:(0,h.Tr)(i.HeroButtonStyle)},null,8,["buttonText","style"])])]),K])])])}function W(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",null,[this.titleOne?((0,n.uX)(),(0,n.CE)("h1",{key:0,class:"title t-1",style:(0,h.Tr)(o.style)},(0,h.v_)(this.titleOne),5)):(0,n.Q3)("",!0),this.titleTwo?((0,n.uX)(),(0,n.CE)("h2",{key:1,class:"title t-2",style:(0,h.Tr)(o.style)},(0,h.v_)(this.titleTwo),5)):(0,n.Q3)("",!0),this.titleThree?((0,n.uX)(),(0,n.CE)("h3",{key:2,class:"title t-3",style:(0,h.Tr)(o.style)},(0,h.v_)(this.titleThree),5)):(0,n.Q3)("",!0),this.titleFour?((0,n.uX)(),(0,n.CE)("h4",{key:3,class:"title t-4",style:(0,h.Tr)(o.style)},(0,h.v_)(this.titleFour),5)):(0,n.Q3)("",!0),this.titleFive?((0,n.uX)(),(0,n.CE)("h5",{key:4,class:"title t-5",style:(0,h.Tr)(o.style)},(0,h.v_)(this.titleFive),5)):(0,n.Q3)("",!0),this.titleSix?((0,n.uX)(),(0,n.CE)("h6",{key:5,class:"title t-6",style:(0,h.Tr)(o.style)},(0,h.v_)(this.titleSix),5)):(0,n.Q3)("",!0)])}var q={props:{titleOne:String,titleTwo:String,titleThree:String,titleFour:String,titleFive:String,titleSix:String,style:{type:Object,default:()=>({})}}};const D=(0,s.A)(q,[["render",W]]);var z=D;const $=["innerHTML"];function J(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("p",{class:"paragraph",innerHTML:o.text},null,8,$)}var Y={props:{text:{type:String,required:!0}}};const tt=(0,s.A)(Y,[["render",J]]);var et=tt,ot={components:{Titles:z,Paragraph:et,ButtonSmall:V},data(){return{HeroTitleStyle:{color:"#FFFFFF"},HeroTitle:"Hi! I'm Lien Sanchez",SubHeroTitle:"Full Stack Developer",HeroText:"I am a skilled full stack developer who is proactive, creative, and always eager to learn. I am proficient in English at the C2 level, which enables me to communicate effectively with clients and colleagues from different backgrounds. If you are looking for a talented and passionate developer, I am the right candidate for you.",HeroButton:"Contact me",HeroButtonStyle:{borderColor:"#FFCA42",backgroundColor:"#FFCA42"}}}};const rt=(0,s.A)(ot,[["render",U]]);var nt=rt;const it={key:0,class:"projects-container"},st={class:"custom-container"},lt={class:"projects-content"},at={key:0,class:"projects-list"};function ct(t,e,o,r,i,s){const l=(0,n.g2)("Titles"),a=(0,n.g2)("ProjectCard");return this.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",it,[(0,n.Lk)("div",st,[(0,n.bF)(l,{titleTwo:this.ProjectTitle,style:(0,h.Tr)(this.ProjectTitleStyle)},null,8,["titleTwo","style"]),(0,n.Lk)("div",lt,[this.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",at,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(this.posts,(t=>((0,n.uX)(),(0,n.Wv)(a,{project:t,key:t.id},null,8,["project"])))),128))]))])])]))}var ut=o(8355);const dt={key:0,class:"project-card-container"},ht=["src"],pt={class:"project-card-title"},Ct={class:"project-card-links"},gt=(0,n.Fv)('<button><svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Github</title><rect width="24" height="24" fill="none"></rect><path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path></g></svg> Github </button>',1),vt=["src"],kt=["href"],wt=(0,n.Fv)('<button><svg width="50px" height="50px" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>align_text_left [#910]</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-60.000000, -4201.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M4,4057 L24,4057 L24,4055 L4,4055 L4,4057 Z M4,4043 L24,4043 L24,4041 L4,4041 L4,4043 Z M4,4050 L18,4050 L18,4048 L4,4048 L4,4050 Z" id="align_text_left-[#910]"></path></g></g></g></g></svg> Read More </button>',1),mt=[wt];function ft(t,e,o,r,i,s){const l=(0,n.g2)("swiper-slide"),a=(0,n.g2)("swiper");return this.project?((0,n.uX)(),(0,n.CE)("div",dt,[(0,n.bF)(a,{pagination:!0,navigation:!0,loop:!0,modules:r.modules,class:"mySwiper"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(this.project.acf.carousel_images,(t=>((0,n.uX)(),(0,n.Wv)(l,null,{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:t,alt:""},null,8,ht)])),_:2},1024)))),256))])),_:1},8,["modules"]),(0,n.Lk)("div",pt,[(0,n.Lk)("h1",null,(0,h.v_)(this.project.title.rendered),1)]),(0,n.Lk)("div",Ct,[gt,(0,n.Lk)("button",null,[(0,n.Lk)("img",{src:this.project.acf.live_ico,alt:"",srcset:""},null,8,vt),(0,n.eW)(" Live ")]),(0,n.Lk)("a",{href:`/project/${this.project.id}`},mt,8,kt)])])):(0,n.Q3)("",!0)}var bt=o(8421),Ft=o(317),Lt={props:{project:{type:Object}},components:{Swiper:bt.RC,SwiperSlide:bt.qr},setup(){return{modules:[Ft.dK,Ft.Vx]}}};const yt=(0,s.A)(Lt,[["render",ft]]);var xt=yt,Tt={components:{Titles:z,Paragraph:et,ButtonSmall:V,ProjectCard:xt},data(){return{posts:[],isLoading:!0,imageUrls:{},ProjectTitle:"Projects",ProjectTitleStyle:{color:"#1b3764"},ProjectButtonStyle:{borderColor:"#FFCA42",backgroundColor:"#FFCA42"}}},methods:{async getPosts(){this.isLoading=!1;try{const t=await ut.A.get("");this.posts=t.data}catch(t){console.error("Error fetching posts:",t)}finally{this.isLoading=!1}}},mounted(){this.getPosts()}};const St=(0,s.A)(Tt,[["render",ct],["__scopeId","data-v-79dcb923"]]);var At=St;const jt={class:"technologies-container"},Mt={key:0,class:"custom-container"},_t={class:"single-technology"},Et=["src"],Bt={class:"autoplay-progress"},Xt={viewBox:"0 0 48 48",ref:"progressCircle"},Vt=(0,n.Lk)("circle",{cx:"24",cy:"24",r:"20"},null,-1),Pt=[Vt],Ht={ref:"progressContent"};function Rt(t,e,o,r,i,s){const l=(0,n.g2)("swiper-slide"),a=(0,n.g2)("swiper");return(0,n.uX)(),(0,n.CE)("div",jt,[this.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",Mt,[(0,n.bF)(a,{slidesPerView:8,spaceBetween:30,autoplay:{delay:1500,disableOnInteraction:!1},loop:!0,modules:r.modules,onAutoplayTimeLeft:r.onAutoplayTimeLeft,class:"swiper-technologies"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(this.technologies[0].acf.technologies_images,(t=>((0,n.uX)(),(0,n.Wv)(l,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",_t,[(0,n.Lk)("img",{src:t,alt:""},null,8,Et)])])),_:2},1024)))),256)),(0,n.Lk)("div",Bt,[((0,n.uX)(),(0,n.CE)("svg",Xt,Pt,512)),(0,n.Lk)("span",Ht,null,512)])])),_:1},8,["modules","onAutoplayTimeLeft"])]))])}var Ot=o(144),Gt={components:{Swiper:bt.RC,SwiperSlide:bt.qr},data(){return{isLoading:!0,technologies:[]}},methods:{async getTechnologies(){try{const t=await ut.A.get("https://liendev3.wpcomstaging.com/wp-json/wp/v2/technologies?_embed&acf_format=standard");this.technologies=t.data,console.log(this.technologies),this.isLoading=!1}catch(t){console.error("Error fetching posts:",t)}finally{this.isLoading=!1}}},mounted(){this.getTechnologies()},setup(){const t=(0,Ot.KR)(null),e=(0,Ot.KR)(null),o=(o,r,n)=>{t.value.style.setProperty("--progress",1-n),e.value.textContent=`${Math.ceil(r/1e3)}s`};return{onAutoplayTimeLeft:o,progressCircle:t,progressContent:e,modules:[Ft.Ij,Ft.dK,Ft.Vx]}}};const Zt=(0,s.A)(Gt,[["render",Rt]]);var It=Zt;const Nt={class:"contactform-container"},Qt={class:"custom-container"},Kt={class:"contactform-form"};function Ut(t,e,o,r,i,s){const l=(0,n.g2)("Title"),a=(0,n.g2)("DoubleInput"),c=(0,n.g2)("TextInput"),u=(0,n.g2)("SubmitButton");return(0,n.uX)(),(0,n.CE)("div",Nt,[(0,n.Lk)("div",Qt,[(0,n.Lk)("div",Kt,[(0,n.bF)(l,{titleTwo:i.titleSection,style:(0,h.Tr)(i.titleColor)},null,8,["titleTwo","style"]),(0,n.bF)(a,{valueOne:i.formName,valueTwo:i.formEmail,"onUpdate:valueOne":s.updateFormName,"onUpdate:valueTwo":s.updateFormEmail},null,8,["valueOne","valueTwo","onUpdate:valueOne","onUpdate:valueTwo"]),(0,n.bF)(c,{valueText:i.formMessage,"onUpdate:valueText":s.updateFormText},null,8,["valueText","onUpdate:valueText"]),(0,n.bF)(u,{submitMethod:s.submitForm},null,8,["submitMethod"])])])])}const Wt={class:"input-container"},qt={class:"double-content"},Dt=(0,n.Lk)("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Lk)("path",{d:"M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.Lk)("path",{d:"M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),zt=["value"],$t={class:"double-content"},Jt=(0,n.Lk)("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Lk)("path",{d:"M4 4.5H20C21.1 4.5 22 5.4 22 6.5V18.5C22 19.6 21.1 20.5 20 20.5H4C2.9 20.5 2 19.6 2 18.5V6.5C2 5.4 2.9 4.5 4 4.5Z",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.Lk)("path",{d:"M22 6.5L12 13.5L2 6.5",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Yt=["value"];function te(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",Wt,[(0,n.Lk)("div",qt,[Dt,(0,n.Lk)("input",{value:o.valueOne,onInput:e[0]||(e[0]=e=>t.$emit("update:valueOne",e.target.value)),placeholder:"Name"},null,40,zt)]),(0,n.Lk)("div",$t,[Jt,(0,n.Lk)("input",{value:o.valueTwo,onInput:e[1]||(e[1]=e=>t.$emit("update:valueTwo",e.target.value)),placeholder:"Email"},null,40,Yt)])])}var ee={props:{valueOne:String,valueTwo:String}};const oe=(0,s.A)(ee,[["render",te]]);var re=oe;const ne={class:"single-content"},ie=(0,n.Lk)("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Lk)("path",{d:"M21.9994 17.4201V20.4201C22.0006 20.6986 21.9435 20.9743 21.832 21.2294C21.7204 21.4846 21.5567 21.7137 21.3515 21.902C21.1463 22.0902 20.904 22.2336 20.6402 22.3228C20.3764 22.412 20.0968 22.4452 19.8194 22.4201C16.7423 22.0857 13.7864 21.0342 11.1894 19.3501C8.77327 17.8148 6.72478 15.7663 5.18945 13.3501C3.49942 10.7413 2.44769 7.77109 2.11944 4.6801C2.09446 4.40356 2.12732 4.12486 2.21595 3.86172C2.30457 3.59859 2.44702 3.35679 2.63421 3.15172C2.82141 2.94665 3.04925 2.78281 3.30324 2.67062C3.55722 2.55843 3.83179 2.50036 4.10945 2.5001H7.10945C7.59475 2.49532 8.06524 2.66718 8.43321 2.98363C8.80118 3.30008 9.04152 3.73954 9.10944 4.2201C9.23607 5.18016 9.47089 6.12282 9.80945 7.0301C9.94399 7.38802 9.97311 7.77701 9.89335 8.15098C9.8136 8.52494 9.62831 8.86821 9.35944 9.1401L8.08945 10.4101C9.513 12.9136 11.5859 14.9865 14.0894 16.4101L15.3594 15.1401C15.6313 14.8712 15.9746 14.6859 16.3486 14.6062C16.7225 14.5264 17.1115 14.5556 17.4694 14.6901C18.3767 15.0286 19.3194 15.2635 20.2794 15.3901C20.7652 15.4586 21.2088 15.7033 21.526 16.0776C21.8431 16.4519 22.0116 16.9297 21.9994 17.4201Z",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),se=(0,n.Lk)("input",{type:"text",placeholder:"Number"},null,-1),le=[ie,se];function ae(t,e){return(0,n.uX)(),(0,n.CE)("div",ne,le)}const ce={},ue=(0,s.A)(ce,[["render",ae]]);var de=ue;const he={class:"text-content"},pe=(0,n.Lk)("svg",{width:"23",height:"24",viewBox:"0 0 23 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Lk)("path",{d:"M10.541 4.33301H3.83268C3.32435 4.33301 2.83684 4.53494 2.47739 4.89439C2.11795 5.25383 1.91602 5.74134 1.91602 6.24967V19.6663C1.91602 20.1747 2.11795 20.6622 2.47739 21.0216C2.83684 21.3811 3.32435 21.583 3.83268 21.583H17.2493C17.7577 21.583 18.2452 21.3811 18.6046 21.0216C18.9641 20.6622 19.166 20.1747 19.166 19.6663V12.958",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,n.Lk)("path",{d:"M17.7285 2.89621C18.1098 2.51496 18.6268 2.30078 19.166 2.30078C19.7052 2.30078 20.2223 2.51496 20.6035 2.89621C20.9848 3.27746 21.1989 3.79455 21.1989 4.33371C21.1989 4.87288 20.9848 5.38996 20.6035 5.77121L11.4993 14.8754L7.66602 15.8337L8.62435 12.0004L17.7285 2.89621Z",stroke:"#FFCA42","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ce=["value"];function ge(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",he,[pe,(0,n.Lk)("textarea",{placeholder:"Message",value:o.valueText,onInput:e[0]||(e[0]=e=>t.$emit("update:valueText",e.target.value))},null,40,Ce)])}var ve={props:{valueText:String}};const ke=(0,s.A)(ve,[["render",ge]]);var we=ke;const me={class:"submit-content"};function fe(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",me,[(0,n.Lk)("button",{class:"submit-button",onClick:e[0]||(e[0]=(...t)=>o.submitMethod&&o.submitMethod(...t))},"Get an Appointment")])}var be={props:{submitMethod:Function}};const Fe=(0,s.A)(be,[["render",fe]]);var Le=Fe,ye={components:{Title:z,DoubleInput:re,SingleInput:de,TextInput:we,SubmitButton:Le},data(){return{titleSection:"Write us a message!",titleColor:{color:"#1B3764"},formName:"",formEmail:"",formMessage:""}},methods:{updateFormName(t){this.formName=t},updateFormEmail(t){this.formEmail=t},updateFormText(t){this.formMessage=t},async submitForm(){try{const t=await ut.A.post("https://formspree.io/f/xyyadolg",{name:this.formName,email:this.formEmail,message:this.formMessage});console.log("Form submitted successfully",t.data)}catch(t){console.error("Error submitting form",t)}}}};const xe=(0,s.A)(ye,[["render",Ut]]);var Te=xe;const Se={class:"footer-container"},Ae=(0,n.Fv)('<div class="custom-container"><div class="footer-top"><div class="footer-left"><div class="footer-logo"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.49997 12.4L5 17.7999" stroke="#FFCA42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.49997 12.4L5 7" stroke="#FFCA42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><line x1="18" y1="18" x2="10" y2="18" stroke="#FFCA42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line></svg><h1 class="footer-logo-title">Liensdev</h1></div></div><div class="footer-links"><p class="footer-title">Links</p><a href="/#about"><svg width="24" height="7" viewBox="0 0 24 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0003 1.66683C13.0128 1.66683 13.8337 2.48764 13.8337 3.50016C13.8337 4.51268 13.0128 5.3335 12.0003 5.3335C10.9878 5.3335 10.167 4.51268 10.167 3.50016C10.167 2.48764 10.9878 1.66683 12.0003 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M21.1663 1.66683C22.1789 1.66683 22.9997 2.48764 22.9997 3.50016C22.9997 4.51268 22.1789 5.3335 21.1663 5.3335C20.1538 5.3335 19.333 4.51268 19.333 3.50016C19.333 2.48764 20.1538 1.66683 21.1663 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M2.83333 1.66683C3.84586 1.66683 4.66667 2.48764 4.66667 3.50016C4.66667 4.51268 3.84586 5.3335 2.83333 5.3335C1.82081 5.3335 1 4.51268 1 3.50016C1 2.48764 1.82081 1.66683 2.83333 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path></svg> About </a><a href="/#projects"><svg width="24" height="7" viewBox="0 0 24 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0003 1.66683C13.0128 1.66683 13.8337 2.48764 13.8337 3.50016C13.8337 4.51268 13.0128 5.3335 12.0003 5.3335C10.9878 5.3335 10.167 4.51268 10.167 3.50016C10.167 2.48764 10.9878 1.66683 12.0003 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M21.1663 1.66683C22.1789 1.66683 22.9997 2.48764 22.9997 3.50016C22.9997 4.51268 22.1789 5.3335 21.1663 5.3335C20.1538 5.3335 19.333 4.51268 19.333 3.50016C19.333 2.48764 20.1538 1.66683 21.1663 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M2.83333 1.66683C3.84586 1.66683 4.66667 2.48764 4.66667 3.50016C4.66667 4.51268 3.84586 5.3335 2.83333 5.3335C1.82081 5.3335 1 4.51268 1 3.50016C1 2.48764 1.82081 1.66683 2.83333 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path></svg> Projects </a><a href="/#technologies"><svg width="24" height="7" viewBox="0 0 24 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0003 1.66683C13.0128 1.66683 13.8337 2.48764 13.8337 3.50016C13.8337 4.51268 13.0128 5.3335 12.0003 5.3335C10.9878 5.3335 10.167 4.51268 10.167 3.50016C10.167 2.48764 10.9878 1.66683 12.0003 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M21.1663 1.66683C22.1789 1.66683 22.9997 2.48764 22.9997 3.50016C22.9997 4.51268 22.1789 5.3335 21.1663 5.3335C20.1538 5.3335 19.333 4.51268 19.333 3.50016C19.333 2.48764 20.1538 1.66683 21.1663 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M2.83333 1.66683C3.84586 1.66683 4.66667 2.48764 4.66667 3.50016C4.66667 4.51268 3.84586 5.3335 2.83333 5.3335C1.82081 5.3335 1 4.51268 1 3.50016C1 2.48764 1.82081 1.66683 2.83333 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path></svg> Technologies </a><a href="/#contact"><svg width="24" height="7" viewBox="0 0 24 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0003 1.66683C13.0128 1.66683 13.8337 2.48764 13.8337 3.50016C13.8337 4.51268 13.0128 5.3335 12.0003 5.3335C10.9878 5.3335 10.167 4.51268 10.167 3.50016C10.167 2.48764 10.9878 1.66683 12.0003 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M21.1663 1.66683C22.1789 1.66683 22.9997 2.48764 22.9997 3.50016C22.9997 4.51268 22.1789 5.3335 21.1663 5.3335C20.1538 5.3335 19.333 4.51268 19.333 3.50016C19.333 2.48764 20.1538 1.66683 21.1663 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path><path d="M2.83333 1.66683C3.84586 1.66683 4.66667 2.48764 4.66667 3.50016C4.66667 4.51268 3.84586 5.3335 2.83333 5.3335C1.82081 5.3335 1 4.51268 1 3.50016C1 2.48764 1.82081 1.66683 2.83333 1.66683Z" stroke="#FFCA42" stroke-width="1.5"></path></svg> Contact Us </a></div><div class="footer-links"><p class="footer-title">Keep in Touch</p><div><span>Mail:</span><a href="mailto:liensilviosanchez@gmail.com">liensilviosanchez@gmail.com</a></div></div></div><div class="copyright-container"><div><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.615723 7.2926C0.615723 6.64319 0.699219 6.01851 0.866211 5.41858C1.0332 4.81864 1.27132 4.25582 1.58057 3.7301C1.88981 3.20439 2.25781 2.72815 2.68457 2.30139C3.11133 1.87463 3.58757 1.50663 4.11328 1.19739C4.639 0.888143 5.20182 0.650024 5.80176 0.483032C6.40169 0.31604 7.02637 0.232544 7.67578 0.232544C8.3252 0.232544 8.94987 0.31604 9.5498 0.483032C10.1497 0.650024 10.7126 0.888143 11.2383 1.19739C11.764 1.50663 12.2402 1.87463 12.667 2.30139C13.0938 2.72815 13.4618 3.20439 13.771 3.7301C14.0802 4.25582 14.3184 4.81864 14.4854 5.41858C14.6523 6.01851 14.7358 6.64319 14.7358 7.2926C14.7358 7.94202 14.6523 8.56669 14.4854 9.16663C14.3184 9.76656 14.0802 10.3294 13.771 10.8551C13.4618 11.3808 13.0938 11.8571 12.667 12.2838C12.2402 12.7106 11.764 13.0786 11.2383 13.3878C10.7126 13.6971 10.1497 13.9352 9.5498 14.1022C8.94987 14.2692 8.3252 14.3527 7.67578 14.3527C7.02637 14.3527 6.40169 14.2692 5.80176 14.1022C5.20182 13.9352 4.639 13.6971 4.11328 13.3878C3.58757 13.0786 3.11133 12.7106 2.68457 12.2838C2.25781 11.8571 1.88981 11.3808 1.58057 10.8551C1.27132 10.3294 1.0332 9.76656 0.866211 9.16663C0.699219 8.56669 0.615723 7.94202 0.615723 7.2926ZM1.87744 7.2926C1.87744 7.8245 1.94548 8.33785 2.08154 8.83264C2.2238 9.32743 2.41862 9.7913 2.66602 10.2242C2.9196 10.651 3.22266 11.0406 3.5752 11.3932C3.92773 11.7457 4.31738 12.0488 4.74414 12.3024C5.17708 12.5498 5.64095 12.7446 6.13574 12.8868C6.63053 13.0229 7.14388 13.0909 7.67578 13.0909C8.20768 13.0909 8.72103 13.0229 9.21582 12.8868C9.71061 12.7446 10.1714 12.5498 10.5981 12.3024C11.0311 12.0488 11.4238 11.7457 11.7764 11.3932C12.1289 11.0406 12.4289 10.651 12.6763 10.2242C12.9299 9.7913 13.1247 9.32743 13.2607 8.83264C13.403 8.33785 13.4741 7.8245 13.4741 7.2926C13.4741 6.7607 13.403 6.24736 13.2607 5.75256C13.1247 5.25777 12.9299 4.797 12.6763 4.37024C12.4289 3.9373 12.1289 3.54456 11.7764 3.19202C11.4238 2.83948 11.0311 2.53951 10.5981 2.29211C10.1714 2.03853 9.71061 1.84371 9.21582 1.70764C8.72103 1.56539 8.20768 1.49426 7.67578 1.49426C7.14388 1.49426 6.63053 1.56539 6.13574 1.70764C5.64095 1.84371 5.17708 2.03853 4.74414 2.29211C4.31738 2.53951 3.92773 2.83948 3.5752 3.19202C3.22266 3.54456 2.9196 3.9373 2.66602 4.37024C2.41862 4.797 2.2238 5.25777 2.08154 5.75256C1.94548 6.24736 1.87744 6.7607 1.87744 7.2926ZM3.19482 7.40393C3.19482 6.95243 3.2474 6.52877 3.35254 6.13293C3.45768 5.73092 3.60303 5.36292 3.78857 5.02893C3.98031 4.68876 4.20915 4.3857 4.4751 4.11975C4.74105 3.84762 5.03483 3.61877 5.35645 3.43323C5.68424 3.2415 6.03369 3.09615 6.40479 2.99719C6.77588 2.89823 7.16243 2.84875 7.56445 2.84875C7.91081 2.84875 8.2417 2.88277 8.55713 2.95081C8.87256 3.01265 9.20036 3.08687 9.54053 3.17346C9.59619 3.19202 9.65495 3.21366 9.7168 3.2384C9.77865 3.26314 9.83431 3.28788 9.88379 3.31262C9.93945 3.33118 9.98893 3.34973 10.0322 3.36829C10.0755 3.38066 10.1095 3.38684 10.1343 3.38684C10.1405 3.38684 10.1652 3.38066 10.2085 3.36829C10.2518 3.34973 10.2827 3.34045 10.3013 3.34045H10.561C10.6043 3.34045 10.626 3.37447 10.626 3.4425V5.4093C10.626 5.43404 10.6167 5.4526 10.5981 5.46497C10.5796 5.47115 10.5425 5.47424 10.4868 5.47424C10.4806 5.47424 10.4528 5.47424 10.4033 5.47424C10.36 5.46806 10.3322 5.45569 10.3198 5.43713C10.3136 5.42476 10.2982 5.40002 10.2734 5.36292C10.2549 5.32581 10.2332 5.2887 10.2085 5.25159C10.1838 5.21448 10.1621 5.18046 10.1436 5.14954C10.125 5.11243 10.1126 5.08769 10.1064 5.07532C9.96419 4.77226 9.80957 4.51868 9.64258 4.31458C9.47559 4.10429 9.29004 3.9342 9.08594 3.80432C8.88802 3.67444 8.66846 3.58167 8.42725 3.526C8.19222 3.46415 7.93555 3.43323 7.65723 3.43323C7.30469 3.43323 6.99235 3.47961 6.72021 3.57239C6.44808 3.65898 6.20996 3.78267 6.00586 3.94348C5.80176 4.10429 5.62858 4.29911 5.48633 4.52795C5.35026 4.75061 5.23893 4.99491 5.15234 5.26086C5.06576 5.52681 5.00081 5.81441 4.95752 6.12366C4.92041 6.42672 4.90186 6.73905 4.90186 7.06067C4.90186 7.40084 4.9235 7.73792 4.9668 8.0719C5.01628 8.40588 5.09049 8.7275 5.18945 9.03674C5.28841 9.3398 5.4152 9.62122 5.56982 9.88098C5.73063 10.1407 5.92236 10.3665 6.14502 10.5582C6.36768 10.7438 6.62744 10.8922 6.92432 11.0035C7.22119 11.1149 7.55518 11.1705 7.92627 11.1705C8.2417 11.1705 8.53548 11.118 8.80762 11.0128C9.08594 10.9077 9.33643 10.7685 9.55908 10.5953C9.78792 10.4222 9.98893 10.2212 10.1621 9.99231C10.3415 9.76347 10.493 9.52535 10.6167 9.27795C10.6229 9.2594 10.6291 9.25012 10.6353 9.25012C10.6476 9.24394 10.6631 9.24084 10.6816 9.24084H10.9692C10.9816 9.24084 10.994 9.24703 11.0063 9.2594C11.0187 9.26558 11.0249 9.28414 11.0249 9.31506C11.0249 9.32743 11.0156 9.36145 10.9971 9.41711C10.9847 9.46659 10.9692 9.50989 10.9507 9.547L10.1807 11.3746C10.1745 11.387 10.1621 11.3994 10.1436 11.4117C10.1312 11.4179 10.1188 11.421 10.1064 11.421C10.0199 11.421 9.95801 11.4148 9.9209 11.4025C9.88379 11.3839 9.84668 11.3746 9.80957 11.3746C9.69824 11.3746 9.5498 11.3963 9.36426 11.4396C9.1849 11.4767 8.98698 11.52 8.77051 11.5695C8.56022 11.6189 8.34684 11.6653 8.13037 11.7086C7.9139 11.7519 7.71908 11.7736 7.5459 11.7736C7.15625 11.7736 6.77588 11.7272 6.40479 11.6344C6.03988 11.5416 5.69661 11.4087 5.375 11.2355C5.05339 11.0561 4.7596 10.8396 4.49365 10.5861C4.2277 10.3263 3.99577 10.0356 3.79785 9.71399C3.60612 9.39237 3.45768 9.03984 3.35254 8.65637C3.2474 8.26672 3.19482 7.84924 3.19482 7.40393Z" fill="#B4C7E7"></path></svg></div><p><span>Lien Sanchez</span></p></div></div>',1),je=[Ae];function Me(t,e){return(0,n.uX)(),(0,n.CE)("div",Se,je)}const _e={},Ee=(0,s.A)(_e,[["render",Me]]);var Be=Ee,Xe={components:{NavBar:R,HomeHero:nt,Projects:At,Technologies:It,Contact:Te,Footer:Be}};const Ve=(0,s.A)(Xe,[["render",d]]);var Pe=Ve;const He={key:1,class:"project-info-container"},Re={class:"custom-container"},Oe={class:"project-info-content"},Ge={key:2,class:"project-links-container"},Ze={class:"custom-container"},Ie={class:"project-links-content"},Ne=["href"],Qe=(0,n.Fv)('<button><svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Github</title><rect width="24" height="24" fill="none"></rect><path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path></g></svg> Github </button>',1),Ke=[Qe],Ue=["href"],We=["src"],qe=(0,n.Fv)('<a href="/"><button><svg height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38.273 38.273" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:#010002;" d="M20.621,10.484V5.84c0-0.808-0.458-1.548-1.181-1.909c-0.722-0.359-1.589-0.279-2.236,0.206 l-9.486,7.147c-0.677,0.292-1.117,0.67-1.401,1.058l-5.468,4.119C0.312,16.866-0.003,17.501,0,18.173 c0.002,0.673,0.322,1.305,0.862,1.706l16.355,12.133c0.646,0.48,1.51,0.554,2.23,0.191c0.72-0.362,1.174-1.1,1.174-1.905v-5.517 c0.013,0,0.025,0,0.038,0c3.842,0,10.687,1.089,13.366,8.386c0.311,0.846,1.116,1.397,2.001,1.397c0.079,0,0.157-0.004,0.236-0.013 c0.975-0.108,1.751-0.868,1.88-1.84c0.052-0.394,1.208-9.682-4.461-16.23C30.621,12.948,26.235,10.935,20.621,10.484z M20.659,20.515c-1.443,0-2.379,0.132-2.482,0.146c-1.046,0.154-1.822,1.053-1.822,2.111v3.287l-10.66-7.907l3.555-2.678 c0.136-0.104,0.259-0.222,0.365-0.351c0.155-0.068,0.301-0.152,0.437-0.254l6.303-4.75v2.401c0,1.168,0.939,2.119,2.108,2.134 c5.345,0.063,9.374,1.61,11.975,4.6c1.442,1.658,2.314,3.602,2.835,5.469C28.923,21.038,23.424,20.515,20.659,20.515z"></path></g></g></svg> Go Back </button></a>',1);function De(t,e,o,r,i,s){const l=(0,n.g2)("NavBar"),a=(0,n.g2)("Hero"),c=(0,n.g2)("Carousel"),u=(0,n.g2)("Paragraph"),d=(0,n.g2)("Footer");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(l),this.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(a,{key:0,heroTitle:this.post.title.rendered,heroText:this.post.excerpt.rendered},null,8,["heroTitle","heroText"])),this.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",He,[(0,n.Lk)("div",Re,[(0,n.Lk)("div",Oe,[(0,n.bF)(c,{images:this.post.acf.carousel_images},null,8,["images"]),(0,n.bF)(u,{text:this.post.content.rendered},null,8,["text"])])])])),this.isLoading?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",Ge,[(0,n.Lk)("div",Ze,[(0,n.Lk)("div",Ie,[(0,n.Lk)("a",{href:this.post.acf.github_link,target:"blank"},Ke,8,Ne),(0,n.Lk)("a",{href:this.post.acf.live_link,target:"blank"},[(0,n.Lk)("button",null,[(0,n.Lk)("img",{src:this.post.acf.live_ico,alt:"",srcset:""},null,8,We),(0,n.eW)(" Live ")])],8,Ue),qe])])])),(0,n.bF)(d)])}const ze={class:"hero-container"},$e={class:"hero-title"},Je=(0,n.Lk)("svg",{width:"55",height:"3",viewBox:"0 0 55 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.Lk)("line",{y1:"1.5",x2:"55",y2:"1.5",stroke:"#FFCA42","stroke-width":"3"})],-1),Ye=["innerHTML"];function to(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",ze,[(0,n.Lk)("h1",$e,(0,h.v_)(this.heroTitle),1),Je,(0,n.Lk)("p",{class:"hero-text",innerHTML:this.heroText},null,8,Ye)])}var eo={props:{heroTitle:{type:String,required:!0},heroText:{type:String,required:!0}}};const oo=(0,s.A)(eo,[["render",to]]);var ro=oo;const no={class:"thumbscarousel-container"},io=["src"],so=["src"];var lo={__name:"Carousel",props:["images"],setup(t){const e=t;(0,n.sV)((()=>{console.log(e.images)}));const o=(0,Ot.KR)(),r=t=>{o.value=t},i=(0,Ot.KR)([Ft.U1,Ft.Vx,Ft.WO]);return(t,s)=>((0,n.uX)(),(0,n.CE)("div",no,[(0,n.bF)((0,Ot.R1)(bt.RC),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},spaceBetween:10,navigation:!0,thumbs:{swiper:o.value},modules:i.value,class:"mySwiperBig"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.images,(t=>((0,n.uX)(),(0,n.Wv)((0,Ot.R1)(bt.qr),{key:t},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:t},null,8,io)])),_:2},1024)))),128))])),_:1},8,["thumbs","modules"]),(0,n.bF)((0,Ot.R1)(bt.RC),{onSwiper:r,spaceBetween:10,slidesPerView:4,watchSlidesProgress:!0,grabCursor:!0,modules:i.value,class:"mySwiperSmall"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.images,(t=>((0,n.uX)(),(0,n.Wv)((0,Ot.R1)(bt.qr),{key:t},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:t},null,8,so)])),_:2},1024)))),128))])),_:1},8,["modules"])]))}};const ao=lo;var co=ao,uo={components:{NavBar:R,Hero:ro,Carousel:co,Paragraph:et,Footer:Be},data(){return{isLoading:!0,post:[],heroTitle:"Jules Verne's Books",heroText:"The earth does not need new continents, but new men."}},methods:{async getPost(t){this.isLoading=!1;try{const t=await ut.A.get({NODE_ENV:"production",VUE_APP_PROJECTS:"",BASE_URL:"/"}.VUE_APP_HERO);this.post=t.data,console.log(this.post)}catch(e){console.error("Error fetching posts:",e)}finally{this.isLoading=!1}}},mounted(){const t=this.$route.params.id;this.getPost(t)}};const ho=(0,s.A)(uo,[["render",De]]);var po=ho;const Co=(0,n.Lk)("h1",null,"404 - Page Not Found",-1),go=(0,n.Lk)("p",null,"The page you are looking for does not exist.",-1),vo=[Co,go];function ko(t,e,o,r,i,s){return(0,n.uX)(),(0,n.CE)("div",null,vo)}var wo={name:"NotFound"};const mo=(0,s.A)(wo,[["render",ko]]);var fo=mo;const bo=[{path:"/",name:"home",component:Pe},{path:"/project/:id",name:"project",component:po},{path:"/:catchAll(.*)",name:"not-found",component:fo}],Fo=(0,u.aE)({history:(0,u.LA)("/"),routes:bo});var Lo=Fo;(0,r.Ef)(c).use(Lo).mount("#app")}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,r,n,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[a])}))?r.splice(a--,1):(l=!1,i<s&&(s=i));if(l){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,s=r[0],l=r[1],a=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var u=a(o)}for(e&&e(r);c<s.length;c++)i=s[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},r=self["webpackChunklienwordpress"]=self["webpackChunklienwordpress"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(2175)}));r=o.O(r)})();
//# sourceMappingURL=app.75dee488.js.map