import"./chunk-K7VVS6JQ.js";import{a as l}from"./chunk-HOPQVMFY.js";import{a as r}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import{a as n}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import"./chunk-PTKZDLN6.js";import{a as o}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import"./chunk-MUB3DQUZ.js";import{c as a}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as i,c as s,h as c}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var p=i`
  ${n}
`;var m=class extends r(c){static get properties(){return{accessibilityScale:{type:Number,reflect:!0}}}constructor(){super();this.accessibilityScale=1}firstUpdated(){this.$accessibility=this.requestService("accessibility"),this.accessibilityScale=this.$accessibility.scale,this.$accessibility.on("accessibility-scale-changed",e=>{this.accessibilityScale=e})}accessibilityScaleChanged(e){this.accessibilityScale=parseFloat(e.target.value),this.$accessibility.scale=this.accessibilityScale}static get styles(){return[a,p]}render(){return s`
      <vst-ui-presentation
        slot="content"
        ?font-size="${this.dialogs?.presentation?.params?.fontSize}"
        ?theme="${this.dialogs?.presentation?.params?.theme}"
        ?zoom="${this.dialogs?.presentation?.params?.zoom}"
      >
      </vst-ui-presentation>
      <vst-ui-range
        min=".5"
        max="2"
        step="0.25"
        margin="block-start-m"
        .value="${this.accessibilityScale}"
        label="${t("Scale Factor")}"
        .tickmarks="${[.5,.75,1,1.25,1.5,1.75,2]}"
        @value-input="${this.accessibilityScaleChanged}"
        @value-changed="${this.accessibilityScaleChanged}"
      ></vst-ui-range>
    `}};customElements.define("vst-core-accessibility",m);var b=class extends o(c){static get observableProperties(){return{colorMode:l}}static get styles(){return[a,i`
        vst-core-accessibility {
          inline-size: 100%;
        }
      `]}toggleSoftwareUpdateNotification({target:e}){this.dispatchEvent(new CustomEvent("toggle-software-update-notification",{detail:e}))}toggleFirmwareUpdateNotification({target:e}){this.dispatchEvent(new CustomEvent("toggle-firmware-update-notification",{detail:e}))}render(){return s`
      <div class="stack" gap="m">
        <!-- TODO: replace vst-core-accessibility with ui component(s) & mobx -->
        <vst-core-accessibility></vst-core-accessibility>
        <!-- these two checkboxes are currently hidden until functionality has been hooked up -->
        <div class="checkbox-group" hidden>
          <div class="checkbox">
            <input
              type="checkbox"
              @change="${this.toggleFirmwareUpdateNotification}"
              id="firmware_update_notification_checkbox"
            />
            <span class="check"></span>
          </div>
          <label for="firmware_update_notification_checkbox"
            >${t("Check for firmware updates")}</label
          >
        </div>
        <div class="checkbox-group" hidden>
          <div class="checkbox">
            <input
              type="checkbox"
              id="software_update_notification_checkbox"
              checked
              @change="${this.toggleSoftwareUpdateNotification}"
            />
            <span class="check"></span>
          </div>
          <label for="software_update_notification_checkbox"
            >${t("Check for software updates")}</label
          >
        </div>
      </div>
    `}};customElements.define("vst-ui-app-preferences",b);export{b as VstUiAppPreferences};
