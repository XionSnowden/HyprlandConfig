import{b as r}from"./chunk-BVG7RORO.js";var t=o=>r`
  ${o} {
    appearance: none;
    /* ---single-to-multi-line---
  fix the height difference between button/input elements
  ---end--- */
    /* ---single-to-multi-line---
  Remove inner padding and border in Firefox 4+ on buttons and inputs.
  ---end--- */
    font-family: var(--vst-font-family);
    text-decoration: none;
    cursor: pointer;
    line-height: 1.5 !important;
    /* ---single-to-multi-line---
  fix the height difference between button/input elements
  ---end--- */
    color: var(--vst-color-fg-secondary);
    padding: 0.125rem 0.375rem;
    /* ---single-to-multi-line---
  prevent interior elements from bubbling up the click event
  ---end--- */
    /* ---single-to-multi-line---
  except button elements and links
  ---end--- */
  }
  ${o}::-moz-focus-inner, ${o}::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${o} * {
    pointer-events: none;
  }
  ${o} button,
${o} a {
    pointer-events: auto;
  }
  ${o}:active {
    outline: 0;
  }
`,a=o=>r`
  ${o} {
    transition: opacity var(--transition-default-speed) var(--transition-easing);
  }

  ${o}[disabled] {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }
`,l=o=>r`
  ${o} {
    /* ---single-to-multi-line---
    fix the height difference between button/input elements
    ---end--- */
    /* ---single-to-multi-line---
    Remove inner padding and border in Firefox 4+ on buttons and inputs.
    ---end--- */
    /* ---single-to-multi-line---
    fix the height difference between button/input elements
    ---end--- */
    /* ---single-to-multi-line---
    prevent interior elements from bubbling up the click event
    ---end--- */
    /* ---single-to-multi-line---
    except button elements and links
    ---end--- */
    transition: opacity var(--transition-default-speed) var(--transition-easing);
    appearance: none;
    font-family: var(--vst-font-family);
    text-decoration: none;
    cursor: pointer;
    line-height: 1.5 !important;
    color: var(--vst-color-fg-secondary);
    padding: var(--vst-space-2xs) var(--vst-space-xs);
    text-align: left;
    font-size: var(--vst-font-size-m);
    border: 0;
    color: var(--vst-color-text-brand);
    background: none;
    border-radius: var(--vst-radius);
  }

  ${o}::-moz-focus-inner, ${o}::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${o} * {
    pointer-events: none;
  }
  ${o} button,
  ${o} a {
    pointer-events: auto;
  }
  ${o}:active {
    outline: 0;
  }
  ${o}[disabled] {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }
  ${o}:hover, ${o}:focus, ${o}:active {
    color: var(--vst-color-text-brand-hover);
    background-color: var(--vst-color-bg-tertiary);
  }
  ${o}:active {
    background-color: var(--vst-color-bg-secondary);
  }
`,c=o=>r`
  ${o} {
    appearance: none;
    /* fix the height difference between button/input elements */
    /* Remove inner padding and border in Firefox 4+ on buttons and inputs. */
    font-family: var(--vst-font-family);
    text-decoration: none;
    cursor: pointer;
    line-height: 1.5 !important;
    /* fix the height difference between button/input elements */
    padding: 0.125rem 0.375rem;
    /* prevent interior elements from bubbling up the click event */
    /* except button elements and links */
    transition: opacity var(--transition-default-speed) var(--transition-easing);
    transition-duration: var(--transition-fastest-speed);
    background-color: var(--vst-color-btn-graph-bg);
    border: 1px solid var(--vst-color-btn-graph-border);
    box-shadow: var(--vst-shadow-xs);
    min-inline-size: 5.875rem;
    height: 2.25rem;
    padding: 0 0.75em;
    border-radius: var(--vst-radius);
    font-weight: bold;
    font-size: 0.875rem;
    color: var(--vst-color-text-brand);
    text-transform: uppercase;
  }
  ${o}::-moz-focus-inner, ${o}::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${o} * {
    pointer-events: none;
  }
  ${o} button,
${o} a {
    pointer-events: auto;
  }
  ${o}:active {
    outline: 0;
  }
  ${o}[disabled] {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }
  ${o}:hover, ${o}:active {
    box-shadow: var(--vst-shadow-btn-hover);
    outline: 0;
    color: var(--vst-color-text-brand);
    cursor: pointer;
    background: var(--vst-color-btn-graph-bg-hover);
    border: 1px solid var(--vst-color-btn-graph-border-hover);
  }
  ${o}:active {
    box-shadow: var(--vst-shadow-xs), var(--box-shadow-inset);
  }
`,b=o=>r`
  ${o} {
    appearance: none;
    /* fix the height difference between button/input elements */
    /* Remove inner padding and border in Firefox 4+ on buttons and inputs. */
    font-family: var(--vst-font-family);
    text-decoration: none;
    cursor: pointer;
    line-height: 1.5 !important;
    /* fix the height difference between button/input elements */
    color: var(--vst-color-btn);
    padding: 0.125rem 0.375rem;
    /* prevent interior elements from bubbling up the click event */
    /* except button elements and links */
    display: flex;
    align-items: baseline;
    background: var(--vst-color-btn-graph-bg);
    box-shadow: var(--vst-shadow-xs);
    border: 1px solid var(--vst-color-btn-graph-border);
    border-radius: var(--vst-radius);
    font-size: 0.67em;
    padding: 0.25rem 0.5rem;
    text-overflow: ellipsis;
    max-inline-size: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 1.75rem;
    transition: all 0.3s;
  }

  ${o}::-moz-focus-inner, ${o}::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${o} * {
    pointer-events: none;
  }
  ${o} button,
${o} a {
    pointer-events: auto;
  }
  ${o}:active {
    outline: 0;
  }
  ${o}:hover, ${o}:active {
    box-shadow: var(--vst-shadow-s);
    border: 1px solid var(--vst-color-btn-graph-border-hover);
    background: var(--vst-color-btn-graph-bg-hover);
  }
  ${o}:active {
    box-shadow: var(--vst-shadow-s), var(--box-shadow-inset);
  }
  ${o}[disabled] {
    background-color: transparent;
    box-shadow: none;
    cursor: default;
    border-color: transparent;
  }
  ${o}[disabled]:hover {
    box-shadow: none;
  }
`,i={default:{small:r`
      font-size: var(--vst-font-size-xs);
      background-color: var(--vst-color-brand);
      color: #fff;
    `,medium:r`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      background-color: var(--vst-color-brand);
      color: #fff;
    `},secondary:{small:r`
      font-size: var(--vst-font-size-xs);
      background-color: var(--vst-color-bg-secondary);
      border-color: var(--vst-color-bg-primary);
      color: var(--vst-color-brand);
    `,medium:r`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      background-color: var(--vst-color-bg-secondary);
      border-color: var(--vst-color-bg-primary);
      color: var(--vst-color-brand);
    `},tertiary:{small:r`
      font-size: var(--vst-font-size-xs);
      background-color: transparent;
      border: 0;
      color: var(--vst-color-fg-tertiary);
    `,medium:r`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      background-color: transparent;
      border: 0;
      color: var(--vst-color-fg-tertiary);
    `},error:{small:r`
      font-size: var(--vst-font-size-xs);
      color: var(--vst-color-danger);
      border-color: var(--vst-color-danger);
      background-color: var(--vst-color-bg);
    `,medium:r`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      color: var(--vst-color-danger);
      border-color: var(--vst-color-danger);
      background-color: var(--vst-color-bg);
    `},cancel:{small:r`
      display: inline-block;
      text-align: center;
      text-transform: uppercase;
      overflow: visible;
      font-size: var(--vst-font-size-xs);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background-color: transparent;
      width: 2.25rem;
      height: 2.25rem;
      border: 0;
      border-radius: var(--vst-radius);
    `,medium:r`
      display: inline-block;
      text-align: center;
      text-transform: uppercase;
      overflow: visible;
      font-size: calc(var(--vst-font-size-m) * 0.875);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background-color: transparent;
      width: 2.25rem;
      height: 2.25rem;
      border: 0;
      border-radius: var(--vst-radius);
    `}},s={default:r`
    background-color: var(--vst-color-brand-dark);
  `,secondary:r`
    background-color: var(--vst-color-bg);
    color: var(--vst-color-brand-dark);
  `,tertiary:r`
    color: var(--vst-color-fg-secondary);
    background-color: transparent;
  `,error:r`
    background-color: var(--vst-color-danger);
    color: #fff;
  `,cancel:r`
    background-color: rgba(0, 2, 4, 0.1);
  `},d={default:r`
    box-shadow: var(--box-shadow-inset-darker);
  `,secondary:r`
    background-color: var(--vst-color-bg);
    color: var(--vst-color-brand-dark);
    box-shadow: var(--box-shadow-inset);
  `,tertiary:r`
    color: var(--vst-color-fg-secondary);
    background-color: transparent;
    box-shadow: var(--box-shadow-inset);
  `,error:r`
    background-color: var(--vst-color-danger);
    color: #fff;
    box-shadow: var(--box-shadow-inset-darker);
  `,cancel:r`
    background-color: rgba(0, 2, 4, 0.1);
    box-shadow: var(--box-shadow-inset-darker);
  `},u=(o,n="default",e="medium")=>r`
    ${t(o)}
    ${a(o)}
    ${o} {
      display: inline-block;
      text-align: center;
      text-transform: uppercase;
      overflow: visible;
      border: 1px solid var(--vst-color-brand);
      font-weight: bold;
      border-radius: var(--vst-radius);
      padding: var(--vst-space-xs) 1rem;
      ${i[n][e]}
    }

    ${o}:hover {
      ${s[n]}
    }

    ${o}:active {
      ${d[n]}
    }

    ${n==="cancel"?r`
          ${o} vst-ui-icon {
            --vst-ui-icon-color: var(--vst-color-fg-secondary);
            width: 1.125rem;
            height: 1.125rem;
            display: block;
            margin: 0 auto;
          }
        `:r``}
  `;export{t as a,a as b,l as c,c as d,b as e,u as f};
