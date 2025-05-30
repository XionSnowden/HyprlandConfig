import{a as o}from"./chunk-RHPEAR5C.js";import"./chunk-VJ7NKQ6C.js";import{c as u}from"./chunk-TWAD4QJO.js";import"./chunk-IMQHRNK4.js";import{a as g}from"./chunk-MGJOXMXS.js";import{a as f}from"./chunk-374UYNGS.js";import{a as i}from"./chunk-KFWGEN4K.js";import{a as r}from"./chunk-PTKZDLN6.js";import{a as m}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{W as d}from"./chunk-TB2MSUH5.js";import{c as h}from"./chunk-CRHRJPRJ.js";import{a as c}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as p}from"./chunk-OTWO5H3C.js";import{b as a,c as t,h as n}from"./chunk-BVG7RORO.js";import{b as l}from"./chunk-WFJOWCXF.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var v=a`
  ${f}
  ${p("m",a`
      :host {
        width: 31.25rem;
      }

      .inline {
        inline-size: initial;
      }
    `)}

  :host {
    --logo-width: 23.4375rem;
  }

  #active-license {
    width: var(--logo-width);
    text-align: center;
    background: var(--vst-color-bg-tertiary);
    border: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-s);
    margin: auto;
    min-block-size: fit-content;
    flex-shrink: 0;
  }

  .content {
    text-align: center;
    padding: 0 1.5em;

    sup {
      font-size: 0.675em;
    }

    a {
      white-space: nowrap;
    }
  }

  .autoupdate {
    margin: var(--vst-space-m) auto;
  }

  .app-logo {
    width: var(--logo-width);
    max-inline-size: 100%;
    display: block;
    margin: 0 auto;
  }
  .vernier-logo {
    display: block;
    margin: 3em auto 1em;
    width: 9.125rem;
    max-inline-size: 100%;
  }

  .auth-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-container > * {
    max-inline-size: 30ch;
  }

  .key {
    font-family: var(--vst-font-family-mono);
    display: inline-flex;
    text-align: center;
    align-items: center;
  }

  .terms {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .terms__links {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-block-end: 0;
  }

  .link-item {
    margin-block-end: var(--vst-space-xs);
    text-align: center;
  }
`;var s=class extends g(m(n)){static get properties(){return{_showFeatureFlagsDialog:{state:!0},appVersion:{type:String},isEditingLicense:{type:Boolean}}}static get observableProperties(){return{license:i,licenseName:i,licenseExpiration:i,authorizationAvailable:i,pending:i}}constructor(){super();this._showFeatureFlagsDialog=!1,this._logoClickCount=0,this.appVersion="",this.isEditingLicense=!1,o()&&import("./vst-core-autoupdate-KMANBZ5V.js"),r()||import("./ga-auth-form-VUQQXNWB.js").then(()=>this.requestUpdate())}firstUpdated(){[this.$appManifest,this.$popoverManager]=this.requestServices(["appManifest","popoverManager"]),this.appVersion=this.$appManifest.getAppVersion(),this.shadowRoot.getElementById("about_ga").innerHTML=e("Vernier Graphical Analysis&reg; is a tool for science students to collect, graph, and analyze data from Vernier sensors.")}async _logoClicked(){this._logoClickCount+=1,this._logoClickCount>=10&&(await import("./vst-core-feature-flags-WWEFOYSI.js"),this._showFeatureFlagsDialog=!0)}_handleLicenseEdit(){this.isEditingLicense=!0}static _clearLocalStorage(){localStorage.clear()}static get styles(){return[h,v]}render(){return t`
      <ga-logo class="app-logo"></ga-logo>

      <div class="content">
        <p class="caption" variant="light" margin="block-end-l">
          v${this.appVersion}
          ${l(e("\xA9 2012-%s Vernier Science Education"),"2024 ")}
        </p>

        <div id="active-license" class="inline" margin="block-end-m" ?hidden="${!this.license}">
          <p margin="block-end-s">
            <label class="heading" size="s">${e("Licensed To")}:</label>
            ${this.licenseName}
          </p>
          <p>
            <label class="heading" size="s">${e("Subscription Ends")}:</label>
            ${this.licenseExpiration}
          </p>
        </div>
        ${c(this.authorizationAvailable,t`
            <section margin="block-start-s" ?hidden="${this.isEditingLicense||!this.license}">
              <p>
                <label class="heading" size="s">${e("License Key")}:</label>
                <div class="key">
                  ${this.license?.key}
                  <button
                    class="btn"
                    size="s"
                    variant="icon"
                    @click="${this._handleLicenseEdit}"
                    margin="inline-end-xs"
                  >
                    <vst-ui-icon class="new-session__icon" .icon="${d}"></vst-ui-icon>
                  </button>
                </div>
              </p>
            </section>
            <section class="auth-container" ?hidden="${!this.isEditingLicense&&this.license}">
              <ga-auth-form
                id="about_auth_form"
                .pending="${this.pending}"
                @submit="${({detail:{key:b}})=>{i.authorize(b),this.isEditingLicense=!1}}"
              ></ga-auth-form>
            </section>
          `)}
        ${u("ff-clear-cookies")?t`<button id="clear-cookies" @click="${s._clearLocalStorage}">
              Clear Auth Cookies
            </button>`:""}
        ${o()?t`<vst-core-autoupdate class="autoupdate"></vst-core-autoupdate>`:""}
        <!-- TODO: -->
        <p id="about_ga" margin="block-start-m"></p>
      </div>

      <vst-ui-dialog
        @dialog-close="${()=>{this._showFeatureFlagsDialog=!1}}"
        id="feature-flags"
        ?open="${this._showFeatureFlagsDialog}"
      >
        <h2 slot="header">${e("Experimental Features")}</h2>
        <vst-core-feature-flags slot="content"></vst-core-feature-flags>
      </vst-ui-dialog>

      <vst-ui-logo-vernier
        class="vernier-logo"
        alt="Vernier Logo"
        @click="${this._logoClicked}"
      ></vst-ui-logo-vernier>

      <footer class="terms">
        <ul class="terms__links">
          <li class="link-item">
            <a
              class="link"
              href="https://www.vernier.com/legal-center/applications-privacy/"
              target="_blank"
              >${e("Privacy Notice")}</a
            >
          </li>
          <li class="link-item">
            <a
              class="link"
              href="https://www.vernier.com/legal-center/applications-terms/"
              target="_blank"
              >${e("Terms of Use")}</a
            >
          </li>
          <li class="link-item">
            <a class="link" href="https://graphicalanalysis.app/cookies.html" target="_blank"
              >${e("Cookie Notice")}</a
            >
          </li>
        </ul>
      </footer>
    `}};customElements.define("ga-about",s);export{s as GaAbout};
