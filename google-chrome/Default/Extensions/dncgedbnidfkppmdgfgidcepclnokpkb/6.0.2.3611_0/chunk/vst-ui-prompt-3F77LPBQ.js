import{a as o}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{c as t}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";function s(){return t`<vst-ui-dialog
    id="prompt"
    @before-dialog-open="${()=>{import("./vst-ui-prompt-HE3AUN34.js")}}"
  >
    <h1 slot="header">${this.dialogs?.prompt?.params?.title}</h1>
    ${o(this.dialogs?.prompt?.show,t`<vst-ui-prompt
        slot="content"
        .inputValue="${this.dialogs?.prompt?.params?.inputValue}"
        .inputDescription="${this.dialogs?.prompt?.params?.inputDescription}"
        .buttonString="${this.dialogs?.prompt?.params?.buttonString}"
        @submit="${this.dialogs?.prompt?.params?.onSubmit}"
        @cancel="${this.dialogs?.prompt?.params?.onCancel}"
      ></vst-ui-prompt>`)}
  </vst-ui-dialog>`}export{s as template};
