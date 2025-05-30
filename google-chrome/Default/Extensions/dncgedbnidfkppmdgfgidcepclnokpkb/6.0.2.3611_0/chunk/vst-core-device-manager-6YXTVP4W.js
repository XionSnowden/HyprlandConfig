import{a as R}from"./chunk-AIJT5QXX.js";import"./chunk-JLWBWXQS.js";import"./chunk-FDV75E2D.js";import"./chunk-FO34QUL6.js";import{a as $}from"./chunk-R6LDBG7J.js";import{a as H}from"./chunk-BCP675JF.js";import"./chunk-YDEDSSMD.js";import{a as L,b as q}from"./chunk-5GHRE4BP.js";import{a as N}from"./chunk-JWPGNWQB.js";import{a as Q}from"./chunk-QTI25AH7.js";import"./chunk-SEYYHBSH.js";import{c as b}from"./chunk-TWAD4QJO.js";import"./chunk-IMQHRNK4.js";import{a as C}from"./chunk-MGJOXMXS.js";import{a as B,c as E}from"./chunk-6PXAOD22.js";import{a as ie}from"./chunk-374UYNGS.js";import{a as D,b as te,c as I,f as y}from"./chunk-H5EO627A.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import"./chunk-HTT347OR.js";import{a as G}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{$ as J,Ea as ee,H as X,S as Z,b as Y,j as k,o as V,v as S,ya as K}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as v}from"./chunk-CRHRJPRJ.js";import{a as f}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as x}from"./chunk-OTWO5H3C.js";import{b as c,c as o,f as W,h as d}from"./chunk-BVG7RORO.js";import{a as A}from"./chunk-MM5FGF5D.js";import{b as _}from"./chunk-WFJOWCXF.js";import{c as i}from"./chunk-LI3RKPGW.js";import{a as Ce}from"./chunk-3AUSJ54I.js";import{a as j,b as P,h as $e}from"./chunk-CM6X6NVN.js";var m=$e(Ce());function se(l){return l.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}var oe=c`
  #usb-device-options {
    margin-block-start: var(--vst-space-3xs);
  }

  #complete-workflow-btn {
    margin-left: auto;
  }

  /* ////////////////////// Proximity Connect */
  .proximity-connect {
    top: 0;
    left: 0;
    right: var(--vst-space-l);
    bottom: 0;
    block-size: 100%;
  }

  .proximate-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: var(--vst-space-xs) 0;
  }
`;var ne=-60,M=!1;function re(l,e,t,s){let n=!0,r=!1,h=null;function a(p){M&&console.log("PREPARE TO CONNECT"),r=!0,l(p);let g=0;h=setInterval(()=>{p&&p.rssi<ne||!n?(M&&console.log("exit countdown, low rssi"),r=!1,e(),clearInterval(h)):(g++,M&&console.log(`count++ ${g}`)),g===3&&(clearInterval(h),t(p),r=!1)},1e3)}function z(){M&&console.log("proximate connect cancelled"),clearInterval(h),r=!1}function T(p){n&&p.find(O=>O.rssi>ne)&&!r&&a(p[0])}function we(){n=!0}function _e(){n=!1}function xe(p){let g=u=>!u.connected&&!u.active&&u.name!=="",U=p.filter(g).filter(u=>u.isRssiValid).sort((u,De)=>De.rssi-u.rssi);T(U),s(U[0])}return{enableSearch:we,disableSearch:_e,updateDeviceList:xe,cancelProximateDeviceCandidate:z}}var ce=c`
  /* Default */
  .container {
    inline-size: 100%;
    block-size: 100%;
    padding: var(--vst-space-m);
    overflow: auto;
    min-block-size: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .background {
    position: relative;
    z-index: 1;
    height: 100%;
    background-color: var(--vst-color-proximity-connect-bg);
    border: 2px solid var(--vst-color-warning-ui);
    border-radius: var(--vst-radius);
    transition: background-color 2.5s linear;
  }

  .background::after {
    display: block;
    content: '';
    height: 100%;
    width: 100%;
    transition: transform 2.5s linear, background-color 200ms linear;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
  }

  .message-container {
    margin: auto 0;
  }

  .heading[size='display'],
  p,
  .heading[size='xs'],
  .link[variant='back'] {
    color: var(--vst-color-proximity-connect-text);
  }

  .heading[size='display'],
  .heading[size='xs'],
  p {
    text-align: center;
  }

  .heading[size='display'] {
    margin-block-end: var(--vst-space-m);
    max-inline-size: 25ch;
    font-size: clamp(var(--vst-font-size-m), min(6vw, 5vh), var(--vst-font-size-2xl));
  }

  p {
    font-size: clamp(var(--vst-font-size-2xs, min(3vh, 3vw), var(--vst-font-size-s)));
  }

  .heading[size='xs'] {
    margin-block-end: var(--vst-space-s);
    max-inline-size: 25ch;
  }

  p {
    max-inline-size: 35ch;
    margin-block-end: var(--vst-space-s);
  }

  ${x("m",c`
      p {
        max-inline-size: auto;
      }
    `)}

  .link[variant='back'] {
    align-self: start;
  }

  .link[variant='back']:hover {
    background: transparent;
  }

  .found-device {
    height: 1.5rem;
    font-weight: bold;
  }

  .link[variant='back'] vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-proximity-connect-text);
  }

  /* Connecting(ed) */
  :host([isConnecting]) .container {
    grid-template-rows: 1fr;
  }

  :host([isConnecting]) .background,
  :host(.connection-succeeded) .background {
    border-color: var(--vst-color-success-ui);
  }

  :host(.connection-succeeded) .background {
    background-color: var(--vst-color-success-bg);
  }

  :host([isConnecting]) .background::after {
    will-change: background-color, transform;
    transform: scaleX(1);
    background-color: var(--vst-color-success-bg);
  }

  :host([isConnecting]) .heading[size='display'],
  :host([isConnecting]) .body,
  :host([isConnecting]) .heading[size='xs'],
  :host([isConnecting]) .link[variant='back'],
  :host(.connection-succeeded) .heading[size='display'],
  :host(.connection-succeeded) .body,
  :host(.connection-succeeded) .heading[size='xs'],
  :host(.connection-succeeded) .link[variant='back'] {
    color: var(--vst-color-success);
  }

  :host(.connection-succeeded) .link[variant='back'] vst-ui-icon,
  :host(.connection-succeeded) .link[variant='back'] vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-success);
  }

  /* Failed */
  :host(.connection-failed) .background {
    background-color: var(--vst-color-danger-bg);
    border-color: var(--vst-color-danger-ui);
  }

  :host(.connection-failed) .heading[size='display'],
  :host(.connection-failed) .body,
  :host(.connection-failed) .heading[size='xs'],
  :host(.connection-failed) .link[variant='back'] {
    color: var(--vst-color-danger);
  }

  :host(.connection-failed) .link[variant='back'] vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-danger);
  }
