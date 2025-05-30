import{a as B}from"./chunk-ZAKMYXQF.js";import{a as C}from"./chunk-JWPGNWQB.js";import{r as k,v as $}from"./chunk-IMQHRNK4.js";import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{f as I}from"./chunk-H5EO627A.js";import{o as A,t as m}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as y}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b,c as p,h as v}from"./chunk-BVG7RORO.js";import{b as D}from"./chunk-WFJOWCXF.js";import{a as x,b as E}from"./chunk-CM6X6NVN.js";var P=b`
  :host(:not([highlighted])) .show-brackets.graph-selection {
    background-color: transparent;
    border: none;
  }

  :host(:not([highlighted])) .graph-selection.show-selection-edges {
    background-color: rgba(0, 0, 0, 0.02);
    border-color: var(--vst-color-fg-tertiary);
  }

  :host([left-handle-showing]) .graph-selection__handle--left {
    opacity: 1;
    visibility: visible;
  }

  :host([right-handle-showing]) .graph-selection__handle--right {
    opacity: 1;
    visibility: visible;
  }

  :host([infobox-showing]) vst-core-infobox {
    visibility: visible;
    pointer-events: all;
  }

  /* /////////////////////////// */
  .graph-selection {
    position: absolute;
    height: 100%;
    background-color: rgba(40, 143, 254, 0.2);
    /*  var(--vst-color-info-bg); // TODO: <- this isn't working */
    border-left: 1px solid var(--vst-color-info);
    border-right: 1px solid var(--vst-color-info);
    z-index: 1;
  }
  .graph-selection__handle {
    opacity: 0;
    visibility: hidden;
    color: var(--vst-color-dark-200);
    background-color: var(--vst-color-info-bg);
    /*  opaque selection fill color */
    border-color: #9abeff;
    pointer-events: all;
  }

  .graph-selection__handle span {
    user-select: none;
  }

  ${I(b`.graph-selection__delete`,"cancel")}

  .graph-selection__handle vst-ui-icon {
    width: 0.375rem;
    --vst-ui-icon-color: var(--vst-color-dark-100);
  }
  .graph-selection__handle--right {
    transform: translateX(50%);
    right: 0;
  }
  .graph-selection__handle--flip-right {
    transform: translateX(-1px);
  }
  .graph-selection__handle--right {
    transform: translateX(50%);
    right: 0;
  }
  .graph-selection__handle--flip-right {
    transform: translateX(-1px);
  }
  .graph-selection__handle--flip-left {
    transform: translateX(1px);
  }
  .graph-selection__handle[read-only] {
    display: block;
  }
  .graph-selection__handle[read-only] vst-ui-icon {
    display: none;
  }
  .graph-selection__edge {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -0.75rem;
    width: 1.5rem;
    cursor: col-resize;
    background-color: transparent;
    z-index: var(--vst-z-selection);
  }
  .graph-selection__edge--right {
    right: -0.75rem;
    left: auto;
  }
  :host([showSelectionEdges]) .graph-selection__edge {
    pointer-events: all;
  }

  ${I(b`graph-selection__delete`,"cancel")}
  .graph-selection__delete {
    position: absolute;
    top: 0;
    right: 0;
    transition: var(--transition-faster);
    z-index: calc(var(--vst-z-selection) + 1);
  }
  .graph-selection__banner {
    font-size: var(--vst-font-size-m);
    font-weight: normal;
    margin: 0;
    padding: var(--vst-space-xs);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info-boxes {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    position: absolute;
  }

  /* z-index of 1 needed to not cover examine pins and show up in export */
  .bracket {
    position: absolute;
    z-index: 1;
    border: 2px solid var(--vst-color-fg-tertiary);
  }
  .bracket-right {
    border-left: none;
  }
  .bracket-left {
    border-right: none;
  }
`;var _=f=>{f.stopPropagation()},g=25,w=g/2,j=g-g/2,X=(f,t,e)=>f.filter(i=>i.seriesData.length>1&&i.type==="regular").map(i=>({axis:i.axis,seriesData:i.seriesData.filter(s=>s[0]>=t&&s[0]<=e).sort((s,o)=>s[0]-o[0])})).filter(i=>i.seriesData.length!==0).map(i=>({axis:i.axis,seriesData:[i.seriesData[0],i.seriesData[i.seriesData.length-1]]})),L=class extends v{static get properties(){return{_brackets:{state:!0,hasChanged(t,e){return t!==e||t?.length!==e.Length}},bannerText:{type:String},baseUnits:{type:String},closeBtnPosition:{type:String},enabledAnalysisType:{type:String},graphInstance:{type:Object},highlighted:{type:Boolean,reflect:!0},infoBoxData:{type:Object},infoBoxPosition:{type:Object},infoBoxShowing:{type:Boolean,reflect:!0,attribute:"infobox-showing"},isRangeIndexBased:{type:Boolean},leftHandleShowing:{type:Boolean,reflect:!0,attribute:"left-handle-showing"},max:{type:Number},min:{type:Number},permanent:{type:Boolean},range:{type:Object},readOnly:{type:Boolean,reflect:!0},rightHandleShowing:{type:Boolean,reflect:!0,attribute:"right-handle-showing"},showSelectionEdges:{type:Boolean},traces:{type:Array,hasChanged(t,e){return t!==e||t?.length!==e.Length}},udmId:{type:Number}}}constructor(){super();this._brackets=[],this.bannerText="",this.baseUnits="",this.closeBtnPosition="",this.enabledAnalysisType="",this.graphInstance={},this.highlighted=!0,this.infoBoxData={},this.infoBoxPosition={},this.infoBoxShowing=!1,this.isRangeIndexBased=!1,this.leftHandleShowing=!1,this.max=0,this.min=0,this.rightHandleShowing=!1,this.showSelectionEdges=!1,this.traces=[],this.udmId=null,this.throttledIsFlagsInView=$(this._isFlagsInView.bind(this),150),this.throttledSetInfoBoxFlipLeft=$(this._setInfoBoxFlipLeft.bind(this),150)}updated(t){t.forEach(async(e,i)=>{switch(i){case"enabledAnalysisType":this.enabledAnalysisType&&await import("./vst-core-infobox-WT24HCQN.js"),this._setInfoBoxFlipLeft();break;case"range":this.setPtRange(this.range);break;case"traces":case"infoBoxShowing":this.showSelectionEdges||this.updateBracketSelections();break;default:}})}_showFitOptions(){this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"fit_options",params:{udmId:this.udmId,options:{showUncertainty:this.infoBoxData.showUncertainty},handleSubmit:t=>{this.dispatchEvent(new CustomEvent("selection-modified",{bubbles:!0,composed:!0,detail:{elementId:this.id,selectionUpdates:{showUncertainty:t.showUncertainty}}}))}}}}))}updateBracketSelections(){let t=this.graphInstance.getAxis("base"),e={left:this.graphInstance.getAxis("left"),right:this.graphInstance.getAxis("right")},{min:i,max:s}=this.range,o=(n,a)=>[t.p2c(n[0]),e[a].p2c(n[1])],l=(n,a)=>{let h=a==="left"?0:w;return[n[0]-h,n[1]-j]};if(this.traces&&this.infoBoxShowing&&this.enabledAnalysisType!=="manual-fits"){let n=X(this.traces,i,s).map(r=>[o(r.seriesData[0],r.axis),o(r.seriesData[1],r.axis)]).map(r=>[l(r[0],"left"),l(r[1],"right")]),a=[],h=[];n.forEach(r=>{let[d,c]=r;a.push({x:c[0]+w,y:c[1]+g}),h.push({leftStyle:`width: ${w}px; height: ${g}px; left: ${d[0]}px; top: ${d[1]}px`,rightStyle:`width: ${w}px; height: ${g}px; left: ${c[0]}px; top: ${c[1]}px`})}),this._brackets=h,this.dispatchNewSelectionBrackets(a)}else if(this.enabledAnalysisType==="manual-fits"&&this.infoBoxData?.manualFit){let{manualFit:n}=this.infoBoxData,a=(this.range.max-this.range.min)/2+this.range.min,{baseColumnId:h,coefficients:r,yColumnId:d}=n,[c,u]=r,O=c*a+u,S=this.traces.find(R=>R.baseColumn.id===`${h}`&&R.yColumn.id===`${d}`);if(!S)return;let[F,U]=o([a,O],S.axis);this.dispatchNewSelectionBrackets([{x:F,y:U,color:this.infoBoxData.curveFitInfo.at(0).traceColor}])}}dispatchNewSelectionBrackets(t=null){let e=this.infoBoxEl.getBoundingClientRect(),i=this.infoBoxEl.parentNode.getBoundingClientRect(),s=this.infoBoxEl.flippedLeft?e.width:0,o=e.top-i.top,l=e.left-i.left+s,n={selectionId:this.id};t&&(n=E(x({},n),{bracketPositions:t})),(!t||this.infoBoxEl.export||this.infoBoxEl.isXPositionSet&&this.infoBoxEl.isYPositionSet)&&(n=E(x({},n),{infoBoxPosition:{x:l,y:o,isCollapsed:this.infoBoxEl.detailsHidden}})),this.dispatchEvent(new CustomEvent("infobox-position-changed",{bubbles:!0,composed:!0,detail:n}))}firstUpdated(){this.flagLeftEl=this.shadowRoot.querySelector(".graph-selection__handle--left"),this.flagRightEl=this.shadowRoot.querySelector(".graph-selection__handle--right"),this.infoBoxEl=this.shadowRoot.querySelector("vst-core-infobox"),this.eventBinder=new C,this.graphInstance.addEventListener("graph-grid-updated",()=>this.reposition()),this.setPtRange(this.range),this.shadowRoot.querySelectorAll(".graph-selection__handle, .graph-selection__edge").forEach(e=>{B(e,"track",this.fireEdgeTrackEvent.bind(this)),B(e,"down",this.fireEdgeDownEvent.bind(this)),B(e,"up",this.fireEdgeUpEvent.bind(this))})}disconnectedCallback(){this.eventBinder.unbindAll()}fireEdgeDownEvent(t){let{target:e}=t,i=e.classList.contains("graph-selection__edge--left")||e.classList.contains("graph-selection__handle--left");this.dispatchEvent(new CustomEvent("edge-down-action",{detail:{isLeftEdgeAction:i}})),t.stopPropagation()}fireEdgeUpEvent(t){let{target:e}=t,i=e.classList.contains("graph-selection__edge--left")||e.classList.contains("graph-selection__handle--left");this.dispatchEvent(new CustomEvent("edge-up-action",{detail:{isLeftEdgeAction:i}})),t.stopPropagation()}fireEdgeTrackEvent(t){let{target:e,detail:i}=t,{x:s,dx:o,state:l}=i,n=e.classList.contains("graph-selection__edge--left")||e.classList.contains("graph-selection__handle--left");this.dispatchEvent(new CustomEvent("edge-track-action",{detail:{isLeftEdgeAction:n,x:s,dx:o,state:l}})),t.stopPropagation()}setPtRange({min:t,max:e}){Object.entries({min:t,max:e}).forEach(([s,o])=>{this._rangeChanged(s,o)})}_rangeChanged(t,e){if(this.graphInstance){this.range||(this.range={}),this.throttledIsFlagsInView(),this.throttledSetInfoBoxFlipLeft();let i=this.graphInstance.getAxis("base"),{baseColumn:s}=this.graphInstance.coreGraphEl;if(s){this.baseUnits=s.group.units,this.range[t]=e;let o=this.isRangeIndexBased?i.i2p(e):e;this[t]=i.p2c(o)}}}reposition(){let{range:t}=this,e=this.graphInstance.getAxis("base"),i=l=>this.isRangeIndexBased?e.p2c(e.i2p(l)):e.p2c(l),s=i(t.min),o=i(t.max);this.min=s,this.max=o,this.throttledIsFlagsInView(),this.throttledSetInfoBoxFlipLeft(),this.showSelectionEdges||this.dispatchNewSelectionBrackets()}fireDeleteAction(){this.dispatchEvent(new CustomEvent("selection-delete-action",{detail:this.id}))}getFitType(){return this.fitType}_isFlagsInView(){let{flagLeftEl:t,flagRightEl:e}=this;if(!t||!e)return;let i=t.getBoundingClientRect(),s=e.getBoundingClientRect(),o=this.graphInstance.el.plotBox.getBoundingClientRect();this.min<i.width?t.classList.add("graph-selection__handle--flip-right"):t.classList.remove("graph-selection__handle--flip-right"),this.max>o.width-s.width?e.classList.add("graph-selection__handle--flip-left"):e.classList.remove("graph-selection__handle--flip-left")}async _setInfoBoxFlipLeft(){if(this.enabledAnalysisType.length>0){await this.updateComplete;let t=this.shadowRoot.querySelector("vst-core-infobox"),e=t.getBoundingClientRect(),i=this.graphInstance.el.plotBox.getBoundingClientRect();this.max>i.width-e.width?t.flippedLeft=!0:t.flippedLeft=!1}}getFormattedXRangeVal(t,e=!1){let{baseColumn:i}=this.graphInstance.coreGraphEl,s=this.isRangeIndexBased?i?.values[t]:t,o=this.isRangeIndexBased&&e,l=i?.precision?.formatStr||"",n=this.isRangeIndexBased?s:D(l,s);return`${o?'"':""}${n}${o?'"':""}`}static get styles(){return[y,P]}render(){return p`
      <div
        class="graph-selection ${this.showSelectionEdges?"show-selection-edges":"show-brackets"}"
        id="${this.id}"
        style="left: ${this.min}px; width: ${this.max-this.min}px;"
      >
        <h2 class="graph-selection__banner" ?hidden="${!this.bannerText}">${this.bannerText}</h2>
        <div
          class="graph-selection__handle drag-handle graph-selection__handle--left"
          ?read-only="${this.readOnly}"
          tabindex="0"
        >
          <vst-ui-icon .icon="${m}"></vst-ui-icon>
          <div>
            <span>${this.getFormattedXRangeVal(this.range.min)}</span>
            <span>${this.baseUnits}</span>
          </div>
          <vst-ui-icon .icon="${m}"></vst-ui-icon>
        </div>
        <div
          class="graph-selection__handle drag-handle graph-selection__handle--right"
          ?read-only="${this.readOnly}"
          tabindex="0"
        >
          <vst-ui-icon .icon="${m}"></vst-ui-icon>
          <div>
            <span>${this.getFormattedXRangeVal(this.range.max)}</span>
            <span>${this.baseUnits}</span>
          </div>
          <vst-ui-icon .icon="${m}"></vst-ui-icon>
        </div>
        <div class="graph-selection__edge graph-selection__edge--left"></div>
        <div class="graph-selection__edge graph-selection__edge--right"></div>
        ${this.permanent&&!this.infoBoxShowing&&this.closeBtnPosition?p`
              <!-- stopPropogation method tied to touch events prevents examine pin from being placed after selection deletion on touch devices -->
              <button
                class="graph-selection__delete"
                id="graph_selection_delete"
                ?hidden="${this.readOnly}"
                @click="${this.fireDeleteAction}"
                @mousedown="${_}"
                @mouseup="${_}"
                @touchstart="${_}"
                @touchend="${t=>{_(t),this.fireDeleteAction(t)}}"
              >
                <vst-ui-icon class="icon-close" .icon="${A}"></vst-ui-icon>
              </button>
            `:""}
      </div>
      <div
        class="graph-selection__content"
        style="left: ${this.min}px; width: ${this.max-this.min}px;"
      >
        ${this._brackets.map(t=>p`
              <div class="bracket bracket-left" style="${t.leftStyle}"></div>
              <div class="bracket bracket-right" style="${t.rightStyle}"></div>
            `)}
        <div class="info-boxes">
          <vst-core-infobox
            class="infobox"
            id="${this.enabledAnalysisType}"
            type="${this.enabledAnalysisType}"
            .analysisInfo="${this.infoBoxData}"
            .initialXPosition="${this.infoBoxPosition.x?this.infoBoxPosition.x:this.max}"
            .initialYPosition=${this.infoBoxPosition?.y}
            .min="${this.getFormattedXRangeVal(this.range.min,!0)}"
            .max="${this.getFormattedXRangeVal(this.range.max,!0)}"
            baseUnits="${this.baseUnits}"
            .selectionId="${this.id}"
            .detailsHidden=${this.infoBoxPosition.isCollapsed}
            @fit-options-button-clicked=${()=>this._showFitOptions()}
            @click=${()=>{this.dispatchEvent(new CustomEvent("infobox-clicked",{bubbles:!0,composed:!0,detail:{infoBoxData:Array.isArray(this.infoBoxData)?this.infoBoxData.at(0):this.infoBoxData}}))}}
            @close-infobox=${this.fireDeleteAction}
          >
          </vst-core-infobox>
        </div>
      </div>
    `}};customElements.define("vst-ui-graph-selection",L);var T=class extends v{static get properties(){return{enabledAnalysisType:{type:String},graphInstance:{type:Object},highlightOnly:{type:Boolean},id:{type:String},infoBoxData:{type:Object},infoBoxPosition:{type:Object},isEdgeClickDown:{type:Boolean},isRangeIndexBased:{type:Boolean},permanent:{type:Boolean,reflect:!0},range:{type:Object},readOnly:{type:Boolean,reflect:!0},traces:{type:Boolean},udmId:{type:Number}}}constructor(){super();this.enabledAnalysisType="",this.getClosestX=()=>{},this.graphInstance={},this.id="",this.infoBoxData={},this.infoBoxPosition={},this.isEdgeDown=!1,this.isRangeIndexBased=!1,this.permanent=!1,this.traces=[],this.udmId=null}async firstUpdated(){this.uiSelectionEl=this.shadowRoot.querySelector("vst-ui-graph-selection"),await this.updateComplete,this.infoBoxEl=this.uiSelectionEl.shadowRoot.querySelector("vst-core-infobox"),this.fireSelectionResizedEvent=(t,e)=>{let{min:i,max:s}=this.range;this.dispatchEvent(new CustomEvent("selection-modified",{bubbles:!0,composed:!0,detail:{elementId:this.id,selectionUpdates:{range:x({min:i,max:s},t)}}}))}}resizeSelection(t){let e=this.parentElement.getBoundingClientRect(),{isLeftEdgeAction:i,x:s,dx:o,state:l}=t.detail,n=s-e.left,a={};if(l==="track"){!this.ignoreWhich&&this.range.max>this.range.min?i?a.min=Math.max(n,0):a.max=Math.min(n,e.width):(o<0?a.min=Math.max(n,0):a.max=Math.min(n,e.width),this.ignoreWhich=!0);let h=this.graphInstance.getAxis("base"),r=u=>this.getClosestX({px:u}).pt,d=u=>Math.round(h.p2i(h.c2p(u))),c=h.categorical?d:r;this.fireSelectionResizedEvent(k(a,c))}else l==="end"&&(this.ignoreWhich=!1);t.stopPropagation()}updateSelectionDeletion(t){let{detail:e}=t;this.dispatchEvent(new CustomEvent("selection-deleted",{bubbles:!0,composed:!0,detail:e}))}handleEdgeDown(){this.isEdgeClickDown=!0}handleEdgeUp(){this.isEdgeClickDown=!1}static get styles(){return[y]}render(){return p`
      <vst-ui-graph-selection
        .id="${this.id}"
        .highlighted="${!this.permanent}"
        .infoBoxShowing="${this.permanent}"
        .permanent=${this.permanent}
        .range="${this.range}"
        .enabledAnalysisType="${this.enabledAnalysisType}"
        .infoBoxData="${this.infoBoxData}"
        .leftHandleShowing="${!this.highlightOnly&&(!this.permanent||this.isEdgeClickDown)}"
        .rightHandleShowing="${!this.highlightOnly&&(!this.permanent||this.isEdgeClickDown)}"
        .graphInstance="${this.graphInstance}"
        .readOnly="${this.readOnly}"
        .isRangeIndexBased="${this.isRangeIndexBased}"
        .traces="${this.traces}"
        .infoBoxPosition=${this.infoBoxPosition}
        .udmId=${this.udmId}
        closeBtnPosition="right"
        @selection-delete-action="${this.updateSelectionDeletion}"
        @edge-track-action="${this.resizeSelection}"
        @edge-down-action="${this.handleEdgeDown}"
        @edge-up-action="${this.handleEdgeUp}"
      >
      </vst-ui-graph-selection>
    `}};customElements.define("vst-core-graph-selection",T);
