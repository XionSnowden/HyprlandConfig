import{c as b}from"./chunk-H5EO627A.js";import{c as d}from"./chunk-CRHRJPRJ.js";import{b as a,c as s,h as c}from"./chunk-BVG7RORO.js";var _=a`
  :host {
    background-color: var(--vst-color-bg);
    display: block;
  }

  /*  matches y-drawer-popover style */
  .listbox__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-xs) var(--vst-space-s);
  }

  .listbox__list {
    list-style: none;
    padding-inline-start: 0;
    margin: 0;
    min-inline-size: 11.25rem;
    max-inline-size: 25rem;
  }
  .listbox__list--horizontal {
    display: flex;
    min-inline-size: auto;
    max-inline-size: auto;
  }

  .listbox__item {
    font-size: var(--vst-font-size-m);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
  }

  :host([variant='no-lines']) .listbox__item {
    border-bottom: none;
  }

  :host([variant='no-lines']) .listbox__btn {
    color: var(--vst-color-primary);
  }

  .item-icon {
    block-size: var(--vst-icon-size-l);
    inline-size: var(--vst-icon-size-l);
    padding-right: var(--vst-space-xs);
  }

  .listbox__item--select {
    /*  special case for change units select */
    display: flex;
    padding: 0.625em 0.75em;
    justify-content: space-between;
    align-items: center;
  }

  .listbox__select-label {
    color: var(--vst-color-fg-secondary);
    padding-inline-end: var(--vst-space-xs);
  }
  .listbox__select-label--disabled {
    opacity: 0.5;
    color: var(--vst-color-fg-tertiary);
  }

  select {
    inline-size: 50%;
  }
  .listbox__select[disabled] {
    opacity: 0.5;
  }

  ${b(a`.listbox__btn`)}
  .listbox__btn {
    display: flex;
    width: 100%;
    padding: 0.5625em 0.75em;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .listbox__btn:hover {
    cursor: pointer;
  }
  .listbox__btn[disabled] {
    opacity: 0.5;
    color: var(--vst-color-fg-tertiary);
  }
  :host([variant='no-lines']) .listbox__btn {
    align-items: center;
  }

  .listbox__switch,
  .listbox__text {
    display: block;
    padding: 0.75em;
  }

  .listbox__group:last-of-type .listbox__item:last-of-type,
  .listbox__list--single .listbox__item:last-of-type {
    border: 0;
  }

  .listbox__list--horizontal .listbox__item {
    border-bottom: 0;
    border-right: 1px solid var(--vst-color-bg-secondary);
  }

  .listbox__group + .listbox__group {
    margin-block-start: var(--vst-space-xs);
    border-top: 1px solid var(--vst-color-bg-secondary);
  }

  .listbox__list--horizontal .listbox__group + .listbox__group {
    margin-block-start: 0;
    border-top: 0;
    margin-inline-start: var(--vst-space-xs);
    border-left: 1px solid var(--vst-color-bg-secondary);
  }

  .show-red-dot,
  .show-green-dot {
    position: relative;
    padding-inline-start: 1.75rem;
  }
  .show-red-dot__dot,
  .show-green-dot__dot {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: var(--vst-color-danger-ui);
    position: absolute;
    top: calc(50% - 0.25rem);
    left: 0.75rem;
  }

  .show-green-dot__dot {
    background-color: var(--vst-color-success-ui);
  }
`;var p=class extends c{static get properties(){return{heading:{type:String},direction:{type:String},view:{type:Object}}}constructor(){super();this.heading="",this.direction="vertical",this.view={}}_clickHandler(t){this.dispatchEvent(new CustomEvent("list-item-clicked",{detail:t.target.id}))}_switchHandler(t){let{detail:e=!1,target:{id:i}={}}=t,l=this.view.items.reduce((r,h)=>r.concat(h),[]).find(r=>r.id===i)||{},n=this.shadowRoot.getElementById(l.incompatibleSwitch);e&&n&&(n.checked=!1),this.dispatchEvent(new CustomEvent("list-switch-changed",{detail:[i,e]}))}_optionHandler(t){let e=t.target;this.dispatchEvent(new CustomEvent("list-item-option-selected",{detail:[e.id,e.value]}))}_renderImportFileItem(t){return s`
      <li class="listbox__item">
        <vst-ui-file-import
          accept="${t.accept}"
          ?disabled="${t.disabled}"
          @selected="${t.onselected}"
        >
          <div class="listbox__btn">${t.title}</div>
        </vst-ui-file-import>
      </li>
    `}_renderSwitchItem(t){return import("./vst-ui-switch-25R5ZOS4.js"),s`
      <li class="listbox__item">
        <vst-ui-switch
          class="listbox__switch"
          id="${t.id}"
          label="${t.title}"
          .checked="${t.checked}"
          ?disabled="${t.disabled}"
          @switch-changed="${this._switchHandler}"
        ></vst-ui-switch>
      </li>
    `}_renderActionItem(t){return s`
      <li class="listbox__item">
        <button
          class="listbox__btn ${t.className?t.className:""}"
          id="${t.id}"
          ?disabled="${t.disabled}"
          @click="${this._clickHandler}"
        >
          ${t.className&&(t.className==="show-red-dot"||t.className==="show-green-dot")?s`<span class="${t.className}__dot"></span>`:s``}
          ${t.renderIcon?s`${t.renderIcon()}`:""}
          <span>${t.title}</span>
        </button>
      </li>
    `}_renderSelectItem(t){let e=t.options.map(i=>s`
        <option value="${i.value}" ?selected="${t.selection===i.value}">
          ${i.text}
        </option>
      `);return s`
      <li class="listbox__item listbox__item--select">
        <label
          class="listbox__select-label ${t.disabled?"listbox__select-label--disabled":""}"
          for="${t.id}"
          >${t.title}</label
        >
        <select ?disabled="${t.disabled}" id="${t.id}" @input="${this._optionHandler}">
          ${e}
        </select>
      </li>
    `}_renderItem(t){let e;switch(t.type=t.type?t.type:"action",t.type){case"action":default:e=this._renderActionItem(t);break;case"text":e=s`<li class="listbox__item listbox__text">${t.title}</li>`;break;case"switch":e=this._renderSwitchItem(t);break;case"select":e=this._renderSelectItem(t);break;case"import":e=this._renderImportFileItem(t);break}return e}static get styles(){return[d,_]}render(){let t=o=>o.map(l=>this._renderItem(l)),e=this.view.items.map(o=>{let l;return Array.isArray(o)?l=s`
          <li class="listbox__group">
            <ul
              class="listbox__list ${this.direction==="horizontal"?"listbox__list--horizontal":""}"
            >
              ${t(o)}
            </ul>
          </li>
        `:l=this._renderItem(o),l}),i=this.heading?s`
          <header class="listbox__heading">
            <h2 class="overline">${this.heading}</h2>
          </header>
        `:"";return s`
      ${i}
      <nav>
        <ul
          class="listbox__list ${this.direction==="horizontal"?"listbox__list--horizontal":""}
                  ${Array.isArray(this.view.items[0])?"":"listbox__list--single"}"
        >
          ${e}
        </ul>
      </nav>
    `}};customElements.define("vst-ui-listbox",p);export{p as a};
