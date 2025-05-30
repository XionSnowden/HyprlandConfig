import"./chunk-VBADOMZ2.js";import"./chunk-JLWBWXQS.js";import"./chunk-FDV75E2D.js";import"./chunk-YDEDSSMD.js";import{a as w}from"./chunk-POEL6JG4.js";import"./chunk-MKPVND6D.js";import{a as l,b as $}from"./chunk-KN5R6GSV.js";import{a as b}from"./chunk-Z6SXIBNK.js";import{a as g}from"./chunk-JWPGNWQB.js";import{a as y}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{a as x}from"./chunk-H5EO627A.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{a as S}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as _}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as E}from"./chunk-CRHRJPRJ.js";import{a as f}from"./chunk-OTWO5H3C.js";import{b as a,c as i,h as v}from"./chunk-BVG7RORO.js";import{a as m,c as o}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var k=a`
  :host {
    display: flex;
    flex-direction: column;
    height: calc(
      100vh - var(--vst-toolbar-height) - var(--vst-dialog-header-height) - var(--vst-space-l) * 3 -
        var(--chrome-menubar-height, 0px)
    );
    /* stylelint-disable-line length-zero-no-unit */
    max-block-size: 28rem;
    width: 100%;
  }
  .error-message {
    color: var(--vst-color-danger);
  }

  .error-message a {
    color: var(--vst-color-danger-500) !important;
    text-decoration: underline !important;
  }

  .show-error + .error-message {
    display: block;
    margin-block-end: var(--vst-space-xs);
  }

  .help-text {
    font-size: var(--vst-font-size-xs);
    color: var(--vst-color-fg-tertiary);
  }

  .message-list {
    margin: var(--vst-space-xs) 0;
    padding-inline-start: var(--vst-space-m);
  }

  .discovered-sources {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-block-end: calc(var(--gutter) * 2);
  }

  .discovered-sources__list {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
  }

  ${f("s",a`
      .discovered-sources__list {
        width: 22rem;
      }
    `)}

  .discovered-sources__list:focus {
    outline: 0;
  }

  .discovered-sources__list-item + .discovered-sources__list-item {
    border-top: 1px solid var(--vst-color-bg-secondary);
  }

  .discovered-sources__btn {
    position: relative;
    width: 100%;
    text-align: left;
    background-color: transparent;
    border: 0;
    padding: 0.5em 0;
    font-size: 1em;
    color: var(--vst-color-brand);
  }

  ${x(a`.discovered-sources__btn`)}

  .discovered-sources__btn:hover {
    color: var(--vst-color-brand-dark);
  }

  .discovered-sources__btn[disabled] {
    color: var(--vst-color-bg-primary);
  }

  .discovered-sources__btn[disabled]:hover {
    color: var(--vst-color-bg-primary);
  }

  .discovered-sources__btn[disabled].is-connecting {
    color: var(--vst-color-brand-dark);
  }

  .discovered-sources__btn[disabled].is-connecting:hover {
    color: var(--vst-color-brand-dark);
  }

  .discovered-sources__name {
    display: block;
    transition: var(--transition-faster);
  }

  .discovered-sources__loading-spinner {
    top: 0.5em;
    left: 0;
    width: 1.75rem;
    height: 1.75rem;
  }

  .manual-source {
    flex-shrink: 0;
    margin: var(--vst-space-xs);
  }

  .manual-source label {
    margin-block-end: 0.5em;
    display: block;
  }

  .input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-block-end: var(--vst-space-xs);
  }

  /* showing/hiding icons and spinners */
  .loading-spinner {
    display: none;
    position: absolute;
    right: 3.75rem;
    top: var(--vst-space-xs);
    width: 1.375rem;
    height: 1.375rem;
  }

  .is-connecting .discovered-sources__name {
    transform: translateX(2rem);
  }

  .is-connecting .loading-spinner {
    display: block;
  }

  .is-connecting .manual-source-btn {
    visibility: hidden;
  }
  /* end showing/hiding icons and spinners */

  #server_id {
    inline-size: 100%;
    block-size: 100%;
  }

  #ip_input {
    inline-size: 100%;
  }

  #specify_source_heading {
    display: inline-block;
  }
