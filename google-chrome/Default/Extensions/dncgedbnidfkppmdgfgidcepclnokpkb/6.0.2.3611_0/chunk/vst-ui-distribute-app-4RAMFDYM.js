import{a as r}from"./chunk-374UYNGS.js";import{c as a}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as i,c as o,h as n}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var l=class extends n{static get properties(){return{btnText:{type:String},currentApp:{type:String},license:{type:Object}}}constructor(){super();this.btnText=t("Copy Link"),this.currentApp="",this.license={}}static get styles(){return[a,i`
        ${r}
      `]}_copyClicked(){let e=this.shadowRoot.querySelector("#distribute__input");e.select(),navigator.clipboard?navigator.clipboard.writeText(e.value):document.execCommand("copy"),this.btnText=t("Link Copied"),setTimeout(()=>{this.btnText=t("Copy Link")},2e3)}_getURL(){let e=`https://${this.currentApp}.app/auth/`,s=localStorage.getItem("goodKey");return s?`${e}?key=${s}`:e}render(){return o`
      <div class="stack" gap="l">
        <section id="distribute_copy" class="sidebar" gap="xs">
          <div>
            <input type="text" value="${this._getURL()}" id="distribute__input" />
            <button @click="${this._copyClicked}" class="btn" fixed>${this.btnText}</button>
          </div>
        </section>
        <section id="distribute_directions" class="stack" gap="xs">
          <h3 id="distribute_heading" class="heading" size="l">${t("How To Distribute")}</h3>
          <p>
            <span class="label">${t("Licensed to")} </span>
            <span class="body" color="muted">
              ${this.license?.name?this.license.name:t("Unknown")}
            </span>
          </p>
          <p>
            <span class="label">${t("Subscription ends")} </span>
            <span class="body" color="muted">
              ${this.license?.expires?new Date(this.license.expires).toDateString():t("Never")}
            </span>
          </p>
          <p color="muted" space="m" id="info">
            ${t("You can give access to this application to others at your school by sharing this URL by email, text, or other means.")}
          </p>
          <p color="muted">
            <!-- this is not my favorite solution of all time (@k-horton) -->
            ${this.currentApp==="videoanalysis"?t("Your license allows Vernier Video Analysis to be shared only with students, faculty and staff at your school. Please do not share outside your school."):t("Your license allows Vernier Graphical Analysis\xAE to be shared only with students, faculty and staff at your school. Please do not share outside your school.")}
          </p>
        </section>
      </div>
    `}};customElements.define("vst-ui-distribute-app",l);export{l as VstUiDistributeApp};
