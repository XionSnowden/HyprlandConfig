import{o as u}from"./chunk-TB2MSUH5.js";import{c as h}from"./chunk-CRHRJPRJ.js";import{a as l}from"./chunk-OTWO5H3C.js";import{b as s,c as r,h as a}from"./chunk-BVG7RORO.js";import{c as d}from"./chunk-LI3RKPGW.js";function g(i){return i.reduce((t,e)=>t.concat(e.assignedElements()),[])}var p=class extends a{static get properties(){return{active:{type:Boolean,reflect:!0},noFocus:{type:Boolean}}}attributeChangedCallback(t,e,o){t==="active"&&o!==null&&this.__toTop()}static get styles(){return[s`
        :host {
          display: block;
        }

        #focusTop {
          inline-size: 100%;
          block-size: 100%;
          display: flex;
          flex-direction: column;
        }

        #focusTop:focus {
          outline: 0; /* this causes an extra orange or blue outline across the entire dialog. pressing tab once more puts focus on the closest focusable item.  */
        }
      `]}constructor(){super();this.noFocus=!1,this.count=0,this._ready=new Promise((t,e)=>{setTimeout(()=>{this._ready||e()},3e3)})}firstUpdated(){this._focusTop=this.shadowRoot.querySelector("#focusTop"),this.active&&this.activate(),this._ready=Promise.resolve(!0)}activate(){this.hasAttribute("active")||this.toggleAttribute("active"),!this.querySelector(":focus")&&!this.noFocus&&this._focusTop.focus()}async __toTop(){await this._ready,!!this.hasAttribute("active")&&(this.noFocus||this._focusTop.focus())}async __toBottom(){if(await this._ready,!this.hasAttribute("active"))return;let t=["button, input, [tabindex], a[href], area[href], select, textarea, [contenteditable]"],e=this.querySelectorAll(t.map(b=>`${b}:not([disabled])`).join(",")),o=g(Array.from(this.querySelectorAll("slot"))),n=[...e,...o];!this.noFocus&&n.length&&n[n.length-1].focus()}render(){return r`
      <div tabindex="0" @focus="${this.__toBottom}"></div>
      <div tabindex="-1" id="focusTop">
        <slot></slot>
      </div>
      <div tabindex="0" @focus="${this.__toTop}"></div>
    `}};customElements.define("vst-ui-focus-trap",p);var v=s`
  * {
    box-sizing: border-box;
  }
  :host {
    --in-timing-curve: cubic-bezier(0, 0.3, 0.2, 1);
    --dialog-max-block-size: 100%;
    --dialog-max-inline-size: 100%;
    --dialog-block-size: 100%;
    --dialog-inline-size: 100%;
    --dialog-header-font-color: var(--vst-color-fg-primary);
    --dialog-close-icon-color: var(--dialog-header-font-color);
    --vst-dialog-header-height: 2.75rem;
    --dialog-border-color: var(--vst-color-brand);
    --dialog-header-background: var(--vst-color-bg-tertiary);
    --dialog-padding: var(--vst-space-l);
    --dialog-header-font-size: var(--vst-font-size-m, 1rem);
    --dialog-z-index: var(--vst-z-dialog);
    --dialog-border-block-start: 6px solid var(--dialog-border-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: var(--chrome-menubar-height, 0);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s var(--in-timing-curve);
    z-index: var(--dialog-z-index);
    box-shadow: var(--vst-shadow-m);
  }

  ${l("s",s`
      :host {
        --dialog-max-block-size: 90vh;
        --dialog-max-inline-size: 90vw;
        --dialog-block-size: auto;
        --dialog-inline-size: auto;
      }
    `)}

  :host([open]) {
    opacity: 1;
    pointer-events: unset;
  }
  :host([open][data-backdrop='blur']) {
    backdrop-filter: blur(2px);
  }
  :host([no-mask]) {
    background-color: hsla(0, 0%, 0%, 0);
  }
  vst-ui-focus-trap {
    background-color: var(--vst-color-bg);
    max-block-size: var(--dialog-max-block-size);
    max-inline-size: var(--dialog-max-inline-size);
    block-size: var(--dialog-block-size);
    inline-size: var(--dialog-inline-size);
    transform: translateY(-100px);
    transition: transform 0.15s var(--in-timing-curve);
    overflow: var(--overflow, hidden);
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 0;
    opacity: 1;
    box-shadow: var(--vst-shadow-l);
  }
  /* showdow is lost on focus trap when wrapper div within it is focused  from
  vst-style-focus.css.js */
  vst-ui-focus-trap:focus:not(:focus-visible) {
    box-shadow: var(--vst-shadow-l);
  }

  ${l("s",s`
      vst-ui-focus-trap {
        border-radius: var(--vst-radius);
      }
    `)}

  vst-ui-focus-trap[loading] {
    opacity: 0;
  }

  :host([open]) vst-ui-focus-trap:not([loading]) {
    transform: none;
  }

  :host([variant='fullscreen']) vst-ui-focus-trap {
    block-size: 100%;
    border-radius: 0;
    inline-size: 100%;
    max-block-size: none;
    max-inline-size: none;
  }

  header {
    flex-shrink: 0;
    background-color: var(--dialog-header-background);
    padding: var(--vst-space-2xs);
    padding-inline-start: var(--vst-space-s);
    color: var(--dialog-header-font-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--vst-color-bg-secondary);
  }

  footer {
    display: flex;
    flex-shrink: 0;
  }

  slot[name='content']::slotted(*) {
    block-size: 100%;
    background-color: var(--vst-color-bg);
    overflow: var(--overflow, auto);
  }

  #content {
    block-size: 100%;
    inline-size: 100%;
    overflow: var(--overflow, hidden);
    padding: var(--dialog-padding);
    background-color: var(--vst-color-bg);
  }

  #close {
    margin-inline-start: var(--vst-space-xs);
  }

  #close vst-ui-icon {
    --vst-ui-icon-color: var(--dialog-close-icon-color);
  }

  #close:hover,
  #close:focus {
    background-color: var(--dialog-close-icon-hover-background, var(--vst-color-bg-secondary));
  }

  :host([variant~='error']) header {
    --dialog-border-color: var(--vst-color-warning);
    --dialog-border-block-start: 6px solid var(--dialog-border-color);
  }

  slot[name='version']::slotted(*) {
    white-space: nowrap;
    margin-inline-end: var(--vst-space-xs);
    user-select: all;
    font-size: 0.5rem;
  }

  slot[name='header']::slotted(*) {
    flex: 1;
    text-align: center;
  }

  slot[name='footer']::slotted([footer-buttons]) {
    background-color: var(--vst-color-bg-tertiary);
    display: flex;
    flex-grow: 2;
    gap: var(--vst-space-s);
    justify-content: flex-end;
    padding: var(--vst-space-s);
  }

  header ::slotted(*) {
    margin: 0;
    font-size: var(--dialog-header-font-size);
  }

  header:not([empty]) {
    border-block-start: var(--dialog-border-block-start);
  }
  header[empty] {
    border: none;
    justify-content: flex-end;
    background: var(--vst-color-bg);
  }

  header[empty] ~ #content {
    padding-block-start: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 1ms;
    }
    vst-ui-focus-trap {
      transition-duration: 1ms;
      transform: translateY(0);
    }
  }
`;var c=({target:{parentElement:i}})=>{i.removeAttribute("empty")},f=class extends a{static get properties(){return{noClose:{type:Boolean,attribute:"no-close"},opened:{type:Boolean,attribute:"open"},loading:{type:Boolean},noFocus:{type:Boolean,attribute:"no-focus"},headless:{type:Boolean}}}static get styles(){return[h,v]}constructor(){super();this.noClose=!1,this.opened=!1,this.loading=!0,this.noFocus=!1,this.headless=!1}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),t==="open"&&o!==null&&(this.toggleAttribute("hidden",!1),this.dispatchEvent(new CustomEvent("before-dialog-open",{composed:!0,bubbles:!0,detail:this})),setTimeout(()=>{this.open({target:document.activeElement})},1e3/60)),t==="open"&&o===null&&(this.keepSize=this._focusTrap.getBoundingClientRect(),this._focusTrap.style.width=`${this.keepSize.width}px`,this._focusTrap.style.height=`${this.keepSize.height}px`,this.dispatchEvent(new CustomEvent("before-dialog-close",{composed:!0,bubbles:!0,detail:this})),this.close(),setTimeout(()=>{this.toggleAttribute("hidden",!this.hasAttribute("open")),this._focusTrap.removeAttribute("style")},200))}firstUpdated(){this.loading=this.hasAttribute("open"),this.toggleAttribute("hidden",!this.loading),this._focusTrap=this.shadowRoot.querySelector("vst-ui-focus-trap"),this.addEventListener("close-dialog",({detail:t})=>{[null,this.id].includes(t)&&this.close()})}_bindEvents(){this.__keyPressed=this._keyPressed.bind(this),this.__shouldClose=this._shouldClose.bind(this),this.addEventListener("keyup",this.__keyPressed),this.addEventListener("click",this.__shouldClose)}_unbindEvents(){this.removeEventListener("keyup",this.__keyPressed),this.removeEventListener("click",this.__shouldClose)}_shouldClose(t){this.hasAttribute("stop-propagation")&&t.stopPropagation(),this.hasAttribute("open")&&!this._innerClick&&!this.hasAttribute("no-escape")&&this.close(),this._innerClick=!1}_keyPressed(t){t.keyCode===27&&this._shouldClose(t)}_handleInnerClick(t){this._innerClick=!0,this.hasAttribute("stop-propagation")&&this._shouldClose(t)}get finishTransition(){return new Promise(t=>this._focusTrap.addEventListener("transitionend",()=>{t()}),{once:!0})}async open({target:t},e){if(this._focusTrap.removeAttribute("style"),this.loading=!0,this._openedFrom=this._openedFrom||t,this._returnFocus=this._returnFocus||e,this._focusTrap.addEventListener("transitionend",()=>{this._focusTrap.style.transform="none"},{once:!0}),!this.hasAttribute("open")){this.toggleAttribute("open");return}this._bindEvents(),this.preloadComponents&&await Promise.all(this.preloadComponents()),this.loading=!1,this.dispatchEvent(new CustomEvent("dialog-open",{composed:!0,bubbles:!0,detail:this})),this.requestUpdate()}close(){if(this.hasAttribute("open")){this._focusTrap.removeAttribute("style"),this.toggleAttribute("open");return}this._returnFocus?this._returnFocus.focus():this._openedFrom&&this._openedFrom.focus(),delete this._returnFocus,delete this._openedFrom,this._unbindEvents(),this.dispatchEvent(new CustomEvent("dialog-close",{composed:!0,bubbles:!0,detail:this}))}render(){return r`
      <vst-ui-focus-trap
        @click="${this._handleInnerClick}"
        ?active="${this.hasAttribute("open")}"
        ?loading="${this.loading}"
        role="dialog"
        .noFocus="${this.noFocus}"
      >
        <header part="header" empty ?hidden=${this.headless}>
          <slot name="version"></slot>
          <slot
            @slotchange="${c}"
            name="header"
            ?hidden="${!this.hasAttribute("open")}"
          ></slot>
          <vst-style-tooltip>
            <button
              part="close"
              title="close"
              id="close"
              class="btn"
              variant="icon"
              ?hidden=${this.noClose}
              @click="${this.close}"
            >
              <slot name="close">
                <vst-ui-icon part="icon" .icon="${u}"></vst-ui-icon>
              </slot>
            </button>
            <span role="tooltip" position="block-end-end">${d("Close Dialog")}</span>
          </vst-style-tooltip>
        </header>
        <div id="content" empty part="content">
          <slot name="content" @slotchange="${c}"></slot>
        </div>
        <footer part="footer" empty>
          <slot @slotchange="${c}" name="footer"></slot>
        </footer>
      </vst-ui-focus-trap>
    `}};customElements.define("vst-ui-dialog",f);
