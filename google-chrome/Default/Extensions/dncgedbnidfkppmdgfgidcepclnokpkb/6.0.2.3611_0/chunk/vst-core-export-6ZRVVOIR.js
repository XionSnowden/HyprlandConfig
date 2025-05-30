import{c as C}from"./chunk-QLWYRWMY.js";import"./chunk-IBBROPNX.js";import{c as w}from"./chunk-TWAD4QJO.js";import"./chunk-IMQHRNK4.js";import{a as k}from"./chunk-MGJOXMXS.js";import"./chunk-AMQF2NRG.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{Y as G}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as S}from"./chunk-CRHRJPRJ.js";import{a as x}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as g}from"./chunk-OTWO5H3C.js";import{a as _,b as p,c as l,h as E}from"./chunk-BVG7RORO.js";import"./chunk-WFJOWCXF.js";import{c as o}from"./chunk-LI3RKPGW.js";import{a as P}from"./chunk-3AUSJ54I.js";import{a as $,h as I}from"./chunk-CM6X6NVN.js";var m=I(P());var R=p`
  /* Layout */
  .btn-group {
    --border-color: var(--vst-color-bg-primary);
    --border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    inline-size: 100%;
    background: var(--vst-color-bg-tertiary);
  }

  .btn-group[variant='light'] {
    --border-color: #fff;
  }

  .btn-group > .btn:not([variant='icon']),
  .btn-group > vst-style-tooltip {
    flex-grow: 1;
  }

  .btn-group > vst-style-tooltip .btn:not([variant='icon']) {
    inline-size: 100%;
  }

  ${g("s",p`
      .btn-group {
        flex-direction: row;
        flex-wrap: wrap;
      }
    `)}

  /* Borders */
  .btn-group .btn {
    border: var(--border);
    border-block-start: none;
    border-radius: 0;
  }

  .btn-group {
    border-block-start: var(--border);
  }

  ${g("s",p`
      .btn-group .btn {
        border: var(--border);
        border-inline-start: none;
      }
      .btn-group {
        border-block-start: none;
        border-inline-start: var(--border);
      }
    `)}

  /* Border Radius */
  .btn-group {
    border-radius: var(--vst-radius);
  }

  .btn-group > .btn:only-child {
    border-radius: var(--vst-radius);
  }

  .btn-group > .btn:first-child:not(:only-child),
  .btn-group > vst-style-tooltip:first-child:not(:only-child) .btn {
    border-radius: var(--vst-radius) var(--vst-radius) 0 0;
  }

  .btn-group > .btn:last-child:not(:only-child),
  .btn-group > vst-style-tooltip:last-child:not(:only-child) .btn {
    border-radius: 0 0 var(--vst-radius) var(--vst-radius);
  }

  ${g("s",p`
      .btn-group > .btn:first-child:not(:only-child),
      .btn-group > vst-style-tooltip:first-child:not(:only-child) .btn {
        border-radius: var(--vst-radius) 0 0 var(--vst-radius);
      }
      .btn-group > .btn:last-child:not(:only-child),
      .btn-group > vst-style-tooltip:last-child:not(:only-child) .btn {
        border-radius: 0 var(--vst-radius) var(--vst-radius) 0;
      }
    `)}

  /* Appearance */
  .btn-group .btn[selected] {
    background-color: var(--vst-color-brand);
    border-color: var(--vst-color-brand);
    box-shadow: none;
    color: #fff;
  }

  .btn-group[variant='light'] .btn[selected] {
    color: var(--vst-color-dark-300);
    background-color: var(--vst-color-bg-light);
    border-color: var(--vst-color-bg-light);
    box-shadow: inset 0 0 0 2px var(--vst-color-dark-300);
  }

  .btn-group .btn:not([selected]) {
    background-color: transparent;
    color: var(--vst-color-text-brand);
    box-shadow: none;
  }

  .btn-group .btn[selected]:hover,
  .btn-group .btn[selected]:focus {
    background-color: var(--vst-color-brand-dark);
    border-color: var(--vst-color-brand-dark);
  }

  .btn-group[variant='light'] .btn[selected]:hover,
  .btn-group[variant='light'] .btn[selected]:focus {
    background-color: var(--vst-color-light-200);
    border-color: var(--vst-color-light-200);
  }

  .btn-group .btn:not([selected]):not(:focus-visible) {
    background-color: transparent;
  }

  .btn-group .btn[selected]:not(:focus-visible) {
    background-color: var(--vst-color-brand);
    border-color: var(--vst-color-brand);
  }

  .btn-group[variant='light'] .btn[selected]:not(:focus-visible) {
    background-color: var(--vst-color-bg-light);
    border-color: var(--vst-color-bg-light);
  }

  .btn-group[variant='light'] .btn:not([selected]) {
    border: 1px solid #fff;
    background-color: var(--vst-color-dark-300);
    color: #fff;
  }

  .btn-group .btn:not([selected]):hover,
  .btn-group .btn:not([selected]):focus {
    background-color: var(--vst-color-bg-secondary);
    box-shadow: none;
  }

  .btn-group[variant='light'] .btn:not([selected]):hover,
  .btn-group[variant='light'] .btn:not([selected]):focus {
    background-color: var(--vst-color-bg-light);
    border-color: var(--vst-color-bg-light);
    color: var(--vst-color-dark-300);
  }

  .btn-group .btn[variant='icon'] {
    padding: var(--vst-space-xs);
  }
