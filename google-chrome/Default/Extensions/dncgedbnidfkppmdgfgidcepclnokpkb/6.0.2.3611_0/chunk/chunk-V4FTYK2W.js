import{a as l,b as p}from"./chunk-3YSPJCIY.js";import{a as e}from"./chunk-OTWO5H3C.js";import{b as o,c as a,h as i}from"./chunk-BVG7RORO.js";var t=o`
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  transform: translate(0, 0);
`,r=o`
  .positioned {
    position: relative;
  }

  slot[name='content']::slotted(*),
  .content {
    position: absolute;
  }

  .positioned[position~='top'] slot[name='content']::slotted(*),
  .positioned[position~='top'] .content {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }

  .positioned[position~='top-left'] slot[name='content']::slotted(*),
  .positioned[position~='top-left'] .content {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
  }

  .positioned[position~='top-right'] slot[name='content']::slotted(*),
  .positioned[position~='top-right'] .content {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    right: 0;
  }

  .positioned[position~='bottom'] slot[name='content']::slotted(*),
  .positioned[position~='bottom'] .content {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }

  .positioned[position~='bottom-left'] slot[name='content']::slotted(*),
  .positioned[position~='bottom-left'] .content {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 0;
  }

  .positioned[position~='bottom-right'] slot[name='content']::slotted(*),
  .positioned[position~='bottom-right'] .content {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    right: 0;
  }

  .positioned[position~='left'] slot[name='content']::slotted(*),
  .positioned[position~='left'] .content {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 50%;
    transform: translateY(-50%);
  }

  .positioned[position~='left-top'] slot[name='content']::slotted(*),
  .positioned[position~='left-top'] .content {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 0;
  }

  .positioned[position~='left-bottom'] slot[name='content']::slotted(*),
  .positioned[position~='left-bottom'] .content {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    bottom: 0;
  }

  .positioned[position~='right'] slot[name='content']::slotted(*),
  .positioned[position~='right'] .content {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 50%;
    transform: translateY(-50%);
  }

  .positioned[position~='right-top'] slot[name='content']::slotted(*),
  .positioned[position~='right-top'] .content {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 0;
  }

  .positioned[position~='right-bottom'] slot[name='content']::slotted(*),
  .positioned[position~='right-bottom'] .content {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    bottom: 0;
  }

  /* XS */
  ${e("xs",o`
      .positioned[position~='xs-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='xs-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='xs-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='xs-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='xs-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='xs-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='xs-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='xs-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='xs-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='xs-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='xs-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='xs-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}

  /* SM */
  ${e("s",o`
      .positioned[position~='s-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='s-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='s-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='s-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='s-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='s-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='s-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='s-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='s-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='s-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='s-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='s-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}

  /* MD */
  ${e("m",o`
      .positioned[position~='m-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='m-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='m-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='m-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='m-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='m-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='m-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='m-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='m-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='m-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='m-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='m-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}

  /* l */
  ${e("l",o`
      .positioned[position~='l-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='l-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='l-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='l-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='l-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='l-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='l-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='l-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='l-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='l-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='l-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='l-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}

  /* XL */
  ${e("xl",o`
      .positioned[position~='xl-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='xl-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='xl-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='xl-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='xl-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='xl-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='xl-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='xl-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='xl-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='xl-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='xl-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='xl-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}

  /* Portrait */
  ${e("portrait",o`
      .positioned[position~='portrait-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='portrait-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='portrait-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='portrait-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='portrait-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='portrait-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='portrait-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='portrait-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='portrait-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='portrait-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='portrait-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='portrait-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}

  /* Landscape */
  ${e("landscape",o`
      .positioned[position~='landscape-top'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='landscape-top-left'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
      }

      .positioned[position~='landscape-top-right'] slot[name='content']::slotted(*) {
        ${t};
        bottom: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='landscape-bottom'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 50%;
        transform: translateX(-50%);
      }

      .positioned[position~='landscape-bottom-left'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        left: 0;
      }

      .positioned[position~='landscape-bottom-right'] slot[name='content']::slotted(*) {
        ${t};
        top: calc(100% + var(--offset, var(--vst-space-xs)));
        right: 0;
      }

      .positioned[position~='landscape-left'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='landscape-left-top'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='landscape-left-bottom'] slot[name='content']::slotted(*) {
        ${t};
        right: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }

      .positioned[position~='landscape-right'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 50%;
        transform: translateY(-50%);
      }

      .positioned[position~='landscape-right-top'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        top: 0;
      }

      .positioned[position~='landscape-right-bottom'] slot[name='content']::slotted(*) {
        ${t};
        left: calc(100% + var(--offset, var(--vst-space-xs)));
        bottom: 0;
      }
    `)}
`;var c=o`
  ${r}

  slot[name="content"]::slotted(*) {
    min-inline-size: 14rem;
    display: none;
    background-color: var(--background-color, var(--vst-color-bg));
  }

  .dropdown[variant='dropdown'] slot[name='content']::slotted(*) {
    --padding: 0;
    min-inline-size: max-content;
  }

  .dropdown[variant='pro'] slot[name='content']::slotted(*) {
    --padding: var(--vst-space-s);
    min-inline-size: 16ch;
  }

  .dropdown[open] slot[name='content']::slotted(*) {
    display: block;
    border-radius: var(--vst-radius);
    box-shadow: var(--vst-shadow-m);
    z-index: var(--vst-z-popover);
    padding: var(--padding, var(--vst-space-l));
    box-shadow: var(--vst-shadow-s);
  }
`;var f=class extends i{static get properties(){return{open:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},position:{type:String,reflect:!0}}}static get styles(){return c}constructor(){super();this.open=!1,this.position="bottom"}updated(s){s.forEach(async(n,v)=>{v==="open"&&(this.open?(this._open(),setTimeout(()=>{this._bindEvents()})):this._unbindEvents())})}_close(){this._unbindEvents(),this.open=!1,this.dispatchEvent(new CustomEvent("closed"))}_open(){this.dispatchEvent(new CustomEvent("opened"))}_bindEvents(){this.__shouldClose=this._shouldClose.bind(this),this.__keyPressed=this._keyPressed.bind(this),document.addEventListener("keyup",this.__keyPressed),document.addEventListener("click",this.__shouldClose,!0)}_unbindEvents(){document.removeEventListener("keyup",this.__keyPressed),document.removeEventListener("click",this.__shouldClose,!0)}_shouldClose(s){let n=p(s,this);this.open&&!n&&(l(s),this._close())}_keyPressed(s){s.which===27&&this._close()}render(){return a`
      <div
        class="positioned dropdown"
        ?open="${this.open}"
        position="${this.position}"
        variant="${this.variant}"
      >
        <slot name="anchor"></slot>
        <slot
          @keyup="${s=>s.keyCode===13?this._handleInnerClick:""}"
          name="content"
          ?hidden="${!this.open}"
        ></slot>
        <span
          visually-hidden
          tabindex="0"
          ?hidden="${!this.open}"
          @focusout="${this._close}"
        ></span>
      </div>
    `}};customElements.define("vst-ui-dropdown",f);