`;var L=(u,e,t="80")=>{if(e){let s=e.match(/^\s*(http:\/\/)?\s*([^:]+):?(\d+)?$/),r=u||s[2],d=s[2],n=parseInt(s[3]||t,10),c=null;return r&&(c={address:d,name:r,port:n}),c}return!1},C=class extends y(b(_(v))){static get properties(){return{dsSources:{type:Array},isConnecting:{type:Boolean}}}static get observableProperties(){return{online:$,errorType:l,authorized:S}}constructor(){super();this.eventBinder=new g,this.dsSources=[],this.isConnecting=!1}firstUpdated(){[this.$dataWorld,this.$dsSourceDiscovery,this.$popoverManager]=this.requestServices(["dataWorld","dsSourceDiscovery","popoverManager"]),this.discoveredSourcesEl=this.shadowRoot.querySelector("#discovered_sources"),this.sourceConnectFormEl=this.shadowRoot.querySelector("#source_connect_form"),this.sourceConnectBtnEl=this.shadowRoot.querySelector("#source_connect_btn"),this.sourceIPInputEl=this.shadowRoot.querySelector("#ip_input"),this.hideDiscovery||this.sourcesUpdated(),this.eventBinder.bindListeners({source:this.$dataWorld,target:this,eventMap:{"session-connection-error":"onDataWorldSessionConnectionError"}}),this.$dsSourceDiscovery.onListChange(this.onDsServiceListChanged.bind(this)),this.dsSources=[...this.$dsSourceDiscovery.getSourceList()]}disconnectedCallback(){super.disconnectedCallback(),this.$dsSourceDiscovery.stopListeners(),this.eventBinder.unbindAll(),l.updateErrorType("")}onDsServiceListChanged(e){this.dsSources=[...e],setTimeout(()=>{this.sourcesUpdated()})}sourcesUpdated(){if(this.dsSources.length===0){let e=document.createElement("li");e.classList.add("no-sources"),e.classList.add("body"),e.setAttribute("color","muted"),e.textContent=o("No sources detected. Ensure your source has Data Sharing enabled and both devices are connected to the same network. If the problem persists, select Specify Source and manually connect to your Data Sharing source."),this.discoveredSourcesEl.appendChild(e)}else{let e=this.shadowRoot.querySelector(".no-sources");e&&e.remove()}}sourceClicked(e,t){e.target.classList.add("is-connecting"),this.submitLocalDatashare(null,t)}manualSourceClicked(){setTimeout(()=>{this.sourceIPInputEl.focus()})}submitLocalDatashare(e,t){e&&e.preventDefault(),this.sourceConnectFormEl.classList.add("is-connecting");let s=t&&t.address?t.address:this.sourceIPInputEl.value,r=t&&t.name?t.name:"",d="http://",n=L(r,s),c="DataShare";if(n){let p={ignoreSensors:!0,sourceURI:`${d}${n.address}:${n.port}`,sourceName:n.name},D=w.getInfoURL(p.sourceURI);m.getJSON(D).then(()=>{this._startNewSession(c,p)}).catch(h=>{console.error(h),this._connectionErrorHandler(h,s)})}else setTimeout(()=>{this._connectionErrorHandler(new Error(400))});this.clearErrorMessages(),this.disableButtons()}submitOnlineDatashare(){let e=this.shadowRoot.querySelector("#server_id").value;e===""?l.updateErrorType("Empty"):(this.dispatchEvent(new CustomEvent("start-datashare-client",{detail:{serverid:e},bubbles:!0,composed:!0})),this.isConnecting=!0)}_startNewSession(e,t){this.$dataWorld.startNewSession(e,t).then(s=>{if(s&&s.cancelled){this.dispatchEvent(new CustomEvent("cancel-workflow",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}).catch(s=>{console.error(s),this._connectionErrorHandler(s)})}disableButtons(){this.sourceIPInputEl.blur(),this.sourceConnectBtnEl.disabled=!0,this.sourceIPInputEl.disabled=!0;let e=this.discoveredSourcesEl.querySelectorAll("button"),t=e.length;for(let s=0;s<t;++s)e[s].disabled=!0}enableButtons(){this.sourceConnectBtnEl.disabled=!1,this.sourceIPInputEl.disabled=!1;let e=this.discoveredSourcesEl.querySelectorAll("button"),t=e.length,s;for(s=0;s<t;++s)e[s].disabled=!1}clearErrorMessages(){let e=this.shadowRoot.querySelector(".error-message");e&&e.remove()}disconnect(){this.dispatchEvent(new CustomEvent("source-disconnect")),this.destroy()}showErrorMessage(e){let t=this.shadowRoot.querySelector(".is-connecting");t.classList.remove("is-connecting");let s=document.createElement("div");s.classList.add("error-message"),s.innerHTML=e,t.appendChild(s),this.enableButtons()}_connectionErrorHandler(e,t){if(console.error(e),e.message)if(parseInt(e.message)===408||parseInt(e.message)===404)this.showErrorMessage(o("Unable to connect to ")+t);else if(parseInt(e.message)===400)this.showErrorMessage(o("Unable to connect or find a source of this name."));else if(e.message==="not-a-server"&&e.info){let s=this._parseHostString(e.info),r=`:${s.port}`;s.port===80&&(r=""),this.showErrorMessage(o("Unable to connect to ")+s.name+r)}else this.showErrorMessage(o("Connection error"));else this.showErrorMessage(o("Connection error"))}onDataWorldSessionConnectionError(){this.isDataShare&&this._connectionErrorHandler(new Error(408))}static get styles(){return[E,k,a`
        .content[disabled] {
          opacity: 0.5;
        }

        .input-text {
          width: 100%;
          flex: 0.75;
        }

        .input-btn {
          flex: 0.25;
        }

        vst-style-spinner {
          margin-block-start: -3px;
          --spinner-color: #fff;
        }

        .error {
          color: var(--vst-color-danger);
        }
      `]}_localTemplate(){return i`
      <vst-ui-tab slot="tabs" title="Local" id="local_sharing_tab">
        <div slot="tab">
          <div class="discovered-sources">
            <h3 class="heading" size="s">${o("Discovered Devices")}</h3>
            <ul class="discovered-sources__list" id="discovered_sources">
              ${this.dsSources.map(e=>i`
                  <li class="discovered-sources__list-item">
                    <button
                      class="discovered-sources__btn"
                      @click="${t=>this.sourceClicked(t,e)}"
                    >
                      <vst-ui-spinner
                        class="loading-spinner discovered-sources__loading-spinner"
                      ></vst-ui-spinner>
                      <span class="discovered-sources__name">${e.name}</span>
                    </button>
                  </li>
                `)}
            </ul>
          </div>

          <div class="manual-source">
            <details id="specify_source" variant="arrow">
              <summary @click="${this.manualSourceClicked}">
                <h3 class="heading" size="s" id="specify_source_heading">
                  ${o("Specify source")}
                </h3>
              </summary>
              <div>
                <vst-ui-form @submit="${this.submitLocalDatashare}">
                  <form class="source-connect-form" id="source_connect_form">
                    <label for="ip_input">${o("Please enter the source IP address:")}</label>
                    <div class="input-wrapper">
                      <input
                        id="ip_input"
                        type="text"
                        placeholder="${o("Example: 192.168.1.10")}"
                        pattern="(^\\s*(http:\\/\\/)?\\s*([^:]+):?(\\d+)?$)"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        maxlength="75"
                        autocapitalize="off"
                      />

                      <button
                        type="submit"
                        id="source_connect_btn"
                        class="btn"
                        margin="inline-start-xs"
                      >
                        ${o("Connect")}
                      </button>
                      <vst-ui-spinner class="loading-spinner"></vst-ui-spinner>
                    </div>
                  </form>
                </vst-ui-form>
                <p id="data_sharing_error" class="caption error-message"></p>
                <div margin="block-start-xs">
                  <p class="caption" color="muted">${o("To locate the address:")}</p>
                  <ul class="message-list">
                    <li class="caption" color="muted">
                      ${o("On LabQuest, tap the Wi-Fi symbol")}
                    </li>
                    <li class="caption" color="muted">
                      ${o("On Logger Pro, go to File -> Data Sharing")}
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </vst-ui-tab>
    `}_computeTemplate(){return this.authorized?i` <vst-ui-tab slot="tabs" title="Online" id="online_sharing_tab">
          <div slot="tab">
            <div class="manual-source">
              <p color="muted" margin="block-end-s">
                ${this.online?o("Connect to a Data Sharing session from a Graphical Analysis source"):o("An internet Connection is required to connect to online data sharing")}
              </p>
              <div class="content" ?disabled="${!this.online}">
                <vst-ui-form @submit="${this.submitOnlineDatashare}">
                  <form class="source-connect-form" id="source_connect_form">
                    <label for="ip_input" class="overline" margin="block-end-xs"
                      >${o("Enter the source ID:")}</label
                    >
                    <div class="input-wrapper">
                      <div class="input-text">
                        <input
                          id="server_id"
                          type="text"
                          placeholder="${o("Example: kjt7op")}"
                          autocomplete="off"
                          autocorrect="off"
                          spellcheck="false"
                          maxlength="75"
                          autocapitalize="off"
                        />
                        <p
                          class="caption error"
                          margin="block-start-xs"
                          ?hidden="${!this.errorType||!this.online}"
                        >
                          Invalid Key
                        </p>
                      </div>

                      <button
                        type="submit"
                        id="source_connect_btn"
                        class="btn input-btn"
                        margin="inline-start-xs"
                        ?disabled="${!this.online}"
                      >
                        ${this.isConnecting&&!this.errorType?i` <vst-style-spinner></vst-style-spinner> `:o("Connect")}
                      </button>
                    </div>
                  </form>
                </vst-ui-form>
                <div id="data_sharing_error" class="caption" variant="error"></div>
              </div>
            </div>
          </div>
        </vst-ui-tab>
        ${this._localTemplate()}`:i`
      ${this._localTemplate()}
      <vst-ui-tab
        slot="anchor"
        title="Online"
        pro-message="${o("Activate to use Online Data Sharing")}"
        id="online_sharing_tab"
      ></vst-ui-tab>
    `}render(){return i`<vst-ui-tabs>${this._computeTemplate()}</vst-ui-tabs>`}};customElements.define("ga-datashare-connect",C);export{C as GaDatashareConnect};
