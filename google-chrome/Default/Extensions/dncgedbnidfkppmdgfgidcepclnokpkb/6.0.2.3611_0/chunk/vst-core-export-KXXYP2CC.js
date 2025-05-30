import{a as t}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{c as o}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";function i(){return o`
    <vst-ui-dialog
      id="export"
      style="--dialog-block-size: 100%; --dialog-inline-size: 100%;"
      .preloadComponents="${()=>[import("./vst-core-export-6ZRVVOIR.js")]}"
    >
      <h1 slot="header">Export...</h1>
      ${t(this.dialogs?.export?.show,o` <vst-core-export
          slot="content"
          .tabs="${this.dialogs?.export?.params?.tabs}"
          .notes="${this.dialogs?.export?.params?.notes}"
        ></vst-core-export>`)}
    </vst-ui-dialog>
  `}export{i as template};
