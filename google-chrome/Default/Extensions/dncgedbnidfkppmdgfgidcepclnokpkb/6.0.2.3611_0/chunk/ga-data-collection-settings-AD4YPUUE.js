import{a as y}from"./chunk-R6LDBG7J.js";import"./chunk-YDEDSSMD.js";import{a as D,d as L,g as p}from"./chunk-SI5R733D.js";import"./chunk-MKPVND6D.js";import{a as x}from"./chunk-JWPGNWQB.js";import{b as F}from"./chunk-J6L6J5R7.js";import"./chunk-DQXOKHFD.js";import{a as l}from"./chunk-NNBWZ6HI.js";import{c as E}from"./chunk-TWAD4QJO.js";import"./chunk-IMQHRNK4.js";import{a as B}from"./chunk-MGJOXMXS.js";import{a as I}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as S}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{v as h,x as j}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as R}from"./chunk-CRHRJPRJ.js";import{a as M}from"./chunk-OTWO5H3C.js";import{b as v,c as g,h as w}from"./chunk-BVG7RORO.js";import{a as b}from"./chunk-MM5FGF5D.js";import{b as T}from"./chunk-WFJOWCXF.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import{a as o,b as n}from"./chunk-CM6X6NVN.js";var P=v`
  /* stylelint-disable selector-no-qualifying-type  */
  fieldset {
    padding: 0;
    border: 0;
    margin: 0;
  }

  legend {
    padding: 0;
    display: block;
    margin-block-end: 0.1875rem;
  }

  label {
    display: inline-block;
    margin-block-end: 0.1875rem;
    font-weight: normal;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input[type='file'] {
    padding: initial;
    line-height: initial;
    border: initial;
    background-color: initial;
  }

  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    width: auto;
    height: auto;
    appearance: button;
  }

  .heading[size='s'] {
    text-align: end;
  }

  input[type='number'] {
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  select {
    vertical-align: middle;
    background-color: var(--vst-color-bg);
  }

  textarea {
    height: auto;
    min-block-size: 5em;
  }

  input[disabled],
  select[disabled],
  textarea[disabled],
  fieldset[disabled] input,
  fieldset[disabled] select,
  fieldset[disabled] textarea {
    filter: grayscale(100%);
    background-color: #f5f5f5;
    border-color: #ddd;
    color: var(--vst-color-fg-tertiary);
    opacity: 0.75;
    pointer-events: none;
  }

  fieldset[disabled],
  input[disabled][type='radio'] + label,
  input[disabled][type='checkbox'] + label {
    color: var(--vst-color-fg-tertiary);
    opacity: 0.75;
  }
  fieldset[disabled] input,
  fieldset[disabled] select,
  fieldset[disabled] textarea,
  input[disabled][type='radio'] + label input,
  input[disabled][type='radio'] + label select,
  input[disabled][type='radio'] + label textarea,
  input[disabled][type='checkbox'] + label input,
  input[disabled][type='checkbox'] + label select,
  input[disabled][type='checkbox'] + label textarea {
    background-color: #f5f5f5;
    border-color: #ddd;
    color: var(--vst-color-fg-tertiary);
  }

  input:invalid,
  input.error,
  textarea:invalid,
  select:invalid {
    color: #b94a48;
    border-left-color: #eea3a7;
    border-left-width: 0.3125rem;
  }

  .required::after {
    content: '*';
    color: var(--vst-color-danger);
  }

  .flex-v-centered {
    display: flex;
    align-items: center;
  }

  /* stylelint-enable selector-no-qualifying-type  */
  :host {
    background: var(--vst-color-bg);
    display: block;
    width: 100%;
    max-inline-size: 100%;
    position: relative;
  }

  @media (min-width: 30em) {
    :host {
      width: 22.5rem;
    }
  }

  @media (min-width: 42em) {
    :host {
      width: 36.875rem;
    }
  }

  fieldset {
    padding: 0;
  }

  label {
    margin: 0;
  }
  label *:not(input) {
    pointer-events: none;
  }

  [type='checkbox'] + label {
    display: inline-block;
  }

  section {
    margin-block-end: var(--vst-space-l);
  }

  .collection-settings-form {
    display: flex;
    flex-direction: column;
    transition: var(--transition-slower);
    block-size: 100%;
  }

  .fieldset-primary {
    background: var(--vst-color-bg-secondary);
    color: var(--vst-color-fg-primary);
    padding: var(--vst-space-s) var(--vst-space-l);
    margin: 0;
    flex-shrink: 0;
  }

  .fieldset-secondary {
    border: 0;
    padding: var(--vst-space-l);
    display: block;
    flex: 1;
    block-size: 55vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .fieldset-auto {
    block-size: auto;
  }

  .fieldset-secondary[disabled] {
    display: none;
  }

  .row {
    display: flex;
    margin-block-end: var(--vst-space-xs);
    align-items: flex-start;
    flex-direction: column;
  }
  @media (min-width: 42em) {
    .row {
      align-items: center;
      flex-direction: row;
    }
  }

  @media (min-width: 42em) {
    [class*='col-'] {
      margin: 0 var(--vst-space-xs);
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-2 {
      flex-basis: calc(16.66667% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-3 {
      flex-basis: calc(25% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-4 {
      flex-basis: calc(33.33333% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-5 {
      flex-basis: calc(41.66667% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-6 {
      flex-basis: calc(50% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-7 {
      flex-basis: calc(58.33333% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) and (min-width: 42em) {
    .col-8 {
      flex-basis: calc(66.66667% - var(--vst-space-xs));
    }
  }

  @media (min-width: 42em) {
    .offset-1 {
      margin-inline-start: calc(8.33333% + 0.1875rem);
    }
    .offset-2 {
      margin-inline-start: calc(16.66667% + 0.1875rem);
    }
    .offset-3 {
      margin-inline-start: calc(25% + 0.1875rem);
    }
    .offset-4 {
      margin-inline-start: calc(33.33333% + 0.1875rem);
    }
  }

  .remote-logging-radio {
    margin-block-start: 0.5rem;
  }

  .rate-interval label {
    display: block;
  }

  .time-based-continuous-collection-input {
    width: calc(100% - 30px);
  }

  .time-based-duration-row {
    align-items: flex-start;
  }

  @media (min-width: 42em) {
    .finite-collection-radio {
      margin-block-start: -0.75rem;
    }
  }

  .rate-interval {
    position: relative;
  }
  .rate-interval__link-icon {
    --vst-ui-icon-color: var(--vst-color-fg-tertiary);
  }

  ${M("m",v`
      .rate-interval__link-icon {
        position: absolute;
        left: calc(33.33333% - var(--vst-space-l));
        margin-block-start: -1rem;
      }
    `)}

  .warn,
  .error {
    -webkit-user-select: text;
    user-select: text;
    cursor: text;
    font-weight: bold;
    display: block;
  }

  .warn {
    color: var(--vst-color-warning);
  }

  .error {
    color: var(--vst-color-danger);
  }

  .triggering-fieldset {
    margin: 1em 0 0 1.5em;
  }

  .triggering-sensors {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0.5em;
  }

  .triggering-slope {
    width: auto;
    display: inline-block;
  }

  .text-right {
    text-align: right;
  }

  .align-top {
    align-self: flex-start;
  }

  .inline-block {
    display: inline-block;
  }

  .align-start {
    align-items: flex-start;
  }

  .quiet {
    color: var(--vst-color-fg-tertiary);
  }

  .w240 {
    width: 15rem;
  }

  .w115 {
    width: 7.1875rem;
  }

  .w95 {
    width: 5.9375rem;
  }

  .w75 {
    width: 4.6875rem;
  }

  .w65 {
    width: 4.0625rem;
  }

  .margin-block-end-0 {
    margin-block-end: 0;
  }

  .inline-block {
    display: inline-block;
  }

  @media (min-width: 42em) {
    .split-input {
      display: flex;
    }
  }

  .split-input__container {
    flex: 1;
    margin-block-end: 1.125rem;
  }

  .split-input__container label {
    white-space: nowrap;
  }

  .split-input__input {
    display: flex;
    align-items: baseline;
  }

  .radio-block {
    display: flex;
    align-items: center;
    font-size: var(--vst-font-size-s);
  }

  .photogate-modes__list {
    padding-inline-start: 0;
    margin: 0;
  }

  .photogate-modes__list-item {
    margin-block-end: 0.5rem;
  }

  .photogate-modes__mode-body {
    position: relative;
    background: var(--vst-color-bg-tertiary);
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    padding: calc(var(--gutter) * 2);
    margin-block-start: 0.5rem;
    margin-block-end: 1.5rem;
    margin-inline-start: 1.5rem;
  }

  vst-style-tooltip {
    position: absolute;
    top: var(--vst-space-m);
    right: var(--vst-space-m);
  }

  .btn[variant='icon'] {
    border-radius: var(--vst-radius-circle);
  }

  .btn[variant='icon'] vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-brand);
  }

  .photogate-modes__label {
    margin-block-end: 0.25rem;
  }

  .photogate-linear-motion-accessory {
    width: auto;
    margin-block-end: 1rem;
  }

  .helper-text {
    font-size: var(--vst-font-size-xs, 0.75rem);
    padding: 1em;
    margin: 0 0 1rem 0;
    background: var(--vst-color-bg);
    border-radius: var(--vst-radius);
    display: none;
  }
  .helper-text--visible {
    display: block;
  }
  .helper-text__figure {
    position: relative;
    text-align: center;
    margin: 0;
  }
  .helper-text__figure-img {
    max-inline-size: 100%;
    height: auto;
  }
  .helper-text__figure-img--angular-wheel {
    margin-block-start: 0.5rem;
    width: 7rem;
  }
  .helper-text p {
    margin: 0 0 1rem 0;
  }
  .helper-text p:last-of-type {
    margin: 0;
  }

  .graphic-linear {
    margin-block-end: 1rem;
    text-align: center;
    display: grid;
    grid-template-columns: 15% 20% 20% 5% 1% 39%;
    grid-template-rows: repeat(4, auto);
    grid-template-areas: 'flag_num1 flag_num1 flag_num1 . flag_num2 flag_num2' 'bar_img bar_img bar_img bar_img . wheel_img' 'arrow_top_right top_spacing arrow_top_left . . wheel_spacing';
  }
  .graphic-linear__flag-num1,
  .graphic-linear__flag-num2 {
    color: var(--vst-color-danger);
    padding: 0.5rem 0;
  }
  .graphic-linear__flag-num1 {
    grid-area: flag_num1;
  }
  .graphic-linear__flag-num2 {
    grid-area: flag_num2;
  }
  .graphic-linear__top-spacing {
    grid-area: top_spacing;
    color: var(--vst-color-info);
  }
  .graphic-linear__bar-img {
    grid-area: bar_img;
  }
  .graphic-linear__wheel-img {
    grid-area: wheel_img;
    padding: 0 25%;
  }
  .graphic-linear__arrow-top-right {
    grid-area: arrow_top_right;
    justify-self: end;
  }
  .graphic-linear__arrow-top-right img {
    width: 2rem;
  }
  .graphic-linear__arrow-top-left {
    grid-area: arrow_top_left;
    justify-self: start;
  }
  .graphic-linear__arrow-top-left img {
    width: 2rem;
  }
  .graphic-linear__wheel-spacing {
    grid-area: wheel_spacing;
    color: var(--vst-color-info);
  }

  .graphic-speed {
    margin: 1rem 0;
    text-align: center;
    display: grid;
    grid-template-columns: 11% 11% 11% 5.5% 11% 11% 11% 11% 11% 5.5%;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 'owt owt owt fwt fwt fwt fwt fwt fwt fwt' 'oar . oal . . fal . far . .' '. cir . f1 f2 f3 f4 f5 f6 f7';
  }
  .graphic-speed__owt {
    grid-area: owt;
    color: var(--vst-color-danger);
    padding: 0.25em 0;
  }
  .graphic-speed__fwt {
    grid-area: fwt;
    color: var(--vst-color-danger);
    padding: 0.25em 0;
  }
  .graphic-speed__oar {
    grid-area: oar;
  }
  .graphic-speed__oal {
    grid-area: oal;
  }
  .graphic-speed__fal {
    grid-area: fal;
  }
  .graphic-speed__far {
    grid-area: far;
  }
  .graphic-speed__cir {
    grid-area: cir;
  }
  .graphic-speed__cir > div {
    background: var(--vst-color-bg-secondary);
    width: 100%;
    height: 0;
    padding-block-end: calc(100% - 6px);
    border: 3px solid #000;
    border-radius: 100%;
  }
  .graphic-speed__f1 {
    grid-area: f1;
    height: 4rem;
    border: solid 1px #000;
  }
  .graphic-speed__f2 {
    grid-area: f2;
    background-color: #000;
  }
  .graphic-speed__f3 {
    grid-area: f3;
    border: solid 1px #000;
  }
  .graphic-speed__f4 {
    grid-area: f4;
    background-color: #000;
  }
  .graphic-speed__f5 {
    grid-area: f5;
    border: solid 1px #000;
  }
  .graphic-speed__f6 {
    grid-area: f6;
    background-color: #000;
  }
  .graphic-speed__f7 {
    grid-area: f7;
    border: solid 1px #000;
  }

  .graphic-projectile {
    margin: 1rem 0 0;
    display: grid;
    grid-template-columns: 23% 77% 0%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'left-pad distance right-pad' 'main-img main-img main-img';
  }
  .graphic-projectile--ball {
    grid-template-columns: 8% 67% 25%;
  }
  .graphic-projectile__left-pad {
    grid-area: left-pad;
  }
  .graphic-projectile__right-pad {
    grid-area: right-pad;
  }
  .graphic-projectile__distance {
    grid-area: distance;
    text-align: center;
    color: var(--vst-color-info);
    padding: 0 0 0.125em 0;
  }
  .graphic-projectile__main-img {
    grid-area: main-img;
  }

  .graphic-gate-separation {
    padding: 1rem;
    display: grid;
    grid-template-columns: 30% 10% 45% 10% 5%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'pic pic pic pic pic' '. la gate_sep ra .';
  }
  .graphic-gate-separation__pic {
    grid-area: pic;
  }
  .graphic-gate-separation__la {
    grid-area: la;
    justify-self: end;
  }
  .graphic-gate-separation__ra {
    grid-area: ra;
    justify-self: start;
  }
  .graphic-gate-separation__gate-sep {
    grid-area: gate_sep;
    text-align: center;
    color: var(--vst-color-info);
  }

  input.inline-block {
    margin-inline-end: var(--vst-space-xs);
  }

  /* Different select & input widths to clue users into how much input should go into each */
  input:not([type='radio']):not([type='checkbox']),
  select {
    inline-size: 8rem;
  }

  #collection_mode {
    inline-size: 12rem;
  }

  #time_based_duration {
    inline-size: 4rem;
    margin-inline-start: var(--vst-space-2xs);
    margin-inline-end: var(--vst-space-2xs);
  }

  #time_based_units {
    inline-size: 4rem;
  }

  #triggering_threshold {
    inline-size: 4rem;
  }

  #data-marking-label,
  #data-logging-label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;var z=s=>{let e=10,{barWidth:i}=s,a=s.units;return a==="\xB0"?e=360/i:a==="rad"?e=2*Math.PI/i:a==="rev"&&(e=1/i),e=Math.floor(e),{numberOfSpokes:e,angleUnits:a,objectId:""}},O=s=>{let e=1,{numberOfSpokes:i}=s,a=s.angleUnits;return a==="\xB0"?e=360/i:a==="rad"?e=2*Math.PI/i:a==="rev"&&(e=1/i),{barWidth:e,units:a,objectId:""}},$={backendToFrontend(s){let e={};return s.subMode==="motion"?s.params.units!=="m"?(e.measurementType="angular-motion",e.angularMotion=z(s.params)):(e.measurementType="linear-motion",e.linearMotion={accessory:s.params.objectId||"vernier_picket_fence",spacing:s.params.barWidth||.05,numberOfFlags:s.numEvents!==-1?s.numEvents/2:8,endAfterTrial:s.numEvents!==-1}):s.subMode==="gate"||s.subMode==="pulse"?s.subMode==="pulse"&&s.params.gateSeparation<0?(e.measurementType="timer",e.period={timeMeasurements:"between-gates",useFirstEventAsTime0:!1}):s.subMode==="gate"&&s.params.flagWidth<0?e.measurementType="gate-state":(e.measurementType="speed-through-gate",e.speedThroughGate={flagWidth:s.params.flagWidth||.05,timingMode:s.subMode,gateSeparationWidth:s.params.gateSeparation||.02,showMidTime:!1}):s.subMode==="pendulum"?(e.measurementType="timer",e.period={timeMeasurements:"pendulum"}):s.subMode==="projectile"&&(e.measurementType="projectile",e.projectile={type:s.params.type,gateSeparationWidth:s.params.value,timeOfFlightPad:s.numEvents===5}),e},frontendToBackend(s){let e={};if(e.numEvents=-1,s.measurementType==="speed-through-gate")s.speedThroughGate.timingMode==="gate"?(e.subMode="gate",e.numEvents=-1,e.params={flagWidth:parseFloat(s.speedThroughGate.flagWidth)}):(e.subMode="pulse",e.params={gateSeparation:parseFloat(s.speedThroughGate.gateSeparationWidth)}),e.params.units="m";else if(s.measurementType==="linear-motion")e.subMode="motion",e.params={barWidth:s.linearMotion.spacing,objectId:s.linearMotion.accessory},e.numEvents=s.linearMotion.endAfterTrial?s.linearMotion.numberOfFlags*2:-1,e.params.units="m";else if(s.measurementType==="angular-motion")e.subMode="motion",e.params=O(s.angularMotion);else if(s.measurementType==="timer"){let{timeMeasurements:i}=s.period;i==="between-gates"?(e.subMode="pulse",e.params={gateSeparation:-1,units:"m"}):i==="pendulum"&&(e.subMode="pendulum",e.numEvents=-1)}else s.measurementType==="gate-state"?(e.subMode="gate",e.params={flagWidth:-1,units:"m"}):s.measurementType==="projectile"&&(e.subMode="projectile",e.numEvents=4+Number(s.projectile.timeOfFlightPad),e.params={type:s.projectile.type,value:parseFloat(s.projectile.gateSeparationWidth),units:"m"});return e}};var _=s=>s!==0?1/s:s,u=s=>s==="pulse",G=s=>s==="user_defined",q=s=>s==="user_defined"||s==="bar_tape",U=class extends B(S(w)){static get properties(){return{_dataLogging:{state:!0},_dataMarking:{state:!0},_formDisabled:{state:!0},_isLoading:{state:!0},_showDataLogging:{state:!0},_supportsDataLogging:{state:!0},interfaces:{type:Array},collectionMode:{type:String},eventConfig:{type:Object},hasRadiationMonitor:{type:Boolean},photogateConfig:{type:Object},sensors:{type:Array},timeBasedConfig:{type:Object},timeBasedTotalSamples:{type:Number},triggerableSensors:{type:Array},triggeringSensorId:{type:Number},warningDurationRequired:{type:String}}}static get observableProperties(){return{authorized:I}}constructor(){super();this._dataLogging=!1,this._dataMarking=!1,this._formDisabled=!1,this._isLoading=!1,this._showDataLogging=!1,this._supportsDataLogging=!1,this.sensors=[],this.triggerableSensors=[],this.triggeringSensorId=-1,this.hasRadiationMonitor=!1,this.collectionMode="time-based",this.timeBasedConfig={delta:1.23,duration:200,continuous:!1,units:"s",remoteLogging:!1,triggering:{enabled:!1,prestore:0,sensor:0,slope:1,threshold:1.23}},this.eventConfig={name:"Event",units:"",accumulate:0,average:!1},this.photogateConfig={measurementType:"speed-through-gate",speedThroughGate:{flagWidth:.05,timingMode:"gate",gateSeparationWidth:.02,showMidTime:!1},linearMotion:{accessory:"vernier_picket_fence",spacing:.05,numberOfFlags:8,endAfterTrial:!0},angularMotion:{numberOfSpokes:10,angleUnits:"rad"},period:{timeMeasurements:"between-gates",useFirstEventAsTime0:!1},projectile:{type:"gate-separation",gateSeparationWidth:.05,timeOfFlightPad:!1}}}updated(e){e.forEach((i,a)=>{switch(a){case"timeBasedConfig":(!i||i.units!==this.timeBasedConfig.units)&&this._timeBasedUnitsChanged(),(!i||i.duration!==this.timeBasedConfig.duration)&&this._timeBasedDurationChanged(),(!i||i.triggering.prestore!==this.timeBasedConfig.triggering.prestore)&&this._timeBasedPrestoreChanged(),this._dataLogging=this.timeBasedConfig.remoteLogging;break;case"eventConfig":(!i||i.average!==this.eventConfig.average)&&this._eventsUseAverageChanged();break;default:}})}async firstUpdated(){[this.$dataWorld,this.$deviceManager,this.$sensorWorld,this.$dataCollection]=this.requestServices(["dataWorld","deviceManager","sensorWorld","dataCollection"]);let[e,...i]=this.$deviceManager.getConnectedDevices();this._showDataLogging=E("ff-enable-logging"),this._supportsDataLogging=i.length===0&&e?.supportsOfflineCollection,this.collectionModeEl=this.shadowRoot.getElementById("collection_mode"),this.fieldsetEls=this.shadowRoot.querySelectorAll("#collection_settings_form > .fieldset-secondary"),this.photogateFieldsetEls=this.shadowRoot.querySelectorAll("#fieldset_mode_photogate_timing .fieldset-secondary"),this.photogateSubmodeRadioEls=this.shadowRoot.querySelectorAll("input[name=photogate_submode]"),this.timeBasedRate=.2,this.timeBasedRateEl=this.shadowRoot.getElementById("time_based_rate"),this.timeBasedInterval=20,this.timeBasedIntervalEl=this.shadowRoot.getElementById("time_based_interval"),this.timeBasedUnitsEl=this.shadowRoot.getElementById("time_based_units"),this._dataMarking=this.$dataCollection.dataMarksEnabled,new x().bindListeners({source:this.$sensorWorld,target:this,eventMap:{"sensor-removed":"sensorRemoved","sensor-added":"sensorAdded"}}),this.interfaces=this.$sensorWorld.interfaces,this.$sensorWorld.sensors.forEach(r=>{this.checkForRadiationMonitor(r.id),this.sensorAdded(r)}),this.samplesCautionThreshold=15e3,this.maxInterfaceRate={ms:100,s:1e5,min:6e5,h:36e6},this.maxContinuousRate=200,this.minContinuousInterval=_(this.maxContinuousRate),this.warningDurationRequired="",await this.updateComplete,this.getCollectionParams(),this.lockSettings(!this.$dataWorld.isSessionEmpty)}get _availableSamples(){let e=this.$deviceManager?.getConnectedDevices().at(0);if(!e||!e.offlineLoggingStatus)return 0;let{bufferSize:i,channelSize:a}=e.offlineLoggingStatus,r=e.enabledChannels;return Math.floor(i/(a*r.length))}populateForm(e){let i=D(e);this.timeBasedConfig=i["time-based"],this.eventConfig=i["event-based"],this.photogateConfig=i["photogate-timing"],this.timeBasedConfig=n(o({},this.timeBasedConfig),{duration:l.sigFig(l.convertTimeUnits(this.timeBasedConfig.duration,"s",this.timeBasedConfig.units),6)}),this.timeBasedInterval=l.convertTimeUnits(this.timeBasedConfig.delta,"s",this.timeBasedConfig.units),this.timeBasedIntervalEl.value=l.sigFig(this.timeBasedInterval,6),this.setTimeBasedRate(),this.setTotalSamples(),this.timeBasedConfig.triggering.enabled&&(this.triggeringSensorId=this.timeBasedConfig.triggering.sensor),this.timeBasedConfig.triggering.slope===0&&(this.timeBasedConfig=n(o({},this.timeBasedConfig),{triggering:n(o({},this.timeBasedConfig.triggering),{slope:1})})),this._changeTriggeringEnabled(),this.updateTriggeringSensorUnits();let{mode:a}=i;if(a.match("events")){a="event-based";let r=p(i.mode);this.shadowRoot.getElementById(r).checked=!0}this.shadowRoot.getElementById(`photogate_submode_${p(this.photogateConfig.measurementType)}`).checked=!0,this.shadowRoot.getElementById(`photogate_angular_motion__units_${this.photogateConfig.angularMotion.angleUnits}`).checked=!0,this.shadowRoot.getElementById(`photogate_timer__measurements_${p(this.photogateConfig.period.timeMeasurements)}`).checked=!0,this.shadowRoot.getElementById(`photogate_projectile__measurements_${p(this.photogateConfig.projectile.type)}`).checked=!0,this._changePhotogateMode(),this.collectionMode=a,this._showHideFields(`fieldset_mode_${this.collectionMode}`),this.setTotalSamples(),this._checkMaxSamplingRate()}async submitForm(){let e=this.collectionModeEl.value;e==="event-based"&&(e=Array.from(this.shadowRoot.querySelectorAll('[name="event_based_submode"]')).filter(a=>a.checked)[0].value);try{this._isLoading=!0,await this.setCollectionParams(e),this._dataLogging&&await this.$dataCollection.prepareRemoteLogging({deviceId:this.$deviceManager.getConnectedDevices().at(0).id,config:this.$dataCollection.timeBasedParams}),this.$dataCollection.setDataMarksEnabled(e==="time-based"&&this._dataMarking),this.close()}catch(i){console.error(i)}finally{this._isLoading=!1}}lockSettings(e){this.collectionModeEl.disabled=e,this.timeBasedUnitsEl.disabled=e;let i=this.shadowRoot.getElementById(`photogate_submode_${p(this.photogateConfig.measurementType)}`);for(let a=0;a<this.photogateSubmodeRadioEls.length;++a)this.photogateSubmodeRadioEls[a].disabled=e;this.photogateConfig.measurementType==="speed-through-gate"&&(u(this.photogateConfig.speedThroughGate.timingMode)?this.shadowRoot.getElementById("photogate_speed__speed_calculation_gate").disabled=e:this.shadowRoot.getElementById("photogate_speed__speed_calculation_pulse").disabled=e),this.photogateConfig.measurementType==="timer"&&this.shadowRoot.querySelectorAll("[name=photogate_timer__measurements]").forEach(a=>{a.disabled=e}),this.photogateConfig.measurementType==="projectile"&&(this.shadowRoot.getElementById("photogate_projectile__tof_pad").disabled=e,this.shadowRoot.querySelectorAll("[name=photogate_projectile__measurements]").forEach(a=>{a.disabled=e})),i.disabled=!1}sensorAdded(e){this.sensors=[...this.sensors,e],e.triggerable&&(this.triggerableSensors=[...this.triggerableSensors,e]),this.sensors.length>0&&(this.errorNoSensors="",this._formDisabled=!1),this._verifyTriggering(),this._checkMaxSamplingRate()}sensorRemoved(e){this.checkForRadiationMonitor(e.id),this.sensors=this.sensors.filter(i=>i.id!==e.id),this.triggerableSensors=this.triggerableSensors.filter(i=>i.id!==e.id),this.sensors.length<1&&(this.errorNoSensors=t("No sensor connected"),this._formDisabled=!0),this._verifyTriggering(!0),this._checkMaxSamplingRate()}checkForRadiationMonitor(e){let i=this.$dataCollection.eventBasedParams;this.$sensorWorld.isRadiationMonitor(e)&&(i.isDirty||(i.accumulate=50,i.isDirty=!0),i.average=!1,this.hasRadiationMonitor=!0)}getCollectionParams(){let e={};e.mode=this.$dataCollection.mode,["time-based","event-based","drop-counting","full-spectrum","photogate-timing"].forEach(i=>{let r=this.$dataCollection.getCollectionParams(i).params;e[i]=r,i.match("event")?this.$dataWorld.getColumnGroups().forEach(d=>{d.type==="event"&&(e[i].name=d.name,e[i].units=d.units)}):i.match("photogate-timing")&&(e["photogate-timing"]=Object.assign(this.photogateConfig,$.backendToFrontend(e[i])))}),this.populateForm(e)}setCollectionParams(e){let i=o({},this.eventConfig);i.accumulate=parseInt(i.accumulate),i.average=!!i.average;let a=o({},this.photogateConfig);a.measurementType=L(a.measurementType),a.speedThroughGate.flagWidth=parseFloat(a.speedThroughGate.flagWidth),a.speedThroughGate.gateSeparationWidth=parseFloat(a.speedThroughGate.gateSeparationWidth),a.linearMotion.spacing=parseFloat(a.linearMotion.spacing),a.linearMotion.numberOfFlags=parseInt(a.linearMotion.numberOfFlags),a.angularMotion.numberOfSpokes=parseInt(a.angularMotion.numberOfSpokes);let r=o({},this.timeBasedConfig);r.delta=this._limitInterval(),r.duration=l.convertTimeUnits(parseFloat(r.duration),r.units,"s"),r.continuous=!!this.timeBasedConfig.continuous,r.remoteLogging=!!this.timeBasedConfig.remoteLogging,r.triggering.prestore=parseInt(r.triggering.prestore),r.triggering.slope=parseFloat(r.triggering.slope),r.triggering.threshold=parseFloat(r.triggering.threshold),r.triggering.sensor=this._getTriggeringSensorId();let d={mode:e,"time-based":r,"event-based":i,"photogate-timing":a},c=d[e],k=e.match("events");return k?c=d["event-based"]:e.match("photogate-timing")&&(c=$.frontendToBackend(d[e])),new Promise((A,W)=>{e.match("events")&&(this.$dataCollection.eventBasedParams.name=c.name,this.$dataCollection.eventBasedParams.units=c.units),this.$dataCollection.setCollectionParams(e,c).then(()=>{if(k){let{$dataWorld:m}=this;m.getColumnGroups().forEach(f=>{f.type==="event"&&(m.updateColumnGroup(f.id,{name:c.name,units:c.units}),e==="selected-events"&&f.allColumns.forEach(C=>{C.values.length===0&&m.changeColumnDataType(C.id,F.NUMERIC)}))})}A()}).catch(m=>{console.error(m),W()})})}getMaxInterfaceInterval(){let e="",i=2148,a={labquest:800,goMotion:180,goLink:65.535,goTemp:2147.48352};return this.interfaces.forEach(r=>{r.type.match(/LabQuest/)?e="labquest":r.type==="Go!Link"?e="goLink":r.type==="Go!Temp"?e="goTemp":r.type==="Go!Motion"&&(e="goMotion"),i=Math.min(a[e],i)}),i}close(){this.dispatchEvent(new CustomEvent("close-dialog",{composed:!0,bubbles:!0}))}_changeCollectionMode(e){this.collectionMode=e.target.value,this._showHideFields(`fieldset_mode_${this.collectionMode}`)}_changeTimeBasedUnits(e){this.timeBasedConfig=n(o({},this.timeBasedConfig),{units:e.target.value})}_changeTimeBasedDuration(e){this.timeBasedConfig=n(o({},this.timeBasedConfig),{duration:e.target.value})}_changeTriggeringSlope(e){this.timeBasedConfig=n(o({},this.timeBasedConfig),{triggering:n(o({},this.timeBasedConfig.triggering),{slope:e.target.value})})}_changeTriggerThreshold(e){this.timeBasedConfig=n(o({},this.timeBasedConfig),{triggering:n(o({},this.timeBasedConfig.triggering),{threshold:e.target.value})})}_changeTriggerPrestore(e){this.timeBasedConfig=n(o({},this.timeBasedConfig),{triggering:n(o({},this.timeBasedConfig.triggering),{prestore:e.target.value})}),this.setTotalSamples()}_changeEventName(e){this.eventConfig=n(o({},this.eventConfig),{name:e.target.value})}_changeEventUnits(e){this.eventConfig=n(o({},this.eventConfig),{units:e.target.value})}_changeEventAccumulate(e){this.eventConfig=n(o({},this.eventConfig),{accumulate:e.target.value})}_changeEventAverage(e){this.eventConfig=n(o({},this.eventConfig),{average:e.target.checked})}_changePhotogateLinearMotionEndCollection(e){this.photogateConfig=n(o({},this.photogateConfig),{linearMotion:n(o({},this.photogateConfig.linearMotion),{endAfterTrial:e.target.value!=="manually"})})}_changePhotogateLinearMotionSpacing(e){this.photogateConfig=n(o({},this.photogateConfig),{linearMotion:n(o({},this.photogateConfig.linearMotion),{spacing:e.target.value})})}_changePhotogateLinearMotionNumberOfFlags(e){this.photogateConfig=n(o({},this.photogateConfig),{linearMotion:n(o({},this.photogateConfig.linearMotion),{numberOfFlags:e.target.value})})}_changePhotogateAngleUnits(e){this.photogateConfig=n(o({},this.photogateConfig),{angularMotion:n(o({},this.photogateConfig.angularMotion),{angleUnits:e.target.value})})}_changePhotogateTimeMeasurements(e){this.photogateConfig=n(o({},this.photogateConfig),{period:n(o({},this.photogateConfig.period),{timeMeasurements:e.target.value,useFirstEventAsTime0:e.target.value==="at-each-gate"})})}_changePhotogateProjectileLaunchSpeed(e){let i=e.target.value,a={"gate-separation":{width:.05},"projectile-diameter":{width:.017247}};this.photogateConfig=n(o({},this.photogateConfig),{projectile:n(o({},this.photogateConfig.projectile),{type:i,gateSeparationWidth:a[i].width})})}_changePhotogateProjectileGateSeparationWidth(e){this.photogateConfig=n(o({},this.photogateConfig),{projectile:n(o({},this.photogateConfig.projectile),{gateSeparationWidth:e.target.value})})}_changePhotogateProjectileTimeOfFlightPad(e){this.photogateConfig=n(o({},this.photogateConfig),{projectile:n(o({},this.photogateConfig.projectile),{timeOfFlightPad:e.target.checked})})}_changePhotogateAngularMotionNumberOfSpokes(e){this.photogateConfig=n(o({},this.photogateConfig),{angularMotion:n(o({},this.photogateConfig.angularMotion),{numberOfSpokes:e.target.value})})}_changePhotogateMode(e){e&&(this.photogateConfig=n(o({},this.photogateConfig),{measurementType:e.target.value})),this._showHidePhotogateFields(`photogate_submode_${p(this.photogateConfig.measurementType)}__content`)}_changePhotogateIsPulseTiming(e){this.photogateConfig=n(o({},this.photogateConfig),{speedThroughGate:n(o({},this.photogateConfig.speedThroughGate),{timingMode:e.target.value})})}_changePhotogateSpeedThroughGateFlagWidth(e){this.photogateConfig=n(o({},this.photogateConfig),{speedThroughGate:n(o({},this.photogateConfig.speedThroughGate),{flagWidth:e.target.value})})}_changePhotogateSpeedThroughGateGateSeparationWidth(e){this.photogateConfig=n(o({},this.photogateConfig),{speedThroughGate:n(o({},this.photogateConfig.speedThroughGate),{gateSeparationWidth:e.target.value})})}_changeContinuousCollection(e){e&&(this.timeBasedConfig=n(o({},this.timeBasedConfig),{continuous:e.target.value==="true"})),this.warningDurationRequired="";let i=l.convertTimeUnits(parseFloat(this.timeBasedRateEl.value),"s",this.timeBasedConfig.units);this.timeBasedConfig.continuous&&i>this.maxContinuousRate&&(this.timeBasedRateEl.value=l.convertTimeUnits(this.maxContinuousRate,this.timeBasedConfig.units,"s"),this.requestUpdate(),this.timeBasedRate=this.timeBasedRateEl.value,this.setTimeBasedInterval()),this.setTotalSamples()}_changePhotogateLinearMotionAccessory(e){let i=e.target.value;this.photogateConfig=n(o({},this.photogateConfig),{linearMotion:n(o({},this.photogateConfig.linearMotion),{accessory:i})});let a={vernier_picket_fence:{spacing:.05,numberOfFlags:8},cart_picket_fence:{spacing:.01,numberOfFlags:13},ultra_pulley_in_groove:{spacing:.015,numberOfFlags:10},ultra_pulley_outside_edge:{spacing:.016,numberOfFlags:10},bar_tape:{spacing:.016,numberOfFlags:""},user_defined:{spacing:"",numberOfFlags:""}};if(a[i]){let r=i!=="ultra_pulley_in_groove"||i!=="ultra_pulley_outside_edge";this.photogateConfig=n(o({},this.photogateConfig),{linearMotion:n(o({},this.photogateConfig.linearMotion),{spacing:a[i].spacing,numberOfFlags:a[i].numberOfFlags,endAfterTrial:r})})}}_handleDataLoggingChange(e){let i=e.target.value==="true";i&&(this._dataMarking=!1,this.timeBasedConfig.triggering.enabled=!1),this._dataLogging=i,this.timeBasedConfig=n(o({},this.timeBasedConfig),{remoteLogging:i}),this.setTotalSamples()}_showHideFields(e){this.fieldsetEls.forEach(i=>{i.disabled=i.id!==p(e)})}_showHidePhotogateFields(e){let i=this.shadowRoot.getElementById(e);for(let a=0;a<this.photogateFieldsetEls.length;++a)this.photogateFieldsetEls[a].disabled=!0;i.disabled=!1}showHelperText(e){let i=e.target.dataset.photogateSubmode;this.shadowRoot.querySelector(`#photogate_submode_${i}__content`).querySelectorAll(".helper-text").forEach(r=>{r.classList.toggle("helper-text--visible")})}setTotalSamples(){if(!this.timeBasedConfig.continuous){let e=this._dataLogging?1e4:1e6,i=Math.ceil(e/this.timeBasedRate),a=Math.floor(e*this.timeBasedConfig.duration/i);for(;a*i<e*this.timeBasedConfig.duration;)a++;a++,a+=parseInt(this.timeBasedConfig.triggering.prestore)||0,Number.isNaN(a)&&(a=""),this.timeBasedTotalSamples=a}if(this.samplesCautionThreshold<this.timeBasedTotalSamples)this.warningSamplesThreshold=t("Collecting a large number of points impacts performance.");else if(this._dataLogging&&this.timeBasedTotalSamples>this._availableSamples){let e=1e4,i=parseInt(this.timeBasedConfig.triggering.prestore)||0,a=this._availableSamples-i,r=1,d;do d=Math.ceil(e*this.timeBasedConfig.duration/(a-r++));while((a-1)*d<e*this.timeBasedConfig.duration);let c=e/d;this.warningSamplesThreshold=T(t("The requested rate and duration cannot be met. Maximum rate is %.2f samples/%s for %d%s."),c,this.timeBasedConfig.units,this.timeBasedConfig.duration,this.timeBasedConfig.units)}else this.warningSamplesThreshold=""}setTimeBasedInterval(){this.timeBasedInterval=_(this.timeBasedRate),this.timeBasedIntervalEl.value=l.sigFig(this.timeBasedInterval,6),this.setTotalSamples()}setTimeBasedRate(){this.timeBasedRate=_(this.timeBasedInterval),this.timeBasedRateEl.value=l.sigFig(this.timeBasedRate,6),this.setTotalSamples()}_timeBasedUnitsChanged(){setTimeout(()=>{this._checkMaxSamplingRate(),this.setTotalSamples()})}_timeBasedDurationChanged(){this.setTotalSamples()}_timeBasedPrestoreChanged(){this.setTotalSamples()}_rateInput(){this.timeBasedRate=this.timeBasedRateEl.value,this.setTimeBasedInterval(),this._checkMaxSamplingRate()}_intervalInput(){this.timeBasedInterval=this.timeBasedIntervalEl.value,this.setTimeBasedRate(),this._checkMaxSamplingRate()}_limitInterval(){let e=l.convertTimeUnits(parseFloat(this.timeBasedInterval),this.timeBasedConfig.units,"s"),i=_(this.maxInterfaceRate.s),a=this.getMaxInterfaceInterval();return e<i?l.convertTimeUnits(i,"s",this.timeBasedConfig.units):e>a?a:e}_checkMaxSamplingRate(){l.convertTimeUnits(parseFloat(this.timeBasedRateEl.value),"s",this.timeBasedConfig.units)>this.maxContinuousRate&&this.timeBasedConfig.continuous&&(this.timeBasedConfig.continuous=!1,this.requestUpdate(),this._changeContinuousCollection(),this.warningDurationRequired=t("Rates exceeding 200 samples/s require a fixed duration."))}_verifyTriggering(e=!1){this.triggerableSensors.length<1&&(this.timeBasedConfig.triggering.enabled=!1),e&&setTimeout(()=>{this._getTriggeringSensorId()===-1&&(this.timeBasedConfig.triggering.enabled=!1)})}_changeTriggeringEnabled(e){if(e&&(this.timeBasedConfig.triggering.enabled=e.target.value==="true",this.requestUpdate()),this.timeBasedConfig.triggering.enabled){if(this.triggeringSensorId<=0){let i=this._getTriggeringSensorId();if(i===-1){let a=this.shadowRoot.querySelector('input[name="triggering_sensor"]');a&&(a.checked=!0)}else this.shadowRoot.querySelector(`#sensor_${i}`).checked=!0}this.updateTriggeringSensorUnits()}else this.timeBasedConfig.triggering.prestore=0}_getTriggeringSensorId(){let e=-1,i=this.shadowRoot.querySelectorAll('input[name="triggering_sensor"]');for(let a=0;a<i.length;++a)i[a].checked&&(e=parseInt(i[a].value));return e}updateTriggeringSensor(){this.triggeringSensorId=this._getTriggeringSensorId(),this.updateTriggeringSensorUnits()}updateTriggeringSensorUnits(){let e=this._getTriggeringSensorId();this.triggerableSensors.forEach(i=>{i.id===e&&(this.shadowRoot.getElementById("triggering_sensor_units").textContent=i.units)})}_isTriggeringSensor(e){return e===this.triggeringSensorId}_eventsUseAverageChanged(){this.eventConfig.average&&(this.eventConfig=n(o({},this.eventConfig),{accumulate:10}))}_angleUnits(e){return this.photogateConfig.angularMotion.angleUnits===e}_timeMeasurements(e){return this.photogateConfig.period.timeMeasurements===e}_projectileLaunchSpeed(e){return this.photogateConfig.projectile.type===e}static get styles(){return[R,P]}_changeDataMarkingEnabled(e){this._dataMarking=e.target.value==="true"}_showDataLoggingInstructions(){this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:t("Remote Logging"),content:g`
              <p>
                ${t(`Remote logging allows a sensor to collect data even when not
                  connected to Graphical Analysis. Data collection can be
                  configured and initiated in Graphical Analysis, and the sensor
                  disconnected for the remainder of the experiment. On
                  reconnection, Graphical Analysis will prompt to retrieve
                  logged data.`)}
              </p>
              <p margin="block-start-m">
                ${t("Remote logging is only possible on one sensor at a time.")}
              </p>
              <p margin="block-start-m">
                ${t(`Not all sensors are capable of remote logging. Open the Device
                  Information dialog to see if it is capable.`)}
              </p>
            `,actions:[{id:"done",message:t("Done"),onClick:async()=>{this.dispatchEvent(b("message_box"))}}]},onClose:()=>{}}}))}showDataMarkingInstructions(){this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:t("Data Mark"),content:t("Click the Mark button during collection to add a data mark at the current time."),actions:[{id:"done",message:t("Done"),onClick:async()=>{this.dispatchEvent(b("message_box"))}}]},onClose:()=>{}}}))}render(){return g`
      <vst-ui-form @submit="${this.submitForm}">
        <form id="collection_settings_form" class="collection-settings-form">
          <fieldset class="fieldset-primary" id="fieldset_mode">
            <div class="row margin-block-end-0">
              <label for="collection_mode" class="col-4 heading" size="s">${t("Mode")}</label>
              <select
                name="collection_mode"
                id="collection_mode"
                @change="${this._changeCollectionMode}"
                .value="${this.collectionMode}"
              >
                <option value="time-based">${t("Time Based")}</option>
                <option value="event-based">${t("Event Based")}</option>
                <option value="drop-counting">${t("Drop Counting")}</option>
                <option value="photogate-timing">${t("Photogate Timing")}</option>
              </select>
            </div>
          </fieldset>
          <fieldset class="fieldset-secondary" id="fieldset_mode_time_based">
            <section>
              <div class="row">
                <label for="time_based_units" class="col-4 heading" size="s">${t("Time Units")}</label>
                <div class="col-8">
                  <select
                    name="time_based_units"
                    id="time_based_units"
                    @change="${this._changeTimeBasedUnits}"
                    .value="${this.timeBasedConfig.units}"
                  >
                    <option value="ms">${t("ms")}</option>
                    <option value="s" selected>${t("s")}</option>
                    <option value="min">${t("min")}</option>
                    <option value="h">${t("h")}</option>
                  </select>
                </div>
              </div>
            </section>
            <section class="rate-interval">
              <div class="row">
                <div class="col-4">
                  <label for="time_based_rate" class="heading" size="s">${t("Rate")}</label>
                </div>
                <div class="col-8">
                  <input
                    class="inline-block"
                    type="number"
                    name="time_based_rate"
                    id="time_based_rate"
                    max=${this._dataLogging?(this._availableSamples/this.timeBasedConfig.duration).toFixed(2):""}
                    value=""
                    step="any"
                    @input="${this._rateInput}"
                    required
                    min="0.0000000000000001"
                  >
                  <span class="label-suffix caption">
                    <span>${t("samples")}</span>/<span class="time-unit">${this.timeBasedConfig.units}</span>
                  </span>
                </div>
              </div>
              <vst-ui-icon class="rate-interval__link-icon" .icon="${j}"></vst-ui-icon>
              <div class="row">
                <div class="col-4">
                  <label for="time_based_interval" class="heading" size="s">${t("Interval")}</label>
                </div>
                <div class="col-8">
                  <input
                    class="inline-block"
                    type="number"
                    name="time_based_interval"
                    id="time_based_interval"
                    value=""
                    step="any"
                    @input="${this._intervalInput}"
                    required
                    min="0"
                  >
                  <span class="label-suffix caption">
                    <span>${this.timeBasedConfig.units}</span>/<span class="time-unit">${t("sample")}</span>
                  </span>
                </div>
              </div>
            </section>
            <section class="start-collection">
              <div class="row align-start">
                <div class="col-4 heading" size="s">${t("Start Collection")}</div>
                  <div class="col-8">
                    <div class="radio-block">
                      <input
                        type="radio"
                        id="triggering_disabled"
                        name="start_collection"
                        value="false"
                        ?disabled=${this._dataLogging}
                        .checked="${!this.timeBasedConfig.triggering.enabled}"
                        @change="${this._changeTriggeringEnabled}"
                      >
                      <label for="triggering_disabled">${t("Manually")}</label>
                    </div>
                    <div class="radio-block">
                      <input
                        ?disabled="${!this.triggerableSensors.length||this._dataLogging}"
                        type="radio"
                        id="triggering_enabled"
                        name="start_collection"
                        value="true"
                        .checked="${this.timeBasedConfig.triggering.enabled}"
                        @change="${this._changeTriggeringEnabled}"
                      >
                      <label for="triggering_enabled">${t("On a triggering event")}</label>
                    </div>
                    <fieldset
                      id="triggering_fieldset"
                      class="triggering-fieldset"
                      ?hidden="${!this.timeBasedConfig.triggering.enabled}"
                    >
                      <section>
                        <span>${t("Start collection when")}</span>
                        <br>
                        <ul class="triggering-sensors" id="triggering_sensors">
                          ${this.triggerableSensors.map(e=>g`
                                <li class="radio-block">
                                  <input
                                    type="radio"
                                    name="triggering_sensor"
                                    value="${e.id}"
                                    id="sensor_${e.id}"
                                    .checked="${this._isTriggeringSensor(e.id)}"
                                    @change="${this.updateTriggeringSensor}"
                                  />
                                  <label for="sensor_${e.id}">${e.name}</label>
                                </li>
                              `)}
                        </ul>
                        <label for="triggering_slope">${t("is")}</label>
                        <select
                          id="triggering_slope"
                          name="triggering_slope"
                          @change="${this._changeTriggeringSlope}"
                          .value="${this.timeBasedConfig.triggering.slope}"
                          margin="block-start-2xs block-end-xs"
                        >
                          <option value="1">${t("increasing")}</option>
                          <option value="-1">${t("decreasing")}</option>
                        </select>
                        <label for="triggering_threshold" class="col-7">
                          <span>${t("across")}</span>
                          <input
                            class="w75 inline-block"
                            type="number"
                            step="any"
                            name="triggering_threshold"
                            id="triggering_threshold"
                            .value="${this.timeBasedConfig.triggering.threshold}"
                            @input="${this._changeTriggerThreshold}"
                          >
                          <span id="triggering_sensor_units"></span>
                        </label>
                      </section>
                      <section>
                        <label for="triggering_prestore">
                          <span>${t("Collect")}</span>
                          <input
                            type="number"
                            step="1"
                            min="0"
                            id="triggering_prestore"
                            .value="${this.timeBasedConfig.triggering.prestore}"
                            @input="${this._changeTriggerPrestore}"
                            margin="block-start-2xs block-end-xs"
                          >
                          <span>${t("points before trigger")}</span>
                        </label>
                      </section>
                    </fieldset>
                  </div>
                </div>
              </section>
              <section id="time_based_duration_wrapper">
                <div class="row time-based-duration-row">
                  <div class="col-4 heading" size="s">${t("End Collection")}</div>
                  <div class="col-8">
                    <div class="end-collection-radio finite-collection-radio flex-v-centered">
                      <input
                        type="radio"
                        name="time_based_collection"
                        value="false"
                        id="time_based_finite_duration"
                        @change="${this._changeContinuousCollection}"
                        .checked="${!this.timeBasedConfig.continuous}"
                      >
                      <label for="time_based_finite_duration">
                        <span>${t("After")}</span>
                        <input
                          class="inline-block"
                          type="number"
                          name="time_based_duration"
                          id="time_based_duration"
                          min="0"
                          step="any"
                          .value="${this.timeBasedConfig.duration}"
                          @input="${this._changeTimeBasedDuration}"
                          ?disabled="${this.timeBasedConfig.continuous}"
                          ?required="${!this.timeBasedConfig.continuous}"
                        >
                        <span class="time-unit">${this.timeBasedConfig.units}</span>
                        <span>${t("duration")}</span>
                      </label>
                    </div>
                    <div class="end-collection-radio radio-block">
                      <input
                        type="radio"
                        name="time_based_collection"
                        value="true"
                        id="time_based_continuous_collection"
                        @change="${this._changeContinuousCollection}"
                        .checked="${this.timeBasedConfig.continuous}"
                      >
                      <label for="time_based_continuous_collection">${t("Manually")}</label>
                    </div>
                    <div class="warn" id="warning_duration_required">${this.warningDurationRequired}</div>
                  </div>
                </div>
              </section>
              <section
                id="time_based_total_samples"
                class="total-samples"
                ?hidden="${this.timeBasedConfig.continuous}"
              >
                <div class="row">
                  <div class="col-4 heading" size="s">
                    <span>${t("Total samples")}</span>
                  </div>
                  <div class="col-8">
                    <p color="muted">
                      ${this.timeBasedTotalSamples}
                      ${y(this._dataLogging,()=>g` / <span>${this._availableSamples}</span> `)}
                    </p>
                    <p class="caption" color="warning" id="warning_samples_threshold">${this.warningSamplesThreshold}</p>
                  </div>
                </div>
              </section>
              <section id="data-logging" ?hidden="${!this._showDataLogging}">
                <div class="row align-start">
                  <div id="data-logging-label" class="col-4 heading" size="s">
                    <div>${t("Remote Logging")}</div>
                    <div>
                      <button
                        class="btn"
                        variant="icon"
                        size="xs"
                        margin="inline-start-3xs"
                        id="data-logging-info"
                        @click="${this._showDataLoggingInstructions}"
                        type="button"
                      >
                        <vst-ui-icon .icon="${h}"></vst-ui-icon>
                        <span visually-hidden>
                          ${t("Show Remote Logging instructions")}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div class="col-8">
                    <vst-ui-pro-only
                      feature-name="${t("Remote Logging")}"
                      preview-position="top-left"
                      .authorizedClickHandler=${()=>{}}
                    >
                    <div class="inline" gap="l">
                      <div>
                        <div class="radio-block">
                          <input
                            type="radio"
                            id="data-logging-disabled"
                            name="data-logging"
                            value="false"
                            .checked="${!this._dataLogging}"
                            .disabled=${!this.authorized||!this._supportsDataLogging}
                            @change=${this._handleDataLoggingChange}
                          />
                          <label for="data-logging-disabled">${t("Disabled")}</label>
                        </div>
                        <div class="radio-block">
                          <input
                            type="radio"
                            id="data-logging-enabled"
                            name="data-logging"
                            value="true"
                            .checked="${this._dataLogging}"
                            .disabled=${!this.authorized||!this._supportsDataLogging}
                            @change=${this._handleDataLoggingChange}
                          />
                          <label for="data-logging-enabled">${t("Enabled")}</label>
                        </div>
                        </div>
                      </div>
                    </vst-ui-pro-only>
                  </div>
                </div>
              </section>
              <section id="data-marking">
                <div class="row align-start">
                  <div id="data-marking-label" class="col-4 heading" size="s">
                    <div>${t("Data Marking")}</div>
                    <div>
                      <button
                        class="btn"
                        variant="icon"
                        size="xs"
                        margin="inline-start-3xs"
                        id="data-marking-info"
                        @click="${this.showDataMarkingInstructions}"
                        type="button"
                      >
                        <vst-ui-icon .icon="${h}"></vst-ui-icon>
                        <span visually-hidden>
                          ${t("Show Data Marking instructions")}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div class="col-8">
                    <vst-ui-pro-only
                      feature-name="${t("Data Marking")}"
                      preview-position="top-left"
                      .authorizedClickHandler=${()=>{}}
                    >
                    <div class="inline" gap="l">
                      <div>
                        <div class="radio-block">
                          <input
                            type="radio"
                            id="data-marking-disabled"
                            name="data-marking"
                            value="false"
                            .checked="${!this._dataMarking}"
                            .disabled=${!this.authorized||this._dataLogging}
                            @change=${this._changeDataMarkingEnabled}
                          />
                          <label for="data-marking-disabled">${t("Disabled")}</label>
                        </div>
                        <div class="radio-block">
                          <input
                            type="radio"
                            id="data-marking-enabled"
                            name="data-marking"
                            value="true"
                            .checked="${this._dataMarking}"
                            .disabled=${!this.authorized||this._dataLogging}
                            @change=${this._changeDataMarkingEnabled}
                          />
                          <label for="data-marking-enabled">${t("Enabled")}</label>
                        </div>
                        </div>
                      </div>
                    </vst-ui-pro-only>
                  </div>
                </div>
              </section>
            </fieldset>
            <fieldset class="fieldset-secondary" id="fieldset_mode_event_based">
              <section>
                <fieldset>
                  <div class="row">
                    <legend class="col-4 heading" size="s">${t("Event Mode")}</legend>
                    <div class="col-8">
                      <div class="radio-block">
                        <input
                          type="radio"
                          name="event_based_submode"
                          id="events_with_entry"
                          value="events-with-entry"
                          checked
                        >
                        <label class="text-right" for="events_with_entry">
                          ${t("Events with Entry")}
                        </label>
                      </div>
                      <div class="radio-block">
                        <input
                          type="radio"
                          name="event_based_submode"
                          id="selected_events"
                          value="selected-events"
                        >
                        <label class="text-right" for="selected_events">
                          ${t("Selected Events")}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </section>
              <section>
                <div class="row">
                  <label class="col-4 heading" size="s" for="events_column_name">
                    ${t("Event Name")}
                  </label>
                  <input
                    type="text"
                    .value="${this.eventConfig.name}"
                    @input="${this._changeEventName}"
                    name="events_column_name"
                    id="events_column_name"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                  >
                </div>
                <div class="row">
                  <label class="col-4 heading" size="s" for="events_column_units">
                    ${t("Units")}
                  </label>
                  <input
                    type="text"
                    .value="${this.eventConfig.units}"
                    @input="${this._changeEventUnits}"
                    name="events_column_units"
                    id="events_column_units"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                  >
                </div>
              </section>
              <section>
                <div class="row">
                  ${this.hasRadiationMonitor?g`
                          <label class="col-4 heading" size="s" for="events_count_interval">
                            ${t("Count Interval")}
                          </label>
                          <div class="col-5">
                            <input
                              type="number"
                              min="1"
                              step="1"
                              name="events_count_interval"
                              id="events_count_interval"
                              .value="${this.eventConfig.accumulate}"
                              @input="${this._changeEventAccumulate}"
                            />
                            <span>${t("seconds")}</span>
                          </div>
                        `:g`
                          <div class="col-8 offset-4">
                            <div class="checkbox-group">
                              <div class="checkbox">
                                <input
                                  type="checkbox"
                                  name="events_average_ten_seconds"
                                  id="events_average_ten_seconds"
                                  .checked="${this.eventConfig.average}"
                                  @change="${this._changeEventAverage}"
                                />
                                <span class="check"></span>
                              </div>
                              <label for="events_average_ten_seconds">
                                ${t("Average sensor reading over 10 seconds")}
                              </label>
                            </div>
                          </div>
                        `}
                </div>
              </section>
            </fieldset>
            <fieldset class="fieldset-secondary" id="fieldset_mode_drop_counting">
              <section>
                <fieldset>
                  <div class="row">
                    <p color="muted">
                    ${t("Take reading from a sensor (e.g., pH, conductivity) on every drop.")}
                    </p>
                  </div>
                </fieldset>
              </section>
            </fieldset>
            <fieldset class="fieldset-secondary" id="fieldset_mode_full_spectrum">
              <section>
                <fieldset>
                  <div class="row">
                      <p>Take data across a full spectrum.</p>
                  </div>
                </fieldset>
              </section>
            </fieldset>
            <fieldset class="fieldset-secondary photogate-modes" id="fieldset_mode_photogate_timing">
              <div class="row">
                <legend class="col-4 heading"  size="s" align-top>${t("Measurement")}</legend>
                <div class="col-8">
                  <ul class="photogate-modes__list">
                    <li class="photogate-modes__list-item">
                      <div class="radio-block">
                        <input
                          checked
                          type="radio"
                          @change="${this._changePhotogateMode}"
                          name="photogate_submode"
                          id="photogate_submode_speed_through_gate"
                          value="speed_through_gate"
                        >
                        <label for="photogate_submode_speed_through_gate">
                          ${t("Speed through Gate")}
                        </label>
                      </div>
                      <fieldset
                        class="photogate-modes__mode-body fieldset-auto fieldset-secondary" id="photogate_submode_speed_through_gate__content"
                      >
                        <vst-style-tooltip>
                          <button
                            class="btn"
                            variant="icon"
                            size="xs"
                            id="speed_through_gate_info"
                            type="button"
                            data-photogate-submode="speed_through_gate"
                            @click="${this.showHelperText}"
                          >
                            <vst-ui-icon class="photogate-modes__info-btn-icon" .icon="${h}"></vst-ui-icon>
                            <span visually-hidden>${t("Speed Through Gate Info")}</span>
                          </button>
                          <span role="tooltip" position="block-end-end">
                            ${t("Speed Through Gate Info")}
                          </span>
                        </vst-style-tooltip>
                        <ul class="photogate-modes__list">
                          <li>
                            <div class="radio-block" style="margin-block-end: 0.5rem;">
                              <input
                                .checked="${!u(this.photogateConfig.speedThroughGate.timingMode)}"
                                @change="${this._changePhotogateIsPulseTiming}"
                                type="radio"
                                name="photogate_speed__speed_calculation"
                                id="photogate_speed__speed_calculation_gate"
                                value="gate"
                              >
                              <label for="photogate_speed__speed_calculation_gate">
                                <span>${t("Use object / flag width")}</span>
                                <span>
                                  (${t("Gate timing")})
                                </span>
                              </label>
                            </div>
                            <fieldset
                              ?disabled="${u(this.photogateConfig.speedThroughGate.timingMode)}"
                              style="margin-inline-start: 1.25rem;"
                            >
                              <div class="split-input">
                                <div class="split-input__input">
                                  <label>
                                    <span>${t("Flag Width")}</span>
                                    <div>
                                      <input
                                        class="inline-block"
                                        type="number"
                                        .value="${this.photogateConfig.speedThroughGate.flagWidth}"
                                        @input="${this._changePhotogateSpeedThroughGateFlagWidth}"
                                        min="0.00001"
                                        step="any"
                                        required
                                      >
                                      <span class="inline-block">m</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                            <div class="helper-text">
                              <p>${t("The Object/Flag Width is divided by the time the photogate is blocked (Blocked-Gate Duration) to determine the object\u2019s speed through the gate.")}</p>
                              <figure class="helper-text__figure">
                                <div class="graphic-speed">
                                  <div class="graphic-speed__owt">${t("Object Width")}</div>
                                  <div class="graphic-speed__fwt">${t("Flag Width")}</div>
                                  <div class="graphic-speed__oar">
                                    <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-right.svg">
                                  </div>
                                  <div class="graphic-speed__oal">
                                    <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-left.svg">
                                  </div>
                                  <div class="graphic-speed__fal">
                                    <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-right.svg">
                                  </div>
                                  <div class="graphic-speed__far">
                                    <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-left.svg">
                                  </div>
                                  <div class="graphic-speed__cir">
                                    <div class="circle"></div>
                                  </div>
                                  <div class="graphic-speed__f1"></div>
                                  <div class="graphic-speed__f2"></div>
                                  <div class="graphic-speed__f3"></div>
                                  <div class="graphic-speed__f4"></div>
                                  <div class="graphic-speed__f5"></div>
                                  <div class="graphic-speed__f6"></div>
                                  <div class="graphic-speed__f7"></div>
                                </div>
                              </figure>
                            </div>
                          </li>
                          <li>
                            <div class="radio-block" style="margin-block-end: 0.5rem;">
                              <input
                                .checked="${u(this.photogateConfig.speedThroughGate.timingMode)}"
                                @change="${this._changePhotogateIsPulseTiming}"
                                type="radio"
                                name="photogate_speed__speed_calculation"
                                id="photogate_speed__speed_calculation_pulse"
                                value="pulse"
                              >
                              <label for="photogate_speed__speed_calculation_pulse">
                                <span>
                                  ${t("Use gate separation")}
                                </span>
                                <span>(${t("Pulse timing")})</span>
                              </label>
                            </div>
                            <fieldset
                              ?disabled="${!u(this.photogateConfig.speedThroughGate.timingMode)}"
                              style="margin-inline-start: 1.25rem;"
                            >
                              <label>
                                <span>${t("Distance between gates")}</span>
                                <div>
                                  <input
                                    class="inline-block"
                                    type="number"
                                    .value="${this.photogateConfig.speedThroughGate.gateSeparationWidth}"
                                    @input="${this._changePhotogateSpeedThroughGateGateSeparationWidth}"
                                    min="0.00001"
                                    step="any"
                                    required
                                  >
                                  <span class="inline-block">m</span>
                                </div>
                              </label>
                            </fieldset>
                          </li>
                        </ul>
                        <div class="helper-text">
                          <p>
                            ${t("When using two photogates, you can use the distance between gates instead of the Object / Flag Width to calculate speed. The reported speed would be the speed between the two gates.")}
                          </p>
                          <figure class="helper-text__figure">
                            <div class="graphic-gate-separation">
                              <div class="graphic-gate-separation__pic">
                                <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-speed-separation.svg">
                              </div>
                              <div class="graphic-gate-separation__la">
                                <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-left.svg">
                              </div>
                              <div class="graphic-gate-separation__gate-sep">
                                ${t("Gate Separation")}
                              </div>
                              <div class="graphic-gate-separation__ra">
                                <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-right.svg">
                              </div>
                            </div>
                          </figure>
                        </div>
                        <div hidden>
                          <label class="checkbox-group">
                            <div class="checkbox">
                              <input
                                .checked="${this.photogateConfig.speedThroughGate.showMidTime}"
                                @change="${this._changeCollectionMode}"
                                type="checkbox"
                                name="photogate_mid_time_through_gate"
                              >
                              <span>${t("Show mid-time through gate")}</span>
                              <span class="check"></span>
                            </div>
                          </label>
                          <p class="helper-text">${t("Use this option to investigate speed with respect to time. The reported time is the midpoint time between the time the gate is blocked and the time the gate becomes unblocked.")}</p>
                        </div>
                      </fieldset>
                    </li>
                    <li class="photogate-modes__list-item">
                      <div class="radio-block">
                        <input
                          type="radio"
                          @change="${this._changePhotogateMode}"
                          name="photogate_submode"
                          id="photogate_submode_linear_motion"
                          value="linear_motion"
                        >
                        <label for="photogate_submode_linear_motion">
                          <span>${t("Linear Motion")}</span>
                          <span class="quiet">${t("(distance, velocity, acceleration)")}</span>
                        </label>
                      </div>
                      <fieldset
                        class="photogate-modes__mode-body fieldset-auto fieldset-secondary" id="photogate_submode_linear_motion__content"
                        disabled
                      >
                      <vst-style-tooltip>
                        <button
                          class="btn"
                          variant="icon"
                          size="xs"
                          id="linear_motion_info"
                          data-photogate-submode="linear_motion"
                          @click="${this.showHelperText}"
                          type="button"
                        >
                          <vst-ui-icon class="photogate-modes__info-btn-icon" .icon="${h}"></vst-ui-icon>
                        </button>
                        <span role="tooltip" position="block-end-end">
                          ${t("Linear Motion Info")}
                        </span>
                      </vst-style-tooltip>
                      <label for="photogate_linear_motion__accessory">
                        ${t("Object")}
                      </label>
                      <select
                        margin="block-end-xs"
                        @change="${this._changePhotogateLinearMotionAccessory}"
                        name="accessory"
                        id="photogate_linear_motion__accessory"
                        .value="${this.photogateConfig.linearMotion.accessory}"
                      >
                        <option value="vernier_picket_fence">
                          ${t("Vernier Picket Fence")}
                        </option>
                        <option value="cart_picket_fence">
                          ${t("Cart Picket Fence")}</option>
                        <option value="ultra_pulley_in_groove">
                          ${t("Ultra Pulley - in groove")}</option>
                        <option value="ultra_pulley_outside_edge">
                          ${t("Ultra Pulley - outside edge")}</option>
                        <option value="bar_tape">${t("Bar Tape")}</option>
                        <option value="user_defined">${t("Other / User Defined")}</option>
                      </select>
                    <div class="split-input">
                      <div class="split-input__container" margin="inline-end-m">
                        <label>
                          <span>${t("Spacing")}</span>
                          <div class="split-input__input">
                            <input
                              margin="inline-end-xs"
                              id="linear_motion_spacing_input"
                              ?disabled="${!G(this.photogateConfig.linearMotion.accessory)}"
                              type="number"
                              min="0.00001"
                              step="any"
                              value="${this.photogateConfig.linearMotion.spacing}"
                              @input="${this._changePhotogateLinearMotionSpacing}"
                              required
                            >
                            <span class="inline-block">m</span>
                          </div>
                        </label>
                      </div>
                      <div class="split-input__container">
                        <label>
                          <div>${t("Number of flags")}</div>
                          <input
                            id="linear_motion_number_of_flags_input"
                            ?disabled="${!q(this.photogateConfig.linearMotion.accessory)}"
                            type="number"
                            .value="${this.photogateConfig.linearMotion.numberOfFlags}"
                            @input="${this._changePhotogateLinearMotionNumberOfFlags}"
                            min="1"
                            max="100000"
                            step="1"
                            required
                          >
                        </label>
                      </div>
                    </div>
                    <div class="helper-text">
                      <p>${t("Multiple, uniformly-spaced flags on a object are used to determine position as the object passes through the photogate. The first blocked event determines the zero position. Subsequent blocked events increase the position by the spacing value. Velocity and acceleration data are calculated using first- and second- derivatives of position with respect to time.")}</p>
                      <p>${t("For Vernier objects, the spacing and flag number are shown for the selected object. For Bar Tape, enter the number of flags.")}</p>
                      <figure class="helper-text__figure">
                        <div class="graphic-linear">
                          <div class="graphic-linear__flag-num1">${t("Flags")}: 3</div>
                          <div class="graphic-linear__flag-num2">${t("Flags")}: 3</div>
                          <div class="graphic-linear__bar-img">
                            <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-bar.svg">
                          </div>
                          <div class="graphic-linear__wheel-img">
                            <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-wheel.svg">
                          </div>
                          <div class="graphic-linear__arrow-top-right">
                            <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-right.svg">
                          </div>
                          <div class="graphic-linear__top-spacing">${t("Spacing")}</div>
                          <div class="graphic-linear__arrow-top-left">
                            <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-arrow-left.svg">
                          </div>
                          <div class="graphic-linear__wheel-spacing">
                            ${t("Spacing = Circumference / Number of Spokes")}
                          </div>
                        </div>
                      </figure>
                      <p>${t("Other/User Defined: Enter the spacing and flag number as shown above. If your object is a wheel, the spacing value would be the wheel\u2019s circumference divided by the number of spokes.")}</p>
                    </div>
                    <fieldset>
                      <legend>${t("End data collection")}</legend>
                      <ul class="photogate-modes__list">
                        <li>
                          <label class="radio-block">
                            <input
                              @change="${this._changePhotogateLinearMotionEndCollection}"
                              .checked="${this.photogateConfig.linearMotion.endAfterTrial}"
                              type="radio"
                              name="photogate_linear_motion__end_collection"
                              value="after-each-trial"
                              id="linear_motion_end_each_trial"
                            >
                            <span>${t("After set number of flags")}</span>
                          </label>
                          <div class="helper-text">
                            <p>${t("Data Collection will automatically stop after all gates have the expected number of position measurements (same as number of flags). Starting collection again will start a new data set.")}</p>
                          </div>
                        </li>
                        <li>
                          <label class="radio-block">
                            <input
                              @change="${this._changePhotogateLinearMotionEndCollection}"
                              .checked="${!this.photogateConfig.linearMotion.endAfterTrial}"
                              type="radio"
                              name="photogate_linear_motion__end_collection"
                              value="manually"
                              id="linear_motion_end_manually"
                            >
                            <span>${t("Manually")}</span>
                          </label>
                          <div class="helper-text">
                            <p>${t("Data collection will continue until you manually click or tap Stop. Position values will continue to increment by the spacing value until data collection stops.")}</p>
                          </div>
                        </li>
                      </ul>
                    </fieldset>
                  </fieldset>
                </li>
                <li class="photogate-modes__list-item">
                  <div class="radio-block">
                    <input
                      type="radio"
                      @change="${this._changePhotogateMode}"
                      name="photogate_submode"
                      id="photogate_submode_angular_motion"
                      value="angular_motion"
                    >
                    <label for="photogate_submode_angular_motion">
                      <span>${t("Angular Motion")}</span>
                      <span class="quiet">${t("(distance, velocity, acceleration)")}</span>
                    </label>
                  </div>
                  <fieldset
                    class="photogate-modes__mode-body fieldset-auto fieldset-secondary" id="photogate_submode_angular_motion__content"
                    disabled
                  >
                    <vst-style-tooltip>
                      <button
                        class="btn"
                        variant="icon"
                        size="xs"
                        id="angular_motion_info"
                        data-photogate-submode="angular_motion"
                        @click="${this.showHelperText}"
                        type="button"
                      >
                        <vst-ui-icon class="photogate-modes__info-btn-icon" .icon="${h}"></vst-ui-icon>
                      </button>
                      <span role="tooltip" position="block-end-end">
                        ${t("Angular Motion Info")}
                      </span>
                    </vst-style-tooltip>
                    <div class="helper-text">
                      <p>${t("Multiple, uniformly-spaced spokes on a wheel are used to determine the angular position of the wheel as it turns. The first blocked event determines the zero angle. Subsequent blocked events increase the angle by 2\u03C0/n radians, where n is the number of spokes on the wheel. Angular velocity and acceleration data are calculated using first- and second- derivatives of angle with respect to time.")}</p>
                    </div>
                    <div style="margin-block-end: 1rem;">
                      <label>
                        <div>${t("Number of spokes")}</div>
                        <input
                          type="number"
                          .value="${this.photogateConfig.angularMotion.numberOfSpokes}"
                          @input="${this._changePhotogateAngularMotionNumberOfSpokes}"
                          min="1"
                          step="1"
                          required
                        >
                      </label>
                      <div class="helper-text">
                        <p>${t("This number defines the fraction of a turn the angular position changes with each blocked event.")}</p>
                        <figure class="helper-text__figure">
                          <img
                            alt=""
                            class="helper-text__figure-img helper-text__figure-img--angular-wheel"
                            src="resources/pg-graphic-wheel.svg"
                          >
                          <div class="helper-text__figure-caption">
                            ${t("Spokes:")} 3
                          </div>
                        </figure>
                      </div>
                    </div>
                    <fieldset>
                      <legend>${t("Angle units")}</legend>
                      <ul class="photogate-modes__list">
                        <li>
                          <label class="radio-block">
                            <input
                              @change="${this._changePhotogateAngleUnits}"
                              .checked="${this._angleUnits("rad")}"
                              type="radio"
                              name="photogate_angular_motion__units"
                              value="rad"
                              id="photogate_angular_motion__units_rad"
                            >
                            <span>${t("Radians (rad)")}</span>
                          </label>
                        </li>
                        <li>
                          <label class="radio-block">
                            <input
                              @change="${this._changePhotogateAngleUnits}"
                              .checked="${this._angleUnits("rev")}"
                              type="radio"
                              name="photogate_angular_motion__units"
                              value="rev"
                              id="photogate_angular_motion__units_rev"
                            >
                            <span>${t("Revolutions (rev)")}</span>
                          </label>
                        </li>
                        <li>
                          <label class="radio-block">
                            <input
                              @change="${this._changePhotogateAngleUnits}"
                              .checked="${this._angleUnits("\xB0")}"
                              type="radio"
                              name="photogate_angular_motion__units"
                              value="°"
                              id="photogate_angular_motion__units_°"
                            >
                            <span>${t("Degrees (\xB0)")}</span>
                          </label>
                        </li>
                      </ul>
                      <div class="helper-text">
                        <p>${t("Select the desired units for reporting the angular position.")}</p>
                        <p>
                          <b>2π</b>
                          <i>${t("radians")}</i> = <b>1</b>
                          <i>${t("revolution")}</i> = <b>360</b>
                          <i>${t("degrees")} (°)</i>
                        </p>
                      </div>
                    </fieldset>
                  </fieldset>
                </li>
                <li class="photogate-modes__list-item">
                  <div class="radio-block">
                    <input
                      type="radio"
                      @change="${this._changePhotogateMode}"
                      name="photogate_submode"
                      id="photogate_submode_timer"
                      value="timer"
                    >
                    <label for="photogate_submode_timer">
                      ${t("Timer or Period")}
                    </label>
                  </div>
                  <fieldset
                    class="photogate-modes__mode-body fieldset-auto fieldset-secondary"
                    id="photogate_submode_timer__content"
                    disabled
                  >
                    <vst-style-tooltip>
                      <button
                        class="btn"
                        variant="icon"
                        size="xs"
                        id="timer_info"
                        data-photogate-submode="timer"
                        @click="${this.showHelperText}"
                        type="button"
                      >
                        <vst-ui-icon class="photogate-modes__info-btn-icon" .icon="${h}"></vst-ui-icon>
                      </button>
                      <span role="tooltip" position="block-end-end">
                        ${t("Timer Info")}
                      </span>
                    </vst-style-tooltip>
                    <fieldset>
                      <legend>${t("Time measurements")}</legend>
                        <div class="helper-text">
                          <p>${t("Photogates can time objects that pass between gates or report the period of oscillation of a pendulum. The time between successive blocked events is reported as the interval time. When exactly two gates are used, both gates must be blocked before a value is reported.")}</p>
                          <figure class="helper-text__figure">
                            <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-timer.svg">
                          </figure>
                        </div>
                        <ul class="photogate-modes__list">
                          <li>
                            <label class="radio-block">
                              <input
                                @change="${this._changePhotogateTimeMeasurements}"
                                .checked="${this._timeMeasurements("between-gates")}"
                                type="radio"
                                name="photogate_timer__measurements"
                                value="between-gates"
                                id="photogate_timer__measurements_between_gates"
                              >
                              <span>${t("Time between gates")}</span>
                            </label>
                            <div class="helper-text">
                              <p>${t("The time between successive blocked events is reported as Interval.")}</p>
                            </div>
                          </li>
                          <li>
                            <label class="radio-block">
                              <input
                                @change="${this._changePhotogateTimeMeasurements}"
                                .checked="${this._timeMeasurements("pendulum")}"
                                type="radio"
                                name="photogate_timer__measurements"
                                value="pendulum"
                                id="photogate_timer__measurements_pendulum"
                              >
                              <span>${t("Pendulum Period")}</span>
                            </label>
                            <div class="helper-text">
                              <p>${t("When pendulum is selected, the time between every second blocked event is reported as the Period since a pendulum will block a gate three times as it completes a single swing.")}</p>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </fieldset>
                  </li>
                  <li class="photogate-modes__list-item">
                    <div class="radio-block">
                      <input
                        type="radio"
                        @change="${this._changePhotogateMode}"
                        name="photogate_submode"
                        id="photogate_submode_projectile"
                        value="projectile"
                      >
                      <label for="photogate_submode_projectile">
                        ${t("Projectile Launcher")}
                      </label>
                    </div>
                    <fieldset
                      class="photogate-modes__mode-body fieldset-auto fieldset-secondary"
                      id="photogate_submode_projectile__content"
                      disabled
                    >
                      <vst-style-tooltip>
                        <button
                          class="btn"
                          variant="icon"
                          size="xs"
                          id="projectile_info"
                          data-photogate-submode="projectile"
                          @click="${this.showHelperText}"
                          type="button"
                        >
                          <vst-ui-icon class="photogate-modes__info-btn-icon" .icon="${h}"></vst-ui-icon>
                        </button>
                        <span role="tooltip" position="block-end-end">
                          ${t("Projectile Info")}
                        </span>
                      </vst-style-tooltip>
                      <fieldset>
                        <legend>${t("Launch Speed")}</legend>
                        <ul class="photogate-modes__list">
                          <li>
                            <label class="radio-block">
                              <input
                                @change="${this._changePhotogateProjectileLaunchSpeed}"
                                type="radio"
                                name="photogate_projectile__measurements"
                                value="gate-separation"
                                id="photogate_projectile__measurements_gate_separation"
                                .checked="${this._projectileLaunchSpeed("gate-separation")}"
                              >
                              <span>${t("Use gate separation")}</span>
                            </label>
                            <div class="helper-text">
                              <p>${t("The launch speed is the average speed of the projectile as it passes between the two built-in gates.")}</p>
                              <figure class="helper-text__figure">
                                <div class="graphic-projectile">
                                <div class="graphic-projectile__left-pad"></div>
                                <div class="graphic-projectile__distance">
                                  ${t("Distance")}
                                </div>
                                <div class="graphic-projectile__right-pad"></div>
                                <div class="graphic-projectile__main-img">
                                  <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-projectile-launcher.svg">
                                </div>
                              </div>
                            </figure>
                          </div>
                        </li>
                        <li>
                          <label class="radio-block">
                            <input
                              @change="${this._changePhotogateProjectileLaunchSpeed}"
                              type="radio"
                              name="photogate_projectile__measurements"
                              value="projectile-diameter"
                              id="photogate_projectile__measurements_projectile_diameter"
                              .checked="${this._projectileLaunchSpeed("projectile-diameter")}"
                            >
                            <span>${t("Use projectile diameter")}</span>
                          </label>
                          <div class="helper-text">
                            <p>${t("The launch speed is the average speed of the projectile as it passes the first built-in gate.")}</p>
                            <figure class="helper-text__figure">
                              <div class="graphic-projectile graphic-projectile--ball">
                              <div class="graphic-projectile__left-pad"></div>
                              <div class="graphic-projectile__distance">
                                ${t("Diameter")}
                              </div>
                              <div class="graphic-projectile__right-pad"></div>
                              <div class="graphic-projectile__main-img">
                                <img alt="" class="helper-text__figure-img" src="resources/pg-graphic-projectile-launcher-ball.svg">
                              </div>
                            </div>
                          </figure>
                        </div>
                      </li>
                    </ul>
                    <div style="margin: 1rem 0 1rem 1.25rem;">
                      <label>
                        ${this.photogateConfig.projectile.type==="gate-separation"?g` <div>${t("Distance")}</div> `:g` <div>${t("Diameter")}</div> `}
                        <input
                          class="inline-block"
                          type="number"
                          .value="${this.photogateConfig.projectile.gateSeparationWidth}"
                          @input="${this._changePhotogateProjectileGateSeparationWidth}"
                          step="any"
                          required
                        >
                        <span>m</span>
                      </label>
                    </div>
                    <div class="checkbox-group">
                      <div class="checkbox">
                        <input
                          type="checkbox"
                          name="photogate_projectile__tof_pad"
                          id="photogate_projectile__tof_pad"
                          .checked="${this.photogateConfig.projectile.timeOfFlightPad}"
                          @change="${this._changePhotogateProjectileTimeOfFlightPad}"
                        >
                        <span class="check"></span>
                      </div>
                      <label for="photogate_projectile__tof_pad">
                        ${t("Use Time of Flight Pad")}
                      </label>
                    </div>
                    <div class="helper-text">
                      <p>${t("This feature requires a")} <a class="link" href="https://www.vernier.com/tof-vpl/" target="_blank">
                      ${t("Time of Flight Pad,")}</a>
                      ${t("an optional projectile launcher accessory, and is used to report the Time of Flight of the projectile.")}</p>
                    </div>
                  </fieldset>
                </fieldset>
              </li>
            </ul>
          </div>
        </fieldset>
      </fieldset>
      <div class="action-btns" id="action_btns">
        <div>
          <div class="error" id="error_no_sensors">${this.errorNoSensors}</div>
        </div>
        <button
          class="btn"
          variant="text"
          id="cancel_btn"
          margin="inline-end-xs"
          @click="${this.close}"
          type="button"
        >
          ${t("Cancel")}
        </button>
        <button
          class="btn"
          type="submit"
          id="submit_btn"
          ?disabled="${this._formDisabled}"
        >
          ${y(this._isLoading,()=>g`<vst-style-spinner style="--size: var(--vst-space-m)"></vst-style-spinner>`,()=>t("Done"))}
        </button>
      </div>
    </form>
  </vst-ui-form>
`}};customElements.define("ga-data-collection-settings",U);
