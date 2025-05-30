import{a as W}from"./chunk-RHPEAR5C.js";import"./chunk-25C2FLTR.js";import{a as P}from"./chunk-R6LDBG7J.js";import{a as N}from"./chunk-ZERDIXIU.js";import{E as w,a as G,b as u,c as L,u as R}from"./chunk-LYSQIBIX.js";import{e as _}from"./chunk-SI5R733D.js";import{a as B,b as ie}from"./chunk-KN5R6GSV.js";import"./chunk-UJ3CAIKP.js";import{a as g}from"./chunk-G7LRX6NT.js";import{a as z}from"./chunk-Z6SXIBNK.js";import{a as U}from"./chunk-JWPGNWQB.js";import"./chunk-IBBROPNX.js";import"./chunk-YJ5KKARE.js";import{c as oe}from"./chunk-NNBWZ6HI.js";import"./chunk-KBTFUBYZ.js";import"./chunk-A7ZJ67EZ.js";import"./chunk-IMQHRNK4.js";import{a as V}from"./chunk-MGJOXMXS.js";import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{a as E,b as A,d as T}from"./chunk-H5EO627A.js";import"./chunk-AMQF2NRG.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{a as j}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import{a as y}from"./chunk-PTKZDLN6.js";import{a as C}from"./chunk-PL6DDC6Q.js";import"./chunk-SSPC3AL5.js";import{I as X,J as D,M as Q,N as J,O as Z,P as ee,X as te,i as K,o as q,r as H,v as M,z as Y}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as b}from"./chunk-CRHRJPRJ.js";import{a as k}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as d}from"./chunk-OTWO5H3C.js";import{b as r,c as l,f as F,h as m}from"./chunk-BVG7RORO.js";import{a as O}from"./chunk-MM5FGF5D.js";import{b as x}from"./chunk-WFJOWCXF.js";import{c as t}from"./chunk-LI3RKPGW.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";function se(){let f=document.querySelector("#app"),e=getComputedStyle(f).getPropertyValue("--vst-screen-size");return e.startsWith("xs")||e.startsWith("s")}var ae=[{version:"6.0",releaseDate:"4/29/2024",changes:[{description:"Rename Data Set in Y Axis popup",type:"new"},{description:"Remote logging when used with remote capable sensors",type:"pro"},{description:"Manual curve fits with draggable lines",type:"pro"},{description:"Notes field",type:"pro"},{description:"Printing from Android and iOS",type:"new"},{description:"Savitzky-Golay smoothing functions",type:"fix"}]},{version:"5.18.2",releaseDate:"10/10/2023",changes:[{description:"Photogate: Linear Motion and Angular Motion calculated columns use correct default step value.",type:"fix"},{description:"Photogate: Spurious position, velocity and acceleration columns are no longer added in gate or pulse photogate timing modes.",type:"fix"},{description:"Photogate: Timing modes (time between gates, pendulum timing) now display the correct columns.",type:"fix"}]},{version:"5.18.1",releaseDate:"10/2/2023",changes:[{description:"Photogate: Linear Motion and Angular Motion calculated columns use correct step value.",type:"fix"},{description:"Photogate: Graph setup for Pulse timing uses correct column for y axis.",type:"fix"},{description:"Heart rate monitor rate() function calculations and beats per minute have been corrected.",type:"fix"}]},{version:"5.18",releaseDate:"07/21/2023",changes:[{description:"Cross-data set calculated column functions.",type:"pro"},{description:"Streamlined authentication workflow for the Progressive Web App (PWA).",type:"new"},{description:"More direct device connection workflow for the PWA.",type:"new"},{description:"Contextual selection menu updated for better usability.",type:"new"},{description:"Better handling of long units in the data table and column options dialog.",type:"fix"},{description:"Local data sharing from LabQuest again works for multiple identical sensors.",type:"fix"},{description:"New minimum operating system levels:",type:"new",details:["macOS 11.7","Windows 10 version 21H2","Android 10","ChromeOS 108","iOS 15.7.6"]}]},{version:"5.17.2",releaseDate:"06/23/2023",changes:[{description:"Crash associated with event-based data collection and calculated columns.",type:"fix"}]},{version:"5.17",releaseDate:"06/13/2023",changes:[{description:"Units included in linear and proportional curve fits.",type:"pro"},{description:"Right Y axis option.",type:"pro"},{description:"Linked X axes in multiple graphs for simultaneous examine lines and grouped scaling.",type:"new"},{description:"Contextual menu for easy access to operations on graph selections.",type:"new"},{description:"Clearer behavior when user dismisses Welcome dialog without choosing a mode.",type:"new"},{description:"Explicit confirmation when converting a column to categorical mode.",type:"new"},{description:"Support for Apple Silicon macOS devices.",type:"new"},{description:"CSV file import",type:"fix"}]},{version:"5.16",releaseDate:"03/14/2023",changes:[{description:"Enhanced annotations functionality allows user to associate an annotation with a data point or a range of data.",type:"pro"},{description:"31 additional calculated columns now available.",type:"pro"},{description:"If a Graphical Analysis Pro activation code is entered instead of license key, a descriptive error message is displayed.",type:"pro"},{description:"Improved file fidelity to more closely restore full state upon file open.",type:"fix",details:["Column editability is restored","Go Direct sensor channel selections are restored","Sensor reverse state is restored","Strikethrough status of data correctly restored","Meter and table visibility are restored","Event-based data collection using average sensor reading over 10 seconds setting is restored"]},{description:"Event-based data collection stability improvements.",type:"fix"}]},{version:"5.15.2",releaseDate:"12/14/2022",changes:[{description:"Corrected app freeze after certain strikethrough actions on categorical data.",type:"fix"}]},{version:"5.15.1",releaseDate:"12/09/2022",changes:[{description:"Moved to target API level 31 for Android, per Google Play requirements.",type:"fix"}]},{version:"5.15",releaseDate:"11/30/2022",changes:[{description:"Strikethrough unwanted data",type:"pro"},{description:"Additional functions in custom calculated columns",type:"pro"},{description:"Optionally display uncertainty of curve fit parameters",type:"pro"},{description:"Allow meters to display values for all columns",type:"pro"},{description:"Adjustable number of points used in derivative calculations",type:"pro"},{description:"Add Distribute App function",type:"pro"},{description:"Improved Identify for Go Direct Sensors",type:"new"},{description:"Allow Graphical Analysis to open LabQuest .qmbl files in addition to Instrumental Analysis .imbl files and Spectral Analysis .smbl files",type:"new"},{description:"Provide information on special update path for GDX-TMP 03F family sensors",type:"new"},{description:"Improved support for copy and paste to and from Excel",type:"fix"},{description:"Improved dark mode behavior on iOS and iPadOS",type:"fix"},{description:"Correctly displays battery information for Polar Heart Rate module",type:"fix"}]},{version:"5.14",releaseDate:"9/14/2022",changes:[{type:"pro",description:"Error bar plotting on graphs."},{type:"fix",description:"Improved support for copy and paste from Excel."},{type:"fix",description:"Connection to Go Wireless Heart Rate Monitor on Progressive Web App version now works."},{type:"fix",description:"Improved long-term data collection stability on iOS and iPadOS."},{type:"fix",description:"Improved file open behavior on Android."},{type:"fix",description:"Improved sensor list display on iOS devices."},{type:"fix",description:"Improved double-click behavior of .gambl files to open the application on macOS."},{type:"fix",description:"Improved error reporting on entry of license keys for Graphical Analysis Pro."},{type:"fix",description:"Improved notification of app update availability."},{type:"fix",description:"Improved detection of stale data sharing keys."},{type:"fix",description:"Photogate data collection now works on ChromeOS app."},{type:"fix",description:"Graph axis labels no longer disappear when switching between light and dark modes."},{type:"fix",description:"Relative sensor readings during Go Direct sensor calibration now correctly update."},{type:"fix",description:"Sensor meter display during event-based data collection now update correctly."},{type:"fix",description:"Redundant meter display when using Colorimeter COL-BTA removed."},{type:"change",description:"New minimum operating system levels of macOS 10.15.6, ChromeOS 102, iOS 14.8.1 and iPadOS 14.8.1, Android 9, Windows 10 version 2004, and Windows 11 version 21H2."}]},{version:"5.13.1",releaseDate:"7/20/2022",changes:[{type:"new",description:"Added links to Privacy Notice, End User License Agreement and Cookie Notice."}]},{version:"5.13",releaseDate:"7/14/2022",changes:[{type:"pro",description:"Data Marks for improved use of Melt Station."},{type:"pro",description:"App can be authenticated and launched via URL."},{type:"new",description:"Progressive Web App version first release."},{type:"new",description:"Statistics and curve fit information boxes can now be collapsed, as well as moved horizontally and vertically."},{type:"fix",description:"Further improvements to pinch-to-zoom on iOS and iPadOS devices."},{type:"fix",description:"Annotations no longer carry over from the previous session."},{type:"fix",description:"1, I, O, or 0 are no longer used in data share or license keys."},{type:"fix",description:"Improved behavior when typing and editing text fields."},{type:"fix",description:"Data sharing works again when using USB device as data source."},{type:"fix",description:"Calculated columns now reliably depend on the correct data set."},{type:"fix",description:"Custom calculated columns depending on a sensor column now correctly replace the sensor on graphs."},{type:"fix",description:"Newer hardware version of Go Wireless Heart Rate was not working on Android devices. This has been fixed."}]},{version:"5.12",releaseDate:"9/22/2021",changes:[{type:"pro",description:"Categorical data entry is now supported."},{type:"new",description:"Examine pin can now be moved with cursor keys."},{type:"new",description:"Additional alternate text is provided for greater accessibility."},{type:"change",description:"New minimum operating system levels of macOS 10.14.6, ChromeOS 89, iOS 13.7 and iPadOS 13.7, Android 8, and Windows 10 version 1903."},{type:"fix",description:"Improved drop counter calibration display."},{type:"fix",description:"Column order is again preserved when using local Data Sharing."}]},{version:"5.11",releaseDate:"8/10/2021",changes:[{type:"pro",description:"Histogram Mode now available in Graph Options."},{type:"new",description:"Accessibility improvements for Selecting and Copying Text."},{type:"new",description:"This is the terminal version for Windows 7 and macOS 10.13 and earlier. Future updates will not be offered to these versions."},{type:"fix",description:"Fixed issue where replay mode would not display."},{type:"fix",description:"Fixed issue with Pinch-to-zoom on iOS."},{type:"fix",description:"Fixed issue with Graph Draw."}]},{version:"5.10",releaseDate:"7/15/2021",changes:[{type:"pro",description:"Bar graph style option."},{type:"pro",description:"License and expiration date of Graphical Analysis Pro activation is now shown in welcome dialog."},{type:"new",description:"Moved Graphical Analysis Pro activation field to bottom of welcome dialog and added option to ignore this field."}]},{version:"5.9",releaseDate:"6/23/2021",changes:[{type:"pro",description:"Improved user assistance with input of Custom Calculated Columns"},{type:"new",description:"Pro features will now prompt for Authentication"},{type:"fix",description:"Firmware Updater now appears on Chrome"},{type:"fix",description:"Firmware Updater is now styled correctly"},{type:"fix",description:"Photogate pulse timing mode now gives correct result"},{type:"change",description:"GA Pro Authorization area moved to Welcome Screen"}]},{version:"5.8",releaseDate:"6/2/2021",changes:[{type:"pro",description:"FFT graphs of time-based data"},{type:"pro",description:"Point Symbols are included in Internet Data Share"},{type:"new",description:"Dark Mode display follows OS settings and can be enabled in Presentation settings"},{type:"fix",description:"Columns in Event-based data no longer appear out of order"},{type:"fix",description:"Internet data sharing clients no longer stop updating graph if host does curve fit"},{type:"fix",description:"Windows CSV export no longer fails for large data sets"},{type:"fix",description:"Columns viewed with local (non-internet) data sharing are no longer duplicated"},{type:"fix",description:"PDF exports no longer crash on iOS13"},{type:"change",description:"Support for iOS 12 is dropped. Version 5.7.1 will remain available for iOS 12 devices."}]},{version:"5.7.1",releaseDate:"4/8/2021",changes:[{type:"fix",description:"Data Sharing over internet connection now works more reliably."}]},{version:"5.7",releaseDate:"3/31/2021",changes:[{type:"new",description:"New control over column color, point symbols, and column selection"},{type:"new",description:"Improved color contrast and font size responsiveness for better accessibility"},{type:"new",description:"Improved experience for small screen devices"},{type:"pro",description:"Export graph images as a PDF as a file or for printing"},{type:"fix",description:"Replay now correctly hides graph traces on opening a file"},{type:"fix",description:"CSV export now contains full precision of underlying data regardless of column settings"}]},{version:"5.6",releaseDate:"2/17/2021",changes:[{type:"new",description:"Windows ARM processor support"},{type:"pro",description:"User-defined calculated columns"},{type:"pro",description:"Replay supports two- and three-graph displays"},{type:"pro",description:"Repositioned replay toolbar allows files to be saved ready for data replay."},{type:"fix",description:"Improved synchronization on internet Data Sharing"}]},{version:"5.5",releaseDate:"2/3/2021",changes:[{type:"pro",description:"Custom curve fit expressions can be entered by the user."},{type:"new",description:"Support for macOS devices with Apple Silicon chips such as the M1."},{type:"new",description:"Enhanced graph export function for high-quality and uniformly-sized output."},{type:"fix",description:"Integrals now calculate correctly for non-monotonic data."},{type:"fix",description:"Replay is smoother for certain long data sets."},{type:"issue",description:"Double-clicking .gambl files is unreliable on macOS, ChromeOS, iOS/iPadOS and Android. Open files from within the Graphical Analysis app instead."}]},{version:"5.4.1",releaseDate:"11/23/2020",changes:[{type:"fix",description:"Bluetooth on Android 10"}]},{version:"5.4.0",releaseDate:"11/19/2020",changes:[{type:"fix",description:"Sparse data tables such as those from a photogate now share correctly with Data Sharing."},{type:"fix",description:"App no longer crashes on Windows 10 when Bluetooth radio is off."},{type:"fix",description:"App now launches on Windows 7."},{type:"fix",description:"App now opens using file on double-clicking a .gambl file (Windows)."},{type:"fix",description:"Android version can now open .gambl files created on other platforms."},{type:"issue",description:"Double-clicking .gambl files is unreliable on macOS, ChromeOS, iOS/iPadOS and Android. Open files from within the Graphical Analysis app instead."}]},{version:"5.3.1",releaseDate:"10/29/2020",changes:[{type:"fix",description:"Pro License Key validation."}]},{version:"5.3",releaseDate:"10/28/2020",changes:[{type:"pro",description:"Data Sharing using an internet connection now supports a wider variety of network connections."},{type:"pro",description:"Trace colors when using Data Sharing now consistently match between host and clients."},{type:"fix",description:"Sensors using custom trace colors such as the Sensor Cart and the Light and Color Sensor RGB channels now draw with intended colors rather than black."},{type:"fix",description:"Several replay and video sync issues have been resolved."}]},{version:"5.2",releaseDate:"10/13/2020",changes:[{type:"pro",description:"Data Sharing using an internet connection allows instructors to share data with remote students."}]},{version:"5.1",releaseDate:"9/30/2020",changes:[{type:"new",description:"Graphs with common x-axis columns now have linked examine pins for easier analysis."},{type:"pro",description:"Download link for Sample Experiments has been moved to the left column for improved visibility."}]},{version:"5.0",releaseDate:"9/18/2020",changes:[{type:"new",description:"First release of Graphical Analysis version 5 adds Graphical Analysis Pro features. Additional features are available after entering a valid key under the shield menu."},{type:"new",description:"Adjustable panes allow resizing of graph, data table, meter view."},{type:"new",description:"New view menu allows direct selection of graph, table, and meter."},{type:"new",description:"New file type .gambl to support new features."},{type:"pro",description:"Data set replay allows time-based data sets to be presented at varying speeds."},{type:"pro",description:"Insert and play video allows a video to be viewed within Graphical Analysis Pro."},{type:"pro",description:"Replay of data set can be synchronized to video."},{type:"pro",description:"Additional sample experiments with videos are available."}]}];var ne=r`
  /*  a lot of duplication between vst-ui-listbox and here */
  :host {
    background: var(--vst-color-bg);
    display: block;
    padding: var(--vst-space-s);
    max-block-size: 75vh;
    min-inline-size: max-content;
    overflow: auto;
    border: 1px solid var(--vst-color-popover-border);
  }

  .listbox__list {
    list-style: none;
    padding-inline-start: 0;
    margin: 0;
  }

  .listbox__item {
    border-bottom: 1px solid var(--vst-color-bg-secondary);
  }
  .listbox__item--select {
    /*  special case for change units select */
    display: flex;
    padding: var(--vst-space-xs) var(--vst-space-s);
    justify-content: space-between;
    align-items: center;
  }

  .listbox__item:last-of-type {
    border-bottom: 0;
  }

  .listbox__sub-options-label {
    display: flex;
    padding-block-end: var(--vst-space-s);
  }

  .listbox__switch {
    display: block;
    padding: var(--vst-space-s);
  }
