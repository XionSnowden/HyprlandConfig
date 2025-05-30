import{b as i,c as r,h as e}from"./chunk-BVG7RORO.js";var s=i`
  .spinner {
    display: inline-block;
    position: relative;
    width: var(--size, var(--vst-space-l));
    height: var(--size, var(--vst-space-l));
  }
  .spinner div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--size, var(--vst-space-l));
    height: var(--size, var(--vst-space-l));
    margin: 2px;
    border: 2px solid var(--spinner-color, var(--vst-color-brand));
    border-radius: 50%;
    animation: video-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--spinner-color, var(--vst-color-brand)) transparent transparent transparent;
  }

  .spinner div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .spinner div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .spinner div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes video-loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var n=class extends e{static get styles(){return s}render(){return r`
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `}};customElements.define("vst-style-spinner",n);