`;async function b(h){return fetch(h).then(t=>t.blob())}function f(h){let t=new FileReader;return new Promise(e=>{t.onload=()=>{e(t.result)},t.readAsDataURL(h)})}function L(h){let t=h.coreGraphEl.shadowRoot.querySelector(".left-axis-label-wrapper");t.style.left="1rem"}var B=480,q=640,O=853.33,u=`data:image/svg+xml;base64,${btoa('<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>')}`,z="12.3",M="12,3",T=class extends k(E){static get properties(){return{tabs:{type:Array},img:{type:String},file:{type:Blob},exportDisabled:{type:Boolean},share:{type:Boolean},selected:{type:Object},graphAspectRatioClass:{type:String},selections:{type:Object},clipboardCopy:{type:Boolean},notes:{type:String},_androidPDF:{state:!0},_pdfExportFilename:{state:!0},_isImgLoaded:{state:!0}}}static get styles(){return[S,R,p`
        #options-region,
        #options-region > *,
        #copy_button_group,
        select {
          inline-size: 100%;
        }
        #display_image {
          max-inline-size: 100%;
          /* this keeps the image from getting too tall when the viewport width gets really large */
          max-block-size: 68vh;
        }
        #export_container {
          /* Accommodate focus outline within overflow clip */
          padding-left: calc(var(--vst-outline-offset) + var(--vst-outer-outline-offset));
          padding-right: calc(var(--vst-outline-offset) + var(--vst-outer-outline-offset));
        }
        .graph {
          position: absolute;
          top: 0;
          left: 0;
        }
        #graph-exports.square > .graph {
          height: ${B}px;
          width: ${q}px;
        }
        #graph-exports.rectangle > .graph {
          height: ${B}px;
          width: ${O}px;
        }
        #tabs {
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        .image-container {
          position: relative;
          border: 1px solid var(--vst-color-bg-secondary);
          border-radius: var(--vst-radius);
          background-color: var(--vst-color-bg-primary);
          inline-size: 100%;
          flex-grow: 1;
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        vst-ui-pro-only {
          flex-grow: 1;
        }
        #no_image_placeholder {
          font-size: var(--vst-font-size-3xl);
          font-weight: bold;
        }
        #pdf_preview {
          position: absolute;
          inline-size: 100%;
          block-size: 100%;
          top: 0;
          left: 0;
        }
        #copy_button {
          --vst-ui-icon-color: var(--vst-color-fg-tertiary);
          border-radius: 0 var(--vst-radius) var(--vst-radius) 0;
        }

        #copy_button_container {
          flex-grow: 0;
        }
        #export_button {
          inline-size: auto;
        }
        #export_button[disabled] {
          color: transparent;
          background-position: center;
          background-size: auto 75%;
          background-repeat: no-repeat;
          opacity: 0.45;
          background-image: url(${_(u)});
        }
        #android_pdf {
          position: absolute;
          top: 0;
          left: 0;
        }
        #android_pdf canvas {
          max-width: 100%;
          box-sizing: border-box;
          padding: 1em;
          padding-top: 0;
        }
        #android_pdf canvas:nth-child(1) {
          padding-top: 1em;
        }
        #tab_pdf {
          border-radius: 0 0 var(--vst-radius) var(--vst-radius);
          inline-size: 100%;
        }
        ${g("s",p`
            #tab_pdf {
              border-radius: 0 var(--vst-radius) var(--vst-radius) 0;
            }
          `)}
      `]}constructor(){super();this.img=u,this.exportDisabled=!1,this.selected={},this.graphAspectRatioClass="square",this.selections={},this.notes="",this._androidPDF=!1,this._pdfExportFilename="",this._isImgLoaded=!1,this.markColor="#aaa",this.axisLabelScaleFactor=1,this.decimalFormat=".",this.pdfTab={name:"pdf",type:"pdf",output:"file",extension:"pdf"}}firstUpdated(){this.$capture=this.requestService("capture"),this.$toast=this.requestService("toast"),this.$fileIO=this.requestService("fileIO"),this.graphElements=Array.from(this.shadowRoot.querySelectorAll(".graph")),this.pdfTabEl=this.shadowRoot.querySelector("#tab_pdf"),this.shadowRoot.querySelector("#tabs button").dispatchEvent(new MouseEvent("click")),(async()=>{this.share=navigator.canShare?navigator.canShare({files:[new File([new Blob([0])],"0")]}):Boolean(navigator.share)})();try{this.clipboardCopy=Boolean(new ClipboardItem({"image/png":new Blob}))}catch(t){console.warn("ClipboardItem not supported"),this.clipboardCopy=!1}this.addEventListener("graph-base-id-change",t=>t.stopPropagation()),this.tabs.forEach(async t=>{if(!t.image)return;let e=document.createElement("img");e.addEventListener("load",()=>{t.aspectRatio=e.width/e.height},{once:!0,passive:!0}),e.src=t.image})}async _coreGraphReady({detail:t}){let e=this.shadowRoot.querySelector(`#${t.id}`);L(e),this._markGraph(e)}renderImage(t){let e=this.tabs.find(i=>i.graphEl.id===t.id);if(e.image){this.img=e.image;return}let a=t.getBoundingClientRect();clearTimeout(t.__processDataTimer),t.__processDataTimer=setTimeout(()=>{requestAnimationFrame(async()=>{e.graphEl.id===t.id&&(await this.$capture(t),e.image=await this._graphImager(t),e.aspectRatio=a.width/a.height,this.selected===e&&(this.img=e.image),this.selected.type==="pdf"&&(delete this.pdfTab.pdfOutput,this.renderPDF()))})},100)}_markGraph(t){!t.graphInstance||(t.coreGraphEl.udmId=t.originalGraph.coreGraphEl.udmId,clearTimeout(this[`_${t.id}markingGraph`]),this[`_${t.id}markingGraph`]=setTimeout(async()=>{t.coreGraphEl.resizing&&(await t.coreGraphEl.resized,delete this.selected.image),await Promise.allSettled([this._infoboxPlacementCorrection(t).catch(console.error),this._dataMarkPlacementCorrection(t).catch(console.error)]),t.coreGraphEl.setSelectionsData(t.originalGraph.selectionsWithData),t.coreGraphEl.shadowRoot.querySelectorAll("vst-ui-popover").forEach(i=>{i.setAttribute("hidden","")});let{predictions:e,graphMatches:a}=t.originalGraph.coreGraphEl._getTraceList("left");[...e,...a].forEach(({traceColId:i,isActive:r})=>{r&&t.coreGraphEl.addTrace(i)}),t.onGraphTracesUpdated(),this.selected.type==="graph"&&((this.selected.graphEl.coreGraphEl.isLegendVisible||this.selected.graphEl.isLegendVisible)&&this._draggablePlacementCorrection("#graph_legend_wrapper"),this.selected.graphEl.isMiniGraphVisible&&this._draggablePlacementCorrection("#mini_graph_wrapper"));for(let i of t.coreGraphEl.graphInstance.axes)i.options.grid.color=this.markColor;t.coreGraphEl.graphInstance.update(),t.originalGraph.auxGraphMode==="fft"&&(t.fftRemoveLinearTrend=t.originalGraph.fftRemoveLinearTrend,t.fftUseWindowing=t.originalGraph.fftUseWindowing,await t._enterFFTMode(),t.auxGraphViewMode=t.originalGraph.auxGraphViewMode,t.requestUpdate(),await t.updateComplete),t.originalGraph.auxGraphMode==="histogram"&&(t.histogramBinWidth=t.originalGraph.histogramBinWidth,t.histogramBinStart=t.originalGraph.histogramBinStart,await t._enterHistogramMode(),t.auxGraphViewMode=t.originalGraph.auxGraphViewMode,t.requestUpdate(),await t.updateComplete),this.renderImage(t)},60))}_dataMarkPlacementCorrection(t){return new Promise(e=>{Array.from(this.shadowRoot.querySelectorAll(".graph")).forEach(async a=>{a.coreGraphEl.analysisEl.parentGraphId=a.originalGraph.coreGraphEl.analysisEl.parentGraphId}),setTimeout(()=>{Array.from(this.shadowRoot.querySelectorAll(".graph")).forEach(async a=>{let i=a.coreGraphEl.analysisEl.getBoundingClientRect().width/t.originalGraph.coreGraphEl.analysisEl.getBoundingClientRect().width,r=a.coreGraphEl.analysisEl.getBoundingClientRect().height/t.originalGraph.coreGraphEl.analysisEl.getBoundingClientRect().height,s=a.originalGraph.coreGraphEl.analysisEl.dataMarkBoxPositions,n={};Object.keys(s).forEach(c=>{n[c]={x:s[c].x*i,y:s[c].y*r}}),a.coreGraphEl.analysisEl.dataMarkBoxPositions=n}),e()})})}_infoboxPlacementCorrection(t){return new Promise(e=>{this.selections=JSON.parse(JSON.stringify(t.selectionsById)),setTimeout(()=>{let a=this.shadowRoot.querySelector(`.graph#${t.id}`);Array.from(a.coreGraphEl.analysisEl.selectionWrapperEl.children).forEach((i,r)=>{try{let s=t.originalGraph.coreGraphEl.analysisEl.selectionWrapperEl.children[r].infoBoxEl,n=i.infoBoxEl;n.analysisInfo=s.analysisInfo,n.export=!0,n.detailsHidden=s.detailsHidden,n.topOffset=s.topOffset,n.leftOffset=s.leftOffset*a.coreGraphEl.analysisEl.getBoundingClientRect().width/t.originalGraph.coreGraphEl.analysisEl.getBoundingClientRect().width-(s.flippedLeft?1:0)}catch(s){console.error(s.message)}}),e()})})}_draggablePlacementCorrection(t){let{graphEl:e}=this.selected,a=this.shadowRoot.querySelector(`#${e.id}`),i=e.getBoundingClientRect(),r=a.getBoundingClientRect(),{x:s,y:n,height:c,width:d}=e.coreGraphEl.querySelector(t).getBoundingClientRect(),D=a.coreGraphEl.querySelector(t),A=r.height/i.height,F=r.width/i.width,v=(n-i.top)*A,y=(s-i.left)*F;v+c>r.height&&(v=r.height-c),y+d>r.width&&(y=r.width-d),D.style.inset=`${v}px auto auto ${y}px`}async _graphImager(t){let e=await this.$capture(t);return await f(e)}async export(){if(!this.share||!w("ff-web-share-export")){let t=this.shadowRoot.querySelector("a[download]");if(window.cordova){this.exportDisabled=!0;let{selected:{name:e,type:a,extension:i},_pdfExportFilename:r}=this,s=await b(t.href),n=e;a==="pdf"&&r.length&&(n=r);let c=d=>{console.error(`Error sharing file: ${d.message}`),this.$toast.makeToast(o("File sharing failed.")),this.exportDisabled=!1};try{this.$fileIO.writeTemporaryFile(`${n}.${i}`,s,d=>{window.plugins.socialsharing.shareWithOptions(window.cordova.platformId==="ios"?{url:d}:{files:[d]},()=>{this.exportDisabled=!1},c)},c)}catch(d){c(d)}}else this.selected.pdfOutput&&(m.default.os?.family.toLowerCase()==="ios"||m.default.os?.family.toLowerCase()==="os x"&&navigator.maxTouchPoints>0)&&(t.removeAttribute("download"),t.setAttribute("target","_blank")),t.dispatchEvent(new MouseEvent("click",{bubbles:!1,composed:!1}))}else{let t=await b(this.img),e=[new File([t],`${this.selected.type}.png`)];try{await navigator.share({files:e,title:`${this.selected.name.replace(/ /g,"_")} Image`,text:"made with Vernier Graphical Analysis"})}catch(a){console.error("Unable to Share",a)}}}_shadeChange({target:{value:t}}){this.selected.image=!1,delete this.pdfTabEl?.tab?.pdfOutput,this.markColor=t,this._refreshGraphs(),this._tabClick({target:{tab:this.selected}})}_axisLabelScaleChange({target:{value:t}}){this.selected.image=!1,delete this.pdfTabEl?.tab?.pdfOutput,this.axisLabelScaleFactor=t;for(let e of this.graphElements)e.coreGraphEl._graphInstance.axes.forEach(a=>{a.options.ticks.font.size=t*a.defaultOptions.ticks.font.size});this._refreshGraphs(),this._tabClick({target:{tab:this.selected}})}_aspectRatioChange({target:{value:t}}){this.selected.image=!1,delete this.pdfTabEl?.tab?.pdfOutput,this.img=u,this.graphAspectRatioClass=t,this._refreshGraphs(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{setTimeout(()=>{this.selected.image=!1,this._tabClick({target:{tab:this.selected}})},250)})})}_decimalFormatChange({target:{value:t}}){this.decimalFormat=t,this.setFileData(this.selected.type)}_refreshGraphs(){this.graphElements.forEach(t=>{t._tab.image=!1,this._markGraph(t)})}async _tabClick({target:{tab:t}}){this.exportDisabled=!1,this.img=u,this.imgHidden=!1,this.selected=t,this.file=null,this.selected.image instanceof Blob&&(this.selected.image=await f(this.selected.image)),this.selected.type==="graph"&&this._markGraph(this.shadowRoot.querySelector(`#${this.selected.graphEl.id}`)),this.selected.type==="frame"&&(this.img=this.selected.image),this.selected.output==="file"&&this.selected.type!=="pdf"&&(this.imgHidden=!0,await this.setFileData(this.selected.type)),this.selected.type==="pdf"&&this.renderPDF()}async graphsRendered(){for(;!this.graphElements.every(t=>t._tab.image);)await new Promise(t=>requestAnimationFrame(t));return!0}async renderPDF(){let{renderPDF:t}=await import("./export-renderPDF-YH6ASGLE.js");t.call(this)}async setFileData(t){let[e]=this.requestServices(["dataWorld"]);this.file=null;let a=await e.exportData({filename:`${t}-export.${t}`,filepath:`${t}-export.${t}`,type:this.selected.type,decimal:this.decimalFormat,skipWrite:!0}),{content:i}=a,r=t==="ambl"?"application/x-ambl":a.mimetype,s=new Blob([i],{type:r});this.file=await f(s)}async copy(){let t=e=>{console.error(e),this.clipboardCopy=!1,this.$toast.makeToast(o("Error: Clipboard access denied."))};if(this.isSafari)navigator.clipboard.write([new ClipboardItem({"image/png":new Promise(async e=>{let a=await b(this.img);e(new Blob([a],{type:"image/png"}))})})]).catch(e=>t(e));else{let e=await b(this.img);navigator.clipboard.write([new ClipboardItem({"image/png":e})]).catch(a=>{t({imgBlob:e,error:a})})}}get graphs(){return this.tabs.filter(t=>t.type==="graph")}handleImgLoad(){this._isImgLoaded=this.img!==u||this.selected.type!=="graph"}exportButtonText(){return window.cordova||this.share&&w("ff-web-share-export")?this.selected.type==="csv"?o("Share CSV"):this.selected.type==="ambl"?o("Share AMBL"):this.selected.type==="pdf"?o("Share PDF"):o("Share Image"):this.selected.type==="csv"?o("Save CSV"):this.selected.type==="ambl"?o("Save AMBL"):this.selected.type==="pdf"?o("Save PDF"):o("Save PNG")}get isSafari(){return typeof device!="undefined"?device?.platform?.toLowerCase()==="ios":m.default.name==="Safari"}graphTemplate(t){let{graphEl:e}=t,a=$({},e.analysisStore);switch(Object.setPrototypeOf(a,C.prototype),e.tagName.toLowerCase()){case"ia-graph":return l`
          <ia-graph
            id=${e.id}
            class="graph"
            ._tab=${t}
            .analysisStore=${a}
            .leftTraces=${e.leftTraces}
            .originalGraph=${e}
            .splitSelectionsById=${e.splitSelectionsById}
            @core-graph-ready=${this._coreGraphReady}
            export
            readOnly
          ></ia-graph>
        `;case"va-graph":return l`<va-graph
          id="${e.id}"
          class="graph"
          .leftTraces="${e.leftTraces}"
          .originalGraph="${e}"
          ._tab="${t}"
          .analysisStore="${a}"
          @core-graph-ready="${this._coreGraphReady}"
          export
          readOnly
        >
        </va-graph>`;case"ga-graph":return l`<ga-graph
          id="${e.id}"
          class="graph"
          .leftTraces="${e.leftTraces}"
          .originalGraph="${e}"
          ._tab="${t}"
          .analysisStore="${a}"
          @core-graph-ready="${this._coreGraphReady}"
          export
          readOnly
        >
        </ga-graph>`;case"sa-graph":return l`<sa-graph
          id="${e.id}"
          class="graph"
          .leftTraces="${e.leftTraces}"
          .originalGraph="${e}"
          ._tab="${t}"
          .analysisStore="${a}"
          .spectrumInfo="${e.spectrumInfo}"
          @core-graph-ready="${this._coreGraphReady}"
          export
          readOnly
        >
        </sa-graph>`;default:return l``}}optionsTemplate(t){return t==="csv"?l`<label class="label stack" data-graph-option
        >${o("Decimal Format")}
        <select id="decimal_format" @change="${this._decimalFormatChange}">
          <option ?selected="${this.decimalFormat==="."}" value=".">${z}</option>
          <option ?selected="${this.decimalFormat===","}" value=",">${M}</option>
        </select>
      </label>`:t==="graph"||t==="pdf"?l`<label class="label stack" data-graph-option
          >${o("Line Shade")}
          <select id="line_shade" @change="${this._shadeChange}">
            <option ?selected="${this.markColor==="#aaa"}" value="#aaa">
              ${o("Normal")}
            </option>
            <option ?selected="${this.markColor==="#777"}" value="#777">
              ${o("Dark")}
            </option>
            <option ?selected="${this.markColor==="#333"}" value="#333">
              ${o("Darker")}
            </option>
            <option ?selected="${this.markColor==="#000"}" value="#000">
              ${o("Darkest")}
            </option>
          </select>
        </label>
        <label class="label stack" data-graph-option
          >${o("Axis Label Size")}
          <select id="axis_label_size" @change="${this._axisLabelScaleChange}">
            <option ?selected="${this.axisLabelScaleFactor===.75}" value="0.75">
              ${o("Small")}
            </option>
            <option ?selected="${this.axisLabelScaleFactor===1}" value="1">
              ${o("Regular")}
            </option>
            <option ?selected="${this.axisLabelScaleFactor===1.25}" value="1.25">
              ${o("Large")}
            </option>
          </select>
        </label>
        <label class="label stack" data-graph-option
          >${o("Graph Shape")}
          <select id="aspect_ratio" @change="${this._aspectRatioChange}">
            <option ?selected="${this.graphAspectRatioClass==="square"}" value="square">
              ${o("4:3")}
            </option>
            <option ?selected="${this.graphAspectRatioClass==="rectangle"}" value="rectangle">
              ${o("16:9")}
            </option>
          </select>
        </label>`:l``}tabTemplate(t){return t.name==="pdf"?l`
          <vst-ui-pro-only
            preview-position="bottom-right"
            feature-name="PDF Export"
            .authorizedClickHandler="${this._tabClick.bind(this)}"
          >
            <button
              class="btn"
              id="tab_pdf"
              ?selected="${this.selected.name===t.name}"
              .tab="${t}"
              ?hidden="${!1}"
            >
              ${t.name}
            </button>
          </vst-ui-pro-only>
        `:l`<vst-style-tooltip>
          <button
            class="btn"
            id="${`tab_${t.name.toLowerCase().replace(/\s/g,"_")}`}"
            ?selected="${this.selected.name===t.name}"
            .tab="${t}"
            @click="${this._tabClick}"
          >
            ${t.name}
          </button>
          ${t.tooltip?l` <span role="tooltip" position="block-end">${t.tooltip}</span> `:""}
        </vst-style-tooltip>`}get downloadHref(){return this.selected.output==="file"?this.file:this.img}render(){return l`
      <div class="sidebar" id="export_container" gap="l">
        <div>
          <div class="stack" style="--min: 55%" gap="m">
            <div id="tabs" class="btn-group" collapse>
              ${this.tabs.map(t=>this.tabTemplate(t))} ${this.tabTemplate(this.pdfTab)}
            </div>
            <div class="image-container">
              <img
                id="display_image"
                src="${this.img}"
                ?hidden="${this.imgHidden}"
                alt="${this.selected.name}"
                @load="${this.handleImgLoad}"
              />
              <div id="no_image_placeholder" ?hidden="${!this.imgHidden}">
                ${this.selected.type?.toUpperCase()}
              </div>
              ${x(this.selected?.type==="pdf"&&this.file&&!this._androidPDF,l` <iframe id="pdf_preview" title="pdf preview" src="${this.file}"></iframe>`)}
              ${x(this.selected?.type==="pdf"&&this.file&&this._androidPDF,l`<div id="android_pdf"></div>`)}
            </div>
          </div>
          <div class="stack" style="--min: 12rem;" gap="m" fixed>
            <div class="stack" gap="s" split-below id="options-region">
              ${this.optionsTemplate(this.selected?.type)}
            </div>
            <div class="btn-group" variant="icon" id="copy_button_group">
              <button
                class="btn"
                selected
                id="export_button"
                ?disabled="${this.exportDisabled||!this.downloadHref||this.selected.output==="image"&&!this._isImgLoaded}"
                @click="${this.export}"
              >
                ${this.exportButtonText()}
                <a
                  href="${this.downloadHref}"
                  download="${this.selected.output==="file"?`${this.selected.type}-export.${this.selected.type}`:`${this.selected.type}.png`}"
                  tabindex="-1"
                ></a>
              </button>
              ${this.clipboardCopy&&this.selected.output==="image"&&!window.cordova||this.isSafari&&this.selected.type==="graph"?l`
                    <vst-style-tooltip id="copy_button_container">
                      <button
                        id="copy_button"
                        size="s"
                        class="btn"
                        variant="icon"
                        @click="${this.copy}"
                        ?disabled="${!this._isImgLoaded}"
                      >
                        <vst-ui-icon .icon="${G}"></vst-ui-icon>
                      </button>
                      <span role="tooltip" position="block-start-end"
                        >${o("Copy to clipboard")}</span
                      >
                    </vst-style-tooltip>
                  `:""}
            </div>
            <div id="graph-exports" visually-hidden class="${this.graphAspectRatioClass}">
              ${this.graphs.map(this.graphTemplate.bind(this))}
            </div>
          </div>
        </div>
      </div>
    `}};customElements.define("vst-core-export",T);export{T as VstCoreExport};
