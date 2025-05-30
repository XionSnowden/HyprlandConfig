import{a as n}from"./chunk-QTI25AH7.js";import"./chunk-SEYYHBSH.js";import{a as c}from"./chunk-MGJOXMXS.js";import{c as l}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as r,c as e,h as a}from"./chunk-BVG7RORO.js";import{c as s}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var v=["3","5","7","9","11","15","21"],d=["3","5","7","9","11","15","21"],h=class extends c(a){static get styles(){return[l,r`
        #derivative_points_select {
          margin-block-start: var(--vst-space-xs);
        }
        #smoothing_points_select {
          margin-block-start: var(--vst-space-xs);
        }
      `]}static get properties(){return{_derivativePoints:{state:!0},_smoothingPoints:{state:!0}}}firstUpdated(){[this.$dataWorld,this.$toast]=this.requestServices(["dataWorld","toast"]),this._getDerivativePoints(),this._getSmoothingPoints(),this.$dataWorld.on("session-started",async()=>{this._getDerivativePoints(),this._getSmoothingPoints()})}async _setDerivativePoints({target:{value:t}}){let i=()=>{this.$toast.makeToast(s("There was a problem saving the settings"))};try{await this.$dataWorld.setDerivativePoints(t),this._derivativePoints=t,this.dispatchEvent(new CustomEvent("derivative-points-set",{detail:t}))}catch(o){console.error(o),i()}}async _getDerivativePoints(){try{let t=await this.$dataWorld.getDerivativePoints();this._derivativePoints=t.toString()}catch(t){console.error(t)}}async _setSmoothingPoints({target:{value:t}}){let i=()=>{this.$toast.makeToast(s("There was a problem saving the settings"))};try{await this.$dataWorld.setSmoothingPoints(t),this._smoothingPoints=t,this.dispatchEvent(new CustomEvent("smoothing-points-set",{detail:t}))}catch(o){console.error(o),i()}}async _getSmoothingPoints(){try{let t=await this.$dataWorld.getSmoothingPoints();this._smoothingPoints=t.toString()}catch(t){console.error(t)}}render(){return e`
      <div class="stack" gap="m">
        <label>
          <div class="title" margin="inline-end-xs">
            ${s("Number of points used for derivative calculations:")}
          </div>
          <select
            @change="${this._setDerivativePoints}"
            id="derivative_points_select"
            .value=${this._derivativePoints}
          >
            ${n(v,t=>e`
                <option value=${t} ?selected=${this._derivativePoints===t}>
                  ${t}
                </option>
              `)}
          </select>
        </label>
        <label>
          <div class="title" margin="inline-end-xs">
            ${s("Number of points used for smoothing calculations:")}
          </div>
          <select
            @change="${this._setSmoothingPoints}"
            id="smoothing_points_select"
            .value=${this._smoothingPoints}
          >
            ${n(d,t=>e`
                <option value=${t} ?selected=${this._smoothingPoints===t}>
                  ${t}
                </option>
              `)}
          </select>
        </label>
      </div>
    `}};customElements.define("vst-core-session-preferences",h);export{h as VstCoreSessionPreferences};
