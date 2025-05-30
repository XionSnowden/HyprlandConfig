import{a as i}from"./chunk-IMQHRNK4.js";import{c as l}from"./chunk-CRHRJPRJ.js";import{b as r,c as n,h as a}from"./chunk-BVG7RORO.js";var o=r`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: calc(var(--vst-z-popover) - 1);
  }

  .background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    max-inline-size: 37.5rem;
  }

  .spinner {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    --vst-ui-spinner-color: var(--vst-color-text-brand);
    --vst-ui-spinner-thickness: 0.25rem;
  }

  .message-wrapper {
    display: flex;
    align-items: center;
  }

  .message {
    flex: 1;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
  }

  :host(.has-message) .message-wrapper {
    padding: 2.125em 1.75em;
    text-align: center;
    border-radius: var(--vst-radius);
  }

  :host(.has-message) .message {
    margin: 0 0 0 calc(var(--gutter) * 2);
  }

  :host([fillscreen]) {
    position: absolute;
  }
  :host([fillscreen]) .background {
    width: 100%;
    height: 100%;
    background: var(--vst-color-predictions-overlay-bg);
  }
`;var m=class extends a{static get properties(){return{elements:{type:Array},message:{type:String},fillScreen:{type:Boolean,reflect:!0}}}constructor(){super();this.elements=[],this.message="",this.fillScreen=!1}firstUpdated(){this.elContainerEl=this.shadowRoot.getElementById("el_container")}updated(e){e.forEach((t,s)=>{s==="message"&&this._messageChanged()})}addElement(e){this.elements.push(e),this.elContainerEl.appendChild(e)}removeElements(){let e=this.elements.length;for(let t=0;t<e;++t){let s=this.elements.shift();i(s.destroy)?s.destroy():s.remove()}}_messageChanged(){this.message!==""?this.classList.add("has-message"):this.classList.remove("has-message")}static get styles(){return[l,o]}render(){return n`
      <div class="background">
        <div class="wrapper">
          <div class="message-wrapper">
            <vst-ui-spinner class="spinner"></vst-ui-spinner>
            <p class="message" id="message">${this.message}</p>
          </div>
          <div class="el-container" id="el_container"></div>
        </div>
      </div>
    `}};customElements.define("vst-ui-wait",m);
