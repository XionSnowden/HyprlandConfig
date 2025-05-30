import{a as c}from"./chunk-Z6SXIBNK.js";import{a as h,b as u}from"./chunk-5GHRE4BP.js";import"./chunk-A7ZJ67EZ.js";import"./chunk-SEYYHBSH.js";import{a as m}from"./chunk-MGJOXMXS.js";import{a as p}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as l}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as d}from"./chunk-CRHRJPRJ.js";import{a as e}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{c as i,f as r,h as a}from"./chunk-BVG7RORO.js";import{a as n}from"./chunk-MM5FGF5D.js";import{c as o}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var f=class extends m(c(l(a))){static get properties(){return{_showUncertainty:{state:!0},options:{type:Object},udmId:{type:Number}}}static get observableProperties(){return{authorized:p}}static get styles(){return[d]}constructor(){super();this._showUncertainty=!1,this.options=null,this.udmId=""}async willUpdate(t){t.has("options")&&(this._showUncertainty=this.options?.showUncertainty)}async submit(){await this.requestService("dataWorld").setInfoBoxInfo(this.udmId,{},this._showUncertainty),this.dispatchEvent(new CustomEvent("options-changed",{bubbles:!0,composed:!0,detail:{showUncertainty:this._showUncertainty}}))}render(){return i`
      <form margin="block-end-s">
        <div class="checkbox-group">
          <div class="checkbox">
            <input
              id="show-uncertainty-of-fit-parameters"
              type="checkbox"
              .checked=${this._showUncertainty}
              ?disabled=${!this.authorized}
              @change=${({currentTarget:t})=>{this._showUncertainty=t.checked}}
            />
            <span class="check"></span>
          </div>
          <label
            for="show-uncertainty-of-fit-parameters"
            class=${this.authorized?"":"disabled"}
          >
            ${o("Show Uncertainty of Fit Parameters")}
          </label>
        </div>
        ${e(this.authorized,r,i`
            <p class="body" margin="block-s">
              ${o("Activate to show Uncertainty of Fit Parameters")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          `)}
      </form>
    `}};customElements.define("vst-core-fit-options",f);function P(){let s=this.dialogs?.fit_options?.params,t=h();return i`
    <vst-ui-dialog id="fit_options">
      ${e(this.dialogs?.fit_options?.show,i`
          <h2 slot="header">${o("Fit Options")}</h2>
          <vst-core-fit-options
            slot="content"
            .udmId=${s?.udmId}
            .options=${s?.options}
            @options-changed=${({detail:v})=>{s.handleSubmit(v)}}
            ${u(t)}
          ></vst-core-fit-options>
          <div footer-buttons slot="footer">
            <button
              class="btn"
              variant="text"
              @click=${()=>{this.dispatchEvent(n("fit_options"))}}
            >
              ${o("Cancel")}
            </button>
            <button
              class="btn"
              variant="primary"
              @click=${async()=>{await t.value.submit(),this.dispatchEvent(n("fit_options"))}}
            >
              ${o("Ok")}
            </button>
          </div>
        `)}
    </vst-ui-dialog>
  `}export{P as template};
