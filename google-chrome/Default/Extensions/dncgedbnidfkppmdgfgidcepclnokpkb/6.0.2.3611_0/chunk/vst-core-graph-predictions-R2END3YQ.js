import{a as w,b as x}from"./chunk-ZAKMYXQF.js";import"./chunk-YDEDSSMD.js";import{a as g}from"./chunk-JWPGNWQB.js";import{a as m}from"./chunk-MGJOXMXS.js";import{a as c,b as v,f as u,h as y}from"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import{c as f}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as d,c as h,h as p}from"./chunk-BVG7RORO.js";import{c as l}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var b=d`
  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 0;
      transform: none;
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutDownFar {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
  }

  /* ---single-to-multi-line---
////////////////////////
 ---end--- */
  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    25% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    50% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    75% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    100% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
  }

  :host {
    display: none;
    position: absolute;
    width: 100%;
    height: calc(100% - var(--chrome-menubar-height, 0px));
    /*  stylelint-disable-line length-zero-no-unit */
    top: var(--chrome-menubar-height, 0px);
    /*  stylelint-disable-line length-zero-no-unit */
    left: 0;
    z-index: calc(var(--vst-z-popover) - 1);
  }

  /*  :host([is-active]) { */
  /*      display: block; */
  /*  } */
  :host(.animate-in),
  .animate-in {
    ${c}
    ${v}
  }

  :host(.animate-out),
  .animate-out {
    ${c}
    ${y}
  }

  :host(.fade-out),
  .fade-out {
    ${c}
    ${u}
  }

  .prediction-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - var(--chrome-menubar-height, 0px));
    /*  stylelint-disable-line length-zero-no-unit */
  }

  .prediction-toolbar {
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--vst-color-prediction-toolbar-bg);
    box-shadow: var(--vst-shadow-m);
    padding: var(--vst-space-xs);
  }

  .prediction-drawing-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .prediction-drawing {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 3.25rem;
    left: calc(4.25rem + constant(safe-area-inset-left));
    /*  iOS notch 11.0 */
    left: calc(4.25rem + env(safe-area-inset-left));
    /*  iOS notch 11.2 */
    right: calc(1.0625rem + constant(safe-area-inset-right));
    /*  iOS notch 11.0 */
    right: calc(1.0625rem + env(safe-area-inset-right));
    /*  iOS notch 11.2 */
    background: var(--vst-color-predictions-overlay-bg);
  }

  .prediction-title-wrapper {
    display: flex;
    align-items: center;
  }

  #prediction_title {
    inline-size: 100%;
  }
  .prediction-btn-wrapper {
    display: flex;
    flex-shrink: 0;
  }

  .svg-canvas {
    flex: 1;
  }
  .svg-canvas polyline {
    stroke: rgba(120, 120, 120, 0.7);
    stroke-width: 5;
    fill: none;
  }

  .intro {
    flex: 1;
    text-align: center;
    z-index: 2;
    /*  what? why do we have to do this? */
    pointer-events: none;
    max-inline-size: 50%;
    /*  keep it from being off the graph in small screens */
  }

  .intro.hidden {
    display: none;
  }

  .intro-svg {
    max-inline-size: 100%;
  }

  .intro-svg-path {
    stroke: rgba(120, 120, 120, 0.7);
    stroke-width: 10px;
    animation: dashoffset 1s ease-in-out forwards;
  }

  .intro-text {
    font-size: var(--vst-font-size-xl);
    font-weight: bold;
    margin: 0;
  }

  @keyframes dashoffset {
    to {
      stroke-dashoffset: 0;
    }
  }
