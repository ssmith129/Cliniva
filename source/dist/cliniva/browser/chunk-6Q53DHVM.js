import{d as J,f as Q,h as $}from"./chunk-JHBWPSHB.js";import"./chunk-MLZ5B6KM.js";import{a as q}from"./chunk-7SAII33I.js";import{b as K,c as W,d as Z}from"./chunk-IAVLFPQ4.js";import{a as tt,b as et}from"./chunk-4F6FTX3L.js";import"./chunk-XCOHFXP4.js";import"./chunk-LLWC23UT.js";import"./chunk-J5PRHP4G.js";import"./chunk-HONG4UFE.js";import"./chunk-62LYHI3L.js";import"./chunk-PI7M2G4M.js";import{a as U,h as X}from"./chunk-BHCK2BZH.js";import{f as V,g as Y}from"./chunk-X64MS4BM.js";import"./chunk-6QMNWTJG.js";import"./chunk-UHKU6526.js";import"./chunk-AIRFNH5G.js";import"./chunk-EWCJF4FF.js";import"./chunk-6QEYOUPN.js";import"./chunk-KAXLGBA2.js";import{b as z,e as G}from"./chunk-7HCKCZ4J.js";import"./chunk-ZIZ2GQ6D.js";import"./chunk-ISK3KPZV.js";import{k as P}from"./chunk-YWH7QIGY.js";import{b as N,c as h,e as v}from"./chunk-S6ED5L2J.js";import"./chunk-YCQBAZHN.js";import"./chunk-OGQFDRZI.js";import"./chunk-6SE343UJ.js";import"./chunk-6ID5C344.js";import"./chunk-TLJOYSHD.js";import{c as H}from"./chunk-CD7X2UPP.js";import"./chunk-C7BQC4UN.js";import{Ab as R,B,D as f,I as _,Lc as j,Nb as A,Vb as L,Wb as a,Xb as r,Yb as I,ba as C,ca as M,e as y,ea as g,eb as D,ga as l,hc as c,qa as w,ua as E,ub as u,vb as T,vc as F,xc as m,zb as O}from"./chunk-2QDK67TG.js";import{a as b,b as x}from"./chunk-IM5V7DCU.js";function mt(o,p){}var nt="_mat-bottom-sheet-enter",ot="_mat-bottom-sheet-exit",lt=(()=>{class o extends K{_breakpointSubscription;_animationsDisabled=v();_animationState="void";_animationStateChanged=new E;_destroyed=!1;constructor(){super();let e=l(N);this._breakpointSubscription=e.observe([h.Medium,h.Large,h.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle("mat-bottom-sheet-container-medium",e.isMatched(h.Medium)),n.toggle("mat-bottom-sheet-container-large",e.isMatched(h.Large)),n.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(h.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(nt))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(ot))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e),setTimeout(()=>this._handleAnimationEvent(!1,e))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,n){let t=n===nt;(t||n===ot)&&this._animationStateChanged.emit({toState:t?"visible":"hidden",phase:e?"start":"done"})}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=u({type:o,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(n,t){n&1&&c("animationstart",function(s){return t._handleAnimationEvent(!0,s.animationName)})("animationend",function(s){return t._handleAnimationEvent(!1,s.animationName)})("animationcancel",function(s){return t._handleAnimationEvent(!1,s.animationName)}),n&2&&(A("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-label",t._config.ariaLabel),F("mat-bottom-sheet-container-animations-enabled",!t._animationsDisabled)("mat-bottom-sheet-container-enter",t._animationState==="visible")("mat-bottom-sheet-container-exit",t._animationState==="hidden"))},features:[O],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,t){n&1&&R(0,mt,0,0,"ng-template",0)},dependencies:[V],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2})}return o})(),ct=new g("MatBottomSheetData"),S=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;height="";minHeight;maxHeight},d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new y;_result;_closeFallbackTimeout;constructor(p,e,n){this._ref=p,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(f(t=>t.phase==="done"&&t.toState==="visible"),_(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(f(t=>t.phase==="done"&&t.toState==="hidden"),_(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),p.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),B(this.backdropClick(),this.keydownEvents().pipe(f(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!=="keydown"||!P(t))&&(t.preventDefault(),this.dismiss())})}dismiss(p){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(f(e=>e.phase==="start"),_(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=p,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},ht=new g("mat-bottom-sheet-default-options"),k=(()=>{class o{_injector=l(w);_parentBottomSheet=l(o,{optional:!0,skipSelf:!0});_animationsDisabled=v();_defaultOptions=l(ht,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=l(W);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}constructor(){}open(e,n){let t=b(b({},this._defaultOptions||new S),n),i;return this._dialog.open(e,x(b({},t),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:lt,scrollStrategy:t.scrollStrategy||U(this._injector),positionStrategy:X(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:i}),providers:(s,ft,at)=>(i=new d(s,t,at),[{provide:d,useValue:i},{provide:ct,useValue:t.data}])})),i.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===i&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>i.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):i.containerInstance.enter(),this._openedBottomSheetRef=i,i}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static \u0275fac=function(n){return new(n||o)};static \u0275prov=C({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),it=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=T({type:o});static \u0275inj=M({providers:[k],imports:[Z,Y,H]})}return o})();var dt=()=>["UI"],Vt=(()=>{class o{constructor(){this._bottomSheet=l(k),this.breadscrums=[{title:"Bottom Sheet",items:["UI"],active:"Bottom Sheet"}]}openBottomSheet(){this._bottomSheet.open(pt)}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=u({type:o,selectors:[["app-bottom-sheet"]],decls:15,vars:4,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-12"],[1,"card"],[1,"header"],[1,"body"],["mat-raised-button","",3,"click"]],template:function(n,t){n&1&&(a(0,"section",0)(1,"div",1)(2,"div",2),I(3,"app-breadcrumb",3),r(),a(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),m(9,"Bottom Sheet Overview"),r()(),a(10,"div",8)(11,"p"),m(12,'You have received a file called "cat-picture.jpeg".'),r(),a(13,"button",9),c("click",function(){return t.openBottomSheet()}),m(14,"Open file"),r()()()()()()()),n&2&&(D(3),L("title","Bottom Sheet")("items",j(3,dt))("active_item","Bottom Sheet"))},dependencies:[q,G,z,it],encapsulation:2,changeDetection:0})}}return o})(),pt=(()=>{class o{constructor(){this._bottomSheetRef=l(d)}openLink(e){this._bottomSheetRef.dismiss(),e.preventDefault()}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=u({type:o,selectors:[["app-bottom-sheet-overview-example-sheet"]],decls:21,vars:0,consts:[["href","https://keep.google.com/","mat-list-item","",3,"click"],["mat-line",""],["href","https://docs.google.com/","mat-list-item","",3,"click"],["href","https://plus.google.com/","mat-list-item","",3,"click"],["href","https://hangouts.google.com/","mat-list-item","",3,"click"]],template:function(n,t){n&1&&(a(0,"mat-nav-list")(1,"a",0),c("click",function(s){return t.openLink(s)}),a(2,"span",1),m(3,"Google Keep"),r(),a(4,"span",1),m(5,"Add to a note"),r()(),a(6,"a",2),c("click",function(s){return t.openLink(s)}),a(7,"span",1),m(8,"Google Docs"),r(),a(9,"span",1),m(10,"Embed in a document"),r()(),a(11,"a",3),c("click",function(s){return t.openLink(s)}),a(12,"span",1),m(13,"Google Plus"),r(),a(14,"span",1),m(15,"Share with your friends"),r()(),a(16,"a",4),c("click",function(s){return t.openLink(s)}),a(17,"span",1),m(18,"Google Hangouts"),r(),a(19,"span",1),m(20,"Show to your coworkers"),r()()())},dependencies:[$,Q,J,et,tt],encapsulation:2})}}return o})();export{Vt as BottomSheetComponent,pt as BottomSheetOverviewExampleSheetComponent};
