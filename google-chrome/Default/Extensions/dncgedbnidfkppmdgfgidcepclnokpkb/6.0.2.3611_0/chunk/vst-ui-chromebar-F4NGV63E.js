import{k as n,l as a,m as s,n as c}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as l}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as t,c as o,h as r}from"./chunk-BVG7RORO.js";import{c as i}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var m=t`
  :host {
    display: block;
    height: var(--chrome-menubar-height, 32px);
    width: 100vw;
    background-color: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-primary);
  }

  .menubar {
    display: flex;
    align-items: center;
    height: var(--chrome-menubar-height, 32px);
    position: relative;
  }
  .menubar__title {
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    margin: 0;
    padding: 0;
    flex: 1;
    align-content: center;
    justify-content: center;
  }
  .menubar__btn-wrapper {
    display: flex;
    width: calc(var(--chrome-menubar-height, 32px) * 3);
    position: absolute;
    right: 0;
    top: 0;
  }
  .menubar__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: var(--chrome-menubar-height, 32px);
    height: var(--chrome-menubar-height, 32px);
    background-color: transparent;
    line-height: 0;
    outline: 0;
  }
  .menubar__btn:hover {
    background-color: var(--vst-color-bg-secondary);
  }
  .menubar__btn-icon {
    width: 10px;
    height: 10px;
  }
  .menubar--draggable {
    -webkit-app-region: drag;
  }
  .menubar--draggable button {
    -webkit-app-region: no-drag;
  }
`;var u=class extends r{static get properties(){return{appName:{type:String},isMaximized:{type:Boolean}}}constructor(){super();this.appName=document.title,this.isMaximized=!1,this.tapCount=0}closeClicked(){document.dispatchEvent(new CustomEvent("close-app",{bubbles:!0,composed:!0}))}minimizeClicked(){window.chrome.app.window.current().minimize()}toggleMaximizeClicked(){let e=window.chrome.app.window.current();e.isMaximized()?(e.restore(),this.isMaximized=!1):(e.maximize(),this.isMaximized=!0)}titleBarClicked(){this.tapCount++,this.tapCount===1&&setTimeout(()=>{this.tapCount>1&&this.toggleMaximizeClicked(),this.tapCount=0},250)}static get styles(){return[l,m]}render(){return o`
      <header
        class="menubar menubar--draggable"
        @keyup="${e=>e.keyCode===13?this.titleBarClicked:""}"
        @click="${this.titleBarClicked}"
      >
        <strong class="menubar__title">${this.appName}</strong>
        <div class="menubar__btn-wrapper">
          <button
            class="menubar__btn"
            @click="${this.minimizeClicked}"
            aria-label="${i("Minimize Application")}"
          >
            <vst-ui-icon
              class="menubar__btn-icon"
              color="#5a5a5a"
              .icon="${s}"
            ></vst-ui-icon>
          </button>
          <button
            class="menubar__btn"
            @click="${this.toggleMaximizeClicked}"
            aria-label="${i("Maximize Application")}"
          >
            <vst-ui-icon
              class="menubar__btn-icon"
              color="#5a5a5a"
              .icon="${this.isMaximized?c:a}"
            ></vst-ui-icon>
          </button>
          <button
            class="menubar__btn"
            @click="${this.closeClicked}"
            aria-label="${i("Close Application")}"
          >
            <vst-ui-icon
              class="menubar__btn-icon"
              color="#5a5a5a"
              .icon="${n}"
            ></vst-ui-icon>
          </button>
        </div>
      </header>
    `}};customElements.define("vst-ui-chromebar",u);export{u as VstUiChromebar};
