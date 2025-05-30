import{a as s}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{c as o}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";function n(){let i=this.dialogs?.device_manager?.params??{},{studentMode:e,onLoad:a}=i;return o`
    <vst-ui-dialog
      id="device_manager"
      variant=${a&&e?"fullscreen":""}
      ?no-focus=${a&&e}
      ?headless=${a&&e}
      ?no-escape=${a&&e}
      @before-dialog-open="${()=>{import("./vst-core-device-manager-6YXTVP4W.js")}}"
    >
      ${s(this.dialogs?.device_manager?.show,o`
          <h1 slot="header">${this.dialogs?.device_manager?.params?.title}</h1>
          <vst-core-device-manager
            slot="content"
            .showRequiredDevices=${e}
            .allowsLabQuestStreamDiscovery="${this.dialogs.device_manager?.params?.allowsLabQuestStreamDiscovery}"
            .webUSBOptions=${this.dialogs.device_manager?.params?.webUSBOptions}
            .windowsButNot10Message=${this.dialogs.device_manager?.params?.windowsButNot10Message}
            @complete-workflow="${()=>{this.dialogs.close("device_manager")}}"
          ></vst-core-device-manager>
        `)}
    </vst-ui-dialog>
  `}export{n as template};
