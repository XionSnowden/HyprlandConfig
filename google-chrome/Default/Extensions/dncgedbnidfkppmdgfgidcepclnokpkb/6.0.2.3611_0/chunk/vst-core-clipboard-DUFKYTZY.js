import{a}from"./chunk-Z6SXIBNK.js";import"./chunk-KBTFUBYZ.js";import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{c}from"./chunk-H5EO627A.js";import"./chunk-4OSIXHXT.js";import"./chunk-3YSPJCIY.js";import{a as n}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import{a as l}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as p}from"./chunk-CRHRJPRJ.js";import{a as r}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as e,c as o,h as i}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var d=e`
  :host {
    background: var(--vst-color-bg);
    display: block;
  }

  .buttons {
    display: flex;
  }

  ${c(e`.clipboard-btn`)}

  .clipboard-btn:first-of-type {
    border-top-left-radius: var(--vst-radius);
    border-bottom-left-radius: var(--vst-radius);
  }

  .clipboard-btn:last-of-type {
    border-top-right-radius: var(--vst-radius);
    border-bottom-right-radius: var(--vst-radius);
  }

  .clipboard-btn {
    padding: var(--vst-space-xs) var(--vst-space-s);
    min-inline-size: 4.375rem;
    border-color: var(--vst-color-bg-secondary);
    border-style: solid;
    border-width: 0;
    text-align: center;
  }
  .clipboard-btn[disabled],
  .clipboard-btn[disabled]:hover {
    opacity: 1;
    color: var(--vst-color-bg-secondary);
    background-color: var(--vst-color-bg);
  }
  .clipboard-btn.delete {
    color: var(--vst-color-danger);
  }
  .clipboard-btn.separated {
    border-right-width: 1px;
  }
`;function s(){}var h=class extends a(l(i)){static get properties(){return{_showStrikethroughProMessage:{state:!0},onCut:{type:Object},onCopy:{type:Object},onPaste:{type:Object},showRestoreAll:{type:Boolean},showStrikethrough:{type:Boolean}}}static get observableProperties(){return{authorized:n}}constructor(){super();this._showStrikethroughProMessage=!1,this.onCut=s,this.onCopy=s,this.onPaste=s,this.onStrikethrough=s,this.showRestoreAll=!1,this.showStrikethrough=!1}cutClicked(){this.onCut(),this._completeWorkflow()}copyClicked(){this.onCopy(),this._completeWorkflow()}pasteClicked(){this.onPaste(),this._completeWorkflow()}restoreAllClicked(){if(!this.authorized){this._showStrikethroughProMessage=!0;return}this.onRestoreAll(),this._completeWorkflow()}strikethroughClicked(){if(!this.authorized){this._showStrikethroughProMessage=!0;return}this.onStrikethrough(),this._completeWorkflow()}_completeWorkflow(){this.dispatchEvent(new CustomEvent("complete-workflow",{bubbles:!0,composed:!0}))}static get styles(){return[p,d]}render(){return o`
      <nav>
        <div class="buttons">
          <button id="cut_btn" @click="${this.cutClicked}" class="clipboard-btn separated">
            <span>${t("Cut")}</span>
          </button>
          <button id="copy_btn" @click="${this.copyClicked}" class="clipboard-btn separated">
            <span>${t("Copy")}</span>
          </button>
          ${r(this.showStrikethrough,o`
              <button id="paste_btn" @click="${this.pasteClicked}" class="clipboard-btn separated">
                <span>${t("Paste")}</span>
              </button>
              <button
                id="strikethrough-btn"
                @click=${this.strikethroughClicked}
                class="clipboard-btn separated"
              >
                <span>${t("Strikethrough")}</span>
              </button>
            `,o`
              <button id="paste_btn" @click="${this.pasteClicked}" class="clipboard-btn">
                <span>${t("Paste")}</span>
              </button>
            `)}
          ${r(this.showRestoreAll,o`
              <button id="restore_all_btn" @click=${this.restoreAllClicked} class="clipboard-btn">
                <span>${t("Restore All")}</span>
              </button>
            `)}
          <vst-ui-popover
            id="pro-only-message"
            for="strikethrough-btn"
            placement="top"
            .open=${this._showStrikethroughProMessage}
            @closed=${()=>{this._showStrikethroughProMessage=!1}}
          >
            <p class="body" margin="s">
              ${t("Activate to toggle strikethough")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          </vst-ui-popover>
        </div>
      </nav>
    `}};customElements.define("vst-core-clipboard",h);
