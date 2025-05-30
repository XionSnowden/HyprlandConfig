import{fa as l,ga as r,ha as a,ia as s,ja as c,ka as m,la as d,ma as p,na as u,oa as b,pa as v,qa as g,ra as y,sa as h,ta as f,ua as S}from"./chunk-TB2MSUH5.js";import{c as k}from"./chunk-CRHRJPRJ.js";import{b as n,c as o,h as i}from"./chunk-BVG7RORO.js";import{c as e}from"./chunk-LI3RKPGW.js";var O=n`
  .container {
    padding: var(--vst-space-l);
    border: 1px solid var(--vst-color-neutral-100);
    border-radius: var(--vst-radius);
    background: var(--vst-color-inner-popover-bg);
  }

  .container .heading[size='s'] {
    margin-block-end: var(--vst-space-2xs);
  }

  .color-container {
    display: flex;
    align-items: stretch;
    block-size: 2.25rem;
  }

  /* Color Swatches */
  .swatches {
    flex: 1;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1rem);
    grid-gap: var(--vst-space-xs);
  }

  input[type='radio'].swatch {
    -webkit-appearance: none;
    -moz-appearance: none;
    all: initial;
    border: none;
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 0;
    cursor: pointer;
    border-radius: 2px !important;
    background: var(--color);
    padding: 0;
  }

  input[type='radio'].swatch:focus {
    --vst-outline-offset: 2px;
    --vst-outline-color: var(--color);
    box-shadow: var(--vst-outline);
  }

  input[type='radio'].swatch:not(:focus-visible) {
    box-shadow: none;
  }

  input[type='radio'].swatch::before {
    z-index: 1;
    content: '';
    border: none;
    border-radius: 2px !important;
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: var(--color);
  }

  input[type='radio'].swatch:hover::before {
    z-index: 1;
    content: '';
    border-radius: 2px !important;
    position: absolute;
    inline-size: 1rem;
    block-size: 1rem;
    background: var(--color);
  }

  input.swatch[type='color'] {
    flex-grow: 1;
    margin: 0;
    block-size: 2.5rem;
    background: none;
  }

  input.swatch[type='color']::before {
    margin: 0;
    inline-size: 2.5rem;
    block-size: 2.5rem;
    transition: all 0.1s;
    background: conic-gradient(
      from 90deg,
      #8854d0,
      #1b1464,
      #0652dd,
      #009432,
      #fed330,
      #f79f1f,
      #ea2027,
      #8854d0
    );
  }

  input.swatch[type='color']:hover::before {
    inline-size: 2.75rem;
    block-size: 2.75rem;
  }

  /* Point Symbols */
  .point-symbols {
    display: grid;
    gap: var(--vst-space-2xs);
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
    place-items: center;
  }

  .symbol.btn[variant='icon'] {
    border: 2px solid transparent;
  }

  .symbol.btn[variant='icon'][selected] {
    background: var(--color-selected);
    border-color: var(--color);
  }
`;var x=["#d42531","#b8ae1e","#7CBB04","#007377","#3a8ccb","#3246a9","#5a2c63","#e26096"],$=[{name:"circle",label:e("Circle"),icon:l},{name:"circleOutline",label:e("Outlined Circle"),icon:r},{name:"square",label:e("Square"),icon:a},{name:"squareOutline",label:e("Outlined Square"),icon:s},{name:"rectangle",label:e("Rectangle"),icon:d},{name:"rectangleOutline",label:e("Outlined Rectangle"),icon:p},{name:"rectangleInverted",label:e("Inverted Rectangle"),icon:u},{name:"rectangleInvertedOutline",label:e("Inverted Outlined Rectangle"),icon:b},{name:"triangle",label:e("Triangle"),icon:y},{name:"triangleOutline",label:e("Outlined Triangle"),icon:h},{name:"triangleInverted",label:e("Inverted Triangle"),icon:f},{name:"triangleInvertedOutline",label:e("Inverted Outlined Triangle"),icon:S},{name:"diamond",label:e("Diamond"),icon:c},{name:"diamondOutline",label:e("Outlined Diamond"),icon:m},{name:"plus",label:e("Plus"),icon:v},{name:"plusOutline",label:e("Outlined Plus"),icon:g}],w=class extends i{static get properties(){return{color:{type:String,reflect:!0},symbol:{type:String,reflect:!0}}}static get styles(){return[O,k]}selectSymbol({target:{value:t}}){this.dispatchEvent(new CustomEvent("trace-updated",{detail:{symbol:t}}))}selectColor({target:{value:t}}){this.dispatchEvent(new CustomEvent("trace-updated",{detail:{color:t}}))}render(){return o`
      <vst-ui-form>
        <form class="container">
          <h3 class="heading" size="s">${e("Point Colors")}</h3>
          <div class="color-container" margin="block-end-m">
            <div class="swatches" margin="inline-end-xs">
              ${x.map(t=>o`
                  <input
                    name="color"
                    class="swatch"
                    type="radio"
                    value="${t}"
                    ?checked="${this.color==="#EA2027"}"
                    @click="${this.selectColor}"
                    style="--color: ${t}"
                  />
                `)}
            </div>

            <input
              class="swatch"
              type="color"
              id="color_picker"
              margin="0"
              value="${this.color}"
              @change="${this.selectColor}"
            />
          </div>

          <h3 class="heading" size="s">${e("Point Symbols")}</h3>
          <div class="point-symbols">
            ${$.map(t=>o`
                <vst-style-tooltip>
                  <button
                    class="btn symbol"
                    variant="icon"
                    size="s"
                    value="${t.name}"
                    ?selected="${this.symbol===t.name}"
                    @click="${this.selectSymbol}"
                  >
                    <vst-ui-icon
                      color="${this.color||"#000"}"
                      .icon="${t.icon}"
                    ></vst-ui-icon>
                  </button>
                  <span role="tooltip" position="block-start">${t.label}</span>
                </vst-style-tooltip>
              `)}
          </div>
        </form>
      </vst-ui-form>
    `}};customElements.define("vst-ui-column-appearance-picker",w);
