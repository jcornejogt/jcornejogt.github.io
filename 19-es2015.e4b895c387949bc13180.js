(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{UTcu:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("fXoL"),i=n("lGQG"),a=n("tyNb");let c=(()=>{class t{constructor(t,e){this.authSrvc=t,this.router=e}canActivate(t,e){return!!this.authSrvc.isLogged||(console.log("Acceso denegado!"),this.router.navigateByUrl("/login"),!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(i.a),o.Rb(a.g))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return d}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),r=n("fXoL");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-home"]],decls:18,vars:0,consts:[["slot","bottom","color","primary"],["tab","feed"],["name","archive-outline"],["tab","messages"],["name","chatbox-ellipses-outline"],["tab","notifications"],["name","alert-circle-outline"],["tab","settings"],["name","build-outline"]],template:function(t,e){1&t&&(r.Nb(0,"ion-tabs"),r.Nb(1,"ion-tab-bar",0),r.Nb(2,"ion-tab-button",1),r.Lb(3,"ion-icon",2),r.Nb(4,"ion-label"),r.gc(5,"Servicios"),r.Mb(),r.Mb(),r.Nb(6,"ion-tab-button",3),r.Lb(7,"ion-icon",4),r.Nb(8,"ion-label"),r.gc(9,"Mensajes"),r.Mb(),r.Mb(),r.Nb(10,"ion-tab-button",5),r.Lb(11,"ion-icon",6),r.Nb(12,"ion-label"),r.gc(13,"Notificaciones"),r.Mb(),r.Mb(),r.Nb(14,"ion-tab-button",7),r.Lb(15,"ion-icon",8),r.Nb(16,"ion-label"),r.gc(17,"Configuracion"),r.Mb(),r.Mb(),r.Mb(),r.Mb())},directives:[a.E,a.C,a.D,a.o,a.r],styles:[""]}),t})();var s=n("UTcu");const b=[{path:"",canActivate:[s.a],component:l,children:[{path:"feed",loadChildren:()=>Promise.all([n.e(4),n.e(21)]).then(n.bind(null,"lGXy")).then(t=>t.FeedPageModule),canActivate:[s.a]},{path:"notifications",loadChildren:()=>n.e(24).then(n.bind(null,"0c+Z")).then(t=>t.NotificationsPageModule),canActivate:[s.a]},{path:"messages",loadChildren:()=>n.e(23).then(n.bind(null,"EhdV")).then(t=>t.MessagesPageModule),canActivate:[s.a]},{path:"settings",loadChildren:()=>n.e(25).then(n.bind(null,"GAoG")).then(t=>t.SettingsPageModule),canActivate:[s.a]},{path:"add-service",loadChildren:()=>Promise.all([n.e(4),n.e(20)]).then(n.bind(null,"5/sJ")).then(t=>t.AddServicePageModule)}]}];let u=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(b)],c.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[o.b,i.e,a.J,u]]}),t})()}}]);