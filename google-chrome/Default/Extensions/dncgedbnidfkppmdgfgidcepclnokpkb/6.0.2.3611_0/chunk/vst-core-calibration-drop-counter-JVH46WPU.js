import"./chunk-VBADOMZ2.js";import{a as h}from"./chunk-NI4YDGN6.js";import{a as u}from"./chunk-JWPGNWQB.js";import{a as d}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import{a as b}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import"./chunk-4OSIXHXT.js";import"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as m}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as r,c,h as p}from"./chunk-BVG7RORO.js";import{b as n}from"./chunk-WFJOWCXF.js";import{c as e,d as o}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var v=r`
  ${b};
  ${h};
  .cal-tabs {
    --vst-ui-tabs--nav-margin: calc(var(--vst-space-l) * -1) calc(var(--vst-space-l) * -1)
      var(--vst-space-l);
    --vst-ui-tabs--nav-padding: 0 0 0 0;
  }

  .cal-steps__list {
    padding-inline-start: 1.3em;
    margin: 0;
  }

  .cal-steps__list-item {
    margin-block-end: var(--vst-space-l);
  }

  .cal-steps__volume-step {
    display: inline-flex;
  }

  .cal-steps__volume-input-wrapper {
    flex-shrink: 0;
    margin-inline-start: 1em;
  }

  .cal-steps__volume-input {
    display: inline-block;
    width: 4em;
  }

  .cal-equation {
    padding: 0;
  }

  .cal-equation__input-wrapper {
    display: flex;
    align-items: center;
    margin-block-start: 0.5em;
  }

  .cal-equation__label {
    flex-basis: 4.75rem;
    text-align: right;
    margin-inline-end: 0.5em;
  }

  .cal-output {
    background-color: var(--vst-color-bg-tertiary);
    color: var(--vst-color-fg-tertiary);
    pointer-events: none;
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    padding: var(--vst-space-xs);
    display: flex;
  }

  .cal-output__item {
    flex-grow: 0.2;
    font-variant-numeric: tabular-nums;
  }

  input {
    inline-size: 4rem;
  }

  fieldset {
    border: 0;
  }
