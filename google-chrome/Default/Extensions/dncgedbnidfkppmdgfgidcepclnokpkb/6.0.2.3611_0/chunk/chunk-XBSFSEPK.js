import{a as p}from"./chunk-R6LDBG7J.js";import{a as h}from"./chunk-KFWGEN4K.js";import{a as o}from"./chunk-PL6DDC6Q.js";import{c as g}from"./chunk-CRHRJPRJ.js";import{b as l,c as i,h as r}from"./chunk-BVG7RORO.js";import{c as s}from"./chunk-LI3RKPGW.js";var d=l`
  :host {
    display: block;
    background: var(--vst-color-bg);
    padding: var(--vst-space-l);
    max-block-size: 70vh;
    inline-size: min-content;
    overflow: auto;
  }

  #graph_title {
    inline-size: 100%;
  }

  .graph-options__fieldset {
    border: none;
    min-inline-size: 0;
    inline-size: 100%;
  }

  select {
    inline-size: max-content;
  }

  .graph-options__legend {
    display: block;
    font-weight: bold;
  }

  .graph-options__fieldset {
    padding: 0;
    margin-block-end: var(--vst-space-l);
  }

  .graph-options__fieldset:last-of-type {
    margin-block-end: 0;
  }

  .graph-drawing__radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--vst-space-m);
  }

  .graph-drawing__radio {
    margin-inline-end: 0;
  }

  .graph-drawing__label {
    margin-block-end: 0;
  }
  .graph-drawing__label:hover {
    cursor: pointer;
  }

  .graph-ranges__range {
    font-size: var(--vst-font-size-xs);
    display: flex;
    margin: var(--vst-space-xs) 0;
    min-inline-size: 12rem;
  }

  .graph-ranges__input-group {
    flex: 1;
  }

  .graph-ranges__input-group input {
    inline-size: 100%;
  }

  .graph-ranges__to {
    line-height: 2.25rem;
    margin: 0 var(--vst-space-2xs);
  }

  .graph-ranges__autoscale {
    display: flex;
    align-items: baseline;
  }

  .graph-ranges__autoscale-label {
    margin: 0 var(--vst-space-xs) 0 0;
  }

  select {
    border: none;
    color: var(--vst-color-text-brand);
  }
`;var c=["GA","VA"].includes("GA"),u=class extends o(r){static get properties(){return{title:{type:String},baseMin:{type:Number},baseMax:{type:Number},leftMin:{type:Number},leftMax:{type:Number},baseInvalid:{type:String},leftInvalid:{type:String},rightAxisEnabled:{type:Boolean},rightInvalid:{type:String},baseScaling:{type:String},leftScaling:{type:String},rightScaling:{type:String},appearance:{type:Object},lineWeight:{type:Number},labelSize:{type:Number},showBarPreview:{type:Boolean},optionsOverrides:{type:Object,reflect:!0}}}static get observableProperties(){return{authorized:h}}constructor(){super();this.getText=s,this.title="",this.baseMin=0,this.baseMax=0,this.leftMin=0,this.leftMax=0,this.baseInvalid="",this.leftInvalid="",this.rightAxisEnabled=!1,this.rightInvalid="",this.baseScaling="automatic_scaling",this.leftScaling="automatic_scaling",this.rightScaling="automatic_scaling",this.appearance={bars:!1,lines:!0,points:!1},this.lineWeight=1,this.labelSize=.67,this.optionsOverrides={},this.showBarPreview=!1}firstUpdated(){this._tapCount=0,this.shadowRoot.querySelector("#base_scaling_mode").querySelector(`option[value=${this.baseScaling}]`).selected=!0,this.shadowRoot.querySelector("#left_scaling_mode").querySelector(`option[value=${this.leftScaling}]`).selected=!0,this.shadowRoot.querySelector("#right_scaling_mode").querySelector(`option[value=${this.rightScaling}]`).selected=!0}_titleInput(e){this.title=e.target.value,this.dispatchEvent(new CustomEvent("title-changed",{detail:this.title}))}_baseMinInput(e){e.target.validity.valid&&(this.baseMin=e.target.value,this._baseRangeChanged())}_baseMaxInput(e){e.target.validity.valid&&(this.baseMax=e.target.value,this._baseRangeChanged())}_leftMinInput(e){e.target.validity.valid&&(this.leftMin=e.target.value,this._leftRangeChanged())}_leftMaxInput(e){e.target.validity.valid&&(this.leftMax=e.target.value,this._leftRangeChanged())}_rightMinInput(e){e.target.validity.valid&&(this.rightMin=e.target.value,this._rightRangeChanged())}_rightMaxInput(e){e.target.validity.valid&&(this.rightMax=e.target.value,this._rightRangeChanged())}_baseRangeChanged(){let e=parseFloat(this.baseMin),t=parseFloat(this.baseMax);e>=t?this.baseInvalid="error":(this.baseInvalid="",this.dispatchEvent(new CustomEvent("base-range-changed",{detail:{min:e,max:t}})))}_leftRangeChanged(){let e=parseFloat(this.leftMin),t=parseFloat(this.leftMax);e>=t?this.leftInvalid="error":(this.leftInvalid="",this.dispatchEvent(new CustomEvent("left-range-changed",{detail:{min:e,max:t}})))}_rightRangeChanged(){let e=parseFloat(this.rightMin),t=parseFloat(this.rightMax);e>=t?this.rightInvalid="error":(this.rightInvalid="",this.dispatchEvent(new CustomEvent("right-range-changed",{detail:{min:e,max:t}})))}_appearanceChanged(e){e.preventDefault();let{target:{value:t,checked:n}}=e,a={points:this.appearance.points,lines:this.appearance.lines,bars:this.appearance.bars};t==="bars"&&n?(a.points=!1,a.lines=!1):a.bars=!1,a[t]=n,this.appearance=a,this.dispatchEvent(new CustomEvent("appearance-changed",{detail:a}))}_enableHiddenFeatures(){this._tapCount+=1,this._tapCount>4&&(this._showHiddenFeatures=!0)}_lineWeightInput(e){this.lineWeight=e.target.value,this.dispatchEvent(new CustomEvent("line-weight-changed",{detail:this.lineWeight}))}_labelSizeInput(e){this.labelSize=e.target.value,this.dispatchEvent(new CustomEvent("label-size-changed",{detail:this.labelSize}))}_changeBaseScalingMode(e){this.baseScalingMode=e.target.value,this.dispatchEvent(new CustomEvent("scaling-mode-changed",{detail:{base:this.baseScalingMode}}))}_changeLeftScalingMode(e){this.leftScalingMode=e.target.value,this.dispatchEvent(new CustomEvent("scaling-mode-changed",{detail:{left:this.leftScalingMode}}))}_changeRightScalingMode(e){this.rightScalingMode=e.target.value,this.dispatchEvent(new CustomEvent("scaling-mode-changed",{detail:{right:this.rightScalingMode}}))}_rightAxisEnabledChanged(e){this.rightAxisEnabled=e.target.checked,this.dispatchEvent(new CustomEvent("right-axis-toggled",{detail:this.rightAxisEnabled}))}submitForm(){this.dispatchEvent(new CustomEvent("complete-workflow"))}_toggleBarPreview({target:e}){this.showBarPreview=!this.showBarPreview,e.checked=!1}static get styles(){return[g,d]}getBarsCheckBox(){return this.authorized?i`
        <div class="checkbox-group">
          <div class="checkbox">
            <input
              id="graph_drawing_label_bars"
              type="checkbox"
              name="graph_drawing_label"
              value="bars"
              ?disabled="${this.categorical}"
              @change="${this._appearanceChanged}"
              .checked="${this.appearance.bars}"
            />
            <span class="check"></span>
          </div>
          <label class="title" margin="0" for="graph_drawing_label_bars"
            >${this.getText("Bars")}</label
          >
        </div>
      `:i`
      <vst-ui-dropdown
        variant="pro"
        position="bottom-right"
        ?open="${this.showBarPreview}"
        @closed="${this._toggleBarPreview}"
      >
        <div class="checkbox-group" slot="anchor">
          <div class="checkbox">
            <input
              type="checkbox"
              name="graph_drawing_label"
              value="bars"
              @change="${this._toggleBarPreview}"
            />
            <span class="check"></span>
          </div>
          <label class="title" margin="0" for="graph_drawing_label_points"
            >${this.getText("Bars")}</label
          >
        </div>
        <p slot="content" margin="0">
          ${s("Activate to use Bar Graphs")}
          <vst-ui-pro-info></vst-ui-pro-info>
        </p>
      </vst-ui-dropdown>
    `}renderRightYAxisToggle(){return i`
      <vst-ui-switch
        class="label"
        margin="block-end-xs"
        label=${this.getText("Right y-axis range")}
        label-placement="right"
        .checked=${this.rightAxisEnabled}
        @switch-changed=${e=>{let{target:t}=e;this.authorized||!c?this._rightAxisEnabledChanged(e):(t.dispatchEvent(new Event("click",{bubbles:!0})),requestAnimationFrame(()=>{t.checked=!e.detail}))}}
      >
      </vst-ui-switch>
    `}render(){return i`
      <vst-ui-form @submit="${this.submitForm}">
        <form class="graph-options" id="graph_options_form">
          <fieldset
            class="graph-options__fieldset"
            ?hidden="${this.optionsOverrides.title?.hidden}"
          >
            <label class="label" margin="block-end-xs" for="graph_title"
              >${this.getText("Title")}</label
            >
            <input
              id="graph_title"
              type="text"
              placeholder="${this.getText("Add a graph title here")}"
              value="${this.title}"
              @input="${this._titleInput}"
            />
          </fieldset>

          <fieldset
            class="graph-options__fieldset"
            ?hidden="${this.optionsOverrides.appearance?.hidden}"
          >
            <div class="graph-drawing">
              <legend
                class="label"
                margin="block-end-xs"
                @keyup="${e=>e.keyCode===13?this._enableHiddenFeatures:""}"
                @click="${this._enableHiddenFeatures}"
              >
                ${this.getText("Appearance")}
              </legend>
              <div class="graph-drawing__radio-group">
                <div class="checkbox-group">
                  <div class="checkbox">
                    <input
                      id="graph_drawing_label_points"
                      type="checkbox"
                      name="graph_drawing_label"
                      value="points"
                      ?disabled="${this.categorical}"
                      @change="${this._appearanceChanged}"
                      .checked="${this.appearance.points}"
                    />
                    <span class="check"></span>
                  </div>
                  <label class="title" margin="0" for="graph_drawing_label_points"
                    >${this.getText("Points")}</label
                  >
                </div>
                <div class="checkbox-group">
                  <div class="checkbox">
                    <input
                      id="graph_drawing_label_lines"
                      type="checkbox"
                      name="graph_drawing_label"
                      value="lines"
                      ?disabled="${this.categorical}"
                      @change="${this._appearanceChanged}"
                      .checked="${this.appearance.lines}"
                    />
                    <span class="check"></span>
                  </div>
                  <label class="title" margin="0" for="graph_drawing_label_lines"
                    >${this.getText("Lines")}</label
                  >
                </div>
                ${this.getBarsCheckBox()}
              </div>
            </div>

            ${this._showHiddenFeatures?i`
                  <div>
                    <label for="graph_line_weight" class="graph-options__legend"
                      >Line Weight: ${this.lineWeight}px</label
                    >
                    <input
                      id="graph_line_weight"
                      type="range"
                      min="1"
                      max="14"
                      value="${this.lineWeight}"
                      @input="${this._lineWeightInput}"
                    />
                  </div>
                  <div>
                    <label for="graph_label_size" class="graph-options__legend"
                      >Label Size: ${this.labelSize}em</label
                    >
                    <input
                      id="graph_label_size"
                      type="number"
                      min="0.5"
                      max="2"
                      step="0.01"
                      value="${this.labelSize}"
                      @input="${this._labelSizeInput}"
                    />
                  </div>
                `:""}
          </fieldset>

          <fieldset class="graph-ranges graph-options__fieldset">
            <legend class="label" margin="block-end-xs">${this.getText("x-axis range")}</legend>
            <div class="graph-ranges__range">
              <div class="graph-ranges__input-group floating-label">
                <input
                  id="base_min"
                  type="number"
                  step="any"
                  required
                  value="${this.baseMin}"
                  class="${this.baseInvalid}"
                  @input="${this._baseMinInput}"
                />
                <label for="base_min">${this.getText("Left")}</label>
              </div>
              <span class="graph-ranges__to">to</span>
              <div class="graph-ranges__input-group floating-label">
                <input
                  id="base_max"
                  type="number"
                  step="any"
                  required
                  value="${this.baseMax}"
                  class="${this.baseInvalid}"
                  @input="${this._baseMaxInput}"
                />
                <label for="base_max">${this.getText("Right")}</label>
              </div>
            </div>
            <div class="graph-ranges__autoscale" ?hidden="${this.optionsOverrides.scaling?.hidden}">
              <label class="title" margin="0" for="base_scaling_mode"
                >${this.getText("Scaling")}</label
              >
              <select
                id="base_scaling_mode"
                name="base_scaling_mode"
                @change="${this._changeBaseScalingMode}"
              >
                <option value="automatic_scaling">${this.getText("Automatic")}</option>
                <option value="show_zero_scaling">${this.getText("Always Show 0")}</option>
                <option value="manual_scaling">${this.getText("Manual Scaling")}</option>
              </select>
            </div>
          </fieldset>

          <fieldset class="graph-ranges graph-options__fieldset">
            <legend class="label" margin="block-end-xs">
              ${this.getText("Left y-axis range")}
            </legend>

            <div class="graph-ranges__range">
              <div class="graph-ranges__input-group floating-label">
                <input
                  id="left_min"
                  type="number"
                  step="any"
                  required
                  value="${this.leftMin}"
                  class="${this.leftInvalid}"
                  @input="${this._leftMinInput}"
                />
                <label for="left_min">${this.getText("Bottom")}</label>
              </div>
              <span class="graph-ranges__to">to</span>
              <div class="graph-ranges__input-group floating-label">
                <input
                  id="left_max"
                  type="number"
                  step="any"
                  required
                  value="${this.leftMax}"
                  class="${this.leftInvalid}"
                  @input="${this._leftMaxInput}"
                />
                <label for="left_max">${this.getText("Top")}</label>
              </div>
            </div>
            <div class="graph-ranges__autoscale" ?hidden="${this.optionsOverrides.scaling?.hidden}">
              <label class="title" margin="0" for="left_scaling_mode"
                >${this.getText("Scaling")}</label
              >
              <select
                id="left_scaling_mode"
                name="left_scaling_mode"
                @change="${this._changeLeftScalingMode}"
              >
                <option value="automatic_scaling">${this.getText("Automatic")}</option>
                <option value="show_zero_scaling">${this.getText("Always Show 0")}</option>
                <option value="manual_scaling">${this.getText("Manual Scaling")}</option>
              </select>
            </div>
          </fieldset>

          ${p(c,()=>i`
              <vst-ui-pro-only
                .previewPosition="bottom-right"
                .infoToolTipPosition="block-end"
                .featureName=${s("Right y-axis")}
              >
                ${this.renderRightYAxisToggle()}
              </vst-ui-pro-only>
            `,()=>this.renderRightYAxisToggle())}
          <fieldset
            class="graph-ranges graph-options__fieldset"
            ?disabled="${!this.rightAxisEnabled}"
          >
            <div class="graph-ranges__range">
              <div class="graph-ranges__input-group floating-label">
                <input
                  id="right_min"
                  type="number"
                  step="any"
                  required
                  value="${this.rightMin}"
                  class="${this.rightInvalid}"
                  @input="${this._rightMinInput}"
                />
                <label for="right_min">${this.getText("Bottom")}</label>
              </div>
              <span class="graph-ranges__to">to</span>
              <div class="graph-ranges__input-group floating-label">
                <input
                  id="right_max"
                  type="number"
                  step="any"
                  required
                  value="${this.rightMax}"
                  class="${this.rightInvalid}"
                  @input="${this._rightMaxInput}"
                />
                <label for="right_max">${this.getText("Top")}</label>
              </div>
            </div>
            <div class="graph-ranges__autoscale" ?hidden="${this.optionsOverrides.scaling?.hidden}">
              <label class="title" margin="0" for="right_scaling_mode"
                >${this.getText("Scaling")}</label
              >
              <select
                id="right_scaling_mode"
                name="right_scaling_mode"
                @change="${this._changeRightScalingMode}"
              >
                <option value="automatic_scaling">${this.getText("Automatic")}</option>
                <option value="show_zero_scaling">${this.getText("Always Show 0")}</option>
                <option value="manual_scaling">${this.getText("Manual Scaling")}</option>
              </select>
            </div>
          </fieldset>
          <!-- we have a hidden submit button to allow the user to hit enter and close the form -->
          <button visually-hidden type="submit">${this.getText("Submit")}</button>
        </form>
      </vst-ui-form>
    `}};customElements.define("vst-core-graph-options",u);export{u as a};
