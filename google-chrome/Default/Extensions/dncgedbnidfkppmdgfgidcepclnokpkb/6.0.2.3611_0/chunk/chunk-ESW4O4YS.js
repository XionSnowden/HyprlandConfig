import{c as s}from"./chunk-CRHRJPRJ.js";import{b as e,c as r,h as i}from"./chunk-BVG7RORO.js";var x=e`
  :host {
    width: 2rem;
    height: 2rem;
  }

  .battery {
    width: 100%;
    height: 100%;
  }
  .battery--high {
    fill: var(--vst-color-success-ui);
  }
  .battery--medium {
    fill: var(--vst-color-warning-ui);
  }
  .battery--low {
    fill: var(--vst-color-danger-ui);
  }

  .lightning-bolt {
    mix-blend-mode: multiply;
  }
`;var o=14,n=20,l=class extends i{static get properties(){return{percent:{type:Number},charging:{type:Boolean,reflect:!0}}}constructor(){super();this.percent=100,this.charging=!1}get _indicatorColor(){let t="high";return this.percent<10?t="low":this.percent>=10&&this.percent<25&&(t="medium"),t}get _indicatorHeight(){return o*(this.percent/100)}get _indicatorY(){return n-this._indicatorHeight}static get styles(){return[s,x]}render(){return r`
      <svg
        class="battery battery--${this._indicatorColor}"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="https://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        style="enable-background:new 0 0 24 24;"
        xml:space="preserve"
      >
        <path
          class="battery-outline"
          d="M16,20H8V6h8 M16.7,4H15V2H9v2H7.3C6.6,4,6,4.6,6,5.3v15.3C6,21.4,6.6,22,7.3,22h9.3c0.7,0,1.3-0.6,1.3-1.3V5.3C18,4.6,17.4,4,16.7,4z"
        />

        <!-- max height is 14. (100%). y starts at 6 (top). 20 is bottom. -->
        <rect
          class="charge-bar"
          x="8"
          y="6"
          width="8"
          height="14"
          style="height: xxxxxxxxxxxxxxxxxxxxxxxx}px; y: xxxxxxxxxxxxxxxxxxxpx;"
        />

        <polyline
          class="lightning-bolt"
          ?hidden="${!this.charging}"
          points="11,20 11,14.5 9,14.5 13,7 13,12.5 15,12.5 "
        />
      </svg>
    `}};customElements.define("vst-ui-battery",l);export{l as a};
