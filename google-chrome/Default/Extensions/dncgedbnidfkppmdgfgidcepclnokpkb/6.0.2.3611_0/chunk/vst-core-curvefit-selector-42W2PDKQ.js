import"./chunk-YDEDSSMD.js";import{a as n}from"./chunk-MGJOXMXS.js";import"./chunk-AMQF2NRG.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{a as c}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as l}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as r,c as i,h as a}from"./chunk-BVG7RORO.js";import"./chunk-WFJOWCXF.js";import{c as s}from"./chunk-LI3RKPGW.js";import{a as d}from"./chunk-3AUSJ54I.js";import{h as p}from"./chunk-CM6X6NVN.js";var o=p(d());var u=class extends n(a){static get properties(){return{supportedFits:{type:Array},parseError:{type:Boolean},showCustomCurvefitEditor:{type:Boolean},selectedFit:{type:Object},customFitEquation:{type:String},customFitName:{type:String},editorType:{type:String}}}constructor(){super();this.parseError=!1,this.showCustomCurvefitEditor=!1,this.customFitName="",this.editorType=""}shouldUpdate(){return this.supportedFits&&this.supportedFits.length>0}async firstUpdated(){[this.$dataAnalysis]=this.requestServices(["dataAnalysis"]),this.fitSelectEl=this.shadowRoot.querySelector("#apply_fit_select"),setTimeout(()=>{this._dispatchFitSelectedEvent(this.selectedFit.type,!0)}),o.default.os.family!=="iOS"&&o.default.os.family!=="Android"&&setTimeout(()=>{this.fitSelectEl.focus()})}async customFitEquationChanged({detail:{customFitEquation:t}}){let e=await this.$dataAnalysis.parseEquation(null,t);this.parseError=e.error,e?.error||(this.customFitEquation=t,this._dispatchFitSelectedEvent("CUSTOM",!1))}customFitNameChanged({detail:{customFitName:t}}){this.customFitName=t}fitSelected({target:{selectedOptions:t,value:e}}){this.selectedFit=t[0].fit,this.customFitEquation=void 0,this._dispatchFitSelectedEvent(e,!1)}_dispatchFitSelectedEvent(t=this.selected,e=!0){this.dispatchEvent(new CustomEvent("curve-fit-selected",{detail:{bubbles:!0,composed:!0,fitType:t,customFitEquation:this.customFitEquation,customFitName:this.customFitName,isInitialSelection:e}}))}cancelFit(){this.dispatchEvent(new CustomEvent("curve-fit-canceled"))}async applyFit(){if(this.showCustomCurvefitEditor){this.customFitName=this.customFitName||this.customFitEquation;let t=await this.$dataAnalysis.parseEquation(this.customFitName,this.customFitEquation);if(this.parseError=t.error,!t?.error){let{type:e}=t;this._dispatchFitSelectedEvent(e,!1),this._dispatchApplyFit()}}else this._dispatchApplyFit()}_dispatchApplyFit(){this.dispatchEvent(new CustomEvent("curve-fit-applied"))}_toggleCustomCurvefitEditor(t,e){this.showCustomCurvefitEditor=e!==void 0?e:!this.showCustomCurvefitEditor,this.editorType=t,this.showCustomCurvefitEditor&&t==="edit"?this.customFitEquation=this.selectedFit.y:this.customFitEquation="",this.requestUpdate()}static get styles(){return[l,r`
        :host {
          display: inline-block;
          background: var(--vst-color-bg);
        }

        .curve-fits {
          padding: var(--vst-space-l);
          display: flex;
          flex-direction: column;
        }

        .curve-fit-btns {
          display: flex;
          justify-content: space-between;
          padding-block-start: var(--vst-space-m);
        }

        #apply_fit_input {
          margin-top: var(--vst-space-2xs);
        }

        /* Select */
        .selected-fit {
          display: flex;
          inline-size: 100%;
          padding: 0 var(--vst-space-2xs);
          align-items: baseline;
          justify-content: space-between;
        }

        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .btn[variant='icon'][size='s'] {
          padding: var(--vst-space-2xs);
        }

        .btn {
          white-space: normal;
        }
      `]}render(){return i`
      <vst-ui-form @submit="${this.applyFit}">
        <form id="selection_form">
          <fieldset class="curve-fits">
            ${this.showCustomCurvefitEditor&&c.authorized?i`
                  <vst-core-custom-curvefit
                    ?parseError="${this.parseError}"
                    .selectedFit="${this.editorType==="new"?"":this.selectedFit}"
                    @apply-custom-fit="${this.applyFit}"
                    @edit-equation="${this.customFitEquationChanged}"
                    @edit-name="${this.customFitNameChanged}"
                    @toggle-custom-curvefit-editor="${({detail:t})=>this._toggleCustomCurvefitEditor("",t)}"
                  ></vst-core-custom-curvefit>
                `:i`
                  <p class="label">${s("Curve Fit")}</p>
                  <select
                    margin="block-end-s"
                    id="apply_fit_select"
                    .value="${this.selectedFit.type}"
                    @change="${this.fitSelected}"
                  >
                    ${this.supportedFits.map(t=>i`
                          <option
                            class="curve-fit"
                            .fit="${t}"
                            .value="${t.type}"
                            .selected="${this.selectedFit.type===t.type}"
                          >
                            ${s(t.name,"mathematical")}
                          </option>
                        `)}
                  </select>

                  <span class="headline" margin="block-end-s">${this.selectedFit?.y}</span>

                  <vst-ui-pro-only
                    preview-position="bottom-left"
                    feature-name="${s("Custom Curve Fits")}"
                    .authorizedClickHandler="${t=>{t.stopPropagation(),this._toggleCustomCurvefitEditor("",t.detail)}}"
                  >
                    <button class="link" type="button" id="edit_fit_btn" size="s">
                      ${s("Create Custom Fit")}
                    </button>
                  </vst-ui-pro-only>
                  <div class="curve-fit-btns" margin="block-start-m">
                    <button
                      type="button"
                      @click="${this.cancelFit}"
                      id="cancel_fit_btn"
                      class="btn"
                      variant="text"
                    >
                      ${s("Cancel")}
                    </button>
                    <button type="submit" class="btn" id="apply_fit_btn" variant="primary">
                      ${s("Apply")}
                    </button>
                  </div>
                `}
          </fieldset>
        </form>
      </vst-ui-form>
    `}};customElements.define("vst-core-curvefit-selector",u);export{u as VstCoreCurvefitSelector};
