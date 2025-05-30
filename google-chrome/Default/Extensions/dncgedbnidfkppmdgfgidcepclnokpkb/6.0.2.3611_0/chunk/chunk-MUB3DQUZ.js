import{c as r}from"./chunk-CRHRJPRJ.js";import{a as n}from"./chunk-OTWO5H3C.js";import{b as i,c as o,d as t,h as e}from"./chunk-BVG7RORO.js";var l=i`
  :host {
    display: inline-flex;
    pointer-events: none;
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
    line-height: 0;
  }

  :host([size='xs']) {
    inline-size: var(--vst-icon-size-xs);
    block-size: var(--vst-icon-size-xs);
  }

  :host([size='s']) {
    inline-size: var(--vst-icon-size-s);
    block-size: var(--vst-icon-size-s);
  }

  :host([size='l']) {
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
  }

  ${n("m",i`
      :host([size='l']) {
        inline-size: var(--vst-icon-size-l);
        block-size: var(--vst-icon-size-l);
      }
    `)}

  .icon {
    inline-size: 100%;
    block-size: 100%;
    display: flex;
  }

  .icon__svg {
    stroke: none;
    inline-size: 100%;
    fill: var(--vst-ui-icon-color, var(--vst-color-fg-primary));
  }

  .icon__svg[stroke] {
    stroke: var(--vst-ui-icon-color, var(--vst-color-fg-primary));
    stroke-width: var(--vst-ui-icon-stroke-width, 2);
    stroke-linecap: var(--vst-ui-icon-stroke-linecap, round);
    stroke-linejoin: var(--vst-ui-icon-linejoin, round);
    fill: none;
  }
`;var c=class extends e{static get properties(){return{icon:{type:Object},color:{type:String}}}constructor(){super();this.icon={paths:[]},this.color=""}updated(s){s&&s.has("color")&&this.style.setProperty("--vst-ui-icon-color",this.color)}static get styles(){return[r,l]}render(){let s=this.icon.paths.map(v=>t`<path d="${v}">`);return o`
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon__svg"
          ?stroke="${this.icon.stroke}"
          viewBox="${this.icon.viewBox}"
        >
          ${s}
        </svg>
      </div>
    `}};customElements.define("vst-ui-icon",c);export{c as a};
