import{a as s}from"./chunk-R6LDBG7J.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{c as o}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as r,c as e,f as n,h as a}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var l=r`
  h2 {
    font-size: var(--vst-font-size-m);
    margin-block: var(--vst-space-s);
  }
  hr {
    border: none;
    border-top: 1px solid var(--vst-color-brand);
    clear: both;
  }
  p {
    font-size: var(--vst-font-size-m);
  }
  button {
    margin-block-start: var(--vst-space-xs);
    margin-block-end: var(--vst-space-m);
  }
  button > vst-style-spinner {
    --spinner-color: var(--vst-color-bg-tertiary);
    --size: var(--vst-space-m);
    padding-inline: var(--vst-space-xl);
  }

  #details h3 {
    color: var(--vst-color-brand);
    margin: var(--vst-space-m);
  }
  #details dl {
    font-size: var(--vst-font-size-s);
    margin: var(--vst-space-m);
  }
  #details dl div {
    display: flex;
    margin-block-end: var(--vst-space-xs);
  }
  #details dl div.list {
    /* Revert flex on last item */
    display: block;
  }
  #details dl div.list ul {
    /* List is very slightly closer to term */
    margin-block-start: -0.125rem;
  }
  #details dl dd {
    margin: 0;
    margin-inline-end: 0.5ch;
  }
  #details dl b {
    color: var(--vst-color-brand);
  }
  #details dt,
  #details dd {
    /* Use design order instead of semantic order */
    order: var(--order);
    white-space: nowrap;
  }
  #retrieval-options button {
    /* Move buttons to the right side */
    float: right;
  }

  #progress {
    --progress-value: 0;
    --progress-color: var(--vst-color-brand);
    --progress-bg-color: var(--vst-color-bg-tertiary);
    border: 1px solid var(--vst-color-brand);
    border-radius: var(--vst-radius-pill);
    background: linear-gradient(
      90deg,
      var(--progress-color) calc(var(--progress-value) * 1%),
      var(--progress-bg-color) calc(var(--progress-value) * 1%) 100%
    );
    padding: 0;
    transition: --progress-value var(--vst-transition-speed) var(--vst-transition-easing);
    height: 14px;
    width: 235px;
  }
`;var d=class extends a{static get properties(){return{_retrievingAndClearing:{state:!0},_showDetails:{state:!0},_warningDismissed:{state:!0},isUSB:{type:Boolean},status:{type:Object}}}static get styles(){return[o,l]}constructor(){super();getComputedStyle(document.body).getPropertyValue("--progress-value")===""&&window.CSS.registerProperty({name:"--progress-value",syntax:"<number>",initialValue:0,inherits:!0}),this._retrievingAndClearing=!1,this._showDetails=!1,this._warningDismissed=!1,this.isUSB=!1,this.status=null}get _isInProgress(){return this.status?.offlineStatus==="waiting"}get _progress(){return this.status?.currentNumSamples/this.status?.totalNumSamples*100||0}_handleDisconnectClicked(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}_handleRetrieveAndClearClicked(){this._retrievingAndClearing=!0;let i=new CustomEvent("retrieve-data",{bubbles:!0,composed:!0,detail:{delete:!0}});this.dispatchEvent(i)}_toggleDetails(){this._showDetails=!this._showDetails}reset(){this._retrievingAndClearing=!1}render(){return e`
      <div class="inline" style="--justify: space-between">
        <div>
          <h2>${t("Remote Logging Status")}</h2>
          <vst-ui-dropdown
            id="details"
            position="bottom"
            ?open=${this._showDetails} @closed=${this._toggleDetails}
            style="--padding: 0"
          >
            <button
              slot="anchor"
              id="progress"
              class="btn"
              style="--progress-value: ${this._progress}"
              @click=${this._toggleDetails}
            >
              <progress visually-hidden max="100" value=${this._progress}>
                ${this._progress}%
              </progress>
            </button>
            <div slot="content">
              <h3 visually-hidden>${t("Collection Parameters")}</h3>
              <dl>
                <div>
                  <dt>${t("samples scheduled")}</dt>
                  <dd style="--order: -1">
                    <b>${this.status?.currentNumSamples}</b>/${this.status?.totalNumSamples}
                  </dd>
                </div>
                <div>
                  <dt>${t("samples per second")}</dt>
                  <dd style="--order: -1"><b>
                    ${(1/this.status?.measurementPeriod).toFixed(2)}
                  </b></dd>
                </div>
                <div class="list">
                  <dt><b>${t("Channels")}</b></dt>
                  <dd>
                    <ul>
                      ${this.status?.enabledChannels?.map(i=>e`<li>${t(i,"sensormap")}</li>`)}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </vst-ui-popover>
        </div>
      </div>
      ${s(this._isInProgress&&!this._warningDismissed,()=>e`
          <div id="warning">
            <p margin="block-end-m">
              ${t(`This sensor is currently collecting data. Retrieving
              data will stop data collection. Disconnect to continue logging
              data.`)}
            </p>
            <div class="inline" style="--justify: flex-end; --gap: var(--vst-space-m)">
              <div>
                <button
                  id="disconnect"
                  type="button"
                  class="btn"
                  variant="brand-outline"
                  @click=${this._handleDisconnectClicked}
                >
                  ${t("Disconnect and Continue Logging")}
                </button>
                <button
                  id="dismiss"
                  type="button"
                  class="btn"
                  variant="primary"
                  @click=${()=>{this._warningDismissed=!0}}
                >
                  ${t("Continue to Retrieval Options")}
                </button>
              </div>
            </div>
          </div>
        `,()=>e`
          <div id="retrieval-options">
            <hr />
            <h2>${t("Retrieve and Clear Sensor")}</h2>
            <p>
              ${t(`
                Retrieve data from the sensor into Graphical Analysis, clear the
                sensor, and leave it connected for further use.
              `)}
            </p>
            <button
              id="retrieve-and-clear"
              type="button"
              class="btn"
              ?disabled=${this._retrievingAndClearing}
              @click=${this._handleRetrieveAndClearClicked}
            >
              ${s(this._retrievingAndClearing,()=>e`<vst-style-spinner></vst-style-spinner>`,()=>t("Retrieve and Clear"))}
            </button>
            <hr />
            <h2>${t("Disconnect without clearing data")}</h2>
            <p>
              ${s(this.isUSB,()=>t(`
                    To save the data on the sensor for retrieval on another device,
                    disconnect the USB cable now and connect the sensor to another
                    device running Graphical Analysis Pro.
                  `),()=>t(`
                    To save the data on the sensor for retrieval on another
                    device, click disconnect now and connect the sensor to
                    another device running Graphical Analysis Pro.
                  `))}
            </p>
            ${s(this.isUSB,()=>n,()=>e`
                <button
                  id="disconnect"
                  type="button"
                  class="btn"
                  variant="brand-outline"
                  ?disabled=${this._retrievingAndClearing}
                  @click=${this._handleDisconnectClicked}
                >
                  ${t("Disconnect")}
                </button>
              `)}
          </div>
        `)}
    `}};customElements.define("ga-data-logging-status",d);export{d as GaDataLoggingStatus};