`;var g=(a,t)=>a&&t?n("%0.2f",a/t):0,_=class extends d(p){static get properties(){return{sensor:{type:Object},calibration:{type:Object},sensorVoltage:{type:Number},mL:{type:Number},initialDropsPerMl:{type:Number},manualDropsPerMl:{type:Number},tabToOpen:{type:String}}}constructor(){super();this.sensor={},this.calibration={},this.sensorVoltage=0,this.mL=0,this.initialDropsPerMl=0,this.manualDropsPerMl=0,this.tabToOpen="automatic",this.eventBinder=new u}firstUpdated(){let[t,s]=this.requestServices(["dataCollection","deviceManager"]);this.manualDropInputEl=this.shadowRoot.querySelector("#drop_manual"),this.submitBtnEl=this.shadowRoot.querySelector("#apply"),this.tabsEl=this.shadowRoot.querySelector("#cal_tabs"),this.tabsEl.addEventListener("vst-ui-tab-set",this._tabSet.bind(this)),this.sensor&&(this.device=s.getDevice(this.sensor.deviceId),this.voltageHasComeIn=!1,t.enableLiveVoltage(!0),this.calibration=this.sensor.calibration,this.eventBinder.bindListeners({source:this.sensor,target:this,eventMap:{"live-voltage-changed":"onSensorLiveVoltageChanged"}}))}updated(t){t.forEach((s,i)=>{switch(i){case"calibration":this._calibrationChanged();break;default:break}})}_tabSet(t){this.tabToOpen=t.detail.activeTab.toLowerCase()}_userUpdatedDrops(t,s,i,f){if(f==="manual"){let l=o(i);return l&&l!==this.initialDropsPerMl&&l>0}return s&&t/s>0}_calibrationChanged(){setTimeout(()=>{this.initialDropsPerMl=n("%0.2f",1/this.calibration.coeffs[1]),this.manualDropInputEl.value=this.initialDropsPerMl},100)}_completeWorkflow(){this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}_cancelWorkflow(){this.dispatchEvent(new CustomEvent("cancel-workflow",{bubbles:!0,composed:!0}))}applyCalibration(){let t;this.tabToOpen==="manual"?t=[0,1/parseFloat(this.manualDropsPerMl)]:t=[0,1/parseFloat(g(this.sensorVoltage,this.mL))],this.onComponentSetDropCounterCalibration(t)}cancelCalibration(){this.onComponentCancelCalibration()}disconnectedCallback(){super.disconnectedCallback(),this.eventBinder.unbindAll(),this.tabsEl.removeEventListener("vst-ui-tab-set",this._tabSet.bind(this))}onComponentSetDropCounterCalibration(t){this.sensor.setCalibrationCoeffs(t).then(()=>{this._completeWorkflow()}).catch(s=>{console.error(s)})}onComponentCancelCalibration(){this._cancelWorkflow()}onSensorLiveVoltageChanged(t){this.voltageHasComeIn||(this.initialSensorVoltage=t,this.voltageHasComeIn=!0),this.sensorVoltage=t-this.initialSensorVoltage+1}_handleMlChange(t){this.mL=parseFloat(t.target.value)}_handleManualDropsPerMlChange(t){this.manualDropsPerMl=o(t.target.value)}static get styles(){return[m,v]}render(){return c`
      <vst-ui-tabs class="cal-tabs" id="cal_tabs">
        <vst-ui-tab slot="tabs" title="${e("Automatic")}" active>
          <div class="cal-steps" slot="tab">
            <ol class="cal-steps__list">
              <li class="body cal-steps__list-item">
                ${e("Add titrant dropwise through the Drop Counter into a 10 mL graduated cylinder.")}
              </li>
              <li class="body cal-steps__list-item">
                ${e("Stop adding drops when the volume reaches between 9 mL and 10 mL.")}
              </li>
              <li class="body cal-steps__list-item">
                <div class="cal-steps__volume-step">
                  <label for="cal_volume_input"
                    >${e("Enter the precise volume of titrant from the graduated cylinder")}:</label
                  >
                  <div class="cal-steps__volume-input-wrapper">
                    <input
                      id="cal_steps_volume_input"
                      type="number"
                      step="any"
                      margin="inline-end-2xs"
                      min="0"
                      value="${this.mL}"
                      @input="${this._handleMlChange}"
                    />
                    mL
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div class="cal-output" slot="tab">
            <p class="cal-output__item">${e("Drops")}: ${this.sensorVoltage}</p>
            <p class="cal-output__item">
              ${e("Drops/mL")}: ${g(this.sensorVoltage,this.mL)}
            </p>
          </div>
        </vst-ui-tab>

        <vst-ui-tab slot="tabs" id="manual" title="${e("Manual")}">
          <fieldset class="cal-equation" id="cal_equation_drop" slot="tab">
            <div class="cal-equation__input-wrapper">
              <label class="cal-equation__label" for="drop_manual">${e("Drops/mL")}</label>
              <input
                type="number"
                step="any"
                id="drop_manual"
                margin="block-end-3xs"
                min="0"
                value="${this.manualDropsPerMl}"
                @input="${this._handleManualDropsPerMlChange}"
              />
            </div>
          </fieldset>
        </vst-ui-tab>
      </vst-ui-tabs>

      <p class="caption" margin="block-start-m">
        ${e("New calibrations are used until you start a new experiment or open a file.")}
      </p>

      <div class="cal-action-bar">
        <button
          class="btn"
          variant="text"
          id="cancel"
          @click="${this.cancelCalibration}"
          type="button"
          margin="inline-end-xs"
        >
          ${e("Cancel")}
        </button>
        <button
          class="btn"
          @click="${this.applyCalibration}"
          type="button"
          id="apply"
          ?disabled="${!this._userUpdatedDrops(this.sensorVoltage,this.mL,this.manualDropsPerMl,this.tabToOpen)}"
        >
          ${e("Apply")}
        </button>
      </div>
    `}};customElements.define("vst-core-calibration-drop-counter",_);
