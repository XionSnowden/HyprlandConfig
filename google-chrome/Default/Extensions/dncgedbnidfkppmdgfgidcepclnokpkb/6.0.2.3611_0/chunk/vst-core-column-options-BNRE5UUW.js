import"./chunk-MY4K2ZHD.js";import{a as ie}from"./chunk-JURJRJBX.js";import{a as Z}from"./chunk-BCP675JF.js";import"./chunk-YDEDSSMD.js";import{a as le}from"./chunk-QYSCVIGP.js";import{a as oe,d as b}from"./chunk-OOYYGJTO.js";import{b as _}from"./chunk-J6L6J5R7.js";import"./chunk-DQXOKHFD.js";import"./chunk-YJ5KKARE.js";import"./chunk-NNBWZ6HI.js";import"./chunk-KBTFUBYZ.js";import{a as ee}from"./chunk-QTI25AH7.js";import"./chunk-A7ZJ67EZ.js";import"./chunk-SEYYHBSH.js";import{a as ae}from"./chunk-HOPQVMFY.js";import{c as ne}from"./chunk-TWAD4QJO.js";import{A as F,e as H,u as K}from"./chunk-IMQHRNK4.js";import{a as te}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import{a as pe}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import"./chunk-AMQF2NRG.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{a as re}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as U}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{o as se,v as R}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as V}from"./chunk-CRHRJPRJ.js";import{a as S}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as Q}from"./chunk-OTWO5H3C.js";import{b as Y,c as t,f as J,h as O}from"./chunk-BVG7RORO.js";import{b as j}from"./chunk-WFJOWCXF.js";import{c as i}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import{a as N}from"./chunk-CM6X6NVN.js";var ce=class extends U(O){static get properties(){return{showDatalist:{type:Boolean},placeholder:{type:String,reflect:!0},options:{type:Array,reflect:!0},value:{type:String,reflect:!0},focusIndex:{type:Number},inputDisabled:{type:Boolean}}}static get observableProperties(){return{screenSize:ae}}static get styles(){return[V,Y`
        :host,
        input,
        .stack {
          inline-size: 100%;
        }
        .stack {
          inline-size: 100%;
          max-block-size: 25vh;
          overflow-y: hidden;
          --offset: 0px;
        }
        p {
          inline-size: 100%;
          padding: var(--vst-space-xs);
          cursor: pointer;
        }
        p:hover,
        p:focus {
          background: var(--vst-color-bg-secondary);
          outline: none !important;
          box-shadow: none !important;
        }
      `]}constructor(){super();this.filterRegEx=new RegExp("([a-zA-Z][a-zA-Z0-9]*)$"),this.showDatalist=!1,this.placeholder="",this.options=[],this.value="",this.focusIndex=-1,this.inputDisabled=!1}firstUpdated(){this.inputEl=this.shadowRoot.querySelector("#datalist_input")}_toggleDatalist(e){this.showDatalist=e,this.focusIndex=-1}_pasteValue(e){this.inputEl.value=this.inputEl.value.replace(this.filterRegEx,e),this.inputEl.focus(),this._updateValue()}_updateValue(){this.value=this.inputEl.value,this.dispatchEvent(new CustomEvent("value-changed",{detail:this.value}))}get filteredOptions(){let e,s=this.value.match(this.filterRegEx);return s&&(e=s[0].toLowerCase()),e?this.options.filter(o=>o.toLowerCase().includes(e)):[]}_focusElement(e){this.focusIndex=e}_pressKey(e,s){e.keyCode===13&&s&&(this.focusIndex=-1,this._pasteValue(s)),e.keyCode===38&&(this.focusIndex<=0?(this.focusIndex=-1,this.shadowRoot.querySelector("#datalist_input").focus()):this.focusIndex--),e.keyCode===40&&(this.focusIndex=this.focusIndex>=this.filteredOptions.length-1?0:this.focusIndex+1),this.focusIndex!==-1&&this.shadowRoot.querySelector(`#option_${this.focusIndex}`).focus()}render(){return t`
      <vst-ui-dropdown
        ?open="${this.showDatalist}"
        @closed="${()=>this._toggleDatalist(!1)}"
        position="${this.screenSize==="medium"?"top":"bottom"}"
      >
        <input
          ?disabled="${this.inputDisabled}"
          id="datalist_input"
          placeholder="${this.placeholder}"
          type="text"
          slot="anchor"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          value="${this.value}"
          @focus="${()=>this._toggleDatalist(!0)}"
          @input="${this._updateValue}"
          @keyup="${this._pressKey}"
        />
        <div class="stack" slot="content">
          ${this.filteredOptions.map((e,s)=>t`
                <p
                  id="option_${s}"
                  tabindex="0"
                  @click="${()=>this._pasteValue(e)}"
                  @focus="${()=>this._focusElement(s)}"
                  @keyup="${o=>this._pressKey(o,e)}"
                >
                  ${e}
                </p>
              `)}
        </div>
      </vst-ui-dropdown>
    `}};customElements.define("vst-ui-datalist",ce);var ye={dependentGroups:{X:""},coefficients:{A:"1",B:"1"}},ge={dependentGroups:{X:""},coefficients:{A:"1"}},xe={dependentGroups:{X:""},coefficients:{A:"1",B:"1"}},$e={dependentGroups:{X:""},coefficients:{A:"1",B:"1"}},Ce={dependentGroups:{X:""},coefficients:{A:"1"}},_e={dependentGroups:{X:""},coefficients:{A:"1"}},Ee={dependentGroups:{X:""},coefficients:{A:"1"}},Te={dependentGroups:{X:""},coefficients:{A:"1",B:"1"}},Ge={dependentGroups:{X:""},coefficients:{A:"1"}},Be={dependentGroups:{X:"",Y:""}},we={dependentGroups:{X:"",Y:""}},Ae={dependentGroups:{X:"",Y:""}},Xe={dependentGroups:{X:"",Y:""},coefficients:{A:"1",B:"1",C:"1"}},De={dependentGroups:{X:"",Y:""},coefficients:{A:"1",B:"1"}},Se={dependentGroups:{X:"",Y:""}},ke={dependentGroups:{X:""},coefficients:{A:"1",B:"1",C:"1"}},Ie={dependentGroups:{Y:"",X:""}},Ne={dependentGroups:{Y:"",X:""}},qe={dependentGroups:{Y:"",X:""}},Ye={dependentGroups:{Y:"",X:""}},Pe={dependentGroups:{Y:"",X:""}},ze={dependentGroups:{X:""}},Fe={dependentGroups:{X:""},coefficients:{A:"1"}},Oe={dependentGroups:{X:"",Y:""}},je={dependentGroups:{X:"",Y:"",Z:""}},Ue={},ue={AdotXpowB:ye,AdivX:ge,AdivBaddX:xe,AdotXaddB:$e,AabsX:Ce,AlnX:_e,AlogX:Ee,AdivXpowB:Te,XaddA:Ge,XdotY:Be,XaddY:we,XsubY:Ae,AdotXpowBdotYpowC:Xe,AdotXaddBdotY:De,arctan2YX:Se,BaddAexpsubCdotX:ke,derivative:Ie,secondDerivative:Ne,derivativeTimeShift:qe,secondDerivativeTimeShift:Ye,stepColumnBased:Pe,log:ze,AsublogX:Fe,sqrtXXaddYY:Oe,sqrtXXaddYYaddZZ:je,custom:Ue};var de=Y`
  ${pe}

  ${Q("s",Y`
      :host {
        inline-size: 25rem;
      }
    `)}

  #error_bar_column {
    padding: var(--vst-space-2xs);
    padding-inline-end: var(--vst-space-xl);
  }

  fieldset {
    padding: 0;
  }

  /* //////////////////////// */
  .column-options-form {
    display: flex;
    flex-direction: column;
    block-size: 100%;
  }

  .parameter-wrapper {
    inline-size: min-content;
  }

  .form-inputs {
    flex: 1;
    padding: var(--vst-space-l);
    overflow: auto;
  }

  .form-inputs > * {
    inline-size: 100%;
  }

  /* //////////////////////// */
  .column-name {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .column-name__error {
    display: none;
    margin: var(--vst-space-2xs) 0;
  }

  #column_name:invalid ~ .column-name__error {
    color: var(--vst-color-danger);
    display: unset;
    font-size: var(--vst-font-size-xs);
  }

  .column-name > input {
    inline-size: 100%;
    min-inline-size: 8rem;
  }

  .column-units {
    min-inline-size: 4.125rem;
    inline-size: min-content;
    margin-inline-start: var(--vst-space-l);
    display: flex;
    flex-direction: column;
  }

  select#column_units,
  input#column_units {
    flex-grow: 1;
    inline-size: 100%;
    min-inline-size: 5rem;
  }

  select {
    text-overflow: ellipsis;
  }

  #column_options_input_wrapper {
    display: flex;
    align-items: flex-start;
  }

  input:not([type='radio']) {
    flex-grow: 1;
    min-inline-size: 0;
  }

  /* //////////////////////// */
  .precision-number {
    margin-inline-end: 0.75rem;
    margin-block-start: 0.375rem;
  }

  .precision-type {
    flex: 1;
    margin: 0;
  }

  .precision-type li {
    display: flex;
    align-items: center;
  }

  .precision-scientific {
    margin-block-start: var(--vst-space-xs);
  }

  /* //////////////////////// */
  #column_type {
    min-inline-size: 0;
  }
  .calc-wrapper {
    margin: 0.5em 0 0 1.5em;
  }

  .calc-expression-wrapper {
    overflow-y: visible;
    padding: var(--vst-space-m) var(--vst-space-xs);
    padding-top: 0;
  }

  .calc-expression-close-wrapper {
    border: 1px solid var(--vst-color-bg-primary);
    border-radius: var(--vst-radius);
    background: var(--vst-color-bg-tertiary);
  }

  .calc-expression-btn-wrapper {
    margin-inline-start: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .label {
    margin-block-end: var(--vst-space-2xs);
  }

  legend > .inline vst-style-tooltip {
    margin-top: calc(var(--gap) - 0.25em);
  }

  .reel {
    padding-block-end: var(--inset, var(--vst-space-2xs));
    padding-inline-start: var(--vst-space-xs);
    padding-inline-end: var(--vst-space-xs);
  }

  .reel > div {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
  }

  .reel input,
  .reel select {
    flex: 1;
  }

  .caption {
    white-space: nowrap;
  }

  .calc-expression-functions {
    background-color: var(--vst-color-bg);
  }

  #calc_expression_functions {
    background-color: var(--vst-color-bg);
  }

  .has-expression .calc-expression-clear {
    display: block;
  }

  .has-expression .calc-expression-functions {
    display: none;
  }

  .operator {
    align-self: flex-end;
    white-space: nowrap;
    margin-inline-start: var(--vst-space-2xs);
    margin-inline-end: var(--vst-space-2xs);
  }

  .operator sup {
    font-size: 0.75em;
    top: -0.65em;
  }

  .coefficient-input {
    inline-size: 4.125rem;
  }

  .flex {
    display: flex;
    align-items: stretch;
  }

  .bold {
    font-weight: bold;
  }

  .inline {
    inline-size: auto;
  }
