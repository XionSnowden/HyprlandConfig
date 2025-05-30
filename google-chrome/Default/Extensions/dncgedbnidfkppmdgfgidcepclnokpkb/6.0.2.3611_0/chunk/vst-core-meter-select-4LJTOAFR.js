import{a as i,b as l}from"./chunk-5GHRE4BP.js";import"./chunk-SEYYHBSH.js";import{a as o}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{c as e}from"./chunk-BVG7RORO.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";function n(){let s=i();return e`
    <vst-ui-dialog
      id="select_meters_display"
      @before-dialog-open="${()=>{import("./vst-core-meter-select-O6YM2CEJ.js")}}"
      style="--dialog-padding: 0;"
    >
      ${o(this.dialogs?.select_meters_display?.show,e`
          <h1 slot="header">${this.dialogs?.select_meters_display?.params?.title}</h1>
          <vst-core-meter-select ${l(s)} slot="content"> </vst-core-meter-select>
          <div slot="footer" footer-buttons>
            <button
              class="btn"
              variant="text"
              @click=${()=>{this.dialogs.close("select_meters_display")}}
            >
              ${t("cancel")}</button
            ><button
              class="btn"
              @click=${()=>{s.value.submit(),this.dialogs.close("select_meters_display")}}
            >
              ${t("done")}
            </button>
          </div>
        `)}
    </vst-ui-dialog>
  `}export{n as template};
