(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{l1X6:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogModule",function(){return A});var o=n("ofXK"),i=n("tyNb"),r=n("+XWC"),a=n("GmJt"),c=n("fXoL"),s=n("Wp6s"),l=n("cH1L"),b=function(){return{y:"50px",delay:"300ms"}},p=function(e){return{value:"*",params:e}},u=function(){function e(e){this.fix=e}return e.prototype.ngOnInit=function(){this.fix.addFix()},e.prototype.ngOnDestroy=function(){this.fix.removeFix()},e.\u0275fac=function(t){return new(t||e)(c.Mb(r.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-modern-workforace-iam-structure"]],decls:83,vars:4,consts:[[1,"home-intro-section","text-center","primary-bg"],["id","service-section",1,"services-wrappper","gap","bg-grey"],[1,"container"],[1,"mb-2","text-center"],[1,"title-page"],["src","assets/images/blog/modern-workforce-iam-structure-banner.png"],["dir","ltr"],["dir","ltr",1,"text-center"],["src","assets/images/blog/modern-work-iam-structure-components.png"],["href","http://www.bostonidentity.com",2,"color","blue"]],template:function(e,t){1&e&&(c.Nb(0,"section",0),c.Sb(1,"section",1),c.Sb(2,"div",2),c.Sb(3,"div"),c.Sb(4,"mat-card"),c.Sb(5,"mat-card-title"),c.Sb(6,"div",3),c.Sb(7,"h2",4),c.uc(8,"Modern Workforce IAM Structure"),c.Rb(),c.Nb(9,"img",5),c.Rb(),c.Rb(),c.Sb(10,"mat-card-content"),c.Sb(11,"p",6),c.uc(12," In today\u2019s cyber world, IAM technology and market are shifting rapidly. A well-established IAM system will provide a much better foundation to grow its business, lowering cost and risk for the daily operations. "),c.Rb(),c.Sb(13,"h1",6),c.uc(14," Customer IAM and Workforce IAM "),c.Rb(),c.Sb(15,"p",6),c.uc(16," In general, IAM can be categorized into two parts, Customer IAM (CIAM) and Workforce IAM (or Employee IAM). Due to the nature that identity targets, the core objects of an IAM system, are different between CIAM and Workforce IAM, the way they are treated or architected are different as well. For example, in Workforce IAM, employees are registered by HR, who can help to handle registration issues from various aspects; in CIAM, end users will usually register by themselves and this flow should be straightforward and intuitive. "),c.Rb(),c.Nb(17,"br"),c.Sb(18,"h1",6),c.uc(19," Workforce IAM Requirements "),c.Rb(),c.Sb(20,"p",6),c.uc(21," There are various aspects we can talk about regarding Workforce IAM. Here are some of them. "),c.Rb(),c.Sb(22,"h4",6),c.uc(23," Empower Work Efficiency "),c.Rb(),c.Sb(24,"p",6),c.uc(25," Work efficiency is a large topic. From a certain perspective, increasing work efficiency reduces operational cost while maintaining productivity and hence increased profit. Empowering a SSO mechanism across different platforms ranging from internal in-house application to external partners service application will greatly reduce the application access friction and workforce disconnectivity. Self-service portal for employees will enhance user experience and reduce IT costs as well. "),c.Rb(),c.Sb(26,"h4",6),c.uc(27," Authorization with Flexible Policy "),c.Rb(),c.Sb(28,"p",6),c.uc(29," Enterprise is never a standalone entity, especially in this globally connected informational world. We are all seeing an increasing complexity among an enterprise application system, both internally and externally. An IAM system that provides a flexible Authentication and Authorization enforcement mechanism which handles different workflows at different granularity will no doubt enhance the user experience. For example, an employee accessing an internal application which doesn\u2019t interact with sensitive information doesn\u2019t need to enforce an MFA while an external partner accessing an internal application from the public internet will definitely need to have an MFA. "),c.Rb(),c.Sb(30,"h4",6),c.uc(31," Legacy App Handling "),c.Rb(),c.Sb(32,"p",6),c.uc(33," Legacy applications could be painful to handle, especially for those enterprises with some history. Due to the incompatibility and poor support with modern technology, its integration could be challenging. A good IAM platform should provide flexible ways to integrate with legacy apps. "),c.Rb(),c.Nb(34,"br"),c.Sb(35,"h4",6),c.uc(36," Continuous Monitoring "),c.Rb(),c.Sb(37,"p",6),c.uc(38," Continuous Monitoring is a continuous journey. A good IAM system should provide strong logging and monitoring mechanisms. This could be due to troubleshooting demand, regulatory compliance needs, or any other reasons. "),c.Rb(),c.Sb(39,"h1",6),c.uc(40," Components Architecture "),c.Rb(),c.Sb(41,"p",6),c.uc(42," Here is a general architecture using Ping Identity for Workforce Management. "),c.Rb(),c.Sb(43,"p",7),c.Nb(44,"img",8),c.Rb(),c.Sb(45,"p",6),c.uc(46," Workforce IAM Components Diagram "),c.Rb(),c.Sb(47,"h4",6),c.uc(48," Use Case Scenario "),c.Rb(),c.Sb(49,"ul"),c.Sb(50,"li",6),c.Sb(51,"p",6),c.uc(52," Centrified Authentication and Authorization Provider "),c.Rb(),c.Rb(),c.Sb(53,"li",6),c.Sb(54,"p",6),c.uc(55," SSO across internal and external platforms "),c.Rb(),c.Rb(),c.Sb(56,"li",6),c.Sb(57,"p",6),c.uc(58," Gateway proxy protecting legacy apps "),c.Rb(),c.Rb(),c.Sb(59,"li",6),c.Sb(60,"p",6),c.uc(61," Adaptive MFA for sensitive accesses "),c.Rb(),c.Rb(),c.Sb(62,"li",6),c.Sb(63,"p",6),c.uc(64," Self-service for reduced IT costs "),c.Rb(),c.Rb(),c.Sb(65,"li",6),c.Sb(66,"p",6),c.uc(67," Continuous monitoring with external Saas platform "),c.Rb(),c.Rb(),c.Rb(),c.Nb(68,"br"),c.Sb(69,"p",6),c.uc(70," PingFederate here is acting as a central authentication and authorization management platform. An enterprise AD is connected to it for user profile provisioning. SSO is fulfilled via such modern protocols as OAuth, OIDC and SAML. With Auth Provider\u2019s built-in authorization policy management, we can implement comprehensive authorization workflows to adapt to different needs. "),c.Rb(),c.Nb(71,"br"),c.Sb(72,"p",6),c.uc(73," Nevertheless, PingAccess can act as a gateway proxy as a policy enforcement point to protect legacy applications while leveraging PingFederate as policy decision point. To further enhance security, PingID cloud service is used with PingFederate to provide MFA capability. Monitoring is log forwarding from all sources to external aggregating Saas platforms such as Splunk. "),c.Rb(),c.Nb(74,"br"),c.Sb(75,"p",6),c.uc(76," This architecture is leveraging Ping Identity products, but can be extended to other IAM providers as well. "),c.Rb(),c.Nb(77,"br"),c.Sb(78,"i"),c.Sb(79,"p"),c.Sb(80,"a",9),c.uc(81,"Boston Identity"),c.Rb(),c.uc(82," helps organizations in all phases to complete their IAM journey together with passion and customer first principle."),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Cb(1),c.gc("@animate",c.ic(2,p,c.hc(1,b))))},directives:[s.a,s.e,s.b,l.b],styles:[".home-intro-section[_ngcontent-%COMP%]{background-size:cover;padding:150px 0 0;color:#fff;overflow:visible}.banner[_ngcontent-%COMP%]{position:static;transform:none;display:block;max-width:100%}"],data:{animation:a.a}}),e}(),d=n("XiUz"),f=function(){return{y:"50px",delay:"300ms"}},h=function(e){return{value:"*",params:e}},m=function(){return{y:"50px",delay:"500ms"}},g=[{path:"",redirectTo:"blog-list",pathMatch:"full"},{path:"blog-list",component:function(){function e(e){this.fix=e}return e.prototype.scrollToTop=function(){window.scroll(0,0)},e.prototype.ngOnInit=function(){this.fix.addFix()},e.prototype.ngOnDestroy=function(){this.fix.removeFix()},e.\u0275fac=function(t){return new(t||e)(c.Mb(r.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-blog-list"]],decls:21,vars:8,consts:[[1,"home-intro-section","text-center","primary-bg"],["id","portfolio-section",1,"portfolio","home-section","gap"],[1,"container"],["fxLayout","column",1,"text-center","mb-5"],["fxFlex.gt-md","60%"],[1,"title-page"],[1,"lead","w-60"],["fxLayout","row nowrap","fxLayout.lt-sm","column","fxLayoutGap","30px"],["fxFlex","33.33"],["routerLink","/blog/modern-workforce-iam-structure",1,"p-0","m-0","post",3,"click"],["mat-card-image","","src","../../../../../assets/images/blog/modern-workforce-iam-structure-card.png"],[1,"title-head"],["href",""]],template:function(e,t){1&e&&(c.Nb(0,"section",0),c.Sb(1,"section",1),c.Sb(2,"div",2),c.Sb(3,"div",3),c.Sb(4,"div",4),c.Sb(5,"h2",5),c.uc(6,"Blogs"),c.Rb(),c.Sb(7,"p",6),c.uc(8," Blog posts sharing thoughts and ideas on IAM security trends and insights "),c.Rb(),c.Rb(),c.Rb(),c.Sb(9,"div",7),c.Sb(10,"div",8),c.Sb(11,"mat-card",9),c.ac("click",function(){return t.scrollToTop()}),c.Nb(12,"img",10),c.Sb(13,"mat-card-content"),c.Sb(14,"div",11),c.Sb(15,"h4"),c.Sb(16,"strong"),c.Sb(17,"a",12),c.uc(18,"Modern Workforce IAM Structure"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(19,"p"),c.uc(20," In today\u2019s cyber world, IAM technology and market are shifting rapidly. A well-established IAM system will provide a much better foundation to grow its business, lowering cost and risk for the daily operations. "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Cb(3),c.gc("@animate",c.ic(3,h,c.hc(2,f))),c.Cb(8),c.gc("@animate",c.ic(6,h,c.hc(5,m))))},directives:[d.c,d.a,d.d,s.a,i.b,s.c,s.b],styles:[".home-intro-section[_ngcontent-%COMP%]{background-size:cover;padding:150px 0 0;color:#fff;overflow:visible}.post[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:a.a}}),e}()},{path:"modern-workforce-iam-structure",component:u}],y=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[i.c.forChild(g)],i.c]}),e}(),w=n("f0Cb"),S=n("NFeN"),R=n("YUcS"),v=n("bTqV"),A=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[o.b,y,s.d,w.a,S.b,R.a,v.b]]}),e}()}}]);