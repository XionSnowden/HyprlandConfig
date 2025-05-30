import{a as s}from"./chunk-RHPEAR5C.js";import{a as l}from"./chunk-R6LDBG7J.js";import{a as d}from"./chunk-JWPGNWQB.js";import{a as i}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import{a as n}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import{c as r}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as o,c as e,h as p}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import{a as g}from"./chunk-3AUSJ54I.js";import{h as U}from"./chunk-CM6X6NVN.js";var c=U(g());var u=o`
  ${n}
  .updates__status {
    margin: 0 0 1rem 0;
  }

  .updates__error {
    margin-block-start: 1rem;
  }
  .updates__error summary {
    color: var(--vst-color-danger);
  }

  .btn[variant='outline'] {
    margin: auto;
  }

  .loading-spinner {
    width: 1.75rem;
    height: 1.75rem;
  }
`;var h=class extends i(p){static get properties(){return{isElectron:{type:Boolean},checkingForUpdate:{type:Boolean},updateAvailable:{type:Boolean},updateDownloading:{type:Boolean},updateDownloaded:{type:Boolean},updateErrorMsg:{type:String}}}constructor(){super();this.isElectron=c.default.name==="Electron",this.checkingForUpdate=!1,this.updateAvailable=!1,this.updateDownloading=!1,this.updateDownloaded=!1,this.updateErrorMsg=""}shouldUpdate(){return this.isElectron}firstUpdated(){this.$appUpdate=this.requestService("appUpdate"),s()&&(this.eventBinder=new d,this.eventBinder.bindListeners({source:this.$appUpdate,target:this,eventMap:{"checking-for-update":"onAppUpdateCheckingForUpdate",error:"onAppUpdateError","update-available":"onAppUpdateUpdateAvailable","update-not-available":"onAppUpdateUpdateNotAvailable","download-progress":"onAppUpdateDownloadProgress","update-downloaded":"onAppUpdateUpdateDownloaded"}}),this.checkingForUpdate=this.$appUpdate.isCheckingForUpdate,this.updateAvailable=this.$appUpdate.isUpdateAvailable,this.updateDownloading=this.$appUpdate.isUpdateDownloading,this.updateDownloaded=this.$appUpdate.isUpdateDownloaded,this.$appUpdate.checkForUpdates())}disconnectedCallback(){super.disconnectedCallback(),this.eventBinder&&this.eventBinder.unbindAll()}checkForUpdates(){this.$appUpdate.checkForUpdates()}downloadUpdate(){this.$appUpdate.downloadUpdate()}quitAndInstall(){this.$appUpdate.installUpdate()}hasErrorMessage(){return this.updateErrorMsg!==""}onAppUpdateCheckingForUpdate(){this.updateErrorMsg="",this.checkingForUpdate=!0,console.log("checking for update")}onAppUpdateError(a){this.updateErrorMsg=a,console.log("auto update error"),console.error(a)}onAppUpdateUpdateAvailable(a){this.updateAvailable=!0,this.checkingForUpdate=!1,console.log("update available"),console.dir(a)}onAppUpdateUpdateNotAvailable(){this.updateAvailable=!1,this.checkingForUpdate=!1,console.log("update not available")}onAppUpdateDownloadProgress(a){this.updateDownloading=!0,import("./vst-ui-spinner-GDCP7A4B.js"),console.log("download progress"),console.dir(a)}onAppUpdateUpdateDownloaded(){this.updateDownloading=!1,this.updateDownloaded=!0,console.log("update downloaded. restart app.")}static get styles(){return[r,u]}render(){return e`
      <div class="updates">
        ${this.hasErrorMessage()?"":e`
              ${this.checkingForUpdate?e` <p class="updates__status">${t("Checking for update...")}</p> `:""}
              ${!this.checkingForUpdate&&!this.updateAvailable?e`
                    <p class="updates__status">${t("App is up to date")}</p>
                    ${l(s(),()=>e`
                        <button class="btn" variant="outline" @click="${this.checkForUpdates}">
                          ${t("Check for Updates")}
                        </button>
                      `)}
                  `:""}
              ${this.updateAvailable&&!this.updateDownloading&&!this.updateDownloaded?e`
                    <p class="updates__status">${t("Update Available")}</p>
                    <button class="btn" variant="outline" @click="${this.downloadUpdate}">
                      ${t("Download Update")}
                    </button>
                  `:""}
              ${this.updateDownloading?e`
                    <p class="updates__status">${t("Update is downloading...")}</p>
                    <vst-ui-spinner class="loading-spinner"></vst-ui-spinner>
                  `:""}
              ${this.updateDownloaded?e`
                    <p class="updates__status">
                      ${t("Download complete. Updates will be installed the next time you launch the app")}
                    </p>
                    <button class="btn" variant="outline" @click="${this.quitAndInstall}">
                      ${t("Restart app")}
                    </button>
                  `:""}
            `}
        ${this.hasErrorMessage()?e`
              <button class="btn" variant="outline" @click="${this.checkForUpdates}">
                ${t("Check for Updates")}
              </button>
              <details class="updates__error">
                <summary>${t("Update error")}</summary>
                <div>${this.updateErrorMsg}</div>
              </details>
            `:""}
      </div>
    `}};customElements.define("vst-core-autoupdate",h);
