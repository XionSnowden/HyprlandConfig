import{a as c,b as r,d as n}from"./chunk-TWAD4QJO.js";import{e as i}from"./chunk-IMQHRNK4.js";import{a as u}from"./chunk-MGJOXMXS.js";import{a as g}from"./chunk-374UYNGS.js";import{c as m}from"./chunk-CRHRJPRJ.js";import{b as o,c as l,h as f}from"./chunk-BVG7RORO.js";import{c as a}from"./chunk-LI3RKPGW.js";var d=o`
  ${g}
  :host {
    width: 35rem;
  }
  .feature-flags__fieldset {
    margin: 0;
    border: 0;
  }
  .feature-flags__list {
    list-style: none;
    margin: 0 0 2rem;
    padding: 0;
  }
  .feature-flags__checkbox {
    margin-block-start: 0.4rem;
  }
  .feature-flags__label {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 0.25rem;
    margin-block-end: 1rem;
  }
  .feature-flags__description {
    margin: 0;
  }
  .feature-flags__buttons {
    display: flex;
    justify-content: space-between;
  }
`;var t=class extends u(f){static get properties(){return{featureFlags:{type:Object}}}constructor(){super();this.featureFlags={feature:[]}}firstUpdated(){this.$appLifecycle=this.requestService("appLifecycle"),this.featureFlags=c(),this.defaultFeatureFlags=r();let e=this.shadowRoot.getElementById("feature_flag_fieldset");e.disabled=!0,setTimeout(()=>{e.disabled=!1},1e3)}resetToDefaults(){this.featureFlags=i(r())}submitForm(){n(this.featureFlags),this.$appLifecycle.closeWindow()}static featureFlagChanged(e,s){let{target:p}=s;e.enabled=p.checked}static get styles(){return[m,d]}render(){return l`
      <vst-ui-form class="feature-flags" @submit="${this.submitForm}">
        <form>
          <fieldset class="feature-flags__fieldset" id="feature_flag_fieldset">
            <ul class="feature-flags__list">
              ${this.featureFlags.feature.map(e=>l`
                  <li class="feature-flags__list-item">
                    <label class="feature-flags__label" for="${e.name}">
                      <div class="checkbox">
                        <input
                          type="checkbox"
                          .checked="${e.enabled}"
                          @change="${s=>t.featureFlagChanged(e,s)}"
                          id="${e.name}"
                        />
                        <span class="check"></span>
                      </div>
                      <div>
                        <strong class="heading" size="m">${e.name}</strong>
                        <p class="feature-flags__description">${e.description}</p>
                      </div>
                    </label>
                  </li>
                `)}
            </ul>
            <div class="feature-flags__buttons">
              <button
                class="btn"
                id="reset"
                variant="text"
                type="button"
                @click="${this.resetToDefaults}"
              >
                ${a("Reset to Defaults")}
              </button>
              <button class="btn" id="submit" type="submit">
                ${a("Save and Close App")}
              </button>
            </div>
          </fieldset>
        </form>
      </vst-ui-form>
    `}};customElements.define("vst-core-feature-flags",t);export{t as a};
