import"./chunk-M54M2VMK.js";import"./chunk-JLWBWXQS.js";import"./chunk-FDV75E2D.js";import"./chunk-IMQHRNK4.js";import{c as n}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as e,c as s,h as i}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var r=e`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: var(--vst-color-bg);
  }
`;var a=class extends i{static get properties(){return{message:{type:String}}}constructor(){super();this.message=""}cancel(){this.dispatchEvent(new CustomEvent("cancel"))}static get styles(){return[n,r]}render(){return s`
      <div class="container">
        <vst-ui-wait message="${this.message}"></vst-ui-wait>
        <button class="btn" id="cancel" variant="text" @click="${this.cancel}" type="button">
          ${t("Cancel")}
        </button>
      </div>
    `}};customElements.define("vst-ui-keep-wait",a);export{a as VstUiKeepWait};