`;var re=class extends C(m){static get properties(){return{layoutOptions:{type:Array},graphOptions:{type:Array},showProPreview:{type:Boolean}}}constructor(){super();this.layoutOptions=[{title:"Video",id:"video",checked:!1},{title:"Graphs",id:"graphs",checked:!0},{title:"Data Table",id:"table",checked:!1}],this.showProPreview=!1,this.graphOptions=[{title:"1 Graph",id:"graph_1",selected:!0},{title:"2 Graphs",id:"graph_2",selected:!1},{title:"3 Graphs",id:"graph_3",selected:!1}]}async _handleLayoutOption(e){let{id:o}=e.target;this.layoutOptions.forEach(i=>{i.id===o&&(i.checked=e.detail)}),this.requestUpdate(),await this.updateComplete,this._dispatchLayoutOptions({changedLayoutOptionId:o})}async _handleGraphOptions({target:e}){this.graphOptions.forEach((o,i)=>{o.selected=i<=e.selectedIndex}),this.requestUpdate(),await this.updateComplete,this._dispatchLayoutOptions()}_dispatchLayoutOptions({changedLayoutOptionId:e}={}){this.dispatchEvent(new CustomEvent("layout-option-changed",{detail:{layoutOptions:this.layoutOptions,graphOptions:this.graphOptions,changedLayoutOptionId:e}}))}_toggleProPreview({target:{id:e}}){this.shadowRoot.querySelector(`#${e}_popover`).show()}_computeSwitchTemplate(e){return e.proOnly?l`
        <vst-ui-switch
          class="listbox__switch"
          id="${e.id}"
          pro-only
          label="${e.title}"
          label-placement="right"
          @click="${this._toggleProPreview}"
        ></vst-ui-switch>
        <vst-ui-popover id="${e.id}_popover" for="${e.id}" placement="bottom">
          <p class="body" margin="s">
            ${e.proMessage}
            <vst-ui-pro-info></vst-ui-pro-info>
          </p>
        </vst-ui-popover>
      `:l` <vst-ui-switch
        class="listbox__switch"
        id="${e.id}"
        label="${e.title}"
        label-placement="right"
        ?checked="${e.checked}"
        @switch-changed="${this._handleLayoutOption}"
      ></vst-ui-switch>

      ${e.id==="graphs"?l`
            <label class="listbox__sub-options-label" for="graph_options">
              <span visually-hidden>${e.title}</span>
              <select
                id="graph_options"
                margin="inline-start-2xl inline-end-xl"
                ?disabled="${!e.checked}"
                @change="${this._handleGraphOptions}"
              >
                ${this.graphOptions.map(o=>l`
                    <option
                      value="${o.id}"
                      id="${o.id}"
                      name="graphs"
                      .selected="${o.selected}"
                    >
                      ${o.title}
                    </option>
                  `)}
              </select>
            </label>
          `:""}`}static get styles(){return[b,ne]}render(){return l`
      <div class="listbox">
        <ul class="listbox__list">
          ${this.layoutOptions.map(e=>l` <li class="listbox__item">${this._computeSwitchTemplate(e)}</li> `)}
        </ul>
      </div>
    `}};customElements.define("vst-ui-content-layout-options",re);var le=r`
  /* Use advanced layout when using more than just the replay rate in the bar */
  :host([advanced]) {
    block-size: calc(2 * var(--vst-toolbar-height));
    border-block-start: 1px solid var(--replay-controls-border-color, var(--vst-color-bg-primary));
  }

  :host() {
    block-size: var(--vst-toolbar-height);
    border-block-start: 1px solid var(--replay-controls-border-color, var(--vst-color-bg-primary));
  }

  :host([background='dark']) #replay-controls * {
    --vst-outline-offset-color: var(--vst-color-dark-300);
    --vst-outline-color: var(--vst-color-brand-100);
  }

  ${d("s",r`
      :host([advanced]) {
        block-size: var(--vst-toolbar-height);
      }
    `)}

  :host([advanced]) #replay-controls {
    display: grid;
    grid-template-columns: auto 1fr 1fr auto;
    gap: var(--vst-space-2xs);
    place-items: center;
    padding-inline-start: var(--vst-space-2xs);
    padding-inline-end: var(--vst-space-2xs);
  }

  #replay-controls {
    block-size: 100%;
    inline-size: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--replay-controls-background-color, var(--vst-color-bg-tertiary));
    padding: var(--vst-space-3xs) 0;
  }

  .playback-controls {
    display: flex;
    grid-column: 1/-1;
    grid-row: 2;
  }

  ${d("s",r`
      :host([advanced]) #replay-controls {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: var(--vst-space-3xs) 0;
      }
    `)}

  :host([small]) #replay-controls {
    justify-content: flex-start;
  }

  #replay_dataset_select {
    text-overflow: ellipsis;
  }

  ${d("m",r`
      #replay_dataset_select {
        margin-inline-end: var(--vst-space-m);
      }
    `)}

  #replay_playback_speed {
    inline-size: 4.5rem;
    display: flex;
    align-items: center;
    position: relative;
    margin: var(--vst-space-2xs);
  }

  #replay_playback_speed input {
    padding-inline-end: 18px; /* TODO: Does 18px need to be another spacing variable? 16px is too small and 24px is too large */
  }
  :host([advanced]) #replay_playback_speed {
    inline-size: 100%;
    margin: 0;
  }

  ${d("s",r`
      :host([advanced]) #replay_playback_speed {
        max-inline-size: 4.5rem;
        margin-inline-start: var(--vst-space-m);
      }
    `)}

  #replay_playback_speed #units {
    color: var(--replay-input-unit-color, var(--vst-color-fg-tertiary));
    /* we need to use absolute here because we need to move the units inside the input and also allow the input to take up the full width of the label. transforming the units leaves a gap in the label that the input can't fill */
    position: absolute;
    right: var(--vst-space-xs);
  }

  input {
    inline-size: 100%;
    text-align: end;
    padding-inline-end: var(--vst-space-m);
  }

  ${d("m",r`
      input {
        max-inline-size: 4.5rem;
      }
    `)}

  select {
    max-inline-size: 8rem;
    inline-size: 100%;
  }

  #replay_playback_speed > input:focus {
    text-align: left;
  }

  #replay_playback_speed > input:focus ~ #units {
    visibility: hidden;
  }

  ${d("s",r`
      #replay-play-pause {
        margin-inline-start: var(--vst-space-xs);
      }
    `)}

  :host([small]) .playback-controls__btn,
  .playback-controls__btn:active,
  .playback-controls__btn[activated] {
    transform: scale(1);
  }

  ${d("m",r`
      #close_container {
        position: absolute;
        right: var(--vst-space-xs);
      }
    `)}

  #sync_video {
    border: 0;
    border-radius: var(--vst-radius);
  }

  ${d("m",r`
      #sync_video_container {
        position: absolute;
        left: var(--vst-space-xs);
        margin: 0;
      }
    `)}

  ${E(r`.playback-controls__btn`)}
  ${A(r`.playback-controls__btn`)}

  .playback-controls__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    border-radius: 100%;
    padding: 0;
    border: none;
    inline-size: var(--vst-icon-size-l);
    block-size: var(--vst-icon-size-l);
    touch-action: manipulation;
    --vst-ui-icon-color: var(--replay-btn-icon-color, var(--vst-color-bg-secondary));
  }

  .playback-controls__btn:hover,
  .playback-controls__btn[activated] {
    --vst-ui-icon-color: var(--replay-btn-icon-color, var(--vst-color-bg));
    background-color: var(--replay-btn-color-hover, var(--vst-color-bg-secondary));
    border-color: var(--replay-btn-color-hover, var(--vst-color-bg));
  }

  .btn[variant='icon']:hover,
  .btn[variant='icon'][active] {
    --hover-bg: var(--replay-btn-color-hover, var(--vst-color-bg-secondary));
  }

  .playback-controls__btn:active,
  .playback-controls__btn[activated] {
    background-color: var(--replay-btn-color-active, var(--vst-color-bg-secondary));
    transform: translateY(1px);
  }

  .playback-controls__icon,
  .btn[variant='icon'] vst-ui-icon {
    width: 1.5rem;
    height: 1.5rem;
    --vst-ui-icon-color: var(--replay-btn-icon-color, var(--vst-color-fg-primary));
  }

  #sync_toggle,
  .switch__label {
    margin-block-end: var(--vst-space-m);
  }

  ${d("l",r`
      #sync_toggle,
      .switch__label {
        margin-block-end: 0;
      }
    `)}
