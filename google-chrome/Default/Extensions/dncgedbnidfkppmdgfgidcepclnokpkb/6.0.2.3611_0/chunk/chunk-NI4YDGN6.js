import{a}from"./chunk-374UYNGS.js";import{a as i}from"./chunk-OTWO5H3C.js";import{b as e}from"./chunk-BVG7RORO.js";var o=e`
  ${a}
  :host(:not([has-blocking-start-cal-processes])) {
    width: 30rem;
  }

  /*  dropdown if we have multiple calbiration point options (one point, two point, etc) */
  .cal-point-options {
    margin-block-end: 1em;
    /*  &__label { */
    /*  } */
  }

  /*  the input forms when keeping a value */
  .cal-keeps {
    --form-padding: 1.25em;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    margin-block-end: var(--vst-space-xs);
  }
  .cal-keeps__form {
    flex: 1;
    padding: var(--form-padding);
  }
  .cal-keeps__fieldset {
    padding: 0;
    position: relative;
    z-index: 2;
  }
  .cal-keeps__fieldset::before {
    border-radius: var(--vst-radius);
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    margin: calc(-1 * var(--form-padding));
    width: calc(100% + var(--form-padding) * 2);
    height: calc(100% + var(--form-padding) * 2);
    background: var(--vst-color-calibration-bg);
    border: 1px solid var(--vst-color-calibration-border);
  }
  .cal-keeps__fieldset[disabled] {
    opacity: 0.3;
  }
  .cal-keeps__fieldset[disabled] .cal-rsr {
    opacity: 0;
  }
  .cal-keeps__fieldset[disabled]::before {
    opacity: 0;
    width: 0;
  }
  .cal-keeps__fieldset:not([disabled])::before {
    opacity: 1;
  }
  .cal-keeps__fieldset-container {
    display: flex;
    flex-direction: column;
  }
  ${i("m",e`
      .cal-keeps__fieldset-container {
        flex-direction: row;
        align-items: baseline;
      }
    `)}

  .cal-keeps__label {
    margin: 0 0 1em 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  ${i("m",e`
      .cal-keeps__label {
        margin: 0;
      }
    `)}
  .cal-keeps__label-description {
    font-weight: bold;
    color: var(--vst-color-fg-300);
  }

  .cal-keeps__input-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  ${i("m",e`
      .cal-keeps__input-wrapper {
        margin-inline-start: 0.5em;
      }
    `)}

  .cal-keeps__input-wrapper--inner {
    display: flex;
    align-items: center;
    inline-size: 100%;
  }

  .cal-keeps__input-wrapper .btn {
    inline-size: 100%;
  }

  ${i("s",e`
      .cal-keeps__input-wrapper--inner {
        inline-size: auto;
      }

      .cal-keeps__input-wrapper .btn {
        inline-size: auto;
      }
    `)}

  .cal-keeps__input {
    display: inline-block;
    flex-grow: 1;
    background: var(--vst-color-input-bg);
  }

  ${i("s",e`
      .cal-keeps__input {
        /* allow responsive sizing of input with a max width similar to 'auto' size */
        inline-size: calc(100% - 3ch - var(--vst-space-xs));
        max-inline-size: calc(7 * var(--vst-font-size-m));
      }
    `)}

  .cal-keeps .cal-rsr {
    font-size: var(--vst-font-size-xs);
    padding: 0.675em 1.667em;
    color: var(--vst-color-fg-tertiary);
    background-color: var(--vst-color-calibration-rsr-bg);
    border-block-start: 1px solid var(--vst-color-calibration-rsr-border);
    margin: var(--vst-space-m) calc(1.25rem * -1 + 1px) calc(-1.25rem + 1px);
  }

  .cal-action-bar {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  ${i("s",e`
      .cal-action-bar {
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-end;
        margin-block-start: var(--vst-space-l);
        gap: var(--vst-space-xs);
      }

      #reset {
        flex: 1;
      }

      #close-actions {
        flex-grow: 1;
        --justify: flex-end;
      }
    `)}

  .cal-action-bar .cal-action-bar__btn-apply {
    margin-block-start: 1em;
  }

  .cal-action-bar .cal-action-bar__btn-reset {
    margin-inline-end: auto;
    margin-block-start: 1em;
    padding-inline-start: 0;
  }

  .cal-action-bar .cal-action-bar__btn-cancel {
    margin-inline-end: var(--gutter);
    margin-block-start: 1em;
  }
  .cal-keeps .odo__instructions {
    padding: 0 0 0 1.125rem;
    margin: 0 0 1rem;
  }
  .cal-keeps .odo__instructions li {
    margin-block-end: 0.5rem;
  }
  .cal-keeps .blocking-cal__instructions {
    margin: 0 0 1em 0;
  }
  .cal-keeps .blocking-cal__btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  p {
    text-align: center;
  }

  ${i("s",e`
      p {
        text-align: start;
      }
    `)}

  .cal-point-options__label, .cal-point-options__label select {
    inline-size: 100%;
  }

  ${i("s",e`
      .cal-point-options__label,
      .cal-point-options__label select {
        inline-size: auto;
      }
    `)}

  .cal-point-options__label, .cal-point-options__label select {
    inline-size: 100%;
  }

  ${i("s",e`
      .cal-point-options__label,
      .cal-point-options__label select {
        inline-size: auto;
      }
    `)}
`;export{o as a};
