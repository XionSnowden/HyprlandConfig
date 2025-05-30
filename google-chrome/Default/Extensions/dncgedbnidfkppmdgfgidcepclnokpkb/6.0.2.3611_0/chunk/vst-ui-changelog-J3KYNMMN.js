import{a as c}from"./chunk-232RLP5Z.js";import{a as n}from"./chunk-374UYNGS.js";import{c as i}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import{a as t}from"./chunk-OTWO5H3C.js";import{b as s,c as e,h as a}from"./chunk-BVG7RORO.js";import{c as l}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var g=s`
  :host {
    block-size: 100%;
  }

  ${n};
  ${t("m",s`
      :host {
        width: 31.25rem;
      }
    `)}

  .content {
    min-block-size: 100%;
    display: flex;
    flex-direction: column;
    background: var(--vst-color-bg);
  }

  ${t("s",s`
      .content {
        align-items: flex-start;
      }
    `)}

  .release {
    margin-block-end: var(--vst-space-l);
  }

  .heading[size='l'] {
    margin: 0;
  }

  .release__change-list {
    list-style: none;
    margin: 0;
    padding-inline-start: 0;
  }
  .release__change-list ul {
    padding-inline-start: 1.125rem;
    list-style-type: circle;
  }
  .release__change {
    display: flex;
    flex-direction: column;
    color: var(--vst-color-fg-tertiary);
    margin-block-end: var(--vst-space-m);
  }

  ${t("s",s`
      .release__change {
        display: grid;
        grid-template-columns: minmax(min-content, 5em) 1fr;
        grid-column-gap: var(--vst-space-m);
        align-items: start;
      }
    `)}

  .release .inline-icon {
    width: 1rem;
    height: 1rem;
    display: inline-block;
  }

  .label {
    font-size: var(--vst-font-size-xs);
    inline-size: 30%;
    padding: var(--vst-space-2xs);
    padding-inline-start: var(--vst-space-xs);
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: 2px solid var(--vst-color-success-dark);
  }

  ${t("s",s`
      .label {
        inline-size: 100%;
      }
    `)}

  .label--new {
    background: var(--vst-color-tag-success-bg);
    border-color: var(--vst-color-tag-success-border);
    color: var(--vst-color-tag-success);
  }

  .label--change {
    background: var(--vst-color-tag-warning-bg);
    border-color: var(--vst-color-tag-warning-border);
    color: var(--vst-color-tag-warning);
  }

  .label--pro {
    background-color: var(--vst-color-tag-important-bg);
    border-color: var(--vst-color-tag-important-border);
    color: var(--vst-color-tag-important);
  }

  .label--fix {
    background: var(--vst-color-tag-info-bg);
    border-color: var(--vst-color-tag-info-border);
    color: var(--vst-color-tag-info);
  }

  .label--wip {
    background: var(--vst-color-tag-important-bg);
    border-color: var(--vst-color-tag-important-border);
    color: var(--vst-color-tag-important);
  }

  .label--issue {
    background: var(--vst-color-tag-danger-bg);
    border-color: var(--vst-color-tag-danger-border);
    color: var(--vst-color-tag-danger);
  }

  .details {
    grid-column: 2;
  }
`;var d=class extends a{static get properties(){return{releases:{type:Array},showAll:{type:Boolean}}}constructor(){super();this.releases=[],this.showAll=!1}toggleShowAll(){this.showAll=!this.showAll}static get styles(){return[i,g]}render(){return e`
      <div id="content" class="content">
        ${this.releases.map((r,v)=>e`
              <section class="release" ?hidden="${v>0&&!this.showAll}">
                <h3 class="heading" size="l" id="version-${r.version}">
                  Version ${r.version}
                </h3>
                <p class="caption" variant="light" margin="block-end-m">
                  Released ${r.releaseDate}
                </p>
                <ul class="release__change-list">
                  ${r.changes.map(o=>e`
                      <li class="release__change">
                        <b class="label label--${o.type}" margin="block-end-xs"
                          >${o.type}</b
                        >
                        <p>${c(o.description)}</p>
                        <div class="details">
                          <ul>
                            ${o?.details?.map(m=>e` <li><p>${m}</p></li> `)}
                          </ul>
                        </div>
                      </li>
                    `)}
                </ul>
              </section>
            `)}
        <button
          class="btn"
          variant="outline"
          id="show_all_button"
          margin="block-start-auto"
          ?hidden="${this.releases.length<2}"
          @click="${this.toggleShowAll}"
        >
          ${this.showAll?l("Show Less"):l("Show All Releases")}
        </button>
      </div>
    `}};customElements.define("vst-ui-changelog",d);
