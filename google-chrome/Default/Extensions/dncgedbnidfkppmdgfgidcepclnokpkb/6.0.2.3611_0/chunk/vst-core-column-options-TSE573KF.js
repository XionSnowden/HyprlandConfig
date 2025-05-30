import{a as i}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as s}from"./chunk-OTWO5H3C.js";import{b as t,c as n}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";function a(){return n` <style>
      /* this hack is to allow the dropdown to pop out of the vertically scrolling dialog on small screens landscape mode */
        #column_options {
          --overflow: visible;
        }

          ${s("landscape",t`
          #column_options {
            --overflow: initial;
          }
        `)}

          ${s("l-l",t`
          #column_options {
            --overflow: visible;
          }
        `)}</style
    ><vst-ui-dialog
      id="column_options"
      style="--dialog-padding: 0;"
      .preloadComponents="${()=>[import("./vst-core-column-options-BNRE5UUW.js")]}"
    >
      ${i(this.dialogs?.column_options?.show,n` <h2 slot="header">
            ${this.dialogs?.column_options?.params?.columnOptionSettings?.title}
          </h2>
          <vst-core-column-options
            slot="content"
            .sourceGroupId="${this.dialogs?.column_options?.params?.columnOptionSettings?.sourceGroupId}"
            .sourceColumnId="${this.dialogs?.column_options?.params?.columnOptionSettings?.sourceColumnId}"
            .columnAction="${this.dialogs?.column_options?.params?.columnOptionSettings?.columnAction}"
            .columnType="${this.dialogs?.column_options?.params?.columnOptionSettings?.columnType}"
            @calc-column-created="${({detail:o})=>{this.dialogs.column_options.params.columnOptionSettings.onCalcColumnCreated(o),this.dialogs.close("column_options")}}"
            @column-options-cancel="${()=>{this.dialogs.close("column_options")}}"
            @column-options-complete="${()=>{this.dialogs.close("column_options")}}"
            @column-options-fail-save="${({detail:o})=>{console.error(o)}}"
            @column-trace-updated="${({detail:{columnId:o,color:l,symbol:e}})=>this.dialogs.column_options.params.columnOptionSettings.onColumnTraceUpdated(o,l,e)}"
          ></vst-core-column-options>`)}
    </vst-ui-dialog>`}export{a as template};
