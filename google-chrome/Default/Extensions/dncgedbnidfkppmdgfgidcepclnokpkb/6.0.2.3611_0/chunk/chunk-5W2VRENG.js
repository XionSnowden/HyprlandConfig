import{a as C,b as S}from"./chunk-5GHRE4BP.js";import{a as B}from"./chunk-JWPGNWQB.js";import{a as E}from"./chunk-QTI25AH7.js";import{a as U}from"./chunk-HOPQVMFY.js";import{v as A}from"./chunk-IMQHRNK4.js";import{a as y}from"./chunk-MGJOXMXS.js";import{a as q,e as T}from"./chunk-H5EO627A.js";import{a as _}from"./chunk-PTKZDLN6.js";import{a as j}from"./chunk-PL6DDC6Q.js";import{Aa as D,Ba as O,Ca as L,Da as R,z as W,za as P}from"./chunk-TB2MSUH5.js";import{c as b}from"./chunk-CRHRJPRJ.js";import{a as $}from"./chunk-CWRGSBHN.js";import{a as x}from"./chunk-OTWO5H3C.js";import{b as h,c as o,h as g}from"./chunk-BVG7RORO.js";import{c as i}from"./chunk-LI3RKPGW.js";var z=(a,e)=>a.position-e.position,J=(a,e)=>e.position-a.position,G=(a,e)=>{let t=a.position;a.position=e.position,e.position=t},Q=a=>Math.max(0,...a.map(e=>e.position))+1,Y=(a,e)=>{let t=[...e].sort(J),n=a.position,c=t.find(d=>d.position<n&&d.position);c&&G(a,c)},ee=(a,e)=>{let t=[...e].sort(z),n=a.position,c=t.find(d=>d.position>n);c&&G(a,c)};var V=h`
  :host([metersize='large']),
  :host([metersize='medium']) {
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding-block-start: var(--vst-space-xs);
    background: var(--vst-color-bg-secondary);
  }

  :host([metersize='large']) vst-ui-meter,
  :host([metersize='medium']) vst-ui-meter {
    margin: 0 var(--vst-space-xs) var(--vst-space-xs);
  }
  :host([metersize='mini']) vst-ui-meter {
    margin: var(--vst-space-xs) calc(var(--vst-space-xs) / 2);
  }

  :host([metersize='mini']) {
    flex-direction: row;
    display: flex;
  }

  :host([disabled]) {
    display: none;
  }

  .message {
    font-size: 0.67em;
    color: var(--vst-color-fg-secondary);
    align-self: center;
    margin: 0 0.375rem;
  }
  .add-meters {
    display: flex;
    justify-content: center;
    padding: var(--vst-space-xs) var(--vst-space-xl);
  }
  :host vst-ui-pro-only {
    display: flex;
    justify-content: center;
    flex-grow: 2;
    flex-direction: column;
  }
  .btn {
    flex-grow: 2;
    inline-size: 100%;
  }
`;var N=h`
  ${q(h`button.sensor`)}
  .sensor, button.sensor-checkbox-btn {
    background: var(--vst-color-sensor-bg);
    border-radius: var(--vst-radius);
    border: 0;
    font-size: 1em;
  }

  button.sensor-checkbox-btn {
    padding: 0;
    color: var(--vst-color-fg-primary);
  }

  .sensor__reading {
    font-weight: bold;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    line-height: 1;
  }

  .sensor__name {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sensor__reading-units {
    white-space: nowrap;
  }
  .sensor .divider-symbol {
    margin-inline-end: 0.35em;
  }

  .sensor[disabled],
  .over-flow-menu[disabled] {
    cursor: default;
    pointer-events: none;
  }

  :host([metersize='medium']) .sensor__reading,
  :host([metersize='large']) .sensor__reading {
    color: var(--vst-color-fg-primary);
  }

  /* non min meters */
  div.sensor {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr auto;
    row-gap: var(--vst-space-2xs);
  }

  div.sensor .sensor__name {
    font-size: var(--vst-font-size-l);
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  div.sensor .sensor__reading {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
  .checkbox,
  .over-flow-menu {
    justify-self: end;
    align-self: start;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  .checkbox {
    margin-inline-end: 0;
  }

  /*  specific to the large meters */
  :host([metersize='large']) {
    min-block-size: 5rem;
  }
  :host([metersize='large']) .sensor {
    width: 100%;
    padding: var(--vst-space-l);
  }

  ${x("m",h`
      :host([metersize='large']) .sensor__name {
        font-size: var(--vst-font-size-xl);
      }
    `)}

  :host([metersize='large']) .sensor__name {
    font-size: var(--vst-font-size-l);
    max-inline-size: 27em;
  }

  ${x("m",h`
      :host([metersize='large']) .sensor__reading {
        font-size: var(--vst-font-size-2xl);
      }
    `)}

  :host([metersize='large']) .sensor__reading {
    font-size: var(--vst-font-size-xl);
  }

  /*  specific to the graph/table/meter meters */
  :host([metersize='medium']) .sensor {
    padding: var(--vst-space-2xs) var(--vst-space-xs);
  }

  :host([metersize='medium']) .sensor__name {
    max-inline-size: 100%;
    color: var(--vst-color-fg-primary);
  }
  :host([metersize='medium']) .sensor__reading {
    font-size: var(--vst-font-size-xl);
    min-block-size: var(--vst-font-size-xl);
    /*  force a height so the box doesn't jump as a it goes from no reading to a reading. */
  }

  /*  specific to the bottombar meters */
  :host([metersize='mini']) {
    display: flex;
  }
  ${T(h`:host([metersize='mini']) .sensor`)}

  :host([metersize='mini']) .sensor__name {
    max-inline-size: 14em;
    white-space: nowrap;
  }

  :host([show-name-only]) .sensor__reading {
    visibility: hidden;
  }

  :host([metersize='mini']) .sensor__reading {
    color: var(--vst-color-fg-primary);
  }

  :host([disabled]) .sensor__reading,
  :host([disabled]) .sensor__reading-units,
  :host([disabled]) .sensor__name {
    color: var(--vst-color-fg-tertiary);
  }

  :host([hidden]) {
    display: none;
  }
`;var H=class extends y(g){static get properties(){return{_meterActions:{state:!0},meterId:{type:Number},name:{type:String}}}constructor(){super();this.name="",this.meterId=0}firstUpdated(){[this.$dataWorld]=this.requestServices(["dataWorld"]),this._meterActions=[{id:"column-options",title:i("Column Options"),selectAction:()=>{let e=this.$dataWorld.getMeterById(this.meterId),t={columnAction:"edit",sourceColumnId:e.columnId,sourceGroupId:this.$dataWorld.getColumnById(e.columnId).groupId,title:"Column Options"};this.dispatchEvent(new CustomEvent("open-dialog",{bubble:!0,composed:!0,detail:{dialog:"column_options",params:{columnOptionSettings:t}}}))},renderIcon:()=>o`<vst-ui-icon class="item-icon" .icon=${R}></vst-ui-icon>`},{id:"move-up",title:i("Move Up"),selectAction:()=>{let e=this.$dataWorld.getMeterById(this.meterId);this.$dataWorld.decrementMeterPosition(e)},renderIcon:()=>o`<vst-ui-icon class="item-icon" .icon=${P}></vst-ui-icon>`},{id:"move-down",title:i("Move Down"),selectAction:()=>{let e=this.$dataWorld.getMeterById(this.meterId);this.$dataWorld.incrementMeterPosition(e)},renderIcon:()=>o`<vst-ui-icon class="item-icon" .icon=${D}></vst-ui-icon>`},{id:"add-remove-meter",title:i("Add/Remove Meters"),selectAction:()=>{this.dispatchEvent(new CustomEvent("add-remove-meters-clicked",{bubbles:!0,composed:!0}))},renderIcon:()=>o`<vst-ui-icon class="item-icon" .icon=${O}></vst-ui-icon>`},{id:"remove",title:i("Remove"),selectAction:()=>{let e=this.$dataWorld.getMeterById(this.meterId);e.visible=!1,this.$dataWorld.setMeterPosition(e),this.$dataWorld.updateColumnGroup(this.$dataWorld.getColumnById(e.columnId).groupId,{metered:!1})},renderIcon:()=>o`<vst-ui-icon class="item-icon" .icon=${L}></vst-ui-icon>`}]}onListItemClicked(e){let t=e.detail;this._meterActions.find(n=>n.id===t).selectAction(),this.dispatchEvent(new CustomEvent("meter-action-clicked",{bubbles:!0,composed:!0}))}static get styles(){return[b,h`
        :host {
          padding: var(--vst-space-m) var(--vst-space-s);
        }
        .meter-name {
          padding: var(--vst-space-xs) var(--vst-space-s);
          border-radius: var(--vst-radius);
          background-color: var(--vst-color-brand-bg);
          color: var(--vst-primary-color);
          border-left: var(--vst-space-3xs) solid var(--vst-color-brand-300);
        }
        .meter-name h2 {
          color: var(--vst-color-dark-300);
        }
      `]}render(){return o`
      <div class="meter-name"><h2 class="heading" size="m">${this.name}</h2></div>
      ${this._meterActions?o`
            <vst-ui-listbox
              variant="no-lines"
              id="listbox"
              .view="${{items:this._meterActions}}"
              @list-item-clicked="${this.onListItemClicked}"
              @list-switch-changed="${this.onListSwitchChanged}"
              @list-item-option-selected="${this.onListOptionSelected}"
            >
            </vst-ui-listbox>
          `:""}
    `}};customElements.define("vst-core-meter-actions",H);var X=class extends j(g){static get observableProperties(){return{colorMode:U}}static get properties(){return{_isSelected:{state:!0},active:{type:Boolean,reflect:!0},buttonEnabled:{type:Boolean,value:!1},channel:{type:String},color:{type:String,reflect:!0},metersize:{type:String,reflect:!0},name:{type:String},units:{type:String},value:{type:String},sensorId:{type:Number},showButton:{type:Boolean},sensorReadingStyles:{type:Object},sensorStyles:{type:Object},showCheckBox:{type:Boolean},isVisible:{type:Boolean},showSensorActions:{type:Boolean},meterId:{type:Number}}}constructor(){super();this._bigMeterButton=C(),this._isSelected=!1,this._miniMeterButton=C(),this.active=!1,this.channel="",this.color="",this.buttonEnabled=!1,this.metersize="",this.name="",this.units="",this.value="",this.sensorId=0,this.showButton=!1,this.sensorReadingStyles={},this.sensorStyles={},this.showCheckBox=!1,this.isVisible=!1,this.showSensorActions=!1,this.meterId=0}firstUpdated(){this._isSelected=this.isVisible}updateStyles(){this.sensorReadingStyles=this.metersize!=="mini"&&this.colorMode==="light"?{color:this.color}:{},this.sensorStyles=this.colorMode==="dark"?{backgroundColor:this.color}:{}}updated(e){["colorMode","color","meterSize"].some(t=>e.has(t))&&this.updateStyles()}static get styles(){return[b,N]}dispatchMeterVisibilityChange(){this.dispatchEvent(new CustomEvent("checked-meter-changed",{bubbles:!0,composed:!0,detail:{id:this.meterId,checked:this._isSelected}}))}meterTemplate(){let e=o`
      <span id="sensor-name">${this.name}</span
      ><span class="divider-symbol" ?hidden="${this.showNameOnly}">:</span>
    `;return o`
      ${this.showCheckBox?o`
            <span class="sensor__name"
              ><button
                style=${$(this.sensorStyles)}
                aria-label="${i("select/deselect meter")}"
                class="sensor-checkbox-btn"
                @click=${()=>{this._isSelected=!this._isSelected,this.dispatchMeterVisibilityChange()}}
              >
                ${e}
              </button>
            </span>
          `:o` <span class="sensor__name">${e}</span> `}
      <span style=${$(this.sensorReadingStyles)} class="sensor__reading">
        <span>${this.value}</span>
        <span class="sensor__reading-units" ?hidden="${this.value===""}">${this.units}</span>
      </span>
    `}showMeterActions(){if(this.metersize!=="mini")this.togglePopover(!this.showSensorActions);else{let e=this.metersize==="mini"?this._miniMeterButton.value:this._bigMeterButton.value;this.dispatchEvent(new CustomEvent("show-meter-actions-clicked",{detail:{anchor:e,meterId:this.meterId,sensorId:this.sensorId,metersize:this.metersize},bubbles:!0,composed:!0}))}}async togglePopover(e=!0){this.showSensorActions=e}render(){return o`
      ${this.metersize==="mini"?o`
            <vst-ui-tooltip
              for="#meter-btn-mini"
              placement="top"
              content="${i("Sensor Actions")}"
            ></vst-ui-tooltip>
            <button
              ${S(this._miniMeterButton)}
              class="sensor"
              id="meter-btn-mini"
              ?active="${this.active}"
              type="button"
              aria-label="${this.name} ${i("Sensor Actions")}"
              ?disabled="${!this.buttonEnabled}"
              @click=${this.showMeterActions}
            >
              ${this.meterTemplate()}
            </button>
          `:o` <div style=${$(this.sensorStyles)} class="sensor">
            ${this.meterTemplate()}
            ${this.showCheckBox?o`
                  <div class="checkbox">
                    <input
                      aria-labelledby="sensor-name"
                      .checked=${this._isSelected}
                      type="checkbox"
                      name="show-meter"
                      value="show-meter"
                      @change="${({target:{checked:e}})=>{this._isSelected=e,this.dispatchMeterVisibilityChange()}}"
                    />
                    <span class="check"></span>
                  </div>
                `:o`
                  <vst-ui-pro-only
                    preview-position="bottom-right"
                    feature-name="${i("metering on all columns")}"
                    .authorizedClickHandler="${this.showMeterActions.bind(this)}"
                  >
                    <vst-style-tooltip>
                      <button
                        ${S(this._bigMeterButton)}
                        ?hidden=${!this.showButton}
                        id="meter-btn-big"
                        ?active="${this.active}"
                        class="btn over-flow-menu"
                        variant="icon"
                        aria-label="${this.name} ${i("Meter Actions")}"
                        ?disabled="${!this.buttonEnabled}"
                      >
                        <vst-ui-icon .icon="${W}"></vst-ui-icon>
                      </button>
                      <span role="tooltip" position="inline-start"
                        >${i("Meter All Columns")}</span
                      >
                    </vst-style-tooltip>
                  </vst-ui-pro-only>
                `}
          </div>`}
      <vst-ui-popover
        id=${`meter-popover-${this.meterId}`}
        ?open=${this.showSensorActions}
        @closed=${()=>{this.showSensorActions=!1,this.sensorActions=null}}
        placement="top"
        for="meter-btn-${this.metersize==="mini"?"mini":"big"}"
      >
        <vst-core-meter-actions
          .name=${this.name}
          .meterId=${this.meterId}
          @meter-action-clicked=${()=>{this.togglePopover(!1)}}
        ></vst-core-meter-actions>
      </vst-ui-popover>
    `}};customElements.define("vst-ui-meter",X);var Z=class extends y(g){static get properties(){return{_attachedMeters:{state:!0},_unattachedStoredMeters:{state:!0},_showAttachMeterPrompt:{state:!0},hideMeterButtons:{type:Boolean},ignoreServiceEvents:{type:Boolean},inContentCreatorBlock:{type:Boolean,state:!0},isCollecting:{type:Boolean},message:{type:String},meters:{type:Array},metersize:{type:String,reflect:!0},showAllMeters:{type:Boolean},showCheckboxes:{type:Boolean},showMessage:{type:Boolean}}}static get styles(){return[b,V]}constructor(){super();this._attachedMeters=[],this._showAttachMeterPrompt=!1,this._unattachedStoredMeters=[],this.hideMeterButtons=!1,this.ignoreServiceEvents=!1,this.isCollecting=!1,this.message="",this.meters=[],this.metersize="large",this.showAllMeters=!1,this.showCheckboxes=!1,this.showMessage=!1}get inContentCreatorBlock(){return this.$urlHandler?.isContentCreatorSession}firstUpdated(){let e=new B;this.eventBinder=e,[this.$dataWorld,this.$sensorWorld,this.$deviceManager,this.$toast,this.$popoverManager,this.$urlHandler]=this.requestServices(["dataWorld","sensorWorld","deviceManager","toast","popoverManager","urlHandler"]),this.ignoreServiceEvents||(e.bindListeners({source:this.$dataWorld,target:this,eventMap:{"meter-added":"_addMeter","meter-removed":"_removeMeter","session-ended":"_clearOldMeters"}}),this.meters=[...this.$dataWorld.meters],this.meters.forEach(t=>{this.attachListenersToMeter(t)}))}_addMeter(e){this.meters=[...this.meters,e],this.sortMeters(),this.dispatchEvent(new CustomEvent("meter-added")),this.attachListenersToMeter(e)}async _attachMeter(e){let t=this.$dataWorld.createMeter();t.importUdm(e),await this.$dataWorld.addMeter(t,!0),this.dispatchEvent(new CustomEvent("attach-block-meter",{detail:t,bubbles:!0,composed:!0})),await this._updateMeterList()}_clearOldMeters(){let e=this.$dataWorld.meters.map(t=>t.id);this.meters=this.meters.filter(t=>e.includes(t.id))}_detatchMeter(e){return async()=>{this.dispatchEvent(new CustomEvent("detatch-block-meter",{detail:e.id,bubbles:!0,composed:!0})),await this._updateMeterList()}}async _promptAttachMeter(){await this._updateMeterList(),this._showAttachMeterPrompt=!0}_removeMeter({id:e}){this.meters=this.meters.filter(t=>t.id!==e),this.dispatchEvent(new CustomEvent("meter-removed"))}async _updateMeterList(){let e=await this.$dataWorld.getStoredMeterInfo(),t=this.$dataWorld.meters.map(n=>n.id);this._unattachedStoredMeters=e.filter(({id:n})=>!t.includes(n)),this._attachedMeters=e.filter(({id:n})=>t.includes(n))}async showSensorActions({detail:{anchor:e,sensorId:t,metersize:n}}){let{$sensorWorld:c,$deviceManager:d,$popoverManager:m,$toast:w,$dataWorld:p}=this,s=c.getSensorById(t);if(!s)console.warn("No sensor associated with this meter");else{let v=d.getDevice(s.deviceId),I=s.availableUnits,M="bottom";n==="mini"?M="top":n==="medium"&&(M="left");let u=[];(s.canCalibrate||s.canCalibrateGDX)&&u.push({id:"calibrate",title:i("Calibrate"),selectAction:async()=>{if(!s)return;let r;return s.dataMode.toLowerCase()==="drop"?(await import("./vst-core-calibration-drop-counter-JVH46WPU.js"),r="vst-core-calibration-drop-counter"):s.canCalibrateGDX?(await import("./vst-core-calibration-gdx-UFX75WKH.js"),r="vst-core-calibration-gdx"):(await import("./vst-core-calibration-I5NN6ZH7.js"),r="vst-core-calibration"),m.presentDialog(r,{title:`${i("Calibrate")} ${s.name}`,properties:{sensor:s}})}}),s.canZero&&u.push({id:"zero",title:i("Zero"),selectAction:()=>s?s.zero().then(()=>{w.makeToast(i("Sensor Zeroed"))}):Promise.resolve()}),s.canReverse&&u.push({id:"reverse",type:"switch",title:i("Reverse"),checked:s.isReversed,checkedChanged:r=>s&&s.isReversed!==r?s.reverse().catch(l=>console.error(l)):Promise.resolve()}),s.canZeroOnCollect&&u.push({id:"zero_on_collect",type:"switch",title:i("Reset (Zero) on Collect"),checked:s.zeroOnCollect,checkedChanged:r=>s&&s.zeroOnCollect!==r?s.setZeroOnCollect(r).catch(l=>console.error(l)):Promise.resolve()}),s.hasX4Mode&&u.push({id:"X4_mode",type:"switch",title:i("High-Resolution Mode"),checked:s.x4Mode,checkedChanged:r=>s&&s.x4Mode!==r?s.setModeX4(r).catch(l=>console.error(l)):Promise.resolve()}),I.length>1&&u.push({id:"sensor_units",title:i("Units"),type:"select",options:I.map(r=>({text:r,value:r})),selection:s.units,selectionChanged:r=>{let l=p.getColumnGroups().find(f=>f.sensorId===t);return p.updateColumnGroup(l.id,{units:r})}});let k=function(l){let f=[{id:"smart_fan",title:"Smart Fan",selectAction:()=>{m.presentDialog("ga-fan-controls",{title:"Smart Fan",properties:{deviceId:l.id,thrustVal:l.gdxCartFanThrustVal,isFanAlwaysEnabled:l.isGdxCartFanAlwaysEnabled}})}},{id:"vector",title:"Vector",selectAction:()=>{}}];return l.deviceName.startsWith("GDX-CART")?f:[]}(v);v&&(await import("./vst-core-sensor-actions-APJ3FIGD.js"),m.presentPopover("vst-core-sensor-actions",{anchor:e,orientation:M,properties:{header:{title:s.name,subtitle:v.deviceName,hasInfo:v.connected},battery:v.battery,sensorActions:u,deviceAccessories:k},events:({completeWorkflow:r})=>({"show-sensor-info":async()=>{!s||(await import("./vst-core-device-info-GH4Y3MTW.js"),m.presentDialog("vst-core-device-info",{title:i("Device Information"),properties:{sensor:s,device:v}}),r())},"accessory-button-hit":l=>{let f=l.detail;k.find(F=>F.id===f).selectAction(),r()}})}))}}attachListenersToMeter(e){e.on("value-changed",A(()=>{this.requestUpdate()},333.333)),e.on("units-changed",()=>{this.requestUpdate()}),e.on("name-changed",()=>{this.requestUpdate()}),e.on("sensor-id-changed",()=>{this.requestUpdate()}),e.on("color-changed",()=>{this.requestUpdate()}),e.on("position-changed",()=>{this.sortMeters()}),e.on("visibility-changed",()=>{this.requestUpdate()})}sortMeters(){this.meters=[...this.meters.sort(z)]}isMeterShown(e){if(this.ignoreServiceEvents||this.showAllMeters)return!0;if(this.metersize==="mini"){let t=!1,n=this.$dataWorld.getColumnById(e.columnId);if(n&&!n.group.isUserCreated){if(n.type==="sensor"){let c=d=>{let m=this.$dataWorld.getColumnById(d);return m&&m.type==="calc"&&m.metered&&!m.group.isUserCreated&&m.group.replaceDependent};t=!this.$dataWorld.meters.some(d=>d.sensorId===e.sensorId&&c(d.columnId))}else if(n.type==="calc"){let{group:c}=n,d=c.customEq&&c.customEq.indexOf("Derivative")!==-1,m=c.calcEquation==="secondDerivative"||c.calcEquation==="derivative";if(!d&&!m){let w=c.calcDependentGroups.map(p=>this.$dataWorld.getColumnGroupById(p));t=c.metered&&w.some(p=>typeof p.sensorId=="number"&&p.sensorId!==0)}}}return t}return e.visible}render(){let e=this.meters.filter(t=>this.isMeterShown(t));return o`
      ${this.showMessage&&!this.meters.length>0?o` <div class="message">${this.message}</div> `:""}
      ${E(e,t=>t.id,t=>o`
            <!-- TODO: (@ejdeposit) check meterId id change in ia -->
            <vst-ui-meter
              id="meter-${t.id}"
              .meterId=${t.id}
              ?showCheckBox=${this.showCheckboxes}
              .isVisible=${t.visible}
              .value=${t.value}
              .units=${t.units}
              .name=${t.name}
              .sensorId=${t.sensorId}
              .color=${t.color}
              .metersize=${this.metersize}
              ?buttonEnabled=${!this.hideMeterButtons&&!this.isCollecting&&this.$dataWorld.sessionType==="DataCollection"&&this.$sensorWorld.isSensorOnline(t.sensorId)||this.metersize!=="mini"}
              ?showButton=${!this.hideMeterButtons&&!_()}
              @show-meter-actions-clicked=${this.showSensorActions}
            ></vst-ui-meter>
          `)}
      ${e.length===0&&this.metersize!=="mini"&&!_()?o` <div class="add-meters">
            <vst-ui-pro-only
              preview-position="bottom-right"
              feature-name="${i("metering on all columns")}"
              .authorizedClickHandler="${()=>{this.dispatchEvent(new CustomEvent("add-remove-meters-clicked",{bubbles:!0,composed:!0}))}}"
            >
              <button class="btn">${i("add meters")}</button>
            </vst-ui-pro-only>
          </div>`:""}
    `}};customElements.define("vst-core-meter-container",Z);export{Q as a,Y as b,ee as c};
