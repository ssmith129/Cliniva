import{a as te}from"./chunk-PI7M2G4M.js";import{b as Ue,f as Ke,g as We}from"./chunk-X64MS4BM.js";import{f as Oe}from"./chunk-6QMNWTJG.js";import{a as Ve,f as $e,g as je}from"./chunk-ISK3KPZV.js";import{b as Fe,k as Ne,m as He}from"./chunk-YWH7QIGY.js";import{e as Be}from"./chunk-S6ED5L2J.js";import{d as Re,i as Qe}from"./chunk-YCQBAZHN.js";import{a as Le}from"./chunk-OGQFDRZI.js";import{a as qe,b as Ge}from"./chunk-FJI3JB5W.js";import{a as Ae}from"./chunk-6SE343UJ.js";import{a as Pe}from"./chunk-6ID5C344.js";import{a as ze,c as ee}from"./chunk-CD7X2UPP.js";import{o as pe}from"./chunk-C7BQC4UN.js";import{Ab as G,Bb as Me,Ca as xe,Da as F,Fa as P,Ga as A,Jc as Ee,Kc as se,Mc as V,Nb as T,Oc as we,Pb as _,Qb as g,Sb as U,Tb as K,U as S,Ub as W,V as ge,Vb as m,W as y,Wb as d,Wc as le,Xb as c,Yb as oe,a as ue,ad as J,ba as ve,ca as j,cc as b,dc as De,e as $,ea as be,eb as o,ec as z,fd as ke,ga as l,hc as N,jc as p,kc as H,lb as w,lc as Q,ld as X,ma as ae,mc as O,n as fe,na as re,nb as Ce,nc as Z,oc as h,pc as u,pd as R,qb as Se,qd as Te,r as _e,tc as B,ua as E,ub as k,uc as Ie,va as ye,vb as q,vc as D,wb as f,wc as Y,xc as x,ya as v,yc as C,zb as M}from"./chunk-2QDK67TG.js";var it=["*"];function at(t,r){t&1&&Q(0)}var de=(()=>{class t{_elementRef=l(P);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),ce=(()=>{class t{template=l(w);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var I={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},rt=new be("STEPPER_GLOBAL_OPTIONS"),ne=(()=>{class t{_stepperOptions;_stepper=l(L);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=v(!1);interactedStream=new E;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=v(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=v(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=v(null);index=v(-1);isSelected=J(()=>this._stepper.selectedIndex===this.index());indicatorType=J(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??I.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?I.ERROR:this._displayDefaultIndicatorType?!n||e?I.NUMBER:a?I.EDIT:I.DONE:n&&!e?I.DONE:n&&e?i:a&&e?I.EDIT:i});isNavigable=J(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=v(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=l(rt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["cdk-step"]],contentQueries:function(n,i,a){if(n&1&&O(a,ce,5)(a,Oe,5),n&2){let s;h(s=u())&&(i.stepLabel=s.first),h(s=u())&&(i._childForms=s)}},viewQuery:function(n,i){if(n&1&&Z(w,7),n&2){let a;h(a=u())&&(i.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",R],optional:[2,"optional","optional",R],completed:[2,"completed","completed",R],hasError:[2,"hasError","hasError",R]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[xe],ngContentSelectors:it,decls:1,vars:0,template:function(n,i){n&1&&(H(),Me(0,at,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return t})(),L=(()=>{class t{_dir=l(ze,{optional:!0});_changeDetectorRef=l(X);_elementRef=l(P);_destroyed=new $;_keyManager;_steps;steps=new A;_stepHeader;_sortedHeaders=new A;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=v(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=v(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new E;selectedIndexChange=new E;_groupId=l(Qe).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(S(this._steps),y(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(S(this._stepHeader),y(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new He(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:fe()).pipe(S(this._layoutDirection()),y(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=Ne(e),i=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?i.invalid||i.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=Re();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,i,a){if(n&1&&O(a,ne,5)(a,de,5),n&2){let s;h(s=u())&&(i._steps=s),h(s=u())&&(i._stepHeader=s)}},inputs:{linear:[2,"linear","linear",R],selectedIndex:[2,"selectedIndex","selectedIndex",Te],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})(),Ze=(()=>{class t{_stepper=l(L);type="submit";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(n,i){n&1&&N("click",function(){return i._stepper.next()}),n&2&&z("type",i.type)},inputs:{type:"type"}})}return t})(),Ye=(()=>{class t{_stepper=l(L);type="button";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(n,i){n&1&&N("click",function(){return i._stepper.previous()}),n&2&&z("type",i.type)},inputs:{type:"type"}})}return t})(),Je=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=j({imports:[ee]})}return t})();var ot=(t,r,e)=>({index:t,active:r,optional:e});function st(t,r){if(t&1&&b(0,2),t&2){let e=p();m("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",we(2,ot,e.index,e.active,e.optional))}}function lt(t,r){if(t&1&&(d(0,"span",7),x(1),c()),t&2){let e=p(2);o(),C(e._getDefaultTextForState(e.state))}}function pt(t,r){if(t&1&&(d(0,"span",8),x(1),c()),t&2){let e=p(3);o(),C(e._intl.completedLabel)}}function dt(t,r){if(t&1&&(d(0,"span",8),x(1),c()),t&2){let e=p(3);o(),C(e._intl.editableLabel)}}function ct(t,r){if(t&1&&(_(0,pt,2,1,"span",8)(1,dt,2,1,"span",8),d(2,"mat-icon",7),x(3),c()),t&2){let e=p(2);g(e.state==="done"?0:e.state==="edit"?1:-1),o(3),C(e._getDefaultTextForState(e.state))}}function mt(t,r){if(t&1&&_(0,lt,2,1,"span",7)(1,ct,4,2),t&2){let e,n=p();g((e=n.state)==="number"?0:1)}}function ht(t,r){t&1&&(d(0,"div",4),b(1,9),c()),t&2&&(o(),m("ngTemplateOutlet",r.template))}function ut(t,r){if(t&1&&(d(0,"div",4),x(1),c()),t&2){let e=p();o(),C(e.label)}}function ft(t,r){if(t&1&&(d(0,"div",5),x(1),c()),t&2){let e=p();o(),C(e._intl.optionalLabel)}}function _t(t,r){if(t&1&&(d(0,"div",6),x(1),c()),t&2){let e=p();o(),C(e.errorMessage)}}var Xe=["*"];function gt(t,r){}function vt(t,r){if(t&1&&(Q(0),G(1,gt,0,0,"ng-template",0)),t&2){let e=p();o(),m("cdkPortalOutlet",e._portal)}}var bt=["animatedContainer"],et=t=>({steps:t}),tt=t=>({step:t});function yt(t,r){t&1&&Q(0)}function xt(t,r){if(t&1&&(d(0,"div",5),b(1,9)(2,6),c()),t&2){let e=p(2),n=B(6);o(),m("ngTemplateOutlet",e.headerPrefix()),o(),m("ngTemplateOutlet",n)("ngTemplateOutletContext",V(3,et,e.steps))}}function Ct(t,r){if(t&1&&b(0,6),t&2){let e=p(2),n=B(6);m("ngTemplateOutlet",n)("ngTemplateOutletContext",V(2,et,e.steps))}}function St(t,r){if(t&1&&(d(0,"div",10,2),b(2,9),c()),t&2){let e=r.$implicit,n=r.$index,i=p(2);Y("mat-horizontal-stepper-content-"+i._getAnimationDirection(n)),m("id",i._getStepContentId(n)),T("aria-labelledby",i._getStepLabelId(n))("inert",i.selectedIndex===n?null:""),o(2),m("ngTemplateOutlet",e.content)}}function Mt(t,r){if(t&1&&(d(0,"div",3),_(1,xt,3,5,"div",5)(2,Ct,1,4,"ng-container",6),d(3,"div",7),K(4,St,3,6,"div",8,U),c()()),t&2){let e=p();o(),g(e.headerPrefix()?1:2),o(3),W(e.steps)}}function Dt(t,r){if(t&1&&b(0,9),t&2){let e=p(2);m("ngTemplateOutlet",e.headerPrefix())}}function It(t,r){if(t&1&&(d(0,"div",11),b(1,6),d(2,"div",12,2)(4,"div",13)(5,"div",14),b(6,9),c()()()()),t&2){let e=r.$implicit,n=r.$index,i=r.$index,a=r.$count,s=p(2),ie=B(4);o(),m("ngTemplateOutlet",ie)("ngTemplateOutletContext",V(11,tt,e)),o(),D("mat-stepper-vertical-line",i!==a-1)("mat-vertical-content-container-active",s.selectedIndex===n),T("inert",s.selectedIndex===n?null:"")("aria-label",s.ariaLabel),o(2),m("id",s._getStepContentId(n)),T("aria-labelledby",s._getStepLabelId(n)),o(2),m("ngTemplateOutlet",e.content)}}function Et(t,r){if(t&1&&(d(0,"div",4),_(1,Dt,1,1,"ng-container",9),K(2,It,7,13,"div",11,U),c()),t&2){let e=p();o(),g(e.headerPrefix()?1:-1),o(),W(e.steps)}}function wt(t,r){if(t&1){let e=De();d(0,"mat-step-header",15),N("click",function(){let i=ae(e).step;return re(i.select())})("keydown",function(i){ae(e);let a=p();return re(a._onKeydown(i))}),c()}if(t&2){let e=r.step,n=p();D("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),m("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),T("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function kt(t,r){t&1&&oe(0,"div",17)}function Tt(t,r){if(t&1&&(b(0,6),_(1,kt,1,0,"div",17)),t&2){let e=r.$implicit,n=r.$index,i=r.$count;p(2);let a=B(4);m("ngTemplateOutlet",a)("ngTemplateOutletContext",V(3,tt,e)),o(),g(n!==i-1?1:-1)}}function zt(t,r){if(t&1&&(d(0,"div",16),K(1,Tt,2,5,null,null,U),c()),t&2){let e=r.steps,n=p();T("aria-label",n.ariaLabel),o(),W(e)}}var me=(()=>{class t extends ce{static \u0275fac=(()=>{let e;return function(i){return(e||(e=F(t)))(i||t)}})();static \u0275dir=f({type:t,selectors:[["","matStepLabel",""]],features:[M]})}return t})(),Ot=(()=>{class t{changes=new $;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=ve({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),he=(()=>{class t extends de{_intl=l(Ot);_focusMonitor=l(Fe);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=l(Pe);e.load(Ve),e.load(Ae);let n=l(X);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof me?null:this.label}_templateLabel(){return this.label instanceof me?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,i){n&2&&(Y("mat-"+(i.color||"primary")),D("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[M],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(oe(0,"div",0),d(1,"div")(2,"div",1),_(3,st,1,6,"ng-container",2)(4,mt,2,1),c()(),d(5,"div",3),_(6,ht,2,1,"div",4)(7,ut,2,1,"div",4),_(8,ft,2,1,"div",5),_(9,_t,2,1,"div",6),c()),n&2){let a;m("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),o(),Y(Ee("mat-step-icon-state-",i.state," mat-step-icon")),D("mat-step-icon-selected",i.selected),o(2),g(i.iconOverrides&&i.iconOverrides[i.state]?3:4),o(2),D("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),o(),g((a=i._templateLabel())?6:i._stringLabel()?7:-1,a),o(2),g(i._hasOptionalLabel()?8:-1),o(),g(i._hasErrorLabel()?9:-1)}},dependencies:[$e,pe,qe],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return t})(),Rt=(()=>{class t{templateRef=l(w);name;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),Lt=(()=>{class t{_template=l(w);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=f({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),Ft=(()=>{class t extends ne{_errorStateMatcher=l(te,{skipSelf:!0});_viewContainerRef=l(Se);_isSelected=ue.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(ge(()=>this._stepper.selectionChange.pipe(_e(e=>e.selectedStep===this),S(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Ue(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),a=!!(e&&e.invalid&&this.interacted);return i||a}static \u0275fac=(()=>{let e;return function(i){return(e||(e=F(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-step"]],contentQueries:function(n,i,a){if(n&1&&O(a,me,5)(a,Lt,5),n&2){let s;h(s=u())&&(i.stepLabel=s.first),h(s=u())&&(i._lazyContent=s.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[se([{provide:te,useExisting:t},{provide:ne,useExisting:t}]),M],ngContentSelectors:Xe,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(H(),G(0,vt,2,1,"ng-template"))},dependencies:[Ke],encapsulation:2,changeDetection:0})}return t})(),Pt=(()=>{class t extends L{_ngZone=l(ye);_renderer=l(Ce);_animationsDisabled=Be();_cleanupTransition;_isAnimating=v(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new A;_icons;animationDone=new E;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=ke(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!l(Le).isBrowser;constructor(){super();let n=l(P).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(y(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(y(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(S(null),y(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),a=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(i||a)&&this._animatedContainers.find(ie=>ie.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,i,a){if(n&1&&O(a,Ft,5)(a,Rt,5),n&2){let s;h(s=u())&&(i._steps=s),h(s=u())&&(i._icons=s)}},viewQuery:function(n,i){if(n&1&&Z(he,5)(bt,5),n&2){let a;h(a=u())&&(i._stepHeader=a),h(a=u())&&(i._animatedContainers=a)}},hostVars:14,hostBindings:function(n,i){n&2&&(Ie("--mat-stepper-animation-duration",i._getAnimationDuration()),D("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[se([{provide:L,useExisting:t}]),M],ngContentSelectors:Xe,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,i){if(n&1&&(H(),_(0,yt,1,0),_(1,Mt,6,1,"div",3)(2,Et,4,1,"div",4),G(3,wt,1,27,"ng-template",null,0,le)(5,zt,3,1,"ng-template",null,1,le)),n&2){let a;g(i._isServer?0:-1),o(),g((a=i.orientation)==="horizontal"?1:a==="vertical"?2:-1)}},dependencies:[pe,he],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ln=(()=>{class t extends Ze{static \u0275fac=(()=>{let e;return function(i){return(e||(e=F(t)))(i||t)}})();static \u0275dir=f({type:t,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(n,i){n&2&&z("type",i.type)},features:[M]})}return t})(),Fn=(()=>{class t extends Ye{static \u0275fac=(()=>{let e;return function(i){return(e||(e=F(t)))(i||t)}})();static \u0275dir=f({type:t,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(n,i){n&2&&z("type",i.type)},features:[M]})}return t})(),Pn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=j({providers:[te],imports:[We,Je,Ge,je,Pt,he,ee]})}return t})();export{me as a,Ft as b,Pt as c,Ln as d,Fn as e,Pn as f};
