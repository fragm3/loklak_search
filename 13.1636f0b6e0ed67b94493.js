(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){},i=e("NcP4"),r=e("pMnS"),a=e("ZYCi"),u=e("Ip0R"),c=e("SVhw"),s=e("WYkV"),p=e("nmLA"),d=e("tHof"),g=e("caBT"),h=e("gIcY"),f=e("1haT"),m=e("fp1T"),_=e("IGZg"),C=e("POKm"),P=e("P5oG"),O=e("thy8"),v=e("rpyo"),M=e("Yb1Z"),w=e("lGQG"),b=function(){function n(n,t,e,l,o){this.router=n,this.elementRef=t,this.changeDetectorRef=e,this.store=l,this.afAuth=o,this.__subscriptions__=new Array,this.headerImageUrl="assets/images/cow_150x175.png",this._queryControl=new h.f,this.trendingHashtagList=new Array,this.inputFocused=!1,this.hidespeech=l.select(_.K),this.getHashTagsFromLastDay(),this.getDataOfTrendingHashTags(),this.user=this.afAuth.authState}return n.prototype.speechRecognition=function(){this.store.dispatch(new v.b(!0))},n.prototype.ngOnInit=function(){this.store.dispatch(new M.b("Loklak Search - Distributed Open Source Search for Twitter and Social Media with Peer to Peer Technology")),this.focusTextbox(),this.getTopHashtags()},n.prototype.focusTextbox=function(){this.elementRef.nativeElement.querySelector("div.search-form input#search").focus()},n.prototype.onEnter=function(n){13===n.which&&""!==this._queryControl.value.trim()&&(this.store.dispatch(new C.g),this.store.dispatch(new O.b(this._queryControl.value.trim())),this.store.dispatch(new C.c(this._queryControl.value.trim())),this.router.navigate(["/search"],{queryParams:{query:this._queryControl.value.trim()},skipLocationChange:!0}),this.store.dispatch(new M.b(this._queryControl.value.trim()+" - Loklak Search")),this.getDataFromStore())},n.prototype.getTopHashtags=function(){this.store.dispatch(new P.b)},n.prototype.ngAfterContentChecked=function(){this.store.dispatch(new M.b("Loklak Search - Distributed Open Source Search for Twitter and Social Media with Peer to Peer Technology"))},n.prototype.getDataFromStore=function(){var n=this;this.__subscriptions__.push(this.store.select(_.b).subscribe(function(t){t&&t.aggregations.hashtags&&(Object.keys(t.aggregations.hashtags).forEach(function(t){n.trendingHashtagList.push(t)}),n.changeDetectorRef.detectChanges())}))},n.prototype.getDataOfTrendingHashTags=function(){this.apiResponseHashtags$=this.store.select(_.d)},n.prototype.getHashTagsFromLastDay=function(){this.store.dispatch(new C.f),this.store.dispatch(new C.c("since:day"))},n.prototype.logout=function(){this.afAuth.logout()},n.prototype.ngOnDestroy=function(){this.__subscriptions__.forEach(function(n){return n.unsubscribe()})},n}(),x=e("yGQT"),y=l["\u0275crt"]({encapsulation:0,styles:[['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}a[_ngcontent-%COMP%]{text-decoration:none;color:#337ab7}ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style-type:none}.container[_ngcontent-%COMP%]{margin:0 auto;width:100%}.container[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}[class*=col-][_ngcontent-%COMP%]{float:left;padding:0 15px;width:100%;min-height:1px}@media only screen and (min-width:768px){.container[_ngcontent-%COMP%]{width:95%;max-width:1170px}.col-sm-1[_ngcontent-%COMP%]{width:8.33333333%}.col-sm-2[_ngcontent-%COMP%]{width:16.66666667%}.col-sm-3[_ngcontent-%COMP%]{width:25%}.col-sm-4[_ngcontent-%COMP%]{width:33.33333333%}.col-sm-5[_ngcontent-%COMP%]{width:41.66666667%}.col-sm-6[_ngcontent-%COMP%]{width:50%}.col-sm-7[_ngcontent-%COMP%]{width:58.33333333%}.col-sm-8[_ngcontent-%COMP%]{width:66.66666667%}.col-sm-9[_ngcontent-%COMP%]{width:75%}.col-sm-10[_ngcontent-%COMP%]{width:83.33333333%}.col-sm-11[_ngcontent-%COMP%]{width:91.66666667%}.col-sm-12[_ngcontent-%COMP%]{width:100%}}@media only screen and (min-width:1200px){.col-lg-1[_ngcontent-%COMP%]{width:8.33333333%}.col-lg-2[_ngcontent-%COMP%]{width:16.66666667%}.col-lg-3[_ngcontent-%COMP%]{width:25%}.col-lg-4[_ngcontent-%COMP%]{width:33.33333333%}.col-lg-5[_ngcontent-%COMP%]{width:41.66666667%}.col-lg-6[_ngcontent-%COMP%]{width:50%}.col-lg-7[_ngcontent-%COMP%]{width:58.33333333%}.col-lg-8[_ngcontent-%COMP%]{width:66.66666667%}.col-lg-9[_ngcontent-%COMP%]{width:75%}.col-lg-10[_ngcontent-%COMP%]{width:83.33333333%}.col-lg-11[_ngcontent-%COMP%]{width:91.66666667%}.col-lg-12[_ngcontent-%COMP%]{width:100%}}body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;line-height:1.4;font-size:14px;color:#333;margin:0;padding:0;width:100vw;min-height:100vh;background:#fff;overflow-x:hidden}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:inherit;font-weight:500;line-height:1.1}h1[_ngcontent-%COMP%]{font-size:2.5em}h2[_ngcontent-%COMP%]{font-size:30px}h3[_ngcontent-%COMP%]{font-size:24px}h4[_ngcontent-%COMP%]{font-size:18px}h5[_ngcontent-%COMP%]{font-size:14px}address[_ngcontent-%COMP%]{font-style:normal;line-height:1.4}a[_ngcontent-%COMP%]:hover{color:#23527c;text-decoration:underline;cursor:pointer}hr[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.input-group[_ngcontent-%COMP%]{display:table}.input-group-btn[_ngcontent-%COMP%]{display:table-cell;width:50px}.btn[_ngcontent-%COMP%]{border:1px solid transparent;display:inline-block;padding:6px 12px;vertical-align:middle;border-radius:0 4px 4px 0}.material-icons.md-18[_ngcontent-%COMP%]{font-size:18px}.material-icons.md-24[_ngcontent-%COMP%]{font-size:24px}.material-icons.md-36[_ngcontent-%COMP%]{font-size:36px}.material-icons.md-48[_ngcontent-%COMP%]{font-size:48px}.material-icons.md-dark[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.material-icons.md-dark.md-inactive[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}.material-icons.md-light[_ngcontent-%COMP%]{color:#fff}.material-icons.md-light.md-inactive[_ngcontent-%COMP%]{color:rgba(255,255,255,.3)}.mat-autocomplete-panel[_ngcontent-%COMP%]{top:1px!important;box-shadow:0 3px 14px 2px rgba(0,0,0,.07)!important;width:47vw}#speech-button[_ngcontent-%COMP%]{border-radius:0;height:38px;background-color:#fff;color:#06f;box-shadow:none;border:none;position:initial}#speech-button[_ngcontent-%COMP%]:focus{outline:0}.microphone[_ngcontent-%COMP%]{height:25px;width:25px}@-moz-document url-prefix(){.microphone{display:none}}[_nghost-%COMP%]{width:100%;min-height:100vh;position:relative}div.outer-wrapper[_ngcontent-%COMP%]{min-height:100vh;position:relative;display:flex;flex-direction:row;justify-content:space-around;align-items:center}div.outer-wrapper[_ngcontent-%COMP%]   service-box[_ngcontent-%COMP%]{position:absolute;top:20px;right:30px}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:584px;margin:15px;top:-9.5vh}@media (max-height:550px){div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]{top:0}}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;text-align:center;font-size:2.5em;margin:15px 0 0;font-family:Roboto,sans-serif}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .loklak[_ngcontent-%COMP%]{background:#f9f2f4;color:var(--accent-color,#d10042);font-family:Courier New}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:center}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-around;align-items:center}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]   div.search-input[_ngcontent-%COMP%]{width:100%;padding:0;margin:20px 0 10px;border-radius:2px;will-change:box-shadow;box-shadow:0 2px 2px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.08);transition:box-shadow .2s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:row;justify-content:space-around;align-items:center}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]   div.search-input.focused[_ngcontent-%COMP%], div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]   div.search-input[_ngcontent-%COMP%]:hover{box-shadow:0 3px 8px 0 rgba(0,0,0,.2),0 0 0 1px rgba(0,0,0,.08)}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]   div.search-input[_ngcontent-%COMP%]   input#search[_ngcontent-%COMP%]{flex:1;border:none;padding:10px 15px;font-size:16px;word-spacing:1.5pt;letter-spacing:.5pt;box-shadow:none;height:44px;background:#fff}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]   div.search-input[_ngcontent-%COMP%]   input#search[_ngcontent-%COMP%]:focus{outline:0}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.search-form[_ngcontent-%COMP%]   div.search-input[_ngcontent-%COMP%]   #search-suffix-icon[_ngcontent-%COMP%]{pointer-events:none;padding:10px 15px 10px 0}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.help-text[_ngcontent-%COMP%]{font-size:12px;line-height:1.4;width:100%;margin-bottom:20px}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.help-text[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{background-color:#eee;padding:1px 3px}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]{display:inline-block;font-size:small;height:12px}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   h4.heading[_ngcontent-%COMP%]{text-align:center}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   span.waiting-text[_ngcontent-%COMP%]{padding-left:30px}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]{height:24px}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]{max-width:584px;display:flex;align-items:center;font-size:small}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .trending[_ngcontent-%COMP%]{margin-right:10px;color:grey}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]   .bottom-list[_ngcontent-%COMP%], div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]   .top-list[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]   .bottom-list[_ngcontent-%COMP%]   .hashtag[_ngcontent-%COMP%], div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]   .top-list[_ngcontent-%COMP%]   .hashtag[_ngcontent-%COMP%]{display:flex;align-items:center}div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]   .bottom-list[_ngcontent-%COMP%]   .hashtag[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], div.outer-wrapper[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.top-hashtags-wrapper[_ngcontent-%COMP%]   div.top-hashtags[_ngcontent-%COMP%]   .hashtag-list[_ngcontent-%COMP%]   .top-list[_ngcontent-%COMP%]   .hashtag[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;font-family:Roboto,sans-serif;white-space:nowrap}@media (min-width:768px) and (min-height:500px){app-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:100vw}}.login[_ngcontent-%COMP%]{background:#06f;color:#fff;position:absolute;top:26px;right:30px;height:28px;width:52px;border-radius:3px;padding:5px 0 0 7px}.login[_ngcontent-%COMP%]:hover{text-decoration:none;color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.logout[_ngcontent-%COMP%]{background:#06f;color:#fff;position:absolute;top:26px;right:24px;height:28px;width:58px;border-radius:3px;padding:5px 0 0 7px}.logout[_ngcontent-%COMP%]:hover{text-decoration:none;color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}']],data:{}});function k(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"a",[["class","login"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](1,671744,null,0,a.m,[a.l,a.a,u.h],{routerLink:[0,"routerLink"]},null),(n()(),l["\u0275ted"](-1,null,["Login"]))],function(n,t){n(t,1,0,"/login")},function(n,t){n(t,0,0,l["\u0275nov"](t,1).target,l["\u0275nov"](t,1).href)})}function R(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"a",[["class","logout"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.logout()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Logout"]))],null,null)}function S(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"span",[],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](2,671744,null,0,a.m,[a.l,a.a,u.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),l["\u0275pod"](3,{query:0}),l["\u0275pad"](4,1),(n()(),l["\u0275ted"](5,null,["#",""])),(n()(),l["\u0275ted"](-1,null,["\xa0\xa0 "]))],function(n,t){n(t,2,0,n(t,3,0,"#"+t.context.$implicit.tag),n(t,4,0,"/search"))},function(n,t){n(t,1,0,l["\u0275nov"](t,2).target,l["\u0275nov"](t,2).href),n(t,5,0,t.context.$implicit.tag)})}function D(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,2,null,S)),l["\u0275did"](2,802816,null,0,u.j,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),l["\u0275pid"](131072,u.b,[l.ChangeDetectorRef])],function(n,t){var e=t.component;n(t,2,0,l["\u0275unv"](t,2,0,l["\u0275nov"](t,3).transform(e.apiResponseHashtags$)).slice(0,5))},null)}function T(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,6,"span",[],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](2,671744,null,0,a.m,[a.l,a.a,u.h],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),l["\u0275pod"](3,{query:0}),l["\u0275pad"](4,1),(n()(),l["\u0275ted"](5,null,["#",""])),(n()(),l["\u0275ted"](-1,null,["\xa0\xa0 "]))],function(n,t){n(t,2,0,n(t,3,0,"#"+t.context.$implicit.tag),n(t,4,0,"/search"))},function(n,t){n(t,1,0,l["\u0275nov"](t,2).target,l["\u0275nov"](t,2).href),n(t,5,0,t.context.$implicit.tag)})}function H(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,2,null,T)),l["\u0275did"](2,802816,null,0,u.j,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),l["\u0275pid"](131072,u.b,[l.ChangeDetectorRef])],function(n,t){var e=t.component;n(t,2,0,l["\u0275unv"](t,2,0,l["\u0275nov"](t,3).transform(e.apiResponseHashtags$)).slice(6,10))},null)}function L(n){return l["\u0275vid"](2,[(n()(),l["\u0275eld"](0,0,null,null,57,"div",[["class","outer-wrapper"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,2,null,k)),l["\u0275did"](2,16384,null,0,u.k,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,u.b,[l.ChangeDetectorRef]),(n()(),l["\u0275and"](16777216,null,null,2,null,R)),l["\u0275did"](5,16384,null,0,u.k,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,u.b,[l.ChangeDetectorRef]),(n()(),l["\u0275eld"](7,0,null,null,1,"service-box",[],null,[["document","click"]],function(n,t,e){var o=!0;return"document:click"===t&&(o=!1!==l["\u0275nov"](n,8).boxClose(e)&&o),o},c.b,c.a)),l["\u0275did"](8,114688,null,0,s.a,[l.ElementRef],null,null),(n()(),l["\u0275eld"](9,0,null,null,48,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),l["\u0275eld"](10,0,null,null,1,"app-lazy-img",[["alt","loklak Search - Distributed Open Source Search for Twitter and Social Media with Peer to Peer Technology"],["height","145"],["title","loklak Search - Distributed Open Source Search for Twitter and Social Media with Peer to Peer Technology"],["width","125"]],null,null,null,p.b,p.a)),l["\u0275did"](11,245760,null,0,d.a,[l.ElementRef,l.ChangeDetectorRef,g.a],{src:[0,"src"],width:[1,"width"],height:[2,"height"],alt:[3,"alt"],title:[4,"title"]},null),(n()(),l["\u0275eld"](12,0,null,null,3,"h1",[],null,null,null,null,null)),(n()(),l["\u0275eld"](13,0,null,null,1,"span",[["class","loklak"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["loklak"])),(n()(),l["\u0275ted"](-1,null,["\xa0Search!"])),(n()(),l["\u0275eld"](16,0,null,null,10,"div",[["class","search-form"]],null,null,null,null,null)),(n()(),l["\u0275eld"](17,0,null,null,9,"div",[["class","search-input"]],[[2,"focused",null]],null,null,null,null)),(n()(),l["\u0275eld"](18,0,null,null,5,"input",[["id","search"],["name","search"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keypress"],[null,"focus"],[null,"focusout"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0,i=n.component;return"input"===t&&(o=!1!==l["\u0275nov"](n,19)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l["\u0275nov"](n,19).onTouched()&&o),"compositionstart"===t&&(o=!1!==l["\u0275nov"](n,19)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l["\u0275nov"](n,19)._compositionEnd(e.target.value)&&o),"keypress"===t&&(o=!1!==i.onEnter(e)&&o),"focus"===t&&(o=0!=(i.inputFocused=!0)&&o),"focusout"===t&&(o=0!=(i.inputFocused=!1)&&o),o},null,null)),l["\u0275did"](19,16384,null,0,h.d,[l.Renderer2,l.ElementRef,[2,h.a]],null,null),l["\u0275prd"](1024,null,h.m,function(n){return[n]},[h.d]),l["\u0275did"](21,540672,null,0,h.g,[[8,null],[8,null],[6,h.m],[2,h.A]],{form:[0,"form"]},null),l["\u0275prd"](2048,null,h.n,null,[h.g]),l["\u0275did"](23,16384,null,0,h.o,[[4,h.n]],null,null),(n()(),l["\u0275eld"](24,0,null,null,2,"button",[["class","btn btn-default"],["id","speech-button"],["title","Search by voice"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275eld"](25,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),l["\u0275eld"](26,0,null,null,0,"img",[["class","microphone"],["src","../../assets/images/microphone.png"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.speechRecognition()&&l),l},null,null)),(n()(),l["\u0275eld"](27,0,null,null,19,"div",[["class","help-text"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" Use "])),(n()(),l["\u0275eld"](29,0,null,null,1,"span",[["class","highlight"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["#hashtag"])),(n()(),l["\u0275ted"](-1,null,[";\xa0 "])),(n()(),l["\u0275eld"](32,0,null,null,1,"span",[["class","highlight"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,['"search text"'])),(n()(),l["\u0275ted"](-1,null,[" for exact matches;\xa0 "])),(n()(),l["\u0275eld"](35,0,null,null,1,"span",[["class","highlight"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["near:location"])),(n()(),l["\u0275ted"](-1,null,[" finds messages near a location;\xa0 "])),(n()(),l["\u0275eld"](38,0,null,null,1,"span",[["class","highlight"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["@user"])),(n()(),l["\u0275ted"](-1,null,[" finds user mentions;\xa0 "])),(n()(),l["\u0275eld"](41,0,null,null,1,"span",[["class","highlight"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["from:user"])),(n()(),l["\u0275ted"](-1,null,[" shows messages of a user;\xa0 "])),(n()(),l["\u0275eld"](44,0,null,null,1,"span",[["class","highlight"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["followers:user"])),(n()(),l["\u0275ted"](-1,null,[" find followers of a user. "])),(n()(),l["\u0275eld"](47,0,null,null,10,"div",[["class","top-hashtags"]],null,null,null,null,null)),(n()(),l["\u0275eld"](48,0,null,null,4,"div",[["class","top-list"]],null,null,null,null,null)),(n()(),l["\u0275eld"](49,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,2,null,D)),l["\u0275did"](51,16384,null,0,u.k,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,u.b,[l.ChangeDetectorRef]),(n()(),l["\u0275eld"](53,0,null,null,4,"div",[["class","bottom-list"]],null,null,null,null,null)),(n()(),l["\u0275eld"](54,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,2,null,H)),l["\u0275did"](56,16384,null,0,u.k,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["\u0275pid"](131072,u.b,[l.ChangeDetectorRef]),(n()(),l["\u0275eld"](58,0,null,null,1,"app-footer",[],null,null,null,f.b,f.a)),l["\u0275did"](59,114688,null,0,m.a,[],null,null)],function(n,t){var e,o,i=t.component;n(t,2,0,!(null!=(e=l["\u0275unv"](t,2,0,l["\u0275nov"](t,3).transform(i.user)))&&e.uid)),n(t,5,0,null==(o=l["\u0275unv"](t,5,0,l["\u0275nov"](t,6).transform(i.user)))?null:o.uid),n(t,8,0),n(t,11,0,l["\u0275inlineInterpolate"](1,"",i.headerImageUrl,""),"125","145","loklak Search - Distributed Open Source Search for Twitter and Social Media with Peer to Peer Technology","loklak Search - Distributed Open Source Search for Twitter and Social Media with Peer to Peer Technology"),n(t,21,0,i._queryControl),n(t,51,0,0!==l["\u0275unv"](t,51,0,l["\u0275nov"](t,52).transform(i.apiResponseHashtags$)).length),n(t,56,0,0!==l["\u0275unv"](t,56,0,l["\u0275nov"](t,57).transform(i.apiResponseHashtags$)).length),n(t,59,0)},function(n,t){n(t,17,0,t.component.inputFocused),n(t,18,0,l["\u0275nov"](t,23).ngClassUntouched,l["\u0275nov"](t,23).ngClassTouched,l["\u0275nov"](t,23).ngClassPristine,l["\u0275nov"](t,23).ngClassDirty,l["\u0275nov"](t,23).ngClassValid,l["\u0275nov"](t,23).ngClassInvalid,l["\u0275nov"](t,23).ngClassPending)})}var I=l["\u0275ccf"]("app-home",b,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,L,y)),l["\u0275did"](1,2342912,null,0,b,[a.l,l.ElementRef,l.ChangeDetectorRef,x.l,w.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),z=e("M2Lx"),E=e("eDkP"),q=e("Fzqc"),F=e("v9Dh"),A=e("dWZg"),j=e("lLAP"),K=e("4c35"),V=e("qAlS"),$=e("Wf4p"),G=function(){},U=e("PpLr"),B=e("SMsm"),N=e("UodH"),Z=e("01xD"),W=e("EUdO");e.d(t,"HomeModuleNgFactory",function(){return Y});var Y=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.a,I]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,u.m,u.l,[l.LOCALE_ID,[2,u.w]]),l["\u0275mpd"](4608,h.e,h.e,[]),l["\u0275mpd"](4608,h.z,h.z,[]),l["\u0275mpd"](4608,z.c,z.c,[]),l["\u0275mpd"](4608,E.c,E.c,[E.i,E.e,l.ComponentFactoryResolver,E.h,E.f,l.Injector,l.NgZone,u.d,q.b]),l["\u0275mpd"](5120,E.j,E.k,[E.c]),l["\u0275mpd"](5120,F.b,F.c,[E.c]),l["\u0275mpd"](4608,g.a,g.a,[]),l["\u0275mpd"](1073742336,u.c,u.c,[]),l["\u0275mpd"](1073742336,h.x,h.x,[]),l["\u0275mpd"](1073742336,h.t,h.t,[]),l["\u0275mpd"](1073742336,A.b,A.b,[]),l["\u0275mpd"](1073742336,z.d,z.d,[]),l["\u0275mpd"](1073742336,j.a,j.a,[]),l["\u0275mpd"](1073742336,q.a,q.a,[]),l["\u0275mpd"](1073742336,K.g,K.g,[]),l["\u0275mpd"](1073742336,V.a,V.a,[]),l["\u0275mpd"](1073742336,E.g,E.g,[]),l["\u0275mpd"](1073742336,$.k,$.k,[[2,$.d]]),l["\u0275mpd"](1073742336,F.e,F.e,[]),l["\u0275mpd"](1073742336,a.n,a.n,[[2,a.t],[2,a.l]]),l["\u0275mpd"](1073742336,G,G,[]),l["\u0275mpd"](1073742336,U.a,U.a,[]),l["\u0275mpd"](1073742336,B.b,B.b,[]),l["\u0275mpd"](1073742336,$.v,$.v,[]),l["\u0275mpd"](1073742336,N.c,N.c,[]),l["\u0275mpd"](1073742336,Z.a,Z.a,[]),l["\u0275mpd"](1073742336,W.a,W.a,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:b}]]},[])])})},UodH:function(n,t,e){"use strict";e.d(t,"c",function(){return s}),e.d(t,"b",function(){return u}),e.d(t,"a",function(){return c});var l=e("mrSG"),o=e("Wf4p"),i="accent",r="primary",a=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],u=function(n){function t(t,e,l,o){var u=n.call(this,t)||this;u._platform=e,u._focusMonitor=l,u._animationMode=o,u.isRoundButton=u._hasHostAttributes("mat-fab","mat-mini-fab"),u.isIconButton=u._hasHostAttributes("mat-icon-button");for(var c=0,s=a;c<s.length;c++){var p=s[c];u._hasHostAttributes(p)&&t.nativeElement.classList.add(p)}return u._focusMonitor.monitor(u._elementRef.nativeElement,!0),u.isRoundButton?u.color=i:u._hasHostAttributes("mat-flat-button")&&(u.color=r),u}return Object(l.__extends)(t,n),t.prototype.ngOnDestroy=function(){this._focusMonitor.stopMonitoring(this._elementRef.nativeElement)},t.prototype.focus=function(){this._getHostElement().focus()},t.prototype._getHostElement=function(){return this._elementRef.nativeElement},t.prototype._isRippleDisabled=function(){return this.disableRipple||this.disabled},t.prototype._hasHostAttributes=function(){for(var n=this,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.some(function(t){return n._getHostElement().hasAttribute(t)})},t}(Object(o.B)(Object(o.D)(Object(o.C)(function(n){this._elementRef=n})))),c=function(n){function t(t,e,l,o){return n.call(this,l,t,e,o)||this}return Object(l.__extends)(t,n),t.prototype._haltDisabledEvents=function(n){this.disabled&&(n.preventDefault(),n.stopImmediatePropagation())},t}(u),s=function(){}}}]);