import"./chunk-YDEDSSMD.js";import"./chunk-6PXAOD22.js";import{a as n}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import{c as s}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as t,c as i,h as e}from"./chunk-BVG7RORO.js";import"./chunk-3AUSJ54I.js";import"./chunk-CM6X6NVN.js";var u=t`
  ${n}

  input {
    inline-size: 100%;
  }
`;var r=class extends e{static get properties(){return{inputValue:{type:String},inputDescription:{type:String},buttonString:{type:String}}}constructor(){super();this.buttonString="Save",this.inputValue="",this.inputDescription=""}firstUpdated(){this.inputEl=this.shadowRoot.querySelector("#name_input"),this.inputEl.setSelectionRange(0,this.inputEl.value.length)}submit(){this.dispatchEvent(new CustomEvent("submit",{detail:this.inputValue}))}cancel(){this.dispatchEvent(new CustomEvent("cancel"))}_handleInputValue(l){this.inputValue=l.target.value}static get styles(){return[s,u]}render(){return i`
      <vst-ui-form @submit="${this.submit}">
        <form id="rename_form">
          <label visually-hidden for="name_input">${this.inputDescription}</label>
          <input
            type="text"
            placeholder="${this.inputDescription}"
            id="name_input"
            required
            .value="${this.inputValue}"
            @input="${this._handleInputValue}"
          />
          <button class="btn" id="submit" type="submit" margin="block-start-l inline-start-auto">
            ${this.buttonString}
          </button>
        </form>
      </vst-ui-form>
    `}};customElements.define("vst-ui-prompt",r);export{r as VstUiPrompt};
