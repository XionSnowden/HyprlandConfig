import"./chunk-VBADOMZ2.js";import{a as _}from"./chunk-NI4YDGN6.js";import"./chunk-YDEDSSMD.js";import{a as h}from"./chunk-JWPGNWQB.js";import{a as b}from"./chunk-NNBWZ6HI.js";import{a as u}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import{a as m}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import"./chunk-4OSIXHXT.js";import"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as f}from"./chunk-CRHRJPRJ.js";import{a as c}from"./chunk-OTWO5H3C.js";import{b as o,c as l,h as p}from"./chunk-BVG7RORO.js";import{a as n,b as d}from"./chunk-WFJOWCXF.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var g=o`
  ${m};
  ${_};
  .tabs {
    --vst-ui-tabs--nav-margin: calc(var(--vst-space-l) * -1) calc(var(--vst-space-l) * -1)
      var(--vst-space-l);
    --vst-ui-tabs--nav-padding: 0 0 0 var(--vst-space-l);
  }

  /* we want to show voltage on disabled fieldsets, unlike gdx's rsr */
  .cal-keeps__fieldset[disabled] .cal-rsr {
    opacity: 1;
  }

  .cal-keeps__submit {
    margin-block-start: var(--vst-space-xs);
  }
  .cal-equation {
    padding: 0;
    display: none;
  }
  .cal-equation.active {
    display: block;
  }
  .cal-equation__input-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-block-start: var(--vst-space-s);
  }
  ${c("s",o`
      .cal-equation__input-group {
        margin-inline-start: 5%;
      }
    `)}
  .cal-equation__label {
    margin-inline-end: var(--vst-space-s);
  }
  .cal-equation__input-wrapper {
    display: flex;
    align-items: center;
  }
  .cal-equation__input-wrapper input {
    min-inline-size: 8ch;
    max-inline-size: 12ch;
    flex: 8ch 1 1;
    margin-inline-end: var(--vst-space-xs);
  }
  .cal-equation__input-wrapper sup {
    display: inline-block;
  }

  .cal-equation__input {
    inline-size: 8rem;
  }

  p {
    text-align: center;
  }

  ${c("s",o`
      p {
        text-align: start;
      }
    `)}
`;var v=a=>{let t="",i=Math.abs(a);return i===0?t=n("%.1f",a):i>1e4||i<1e-4?t=n("%e",a):t=n("%g",a),b.checkNegativeZero(a,t)},y=(a,t)=>{let i=!1;return(t&&a===0||!t&&a===0)&&(i=!0),i},C=class extends u(p){static get properties(){return{sensor:{type:Object},calibration:{type:Object},sensorVoltage:{type:Number},formattedCoeff1:{type:String,readOnly:!1},formattedCoeff0:{type:String,readOnly:!1},keepPhase:{type:Number,reflect:!0},isOnePointCal:{type:Boolean},saveCalToSensor:{type:Boolean}}}constructor(){super();this.sensor={},this.calibration={},this.sensorVoltage=null,this.formattedCoeff0="0.0",this.formattedCoeff1="0.0",this.keepPhase=1,this.isOnePointCal=!1,this.saveCalToSensor=!1,this.eventBinder=new h}firstUpdated(){this.requestService("dataCollection").enableLiveVoltage(!0),this.sensorVoltage=null,this.trimmedSensorVoltage=0,this.updateSensorVoltage=!0,this.voltage1=null,this.calForm1El=this.shadowRoot.querySelector("#cal_form_1"),this.calForm2El=this.shadowRoot.querySelector("#cal_form_2"),this.calInput1El=this.shadowRoot.querySelector("#cal_input_1"),this.calInput2El=this.shadowRoot.querySelector("#cal_input_2"),this.calibrationPaneEl=this.shadowRoot.querySelector("#calibration"),this.calErrorEl=this.shadowRoot.querySelector("#cal_error"),this.calErrorMsg="",this.calSubmit1El=this.shadowRoot.querySelector("#cal_submit_1"),this.submitBtnEl=this.shadowRoot.querySelector("#apply"),this.voltage1El=this.shadowRoot.querySelector("#voltage1"),this.voltage2El=this.shadowRoot.querySelector("#voltage2"),this.liveVoltageEl=this.voltage1El,this.calSubmit1El.disabled=!0,this.sensor&&(this.calibration=this.sensor.calibration,this.eventBinder.bindListeners({source:this.sensor,target:this,eventMap:{"live-voltage-changed":"onSensorLiveVoltageChanged"}}))}disconnectedCallback(){super.disconnectedCallback(),this.eventBinder.unbindAll()}updated(t){t.forEach((i,s)=>{s==="calibration"?this.calibrationChanged():s==="sensorVoltage"?this.sensorVoltageChanged():s==="keepPhase"?this._keepPhaseChanged():s==="isOnePointCal"&&this._isOnePointCalChanged()})}submitCal1(t){t.preventDefault(),this.sensorVoltage&&(this.pointPair1=[this.sensorVoltage,parseFloat(this.calInput1El.value)],this.keptVoltage1=`${this.trimmedSensorVoltage} V`,this.isOnePointCal?(this.onComponentSubmitPoints([this.pointPair1]),this.showCalibrationError(!1),this.keepPhase=0,this.submitBtnFocus()):this.keepPhase=2)}submitCal2(t){t.preventDefault(),this.sensorVoltage&&(this.pointPair2=[this.sensorVoltage,parseFloat(this.calInput2El.value)],Math.abs(this.pointPair1[0]-this.pointPair2[0])<.05?(this.showCalibrationError(e("Second calibration point sensor voltage must differ from the first point by at least 0.05 V.")),this.keepPhase=1):this.pointPair1[1]===this.pointPair2[1]?(this.showCalibrationError(e("Known values must be different for a two point calibration.")),this.keepPhase=1):(this.onComponentSubmitPoints([this.pointPair1,this.pointPair2]),this.keepPhase=0,this.showCalibrationError(!1),this.submitBtnFocus()))}_keepPhaseChanged(){this.calForm1El&&(this.keepPhase===0?(this._enableDisableForms(!0),this.updateSensorVoltage=!1,this.liveVoltageEl=null):this.keepPhase===1?(this._enableDisableForms(),this.calInput2El.value="",this.pointPair2=null,this.voltage1=null,this.updateSensorVoltage=!0,this.liveVoltageEl=this.voltage1El):this.keepPhase===2&&(this._enableDisableForms(),this.voltage1El.innerText=this.keptVoltage1,this.voltage2El.innerText=this.keptVoltage1,this.updateSensorVoltage=!0,this.liveVoltageEl=this.voltage2El))}_enableDisableForms(t){this.shadowRoot.querySelectorAll(".cal-keeps__fieldset").forEach((s,r)=>{!t&&r+1===this.keepPhase?(s.disabled=!1,s.querySelector(".cal-keeps__input").focus()):s.disabled=!0})}showCalibrationError(t){t?this.calErrorMsg=t:this.calErrorMsg=!1}_isOnePointCalChanged(){this.isOnePointCal?this.pointPair1?(this.keepPhase=0,this.showCalibrationError(!1),this.submitBtnFocus(),this.onComponentSubmitPoints([this.pointPair1])):this.keepPhase=1:this.pointPair1&&this.pointPair2?this.submitBtnFocus():this.pointPair1&&!this.pointPair2?this.keepPhase=2:this.keepPhase=1}selectedCalChanged(t){Array.from(t.target.querySelectorAll("option")).forEach(s=>{s.selected&&(this.isOnePointCal=s.value==="one_point")}),this.keepPhase=1}sensorVoltageChanged(){this.sensorVoltage&&(this.calSubmit1El.disabled=!1,this.updateSensorVoltage&&(this.trimmedSensorVoltage=d(this.sensor.liveVoltageFormatStr,this.sensorVoltage),this.liveVoltageEl.innerText=`${this.trimmedSensorVoltage} V`))}calibrationChanged(){let t=this.shadowRoot.querySelectorAll(".cal-equation"),i=t.length;this.formattedCoeff0=v(this.calibration.coeffs[0]),this.formattedCoeff1=v(this.calibration.coeffs[1]);for(let s=0;s<i;++s){let r=t[s].id.replace("cal_equation_","");this.calibration.type===r.toString()?t[s].classList.add("active"):t[s].classList.remove("active")}}_handedFormattedCoeff0Changed(t){t.target.validity.valid&&(this.formattedCoeff0=t.target.value,this.coeffsUpdated())}_handedFormattedCoeff1Changed(t){t.target.validity.valid&&(this.formattedCoeff1=t.target.value,this.coeffsUpdated())}coeffsUpdated(){setTimeout(()=>{this.calibration.coeffs[0]=this.formattedCoeff0,this.calibration.coeffs[1]=this.formattedCoeff1,this.enableApplyCalibration(!0)})}submitBtnFocus(){setTimeout(()=>{this.submitBtnEl.focus()},10)}_completeWorkflow(){this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}_cancelWorkflow(){this.dispatchEvent(new CustomEvent("cancel-workflow",{bubbles:!0,composed:!0}))}enableApplyCalibration(t){this.submitBtnEl.disabled=!t}applyCalibration(){this.onComponentSetCalibration()}resetFactoryCalibration(){this.onComponentResetCalibration()}cancelCalibration(){this.onComponentCancelCalibration()}onComponentSubmitPoints(t){this.sensor.calculateCalibrationCoeffs(t).then(i=>{this.calibration.coeffs=i.coeffs,this.calibrationChanged()}).catch(i=>{console.error(i)})}onComponentSetCalibration(){let t=[parseFloat(this.calibration.coeffs[0]),parseFloat(this.calibration.coeffs[1])];this.sensor.setCalibrationCoeffs(t).then(()=>{this._completeWorkflow()}).catch(i=>{console.error(i)})}onComponentResetCalibration(){console.log("RESET FACTORY CALIBRATION HERE - TODO: make this work.")}onComponentCancelCalibration(){this._cancelWorkflow()}onSensorLiveVoltageChanged(t){this.sensorVoltage=t}static get styles(){return[f,g]}render(){return l`
      <vst-ui-tabs class="cal-tabs">
        <vst-ui-tab slot="tabs" .title="${e("Calibrate")}" active>
          <div slot="tab">
            ${this.sensor.canOnePointCalibrate?l`
                  <div class="cal-point-options">
                    <label class="cal-point-options__label" for="cal_point_options">
                      <span>${e("Perform a")}</span>
                      <select
                        margin="s-inline-start-xs"
                        id="cal_point_options"
                        @change="${this.selectedCalChanged}"
                      >
                        <option value="one_point">${e("One-point calibration")}</option>
                        <option value="two_point" selected>
                          ${e("Two-point calibration")}
                        </option>
                      </select>
                    </label>
                  </div>
                `:""}

            <div class="cal-keeps" id="cal_forms">
              <vst-ui-form @submit="${this.submitCal1}">
                <form class="cal-keeps__form" id="cal_form_1">
                  <fieldset class="cal-keeps__fieldset">
                    <div class="cal-keeps__fieldset-container">
                      <label class="cal-keeps__label" for="cal_input_1">
                        <span class="cal-keeps__label-description"
                          >${e("Enter first known value")}:</span
                        >
                      </label>
                      <div class="cal-keeps__input-wrapper">
                        <span
                          class="cal-keeps__input-wrapper--inner"
                          margin="s-inline-end-s block-end-m"
                        >
                          <input
                            class="cal-keeps__input"
                            type="number"
                            step="any"
                            id="cal_input_1"
                            required
                          />
                          <span class="cal-keeps__units" margin="inline-start-xs"
                            >${this.sensor.units}</span
                          >
                        </span>
                        <button class="btn" margin="block-end-m" type="submit" id="cal_submit_1">
                          ${e("Keep")}
                        </button>
                      </div>
                    </div>
                    <p class="cal-rsr">${e("Voltage")}: <span id="voltage1"></span></p>
                  </fieldset>
                </form>
              </vst-ui-form>

              ${this.isOnePointCal?"":l`
                    <vst-ui-form @submit="${this.submitCal2}">
                      <form class="cal-keeps__form" id="cal_form_2">
                        <fieldset class="cal-keeps__fieldset" disabled>
                          <div class="cal-keeps__fieldset-container">
                            <label class="cal-keeps__label" for="cal_input_2">
                              <span class="cal-keeps__label-description"
                                >${e("Enter second known value")}:</span
                              >
                            </label>
                            <div class="cal-keeps__input-wrapper">
                              <span
                                class="cal-keeps__input-wrapper--inner"
                                margin="s-inline-end-s block-end-m"
                              >
                                <input
                                  class="cal-keeps__input"
                                  type="number"
                                  step="any"
                                  id="cal_input_2"
                                  required
                                />
                                <span class="cal-keeps__units" margin="inline-start-xs"
                                  >${this.sensor.units}</span
                                >
                              </span>
                              <button
                                class="btn"
                                margin="block-end-m"
                                id="cal_submit_2"
                                type="submit"
                              >
                                ${e("Keep")}
                              </button>
                            </div>
                          </div>
                          <p class="cal-rsr">
                            ${e("Voltage")}:
                            <span id="voltage2"></span>
                          </p>
                        </fieldset>
                      </form>
                    </vst-ui-form>
                  `}
            </div>

            <p class="caption" color="danger" id="cal_error" ?hidden="${!this.calErrorMsg}">
              ${this.calErrorMsg}
            </p>
          </div>
        </vst-ui-tab>

        <vst-ui-tab slot="tabs" .title="${e("Equation")}">
          <div slot="tab">
            <vst-ui-form @submit="${this.applyCalibration}">
              <form>
                <fieldset class="cal-equation" id="cal_equation_linear">
                  <h3 class="heading" size="m" margin="block-end-xs">
                    ${e("Calibration Type")}:
                    <span>${e("Linear","mathematical","calibration type")}</span>
                  </h3>
                  <p class="caption">
                    ${e("Reported Reading")} = ${e("Slope")} *
                    ${e("Sensor Voltage")} + ${e("Intercept")}
                  </p>
                  <div class="cal-equation__input-group">
                    <label class="cal-equation__label" for="linear_slope"
                      >${e("Slope","mathematical")}:</label
                    >
                    <span class="cal-equation__input-wrapper">
                      <input
                        type="number"
                        step="any"
                        id="linear_slope"
                        value="${this.formattedCoeff1}"
                        @input="${this._handedFormattedCoeff1Changed}"
                      />
                      <span
                        ><span>V<sup>-1</sup></span
                        ><span>⋅${this.sensor.units}</span></span
                      >
                    </span>
                  </div>
                  <div class="cal-equation__input-group">
                    <label class="cal-equation__label" for="intercept"
                      >${e("Intercept")}:</label
                    >
                    <span class="cal-equation__input-wrapper">
                      <input
                        type="number"
                        step="any"
                        id="intercept"
                        value="${this.formattedCoeff0}"
                        @input="${this._handedFormattedCoeff0Changed}"
                      />
                      <span>${this.sensor.units}</span>
                    </span>
                  </div>
                </fieldset>

                <fieldset class="cal-equation" id="cal_equation_power">
                  <h3 class="heading" size="m" margin="block-end-xs">
                    ${e("Calibration Type")}:
                    <span>${e("Power","mathematical","calibration type")}</span>
                  </h3>
                  <p>
                    ${e("Reported Reading")} = ${e("Coefficient")} *
                    ${e("Sensor Voltage")}^${e("Exponent")}
                  </p>
                  <div class="cal-equation__input-group">
                    <label class="cal-equation__label" for="power_coefficient"
                      >${e("Coefficient")}</label
                    >
                    <input
                      class="cal-equation__input"
                      type="number"
                      step="any"
                      id="power_coefficient"
                      value="${this.formattedCoeff0}"
                      @input="${this._handedFormattedCoeff0Changed}"
                    />
                  </div>
                  <div class="cal-equation__input-group">
                    <label class="cal-equation__label" for="power_exponent"
                      >${e("Exponent")}</label
                    >
                    <input
                      class="cal-equation__input"
                      type="number"
                      step="any"
                      id="power_exponent"
                      value="${this.formattedCoeff1}"
                      @input="${this._handedFormattedCoeff1Changed}"
                    />
                  </div>
                </fieldset>

                <fieldset class="cal-equation" id="cal_equation_modifiedpower">
                  <h3 class="heading" size="m" margin="block-end-xs">
                    ${e("Calibration Type")}:
                    <span>${e("Modified Power","mathematical","calibration type")}</span>
                  </h3>
                  <p>
                    ${e("Reported Reading")} = ${e("Coefficient")} *
                    ${e("Base")}^${e("Sensor Voltage")}
                  </p>
                  <div class="cal-equation__input-group">
                    <label class="cal-equation__label" for="modifiedpower_base"
                      >${e("Base")}</label
                    >
                    <input
                      class="cal-equation__input"
                      type="number"
                      step="any"
                      id="modifiedpower_base"
                      value="${this.formattedCoeff1}"
                      @input="${this._handedFormattedCoeff1Changed}"
                    />
                  </div>
                  <div class="cal-equation__input-group">
                    <label class="cal-equation__label" for="modifiedpower_coefficient"
                      >${e("Coefficient")}</label
                    >
                    <input
                      class="cal-equation__input"
                      type="number"
                      step="any"
                      id="modifiedpower_coefficient"
                      value="${this.formattedCoeff0}"
                      @input="${this._handedFormattedCoeff0Changed}"
                    />
                  </div>
                </fieldset>
              </form>
            </vst-ui-form>
          </div>
        </vst-ui-tab>
      </vst-ui-tabs>

      <p color="muted" margin="block-m">
        ${e("New calibrations are used until you start a new experiment or open a file.")}
      </p>

      <div class="cal-action-bar">
        <button
          class="btn"
          id="cancel"
          variant="text"
          margin="block-end-s s-block-end-0 s-block-end-xs"
          @click="${this.cancelCalibration}"
          type="button"
        >
          ${e("Cancel")}
        </button>
        <button
          class="btn"
          id="apply"
          @click="${this.applyCalibration}"
          type="button"
          ?disabled="${!y(this.keepPhase,this.isOnePointCal)}"
        >
          ${e("Apply")}
        </button>
      </div>
    `}};customElements.define("vst-core-calibration",C);
