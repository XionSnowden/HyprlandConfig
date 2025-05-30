import{a as m}from"./chunk-WLMUO3S2.js";import{a as r}from"./chunk-BCP675JF.js";import{a as n,b as h}from"./chunk-KN5R6GSV.js";import"./chunk-HTT347OR.js";import{a as d}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{Y as i,Z as p,_ as c}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as l}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{c as e,h as o}from"./chunk-BVG7RORO.js";import{b as a}from"./chunk-WFJOWCXF.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var u=class extends d(o){static get properties(){return{_expanded:{state:!0},hidden:{type:Boolean,reflect:!0}}}static get observableProperties(){return{peerId:{store:n,key:"id"},online:h,connectionCount:n}}constructor(){super();this._expanded=!1}updated(s){s.has("hidden")&&(this._expanded=!1)}static get styles(){return[l,m]}_stopDatashareHost(){this.dispatchEvent(new CustomEvent("stop-datashare-host"))}_copyId(){let s=this.shadowRoot.querySelector("#copy_icon");navigator.clipboard.writeText(this.peerId),s.icon=p,setTimeout(()=>{s.icon=i},500)}_toggleExpandId(){this._expanded=!this._expanded}render(){return e`
      ${this.online?"":e`<p size="s" margin="block-end-m">
            ${t("An internet connection is required to share data")}
          </p>`}
      <div class="content" ?disabled="${!this.online}">
        <div class="id-wrapper" margin="block-end-xs">
          <strong ?hidden="${this._expanded}">${this.peerId?t("ID"):""}</strong>
          <p id="id" class=${r({expanded:this._expanded})} margin="inline-start-m">
            ${this.peerId}
          </p>
          <vst-style-tooltip>
            <button
              class="btn"
              variant="icon"
              margin="inline-start-xs"
              @click="${this._copyId}"
              ?disabled="${!this.online}"
              ?hidden="${this._expanded}"
              size="s"
              id="status_copy_id_btn"
            >
              <vst-ui-icon id="copy_icon" .icon="${i}"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-end">${t("Copy Host ID")}</span>
          </vst-style-tooltip>
          <vst-style-tooltip>
            <button
              class="btn"
              variant="icon"
              size="s"
              margin="inline-start-xs"
              @click="${this._toggleExpandId}"
              ?disabled="${!this.online}"
              id="status_expand_id_btn"
            >
              <vst-ui-icon id="expand_icon" .icon="${c}"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-end">${t("Expand Host ID")}</span>
          </vst-style-tooltip>
        </div>
        <div class="directions">
          <p class="caption" color="muted" margin="block-end-xs" ?hidden="${this._expanded}">
            ${t("Data Sharing is active")}
          </p>
          <p class="caption" color="muted" margin="block-end-m" ?hidden="${this._expanded}">
            <span id="connection-count"
              >${a(t("%d clients are connected"),this.connectionCount)}</span
            >
          </p>
        </div>
      </div>
      <button
        class="btn"
        variant="danger"
        size="s"
        margin="inline-start-auto"
        id="host_stop_sharing_btn"
        ?hidden="${this._expanded}"
        ?disabled="${!this.online}"
        @click="${this._stopDatashareHost}"
      >
        ${t("Stop Sharing")}
      </button>
    `}};customElements.define("ga-datashare-status",u);export{u as GaDatashareStatus};
