import{a as r,c as l}from"./chunk-CRHRJPRJ.js";import{b as t,c as s,h as i}from"./chunk-BVG7RORO.js";var c=t`
  .switch__label {
    display: flex;
  }

  .switch__label[size='s'] .switch__label-text {
    font-size: var(--vst-font-size-s);
  }
  .switch__label:hover {
    cursor: pointer;
  }
  .switch__label > * {
    pointer-events: none;
    /*  iOS hack - https://stackoverflow.com/a/34810294 */
  }

  .switch__label-text {
    flex: 1;
    color: var(--vst-color-fg-primary);
    user-select: none;
    margin: 0 0 0 var(--vst-space-xs, 0.5rem);
  }

  .switch__btn {
    display: block;
    position: relative;
    outline: none;
    user-select: none;
    width: 2.25em;
    height: 1.125em;
    border-radius: 2.25em;
    margin-block-start: 0.2rem;
  }
  .switch__btn::before,
  .switch__btn::after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
  }
  .switch__btn::before {
    right: 1px;
    background-color: var(--background-color, var(--vst-color-bg-primary));
    border-radius: 2.25em;
    transition: background-color var(--transition-default-speed) var(--transition-easing);
  }
  .switch__btn::after {
    width: 1.125em;
    background-color: var(--vst-color-bg-light);
    border-radius: 2.25em;
    box-shadow: 0 0.05em 0.2em rgba(0, 0, 0, 0.5);
    transition: margin var(--transition-fastest-speed) var(--transition-easing);
  }
  .switch__checkbox:checked + .switch__btn::before {
    background-color: var(--vst-color-success-ui);
  }
  .switch__checkbox:checked + .switch__btn::after {
    margin-inline-start: 1.125em;
  }

  :host([label-placement='left']) .switch__label-text {
    order: 0;
    margin: 0 var(--vst-space-xs, 0.5rem) 0 0;
  }

  :host([label-placement='left']) .switch__btn {
    order: 1;
  }

  :host([disabled]) {
    pointer-events: none;
  }
  :host([disabled]) .switch__label {
    color: var(--vst-color-fg-tertiary);
    opacity: 0.5;
  }
`;var o=class extends i{static get properties(){return{label:{type:String},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},labelPlacement:{type:String,reflect:!0,attribute:"label-placement"},id:{type:String,reflect:!0},size:{type:String,reflect:!0},proOnly:{type:Boolean,reflect:!0,attribute:"pro-only"}}}constructor(){super();this.label="",this.checked=!1,this.disabled=!1,this.labelPlacement="left",this.size="",this.proOnly=!1}toggle(e){e.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new CustomEvent("switch-changed",{detail:this.checked}))}static get styles(){return[r,l,c]}render(){return s`
      <div class="switch">
        <label class="switch__label" for="switch" id="${this.id}_label" size="${this.size}">
          <input
            class="switch__checkbox"
            hidden
            type="checkbox"
            ?disabled="${this.disabled||this.proOnly}"
            .checked="${this.checked}"
            id="switch"
            @change="${this.toggle}"
          />
          <div
            class="switch__btn"
            @keyup="${e=>e.code==="Enter"?this.toggle(e):""}"
            tabindex="0"
          ></div>
          <span class="switch__label-text">${this.label}</span>
        </label>
      </div>
    `}};customElements.define("vst-ui-switch",o);export{o as a};
