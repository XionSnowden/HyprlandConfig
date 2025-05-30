import"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{c as r}from"./chunk-H5EO627A.js";import{c as i}from"./chunk-CRHRJPRJ.js";import{a}from"./chunk-OTWO5H3C.js";import{b as t,c as s,h as e}from"./chunk-BVG7RORO.js";import"./chunk-CM6X6NVN.js";var n=t`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(-10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(10px, 0, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 0;
      transform: none;
    }
  }

  @keyframes fadeOutDownFar {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
  }

  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    25% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    50% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
    75% {
      box-shadow: 0 0 10px 2px var(--vst-color-info);
    }
    100% {
      box-shadow: 0 0 0 0 var(--vst-color-info);
    }
  }

  :host {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: -5em;
    left: 0;
    z-index: 99999;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: var(--transition-default);
    justify-content: center;
    color: var(--vst-color-bg-tertiary);
  }

  :host(.show) {
    visibility: visible;
    opacity: 1;
    bottom: 0;
  }

  .toast {
    display: grid;
    max-inline-size: 100%;
    width: 100%;
    height: auto;
    background: var(--vst-color-dark-300);
    grid-template-columns: auto 1fr;
    pointer-events: auto;
    cursor: pointer;
    color: var(--vst-color-light-100);
  }

  ${a("s",t`
      .toast {
        width: auto;
        margin-block-end: 0.5em;
        border-radius: 0.25rem;
      }
    `)}

  .toast p {
    margin: 0;
    padding: 1rem 1.5rem;
  }
  .toast button {
    padding: 1rem 1.5rem;
  }

  ${r(t`button`)}
  button {
    text-transform: uppercase;
    font-size: 14px;
    color: var(--vst-color-success);
    margin-inline-start: 2em;
  }
  button:hover {
    color: var(--vst-color-success-dark);
  }

  #message {
    color: var(--vst-color-light-100);
  }
`;var c=class extends e{static get properties(){return{message:{type:String},actionMessage:{type:String}}}show(){this.classList.add("show")}hide(){this.classList.remove("show")}doneClicked(){this.dispatchEvent(new CustomEvent("doneClicked"))}actionClicked(){this.dispatchEvent(new CustomEvent("actionClicked"))}static get styles(){return[i,n]}render(){return s`
      <div
        id="toast"
        class="toast"
        @keyup="${o=>o.keyCode===13?this.doneClicked:""}"
        @click="${this.doneClicked}"
      >
        <p id="message">${this.message}</p>
        ${this.actionMessage?s`
              <button
                id="action"
                @keyup="${o=>o.keyCode===13?this.actionClicked:""}"
                @click="${this.actionClicked}"
              >
                ${this.actionMessage}
              </button>
            `:""}
      </div>
    `}};customElements.define("vst-ui-toast",c);