`;var _=class extends m(p){static get properties(){return{graphId:{type:String},graphModeTransition:{type:Object},isActive:{type:Boolean,reflect:!0},predictionName:{type:String},examinePin:{type:Object},restoreExaminePin:{type:Boolean}}}constructor(){super();this.graphId="",this.isActive=!1,this.predictionName="",this.examinePin={},this.restoreExaminePin=!1,this._gestureCallbacks={}}shouldUpdate(){return this.graphModeTransition}firstUpdated(){this.$dataWorld=this.requestService("dataWorld"),this.eventBinder=new g,this.svgCanvas=this.shadowRoot.querySelector("#svg_canvas"),this.polylineEl=this.svgCanvas.querySelector("#svg_canvas_polyline"),this.introEl=this.shadowRoot.getElementById("intro"),this.introSvgEl=this.shadowRoot.querySelector("#intro_svg"),this.introSvgPathEl=this.shadowRoot.querySelector("#intro_svg_path"),this.predictionDrawingAreaEl=this.shadowRoot.getElementById("prediction_drawing_area"),this.graph=this.parentElement,this.predictionFormEl=this.shadowRoot.querySelector("#prediction_form"),this.titleEl=this.predictionFormEl.querySelector("#prediction_title"),this._gestureCallbacks.track=this.drawHandler.bind(this),this._gestureCallbacks.down=this.downHandler.bind(this),Object.keys(this._gestureCallbacks).forEach(t=>{let e=this._gestureCallbacks[t];w(this.predictionDrawingAreaEl,t,e)}),this.eventBinder.on(window,"resize",()=>{requestAnimationFrame(()=>{this._resizeHandler()})}),this.graphInstance=this.graph.graphInstance}disconnectedCallback(){super.disconnectedCallback(),this.eventBinder?.unbindAll(),Object.keys(this._gestureCallbacks).forEach(t=>{let e=this._gestureCallbacks[t];x(this.predictionDrawingAreaEl,t,e)}),this._gestureCallbacks={}}updated(t){t.forEach((e,i)=>{i==="isActive"&&this.isActiveChanged(this.isActive)})}savePrediction(){let{points:t}=this.polylineEl;if(t.numberOfItems>0){let e=this.titleEl.value;this._savePrediction({rawPoints:t,name:e}),this._closePredictions(),this._clearPrediction()}else this.cancelClicked()}cancelClicked(){this._cancelPrediction(),this._closePredictions()}downHandler(){this.introEl.classList.add("hidden")}drawHandler(t){let{state:e}=t.detail;e==="start"?this._clearPrediction():e==="track"&&this._drawPrediction(t)}isActiveChanged(t){if(!this.graph)return;let e=Array.from(this.graph.shadowRoot.querySelector("#plot_box").children);t?(this.graphModeTransition.open(this.graph),this._initPrediction(),this.titleEl.value=this.predictionName,e.forEach(i=>{i.classList.add("hidden")}),this.introEl.classList.remove("hidden"),this.introEl.classList.add("animate-in"),this.showIntro(),this.eventBinder.on(document,"keyup",i=>{i.which===27?this.cancelClicked():i.which===13&&this.savePrediction()})):(this.graphModeTransition.close(this.graph),e.forEach(i=>{i.classList.remove("hidden")}),this.introEl.classList.remove("animate-in"),this.predictionFormEl.querySelector("#prediction_title"),this.titleEl.value="",this.eventBinder.unbindAll())}setDrawingAreaSize(){let t=this.graph.shadowRoot.querySelector("#plot_box").getBoundingClientRect(),e=this.shadowRoot.querySelector(".prediction-drawing");e.style.top=`${t.top}px`,e.style.right=`${t.right}px`,e.style.bottom=`${t.bottom}px`,e.style.left=`${t.left}px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,this.svgCanvas.setAttribute("viewBox",`0 0 ${t.width} ${t.height}`)}showIntro(){let t=this,e=300,i=200,s=["M10,79 S 75,136 150,68 225,69 290,96","M10,67 S 75,130 150,87 225,46 290,85","M10,39 S 75,129 150,47 225,91 290,107","M10,39 S 75,133 150,87 225,137 290,95"];this.introSvgEl.setAttribute("width",e),this.introSvgEl.setAttribute("height",i),this.introSvgEl.setAttribute("viewBox",`0 0 ${e} ${i}`);function r(a,o){return Math.floor(Math.random()*(o-a+1)+a)}function n(){function a(){return s[r(0,s.length-1)]}t.introSvgPathEl.setAttribute("d",a());let o=t.introSvgPathEl.getTotalLength();t.introSvgPathEl.style.strokeDasharray=o,t.introSvgPathEl.style.strokeDashoffset=o}n()}addTrace(t){let{graph:e}=this;e.addTrace(t,"left")}_formatPredictionData(t){let{graphInstance:e}=this,i=[];for(let s=0;s<t.numberOfItems;s++){let r=t.getItem(s),n=e.canvasToPoint(r);i.push([n.x,n.y])}return i}_drawPrediction(t){let{svgCanvas:e,polylineEl:i,predictionDrawingAreaEl:s}=this,r=s.getBoundingClientRect(),n=e.createSVGPoint();n.x=t.detail.x-r.left,n.y=t.detail.y-r.top,i.points.appendItem(n),this.predictionPoints.push({x:t.detail.x,y:t.detail.y}),this.predictionRectOriginal=r}_resizeHandler(){let{svgCanvas:t,polylineEl:e,predictionDrawingAreaEl:i}=this;if(this.setDrawingAreaSize(),this.predictionRectOriginal){e.points.clear();let s=i.getBoundingClientRect(),r=s.width/this.predictionRectOriginal.width,n=s.height/this.predictionRectOriginal.height;this.predictionPoints.forEach(a=>{let o=t.createSVGPoint();o.x=(a.x-s.left)*r,o.y=(a.y-s.top)*n,e.points.appendItem(o)})}}_clearPrediction(){this.predictionPoints=[],this.polylineEl.points.clear()}_initPrediction(){this._hideGraphAnalysis(!0),this.predictionName=`${l("Prediction")} ${this.$dataWorld.getSpecialDataSets().filter(t=>t.type==="prediction").length+1}`}_closePredictions(){this.dispatchEvent(new CustomEvent("close-predictions",{detail:{graphEl:this.graph}}))}_cancelPrediction(){this._clearPrediction(),this._hideGraphAnalysis(!1)}async _savePrediction({rawPoints:t,name:e}={}){let i=this._formatPredictionData(t);this._hideGraphAnalysis(!1),this.graph.removeTracesByType("prediction");let s=await this.$dataWorld.createPrediction(i,{name:e});this.addTrace(s)}_hideGraphAnalysis(t){let{graphInstance:e}=this;e.hideFits=t,e.hideIntegrals=t,e.hideTangents=t,e.hidePeakIntegrals=t,this.graph.updatePlotData(),t&&(this.restoreExaminePin=!this.examinePin.examinePosition.examineHidden),this.dispatchEvent(new CustomEvent("examine-positioning-changed",{detail:{graphId:this.graphId,positionUpdate:{examineHidden:t||!this.restoreExaminePin}}}))}static get styles(){return[f,b]}render(){return h`
      <div class="prediction-wrapper">
        <vst-ui-form @submit="${this.savePrediction}">
          <form class="prediction-toolbar" id="prediction_form">
            <div class="prediction-title-wrapper">
              <label visually-hidden for="prediction_title">${l("Prediction Title")}</label>
              <input type="text" id="prediction_title" placeholder="${l("Prediction")} 1" />
            </div>
            <div class="prediction-btn-wrapper">
              <button
                type="button"
                class="btn"
                variant="text"
                id="cancel"
                margin="inline-end-xs"
                @click="${this.cancelClicked}"
              >
                ${l("Cancel")}
              </button>
              <button type="submit" id="submit" class="btn">${l("Save")}</button>
            </div>
          </form>
        </vst-ui-form>
        <div class="prediction-drawing-wrapper">
          <div class="intro" id="intro">
            <p class="intro-text">${l("Draw a Prediction")}</p>
            <svg class="intro-svg" id="intro_svg">
              <path
                class="intro-svg-path"
                id="intro_svg_path"
                fill="transparent"
                stroke-linecap="round"
                d=""
              />
            </svg>
          </div>
          <div id="prediction_drawing_area" class="prediction-drawing">
            <svg id="svg_canvas" class="svg-canvas" preserveAspectRatio="none">
              <polyline id="svg_canvas_polyline" />
            </svg>
          </div>
        </div>
      </div>
    `}};customElements.define("vst-core-graph-predictions",_);