`;var ke=l=>!!l.name,Se=()=>{let l=[i("Tip: Sensors must have a flashing red light to be available for connection."),i("Tip: For best results check that the sensor you want is the only one within 2 meters of your computer, phone, or tablet."),i("Tip: Proximity connection relies on distance estimates. If unreliable in your environment, use the connection list to choose a sensor.")],e=Math.floor(3*Math.random());return l[e]},ae=class extends C(d){static get properties(){return{moveSensorClosePrompt:{type:String},hasBluetooth:{type:Boolean,reflect:!0},proximityConnectEnabled:{type:Boolean,reflect:!0},isConnecting:{type:Boolean,reflect:!0},proximateDevice:{type:Object},connectionSucceededMsg:{type:String},connectionFailedMsg:{type:String},ffShowRssi:{type:Boolean},largestRssiDevice:{type:Object},userTipMsg:{type:String}}}constructor(){super();this.moveSensorClosePrompt=i("Place your Go Direct Sensor near your computer, phone, or tablet"),this.hasBluetooth=!1,this.proximityConnectEnabled=!1,this.isConnecting=!1,this.proximateDevice={name:"",rssi:0},this.connectionSucceededMsg="",this.connectionFailedMsg="",this.ffShowRssi=b("ff-show-rssi"),this.largestRssiDevice={name:"",rssi:0},this.userTipMsg=Se(),this.proximityConnectController=re(this.onNewProximateDeviceCandidate.bind(this),this.onProximateDeviceCandidateRemoved.bind(this),this.onProximateDeviceFound.bind(this),this.updateLargestRssiDevice.bind(this))}firstUpdated(){this.$deviceManager=this.requestService("deviceManager"),this.bluetoothAvailable=this.$deviceManager.bluetoothAvailable,this.bluetoothIsDiscovering=this.$deviceManager.bluetoothIsDiscovering,this.startBluetoothDiscovery(),this.$deviceManager.on("bluetooth-device-list-changed",this.proximityConnectController.updateDeviceList)}disconnectedCallback(){let{$deviceManager:e}=this;e.off("bluetooth-device-list-changed",this.proximityConnectController.updateDeviceList),e.stopBluetoothDiscovery().then(()=>{this.proximityConnectController.cancelProximateDeviceCandidate(),setTimeout(()=>{this.proximityConnectController.cancelProximateDeviceCandidate()},4e3)}).catch(t=>{console.error(t)})}updated(e){e.forEach((t,s)=>{s==="proximityConnectEnabled"&&this._proximityConnectEnabledChanged()})}startBluetoothDiscovery(){{let{$deviceManager:e}=this;this.bluetoothAvailable&&!this.bluetoothIsDiscovering?e.startBluetoothDiscovery().then(()=>{this.bluetoothIsDiscovering=e.bluetoothIsDiscovering}).catch(t=>{console.error(t),this.hasBluetooth=!1}):this.hasBluetooth=!1}}onNewProximateDeviceCandidate(e){this.proximateDevice=e}onProximateDeviceCandidateRemoved(){this.proximateDevice={}}onProximateDeviceFound(e){this.isConnecting=!0,this.proximityConnectController.disableSearch(),this.$deviceManager.connectBluetoothDevice(e).then(()=>{this._proximateConnectionSucceeded(e),this.isConnecting=!1,this.proximateDevice={}}).catch(()=>{this._proximateConnectionFailed(e),this.isConnecting=!1,this.proximateDevice={}})}_proximateConnectionFailed(e){let t=i("Connection to %s failed");this.connectionFailedMsg=_(t,e.name),this.classList.add("connection-failed"),this.proximityConnectController.enableSearch(),setTimeout(()=>{this.connectionFailedMsg="",this.classList.remove("connection-failed")},2e3)}_proximateConnectionSucceeded(e){let t=i("Connection to %s succeeded");this.connectionSucceededMsg=_(t,e.name),this.classList.add("connection-succeeded"),this.proximityConnectEnabled=!1,setTimeout(()=>{this.close(),this.connectionSucceededMsg="",this.classList.remove("connection-succeeded")},2e3)}_proximityConnectEnabledChanged(){this.proximityConnectEnabled?this.proximityConnectController.enableSearch():this.proximityConnectController.disableSearch()}updateLargestRssiDevice(e){this.largestRssiDevice=e}close(){this.dispatchEvent(new CustomEvent("close-proximity-connect"))}static get styles(){return[v,ce]}_computeMessage(){return this.connectionSucceededMsg?o`<h2 margin="auto" class="heading" size="display">
        ${this.connectionSucceededMsg}
      </h2>`:this.connectionFailedMsg?o`<h2 margin="auto" class="heading" size="display">
        ${this.connectionFailedMsg}
      </h2>`:this.isConnecting?o`
        <h2 margin="auto" class="heading" size="display">${i("Connecting")}</h2>
        <div margin="auto" class="body found-device">${this.proximateDevice.name}</div>
      `:o`
      <h2 margin="auto" class="heading" size="display">${this.moveSensorClosePrompt}</h2>

      <p margin="auto">${this.userTipMsg}</p>

      <div margin="auto" class="found-device">
        ${ke(this.proximateDevice)?o`
              <p margin="auto" class="heading" size="xs">
                Device Found: ${this.proximateDevice.name}
              </p>
            `:""}
      </div>
    `}render(){return o`
      <section class="background">
        <div class="container">
          <button
            class="link"
            variant="back"
            id="back_button"
            @click="${this.close}"
            ?hidden="${this.isConnecting}"
          >
            <vst-ui-icon .icon="${Y}"></vst-ui-icon>
            <span>${i("Back")}</span>
          </button>
          <div class="message-container">
            ${this._computeMessage()}
            ${this.ffShowRssi?o` <span> (RSSI: ${this.proximateDevice.rssi})</span> `:""}
          </div>
        </div>
      </section>
    `}};customElements.define("vst-core-proximity-connect",ae);var le=c`
  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 0;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutDownFar {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    25% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    50% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    75% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    100% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
  }

  .device-list {
    margin: 0;
    flex: 1;
    width: 100%;
    background: var(--vst-color-bg);
  }

  .device {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    border-bottom: 1px solid var(--vst-color-bg-primary);
  }
  .device:last-of-type {
    border-bottom: 0;
  }
  .device__icon {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    --vst-ui-icon-color: var(--vst-color-fg-tertiary);
  }
  .device__name {
    font-family: var(--vst-font-family-mono);
    font-size: 0.95rem;
    display: flex;
    flex: 1;
    align-items: center;
    padding: var(--vst-space-xs);
  }
  ${D(c`.device_details-btn`)}
  .device__details-btn {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    background: none;
    padding: 0;
    border: 0;
    margin-inline-start: var(--vst-space-xs);
    display: block;
  }

  ${I(c`.device__disconnect-btn`)}

  .device__disconnect-btn {
    flex-shrink: 0;
    padding: 0.5em;
    text-align: right;
    position: relative;
    transition: var(--transition-faster);
  }

  .device__disconnect-btn:hover {
    background: var(--vst-color-btn-text-bg-hover);
  }

  .device--is-connecting .loading-spinner,
  .device--is-disconnecting .loading-spinner {
    display: block;
    visibility: visible;
  }
  .device--is-connected {
    ${B}
    ${E}
  }
  .device--type-usb .device__disconnect-btn {
    display: none;
  }

  .device-firmware-update {
    width: 100%;
    padding: 0 0 0 1.5rem;
    color: var(--vst-color-danger);
    margin: -0.25em 0 0.5em 0;
  }

  ${y(c`.device-firmware-update__btn`,"error")}
  .device-firmware-update__btn {
    position: relative;
    font-size: 0.75em;
    padding: 0.6em 1em 0.5em 1.9em;
  }
  .device-firmware-update__btn::before {
    content: '';
    display: block;
    position: absolute;
    top: 0.85rem;
    left: 0.55rem;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 100%;
    background-color: var(--vst-color-danger);
  }
  .device-firmware-update__btn:hover::before {
    background-color: var(--vst-color-bg);
  }

  .remote-collection {
    width: 100%;
    padding: 0 0 0 1.5rem;
    margin: -0.25em 0 0.5em 0;
  }

  ${y(c`.remote-collection__btn`,"secondary")}
  .remote-collection__btn {
    position: relative;
    font-size: 0.75em;
  }

  .device-channels-wrapper {
    width: 100%;
    padding-inline-start: 2em;
    padding-inline-end: 0.5em;
    margin-block-end: 0.5em;
    margin-block-start: -0.25em;
  }

  .device-channels__header-container {
    display: inline-flex;
  }
  .device-channels__header:focus {
    outline: none;
    /*  override real ugly chrome details outline styles */
  }
  .device-channels__header:focus .device-channels__header-head {
    border-bottom: 1px dotted var(--vst-color-bg-primary);
    margin-block-end: 1px;
  }
  .device-channels__header-head {
    color: var(--vst-color-text-brand);
    flex-shrink: 0;
    margin-inline-end: 1em;
  }
  .device-channels__header-channels {
    font-size: var(--vst-font-size-xs);
    color: var(--vst-color-fg-tertiary);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .device-channels__header-channels span::after {
    display: inline-block;
    content: ', ';
  }
  .device-channels__header-channels span:last-of-type::after {
    display: none;
  }
  .device-channels__list-item {
    margin: 0.125em 0;
  }
  .loading-spinner {
    display: none;
    position: absolute;
    right: 0.4375rem;
    top: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
`;var Be=l=>l?.channels?.length>1,de=l=>l.type==="usb",ve=class extends d{static get properties(){return{devices:{type:Array},deviceIsConnecting:{type:Boolean}}}constructor(){super();this.devices=[],this.deviceIsConnecting=!1}_channelEnabledChanged(e,t,s){let n=s.target.checked;this.dispatchEvent(new CustomEvent("enable-device-channel",{detail:{deviceId:e,channelId:t,enable:n}}))}_disconnectDevice(e){this.dispatchEvent(new CustomEvent("disconnect-device",{detail:e}))}_updateDeviceFirmware(e){this.dispatchEvent(new CustomEvent("update-device-firmware",{detail:e}))}_showDeviceDetails(e){this.dispatchEvent(new CustomEvent("show-device-details",{detail:e}))}static get styles(){return[v,le]}render(){return o`
      <ul class="device-list" id="connected_sources">
        ${this.devices.map(e=>o`
            <li
              class="device device--type-${e.type} device--is-${e.state}"
              id="device_${e.id}"
            >
              ${de(e)&&e.connected?o`
                    <vst-ui-icon
                      class="device__icon"
                      .icon="${X}"
                      aria-label="${i("USB Device")}"
                    ></vst-ui-icon>
                  `:""}
              ${!de(e)&&e.connected?o`
                    <vst-ui-icon
                      class="device__icon"
                      .icon="${k}"
                      aria-label="${i("Bluetooth Device")}"
                    ></vst-ui-icon>
                  `:""}

              <div class="device__name">
                <span>${e.name}</span>
                ${e.isRequiredDevice?"":o`
                      <vst-style-tooltip>
                        <button
                          class="btn"
                          variant="icon"
                          size="xs"
                          margin="inline-start-xs"
                          id="device_details_btn_${e.id}"
                          @click="${()=>this._showDeviceDetails(e)}"
                          type="button"
                          ?disabled="${this.deviceIsConnecting}"
                        >
                          <vst-ui-icon
                            class="device__details-icon"
                            color="${window.matchMedia("(prefers-color-scheme: dark)").matches?"var(--vst-color-light-100)":"var(--vst-color-brand)"}"
                            .icon="${S}"
                          ></vst-ui-icon>
                        </button>
                        <span role="tooltip" position="block-start-end"
                          >${_(i("%s details"),e.name)}</span
                        >
                      </vst-style-tooltip>
                    `}
              </div>
              ${e.connected?o`
                    <button
                      class="device__disconnect-btn"
                      @click="${()=>this._disconnectDevice(e)}"
                    >
                      ${i("Disconnect")}
                      <vst-ui-spinner class="loading-spinner"></vst-ui-spinner>
                    </button>
                  `:""}
              ${!e.isRequiredDevice&&e.firmware.hasUpdate?o`
                    <div class="device-firmware-update">
                      <button
                        class="btn"
                        variant="danger"
                        size="s"
                        type="button"
                        id="firmware_update_button"
                        @click="${()=>this._updateDeviceFirmware(e)}"
                        ?disabled="${this.deviceIsConnecting}"
                      >
                        ${i("Firmware Update Information")}
                      </button>
                    </div>
                  `:""}
              ${Be(e)?this.renderMultiChannelDevice(e):""}
            </li>
          `)}
      </ul>
    `}renderMultiChannelDevice(e){return o`
      <div class="device-channels-wrapper">
        <details id="device_channels" variant="arrow">
          <summary class="device-channels__header">
            <div class="device-channels__header-container">
              <div class="device-channels__header-head overline" margin="block-end-2xs">
                ${i("Sensor Channels")}
              </div>
              <div class="device-channels__header-channels">
                ${e.enabledChannels.map(t=>o` <span>${i(t.name,"sensormap")}</span> `)}
              </div>
            </div>
          </summary>
          <ul class="device-channels__list">
            ${e.channels.map(t=>o`
                <li class="device-channels__list-item">
                  <div class="checkbox-group">
                    <div class="checkbox">
                      <input
                        class="device-channels__channel-checkbox"
                        type="checkbox"
                        id="device_${e.id}_channel_${t.id}"
                        data-device="${e.id}"
                        name="channel_${t.id}"
                        .checked="${t.enabled}"
                        @change="${s=>this._channelEnabledChanged(e.id,t.id,s)}"
                      />
                      <span class="check"></span>
                    </div>
                    <label class="title" for="device_${e.id}_channel_${t.id}"
                      >${i(t.name,"sensormap")}</label
                    >
                  </div>
                </li>
              `)}
          </ul>
        </details>
      </div>
    `}};customElements.define("vst-ui-connected-device-list",ve);var he=c`
  .required-device {
    background-color: var(--vst-color-required-device-disconnected);
    border-inline-start: solid var(--vst-color-gold) var(--vst-required-device-border-size);
    border-radius: var(--vst-radius);
    color: var(--vst-color-fg-primary);
    font-size: var(--vst-font-size-m);
    font-weight: bold;
    margin: var(--vst-space-s);
    padding: var(--vst-space-xs) var(--vst-space-m);
  }

  .flex-device-container {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    min-width: 0;
  }

  .connected {
    background-color: var(--vst-color-brand-300);
    border-inline-start: solid var(--vst-color-brand-400) var(--vst-required-device-border-size);
    color: var(--vst-color-bg-tertiary);
  }

  li.required-device .status-icon {
    align-items: center;
    background-color: var(--vst-color-brand);
    border-radius: var(--vst-radius-circle);
    display: flex;
    flex-basis: var(--vst-icon-size-m);
    flex-shrink: 0;
    height: var(--vst-icon-size-m);
    justify-content: center;
    margin-inline-end: var(--vst-space-s);
    padding: var(--vst-space-2xs);
  }

  li.required-device.connected .status-icon {
    margin-inline-end: var(--vst-space-s);
  }

  .product-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .action-buttons {
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    margin-left: auto;
    padding-left: var(--vst-space-s);
  }

  .action-button {
    margin-inline-end: var(--vst-space-m);
    color: var(--vst-color-brand);
  }

  h3 {
    font-size: var(--vst-font-size-m);
    padding-bottom: var(--vst-space-xs);
  }
`;var Ee=["GW-HR"],Ie=l=>!Ee.includes(l),pe=class extends d{static get styles(){return[v,he]}static get properties(){return{dataPresent:{type:Boolean},devices:{type:Array},deviceIsConnecting:{type:Boolean},requiredDevices:{type:Array}}}constructor(){super();this.devices=[],this.deviceIsConnecting=!1,this.requiredDevices=[]}_checkIsConnected(e){return this.devices.map(s=>s.orderCode).includes(e)}_deviceIsBluetooth(e){return this.devices.find(t=>t.orderCode===e.name)?.type==="bluetooth"}_handleConnectWirelessClick(e){this.dispatchEvent(new CustomEvent("connect-wireless-clicked",{detail:{orderCode:e.target.value}}))}_handleConnectUSBClick(){let e=new CustomEvent("device-connect-requested",{detail:{type:"goDirectFamilyUSB"}});this.dispatchEvent(e),e.detail.promiseResponse&&e.detail.promiseResponse.catch(t=>{console.error(t)})}_handleDisconnect(e){this.dispatchEvent(new CustomEvent("disconnect-device",{detail:this.devices.find(t=>t.orderCode===e.name)}))}render(){return o` <ul id="required-devices">
        ${this.requiredDevices.map(e=>o` <li
              class="device flex-device-container required-device ${H({connected:this._checkIsConnected(e.name)})}"
              id="device-${e.name}"
            >
              <div class="status-icon">
                <vst-ui-icon
                  .icon="${this._checkIsConnected(e.name)?K:J}"
                  size="xs"
                  color="var(--vst-color-bg-tertiary)"
                ></vst-ui-icon>
              </div>
              <div class="product-name">${e.productName}</div>
              <div class="inline action-buttons">
                ${$(this._checkIsConnected(e.name),()=>o`
                    <button
                      class="btn action-button"
                      variant="outline"
                      value="${e.name}"
                      ?hidden=${!this._deviceIsBluetooth(e)}
                      @click="${()=>this._handleDisconnect(e)}"
                    >
                      ${i("Disconnect")}
                    </button>
                  `,()=>o`
                    <button
                      class="btn action-button"
                      variant="outline"
                      value="${e.name}"
                      @click="${this._handleConnectWirelessClick}"
                    >
                      ${i("Wireless")}
                    </button>
                    ${$(Ie(e.name),()=>o`<button
                        class="btn action-button"
                        variant="outline"
                        @click="${this._handleConnectUSBClick}"
                      >
                        ${i("USB")}
                      </button>`)}
                  `)}
              </div>
            </li>`)}
      </ul>
      ${$(this.requiredDevices.some(({name:e})=>!this._checkIsConnected(e)),()=>o` ${$(this.dataPresent,()=>o`<h3>Data Present</h3>`)}
          <button
            class="btn"
            variant="primary"
            @click=${()=>this.dispatchEvent(new Event("continue-without-connection"))}
          >
            ${i("Continue Without Required Devices")}
          </button>`)}`}};customElements.define("vst-ui-required-devices",pe);var me=window.device?.platform??"",ue=me!=="iOS"&&me!=="Android";var fe=c`
  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 0;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutDownFar {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    25% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    50% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    75% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    100% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
  }

  ${ie}
  :host {
    block-size: 100%;
    inline-size: 100%;
  }

  ${x("m",c`
      :host {
        inline-size: ${c`32rem`};
        max-block-size: 34rem;
      }
    `)}

  .debug {
    display: none;
    flex-basis: 80px;
    font-size: 0.75em;
    flex: 1;
  }

  /* ////////////////////// layout */
  /* min-block-size 16rem needed to keep pwa add device drop down from being hidden
  under scroll */
  .form-wrapper {
    display: flex;
    flex-direction: column;
    block-size: 100%;
    inline-size: 100%;
    min-block-size: 16rem;
  }

  .device-wrapper {
    flex: 1;
    inline-size: 100%;
    position: relative;
  }
  .device-wrapper--proximity-connect {
    overflow: hidden;
  }

  .submit-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .connected-devices__container {
    block-size: 100%;
    inline-size: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    /* Accommodate focus outline within overflow clip */
    padding: 0 calc(var(--vst-outline-offset) + var(--vst-outer-outline-offset));
  }

  .additional-actions {
    min-block-size: min-content;
  }

  .discovered-wireless-devices {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-block-size: min-content;
  }

  #required-device-heading {
    align-items: baseline;
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
  }

  #required-connect-instructions {
    flex-grow: 1;
    font-size: var(--vst-font-size-m);
  }

  #help-link {
    flex-grow: 1;
    font-size: var(--vst-font-size-s);
    justify-content: left;
    padding-left: 0;
    text-transform: uppercase;
  }

  .tabs {
    display: flex;
    flex-direction: column;
  }

  .proximate-device-list-wrapper {
    display: grid;
    grid-template-rows: max-content 1fr;
    min-block-size: min-content;
  }

  .connected-devices {
    inline-size: 100%;
    min-block-size: min-content;
  }

  /* ////////////////////// errors */
  .bluetooth-error {
    border: 1px solid var(--vst-color-warning);
    border-radius: var(--vst-radius);
    background: var(--vst-color-warning-bg);
    padding: var(--vst-space-m);
  }

  .bluetooth-error strong,
  .bluetooth-error p {
    color: var(--vst-color-warning);
  }

  .bluetooth-error a {
    white-space: nowrap;
  }

  .bluetooth-error {
    margin-block-start: var(--vst-space-xs);
  }
  .bluetooth-error > p {
    margin: 0;
  }

  /* ////////////////////// unconnected device list, many identical styles in vst-ui-connected-device-list */
  .device-list {
    margin: 0;
    flex: 1;
    inline-size: 100%;
    margin-block-end: var(--vst-space-xs);
    min-block-size: min-content;
  }

  .device {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    border-bottom: 1px solid var(--vst-color-bg-primary);
  }
  .device:last-of-type {
    border-bottom: 0;
  }
  .device__icon {
    inline-size: 1.125rem;
    block-size: 1.125rem;
    flex-shrink: 0;
  }
  .device__name {
    font-family: var(--vst-font-family-mono);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    flex: 1;
    padding: var(--vst-space-xs);
  }

  ${I(c`.device__btn`)}
  .device__btn {
    display: flex;
    inline-size: 100%;
    align-items: center;
    flex-flow: row wrap;
  }
  .device__action {
    flex-shrink: 0;
    padding: 0.5em;
  }
  .device__action-add {
    text-align: right;
    position: relative;
    transition: var(--transition-faster);
  }
  .device--is-connected {
    ${B};
    ${E};
  }
  .device--is-connecting .device__action-add,
  .device--is-disconnecting .device__action-add {
    visibility: hidden;
  }
  .device--is-connecting .loading-spinner,
  .device--is-disconnecting .loading-spinner {
    display: block;
    visibility: visible;
  }
  .device--is-connecting .device__btn[disabled] {
    opacity: 1;
    color: var(--vst-color-fg-secondary);
  }

  /*  .device-reading { */
  /*      display: table-cell; */
  /*      padding: .5em 1.25em; */
  /*      text-align: right; */
  /*      color: var(--vst-color-fg-tertiary); */
  /*      white-space: nowrap; */
  /*  } */

  .loading-spinner {
    display: none;
    position: absolute;
    right: 0.4375rem;
    top: -0.1875rem;
    inline-size: 1.5rem;
    block-size: 1.5rem;
  }

  .rssi-display {
    margin-inline-end: 6em;
    min-inline-size: 4em;
  }
  .rssi-display__value {
    color: #000;
  }

  /* ////////////////////// iOS only stream button */

  ${y(c`.discover-labquest-stream`,"secondary","small")}
  .discover-labquest-stream {
    display: block;
    margin: -1rem 0 1.5rem 0;
  }

  /* ////////////////////// Android only tabs */
  .tabs__nav {
    background-color: var(--vst-color-bg-primary);
    margin: 1rem 0 0 0;
  }

  .tabs__nav-list {
    margin: 0;
    display: flex;
    border: 1px solid var(--vst-color-bg-secondary);
  }

  .tabs__nav-list-item {
    border-left: 1px solid var(--vst-color-bg-primary);
    border-right: 1px solid var(--vst-color-bg-primary);
    background: var(--vst-color-bg);
  }

  .tabs__nav-list-item + .tabs__nav-list-item {
    border-left: 0;
  }

  ${D(c`.tabs__nav-btn`)}
  .tabs__nav-btn {
    color: var(--vst-color-brand);
    background-color: var(--vst-color-bg-primary);
    border: 0;
    margin: 0;
    border-top: 0.1875rem solid var(--vst-color-bg-primary);
    padding: 0.75rem;
    transform: translateY(0);
    white-space: nowrap;
    transition: transform 0.1s var(--transition-easing);
  }
  .tabs__nav-btn:hover,
  .tabs__nav-btn:focus {
    outline: 0;
    color: var(--vst-color-brand-dark);
    transform: translateY(-0.0625rem);
  }
  .tabs__nav-btn--active {
    background: var(--vst-color-bg);
    border-top: 0.1875rem solid var(--vst-color-brand);
    padding: 0.75rem;
    transform: translateY(-0.1875rem);
  }
  .tabs__nav-btn--active:hover,
  .tabs__nav-btn--active:focus {
    transform: translateY(-0.1875rem);
  }

  .tabs__panes {
    padding: 0.5rem 1rem 1rem;
    border: 1px solid var(--vst-color-bg-primary);
    border-top: 0;
    overflow: hidden;
  }

  /* ////////////////////// filter list */
  ${x("s",c`
      .filter__input {
        inline-size: 12rem;
        padding-inline-end: 2rem;
      }
    `)}

  .filter__input::placeholder {
    color: var(--vst-color-bg-primary);
  }

  #filter_clear_container {
    position: absolute;
    right: 0;
    top: 0.25rem;
  }

  ${D(c`.filter__clear`)}
  ${te(c`.filter__clear`)}
  .filter__clear {
    background: transparent;
    border: 0;
    inline-size: 2rem;
    block-size: 2rem;
    display: flex;
    align-items: center;
  }
  .filter__clear:hover .filter__clear-icon,
  .filter__clear:focus .filter__clear-icon {
    opacity: 1;
  }

  .filter__clear-icon {
    inline-size: 1.125rem;
    block-size: 1.125rem;
    opacity: 0.54;
  }

  /* ////////////////////// bottom buttons */
  ${y(c`.submit-btn`)}
  .submit-btn {
    margin-block-start: var(--vst-space-l);
  }

  #proximity_connect_lockup_wrapper {
    inline-size: max-content;
  }

  /* ////////////////////// Proximity Connect */
  .proximity-connect {
    top: 0;
    left: 0;
    right: var(--vst-space-l);
    bottom: 0;
    block-size: 100%;
  }

  .proximate-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: var(--vst-space-xs) 0;
  }

  #proximity_connect_lockup_wrapper {
    margin-bottom: var(--vst-space-s);
  }
