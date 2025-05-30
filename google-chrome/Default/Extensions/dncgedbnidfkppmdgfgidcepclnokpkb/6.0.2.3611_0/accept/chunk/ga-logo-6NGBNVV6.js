import"./chunk-LKCWDLZQ.js";var P=window,L=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),J=new WeakMap,T=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(L&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&J.set(e,t))}return t}toString(){return this.cssText}},F=n=>new T(typeof n=="string"?n:n+"",void 0,Z);var D=(n,t)=>{L?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=P.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},B=L?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return F(e)})(n):n;var O,N=window,G=N.trustedTypes,mt=G?G.emptyScript:"",Q=N.reactiveElementPolyfillSupport,V={toAttribute(n,t){switch(t){case Boolean:n=n?mt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},X=(n,t)=>t!==n&&(t==t||n==n),k={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:X},$=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let l=this[t];this[e]=i,this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||k}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(B(i))}else t!==void 0&&e.push(B(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return D(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=k){var i;let l=this.constructor._$Ep(t,s);if(l!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:V).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(l):this.setAttribute(l,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,l=i._$Ev.get(t);if(l!==void 0&&this._$El!==l){let o=i.getPropertyOptions(l),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:V;this._$El=l,this[l]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||X)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,l)=>this[l]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var l;return(l=i.hostUpdate)===null||l===void 0?void 0:l.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},Q==null||Q({ReactiveElement:$}),((O=N.reactiveElementVersions)!==null&&O!==void 0?O:N.reactiveElementVersions=[]).push("1.6.1");var j,R=window,g=R.trustedTypes,Y=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,I="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,tt="?"+_,gt=`<${tt}>`,y=document,M=()=>y.createComment(""),w=n=>n===null||typeof n!="object"&&typeof n!="function",et=Array.isArray,yt=n=>et(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",W=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,f=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,lt=/^(?:script|style|textarea|title)$/i,rt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ht=rt(1),zt=rt(2),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),at=new WeakMap,S=y.createTreeWalker(y,129,null,!1),St=(n,t)=>{let e=n.length-1,s=[],i,l=t===2?"<svg>":"",o=x;for(let r=0;r<e;r++){let h=n[r],v,a,d=-1,u=0;for(;u<h.length&&(o.lastIndex=u,a=o.exec(h),a!==null);)u=o.lastIndex,o===x?a[1]==="!--"?o=st:a[1]!==void 0?o=it:a[2]!==void 0?(lt.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=f):a[3]!==void 0&&(o=f):o===f?a[0]===">"?(o=i??x,d=-1):a[1]===void 0?d=-2:(d=o.lastIndex-a[2].length,v=a[1],o=a[3]===void 0?f:a[3]==='"'?ot:nt):o===ot||o===nt?o=f:o===st||o===it?o=x:(o=f,i=void 0);let U=o===f&&n[r+1].startsWith("/>")?" ":"";l+=o===x?h+gt:d>=0?(s.push(v),h.slice(0,d)+I+h.slice(d)+_+U):h+_+(d===-2?(s.push(void 0),r):U)}let c=l+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Y!==void 0?Y.createHTML(c):c,s]},E=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let l=0,o=0,c=t.length-1,r=this.parts,[h,v]=St(t,e);if(this.el=E.createElement(h,s),S.currentNode=this.el.content,e===2){let a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(i=S.nextNode())!==null&&r.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let a=[];for(let d of i.getAttributeNames())if(d.endsWith(I)||d.startsWith(_)){let u=v[o++];if(a.push(d),u!==void 0){let U=i.getAttribute(u.toLowerCase()+I).split(_),H=/([.?@])?(.*)/.exec(u);r.push({type:1,index:l,name:H[2],strings:U,ctor:H[1]==="."?dt:H[1]==="?"?pt:H[1]==="@"?ut:z})}else r.push({type:6,index:l})}for(let d of a)i.removeAttribute(d)}if(lt.test(i.tagName)){let a=i.textContent.split(_),d=a.length-1;if(d>0){i.textContent=g?g.emptyScript:"";for(let u=0;u<d;u++)i.append(a[u],M()),S.nextNode(),r.push({type:2,index:++l});i.append(a[d],M())}}}else if(i.nodeType===8)if(i.data===tt)r.push({type:2,index:l});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)r.push({type:7,index:l}),a+=_.length-1}l++}}static createElement(t,e){let s=y.createElement("template");return s.innerHTML=t,s}};function C(n,t,e=n,s){var i,l,o,c;if(t===A)return t;let r=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,h=w(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==h&&((l=r==null?void 0:r._$AO)===null||l===void 0||l.call(r,!1),h===void 0?r=void 0:(r=new h(n),r._$AT(n,e,s)),s!==void 0?((o=(c=e)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=C(n,r._$AS(n,t.values),r,s)),t}var ct=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;let{el:{content:s},parts:i}=this._$AD,l=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);S.currentNode=l;let o=S.nextNode(),c=0,r=0,h=i[0];for(;h!==void 0;){if(c===h.index){let v;h.type===2?v=new b(o,o.nextSibling,this,t):h.type===1?v=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(v=new vt(o,this,t)),this.u.push(v),h=i[++r]}c!==(h==null?void 0:h.index)&&(o=S.nextNode(),c++)}return l}p(t){let e=0;for(let s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},b=class{constructor(t,e,s,i){var l;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(l=i==null?void 0:i.isConnected)===null||l===void 0||l}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),w(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==p&&w(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:i}=t,l=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=E.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===l)this._$AH.p(s);else{let o=new ct(l,this),c=o.v(this.options);o.p(s),this.T(c),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new E(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let l of t)i===e.length?e.push(s=new b(this.S(M()),this.S(M()),this,this.options)):s=e[i],s._$AI(l),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},z=class{constructor(t,e,s,i,l){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let l=this.strings,o=!1;if(l===void 0)t=C(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{let c=t,r,h;for(t=l[0],r=0;r<l.length-1;r++)h=C(this,c[s+r],e,r),h===A&&(h=this._$AH[r]),o||(o=!w(h)||h!==this._$AH[r]),h===p?t=p:t!==p&&(t+=(h??"")+l[r+1]),this._$AH[r]=h}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},dt=class extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Et=g?g.emptyScript:"",pt=class extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Et):this.element.removeAttribute(this.name)}},ut=class extends z{constructor(t,e,s,i,l){super(t,e,s,i,l),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:p)===A)return;let i=this._$AH,l=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||l);l&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},vt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var $t=R.litHtmlPolyfillSupport;$t==null||$t(E,b),((j=R.litHtmlVersions)!==null&&j!==void 0?j:R.litHtmlVersions=[]).push("2.7.0");var _t=(n,t,e)=>{var s,i;let l=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t,o=l._$litPart$;if(o===void 0){let c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;l._$litPart$=o=new b(t.insertBefore(M(),c),c,void 0,e??{})}return o._$AI(n),o};var q,K;var m=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_t(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}};m.finalized=!0,m._$litElement$=!0,(q=globalThis.litElementHydrateSupport)===null||q===void 0||q.call(globalThis,{LitElement:m});var ft=globalThis.litElementPolyfillSupport;ft==null||ft({LitElement:m});((K=globalThis.litElementVersions)!==null&&K!==void 0?K:globalThis.litElementVersions=[]).push("3.3.0");var At=class extends m{render(){return ht`
      <svg version="1.1" class="logo" viewBox="0 0 263.33 42.67">
        <path
          fill="#EE3524"
          d="M46.1,23.5c-1,3.61-2.63,8.72-5.95,9.34c-3.08,0.56-8.9-2.56-18.79-20.65C19.07,8.01,16.41,6,13.54,6.21
                  C6.07,6.74,0.25,22.66,0,23.33l0.1,0.33v5l1.57-4.68C3.28,19.66,8.5,8.38,13.75,8c2.11-0.15,4.09,1.55,6.01,5.05
                  C27.71,27.59,34.1,34.7,39.33,34.7c0.34,0,0.83-0.03,1.16-0.09c2.53-0.47,3.61-2.65,5.61-5.23V23.5z"
        ></path>
        <g>
          <path
            fill="#949699"
            d="M9.28,23.75l1,2.23c0.91-0.41,1.79-0.67,2.62-0.77l-0.29-2.43C11.54,22.91,10.42,23.24,9.28,23.75z"
          ></path>
          <path
            fill="#949699"
            d="M4.67,26.73l1.56,1.88c0.81-0.67,1.61-1.25,2.38-1.73l-1.29-2.07C6.45,25.34,5.56,25.99,4.67,26.73z"
          ></path>
          <path
            fill="#949699"
            d="M20.14,25.69l-1.77,1.68c0.59,0.62,1.17,1.39,1.71,2.28l2.09-1.27C21.54,27.34,20.86,26.44,20.14,25.69z"
          ></path>
          <path
            fill="#949699"
            d="M46.1,34.29c-1,0.44-1.18,0.86-1.79,1.24l1.35,2.08c0.13-0.08,0.44-0.17,0.44-0.25V34.29z"
          ></path>
          <path
            fill="#949699"
            d="M0.82,30.47l1.81,1.64c0.7-0.78,1.41-1.51,2.11-2.16l-1.68-1.77C2.31,28.87,1.56,29.64,0.82,30.47z"
          ></path>
          <path fill="#949699" d="M0.1,35.78c0-0.74,1.12-1.46,1.69-2.14l-1.69-1.4V35.78z"></path>
          <path
            fill="#949699"
            d="M14.63,25.23c0.83,0.13,1.63,0.46,2.37,0.96l1.37-2.02c-1.04-0.71-2.17-1.16-3.35-1.35L14.63,25.23z"
          ></path>
          <path
            fill="#949699"
            d="M34.94,37.62l-0.21,2.43c0.52,0.04,1.03,0.07,1.54,0.07c0.59,0,1.2-0.03,1.8-0.09l-0.24-2.43
                      C36.86,37.7,35.91,37.7,34.94,37.62z"
          ></path>
          <path
            fill="#949699"
            d="M23.21,30.14l-2.06,1.32c0.61,0.95,1.27,1.83,1.98,2.63l1.83-1.61C24.34,31.76,23.75,30.98,23.21,30.14z"
          ></path>
          <path
            fill="#949699"
            d="M39.72,37.29l0.54,2.38c1.1-0.25,2.16-0.59,3.17-1.03l-0.97-2.24C41.59,36.78,40.67,37.08,39.72,37.29z"
          ></path>
          <path
            fill="#949699"
            d="M29.34,38.69c1.02,0.45,2.09,0.79,3.18,1.03l0.52-2.39c-0.94-0.21-1.85-0.5-2.73-0.88L29.34,38.69z"
          ></path>
          <path
            fill="#949699"
            d="M24.68,35.66c0.84,0.75,1.74,1.43,2.68,1.99l1.26-2.09c-0.81-0.49-1.58-1.07-2.31-1.72L24.68,35.66z"
          ></path>
        </g>
        <g>
          <path
            fill="#5A5B5D"
            d="M67.6,26.34c-0.94-0.62-1.96-0.92-3.7-0.92c-3.1,0-5.16,2.25-5.16,5.26c0,3.16,2.27,5.26,5.06,5.26
                      c1.33,0,1.68-0.13,2.16-0.23v-4.08h-2.83v-1.58h4.76v6.99c-0.73,0.25-2,0.6-4.1,0.6c-4.26,0-7.09-2.73-7.09-7.01
                      c0-4.14,3-6.89,7.11-6.89c1.96,0,2.83,0.29,3.95,0.67L67.6,26.34z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M71.37,23.96h3.29c2.66,0,5.22,0.42,5.22,3.64c0,1.64-1.21,2.79-2.77,3.06v0.04
                      c0.6,0.23,0.89,0.52,1.31,1.35l2.54,5.35h-2.2l-2.06-4.66c-0.6-1.31-1.23-1.31-2.25-1.31h-1.16v5.97h-1.93V23.96z M73.29,29.73
                      h1.64c1.83,0,2.91-0.81,2.91-2.1c0-1.21-0.92-1.98-2.7-1.98h-1.85V29.73z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M87.31,23.96h2.02l5.68,13.44h-2.1l-1.37-3.39h-6.59l-1.37,3.39h-2.02L87.31,23.96z M88.25,25.77
                      l-2.68,6.66h5.35L88.25,25.77z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M96.64,23.96h3.52c2.75,0,5.04,0.96,5.04,4.02c0,2.98-2.33,4.04-4.76,4.04h-1.89v5.37h-1.93V23.96z
                      M98.57,30.33h1.91c1.19,0,2.7-0.6,2.7-2.37c0-1.69-1.77-2.31-2.96-2.31h-1.64V30.33z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M107.75,23.96h1.92v5.62h6.43v-5.62h1.92V37.4h-1.92v-6.12h-6.43v6.12h-1.92V23.96z"
          ></path>
          <path fill="#5A5B5D" d="M121.75,23.96h1.93V37.4h-1.93V23.96z"></path>
          <path
            fill="#5A5B5D"
            d="M136.57,26.17c-0.85-0.5-1.79-0.75-2.77-0.75c-3.1,0-5.16,2.23-5.16,5.26c0,3.16,2.27,5.26,5.06,5.26
                      c0.96,0,2.25-0.25,2.93-0.65l0.12,1.87c-1.02,0.42-2.27,0.48-3.06,0.48c-4.26,0-7.09-2.73-7.09-7.01c0-4.14,3-6.89,7.11-6.89
                      c1.04,0,2.06,0.15,3.02,0.58L136.57,26.17z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M143.5,23.96h2.02l5.68,13.44h-2.1l-1.37-3.39h-6.59l-1.37,3.39h-2.02L143.5,23.96z M144.44,25.77
                      l-2.68,6.66h5.35L144.44,25.77z"
          ></path>
          <path fill="#5A5B5D" d="M153.31,23.96h1.93V35.7h5.62v1.69h-7.55V23.96z"></path>
          <path
            fill="#5A5B5D"
            d="M172.95,23.96h2.02l5.68,13.44h-2.1l-1.37-3.39h-6.59l-1.37,3.39h-2.02L172.95,23.96z M173.9,25.77
                      l-2.68,6.66h5.35L173.9,25.77z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M182.77,23.96h2.62l5.93,10.82h0.04V23.96h1.93V37.4h-2.46l-6.08-11.05h-0.04V37.4h-1.93V23.96z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M200.75,23.96h2.02l5.68,13.44h-2.1l-1.37-3.39h-6.59l-1.37,3.39h-2.02L200.75,23.96z M201.69,25.77
                      l-2.68,6.66h5.35L201.69,25.77z"
          ></path>
          <path fill="#5A5B5D" d="M210.56,23.96h1.93V35.7h5.62v1.69h-7.55V23.96z"></path>
          <path
            fill="#5A5B5D"
            d="M222,31.77l-5.26-7.82H219l4,6.03l3.91-6.03h2.25l-5.24,7.82v5.62H222V31.77z"
          ></path>
          <path
            fill="#5A5B5D"
            d="M237,25.98c-0.98-0.39-1.52-0.56-2.52-0.56c-1.08,0-2.35,0.39-2.35,1.79c0,2.58,5.78,1.98,5.78,6.41
                      c0,2.87-2.21,4.01-4.91,4.01c-0.94,0-1.87-0.27-2.75-0.56l0.19-1.79c0.65,0.27,1.81,0.65,2.79,0.65c1.1,0,2.64-0.62,2.64-2.2
                      c0-3-5.78-2.18-5.78-6.35c0-2.39,1.89-3.66,4.31-3.66c0.89,0,1.94,0.15,2.87,0.48L237,25.98z"
          ></path>
          <path fill="#5A5B5D" d="M240.71,23.96h1.93V37.4h-1.93V23.96z"></path>
          <path
            fill="#5A5B5D"
            d="M252.36,25.98c-0.98-0.39-1.52-0.56-2.52-0.56c-1.08,0-2.35,0.39-2.35,1.79c0,2.58,5.78,1.98,5.78,6.41
                      c0,2.87-2.21,4.01-4.91,4.01c-0.94,0-1.87-0.27-2.75-0.56l0.19-1.79c0.65,0.27,1.81,0.65,2.79,0.65c1.1,0,2.64-0.62,2.64-2.2
                      c0-3-5.78-2.18-5.78-6.35c0-2.39,1.89-3.66,4.31-3.66c0.89,0,1.94,0.15,2.87,0.48L252.36,25.98z"
          ></path>
        </g>
      </svg>
    `}};customElements.define("ga-logo",At);export{At as GaLogo};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
