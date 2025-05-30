import{a as c}from"./chunk-JWPGNWQB.js";import{a,d as v,e as m}from"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import"./chunk-HTT347OR.js";import{o as p}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as h}from"./chunk-CRHRJPRJ.js";import{a as i}from"./chunk-OTWO5H3C.js";import{b as o,c as s,h as l}from"./chunk-BVG7RORO.js";import{c as d}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var f=o`
  :host {
    --pointer-color: white;
    --pointer-size: 8px;
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 0;
      transform: none;
    }
  }

  @keyframes fadeOutDownFar {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
  }

  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    25% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    50% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    75% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    100% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
  }

  .dialog-screen {
    display: none;
  }

  .shadow-wrapper {
    z-index: var(--vst-z-popover);
    position: fixed;
  }

  .popover {
    ${a}
    position: fixed;
    height: auto;
    max-inline-size: 100%;
    max-block-size: calc(100% - var(--vst-toolbar-height) - var(--chrome-menubar-height, 0px));
    /*  stylelint-disable-line length-zero-no-unit */
    border: 1px solid var(--vst-color-bg-primary);
    z-index: var(--vst-z-popover);
    border-radius: var(--vst-radius);
    display: flex;
    box-shadow: var(--vst-shadow-s);
  }

  .padded-content,
  .unpadded-content {
    flex: 1;
    background: var(--vst-color-bg);
  }

  .unpadded-content {
    overflow-y: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  :host(.dialog) {
    ${a}
    ${m}
    width: 100%;
    height: 100%;
    position: fixed;
    top: var(--chrome-menubar-height, 0px);
    left: 0;
    z-index: var(--vst-z-popover);
  }

  :host(.dialog) .dialog-screen {
    display: block;
    position: fixed;
    top: var(--chrome-menubar-height, 0px);
    left: 0;
    width: 100%;
    height: 100%;
    z-index: calc(var(--vst-z-popover) - 2);
    background: rgba(0, 0, 0, 0.65);
  }

  :host(.dialog) .content {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: calc(var(--vst-z-popover) - 1);
    inline-size: 100%;
    block-size: 100%;
    box-shadow: var(--vst-shadow-m);
    overflow: hidden;
  }

  ${i("s",o`
      :host(.dialog) .content {
        inline-size: auto;
        block-size: auto;
        max-block-size: 90vh;
        border-radius: var(--vst-radius);
      }
    `)}

  :host(.dialog) .padded-content {
    padding: var(--vst-space-xl);
    overflow: auto;
  }

  .header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
    position: relative;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-2xs);
    border-radius: 0;
  }

  :host(.dialog) .header {
    border-block-start: 6px solid var(--vst-color-brand);
  }

  ${i("s",o`
      .header {
        border-radius: var(--vst-radius) var(--vst-radius) 0 0;
      }
    `)}

  .header h2 {
    flex-grow: 1;
    text-align: center;
    margin: 0;
  }

  :host(.dialog) .popover {
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0;
    position: fixed;
    top: var(--chrome-menubar-height, 0px);
    /*  stylelint-disable-line length-zero-no-unit */
    left: 0;
    width: 100%;
    height: calc(100% - var(--chrome-menubar-height, 0px));
    /*  stylelint-disable-line length-zero-no-unit */
    max-block-size: none;
  }
  :host(.dialog) .pointer {
    display: none;
  }

  :host(.no-padding) .content {
    padding: 0;
  }
  :host(.no-padding) .content .header {
    margin: 0;
  }

  slot[name='content'] * {
    block-size: 100%;
  }

  .popover.contextmenu {
    width: 150px;
    overflow: hidden;
    border: 1px solid var(--vst-color-bg-primary);
    ${v}
  }

  ${i("s",o`
      .popover.contextmenu {
        width: auto;
      }
    `)}

  .contextmenu {
    animation: none;
  }

  /*  hide the cancel button in the header if we can't close the popover in a message box */
  [can-close='false'] .header .btn[variant='icon'] {
    display: none;
  }
`;var u=class extends l{static get properties(){return{anchor:{type:Object},canClose:{type:Boolean,reflect:!0},canCloseFromScreen:{type:Boolean,reflect:!0},show:{type:Boolean},header:{type:Object},text:{type:Object}}}constructor(){super();this.canClose=!0,this.canCloseFromScreen=!0,this.header={},this.text={},this.show=!0,this.eventBinder=new c,document.addEventListener("keyup",this.keyPressed.bind(this))}bind(...e){let t,n,r;return e.length<=2?([n,r]=e,t=this):[t,n,r]=e,this.eventBinder.bind(t,n,r)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keyup",this.keyPressed.bind(this)),this.eventBinder.unbindAll()}setPopoverChild(e,t){t&&t.header&&(this.header=t.header),this.appendChild(e)}screenClicked(e){e.stopPropagation(),this.canClose&&this.canCloseFromScreen&&this.close()}closeClicked(e){e.stopPropagation(),this.canClose&&this.close()}keyPressed(e){e.which===27&&this.close()}close(){this.dispatchEvent(new CustomEvent("close"))}static get styles(){return[h,f]}render(){return s`
      <div class="shadow-wrapper">
        <div id="popover" class="popover" ?show="${this.show}" ?canClose="${this.canClose}">
          <div class="content">
            ${this.header.title?s`
                  <header class="header" id="header">
                    <!-- use popover.header options to show this header on create -->
                    <h2 class="heading" size="m" margin="0" id="title">${this.header.title}</h2>
                    ${this.canClose?s`
                          <vst-style-tooltip>
                            <button
                              class="btn"
                              variant="icon"
                              size="s"
                              id="btn_cancel"
                              @click="${this.closeClicked}"
                            >
                              <vst-ui-icon class="icon-close" .icon="${p}"></vst-ui-icon>
                            </button>
                            <span role="tooltip" position="block-end-end"
                              >${d("Close Popover")}</span
                            >
                          </vst-style-tooltip>
                        `:""}
                  </header>
                  <div class="padded-content">
                    <slot id="content"></slot>
                  </div>
                `:s`
                  <div class="unpadded-content">
                    <slot id="content"></slot>
                  </div>
                `}
          </div>
          <div id="popover_screen" class="dialog-screen" @click="${this.screenClicked}"></div>
        </div>
      </div>
    `}};customElements.define("vst-core-popover",u);
