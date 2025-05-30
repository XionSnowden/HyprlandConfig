import{a as c}from"./chunk-HOPQVMFY.js";import"./chunk-PTKZDLN6.js";import{a as r}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{c as o}from"./chunk-CRHRJPRJ.js";import{a as i}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as s,c as t,h as l}from"./chunk-BVG7RORO.js";import{b as n}from"./chunk-WFJOWCXF.js";import{c as e}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var d=s`
  .table {
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    min-inline-size: 100%;
  }
  .table table {
    text-align: left;
    border-collapse: collapse;
    inline-size: 100%;
  }
  .table th:first-of-type,
  .table td:first-of-type {
    padding-inline-start: var(--vst-space-m);
  }
  .table th:last-of-type,
  .table td:last-of-type {
    padding-inline-end: var(--vst-space-m);
  }
  .table tr *:not(:last-of-type) {
    border-inline-end: 1px solid var(--vst-color-bg-secondary);
  }
  .table thead tr,
  tr:not(:last-child) {
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    position: relative;
  }
  .table th,
  .table td {
    padding: var(--vst-space-m);
    inline-size: min-content;
    white-space: nowrap;
  }
  .table th {
    color: var(--vst-color-fg-tertiary);
    text-transform: uppercase;
  }
  .table td {
    color: var(--vst-color-fg-primary);
  }

  .list {
    padding: var(--vst-space-3xs);
    inline-size: 100%;
  }

  .list-container {
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-m);
    margin-block-end: var(--vst-space-m);
    box-shadow: var(--vst-shadow-s);
    border-radius: var(--vst-radius);
    position: relative;
  }

  .title {
    inline-size: 1fr;
    white-space: normal;
  }

  .list .title {
    text-align: end;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;var p=[{label:e("Square Root"),syntax:"sqrt(arg1)"},{label:e("Cube Root"),syntax:"cbrt(arg1)"},{label:e("Sine"),syntax:"sin(arg1)"},{label:e("Hyperbolic Sine"),syntax:"sinh(arg1)"},{label:e("Inverse Sine"),syntax:"asin(arg1)"},{label:e("Inverse Hyperbolic Sine"),syntax:"asinh(arg1)"},{label:e("Cosine"),syntax:"cos(arg1)"},{label:e("Hyperbolic Cosine"),syntax:"cosh(arg1)"},{label:e("Inverse Cosine"),syntax:"acos(arg1)"},{label:e("Inverse Hyperbolic Cosine"),syntax:"acosh(arg1)"},{label:e("Tangent"),syntax:"tan(arg1)"},{label:e("Hyperbolic Tangent"),syntax:"tanh(arg1)"},{label:e("Inverse Tangent"),syntax:"atan(arg1)"},{label:e("Inverse Tangent 2"),syntax:"atan2(arg1)"},{label:e("Inverse Hyperbolic Tangent"),syntax:"atanh(arg1)"},{label:e("Row Number"),syntax:"rowNumber()"},{label:e("Truncate"),syntax:"trunc(arg1)"},{label:e("Round"),syntax:"round(arg1)"},{label:e("Remainder"),syntax:"remainder(arg1, arg2)"},{label:e("Power"),syntax:"pow(arg1)"},{label:e("Next After"),syntax:"nextafter(arg1, arg2)"},{label:e("Modulo"),syntax:"mod(arg1, arg2)"},{label:e("Log"),syntax:"log(arg1)"},{label:e("Log Base b"),syntax:"logb(arg1)"},{label:e("Log Base 2"),syntax:"log2(arg1)"},{label:e("Natural Log"),syntax:"ln(arg1)"},{label:e("Natural Log 1 + X"),syntax:"log1p(arg1)"},{label:e("Hypotenuse"),syntax:"hypot(arg1)"},{label:e("Floor"),syntax:"floor(arg1)"},{label:e("Ceiling"),syntax:"ceiling(arg1)"},{label:e("Exp - 1"),syntax:"expm1(arg1)"},{label:e("Exponential Base 2"),syntax:"exp2(arg1)"},{label:e("Natural Exponential"),syntax:"exp(arg1)"},{label:e("Error"),syntax:"erf(arg1)"},{label:e("Complementary Error"),syntax:"erfc(arg1)"},{label:e("Dimension"),syntax:"dim(arg1, arg2)"},{label:e("Copy Sign"),syntax:"copysign(arg1, arg2)"},{label:e("Absolute Value"),syntax:"abs(arg1)"},{label:e("Low-pass Filter"),syntax:"lowPassFilter(Y, X, cutoff)"},{label:e("High-pass Filter"),syntax:"highPassFilter(Y, X, cutoff)"},{label:e("Band-stop Filter"),syntax:"bandStopFilter(Y, X, lowCutoff)"},{label:e("Band-pass Filter"),syntax:"bandPassFilter(Y, X, lowCutoff)"},{label:e("Time Decay Filter"),syntax:"timeDecay(Y, X, timeDecay)"},{label:e("First Derivative"),syntax:"firstDerivative(Y, X)"},{label:e("Second Derivative"),syntax:"secondDerivative(Y, X)"},{label:e("Integral"),syntax:"integral(Y, X)"},{label:e("Delta"),syntax:"delta(X)"},{label:e("RMS"),syntax:"rms(X)"},{label:e("Rate"),syntax:"rate(Y, X, t, m1, m2, n, dt)"}],b=class extends r(l){static get properties(){return{type:{type:String,reflect:!0}}}static get observableProperties(){return{screenSize:c}}static get styles(){return[o,d,s`
        code {
          font-style: italic;
          color: var(--vst-color-fg-tertiary);
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-block-start: var(--vst-space-xs);
        }
        span {
          margin-inline-end: var(--vst-space-xs);
        }
        .stack {
          inline-size: 100%;
        }
      `]}render(){return t`
      <main slot="content" class="stack" gap="l">
      <section class="stack" gap="m">
        <h2 class="heading" size="m">
          ${this.type==="curvefit"?e("Creating a Custom Curve Fit"):e("Creating a Custom Calculated Column")}
        </h2>
        <p space="2xs">
          ${n(e("To create a custom %s, use any of the supported functions with any of the supported operators"),this.type==="curvefit"?e("Curve Fit"):e("Calculated Column"))},
          <code>e.g + - * / ^ ( )</code>
        </p>
      </section>
      <section class="stack" gap="2xs">
        <h3 class="heading" size="s">${e("Supported Functions")}:</h3>
          ${this.screenSize==="small"?t`
                  <div class="list">
                    ${p.map(a=>t`
                        <div class="list-container">
                          <div class="list-item" margin="block-end-s">
                            <h3 class="overline">${e("Function")}</h3>
                            <p class="title">${a.label}</p>
                          </div>

                          <div class="list-item">
                            <h3 class="overline">${e("Syntax")}</h3>
                            <p class="title">${a.syntax}</p>
                          </div>
                        </div>
                      `)}
                  </div>
                `:t`
                  <div class="table">
                    <table>
                      <thead>
                        <tr>
                          <th class="overline">${e("Function")}</th>
                          <th class="overline">${e("Syntax")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${p.map(a=>t`
                            <tr>
                              <td class="body">${a.label}</td>
                              <td class="body">${a.syntax}</td>
                            </tr>
                          `)}
                      </tbody>
                    </table>
                  </div>
                `}
        </div>
      </section>
      <section>
        <h3 class="overline" margin="0">${e("Notes")}:</h3>
        <ul>
          <li class="body" margin="block-end-xs">
            ${e("An expression must include the independent variable and at least one parameter.")}
          </li>
          <li class="body" margin="block-end-xs">
            ${e("Functions and the independent variable must be lower case.")}
            <code>sin</code> ${e("not")} <code>SIN ${e("or")} sin(X)</code>
          </li>
          <li class="body" margin="block-end-xs">
            ${e("There can be no more than seven parameters in an expression.")}
          </li>
          <li class="body" margin="block-end-xs">
            ${e("Multiplication can be explicit or implied.")}
            <code>A*x ${e("or")} Ax</code>
          </li>
          <li class="body" margin="block-end-xs">
            ${e("Parameters cannot be repeated within an expression.")}
          </li>
          <li class="body" margin="block-end-xs">
            ${e("Trigonometric functions are evaluated in radians except when the column plotted on the horizontal axis has units")}
            <code>°, deg, ${e("or")} degrees</code>.
          </li>
          <li
            class="body"
            margin="block-end-xs"
            ?hidden="${this.type!=="curvefit"}"
          >
            ${e("Custom fits are saved in app document files. When you start a new session or re-launch the app, the fits are cleared.")}
          </li>
          <li
            ?hidden="${this.type!=="curvefit"}"
            class="body"
          >
            ${e("The expression will be used as the curve fit name if one is not explicitly entered.")}
          </li>
        </ul>
      </section>
    </main>
  `}};customElements.define("vst-ui-custom-expression-info",b);function T(){return t` <vst-ui-dialog id="custom_expression_info" stop-propagation>
    <h1 slot="header" margin="0">${this.dialogs?.custom_expression_info?.params?.title}</h1>
    ${i(this.dialogs?.custom_expression_info?.show,t`<vst-ui-custom-expression-info
        slot="content"
        type="${this.dialogs?.custom_expression_info?.params?.type}"
      ></vst-ui-custom-expression-info>`)}
  </vst-ui-dialog>`}export{T as template};
