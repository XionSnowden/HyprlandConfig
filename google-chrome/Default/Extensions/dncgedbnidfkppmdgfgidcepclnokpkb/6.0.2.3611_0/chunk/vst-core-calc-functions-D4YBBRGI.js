import"./chunk-6PXAOD22.js";import{a as e}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import"./chunk-AMQF2NRG.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import"./chunk-PTKZDLN6.js";import"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as o}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as l,c as n,h as a}from"./chunk-BVG7RORO.js";import"./chunk-WFJOWCXF.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var u=l`
  ${e}
  :host {
    width: 100%;
    max-inline-size: 25rem;
  }

  .notes {
    margin-block-start: 0;
  }

  .func-list-wrapper {
    padding: var(--vst-space-l);
    max-block-size: 100%;
    overflow-y: auto;
  }

  .func-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .func-list li {
    flex: 1;
    margin: var(--vst-space-3xs);
  }

  .func-list li .btn {
    width: 100%;
  }

  .btn[variant='outline'] {
    text-transform: none;
    color: var(--vst-color-text-brand);
  }
`;var i=!1,c=class extends a{funcBtnClicked(s){let d=s.target.dataset.function;this.dispatchEvent(new CustomEvent("choose-calc-function-expression",{detail:d}))}static get styles(){return[o,u]}render(){return n`
      <div class="func-list-wrapper">
        <p class="notes">
          ${t("A, B, and C are parameters you can set. X, Y, and Z are existing columns in your data table.")}
        </p>
        <ul class="func-list">
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdotXpowB"
              @click="${this.funcBtnClicked}"
            >
              ${t("A*X^B","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdivX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A/X","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AlnX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A ln(X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AlogX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A log(X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdotXaddB"
              @click="${this.funcBtnClicked}"
            >
              ${t("A*X+B","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdivXpowB"
              @click="${this.funcBtnClicked}"
            >
              ${t("A/X^B","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="XaddA"
              @click="${this.funcBtnClicked}"
            >
              ${t("X+A","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="XdotY"
              @click="${this.funcBtnClicked}"
            >
              ${t("X*Y","general","Part of Calculated Column definitions")}
            </button>
          </li>
          ${i?n`
                <li>
                  <button
                    class="btn"
                    variant="outline"
                    type="button"
                    data-function="XaddY"
                    @click="${this.funcBtnClicked}"
                  >
                    ${t("X+Y","general","Part of Calculated Column definitions")}
                  </button>
                </li>
              `:n``}
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="XsubY"
              @click="${this.funcBtnClicked}"
            >
              ${t("X-Y","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AabsX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A abs(X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          ${i?n`
                <li>
                  <button
                    class="btn"
                    variant="outline"
                    type="button"
                    data-function="sqrtXXaddYY"
                    @click="${this.funcBtnClicked}"
                  >
                    ${t("\u221A(X\xB2+Y\xB2)","general","Part of Calculated Column definitions")}
                  </button>
                </li>
              `:n``}

          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="sqrtXXaddYYaddZZ"
              @click="${this.funcBtnClicked}"
            >
              ${t("\u221A(X\xB2+Y\xB2+Z\xB2)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdotXpowBdotYpowC"
              @click="${this.funcBtnClicked}"
            >
              ${t("A*X^B*Y^C","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdotXaddBdotY"
              @click="${this.funcBtnClicked}"
            >
              ${t("A*X+B*Y","general","Part of Calculated Column definitions")}
            </button>
          </li>
          ${i?n`
                <li>
                  <button
                    class="btn"
                    variant="outline"
                    type="button"
                    data-function="arctan2YX"
                    @click="${this.funcBtnClicked}"
                  >
                    ${t("arctan2(Y,X)","general","Part of Calculated Column definitions")}
                  </button>
                </li>
              `:n``}
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="BaddAexpsubCdotX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A exp(-C*X)+B","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="derivative"
              @click="${this.funcBtnClicked}"
            >
              ${t("1st Derivative(Y, X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="secondDerivative"
              @click="${this.funcBtnClicked}"
            >
              ${t("2nd Derivative(Y, X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AsublogX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A-log(X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <button
              class="btn"
              variant="outline"
              type="button"
              data-function="AdivBaddX"
              @click="${this.funcBtnClicked}"
            >
              ${t("A/(B+X)","general","Part of Calculated Column definitions")}
            </button>
          </li>
          <li>
            <vst-ui-pro-only
              preview-position="top-right"
              feature-name="Custom Expressions"
              .authorizedClickHandler="${this.funcBtnClicked.bind(this)}"
            >
              <button class="btn" variant="outline" type="button" data-function="custom">
                ${t("Custom Expression","custom","Part of Calculated Column definitions")}
              </button>
            </vst-ui-pro-only>
          </li>
        </ul>
      </div>
    `}};customElements.define("vst-core-calc-functions",c);export{c as VstCoreCalcFunctions};
