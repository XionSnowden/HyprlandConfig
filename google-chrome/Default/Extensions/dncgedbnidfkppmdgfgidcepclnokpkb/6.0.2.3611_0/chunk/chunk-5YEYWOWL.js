import{b as m}from"./chunk-KN5R6GSV.js";import{a}from"./chunk-Z6SXIBNK.js";import{a as d,b as h}from"./chunk-5GHRE4BP.js";import{a as s}from"./chunk-KFWGEN4K.js";import{a as c}from"./chunk-PL6DDC6Q.js";import{q as l,v as u}from"./chunk-TB2MSUH5.js";import{c as p}from"./chunk-CRHRJPRJ.js";import{b as n,c as t,h as r}from"./chunk-BVG7RORO.js";import{c as e}from"./chunk-LI3RKPGW.js";var o=class extends a(c(r)){static get properties(){return{_authKey:{state:!0},focus:{type:Boolean,reflect:!0},pending:{type:Boolean,reflect:!0},dismissible:{type:Boolean}}}static get observableProperties(){return{online:m,authorized:s,errorType:s}}constructor(){super();this._authKey=s.lastGoodKey??"",this._authKeyInputRef=d(),s.resetErrorType(),this.focus=!1,this.pending=!1,this.dismissible=!1}dispatchAuthRequest(){this.dispatchEvent(new CustomEvent("submit",{detail:{key:this._authKey}}))}updated(i){i.has("focus")&&this.focus&&this._authKeyInputRef.value.focus()}_dismissAuth(){this.dispatchEvent(new CustomEvent("auth-dismissed"))}static get styles(){return[p,n`
        :host {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        #pending_screen {
          visibility: hidden;
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          background-color: white;
        }

        :host([pending]) #pending_screen {
          visibility: visible;
          pointer-events: auto;
          opacity: 0.4;
          transition: 300ms opacity ease-in-out;
        }

        .heading[size='s'] {
          display: flex;
          align-items: center;
          justify-content: center;
          inline-size: auto;
          /* padding: 1em 0em 0em; */
        }

        .sidebar {
          inline-size: auto;
          flex-grow: 1;
        }

        #auth-error {
          margin: var(--vst-space-xs) auto;
          width: min-content;
        }
      `]}static _computeAuthError(i,v){if(i==="eula")return t`
        ${e("We\u2019ve detected that the license key is valid, but the Terms of Use must be accepted before it can be used. Have the purchasing school agent ")}
        <a
          id="eula_link"
          href="${`https://graphicalanalysis.app/accept/?key=${v}`}"
          target="_blank"
          class="link"
          size="s"
        >
          <span margin="inline-end-2xs"
            >${e("accept the Terms of Use and Privacy Notice")}<vst-ui-icon
              .icon="${l}"
            ></vst-ui-icon
          ></span>
        </a>
        ${e("to make the key available for use.")}
      `;let y={empty:e("License Key is required."),invalid:e("License Key not recognized."),expired:e("License Key is expired."),suspended:e("License Key is suspended."),wrongProduct:e("License Key is not valid for this product."),wrongChannel:e("License Key is not valid for this channel."),unknown:e("License Key validation server cannot be reached."),activationCode:t` ${e("You have entered an activation code and not a license key.")}
        <a href="https://www.vernier.com/til/12408" target="_blank"
          ><vst-ui-icon color="var(--vst-color-fg-tertiary)" size="xs" .icon="${u}"></vst-ui-icon
        ></a>`};return t`${y[i]||e("Unknown License Key Error")}`}render(){return t`
      <vst-ui-form @submit="${this.dispatchAuthRequest}">
        ${this.online?t`
            <form class="inline" style="--justify: center;" gap="2xs">
            <div>
              <label for="ga_auth_key" size="s" class="heading">
                  ${this.authorized?t`${e("Update your License Key")}`:t`${e("Activate additional features with your License Key")}`}
                  <vst-ui-pro-info infoToolTipPosition="block-start-end"></vst-ui-pro-info>
              </label>
              <div class="sidebar" gap="xs">
                <div>
                  <input
                    autocapitalize="none"
                    autocorrect="off"
                    style="--min: 40%"
                    id="ga_auth_key"
                    type="text"
                    .value=${this._authKey}
                    placeholder="${e("e.g. 23TplPds","general","Example license key")}"
                    ?disabled="${this.pending||!this.online}"
                    @input=${({target:{value:i}})=>{this._authKey=i.trim(),s.resetErrorType()}}
                    ${h(this._authKeyInputRef)}
                  />
                  <div class="inline" fixed gap="xs">
                    <div>
                      <button
                        class="btn"
                        type="submit"
                        id="submit_btn"
                        grow
                        ?disabled="${this.pending||!this.online}"
                      >
                        ${e("Submit")}
                      </button>
                      <button
                      class="btn"
                      variant="outline"
                      type="button"
                      grow
                      ?hidden="${!this.dismissible}"
                      @click="${this._dismissAuth}"
                      >
                        ${e("Ignore")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div id="pending_screen"></div>
        <vst-ui-soft-alert id="auth-error" type="auth-error" ?hidden="${!this.errorType}" compact>
          ${o._computeAuthError(this.errorType,this._authKey)}
        </vst-ui-soft-alert>
      `:t`<span class="caption" variant="error">
              ${e("License Key validation requires internet connection. Check your connection.")}
            </span>`}
      </vst-ui-form>
    `}};customElements.define("ga-auth-form",o);export{o as a};
