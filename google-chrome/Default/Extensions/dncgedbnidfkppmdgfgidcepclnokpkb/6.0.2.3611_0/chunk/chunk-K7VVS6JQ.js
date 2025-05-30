import{c as o}from"./chunk-CRHRJPRJ.js";import{b as a,c as e,h as s}from"./chunk-BVG7RORO.js";var i=a`
  inline-size: 100%;
  block-size: var(--vst-ui-range-track-block-size);
  cursor: pointer;
  animate: 0.2s;
  background: var(--vst-ui-range-track-color);
  border: 0;
  box-shadow: 0 0 0 transparent;
`,n=a`
  box-shadow: 0 0.05em 0.2em rgba(70, 21, 21, 0.5);
  border: 1px solid var(--vst-ui-range-track-color);
  block-size: var(--vst-ui-range-slider-size);
  inline-size: var(--vst-ui-range-slider-size);
  border-radius: var(--vst-ui-range-slider-size);
  background: var(--vst-ui-range-slider-color);
  cursor: pointer;
  z-index: 2;
  position: relative;
`,l=a`
  :host {
    --vst-ui-range-track-color: var(--vst-color-bg-primary);
    --vst-ui-range-track-color-hover: var(--vst-color-fg-primary);
    --vst-ui-range-slider-color: #fff;
    --vst-ui-range-slider-size: var(--vst-icon-size-m);
    --vst-ui-range-track-block-size: 2px;
    block-size: 50%;
    inline-size: 100%;
  }

  :host([background='dark']) {
    --vst-ui-range-track-color: var(--vst-color-light-300);
    --vst-ui-range-track-color-hover: #fff;
  }

  :host([background='dark']) * {
    --vst-outline-offset-color: var(--vst-color-dark-300);
    --vst-outline-color: var(--vst-color-brand-100);
  }

  .range__input {
    position: relative;
    block-size: 100%;
    inline-size: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-appearance: none;
    background-color: transparent;
    cursor: pointer;
  }
  .range__input:focus {
    outline: none;
    box-shadow: none;
  }
  .range__input[variant='video']:focus::-webkit-slider-runnable-track {
    background: var(--vst-color-dark-300);
    block-size: 2px;
    outline: 1.5px solid #ffffff;
  }
  .range__input[variant='video']:focus::-moz-range-track {
    background: var(--vst-color-dark-300);
    block-size: 2px;
    outline: 1.5px solid #ffffff;
  }
  .range__input[variant='video']::-webkit-slider-runnable-track {
    background: var(--vst-color-dark-300);
    block-size: 2px;
    outline: 0;
    border-radius: 0.125px;
    box-shadow: 0 0 0 1.5px #ffffff;
  }
  .range__input[variant='video']::-moz-range-track {
    background: var(--vst-color-dark-300);
    block-size: 2px;
    outline: 1.5px solid #ffffff;
  }
  .range__input[variant='video']::-moz-range-thumb {
    border: 1.5px solid var(--vst-color-dark-300);
    box-shadow: #ffffff 0 0 0 1.5px;
  }
  .range__input[variant='video']::-webkit-slider-thumb {
    border: 1.5px solid var(--vst-color-dark-300);
    box-shadow: #ffffff 0 0 0 1.5px;
  }
  .range__input:hover {
    --vst-ui-range-track-color: var(--vst-ui-range-track-color-hover);
  }
  .range__input:focus {
    outline: none;
  }
  .range__input:focus::-webkit-slider-thumb {
    box-shadow: var(--vst-outline);
  }
  .range__input:focus::-webkit-slider-runnable-track {
    background: var(--vst-ui-range-track-color);
  }
  .range__input:focus::-ms-fill-lower {
    background: var(--vst-ui-range-track-color);
  }
  .range__input:focus::-ms-fill-upper {
    background: var(--vst-ui-range-track-color);
  }
  .range__input::-webkit-slider-runnable-track {
    ${i};
  }
  .range__input::-webkit-slider-thumb {
    ${n};
    -webkit-appearance: none;
    margin-block-start: calc(
      var(--vst-ui-range-slider-size) / -2 + var(--vst-ui-range-track-block-size) / 2
    );
  }
  .range__input::-moz-range-track {
    ${i};
    border-radius: 2px;
  }
  .range__input::-moz-range-thumb {
    ${n};
  }
  .range__input::-ms-track {
    ${i};
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  .range__input::-ms-fill-lower {
    background: var(--vst-ui-range-track-color);
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 0 0 transparent;
  }
  .range__input::-ms-fill-upper {
    background: var(--vst-ui-range-track-color);
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 0 0 transparent;
  }
  .range__input::-ms-thumb {
    ${n};
    margin-block-start: calc(
      var(--vst-ui-range-slider-size) / -2 + var(--vst-ui-range-track-block-size) / 2
    );
  }
  .range__tickmark-list {
    display: flex;
    justify-content: space-between;
    margin-block-start: var(--vst-space-2xs);
  }
  .range__tickmark {
    text-align: center;
    inline-size: 1.75rem;
    font-size: 0.75rem;
  }
  .range__tickmark::after {
    content: '';
    block-size: 0.75rem;
    background-color: var(--vst-color-bg-secondary);
    inline-size: 1px;
    display: block;
    text-align: center;
    left: 50%;
    position: relative;
    top: -120%;
    z-index: 1;
  }
`;var c=class extends s{static get properties(){return{label:{type:String},min:{type:Number},max:{type:Number},step:{type:String},tickmarks:{type:Array},value:{type:Number},variant:{type:String,reflect:!0}}}constructor(){super();this.label="",this.min=0,this.max=0,this.step=1,this.tickmarks=[],this.value=0,this.variant="default"}firstUpdated(){this.inputEl=this.shadowRoot.getElementById("range_input")}_valueChanged(t){this.inputEl&&(this.value=parseFloat(this.inputEl.value));let r;t.type==="input"?r="value-input":t.type==="change"&&(r="value-changed"),this.dispatchEvent(new CustomEvent(r,{detail:{value:this.value}}))}static get styles(){return[o,l]}render(){let t=r=>e`
      <div class="range__tickmark-list">
        ${r.map(u=>e` <span class="range__tickmark">${u}</span> `)}
      </div>
    `;return e`
      ${this.label?e` <label class="label" for="range_input">${this.label}</label> `:""}
      <input
        class="range__input"
        id="range_input"
        type="range"
        variant="${this.variant}"
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        .value="${this.value}"
        @pointerdown="${r=>r.stopPropagation()}"
        @input="${this._valueChanged}"
        @change="${this._valueChanged}"
      />
      ${this.tickmarks.length>0?t(this.tickmarks):""}
    `}};customElements.define("vst-ui-range",c);
