import{a as c}from"./chunk-R6LDBG7J.js";import{a as m}from"./chunk-JWPGNWQB.js";import{c as f}from"./chunk-TWAD4QJO.js";import"./chunk-IMQHRNK4.js";import{a as h}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import{a as u}from"./chunk-374UYNGS.js";import{f as o}from"./chunk-H5EO627A.js";import{w as p}from"./chunk-TB2MSUH5.js";import{c as g}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as n,c as i,h as v}from"./chunk-BVG7RORO.js";import{b as l,c as t}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var b=n`
  ${u}
  :host {
    user-select: text;
  }

  .definition-list {
    margin: var(--vst-size-xs);
    color: var(--vst-color-neutral);
  }
  .definition-list dd {
    margin-inline-start: 0.2rem;
  }

  .device-info-item {
    display: flex;
    padding: 0.625em 0.5em;
    border-bottom: 1px solid var(--vst-color-bg-primary);
    font-size: var(--vst-font-size-s);
  }
  .device-info-item .device-info-item-battery {
    /*  nested to win specificity over normal dd from definition-list mixin */
    display: inline-flex;
  }

  .device-info-item:last-of-type {
    border: 0;
  }

  .device-info-advanced {
    border-top: 1px solid #bdbebf;
    padding: 0.5rem 0;
  }
  .device-info-advanced summary {
    color: var(--vst-color-brand);
    display: inline-flex;
    align-items: center;
  }
  .device-info-advanced summary:focus {
    outline: none;
    /*  override real ugly chrome details outline styles */
    border-bottom: 1px dotted var(--vst-color-bg-primary);
    margin-block-end: 1px;
  }
  .device-info-advanced__form {
    display: grid;
    padding: 1rem;
    border: 1px solid var(--vst-color-bg-primary);
  }
  .device-info-advanced__attribute-list {
    margin: 0;
  }
  .device-info-advanced__attribute {
    display: grid;
    grid-template-columns: minmax(min-content, 8rem) minmax(min-content, 4rem) 1fr;
    grid-gap: 0.5rem;
    align-items: center;
    margin-block-end: 1rem;
  }
  .device-info-advanced__attribute-label {
    margin: 0;
  }
  .device-info-advanced__attribute-input {
    width: 7.1875rem;
  }

  ${o(n`.device-info-advanced__submit-btn`)}
  .device-info-advanced__submit-btn {
    justify-self: end;
  }

  ${o(n`.identify-btn`)}
  .identify-btn {
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0.5rem 0;
    border: none;
    color: var(--vst-color-bg-tertiary);
    background-color: var(--vst-color-brand);
  }

  .identify-btn:hover {
    background-color: var(--vst-color-brand-dark);
  }

  .identify-btn-text {
    color: var(--vst-color-neutral);
    font-size: var(--vst-font-size-m);
  }

  .identify-btn[is-identifying] {
    animation-name: flashing-light;
    animation-duration: 500ms;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes flashing-light {
    0% {
      background-color: var(--vst-color-warning);
    }
    33% {
      background-color: var(--vst-color-warning);
    }
    66% {
      background-color: var(--vst-color-brand);
    }
    100% {
      background-color: var(--vst-color-brand);
    }
  }

  .battery-icon {
    margin-inline-end: 0.125rem;
    margin-block-start: 0.1rem;
    width: 1.125rem;
    height: 1.125rem;
  }

  .gdx-sensor-map {
    max-inline-size: 30rem;
  }

  sup {
    font-size: 0.5em;
  }

  #data-logging-support {
    color: var(--vst-color-danger);
  }
  #data-logging-support.success {
    color: var(--vst-color-success);
  }
`;var $=r=>r.orderCode==="GDX-ODO",_=r=>r.type==="attrib-type-list",x=r=>r.type==="attrib-type-value",D=r=>r.type==="attrib-type-action",C=(r,e)=>r===e,y=class extends h(v){static get properties(){return{device:{type:Object},sensor:{type:Object},isIdentifying:{type:Boolean},gdxSensorMap:{type:String},manufactureDateStamp:{type:String},factoryCalibDateStamp:{type:String},hideGDXAttributes:{type:Boolean}}}constructor(){super();this.device={},this.sensor={},this.isIdentifying=!1,this.gdxSensorMap="",this.manufactureDateStamp="",this.factoryCalibDateStamp="",this.hideGDXAttributes=!1}firstUpdated(){[this.$deviceManager,this.$toast]=this.requestServices(["deviceManager","toast"]),this._fixTrademarks(),this.device.gdxMapVersion&&this._getGdxSensorMap();let e=l(),{manufactureDate:s,factoryCalibrationDate:a}=this.device;s&&(this.manufactureDateStamp=`${s.toLocaleDateString(e,{month:"long",year:"numeric"})}`),a&&(this.factoryCalibDateStamp=`${a.toLocaleDateString(e)}`),this.eventBinder=new m,this.eventBinder.bindListeners({source:this.device,target:this,eventMap:{"battery-changed":"onDeviceBatteryChanged","device-attributes-changed":"onDeviceAttributesChanged"}})}updated(e){e.has("device")&&this.device.battery&&import("./vst-ui-battery-KQ2LXMJE.js"),(e.has("hideGDXAttributes")||e.has("device"))&&this.device.hasDeviceAttributes&&!this.hideGDXAttributes&&import("./vst-ui-form-X4TYOKT2.js")}_fixTrademarks(){let e=this.shadowRoot.querySelector(".device-title");e.innerHTML=e.innerHTML.replace(/[™®]/g,"<sup>$&</sup>")}identifyDevice(){this.$deviceManager.identifyDevice(this.device.id),this.isIdentifying=!0,setTimeout(()=>{this.isIdentifying=!1},1e4)}async writeDeviceAttributes(){let e=this.device.deviceAttributes.map(a=>({attribID:parseFloat(a.id),value:parseFloat(a.value)})),s=()=>{this.$toast.makeToast(t("There was a problem saving the settings"))};try{await this.$deviceManager.writeDeviceAttributes(this.device.id,e),this.$toast.makeToast(t("Settings saved"))}catch(a){console.error(a),s()}}_findDeviceAttributeFromElement(e){return this.device.deviceAttributes.find(s=>s.id===parseInt(e.dataset.attributeId))}_checkElement(e,s){let a=this.device.orderCode,d=s;return a.length>8&&a.substring(0,8)==="GDX-CART"?e==="Position Direction"&&(d=s==="Forward"?t("Standard","sensormap"):t("Early 2021 carts only","sensormap")):d=t(s,"sensormap"),d}_deviceAttributeSelectChanged(e){let s=this._findDeviceAttributeFromElement(e.target);Array.from(e.target.querySelectorAll("option")).forEach(d=>{d.selected&&(s.value=s.elements.indexOf(d.value))})}_deviceAttributeInputChanged(e){let s=this._findDeviceAttributeFromElement(e.target);s.value=parseFloat(e.target.value)}_deviceAttributeCheckboxChanged(e){let s=this._findDeviceAttributeFromElement(e.target);s.value=e.target.checked?1:0}onDeviceBatteryChanged(){let e=this.$deviceManager.getDevice(this.device.id);this.device=e,this.requestUpdate()}onDeviceAttributesChanged(){this.device=this.$deviceManager.getDevice(this.device.id),this.requestUpdate()}async _getGdxSensorMap(){try{let e=await this.$deviceManager.getGdxSensorMap(this.device.id);this.gdxSensorMap=e.map}catch(e){console.error(e)}}static get styles(){return[g,b]}render(){return i`
      <h2 class="device-title heading" size="l" margin="block-end-xs">
        ${t(this.device.productName,"sensormap")}
      </h2>
      ${this.device.canIdentify?i`
            <button
              class="identify-btn btn"
              @click="${this.identifyDevice}"
              ?is-identifying="${this.isIdentifying}"
              data-deviceid="${this.device.id}"
            >
              <!-- light bulb icon -->
              <vst-ui-icon
                .icon="${p}"
                class="identify-btn-bulb"
                color="var(--vst-color-bg-tertiary)"
              ></vst-ui-icon>
              ${i`${t("Identify")}`}
            </button>
            ${this.isIdentifying?i`<p class="identify-btn-text">${t("Check sensor for flashing LED")}</p>`:""}
          `:""}
      <dl class="definition-list">
        ${this.device.orderCode?i`
              <div class="device-info-item">
                <dt>${t("Order Code")}</dt>
                <dd>${this.device.orderCode}</dd>
              </div>
            `:""}
        ${this.device.serialNumber?i`
              <div class="device-info-item">
                <dt>${t("ID")}</dt>
                <dd>${this.device.serialNumber}</dd>
              </div>
            `:""}
        ${this.device.battery&&this.device.battery.percent?i`
              <div class="device-info-item">
                <dt>${t("Battery Level")}</dt>
                <dd class="device-info-item-battery">
                  <vst-ui-battery
                    class="battery-icon"
                    ?charging="${this.device.battery.charging}"
                    .percent="${this.device.battery.percent}"
                  ></vst-ui-battery>
                  ${this.device.battery.charging?i` <span>${t("Charging,")}&nbsp;</span> `:""}
                  <span>${this.device.battery.percent}%</span>
                </dd>
              </div>
            `:""}
        ${c(f("ff-enable-logging"),()=>i`
            <div class="device-info-item">
              <dt>${t("Remote Logging")}</dt>
              <dd
                id="data-logging-support"
                class=${this.device.supportsOfflineCollection?"success":""}
              >
                ${c(this.device.supportsOfflineCollection,()=>i`
                    <svg
                      id="remote-logging-capable-icon"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style="vertical-align: -1px;"
                    >
                      <path
                        d="M12.0297 0.341164C5.60693 0.341164 0.400497 5.54759 0.400497 11.9703C0.400497 18.3931 5.60693 23.5995 12.0297 23.5995C18.4524 23.5995 23.6588 18.3931 23.6588 11.9703C23.644 5.54759 18.4524 0.341164 12.0297 0.341164ZM12.178 21.0185C7.17924 21.0185 3.12979 16.9691 3.12979 11.9703C3.12979 6.97157 7.17924 2.92213 12.178 2.92213C17.1768 2.92213 21.2262 6.97157 21.2262 11.9703C21.2262 16.9691 17.1768 21.0185 12.178 21.0185Z"
                        fill="var(--vst-color-success)"
                      />
                      <path
                        d="M13.5871 5.91842H10.665V12.9938L7.49073 9.81953L7.44623 12.9938L12.1187 17.7553L16.8059 12.9938L16.7169 9.90853L13.5871 12.9938V5.91842Z"
                        fill="var(--vst-color-success)"
                      />
                    </svg>

                    ${t("Capable")}
                  `,()=>t("Not Capable"))}
              </dd>
            </div>
          `)}
        ${this.device.firmware&&this.device.firmware.primary?i`
              <div class="device-info-item">
                <dt>${t("Firmware")}</dt>
                <dd>
                  ${this.device.firmware.primary?i` ${t("Primary:")} ${this.device.firmware.primary} `:""}
                  ${this.device.firmware.secondary?i` ${t("Secondary:")} ${this.device.firmware.secondary} `:""}
                </dd>
              </div>
            `:""}
        ${this.manufactureDateStamp?i`
              <div class="device-info-item">
                <dt>${t("Manufacture Date")}</dt>
                <dd>${this.manufactureDateStamp}</dd>
              </div>
            `:""}
        ${this.factoryCalibDateStamp&&this.device.hasFactoryCalibration?i`
              <div class="device-info-item">
                <dt>${t("Factory Calibration Date")}</dt>
                <dd>${this.factoryCalibDateStamp}</dd>
              </div>
            `:""}
        ${this.device.gdxMapVersion?i`
              <div class="device-info-item">
                <dt>${t("GDX Sensor Map")}</dt>
                <dd>
                  <details id="gdx_sensor_map" variant="arrow">
                    <summary>${t("Version")} ${this.device.gdxMapVersion}</summary>
                    <p>${this.gdxSensorMap}</p>
                  </details>
                </dd>
              </div>
            `:""}
      </dl>

      ${this.device.hasDeviceAttributes&&!this.hideGDXAttributes?i`
            <details id="device_info_advanced" variant="arrow">
              <summary class="device-info-advanced__summary overline" margin="block-end-2xs">
                ${t("Advanced")}
              </summary>
              <div>
                ${$(this.device)?i`
                      <p>
                        <strong
                          >${t("It is strongly recommended that a calibration is performed after a cap change.")}</strong
                        >
                      </p>
                    `:""}

                <vst-ui-form @submit="${this.writeDeviceAttributes}">
                  <form class="device-info-advanced__form">
                    <ul class="device-info-advanced__attribute-list">
                      ${this.device.deviceAttributes.map(e=>i`
                          ${e.visible?i`
                                <li class="device-info-advanced__attribute">
                                  <label class="label" for="attribute_${e.id}"
                                    >${t(e.description,"sensormap")}</label
                                  >

                                  ${_(e)?i`
                                        <select
                                          id="attribute_${e.id}"
                                          data-attribute-id="${e.id}"
                                          ?disabled="${!e.writable}"
                                          @change="${this._deviceAttributeSelectChanged}"
                                        >
                                          ${e.elements.map((s,a)=>i`
                                              <option
                                                .value="${s}"
                                                ?selected="${C(e.value,a)}"
                                                >${this._checkElement(e.description,s)}</option
                                              >
                                                ${s}
                                              </option>
                                            `)}
                                        </select>
                                      `:""}
                                  ${x(e)?i`
                                        <input
                                          class="device-info-advanced__attribute-input"
                                          id="attribute_${e.id}"
                                          data-attribute-id="${e.id}"
                                          type="number"
                                          step="any"
                                          .value="${e.value}"
                                          min="${e.min}"
                                          max="${e.max}"
                                          ?disabled="${!e.writable}"
                                          @change="${this._deviceAttributeInputChanged}"
                                        />
                                      `:""}
                                  ${D(e)?i`
                                        <div class="checkbox-group">
                                          <div class="checkbox">
                                            <input
                                              type="checkbox"
                                              .checked="${e.value}"
                                              @change="${this._deviceAttributeCheckboxChanged}"
                                              id="attribute_${e.id}"
                                              data-attribute-id="${e.id}"
                                              ?disabled="${!e.writable}"
                                            />
                                            <span class="check"></span>
                                          </div>
                                          ${e.units?i` <span>${e.units}</span> `:""}
                                        </div>
                                      `:""}
                                </li>
                              `:""}
                        `)}
                    </ul>
                    <button type="submit" class="device-info-advanced__submit-btn">
                      ${t("Save")}
                    </button>
                  </form>
                </vst-ui-form>
              </div>
            </details>
          `:""}
    `}};customElements.define("vst-core-device-info",y);
