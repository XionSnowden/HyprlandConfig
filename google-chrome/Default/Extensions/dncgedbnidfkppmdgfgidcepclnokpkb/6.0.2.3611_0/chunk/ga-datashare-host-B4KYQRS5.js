import{a as u}from"./chunk-WLMUO3S2.js";import{a as l}from"./chunk-BCP675JF.js";import"./chunk-MKPVND6D.js";import{a as n,b as m}from"./chunk-KN5R6GSV.js";import"./chunk-HTT347OR.js";import{a as c}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{X as d,Y as o,Z as p,_ as h}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as v}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as a,c as s,h as r}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var g=e=>{window.cordova?.plugins?.clipboard?window.cordova.plugins.clipboard.copy(e):navigator.clipboard.writeText(e)},y=class extends c(r){static get properties(){return{_expanded:{state:!0},hostActive:{type:Boolean,reflect:!0},hostStarting:{type:Boolean,reflect:!0},hidden:{type:Boolean,reflect:!0}}}static get observableProperties(){return{peerId:{store:n,key:"id"},online:m,errorType:n}}constructor(){super();this.hostActive=!1,this._expanded=!1,this.hostStarting=!1}updated(i){i.has("hidden")&&(this._expanded=!1)}static get styles(){return[v,u,a`
        vst-style-spinner {
          --spinner-color: #fff;
          margin-block-start: -3px;
        }
      `]}_startDatashareHost(){this.dispatchEvent(new CustomEvent("start-datashare-host")),this.hostStarting=!0}_copyId(){let i=this.shadowRoot.querySelector("#copy_icon");g(this.peerId),i.icon=p,setTimeout(()=>{i.icon=o},500)}_toggleExpandId(){this._expanded=!this._expanded}render(){return s`
      <p
        size="s"
        margin="${this.hostActive?"block-end-xs":"block-end-m"}"
        ?hidden="${this._expanded}"
      >
        ${this.online?t("Share an experiment with others over a network connection"):t("An internet connection is required to share data")}
      </p>
      <p class="caption" margin="block-end-xs" ?hidden="${!this.hostActive||this._expanded}">
        ${t("Data Sharing session started")}
      </p>
      <div class="content" color="muted" ?disabled="${!this.online}">
        <div class="id-wrapper" ?hidden="${!this.hostActive}">
          <strong ?hidden="${this._expanded}">${t("ID")}</strong>
          <p id="id" class=${l({expanded:this._expanded})} margin="inline-start-m">
            ${this.peerId}
          </p>
          <vst-style-tooltip>
            <button
              class="btn"
              variant="icon"
              size="s"
              id="host_copy_id_btn"
              margin="inline-start-xs"
              @click="${this._copyId}"
              ?disabled="${!this.online}"
              ?hidden="${this._expanded}"
            >
              <vst-ui-icon id="copy_icon" .icon="${o}"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end">${t("Copy Host ID")}</span>
          </vst-style-tooltip>
          <vst-style-tooltip>
            <button
              class="btn"
              id="host_expand_id_btn"
              size="s"
              variant="icon"
              margin="inline-start-xs"
              @click="${this._toggleExpandId}"
              ?disabled="${!this.online}"
            >
              <vst-ui-icon id="expand_icon" .icon="${h}"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-end">${t("Expand Host ID")}</span>
          </vst-style-tooltip>
        </div>
        <div margin="block-start-xs" class="directions" color="muted" ?hidden="${this._expanded}">
          <p class="caption" ?hidden="${this.hostActive}">
            ${t("To start a Data Sharing session:")}
          </p>
          <ul class="message-list">
            ${this.hostActive?s`
                  <li class="caption">
                    ${t("Provide this ID code to others so that they can connect to your device")}
                  </li>
                  <li class="caption">
                    ${t("As you collect data they will see your data in their copies of Graphical Analysis")}
                  </li>
                  <li class="caption">
                    ${t("End your data share session by tapping")}
                    <vst-ui-icon
                      size="s"
                      aria-label="${t("Data sharing session status")}"
                      .icon="${d}"
                      margin="inline-2xs"
                    ></vst-ui-icon>
                    ${t("and tap STOP SHARING")}
                  </li>
                  <li class="caption">${t("Close this dialog to continue")}</li>
                `:s`
                  <li class="caption">
                    ${t("Click or tap START SESSION to generate an ID code for your session")}
                  </li>
                  <li class="caption">
                    ${t("Give that ID code to others so that they can join your session")}
                  </li>
                `}
          </ul>
        </div>
      </div>
      <button
        class="btn"
        style="inline-size: 100%;"
        margin="block-start-m"
        id="host_start_sharing_btn"
        ?disabled="${!this.online}"
        @click="${this._startDatashareHost}"
        ?hidden="${this.hostActive}"
      >
        ${this.hostStarting&&!this.errorType?s` <vst-style-spinner></vst-style-spinner> `:t("Start Session")}
      </button>
    `}};customElements.define("ga-datashare-host",y);export{y as GaDatashareHost};
