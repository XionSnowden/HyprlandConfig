import{c as i}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{c as e,h as n}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var o=class extends n{static get styles(){return[i]}_handleCancelClicked(){this.dispatchEvent(new CustomEvent("categorical-canceled",{composed:!0,bubbles:!0}))}_handleConfirmClicked(){this.dispatchEvent(new CustomEvent("categorical-confirmed",{composed:!0,bubbles:!0}))}render(){return e`
      <div class="container">
        <div id="confirmation-text">
          ${t("You entered non-numeric data. Do you want to convert this column to categorical data?")}
        </div>
        <div class="action-btns">
          <button
            class="btn"
            id="cancel"
            variant="text"
            type="button"
            @click="${this._handleCancelClicked}"
          >
            ${t("Cancel")}
          </button>
          <button class="btn" id="confirm" type="button" @click="${this._handleConfirmClicked}">
            ${t("Confirm")}
          </button>
        </div>
      </div>
    `}};customElements.define("vst-ui-categorical-confirmation",o);export{o as VstUiCategoricalConfirmation};
