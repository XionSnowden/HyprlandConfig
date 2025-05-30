import{a as r}from"./chunk-OTWO5H3C.js";import{b as a}from"./chunk-BVG7RORO.js";var s=a`
  :host {
    display: block;
    font-family: var(--vst-font-family);
    box-sizing: border-box;
    line-height: 1.5;
    color: var(--vst-color-fg-primary);
  }

  :host([hidden]),
  *[hidden] {
    display: none !important;
  }

  :host([capture-target]),
  :host([capture-target='full']) *,
  [capture-target],
  [capture-target='full'] * {
    transform: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    min-block-size: 0; /* this is to fix a stupid chrome bug see: https://code.google.com/p/chromium/issues/detail?id=580196 and https://codereview.chromium.org/1421423005 */
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  /* Always show webkit scrollbars since it's often not clear that we have overflowing areas */
  ::-webkit-scrollbar {
    width: 1.125rem;
    height: 1.125rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--vst-color-bg-primary);
    border-radius: 2rem;
    border: 0.3rem solid transparent;
    background-clip: padding-box;
    min-block-size: 2.5rem;
    min-inline-size: 2.5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--vst-color-fg-tertiary);
    border-width: 0.225rem;
  }

  [visually-hidden],
  input[type='radio'][visually-hidden],
  input[type='checkbox'][visually-hidden] {
    clip: rect(0 0 0 0);
    block-size: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; /* https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe#.z90bhg9ou */
    inline-size: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
  }

  [grow] {
    flex-grow: 1;
  }
`;var i=a`
  /* Reset Styles */
  /*  Remove inner padding and border in Firefox 4+ on buttons and inputs. */
  .btn::-moz-focus-inner,
  .btn::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* prevent interior elements from bubbling up the click event */
  .btn * {
    pointer-events: none;
  }

  /* except button elements and links */
  button,
  a {
    pointer-events: auto;
  }

  .btn:active,
  .btn[active] {
    outline: 0;
  }

  .btn[disabled] {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }

  .btn {
    border: 1px solid var(--vst-color-brand);
    border-radius: var(--vst-radius);
    color: #fff;
    font-family: var(--vst-font-family);
    font-size: var(--vst-font-size-s);
    background-color: var(--vst-color-brand);
    padding: var(--vst-space-xs) var(--vst-space-m);
    white-space: nowrap;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: var(--vst-transition);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    /*  fix the height difference between button/input elements */
    appearance: none;

    /* fix the height difference between button/input elements */
    line-height: var(--vst-line-height-s);
  }

  .btn:focus {
    --vst-outline-offset: 2px;
  }

  .btn:hover,
  .btn:active,
  .btn[active] {
    background-color: var(--hover-bg, var(--vst-color-brand-dark));
    border-color: var(--hover-bg, var(--vst-color-brand-dark));
    box-shadow: var(--vst-shadow-btn-hover);
  }

  /* Sizes */
  .btn[size='xs'] {
    padding: var(--vst-space-2xs) var(--vst-space-s);
    font-size: var(--vst-font-size-xs);
  }

  .btn[size='s'] {
    font-size: var(--vst-font-size-s);
    padding: var(--vst-space-2xs) var(--vst-space-m);
  }

  .btn[size='l'] {
    padding: var(--vst-space-s) var(--vst-space-l);
    font-size: var(--vst-font-size-l);
  }

  /* ---------------------------------------- */

  /* Light Variant */
  .btn[variant='light'] {
    color: #ffffff;
    background-color: var(--vst-color-dark-300);
    border: 2px solid var(--vst-color-bg-light);
    border-radius: var(--vst-radius);
  }

  .btn[variant='light']:focus {
    --vst-outline-offset: 0px;
  }

  .btn[variant='light']:hover,
  .btn[variant='light']:active,
  .btn[variant='light'][active] {
    background-color: var(--hover-bg, var(--vst-color-bg-light));
    color: var(--vst-color-dark-300);
    border-color: var(--vst-color-bg-light);
    border-radius: var(--vst-radius);
  }

  /* ------------------------------------------ */

  /* Outline Variant */
  .btn[variant='outline'] {
    color: var(--vst-color-fg-primary);
    border-color: var(--vst-color-bg-primary);
    background-color: var(--hover-bg, var(--vst-color-bg));
  }

  .btn[variant='outline']:hover,
  .btn[variant='outline']:active,
  .btn[variant='outline'][active] {
    box-shadow: var(--vst-shadow-btn-hover);
    background: var(--vst-color-btn-bg-hover);
  }

  /* ------------------------------------------ */

  /* Brand Outline Variant */
  .btn[variant='brand-outline'] {
    background-color: var(--hover-bg, var(--vst-color-bg));
    border-color: var(--vst-color-brand);
    color: var(--vst-color-brand);
  }

  .btn[variant='brand-outline']:hover,
  .btn[variant='brand-outline']:active,
  .btn[variant='brand-outline'][active] {
    background-color: var(--hover-bg, var(--vst-color-brand-dark));
    border-color: var(--hover-bg, var(--vst-color-brand-dark));
    box-shadow: none;
    color: #fff;
  }

  /* ------------------------------------------ */

  /* Danger Variant */
  .btn[variant='danger'] {
    border: 0;
    background-color: var(--vst-color-danger-bg);
    color: var(--vst-color-btn-danger);
  }

  .btn[variant='danger']:hover,
  .btn[variant='danger']:active,
  .btn[variant='danger'][active] {
    box-shadow: var(--vst-shadow-btn-hover);
    background-color: var(--vst-color-btn-danger-bg-hover);
    color: var(--vst-color-btn-danger-hover);
  }

  /* ------------------------------------------ */

  /* Text Variant */
  .btn[variant='text'] {
    --color: var(--vst-color-fg-tertiary);
    --hover-color: var(--vst-color-fg-primary);
    --hover-bg: var(--vst-color-btn-text-bg-hover);
    color: var(--color);
    text-align: left;
    border: 0;
    border-radius: var(--vst-radius);
    background-color: transparent;
  }

  .btn[variant='text']:hover,
  .btn[variant='text']:focus,
  .btn[variant='text']:active,
  .btn[variant='text'][active] {
    color: var(--hover-color);
    background: var(--hover-bg);
    box-shadow: none;
  }

  .btn[variant='text'] vst-ui-icon {
    --vst-ui-icon-color: var(--color);
  }

  .btn[variant='text'][color='warning'] {
    --color: var(--vst-color-warning);
    --hover-color: var(--vst-color-warning);
    --hover-bg: var(--vst-color-warning-bg);
  }

  .btn[variant='text'][color='info'] {
    --color: var(--vst-color-info);
    --hover-color: var(--vst-color-info);
    --hover-bg: var(--vst-color-info-bg);
  }

  .btn[variant='text'][color='success'] {
    --color: var(--vst-color-success);
    --hover-color: var(--vst-color-success-dark);
    --hover-bg: var(--vst-color-success-bg);
  }

  .btn[variant='text'][color='danger'] {
    --color: var(--vst-color-danger);
    --hover-color: var(--vst-color-danger-dark);
    --hover-bg: var(--vst-color-danger-bg);
  }

  .btn[variant='text'][color='brand'] {
    --color: var(--vst-color-brand);
    --hover-color: var(--vst-color-brand-dark);
    --hover-bg: var(--vst-color-brand-bg);
  }

  /* ------------------------------------------ */

  /* Link Variant */

  .btn[variant='link'] {
    --color: var(--vst-color-brand);
    --hover-color: var(--vst-color-fg-primary);
    background-color: transparent;
    border-radius: var(--vst-radius);
    border: 0;
    color: var(--color);
    font-weight: 400;
    text-align: left;
  }

  .btn[variant='link']:hover,
  .btn[variant='link']:focus,
  .btn[variant='link']:active,
  .btn[variant='link'][active] {
    box-shadow: none;
    color: var(--hover-color);
  }

  .btn[variant='link'] vst-ui-icon {
    --vst-ui-icon-color: var(--color);
  }

  .btn[variant='link'][color='warning'] {
    --color: var(--vst-color-warning);
    --hover-color: var(--vst-color-warning);
  }

  .btn[variant='link'][color='info'] {
    --color: var(--vst-color-info);
    --hover-color: var(--vst-color-info);
  }

  .btn[variant='link'][color='success'] {
    --color: var(--vst-color-success);
    --hover-color: var(--vst-color-success-dark);
  }

  .btn[variant='link'][color='danger'] {
    --color: var(--vst-color-danger);
    --hover-color: var(--vst-color-danger-dark);
  }

  .btn[variant='link'][color='brand'] {
    --color: var(--vst-color-brand);
    --hover-color: var(--vst-color-brand-dark);
  }

  /* ------------------------------------------ */

  /* Icon Variant */
  .btn[variant='icon'] {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: transparent;
    padding: var(--vst-space-2xs);
    border: 1px solid transparent;
    --hover-bg: var(--vst-color-icon-hover);
  }

  .btn[variant='icon']:focus {
    --vst-outline-offset: 0px;
  }

  .btn[variant='icon']:hover,
  .btn[variant='icon']:active,
  .btn[variant='icon'][active] {
    background: var(--hover-bg, var(--vst-color-bg-tertiary));
    box-shadow: none;
  }

  .btn[variant='icon'] vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-fg-primary);
    display: block;
  }

  .btn[variant='icon'] vst-ui-icon:not([size]) {
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
  }

  .btn[variant='icon'][color='brand'] vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-brand);
  }

  .btn[variant='icon'][size='xs'] {
    padding: 0;
  }

  .btn[variant='icon'][size='s'] {
    padding: var(--vst-space-2xs);
  }

  .btn[variant='icon'][size='xs']:hover,
  .btn[variant='icon'][size='xs']:active,
  .btn[variant='icon'][size='xs'][active] {
    background-color: transparent;
  }

  .btn[variant='icon'][size='l'] {
    padding: var(--vst-space-xs);
  }

  .btn[variant='icon'][size='xs'] vst-ui-icon:not([size]) {
    inline-size: var(--vst-icon-size-xs);
    block-size: var(--vst-icon-size-xs);
  }

  .btn[variant='icon'][size='s'] vst-ui-icon:not([size]) {
    inline-size: var(--vst-icon-size-s);
    block-size: var(--vst-icon-size-s);
  }

  .btn[variant='icon'][size='l'] vst-ui-icon:not([size]) {
    inline-size: var(--vst-icon-size-l);
    block-size: var(--vst-icon-size-l);
  }

  /* ------------------------------------------ */

  /* Toolbar Variant */
  .btn[variant='toolbar'] {
    position: relative;
    background-color: transparent;
    font-size: var(--vst-font-size-xs);
    font-weight: bold;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--vst-space-2xs);
    color: var(--color, var(--vst-color-fg-primary));
  }

  .btn[variant='toolbar']:focus {
    --vst-outline-offset: 0px;
  }

  .btn[variant='toolbar']:hover,
  .btn[variant='toolbar'][active] {
    background-color: var(--hover-bg, var(--vst-color-bg-tertiary));
    box-shadow: var(--vst-shadow-xs);
    border-color: var(--hover-bg, var(--vst-color-bg-secondary));
  }

  .btn[variant='toolbar'] vst-ui-icon {
    --vst-ui-icon-color: var(--color, var(--vst-color-fg-primary));
    display: block;
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
  }

  /* Graph Actions Buttons */
  .btn[variant='graph'] {
    position: relative;
    background-color: var(--vst-color-btn-graph-bg);
    font-size: var(--vst-font-size-xs);
    font-weight: bold;
    color: var(--color, var(--vst-color-fg-primary));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--vst-space-2xs);
    border: 1px solid var(--vst-color-btn-graph-border);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .btn[variant='graph']:hover,
  .btn[variant='graph'][active] {
    box-shadow: var(--vst-shadow-s);
    background: var(--vst-color-btn-graph-bg-hover);
    border-color: var(--vst-color-btn-graph-border-hover);
  }

  .btn[variant='graph'] vst-ui-icon {
    --vst-ui-icon-color: var(--color, var(--vst-color-fg-primary));
    display: block;
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
  }

  .action-btns {
    padding: var(--vst-space-s) var(--vst-space-m);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid var(--vst-color-bg-secondary);
  }

  /* TODO: Other btn variants yet to be dealt with:
    1. Media Buttons
    2. VA Menu Buttons - will we ever use those buttons in other apps?
    3. Bottombar Buttons - Is this used in anything other than ga?
    4. Toolbar Collect Buttons
    5. Help or Info Buttons
  */
`;var n=a`
  :host,
  html {
    --vst-outline-color: var(--vst-color-brand);
    --vst-outer-outline-offset: 2px;
    --vst-outline-offset: 2px;
    --vst-outline-offset-color: var(--vst-color-bg);
  }
  /* TODO: Until all platforms support :focus-visible, we need to use this workaround, which sets the focus style for platforms that don't support :focus-visible and then unsets the styles to only show when :focus-visible for platforms that support it. */
  /* TODO: apply focus style to elements that didn't get it automatically */
  /* TODO: disable tabindex on elements that don't need focus */
  /* TODO: fix safari focus issues */
  /* TODO: add border radius to some elements that need it to show the rounded focus style*/
  input:focus,
  button:focus,
  select:focus,
  textarea:focus,
  summary:focus,
  a:focus,
  [tabindex='0']:focus {
    /* Outline Style */
    --vst-outline: 0px 0px 0px var(--vst-outline-offset) var(--vst-outline-offset-color),
      0px 0px 0px calc(var(--vst-outline-offset) + var(--vst-outer-outline-offset))
        var(--vst-dark-outline-color, var(--vst-outline-color));
    --vst-shadow-btn-hover: var(--vst-outline);
    --vst-shadow-xs: var(--vst-outline);
    --vst-shadow-s: var(--vst-outline);
    --vst-shadow-m: var(--vst-outline);
    --vst-shadow-l: var(--vst-outline);
    --vst-shadow-xl: var(--vst-outline);
    --box-shadow-default-rotated: var(--vst-outline);
    --box-shadow-inset: var(--vst-outline);
    --box-shadow-inset-darker: var(--vst-outline);
    box-shadow: var(--vst-outline);
    outline: none;
  }

  input[type='radio']:focus-visible,
  input[type='checkbox']:focus-visible {
    --vst-outline-offset: 0px;
  }

  input[type='radio']:focus-visible::before,
  input[type='checkbox']:focus-visible::before {
    border: none;
  }

  :focus:not(:focus-visible),
  :focus[disabled] {
    outline: none;
    --vst-outline: none;
  }

  [background='brand'] *:focus {
    --vst-outline-offset-color: var(--vst-color-brand);
    --vst-outline-color: var(--vst-color-brand-100);
  }

  [background='dark'] *:focus {
    --vst-outline-offset-color: var(--vst-color-dark-300);
    --vst-outline-color: var(--vst-color-brand-100);
  }
`;var e=a`
  .stack {
    display: flex;
    flex-direction: column;
    padding: var(--inset);
    align-items: var(--justify, flex-start);
    inline-size: var(--inline-size, 100%);
  }

  .stack > * {
    flex-shrink: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .stack > * + * {
    margin-block-start: var(--space, var(--gap));
  }

  /* to create a top section, a gap and a bottom section in a stack, add a split-below attribute to the final element in the top section */
  .stack > [split-below] {
    margin-block-end: auto;
  }

  .stack[space] * {
    --space: initial;
  }
`;var o=a`
  .inline {
    padding: var(--inset);
  }

  .inline > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: var(--justify, flex-start);
    align-items: var(--align, center);
    margin-block-start: calc(var(--gap) * -1);
    margin-inline-start: calc(var(--gap) * -1);
    --inset: initial;
  }

  .inline > div > * {
    margin-block-start: var(--gap);
    margin-inline-start: var(--gap);
    --justify: initial;
    --align: initial;
  }

  .inline > div > *:not([gap]) > * {
    --gap: initial;
  }
`;var l=a`
  .switcher {
    padding: var(--inset);
    block-size: 100%;
    inline-size: 100%;
  }

  .switcher > div {
    display: flex;
    flex-wrap: wrap;
    inline-size: calc(100% + var(--gap));
    block-size: calc(100% + var(--gap));
    margin-block-start: calc(var(--gap) * -1);
    margin-inline-start: calc(var(--gap) * -1);
  }

  .switcher > div > * {
    flex-grow: var(--grow, 1);
    flex-basis: calc((var(--collapse-below) - (100% - var(--gap))) * 999);
    margin-block-start: var(--gap);
    margin-inline-start: var(--gap);
  }

  .switcher > div > :nth-last-child(n + 5),
  .switcher > div > :nth-last-child(n + 5) ~ * {
    flex-basis: 100%;
  }

  [collapse-below='mobile-s'] {
    --collapse-below: 20em;
  }

  [collapse-below='mobile'] {
    --collapse-below: 30em;
  }

  [collapse-below='tablet'] {
    --collapse-below: 48em;
  }

  [collapse-below='desktop'] {
    --collapse-below: 64em;
  }

  [collapse-below='desktop-l'] {
    --collapse-below: 90em;
  }
`;var v=a`
  .sidebar {
    inline-size: 100%;
    block-size: 100%;
    padding: var(--inset);
  }

  .sidebar > div {
    display: flex;
    flex-wrap: wrap;
    inline-size: calc(100% + var(--gap));
    block-size: calc(100% + var(--gap));
    margin-block-start: calc(var(--gap) * -1);
    margin-inline-start: calc(var(--gap) * -1);
  }

  .sidebar > div > * {
    margin-block-start: var(--gap);
    margin-inline-start: var(--gap);
  }

  .sidebar > div > :not([fixed]) {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: calc(var(--min, 50%) - var(--gap));
  }

  .sidebar > div > [fixed] {
    flex-grow: 1;
    flex-basis: var(--min);
  }
`;var c=a`
  .reel {
    display: flex;
    overflow-x: auto;
    padding: var(--vst-space-3xs);
    padding-block-start: var(--inset, var(--vst-space-3xs));
    padding-block-end: var(--inset, var(--vst-space-3xs));
  }

  .reel > * + * {
    margin-inline-start: var(--gap);
  }

  .reel::after {
    content: '';
    flex-basis: var(--gap);
  }
`;var m=a`
  .grid {
    inline-size: 100%;
  }

  .grid > div {
    display: grid;
    inline-size: 100%;
    grid-gap: var(--gap);
    padding: var(--inset);
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min, 250px), 100%), 1fr));
  }

  .grid[gap] > div > * {
    --gap: initial;
  }
`;var g=a`
  .center {
    box-sizing: content-box;
    max-width: var(--max, 100%);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .center > .stack {
    --justify: center;
  }
`;var p=a`
  .masonry {
    inline-size: 100%;
  }

  .masonry > div {
    inline-size: 100%;
    column-width: var(--min, 125px);
    column-gap: var(--gap);
    padding: var(--inset);
  }

  .masonry > div > * {
    break-inside: avoid;
  }

  .masonry > div > * + * {
    margin-block-start: var(--gap);
  }
`;var x=a`
  [inset='0'] {
    --inset: 0;
  }
  [inset='3xs'] {
    --inset: var(--vst-space-3xs);
  }

  [inset='2xs'] {
    --inset: var(--vst-space-2xs);
  }

  [inset='xs'] {
    --inset: var(--vst-space-xs);
  }

  [inset='s'] {
    --inset: var(--vst-space-s);
  }

  [inset='m'] {
    --inset: var(--vst-space-m);
  }

  [inset='l'] {
    --inset: var(--vst-space-l);
  }

  [inset='xl'] {
    --inset: var(--vst-space-xl);
  }

  [inset='2xl'] {
    --inset: var(--vst-space-2xl);
  }

  [inset='3xl'] {
    --inset: var(--vst-space-3xl);
  }
`;var b=a`
  [gap='0'] > * {
    --gap: 0;
  }

  [gap='3xs'] > * {
    --gap: var(--vst-space-3xs);
  }

  [gap='2xs'] > * {
    --gap: var(--vst-space-2xs);
  }

  [gap='xs'] > * {
    --gap: var(--vst-space-xs);
  }

  [gap='s'] > * {
    --gap: var(--vst-space-s);
  }

  [gap='m'] > * {
    --gap: var(--vst-space-m);
  }

  [gap='l'] > * {
    --gap: var(--vst-space-l);
  }

  [gap='xl'] > * {
    --gap: var(--vst-space-xl);
  }

  [gap='2xl'] > * {
    --gap: var(--vst-space-2xl);
  }

  [gap='3xl'] > * {
    --gap: var(--vst-space-3xl);
  }
`;var d=a`
  [space='3xs'] {
    --space: var(--vst-space-3xs);
  }

  [space='2xs'] {
    --space: var(--vst-space-2xs);
  }

  [space='xs'] {
    --space: var(--vst-space-xs);
  }

  [space='s'] {
    --space: var(--vst-space-s);
  }

  [space='m'] {
    --space: var(--vst-space-m);
  }

  [space='l'] {
    --space: var(--vst-space-l);
  }

  [space='xl'] {
    --space: var(--vst-space-xl);
  }

  [space='2xl'] {
    --space: var(--vst-space-2xl);
  }

  [space='3xl'] {
    --space: var(--vst-space-3xl);
  }
`;var t=a`
  /* Margin */
  [margin='0'] {
    margin: 0;
  }

  [margin='auto'] {
    margin: auto;
  }

  [margin='3xs'] {
    margin: var(--vst-space-3xs);
  }

  [margin='2xs'] {
    margin: var(--vst-space-2xs);
  }

  [margin='xs'] {
    margin: var(--vst-space-xs);
  }

  [margin='s'] {
    margin: var(--vst-space-s);
  }

  [margin='m'] {
    margin: var(--vst-space-m);
  }

  [margin='l'] {
    margin: var(--vst-space-l);
  }

  [margin='xl'] {
    margin: var(--vst-space-xl);
  }

  [margin='2xl'] {
    margin: var(--vst-space-2xl);
  }

  [margin='3xl'] {
    margin: var(--vst-space-3xl);
  }

  /* Margin Block (Y, Top and Bottom) */
  [margin~='block-0'] {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  [margin~='block-auto'] {
    margin-block-start: auto;
    margin-block-end: auto;
  }

  [margin~='block-3xs'] {
    margin-block-start: var(--vst-space-3xs);
    margin-block-end: var(--vst-space-3xs);
  }

  [margin~='block-2xs'] {
    margin-block-start: var(--vst-space-2xs);
    margin-block-end: var(--vst-space-2xs);
  }

  [margin~='block-xs'] {
    margin-block-start: var(--vst-space-xs);
    margin-block-end: var(--vst-space-xs);
  }

  [margin~='block-s'] {
    margin-block-start: var(--vst-space-s);
    margin-block-end: var(--vst-space-s);
  }

  [margin~='block-m'] {
    margin-block-start: var(--vst-space-m);
    margin-block-end: var(--vst-space-m);
  }

  [margin~='block-l'] {
    margin-block-start: var(--vst-space-l);
    margin-block-end: var(--vst-space-l);
  }

  [margin~='block-xl'] {
    margin-block-start: var(--vst-space-xl);
    margin-block-end: var(--vst-space-xl);
  }

  [margin~='block-2xl'] {
    margin-block-start: var(--vst-space-2xl);
    margin-block-end: var(--vst-space-2xl);
  }

  [margin~='block-3xl'] {
    margin-block-start: var(--vst-space-3xl);
    margin-block-end: var(--vst-space-3xl);
  }

  /* Margin Inline (X, Left and Right) */
  [margin~='inline-0'] {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  [margin~='inline-auto'] {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }

  [margin~='inline-3xs'] {
    margin-inline-start: var(--vst-space-3xs);
    margin-inline-end: var(--vst-space-3xs);
  }

  [margin~='inline-2xs'] {
    margin-inline-start: var(--vst-space-2xs);
    margin-inline-end: var(--vst-space-2xs);
  }

  [margin~='inline-xs'] {
    margin-inline-start: var(--vst-space-xs);
    margin-inline-end: var(--vst-space-xs);
  }

  [margin~='inline-s'] {
    margin-inline-start: var(--vst-space-s);
    margin-inline-end: var(--vst-space-s);
  }

  [margin~='inline-m'] {
    margin-inline-start: var(--vst-space-m);
    margin-inline-end: var(--vst-space-m);
  }

  [margin~='inline-l'] {
    margin-inline-start: var(--vst-space-l);
    margin-inline-end: var(--vst-space-l);
  }

  [margin~='inline-xl'] {
    margin-inline-start: var(--vst-space-xl);
    margin-inline-end: var(--vst-space-xl);
  }

  [margin~='inline-2xl'] {
    margin-inline-start: var(--vst-space-2xl);
    margin-inline-end: var(--vst-space-2xl);
  }

  [margin~='inline-3xl'] {
    margin-inline-start: var(--vst-space-3xl);
    margin-inline-end: var(--vst-space-3xl);
  }

  /* Margin Block Start (Top) */
  [margin~='block-start-0'] {
    margin-block-start: 0;
  }

  [margin~='block-start-auto'] {
    margin-block-start: auto;
  }

  [margin~='block-start-3xs'] {
    margin-block-start: var(--vst-space-3xs);
  }

  [margin~='block-start-2xs'] {
    margin-block-start: var(--vst-space-2xs);
  }

  [margin~='block-start-xs'] {
    margin-block-start: var(--vst-space-xs);
  }

  [margin~='block-start-s'] {
    margin-block-start: var(--vst-space-s);
  }

  [margin~='block-start-m'] {
    margin-block-start: var(--vst-space-m);
  }

  [margin~='block-start-l'] {
    margin-block-start: var(--vst-space-l);
  }

  [margin~='block-start-xl'] {
    margin-block-start: var(--vst-space-xl);
  }

  [margin~='block-start-2xl'] {
    margin-block-start: var(--vst-space-2xl);
  }

  [margin~='block-start-3xl'] {
    margin-block-start: var(--vst-space-3xl);
  }

  /* Margin Block End (Bottom) */
  [margin~='block-end-0'] {
    margin-block-end: 0;
  }

  [margin~='block-end-auto'] {
    margin-block-end: auto;
  }

  [margin~='block-end-3xs'] {
    margin-block-end: var(--vst-space-3xs);
  }

  [margin~='block-end-2xs'] {
    margin-block-end: var(--vst-space-2xs);
  }

  [margin~='block-end-xs'] {
    margin-block-end: var(--vst-space-xs);
  }

  [margin~='block-end-s'] {
    margin-block-end: var(--vst-space-s);
  }

  [margin~='block-end-m'] {
    margin-block-end: var(--vst-space-m);
  }

  [margin~='block-end-l'] {
    margin-block-end: var(--vst-space-l);
  }

  [margin~='block-end-xl'] {
    margin-block-end: var(--vst-space-xl);
  }

  [margin~='block-end-2xl'] {
    margin-block-end: var(--vst-space-2xl);
  }

  [margin~='block-end-3xl'] {
    margin-block-end: var(--vst-space-3xl);
  }

  /* Margin Inline Start (Left) */
  [margin~='inline-start-0'] {
    margin-inline-start: 0;
  }

  [margin~='inline-start-auto'] {
    margin-inline-start: auto;
  }

  [margin~='inline-start-3xs'] {
    margin-inline-start: var(--vst-space-3xs);
  }

  [margin~='inline-start-2xs'] {
    margin-inline-start: var(--vst-space-2xs);
  }

  [margin~='inline-start-xs'] {
    margin-inline-start: var(--vst-space-xs);
  }

  [margin~='inline-start-s'] {
    margin-inline-start: var(--vst-space-s);
  }

  [margin~='inline-start-m'] {
    margin-inline-start: var(--vst-space-m);
  }

  [margin~='inline-start-l'] {
    margin-inline-start: var(--vst-space-l);
  }

  [margin~='inline-start-xl'] {
    margin-inline-start: var(--vst-space-xl);
  }

  [margin~='inline-start-2xl'] {
    margin-inline-start: var(--vst-space-2xl);
  }

  [margin~='inline-start-3xl'] {
    margin-inline-start: var(--vst-space-3xl);
  }

  /* Margin Inline End (Right) */
  [margin~='inline-end-0'] {
    margin-inline-end: 0;
  }

  [margin~='inline-end-auto'] {
    margin-inline-end: auto;
  }

  [margin~='inline-end-3xs'] {
    margin-inline-end: var(--vst-space-3xs);
  }

  [margin~='inline-end-2xs'] {
    margin-inline-end: var(--vst-space-2xs);
  }

  [margin~='inline-end-xs'] {
    margin-inline-end: var(--vst-space-xs);
  }

  [margin~='inline-end-s'] {
    margin-inline-end: var(--vst-space-s);
  }

  [margin~='inline-end-m'] {
    margin-inline-end: var(--vst-space-m);
  }

  [margin~='inline-end-l'] {
    margin-inline-end: var(--vst-space-l);
  }

  [margin~='inline-end-xl'] {
    margin-inline-end: var(--vst-space-xl);
  }

  [margin~='inline-end-2xl'] {
    margin-inline-end: var(--vst-space-2xl);
  }

  [margin~='inline-end-3xl'] {
    margin-inline-end: var(--vst-space-3xl);
  }

  ${r("xs",a`
      /* xs up Margin */
      [margin~='xs-0'] {
        margin: 0;
      }

      [margin~='xs-auto'] {
        margin-left: auto;
      }

      [margin~='xs-3xs'] {
        margin-left: var(--vst-space-3xs);
      }

      [margin~='xs-2xs'] {
        margin-left: var(--vst-space-2xs);
      }

      [margin~='xs-xs'] {
        margin-left: var(--vst-space-xs);
      }

      [margin~='xs-s'] {
        margin-left: var(--vst-space-s);
      }

      [margin~='xs-m'] {
        margin-left: var(--vst-space-m);
      }

      [margin~='xs-l'] {
        margin-left: var(--vst-space-l);
      }

      [margin~='xs-xl'] {
        margin-left: var(--vst-space-xl);
      }

      [margin~='xs-2xl'] {
        margin-left: var(--vst-space-2xl);
      }

      [margin~='xs-3xl'] {
        margin-left: var(--vst-space-3xl);
      }

      /* s up Margin X */
      [margin~='xs-inline-0'] {
        margin-left: 0;
        margin-right: 0;
      }

      [margin~='xs-inline-auto'] {
        margin-left: auto;
        margin-right: auto;
      }

      [margin~='xs-inline-3xs'] {
        margin-left: var(--vst-space-3xs);
        margin-right: var(--vst-space-3xs);
      }

      [margin~='xs-inline-2xs'] {
        margin-left: var(--vst-space-2xs);
        margin-right: var(--vst-space-2xs);
      }

      [margin~='xs-inline-xs'] {
        margin-left: var(--vst-space-xs);
        margin-right: var(--vst-space-xs);
      }

      [margin~='xs-inline-s'] {
        margin-left: var(--vst-space-s);
        margin-right: var(--vst-space-s);
      }

      [margin~='xs-inline-m'] {
        margin-left: var(--vst-space-m);
        margin-right: var(--vst-space-m);
      }

      [margin~='xs-inline-l'] {
        margin-left: var(--vst-space-l);
        margin-right: var(--vst-space-l);
      }

      [margin~='xs-inline-xl'] {
        margin-left: var(--vst-space-xl);
        margin-right: var(--vst-space-xl);
      }

      [margin~='xs-inline-2xl'] {
        margin-left: var(--vst-space-2xl);
        margin-right: var(--vst-space-2xl);
      }

      [margin~='xs-inline-3xl'] {
        margin-left: var(--vst-space-3xl);
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Y */
      [margin~='xs-block-0'] {
        margin-top: 0;
        margin-bottom: 0;
      }

      [margin~='xs-block-auto'] {
        margin-top: auto;
        margin-bottom: auto;
      }

      [margin~='xs-block-3xs'] {
        margin-top: var(--vst-space-3xs);
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='xs-block-2xs'] {
        margin-top: var(--vst-space-2xs);
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='xs-block-xs'] {
        margin-top: var(--vst-space-xs);
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='xs-block-s'] {
        margin-top: var(--vst-space-s);
        margin-bottom: var(--vst-space-s);
      }

      [margin~='xs-block-m'] {
        margin-top: var(--vst-space-m);
        margin-bottom: var(--vst-space-m);
      }

      [margin~='xs-block-l'] {
        margin-top: var(--vst-space-l);
        margin-bottom: var(--vst-space-l);
      }

      [margin~='xs-block-xl'] {
        margin-top: var(--vst-space-xl);
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='xs-block-2xl'] {
        margin-top: var(--vst-space-2xl);
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='xs-block-3xl'] {
        margin-top: var(--vst-space-3xl);
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Top */
      [margin~='xs-block-start-0'] {
        margin-top: 0;
      }

      [margin~='xs-block-start-auto'] {
        margin-top: auto;
      }

      [margin~='xs-block-start-3xs'] {
        margin-top: var(--vst-space-3xs);
      }

      [margin~='xs-block-start-2xs'] {
        margin-top: var(--vst-space-2xs);
      }

      [margin~='xs-block-start-xs'] {
        margin-top: var(--vst-space-xs);
      }

      [margin~='xs-block-start-s'] {
        margin-top: var(--vst-space-s);
      }

      [margin~='xs-block-start-m'] {
        margin-top: var(--vst-space-m);
      }

      [margin~='xs-block-start-l'] {
        margin-top: var(--vst-space-l);
      }

      [margin~='xs-block-start-xl'] {
        margin-top: var(--vst-space-xl);
      }

      [margin~='xs-block-start-2xl'] {
        margin-top: var(--vst-space-2xl);
      }

      [margin~='xs-block-start-3xl'] {
        margin-top: var(--vst-space-3xl);
      }

      /* s up Margin Right */
      [margin~='xs-inline-end-0'] {
        margin-right: 0;
      }

      [margin~='xs-inline-end-auto'] {
        margin-right: auto;
      }

      [margin~='xs-inline-end-3xs'] {
        margin-right: var(--vst-space-3xs);
      }

      [margin~='xs-inline-end-2xs'] {
        margin-right: var(--vst-space-2xs);
      }

      [margin~='xs-inline-end-xs'] {
        margin-right: var(--vst-space-xs);
      }

      [margin~='xs-inline-end-s'] {
        margin-right: var(--vst-space-s);
      }

      [margin~='xs-inline-end-m'] {
        margin-right: var(--vst-space-m);
      }

      [margin~='xs-inline-end-l'] {
        margin-right: var(--vst-space-l);
      }

      [margin~='xs-inline-end-xl'] {
        margin-right: var(--vst-space-xl);
      }

      [margin~='xs-inline-end-2xl'] {
        margin-right: var(--vst-space-2xl);
      }

      [margin~='xs-inline-end-3xl'] {
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Bottom */
      [margin~='xs-block-end-0'] {
        margin-bottom: 0;
      }

      [margin~='xs-block-end-auto'] {
        margin-bottom: auto;
      }

      [margin~='xs-block-end-3xs'] {
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='xs-block-end-2xs'] {
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='xs-block-end-xs'] {
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='xs-block-end-s'] {
        margin-bottom: var(--vst-space-s);
      }

      [margin~='xs-block-end-m'] {
        margin-bottom: var(--vst-space-m);
      }

      [margin~='xs-block-end-l'] {
        margin-bottom: var(--vst-space-l);
      }

      [margin~='xs-block-end-xl'] {
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='xs-block-end-2xl'] {
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='xs-block-end-3xl'] {
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Left */
      [margin~='xs-inline-start-0'] {
        margin-left: 0;
      }

      [margin~='xs-inline-start-auto'] {
        margin-left: auto;
      }

      [margin~='xs-inline-start-3xs'] {
        margin-left: var(--vst-space-3xs);
      }

      [margin~='xs-inline-start-2xs'] {
        margin-left: var(--vst-space-2xs);
      }

      [margin~='xs-inline-start-xs'] {
        margin-left: var(--vst-space-xs);
      }

      [margin~='xs-inline-start-s'] {
        margin-left: var(--vst-space-s);
      }

      [margin~='xs-inline-start-m'] {
        margin-left: var(--vst-space-m);
      }

      [margin~='xs-inline-start-l'] {
        margin-left: var(--vst-space-l);
      }

      [margin~='xs-inline-start-xl'] {
        margin-left: var(--vst-space-xl);
      }

      [margin~='xs-inline-start-2xl'] {
        margin-left: var(--vst-space-2xl);
      }

      [margin~='xs-inline-start-3xl'] {
        margin-left: var(--vst-space-3xl);
      }
    `)}

  ${r("s",a`
      /* s up Margin */
      [margin~='s-0'] {
        margin: 0;
      }

      [margin~='s-auto'] {
        margin: auto;
      }

      [margin~='s-3xs'] {
        margin: var(--vst-space-3xs);
      }

      [margin~='s-2xs'] {
        margin: var(--vst-space-2xs);
      }

      [margin~='s-xs'] {
        margin: var(--vst-space-xs);
      }

      [margin~='s-s'] {
        margin: var(--vst-space-s);
      }

      [margin~='s-m'] {
        margin: var(--vst-space-m);
      }

      [margin~='s-l'] {
        margin: var(--vst-space-l);
      }

      [margin~='s-xl'] {
        margin: var(--vst-space-xl);
      }

      [margin~='s-2xl'] {
        margin: var(--vst-space-2xl);
      }

      [margin~='s-3xl'] {
        margin: var(--vst-space-3xl);
      }

      /* s up Margin X */
      [margin~='s-inline-0'] {
        margin-left: 0;
        margin-right: 0;
      }

      [margin~='s-inline-auto'] {
        margin-left: auto;
        margin-right: auto;
      }

      [margin~='s-inline-3xs'] {
        margin-left: var(--vst-space-3xs);
        margin-right: var(--vst-space-3xs);
      }

      [margin~='s-inline-2xs'] {
        margin-left: var(--vst-space-2xs);
        margin-right: var(--vst-space-2xs);
      }

      [margin~='s-inline-xs'] {
        margin-left: var(--vst-space-xs);
        margin-right: var(--vst-space-xs);
      }

      [margin~='s-inline-s'] {
        margin-left: var(--vst-space-s);
        margin-right: var(--vst-space-s);
      }

      [margin~='s-inline-m'] {
        margin-left: var(--vst-space-m);
        margin-right: var(--vst-space-m);
      }

      [margin~='s-inline-l'] {
        margin-left: var(--vst-space-l);
        margin-right: var(--vst-space-l);
      }

      [margin~='s-inline-xl'] {
        margin-left: var(--vst-space-xl);
        margin-right: var(--vst-space-xl);
      }

      [margin~='s-inline-2xl'] {
        margin-left: var(--vst-space-2xl);
        margin-right: var(--vst-space-2xl);
      }

      [margin~='s-inline-3xl'] {
        margin-left: var(--vst-space-3xl);
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Y */
      [margin~='s-block-0'] {
        margin-top: 0;
        margin-bottom: 0;
      }

      [margin~='s-block-auto'] {
        margin-top: auto;
        margin-bottom: auto;
      }

      [margin~='s-block-3xs'] {
        margin-top: var(--vst-space-3xs);
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='s-block-2xs'] {
        margin-top: var(--vst-space-2xs);
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='s-block-xs'] {
        margin-top: var(--vst-space-xs);
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='s-block-s'] {
        margin-top: var(--vst-space-s);
        margin-bottom: var(--vst-space-s);
      }

      [margin~='s-block-m'] {
        margin-top: var(--vst-space-m);
        margin-bottom: var(--vst-space-m);
      }

      [margin~='s-block-l'] {
        margin-top: var(--vst-space-l);
        margin-bottom: var(--vst-space-l);
      }

      [margin~='s-block-xl'] {
        margin-top: var(--vst-space-xl);
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='s-block-2xl'] {
        margin-top: var(--vst-space-2xl);
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='s-block-3xl'] {
        margin-top: var(--vst-space-3xl);
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Top */
      [margin~='s-block-start-0'] {
        margin-top: 0;
      }

      [margin~='s-block-start-auto'] {
        margin-top: auto;
      }

      [margin~='s-block-start-3xs'] {
        margin-top: var(--vst-space-3xs);
      }

      [margin~='s-block-start-2xs'] {
        margin-top: var(--vst-space-2xs);
      }

      [margin~='s-block-start-xs'] {
        margin-top: var(--vst-space-xs);
      }

      [margin~='s-block-start-s'] {
        margin-top: var(--vst-space-s);
      }

      [margin~='s-block-start-m'] {
        margin-top: var(--vst-space-m);
      }

      [margin~='s-block-start-l'] {
        margin-top: var(--vst-space-l);
      }

      [margin~='s-block-start-xl'] {
        margin-top: var(--vst-space-xl);
      }

      [margin~='s-block-start-2xl'] {
        margin-top: var(--vst-space-2xl);
      }

      [margin~='s-block-start-3xl'] {
        margin-top: var(--vst-space-3xl);
      }

      /* s up Margin Right */
      [margin~='s-inline-end-0'] {
        margin-right: 0;
      }

      [margin~='s-inline-end-auto'] {
        margin-right: auto;
      }

      [margin~='s-inline-end-3xs'] {
        margin-right: var(--vst-space-3xs);
      }

      [margin~='s-inline-end-2xs'] {
        margin-right: var(--vst-space-2xs);
      }

      [margin~='s-inline-end-xs'] {
        margin-right: var(--vst-space-xs);
      }

      [margin~='s-inline-end-s'] {
        margin-right: var(--vst-space-s);
      }

      [margin~='s-inline-end-m'] {
        margin-right: var(--vst-space-m);
      }

      [margin~='s-inline-end-l'] {
        margin-right: var(--vst-space-l);
      }

      [margin~='s-inline-end-xl'] {
        margin-right: var(--vst-space-xl);
      }

      [margin~='s-inline-end-2xl'] {
        margin-right: var(--vst-space-2xl);
      }

      [margin~='s-inline-end-3xl'] {
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Bottom */
      [margin~='s-block-end-0'] {
        margin-bottom: 0;
      }

      [margin~='s-block-end-auto'] {
        margin-bottom: auto;
      }

      [margin~='s-block-end-3xs'] {
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='s-block-end-2xs'] {
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='s-block-end-xs'] {
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='s-block-end-s'] {
        margin-bottom: var(--vst-space-s);
      }

      [margin~='s-block-end-m'] {
        margin-bottom: var(--vst-space-m);
      }

      [margin~='s-block-end-l'] {
        margin-bottom: var(--vst-space-l);
      }

      [margin~='s-block-end-xl'] {
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='s-block-end-2xl'] {
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='s-block-end-3xl'] {
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Left */
      [margin~='s-inline-start-0'] {
        margin-left: 0;
      }

      [margin~='s-inline-start-auto'] {
        margin-left: auto;
      }

      [margin~='s-inline-start-3xs'] {
        margin-left: var(--vst-space-3xs);
      }

      [margin~='s-inline-start-2xs'] {
        margin-left: var(--vst-space-2xs);
      }

      [margin~='s-inline-start-xs'] {
        margin-left: var(--vst-space-xs);
      }

      [margin~='s-inline-start-s'] {
        margin-left: var(--vst-space-s);
      }

      [margin~='s-inline-start-m'] {
        margin-left: var(--vst-space-m);
      }

      [margin~='s-inline-start-l'] {
        margin-left: var(--vst-space-l);
      }

      [margin~='s-inline-start-xl'] {
        margin-left: var(--vst-space-xl);
      }

      [margin~='s-inline-start-2xl'] {
        margin-left: var(--vst-space-2xl);
      }

      [margin~='s-inline-start-3xl'] {
        margin-left: var(--vst-space-3xl);
      }
    `)}

    ${r("m",a`
      /* m up Margin */
      [margin~='m-0'] {
        margin: 0;
      }

      [margin~='m-auto'] {
        margin: auto;
      }

      [margin~='m-3xs'] {
        margin: var(--vst-space-3xs);
      }

      [margin~='m-2xs'] {
        margin: var(--vst-space-2xs);
      }

      [margin~='m-xs'] {
        margin: var(--vst-space-xs);
      }

      [margin~='m-s'] {
        margin: var(--vst-space-s);
      }

      [margin~='m-m'] {
        margin: var(--vst-space-m);
      }

      [margin~='m-l'] {
        margin: var(--vst-space-l);
      }

      [margin~='m-xl'] {
        margin: var(--vst-space-xl);
      }

      [margin~='m-2xl'] {
        margin: var(--vst-space-2xl);
      }

      [margin~='m-3xl'] {
        margin: var(--vst-space-3xl);
      }

      /* s up Margin X */
      [margin~='m-inline-0'] {
        margin-left: 0;
        margin-right: 0;
      }

      [margin~='m-inline-auto'] {
        margin-left: auto;
        margin-right: auto;
      }

      [margin~='m-inline-3xs'] {
        margin-left: var(--vst-space-3xs);
        margin-right: var(--vst-space-3xs);
      }

      [margin~='m-inline-2xs'] {
        margin-left: var(--vst-space-2xs);
        margin-right: var(--vst-space-2xs);
      }

      [margin~='m-inline-xs'] {
        margin-left: var(--vst-space-xs);
        margin-right: var(--vst-space-xs);
      }

      [margin~='m-inline-s'] {
        margin-left: var(--vst-space-s);
        margin-right: var(--vst-space-s);
      }

      [margin~='m-inline-m'] {
        margin-left: var(--vst-space-m);
        margin-right: var(--vst-space-m);
      }

      [margin~='m-inline-l'] {
        margin-left: var(--vst-space-l);
        margin-right: var(--vst-space-l);
      }

      [margin~='m-inline-xl'] {
        margin-left: var(--vst-space-xl);
        margin-right: var(--vst-space-xl);
      }

      [margin~='m-inline-2xl'] {
        margin-left: var(--vst-space-2xl);
        margin-right: var(--vst-space-2xl);
      }

      [margin~='m-inline-3xl'] {
        margin-left: var(--vst-space-3xl);
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Y */
      [margin~='m-block-0'] {
        margin-top: 0;
        margin-bottom: 0;
      }

      [margin~='m-block-auto'] {
        margin-top: auto;
        margin-bottom: auto;
      }

      [margin~='m-block-3xs'] {
        margin-top: var(--vst-space-3xs);
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='m-block-2xs'] {
        margin-top: var(--vst-space-2xs);
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='m-block-xs'] {
        margin-top: var(--vst-space-xs);
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='m-block-s'] {
        margin-top: var(--vst-space-s);
        margin-bottom: var(--vst-space-s);
      }

      [margin~='m-block-m'] {
        margin-top: var(--vst-space-m);
        margin-bottom: var(--vst-space-m);
      }

      [margin~='m-block-l'] {
        margin-top: var(--vst-space-l);
        margin-bottom: var(--vst-space-l);
      }

      [margin~='m-block-xl'] {
        margin-top: var(--vst-space-xl);
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='m-block-2xl'] {
        margin-top: var(--vst-space-2xl);
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='m-block-3xl'] {
        margin-top: var(--vst-space-3xl);
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Top */
      [margin~='m-block-start-0'] {
        margin-top: 0;
      }

      [margin~='m-block-start-auto'] {
        margin-top: auto;
      }

      [margin~='m-block-start-3xs'] {
        margin-top: var(--vst-space-3xs);
      }

      [margin~='m-block-start-2xs'] {
        margin-top: var(--vst-space-2xs);
      }

      [margin~='m-block-start-xs'] {
        margin-top: var(--vst-space-xs);
      }

      [margin~='m-block-start-s'] {
        margin-top: var(--vst-space-s);
      }

      [margin~='m-block-start-m'] {
        margin-top: var(--vst-space-m);
      }

      [margin~='m-block-start-l'] {
        margin-top: var(--vst-space-l);
      }

      [margin~='m-block-start-xl'] {
        margin-top: var(--vst-space-xl);
      }

      [margin~='m-block-start-2xl'] {
        margin-top: var(--vst-space-2xl);
      }

      [margin~='m-block-start-3xl'] {
        margin-top: var(--vst-space-3xl);
      }

      /* s up Margin Right */
      [margin~='m-inline-end-0'] {
        margin-right: 0;
      }

      [margin~='m-inline-end-auto'] {
        margin-right: auto;
      }

      [margin~='m-inline-end-3xs'] {
        margin-right: var(--vst-space-3xs);
      }

      [margin~='m-inline-end-2xs'] {
        margin-right: var(--vst-space-2xs);
      }

      [margin~='m-inline-end-xs'] {
        margin-right: var(--vst-space-xs);
      }

      [margin~='m-inline-end-s'] {
        margin-right: var(--vst-space-s);
      }

      [margin~='m-inline-end-m'] {
        margin-right: var(--vst-space-m);
      }

      [margin~='m-inline-end-l'] {
        margin-right: var(--vst-space-l);
      }

      [margin~='m-inline-end-xl'] {
        margin-right: var(--vst-space-xl);
      }

      [margin~='m-inline-end-2xl'] {
        margin-right: var(--vst-space-2xl);
      }

      [margin~='m-inline-end-3xl'] {
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Bottom */
      [margin~='m-block-end-0'] {
        margin-bottom: 0;
      }

      [margin~='m-block-end-auto'] {
        margin-bottom: auto;
      }

      [margin~='m-block-end-3xs'] {
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='m-block-end-2xs'] {
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='m-block-end-xs'] {
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='m-block-end-s'] {
        margin-bottom: var(--vst-space-s);
      }

      [margin~='m-block-end-m'] {
        margin-bottom: var(--vst-space-m);
      }

      [margin~='m-block-end-l'] {
        margin-bottom: var(--vst-space-l);
      }

      [margin~='m-block-end-xl'] {
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='m-block-end-2xl'] {
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='m-block-end-3xl'] {
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Left */
      [margin~='m-inline-start-0'] {
        margin-left: 0;
      }

      [margin~='m-inline-start-auto'] {
        margin-left: auto;
      }

      [margin~='m-inline-start-3xs'] {
        margin-left: var(--vst-space-3xs);
      }

      [margin~='m-inline-start-2xs'] {
        margin-left: var(--vst-space-2xs);
      }

      [margin~='m-inline-start-xs'] {
        margin-left: var(--vst-space-xs);
      }

      [margin~='m-inline-start-s'] {
        margin-left: var(--vst-space-s);
      }

      [margin~='m-inline-start-m'] {
        margin-left: var(--vst-space-m);
      }

      [margin~='m-inline-start-l'] {
        margin-left: var(--vst-space-l);
      }

      [margin~='m-inline-start-xl'] {
        margin-left: var(--vst-space-xl);
      }

      [margin~='m-inline-start-2xl'] {
        margin-left: var(--vst-space-2xl);
      }

      [margin~='m-inline-start-3xl'] {
        margin-left: var(--vst-space-3xl);
      }
    `)}

      ${r("l",a`
      /* l up Margin */
      [margin~='l-0'] {
        margin: 0;
      }

      [margin~='l-auto'] {
        margin: auto;
      }

      [margin~='l-3xs'] {
        margin: var(--vst-space-3xs);
      }

      [margin~='l-2xs'] {
        margin: var(--vst-space-2xs);
      }

      [margin~='l-xs'] {
        margin: var(--vst-space-xs);
      }

      [margin~='l-s'] {
        margin: var(--vst-space-s);
      }

      [margin~='l-m'] {
        margin: var(--vst-space-m);
      }

      [margin~='l-l'] {
        margin: var(--vst-space-l);
      }

      [margin~='l-xl'] {
        margin: var(--vst-space-xl);
      }

      [margin~='l-2xl'] {
        margin: var(--vst-space-2xl);
      }

      [margin~='l-3xl'] {
        margin: var(--vst-space-3xl);
      }

      /* s up Margin X */
      [margin~='l-inline-0'] {
        margin-left: 0;
        margin-right: 0;
      }

      [margin~='l-inline-auto'] {
        margin-left: auto;
        margin-right: auto;
      }

      [margin~='l-inline-3xs'] {
        margin-left: var(--vst-space-3xs);
        margin-right: var(--vst-space-3xs);
      }

      [margin~='l-inline-2xs'] {
        margin-left: var(--vst-space-2xs);
        margin-right: var(--vst-space-2xs);
      }

      [margin~='l-inline-xs'] {
        margin-left: var(--vst-space-xs);
        margin-right: var(--vst-space-xs);
      }

      [margin~='l-inline-s'] {
        margin-left: var(--vst-space-s);
        margin-right: var(--vst-space-s);
      }

      [margin~='l-inline-m'] {
        margin-left: var(--vst-space-m);
        margin-right: var(--vst-space-m);
      }

      [margin~='l-inline-l'] {
        margin-left: var(--vst-space-l);
        margin-right: var(--vst-space-l);
      }

      [margin~='l-inline-xl'] {
        margin-left: var(--vst-space-xl);
        margin-right: var(--vst-space-xl);
      }

      [margin~='l-inline-2xl'] {
        margin-left: var(--vst-space-2xl);
        margin-right: var(--vst-space-2xl);
      }

      [margin~='l-inline-3xl'] {
        margin-left: var(--vst-space-3xl);
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Y */
      [margin~='l-block-0'] {
        margin-top: 0;
        margin-bottom: 0;
      }

      [margin~='l-block-auto'] {
        margin-top: auto;
        margin-bottom: auto;
      }

      [margin~='l-block-3xs'] {
        margin-top: var(--vst-space-3xs);
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='l-block-2xs'] {
        margin-top: var(--vst-space-2xs);
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='l-block-xs'] {
        margin-top: var(--vst-space-xs);
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='l-block-s'] {
        margin-top: var(--vst-space-s);
        margin-bottom: var(--vst-space-s);
      }

      [margin~='l-block-m'] {
        margin-top: var(--vst-space-m);
        margin-bottom: var(--vst-space-m);
      }

      [margin~='l-block-l'] {
        margin-top: var(--vst-space-l);
        margin-bottom: var(--vst-space-l);
      }

      [margin~='l-block-xl'] {
        margin-top: var(--vst-space-xl);
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='l-block-2xl'] {
        margin-top: var(--vst-space-2xl);
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='l-block-3xl'] {
        margin-top: var(--vst-space-3xl);
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Top */
      [margin~='l-block-start-0'] {
        margin-top: 0;
      }

      [margin~='l-block-start-auto'] {
        margin-top: auto;
      }

      [margin~='l-block-start-3xs'] {
        margin-top: var(--vst-space-3xs);
      }

      [margin~='l-block-start-2xs'] {
        margin-top: var(--vst-space-2xs);
      }

      [margin~='l-block-start-xs'] {
        margin-top: var(--vst-space-xs);
      }

      [margin~='l-block-start-s'] {
        margin-top: var(--vst-space-s);
      }

      [margin~='l-block-start-m'] {
        margin-top: var(--vst-space-m);
      }

      [margin~='l-block-start-l'] {
        margin-top: var(--vst-space-l);
      }

      [margin~='l-block-start-xl'] {
        margin-top: var(--vst-space-xl);
      }

      [margin~='l-block-start-2xl'] {
        margin-top: var(--vst-space-2xl);
      }

      [margin~='l-block-start-3xl'] {
        margin-top: var(--vst-space-3xl);
      }

      /* s up Margin Right */
      [margin~='l-inline-end-0'] {
        margin-right: 0;
      }

      [margin~='l-inline-end-auto'] {
        margin-right: auto;
      }

      [margin~='l-inline-end-3xs'] {
        margin-right: var(--vst-space-3xs);
      }

      [margin~='l-inline-end-2xs'] {
        margin-right: var(--vst-space-2xs);
      }

      [margin~='l-inline-end-xs'] {
        margin-right: var(--vst-space-xs);
      }

      [margin~='l-inline-end-s'] {
        margin-right: var(--vst-space-s);
      }

      [margin~='l-inline-end-m'] {
        margin-right: var(--vst-space-m);
      }

      [margin~='l-inline-end-l'] {
        margin-right: var(--vst-space-l);
      }

      [margin~='l-inline-end-xl'] {
        margin-right: var(--vst-space-xl);
      }

      [margin~='l-inline-end-2xl'] {
        margin-right: var(--vst-space-2xl);
      }

      [margin~='l-inline-end-3xl'] {
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Bottom */
      [margin~='l-block-end-0'] {
        margin-bottom: 0;
      }

      [margin~='l-block-end-auto'] {
        margin-bottom: auto;
      }

      [margin~='l-block-end-3xs'] {
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='l-block-end-2xs'] {
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='l-block-end-xs'] {
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='l-block-end-s'] {
        margin-bottom: var(--vst-space-s);
      }

      [margin~='l-block-end-m'] {
        margin-bottom: var(--vst-space-m);
      }

      [margin~='l-block-end-l'] {
        margin-bottom: var(--vst-space-l);
      }

      [margin~='l-block-end-xl'] {
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='l-block-end-2xl'] {
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='l-block-end-3xl'] {
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Left */
      [margin~='l-inline-start-0'] {
        margin-left: 0;
      }

      [margin~='l-inline-start-auto'] {
        margin-left: auto;
      }

      [margin~='l-inline-start-3xs'] {
        margin-left: var(--vst-space-3xs);
      }

      [margin~='l-inline-start-2xs'] {
        margin-left: var(--vst-space-2xs);
      }

      [margin~='l-inline-start-xs'] {
        margin-left: var(--vst-space-xs);
      }

      [margin~='l-inline-start-s'] {
        margin-left: var(--vst-space-s);
      }

      [margin~='l-inline-start-m'] {
        margin-left: var(--vst-space-m);
      }

      [margin~='l-inline-start-l'] {
        margin-left: var(--vst-space-l);
      }

      [margin~='l-inline-start-xl'] {
        margin-left: var(--vst-space-xl);
      }

      [margin~='l-inline-start-2xl'] {
        margin-left: var(--vst-space-2xl);
      }

      [margin~='l-inline-start-3xl'] {
        margin-left: var(--vst-space-3xl);
      }
    `)}

        ${r("xl",a`
      /* xl up Margin */
      [margin~='xl-0'] {
        margin: 0;
      }

      [margin~='xl-auto'] {
        margin: auto;
      }

      [margin~='xl-3xs'] {
        margin: var(--vst-space-3xs);
      }

      [margin~='xl-2xs'] {
        margin: var(--vst-space-2xs);
      }

      [margin~='xl-xs'] {
        margin: var(--vst-space-xs);
      }

      [margin~='xl-s'] {
        margin: var(--vst-space-s);
      }

      [margin~='xl-m'] {
        margin: var(--vst-space-m);
      }

      [margin~='xl-l'] {
        margin: var(--vst-space-l);
      }

      [margin~='xl-xl'] {
        margin: var(--vst-space-xl);
      }

      [margin~='xl-2xl'] {
        margin: var(--vst-space-2xl);
      }

      [margin~='xl-3xl'] {
        margin: var(--vst-space-3xl);
      }

      /* s up Margin X */
      [margin~='xl-inline-0'] {
        margin-left: 0;
        margin-right: 0;
      }

      [margin~='xl-inline-auto'] {
        margin-left: auto;
        margin-right: auto;
      }

      [margin~='xl-inline-3xs'] {
        margin-left: var(--vst-space-3xs);
        margin-right: var(--vst-space-3xs);
      }

      [margin~='xl-inline-2xs'] {
        margin-left: var(--vst-space-2xs);
        margin-right: var(--vst-space-2xs);
      }

      [margin~='xl-inline-xs'] {
        margin-left: var(--vst-space-xs);
        margin-right: var(--vst-space-xs);
      }

      [margin~='xl-inline-s'] {
        margin-left: var(--vst-space-s);
        margin-right: var(--vst-space-s);
      }

      [margin~='xl-inline-m'] {
        margin-left: var(--vst-space-m);
        margin-right: var(--vst-space-m);
      }

      [margin~='xl-inline-l'] {
        margin-left: var(--vst-space-l);
        margin-right: var(--vst-space-l);
      }

      [margin~='xl-inline-xl'] {
        margin-left: var(--vst-space-xl);
        margin-right: var(--vst-space-xl);
      }

      [margin~='xl-inline-2xl'] {
        margin-left: var(--vst-space-2xl);
        margin-right: var(--vst-space-2xl);
      }

      [margin~='xl-inline-3xl'] {
        margin-left: var(--vst-space-3xl);
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Y */
      [margin~='xl-block-0'] {
        margin-top: 0;
        margin-bottom: 0;
      }

      [margin~='xl-block-auto'] {
        margin-top: auto;
        margin-bottom: auto;
      }

      [margin~='xl-block-3xs'] {
        margin-top: var(--vst-space-3xs);
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='xl-block-2xs'] {
        margin-top: var(--vst-space-2xs);
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='xl-block-xs'] {
        margin-top: var(--vst-space-xs);
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='xl-block-s'] {
        margin-top: var(--vst-space-s);
        margin-bottom: var(--vst-space-s);
      }

      [margin~='xl-block-m'] {
        margin-top: var(--vst-space-m);
        margin-bottom: var(--vst-space-m);
      }

      [margin~='xl-block-l'] {
        margin-top: var(--vst-space-l);
        margin-bottom: var(--vst-space-l);
      }

      [margin~='xl-block-xl'] {
        margin-top: var(--vst-space-xl);
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='xl-block-2xl'] {
        margin-top: var(--vst-space-2xl);
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='xl-block-3xl'] {
        margin-top: var(--vst-space-3xl);
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Top */
      [margin~='xl-block-start-0'] {
        margin-top: 0;
      }

      [margin~='xl-block-start-auto'] {
        margin-top: auto;
      }

      [margin~='xl-block-start-3xs'] {
        margin-top: var(--vst-space-3xs);
      }

      [margin~='xl-block-start-2xs'] {
        margin-top: var(--vst-space-2xs);
      }

      [margin~='xl-block-start-xs'] {
        margin-top: var(--vst-space-xs);
      }

      [margin~='xl-block-start-s'] {
        margin-top: var(--vst-space-s);
      }

      [margin~='xl-block-start-m'] {
        margin-top: var(--vst-space-m);
      }

      [margin~='xl-block-start-l'] {
        margin-top: var(--vst-space-l);
      }

      [margin~='xl-block-start-xl'] {
        margin-top: var(--vst-space-xl);
      }

      [margin~='xl-block-start-2xl'] {
        margin-top: var(--vst-space-2xl);
      }

      [margin~='xl-block-start-3xl'] {
        margin-top: var(--vst-space-3xl);
      }

      /* s up Margin Right */
      [margin~='xl-inline-end-0'] {
        margin-right: 0;
      }

      [margin~='xl-inline-end-auto'] {
        margin-right: auto;
      }

      [margin~='xl-inline-end-3xs'] {
        margin-right: var(--vst-space-3xs);
      }

      [margin~='xl-inline-end-2xs'] {
        margin-right: var(--vst-space-2xs);
      }

      [margin~='xl-inline-end-xs'] {
        margin-right: var(--vst-space-xs);
      }

      [margin~='xl-inline-end-s'] {
        margin-right: var(--vst-space-s);
      }

      [margin~='xl-inline-end-m'] {
        margin-right: var(--vst-space-m);
      }

      [margin~='xl-inline-end-l'] {
        margin-right: var(--vst-space-l);
      }

      [margin~='xl-inline-end-xl'] {
        margin-right: var(--vst-space-xl);
      }

      [margin~='xl-inline-end-2xl'] {
        margin-right: var(--vst-space-2xl);
      }

      [margin~='xl-inline-end-3xl'] {
        margin-right: var(--vst-space-3xl);
      }

      /* s up Margin Bottom */
      [margin~='xl-block-end-0'] {
        margin-bottom: 0;
      }

      [margin~='xl-block-end-auto'] {
        margin-bottom: auto;
      }

      [margin~='xl-block-end-3xs'] {
        margin-bottom: var(--vst-space-3xs);
      }

      [margin~='xl-block-end-2xs'] {
        margin-bottom: var(--vst-space-2xs);
      }

      [margin~='xl-block-end-xs'] {
        margin-bottom: var(--vst-space-xs);
      }

      [margin~='xl-block-end-s'] {
        margin-bottom: var(--vst-space-s);
      }

      [margin~='xl-block-end-m'] {
        margin-bottom: var(--vst-space-m);
      }

      [margin~='xl-block-end-l'] {
        margin-bottom: var(--vst-space-l);
      }

      [margin~='xl-block-end-xl'] {
        margin-bottom: var(--vst-space-xl);
      }

      [margin~='xl-block-end-2xl'] {
        margin-bottom: var(--vst-space-2xl);
      }

      [margin~='xl-block-end-3xl'] {
        margin-bottom: var(--vst-space-3xl);
      }

      /* s up Margin Left */
      [margin~='xl-inline-start-0'] {
        margin-left: 0;
      }

      [margin~='xl-inline-start-auto'] {
        margin-left: auto;
      }

      [margin~='xl-inline-start-3xs'] {
        margin-left: var(--vst-space-3xs);
      }

      [margin~='xl-inline-start-2xs'] {
        margin-left: var(--vst-space-2xs);
      }

      [margin~='xl-inline-start-xs'] {
        margin-left: var(--vst-space-xs);
      }

      [margin~='xl-inline-start-s'] {
        margin-left: var(--vst-space-s);
      }

      [margin~='xl-inline-start-m'] {
        margin-left: var(--vst-space-m);
      }

      [margin~='xl-inline-start-l'] {
        margin-left: var(--vst-space-l);
      }

      [margin~='xl-inline-start-xl'] {
        margin-left: var(--vst-space-xl);
      }

      [margin~='xl-inline-start-2xl'] {
        margin-left: var(--vst-space-2xl);
      }

      [margin~='xl-inline-start-3xl'] {
        margin-left: var(--vst-space-3xl);
      }
    `)}
`;var u=a`
  .link {
    text-decoration: underline;
    position: relative;
    border: 0;
    background-color: rgba(255, 255, 255, 0);
    color: var(--vst-color-text-brand);
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: var(--vst-radius);
    display: inline;
    text-align: start;
    padding: 0;
    -webkit-user-select: text;
    user-select: text;
  }

  .link > span {
    cursor: pointer;
  }

  .link[size='s'] {
    font-size: var(--vst-font-size-xs);
  }

  .link vst-ui-icon {
    inline-size: var(--vst-icon-size-2xs);
    block-size: var(--vst-icon-size-2xs);
    margin-inline-end: var(--vst-space-2xs);
  }

  .link[variant='back'] vst-ui-icon {
    margin-inline-end: var(--vst-space-2xs);
    --vst-ui-icon-color: var(--vst-color-text-brand);
  }

  .link[disabled],
  .link[disabled]:hover {
    text-decoration: none;
    opacity: var(--vst-opacity-disabled);
    cursor: default;
  }

  .link:hover,
  .link:active,
  .link:visited {
    text-decoration: underline;
    color: var(--vst-color-text-brand-hover);
  }

  .link:hover,
  .link:active vst-ui-icon {
    --vst-ui-icon-color: var(--vst-color-text-brand-hover);
  }

  .link[variant='light'] {
    color: #ffffff;
  }

  .link[variant='back'] {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding-block-start: var(--vst-space-2xs);
    padding-block-end: var(--vst-space-2xs);
    margin-block-end: var(--vst-space-xs);
  }

  .link[variant='back']:hover {
    text-decoration: none;
  }
`;var f=a`
  /* Base */
  fieldset {
    padding: 0;
    border: 0;
    margin: 0;
  }

  legend {
    padding: 0; /*  Remove padding so people aren't caught out if they zero out fieldsets. */
    display: block;
    margin-block-end: var(--vst-space-2xs);
  }

  /*  Identify controls by their labels */
  label {
    display: inline-block;
    margin-block-end: var(--vst-space-2xs);
  }

  /* Goes on the labels above a :required input */
  [required]::after {
    content: '*';
    color: var(--vst-color-danger);
  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: var(--vst-space-xs);
  }

  input,
  input:before,
  input:after {
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
  }

  /* Inputs, Textarea, Selects */
  input,
  input textarea,
  select {
    --font-size: var(--vst-font-size-s);
    --border: 1px solid var(--vst-color-neutral);
    --border-radius: var(--vst-radius);
    --padding: var(--vst-space-xs);
    font-family: var(--vst-font-family);
    background-color: var(--vst-color-input-bg);
    font-size: var(--font-size);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: var(--padding);
    cursor: pointer;
    line-height: var(--vst-line-height-s);
    color: var(--vst-color-fg-primary);
  }

  .radio-block {
    display: flex;
    align-items: center;
    font-size: var(--vst-font-size-s);
  }

  input[type='radio'],
  input[type='checkbox'],
  input[type='range'],
  input[type='color'] {
    padding: 0;
  }

  input[type='radio'] {
    border-radius: 50%;
  }

  select {
    background-color: var(--vst-color-bg);
  }

  input[size='s']:not([type='radio']):not([type='checkbox']):not([type='range']):not([type='color']),
  select[size='s'] {
    font-size: var(--vst-font-size-s);
    padding: var(--vst-space-2xs);
  }

  /* Disabled */
  input[disabled],
  select[disabled],
  textarea[disabled],
  fieldset[disabled],
  input[disabled][type='radio'] + label,
  input[disabled][type='checkbox'] + label,
  label.disabled,
  fieldset[disabled] input,
  fieldset[disabled] select,
  fieldset[disabled] textarea {
    opacity: var(--vst-opacity-disabled);
    pointer-events: none;
  }

  /* // HTML5 invalid states */
  input:not(:placeholder-shown):invalid,
  input.error,
  textarea:invalid,
  select:invalid {
    border: 2px solid var(--vst-color-danger) !important;
    box-shadow: none !important;
  }

  /* Number */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Reset the file input to browser defaults */
  input[type='file'] {
    padding: initial;
    line-height: initial;
    border: initial;
    background-color: initial;
  }

  /* Button */
  /* Remove button padding in FF */
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* Help out input buttons  *note input[type=button] needs html in front to prevent android bug (https://github.com/h5bp/html5-boilerplate/issues/1235) */
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    inline-size: auto;
    block-size: auto;
    appearance: button; /* stop iOS from messing with it. */
  }

  /* Color */
  input[type='color'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    position: relative;
    margin-inline-end: 0.25rem;
    cursor: pointer;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  input[type='color']::before {
    z-index: 1;
    content: '';
    border-radius: 50%;
    position: absolute;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    background: var(--vst-color-bg);
    border: 2px solid var(--color);
    transition: all 0.1s;
  }

  input[type='color']:hover::before,
  input[type='color']:active::before,
  input[type='color'][data-active]::before {
    inline-size: 2rem;
    block-size: 2rem;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    background: transparent;
  }

  input[type='color']::-moz-color-swatch-wrapper {
    padding: 0;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    background: transparent;
  }

  input[type='color']::-webkit-color-swatch {
    z-index: 2;
    border: none;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    border-radius: 50%;
    background-color: var(--color) !important;
  }

  input[type='color']::-moz-color-swatch {
    z-index: 2;
    border: none;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color) !important;
  }

  /* Size s */
  input[type='color'][size='s'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    position: relative;
    margin-right: 0.25rem;
    cursor: pointer;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type='color'][size='s']::before {
    z-index: 1;
    content: '';
    border-radius: 50%;
    position: absolute;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    background: white;
    border: 2px solid var(--color);
    transition: all 0.1s;
  }

  input[type='color'][size='s']:hover::before,
  input[type='color'][size='s']:active::before,
  input[type='color'][size='s'][data-active]::before {
    inline-size: 1.75rem;
    block-size: 1.75rem;
  }

  input[type='color'][size='s']::-webkit-color-swatch-wrapper {
    padding: 0;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    background: transparent;
  }

  input[type='color'][size='s']::-moz-color-swatch-wrapper {
    padding: 0;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    background: transparent;
  }

  input[type='color'][size='s']::-webkit-color-swatch {
    z-index: 2;
    border: none;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    border-radius: 50%;
    background-color: var(--color) !important;
  }

  input[type='color'][size='s']::-moz-color-swatch {
    z-index: 2;
    border: none;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color) !important;
  }

  select {
    display: inline-block;
    appearance: none;
    vertical-align: middle;
    -webkit-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--vst-color-fg-primary) 50%),
      linear-gradient(135deg, var(--vst-color-fg-primary) 50%, transparent 50%);
    background-position: calc(100% - var(--vst-space-m)), calc(100% - var(--vst-space-m) + 5px);
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat;
    padding-inline-end: var(--vst-space-xl);
  }

  input[type='radio'],
  input[type='checkbox'] {
    inline-size: 18px;
    block-size: 18px;
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    margin: 0;
    flex-shrink: 0;
    margin-inline-end: var(--vst-space-xs);
    cursor: pointer;
    border: none;
  }

  input[type='radio']::before,
  input[type='checkbox']::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    inline-size: 18px;
    block-size: 18px;
    border: 1px solid var(--vst-color-fg-secondary);
    border-radius: 100%;
    visibility: visible;
    background-color: var(--vst-color-bg);
  }

  input[type='checkbox']::before {
    border-radius: var(--vst-radius);
  }

  input[type='radio']::after {
    content: '';
    inline-size: 10px;
    block-size: 10px;
    background: var(--vst-color-brand);
    position: absolute;
    top: 50%;
    left: var(--vst-space-2xs);
    border-radius: 100%;
    transition: all 0.2s ease;
    visibility: visible;
  }

  input[type='radio']:not(:checked)::after {
    opacity: 0;
    transform: scale(0) translateY(-50%);
  }

  input[type='radio']:checked::after {
    opacity: 1;
    transform: scale(1) translateY(-50%);
  }

  .checkbox-group {
    display: flex;
    align-items: center;
  }

  .checkbox {
    position: relative;
    margin-inline-end: var(--vst-space-xs);
    display: grid;
    place-items: center;
    grid-template-areas: 'checkbox';
    inline-size: 18px;
    block-size: 18px;
  }

  input[type='checkbox'] {
    margin: 0;
    grid-area: checkbox;
  }

  input[type='checkbox']:checked::before {
    background: var(--vst-color-brand);
    border-color: var(--vst-color-brand);
  }

  input[type='checkbox']:checked + .check {
    display: block;
    grid-area: checkbox;
    width: 25%;
    height: 50%;
    border-style: solid;
    border-color: var(--vst-color-bg);
    border-image: initial;
    border-width: 0px 2px 2px 0px;
    transform: rotate(45deg) translateY(-1px);
    pointer-events: none;
  }

  /* apply to a div the wraps the input and label elements */
  .floating-label {
    position: relative;
    margin-block-start: 0;
  }

  .floating-label > label {
    font-size: var(--vst-font-size-xs);
    display: block;
    top: 0;
    transform: translateY(-50%);
    left: 0.3rem;
    position: absolute;
    background: var(--vst-color-bg);
    padding: 0.25em 0.375em;
    font-weight: bold;
    line-height: 1;
  }
`;var k=a`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  label {
    margin: 0;
    color: var(--vst-color-fg-primary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  label,
  strong,
  em,
  small,
  span,
  sup,
  sub,
  code,
  legend,
  th,
  td,
  dl,
  dd,
  dt,
  .heading,
  .body,
  .caption,
  .label,
  .title,
  .overline,
  [selectable] {
    -webkit-user-select: text;
    user-select: text;
    cursor: text;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: var(--vst-line-height-s);
  }

  [color='brand'] {
    color: var(--vst-color-text-brand);
  }

  [color='success'] {
    color: var(--vst-color-text-success);
  }

  [color='info'] {
    color: var(--vst-color-text-info);
  }

  [color='warning'] {
    color: var(--vst-color-text-warning);
  }

  [color='danger'] {
    color: var(--vst-color-text-danger);
  }

  [color='muted'] {
    color: var(--vst-color-fg-tertiary);
  }

  .heading[size='display'] {
    font-size: var(--vst-font-size-l);
    font-weight: 300;
  }

  ${r("m",a`
      .heading[size='display'] {
        font-size: var(--vst-font-size-2xl);
      }
    `)}

  .heading[size='xl'] {
    font-size: var(--vst-font-size-xl);
    font-weight: 300;
  }

  .heading[size='l'] {
    font-size: var(--vst-font-size-m);
    font-weight: 700;
  }

  ${r("s",a`
      .heading[size='l'] {
        font-size: var(--vst-font-size-l);
        font-weight: 400;
      }
    `)}

  .heading[size='m'] {
    font-size: var(--vst-font-size-m);
    font-weight: 600;
  }

  .heading[size='s'] {
    font-size: var(--vst-font-size-s);
    font-weight: 600;
  }

  .title {
    font-size: var(--vst-font-size-s);
    font-weight: 400;
  }

  .overline {
    text-transform: uppercase;
    font-size: var(--vst-font-size-xs);
    letter-spacing: 0.2px;
    font-weight: 700;
  }

  .label {
    font-weight: 600;
    font-size: var(--vst-font-size-m);
  }

  .label[size='s'] {
    font-size: var(--vst-font-size-xs);
  }

  p,
  .body {
    font-size: var(--vst-font-size-s);
    font-weight: 400;
    max-inline-size: 75ch;
  }

  p[size='s'],
  .body[size='s'] {
    max-inline-size: 35ch;
  }

  .caption {
    font-size: var(--vst-font-size-xs);
    user-select: text;
  }

  .caption[hover] {
    cursor: text;
  }

  .caption[variant='light'] {
    color: var(--vst-color-fg-tertiary);
  }

  .caption[variant='error'] {
    color: var(--vst-color-text-danger);
  }

  .caption[variant='error']:not([margin]) {
    margin-block-start: var(--vst-space-2xs);
  }

  .caption[variant='warning'] {
    color: var(--vst-color-warning);
  }

  .caption[variant='success'] {
    color: var(--vst-color-success);
  }

  .caption[size='s'] {
    font-size: var(--vst-font-size-2xs);
    color: var(--vst-color-fg-tertiary);
  }
`;var h=a`
  details > summary {
    display: inline-block;
    cursor: pointer;
  }

  /* Hide the default marker. */
  details > summary::-webkit-details-marker {
    display: none;
  }

  details[variant='arrow'] > summary {
    display: block;
  }

  /* Add the custom marker in the default state. */
  details[variant='arrow'] > summary::before {
    display: inline-block;
    margin-inline-end: var(--vst-space-2xs);
    inline-size: 0.7em;
    content: '\\25B6';
    /* Lit needs double escaping https://github.com/Polymer/lit-html/issues/348#issuecomment-402635559 */
    font-size: 0.6em;
    vertical-align: text-bottom;
    color: $arrow-color;
  }

  /* Add the custom marker in the open state.  */
  details[variant='arrow'][open] summary::before {
    transform: rotate(90deg) translate(-2px, -2px);
  }
`;var y=a`
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;var z=a`
  .definition-list {
    user-select: text;
    cursor: text;
  }

  .definition-list dt {
    display: inline-block;
  }

  .definition-list dt::after {
    content: ':';
  }

  .definition-list dd {
    display: inline;
    margin: 0;
  }

  .definition-list dd::after {
    display: block;
    content: '';
  }
`;var w=a`
  /* used for selection and examine pin bottom handles */
  .drag-handle vst-ui-icon {
    inline-size: 0.375rem;
  }

  .drag-handle {
    position: absolute;
    bottom: -1.875rem;
    z-index: calc(var(--vst-z-selection) + 1);
    min-inline-size: 3.125rem;
    max-inline-size: 6.875rem;
    padding: var(--vst-space-2xs);
    border-radius: var(--vst-radius);
    cursor: col-resize;
    color: var(--vst-color-fg-secondary);
    font-size: 0.75rem;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    transition: transform 250ms var(--transition-easing);
    transform: translateX(-50%);
    border: 1px solid var(--vst-color-bg-secondary);

    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: var(--vst-space-2xs);
    align-items: center;
  }

  .drag-handle * {
    pointer-events: none;
  }
`;var Aa=a`
  /* Global */
  ${s}
  ${n}

  /* Layout */
  ${e}
  ${o}
  ${l}
  ${v}
  ${g}
  ${c}
  ${m}
  ${p}
  ${x}
  ${b}
  ${d}
  ${t}

  /* HTML Elements */
  ${i}
  ${f}
  ${k}
  ${u}
  ${h}
  ${y}
  ${z}

  ${w}

  /* Utilities */
  ${t}
`;export{s as a,i as b,Aa as c};
