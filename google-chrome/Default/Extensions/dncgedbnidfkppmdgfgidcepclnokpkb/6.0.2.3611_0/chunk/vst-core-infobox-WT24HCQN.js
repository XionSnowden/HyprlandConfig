import{a as r}from"./chunk-ZAKMYXQF.js";import{a as d}from"./chunk-R6LDBG7J.js";import{n}from"./chunk-IMQHRNK4.js";import{a as _}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as v}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{C as y,D as b,o as g,s as m}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as x}from"./chunk-CRHRJPRJ.js";import{a as c}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as h,c as i,f as p,h as f}from"./chunk-BVG7RORO.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var $=(u,t,s)=>{for(let a of t)if(a[0]===u)return(0,a[1])();return s==null?void 0:s()};var k=h`
  :host {
    background: var(--vst-color-bg);
    box-shadow: var(--vst-shadow-s);
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    display: grid;
    grid-template-rows: 100%;
    z-index: var(--vst-z-infobox);
    position: relative;
    max-block-size: 100%;
    inline-size: 12rem;
    top: 0%;
    position: absolute;
    visibility: hidden;
  }

  :host(.hidden) {
    display: none;
  }

  .infobox {
    display: flex;
    flex-direction: column;
  }

  .infobox,
  .infobox * {
    user-select: text;
  }

  .infobox__header {
    justify-content: flex-start;
    cursor: ns-resize;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-xs) var(--vst-space-s);
    padding-inline-end: var(--vst-space-xs);
    display: flex;
    justify-content: space-between;
  }

  #toggle_btns {
    justify-content: flex-end;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: relative;
    background: var(--vst-color-bg-tertiary);
    justify-content: space-between;
  }

  .infobox__header .btn[variant='icon']:hover {
    background: var(--vst-color-bg-secondary);
  }

  .infobox__body {
    padding: var(--vst-space-xs);
    padding-inline-start: calc(var(--vst-space-xs) - 1px);
    font-size: var(--vst-font-size-s);
    overflow: auto;
  }

  .trace-group {
    list-style: none;
    margin: 0;
    padding-inline-start: calc(var(--vst-space-xs) - 1px);
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: transparent;
  }

  .trace-color-dot {
    display: inline-block;
    background-color: var(--color);
    border-radius: var(--vst-radius-circle);
    height: 10px;
    width: 10px;
  }

  .fit-statistics {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr auto;
  }

  .r-item {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .rmse-item {
    grid-row: 1 / 2;
    grid-row-end: 1 / 2;
  }

  .rmse-item.has-r-value {
    grid-row: 2 / 3;
    grid-row-end: 1 / 2;
  }

  .btn-item {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: end;
  }

  .trace-group__key-value {
    color: var(--vst-color-fg-secondary);
    display: inline-block;
    white-space: normal;
  }

  .trace-group__value {
    color: var(--vst-color-fg-primary);
  }

  .trace-group + .trace-group {
    margin-block-start: var(--vst-space-xs);
  }

  .trace-group ul {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .fit-options-btn {
    padding: var(--vst-space-2xs) var(--vst-space-2xs);
  }

  .italic {
    font-style: italic;
    padding-inline-end: 0.125rem;
  }
`;var I=class extends v(f){static get properties(){return{analysisInfo:{type:Object},baseUnits:{type:String},detailsHidden:{type:Boolean},export:{type:Boolean},flippedLeft:{type:Boolean},initialXPosition:{type:Number},initialYPosition:{type:Number},isXPositionSet:{type:Boolean,reflect:!0},isYPositionSet:{type:Boolean,reflect:!0},leftOffset:{type:String},max:{type:Number},min:{type:Number},selectionId:{type:String},topOffset:{type:String},translateXLength:{type:String},translateYLength:{type:String},type:{type:String}}}static get observableProperties(){return{authorized:_}}constructor(){super();this.analysisInfo={},this.baseUnits="",this.detailsHidden=!1,this.export=!1,this.flippedLeft=!1,this.initialXPosition=0,this.initialYPosition=0,this.isXPositionSet=!1,this.isYPositionSet=!1,this.leftOffset="",this.max=0,this.min=0,this.selectionId="",this.topOffset="",this.translateXLength="",this.translateYLength="",this.type=""}updated(t){t.forEach((s,a)=>{switch(a){case"topOffset":this._topOffsetChanged();break;case"initialXPosition":this.export||(this.leftOffset=this.initialXPosition,this.isXPositionSet=!0,this._leftOffsetChanged(),this._handlePositionChanged());break;case"initialYPosition":this.export||(this.topOffset=`${this.initialYPosition}px`,this.isYPositionSet=!0,this._topOffsetChanged(),this._handlePositionChanged());break;case"detailsHidden":this._handlePositionChanged();break;case"leftOffset":this._leftOffsetChanged();break;case"flippedLeft":case"translateXLength":case"translateYLength":this._updateTransformStyle(this.flippedLeft,this.translateYLength,this.translateXLength);break;default:}})}firstUpdated(){this.infoboxEl=this.shadowRoot.querySelector("#infobox"),this.headerEl=this.shadowRoot.querySelector("#header"),r(this.infoboxEl,"up",t=>t.stopPropagation(t)),r(this.infoboxEl,"track",t=>t.stopPropagation(t)),r(this.headerEl,"track",this.moveHandler.bind(this))}get fitsInfo(){return["curveFits","manual-fits"].includes(this.type)&&this.analysisInfo.curveFitInfo?this.analysisInfo.curveFitInfo:[]}get integralsInfo(){return this.type==="integrals"?this.analysisInfo:[]}get title(){let t={curveFits:e("Curve Fit"),integrals:e("Integral"),"manual-fits":e("Manual Fit"),statistics:e("Statistics")};return this.type==="curveFits"?this.analysisInfo.curveFitName:t[this.type]||""}get xStats(){return this.analysisInfo.xStats||{}}get yStats(){return this.analysisInfo.yStats||[]}_handleFitOptionsButtonClick(){this.dispatchEvent(new CustomEvent("fit-options-button-clicked",{bubbles:!0,composed:!0}))}_handlePositionChanged(t=!1){let s=this.getBoundingClientRect(),a=this.parentNode.getBoundingClientRect(),o=this.flippedLeft?s.width:0,l={bubbles:!0,composed:!0,detail:{isDragging:t,selectionId:this.selectionId,infoBoxPosition:{x:s.left-a.left+o,y:s.top-a.top,isCollapsed:this.detailsHidden}}};this.dispatchEvent(new CustomEvent("infobox-position-changed",l))}closeInfobox(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("close-infobox",{bubbles:!0,composed:!0,detail:this.type}))}moveHandler(t){t.detail.state==="start"&&t.preventDefault(),t.detail.state==="end"&&this._handlePositionChanged(),this.dispatchEvent(new CustomEvent("infobox-moving",{detail:t.detail}))}_updateTransformStyle(t,s,a){let o="";if(t||s||a){t&&a?o=`translateX(calc(-100% + ${a}))`:t?o="translateX(-100%)":a&&(o=`translateX(${a})`);let l=s?`translateY(${s})`:"";this.style.transform=`${o} ${l}`}else this.style.removeProperty("transform");s&&a&&this._handlePositionChanged(!0)}_leftOffsetChanged(){this.style.left=`${this.leftOffset}px`}_topOffsetChanged(){this.style.top=this.topOffset}static get styles(){return[x,k]}hideDetails(){this.detailsHidden=!this.detailsHidden}curveFitTemplate(){let t=this.fitsInfo[0]?this.fitsInfo[0].error:null;return i`
      <ul class="trace-group">
        ${d(this.type==="manual-fits"&&this.analysisInfo.relatedTrace,()=>i`
            <li>
              <p class="trace-group__key-value">
                ${this.analysisInfo.relatedTrace.name}
                <span
                  class="trace-color-dot"
                  style="--color: ${this.analysisInfo.relatedTrace.traceColor}"
                ></span>
              </p>
            </li>
          `)}
        <li>
          <p class="trace-group__key-value">
            ${e("x-range")}:
            <span class="trace-group__value"> ${this.min} - ${this.max} ${this.baseUnits} </span>
          </p>
        </li>
        ${!t&&Boolean(this.fitsInfo[0])?i`
              <li>
                <p class="trace-group__key-value">
                  ${e("y =")}
                  <span class="trace-group__value" id="y_equation">${this.fitsInfo[0].y}</span>
                </p>
              </li>
            `:""}
      </ul>
      ${t?i`
            <div class="trace-group">
              <p>${t}</p>
            </div>
          `:this.fitsInfo.map((s,a)=>i`
              <div class="trace-group fits-info" style="border-color: ${s.traceColor}">
                <ul>
                  ${s.coefficients.map(o=>i`
                      <li class="coefficient-item">
                        <p class="trace-group__key-value">
                          ${o.name}:
                          ${c(this.authorized,i` <span class="trace-group__value">
                              ${o.value}
                              ${s.y==="mx + b"&&o.name==="m"||s.y==="ax"&&o.name==="a"?`${s.yUnits}/${this.baseUnits}`:""}
                              ${s.y==="mx + b"&&o.name==="b"?s.yUnits:""}
                            </span>`,i`<span class="trace-group__value">${o.value}</span>`)}
                          ${this.analysisInfo.showUncertainty?i`<span class="trace-group-uncertainty">
                                ± ${o.uncertainty}</span
                              >`:""}
                        </p>
                      </li>
                    `)}
                </ul>
                <div class="fit-statistics">
                  <div class="r-item" ?hidden="${!n(s.r)}">
                    <p class="trace-group__key-value">
                      <span class="italic">r</span>:
                      <span class="trace-group__value">${s.r}</span>
                    </p>
                  </div>
                  <div
                    class="rmse-item ${n(s.r)?"has-r-value":""}"
                    ?hidden="${!n(s.rmse)}"
                  >
                    <p class="trace-group__key-value">
                      ${e("RMSE")}:
                      <span class="trace-group__value">${s.rmse}</span>
                    </p>
                  </div>
                  ${c(a+1===this.fitsInfo.length&&!["IA","SA"].includes("GA")&&this.type!=="manual-fits",i`
                      <div class="btn-item ">
                        <button
                          class="btn fit-options-btn"
                          variant="primary"
                          @click=${this._handleFitOptionsButtonClick}
                        >
                          <vst-ui-icon .icon="${m}" color="#ffffff" size="xs"></vst-ui-icon>
                        </button>
                      </div>
                    `,p)}
                </div>
              </div>
            `)}
    `}integralsTemplate(){return i`
      <ul class="trace-group">
        <li>
          <p class="trace-group__key-value">
            ${e("x-range")}:
            <span class="trace-group__value"> ${this.min} - ${this.max} ${this.baseUnits} </span>
          </p>
        </li>
      </ul>
      ${this.integralsInfo.map(t=>i`
          <ul class="trace-group" style="border-color: ${t.traceColor}">
            <li>
              <p class="trace-group__key-value">
                ${e("Area")}:
                <span class="trace-group__value"> ${t.integralValue} ${t.units} </span>
              </p>
            </li>
          </ul>
        `)}
    `}statisticsTemplate(){return i`
      <ul class="trace-group">
        <li>
          <p class="trace-group__key-value">
            ${e("x-range")}:
            <span class="trace-group__value"> ${this.min} - ${this.max} ${this.baseUnits} </span>
          </p>
        </li>
        ${this.xStats.deltaX?i`
              <li>
                <p class="trace-group__key-value">
                  ${e("\u0394x")}:
                  <span class="trace-group__value">
                    <span>${this.xStats.deltaX}</span>
                    <span>${this.baseUnits}</span>
                  </span>
                </p>
              </li>
            `:""}
      </ul>

      ${this.yStats.map(t=>i`<ul class="trace-group" style="border-color: ${t.traceColor}">
            <li>
              <p class="trace-group__key-value">
                ${e("Samples")}:
                <span class="trace-group__value">${t.samples}</span>
              </p>
            </li>
            <li>
              <p class="trace-group__key-value">
                ${e("Mean")}:
                <span class="trace-group__value"
                  ><span>${t.mean}</span> <span>${t.yUnits}</span></span
                >
              </p>
            </li>
            <li>
              <p class="trace-group__key-value">
                ${e("Std dev")}:
                <span class="trace-group__value"> ${t.stdDev}</span>
              </p>
            </li>
            <li>
              <p class="trace-group__key-value">
                ${e("Min")}:
                <span class="trace-group__value">
                  ${t.min.value} ${t.yUnits}
                  <span class="time-at">@</span> ${t.min.at} ${this.baseUnits}
                </span>
              </p>
            </li>
            <li>
              <p class="trace-group__key-value">
                ${e("Max")}:
                <span class="trace-group__value"
                  >${t.max.value} ${t.yUnits} <span class="time-at">@</span> ${t.max.at}
                  ${this.baseUnits}
                </span>
              </p>
            </li>
            <li>
              <p class="trace-group__key-value">
                ${e("\u0394y")}:
                <span class="trace-group__value">${t.deltaY} ${t.yUnits}</span>
              </p>
            </li>
          </ul>`)}
    `}render(){return i`
      <div class="infobox" id="infobox">
        <header class="infobox__header" id="header">
          <h2 id="title" class="overline">${this.title}</h2>
          <div id="toggle_btns" ?hidden=${this.export}>
            <vst-style-tooltip>
              <button
                class="btn"
                variant="icon"
                margin="inline-end-2xs"
                size="xs"
                id="btn_collapse"
                @click="${this.hideDetails}"
              >
                <vst-ui-icon
                  class="hide-details"
                  .icon="${this.detailsHidden?y:b}"
                ></vst-ui-icon>
              </button>
              <span role="tooltip" position="block-start-end"
                >${this.detailsHidden?e("Show Details"):e("Hide Details")}</span
              >
            </vst-style-tooltip>
            <vst-style-tooltip>
              <button
                class="btn"
                variant="icon"
                size="xs"
                id="btn_cancel"
                @click="${this.closeInfobox}"
              >
                <vst-ui-icon class="icon-close" .icon="${g}"></vst-ui-icon>
              </button>
              <span role="tooltip" position="block-start-end">${e("Close Infobox")}</span>
            </vst-style-tooltip>
          </div>
        </header>
        ${d(this.detailsHidden,()=>p,()=>i`
            <div class="infobox__body">
              ${$(this.type,[["statistics",()=>this.statisticsTemplate()],["curveFits",()=>this.curveFitTemplate()],["manual-fits",()=>this.curveFitTemplate()],["integrals",()=>this.integralsTemplate()]])}
            </div>
          `)}
      </div>
    `}};customElements.define("vst-core-infobox",I);export{I as VstCoreInfobox};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
