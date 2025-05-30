import{a as i,b as r}from"./chunk-5GHRE4BP.js";import"./chunk-SEYYHBSH.js";import{a as c}from"./chunk-MGJOXMXS.js";import{c as a}from"./chunk-TB2MSUH5.js";import{c as m}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import{a as n}from"./chunk-OTWO5H3C.js";import{b as s,c as o,h as l}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";var d=class extends c(l){static get properties(){return{_isMeterListScrollable:{state:!0},_isMeterListScrolledToBottom:{state:!0},_selectedMeters:{state:!0}}}constructor(){super();this._isMeterListScrollable=!1,this._isMeterListScrolledToBottom=!1,this._selectedMeters={},this.meterListScrollContainer=i(),this.meterList=i()}static get styles(){return[m,s`
        :host {
          inline-size: 100%;
          display: flex;
          flex-direction: column;
        }
        ${n("s",s`
            :host {
              inline-size: 24em;
            }
            .meter-list-container {
              max-block-size: 60vh;
            }
          `)}
        .footer-btns {
          display: flex;
          justify-content: flex-end;
          padding: var(--vst-space-s);
        }
        .meter-list {
          max-block-size: fit-content;
        }
        .meter-list-container {
          overflow: auto;
        }
        .scroll-btn {
          margin: var(--vst-space-s);
          bottom: var(--vst-space-3xl);
          position: absolute;
          align-self: flex-end;
        }
      `]}firstUpdated(){this.$dataWorld=this.requestService("dataWorld"),this.resizeObserver=new ResizeObserver(e=>{e.forEach(t=>{this._isMeterListScrollable=t.contentRect.height>this.meterListScrollContainer.value?.getBoundingClientRect().height})}),this.resizeObserver.observe(this.meterList.value),this.meterListScrollContainer.value.addEventListener("scroll",()=>{this._isMeterListScrolledToBottom=this.meterList.value.getBoundingClientRect().bottom===this.meterListScrollContainer.value.getBoundingClientRect().bottom})}handleCheckBoxClicked({detail:{id:e,checked:t}}){this._selectedMeters[e]=t}submit(){for(let[e,t]of Object.entries(this._selectedMeters))this._changeMeterVisibility(parseInt(e),t)}_changeMeterVisibility(e,t){return this.$dataWorld.userSetMeterVisibility(e,t)}render(){return o`
      <div class="meter-list-container" ${r(this.meterListScrollContainer)}>
        <div class="meter-list" ${r(this.meterList)}>
          <vst-core-meter-container
            showAllMeters
            showCheckboxes
            metersize="medium"
            @checked-meter-changed=${this.handleCheckBoxClicked}
          ></vst-core-meter-container>
        </div>
      </div>
      <button
        class="scroll-btn btn"
        variant="primary"
        ?hidden=${!this._isMeterListScrollable||this._isMeterListScrolledToBottom}
        @click=${()=>{this.meterList.value.scrollIntoView({block:"end",behavior:"smooth"})}}
      >
        <vst-ui-icon .icon=${a}></vst-ui-icon>
      </button>
    `}};customElements.define("vst-core-meter-select",d);