`;var ce=class extends m{static get properties(){return{_frameFeatures:{state:!0},hidden:{type:Boolean,reflect:!0},playing:{type:Boolean},dataSetInfo:{type:Array},replaySpeed:{type:String},maxReplaySpeed:{type:Number},showVideoButton:{type:Boolean,attribute:"show-video-btn"},videoBtnActivated:{type:Boolean}}}constructor(){super();this.dataSetInfo=[],this.maxReplaySpeed=1e3,this.showVideoButton=!1,this.videoBtnActivated=!1,y()&&import("./FrameFeatures-EN7KYCUN.js").then(({frameFeatures:e})=>{this._frameFeatures=e})}async firstUpdated(){this.replaySpeed="1.0",this.controlsEl=this.shadowRoot.querySelector("#replay-controls"),this.datasetSelectEl=this.shadowRoot.querySelector("#replay_dataset_select")}updated(e){e.has("hidden")&&!this.hidden&&(this._dataSetIndex=this.dataSetInfo.findIndex(o=>o.selected))}play(){let{replaySpeed:e}=this,o=this.datasetSelectEl.value;this.dispatchEvent(new CustomEvent("replay-start",{composed:!0,detail:{replaySpeed:e,dataSetId:o}})),this.playing=!0}pause(){this.dispatchEvent(new CustomEvent("replay-pause",{composed:!0})),this.playing=!1}prev(){let{replaySpeed:e}=this;this.dispatchEvent(new CustomEvent("replay-rewind",{composed:!0,detail:{replaySpeed:e}}))}next(){let{replaySpeed:e}=this;this.dispatchEvent(new CustomEvent("replay-advance",{composed:!0,detail:{replaySpeed:e}}))}async close(){this.dispatchEvent(new CustomEvent("closing")),this.dispatchEvent(new CustomEvent("closed"))}toggleSyncVideo(){this.videoBtnActivated=!this.videoBtnActivated,this.dispatchEvent(new CustomEvent("video-btn-toggled",{detail:{activated:this.videoBtnActivated}}))}startOver(){this.dispatchEvent(new CustomEvent("replay-start-over",{composed:!0}))}_updatereplaySpeed({target:e}){this.replaySpeed=parseFloat(e.value),this.dispatchEvent(new CustomEvent("replay-speed-changed",{detail:{replaySpeed:this.replaySpeed}}))}_updateDataSet({target:e}){let o=e.value;this.dispatchEvent(new CustomEvent("replay-dataset-changed",{detail:{dataSetId:o}}))}_advancedNumberField(e){let o=navigator.platform==="MacIntel";if(["ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();let i=Number.isNaN(parseFloat(e.target.value))?parseFloat(e.target.getAttribute("min"))||0:parseFloat(e.target.value),s=e.key==="ArrowUp"?1:-1,n=(o?e.metaKey:e.ctrlKey)?100:e.shiftKey?10:e.altKey?.1:1,p=Math.max((i.toString().split(".")[1]||"").length,e.altKey?1:0),a=i+s*n;e.target.value=a.toFixed(p),this._updatereplaySpeed(e)}}static get styles(){return[b,le]}render(){return l`
      <div id="replay-controls" aria-hidden="${this.hidden}">
        ${this.showVideoButton?l`
              <vst-style-tooltip id="sync_video_container">
                <button
                  id="sync_video"
                  class="playback-controls__btn"
                  ?activated="${this.videoBtnActivated}"
                  @click=${this.toggleSyncVideo}
                >
                  <vst-ui-icon
                    class="playback-controls__icon"
                    .icon="${K}"
                  ></vst-ui-icon>
                </button>
                <span role="tooltip" position="block-end-start"
                  >${t("Sync Video to Data")}</span
                >
              </vst-style-tooltip>
            `:""}
        <vst-style-tooltip>
          <div style="position: relative;">
            <select
              id="replay_dataset_select"
              ?hidden="${!this.dataSetInfo.length}"
              ?disabled="${this.playing}"
              .selectedIndex="${this._dataSetIndex}"
              @change="${this._updateDataSet}"
            >
              ${this.dataSetInfo.map(e=>l`
                  <option value="${e.id}" .selected="${e.selected}">
                    ${e.name}
                  </option>
                `)}
            </select>
          </div>
          <span role="tooltip" position="block-end-start">${t("Select Data Set")}</span>
        </vst-style-tooltip>
        <section class="playback-controls">
          <vst-style-tooltip>
            <button
              id="replay-play-pause"
              class="playback-controls__btn"
              @click="${this.playing?this.pause:this.play}"
            >
              <vst-ui-icon
                class="playback-controls__icon playback-controls__icon--play-pause"
                .icon="${this.playing?Q:J}"
              ></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-start"
              >${this.playing?t("Pause replay"):t("Play replay")}</span
            >
          </vst-style-tooltip>
          <vst-style-tooltip>
            <button
              id="replay-return"
              class="playback-controls__btn"
              type="button"
              @click="${this.startOver}"
            >
              <vst-ui-icon class="playback-controls__icon" .icon="${Z}"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-start">${t("Restart Replay")}</span>
          </vst-style-tooltip>
          <vst-style-tooltip>
            <button id="replay-step-back" class="playback-controls__btn" @click="${this.prev}">
              <vst-ui-icon
                class="playback-controls__icon"
                .icon="${D}"
              ></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-end">${t("Step Backward")}</span>
          </vst-style-tooltip>
          <vst-style-tooltip>
            <button id="replay-step-forward" class="playback-controls__btn" @click="${this.next}">
              <vst-ui-icon
                class="playback-controls__icon"
                .icon="${X}"
              ></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end-end">${t("Step Forward")}</span>
          </vst-style-tooltip>
        </section>
        <vst-style-tooltip>
          <label id="replay_playback_speed" tabindex="-1">
            <input
              type="number"
              step="any"
              min="0"
              max="${this.maxReplaySpeed}"
              .value="${this.replaySpeed}"
              @change="${this._updatereplaySpeed}"
              @keydown="${this._advancedNumberField}"
            />
            <span id="units" tabindex="-1"
              >${t("x","general","used for playback speed multiplier e.g: 2x")}</span
            >
          </label>
          <span role="tooltip" position="block-end-end"
            >${t("Playback Speed Multiplier")}</span
          >
        </vst-style-tooltip>
        ${y()&&this._frameFeatures?.disabledFeatures.has("replay")?F:l`<vst-style-tooltip id="close_container">
              <button id="close" class="playback-controls__btn" @click="${this.close}">
                <vst-ui-icon class="playback-controls__icon" .icon="${q}"></vst-ui-icon>
              </button>
              <span role="tooltip" position="block-end-end">${t("Close Replay")}</span>
            </vst-style-tooltip>`}
      </div>
    `}};customElements.define("vst-ui-replay-controls",ce);var pe=r`
  /*
 Themable with these properties
  --toolbar-color-bg
  --toolbar-color-icon
  --toolbar-color-icon-hover
  --toolbar-color-icon-hover-bg
*/
  :host {
    background: var(--toolbar-color-bg, var(--vst-color-bg-secondary));
  }

  .toolbar {
    position: relative;
    display: flex;
    height: var(--vst-toolbar-height);
    padding: 0 var(--vst-space-xs);
  }

  /* //////////////////////////// */
  .left-content,
  .right-content {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .left-content {
    min-inline-size: 0;
  }

  .right-content {
    justify-content: flex-end;
  }

  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 var(--vst-space-xs);
  }

  :host(.show-wait) .toolbar-collect {
    z-index: calc(var(--vst-z-popover) + 1);
  }

  ${T(r`.toolbar-collect--secondary`)}

  .toolbar-collect.toolbar-collect--two-line {
    font-size: var(--vst-font-size-xs);
  }
  .toolbar-collect__second-line {
    display: block;
  }

  .toolbar-collect--secondary {
    background: var(--vst-color-brand);
    color: #fff;
    border: 1px solid var(--vst-color-brand);
    margin-inline-start: var(--vst-space-xs);
  }
  .toolbar-collect--secondary:hover {
    background: var(--vst-color-brand-dark);
    color: #fff;
    border: 1px solid var(--vst-color-brand);
  }
  .toolbar-collect--secondary:disabled:hover {
    background: var(--vst-color-brand);
    border: 1px solid var(--vst-color-brand);
    color: #fff;
  }

  ${A(r`.toolbar-collect`)}
  ${T(r`.toolbar-collect`)}


  ${E(r`
      ::slotted(.toolbar-icon) ;
    `)}

  ::slotted(.toolbar-icon) {
    position: relative;
    display: flex;
    align-items: center;
    height: 2.25rem;
    background-color: transparent;
    border-radius: var(--vst-radius);
    border: 1px solid transparent;
    padding: 0 0.3125rem;
    background-clip: padding-box;
    /*  https://stackoverflow.com/a/5612502 */
    font-size: var(--vst-font-size-xs);
    font-weight: bold;
    color: var(--toolbar-color-icon, var(--vst-color-fg-secondary));
    --vst-ui-icon-color: var(--toolbar-color-icon, var(--vst-color-fg-secondary));
  }

  ::slotted(.toolbar-icon:hover),
  ::slotted(.toolbar-icon:focus) {
    outline: 0;
    cursor: pointer;
    background-color: var(--toolbar-color-icon-hover-bg, var(--vst-color-bg));
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: var(--vst-shadow-xs);
    color: var(--toolbar-color-icon-hover, #000);
    --vst-ui-icon-color: var(--toolbar-color-icon-hover, var(--vst-color-fg-primary));
    --toolbar-color-icon-hover-bg: var(--vst-color-btn-toolbar-bg-hover);
  }

  ::slotted(.toolbar-icon:active) {
    background-color: var(--vst-color-bg);
    box-shadow: var(--box-shadow-inset);
  }

  ::slotted(.toolbar-icon:disabled) {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }

  ::slotted(.experiment-meta) {
    --inline-size: auto;
    display: flex;
    flex-basis: auto;
    flex-shrink: 1;
    align-items: center;
    inline-size: fit-content;
    max-inline-size: 100%;
  }
`;var de=class extends m{static get properties(){return{canControl:{type:Boolean,reflect:!0},canKeep:{type:Boolean,reflect:!0},isCollecting:{type:Boolean},collectBtnText:{type:String},collectBtnMoreText:{type:String},dataLoggingEnabled:{type:Boolean},experimentName:{type:String},notify:{type:String,reflect:!0},keepButtonEnabled:{type:Boolean},collectButtonEnabled:{type:Boolean},dataMarksEnabled:{type:Boolean}}}static get styles(){return[b,pe]}constructor(){super();this.canKeep=!1,this.canControl=!1,this.dataLoggingEnabled=!1,this.isCollecting=!1,this.keepButtonEnabled=!0,this.collectButtonEnabled=!0,this.notify="",this.experimentName="",this.collectBtnMoreText=""}connectedCallback(){super.connectedCallback(),this.querySelectorAll("button").forEach(o=>{o.addEventListener("click",i=>{let{action:s}=i.currentTarget.dataset;this.dispatchEvent(new CustomEvent(s,{detail:{anchor:i.currentTarget,orientation:"bottom"}}))})}),document.addEventListener("keydown",o=>{o.keyCode===32&&!this._windowIsFocused&&(this.canControl?this.shadowRoot.getElementById("collect_btn").disabled||this.collectData():this.canKeep&&(this.shadowRoot.querySelector("#keep_btn").disabled||this.keepData()))}),window.addEventListener("focusin",()=>{this._windowIsFocused=!0}),window.addEventListener("focusout",()=>{this._windowIsFocused=!1})}collectData(){let e=this.shadowRoot.getElementById("collect_btn");this.collectButtonEnabled&&(this.collectButtonEnabled=!1,this.isCollecting?this.dispatchEvent(new CustomEvent("stop-collection")):this.dispatchEvent(new CustomEvent("start-collection")),setTimeout(()=>{this.collectButtonEnabled=!0},500)),e.classList.toggle("is-loading"),setTimeout(()=>{e.classList.remove("is-loading")},8e3)}keepData(){this.dispatchEvent(new CustomEvent("keep-point"))}focusKeep(){this.shadowRoot.querySelector("#keep_btn").focus()}get _collectBtnClass(){return this.collectBtnMoreText?"toolbar-collect toolbar-collect--two-line":"toolbar-collect"}_keepButtonEnabledChanged(){let e=this.shadowRoot.querySelector("#keep_btn");e&&this.canKeep&&(this.keepButtonEnabled?e.focus():e.blur())}updated(e){e.forEach((o,i)=>{i==="keepButtonEnabled"&&this._keepButtonEnabledChanged()})}markData(){this.dispatchEvent(new CustomEvent("mark-data",{bubbles:!0,composed:!0}))}render(){return l`
      <div
        class="toolbar"
        id="toolbar"
        ?connected="${this.connected}"
        ?canControl="${this.canControl}"
        ?canKeep="${this.canKeep}"
        ?isCollecting="${this.isCollecting}"
      >
        <div class="left-content">
          <slot name="toolbar_left"></slot>
        </div>

        <div class="center-content">
          <slot name="toolbar_center"></slot>
          ${this.canControl?l`
                <vst-style-tooltip>
                  <button
                    id="collect_btn"
                    class="${this._collectBtnClass}"
                    ?disabled="${!this.collectButtonEnabled}"
                    @click="${this.collectData}"
                  >
                    ${P(this.dataLoggingEnabled,()=>t("Start Logging"),()=>this.isCollecting?t("Stop"):t("Collect"))}
                    ${this.collectBtnMoreText?l`
                          <span class="toolbar-collect__second-line"
                            >${this.collectBtnMoreText}</span
                          >
                        `:""}
                  </button>
                  <span role="tooltip" position="block-end"
                    >${this.isCollecting?t("Stop Collection"):t("Start Collection")}</span
                  >
                </vst-style-tooltip>
              `:""}
          ${this.canKeep&&this.canControl?l`
                <button
                  id="keep_btn"
                  class="toolbar-collect--secondary toolbar-keep"
                  @click="${this.keepData}"
                  ?disabled="${!this.keepButtonEnabled}"
                >
                  ${t("Keep")}
                </button>
              `:""}
          ${this.dataMarksEnabled&&this.canControl?l`
                <button
                  id="mark_btn"
                  class="toolbar-collect--secondary"
                  @click="${this.markData}"
                  ?disabled=${!this.isCollecting}
                >
                  ${t("Mark")}
                </button>
              `:""}
        </div>

        <div class="right-content">
          <slot name="toolbar_right"></slot>
        </div>
      </div>
      <div class="replay-content">
        <slot name="toolbar_replay"></slot>
      </div>
    `}};customElements.define("vst-ui-toolbar",de);var ge="s",he=(f,e=[],o=[])=>{let i=[];return e.forEach(s=>{let a=f.getDataSetByID(s).columnIds.map(c=>f.getColumnById(c)).filter(c=>o.includes(c.groupId));i.push(...a)}),i},me=["graph_1","graph_2","graph_3"],$=class extends G(w)(V(z(C(m)))){static get properties(){return{_showDataLoggingStartedDialog:{state:!0},_showSessionPreferencesDialog:{state:!0},_showEweDialog:{state:!0},_showKeepWaitDialog:{state:!0},_showAboutDialog:{state:!0},_showDataLoggingButton:{state:!0},showAppPreferencesDialog:{type:Boolean},showWhatsNewDialog:{type:Boolean},showDistributeAppDialog:{type:Boolean},showAutoupdateDialog:{type:Boolean},isCollecting:{type:Boolean},canControl:{type:Boolean},canKeep:{type:Boolean},keepButtonEnabled:{type:Boolean},notifyUpdateAvailable:{type:Boolean},notify:{type:Boolean},focusAuthMenu:{type:Boolean},showViewChangeMenu:{type:Boolean},isReplayPlaying:{type:Boolean},syncPaneBtnActivated:{type:Boolean},isReplayClosing:{type:Boolean},experimentName:{type:String},syncControlsSummaryMsg:{type:String},timeColumnGroupI:{type:Number},graphLeftColumn:{type:Array},lice:{type:Object},showSyncInfo:{type:Boolean},dataShareHostingActive:{type:Boolean,reflect:!0},showDataShareStatus:{type:Boolean,reflect:!0},dataShareHostingStatus:{type:String,reflect:!0},auxGraphEnabled:{type:Boolean},timeColumnGroupId:{type:Number},savePending:{type:Boolean},saveError:{type:String},autoSaving:{type:Boolean},eweView:{type:Object},keepWaitMessage:{type:String}}}static get observableProperties(){return{authorized:j,peerid:B,online:ie,errorType:B,isDataShareClient:{store:B,key:"isClient"},examinePositions:L}}get layoutOptions(){let e=[];return g.disabledFeatures.has("graph-view")||e.push({title:t("Graph"),id:"graphs",checked:u.graph_1}),g.disabledFeatures.has("table-view")||e.push({title:t("Data Table"),id:"table",checked:u.table}),g.disabledFeatures.has("meter-view")||e.push({title:t("Meters"),id:"meter",checked:u.meter}),g.disabledFeatures.has("video-view")||e.push({title:t("Video"),id:"video",checked:u.video,proOnly:!this.authorized,proMessage:t("Activate to use Video")}),e.push({title:t("Notes"),id:"notes",checked:u.notes,proOnly:!this.authorized,proMessage:t("Activate to use Notes")}),e}constructor(){super();this._showDataLoggingStartedDialog=!1,this._showSessionPreferencesDialog=!1,this._showEweDialog=!1,this._showKeepWaitDialog=!1,this._showAboutDialog=!1,this.currentApp="graphicalanalysis",this.examinePos=null,this.replaySetUpdatePending=!1,this.serviceWorkerUpdate=!1,this.showWhatsNewDialog=!1,this.showDistributeAppDialog=!1,this.showAppPreferencesDialog=!1,this.showAutoupdateDialog=!1,this.savePending=!1,this.isCollecting=!1,this.canControl=!1,this.canKeep=!1,this.keepButtonEnabled=!1,this.notifyUpdateAvailable=!1,this.notify=!1,this.focusAuthMenu=!1,this.showViewChangeMenu=!1,this.isReplayPlaying=!1,this.syncPaneBtnActivated=!1,this.isReplayClosing=!1,this.experimentName="",this.timeColumnGroupId=null,this.graphLeftColumnIds=[],this.showSyncInfo=!1,this.dataShareHostingActive=!1,this.showDataShareStatus=!1,this.dataShareHostingStatus="",this.auxGraphEnabled=!1,this.eweView={},this.keepWaitMessage="",window._updateAvailable?(this.serviceWorkerUpdate=!0,this.notify="update-available"):window.addEventListener("update-available",()=>{this.serviceWorkerUpdate=!0,this.onAppUpdateUpdateAvailable()})}firstUpdated(){[this.$appUpdate,this.$capture,this.$dataCollection,this.$dataWorld,this.$deviceManager,this.$fileIO,this.$popoverManager,this.$toast,this.$viewManager,this.$gaAppService,this.$gaReplayService,this.$udm]=this.requestServices(["appUpdate","capture","dataCollection","dataWorld","deviceManager","fileIO","popoverManager","toast","viewManager","gaAppService","gaReplayService","udm"]),this.addObservableProperty({store:this.$gaReplayService,key:"isReplayActive"}),this.addObservableProperty({store:this.$gaReplayService,key:"videoSync.enabled",property:"isSyncEnabled"}),this.addObservableProperty({store:this.$gaReplayService,key:"videoSync.dataSyncTime",property:"dataSyncTime"}),this.addObservableProperty({store:this.$gaReplayService,key:"videoSync.videoSyncTime",property:"videoSyncTime"}),this.uiToolbarEl=this.shadowRoot.querySelector(".toolbar"),this.syncDataTimeInputEl=this.shadowRoot.querySelector("#sync_data_time"),this.syncVideoTimeInputEl=this.shadowRoot.querySelector("#sync_video_time"),this.gaProPopoverEl=this.shadowRoot.querySelector("#ga_pro_popover"),this.$dataWorld.on("is-collecting-changed",o=>{this.isCollecting=o});let e=new U;e.bindListeners({source:N,target:this,eventMap:{"new-file":"dispatchCreateNewExperiment","open-file":"dispatchOpenFile"}}),e.bindListeners({source:this.$dataWorld,target:this,eventMap:{"collection-control-changed":"onDataWorldCollectionControlChanged","collection-keep-changed":"onDataWorldCollectionKeepChanged","column-group-added":"onColumnGroupAddedRemoved","column-group-removed":"onColumnGroupAddedRemoved","session-ended":"onSessionEnded","collection-stopped":"onCollectionStopped"}}),e.bindListeners({source:this.$dataCollection,target:this,eventMap:{"keep-values-ready":"onKeepValuesReady","collection-params-changed":"_onDataCollectionCollectionParamsChanged"}}),e.bindListeners({source:this.$appUpdate,target:this,eventMap:{"update-available":"onAppUpdateUpdateAvailable","update-not-available":"onAppUpdateUpdateNotAvailable"}}),e.bindListeners({source:this.$gaReplayService,target:this,eventMap:{"replay-playing-changed":"onReplayPlayingChanged"}}),this.$appUpdate.checkForUpdates()}stateChanged(e){let o={};Object.entries(e.graphs).forEach(([i,s])=>{o[i]=s.columnIds?.left||[]}),this.graphLeftColumnIds=o}updated(e){e.forEach((o,i)=>{switch(i){case"examinePositions":this.updateReplaySyncOffset(this.examinePositions,o);break;default:}})}updateReplaySyncOffset(e,o){let{graph_1:{xPosition:i,examineHidden:s}={}}=e,{graph_1:{xPosition:n}={}}=o,{graphs:{graph_1:{baseColumnId:p}={}}={}}=w.getState();if(!s&&i!==n){if(!this.$gaReplayService||!this.$dataWorld)return;let{linkDataInputToExamine:a}=this.$gaReplayService,c=this.$dataWorld.getColumnById(p);if(!a||!c)return;let h=x(c.formatStr,oe(i,c.units,"s")),{videoId:S}=this.$gaAppService;this.$gaReplayService.updateVideoSync({dataSyncTime:h},S)}}startCollection(){let{$dataCollection:e,$dataWorld:o}=this,i=e.getCollectionParams().mode.match("events"),s=!1;return i&&!o.isCurrentDataSetEmpty(!0)?new Promise(n=>{this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:t("Append or Create New?"),choiceRequired:!0,content:t("Append additional data to the current data set or create a new data set?"),actions:[{id:"append",message:t("Append"),variant:"outline",onClick:async()=>{s=!0,this.dispatchEvent(O("message_box"))}},{id:"create_new",message:t("Create new Data Set"),onClick:async()=>{this.dispatchEvent(O("message_box"))}}]},onClose:()=>{o.startCollection({appendToDataSet:s}),this.keepButtonEnabled=!0,n()}}}))}):(o.startCollection({appendToDataSet:s}),this.keepButtonEnabled=i,this.$dataCollection.timeBasedParams.remoteLogging&&(this._showDataLoggingStartedDialog=!0),Promise.resolve())}async stopCollection(){try{await this.$dataWorld.stopCollection()}catch(e){console.error(e)}}onCollectionStopped(){this.keepButtonEnabled=!1}keepPoint(){let{$dataCollection:e}=this,o=e.eventBasedParams;e.keepData().then(async()=>{if(o.accumulate>0||o.average){let i="";o.average?i=t("Averaging over 10 seconds"):o.accumulate>0&&(i=t(`Collecting data over ${o.accumulate} seconds`)),await import("./vst-ui-keep-wait-ZL4CLIW4.js"),this.keepWaitMessage=i,this._showKeepWaitDialog=!0}})}cancelKeepWait(){this.$dataCollection.cancelKeep(),this.uiToolbarEl.focusKeep(),this._showKeepWaitDialog=!1}_onDataCollectionCollectionParamsChanged(e){this._showDataLoggingButton=e.params.remoteLogging}async onKeepValuesReady(e){let{$dataWorld:o,$dataCollection:i}=this;if(!this.keepButtonEnabled)return;let s=o.getColumns().filter(a=>a.type==="event"&&a.setId===o.currentDataSet.id)[0],n=s.id,p=[];Object.keys(e).length===0&&console.error("No values returned from backend"),Object.keys(e).forEach(a=>{let c=o.getColumnById(a);if(c){let h=e[a];p.push({column:c,value:h})}else console.warn(`keepData: Unable to find column for id: ${a}`)}),p.length&&(this._showKeepWaitDialog=!1,i.mode==="selected-events"?o.addEventData(n,null,p):(await import("./vst-ui-ewe-NMXVF6FH.js"),this.eweView={eventColumn:s,keepResults:p},this._showEweDialog=!0))}keptPoint({detail:{eventColId:e,userValue:o,readings:i}}){let s=this.authorized;this.$dataWorld.addEventData(e,o,i,s),this.uiToolbarEl.focusKeep(),this._showEweDialog=!1}cancelKeepDialog(){this.uiToolbarEl.focusKeep(),this._showEweDialog=!1}static _handleViewMenuItemChanged({detail:{layoutOptions:e,graphOptions:o,changedLayoutOptionId:i}}){if(!this.showViewChangeMenu)return;let s=e.filter(a=>a.checked).map(a=>a.id);if(matchMedia("(orientation: portrait) and (max-width: 30em)").matches&&s.length>2){let a=2;s=[i,...["graphs","table","meter","video"].filter(h=>h!==i)].filter(h=>s.includes(h)).slice(0,a)}let n=Object.fromEntries([...o.map(a=>[a.id,!1]),...e.map(a=>[a.id,!1])]);s.forEach(a=>{a==="graphs"?(n.graph_1=!0,o.length&&(n.graph_2=o[1].selected,n.graph_3=o[2].selected)):(a==="video"||a==="table"||a==="meter"||a==="notes")&&(n[a]=!0)});let{openedPanes:p}=u;if(i==="notes"&&n.notes&&p>=3){let a=["meter","video","table"];for(let c=0;c<p-2;c++)n[a[c]]=!1}u.updateLayout(n),this.$gaAppService.setVideoVisibility(n.video),this.$udm.blockInfo&&(this.$udm.blockInfo.layout=n)}onSessionEnded(){this.syncPaneBtnActivated=!1}onDataWorldCollectionControlChanged(e){this.canControl=e}onDataWorldCollectionKeepChanged(e){this.canKeep=e}onColumnGroupAddedRemoved(){let{$dataWorld:e}=this,o=e.getColumnGroups().find(i=>i.type==="time");this.timeColumnGroupId=o?o.id:null}_showToolbarFileMenu(e){let o=e.detail.anchor.querySelector(".experiment-meta__icon"),i=[];y()||i.push({id:"new",title:t("New Experiment"),selectAction:()=>this.dispatchCreateNewExperiment()},[{id:"open",title:t("Open..."),selectAction:()=>this.dispatchOpenFile()}],[{id:"save",title:t("Save"),selectAction:()=>this.dispatchSaveFile()},{id:"save_as",title:t("Save As..."),selectAction:()=>this.dispatchSaveFile({saveAs:!0})}]);let s=this.requestService("urlHandler");s.experimentId&&!s.sessionId&&i.push([{id:"reset",title:t("Reset"),selectAction:async()=>{fetch(`https://2e1cohznn2.execute-api.us-west-2.amazonaws.com/beta/${s.experimentId}`,{method:"DELETE"}).catch(console.error),this.dispatchEvent(new CustomEvent("experiment-reset",{composed:!0,bubbles:!0}))}}]),g.disabledFeatures.has("export")||i.push([{id:"export",title:t("Export"),class:"has-submenu",selectAction:()=>this._showExports(o)}]),i.length>0&&this.$popoverManager.presentPopoverList({anchor:o,orientation:"bottom",items:i})}async _showExports(){let e=[...Array.from(document.querySelector("#app").shadowRoot.querySelector("#main_content").shadowRoot.querySelectorAll(".app-graph:not([hidden])")).map((o,i)=>({name:x(t("Graph %s"),i+1),type:"graph",output:"image",extension:"png",graphEl:o})),{name:t("CSV"),type:"csv",output:"file",extension:"csv",tooltip:t("Comma Separated Values")}];y()||e.push({name:t("AMBL"),type:"ambl",output:"file",extension:"ambl",tooltip:t("Legacy File Type")}),this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"export",params:{tabs:e,notes:await this.$dataWorld.getNotesText()}}}))}async _toggleAuthMenu(){this.gaProPopoverEl.show(),this.gaProPopoverEl.open||j.resetErrorType()}_toggleViewChangeMenu(){this.showViewChangeMenu=!this.showViewChangeMenu}_showToolbarMoreOptions(e){let{anchor:o,orientation:i}=e.detail,{$popoverManager:s}=this,n=[];y()?n.push({id:"version",title:`v${this.requestService("appManifest").getAppVersion()}`,type:"text"}):(n.push({id:"about",title:t("About"),selectAction:async()=>{await import("./ga-about-C4D5CY5W.js"),this._showAboutDialog=!0}},{id:"app_preferences",title:t("App Preferences"),selectAction:async()=>{await import("./vst-ui-app-preferences-UP4CFICW.js"),this.showAppPreferencesDialog=!0}},{id:"session_preferences",title:t("Session Preferences"),selectAction:async()=>{await import("./vst-core-session-preferences-CY4LCNRW.js"),this._showSessionPreferencesDialog=!0}},{id:"user_manual",title:t("User Manual"),selectAction:()=>{window.open("https://www.vernier.com/support/ga4/","_blank")}}),this.authorized&&n.push({id:"distribute_app",title:t("Distribute App"),selectAction:async()=>{await import("./vst-ui-distribute-app-4RAMFDYM.js"),this.showDistributeAppDialog=!0}}),n.push({id:"check_for_updates",title:this.notifyUpdateAvailable||this.serviceWorkerUpdate?t("Update Available"):t("Check for Updates"),include:this.serviceWorkerUpdate||W(),className:this.notifyUpdateAvailable||this.serviceWorkerUpdate?"show-red-dot":"",selectAction:async()=>{if(this.serviceWorkerUpdate){(await navigator.serviceWorker.getRegistration()).waiting.postMessage({type:"SKIP_WAITING"});return}await import("./vst-core-autoupdate-KMANBZ5V.js"),this.showAutoupdateDialog=!0}},{id:"whats_new",title:t("What's New"),className:this.notifyWhatsNew?"show-green-dot":"",selectAction:async()=>{await import("./vst-ui-changelog-J3KYNMMN.js"),this.showWhatsNewDialog=!0,this.notifyWhatsNew&&(this.notifyWhatsNew=!1,this.notify="")}})),s.presentPopoverList({anchor:o,orientation:i,items:n})}dispatchCreateNewExperiment(){this.dispatchEvent(new CustomEvent("create-new-experiment"))}dispatchOpenFile(){this.dispatchEvent(new CustomEvent("open-file"))}dispatchExportFile(e={}){this.dispatchEvent(new CustomEvent("export-file",{detail:e}))}dispatchSaveFile(e={}){this.dispatchEvent(new CustomEvent("save-file",{detail:e}))}dispatchViewChanged(e){this.dispatchEvent(new CustomEvent("view-changed",{detail:e}))}onAppUpdateUpdateAvailable(){W()&&(this.notifyUpdateAvailable=!0,this.notify="update-available")}onAppUpdateUpdateNotAvailable(){this.notify==="update-available"&&(this.notify="")}onReplayPlayingChanged({playing:e}){this.isReplayPlaying=e}_disableReplay(){this.$gaReplayService.exitReplayMode(),this.isReplayClosing=!1}_toggleReplay(){this.isReplayActive?this._disableReplay():this._enableReplay()}async _enableReplay(){let{$dataWorld:e,$gaReplayService:o}=this,[i]=[...this.graphLeftColumnIds.graph_1].reverse(),s=e.getColumnById(i),{setId:n}=s||{},a=e.getDataSets().map(v=>({id:v.id,name:v.name})),[c]=[...a].reverse(),h=a.find(v=>v.id===n)?n:c.id,S=_(this.graphLeftColumnIds,v=>[...new Set(v.map(I=>e.getColumnById(I)?.groupId))]),ue=_(S,v=>he(e,[h],v));Object.entries(ue).forEach(([v,I])=>{w.dispatch(R(I.map(ve=>ve.id),v,"left"))}),await o.enterReplayMode(h)}async _startReplay({detail:e}){let{$gaReplayService:o}=this,{dataSetId:i}=e;["graph_1","graph_2","graph_3"].forEach(s=>{L.updateExaminePosition(s,{examineHidden:!0})}),await o.updateDataSet(i),o.startDataPlayback()}_pauseReplay(){let{$gaReplayService:e}=this;e.pauseDataPlayback()}_rewind(){let{$gaReplayService:e}=this;e.rewind()}_stepBackReplay(){let{$gaReplayService:e}=this;e._stepBackDataPlayback()}_stepForwardReplay(){let{$gaReplayService:e}=this;e._stepForwardDataPlayback()}async _onReplayDataSetSelected({detail:e}){let{$gaReplayService:o,$dataWorld:i}=this,{dataSetId:s}=e,n="left";if(this.replaySetUpdatePending)return;this.replaySetUpdatePending=!0;let p=_(this.graphLeftColumnIds,c=>[...new Set(c.map(h=>i.getColumnById(h)?.groupId))]);me.forEach(c=>{w.dispatch(R([],c,n))}),await o.updateDataSet(s);let a=_(p,c=>he(i,[s],c));Object.entries(a).forEach(([c,h])=>{w.dispatch(R(h.map(S=>S.id),c,n))}),this.replaySetUpdatePending=!1}_onPlaybackSpeedChanged({detail:e}){let o=Number.isFinite(e.replaySpeed)?e.replaySpeed:1;this.$gaReplayService.updateReplayRate(o)}_onSyncPaneBtnToggled(){this.syncPaneBtnActivated=!this.syncPaneBtnActivated,this.syncPaneBtnActivated&&import("./vst-ui-form-X4TYOKT2.js"),this.$gaReplayService.updateSyncPaneOpen(this.syncPaneBtnActivated)}_onSyncSwitchChanged({detail:e}){let{videoId:o}=this.$gaAppService;this.$gaReplayService.updateVideoSync({enabled:e},o),e&&(this.$gaAppService.setVideoVisibility(!0,o),u.updateLayout({video:!0}))}get dataSetInfo(){let{$dataWorld:e,$gaReplayService:o}=this;return(e?.getDataSets()||[]).map(s=>({id:s.id,name:s.name,selected:s.id===`${o?.currentDataSetId}`}))}get syncControlsSummaryMsg(){let e=this.dataSyncTime-this.videoSyncTime;return e<0?x(t("Video will begin playback %s s before data set playback"),Math.abs(e).toFixed(2)):e>0?x(t("The data set will begin playback %s s before the video"),e.toFixed(2)):$.defaultSyncControlMsg}static get defaultSyncControlMsg(){return t("Video will begin playback at the same time as data set playback")}_onSyncTimeChanged(){let e=parseFloat(this.syncDataTimeInputEl.value),o=parseFloat(this.syncVideoTimeInputEl.value);if(Number.isFinite(e)&&Number.isFinite(o)){let{videoId:i}=this.$gaAppService;this.$gaReplayService.updateVideoSync({videoSyncTime:o,dataSyncTime:e},i)}}_toggleSyncInfo(){this.showSyncInfo=!this.showSyncInfo}showDataShareHost(){this.dispatchEvent(new CustomEvent("show-datashare-host"))}toggleDataShareStatus(){this.dispatchEvent(new CustomEvent("toggle-datashare-status"))}static get styles(){return[b,r`
        #data-logging-started-dialog h3 {
          font-size: var(--vst-font-size-m);
          font-weight: normal;
        }
        #data-logging-started-dialog ul {
          color: var(--vst-color-brand);
          list-style-type: disc;
          padding-inline-start: 1.5em;
        }
        #data-logging-started-dialog li::marker {
          font-size: var(--vst-font-size-l);
        }
        .experiment-meta__icon {
          flex-shrink: 0;
          width: 1.5rem;
          height: 2.175rem;
          padding: 0.3125rem 0;
          position: relative;
        }

        .experiment-meta__title {
          flex: 1;
          width: 100%;
          overflow: hidden;
          text-transform: initial;
          margin-inline-start: var(--vst-space-2xs);
        }

        .experiment-meta__filename {
          color: var(--vst-color-fg-primary);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .data-sharing-id-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /*----------  Sync Pane  ----------*/
        .sync-pane {
          background-color: var(--vst-color-bg-tertiary);
          padding: var(--vst-space-xs);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        ${d("m",r`
            .sync-pane {
              flex-direction: row;
              justify-content: space-evenly;
              margin-block-end: 0;
            }
          `)}

        .sync-enable {
          display: flex;
          align-items: center;
          margin-block-end: var(--vst-space-xs);
        }

        ${d("m",r`
            .sync-enable {
              margin-block-end: 0;
            }
          `)}

        .sync-toggle {
          --hover-bg: var(--vst-color-bg-primary);
        }

        .sync-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin: 0 var(--vst-space-xs);
        }

        .sync-controls[disabled] form {
          opacity: 0.5;
        }

        .sync-controls form {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 0 var(--vst-space-m);
        }

        ${d("s",r`
            .sync-controls form {
              flex-wrap: nowrap;
            }
          `)}

        .sync-controls form input {
          --hover-bg: white;
          margin: 0 var(--vst-space-xs);
        }

        .sync-controls form label {
          white-space: nowrap;
        }

        .sync-input {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          width: 100%;
          margin: 0 var(--vst-space-xs);
          margin-block-end: var(--vst-space-xs);
        }

        .sync-input label {
          inline-size: 10ch;
        }

        ${d("s",r`
            .sync-input {
              margin-block-end: 0;
              width: auto;
            }

            .sync-input > input {
              max-inline-size: 4.5rem;
            }

            .sync-input label {
              inline-size: auto;
            }
          `)}

        .sync-summary {
          min-inline-size: 18ch;
        }

        .sync-form {
          display: flex;
          align-items: center;
          inline-size: min-content;
        }

        .status-dot {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 5px;
          height: 5px;
          border-radius: var(--vst-radius);
        }

        .status-dot[status='offline'] {
          background-color: var(--vst-color-bg-primary);
        }

        .status-dot[status='connected'] {
          background-color: var(--vst-color-success);
        }

        .status-dot[status='error'] {
          background-color: var(--vst-color-danger);
        }

        .btn[variant='toolbar'] {
          --background: var(--vst-color-toolbar-bg);
          --vst-ui-icon-color: var(--vst-color-btn-toolbar);
          --hover-bg: var(--vst-color-btn-toolbar-bg-hover);
        }

        #overflow_btn {
          position: relative;
        }

        #overflow_btn.update-available:after,
        .experiment-meta__icon[autoSaving]:after {
          content: '';
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
          position: absolute;
          pointer-events: none;
          margin: 0px;
          top: -1px;
          right: -1px;
          background-color: var(--vst-color-danger);
        }
        .experiment-meta__icon[autoSaving]:after {
          background-color: var(--vst-color-success-200);
        }
        .experiment-meta__icon[autoSaving][savePending]:after {
          background-color: var(--vst-color-neutral);
        }
        .experiment-meta__icon[autoSaving][saveError]:after {
          background-color: var(--vst-color-danger);
        }

        #session-preferences {
          --overflow: visible;
        }
      `]}renderDialogs(){return l`
      <vst-ui-dialog
        @dialog-close="${()=>{this._showAboutDialog=!1}}"
        id="ga-about"
        ?open="${this._showAboutDialog}"
      >
        <h3 slot="header">${t("About")}</h3>
        <ga-about
          slot="content"
          @submit-auth="${e=>{this.dispatchEvent(new CustomEvent("submit-auth",{detail:e.detail}))}}"
        ></ga-about>
      </vst-ui-dialog>

      <vst-ui-dialog
        @dialog-close="${()=>{this._showEweDialog=!1}}"
        id="keep-point"
        ?open="${this._showEweDialog}"
      >
        <h3 slot="header">${t("Keep Point")}</h3>
        ${k(this._showEweDialog,l`
            <vst-ui-ewe
              slot="content"
              .view="${this.eweView}"
              @kept-point="${e=>{this.keptPoint(e)}}"
              @cancel="${()=>{this.cancelKeepDialog()}}"
            ></vst-ui-ewe>
          `)}
      </vst-ui-dialog>

      <vst-ui-dialog
        @dialog-close="${()=>{this._showKeepWaitDialog=!1}}"
        id="keep-wait"
        ?open="${this._showKeepWaitDialog}"
      >
        <h3 slot="header">${t("Working...")}</h3>
        <vst-ui-keep-wait
          slot="content"
          .message="${this.keepWaitMessage}"
          @cancel="${()=>{this.cancelKeepWait()}}"
        ></vst-ui-keep-wait>
      </vst-ui-dialog>

      <vst-ui-dialog
        @dialog-close="${()=>{this.showAppPreferencesDialog=!1}}"
        id="app-preferences"
        ?open="${this.showAppPreferencesDialog}"
      >
        <h3 slot="header">${t("App Preferences")}</h3>
        <vst-ui-app-preferences slot="content"></vst-ui-app-preferences>
      </vst-ui-dialog>
      <vst-ui-dialog
        @dialog-close="${()=>{this.showDistributeAppDialog=!1}}"
        id="distribute-app"
        ?open="${this.showDistributeAppDialog}"
      >
        <h3 slot="header">${t("Distribute Vernier Graphical Analysis")}&reg;</h3>
        <vst-ui-distribute-app
          .license="${this.license}"
          .currentApp="${this.currentApp}"
          slot="content"
        ></vst-ui-distribute-app>
      </vst-ui-dialog>
      <vst-ui-dialog
        @dialog-close="${()=>{this._showSessionPreferencesDialog=!1}}"
        id="session-preferences"
        ?open="${this._showSessionPreferencesDialog}"
      >
        <h3 slot="header">${t("Session Preferences")}</h3>
        <vst-core-session-preferences slot="content"></vst-core-session-preferences>
      </vst-ui-dialog>
      <vst-ui-dialog
        @dialog-close="${()=>{this.showAutoupdateDialog=!1}}"
        id="autoupdate"
        ?open="${this.showAutoupdateDialog}"
      >
        <h3 slot="header">${t("App Updates")}</h3>
        <vst-core-autoupdate slot="content"></vst-core-autoupdate>
      </vst-ui-dialog>
      <vst-ui-dialog
        @dialog-close="${()=>{this.showWhatsNewDialog=!1}}"
        id="whats-new"
        ?open="${this.showWhatsNewDialog}"
      >
        <h3 slot="header">${t("What's New")}</h3>
        <vst-ui-changelog slot="content" .releases="${ae}"></vst-ui-changelog>
      </vst-ui-dialog>
      <vst-ui-dialog
        id="data-logging-started-dialog"
        no-close
        ?open=${this._showDataLoggingStartedDialog}
        @dialog-close=${()=>{this._showDataLoggingStartedDialog=!1}}
      >
        <h2 slot="header">${t("Remote Logging Started")}</h2>
        <div slot="content">
          <h3>${t("Data collection has started in logging mode.")}</h3>
          <ul>
            <li>
              <p>
                ${P(this.$deviceManager?.getConnectedDevices().length>0,()=>t("Disconnect the USB cable now."),()=>t("Your sensor has been disconnected."))}
              </p>
            </li>
            <li>
              <p>
                ${t(`A double flash of a green LED indicates that the collection
                  is in progress. A double flash of an orange LED indicates that
                  data collection is complete.`)}
              </p>
            </li>
            <li>
              <p>${t("Reconnect your sensor to retrieve logged data.")}</p>
            </li>
            <li>
              <p>
                ${t("You do not have to wait for data collection to complete to retrieve logged data.")}
              </p>
            </li>
          </ul>
        </div>
        <div slot="footer" footer-buttons>
          <button
            class="btn"
            type="button"
            ?disabled=${this.$deviceManager?.hasConnectedDevices}
            @click=${()=>{this._showDataLoggingStartedDialog=!1}}
          >
            ${t("Ok")}
          </button>
        </div>
      </vst-ui-dialog>
    `}render(){return l`
      <style>
        /* TODO: Move these back into the get styles() as long as it works in Firefox and Safari */
        .toolbar {
          border-bottom: 1px solid var(--vst-color-bg-primary);
        }
      </style>
      <h2 visually-hidden>${t("Toolbar")}</h2>
      <vst-ui-toolbar
        class="toolbar"
        notify="${this.notify}"
        ?canControl=${this.canControl&&!this.isReplayActive&&!g.disabledFeatures.has("data-collection")}
        ?isCollecting="${this.isCollecting}"
        ?canKeep="${this.canKeep}"
        .dataLoggingEnabled=${this._showDataLoggingButton}
        .keepButtonEnabled="${this.keepButtonEnabled}"
        .isDataShareClient="${this.isDataShareClient}"
        .dataMarksEnabled="${this.$dataCollection?.dataMarksEnabled??!1}"
        @start-collection="${this.startCollection}"
        @stop-collection="${this.stopCollection}"
        @show-file-menu="${this._showToolbarFileMenu}"
        @show-more-options="${this._showToolbarMoreOptions}"
        @keep-point="${this.keepPoint}"
      >
        <vst-style-tooltip slot="toolbar_left">
          <button
            aria-label="${t("File Menu")}"
            class="btn experiment-meta"
            variant="toolbar"
            id="new_btn"
            data-action="show-file-menu"
          >
            <vst-style-tooltip>
              <span
                class="experiment-meta__icon"
                ?autoSaving="${this.autoSaving}"
                ?savePending="${this.savePending}"
                ?saveError="${this.saveError}"
              >
                <vst-ui-icon .icon="${H}"></vst-ui-icon>
              </span>
              <span role="tooltip" position="block-end-start"
                >${this.savePending?t("Save Pending"):t("Saved")}</span
              >
            </vst-style-tooltip>
            <span class="experiment-meta__title">
              <span class="experiment-meta__filename" id="experiment_name">
                ${y()?"":this.experimentName}
              </span>
            </span>
          </button>
          <span role="tooltip" position="block-end-start">${t("File Menu")}</span>
        </vst-style-tooltip>
        ${k(!y(),l`
            <vst-ui-pro-only
              slot="toolbar_right"
              preview-position="bottom-right"
              infoToolTipPosition="block-end"
              feature-name="${t("Online Data Sharing")}"
              .authorizedClickHandler="${this.dataShareHostingActive?this.toggleDataShareStatus.bind(this):this.showDataShareHost.bind(this)}"
            >
              <vst-style-tooltip>
                <button
                  aria-label="${this.dataShareHostingActive?t("Data sharing session status"):t("Host a data sharing session")}"
                  class="btn"
                  variant="toolbar"
                  id="data_sharing_btn"
                  ?hidden="${this.isDataShareClient}"
                >
                  <vst-ui-icon .icon="${te}" color="var(--vst-color-fg-primary)"></vst-ui-icon>
                  <div
                    class="status-dot"
                    ?hidden="${!this.dataShareHostingActive}"
                    status="${this.errorType===""?"connected":"offline"}"
                  ></div>
                </button>
                <span role="tooltip" position="block-end"
                  >${this.dataShareHostingActive?t("Data sharing session status"):t("Host a data sharing session")}</span
                >
              </vst-style-tooltip>
            </vst-ui-pro-only>
          `)}

        <div slot="toolbar_replay">
          <vst-ui-replay-controls
            advanced
            show-video-btn
            ?small="${se()}"
            ?hidden="${!this.isReplayActive}"
            .playing="${this.isReplayPlaying}"
            .dataSetInfo="${this.dataSetInfo}"
            .replaySpeed="${this.$gaReplayService?.replayRate||1}"
            .videoBtnActivated="${this.syncPaneBtnActivated}"
            @closing="${()=>{this.isReplayClosing=!0}}"
            @closed="${this._disableReplay}"
            @replay-start="${this._startReplay}"
            @replay-pause="${this._pauseReplay}"
            @replay-dataset-changed="${this._onReplayDataSetSelected}"
            @replay-start-over="${this._rewind}"
            @replay-rewind="${this._stepBackReplay}"
            @replay-advance="${this._stepForwardReplay}"
            @replay-speed-changed="${this._onPlaybackSpeedChanged}"
            @video-btn-toggled="${this._onSyncPaneBtnToggled}"
          ></vst-ui-replay-controls>
          <div
            class="sync-pane"
            ?hidden="${!this.syncPaneBtnActivated||this.isReplayClosing||!this.isReplayActive}"
          >
            <vst-ui-form class="sync-controls" ?disabled="${!this.isSyncEnabled}">
              <div class="sync-enable">
                <vst-ui-switch
                  class="sync-toggle"
                  .checked="${this.isSyncEnabled}"
                  .label="${t("Sync data with video")}"
                  @switch-changed="${this._onSyncSwitchChanged}"
                ></vst-ui-switch>
                ${window.matchMedia("(max-width: 699px)").matches?l`
                      <vst-ui-dropdown ?open="${this.showSyncInfo}" position="bottom">
                        <vst-style-tooltip slot="anchor">
                          <button
                            aria-label="${t("Replay video sync info")}"
                            class="btn"
                            variant="icon"
                            size="xs"
                            margin="inline-start-xs"
                            id="sync_toggle_btn"
                            @click="${this._toggleSyncInfo}"
                          >
                            <vst-ui-icon .icon="${M}"></vst-ui-icon>
                          </button>
                          <span role="tooltip" position="block-end"
                            >${t("Replay video sync info")}</span
                          >
                        </vst-style-tooltip>
                        <output slot="content" class="sync-summary"
                          >${this.syncControlsSummaryMsg}</output
                        >
                      </vst-ui-dropdown>
                    `:""}
              </div>

              <div class="sync-form">
                <form>
                  <div class="sync-input">
                    <label>${t("Data Set Time")}</label>
                    <input
                      id="sync_data_time"
                      value="0"
                      .value="${this.dataSyncTime}"
                      ?disabled="${!this.isSyncEnabled}"
                      @input="${this._onSyncTimeChanged}"
                      margin="inline-start-s inline-end-xs"
                    />
                    <span>s</span>
                  </div>

                  <div class="sync-input">
                    <label>${t("Video Time")}</label>
                    <input
                      id="sync_video_time"
                      value="0"
                      .value="${this.videoSyncTime}"
                      ?disabled="${!this.isSyncEnabled}"
                      @input="${this._onSyncTimeChanged}"
                    />
                    <span>${ge}</span>
                  </div>
                </form>
                ${window.matchMedia("(min-width: 700px)").matches?l`
                      <vst-ui-dropdown ?open="${this.showSyncInfo}" position="bottom-right">
                        <vst-style-tooltip slot="anchor">
                          <button
                            aria-label="${t("Replay video sync info")}"
                            class="btn"
                            variant="icon"
                            size="xs"
                            id="sync_toggle_btn"
                            @focusout="${this._toggleSyncInfo}"
                            @click="${this._toggleSyncInfo}"
                          >
                            <vst-ui-icon .icon="${M}"></vst-ui-icon>
                          </button>
                          <span role="tooltip" position="block-end-end"
                            >${t("Replay video sync info")}</span
                          >
                        </vst-style-tooltip>
                        <output class="sync-summary" slot="content"
                          >${this.syncControlsSummaryMsg}</output
                        >
                      </vst-ui-dropdown>
                    `:""}
              </div>
            </vst-ui-form>
          </div>
        </div>
        ${this.isDataShareClient?l`
              <div slot="toolbar_center">${this.isCollecting?t("Collecting"):""}</div>
            `:""}
        <vst-ui-pro-only
          slot="toolbar_right"
          preview-position="bottom-right"
          feature-name="${t("Replay")}"
          .authorizedClickHandler="${this._toggleReplay.bind(this)}"
        >
          <vst-style-tooltip>
            <button
              aria-label="${t("Enable Replay")}"
              class="btn"
              variant="toolbar"
              id="toggle_replay_btn"
              ?hidden="${!this.timeColumnGroupId||this.auxGraphEnabled||g.disabledFeatures.has("replay")}"
              ?disabled="${this.isCollecting}"
              ?active="${this.inReplayMode}"
            >
              <vst-ui-icon .icon="${D}"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-end">${t("Enable Replay")}</span>
          </vst-style-tooltip>
        </vst-ui-pro-only>

        ${k(!g.disabledFeatures.has("view-state"),l`
            <vst-ui-dropdown
              position="bottom-right"
              variant="dropdown"
              slot="toolbar_right"
              ?open="${this.showViewChangeMenu}"
              @closed="${this._toggleViewChangeMenu}"
            >
              <vst-style-tooltip slot="anchor">
                <button
                  aria-label="${t("View Options")}"
                  class="btn"
                  variant="toolbar"
                  id="view_change_btn"
                  @click="${this._toggleViewChangeMenu}"
                >
                  <vst-ui-icon .icon="${ee}"></vst-ui-icon>
                </button>
                <span role="tooltip" position="block-end">${t("View Options")}</span>
              </vst-style-tooltip>
              <vst-ui-content-layout-options
                slot="content"
                .layoutOptions="${this.layoutOptions}"
                .graphOptions="${[{title:t("1 Graph"),id:"graph_1",selected:u.graph_1},{title:t("2 Graphs"),id:"graph_2",selected:u.graph_2},{title:t("3 Graphs"),id:"graph_3",selected:u.graph_3}]}"
                @layout-option-changed="${$._handleViewMenuItemChanged}"
              ></vst-ui-content-layout-options>
            </vst-ui-dropdown>
          `)}

        <vst-style-tooltip slot="toolbar_right">
          <button
            aria-label="${t("Other Options")}"
            id="overflow_btn"
            class="btn toolbar-overflow ${this.notify}"
            variant="toolbar"
            data-action="show-more-options"
          >
            <vst-ui-icon .icon="${Y}"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-end-end">${t("Other Options")}</span>
        </vst-style-tooltip>
      </vst-ui-toolbar>

      ${this.renderDialogs()}
    `}};customElements.define("ga-toolbar",$);export{$ as GaToolbar};
