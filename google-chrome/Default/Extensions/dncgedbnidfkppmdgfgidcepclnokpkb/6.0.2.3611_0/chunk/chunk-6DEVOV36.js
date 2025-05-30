import{c as l}from"./chunk-TWAD4QJO.js";import{a as h}from"./chunk-H5EO627A.js";import{v as c}from"./chunk-TB2MSUH5.js";import{c as d}from"./chunk-CRHRJPRJ.js";import{b as n,c as e,h as a}from"./chunk-BVG7RORO.js";import{c as o}from"./chunk-LI3RKPGW.js";var v=n`
  :host {
    background-color: var(--vst-color-bg);
    display: block;
  }

  .sensor-header {
    height: auto;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-xs) var(--vst-space-s);
    padding-inline-end: var(--vst-space-xs);
  }

  .overline {
    font-size: var(--vst-font-size-s);
  }

  .btn[variant='icon'] {
    display: flex;
    align-items: center;
    border-radius: var(--vst-radius);
    border: 0;
    background-color: transparent;
  }

  .btn[variant='icon']:hover {
    background: var(--vst-color-bg-secondary);
  }

  .sensor-header__info-btn:hover .sensor-header__info-icon {
    --vst-ui-icon-color: var(--vst-color-brand-dark);
  }

  .sensor-header__info-icon {
    --vst-ui-icon-color: var(--vst-color-brand);
  }

  .device-accessories {
    font-size: var(--vst-font-size-xs);
    color: var(--vst-color-fg-tertiary);
    margin: 0;
    padding-inline-start: 1.25rem;
    list-style-type: none;
  }

  ${h(n`.device-accessories__btn`)}
  .device-accessories__btn {
    line-height: 1em;
    min-inline-size: 9em;
  }

  .battery-alert {
    display: flex;
    align-items: center;
    padding: 0.5625rem;
  }

  .battery-alert__icon {
    margin-inline-end: 0.125rem;
    margin-block-end: 0.1rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`;var p=class extends a{static get properties(){return{header:{type:Object},sensorActions:{type:Array},battery:{type:Object},batteryIndicatorColor:{type:String},deviceAccessories:{type:Array}}}constructor(){super();this.header={},this.sensorActions=[],this.battery={},this.batteryIndicatorColor="",this.deviceAccessories=[]}firstUpdated(){this.ffSmartFan=l("ff-smart-fan"),setTimeout(()=>{this.batteryAlert&&(this.batteryIndicatorColor=this.shadowRoot.querySelector("vst-ui-battery").getIndicatorColor(this.battery.percent))})}showInfo(){this.dispatchEvent(new CustomEvent("show-sensor-info",{bubbles:!0,composed:!0}))}onAccessoryButtonClick(t){this.dispatchEvent(new CustomEvent("accessory-button-hit",{detail:t.target.id}))}onListItemClicked(t){let s=t.detail;this.sensorActions.find(i=>i.id===s).selectAction(),this.dispatchEvent(new CustomEvent("complete-workflow"))}onListSwitchChanged({detail:t}){let[s,i]=t;this.sensorActions.find(r=>r.id===s).checkedChanged(i)}onListOptionSelected({detail:t}){let[s,i]=t;this.sensorActions.find(r=>r.id===s).selectionChanged(i)}static get styles(){return[d,v]}render(){return e`
      ${this.battery&&this.battery.percent<20?e`
            <div class="battery-alert">
              <vst-ui-battery
                class="battery-alert__icon"
                ?charging="${this.battery.charging}"
                percent="${this.battery.percent}"
              ></vst-ui-battery>
              <span style="color: ${this.batteryIndicatorColor}"
                >${this.battery.percent}% ${o("Battery")}</span
              >
            </div>
          `:""}
      ${this.header?e`
            <header class="sensor-header">
              <div class="stack" gap="2xs">
                ${this.header.title?e` <h2 class="overline" margin="0">${this.header.title}</h2> `:""}
                ${this.header.subtitle?e` <p class="caption">${this.header.subtitle}</p> `:""}
                ${this.ffSmartFan&&this.deviceAccessories.length?e`
                      <p class="sensor-header__subtitle">${o("Accessories")}:</p>
                      <ul class="device-accessories">
                        ${this.deviceAccessories.map(t=>e`
                            <li>
                              <button
                                id="${t.id}"
                                class="device-accessories__btn"
                                type="button"
                                @click="${this.onAccessoryButtonClick}"
                              >
                                ${t.title}
                              </button>
                            </li>
                          `)}
                      </ul>
                    `:""}
              </div>
              ${this.header.hasInfo?e`
                    <vst-style-tooltip>
                      <button
                        class="btn"
                        variant="icon"
                        size="xs"
                        margin="inline-start-2xs"
                        id="sensor_info_btn"
                        type="button"
                        @click="${this.showInfo}"
                      >
                        <vst-ui-icon
                          class="sensor-header__info-icon"
                          color="var(--vst-color-brand)"
                          .icon="${c}"
                        ></vst-ui-icon>
                      </button>
                      <span role="tooltip" position="block-start-end"
                        >${o("Device information")}</span
                      >
                    </vst-style-tooltip>
                  `:""}
            </header>
          `:""}
      ${this.sensorActions?e`
            <vst-ui-listbox
              id="listbox"
              .view="${{items:this.sensorActions}}"
              @list-item-clicked="${this.onListItemClicked}"
              @list-switch-changed="${this.onListSwitchChanged}"
              @list-item-option-selected="${this.onListOptionSelected}"
            >
            </vst-ui-listbox>
          `:""}
    `}};customElements.define("vst-core-sensor-actions",p);
