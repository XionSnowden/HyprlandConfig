import{f as a}from"./chunk-H5EO627A.js";import{Fa as s}from"./chunk-TB2MSUH5.js";import{c as l}from"./chunk-CRHRJPRJ.js";import{b as t,c as r,h as o}from"./chunk-BVG7RORO.js";import{c as e}from"./chunk-LI3RKPGW.js";var i=t`
  /*
 Themable with these properties
  --vst-ui-soft-alert-font-size
*/
  :host([compact]) .alert {
    border-radius: var(--vst-radius);
    text-align: var(--align, left);
    width: max-content;
  }
  .alert {
    background-color: var(--vst-color-fg-tertiary);
    color: #fff;
    display: grid;
    font-size: var(--vst-ui-soft-alert-font-size, var(--base-font-size));
    grid-template-columns: 1fr;
    padding: var(--vst-space-xs) 0;
    place-items: center;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: var(--vst-z-soft-alert);
  }
  .alert a {
    color: #fff;
  }
  .alert a:hover {
    color: var(--vst-color-bg-tertiary);
  }
  .alert--success {
    background-color: var(--vst-color-success);
    font-weight: bold;
  }
  .alert--warning {
    background-color: var(--vst-color-warning-300);
    font-weight: bold;
  }
  .alert--warning > .alert__message {
    color: #fff;
    font-weight: bold;
  }
  .alert--auth-error {
    background-color: var(--vst-color-danger-bg);
    border: 1px solid var(--vst-color-danger-fg);
  }
  .alert--auth-error > .alert__message {
    color: var(--vst-color-danger-fg);
    font-weight: bold;
  }
  .alert--error {
    background-color: var(--vst-color-danger);
  }
  .alert--error > .alert__message {
    color: #fff;
    font-weight: bold;
  }
  .alert--error a {
    color: var(--vst-color-danger-bg);
  }
  .alert--error a:hover {
    color: #fff;
  }
  .alert--can-close {
    grid-template-columns: 1fr 2.4375rem;
  }
  .alert--can-close .alert__message {
    margin: 0 1px 0 var(--vst-space-xs);
  }
  .alert__message {
    margin: 0 var(--vst-space-xs);
    max-inline-size: 100%;
  }
  slot {
    user-select: text;
  }
  slot::slotted(vst-ui-icon) {
    vertical-align: -0.3rem;
  }

  ${a(t`.alert__close-btn`,"cancel")}
  .alert__close-btn {
    margin: calc(var(--vst-space-xs) * -1) 0 calc(var(--vst-space-xs) * -1) 0;
  }
  .alert__close-btn vst-ui-icon {
    --vst-ui-icon-color: #fff;
  }
`;var c=class extends o{static get properties(){return{canClose:{type:Boolean},hidden:{type:Boolean,reflect:!0},type:{type:String}}}constructor(){super();this.canClose=!1,this.hidden=!1,this.type=""}closeClicked(){this.hidden=!0,this.dispatchEvent(new CustomEvent("alert-closed"))}static get styles(){return[l,i]}render(){return r`
      <div class="alert alert--${this.type} ${this.canClose?"alert--can-close":""}">
        <p class="alert__message">
          <slot></slot>
        </p>
        <vst-style-tooltip>
          <button
            ?hidden="${!this.canClose}"
            class="alert__close-btn"
            @click="${this.closeClicked}"
            id="close_alert"
            type="button"
          >
            <vst-ui-icon class="alert__close-btn-icon" .icon="${s}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${e("Close Alert")}</span>
        </vst-style-tooltip>
      </div>
    `}};customElements.define("vst-ui-soft-alert",c);export{c as a};
