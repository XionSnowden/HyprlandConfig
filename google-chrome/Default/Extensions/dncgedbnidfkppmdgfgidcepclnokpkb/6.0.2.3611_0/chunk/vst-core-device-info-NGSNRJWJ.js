import{a as i}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{c as e}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";function n(){return e`<vst-ui-dialog
    id="device_info"
    @before-dialog-open="${()=>{import("./vst-core-device-info-GH4Y3MTW.js")}}"
  >
    <h1 slot="header">${this.dialogs?.device_info?.params?.title}</h1>
    ${i(this.dialogs?.device_info?.show,e`<vst-core-device-info
        slot="content"
        .device="${this.dialogs?.device_info?.params?.device}"
      ></vst-core-device-info>`)}
  </vst-ui-dialog>`}export{n as template};
