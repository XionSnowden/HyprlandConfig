import{b as t,c as o,h as s}from"./chunk-BVG7RORO.js";var e=t`
  .tooltip {
    display: flex;
    line-height: 1;
    font-size: var(--vst-font-size-s);
    outline: none;
    position: relative;
    block-size: 100%;
  }

  ::slotted([role='tooltip']) {
    overflow: hidden;
    white-space: nowrap;
    border-radius: var(--vst-radius);
    box-shadow: var(--vst-shadow-m);
    z-index: var(--vst-z-popover);
    padding: 0;
    background-color: var(--background-color, var(--vst-color-dark-200));
    color: var(--vst-color-light-100);
    opacity: 0;
    height: 0;
    width: 0;
    outline: none;
    position: absolute;
  }

  ::slotted([position~='block-start']) {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }

  ::slotted([position~='block-start-start']) {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 0;
  }

  ::slotted([position~='block-start-end']) {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    right: 0;
  }

  ::slotted([position~='block-end']) {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }

  ::slotted([position~='block-end-start']) {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 0;
  }

  ::slotted([position~='block-end-end']) {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    right: 0;
  }

  ::slotted([position~='inline-start']) {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted([position~='inline-start-start']) {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 0;
  }

  ::slotted([position~='inline-start-end']) {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    bottom: 0;
  }

  ::slotted([position~='inline-end']) {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted([position~='inline-end-start']) {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 0;
  }

  ::slotted([position~='inline-end-end']) {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    bottom: 0;
  }

  .tooltip[enabled]:hover ::slotted([role='tooltip']),
  .tooltip[enabled]:focus-within ::slotted([role='tooltip']) {
    opacity: 1;
    block-size: auto;
    inline-size: auto;
    padding: var(--padding, var(--vst-space-xs));
    transition: opacity 0.1s 0.5s;
    box-shadow: var(--vst-shadow-s);
  }
`;var a=class extends s{static get properties(){return{enabled:{type:Boolean}}}constructor(){super();this.enabled=!0}static get styles(){return e}_keyPressed(i){i.which===10&&this._disableTooltip()}_disableTooltip(){this.enabled=!1,this.requestUpdate()}_enableTooltip(){this.enabled=!0,this.requestUpdate()}render(){return o`
      <div
        class="tooltip"
        ?enabled="${this.enabled}"
        @focusout="${this._enableTooltip}"
        @click="${this._disableTooltip}"
        @keyup="${this._keyPressed}"
        tabindex="-1"
      >
        <slot></slot>
      </div>
    `}};customElements.define("vst-style-tooltip",a);
