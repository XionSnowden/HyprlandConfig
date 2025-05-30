import{a as P,b as k}from"./chunk-3YSPJCIY.js";import{c as E}from"./chunk-CRHRJPRJ.js";import{b as x,c as _,h as w}from"./chunk-BVG7RORO.js";function C(){let v=0;if(CSS.supports("padding-inline-start: constant(safe-area-inset-left)")||CSS.supports("padding-inline-start: env(safe-area-inset-left)")){let e=document.createElement("div");e.style.paddingLeft="constant(safe-area-inset-left)",e.style.paddingLeft="env(safe-area-inset-left)",document.body.appendChild(e);let t=parseInt(window.getComputedStyle(e).paddingLeft);document.body.removeChild(e),t>0&&(v=t)}return v}var $=x`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-xs) var(--vst-space-s);
  }

  :host {
    position: fixed;
    z-index: var(--vst-z-popover);
    --popover-background-color: var(--vst-color-bg);
  }

  .popover {
    position: fixed;
    width: max-content;
    width: intrinsic;
    /*  safari uses non-standard name :(*/
    height: auto;
    max-block-size: 75vh;
    box-shadow: var(--vst-shadow-s);
    border: 1px solid var(--vst-color-bg-secondary);
    z-index: var(--vst-z-popover);
    border-radius: var(--vst-radius);
    display: flex;
    top: var(--popover-top);
    right: var(--popover-right);
    bottom: var(--popover-bottom);
    left: var(--popover-left);
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: var(--popover-background-color);
    border-radius: var(--vst-radius);
    box-shadow: var(--vst-shadow-m);
    z-index: var(--vst-z-popover);
    box-shadow: var(--vst-shadow-s);
  }
`;var d=[],z=class extends w{static get properties(){return{for:{type:String},placement:{type:String,reflect:!0},open:{type:Boolean,reflect:!0}}}static get styles(){return[E,$]}static hideAll(){d.forEach(e=>{queueMicrotask(()=>{e.hide()})})}constructor(){super();this.for=null,this.placement="bottom",this.open=!1,this.clickedInPopover=!1}updated(e){e.forEach(async(t,h)=>{(h==="open"||h==="placement")&&this.open&&this._positionPopover(),h==="open"&&this.open&&(this._bindEvents(),this.isVisible=!0)})}firstUpdated(){this._resizeObserver=new ResizeObserver(()=>{this._positionPopover()})}handleSlotChange(e){this.headerEl=this.querySelector('[slot="header"]'),[this.contentEl]=e.target.assignedElements()}hide(){if(!this.isVisible)return;let e=d.findIndex(t=>t===this);d.splice(e,1),this.open=!1,this._unbindEvents(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("closed")),this.isVisible=!1})}show(){this.isVisible||(this.open=!0,this._bindEvents(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("opened")),this.isVisible=!0,d.unshift(this)}))}_bindEvents(){this.contentEl&&this._resizeObserver&&this._resizeObserver.observe(this.contentEl),this.__shouldClose=this._shouldClose.bind(this),this.__positionPopover=this._positionPopover.bind(this),this.__keyPressed=this._keyPressed.bind(this),document.addEventListener("keyup",this.__keyPressed),document.addEventListener("click",this.__shouldClose,{capture:!0}),window.addEventListener("resize",this.__positionPopover)}_unbindEvents(){this.contentEl&&this._resizeObserver&&this._resizeObserver.unobserve(this.contentEl),document.removeEventListener("keyup",this.__keyPressed),document.removeEventListener("click",this.__shouldClose,{capture:!0}),window.removeEventListener("resize",this.__positionPopover)}_shouldClose(e){let t=k(e,this);this.open&&!t&&(P(e),this.hide())}_keyPressed(e){e.which===27&&d[0]===this&&this.hide()}_positionPopover(){let e=typeof this.for=="object"?this.for:this.parentNode.querySelector(`#${this.for}, [name=${this.for}], .${this.for}, ${this.for}`),t=this.contentEl.getBoundingClientRect(),h=t.width/2,f=t.height/2,o=document.documentElement.clientWidth,u=document.documentElement.clientHeight,s=e.getBoundingClientRect(),g=s.width/2,y=s.height/2,a=8,b,p=(n,S)=>{let i={};switch(n){case"top":i.x=s.left+g-h,i.y=s.top-t.height-(a+1);break;case"bottom":i.x=s.left+g-h,i.y=s.bottom+a;break;case"right":i.x=s.right+a,i.y=s.top-f+y;break;case"left":i.x=s.left-t.width-a,i.y=s.top-f+y;break;case"center":i.x=o/2-h,i.y=u/2-f;break;default:break}n!=="manual"&&(this.style.setProperty("--popover-top",`${i.y}px`),this.style.setProperty("--popover-left",`${i.x}px`)),S||b()};b=()=>{let n=this.contentEl.getBoundingClientRect();o<n.width?p("center",!0):this.placement==="left"&&n.left<0?o-s.right<n.width?p("center",!0):p("right",!0):this.placement==="right"&&n.right>=o&&(s.left<n.width?p("center",!0):p("left",!0))},p(this.placement);let l=4,r=this.contentEl.getBoundingClientRect();r.top<=0&&this.style.setProperty("--popover-top",`${l}px`),r.right>=o&&this.style.setProperty("--popover-left",`${o-r.width-l}px`),r.left<=0&&this.style.setProperty("--popover-left",`${l}px`),r.bottom>=u&&this.style.setProperty("--popover-top",`${u-r.height-l}px`);let c=C(),m=parseInt(this.style.getPropertyValue("--popover-left"));m<=l+c&&this.style.setProperty("--popover-left",`calc(${c}px + ${m}px`),o-r.width-m<=l+c&&this.style.setProperty("--popover-left",`calc(${o-r.width-l}px - ${c}px)`)}render(){return _`
      <div id="popover" class="popover ${this.placement}" ?hidden="${!this.open}">
        <div class="content">
          <header class="header" id="header" ?hidden="${!this.headerEl}">
            <slot name="header"></slot>
          </header>
          <slot @slotchange="${this.handleSlotChange}">
            <p>no content slotted</p>
          </slot>
        </div>
      </div>
      <span visually-hidden tabindex="0" ?hidden="${!this.open}" @focusout="${this.hide}"></span>
    `}};customElements.define("vst-ui-popover",z);export{C as a,z as b};
