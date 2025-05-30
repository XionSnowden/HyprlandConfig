import{a as t,b as a}from"./chunk-KN5R6GSV.js";import{a as r}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{c as o}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as n,c as s,h as i}from"./chunk-BVG7RORO.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var c=class extends r(i){static get observableProperties(){return{online:a,errorType:t,isHost:t,isClient:t}}static get styles(){return[o,n`
        :host {
          padding: var(--vst-space-m);
        }
        .flex {
          display: flex;
          align-items: center;
          margin-inline-start: auto;
          width: min-content;
        }

        .helper-text {
          max-inline-size: 50ch;
        }
      `]}startNewSession(){t.resetPeerStatus(),this.dispatchEvent(new CustomEvent("start-new-session"))}reconnect(){this.dispatchEvent(new CustomEvent("reconnect-data-share-client"))}render(){return s`
      <p class="helper-text body" margin="block-end-m">
        ${this.isHost?e("An internet connection is required to share data. Reconnect to the internet and then start a new data sharing session to continue sharing."):e("An internet connection is required to connect to a data sharing session. Reconnect to the internet and then tap reconnect.")}
      </p>
      <div class="flex">
        <button
          class="btn"
          variant="text"
          margin="inline-end-xs"
          ?hidden="${this.errorType!=="offline"}"
          id="cancel_client_btn"
          @click="${()=>t.resetPeerStatus()}"
        >
          ${e("Cancel")}
        </button>
        <button
          class="btn"
          id="reconnect_client_btn"
          @click="${this.isHost?this.startNewSession:this.reconnect}"
          ?disabled="${!this.online}"
          ?hidden="${this.errorType!=="offline"}"
        >
          ${this.isHost?e("Start a New Session"):e("Reconnect")}
        </button>
      </div>
    `}};customElements.define("ga-datashare-disconnected",c);export{c as GaDataShareDisconnected};
