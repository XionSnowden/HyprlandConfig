import{o as a}from"./chunk-TB2MSUH5.js";import{c as i}from"./chunk-CRHRJPRJ.js";import{b as r,c as t,h as o}from"./chunk-BVG7RORO.js";import{c as s}from"./chunk-LI3RKPGW.js";var e=r`
  :host {
    display: flex;
    align-items: center;
  }
  .tag {
    border-radius: var(--vst-radius-pill);
    background-color: var(--vst-color-bg-tertiary);
    color: var(--vst-color-fg-primary);
    border: 2px solid var(--vst-color-fg-primary);
    padding: var(--vst-space-xs) var(--vst-space-s);
    font-size: var(--vst-font-size-s);
    font-size: var(--vst-font-size-s);
    line-height: var(--vst-line-height-m);
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .tag slot {
    -webkit-user-select: text;
    user-select: text;
    cursor: text;
  }

  .tag:not([margin]) {
    margin: 0 var(--vst-space-2xs);
  }

  .tag #dismiss_tag_btn {
    margin-inline-start: var(--vst-space-xs);
  }

  .tag[variant='primary'] {
    background-color: var(--vst-color-tag-brand-bg);
    color: var(--vst-color-tag-brand);
    border: 2px solid var(--vst-color-tag-brand-border);
  }

  .tag[variant='primary'] .btn vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-tag-brand);
  }

  .tag[variant='info'] {
    background-color: var(--vst-color-tag-info-bg);
    color: var(--vst-color-tag-info);
    border: 2px solid var(--vst-color-tag-info-border);
  }

  .tag[variant='info'] .btn vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-tag-info);
  }

  .tag[variant='success'] {
    background-color: var(--vst-color-tag-success-bg);
    color: var(--vst-color-tag-success);
    border: 2px solid var(--vst-color-tag-success-border);
  }

  .tag[variant='success'] .btn vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-tag-success);
  }

  .tag[variant='warning'] {
    background-color: var(--vst-color-tag-warning-bg);
    color: var(--vst-color-tag-warning);
    border: 2px solid var(--vst-color-tag-warning-border);
  }

  .tag[variant='warning'] .btn vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-tag-warning);
  }

  .tag[variant='danger'] {
    background-color: var(--vst-color-tag-danger-bg);
    color: var(--vst-color-tag-danger);
    border: 2px solid var(--vst-color-tag-danger-border);
  }

  .tag[variant='danger'] .btn vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-tag-danger);
  }

  .tag[size='s'] {
    font-size: var(--vst-font-size-s);
    padding: var(--vst-space-2xs) var(--vst-space-xs);
    line-height: var(--vst-line-height-s);
  }

  .tag[size~='s'] #dismiss_tag_btn {
    margin-inline-start: var(--vst-space-2xs);
  }

  .tag[variant~='badge'][size~='s'] {
    width: 0.5rem;
    height: 0.5rem;
    padding: 0.625rem;
  }
`;var n=class extends o{static get styles(){return[i,e]}static get properties(){return{dismissible:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0}}}constructor(){super();this.dismissible=!1,this.variant="",this.size=""}_dismissTag(){this.dispatchEvent(new CustomEvent("closed"))}render(){return t`
      <span class="tag" variant="${this.variant}" size="${this.size}">
        <slot></slot>
        ${this.dismissible?t`
              <vst-style-tooltip>
                <button
                  class="btn"
                  id="dismiss_tag_btn"
                  variant="icon"
                  size="xs"
                  @click="${this._dismissTag}"
                >
                  <vst-ui-icon .icon="${a}"></vst-ui-icon>
                </button>
                <span role="tooltip" position="block-end">${s("Close")}</span>
              </vst-style-tooltip>
            `:""}
      </span>
    `}};customElements.define("vst-ui-tag",n);
