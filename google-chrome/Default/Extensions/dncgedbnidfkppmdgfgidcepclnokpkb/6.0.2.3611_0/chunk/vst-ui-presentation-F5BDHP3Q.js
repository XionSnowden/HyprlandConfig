import{a as o}from"./chunk-HOPQVMFY.js";import"./chunk-PTKZDLN6.js";import{a as n}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{va as a,wa as l}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as m}from"./chunk-CRHRJPRJ.js";import{a as r}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as s,c as e,h as i}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var p=class extends n(i){static get observableProperties(){return{colorMode:o}}static get styles(){return[m,s`
        :host {
          min-inline-size: 25vw;
        }

        label {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `]}render(){return e`
      <label class="label">
        ${this.colorMode==="dark"?t("Toggle Light Mode"):t("Toggle Dark Mode")}
        <button
          class="btn"
          variant="icon"
          @click="${()=>o.toggleUserColorMode()}"
        >
          <vst-ui-icon
            .icon="${this.colorMode==="dark"?l:a}"
            color="var(--vst-color-fg-primary)"
          >
          </vst-ui-icon>
        </button>
      </label>
    `}};customElements.define("vst-ui-presentation",p);function T(){return e` <vst-ui-dialog id="presentation">
    <h1 slot="header" margin="0">${t("App Preferences")}</h1>
    <!-- todo @k-horton: refactor the actual 'App Preferences' dialog & deprecate this -->
    ${r(this.dialogs?.presentation?.show,e`
        <vst-ui-presentation
          slot="content"
          ?font-size="${this.dialogs?.presentation?.params?.fontSize}"
          ?theme="${this.dialogs?.presentation?.params?.theme}"
          ?zoom="${this.dialogs?.presentation?.params?.zoom}"
        ></vst-ui-presentation>
      `)}
  </vst-ui-dialog>`}export{T as template};
