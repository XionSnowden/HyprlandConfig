import{b as o}from"./chunk-BVG7RORO.js";var e=o`
  ol.menu,
  ul.menu {
    background: var(--vst-color-bg);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu-divider:not(:first-of-type) {
    margin-block-start: var(--vst-space-xs);
  }

  ol.menu > li,
  ul.menu > li {
    border-bottom: 1px solid var(--vst-color-bg-secondary);
  }

  ol.menu > li > button,
  ul.menu > li > button {
    appearance: none;
    background: none;
    border: 2px solid transparent;
    color: var(--vst-color-text-brand);
    cursor: pointer;
    font-family: var(--vst-font-family);
    font-size: var(--vst-font-size-m);
    inline-size: 100%;
    line-height: 1.5;
    padding: var(--vst-space-xs) var(--vst-space-s);
    position: relative;
    text-align: left;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: opacity var(--transition-default-speed) var(--transition-easing);
    white-space: nowrap;
  }

  ol.menu > li > button:focus,
  ul.menu > li > button:focus {
    /* Alternative focus style that works with overflow-y: auto */
    border: 2px solid var(--vst-dark-outline-color, var(--vst-outline-color));
    box-shadow: none;
  }

  ol.menu > li > button:hover:not([disabled]),
  ul.menu > li > button:hover:not([disabled]) {
    background-color: var(--vst-color-bg-tertiary);
    color: var(--vst-color-text-brand-hover);
  }

  ol.menu > li > button[disabled],
  ul.menu > li > button[disabled] {
    color: var(--vst-color-fg-tertiary);
    cursor: default;
    opacity: 0.5;
  }

  ol.menu > li > vst-ui-switch,
  ul.menu > li > vst-ui-switch {
    display: block;
    inline-size: 100%;
    padding: var(--vst-space-s);
  }
`;export{e as a};
