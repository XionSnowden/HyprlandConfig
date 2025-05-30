import"./chunk-2YUGMIP3.js";import"./chunk-25C2FLTR.js";import{a as $}from"./chunk-AIJT5QXX.js";import"./chunk-MY4K2ZHD.js";import{a as b}from"./chunk-JURJRJBX.js";import"./chunk-YDEDSSMD.js";import"./chunk-HK4AF347.js";import{b as y}from"./chunk-KBTFUBYZ.js";import{b as r}from"./chunk-IMQHRNK4.js";import"./chunk-3YSPJCIY.js";import"./chunk-HTT347OR.js";import{G as m,U as h,V as v,W as g,z as c}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as _}from"./chunk-CRHRJPRJ.js";import{a as u}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as p,c as n,h as d}from"./chunk-BVG7RORO.js";import{b as a}from"./chunk-WFJOWCXF.js";import{c as s}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var f=p`
  :host {
    display: block;
    background: var(--vst-color-bg);
    width: 18.75rem;
    max-block-size: 95vh;
    overflow-y: auto;
    overflow-x: visible;
    border-radius: var(--vst-radius);
  }

  .plot-group {
    padding: var(--vst-space-l);
  }

  .plot-group + .plot-group {
    padding-block-start: 0;
  }

  .link {
    padding: 0;
  }

  .plot-group__header-group {
    margin-block-end: var(--vst-space-xs);
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .plot-group__list {
    margin: 0;
    margin-block-start: var(--vst-space-2xs);
    margin-block-end: var(--vst-space-m);
    margin-inline-start: var(--vst-space-m);
  }

  input[variant='color'] {
    margin-inline-end: var(--vst-space-2xs);
  }

  .plot-group__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--vst-space-xs) 0;
    border-bottom: 1px solid var(--vst-color-bg-secondary);
  }

  .btn[variant='icon'][size='s'] {
    margin-inline-end: var(--vst-space-2xs);
  }

  .plot-group__list-item:last-of-type {
    border-bottom: 0;
    padding-block-end: 0;
  }

  .data-set:not(:last-of-type) {
    margin-bottom: var(--vst-space-s);
  }

  .data-set:last-of-type .column-list .column:last-of-type {
    padding-bottom: 0;
  }

  .label-secondary {
    align-items: center;
    display: flex;
    gap: var(--vst-space-xs);
    justify-content: space-between;
    margin-inline-start: auto;
  }

  vst-ui-accordion:not(:last-of-type) {
    margin-block-end: var(--vst-space-s);
  }

  .column-list {
    padding: 0;
    margin-inline-start: var(--vst-space-m);
  }

  .column input[type='color'] {
    margin-right: var(--vst-space-s);
  }
`;var C=class extends d{static get properties(){return{allAccordionsVisible:{type:Boolean},columns:{type:Array},dataSets:{type:Array},disableDelete:{type:Boolean},graphMatches:{type:Array}}}static get styles(){return[_,$,f]}constructor(){super();this.dataSets=[],this.disableDelete=!1,this.columns=[],this.graphMatches=[],this.allAccordionsVisible=!0,this.columnOptionsStrings={columnOptions:s("Column Options"),manualColumn:s("Add a Manual Column"),calcColumn:s("Add a Calculated Column")}}firstUpdated(){this.accordionEls=Array.from(this.shadowRoot.querySelectorAll("vst-ui-accordion")),this.allAccordionsVisible=this.accordionEls.every(t=>t.open)}updated(t){t.forEach(async(o,e)=>{(e==="dataSets"||e==="graphMatches")&&(this.accordionEls=Array.from(this.shadowRoot.querySelectorAll("vst-ui-accordion")))})}_computeAllColumnsPlotted(t){return this.columns.filter(o=>o.setId===t).every(o=>o.plotted)}_handleDeleteDataSetClick(t){this.dispatchEvent(new CustomEvent("dataset-deleted",{detail:t,bubbles:!0,composed:!0}))}_handleRenameDataSetClick(t,o){this.dispatchEvent(new CustomEvent("show-data-set-options",{detail:{item:o,itemName:o.name,anchor:t.target},bubbles:!0,composed:!0}))}_toggleAllAccordions(){this.accordionEls.forEach(t=>{this.allAccordionsVisible?t.open=!1:t.open=!0}),this.allAccordionsVisible=this.accordionEls.every(t=>t.open)}_toggleColorPopover({target:{id:t}}){this.shadowRoot.querySelector(`#${t}_popover`).show()}_toggleColumn(t,o){o.plotted=t.target.checked;let e=t.target.checked?"column-selected":"column-deselected";this.dispatchEvent(new CustomEvent(e,{detail:{columnId:o.id}})),this.requestUpdate(),t.preventDefault()}_toggleDataSetColumns(t){let o=this.columns.filter(i=>i.setId===t),e=o.every(i=>i.plotted);o.forEach(i=>{e?i.plotted=!1:i.plotted=!0;let l=e?"column-deselected":"column-selected";this.dispatchEvent(new CustomEvent(l,{detail:{columnId:i.id,setId:t}}))}),this.requestUpdate()}_togglePlottedItem(t,o){let{target:e}=t,{type:i}=e.dataset,l=e.checked?"special-dataset-selected":"special-dataset-deselected";this.dispatchEvent(new CustomEvent(l,{detail:{columnId:o.traceColId,type:i}})),this.requestUpdate(),t.preventDefault()}_updateAccordions(){this.accordionEls.some(t=>!t.open)?this.allAccordionsVisible=!1:this.allAccordionsVisible=!0,this.requestUpdate()}deleteColumn(t){this.dispatchEvent(new CustomEvent("column-deleted",{detail:t,bubbles:!0,composed:!0}))}showColumnOptions(t,o,e,i){let l={sourceGroupId:e.groupId,sourceColumnId:e.id,columnAction:t,columnType:i,title:o,onCalcColumnCreated:w=>this.dispatchEvent(new CustomEvent("calc-column-created",{composed:!0,bubbles:!0,detail:w}))};this.dispatchEvent(new CustomEvent("open-dialog",{bubble:!0,composed:!0,detail:{dialog:"column_options",params:{columnOptionSettings:l}}})),y.hideAll(),this.requestUpdate()}showItemOptions(t,o){let e=t.composedPath()[5].querySelector("vst-ui-switch").getAttribute("data-type"),i=r(e);this.dispatchEvent(new CustomEvent(`show-${e}-options`,{detail:{item:o,itemName:i,anchor:t.target}}))}updateTrace({detail:{color:t,symbol:o}},e){this.dispatchEvent(new CustomEvent("column-trace-updated",{detail:{columnId:e,color:t,symbol:o},bubbles:!0,composed:!0}));let i=this.columns.find(l=>l.id===e);t&&(i.color=t),o&&(i.symbol=o),this.requestUpdate()}render(){return n`
      <section class="plot-group">
        <header class="plot-group__header-group">
          <h3 class="heading" size="m" margin="0">${s("Plot Manager")}</h3>
          <button
            class="link"
            size="s"
            id="all_datasets_expand_btn"
            @click="${this._toggleAllAccordions}"
          >
            ${a(s("%s All Data Sets","general","Found in y-axis plot manager"),this.allAccordionsVisible?s("Collapse","general","Found in y-axis plot manager"):s("Expand","general","Found in y-axis plot manager"))}
          </button>
        </header>
        <div class="tabs">
          ${this.dataSets?.map((t,o)=>n`
              <vst-ui-accordion
                id="dataset_${o}"
                open
                @accordion-toggled="${this._updateAccordions}"
              >
                <h4 slot="label" class="label" margin="0">${t.name}</h4>
                <div slot="label-secondary" class="label-secondary">
                  <vst-style-tooltip>
                    <button
                      class="btn"
                      variant="icon"
                      id="dataset_${t.id}_plot_all_btn"
                      @click="${()=>this._toggleDataSetColumns(t.id)}"
                    >
                      <vst-ui-icon
                        size="s"
                        .icon="${this._computeAllColumnsPlotted(t.id)?v:h}"
                      ></vst-ui-icon>
                    </button>
                    <span role="tooltip" position="block-start">
                      ${a(s("%s All","general","Found in y-axis plot manager. Hide/Plot All"),this._computeAllColumnsPlotted(t.id)?s("Hide","general","Found in y-axis plot manager. Hide/Plot All"):s("Plot","general","Found in y-axis plot manager. Hide/Plot All"))}
                    </span>
                  </vst-style-tooltip>
                  <vst-style-tooltip>
                    <button
                      class="btn"
                      variant="icon"
                      id="dataset_${t.id}_rename_btn"
                      @click=${e=>this._handleRenameDataSetClick(e,t)}
                    >
                      <vst-ui-icon size="s" .icon=${g}></vst-ui-icon>
                    </button>
                    <span role="tooltip" position="block-start">
                      ${s("Rename Data Set","general","Found in y-axis plot manager.")}
                    </span>
                  </vst-style-tooltip>
                  <vst-style-tooltip>
                    <button
                      class="btn"
                      variant="icon"
                      id="dataset_${t.id}_delete_btn"
                      ?disabled=${this.disableDelete}
                      @click=${()=>this._handleDeleteDataSetClick(t)}
                    >
                      <vst-ui-icon size="s" .icon=${m}></vst-ui-icon>
                    </button>
                    <span role="tooltip" position="block-start-end">
                      ${s("Delete Data Set","general","Found in y-axis plot manager.")}
                    </span>
                  </vst-style-tooltip>
                </div>
                <ul class="column-list plot-group__list" slot="content">
                  ${this.columns.filter(e=>e.setId===t.id).map((e,i)=>n`
                          <li class="column plot-group__list-item">
                            <vst-ui-switch
                              id="${e.id}"
                              data-dataset="${i}"
                              label="${e.name} ${e.units?`(${e.units})`:""}"
                              @switch-changed="${l=>this._toggleColumn(l,e)}"
                              .checked="${e.plotted}"
                              label-placement="right"
                              size="s"
                            ></vst-ui-switch>
                            <div style="display:flex; align-items:center">
                              <vst-style-tooltip>
                                <button
                                  class="btn symbol"
                                  variant="icon"
                                  id="color_${e.id}_btn"
                                  margin="inline-end-2xs"
                                  @click="${this._toggleColorPopover}"
                                >
                                  <vst-ui-icon
                                    size="s"
                                    .icon="${b(e.symbol)}"
                                    id="appearance_${e.id}_icon"
                                    color="${e.color}"
                                  ></vst-ui-icon>
                                </button>
                                <span role="tooltip" position="block-start-end"
                                  >${a(s("%s appearance options"),e.name)}</span
                                >
                              </vst-style-tooltip>
                              <vst-ui-popover
                                for="color_${e.id}_btn"
                                id="color_${e.id}_btn_popover"
                                placement="bottom"
                                ><vst-ui-column-appearance-picker
                                  color="${e.color}"
                                  symbol="${e.symbol}"
                                  @trace-updated="${l=>this.updateTrace(l,e.id)}"
                                ></vst-ui-column-appearance-picker
                              ></vst-ui-popover>
                              <vst-style-tooltip>
                                <button
                                  class="btn"
                                  variant="icon"
                                  size="s"
                                  @click="${this._toggleColorPopover}"
                                  id="plot_group_overflow_btn_${e.id}"
                                >
                                  <vst-ui-icon .icon="${c}"></vst-ui-icon>
                                </button>
                                <span role="tooltip" position="block-start-end">
                                  ${a(s("%s Options"),e.name)}
                                </span>
                              </vst-style-tooltip>
                              <vst-ui-popover
                                placement="top"
                                for="plot_group_overflow_btn_${e.id}"
                                id="plot_group_overflow_btn_${e.id}_popover"
                              >
                                <ul class="menu">
                                  <li>
                                    <button
                                      id="column_options"
                                      @click="${()=>this.showColumnOptions("edit",this.columnOptionsStrings?.columnOptions??"",e)}"
                                    >
                                      ${this.columnOptionsStrings?.columnOptions??""}
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      id="new_manual_column"
                                      @click="${()=>this.showColumnOptions("add",this.columnOptionsStrings?.manualColumn??"",e,"manual")}"
                                    >
                                      ${this.columnOptionsStrings?.manualColumn??""}
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      id="new_calculated_column"
                                      @click="${()=>this.showColumnOptions("add",this.columnOptionsStrings?.calcColumn??"",e,"calc")}"
                                    >
                                      ${this.columnOptionsStrings?.calcColumn??""}
                                    </button>
                                  </li>
                                  ${u(e.deletable,n`
                                      <li>
                                        <button
                                          id="delete_column"
                                          @click="${()=>this.deleteColumn(e.groupId)}"
                                        >
                                          ${s("Delete a Column")}
                                        </button>
                                      </li>
                                    `)}
                                </ul>
                              </vst-ui-popover>
                            </div>
                          </li>
                        `)}
                </ul>
              </vst-ui-accordion>
            `)}
        </div>
      </section>

      ${this.predictions?.length>0?n`
            <section class="plot-group">
              <h2 class="heading" size="m" margin="0">${s("Predictions")}</h2>
              <ul class="plot-group__list">
                ${this.predictions.map(t=>n`
                    <li class="plot-group__list-item">
                      <vst-ui-switch
                        id="${t.traceColId}"
                        data-type="prediction"
                        label="${t.name}"
                        @switch-changed="${o=>this._togglePlottedItem(o,t)}"
                        .checked="${t.isActive}"
                        label-placement="right"
                      ></vst-ui-switch>
                      <vst-style-tooltip>
                        <button
                          class="btn"
                          variant="icon"
                          size="s"
                          id="prediction_overflow_btn_${t.id}"
                          @click="${o=>this.showItemOptions(o,t)}"
                        >
                          <vst-ui-icon .icon="${c}"></vst-ui-icon>
                        </button>
                        <span role="tooltip" position="block-start-end"
                          >${s("Prediction Options")}</span
                        >
                      </vst-style-tooltip>
                    </li>
                  `)}
              </ul>
            </section>
          `:""}
      ${this.graphMatches?.length>0?n`
            <section class="plot-group">
              <h2 class="heading" size="m" margin="0">${s("Graph Match")}</h2>
              <ul class="plot-group__list">
                ${this.graphMatches.map(t=>n`
                    <li class="plot-group__list-item">
                      <vst-ui-switch
                        id="${t.traceColId}"
                        data-type="graph-match"
                        label="${t.name}"
                        @switch-changed="${o=>this._togglePlottedItem(o,t)}"
                        .checked="${t.isActive}"
                        label-placement="right"
                      ></vst-ui-switch>
                      <vst-style-tooltip>
                        <button
                          class="btn"
                          variant="icon"
                          size="s"
                          id="graphmatch_overflow_btn_${t.id}"
                          @click="${o=>this.showItemOptions(o,t)}"
                        >
                          <vst-ui-icon .icon="${c}"></vst-ui-icon>
                        </button>
                        <span role="tooltip" position="block-start-end"
                          >${s("Graph Match Options")}</span
                        >
                      </vst-style-tooltip>
                    </li>
                  `)}
              </ul>
            </section>
          `:""}
    `}};customElements.define("vst-core-graph-plot-manager",C);export{C as VstCoreGraphPlotManager};
