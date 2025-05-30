import{a as n}from"./chunk-H5EO627A.js";import{c as o}from"./chunk-CRHRJPRJ.js";import{b as i,c as a,h as r}from"./chunk-BVG7RORO.js";var l=i`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;var v=class extends r{static get properties(){return{title:{type:String},active:{type:Boolean,reflect:!0},proMessage:{type:String,reflect:!0,attribute:"pro-message"}}}constructor(){super();this.title="",this.active=!1,this.proMessage=""}static get styles(){return[o,l]}render(){return a`
      <div class="tab" pro-message=${this.proMessage}>
        <slot name="tab"></slot>
      </div>
    `}};customElements.define("vst-ui-tab",v);var b=i`
  :host {
    --vst-ui-tabs--nav-margin: 0 0 1rem 0;
    --vst-ui-tabs--nav-padding: 0;
  }

  .tabs__nav {
    background-color: var(--vst-color-bg-tertiary);
    margin: var(--vst-ui-tabs--nav-margin);
    padding: var(--vst-ui-tabs--nav-padding);
    border-radius: var(--vst-radius);
    border: 1px solid var(--vst-color-bg-secondary);
  }

  .tabs__nav-list {
    margin: 0;
    display: flex;
  }

  .tabs__nav-list-item {
    flex: 1;
    text-align: center;
  }

  ${n(i`.tabs__nav-btn`)}
  .tabs__nav-btn {
    background: transparent;
    margin-block-end: 0;
    border: 0;
    white-space: nowrap;
    padding: var(--vst-space-xs) var(--vst-space-m) calc(var(--vst-space-xs) - 0.1875rem)
      var(--vst-space-m);
    border-bottom: 0.1875rem solid transparent;
    width: 100%;
  }

  .tabs__nav-btn:focus {
    --vst-outline-offset: 0px;
  }

  .tabs__nav-list-item:first-of-type .tabs__nav-btn {
    border-radius: var(--vst-radius) 0 0 var(--vst-radius);
  }

  .tabs__nav-list-item:last-of-type .tabs__nav-btn {
    border-radius: 0 var(--vst-radius) var(--vst-radius) 0;
  }

  .tabs__nav-btn:focus,
  .tabs__nav-btn:hover {
    outline: 0;
    color: var(--vst-color-brand);
  }
  .tabs__nav-btn[active] {
    border-bottom-color: var(--vst-color-brand);
  }

  .tabs__panes {
    overflow: auto;
  }
`;var c=class extends r{static get properties(){return{tabs:{type:Array},activeTab:{type:Number,reflect:!0,attribute:"active-tab"},showTabPreview:{type:Boolean}}}constructor(){super();this.tabs=[],this.activeTab=0,this.showTabPreview=!1}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.tabEls=this.querySelectorAll("vst-ui-tab"),this.tabEls.forEach((t,s)=>{this.tabs.push({title:t.title,id:t.id,active:t.active,proMessage:t.proMessage}),t.active&&(this.activeTab=s)}),this.setTab(this.activeTab)}updated(t){t&&t.has("activeTab")&&this.setTab(this.activeTab)}setTab(t){this.tabEls.forEach((s,e)=>{s.active=e===t,this.tabs[e].active=e===t}),this.requestUpdate(),this.dispatchEvent(new CustomEvent("vst-ui-tab-set",{detail:{activeTab:this.tabs[t].id}}))}_tabClicked(t){this.activeTab=parseInt(t.target.dataset.tabIndex,0)}_toggleTabPreview(){this.showTabPreview=!this.showTabPreview}static get styles(){return[o,b]}render(){let t=this.tabs.map((s,e)=>a`
        <li class="tabs__nav-list-item">
          ${s.proMessage?a`<vst-ui-dropdown
                variant="pro"
                position="bottom-right"
                ?open="${this.showTabPreview}"
                @closed="${this._toggleTabPreview}"
              >
                <button
                  slot="anchor"
                  class="tabs__nav-btn overline"
                  type="button"
                  data-tab-index="${e}"
                  @click="${this._toggleTabPreview}"
                >
                  ${s.title}
                </button>
                <p class="body" slot="content" margin="0">
                  ${s.proMessage}
                  <vst-ui-pro-info></vst-ui-pro-info>
                </p>
              </vst-ui-dropdown>`:a` <button
                class="tabs__nav-btn overline"
                id="tabs_nav_btn_${s.title}"
                type="button"
                data-tab-index="${e}"
                @click="${this._tabClicked}"
                ?active="${s.active}"
              >
                ${s.title}
              </button>`}
        </li>
      `);return a`
      <div class="tabs">
        <nav class="tabs__nav">
          <ul class="tabs__nav-list">
            ${t}
          </ul>
        </nav>
        <div class="tabs__panes">
          <slot name="tabs"></slot>
        </div>
      </div>
    `}};customElements.define("vst-ui-tabs",c);
