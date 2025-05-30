import{a as u}from"./chunk-NI4YDGN6.js";import{a as d}from"./chunk-JWPGNWQB.js";import{a as h}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import{c as b}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{c as n,h as p}from"./chunk-BVG7RORO.js";import{b as c,c as o}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var g=l=>l.length>1,v=l=>{let t=null;return l[0]&&l[0].steps&&([t]=l[0].steps),t},C=class extends h(p){static get properties(){return{sensor:{type:Object},calProcesses:{type:Object},selectedCalProcess:{type:Object},stepIndex:{type:Number},rsrValue:{type:Number},stepsComplete:{type:Boolean},saveCalToSensor:{type:Boolean},usingFactoryCalibration:{type:Boolean},factoryCalibrationDate:{type:String},usingUserCalibration:{type:Boolean},userCalibrationDate:{type:String},isODO:{type:Boolean},isCalibrating:{type:Boolean},hasBlockingStartCalProcesses:{type:Boolean,reflect:!0},hasBlockingInputProcesses:{type:Boolean}}}constructor(){super();this.sensor={},this.calProcesses=[{id:0,steps:[]}],this.selectedCalProcess=null,this.stepIndex=0,this.rsrValue=0,this.stepsComplete=!1,this.saveCalToSensor=!0,this.usingFactoryCalibration=!0,this.factoryCalibrationDate="",this.usingUserCalibration=!1,this.userCalibrationDate="",this.isODO=!1,this.isCalibrating=!1,this.hasBlockingStartCalProcesses=!1,this.hasBlockingInputProcesses=!1,this.eventBinder=new d}connectedCallback(){if(super.connectedCallback(),[this.$deviceManager,this.$toast]=this.requestServices(["deviceManager","toast"]),this.sensor){this.device=this.$deviceManager.getDevice(this.sensor.deviceId);let{processes:t}=this.sensor.calibration;this.calProcesses=t,this.hasBlockingStartCalProcesses=t.length>0&&t[0].steps[0].type==="BlockingStart",this.hasBlockingInputProcesses=t.length>0&&t[0].steps[0].type==="BlockingInput",this.isODO=this.device.orderCode==="GDX-ODO";let e=c();this.usingFactoryCalibration=this.device.usingFactoryCalibration,this.factoryCalibrationDate=this.device.factoryCalibrationDate.toLocaleDateString(e),this.usingUserCalibration=this.device.usingUserCalibration,this.userCalibrationDate=this.device.userCalibrationDate.toLocaleString(e),!this.hasBlockingStartCalProcesses&&!this.hasBlockingInputProcesses&&this.startCalibrationProcess(this.sensor._calibrationProcesses[0].id),this.eventBinder.bindListeners({source:this.device,target:this,eventMap:{"calibration-step-result-changed":"onDeviceCalibrationStepResultChanged"}}),[this.selectedCalProcess]=this.calProcesses,this.selectedCalId=this.selectedCalProcess.id,this.selectedCalProcess.steps?.length&&import("./vst-ui-form-X4TYOKT2.js"),this.hasBlockingInputProcesses&&([this.blockingInputStep]=this.selectedCalProcess.steps)}setTimeout(()=>{this.enableDisableForms()})}updated(t){t.has("stepIndex")&&this.enableDisableForms(),t.has("isCalibrating")&&import("./vst-ui-spinner-GDCP7A4B.js")}async disconnectedCallback(){if(super.disconnectedCallback(),this.eventBinder.unbindAll(),this.isCalibrating){let t=this.device.id,e=this.selectedCalProcess.id;try{await this.$deviceManager.cancelCalibrationProcess(t,e)}catch(s){console.error(s)}}}async startCalibrationProcess(t){let e=this.device.id;try{await this.$deviceManager.startCalibrationProcess(e,t),this.isCalibrating=!0,this.startCalibrationProcessStep(0)}catch(s){console.error(s)}}submitBlockingInput(){let t=this.selectedCalProcess.steps[this.stepIndex].id,e=parseFloat(this.shadowRoot.querySelector(`#cal_keeps_input_${t}`).value);this.enableDisableForms(!0),this.onComponentSubmitBlockingInput(this.selectedCalProcess.id,e)}startCalibrationProcessStep(t){this.stepIndex=t;let e=this.selectedCalProcess.steps[this.stepIndex].id,s=this.selectedCalProcess.steps[this.stepIndex].inputValue;this.onComponentStartCalibrationProcessStep(this.selectedCalProcess.id,e,s),this.enableDisableForms()}updateCalibrationProcessStep(t){let e=t.target,s=parseFloat(t.target.value),a=this.selectedCalProcess.steps[this.stepIndex].id;e.validity.valid?(this._showStepError(!1,this.stepIndex),this.onComponentUpdateCalibrationProcessStep(this.selectedCalProcess.id,a,s)):(e.validity.rangeOverflow||e.validity.rangeUnderflow)&&this._showStepError(!0,this.stepIndex,`${o("Value must be between ")} ${this.selectedCalProcess.steps[this.stepIndex].inputMin} ${o("and ")} ${this.selectedCalProcess.steps[this.stepIndex].inputMax}`)}stopCalibrationProcessStep(){let t=this.selectedCalProcess.steps[this.stepIndex].id;this.onComponentStopCalibrationProcessStep(this.selectedCalProcess.id,t)}_completeWorkflow(){this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}cancelCalibrationProcess(){this._completeWorkflow()}keepCalibrationProcess(){this.onComponentKeepCalibrationProcess(this.selectedCalProcess.id)}resetFactoryCalibration(){this.onComponentResetFactoryCalibration(this.selectedCalProcess.id)}moveProcessToNextStep(t,e){this.selectedCalProcess.steps.forEach((s,a)=>{if(s.id===e){let i=a+1;this.selectedCalProcess.steps[i]?(this.stepsComplete=!1,this.startCalibrationProcessStep(i)):(this.stepsComplete=!0,this.enableDisableForms(!0),this.submitBtnFocus())}})}isSelectedCal(t){return t===this.selectedCalId}selectedCalChanged(t){let e=this.selectedCalProcess.id,s;Array.from(t.target.querySelectorAll("option")).forEach(i=>{i.selected&&(this.selectedCalId=i.value)}),this.calProcesses.forEach(i=>{i.id===parseInt(this.selectedCalId)&&(this.selectedCalProcess=i,s=i.id)}),this._changeCalibrationProcess(e,s)}enableDisableForms(t){this.shadowRoot.querySelectorAll(".cal-keeps__fieldset").forEach((s,a)=>{!t&&a===this.stepIndex?(s.disabled=!1,s.querySelector(".cal-keeps__input").focus()):s.disabled=!0})}_startBlockingCalibration(){this.onComponentStartBlockingCalibration()}_showStepError(t,e,s){this.shadowRoot.querySelectorAll('.caption[variant="error"]').forEach((i,r)=>{r===e&&(t?(i.hidden=!1,i.innerText=s):i.hidden=!0)})}_changeCalibrationProcess(t,e){Array.from(this.shadowRoot.querySelectorAll(".cal-keeps__input")).forEach(a=>{a.value=""}),this.onComponentChangeCalibrationProcess(t,e)}submitBtnFocus(){setTimeout(()=>{this.shadowRoot.querySelector("#apply").focus()},10)}onComponentStartCalibrationProcess(t){this.startCalibrationProcess(t)}async onComponentStartCalibrationProcessStep(t,e,s){let a=this.device.id;try{await this.$deviceManager.startCalibrationProcessStep(a,t,e,s)}catch(i){console.error(i)}}async onComponentUpdateCalibrationProcessStep(t,e,s){let a=this.device.id;try{await this.$deviceManager.updateCalibrationProcessStep(a,t,e,s)}catch(i){console.error(i)}}async onComponentStopCalibrationProcessStep(t,e){let s=this.device.id,{$deviceManager:a}=this;this.enableDisableForms(!0);try{await a.stopCalibrationProcessStep(s,t,e,!0),this.moveProcessToNextStep(t,e)}catch(i){this.enableDisableForms(!1),console.error(i)}}async onComponentKeepCalibrationProcess(t){let e=this.device.id,{$deviceManager:s}=this;try{await s.keepCalibrationProcess(e,t),this.isCalibrating=!1,this._completeWorkflow()}catch(a){console.error(a)}}async onComponentChangeCalibrationProcess(t,e){let s=this.device.id,{$deviceManager:a}=this;try{await a.cancelCalibrationProcess(s,t),this.isCalibrating=!1,await a.startCalibrationProcess(s,e),this.isCalibrating=!0,this.startCalibrationProcessStep(0)}catch(i){console.error(i)}}async onComponentResetFactoryCalibration(t){let e=this.device.id,{$deviceManager:s,$toast:a}=this;try{await s.cancelCalibrationProcess(e,t),this.isCalibrating=!1,await s.resetFactoryCalibration(e),this._completeWorkflow(),a.makeToast(o("Calibration reset successful"))}catch(i){console.error(i)}}async onComponentStartBlockingCalibration(){let{$deviceManager:t}=this,e=this.device.id,s=this.sensor._calibrationProcesses[0].id;function a(i){return new Promise(r=>setTimeout(r,i))}try{await t.startCalibrationProcess(e,s),this.isCalibrating=!0,await t.startCalibrationProcessStep(e,s,0),await a(500),await t.stopCalibrationProcessStep(e,s,0,!0),await t.startCalibrationProcessStep(e,s,1)}catch(i){this.isCalibrating=!1,console.error(i)}}async onComponentSubmitBlockingInput(t,e){let s=this.device.id,{$deviceManager:a}=this;function i(r){return new Promise(m=>setTimeout(m,r))}try{await a.startCalibrationProcess(s,t),this.isCalibrating=!0,await a.startCalibrationProcessStep(s,t,0),await a.updateCalibrationProcessStep(s,t,0,e),await i(500),await a.stopCalibrationProcessStep(s,t,0,!0),await a.startCalibrationProcessStep(s,t,1)}catch(r){console.error(r)}}async _finishBlockingCalibration(){let{$deviceManager:t}=this,e=this.device.id,s=this.sensor._calibrationProcesses[0].id;function a(i){return new Promise(r=>setTimeout(r,i))}try{await t.stopCalibrationProcessStep(e,s,1,!0),await t.startCalibrationProcessStep(e,s,2),await a(500),await t.stopCalibrationProcessStep(e,s,2,!0),await t.keepCalibrationProcess(e,s),this.isCalibrating=!1,this.isCalibrating=!1,this.stepsComplete=!0}catch(i){console.error(i)}}onDeviceCalibrationStepResultChanged(t){this.rsrValue=t.result.value,(this.hasBlockingStartCalProcesses||this.hasBlockingInputProcesses)&&this.rsrValue===100&&this._finishBlockingCalibration()}static get styles(){return[b,u]}render(){return n`
      <div>
        ${this.hasBlockingStartCalProcesses?n`
              ${!this.isCalibrating&&!this.stepsComplete?n`
                    ${this.isODO?n`
                          <ol class="odo__instructions">
                            <li class="body">
                              ${o("Add distilled water to the storage bottle to the top of the sponge.")}
                            </li>
                            <li class="body">
                              ${o("Insert the probe into the bottle so that the tip is not touching the water or the sponge.")}
                            </li>
                            <li class="body">
                              ${o('Keep the probe vertically in this position for a minimum of 60 seconds, then press "CALIBRATE NOW."')}
                            </li>
                          </ol>
                        `:n`
                          <p class="blocking-cal__instructions">
                            ${o(v(this.calProcesses).description,"sensormap")}
                          </p>
                        `}

                    <div class="blocking-cal__btn-wrapper">
                      <button
                        class="btn blocking-cal__btn"
                        @click="${this._startBlockingCalibration}"
                        type="button"
                      >
                        ${o("Calibrate Now")}
                      </button>
                    </div>
                  `:""}
              ${this.isCalibrating?n`
                    <p class="blocking-cal__instructions">${o("Calibrating...")}</p>
                    <vst-ui-spinner></vst-ui-spinner>
                  `:""}
              ${this.stepsComplete&&!this.isCalibrating?n`
                    ${this.rsrValue?n`
                          <p class="blocking-cal__instructions">
                            ${o("Calibration complete")}
                          </p>
                        `:n`
                          <p class="blocking-cal__instructions">${o("Calibration failed")}</p>
                        `}

                    <div class="blocking-cal__btn-wrapper">
                      <button
                        class="btn blocking-cal__btn"
                        @click="${this._startBlockingCalibration}"
                        type="button"
                        ?hidden="${this.rsrValue}"
                      >
                        ${o("Retry Calibration")}
                      </button>
                      <button
                        class="btn blocking-cal__btn"
                        @click="${this._completeWorkflow}"
                        type="button"
                        ?hidden="${!this.rsrValue}"
                      >
                        ${o("Done")}
                      </button>
                    </div>
                  `:""}
            `:""}
        ${this.hasBlockingInputProcesses?n`
              <div class="cal-keeps">
                <vst-ui-form @submit="${this.submitBlockingInput}">
                  <form class="cal-keeps__form">
                    <fieldset
                      class="cal-keeps__fieldset"
                      id="cal_keeps_fieldset_${this.blockingInputStep.id}"
                    >
                      <div class="cal-keeps__fieldset-container">
                        <label
                          class="cal-keeps__label"
                          for="cal_keeps_input_${this.blockingInputStep.id}"
                        >
                          <span class="cal-keeps__label-description"
                            >${o(this.blockingInputStep.description,"sensormap")}:</span
                          >
                          <span class="caption" variant="error" hidden></span>
                        </label>
                        <div class="cal-keeps__input-wrapper">
                          <input
                            class="cal-keeps__input input"
                            type="number"
                            step="any"
                            min="${this.blockingInputStep.inputMin}"
                            max="${this.blockingInputStep.inputMax}"
                            id="cal_keeps_input_${this.blockingInputStep.id}"
                            name="cal_keep_input"
                            required
                          />
                          <span class="caption" margin="inline-start-xs inline-end-s"
                            >${this.blockingInputStep.inputUnits}</span
                          >
                          <button class="btn" id="submit" type="submit">${o("Keep")}</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </vst-ui-form>
              </div>

              ${this.isCalibrating?n` <p>${o("Calibrating...")}</p> `:""}
              ${this.stepsComplete&&this.rsrValue?n` <p>${o("Calibration complete")}</p> `:""}
              ${this.stepsComplete&&!this.rsrValue?n` <p>${o("Calibration failed")}</p> `:""}

              <div class="cal-action-bar">
                <button
                  class="btn blocking-cal__btn"
                  @click="${this._completeWorkflow}"
                  type="button"
                  ?disabled="${!this.stepsComplete}"
                >
                  ${o("Done")}
                </button>
              </div>
            `:""}
        ${!this.hasBlockingStartCalProcesses&&!this.hasBlockingInputProcesses?n`
              ${g(this.calProcesses)?n`
                    <div class="cal-point-options">
                      <label class="cal-point-options__label" for="cal_point_options">
                        <span>${o("Perform a")}</span>
                        <select
                          id="cal_point_options"
                          margin="inline-start-xs"
                          @change="${this.selectedCalChanged}"
                        >
                          ${this.calProcesses.map(t=>n`
                              <option
                                value="${t.id}"
                                ?selected="${this.isSelectedCal(t.id)}"
                              >
                                ${o(t.description,"sensormap")}
                              </option>
                            `)}
                        </select>
                      </label>
                    </div>
                  `:""}

              <div class="cal-keeps">
                ${this.selectedCalProcess.steps.map(t=>n`
                    <vst-ui-form @submit="${this.stopCalibrationProcessStep}">
                      <form class="cal-keeps__form">
                        <fieldset
                          class="cal-keeps__fieldset"
                          id="cal_keeps_fieldset_${t.id}"
                          disabled
                        >
                          <div class="cal-keeps__fieldset-container">
                            <label class="cal-keeps__label" for="cal_keeps_input_${t.id}">
                              <span class="cal-keeps__label-description"
                                >${o(t.description,"sensormap")}:</span
                              >
                              <span class="caption" variant="error" hidden></span>
                            </label>
                            <div class="cal-keeps__input-wrapper">
                              <span
                                class="cal-keeps__input-wrapper--inner"
                                margin="s-inline-end-s block-end-m"
                              >
                                <input
                                  class="cal-keeps__input input"
                                  type="number"
                                  step="any"
                                  min="${t.inputMin}"
                                  max="${t.inputMax}"
                                  id="cal_keeps_input_${t.id}"
                                  name="cal_keep_input"
                                  @input="${this.updateCalibrationProcessStep}"
                                  required
                                />
                                <span class="caption" margin="inline-start-xs"
                                  >${t.inputUnits}</span
                                >
                              </span>
                              <button
                                class="btn"
                                margin="block-end-m"
                                id="cal_keeps_submit"
                                type="submit"
                              >
                                ${o("Keep")}
                              </button>
                            </div>
                          </div>
                          <p class="cal-rsr">
                            ${o("Relative stability reading")}: ${this.rsrValue}
                          </p>
                        </fieldset>
                      </form>
                    </vst-ui-form>
                  `)}
              </div>

              ${this.usingUserCalibration&&this.userCalibrationDate?n`
                    <p margin="block-m" color="muted">
                      ${o("Last calibrated on")} ${this.userCalibrationDate}
                    </p>
                  `:""}
              ${this.usingFactoryCalibration&&this.factoryCalibrationDate?n`
                    <p margin="block-m" color="muted">
                      ${o("Using factory calibration from")} ${this.factoryCalibrationDate}
                    </p>
                  `:""}

              <div class="cal-action-bar">
                <button
                  id="reset"
                  class="btn"
                  variant="text"
                  margin="block-end-s s-block-end-0 s-inline-end-auto"
                  @click="${this.resetFactoryCalibration}"
                  type="button"
                  ?hidden="${this.usingFactoryCalibration}"
                >
                  ${o("Reset to Defaults")}
                </button>
                <div id="close-actions" class="inline">
                  <div>
                    <button
                      id="cancel"
                      class="btn"
                      variant="text"
                      margin="block-end-s s-block-end-0 s-inline-end-xs"
                      @click="${this.cancelCalibrationProcess}"
                      type="button"
                    >
                      ${o("Cancel")}
                    </button>
                    <button
                      id="apply"
                      class="btn"
                      @click="${this.keepCalibrationProcess}"
                      type="button"
                      ?disabled="${!this.stepsComplete}"
                    >
                      ${o("Apply")}
                    </button>
                  </div>
                </div>
              </div>
            `:""}
      </div>
    `}};customElements.define("vst-core-calibration-gdx",C);
