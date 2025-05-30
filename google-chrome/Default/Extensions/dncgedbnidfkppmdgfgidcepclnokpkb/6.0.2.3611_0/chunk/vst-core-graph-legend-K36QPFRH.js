import{a as u}from"./chunk-JURJRJBX.js";import{a as c}from"./chunk-JWPGNWQB.js";import{d as m}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as p}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as l,c as o,h as d}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";var g=l`
  :host {
    background: var(--vst-color-bg);
    padding: var(--vst-space-xs);
    border-radius: var(--vst-radius);
    line-height: 1;
    font-size: var(--vst-font-size-xs);
    display: flex;
    max-block-size: 30vh;
    max-inline-size: 30vh;
    overflow: auto;
  }

  .legend {
    display: grid;
    grid-gap: var(--vst-space-xs);
    align-items: center;
    cursor: grab;
    grid-auto-rows: var(--vst-icon-size-s);
  }
  .legend:active {
    cursor: grabbing;
  }
  .legend__color-swatch {
    inline-size: var(--vst-icon-size-xs);
    block-size: var(--vst-icon-size-xs);
    justify-self: center;
  }
  .legend__ds-label {
    grid-column: 1 / -1;
    color: var(--vst-color-fg-secondary);
  }
  .legend__ds-hairline {
    background: var(--vst-color-fg-secondary);
    width: 0.0625rem;
    height: 100%;
    justify-self: center;
  }
  .legend__group-label,
  .legend__ds-label {
    max-inline-size: 15rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;var h=class extends d{static get properties(){return{leftTraces:{type:Array},dataSetList:{type:Array},columnGroupInfoList:{type:Array}}}constructor(){super();this.leftTraces=[],this.dataSetList=[],this.columnGroupInfoList=[],this.eventBinder=new c}updated(s){s.forEach((t,i)=>{switch(i){case"leftTraces":this._setupLegendData(),this.bindToNameChanges(this.leftTraces);break;default:}})}bindToNameChanges(s){this.eventBinder.unbindAll();let t=new Set(s.map(e=>e.yColumn.dataSet)),i=new Set(s.map(e=>e.yColumn.group)),n=new Set(s.map(e=>e.yColumn));[...t,...i].forEach(e=>{this.eventBinder.on(e,"name-changed",()=>{this._setupLegendData()})}),n.forEach(e=>{this.eventBinder.on(e,"color-changed",()=>{this._setupLegendData()}),this.eventBinder.on(e,"symbol-changed",()=>{this._setupLegendData()})})}_setupLegendData(){let s=(e={},r={})=>e.id-r.id,t=[...new Set(this.leftTraces.map(e=>e.yColumn.dataSet))].sort(s),i=[...new Set(this.leftTraces.map(e=>e.yColumn.group))].sort(s);this.dataSetList=t.map(e=>({setName:e.name}));let n=i.map(e=>t.map(r=>this.leftTraces.find(a=>a.yColumn.dataSet.id===r.id&&a.yColumn.group.id===e.id)));this.columnGroupInfoList=n.map((e,r)=>({traces:e.map((a={})=>({color:a.color,id:a.id,symbol:a.symbol})),groupName:i[r].name||""}))}static get styles(){return[p,g]}render(){return o`
      <div
        class="legend"
        style="grid-template-columns: repeat(${this.dataSetList.length}, var(--vst-icon-size-s)) max-content;"
      >
        ${this.dataSetList.length>1?o`
              ${this.dataSetList.map((s,t)=>o`
                  ${t>0?o`
                        <div
                          class="legend__ds-hairline"
                          style="grid-column-start: ${t}; grid-row-start: ${t+1}; grid-row-end: ${this.dataSetList.length+1};"
                        ></div>
                      `:""}
                  <div class="legend__ds-label" style="grid-column-start: ${t+1};">
                    ${s.setName}
                  </div>
                `)}
            `:""}
        ${this.columnGroupInfoList.map(s=>o`
            ${s.traces.map(t=>o`
                <vst-ui-icon
                  .icon="${t.id?u(t.symbol):m}"
                  color="${t.id?t.color:"var(--vst-color-fg-tertiary"}"
                  class="legend__color-swatch"
                ></vst-ui-icon>
              `)}
            <div class="legend__group-label">${s.groupName}</div>
          `)}
      </div>
    `}};customElements.define("vst-core-graph-legend",h);export{h as VstCoreGraphLegend};
