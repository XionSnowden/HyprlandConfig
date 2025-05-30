import{c as s}from"./chunk-TB2MSUH5.js";import{c as n}from"./chunk-CRHRJPRJ.js";import{b as o,c as t,h as e}from"./chunk-BVG7RORO.js";var r=o`
  .accordion,
  .accordion-label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .accordion-label:hover {
    color: var(--vst-color-text-brand);
  }

  .accordion-label:hover .caret {
    --vst-ui-icon-color: var(--vst-color-text-brand);
  }

  .caret {
    margin-inline-end: var(--vst-space-2xs);
    inline-size: 1rem;
    --vst-ui-icon-color: var(--icon-color, var(--vst-color-neutral-200));
    order: var(--order, 0);
  }

  .caret[open] {
    transform: rotate(180deg);
  }

  slot[name='label']::slotted(*) {
    white-space: nowrap;
    cursor: pointer;
  }

  slot[name='content'] {
    display: none;
  }

  slot[name='content']::slotted(*) {
    margin-inline-start: var(--vst-space-m);
  }

  slot[name='content'][open] {
    display: block;
  }
`;var c=class extends e{static get properties(){return{open:{type:Boolean,reflect:!0}}}static get styles(){return[n,r]}constructor(){super();this.open=!1}_toggleAccordion(){this.open=!this.open,this.dispatchEvent(new CustomEvent("accordion-toggled",{detail:this.open,composed:!0,bubbles:!0}))}render(){return t`
      <section class="accordion">
        <div
          class="accordion-label"
          @keyup="${i=>i.keyCode===13?this._toggleAccordion:""}"
          @click="${this._toggleAccordion}"
        >
          <vst-ui-icon class="caret" ?open="${this.open}" .icon="${s}"></vst-ui-icon>
          <slot name="label"></slot>
        </div>
        <slot name="label-secondary"></slot>
      </section>
      <slot name="content" ?open="${this.open}"></slot>
    `}};customElements.define("vst-ui-accordion",c);
