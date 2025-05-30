import"./chunk-6PXAOD22.js";import{a as h}from"./chunk-374UYNGS.js";import"./chunk-H5EO627A.js";import{c as l}from"./chunk-CRHRJPRJ.js";import"./chunk-OTWO5H3C.js";import{b as i,c as s,h as o}from"./chunk-BVG7RORO.js";import{b as m}from"./chunk-WFJOWCXF.js";import{c as a}from"./chunk-LI3RKPGW.js";import"./chunk-CM6X6NVN.js";var c=i`
  ${h}

  input {
    inline-size: 100%;
    background-color: var(--vst-color-bg);
  }
`;var u=r=>typeof r=="string"&&r.length>0,g=class extends o{static get properties(){return{name:{type:String},nameDescription:{type:String},nameMaxLength:{type:Number},nameMaxLengthError:{type:String},errorMessage:{type:String}}}constructor(){super();this.name="",this.nameDescription="",this.nameMaxLength=500,this.nameMaxLengthError="",this.errorMessage=""}firstUpdated(){this.nameEl=this.shadowRoot.querySelector("#name_input"),this.nameEl.select(),this.validate()}save(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("save",{detail:this.name}))}cancel(){this.dispatchEvent(new CustomEvent("cancel"))}nameInputChanged(t){this.name=t.target.value,setTimeout(()=>this.validate())}validate(){let t=()=>{let n=()=>m(this.getText("Name cannot exceed %s characters"),this.nameMaxLength),e=this.nameMaxLengthError;return e.length>0?e:n()};if(this.nameMaxLength!==void 0){let e=this.name.length>this.nameMaxLength?t():"";this.nameEl.setCustomValidity(e),this.errorMessage=e}}static get styles(){return[l,c]}render(){return s`
      <form id="rename_form" @submit="${this.save}">
        <label visually-hidden for="name_input"></label>
        <input
          type="text"
          placeholder="${this.nameDescription}"
          id="name_input"
          required
          .value="${this.name}"
          @input="${this.nameInputChanged}"
        />
        ${u(this.errorMessage)?s`
              <p class="caption" variant="error" margin="block-start-xs">${this.errorMessage}</p>
            `:""}
        <button class="btn" id="submit" type="submit" margin="block-start-m inline-start-auto">
          ${a("Rename")}
        </button>
      </form>
    `}};customElements.define("vst-core-rename",g);