`;var P=(k,e)=>{let s=Number(k),o=Number(e);return!Number.isNaN(s)&&!Number.isNaN(o)?s===o:k===e},Re=(k,e)=>{let s=k&&e,o=e?0:1;return(s?[{value:"Auto",text:i("Auto")}]:[]).concat(K(o,10).map(p=>({value:String(p),text:String(p)})))},he=class extends te(U(O)){static get properties(){return{_dataType:{state:!0},_errorBarType:{state:!0},_errorBarValue:{state:!0},_errorBarColumnGroupId:{state:!0},_errorBarColumnGroups:{state:!0},_metered:{state:!0},_showErrorBarsOptions:{state:!0},_isSubmitting:{state:!0},color:{type:String},name:{type:String},units:{type:String},unitsDisabled:{type:Boolean},unitsSelected:{type:Boolean},unitsOptions:{type:Array},precisionNumber:{type:String},precisionType:{type:String},sourceGroupId:{type:Number},sourceColumnId:{type:Number},columnAction:{type:String},columnType:{type:String},significantFiguresDisabled:{type:Boolean},scientificNotation:{type:Boolean},precisionNumberOptions:{type:Array},showCalcOptions:{type:Boolean},calcExpressionDisabled:{type:Boolean},defaultCalcSourceGroups:{type:Object},calcSourceGroups:{type:Array},calcExpression:{type:Object},customEquationResult:{type:Object},calcExpressionOptions:{type:Object,readonly:!0},showFunctionDialog:{type:Boolean},functionList:{type:Array},userConstantList:{type:Array},showFeatureFlagButton:{type:Boolean},showCustomCalcColumnInfo:{type:Boolean},collectionMode:{type:String}}}static get observableProperties(){return{authorized:re}}constructor(){super();this._dataType=_.NUMERIC,this._errorBarColumnGroupId="",this._errorBarColumnGroups=[],this._errorBarType=b.NONE,this._errorBarValue="",this._metered=!1,this._showErrorBarsOptions=!1,this._isSubmitting=!1,this.color="",this.name="",this.units="",this.unitsDisabled=!1,this.unitsSelected=!1,this.unitsOptions=[],this.precisionNumber="3",this.precisionType="decimal",this.sourceGroupId=null,this.sourceColumnId=0,this.columnAction="add",this.columnType="manual",this.significantFiguresDisabled=!1,this.precisionNumberOptions=[],this.showCalcOptions=!1,this.calcExpressionDisabled=!0,this.defaultCalcSourceGroups={X:"",Y:"",Z:""},this.calcSourceGroups=[],this.calcExpression=void 0,this.customEquationResult=null,this.calcExpressionOptions=ue,this.showFunctionDialog=!1,this.functionList=[],this.userConstantList=[],this.showFeatureFlagButton=!1,this.showCustomCalcColumnInfo=!1,this.cursorPositionStart=0,this.cursorPositionEnd=0,this.collectionMode=""}firstUpdated(){let[e,s,o,p,a]=this.requestServices(["dataWorld","sensorWorld","dataAnalysis","toast","dataCollection"]);this.$dataWorld=e,this.$dataAnalysis=o,this.$toast=p,this.submitButtonEl=this.shadowRoot.querySelector("#submit_button");let G=d=>{let x=f=>e.getColumnGroupIndex(f),h={manual:i("Manual %s"),calc:i("Calculated %s")},m=x(d),c=h[d]||i("Untitled");return j(c,m)},r=e.getColumnGroupById(this.sourceGroupId);this.sourceColumnId===0&&(this.sourceColumnId=r.columns[0].id);let{name:B,units:w,precision:L,sensorId:M}=r,{precision:E,useSigFigs:C,useSciNotation:T}=L,y=s.getSensorById(M),{automaticPrecision:A}=r;if(this.collectionMode=a.getCollectionParams().mode,this.columnAction==="edit"?this.columnType=r.type:this.columnAction==="add"&&(A=this.columnType==="manual"),this.params={columnAction:this.columnAction,columnType:this.columnType,sourceGroup:r,sourceColumnId:this.sourceColumnId},this.sensor=y,this.columnAction==="add")this.name=G(this.columnType),this.units="",this.scientificNotation=!1,this._metered=this.authorized,this.precisionNumber=this.columnType==="manual"?"Auto":"3",this.precisionType="decimal";else if(this.columnAction==="edit"){let d=this.$dataWorld.getColumnById(this.sourceColumnId);this._errorBarColumnGroupId=`${d.group.errorBarColumnId}`,this._errorBarColumnGroups=this.$dataWorld.getColumnGroups(),this._errorBarType=d.group.errorBarType,this._errorBarValue=d.group.errorBarValue,this.color=oe(d.color),this._dataType=d.dataType,this.name=B,this.precisionNumber=A?"Auto":String(E),this.precisionType=C?"sigFig":"decimal",this.scientificNotation=T,this._metered=d.group.metered,this.symbol=d.symbol,this.units=w}else this.name="",this.units="",this.scientificNotation=!1,this.precisionNumber="3",this.precisionType="decimal";if(this._showErrorBarsOptions=Boolean(this._errorBarType),this.unitsDisabled=this.columnType==="calc"&&this.columnAction!=="add"||this.columnType==="time"||this.columnType==="sensor"&&!y,this.unitsSelected=this.columnType==="sensor"&&y,this.updatePrecisionNumberView(this),this.columnType==="calc"){this.functionList=le.functionList.filter(x=>!x.hidden),this.userConstantList=this.$dataWorld.getUserConstants(),this.$dataWorld.on("user-constants-updated",()=>{this.userConstantList=this.$dataWorld.getUserConstants()});let d=(x,h,m)=>{let c;m===void 0?c=x.filter(u=>u.id!==h):c=x.filter(u=>u.id!==h&&u.id!==m);let f=c.filter(u=>u.type==="sensor"),g=c.filter(u=>u.type!=="time"),l=f[0]||g[0]||c[0];return l?l.id:h};if(this.showCalcOptions=!0,this.columnAction==="add"){let x=e.getColumnGroups().filter(c=>c?.allColumns?.every(f=>!f.special));this.calcSourceGroups=x.map(({id:c,name:f,columns:g})=>({id:c,name:f,disabled:g[0]?.dataType===_.TEXT})),this.calcExpressionDisabled=!1,this.calcExpression=null;let h=d(this.calcSourceGroups,r.id),m=d(this.calcSourceGroups,r.id,h);this.defaultCalcSourceGroups={X:r.id,Y:h,Z:m}}else if(this.columnAction==="edit"){let h=e.getColumnGroups().filter(v=>v?.allColumns?.every(D=>!D.special)).filter(v=>v.id!==r.id),m=(v,D)=>{let z=D.calcDependentGroups||[];return z.some(q=>q===v)?!0:h.filter(q=>z.some(ve=>q.id===ve)).some(q=>m(v,q))},f=h.filter(v=>!m(r.id,v)).map(({id:v,name:D})=>({id:v,name:D}));this.calcSourceGroups=f;let g=r.calcEquation;this.calcExpressionDisabled=!r.calcUserEditable,this.unitsDisabled=!r.calcUserEditable;let l=r.calcDependentGroups.slice(0,r.calcDependentGroups.length),u=r.calcCoefficients.slice(0,r.calcCoefficients.length),$=[];l.forEach((v,D)=>{f.some(z=>z.id===v)||$.push(D)}),$.forEach(v=>{l.splice(v,1)});let I=l[0]===void 0?d(this.calcSourceGroups):l[0],X=l[1]===void 0?d(this.calcSourceGroups,I):l[1],W=l[2]===void 0?d(this.calcSourceGroups,X):l[2],me=F(["X","Y","Z"],[I,X,W]),fe=F(["X","Y","Z"].slice(0,l.length),l),be=F(["A","B","C"].slice(0,u.length),u);this.calcExpression={equation:g,customEquation:r.customEq,dependentGroups:fe,coefficients:be},this.defaultCalcSourceGroups=me,r.calcEquation==="custom"&&r.customEq&&(this.customEquation=r.customEq,this.customEquationResult=this.$dataWorld.parseCustomEquation(r.customEq))}}else this.columnAction==="edit"&&this.columnType==="sensor"&&y&&(this.unitsOptions=y.availableUnits);this.showFeatureFlagButton=ne("ff-ga-histogram-dev"),this.validate()}validate(){this.submitButtonEl.disabled=this.showCalcOptions&&!this.calcExpression}_handleNameChange({target:{value:e}}){this.name=e}_handleUpdateUnits({target:{value:e}}){this.units=e;let{sensor:s,params:{columnType:o,columnAction:p}}=this;if(p==="edit"&&o==="sensor"&&s){let{precision:a,useSigFigs:G,useSciNotation:r}=s.getPrecisionForUnit(e);this.precisionNumber=String(a),this.precisionType=G?"sigFig":"decimal",this.scientificNotation=r}}_handleFormSubmit(){let{$dataWorld:e,_errorBarType:s,_errorBarValue:o,_errorBarColumnGroupId:p,precisionNumber:a,precisionType:G,scientificNotation:r,name:B,units:w,color:L,symbol:M,_metered:E,params:{columnAction:C,sourceGroup:T,columnType:y,sourceColumnId:A},_isSubmitting:d}=this;if(d)return;this._isSubmitting=!0;let x=parseFloat(o)||0,h={errorBarColumnId:p,errorBarType:s,errorBarValue:x},m=!1;C==="edit"?m=T.allowAutomaticPrecision&&a==="Auto":C==="add"&&(m=a==="Auto");let c={precision:m?0:Number(a),useSigFigs:G==="sigFig",useSciNotation:r};(C==="edit"&&T.allowAutomaticPrecision||C==="add"&&y==="manual")&&(c.automatic=m);try{(async()=>{let f=()=>{let g=X=>Object.keys(X).sort().map(W=>Number(X[W])),{calcExpression:l}=this,u=l.equation,$=u!=="custom"?g(l.dependentGroups):[],I=u!=="custom"?g(l.coefficients||{}):[];return{calcEquation:u,calcDependentGroups:$,calcCoefficients:I}};if(e.userSetMeterVisibility(T.meterId,E),C==="add"){if(y==="manual")e.createManualColumnGroup(N({name:B,units:w,automaticPrecision:m,precision:c,sourceColumnId:A,metered:E,dataType:this._dataType||_.NUMERIC},h));else if(y==="calc"){let{calcEquation:g,calcDependentGroups:l,calcCoefficients:u}=f();try{let $=await e.createCalcColumnGroup(N({name:B,units:w,precision:c,calcEquation:g,calcDependentGroups:l,calcCoefficients:u,sourceColumnId:A,metered:E,calcCustomEq:{equStr:this.customEquation,parsed:this.customEquationResult}},h));this.calcColumnGroupCreated($)}catch($){console.error($)}}else throw new Error(`Cannot add column of columnType ${y}`);return}if(C==="edit"){if(y==="time")e.updateColumnGroup(T.id,N({name:B,units:w,precision:c,metered:E},h));else if(y==="calc"){let{calcEquation:g,calcDependentGroups:l,calcCoefficients:u}=f(),$=g==="custom",I=$?this.customEquation:"",X=$?this.customEquationResult:null;e.updateColumnGroup(T.id,N({name:B,units:w,precision:c,calcEquation:g,calcDependentGroups:l,sourceColumnId:A,metered:E,calcCustomEq:{equStr:I,parsed:X},calcCoefficients:u},h))}else e.updateColumnGroup(T.id,N({name:B,units:w,precision:c,metered:E,automaticPrecision:m},h));this.$dataWorld.updateColumnAppearance(A,L,M)}})()}catch(f){console.error(f),this.dispatchEvent(new CustomEvent("column-options-fail-save",{detail:f}))}finally{this._isSubmitting=!1}(C!=="add"||y!=="calc")&&this.dispatchEvent(new CustomEvent("column-options-complete"))}_handleCancel(){this.dispatchEvent(new CustomEvent("column-options-cancel"))}async _handleFFButton(){let e=await this.$dataAnalysis.computeHistogram(this.sourceColumnId,1,.5),s=[];for(let p=0;p<e.bins.length;p++)s.push(`${e.bins[p]}	${e.counts[p]}`);await navigator.clipboard.writeText(s.join(`
`));let o="Histogram Data copied to Clipboard!";s.length===0&&(o+=" FAILED"),this.$toast.makeToast(o,{duration:2e3})}chooseExpression({detail:e}){let s=this.calcExpressionOptions[e];this.showFunctionDialog=!1;let o=H(s);o.equation=e;let p=this.defaultCalcSourceGroups;e!=="custom"&&Object.keys(o.dependentGroups).forEach(a=>{o.dependentGroups[a]=p[a]}),this.calcExpression=o,this.validate()}clearExpression(){this.calcExpression=null,this.customEquationResult=null,this.customEquationStr=null,this.customInputError=!1,this.validate()}_handleUpdatePrecisionType({target:{checked:e,value:s}}){e&&(this.precisionType=s,this.updatePrecisionNumberView())}updatePrecisionNumberView(){let{sourceGroup:e,columnAction:s,columnType:o}=this.params,p=s==="edit"?e.allowAutomaticPrecision:s==="add"&&(o==="manual"||o==="event");this.precisionType=this.scientificNotation?"decimal":this.precisionType,this.significantFiguresDisabled=this.scientificNotation;let a=this.precisionType==="decimal",G=this.precisionNumber==="Auto";this.precisionNumberOptions=Re(p,a),this.precisionNumber=!a&&G?"1":this.precisionNumber}_handleUpdatePrecisionNumber({target:{value:e}}){this.precisionNumber=e}_handleCalcExpressionChange({target:e}){if(e.validity.valid){let{part:s}=e.dataset;this.calcExpression[s][e.derivativeSubstitute??e.id]=e.value,this.requestUpdate()}}_handleCustomCalcExpressionChange({detail:e}){this.customInputError=!1,this.customEquationResult=null,this.customEquation="";try{let s=this.$dataWorld.parseCustomEquation(e);this.customEquation=e,this.customEquationResult=s}catch(s){console.error(s),this.customInputError=!0}this.requestUpdate()}_retainCursorPosition({target:e}){this.cursorPositionStart=e.selectionStart,this.cursorPositionEnd=e.selectionEnd}updateScientificNotation(e){this.scientificNotation=e.target.checked,this.updatePrecisionNumberView(this),setTimeout(()=>{this.dispatchEvent(new CustomEvent("update-scientific-notation"))})}calcColumnGroupCreated(e){this.dispatchEvent(new CustomEvent("calc-column-created",{detail:e}))}static get styles(){return[V,de]}expressionCoefficientTemplate(e){return t` <div>
      <label class="caption" for="${e}"
        >${j(i("Parameter %s","general","Part of Calculated Column definitions"),e)}</label
      ><input
        ?disabled="${this.calcExpressionDisabled}"
        placeholder="${e}"
        id="${e}"
        data-part="coefficients"
        type="number"
        step="any"
        .value="${this.calcExpression.coefficients?.[e]}"
        @input="${this._handleCalcExpressionChange}"
        required
      />
    </div>`}expressionDependentGroupTemplate(e,s){return t`<div>
      <label class="caption" for="${e}"
        >${j(i("Column %s","general","Part of Calculated Column definitions"),e)}</label
      >
      <select
        ?disabled="${this.calcExpressionDisabled}"
        id="${e}"
        data-part="dependentGroups"
        .derivativeSubstitute="${s}"
        .value="${this.calcExpression.dependentGroups?.[s??e]}"
        @input="${this._handleCalcExpressionChange}"
        required
      >
        ${this.calcSourceGroups.map(o=>t`
            <option
              .value="${o.id}"
              ?disabled="${o.disabled}"
              ?selected="${!o.disabled&&P(o.id,this.calcExpression.dependentGroups?.[s??e])}"
            >
              ${o.name}
            </option>
          `)}
      </select>
    </div>`}expressionTemplates(e){let s=()=>t`
        <p class="body operator">log</p>
        <p class="body operator">(</p>
        <p class="body operator">100</p>
        <p class="body operator">/</p>
        ${this.expressionDependentGroupTemplate("X")}
        <p class="body operator">)</p>
      `,o={unsupported:()=>t`
          '${e}'
          ${i("is not currently supported. Try another.","general","chosen expression is not currently supported")}'
        `,custom:()=>t`
            <vst-ui-datalist
              ?inputDisabled="${this.calcExpressionDisabled}"
              @value-changed="${this._handleCustomCalcExpressionChange}"
              placeholder="3*”X” + 2"
              value="${this.calcExpression.customEquation||""}"
              .options="${[...this.calcSourceGroups.filter(a=>!a.disabled).map(a=>`"${a.name}"`),...this.functionList.map(a=>a.nameAndArugments),...this.userConstantList.map(a=>a.name)]}"
              .filterRegEx=${new RegExp("([\\$a-zA-Z][a-zA-Z0-9]*)$")}
            >
            </vst-ui-datalist>
            <div class="flex" margin="block-start-2xs">
                <p
                  class="caption"
                  variant="error"
                  margin="block-start-2xs"
                  ?hidden="${!this.customInputError}"
                >
                  ${i("Invalid Expression")}
                </p>
              </div>
            </div>
        `,AdotXpowB:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">^</p>
          ${this.expressionCoefficientTemplate("B")}
        `,AdivX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">/</p>
          ${this.expressionDependentGroupTemplate("X")}
        `,AdivBaddX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">/</p>
          <p class="body operator">(</p>
          ${this.expressionCoefficientTemplate("B")}
          <p class="body operator">+</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">)</p>
        `,AdotXaddB:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">+</p>
          ${this.expressionCoefficientTemplate("B")}
        `,AabsX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">abs</p>
          ${this.expressionDependentGroupTemplate("X")}
        `,AlnX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">ln</p>
          ${this.expressionDependentGroupTemplate("X")}
        `,AdivXpowB:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">/</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">^</p>
          ${this.expressionCoefficientTemplate("B")}
        `,XaddA:()=>t`
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">+</p>
          ${this.expressionCoefficientTemplate("A")}
        `,XdotY:()=>t`
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("Y")}
        `,XaddY:()=>t`
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">+</p>
          ${this.expressionDependentGroupTemplate("Y")}
        `,XsubY:()=>t`
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">-</p>
          ${this.expressionDependentGroupTemplate("Y")}
        `,AdotXpowBdotYpowC:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">^</p>
          ${this.expressionCoefficientTemplate("B")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("Y")}
          <p class="body operator">^</p>
          ${this.expressionCoefficientTemplate("C")}
        `,AdotXaddBdotY:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">+</p>
          ${this.expressionCoefficientTemplate("B")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("Y")}
        `,arctan2YX:()=>t`
          <p class="body operator">arctan2(</p>
          ${this.expressionDependentGroupTemplate("Y","X")}
          <p class="body operator">,</p>
          ${this.expressionDependentGroupTemplate("X","Y")}
          <p class="body operator">)</p>
        `,BaddAexpsubCdotX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">exp</p>
          <p class="body operator">(</p>
          <p class="body operator">-</p>
          ${this.expressionCoefficientTemplate("C")}
          <p class="body operator">*</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator">)</p>
          <p class="body operator">+</p>
          ${this.expressionCoefficientTemplate("B")}
        `,derivative:()=>t`
          <p class="body operator">${i("1st Derivative")}</p>
          <p class="body operator">(</p>
          ${this.expressionDependentGroupTemplate("Y","X")}
          <p class="body operator">,</p>
          ${this.expressionDependentGroupTemplate("X","Y")}
          <p class="body operator">)</p>
        `,secondDerivative:()=>t`
          <p class="body operator">${i("2nd derivative")}</p>
          <p class="body operator">(</p>
          ${this.expressionDependentGroupTemplate("Y","X")}
          <p class="body operator">,</p>
          ${this.expressionDependentGroupTemplate("X","Y")}
          <p class="body operator">)</p>
        `,derivativeTimeShift:()=>t`
          <p class="body operator">${i("1st Derivative Time Shift")}</p>
          <p class="body operator">(</p>
          ${this.expressionDependentGroupTemplate("Y","X")}
          <p class="body operator">,</p>
          ${this.expressionDependentGroupTemplate("X","Y")}
          <p class="body operator">)</p>
        `,secondDerivativeTimeShift:()=>t`
          <p class="body operator">${i("2nd Derivative Time Shift")}</p>
          <p class="body operator">(</p>
          ${this.expressionDependentGroupTemplate("Y","X")}
          <p class="body operator">,</p>
          ${this.expressionDependentGroupTemplate("X","Y")}
          <p class="body operator">)</p>
        `,stepColumnBased:()=>t` ${i("This column was automatically generated and cannot be changed")} `,log:s,log100divX:s,AsublogX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">-</p>
          <p class="body operator">log</p>
          ${this.expressionDependentGroupTemplate("X")}
        `,AlogX:()=>t`
          ${this.expressionCoefficientTemplate("A")}
          <p class="body operator">log</p>
          ${this.expressionDependentGroupTemplate("X")}
        `,sqrtXXaddYY:()=>t`
          <p class="body operator">√(</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator"><sup>2</sup> +</p>
          ${this.expressionDependentGroupTemplate("Y")}
          <p class="body operator"><sup>2</sup>)</p>
        `,sqrtXXaddYYaddZZ:()=>t`
          <p class="body operator">√(</p>
          ${this.expressionDependentGroupTemplate("X")}
          <p class="body operator"><sup>2</sup> +</p>
          ${this.expressionDependentGroupTemplate("Y")}
          <p class="body operator"><sup>2</sup> +</p>
          ${this.expressionDependentGroupTemplate("Z")}
          <p class="body operator"><sup>2</sup>)</p>
        `},p="";return o[e]&&(p=o[e]()),p}_toggleColorPopover({target:{id:e}}){this.shadowRoot.querySelector(`#${e}_popover`).show()}_toggleShowInvalidCustomExpressionInfo(e){e.stopPropagation(),this.showInvalidCustomExpressionInfo=!this.showInvalidCustomExpressionInfo,this.requestUpdate()}_toggleShowCustomExpressionInfo(){this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"custom_expression_info",params:{title:i("Custom Calculated Columns"),type:"column",functions:this.functionList}}}))}_handleShowErrorBarsChange({target:{checked:e}}){this._showErrorBarsOptions=e,this._errorBarType=e?b.FIXED:b.NONE,this._errorBarValue="",this._errorBarColumnGroupId=""}_handleErrorBarTypeChange(e){this._errorBarType=e,this._errorBarValue="",this._errorBarColumnGroupId=""}_handleErrorBarValueChange({target:{value:e}}){this._errorBarValue=e}_handleErrorBarColumnIdChange({target:{value:e}}){this._errorBarColumnGroupId=e}_updateTrace({detail:{color:e,symbol:s}}){e&&(this.color=e),s&&(this.symbol=s),this.requestUpdate()}_dataTypeChanged({target:{value:e}}){this._dataType=e,this.columnAction==="edit"&&this.$dataWorld.changeColumnDataType(this.sourceColumnId,e),e===_.TEXT&&(this._showErrorBarsOptions=!1,this._errorBarType=b.NONE)}_computeCalcExpression(){return this.calcExpression&&this.calcExpression.equation==="custom"?t` ${this.expressionTemplates(this.calcExpression.equation)} `:this.calcExpression?t`
        <div class="reel">${this.expressionTemplates(this.calcExpression.equation)}</div>
      `:t`
      <button
        class="btn"
        variant="outline"
        id="calc_expression_functions"
        @click="${()=>{import("./vst-core-calc-functions-D4YBBRGI.js"),this.showFunctionDialog=!0}}"
        type="button"
      >
        ${i("Insert Expression")}
      </button>
      <vst-ui-dialog
        @dialog-close="${e=>{e.stopPropagation(),this.showFunctionDialog=!1}}"
        ?open="${this.showFunctionDialog}"
        no-mask
      >
        ${S(this.showFunctionDialog,t`<vst-core-calc-functions
            slot="content"
            @choose-calc-function-expression="${this.chooseExpression}"
          ></vst-core-calc-functions>`)}
      </vst-ui-dialog>
    `}render(){return t`
      <vst-ui-form @submit="${this._handleFormSubmit}">
        <form id="column_options_form" name="column_options_form" class="column-options-form">
          <div class="stack form-inputs" gap="l">
            <section id="column_options_input_wrapper">
              <div class="column-name">
                <label class="label" for="column_name">${i("Name")}</label>
                <input
                  type="text"
                  id="column_name"
                  required
                  maxlength="1000"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  spellcheck="false"
                  .value="${this.name}"
                  @input="${this._handleNameChange}"
                />
                <p class="column-name__error">${i("The Column Name is required")}</p>
              </div>
              <div class="column-units" margin="inline-end-m">
                <label class="label" for="column_units">${i("Units")}</label>
                ${this.unitsSelected?t`
                      <select
                        id="column_units"
                        .value="${this.units}"
                        @input="${this._handleUpdateUnits}"
                      >
                        ${this.unitsOptions.map(e=>t`
                            <option
                              value="${e}"
                              ?selected="${P(e,this.units)}"
                            >
                              ${e}
                            </option>
                          `)}
                      </select>
                    `:t`
                      <input
                        type="text"
                        id="column_units"
                        maxlength="1000"
                        .value="${this.units}"
                        @input="${this._handleUpdateUnits}"
                        ?disabled="${this.unitsDisabled}"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                        spellcheck="false"
                      />
                    `}
              </div>
              <div
                class="column-appearance"
                ?hidden="${this.columnType==="time"||this.columnAction!=="edit"}"
              >
                <label class="label" for="appearance_picker_btn">${i("Symbol")}</label>
                <vst-style-tooltip>
                  <button
                    class="btn symbol"
                    variant="icon"
                    type="button"
                    id="appearance_picker_btn"
                    @click="${this._toggleColorPopover}"
                    @keydown="${e=>e.stopPropagation()}"
                  >
                    <vst-ui-icon
                      .icon="${ie(this.symbol)}"
                      id="appearance_picker_icon"
                      color="${this.color}"
                    ></vst-ui-icon>
                  </button>
                  <span role="tooltip" position="block-end">${this.symbol}</span>
                </vst-style-tooltip>
                <vst-ui-popover
                  for="appearance_picker_btn"
                  id="appearance_picker_btn_popover"
                  placement="bottom"
                  ><vst-ui-column-appearance-picker
                    color="${this.color&&this.color}"
                    symbol="${this.symbol&&this.symbol}"
                    @trace-updated="${this._updateTrace}"
                  ></vst-ui-column-appearance-picker
                ></vst-ui-popover>
              </div>
            </section>
            ${S(!0,t` <section class="metered" margin="block-start-s">
                <fieldset>
                  <div class="checkbox-group">
                    <vst-ui-pro-only
                      preview-position="bottom"
                      feature-name="${i("metering on all columns")}"
                      margin="block-end-2xs"
                      .authorizedClickHandler="${e=>{e.stopPropagation()}}"
                    >
                      <vst-style-tooltip>
                        <div class="checkbox">
                          <input
                            type="checkbox"
                            name="meter-column"
                            id="meter-column"
                            .checked=${this._metered}
                            ?disabled=${!this.authorized}
                            @change=${e=>{this._metered=e.target.checked}}
                          />
                          <span class="check"></span>
                        </div>
                        <label
                          class="title ${Z({disabled:!this.authorized})}"
                          for="meter-column"
                          >${i("Metered")}</label
                        >
                        <span role="tooltip" position="block-start"
                          >${i("Meter All Columns")}</span
                        >
                      </vst-style-tooltip>
                    </vst-ui-pro-only>
                  </div>
                </fieldset>
              </section>`,J)}
            ${S(this._dataType===_.NUMERIC,t` <section>
                <label class="label" for="precision_number"
                  >${i("Displayed Precision")}</label
                >
                <div class="flex">
                  <div class="precision-number">
                    <select
                      id="precision_number"
                      .value="${this.precisionNumber}"
                      @input="${this._handleUpdatePrecisionNumber}"
                    >
                      ${this.precisionNumberOptions.map(e=>t`
                          <option
                            .value="${e.value}"
                            ?selected="${P(e.value,this.precisionNumber)}"
                          >
                            ${e.text}
                          </option>
                        `)}
                    </select>
                  </div>
                  <ul class="precision-type">
                    <li margin="block-end-2xs">
                      <input
                        type="radio"
                        id="decimal"
                        name="precision_type"
                        value="decimal"
                        @change="${this._handleUpdatePrecisionType}"
                        .checked="${P("decimal",this.precisionType)}"
                      />
                      <label class="title" margin="0" for="decimal"
                        >${i("Decimal Places")}</label
                      >
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="sig_fig"
                        name="precision_type"
                        value="sigFig"
                        @change="${this._handleUpdatePrecisionType}"
                        .checked="${P("sigFig",this.precisionType)}"
                        ?disabled="${this.significantFiguresDisabled}"
                      />
                      <label class="title" margin="0" for="sig_fig"
                        >${i("Significant Figures")}</label
                      >
                    </li>
                  </ul>
                </div>
                <div class="checkbox-group" margin="block-start-xs">
                  <div class="checkbox">
                    <input
                      type="checkbox"
                      id="scientific_notation"
                      name="scientific_notation"
                      .checked="${this.scientificNotation}"
                      @change="${this.updateScientificNotation}"
                    />
                    <span class="check"></span>
                  </div>
                  <label class="title" margin="0" for="scientific_notation"
                    >${i("Use Scientific Notation")}</label
                  >
                </div>
              </section>`,"")}
            <section
              ?hidden="${this.columnType==="time"||this.columnType==="calc"||this.sensor||this.showCalcOptions||this.columnType==="event"&&this.collectionMode!=="events-with-entry"}"
            >
              <fieldset>
                <vst-ui-pro-only
                  preview-position="top"
                  feature-name="${i("Categorical Data")}"
                  margin="block-end-2xs"
                  .authorizedClickHandler="${e=>{e.stopPropagation()}}"
                >
                  <legend class="label">
                    <div class="inline" gap="xs">
                      <div>
                        <span>${i("Data Type")}</span>
                        <vst-style-tooltip>
                          <button
                            class="btn"
                            variant="icon"
                            size="xs"
                            id="data_type_info"
                            type="button"
                            ?hidden="${this.authorized}"
                          >
                            <vst-ui-icon .icon="${R}"></vst-ui-icon>
                          </button>
                          <span role="tooltip" position="block-start"
                            >${i("Data Type Info")}</span
                          >
                        </vst-style-tooltip>
                      </div>
                    </div>
                  </legend>
                </vst-ui-pro-only>
                <div class="inline" gap="m">
                  <div>
                    <div class="inline">
                      <div>
                        <input
                          id="numeric_type"
                          type="radio"
                          ?checked="${this._dataType===_.NUMERIC}"
                          ?disabled="${!this.authorized}"
                          name="data_type"
                          value="numeric"
                          @change="${this._dataTypeChanged}"
                        />
                        <label class="title" margin="0" for="numeric_type"
                          >${i("Numeric")}</label
                        >
                      </div>
                    </div>
                    <div class="inline">
                      <div>
                        <input
                          id="categorical_type"
                          type="radio"
                          name="data_type"
                          value="text"
                          ?checked="${this._dataType===_.TEXT}"
                          ?disabled="${!this.authorized}"
                          @change="${this._dataTypeChanged}"
                        />
                        <label class="title" margin="0" for="categorical_type"
                          >${i("Categorical")}</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </section>
            ${S(this.showCalcOptions,t`
                <fieldset id="column_type">
                  <legend class="label flex">${i("Expression")}</legend>
                  <div class="calc-expression-close-wrapper">
                    <div class="calc-expression-btn-wrapper">
                      ${S(!this.calcExpressionDisabled&&this.calcExpression?.equation==="custom",t`
                          <vst-style-tooltip>
                            <button
                              class="btn"
                              variant="icon"
                              size="xs"
                              id="calc_expression_info"
                              @click="${this._toggleShowCustomExpressionInfo}"
                              type="button"
                            >
                              <vst-ui-icon class="icon-close" .icon="${R}"></vst-ui-icon>
                            </button>
                            <span role="tooltip" position="block-start-end"
                              >${i("Custom Expression Info")}</span
                            >
                          </vst-style-tooltip>
                        `)}
                      ${S(!this.calcExpressionDisabled&&this.calcExpression,t`
                          <vst-style-tooltip>
                            <button
                              class="btn"
                              variant="icon"
                              size="s"
                              id="calc_expression_clear"
                              @click="${this.clearExpression}"
                              type="button"
                            >
                              <vst-ui-icon class="icon-close" .icon="${se}"></vst-ui-icon>
                            </button>
                            <span role="tooltip" position="block-start-end"
                              >${i("Clear Expression")}</span
                            >
                          </vst-style-tooltip>
                        `)}
                    </div>
                    <div
                      class="calc-expression-wrapper"
                      margin="${this.calcExpression?"block-start-0":"block-start-m"}"
                      id="calc_expression_wrapper"
                    >
                      <div class="calc-expression" id="calc_expression"></div>
                      ${this._computeCalcExpression()}
                    </div>
                  </div>
                </fieldset>
              `)}
            <section>
              <fieldset>
                <vst-ui-pro-only
                  preview-position="top"
                  feature-name="${i("Error Bars")}"
                  margin="block-end-2xs"
                  .authorizedClickHandler="${e=>{e.stopPropagation()}}"
                >
                  <legend class="label">
                    <div class="inline" gap="xs">
                      <div>
                        <span>${i("Error Bars")}</span>
                        <vst-style-tooltip>
                          <button
                            class="btn"
                            variant="icon"
                            size="xs"
                            id="error-bar-info"
                            type="button"
                            ?hidden="${this.authorized}"
                          >
                            <vst-ui-icon .icon="${R}"></vst-ui-icon>
                          </button>
                          <span role="tooltip" position="block-start"
                            >${i("Error Bar Info")}</span
                          >
                        </vst-style-tooltip>
                      </div>
                    </div>
                  </legend>
                  <div class="checkbox-group">
                    <div class="checkbox">
                      <input
                        type="checkbox"
                        id="error-bar-calculations"
                        .checked=${this._showErrorBarsOptions}
                        ?disabled=${!this.authorized||this._dataType===_.TEXT}
                        @change=${this._handleShowErrorBarsChange}
                      />
                      <span class="check"></span>
                    </div>
                    <label
                      class="title ${Z({disabled:!this.authorized})}"
                      for="error-bar-calculations"
                      >${i("Show Error Bars")}</label
                    >
                  </div>
                </vst-ui-pro-only>
                <div
                  class="stack"
                  gap="xs"
                  margin="block-start-xs"
                  ?hidden=${!this._showErrorBarsOptions}
                >
                  <div class="radio-block">
                    <input
                      type="radio"
                      id="error-bars-fixed"
                      name="error-bars"
                      .checked=${this._errorBarType===b.FIXED}
                      ?disabled=${!this._showErrorBarsOptions}
                      @change=${()=>this._handleErrorBarTypeChange(b.FIXED)}
                    />
                    <label class="title" margin="inline-end-s" for="error-bars-fixed">
                      ${i("Fixed Value")}:
                    </label>
                    <span>+/-</span
                    ><input
                      id="error-bars-fixed-value"
                      type="number"
                      margin="inline-start-xs"
                      min="0"
                      step="any"
                      style="padding:4px;
                        max-inline-size:10ch;"
                      .value=${this._errorBarType===b.FIXED?this._errorBarValue:""}
                      ?disabled=${this._errorBarType!==b.FIXED||!this._showErrorBarsOptions}
                      @input=${this._handleErrorBarValueChange}
                    />
                  </div>
                  <div class="radio-block">
                    <input
                      type="radio"
                      id="error-bars-percentage"
                      name="error-bars"
                      .checked=${this._errorBarType===b.PERCENTAGE}
                      ?disabled=${!this._showErrorBarsOptions}
                      @change=${()=>this._handleErrorBarTypeChange(b.PERCENTAGE)}
                    />
                    <label class="title" margin="inline-end-s" for="error-bars-percentage">
                      ${i("Percentage")}:
                    </label>
                    <span>+/-</span>
                    <input
                      id="error-bars-percentage-value"
                      type="number"
                      margin="inline-start-xs"
                      min="0"
                      step="any"
                      style="padding:4px; max-inline-size:10ch;"
                      .value=${this._errorBarType===b.PERCENTAGE?this._errorBarValue:""}
                      ?disabled=${this._errorBarType!==b.PERCENTAGE||!this._showErrorBarsOptions}
                      @input=${this._handleErrorBarValueChange}
                    />
                  </div>
                  <div class="radio-block">
                    <input
                      type="radio"
                      id="error-bars-column"
                      name="error-bars"
                      .checked=${this._errorBarType===b.COLUMN}
                      ?disabled=${!this._showErrorBarsOptions}
                      @change=${()=>this._handleErrorBarTypeChange(b.COLUMN)}
                    />
                    <label class="title" for="error-bars-column">
                      ${i("Use Column Value")}:
                    </label>
                    <select
                      name="error-bar-column"
                      id="error-bars-column-value"
                      margin="inline-start-s"
                      ?disabled=${this._errorBarType!==b.COLUMN||!this._showErrorBarsOptions}
                      @change="${this._handleErrorBarColumnIdChange}"
                    >
                      <option value="" selected=${this._errorBarColumnGroupId===""}>
                        Choose
                      </option>
                      ${ee(this._errorBarColumnGroups,e=>e.id,e=>t`
                          <option
                            value=${e.id}
                            .selected=${this._errorBarColumnGroupId===`${e.id}`}
                          >
                            ${e.name}
                          </option>
                        `)}
                    </select>
                  </div>
                </div>
              </fieldset>
            </section>
          </div>
          <div class="action-btns">
            ${this.showFeatureFlagButton?t`
                  <button
                    id="ff_button"
                    class="btn"
                    variant="text"
                    type="button"
                    @click="${this._handleFFButton}"
                    margin="inline-start-xs"
                  >
                    ${i("Copy Histogram")}
                  </button>
                `:""}
            <button
              id="cancel_button"
              class="btn"
              variant="text"
              type="button"
              @click="${this._handleCancel}"
              margin="inline-end-xs"
            >
              ${i("Cancel")}
            </button>
            <button
              id="submit_button"
              class="btn"
              type="submit"
              ?disabled="${this.customInputError||this._isSubmitting}"
            >
              ${i("Apply")}
            </button>
          </div>
        </form>
      </vst-ui-form>
    `}};customElements.define("vst-core-column-options",he);export{he as VstCoreColumnOptions};
