import{a as n}from"./chunk-KFWGEN4K.js";import{a as r}from"./chunk-PL6DDC6Q.js";import{c as p}from"./chunk-CRHRJPRJ.js";import{c as e,h as o}from"./chunk-BVG7RORO.js";import{b as s}from"./chunk-WFJOWCXF.js";import{c as i}from"./chunk-LI3RKPGW.js";var l=class extends r(o){static get properties(){return{_showPreview:{state:!0},featureName:{type:String,attribute:"feature-name",reflect:!0},infoTooltipPosition:{type:String},previewPosition:{type:String,attribute:"preview-position",reflect:!0}}}static get observableProperties(){return{authorized:n}}constructor(){super();this.infoTooltipPosition="inline-end",this.authorizedClickHandler=null,this._showPreview=!1}firstUpdated(){this.toggleAttribute("hidden",!1)}_togglePreview(){this._showPreview=!this._showPreview}static get styles(){return[p]}render(){return this.authorized?e`
        <slot
          @click="${t=>this.authorizedClickHandler?.(t)}"
          @keyup="${t=>t.keyCode===13?u=>this.authorizedClickHandler?.(u):""}"
        ></slot>
      `:e`
      <vst-ui-dropdown
        variant="pro"
        ?open="${this._showPreview}"
        @closed="${this._togglePreview}"
        position="${this.previewPosition}"
      >
        <slot
          slot="anchor"
          @keyup="${t=>t.keyCode===13?this._togglePreview:""}"
          @click="${this._togglePreview}"
        ></slot>
        <p slot="content" margin="0">
          <span>${s(i("Activate to use %s"),this.featureName)}</span>
          <vst-ui-pro-info .infoTooltipPosition=${this.infoTooltipPosition}></vst-ui-pro-info>
        </p>
      </vst-ui-dropdown>
    `}};customElements.define("vst-ui-pro-only",l);export{l as a};
