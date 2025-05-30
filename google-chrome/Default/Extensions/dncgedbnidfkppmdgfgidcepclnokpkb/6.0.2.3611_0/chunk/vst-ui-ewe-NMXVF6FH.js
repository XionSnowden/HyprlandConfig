import"./chunk-YDEDSSMD.js";import"./chunk-6PXAOD22.js";import{a as m}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import{a as o}from"./chunk-KFWGEN4K.js";import"./chunk-PTKZDLN6.js";import"./chunk-SSPC3AL5.js";import{c}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as a,c as i,h as r}from"./chunk-BVG7RORO.js";import{b as l}from"./chunk-WFJOWCXF.js";import{c as s,e as n}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var u=a`
  ${m}

  table {
    border-collapse: collapse;
    inline-size: 100%;
  }

  th {
    background: var(--vst-color-bg-secondary);
    font-weight: normal;
  }

  td,
  th {
    border: 1px solid var(--vst-color-bg-primary);
    font-size: 0.75rem;
    line-height: 1.4;
    vertical-align: middle;
    height: 2.0625rem;
    padding: 0 0.5rem;
  }

  .column-header {
    min-inline-size: 8ch;
  }

  .spacer-gif {
    width: 3.125rem;
  }

  .run {
    font-weight: bold;
  }

  .event {
    padding: 0;
  }

  tbody th {
    text-align: center;
  }

  tbody td,
  .event input {
    text-align: right;
    height: 2.0625rem;
    padding: 0 0.5rem;
  }

  label {
    display: block;
    margin: 0;
  }

  .flex {
    display: flex;
    justify-content: flex-end;
    inline-size: 100%;
  }

  .reel {
    display: flex;
    overflow: auto;
  }

  input {
    --border: 0;
    --border-radius: 0;
    inline-size: 100%;
  }

  #event {
    --vst-outline-offset: 0px;
  }
`;var v=e=>{let{formatStr:t}=e.column.group.precision,{value:p}=e;return l(t,p)},h=e=>e&&e.group?e.group.getNameUnits():"",d=class extends r{static get properties(){return{_isCategoricalConfirmationDialogOpen:{state:!0},rowNumber:{type:Number},view:{type:Object},columns:{type:Array}}}constructor(){super();this._isCategoricalConfirmationDialogOpen=!1,this.rowNumber=0,this.view={eventColumn:null,keepResults:[]},this.columns=[]}async firstUpdated(){this.eventEl=this.shadowRoot.getElementById("event"),this.eventColumn=this.view.eventColumn,this.view.keepResults.forEach(t=>{this.columns.push(t.column)}),this.rowNumber=this.columns[0].values.length+1,await this.updateComplete,this.eventEl.focus()}async submitForm(){o.authorized&&this.view.eventColumn.dataType==="numeric"&&!n(this.eventEl.value)?(await import("./vst-ui-categorical-confirmation-VAPLOCY2.js"),this._isCategoricalConfirmationDialogOpen=!0):this._updateValues()}_updateValues(){this.dispatchEvent(new CustomEvent("kept-point",{detail:{userValue:this.eventEl.value,readings:this.view.keepResults,eventColId:this.eventColumn.id}})),this.rowNumber+=1,this.eventEl.value=""}cancel(){this.dispatchEvent(new CustomEvent("cancel"))}static get styles(){return[c,u]}_renderDialogs(){return i` <vst-ui-dialog
      @dialog-close="${t=>{t.stopPropagation(),this._isCategoricalConfirmationDialogOpen=!1}}"
      id="categorical-confirmation"
      ?open="${this._isCategoricalConfirmationDialogOpen}"
    >
      <h2 slot="header">${s("Entering Categorical Mode")}</h2>
      <vst-ui-categorical-confirmation
        @categorical-confirmed="${()=>{this._updateValues(),this._isCategoricalConfirmationDialogOpen=!1}}"
        @categorical-canceled="${()=>{this._isCategoricalConfirmationDialogOpen=!1}}"
        slot="content"
      ></vst-ui-categorical-confirmation>
    </vst-ui-dialog>`}render(){return i`
      <vst-ui-form @submit="${this.submitForm}">
        <form>
          <div class="reel" margin="block-end-m">
            <table>
              <thead>
                <tr>
                  <th class="spacer-gif"></th>
                  <th class="column-header">
                    <label for="event"><span>${h(this.eventColumn)}</span></label>
                  </th>
                  ${this.columns.map(t=>i`
                        <th class="column-header">
                          <span>${h(t)}</span>
                        </th>
                      `)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>${this.rowNumber}</th>
                  <td class="event">
                    <input
                      type=${o.authorized?"text":"number"}
                      step="any"
                      id="event"
                      name="event"
                      maxlength="1000"
                    />
                  </td>
                  ${this.view.keepResults.map(t=>i` <td class="column-header">${v(t)}</td> `)}
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex">
            <button
              class="btn"
              variant="text"
              margin="inline-end-xs"
              @click="${this.cancel}"
              type="button"
              id="cancel_btn"
            >
              ${s("Cancel")}
            </button>
            <button class="btn" id="submit_btn" type="submit">${s("Keep Point")}</button>
          </div>
        </form>
      </vst-ui-form>

      ${this._renderDialogs()}
    `}};customElements.define("vst-ui-ewe",d);
