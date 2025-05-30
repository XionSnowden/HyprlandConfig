import"./chunk-YDEDSSMD.js";import"./chunk-A7ZJ67EZ.js";import"./chunk-HTT347OR.js";import{b as n,v as l}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as a}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as e,c as s,h as o}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var r=class extends o{static get properties(){return{selectedFit:{type:Object},parseError:{type:Boolean}}}static get styles(){return[a,e`
        :host {
          max-inline-size: 70ch;
        }

        .error {
          color: var(--vst-color-danger);
        }

        label,
        input,
        select {
          inline-size: 100%;
        }

        vst-ui-icon {
          inline-size: 0.75rem;
          --vst-ui-icon-color: var(--vst-color-brand);
        }

        .flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .link[variant='back'] {
          padding: 0;
        }

        vst-ui-dialog {
          --dialog-padding: var(--vst-space-xl);
        }

        .caption {
          visibility: var(--visibility);
        }
      `]}constructor(){super();this.selectedFit={},this.parseError=!1}firstUpdated(){this.selectedFit.y?.length&&this.editFitEquation({target:{value:this.selectedFit.y}})}editFitEquation({target:{value:i}}){this.dispatchEvent(new CustomEvent("edit-equation",{detail:{customFitEquation:i}}))}editFitName({target:{value:i}}){this.dispatchEvent(new CustomEvent("edit-name",{detail:{customFitName:i}}))}toggleCustomCurvefitEditor(i){this.dispatchEvent(new CustomEvent("toggle-custom-curvefit-editor",{detail:i}))}showCustomCurvefitInfo(){this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"custom_expression_info",params:{title:t("About Custom Curve Fits"),type:"curvefit"}}}))}applyCustomFit(){this.dispatchEvent(new CustomEvent("apply-custom-fit"),{bubbles:!0,composed:!0})}render(){return s`
    <vst-ui-form @submit="${this.applyCustomFit}">
      <form id="custom_fit_form">
        <div class="flex" margin="block-end-xs">
          <span tabindex="0" @keyup="${i=>i.keyCode===13?this.toggleCustomCurvefitEditor(!1):""}" @click="${()=>this.toggleCustomCurvefitEditor(!1)}" class="link" variant="back" size="s">
            <vst-ui-icon .icon="${n}" margin="inline-end-2xs"></vst-ui-icon>
            ${t("Back")}
        </span>
        <vst-style-tooltip>
          <button class="btn" type="button" variant="icon"  size="xs" @click="${this.showCustomCurvefitInfo}">

            <vst-ui-icon .icon="${l}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-end-end">${t("Custom Curvefit Info")}</span>
        </vst-style-tooltip>
      </div>
        <label margin="block-end-m">
          <p class="label" margin="n block-end-xs">${t("Fit Expression")}</p>
          <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
           type="text" id="custom_fit_input" @input="${this.editFitEquation}" value="${this.selectedFit?.y||""}"/>
          <p class="caption error" margin="block-start-2xs" style="--visibility: ${this.parseError?"visible":"hidden"}">${t("Invalid Equation")}</p>
        </label>

          <label margin="block-end-l">
            <p class="label" margin="n block-end-xs">${t("Fit Name")}</p>
            <input  type="text" id="custom_fit_name" @input="${this.editFitName}"/>
          </label>
        </div>

        <button
          type="submit"
          id="apply_fit_btn"
          class="btn"
          variant="primary"
          style="inline-size: 100%"
          ?disabled="${this.parseError}"
        >
          ${t("Apply")}
        </button>
      </form>
    </vst-ui-form>
    `}};customElements.define("vst-core-custom-curvefit",r);export{r as VstCoreCustomCurvefit};
