import"./chunk-5YEYWOWL.js";import"./chunk-JLWBWXQS.js";import"./chunk-FDV75E2D.js";import"./chunk-FO34QUL6.js";import"./chunk-YDEDSSMD.js";import"./chunk-GHZKJDSA.js";import"./chunk-VJ7NKQ6C.js";import"./chunk-MKPVND6D.js";import"./chunk-HK4AF347.js";import"./chunk-KN5R6GSV.js";import"./chunk-Z6SXIBNK.js";import"./chunk-5GHRE4BP.js";import{a as m}from"./chunk-JWPGNWQB.js";import"./chunk-A7ZJ67EZ.js";import"./chunk-SEYYHBSH.js";import"./chunk-HOPQVMFY.js";import{a as u}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{a as k,b as $}from"./chunk-H5EO627A.js";import"./chunk-AMQF2NRG.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{a as o}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as g}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{F as f,o as b,p as _,q as c,y as w}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as y}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import{a}from"./chunk-OTWO5H3C.js";import{b as i,c as l,h as v}from"./chunk-BVG7RORO.js";import"./chunk-VAJOC7YO.js";import"./chunk-WFJOWCXF.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var x=i`
  :host {
    display: flex;
    background-color: var(--vst-color-bg);
    flex-direction: column;
    overflow: hidden;
    max-block-size: 100%;
  }

  /* TODO: convert the welcome dialog to be a vst-ui-dialog and remove these breakpoint styles */

  ${a("landscape",i`
      :host {
        max-block-size: calc(100vh - var(--vst-space-l) * 2 - var(--chrome-menubar-height, 0px));
      }
    `)}

  ${a("m",i`
      :host {
        max-block-size: calc(100vh - var(--vst-space-l) * 2 - var(--chrome-menubar-height, 0px));
      }
    `)}

  .header {
    flex-shrink: 0;
    height: 2.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--vst-color-brand);
    color: #fff;
    position: relative;
  }

  .header__logo {
    width: 12.8125rem;
    height: 0.875rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .header__title {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .container {
    block-size: 100%;
    overflow: auto;
  }

  .main-content {
    flex: 1;
    display: grid;
    grid-gap: var(--vst-space-l);
    padding: var(--vst-space-l);
  }

  ${a("m",i`
      .main-content {
        grid-template-columns: auto auto;
      }
    `)}

  .section-secondary {
    display: grid;
    grid-gap: var(--vst-space-l);
  }

  .overline {
    margin-block-end: var(--vst-space-s);
  }

  .new-session {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .new-session__item {
    position: relative;
    margin-block-end: var(--vst-space-m);
  }

  ${a("s",i`
      .new-session_item {
        margin-block-end: 1rem;
      }
    `)}

  .new-session__item:last-of-type {
    margin-block-end: 0;
  }

  ${k(i`.new-session__btn`)}
  ${$(i`.new-session__btn`)}

  .new-session__btn {
    display: flex;
    align-items: center;
    font-size: 1rem;
    border: 0;
    padding: 0;
    background-color: transparent;
    text-align: left;
    border-radius: var(--vst-radius);
  }

  .new-session__btn:hover .new-session__icon {
    opacity: 1;
    border-width: 3px;
    padding: calc(0.5rem - 2px);
  }

  ${a("s",i`
      .new-session__btn:hover .new-session__icon {
        padding: calc(1.125rem - 2px);
      }
    `)}

  .new-session__icon {
    display: block;
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    padding: 0.5rem;
    border: 1px solid var(--vst-color-warning-ui);
    border-radius: 100%;
  }

  ${a("s",i`
      .new-session__icon {
        width: 5rem;
        height: 5rem;
        padding: 1.125rem;
      }
    `)}

  .new-session__description {
    margin: 0 var(--vst-space-xs);
    flex: 1;
  }

  ${a("s",i`
      .new-session__description {
        margin-inline-start: 1.125rem;
      }
    `)}

  .heading[size='l'] {
    margin: 0;
    color: var(--vst-color-text-brand);
  }

  .new-session__btn:hover .heading[size='l'],
  .starting-session .heading[size='l'] {
    color: var(--vst-color-text-brand-hover);
  }

  .caption[variant='light'] {
    max-inline-size: 40ch;
    margin: 0;
  }

  .caption[size='s'] {
    color: #fff;
  }

  .loading-spinner {
    display: none;
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 0;
    top: calc(50% - 1.5rem);
  }

  ${a("s",i`
      .loading-spinner {
        width: 5rem;
        height: 5rem;
        top: calc(50% - 2.5rem);
      }
    `)}

  .starting-session {
    opacity: 1 !important;
  }

  .starting-session .loading-spinner {
    display: block;
  }
  .starting-session .new-session-icon {
    opacity: 0.6;
    border-color: transparent;
  }
  .starting-session .new-session-header {
    color: var(--vst-color-brand-dark);
  }

  .vernier-links {
    padding-inline-start: 0;
    margin: -0.2em 0 0 0;
    list-style: none;
  }

  .vernier-links li {
    margin-block-end: 0.125rem;
  }

  .vernier-links li:last-of-type {
    margin-block-end: 0;
  }

  .vernier-links__icon {
    inline-size: var(--vst-icon-size-xs);
    block-size: var(--vst-icon-size-xs);
    margin-block-start: var(--vst-space-2xs);
    --vst-ui-icon-color: var(--vst-color-fg-tertiary);
  }

  .link:hover .vernier-links__icon {
    opacity: 1;
  }

  .vernier-logo {
    width: 8rem;
    margin: 0 auto;
    opacity: 0.8;
    transition: opacity var(--transition-slower-speed) var(--transition-easing);
  }

  .banner {
    background: var(--vst-color-bg-tertiary);
    border: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-xs) var(--vst-space-s);
    min-block-size: fit-content;
    flex-shrink: 0;
  }
`;var h=class extends u(g(v)){static get properties(){return{appVersion:{type:String},dataCollectionError:{type:String},connectedDevices:{type:Array},isPWAMessageVisible:{type:Boolean}}}static get observableProperties(){return{license:o,licenseName:o,licenseExpiration:o,authorized:o,showAuthForm:o,pending:o,errorType:o}}constructor(){super();this._eventBinder=new m,this.appVersion="1.2.3",this.dataCollectionError="",this.isPWAMessageVisible=!1}firstUpdated(){[this.$appManifest,this.$deviceManager,this.$dataCollection,this.$dataWorld,this.$popoverManager,this.$sensorWorld,this.$analytics]=this.requestServices(["appManifest","deviceManager","dataCollection","dataWorld","popoverManager","sensorWorld","analytics"]),this.appVersion=this.$appManifest.getAppVersion(),this.clickableEls=Array.from(this.shadowRoot.querySelectorAll("a, button")),this.headerEls=Array.from(this.shadowRoot.querySelectorAll(".section-header")),this.logoEl=this.shadowRoot.querySelector("#vernier_logo"),this._eventBinder.bindListeners({source:this.$deviceManager,target:this,eventMap:{"device-connected":"onDeviceConnected"}})}static _handlePWAInstall(){chrome.management.installReplacementWebApp(()=>{chrome.management.uninstallSelf()})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._eventBinder.unbindAll()}_createSession(s){let t=s.target.getAttribute("data-mode");switch(s.target.classList.add("starting-session"),this._clearErrorMessages(),this._disableButtons(!0),t){case"manual-entry":default:this._connectManualEntry();break;case"sensor-based":this._connectSensorBased();break;case"data-sharing":this._connectDataSharing();break}this.$analytics.trackEvent("new_experiment",{data_mode:t})}async _startNewSession(s,t,r){let{$dataWorld:p}=this;try{let n=await p.startNewSession(s,t);if(n&&n.cancelled){this._cancelWorkflow();return}r&&this.dispatchEvent(new CustomEvent("open-sensor-dialog",{bubbles:!0,composed:!0})),this._completeWorkflow()}catch(n){console.error(n);let d=n.message||e("Connection error");this._showErrorMessage(d)}}_resetPWADialog(){this.dispatchEvent(new CustomEvent("reset-pwa-message"))}_disableButtons(s){let t=s?.2:1;this.clickableEls.forEach(r=>{s?r.setAttribute("disabled",s):r.removeAttribute("disabled")}),this.headerEls.forEach(r=>{r.style.opacity=t}),this.logoEl.style.opacity=t}_showErrorMessage(s){this._disableButtons(!1),this.dataCollectionError=s}_dispatchOpenFile(){this.dispatchEvent(new CustomEvent("open-file"))}_connectSensorBased(){let s="DataCollection",t="time-based";this.$sensorWorld.sensors.find(n=>n.dataMode==="Drop")?t="drop-counting":this.$sensorWorld.sensors.find(n=>n.dataMode==="Gate")&&(t="photogate-timing");let r={type:t},p=()=>{this._showErrorMessage(s,e('Connect a <a href="https://www.vernier.com/til/2871/" target="_blank">supported Vernier USB device</a>.'))};this.$dataCollection.searchForSensors(!0).then(()=>{let n=!0;this.$deviceManager.usbDeviceList.concat(this.$deviceManager.bluetoothDeviceList).forEach(E=>{E.connected&&(n=!1)}),this._startNewSession(s,r,n)},p)}_connectManualEntry(){let s="ManualEntry",t={type:"manual"};this._startNewSession(s,t)}_connectDataSharing(){this.dispatchEvent(new CustomEvent("connect-data-sharing")),this._completeWorkflow()}_connectClient({detail:s}){this.dispatchEvent(new CustomEvent("start-datashare-client",{detail:s})),this.$popoverManager.closeAll()}onDeviceConnected(s){s.type==="usb"&&this._completeWorkflow()}_clearErrorMessages(){this.dataCollectionError=null,this.manualEntryError=null}_cancelWorkflow(){this.dispatchEvent(new CustomEvent("cancel-workflow"))}_completeWorkflow(){this.dispatchEvent(new CustomEvent("complete-workflow"))}_showSampleExperiments(){this.dispatchEvent(new CustomEvent("show-sample-experiments"))}_close(){this.dispatchEvent(new CustomEvent("close"))}static get styles(){return[y,x,i`
        .btn[variant='outline'] {
          border-color: var(--vst-color-neutral);
          inline-size: 100%;
        }

        hr {
          background-color: var(--vst-color-warning);
          border: none;
          height: 1px;
          width: 100%;
        }

        #close {
          --hover-bg: var(--vst-color-brand-dark);
        }

        .inline {
          inline-size: initial;
        }
      `]}render(){return l`
      <vst-ui-dialog
        variant="error"
        ?open=${this.isPWAMessageVisible}
        @dialog-close=${()=>this._resetPWADialog()}
      >
        <h1 slot="header">${e("Important Note: Switch to Progressive Web App")}</h1>
        <div slot="content" class="stack" gap="m">
          <p>
            The app you are now running is in the Chrome Packaged App format. In early 2025, Google is 
            <a
              class="link"
              href="https://blog.chromium.org/2021/10/extending-chrome-app-support-on-chrome.html"
              target="_blank"
              >removing the ability</a
            >
            to use apps in this format. To continue using Graphical Analysis, switch to the Progressive Web App (PWA) version.
          </p>
          <p>
            You have two options:
          </p>
          <ol>
            <li>
              <p>
                Use the PWA directly in your Chrome browser by going to
                  <a class="link" href="https://graphicalanalysis.app/" target="_blank"
                    >graphicalanalysis.app</a
                  >
              </p>
            </li>
            <li>
              <p>
                Install the PWA as an app. This will add an icon to your app shelf and remove the packaged app.
              </p>
            </li>
          </ol>
          <button type="button" class="btn" @click=${h._handlePWAInstall}>
            Install PWA and Remove the Packaged App
          </button>
          <hr />
          <p>
            In addition to using the PWA form of Graphical Analysis, we also recommend updating to ChromeOS 128 or later 
            for a better experience with Bluetooth&reg; connections.
          </p>
        </div>
      </vst-ui-dialog>

      <header slot="header" class="header" background="brand">
        <div class="caption" size="s" margin="inline-start-m" id="header_version">
          v${this.appVersion}
        </div>
        <div class="header__title">
          <h1 visually-hidden>${e("Graphical Analysis")}</h1>
          <svg class="header__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 14">
            <path
              fill="#FFF"
              d="M10.8 2.6c-.9-.6-1.9-1-3.6-1C4 1.6 2 3.8 2 6.8 2 10 4.3 12 7 12c1.3 0 1.7-.2 2.1-.2v-4H6.4V6.2h4.7v6.9c-.7.2-1.9.6-4 .6C2.8 13.7 0 11 0 6.8S3 0 7 0c2 0 2.9.3 3.9.6l-.1 2zM14.5.1h3.2c2.6 0 5.2.4 5.2 3.6 0 1.6-1.2 2.8-2.8 3 .6.2.9.5 1.3 1.3l2.5 5.3h-2.2l-2-4.4c-.6-1.3-1.2-1.3-2.2-1.3h-1.1v5.9h-1.9V.1zm1.9 5.8H18c1.8 0 2.9-.8 2.9-2.1 0-1.2-.9-1.9-2.7-1.9h-1.9c.1-.1.1 4 .1 4zM30.3.1h2l5.6 13.3h-2.1l-1.4-3.3h-6.5l-1.4 3.3h-2L30.3.1zm.9 1.9-2.7 6.6h5.3L31.2 2zM39.5.1H43c2.8 0 5 1 5 4 0 2.9-2.3 4-4.7 4h-1.9v5.3h-1.9V.1zm1.9 6.3h1.9c1.2 0 2.7-.6 2.7-2.3 0-1.7-1.8-2.3-2.9-2.3h-1.6v4.6h-.1zm9-6.3h1.9v5.6h6.4V.1h1.9v13.3h-1.9v-6h-6.4v6.1h-1.9V.1zm13.9 0h1.9v13.3h-1.9V.1zm14.6 2.2c-.8-.5-1.8-.7-2.8-.7C73 1.6 71 3.8 71 6.8c0 3.2 2.3 5.2 5 5.2 1 0 2.2-.2 2.9-.6l.1 1.9c-1 .5-2.2.6-3 .6-4.2 0-7-2.7-7-7 .1-4.1 3-6.8 7-6.8 1.1 0 2 .2 3 .6l-.1 1.6zM85.8.1h2l5.6 13.3h-2.1l-1.4-3.3h-6.5L82 13.4h-1.9L85.8.1zm1 1.9-2.7 6.6h5.3L86.8 2zM95.5.1h1.9v11.6h5.6v1.7h-7.5V.1zm19.4 0h2l5.6 13.3h-2.1l-1.4-3.3h-6.5l-1.4 3.3h-2L114.9.1zm.9 1.9-2.7 6.6h5.3L115.8 2zm8.8-1.9h2.6l5.8 10.7V.1h1.9v13.3h-2.4l-6-10.9v10.9h-1.9V.1zm17.8 0h2l5.6 13.3h-2.1l-1.4-3.3H140l-1.4 3.3h-2L142.4.1zm.9 1.9-2.7 6.6h5.3L143.3 2zm8.8-1.9h1.9v11.6h5.6v1.7h-7.4L152.1.1zm11.3 7.8L158.2.1h2.3l4 6 3.9-6h2.2l-5.2 7.8v5.6h-1.9l-.1-5.6zm14.8-5.8c-1-.4-1.5-.6-2.5-.6-1.1 0-2.3.4-2.3 1.8 0 2.6 5.7 1.9 5.7 6.3 0 2.8-2.2 4-4.9 4-.9 0-1.9-.2-2.8-.6l.2-1.8c.6.2 1.8.6 2.8.6 1.1 0 2.6-.6 2.6-2.2 0-3-5.7-2.2-5.7-6.3 0-2.3 1.9-3.6 4.3-3.6.9 0 1.9.2 2.8.5l-.2 1.9zm3.7-2h1.9v13.3h-1.9V.1zm11.5 2c-1-.4-1.5-.6-2.5-.6-1.1 0-2.3.4-2.3 1.8 0 2.6 5.7 1.9 5.7 6.3 0 2.8-2.2 4-4.9 4-.9 0-1.9-.2-2.8-.6l.2-1.8c.6.2 1.8.6 2.8.6 1.1 0 2.6-.6 2.6-2.2 0-3-5.7-2.2-5.7-6.3 0-2.3 1.9-3.6 4.3-3.6.9 0 1.9.2 2.8.5"
            />
          </svg>
        </div>
        <vst-style-tooltip>
          <button
            aria-label="${e("Close Start Page")}"
            class="btn"
            id="close"
            variant="icon"
            @click="${this._close}"
            margin="inline-end-xs"
          >
            <vst-ui-icon .icon="${b}" color="#fff"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-end-end">${e("Close Start Page")}</span>
        </vst-style-tooltip>
      </header>
      <div class="container">
        <div class="main-content">
          <section class="section-new">
            <h2 class="overline">${e("New Experiment")}</h2>
            <ul class="new-session">
              <li class="new-session__item">
                <button
                  class="new-session__btn"
                  id="sensor_based"
                  type="button"
                  @click="${this._createSession}"
                  data-mode="sensor-based"
                >
                  <vst-ui-spinner class="loading-spinner"></vst-ui-spinner>
                  <vst-ui-icon class="new-session__icon" .icon="${f}"></vst-ui-icon>
                  <div class="new-session__description">
                    <h3 class="heading" size="l" margin="0">
                      ${e("Sensor Data Collection")}
                    </h3>
                    ${this.dataCollectionError?l`
                          <p class="caption" margin="0" variant="error">
                            ${this.dataCollectionError}
                          </p>
                        `:l`
                          <p class="caption" variant="light" margin="0">
                            ${e("Collect data from Vernier sensors")}
                          </p>
                        `}
                  </div>
                </button>
              </li>
              <li class="new-session__item">
                <button
                  class="new-session__btn"
                  id="data_sharing"
                  type="button"
                  @click="${this._createSession}"
                  data-mode="data-sharing"
                >
                  <vst-ui-spinner class="loading-spinner"></vst-ui-spinner>
                  <vst-ui-icon class="new-session__icon" .icon="${_}"></vst-ui-icon>
                  <div class="new-session__description">
                    <h3 class="heading" size="l" margin="0">${e("Data Sharing")}</h3>
                    <p class="caption" variant="light" margin="0">
                      ${this.authorized?e("Connect to a LabQuest, Logger Pro or Graphical Analysis source"):e("Connect over WiFi to LabQuest 2 or Logger Pro")}
                    </p>
                  </div>
                </button>
              </li>
              <li class="new-session__item">
                <button
                  class="new-session__btn"
                  id="manual_entry"
                  type="button"
                  @click="${this._createSession}"
                  data-mode="manual-entry"
                >
                  <vst-ui-spinner class="loading-spinner"></vst-ui-spinner>
                  <vst-ui-icon class="new-session__icon" .icon="${w}"></vst-ui-icon>
                  <div class="new-session__description">
                    <h3 class="heading" size="l" margin="0">${e("Manual Entry")}</h3>
                    ${this.manualEntryError?l`
                          <p class="caption" margin="0" variant="error">
                            ${this.dataCollectionError}
                          </p>
                        `:l`
                          <p class="caption" variant="light" margin="0">
                            ${e("Enter data through keyboard or Copy/Paste")}
                          </p>
                        `}
                  </div>
                </button>
              </li>
            </ul>
          </section>

          <div class="section-secondary">
            <section class="section-open">
              <h2 class="overline">${e("Open Saved File")}</h2>
              <button
                class="btn"
                variant="outline"
                id="open_file_btn"
                @click="${this._dispatchOpenFile}"
                aria-label="${e("Choose File")}"
              >
                ${e("Choose File")}
              </button>
            </section>
            <section class="section-open" ?hidden="${!this.authorized}">
              <h2 class="overline">${e("Sample Experiments")}</h2>
              <vst-ui-pro-only
                preview-position="bottom-right"
                feature-name="Sample Experiments"
                .authorizedClickHandler="${this._showSampleExperiments.bind(this)}"
              >
                <button
                  class="btn"
                  id="sample_experiments_btn"
                  variant="outline"
                  aria-label="${e("See sample experiments")}"
                >
                  ${e("See Experiments")}
                </button>
              </vst-ui-pro-only>
            </section>

            <section>
              <h2 class="overline">${e("From Vernier.com")}</h2>
              <ul class="vernier-links">
                <li>
                  <a class="link" href="https://www.vernier.com/support/ga4/" target="_blank">
                    <vst-ui-icon class="vernier-links__icon" .icon="${c}"></vst-ui-icon>
                    <span>${e("User Manual")}</span>
                  </a>
                </li>
                <li>
                  <a
                    class="link"
                    href="https://www.vernier.com/products/sensors/go-direct-sensors/"
                    target="_blank"
                  >
                    <vst-ui-icon class="vernier-links__icon" .icon="${c}"></vst-ui-icon>
                    <span>${e("Go Direct Sensors")}</span>
                  </a>
                </li>
                ${this.authorized?"":l`
                      <li>
                        <a
                          class="link"
                          href="https://www.vernier.com/support/ga4/#experiments"
                          target="_blank"
                        >
                          <vst-ui-icon
                            class="vernier-links__icon"
                            .icon="${c}"
                          ></vst-ui-icon>
                          <span>${e("Sample Data")}</span>
                        </a>
                      </li>
                    `}
              </ul>
            </section>
            <vst-ui-logo-vernier class="vernier-logo" id="vernier_logo"></vst-ui-logo-vernier>
          </div>
        </div>
      </div>
      <section class="inline banner" gap="m" ?hidden="${!this.license}">
        <div>
          <div class="inline" style="--align: baseline" gap="xs">
            <div>
              <p class="heading" size="s">${e("Licensed to")}:</p>
              <p class="caption">${this.licenseName}</p>
            </div>
          </div>
          <div class="inline" style="--align: baseline" gap="xs">
            <div>
              <p class="heading" size="s">${e("Subscription Ends")}:</p>
              <p class="caption">${this.licenseExpiration}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="inline banner" ?hidden="${!this.showAuthForm}">
        <div>
          <ga-auth-form
            id="auth_form"
            dismissible
            .pending="${this.pending}"
            @submit="${({detail:{key:s}})=>o.authorize(s)}"
            @auth-dismissed="${()=>o.dismissForm()}"
          ></ga-auth-form>
        </div>
      </section>
    `}};customElements.define("ga-welcome",h);export{h as GaWelcome};
