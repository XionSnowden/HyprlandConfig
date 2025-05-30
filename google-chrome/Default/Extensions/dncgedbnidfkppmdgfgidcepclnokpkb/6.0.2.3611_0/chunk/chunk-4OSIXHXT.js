import{a as n}from"./chunk-KFWGEN4K.js";import{a as e}from"./chunk-PL6DDC6Q.js";import{v as r}from"./chunk-TB2MSUH5.js";import{c as l}from"./chunk-CRHRJPRJ.js";import{b as o,c as t,h as s}from"./chunk-BVG7RORO.js";import{c as i}from"./chunk-LI3RKPGW.js";var p=class extends e(s){static get observableProperties(){return{canAdvertize:n}}static get properties(){return{infoTooltipPosition:{type:String}}}constructor(){super();this.infoTooltipPosition="inline-end"}static get styles(){return[l,o`
        #info_link_container {
          display: inline-flex;
          vertical-align: text-bottom;
          position: relative;
        }

        #info_link_container span {
          padding: var(--vst-space-xs);
        }
      `]}render(){return t`
      ${this.canAdvertize?t`
            <vst-style-tooltip id="info_link_container">
              <a
                id="info_link"
                target="_blank"
                href="https://www.vernier.com/products/graphical-analysis-pro/"
              >
                <vst-ui-icon
                  color="var(--vst-color-fg-tertiary)"
                  size="xs"
                  .icon="${r}"
                ></vst-ui-icon>
              </a>
              <span role="tooltip" position=${this.infoTooltipPosition}
                >${i("Graphical Analysis Pro information")}</span
              >
            </vst-style-tooltip>
          `:t``}
    `}};customElements.define("vst-ui-pro-info",p);
