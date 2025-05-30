import{a as i}from"./chunk-FDV75E2D.js";import{c as s}from"./chunk-CRHRJPRJ.js";import{b as t,c as e,h as r}from"./chunk-BVG7RORO.js";var n=class extends r{async firstUpdated(){await i(),this.shadowRoot.querySelector("div").setAttribute("active","")}static get styles(){return[s,t`
        :host {
          --vst-ui-spinner-color: var(--vst-color-brand);
          --vst-ui-spinner-background-color: rgba(0, 0, 0, 0.02);
          --vst-ui-spinner-thickness: 0.2rem;

          width: 3rem;
          height: 3rem;
        }
        .spinner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: transparent;
          border: var(--vst-ui-spinner-thickness) solid var(--vst-ui-spinner-background-color);
          border-top: var(--vst-ui-spinner-thickness) solid var(--vst-ui-spinner-color);
        }

        .spinner[active] {
          animation: 0.75s spin linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `]}render(){return e`<div class="spinner"></div>`}};customElements.define("vst-ui-spinner",n);export{n as a};
