import{a as x}from"./chunk-HOPQVMFY.js";import{a as v}from"./chunk-PL6DDC6Q.js";import{e as g,f as b,g as w,h as y}from"./chunk-TB2MSUH5.js";import{c as $}from"./chunk-CRHRJPRJ.js";import{a as p}from"./chunk-OTWO5H3C.js";import{b as a,c as o,h as n}from"./chunk-BVG7RORO.js";import{b as d,e as f}from"./chunk-VAJOC7YO.js";import{c as s}from"./chunk-LI3RKPGW.js";var k=class extends n{static get properties(){return{progress:{type:Number,reflect:!0},href:{type:String,reflect:!0},loading:{type:Boolean,reflect:!0},mimeType:{type:String,reflect:!0},filename:{type:String,reflect:!0},crossorigin:{type:Boolean,reflect:!0},cached:{type:Boolean,reflect:!0},method:{type:String,reflect:!0}}}constructor(){super();this.progress=0,this.href="",this.loading=!1,this.mimeType="",this.filename="file",this.crossorigin=!1,this.cached=!1,this.method="GET"}async updated(e){e.has("href")&&(this.cached="caches"in window?await caches.match(this.href):!1,this.filename=this.href.split("/").pop().replace(/\?.+/,"")),e.has("cached")&&this.cached&&this.dispatchEvent(new CustomEvent("external-import-cached",{composed:!0,bubbles:!0}))}async triggerFetch(){try{this.dispatchEvent(new CustomEvent("download-start",{bubbles:!0,composed:!0})),this.loading=!0;let e=await fetch(this.href,{method:this.method,mode:this.crossorigin?"cors":void 0}),t=e.clone(),i=e.body.getReader(),h=+e.headers.get("Content-Length");this.dispatchEvent(new CustomEvent("download-metadata",{detail:{contentLength:h},bubbles:!0,composed:!0}));let r=0,m=[];do{let{done:l,value:c}=await i.read();l&&(this.loading=!1),c&&(m.push(c),r+=c.length,this.progress=r/h,this.dispatchEvent(new CustomEvent("download-progress",{detail:{progress:this.progress,receivedLength:r},bubbles:!0,composed:!0})))}while(this.loading);let z=new Uint8Array(r),u=0;for(let l of m)z.set(l,u),u+=l.length;let S=await t.blob(),L=new File([S],this.filename,{type:this.mimeType});return this.cached="caches"in window?await caches.match(this.href):!1,this.dispatchEvent(new CustomEvent("download-finish",{detail:{file:L,url:this.href},bubbles:!0,composed:!0})),!0}catch(e){return console.error(e),this.dispatchEvent(new CustomEvent("download-error",{detail:{error:e},bubbles:!0,composed:!0})),!1}}};customElements.define("vst-core-external-import",k);var _=a`
  /*
    To make a fixed area and a scrollable area without specifing a height on the scrollable area:
      1. Make parent display:flex, flex-direction: column, and block-size: 100%
      2. add flex-shrink: 0 to fixed elements
      3. add overflow: auto to scrollable elements
  */

  :host {
    --overflow: visible;
  }

  .sample-data {
    inline-size: 100%;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    max-inline-size: 40rem;
  }

  .filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    margin-block-end: var(--vst-space-xs);
  }

  .filter select {
    min-inline-size: auto;
  }

  .tags {
    order: 2;
    display: flex;
    align-items: center;
  }

  .label {
    inline-size: 100%;
  }

  ${p("m",a`
      .filter {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        inline-size: 100%;
      }

      .tags {
        order: 0;
        margin-block-start: 0;
      }
    `)}

  .table-container {
    inline-size: 100%;
    max-block-size: 60vh; /* necessary for proper scrolling in safari < 14.5 */
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    margin-block-start: var(--vst-space-m);
    overflow: auto;
  }

  .table {
    text-align: left;
    border-collapse: collapse;
    inline-size: 100%;
  }

  .list {
    overflow-y: auto;
    max-block-size: 75vh;
    padding: var(--vst-space-3xs);
  }

  .list-container {
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-m);
    margin-block-end: var(--vst-space-m);
    box-shadow: var(--vst-shadow-s);
    border-radius: var(--vst-radius);
    position: relative;
  }

  .list-container[loading] {
    box-shadow: var(--vst-shadow-m);
  }

  .progress-container {
    inline-size: 100%;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .title {
    inline-size: 1fr;
    white-space: normal;
  }

  .list .title {
    text-align: end;
  }

  .progress {
    position: absolute;
    bottom: -3px;
    left: 0;
    inline-size: var(--progress);
    transform-origin: left;
    block-size: 5px;
    background-color: var(--vst-color-brand);
    border-radius: var(--vst-radius);
  }

  .list-container:not([loading])[disabled] {
    filter: grayscale(100%);
    color: var(--vst-color-fg-tertiary);
    cursor: initial;
    box-shadow: none;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .key {
    font-size: var(--vst-font-size-s);
    color: var(--vst-color-fg-tertiary);
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }

  .value {
    text-align: end;
  }

  vst-core-external-import {
    display: none;
  }

  th:first-of-type,
  td:first-of-type {
    padding-inline-start: var(--vst-space-l);
  }

  th:last-of-type,
  td:last-of-type {
    padding-inline-end: var(--vst-space-l);
  }

  ${p("m",a`
      td:last-of-type {
        display: flex;
        align-items: center;
      }
    `)}

  tr {
    transform: scale(1);
  }

  thead tr,
  tr {
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    position: relative;
  }

  th,
  td {
    padding: var(--vst-space-l) var(--vst-space-m);
    inline-size: min-content;
    white-space: nowrap;
  }

  th {
    color: var(--vst-color-fg-tertiary);
    text-transform: uppercase;
  }

  td {
    color: var(--vst-color-fg-primary);
  }

  .filter-menu {
    padding: var(--vst-space-l);
    border: none;
  }

  #close {
    block-size: auto;
    inline-size: auto;
  }

  #filter_icon {
    --vst-ui-icon-color: var(--vst-color-fg-tertiary);
    inline-size: var(--vst-space-s);
  }

  #book_select,
  #subject_select {
    inline-size: 100%;
  }

  .offline-container {
    position: relative;
  }
`;var E="https://experiments.graphicalanalysis.com/",j=class extends v(n){static get properties(){return{experiments:{type:Array},filters:{type:Object},showFilter:{type:Boolean},sampleLoading:{type:Boolean},downloaded:{type:Boolean,reflect:!0}}}static get observableProperties(){return{screenSize:x}}static get styles(){return[$,_]}constructor(){super();this.experiments=[],this.filters={subject:[],book:[]},this.showFilter=!1,this.sampleLoading=!1,this.downloaded=!1}async updated(e){e.has("experiments")&&window.cordova&&!navigator.serviceWorker&&this.experiments.forEach(async t=>{t.status=await d(t.filename)?"cached":"uncached",this.requestUpdate()})}_computeCached(e){return e==="cached"?o`
        <vst-style-tooltip>
          <button
            class="btn experiment-cached"
            variant="icon"
            @click="${this.openExperiment}"
            ?disabled="${this.sampleLoading}"
          >
            <vst-ui-icon .icon="${b}" color="var(--vst-color-fg-primary)"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${s("Load Experiment")}</span>
        </vst-style-tooltip>
      `:e==="caching"?o` <vst-style-spinner></vst-style-spinner> `:navigator.onLine?o`
        <vst-style-tooltip>
          <button
            class="btn experiment-uncached"
            variant="icon"
            @click="${this.triggerDownload}"
            ?disabled="${this.sampleLoading}"
          >
            <vst-ui-icon
              .icon="${g}"
              color="${window.matchMedia("(prefers-color-scheme: dark)").matches?"var(--vst-color-light-100)":"var(--vst-color-brand)"}"
            ></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${s("Download Experiment")}</span>
        </vst-style-tooltip>
      `:o`
      <vst-style-tooltip>
        <div class="offline-container">
          <vst-ui-icon
            class="experiment-offline"
            .icon="${y}"
            color="var(--vst-color-fg-tertiary)"
          ></vst-ui-icon>
        </div>
        <span role="tooltip" position="block-start-end">${s("Offline")}</span>
      </vst-style-tooltip>
    `}_filterExperiments(){return this.filters.subject.length===0&&this.filters.book.length===0?this.experiments:this.filters.subject.length===0?this.experiments.filter(e=>this.filters.book.includes(e.book)):this.filters.book.length===0?this.experiments.filter(e=>this.filters.subject.includes(e.subject)):this.experiments.filter(e=>this.filters.book.includes(e.book)).filter(e=>this.filters.subject.includes(e.subject))}_removeFilter(e,t){let i=this.filters[t].indexOf(e);i>-1&&this.filters[t].splice(i,1),this.requestUpdate()}_toggleFilterMenu(){this.showFilter=!this.showFilter}_updateFilters({target:{value:e}},t){e==="all"?this.filters[t]=[]:this.filters[t]=[e],this.requestUpdate()}_populateFilters(e){return[...new Set(this.experiments.map(i=>i[e]))].map(i=>o`
        <option
          value="${i}"
          ?selected="${this.filters[e].includes(i)}"
          ?hidden="${!this._experimentsPresent(i)}"
        >
          ${s(i)}
        </option>
      `)}_experimentsPresent(e){return this.filters.subject.length!==0&&this.filters.subject.length!==0?this._filterExperiments().filter(t=>t.book===e||t.subject===e).length>0:this.filters.subject.length!==0?this._filterExperiments().filter(t=>t.book===e).length>0:this.filters.book.length!==0?this._filterExperiments().filter(t=>t.subject===e).length>0:!0}async _downloadFinished({detail:e,target:{experiment:t}}){this.downloaded=!0,this.sampleLoading=!1,!e.fromCache&&window.cordova&&await f(t.filename,e.file.name[0]),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("close-dialog",{composed:!0,bubbles:!0})),e.experiment=t,this.dispatchEvent(new CustomEvent("open-sample-experiment",{detail:e}))}),this.requestUpdate()}_downloadStart({target:{experiment:e}}){e.progress=0,this.sampleLoading=!0,e.status="caching",this.requestUpdate()}_downloadProgress({detail:{progress:e},target:t}){t.experiment.progress=Math.floor(e*1e3)/10,this._updateProgressBar(t),this.requestUpdate()}_updateProgressBar(e){e.closest(this.screenSize==="small"?".list-item":"tr").querySelector(".progress").style.setProperty("--progress",`${e.progress}%`)}openExperiment({target:e}){this.openOnFinish=!0,this.triggerDownload({target:e})}async triggerDownload({target:e}){this.downloaded=!1;let t=e.closest(this.screenSize==="small"?".list-item":"tr").querySelector("vst-core-external-import");if(t.experiment.status==="cached"&&window.cordova&&!navigator.serviceWorker){let i=await d(t.experiment.filename);if(i){this._downloadFinished({detail:{file:i,url:t.href,fromCache:!0},target:t});return}}t.triggerFetch()}render(){return o`
      <div class="sample-data">
        <div class="filter">
          <div class="tags">
            ${this.filters.subject.length!==0?this.filters.subject.map(e=>o`
                      <vst-ui-tag
                        variant="primary"
                        @closed="${()=>this._removeFilter(e,"subject")}"
                        dismissible
                      >
                        ${s(e)}
                      </vst-ui-tag>
                    `):""}
            ${this.filters.book.length!==0?this.filters.book.map(e=>o`
                      <vst-ui-tag
                        variant="success"
                        @closed="${()=>this._removeFilter(e,"book")}"
                        dismissible
                      >
                        ${s(e)}
                      </vst-ui-tag>
                    `):""}
          </div>
          <vst-ui-dropdown ?open="${this.showFilter}" position="bottom m-bottom-right" margin="block-end-xs m-block-end-0" @closed="${this._toggleFilterMenu}">
            <button class="btn" slot="anchor" variant="outline" id="filter_btn" @click="${this._toggleFilterMenu}">
              Filter
              <vst-ui-icon .icon="${w}" margin="inline-start-xs" id="filter_icon"></vst-ui-icon>
            </button>
            <div slot="content" class="filter-menu">
              <label class="label">
                <span style="display:block" margin="block-end-xs">${s("Subject")}</span>
                <select
                  id="subject_select"

                  @change="${e=>this._updateFilters(e,"subject")}"
                >
                  <option value="all" ?selected="${this.filters.subject.length===0}">
                    ${s("All")}
                  </option>

                  ${this._populateFilters("subject")}
                  </option>
                </select>
              </label>

              <label class="label">
                <span style="display:block" margin="block-end-xs block-start-m">${s("Book")}</span>
                <select
                  id="book_select"

                  @change="${e=>this._updateFilters(e,"book")}"
                >
                  <option value="all" ?selected="${!this.filters.book.length===0}">
                    ${s("All")}
                  </option>

                  ${this._populateFilters("book")}
                </select>
              </label>
            </div>
          </vst-ui-dropdown>
        </div>

        ${this.screenSize==="small"?o`
                <div class="list">
                  ${this._filterExperiments().map(e=>o`
                      <div
                        class="list-container"
                        ?disabled="${this.sampleLoading}"
                        ?loading="${e.status==="caching"}"
                      >
                        <div class="list-item" margin="block-end-s">
                          <h3 class="overline">${s("Experiment Name")}</h3>
                          <p class="title">${e.name}</p>
                        </div>

                        <div class="list-item" margin="block-end-s">
                          <h3 class="overline">${s("Book Title")}</h3>
                          <p class="title">${e.book}</p>
                        </div>

                        <div class="list-item" margin="block-end-s">
                          <h3 class="overline">${s("Subject")}</h3>
                          <p class="title">${e.subject}</p>
                        </div>

                        <div
                          class="list-item"
                          @download-finish="${this._downloadFinished}"
                          @download-start="${this._downloadStart}"
                          @download-progress="${this._downloadProgress}"
                        >
                          <h3 class="overline">${s("View Experiment")}</h3>
                          ${this._computeCached(e.status)}
                          <vst-core-external-import
                            href="${E}${e.filename}?revision=${e.revision}"
                            .experiment="${e}"
                            @external-import-cached="${()=>{e.status="cached",this.requestUpdate()}}"
                          ></vst-core-external-import>
                          <span
                            class="progress"
                            role="progressbar"
                            aria-valuenow="${e.progress}"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            ?hidden="${!e.progress||e.progress===1/0}"
                          ></span>
                        </div>
                      </div>
                    `)}
                </div>
              `:o`
                <div class="table-container">
                  <table class="table">
                    <tr>
                      <th class="overline">${s("Experiment Name")}</th>
                      <th class="overline">${s("Book Title")}</th>
                      <th class="overline">${s("Subject")}</th>
                      <th></th>
                    </tr>

                    ${this._filterExperiments().map(e=>o`
                        <tr
                          @download-finish="${this._downloadFinished}"
                          @download-start="${this._downloadStart}"
                          @download-progress="${this._downloadProgress}"
                        >
                          <td class="title">${e.name}</td>
                          <td class="title">${e.book}</td>
                          <td class="title">${e.subject}</td>
                          <td>
                            ${this._computeCached(e.status)}
                            <vst-core-external-import
                              href="${E}${e.filename}?revision=${e.revision}"
                              .experiment="${e}"
                              @external-import-cached="${()=>{e.status="cached",this.requestUpdate()}}"
                            ></vst-core-external-import>
                          </td>
                          <td class="progress-container">
                            <span
                              class="progress"
                              role="progressbar"
                              aria-valuenow="${e.progress}"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              ?hidden="${!e.progress||e.progress===1/0}"
                            ></span>
                          </td>
                        </tr>
                      `)}
                  </table>
                </div>
              `}
      </div>
    `}};customElements.define("ga-sample-data",j);