`;var be=class extends d{static get properties(){return{}}static get styles(){return[v,c`
        ul {
          list-style: inside;
        }
      `]}render(){return o` <div>
      <span>
        ${i("You can connect a device either by a wired USB connection or wirelessly.")}
      </span>
      <ul>
        <li>${i("Use the USB or WIRELESS button as desired.")}</li>
        <li>
          ${i("Your browser will display available devices. Select the one you want and click Pair.")}
        </li>
        <li>${i("If an additional device is needed, repeat the process.")}</li>
      </ul>
    </div>`}};customElements.define("vst-ui-device-connect-help",be);var ge=class extends d{static get properties(){return{_isHelpDialogOpen:{state:!0},areDevicesRequired:{type:Boolean},bluetoothDiscoveryMode:{type:String},connectedDevices:{type:Array},deviceIsConnecting:{type:Boolean},filteredDiscoveredDevices:{type:Array},filterInput:{type:String},hasBluetooth:{type:Boolean},hasConnectableBLEDevices:{type:Boolean},hasNonRequiredDevice:{type:Boolean},isWindowsButNot10:{type:Boolean},proximityConnectEnabled:{type:Boolean},showLabQuestStreamBtn:{type:Boolean},showLabQuestStreamTabs:{type:Boolean},showRequiredDevices:{type:Boolean},softSensorIds:{type:Array},someDevicesAdded:{type:Boolean},text:{type:Object},windowsButNot10Message:{type:String}}}constructor(){super();this._filterRef=L(),this._isHelpDialogOpen=!1,this.bluetoothDiscoveryMode="gdx",this.deviceIsConnecting=!1,this.filteredDiscoveredDevices=[],this.filterInput="",this.hasBluetooth=!1,this.hasConnectableBLEDevices=!1,this.isWindowsButNot10=!1,this.windowsButNot10Message="",this.showRequiredDevices=!1,this.proximityConnectEnabled=!1,this.showLabQuestStreamTabs=!1,this.softSensorIds=[],this.someDevicesAdded=!1,this.areDevicesRequired=!1}async firstUpdated(){this.text.noDevicesFound!==""&&(this.shadowRoot.querySelector("#no_devices_found_wrapper").innerHTML=`<p  class="caption" margin="block-start-m" color="muted">${this.text.noDevicesFound}</p>`)}clearFilter(){this.dispatchEvent(new CustomEvent("filter-changed",{detail:""})),this._filterRef.value.focus()}done(){this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}scrollToTop(){let e=this.shadowRoot.querySelector("#device_wrapper");e.scrollTop=0}_handleFilterInput(e){this.dispatchEvent(new CustomEvent("filter-changed",{detail:e.target.value}))}_addSoftSensor(){this.dispatchEvent(new CustomEvent("add-soft-sensor"))}_removeSoftSensor(){this.dispatchEvent(new CustomEvent("remove-soft-sensor"))}_connectDevice(e){this.dispatchEvent(new CustomEvent("connect-device",{detail:e}))}_setBluetoothDiscoveryMode(e){this.dispatchEvent(new CustomEvent("set-bluetooth-discovery-mode",{detail:e}))}_discoverLabQuestStream(){this.dispatchEvent(new CustomEvent("discover-labquest-stream"))}_showProximityConnect(){this.dispatchEvent(new CustomEvent("show-proximity-connect"))}_openHelpDialog(){this._isHelpDialogOpen=!0}_closeHelpDialog(){this._isHelpDialogOpen=!1}static get styles(){return[v,R,fe]}render(){let e=this.proximityConnectEnabled?"device-wrapper--proximity-connect":"",t=this.bluetoothDiscoveryMode==="gdx"?"tabs__nav-btn--active":"",s=this.bluetoothDiscoveryMode==="lqstream"?"tabs__nav-btn--active":"",n=this.showLabQuestStreamTabs?"tabs__panes":"",r=this.bluetoothDiscoveryMode==="gdx"&&!0&&!0&&!0,h=r?"proximate-wrapper":"";return o`
      <div class="form-wrapper">
        <slot></slot>
        <div class="device-wrapper ${e}" id="device_wrapper">
          <slot name="proximity-connect"></slot>
          <div class="connected-devices__container" ?hidden="${this.proximityConnectEnabled}">
            <!-- displays connected devices -->
            <section class="connected-devices">
              <div
                ?hidden="${this.connectedDevices.length===0&&!this.deviceIsConnecting&&!this.areDevicesRequired}"
              >
                ${f(this.hasNonRequiredDevice,o`
                    <vst-ui-soft-alert type="warning" margin="block-xs" canClose compact>
                      <vst-ui-icon .icon=${ee} color="#fff"></vst-ui-icon>
                      ${i("You have a device connected that is not needed for this experiment.")}
                    </vst-ui-soft-alert>
                  `)}
                <div id="required-device-heading">
                  <h3 id="required-connect-instructions">
                    ${this.showRequiredDevices?this.text.requiredDevices:this.text.connectedDevices}
                  </h3>
                  <button
                    class="btn"
                    variant="link"
                    id="help-link"
                    ?hidden="${!this.showRequiredDevices}"
                    @click="${this._openHelpDialog}"
                  >
                    ${i("Help connecting a device")}
                  </button>
                </div>
                ${f(this.deviceIsConnecting,o`<vst-ui-spinner></vst-ui-spinner>`)}
                <slot name="device-list"></slot>
              </div>
              <div ?hidden="${this.deviceIsConnecting}">
                <h3
                  class="heading"
                  size="m"
                  margin="block-end-xs"
                  ?hidden="${this.connectedDevices.length!==0||this.showRequiredDevices}"
                >
                  ${this.text.noDevicesConnected}
                </h3>
                <p color="muted" margin="block-end-s" ?hidden="${this.showRequiredDevices}">
                  ${ue?o` ${this.text.connectHowTo} `:o` ${this.text.connectHowToNoUSB} `}
                </p>
                <slot name="add-devices"></slot>
              </div>
            </section>
            <!-- LQStream and ff soft sensor buttons -->
            <section class="additional-actions">
              <ul>
                <li>
                  ${this.showLabQuestStreamBtn?o`
                        <button
                          class="discover-labquest-stream"
                          @click="${this._discoverLabQuestStream}"
                        >
                          ${i("Connect a LabQuest Stream")}
                        </button>
                      `:""}
                </li>
                <li>
                  ${b("ff-ga-expose-soft-device")?o`
                        ${f(!this.softSensorIds?.length,o`
                            <button id="add-soft-sensor" class="btn" @click=${this._addSoftSensor}>
                              ${i("Add Soft Sensor")}
                            </button>
                          `,o`
                            <button
                              id="remove-soft-sensor"
                              class="btn"
                              @click="${this._removeSoftSensor}"
                            >
                              ${i("Remove Soft Sensor")}
                            </button>
                          `)}
                      `:""}
                </li>
              </ul>
            </section>
            <!-- discovered wireless devices (NOT PWA) -->
            <section class="discovered-wireless-devices" ?hidden="${!1}">
              <h3 class="heading" size="m" margin="block-end-xs">
                ${this.text.discoveredWireless}
              </h3>

              ${this.hasBluetooth?o`
                    <div class="tabs">
                      <nav class="tabs__nav" ?hidden="${!this.showLabQuestStreamTabs}">
                        <ul class="tabs__nav-list">
                          <li class="tabs__nav-list-item">
                            <button
                              class="tabs__nav-btn overline ${t}"
                              @click=${()=>this._setBluetoothDiscoveryMode("gdx")}
                            >
                              ${i("Go Direct")}
                            </button>
                          </li>
                          <li class="tabs__nav-list-item">
                            <button
                              class="tabs__nav-btn overline ${s}"
                              @click=${()=>this._setBluetoothDiscoveryMode("lqstream")}
                            >
                              ${i("LabQuest Stream")}
                            </button>
                          </li>
                        </ul>
                      </nav>

                      <div class="proximate-device-list-wrapper ${n}">
                        <!-- .tab__panes or '' -->
                        <div class="${h}">
                          ${r?o`
                                <button
                                  class="btn"
                                  id="proximity_connect_lockup_wrapper"
                                  @click="${this._showProximityConnect}"
                                >
                                  <vst-ui-icon
                                    size="xs"
                                    margin="inline-end-xs"
                                    .icon="${Z}"
                                    color="#fff"
                                  ></vst-ui-icon>
                                  ${i("Proximity Connect")}
                                </button>
                              `:""}
                          ${this.hasConnectableBLEDevices?o`
                                <vst-ui-form>
                                  <form class="filter">
                                    <div class="floating-label">
                                      <input
                                        id="filter_input"
                                        type="text"
                                        .value="${this.filterInput}"
                                        autocomplete="off"
                                        autocorrect="off"
                                        autocapitalize="off"
                                        spellcheck="false"
                                        placeholder="${i("e.g., 007 or TMP")}"
                                        @input="${this._handleFilterInput}"
                                        ${q(this._filterRef)}
                                      />
                                      <label for="filter_input"
                                        >${this.text.filterDeviceList}</label
                                      >
                                      <vst-style-tooltip id="filter_clear_container">
                                        <button
                                          class="filter__clear"
                                          ?hidden="${!this.filterInput}"
                                          @click="${this.clearFilter}"
                                          ?disabled="${this.deviceIsConnecting}"
                                          type="button"
                                        >
                                          <vst-ui-icon
                                            class="filter__clear-icon"
                                            .icon="${V}"
                                          ></vst-ui-icon>
                                        </button>
                                        <span role="tooltip" position="block-start-end"
                                          >${i("Clear Filter")}</span
                                        >
                                      </vst-style-tooltip>
                                    </div>
                                  </form>
                                </vst-ui-form>
                              `:""}
                        </div>
                        ${this.hasConnectableBLEDevices?o`
                              <ul class="device-list" id="discovered_sources">
                                ${this.filteredDiscoveredDevices.map(a=>o`
                                    <li
                                      class="device device--type-${a.type} device--is-${a.state}"
                                      id="device_${a.id}"
                                    >
                                      <button
                                        class="device__btn"
                                        type="button"
                                        @click="${()=>this._connectDevice(a)}"
                                        ?disabled="${this.deviceIsConnecting}"
                                        aria-label="${this.text.bluetoothDevice}"
                                      >
                                        <vst-ui-icon
                                          class="device__icon"
                                          .icon="${k}"
                                        ></vst-ui-icon>
                                        <div class="device__name">
                                          <span>${a.name}</span>
                                        </div>
                                        <ul class="debug" selectable>
                                          <li>id: ${a.id}</li>
                                          <li>type: ${a.type}</li>
                                          <li>name: ${a.name}</li>
                                          <li>rssi: ${a.rssi}</li>
                                          <li>connectable: ${a.connectable}</li>
                                          <li>state: ${a.state}</li>
                                          <li>error: ${a.errorMessage}</li>
                                        </ul>
                                        ${b("ff-show-rssi")?o`
                                              <div class="rssi-display">
                                                <span class="rssi-display__label">RSSI:</span>
                                                <span class="rssi-display__value"
                                                  >${a.rssi}</span
                                                >
                                              </div>
                                            `:""}
                                        <div class="device__action">
                                          <span class="device__action-add"
                                            >${i("Connect")}
                                            <vst-ui-spinner class="loading-spinner"></vst-ui-spinner
                                          ></span>
                                        </div>
                                      </button>
                                    </li>
                                  `)}
                              </ul>
                            `:o` <p color="muted" margin="block-2xs">${this.text.searching}</p> `}
                      </div>
                    </div>
                  `:o`
                    <div class="bluetooth-error">
                      ${this.isWindowsButNot10?o`
                            <strong>${i(this.windowsButNot10Message)}</strong>
                            <p>${i("Windows 10 is required for wireless connection.")}</p>
                          `:o`
                            <strong>${i("Bluetooth not enabled")}</strong>
                            <p>${i("Enable bluetooth to connect wireless sensors.")}</p>
                          `}
                    </div>
                  `}
            </section>
          </div>
        </div>
        <vst-ui-dialog ?open="${this._isHelpDialogOpen}" @dialog-close="${this._closeHelpDialog}">
          <h2 slot="header">${i("Help Connecting a Device")}</h2>
          <vst-ui-device-connect-help slot="content"></vst-ui-device-connect-help>
        </vst-ui-dialog>
        ${f(!1,W,o`
            <div class="submit-wrapper">
              <button class="submit-btn" @click="${this.done}" type="button" id="start_session_btn">
                ${i("Done")}
              </button>
            </div>
          `)}
      </div>
    `}};customElements.define("vst-ui-device-manager",ge);var ye=class extends d{static get styles(){return[v,c`
        :host {
          max-inline-size: 40rem;
        }

        .btn[variant='outline'] {
          text-transform: none;
          color: var(--vst-color-text-brand);
        }

        .device-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .device-list .btn {
          flex: 1;
          margin: var(--vst-space-3xs);
        }
      `]}static get properties(){return{_openHelp:{type:Boolean,state:!0},options:{type:Array}}}constructor(){super();this._openHelp=!1,this.options=[]}requestConnection(e){return()=>{let t=new CustomEvent("device-connect-requested",{detail:{type:e}});this.dispatchEvent(t),t.detail.promiseResponse&&t.detail.promiseResponse.then(s=>{!s||this.dispatchEvent(new CustomEvent("close-dialog",{bubbles:!0,detail:"usb_connection_dialog"}))}).catch(s=>{console.error(s)})}}render(){return o`
      <div class="stack" gap="s">
        <div class="inline" gap="2xs">
          <div>
            <p class="caption">
              ${i("Select the type of device you would like to connect.")}
            </p>
            <button
              id="show-sensor-help"
              class="btn"
              variant="icon"
              size="xs"
              @click="${()=>{this._openHelp=!0}}"
            >
              <vst-ui-icon .icon="${S}"></vst-ui-icon>
            </button>
          </div>
        </div>
        <div class="device-list">
          ${Q(this.options,({label:e,type:t})=>o`
              <button
                id="connect-${t}"
                class="btn"
                variant="outline"
                @click=${this.requestConnection(t)}
              >
                ${e}
              </button>
            `)}
        </div>
      </div>
      <vst-ui-dialog
        id="help-dialog"
        @before-open="${import("./vst-ui-add-device-help-TZRCXYH6.js")}"
        @dialog-close="${()=>{this._openHelp=!1}}"
        ?open="${this._openHelp}"
      >
        <vst-ui-add-device-help slot="content"></vst-ui-add-device-help>
      </vst-ui-dialog>
    `}};customElements.define("vst-ui-add-usb-device",ye);var F=!1,w=class extends C(G(d)){static get properties(){return{_areRequiredDevicesConnected:{state:!0},_dataPresent:{state:!0},_requiredDevices:{state:!0},allowsLabQuestStreamDiscovery:{type:Boolean},bluetoothDiscoveryMode:{type:String},bluetoothIsDiscovering:{type:Boolean,reflect:!0},connectedDevices:{type:Array},deviceInfoTitleText:{type:String},deviceIsConnecting:{type:Boolean},devices:{type:Array},ffShowRssi:{type:Boolean},filteredDiscoveredDevices:{type:Array},filterInput:{type:String},hasBluetooth:{type:Boolean},isWindowsButNot10:{type:Boolean},noDevicesConnectedText:{type:String},noDevicesFoundText:{type:String},proximityConnectEnabled:{type:Boolean},requireOneDevice:{type:Boolean},showLabQuestStreamBtn:{type:Boolean},showLabQuestStreamTabs:{type:Boolean},showRequiredDevices:{type:Boolean},showUSBAuthDevice:{type:Boolean},someDevicesAdded:{type:Boolean},text:{type:Object},webUSBOptions:{type:Array},windowsButNot10Message:{type:String}}}constructor(){super();this._areRequiredDevicesConnected=F,this._dataPresent=!1,this._requiredDevices=[],this._vstUIDeviceManagerRef=L(),this.allowsLabQuestStreamDiscovery=!1,this.bluetoothAvailable=!1,this.bluetoothDiscoveryMode="gdx",this.bluetoothIsDiscovering=!1,this.connectedDevices=[],this.deviceInfoTitleText=i("Device Information"),this.deviceIsConnecting=!1,this.devices=[],this.filteredDiscoveredDevices=[],this.filterInput="",this.hasBluetooth=!1,this.isWindowsButNot10=!1,this.proximityConnectEnabled=!1,this.requireOneDevice=!1,this.showLabQuestStreamBtn=!1,this.showLabQuestStreamTabs=!1,this.showRequiredDevices=!1,this.showUSBAuthDevice=!1,this.someDevicesAdded=!1,this.text={bluetoothDevice:i("Bluetooth Device"),connectHowTo:i("Connect to a wireless device below or connect via USB."),connectHowToNoUSB:i("Connect to a wireless device below."),connectedDevices:i("Connected Devices"),discoveredWireless:i("Discovered Wireless Devices"),filterDeviceList:i("Filter Device List"),noDevicesConnected:i("No Devices Connected"),noDevicesFound:"",requiredDevices:i("Connect these devices for data collection."),searching:i("Searching for devices...")},this.webUSBOptions=[],this.windowsButNot10Message=""}get _hasNonRequiredDevices(){let e=this.connectedDevices.map(s=>s.orderCode),t=this._requiredDevices.map(s=>s.name);return this.showRequiredDevices&&!e.every(s=>t.includes(s))}get noDevicesConnectedText(){return this.text.noDevicesConnected}set noDevicesConnectedText(e){this.text=P(j({},this.text),{noDevicesConnected:e})}get noDevicesFoundText(){return this.text.noDevicesFound}set noDevicesFoundText(e){this.text=P(j({},this.text),{noDevicesFound:e})}updated(e){e.forEach((t,s)=>{if(s==="hasBluetooth")this._bluetoothAvailabilityChanged();else if(s==="bluetoothDiscoveryMode")this._bluetoothDiscoveryModeChanged();else if(s==="filterInput")this.filterDiscoveredDevices();else if(s==="devices")this._hasConnectableBLEDevices();else if(s==="allowsLabQuestStreamDiscovery"){let n=m.default.os.family==="iOS"||navigator.maxTouchPoints>0&&m.default.os.family==="OS X";this.showLabQuestStreamBtn=n&&this.allowsLabQuestStreamDiscovery,this.showLabQuestStreamTabs=m.default.os.family.toLowerCase()==="android"&&this.allowsLabQuestStreamDiscovery}else s==="_areRequiredDevicesConnected"&&t===!1&&this._areRequiredDevicesConnected&&setTimeout(()=>{this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))},750)})}disconnctedCallback(){super.disconnectedCallback(),this.eventBinder.unbindAll()}async firstUpdated(){this.eventBinder=new N,this.ffShowRssi=b("ff-show-rssi"),[this.$appLifecycle,this.$bgPageComm,this.$deviceManager,this.$popoverManager,this.$sensorWorld]=this.requestServices(["appLifecycle","bgPageComm","deviceManager","popoverManager","sensorWorld"]),this.addObservableProperty({store:this.$sensorWorld,key:"softSensorIds"}),this.eventBinder.bindListeners({source:this.$deviceManager,target:this,eventMap:{"device-list-changed":"handleDeviceListChanged"}}),this.deviceWrapperEl=this.shadowRoot.querySelector("#device_wrapper"),this.proximityConnectEl=this.shadowRoot.querySelector("#proximity_connect"),this.proximityConnectEl.addEventListener("close-proximity-connect",this.hideProximityConnect.bind(this)),this.bluetoothDiscoveryMode=this.$deviceManager.bluetoothDiscoveryMode;let e=this.requestService("dataWorld");e.blockSynced.then(()=>{this._dataPresent=e.columns.some(r=>Boolean(r.values.length))}),await this.updateComplete,this.showRequiredDevices&&(this._requiredDevices=(await this.$deviceManager.getGdxDeviceSources()).map(r=>({id:r.deviceId,name:r.name,productName:r.productName,isRequiredDevice:!0})),this._requiredDevices.length===1&&(this.text.requiredDevices=i("Connect this device for data collection.")));let t=this.getDevices();t.forEach(r=>{r.errorMessage&&(r.errorMessage=null)}),this.updateDeviceLists(t),this.startBluetoothDiscovery();let s=m.default.os.family.toLowerCase().includes("windows"),n=m.default.os.version;if(s){let r=n.slice(0,2)==="10"&&(n.length===2||n.charAt(2)==="."||n.charAt(2)===" ");n.length!==0&&!r&&(this.isWindowsButNot10=!0)}}_bluetoothAvailabilityChanged(){clearInterval(this._checkBluetoothInterval),this._checkBluetoothInterval=null,this.hasBluetooth||(this._checkBluetoothInterval=setInterval(()=>{this.startBluetoothDiscovery()},5e3))}async updateDeviceLists(e){if(this.devices=e,this.showRequiredDevices){this.connectedDevices=e.filter(n=>n.connected||n.active);let t=this.connectedDevices.map(n=>n.orderCode);F=this._requiredDevices.map(n=>n.name).every(n=>t.includes(n)),this._areRequiredDevicesConnected=F}else this.connectedDevices=e.filter(t=>t.connected||t.active);if(this.filterDiscoveredDevices(),this._connectingToDevice){let t=this.devices.find(s=>s?.deviceName===this._connectingToDevice.name);t&&(!t?.connected||!t?.active)&&(this._connectingToDevice=null,await this.connectDevice(t))}await this.updateComplete,this.requestUpdate()}async handleDeviceListChanged(){await this.updateDeviceLists(this.getDevices()),this.connectedDevices.length>0&&(this.deviceIsConnecting=!1,this.requireOneDevice&&this._completeWorkflow())}getDevices(){let{usbDeviceList:e,bluetoothDeviceList:t}=this.$deviceManager,s=[];return e.forEach(n=>{s.push(n)}),t.forEach(n=>{s.push(n)}),s}async connectDevice(e){this.deviceIsConnecting=!0;try{await this.$deviceManager.connectBluetoothDevice(e),this._vstUIDeviceManagerRef.value.scrollToTop()}catch(t){w.deviceConnectionError(t,e)}finally{this.deviceIsConnecting=!1}}async _disconnectDevice(e){let t=e.detail;this.deviceIsConnecting=!0;try{await this.$deviceManager.disconnectDevice(t)}catch(s){w.deviceConnectionError(s,t)}finally{this.deviceIsConnecting=!1}}async startBluetoothDiscovery(){this.bluetoothAvailable=this.$deviceManager.bluetoothAvailable;try{await this.$deviceManager.startBluetoothDiscovery(),this.bluetoothIsDiscovering=this.bluetoothIsDiscovering,this.hasBluetooth=!0}catch(e){console.error(e),this.hasBluetooth=!1}}discoverLabQuestStream(){this.$deviceManager.discoverLabQuestStream()}_addSoftSensor(){this.$sensorWorld.addSoftSensor(0)}_removeSoftSensor(){this.$sensorWorld.removeSoftSensor(0)}static deviceConnectionError(e,t){console.error(e),console.error(t)}async authorizeWebDevice(e,t=""){let s=window.vstRequestDevice[e],n;if(typeof s=="function"){this.deviceIsConnecting=!0;try{if([n]=await s(t),!n)throw new Error;this._connectingToDevice=n;let r=this.devices.find(h=>h?.deviceName===this._connectingToDevice?.name);r&&(!r?.connected||!r?.active)&&(this._connectingToDevice=null,await this.connectDevice(r))}catch(r){throw this.deviceIsConnecting=!1,new Error(`Web Device API ${e} cancelled.`)}}return n}static _isDeviceConnected(e){return e.connected||e.active}_hasConnectableBLEDevices(){let e=[];return this.bluetoothDiscoveryMode==="lqstream"?e=this.devices.filter(t=>t.state!=="connected"&&t.name.includes("LabQuest Stream")):e=this.devices.filter(t=>t.state!=="connected"&&!t.name.includes("LabQuest Stream")),this.hasConnectableBLEDevices=e.length>0,this.hasConnectableBLEDevices}_enableDeviceChannel(e){let{deviceId:t,channelId:s,enable:n}=e.detail;this.$deviceManager.enableDeviceChannel(t,s,n)}_handleConnectDevice({detail:e}){this.connectDevice(e)}_handleFilterDiscoveredDevices({detail:e}){this.filterInput=e,this.filterDiscoveredDevices()}_isDeviceSameAsUSBConnectedDevice(e){return this.devices.filter(s=>s.state==="connected"&&s.type==="usb"&&s.name===e.name).length>0}filterDiscoveredDevices(){this.filteredDiscoveredDevices=[];let e=this.devices.filter(s=>{let n=!w._isDeviceConnected(s)&&!this._isDeviceSameAsUSBConnectedDevice(s)&&s.name!==""&&s.type==="bluetooth";return this.bluetoothDiscoveryMode==="lqstream"?n&&s.name.includes("LabQuest Stream"):n&&!s.name.includes("LabQuest Stream")});if(this.ffShowRssi){let s=(n,r)=>r.lastValidRssi-n.lastValidRssi;e.sort(s)}let t=this.filterInput.toLowerCase();t!==""?this.filteredDiscoveredDevices=e.filter(s=>s.name.toLowerCase().match(se(t))):this.filteredDiscoveredDevices=e}setBluetoothDiscoveryMode({detail:e}){this.bluetoothDiscoveryMode=e}async _bluetoothDiscoveryModeChanged(){{let{$deviceManager:e}=this;this.hasConnectableBLEDevices=!1,this._clearFilter();try{this.bluetoothDiscoveryMode==="lqstream"?await e.startLabquestStreamDiscovery():await e.startBluetoothDiscovery()}catch(t){console.error(t)}}}async _showDeviceDetails(e){let t=e.detail;await import("./vst-core-device-info-GH4Y3MTW.js"),this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"device_info",params:{title:this.deviceInfoTitleText,device:t}}}))}showProximityConnect(){this.proximityConnectEnabled=!0,this.proximityConnectEl.proximityConnectEnabled=!0}hideProximityConnect(){this.proximityConnectEnabled=!1,this.proximityConnectEl.proximityConnectEnabled=!1}authorizeWebDeviceEventWithPromiseResponse({detail:e}){let{type:t}=e;e.promiseResponse=new Promise(async(s,n)=>{try{let r=await this.authorizeWebDevice(t);return r?s(r):n(new Error("No device was authorized"))}catch(r){return n(r)}})}_bypassRequiredDevices(){this._completeWorkflow()}_completeWorkflow(){this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}_updateDeviceFirmware(e){let t=e.detail,n=t.deviceName.startsWith("GDX-TMP 0F3")&&t.firmware.primary==="5.1.0",r=m.default.os.family.toLowerCase()==="ios"||m.default.os.family.toLowerCase()==="android",h=i("There is new firmware available for this sensor.  The update process requires that the sensor be connected by USB and that Graphical Analysis shut down temporarily. Connect the sensor by USB if it is now connected wirelessly.");n?h=i("There is new firmware available for this sensor to resolve spurious readings when the probe is in an environment below 0\xB0C. The update process cannot be performed from Graphical Analysis."):r&&(h=i("There is new firmware available for this sensor, but the update cannot be applied from this device.  To update this sensor, connect it by USB on a macOS, Windows, or ChromeOS device and launch Graphical Analysis. Go to the Connected Devices list, and initiate the update."));let a=[];a.push({id:"cancel",message:i("Cancel"),variant:"text",onClick:async()=>{this.dispatchEvent(A("message_box"))}}),n?a.push({id:"info",message:i("Open Update Information"),onClick:async()=>{window.open("https://www.vernier.com/til/15964","_blank")}}):a.push({id:"update",message:i("Close App and Update Firmware"),onClick:async()=>{let z=()=>new Promise(T=>{setTimeout(()=>{this.$bgPageComm.sendMessage("launch-firmware-updater",{async:!1}),T()})});this.$appLifecycle.onClose.addPromise(Number.MAX_SAFE_INTEGER,z),document.dispatchEvent(new CustomEvent("close-app",{bubbles:!0,composed:!0})),this.dispatchEvent(A("message_box"))}}),this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:i("Update Firmware"),content:h,actions:a},onClose:()=>{this.messageBoxInView=!1}}}))}_clearFilter(){this.filterInput="",this.filterDiscoveredDevices()}static get styles(){return[v,R,oe]}renderAddDevices(){return f(!1,o`
        <div class="inline" gap="m" justify="flex-start">
          <div>
            <button
              id="connect-wireless"
              class="btn"
              variant="primary"
              @click="${()=>{this.showUSBAuthDevice=!1,this.authorizeWebDevice("bluetooth")}}"
            >
              ${i("Wireless")}
            </button>
            <button
              id="connect-usb"
              class="btn"
              variant="primary"
              @click="${()=>{this.showUSBAuthDevice=!this.showUSBAuthDevice}}"
            >
              ${i("USB")}
            </button>
            <button
              id="complete-workflow-btn"
              class="btn"
              variant="brand-outline"
              @click="${this._completeWorkflow}"
            >
              ${i("Done")}
            </button>
          </div>
          <div id="usb-device-options" ?hidden="${!this.showUSBAuthDevice}">
            <vst-ui-add-usb-device
              .options=${this.webUSBOptions}
              @device-connect-requested=${this.authorizeWebDeviceEventWithPromiseResponse}
            ></vst-ui-add-usb-device>
          </div>
        </div>
      `)}render(){return o`
      <!-- device manager ui -->
      <vst-ui-device-manager
        .areDevicesRequired=${this.showRequiredDevices&&!this._areRequiredDevicesConnected}
        .bluetoothDiscoveryMode=${this.bluetoothDiscoveryMode}
        .connectedDevices=${this.connectedDevices}
        .deviceIsConnecting=${this.deviceIsConnecting}
        .filteredDiscoveredDevices=${this.filteredDiscoveredDevices}
        .filterInput=${this.filterInput}
        .hasBluetooth=${this.hasBluetooth}
        .hasConnectableBLEDevices=${this.hasConnectableBLEDevices}
        .hasNonRequiredDevice=${this._hasNonRequiredDevices}
        .isWindowsButNot10=${this.isWindowsButNot10}
        .proximityConnectEnabled=${this.proximityConnectEnabled}
        .showLabQuestStreamBtn=${this.showLabQuestStreamBtn}
        .showLabQuestStreamTabs=${this.showLabQuestStreamTabs}
        .showRequiredDevices=${this.showRequiredDevices}
        .softSensorIds=${this.softSensorIds}
        .someDevicesAdded=${this.someDevicesAdded}
        .text=${this.text}
        .windowsButNot10Message=${this.windowsButNot10Message}
        @add-soft-sensor=${this._addSoftSensor}
        @connect-device=${this._handleConnectDevice}
        @remove-soft-sensor=${this._removeSoftSensor}
        @set-bluetooth-discovery-mode=${this.setBluetoothDiscoveryMode}
        @discover-labquest-stream=${this.discoverLabQuestStream}
        @show-proximity-connect=${this.showProximityConnect}
        @filter-changed=${this._handleFilterDiscoveredDevices}
        ${q(this._vstUIDeviceManagerRef)}
      >
        <vst-core-proximity-connect
          id="proximity_connect"
          class="proximity-connect"
          slot="proximity-connect"
          ?hidden="${!this.proximityConnectEnabled}"
        ></vst-core-proximity-connect>
        <vst-ui-connected-device-list
          slot="device-list"
          ?hidden=${this.showRequiredDevices}
          .devices="${this.connectedDevices}"
          ?deviceIsConnecting="${this.deviceIsConnecting}"
          @enable-device-channel="${this._enableDeviceChannel}"
          @disconnect-device="${this._disconnectDevice}"
          @show-device-details="${this._showDeviceDetails}"
          @update-device-firmware="${this._updateDeviceFirmware}"
        ></vst-ui-connected-device-list>
        <vst-ui-required-devices
          slot="device-list"
          ?hidden=${!this.showRequiredDevices}
          .devices="${this.connectedDevices}"
          .requiredDevices="${this._requiredDevices}"
          .dataPresent="${this._dataPresent}"
          .deviceIsConnecting="${this.deviceIsConnecting}"
          @connect-wireless-clicked="${({detail:e})=>{let{orderCode:t}=e;this.authorizeWebDevice("bluetooth",t)}}"
          @continue-without-connection=${this._bypassRequiredDevices}
          @device-connect-requested=${this.authorizeWebDeviceEventWithPromiseResponse}
          @disconnect-device="${this._disconnectDevice}"
        ></vst-ui-required-devices>
        <div slot="add-devices" ?hidden="${this.showRequiredDevices}">
          ${this.renderAddDevices()}
        </div>
      </vst-ui-device-manager>
    `}};customElements.define("vst-core-device-manager",w);
