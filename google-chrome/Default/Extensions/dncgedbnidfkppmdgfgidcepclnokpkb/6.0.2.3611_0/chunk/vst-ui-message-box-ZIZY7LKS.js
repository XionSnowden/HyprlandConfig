import{a as o}from"./chunk-CWRGSBHN.js";import{a as t}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as i}from"./chunk-OTWO5H3C.js";import{b as a,c as e}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";function d(){return e` <style>
      #message_box_container {
        max-inline-size: 35rem;
        display: flex;
        flex-direction: column;
      }

      #message_box_text {
        padding: var(--vst-space-l);
        flex-grow: 1;
        word-break: break-word;
      }

      #message_box_buttons {
        display: flex;
        flex-direction: column;
        gap: var(--vst-space-xs);
        padding: var(--vst-space-s) var(--vst-space-m);
        border-top: 1px solid var(--vst-color-bg-secondary);
      }

      ${i("s",a`
          #message_box_buttons {
            flex-direction: row;
            justify-content: flex-end;
          }
        `)};
    </style>

    <vst-ui-dialog
      style="--dialog-padding: 0;"
      ?no-escape="${this.dialogs?.message_box?.params?.choiceRequired}"
      id="message_box"
    >
      ${t(this.dialogs?.message_box?.show,e`
          <h1 slot="header">${this.dialogs?.message_box?.params?.title}</h1>
          <main slot="content" id="message_box_container">
            ${(Array.isArray(this.dialogs?.message_box?.params?.content)?this.dialogs.message_box.params.content:[this.dialogs?.message_box?.params?.content]).map(s=>e`<p id="message_box_text">${s}</p>`)}
            <div id="message_box_buttons">
              ${(Array.isArray(this.dialogs?.message_box?.params?.actions)?this.dialogs.message_box.params.actions:[this.dialogs?.message_box?.params?.actions]).map(s=>e`<button
                  @click="${s?.onClick}"
                  id="${s?.id||""}"
                  title="${s?.title||""}"
                  variant="${s?.variant}"
                  style="${o(s?.styles||{})}"
                  margin="${s?.margin}"
                  class="btn"
                >
                  ${s?.message}
                </button>`)}
            </div>
          </main>
        `)}
    </vst-ui-dialog>`}export{d as template};
