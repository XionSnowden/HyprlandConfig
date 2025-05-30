var Rv=Object.create;var Xr=Object.defineProperty,Bv=Object.defineProperties,Fv=Object.getOwnPropertyDescriptor,Hv=Object.getOwnPropertyDescriptors,Nv=Object.getOwnPropertyNames,ja=Object.getOwnPropertySymbols,Wv=Object.getPrototypeOf,Aa=Object.prototype.hasOwnProperty,Vv=Object.prototype.propertyIsEnumerable;var Ta=(t,e,r)=>e in t?Xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Be=(t,e)=>{for(var r in e||(e={}))Aa.call(e,r)&&Ta(t,r,e[r]);if(ja)for(var r of ja(e))Vv.call(e,r)&&Ta(t,r,e[r]);return t},Oa=(t,e)=>Bv(t,Hv(e)),Po=t=>Xr(t,"__esModule",{value:!0});var Jr=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var V=(t,e)=>()=>(t&&(e=t(t=0)),e);var Do=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),It=(t,e)=>{Po(t);for(var r in e)Xr(t,r,{get:e[r],enumerable:!0})},Uv=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Nv(e))!Aa.call(t,o)&&o!=="default"&&Xr(t,o,{get:()=>e[o],enumerable:!(r=Fv(e,o))||r.enumerable});return t},gt=t=>Uv(Po(Xr(t!=null?Rv(Wv(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Ro,Bo,ai,$a,Fo,La,h,li,Ho,ci=V(()=>{Ro=window,Bo=Ro.ShadowRoot&&(Ro.ShadyCSS===void 0||Ro.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ai=Symbol(),$a=new WeakMap,Fo=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Bo&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=$a.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&$a.set(r,e))}return e}toString(){return this.cssText}},La=t=>new Fo(typeof t=="string"?t:t+"",void 0,ai),h=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,s,l)=>o+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[l+1],t[0]);return new Fo(r,t,ai)},li=(t,e)=>{Bo?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{let o=document.createElement("style"),s=Ro.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,t.appendChild(o)})},Ho=Bo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return La(r)})(t):t});var di,No,za,qv,Pa,ui,Da,pi,Mt,Wo=V(()=>{ci();ci();No=window,za=No.trustedTypes,qv=za?za.emptyScript:"",Pa=No.reactiveElementPolyfillSupport,ui={toAttribute(t,e){switch(e){case Boolean:t=t?qv:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(o){r=null}}return r}},Da=(t,e)=>e!==t&&(e==e||t==t),pi={attribute:!0,type:String,converter:ui,reflect:!1,hasChanged:Da},Mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((r,o)=>{let s=this._$Ep(o,r);s!==void 0&&(this._$Ev.set(s,o),e.push(s))}),e}static createProperty(e,r=pi){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,r);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(s){let l=this[e];this[r]=s,this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let s of o)this.createProperty(s,r[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)r.unshift(Ho(s))}else e!==void 0&&r.push(Ho(e));return r}static _$Ep(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;let r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return li(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r,o=pi){var s;let l=this.constructor._$Ep(e,o);if(l!==void 0&&o.reflect===!0){let u=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:ui).toAttribute(r,o.type);this._$El=e,u==null?this.removeAttribute(l):this.setAttribute(l,u),this._$El=null}}_$AK(e,r){var o;let s=this.constructor,l=s._$Ev.get(e);if(l!==void 0&&this._$El!==l){let u=s.getPropertyOptions(l),f=typeof u.converter=="function"?{fromAttribute:u.converter}:((o=u.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?u.converter:ui;this._$El=l,this[l]=f.fromAttribute(r,u.type),this._$El=null}}requestUpdate(e,r,o){let s=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Da)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,l)=>this[l]=s),this._$Ei=void 0);let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var l;return(l=s.hostUpdate)===null||l===void 0?void 0:l.call(s)}),this.update(o)):this._$Ek()}catch(s){throw r=!1,this._$Ek(),s}r&&this._$AE(o)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Mt.finalized=!0,Mt.elementProperties=new Map,Mt.elementStyles=[],Mt.shadowRootOptions={mode:"open"},Pa==null||Pa({ReactiveElement:Mt}),((di=No.reactiveElementVersions)!==null&&di!==void 0?di:No.reactiveElementVersions=[]).push("1.6.1")});function ur(t,e,r=t,o){var s,l,u,f;if(e===Kt)return e;let v=o!==void 0?(s=r._$Co)===null||s===void 0?void 0:s[o]:r._$Cl,S=Qr(e)?void 0:e._$litDirective$;return(v==null?void 0:v.constructor)!==S&&((l=v==null?void 0:v._$AO)===null||l===void 0||l.call(v,!1),S===void 0?v=void 0:(v=new S(t),v._$AT(t,r,o)),o!==void 0?((u=(f=r)._$Co)!==null&&u!==void 0?u:f._$Co=[])[o]=v:r._$Cl=v),v!==void 0&&(e=ur(t,v._$AS(t,e.values),v,o)),e}var mi,Vo,ar,Ra,fi,jt,Ba,Gv,lr,Yr,Qr,Fa,Kv,vi,eo,Ha,Na,Gt,Wa,Va,Ua,qa,K,Ga,Kt,Ce,Ka,cr,Zv,dr,Za,pr,to,Xa,Xv,Ja,Ya,Qa,el,tl,Uo=V(()=>{Vo=window,ar=Vo.trustedTypes,Ra=ar?ar.createPolicy("lit-html",{createHTML:t=>t}):void 0,fi="$lit$",jt=`lit$${(Math.random()+"").slice(9)}$`,Ba="?"+jt,Gv=`<${Ba}>`,lr=document,Yr=()=>lr.createComment(""),Qr=t=>t===null||typeof t!="object"&&typeof t!="function",Fa=Array.isArray,Kv=t=>Fa(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",vi=`[ 	
\f\r]`,eo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ha=/-->/g,Na=/>/g,Gt=RegExp(`>|${vi}(?:([^\\s"'>=/]+)(${vi}*=${vi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wa=/'/g,Va=/"/g,Ua=/^(?:script|style|textarea|title)$/i,qa=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),K=qa(1),Ga=qa(2),Kt=Symbol.for("lit-noChange"),Ce=Symbol.for("lit-nothing"),Ka=new WeakMap,cr=lr.createTreeWalker(lr,129,null,!1),Zv=(t,e)=>{let r=t.length-1,o=[],s,l=e===2?"<svg>":"",u=eo;for(let v=0;v<r;v++){let S=t[v],I,y,j=-1,$=0;for(;$<S.length&&(u.lastIndex=$,y=u.exec(S),y!==null);)$=u.lastIndex,u===eo?y[1]==="!--"?u=Ha:y[1]!==void 0?u=Na:y[2]!==void 0?(Ua.test(y[2])&&(s=RegExp("</"+y[2],"g")),u=Gt):y[3]!==void 0&&(u=Gt):u===Gt?y[0]===">"?(u=s??eo,j=-1):y[1]===void 0?j=-2:(j=u.lastIndex-y[2].length,I=y[1],u=y[3]===void 0?Gt:y[3]==='"'?Va:Wa):u===Va||u===Wa?u=Gt:u===Ha||u===Na?u=eo:(u=Gt,s=void 0);let A=u===Gt&&t[v+1].startsWith("/>")?" ":"";l+=u===eo?S+Gv:j>=0?(o.push(I),S.slice(0,j)+fi+S.slice(j)+jt+A):S+jt+(j===-2?(o.push(void 0),v):A)}let f=l+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ra!==void 0?Ra.createHTML(f):f,o]},dr=class{constructor({strings:e,_$litType$:r},o){let s;this.parts=[];let l=0,u=0,f=e.length-1,v=this.parts,[S,I]=Zv(e,r);if(this.el=dr.createElement(S,o),cr.currentNode=this.el.content,r===2){let y=this.el.content,j=y.firstChild;j.remove(),y.append(...j.childNodes)}for(;(s=cr.nextNode())!==null&&v.length<f;){if(s.nodeType===1){if(s.hasAttributes()){let y=[];for(let j of s.getAttributeNames())if(j.endsWith(fi)||j.startsWith(jt)){let $=I[u++];if(y.push(j),$!==void 0){let A=s.getAttribute($.toLowerCase()+fi).split(jt),P=/([.?@])?(.*)/.exec($);v.push({type:1,index:l,name:P[2],strings:A,ctor:P[1]==="."?Xa:P[1]==="?"?Ja:P[1]==="@"?Ya:to})}else v.push({type:6,index:l})}for(let j of y)s.removeAttribute(j)}if(Ua.test(s.tagName)){let y=s.textContent.split(jt),j=y.length-1;if(j>0){s.textContent=ar?ar.emptyScript:"";for(let $=0;$<j;$++)s.append(y[$],Yr()),cr.nextNode(),v.push({type:2,index:++l});s.append(y[j],Yr())}}}else if(s.nodeType===8)if(s.data===Ba)v.push({type:2,index:l});else{let y=-1;for(;(y=s.data.indexOf(jt,y+1))!==-1;)v.push({type:7,index:l}),y+=jt.length-1}l++}}static createElement(e,r){let o=lr.createElement("template");return o.innerHTML=e,o}};Za=class{constructor(e,r){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var r;let{el:{content:o},parts:s}=this._$AD,l=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:lr).importNode(o,!0);cr.currentNode=l;let u=cr.nextNode(),f=0,v=0,S=s[0];for(;S!==void 0;){if(f===S.index){let I;S.type===2?I=new pr(u,u.nextSibling,this,e):S.type===1?I=new S.ctor(u,S.name,S.strings,this,e):S.type===6&&(I=new Qa(u,this,e)),this.u.push(I),S=s[++v]}f!==(S==null?void 0:S.index)&&(u=cr.nextNode(),f++)}return l}p(e){let r=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},pr=class{constructor(e,r,o,s){var l;this.type=2,this._$AH=Ce,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=s,this._$Cm=(l=s==null?void 0:s.isConnected)===null||l===void 0||l}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ur(this,e,r),Qr(e)?e===Ce||e==null||e===""?(this._$AH!==Ce&&this._$AR(),this._$AH=Ce):e!==this._$AH&&e!==Kt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kv(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==Ce&&Qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(lr.createTextNode(e)),this._$AH=e}$(e){var r;let{values:o,_$litType$:s}=e,l=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=dr.createElement(s.h,this.options)),s);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===l)this._$AH.p(o);else{let u=new Za(l,this),f=u.v(this.options);u.p(o),this.T(f),this._$AH=u}}_$AC(e){let r=Ka.get(e.strings);return r===void 0&&Ka.set(e.strings,r=new dr(e)),r}k(e){Fa(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,s=0;for(let l of e)s===r.length?r.push(o=new pr(this.S(Yr()),this.S(Yr()),this,this.options)):o=r[s],o._$AI(l),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cm=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}},to=class{constructor(e,r,o,s,l){this.type=1,this._$AH=Ce,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ce}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,o,s){let l=this.strings,u=!1;if(l===void 0)e=ur(this,e,r,0),u=!Qr(e)||e!==this._$AH&&e!==Kt,u&&(this._$AH=e);else{let f=e,v,S;for(e=l[0],v=0;v<l.length-1;v++)S=ur(this,f[o+v],r,v),S===Kt&&(S=this._$AH[v]),u||(u=!Qr(S)||S!==this._$AH[v]),S===Ce?e=Ce:e!==Ce&&(e+=(S??"")+l[v+1]),this._$AH[v]=S}u&&!s&&this.j(e)}j(e){e===Ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Xa=class extends to{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ce?void 0:e}},Xv=ar?ar.emptyScript:"",Ja=class extends to{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ce?this.element.setAttribute(this.name,Xv):this.element.removeAttribute(this.name)}},Ya=class extends to{constructor(e,r,o,s,l){super(e,r,o,s,l),this.type=5}_$AI(e,r=this){var o;if((e=(o=ur(this,e,r,0))!==null&&o!==void 0?o:Ce)===Kt)return;let s=this._$AH,l=e===Ce&&s!==Ce||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,u=e!==Ce&&(s===Ce||l);l&&this.element.removeEventListener(this.name,this,s),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},Qa=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ur(this,e)}},el=Vo.litHtmlPolyfillSupport;el==null||el(dr,pr),((mi=Vo.litHtmlVersions)!==null&&mi!==void 0?mi:Vo.litHtmlVersions=[]).push("2.7.0");tl=(t,e,r)=>{var o,s;let l=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:e,u=l._$litPart$;if(u===void 0){let f=(s=r==null?void 0:r.renderBefore)!==null&&s!==void 0?s:null;l._$litPart$=u=new pr(e.insertBefore(Yr(),f),f,void 0,r??{})}return u._$AI(t),u}});var gi,hi,ie,rl,ol=V(()=>{Wo();Wo();Uo();Uo();ie=class extends Mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;let o=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=o.firstChild),o}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Kt}};ie.finalized=!0,ie._$litElement$=!0,(gi=globalThis.litElementHydrateSupport)===null||gi===void 0||gi.call(globalThis,{LitElement:ie});rl=globalThis.litElementPolyfillSupport;rl==null||rl({LitElement:ie});((hi=globalThis.litElementVersions)!==null&&hi!==void 0?hi:globalThis.litElementVersions=[]).push("3.3.0")});var nl=V(()=>{});var G=V(()=>{Wo();Uo();ol();nl()});function Jv(t){let{statusText:e}=t,r;return e===""&&(r=new Error(400)),r}function il(t,e={timeout:7e4}){return new Promise((r,o)=>{let s=3e3,l,u=function(){clearTimeout(l),r.apply(this,arguments)},f=function(){clearTimeout(l),o.apply(this,arguments)};function v(){let S=new XMLHttpRequest;S.open("GET",t),S.onload=()=>{S.status===200||S.status===0?u(S.response):S.status===503?(console.warn(`503: Server is busy, retrying after ${s} milliseconds`),clearTimeout(l),l=setTimeout(v,s)):f(new Error(S.status))},S.onerror=()=>{f(new Jv(S))},S.ontimeout=()=>{f(new Error(408))},S.timeout=e.timeout,S.send()}v()})}function Yv(t,e){return new Promise((r,o)=>{il(t,e).then(s=>{try{r(JSON.parse(s))}catch(l){o(l)}}).catch(o)})}var At,ro=V(()=>{At={get:il,getJSON:Yv}});function eg(t){return`strings/${t}/messages.json`}var uy,Qv,bi,sl,al,Zt,he,tg,oo=V(()=>{ro();uy=Number(1.1).toLocaleString().substring(1,2),Qv=["ca","cs","da","de","el","en","es","et","fi","fr","id","it","ja","ko","lv","lt","nb","nl","pl","pt","ro","ru","sk","sl","sv","th","tr","uk","zh-CN","zh-TW"],[bi,sl]=navigator.language.split("-").map((t,e)=>e?t.toUpperCase():t.toLowerCase()),al=`${bi}`;sl&&(al=`${bi}-${sl}`);Zt={};he=(t,e="general")=>{let r=t;return Zt&&Zt[e]&&Zt[e][t]&&(r=Zt[e][t].message||t),r},tg=async()=>{let t=Qv.filter(s=>s.startsWith(bi)),e=t.find(s=>s===al)||t[0]||"en",r=eg(e),o={general:{"Hello World":"Hello World"}};try{o=await At.get(r),Zt=JSON.parse(o),document.documentElement.lang=e}catch(s){console.warn("No strings file found"),console.error(s),Zt=o}return{source:r,strings:Zt}};tg()});function og(t){let e,r=null,o=null,s=null;for(e=0;e<xi.length&&!r;++e)o=t[xi[e][0]],s=t[xi[e][1]],typeof o=="function"&&typeof s=="function"&&(r={bind:o,unbind:s});return r}var xi,rg,ll,mr,yi=V(()=>{xi=[["on","off"],["bind","unbind"],["addEventListener","removeEventListener"]],rg=!1;ll=class{constructor(e,r,o,s,l){this.bindFuncs=r,this.obj=o,this.event=s,this.func=function(){e.enabled&&l.apply(this,arguments)}}bind(){this.bindFuncs.bind.call(this.obj,this.event,this.func)}unbind(){this.bindFuncs.unbind.call(this.obj,this.event,this.func)}on(){this.bind()}off(){this.unbind()}},mr=class{constructor(){this.bindings=[],this.enabled=!0}bind(e,r,o){let s=og(e);if(!s)throw new Error(`Failed to get binding functions for object: ${e}`);let l=new ll(this,s,e,r,o);return this.bindings.push(l),l.bind(),l}unbind(e){let r=this.bindings.length;this.bindings=this.bindings.filter(o=>o!==e),r-this.bindings.length!=1&&rg&&(console.warn("Binding Not Found in EventBinder:"),console.dir(e)),e.unbind()}on(e,r,o){return this.bind(e,r,o)}off(e){this.unbind(e)}unbindAll(){[...this.bindings].forEach(r=>{this.unbind(r)}),console.assert(this.bindings.length===0),this.bindings=[]}bindListeners({source:e={},target:r={},eventMap:o={}}={}){Object.entries(o).forEach(([s,l])=>{if(typeof r[l]!="function")throw Error(`Event listener method '${l}' on target does not exist for source event '${s}'`);this.bind(e,s,(...u)=>{r[l](...u)})})}};window.EventBinder=mr});var qo,Si=V(()=>{G();qo=h`
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
`});var cl,dl=V(()=>{G();cl=h`
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
`});var ul,pl=V(()=>{G();ul=h`
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
`});var ml,fl=V(()=>{G();ml=h`
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
`});var vl,gl=V(()=>{G();vl=h`
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
`});var hl,bl=V(()=>{G();hl=h`
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
`});var xl,yl=V(()=>{G();xl=h`
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
`});var wl,Sl=V(()=>{G();wl=h`
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
`});var kl,El=V(()=>{G();kl=h`
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
`});var _l,Cl=V(()=>{G();_l=h`
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
`});var Il,Ml=V(()=>{G();Il=h`
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
`});var jl,Al=V(()=>{G();jl=h`
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
`});var Tl,Ol=V(()=>{G();Tl=h`
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
`});var me,Tt=V(()=>{G();me=(t,e)=>t==="xs"?h`
      @media (min-width: 22.5em) {
        ${e}
      }
    `:t==="s"?h`
      @media (min-width: 30em) {
        ${e}
      }
    `:t==="m"?h`
      @media (min-width: 42em) {
        ${e}
      }
    `:t==="l"?h`
      @media (min-width: 60em) {
        ${e}
      }
    `:t==="xl"?h`
      @media (min-width: 85em) {
        ${e}
      }
    `:t==="portrait"?h`
      @media all and (orientation: portrait) {
        ${e}
      }
    `:t==="landscape"?h`
      @media all and (min-aspect-ratio: 51/40) {
        ${e}
      }
    `:t==="xs-l"?h`
      @media (min-width: 22.5em) and (min-aspect-ratio: 51/40) {
        ${e}
      }
    `:t==="s-l"?h`
      @media (min-width: 30em) and (min-aspect-ratio: 51/40) {
        ${e}
      }
    `:t==="m-l"?h`
      @media (min-width: 42em) and (min-aspect-ratio: 51/40) {
        ${e}
      }
    `:t==="l-l"?h`
      @media (min-width: 60em) and (min-aspect-ratio: 51/40) {
        ${e}
      }
    `:t==="xl-l"?h`
      @media (min-width: 85em) and (min-aspect-ratio: 51/40) {
        ${e}
      }
    `:t==="xs-p"?h`
      @media (min-height: 35em) and (orientation: portrait) {
        ${e}
      }
    `:t==="s-p"?h`
      @media (min-height: 42em) and (orientation: portrait) {
        ${e}
      }
    `:t==="m-p"?h`
      @media (min-height: 64em) and (orientation: portrait) {
        ${e}
      }
    `:t==="l-p"?h`
      @media (min-height: 87em) and (orientation: portrait) {
        ${e}
      }
    `:t==="xl-p"?h`
      @media (min-height: 100em) and (orientation: portrait) {
        ${e}
      }
    `:h``});var ki,$l=V(()=>{G();Tt();ki=h`
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

  ${me("xs",h`
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

  ${me("s",h`
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

    ${me("m",h`
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

      ${me("l",h`
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

        ${me("xl",h`
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
`});var Ll,zl=V(()=>{G();Ll=h`
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
`});var Pl,Dl=V(()=>{G();Pl=h`
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
`});var Rl,Bl=V(()=>{G();Rl=h`
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
`});var Fl,Hl=V(()=>{G();Tt();Fl=h`
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

  ${me("m",h`
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

  ${me("s",h`
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
`});var Nl,Wl=V(()=>{G();Nl=h`
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
`});var Vl,Ul=V(()=>{G();Vl=h`
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
`});var ql,Gl=V(()=>{G();ql=h`
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
`});var Kl,Zl=V(()=>{G();Kl=h`
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
`});var xe,rt=V(()=>{G();Si();dl();pl();fl();gl();bl();yl();Sl();El();Cl();Ml();Al();Ol();$l();zl();Dl();Bl();Hl();Wl();Ul();Gl();Zl();xe=h`
  /* Global */
  ${qo}
  ${cl}

  /* Layout */
  ${ul}
  ${ml}
  ${vl}
  ${hl}
  ${kl}
  ${xl}
  ${wl}
  ${_l}
  ${Il}
  ${jl}
  ${Tl}
  ${ki}

  /* HTML Elements */
  ${Ll}
  ${Rl}
  ${Fl}
  ${Pl}
  ${Nl}
  ${Vl}
  ${ql}

  ${Kl}

  /* Utilities */
  ${ki}
`});var Yl=Do((Go,no)=>{(function(){"use strict";var t={function:!0,object:!0},e=t[typeof window]&&window||this,r=e,o=t[typeof Go]&&Go,s=t[typeof no]&&no&&!no.nodeType&&no,l=o&&s&&typeof global=="object"&&global;l&&(l.global===l||l.window===l||l.self===l)&&(e=l);var u=Math.pow(2,53)-1,f=/\bOpera/,v=this,S=Object.prototype,I=S.hasOwnProperty,y=S.toString;function j(m){return m=String(m),m.charAt(0).toUpperCase()+m.slice(1)}function $(m,M,N){var Y={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return M&&N&&/^Win/i.test(m)&&!/^Windows Phone /i.test(m)&&(Y=Y[/[\d.]+$/.exec(m)])&&(m="Windows "+Y),m=String(m),M&&N&&(m=m.replace(RegExp(M,"i"),N)),m=P(m.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),m}function A(m,M){var N=-1,Y=m?m.length:0;if(typeof Y=="number"&&Y>-1&&Y<=u)for(;++N<Y;)M(m[N],N,m);else U(m,M)}function P(m){return m=se(m),/^(?:webOS|i(?:OS|P))/.test(m)?m:j(m)}function U(m,M){for(var N in m)I.call(m,N)&&M(m[N],N,m)}function Z(m){return m==null?j(m):y.call(m).slice(8,-1)}function Q(m,M){var N=m!=null?typeof m[M]:"number";return!/^(?:boolean|number|string|undefined)$/.test(N)&&(N=="object"?!!m[M]:!0)}function ee(m){return String(m).replace(/([ -])(?!$)/g,"$1?")}function ne(m,M){var N=null;return A(m,function(Y,we){N=M(N,Y,we,m)}),N}function se(m){return String(m).replace(/^ +| +$/g,"")}function be(m){var M=e,N=m&&typeof m=="object"&&Z(m)!="String";N&&(M=m,m=null);var Y=M.navigator||{},we=Y.userAgent||"";m||(m=we);var _=N||v==r,ae=N?!!Y.likeChrome:/\bChrome\b/.test(m)&&!/internal|\n/i.test(y.toString()),te="Object",Ee=N?te:"ScriptBridgingProxyObject",qe=N?te:"Environment",st=N&&M.java?"JavaPackage":Z(M.java),Nt=N?te:"RuntimeObject",De=/\bJava/.test(st)&&M.java,le=De&&Z(M.environment)==qe,_e=De?"a":"\u03B1",Ge=De?"b":"\u03B2",Ke=M.document||{},x=M.operamini||M.opera,Re=f.test(Re=N&&x?x["[[Class]]"]:Z(x))?Re:x=null,c,Ae=m,R=[],Te=null,ge=m==we,E=ge&&x&&typeof x.version=="function"&&x.version(),et,B=Ne([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),b=lt(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),z=Ze([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),J=at({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),w=re(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function Ne(C){return ne(C,function(O,L){return O||RegExp("\\b"+(L.pattern||ee(L))+"\\b","i").exec(m)&&(L.label||L)})}function at(C){return ne(C,function(O,L,T){return O||(L[z]||L[/^[a-z]+(?: +[a-z]+\b)*/i.exec(z)]||RegExp("\\b"+ee(T)+"(?:\\b|\\w*\\d)","i").exec(m))&&T})}function lt(C){return ne(C,function(O,L){return O||RegExp("\\b"+(L.pattern||ee(L))+"\\b","i").exec(m)&&(L.label||L)})}function re(C){return ne(C,function(O,L){var T=L.pattern||ee(L);return!O&&(O=RegExp("\\b"+T+"(?:/[\\d.]+|[ \\w.]*)","i").exec(m))&&(O=$(O,T,L.label||L)),O})}function Ze(C){return ne(C,function(O,L){var T=L.pattern||ee(L);return!O&&(O=RegExp("\\b"+T+" *\\d+[.\\w_]*","i").exec(m)||RegExp("\\b"+T+" *\\w+-[\\w]*","i").exec(m)||RegExp("\\b"+T+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(m))&&((O=String(L.label&&!RegExp(T,"i").test(L.label)?L.label:O).split("/"))[1]&&!/[\d.]+/.test(O[0])&&(O[0]+=" "+O[1]),L=L.label||L,O=P(O[0].replace(RegExp(T,"i"),L).replace(RegExp("; *(?:"+L+"[_-])?","i")," ").replace(RegExp("("+L+")[-_.]?(\\w)","i"),"$1 $2"))),O})}function Oe(C){return ne(C,function(O,L){return O||(RegExp(L+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(m)||0)[1]||null})}function q(){return this.description||""}if(B&&(B=[B]),/\bAndroid\b/.test(w)&&!z&&(c=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(m))&&(z=se(c[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),J&&!z?z=Ze([J]):J&&z&&(z=z.replace(RegExp("^("+ee(J)+")[-_.\\s]","i"),J+" ").replace(RegExp("^("+ee(J)+")[-_.]?(\\w)","i"),J+" $2")),(c=/\bGoogle TV\b/.exec(z))&&(z=c[0]),/\bSimulator\b/i.test(m)&&(z=(z?z+" ":"")+"Simulator"),b=="Opera Mini"&&/\bOPiOS\b/.test(m)&&R.push("running in Turbo/Uncompressed mode"),b=="IE"&&/\blike iPhone OS\b/.test(m)?(c=be(m.replace(/like iPhone OS/,"")),J=c.manufacturer,z=c.product):/^iP/.test(z)?(b||(b="Safari"),w="iOS"+((c=/ OS ([\d_]+)/i.exec(m))?" "+c[1].replace(/_/g,"."):"")):b=="Konqueror"&&/^Linux\b/i.test(w)?w="Kubuntu":J&&J!="Google"&&(/Chrome/.test(b)&&!/\bMobile Safari\b/i.test(m)||/\bVita\b/.test(z))||/\bAndroid\b/.test(w)&&/^Chrome/.test(b)&&/\bVersion\//i.test(m)?(b="Android Browser",w=/\bAndroid\b/.test(w)?w:"Android"):b=="Silk"?(/\bMobi/i.test(m)||(w="Android",R.unshift("desktop mode")),/Accelerated *= *true/i.test(m)&&R.unshift("accelerated")):b=="UC Browser"&&/\bUCWEB\b/.test(m)?R.push("speed mode"):b=="PaleMoon"&&(c=/\bFirefox\/([\d.]+)\b/.exec(m))?R.push("identifying as Firefox "+c[1]):b=="Firefox"&&(c=/\b(Mobile|Tablet|TV)\b/i.exec(m))?(w||(w="Firefox OS"),z||(z=c[1])):!b||(c=!/\bMinefield\b/i.test(m)&&/\b(?:Firefox|Safari)\b/.exec(b))?(b&&!z&&/[\/,]|^[^(]+?\)/.test(m.slice(m.indexOf(c+"/")+8))&&(b=null),(c=z||J||w)&&(z||J||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w))&&(b=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w)?w:c)+" Browser")):b=="Electron"&&(c=(/\bChrome\/([\d.]+)\b/.exec(m)||0)[1])&&R.push("Chromium "+c),E||(E=Oe(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",ee(b),"(?:Firefox|Minefield|NetFront)"])),(c=B=="iCab"&&parseFloat(E)>3&&"WebKit"||/\bOpera\b/.test(b)&&(/\bOPR\b/.test(m)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(m)&&!/^(?:Trident|EdgeHTML)$/.test(B)&&"WebKit"||!B&&/\bMSIE\b/i.test(m)&&(w=="Mac OS"?"Tasman":"Trident")||B=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(b)&&"NetFront")&&(B=[c]),b=="IE"&&(c=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(m)||0)[1])?(b+=" Mobile",w="Windows Phone "+(/\+$/.test(c)?c:c+".x"),R.unshift("desktop mode")):/\bWPDesktop\b/i.test(m)?(b="IE Mobile",w="Windows Phone 8.x",R.unshift("desktop mode"),E||(E=(/\brv:([\d.]+)/.exec(m)||0)[1])):b!="IE"&&B=="Trident"&&(c=/\brv:([\d.]+)/.exec(m))&&(b&&R.push("identifying as "+b+(E?" "+E:"")),b="IE",E=c[1]),ge){if(Q(M,"global"))if(De&&(c=De.lang.System,Ae=c.getProperty("os.arch"),w=w||c.getProperty("os.name")+" "+c.getProperty("os.version")),le){try{E=M.require("ringo/engine").version.join("."),b="RingoJS"}catch(C){(c=M.system)&&c.global.system==M.system&&(b="Narwhal",w||(w=c[0].os||null))}b||(b="Rhino")}else typeof M.process=="object"&&!M.process.browser&&(c=M.process)&&(typeof c.versions=="object"&&(typeof c.versions.electron=="string"?(R.push("Node "+c.versions.node),b="Electron",E=c.versions.electron):typeof c.versions.nw=="string"&&(R.push("Chromium "+E,"Node "+c.versions.node),b="NW.js",E=c.versions.nw)),b||(b="Node.js",Ae=c.arch,w=c.platform,E=/[\d.]+/.exec(c.version),E=E?E[0]:null));else Z(c=M.runtime)==Ee?(b="Adobe AIR",w=c.flash.system.Capabilities.os):Z(c=M.phantom)==Nt?(b="PhantomJS",E=(c=c.version||null)&&c.major+"."+c.minor+"."+c.patch):typeof Ke.documentMode=="number"&&(c=/\bTrident\/(\d+)/i.exec(m))?(E=[E,Ke.documentMode],(c=+c[1]+4)!=E[1]&&(R.push("IE "+E[1]+" mode"),B&&(B[1]=""),E[1]=c),E=b=="IE"?String(E[1].toFixed(1)):E[0]):typeof Ke.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(b)&&(R.push("masking as "+b+" "+E),b="IE",E="11.0",B=["Trident"],w="Windows");w=w&&P(w)}if(E&&(c=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(E)||/(?:alpha|beta)(?: ?\d)?/i.exec(m+";"+(ge&&Y.appMinorVersion))||/\bMinefield\b/i.test(m)&&"a")&&(Te=/b/i.test(c)?"beta":"alpha",E=E.replace(RegExp(c+"\\+?$"),"")+(Te=="beta"?Ge:_e)+(/\d+\+?/.exec(c)||"")),b=="Fennec"||b=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(w))b="Firefox Mobile";else if(b=="Maxthon"&&E)E=E.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(z))z=="Xbox 360"&&(w=null),z=="Xbox 360"&&/\bIEMobile\b/.test(m)&&R.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(b)||b&&!z&&!/Browser|Mobi/.test(b))&&(w=="Windows CE"||/Mobi/i.test(m)))b+=" Mobile";else if(b=="IE"&&ge)try{M.external===null&&R.unshift("platform preview")}catch(C){R.unshift("embedded")}else(/\bBlackBerry\b/.test(z)||/\bBB10\b/.test(m))&&(c=(RegExp(z.replace(/ +/g," *")+"/([.\\d]+)","i").exec(m)||0)[1]||E)?(c=[c,/BB10/.test(m)],w=(c[1]?(z=null,J="BlackBerry"):"Device Software")+" "+c[0],E=null):this!=U&&z!="Wii"&&(ge&&x||/Opera/.test(b)&&/\b(?:MSIE|Firefox)\b/i.test(m)||b=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(w)||b=="IE"&&(w&&!/^Win/.test(w)&&E>5.5||/\bWindows XP\b/.test(w)&&E>8||E==8&&!/\bTrident\b/.test(m)))&&!f.test(c=be.call(U,m.replace(f,"")+";"))&&c.name&&(c="ing as "+c.name+((c=c.version)?" "+c:""),f.test(b)?(/\bIE\b/.test(c)&&w=="Mac OS"&&(w=null),c="identify"+c):(c="mask"+c,Re?b=P(Re.replace(/([a-z])([A-Z])/g,"$1 $2")):b="Opera",/\bIE\b/.test(c)&&(w=null),ge||(E=null)),B=["Presto"],R.push(c));(c=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(m)||0)[1])&&(c=[parseFloat(c.replace(/\.(\d)$/,".0$1")),c],b=="Safari"&&c[1].slice(-1)=="+"?(b="WebKit Nightly",Te="alpha",E=c[1].slice(0,-1)):(E==c[1]||E==(c[2]=(/\bSafari\/([\d.]+\+?)/i.exec(m)||0)[1]))&&(E=null),c[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(m)||0)[1],c[0]==537.36&&c[2]==537.36&&parseFloat(c[1])>=28&&B=="WebKit"&&(B=["Blink"]),!ge||!ae&&!c[1]?(B&&(B[1]="like Safari"),c=(c=c[0],c<400?1:c<500?2:c<526?3:c<533?4:c<534?"4+":c<535?5:c<537?6:c<538?7:c<601?8:c<602?9:c<604?10:c<606?11:c<608?12:"12")):(B&&(B[1]="like Chrome"),c=c[1]||(c=c[0],c<530?1:c<532?2:c<532.05?3:c<533?4:c<534.03?5:c<534.07?6:c<534.1?7:c<534.13?8:c<534.16?9:c<534.24?10:c<534.3?11:c<535.01?12:c<535.02?"13+":c<535.07?15:c<535.11?16:c<535.19?17:c<536.05?18:c<536.1?19:c<537.01?20:c<537.11?"21+":c<537.13?23:c<537.18?24:c<537.24?25:c<537.36?26:B!="Blink"?"27":"28")),B&&(B[1]+=" "+(c+=typeof c=="number"?".x":/[.+]/.test(c)?"":"+")),b=="Safari"&&(!E||parseInt(E)>45)?E=c:b=="Chrome"&&/\bHeadlessChrome/i.test(m)&&R.unshift("headless")),b=="Opera"&&(c=/\bzbov|zvav$/.exec(w))?(b+=" ",R.unshift("desktop mode"),c=="zvav"?(b+="Mini",E=null):b+="Mobile",w=w.replace(RegExp(" *"+c+"$"),"")):b=="Safari"&&/\bChrome\b/.exec(B&&B[1])?(R.unshift("desktop mode"),b="Chrome Mobile",E=null,/\bOS X\b/.test(w)?(J="Apple",w="iOS 4.3+"):w=null):/\bSRWare Iron\b/.test(b)&&!E&&(E=Oe("Chrome")),E&&E.indexOf(c=/[\d.]+$/.exec(w))==0&&m.indexOf("/"+c+"-")>-1&&(w=se(w.replace(c,""))),w&&w.indexOf(b)!=-1&&!RegExp(b+" OS").test(w)&&(w=w.replace(RegExp(" *"+ee(b)+" *"),"")),B&&!/\b(?:Avant|Nook)\b/.test(b)&&(/Browser|Lunascape|Maxthon/.test(b)||b!="Safari"&&/^iOS/.test(w)&&/\bSafari\b/.test(B[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(b)&&B[1])&&(c=B[B.length-1])&&R.push(c),R.length&&(R=["("+R.join("; ")+")"]),J&&z&&z.indexOf(J)<0&&R.push("on "+J),z&&R.push((/^on /.test(R[R.length-1])?"":"on ")+z),w&&(c=/ ([\d.+]+)$/.exec(w),et=c&&w.charAt(w.length-c[0].length-1)=="/",w={architecture:32,family:c&&!et?w.replace(c[0],""):w,version:c?c[1]:null,toString:function(){var C=this.version;return this.family+(C&&!et?" "+C:"")+(this.architecture==64?" 64-bit":"")}}),(c=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Ae))&&!/\bi686\b/i.test(Ae)?(w&&(w.architecture=64,w.family=w.family.replace(RegExp(" *"+c),"")),b&&(/\bWOW64\b/i.test(m)||ge&&/\w(?:86|32)$/.test(Y.cpuClass||Y.platform)&&!/\bWin64; x64\b/i.test(m))&&R.unshift("32-bit")):w&&/^OS X/.test(w.family)&&b=="Chrome"&&parseFloat(E)>=39&&(w.architecture=64),m||(m=null);var W={};return W.description=m,W.layout=B&&B[0],W.manufacturer=J,W.name=b,W.prerelease=Te,W.product=z,W.ua=m,W.version=b&&E,W.os=w||{architecture:null,family:null,version:null,toString:function(){return"null"}},W.parse=be,W.toString=q,W.version&&R.unshift(E),W.name&&R.unshift(b),w&&b&&!(w==String(w).split(" ")[0]&&(w==b.split(" ")[0]||z))&&R.push(z?"("+w+")":"on "+w),R.length&&(W.description=R.join(" ")),W}var ve=be();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e.platform=ve,define(function(){return ve})):o&&s?U(ve,function(m,M){o[M]=m}):e.platform=ve}).call(Go)});var Ko,ng,ig,sg,Ei,_i,ag,lg,cg,dg,ug,pg,mg,fg,vg,gg,hg,bg,xg,yg,wg,Sg,Ql=V(()=>{G();Ko=h`
  animation-duration: 125ms;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`,ng=h`
  animation-name: fadeInDown;
`,ig=h`
  animation-name: fadeInLeft;
`,sg=h`
  animation-name: fadeInRight;
`,Ei=h`
  animation-name: fadeInUp;
`,_i=h`
  animation-name: fadeIn;
`,ag=h`
  animation-name: fadeOut;
`,lg=h`
  animation-name: fadeOutDown;
`,cg=h`
  animation-name: fadeOutDownFar;
`,dg=h`
  animation-name: fadeOutUp;
`,ug=h`
  animation-name: glow;
  animation-duration: 1250ms;
`,pg=h`
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    99% {
      transform: translateX(0);
    }
    100% {
      transform: none;
    }
  }
`,mg=h`
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
`,fg=h`
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
`,vg=h`
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
`,gg=h`
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
`,hg=h`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,bg=h`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`,xg=h`
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
`,yg=h`
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
`,wg=h`
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
`,Sg=h`
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
`});var ec,tc,io,kg,Eg,_g,ht,rc=V(()=>{G();ec=t=>h`
  ${t} {
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
  ${t}::-moz-focus-inner, ${t}::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${t} * {
    pointer-events: none;
  }
  ${t} button,
${t} a {
    pointer-events: auto;
  }
  ${t}:active {
    outline: 0;
  }
`,tc=t=>h`
  ${t} {
    transition: opacity var(--transition-default-speed) var(--transition-easing);
  }

  ${t}[disabled] {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }
`,io=t=>h`
  ${t} {
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

  ${t}::-moz-focus-inner, ${t}::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${t} * {
    pointer-events: none;
  }
  ${t} button,
  ${t} a {
    pointer-events: auto;
  }
  ${t}:active {
    outline: 0;
  }
  ${t}[disabled] {
    opacity: 0.2;
    cursor: default;
    pointer-events: none;
  }
  ${t}:hover, ${t}:focus, ${t}:active {
    color: var(--vst-color-text-brand-hover);
    background-color: var(--vst-color-bg-tertiary);
  }
  ${t}:active {
    background-color: var(--vst-color-bg-secondary);
  }
`,kg={default:{small:h`
      font-size: var(--vst-font-size-xs);
      background-color: var(--vst-color-brand);
      color: #fff;
    `,medium:h`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      background-color: var(--vst-color-brand);
      color: #fff;
    `},secondary:{small:h`
      font-size: var(--vst-font-size-xs);
      background-color: var(--vst-color-bg-secondary);
      border-color: var(--vst-color-bg-primary);
      color: var(--vst-color-brand);
    `,medium:h`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      background-color: var(--vst-color-bg-secondary);
      border-color: var(--vst-color-bg-primary);
      color: var(--vst-color-brand);
    `},tertiary:{small:h`
      font-size: var(--vst-font-size-xs);
      background-color: transparent;
      border: 0;
      color: var(--vst-color-fg-tertiary);
    `,medium:h`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      background-color: transparent;
      border: 0;
      color: var(--vst-color-fg-tertiary);
    `},error:{small:h`
      font-size: var(--vst-font-size-xs);
      color: var(--vst-color-danger);
      border-color: var(--vst-color-danger);
      background-color: var(--vst-color-bg);
    `,medium:h`
      font-size: calc(var(--vst-font-size-m) * 0.875);
      color: var(--vst-color-danger);
      border-color: var(--vst-color-danger);
      background-color: var(--vst-color-bg);
    `},cancel:{small:h`
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
    `,medium:h`
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
    `}},Eg={default:h`
    background-color: var(--vst-color-brand-dark);
  `,secondary:h`
    background-color: var(--vst-color-bg);
    color: var(--vst-color-brand-dark);
  `,tertiary:h`
    color: var(--vst-color-fg-secondary);
    background-color: transparent;
  `,error:h`
    background-color: var(--vst-color-danger);
    color: #fff;
  `,cancel:h`
    background-color: rgba(0, 2, 4, 0.1);
  `},_g={default:h`
    box-shadow: var(--box-shadow-inset-darker);
  `,secondary:h`
    background-color: var(--vst-color-bg);
    color: var(--vst-color-brand-dark);
    box-shadow: var(--box-shadow-inset);
  `,tertiary:h`
    color: var(--vst-color-fg-secondary);
    background-color: transparent;
    box-shadow: var(--box-shadow-inset);
  `,error:h`
    background-color: var(--vst-color-danger);
    color: #fff;
    box-shadow: var(--box-shadow-inset-darker);
  `,cancel:h`
    background-color: rgba(0, 2, 4, 0.1);
    box-shadow: var(--box-shadow-inset-darker);
  `},ht=(t,e="default",r="medium")=>h`
    ${ec(t)}
    ${tc(t)}
    ${t} {
      display: inline-block;
      text-align: center;
      text-transform: uppercase;
      overflow: visible;
      border: 1px solid var(--vst-color-brand);
      font-weight: bold;
      border-radius: var(--vst-radius);
      padding: var(--vst-space-xs) 1rem;
      ${kg[e][r]}
    }

    ${t}:hover {
      ${Eg[e]}
    }

    ${t}:active {
      ${_g[e]}
    }

    ${e==="cancel"?h`
          ${t} vst-ui-icon {
            --vst-ui-icon-color: var(--vst-color-fg-secondary);
            width: 1.125rem;
            height: 1.125rem;
            display: block;
            margin: 0 auto;
          }
        `:h``}
  `});var Cg,oc=V(()=>{G();Tt();Cg=h`
  :host {
    background: var(--vst-color-bg);
    display: block;
    width: 100%;
    max-inline-size: 100%;
    position: relative;
  }

  ${me("s",h`
      :host {
        width: 22.5rem;
      }
    `)}
`});var fr=V(()=>{Ql();rc();oc()});var Vd,Ud,qd,Gd,Kd,zi=V(()=>{Vd={viewBox:"0 0 10 10",paths:["M0 8.8L1.2 10 5 6.3 8.8 10 10 8.8 6.3 5 10 1.3 8.8.1 5 3.8 1.3 0 0 1.3 3.8 5 0 8.8z"]},Ud={viewBox:"0 0 10 10",paths:["M10 10H0V8h10M10 2H0V0h10M10 2v6H8V2M2 2v6H0V2"]},qd={viewBox:"0 0 10 10",paths:["M10 10H0V8h10"]},Gd={viewBox:"0 0 10 10",paths:["M8 10H0V2h2v6h6z","M10 7H3V0h7v7zM5 5h3V2H5v3z"]},Kd={viewBox:"0 0 18 18",paths:["M3.3 13.2l1.4 1.4L9 10.4l4.2 4.2 1.4-1.4L10.4 9l4.2-4.2-1.4-1.4L9 7.6 4.8 3.3 3.3 4.8 7.6 9l-4.3 4.2z"]}});var Zd,Xd=V(()=>{G();Tt();fr();Zd=h`
  :host {
    --pointer-color: white;
    --pointer-size: 8px;
  }

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

  .dialog-screen {
    display: none;
  }

  .shadow-wrapper {
    z-index: var(--vst-z-popover);
    position: fixed;
  }

  .popover {
    ${Ko}
    position: fixed;
    height: auto;
    max-inline-size: 100%;
    max-block-size: calc(100% - var(--vst-toolbar-height) - var(--chrome-menubar-height, 0px));
    /*  stylelint-disable-line length-zero-no-unit */
    border: 1px solid var(--vst-color-bg-primary);
    z-index: var(--vst-z-popover);
    border-radius: var(--vst-radius);
    display: flex;
    box-shadow: var(--vst-shadow-s);
  }

  .padded-content,
  .unpadded-content {
    flex: 1;
    background: var(--vst-color-bg);
  }

  .unpadded-content {
    overflow-y: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  :host(.dialog) {
    ${Ko}
    ${_i}
    width: 100%;
    height: 100%;
    position: fixed;
    top: var(--chrome-menubar-height, 0px);
    left: 0;
    z-index: var(--vst-z-popover);
  }

  :host(.dialog) .dialog-screen {
    display: block;
    position: fixed;
    top: var(--chrome-menubar-height, 0px);
    left: 0;
    width: 100%;
    height: 100%;
    z-index: calc(var(--vst-z-popover) - 2);
    background: rgba(0, 0, 0, 0.65);
  }

  :host(.dialog) .content {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: calc(var(--vst-z-popover) - 1);
    inline-size: 100%;
    block-size: 100%;
    box-shadow: var(--vst-shadow-m);
    overflow: hidden;
  }

  ${me("s",h`
      :host(.dialog) .content {
        inline-size: auto;
        block-size: auto;
        max-block-size: 90vh;
        border-radius: var(--vst-radius);
      }
    `)}

  :host(.dialog) .padded-content {
    padding: var(--vst-space-xl);
    overflow: auto;
  }

  .header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
    position: relative;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-2xs);
    border-radius: 0;
  }

  :host(.dialog) .header {
    border-block-start: 6px solid var(--vst-color-brand);
  }

  ${me("s",h`
      .header {
        border-radius: var(--vst-radius) var(--vst-radius) 0 0;
      }
    `)}

  .header h2 {
    flex-grow: 1;
    text-align: center;
    margin: 0;
  }

  :host(.dialog) .popover {
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0;
    position: fixed;
    top: var(--chrome-menubar-height, 0px);
    /*  stylelint-disable-line length-zero-no-unit */
    left: 0;
    width: 100%;
    height: calc(100% - var(--chrome-menubar-height, 0px));
    /*  stylelint-disable-line length-zero-no-unit */
    max-block-size: none;
  }
  :host(.dialog) .pointer {
    display: none;
  }

  :host(.no-padding) .content {
    padding: 0;
  }
  :host(.no-padding) .content .header {
    margin: 0;
  }

  slot[name='content'] * {
    block-size: 100%;
  }

  .popover.contextmenu {
    width: 150px;
    overflow: hidden;
    border: 1px solid var(--vst-color-bg-primary);
    ${Ei}
  }

  ${me("s",h`
      .popover.contextmenu {
        width: auto;
      }
    `)}

  .contextmenu {
    animation: none;
  }

  /*  hide the cancel button in the header if we can't close the popover in a message box */
  [can-close='false'] .header .btn[variant='icon'] {
    display: none;
  }
`});var Jd,Yd=V(()=>{G();Tt();Jd=h`
  :host {
    display: inline-flex;
    pointer-events: none;
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
    line-height: 0;
  }

  :host([size='xs']) {
    inline-size: var(--vst-icon-size-xs);
    block-size: var(--vst-icon-size-xs);
  }

  :host([size='s']) {
    inline-size: var(--vst-icon-size-s);
    block-size: var(--vst-icon-size-s);
  }

  :host([size='l']) {
    inline-size: var(--vst-icon-size-m);
    block-size: var(--vst-icon-size-m);
  }

  ${me("m",h`
      :host([size='l']) {
        inline-size: var(--vst-icon-size-l);
        block-size: var(--vst-icon-size-l);
      }
    `)}

  .icon {
    inline-size: 100%;
    block-size: 100%;
    display: flex;
  }

  .icon__svg {
    stroke: none;
    inline-size: 100%;
    fill: var(--vst-ui-icon-color, var(--vst-color-fg-primary));
  }

  .icon__svg[stroke] {
    stroke: var(--vst-ui-icon-color, var(--vst-color-fg-primary));
    stroke-width: var(--vst-ui-icon-stroke-width, 2);
    stroke-linecap: var(--vst-ui-icon-stroke-linecap, round);
    stroke-linejoin: var(--vst-ui-icon-linejoin, round);
    fill: none;
  }
`});var Qd,hn=V(()=>{G();rt();Yd();Qd=class extends ie{static get properties(){return{icon:{type:Object},color:{type:String}}}constructor(){super();this.icon={paths:[]},this.color=""}updated(e){e&&e.has("color")&&this.style.setProperty("--vst-ui-icon-color",this.color)}static get styles(){return[xe,Jd]}render(){let e=this.icon.paths.map(r=>Ga`<path d="${r}">`);return K`
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon__svg"
          ?stroke="${this.icon.stroke}"
          viewBox="${this.icon.viewBox}"
        >
          ${e}
        </svg>
      </div>
    `}};customElements.define("vst-ui-icon",Qd)});var eu,tu=V(()=>{G();eu=h`
  .tooltip {
    display: flex;
    line-height: 1;
    font-size: var(--vst-font-size-s);
    outline: none;
    position: relative;
    block-size: 100%;
  }

  ::slotted([role='tooltip']) {
    overflow: hidden;
    white-space: nowrap;
    border-radius: var(--vst-radius);
    box-shadow: var(--vst-shadow-m);
    z-index: var(--vst-z-popover);
    padding: 0;
    background-color: var(--background-color, var(--vst-color-dark-200));
    color: var(--vst-color-light-100);
    opacity: 0;
    height: 0;
    width: 0;
    outline: none;
    position: absolute;
  }

  ::slotted([position~='block-start']) {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }

  ::slotted([position~='block-start-start']) {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 0;
  }

  ::slotted([position~='block-start-end']) {
    bottom: calc(100% + var(--offset, var(--vst-space-xs)));
    right: 0;
  }

  ::slotted([position~='block-end']) {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 50%;
    transform: translateX(-50%);
  }

  ::slotted([position~='block-end-start']) {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    left: 0;
  }

  ::slotted([position~='block-end-end']) {
    top: calc(100% + var(--offset, var(--vst-space-xs)));
    right: 0;
  }

  ::slotted([position~='inline-start']) {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted([position~='inline-start-start']) {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 0;
  }

  ::slotted([position~='inline-start-end']) {
    right: calc(100% + var(--offset, var(--vst-space-xs)));
    bottom: 0;
  }

  ::slotted([position~='inline-end']) {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted([position~='inline-end-start']) {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    top: 0;
  }

  ::slotted([position~='inline-end-end']) {
    left: calc(100% + var(--offset, var(--vst-space-xs)));
    bottom: 0;
  }

  .tooltip[enabled]:hover ::slotted([role='tooltip']),
  .tooltip[enabled]:focus-within ::slotted([role='tooltip']) {
    opacity: 1;
    block-size: auto;
    inline-size: auto;
    padding: var(--padding, var(--vst-space-xs));
    transition: opacity 0.1s 0.5s;
    box-shadow: var(--vst-shadow-s);
  }
`});var ru,ou=V(()=>{G();tu();ru=class extends ie{static get properties(){return{enabled:{type:Boolean}}}constructor(){super();this.enabled=!0}static get styles(){return eu}_keyPressed(e){e.which===10&&this._disableTooltip()}_disableTooltip(){this.enabled=!1,this.requestUpdate()}_enableTooltip(){this.enabled=!0,this.requestUpdate()}render(){return K`
      <div
        class="tooltip"
        ?enabled="${this.enabled}"
        @focusout="${this._enableTooltip}"
        @click="${this._disableTooltip}"
        @keyup="${this._keyPressed}"
        tabindex="-1"
      >
        <slot></slot>
      </div>
    `}};customElements.define("vst-style-tooltip",ru)});var iu={};Po(iu);var nu,Pi=V(()=>{G();yi();oo();zi();rt();Xd();hn();ou();nu=class extends ie{static get properties(){return{anchor:{type:Object},canClose:{type:Boolean,reflect:!0},canCloseFromScreen:{type:Boolean,reflect:!0},show:{type:Boolean},header:{type:Object},text:{type:Object}}}constructor(){super();this.canClose=!0,this.canCloseFromScreen=!0,this.header={},this.text={},this.show=!0,this.eventBinder=new mr,document.addEventListener("keyup",this.keyPressed.bind(this))}bind(...e){let r,o,s;return e.length<=2?([o,s]=e,r=this):[r,o,s]=e,this.eventBinder.bind(r,o,s)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keyup",this.keyPressed.bind(this)),this.eventBinder.unbindAll()}setPopoverChild(e,r){r&&r.header&&(this.header=r.header),this.appendChild(e)}screenClicked(e){e.stopPropagation(),this.canClose&&this.canCloseFromScreen&&this.close()}closeClicked(e){e.stopPropagation(),this.canClose&&this.close()}keyPressed(e){e.which===27&&this.close()}close(){this.dispatchEvent(new CustomEvent("close"))}static get styles(){return[xe,Zd]}render(){return K`
      <div class="shadow-wrapper">
        <div id="popover" class="popover" ?show="${this.show}" ?canClose="${this.canClose}">
          <div class="content">
            ${this.header.title?K`
                  <header class="header" id="header">
                    <!-- use popover.header options to show this header on create -->
                    <h2 class="heading" size="m" margin="0" id="title">${this.header.title}</h2>
                    ${this.canClose?K`
                          <vst-style-tooltip>
                            <button
                              class="btn"
                              variant="icon"
                              size="s"
                              id="btn_cancel"
                              @click="${this.closeClicked}"
                            >
                              <vst-ui-icon class="icon-close" .icon="${Kd}"></vst-ui-icon>
                            </button>
                            <span role="tooltip" position="block-end-end"
                              >${he("Close Popover")}</span
                            >
                          </vst-style-tooltip>
                        `:""}
                  </header>
                  <div class="padded-content">
                    <slot id="content"></slot>
                  </div>
                `:K`
                  <div class="unpadded-content">
                    <slot id="content"></slot>
                  </div>
                `}
          </div>
          <div id="popover_screen" class="dialog-screen" @click="${this.screenClicked}"></div>
        </div>
      </div>
    `}};customElements.define("vst-core-popover",nu)});var su,au=V(()=>{G();fr();su=h`
  :host {
    background-color: var(--vst-color-bg);
    display: block;
  }

  /*  matches y-drawer-popover style */
  .listbox__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
    padding: var(--vst-space-xs) var(--vst-space-s);
  }

  .listbox__list {
    list-style: none;
    padding-inline-start: 0;
    margin: 0;
    min-inline-size: 11.25rem;
    max-inline-size: 25rem;
  }
  .listbox__list--horizontal {
    display: flex;
    min-inline-size: auto;
    max-inline-size: auto;
  }

  .listbox__item {
    font-size: var(--vst-font-size-m);
    border-bottom: 1px solid var(--vst-color-bg-secondary);
  }

  :host([variant='no-lines']) .listbox__item {
    border-bottom: none;
  }

  :host([variant='no-lines']) .listbox__btn {
    color: var(--vst-color-primary);
  }

  .item-icon {
    block-size: var(--vst-icon-size-l);
    inline-size: var(--vst-icon-size-l);
    padding-right: var(--vst-space-xs);
  }

  .listbox__item--select {
    /*  special case for change units select */
    display: flex;
    padding: 0.625em 0.75em;
    justify-content: space-between;
    align-items: center;
  }

  .listbox__select-label {
    color: var(--vst-color-fg-secondary);
    padding-inline-end: var(--vst-space-xs);
  }
  .listbox__select-label--disabled {
    opacity: 0.5;
    color: var(--vst-color-fg-tertiary);
  }

  select {
    inline-size: 50%;
  }
  .listbox__select[disabled] {
    opacity: 0.5;
  }

  ${io(h`.listbox__btn`)}
  .listbox__btn {
    display: flex;
    width: 100%;
    padding: 0.5625em 0.75em;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .listbox__btn:hover {
    cursor: pointer;
  }
  .listbox__btn[disabled] {
    opacity: 0.5;
    color: var(--vst-color-fg-tertiary);
  }
  :host([variant='no-lines']) .listbox__btn {
    align-items: center;
  }

  .listbox__switch,
  .listbox__text {
    display: block;
    padding: 0.75em;
  }

  .listbox__group:last-of-type .listbox__item:last-of-type,
  .listbox__list--single .listbox__item:last-of-type {
    border: 0;
  }

  .listbox__list--horizontal .listbox__item {
    border-bottom: 0;
    border-right: 1px solid var(--vst-color-bg-secondary);
  }

  .listbox__group + .listbox__group {
    margin-block-start: var(--vst-space-xs);
    border-top: 1px solid var(--vst-color-bg-secondary);
  }

  .listbox__list--horizontal .listbox__group + .listbox__group {
    margin-block-start: 0;
    border-top: 0;
    margin-inline-start: var(--vst-space-xs);
    border-left: 1px solid var(--vst-color-bg-secondary);
  }

  .show-red-dot,
  .show-green-dot {
    position: relative;
    padding-inline-start: 1.75rem;
  }
  .show-red-dot__dot,
  .show-green-dot__dot {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: var(--vst-color-danger-ui);
    position: absolute;
    top: calc(50% - 0.25rem);
    left: 0.75rem;
  }

  .show-green-dot__dot {
    background-color: var(--vst-color-success-ui);
  }
`});var lu,cu=V(()=>{G();lu=h`
  .switch__label {
    display: flex;
  }

  .switch__label[size='s'] .switch__label-text {
    font-size: var(--vst-font-size-s);
  }
  .switch__label:hover {
    cursor: pointer;
  }
  .switch__label > * {
    pointer-events: none;
    /*  iOS hack - https://stackoverflow.com/a/34810294 */
  }

  .switch__label-text {
    flex: 1;
    color: var(--vst-color-fg-primary);
    user-select: none;
    margin: 0 0 0 var(--vst-space-xs, 0.5rem);
  }

  .switch__btn {
    display: block;
    position: relative;
    outline: none;
    user-select: none;
    width: 2.25em;
    height: 1.125em;
    border-radius: 2.25em;
    margin-block-start: 0.2rem;
  }
  .switch__btn::before,
  .switch__btn::after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
  }
  .switch__btn::before {
    right: 1px;
    background-color: var(--background-color, var(--vst-color-bg-primary));
    border-radius: 2.25em;
    transition: background-color var(--transition-default-speed) var(--transition-easing);
  }
  .switch__btn::after {
    width: 1.125em;
    background-color: var(--vst-color-bg-light);
    border-radius: 2.25em;
    box-shadow: 0 0.05em 0.2em rgba(0, 0, 0, 0.5);
    transition: margin var(--transition-fastest-speed) var(--transition-easing);
  }
  .switch__checkbox:checked + .switch__btn::before {
    background-color: var(--vst-color-success-ui);
  }
  .switch__checkbox:checked + .switch__btn::after {
    margin-inline-start: 1.125em;
  }

  :host([label-placement='left']) .switch__label-text {
    order: 0;
    margin: 0 var(--vst-space-xs, 0.5rem) 0 0;
  }

  :host([label-placement='left']) .switch__btn {
    order: 1;
  }

  :host([disabled]) {
    pointer-events: none;
  }
  :host([disabled]) .switch__label {
    color: var(--vst-color-fg-tertiary);
    opacity: 0.5;
  }
`});var du={};It(du,{VstUiSwitch:()=>Di});var Di,Ri=V(()=>{G();Si();rt();cu();Di=class extends ie{static get properties(){return{label:{type:String},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},labelPlacement:{type:String,reflect:!0,attribute:"label-placement"},id:{type:String,reflect:!0},size:{type:String,reflect:!0},proOnly:{type:Boolean,reflect:!0,attribute:"pro-only"}}}constructor(){super();this.label="",this.checked=!1,this.disabled=!1,this.labelPlacement="left",this.size="",this.proOnly=!1}toggle(e){e.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new CustomEvent("switch-changed",{detail:this.checked}))}static get styles(){return[qo,xe,lu]}render(){return K`
      <div class="switch">
        <label class="switch__label" for="switch" id="${this.id}_label" size="${this.size}">
          <input
            class="switch__checkbox"
            hidden
            type="checkbox"
            ?disabled="${this.disabled||this.proOnly}"
            .checked="${this.checked}"
            id="switch"
            @change="${this.toggle}"
          />
          <div
            class="switch__btn"
            @keyup="${e=>e.code==="Enter"?this.toggle(e):""}"
            tabindex="0"
          ></div>
          <span class="switch__label-text">${this.label}</span>
        </label>
      </div>
    `}};customElements.define("vst-ui-switch",Di)});var uu={};It(uu,{VstUiListbox:()=>Bi});var Bi,Fi=V(()=>{G();rt();au();Bi=class extends ie{static get properties(){return{heading:{type:String},direction:{type:String},view:{type:Object}}}constructor(){super();this.heading="",this.direction="vertical",this.view={}}_clickHandler(e){this.dispatchEvent(new CustomEvent("list-item-clicked",{detail:e.target.id}))}_switchHandler(e){let{detail:r=!1,target:{id:o}={}}=e,l=this.view.items.reduce((f,v)=>f.concat(v),[]).find(f=>f.id===o)||{},u=this.shadowRoot.getElementById(l.incompatibleSwitch);r&&u&&(u.checked=!1),this.dispatchEvent(new CustomEvent("list-switch-changed",{detail:[o,r]}))}_optionHandler(e){let r=e.target;this.dispatchEvent(new CustomEvent("list-item-option-selected",{detail:[r.id,r.value]}))}_renderImportFileItem(e){return K`
      <li class="listbox__item">
        <vst-ui-file-import
          accept="${e.accept}"
          ?disabled="${e.disabled}"
          @selected="${e.onselected}"
        >
          <div class="listbox__btn">${e.title}</div>
        </vst-ui-file-import>
      </li>
    `}_renderSwitchItem(e){return Promise.resolve().then(()=>(Ri(),du)),K`
      <li class="listbox__item">
        <vst-ui-switch
          class="listbox__switch"
          id="${e.id}"
          label="${e.title}"
          .checked="${e.checked}"
          ?disabled="${e.disabled}"
          @switch-changed="${this._switchHandler}"
        ></vst-ui-switch>
      </li>
    `}_renderActionItem(e){return K`
      <li class="listbox__item">
        <button
          class="listbox__btn ${e.className?e.className:""}"
          id="${e.id}"
          ?disabled="${e.disabled}"
          @click="${this._clickHandler}"
        >
          ${e.className&&(e.className==="show-red-dot"||e.className==="show-green-dot")?K`<span class="${e.className}__dot"></span>`:K``}
          ${e.renderIcon?K`${e.renderIcon()}`:""}
          <span>${e.title}</span>
        </button>
      </li>
    `}_renderSelectItem(e){let r=e.options.map(o=>K`
        <option value="${o.value}" ?selected="${e.selection===o.value}">
          ${o.text}
        </option>
      `);return K`
      <li class="listbox__item listbox__item--select">
        <label
          class="listbox__select-label ${e.disabled?"listbox__select-label--disabled":""}"
          for="${e.id}"
          >${e.title}</label
        >
        <select ?disabled="${e.disabled}" id="${e.id}" @input="${this._optionHandler}">
          ${r}
        </select>
      </li>
    `}_renderItem(e){let r;switch(e.type=e.type?e.type:"action",e.type){case"action":default:r=this._renderActionItem(e);break;case"text":r=K`<li class="listbox__item listbox__text">${e.title}</li>`;break;case"switch":r=this._renderSwitchItem(e);break;case"select":r=this._renderSelectItem(e);break;case"import":r=this._renderImportFileItem(e);break}return r}static get styles(){return[xe,su]}render(){let e=s=>s.map(l=>this._renderItem(l)),r=this.view.items.map(s=>{let l;return Array.isArray(s)?l=K`
          <li class="listbox__group">
            <ul
              class="listbox__list ${this.direction==="horizontal"?"listbox__list--horizontal":""}"
            >
              ${e(s)}
            </ul>
          </li>
        `:l=this._renderItem(s),l}),o=this.heading?K`
          <header class="listbox__heading">
            <h2 class="overline">${this.heading}</h2>
          </header>
        `:"";return K`
      ${o}
      <nav>
        <ul
          class="listbox__list ${this.direction==="horizontal"?"listbox__list--horizontal":""}
                  ${Array.isArray(this.view.items[0])?"":"listbox__list--single"}"
        >
          ${r}
        </ul>
      </nav>
    `}};customElements.define("vst-ui-listbox",Bi)});var Ir=Do((U8,Ni)=>{"use strict";var ix=Object.prototype.hasOwnProperty,Fe="~";function lo(){}Object.create&&(lo.prototype=Object.create(null),new lo().__proto__||(Fe=!1));function sx(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function pu(t,e,r,o,s){if(typeof r!="function")throw new TypeError("The listener must be a function");var l=new sx(r,o||t,s),u=Fe?Fe+e:e;return t._events[u]?t._events[u].fn?t._events[u]=[t._events[u],l]:t._events[u].push(l):(t._events[u]=l,t._eventsCount++),t}function xn(t,e){--t._eventsCount==0?t._events=new lo:delete t._events[e]}function Le(){this._events=new lo,this._eventsCount=0}Le.prototype.eventNames=function(){var e=[],r,o;if(this._eventsCount===0)return e;for(o in r=this._events)ix.call(r,o)&&e.push(Fe?o.slice(1):o);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(r)):e};Le.prototype.listeners=function(e){var r=Fe?Fe+e:e,o=this._events[r];if(!o)return[];if(o.fn)return[o.fn];for(var s=0,l=o.length,u=new Array(l);s<l;s++)u[s]=o[s].fn;return u};Le.prototype.listenerCount=function(e){var r=Fe?Fe+e:e,o=this._events[r];return o?o.fn?1:o.length:0};Le.prototype.emit=function(e,r,o,s,l,u){var f=Fe?Fe+e:e;if(!this._events[f])return!1;var v=this._events[f],S=arguments.length,I,y;if(v.fn){switch(v.once&&this.removeListener(e,v.fn,void 0,!0),S){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,r),!0;case 3:return v.fn.call(v.context,r,o),!0;case 4:return v.fn.call(v.context,r,o,s),!0;case 5:return v.fn.call(v.context,r,o,s,l),!0;case 6:return v.fn.call(v.context,r,o,s,l,u),!0}for(y=1,I=new Array(S-1);y<S;y++)I[y-1]=arguments[y];v.fn.apply(v.context,I)}else{var j=v.length,$;for(y=0;y<j;y++)switch(v[y].once&&this.removeListener(e,v[y].fn,void 0,!0),S){case 1:v[y].fn.call(v[y].context);break;case 2:v[y].fn.call(v[y].context,r);break;case 3:v[y].fn.call(v[y].context,r,o);break;case 4:v[y].fn.call(v[y].context,r,o,s);break;default:if(!I)for($=1,I=new Array(S-1);$<S;$++)I[$-1]=arguments[$];v[y].fn.apply(v[y].context,I)}}return!0};Le.prototype.on=function(e,r,o){return pu(this,e,r,o,!1)};Le.prototype.once=function(e,r,o){return pu(this,e,r,o,!0)};Le.prototype.removeListener=function(e,r,o,s){var l=Fe?Fe+e:e;if(!this._events[l])return this;if(!r)return xn(this,l),this;var u=this._events[l];if(u.fn)u.fn===r&&(!s||u.once)&&(!o||u.context===o)&&xn(this,l);else{for(var f=0,v=[],S=u.length;f<S;f++)(u[f].fn!==r||s&&!u[f].once||o&&u[f].context!==o)&&v.push(u[f]);v.length?this._events[l]=v.length===1?v[0]:v:xn(this,l)}return this};Le.prototype.removeAllListeners=function(e){var r;return e?(r=Fe?Fe+e:e,this._events[r]&&xn(this,r)):(this._events=new lo,this._eventsCount=0),this};Le.prototype.off=Le.prototype.removeListener;Le.prototype.addListener=Le.prototype.on;Le.prefixed=Fe;Le.EventEmitter=Le;typeof Ni!="undefined"&&(Ni.exports=Le)});var Zi=Do((xu,Ki)=>{(function(t){if(typeof xu=="object"&&typeof Ki!="undefined")Ki.exports=t();else if(typeof define=="function"&&define.amd)define([],t);else{var e;e=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:this,e.ally=t()}})(function(){var t;return function e(r,o,s){function l(v,S){if(!o[v]){if(!r[v]){var I=typeof Jr=="function"&&Jr;if(!S&&I)return I(v,!0);if(u)return u(v,!0);var y=new Error("Cannot find module '"+v+"'");throw y.code="MODULE_NOT_FOUND",y}var j=o[v]={exports:{}};r[v][0].call(j.exports,function($){var A=r[v][1][$];return l(A||$)},j,j.exports,e,r,o,s)}return o[v].exports}for(var u=typeof Jr=="function"&&Jr,f=0;f<s.length;f++)l(s[f]);return l}({1:[function(e,r){"use strict";function o(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function s(n){return n&&(typeof n=="undefined"?"undefined":qs(n))==="object"&&"default"in n?n.default:n}function l(){var n={activeElement:document.activeElement,windowScrollTop:window.scrollTop,windowScrollLeft:window.scrollLeft,bodyScrollTop:document.body.scrollTop,bodyScrollLeft:document.body.scrollLeft},i=document.createElement("iframe");i.setAttribute("style","position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;"),i.setAttribute("aria-live","off"),i.setAttribute("aria-busy","true"),i.setAttribute("aria-hidden","true"),document.body.appendChild(i);var a=i.contentWindow,d=a.document;d.open(),d.close();var p=d.createElement("div");return d.body.appendChild(p),n.iframe=i,n.wrapper=p,n.window=a,n.document=d,n}function u(n,i){n.wrapper.innerHTML="";var a=typeof i.element=="string"?n.document.createElement(i.element):i.element(n.wrapper,n.document),d=i.mutate&&i.mutate(a,n.wrapper,n.document);return d||d===!1||(d=a),!a.parentNode&&n.wrapper.appendChild(a),d&&d.focus&&d.focus(),i.validate?i.validate(a,d,n.document):n.document.activeElement===d}function f(n){n.activeElement===document.body?(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),H.is.IE10&&document.body.focus()):n.activeElement&&n.activeElement.focus&&n.activeElement.focus(),document.body.removeChild(n.iframe),window.scrollTop=n.windowScrollTop,window.scrollLeft=n.windowScrollLeft,document.body.scrollTop=n.bodyScrollTop,document.body.scrollLeft=n.bodyScrollLeft}function v(n){var i=void 0;try{i=window.localStorage&&window.localStorage.getItem(n),i=i?JSON.parse(i):{}}catch(a){i={}}return i}function S(n,i){if(document.hasFocus())try{window.localStorage&&window.localStorage.setItem(n,JSON.stringify(i))}catch(a){}else try{window.localStorage&&window.localStorage.removeItem(n)}catch(a){}}function I(){var n=document.createElement("div");return n.innerHTML=`<svg><foreignObject width="30" height="30">
      <input type="text"/>
  </foreignObject></svg>`,n.firstChild.firstChild}function y(n){return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+n+"</svg>"}function j(n){if(!n.focus)try{HTMLElement.prototype.focus.call(n)}catch(i){Ys(n)}}function $(n,i,a){return j(i),a.activeElement===i}function A(){var n=Nm(Tf);return Object.keys(Qs).forEach(function(i){n[i]=Qs[i]()}),n}function P(){zf.warn("trying to focus inert element",this)}function U(n,i){if(i){var a=ct(n);er({element:n,attribute:"tabindex",temporaryValue:"-1",saveValue:a!==null?a:""})}else er({element:n,attribute:"tabindex"})}function Z(n,i){ra({element:n,attribute:"controls",remove:i})}function Q(n,i){er({element:n,attribute:"focusable",temporaryValue:i?"false":void 0})}function ee(n,i){ra({element:n,attribute:"xlink:href",remove:i})}function ne(n,i){er({element:n,attribute:"aria-disabled",temporaryValue:i?"true":void 0})}function se(n,i){i?n.focus=P:delete n.focus}function be(n,i){if(i){var a=n.style.pointerEvents||"";n.setAttribute("data-inert-pointer-events",a),n.style.pointerEvents="none"}else{var d=n.getAttribute("data-inert-pointer-events");n.removeAttribute("data-inert-pointer-events"),n.style.pointerEvents=d}}function ve(n,i){ne(n,i),U(n,i),se(n,i),be(n,i);var a=n.nodeName.toLowerCase();(a==="video"||a==="audio")&&Z(n,i),(a==="svg"||n.ownerSVGElement)&&(Io.focusSvgFocusableAttribute?Q(n,i):Io.focusSvgTabindexAttribute||a!=="a"||ee(n,i)),i?n.setAttribute("data-ally-disabled","true"):n.removeAttribute("data-ally-disabled")}function m(n){Pf.some(function(i){return n[i]?(zn=i,!0):!1})}function M(n,i){return zn||m(n),n[zn](i)}function N(n){var i=n.webkitUserModify||"";return Boolean(i&&i.indexOf("write")!==-1)}function Y(n){return[n.getPropertyValue("overflow"),n.getPropertyValue("overflow-x"),n.getPropertyValue("overflow-y")].some(function(i){return i==="auto"||i==="scroll"})}function we(n){return n.display.indexOf("flex")>-1}function _(n,i,a,d){return i!=="div"&&i!=="span"||a&&a!=="div"&&a!=="span"&&!Y(d)?!1:n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth}function ae(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.except,d=a===void 0?{flexbox:!1,scrollable:!1,shadow:!1}:a;de||(de=Je());var p=pe({label:"is/focus-relevant",resolveDocument:!0,context:i});if(!d.shadow&&p.shadowRoot)return!0;var g=p.nodeName.toLowerCase();if(g==="input"&&p.type==="hidden")return!1;if(g==="input"||g==="select"||g==="button"||g==="textarea"||g==="legend"&&de.focusRedirectLegend||g==="label"||g==="area"||g==="a"&&p.hasAttribute("href"))return!0;if(g==="object"&&p.hasAttribute("usemap"))return!1;if(g==="object"){var k=p.getAttribute("type");if(!de.focusObjectSvg&&k==="image/svg+xml"||!de.focusObjectSwf&&k==="application/x-shockwave-flash")return!1}if(g==="iframe"||g==="object"||g==="embed"||g==="keygen"||p.hasAttribute("contenteditable")||g==="audio"&&(de.focusAudioWithoutControls||p.hasAttribute("controls"))||g==="video"&&(de.focusVideoWithoutControls||p.hasAttribute("controls"))||de.focusSummary&&g==="summary")return!0;var D=_o(p);if(g==="img"&&p.hasAttribute("usemap"))return D&&de.focusImgUsemapTabindex||de.focusRedirectImgUsemap;if(de.focusTable&&(g==="table"||g==="td")||de.focusFieldset&&g==="fieldset")return!0;var F=g==="svg",X=p.ownerSVGElement,Se=p.getAttribute("focusable"),je=ct(p);if(g==="use"&&je!==null&&!de.focusSvgUseTabindex)return!1;if(g==="foreignobject")return je!==null&&de.focusSvgForeignobjectTabindex;if(M(p,"svg a")&&p.hasAttribute("xlink:href"))return!0;if((F||X)&&p.focus&&!de.focusSvgNegativeTabindexAttribute&&0>je)return!1;if(F)return D||de.focusSvg||de.focusSvgInIframe||Boolean(de.focusSvgFocusableAttribute&&Se&&Se==="true");if(X){if(de.focusSvgTabindexAttribute&&D)return!0;if(de.focusSvgFocusableAttribute)return Se==="true"}if(D)return!0;var ut=window.getComputedStyle(p,null);if(N(ut))return!0;if(de.focusImgIsmap&&g==="img"&&p.hasAttribute("ismap")){var qt=dt({context:p}).some(function(Zr){return Zr.nodeName.toLowerCase()==="a"&&Zr.hasAttribute("href")});if(qt)return!0}if(!d.scrollable&&de.focusScrollContainer){if(de.focusScrollContainerWithoutOverflow){if(_(p,g))return!0}else if(Y(ut))return!0}if(!d.flexbox&&de.focusFlexboxContainer&&we(ut))return!0;var sr=p.parentElement;if(!d.scrollable&&sr){var si=sr.nodeName.toLowerCase(),Kr=window.getComputedStyle(sr,null);if(de.focusScrollBody&&_(sr,g,si,Kr)||de.focusChildrenOfFocusableFlexbox&&we(Kr))return!0}return!1}function te(n,i){if(n.findIndex)return n.findIndex(i);var a=n.length;if(a===0)return-1;for(var d=0;a>d;d++)if(i(n[d],d,n))return d;return-1}function Ee(n){if(Dn||(Dn=Pn("object, iframe")),n._frameElement!==void 0)return n._frameElement;n._frameElement=null;var i=n.parent.document.querySelectorAll(Dn);return[].some.call(i,function(a){var d=Df(a);return d!==n.document?!1:(n._frameElement=a,!0)}),n._frameElement}function qe(n){var i=Tn(n);if(!i.parent||i.parent===i)return null;try{return i.frameElement||Ee(i)}catch(a){return null}}function st(n,i){return window.getComputedStyle(n,null).getPropertyValue(i)}function Nt(n){return n.some(function(i){return st(i,"display")==="none"})}function De(n){var i=te(n,function(d){var p=st(d,"visibility");return p==="hidden"||p==="collapse"});if(i===-1)return!1;var a=te(n,function(d){return st(d,"visibility")==="visible"});return a===-1?!0:a>i}function le(n){var i=1;return n[0].nodeName.toLowerCase()==="summary"&&(i=2),n.slice(i).some(function(a){return a.nodeName.toLowerCase()==="details"&&a.open===!1})}function _e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.except,d=a===void 0?{notRendered:!1,cssDisplay:!1,cssVisibility:!1,detailsElement:!1,browsingContext:!1}:a,p=pe({label:"is/visible",resolveDocument:!0,context:i}),g=p.nodeName.toLowerCase();if(!d.notRendered&&Rf.test(g))return!0;var k=dt({context:p}),D=g==="audio"&&!p.hasAttribute("controls");if(!d.cssDisplay&&Nt(D?k.slice(1):k)||!d.cssVisibility&&De(k)||!d.detailsElement&&le(k))return!1;if(!d.browsingContext){var F=qe(p),X=_e.except(d);if(F&&!X(F))return!1}return!0}function Ge(n,i){var a=i.querySelector('map[name="'+Gs(n)+'"]');return a||null}function Ke(n){var i=n.getAttribute("usemap");if(!i)return null;var a=tt(n);return Ge(i.slice(1),a)}function x(n){var i=n.parentElement;if(!i.name||i.nodeName.toLowerCase()!=="map")return null;var a=tt(n);return a.querySelector('img[usemap="#'+Gs(i.name)+'"]')||null}function Re(n){var i=n.nodeName.toLowerCase();return i==="fieldset"&&n.disabled}function c(n){var i=n.nodeName.toLowerCase();return i==="form"&&n.disabled}function Ae(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.except,d=a===void 0?{onlyFocusableBrowsingContext:!1,visible:!1}:a,p=pe({label:"is/only-tabbable",resolveDocument:!0,context:i});if(!d.visible&&!tr(p))return!1;if(!d.onlyFocusableBrowsingContext&&(H.is.GECKO||H.is.TRIDENT||H.is.EDGE)){var g=qe(p);if(g&&ct(g)<0)return!1}var k=p.nodeName.toLowerCase(),D=ct(p);return k==="label"&&H.is.GECKO?D!==null&&D>=0:!!(H.is.GECKO&&p.ownerSVGElement&&!p.focus&&k==="a"&&p.hasAttribute("xlink:href")&&H.is.GECKO)}function R(n){var i=n.nodeName.toLowerCase();if(i==="embed"||i==="keygen")return!0;var a=ct(n);if(n.shadowRoot&&a===null)return!0;if(i==="label")return!vt.focusLabelTabindex||a===null;if(i==="legend")return a===null;if(vt.focusSvgFocusableAttribute&&(n.ownerSVGElement||i==="svg")){var d=n.getAttribute("focusable");return d&&d==="false"}return i==="img"&&n.hasAttribute("usemap")?a===null||!vt.focusImgUsemapTabindex:i==="area"?!oa(n):!1}function Te(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.except,d=a===void 0?{disabled:!1,visible:!1,onlyTabbable:!1}:a;vt||(vt=Je());var p=ia.rules.except({onlyFocusableBrowsingContext:!0,visible:d.visible}),g=pe({label:"is/focusable",resolveDocument:!0,context:i}),k=Rr.rules({context:g,except:d});if(!k||R(g)||!d.disabled&&na(g)||!d.onlyTabbable&&p(g))return!1;if(!d.visible){var D={context:g,except:{}};if(vt.focusInHiddenIframe&&(D.except.browsingContext=!0),vt.focusObjectSvgHidden){var F=g.nodeName.toLowerCase();F==="object"&&(D.except.cssVisibility=!0)}if(!tr.rules(D))return!1}var X=qe(g);if(X){var Se=X.nodeName.toLowerCase();if(!(Se!=="object"||vt.focusInZeroDimensionObject||X.offsetWidth&&X.offsetHeight))return!1}var je=g.nodeName.toLowerCase();return!(je==="svg"&&vt.focusSvgInIframe&&!X&&g.getAttribute("tabindex")===null)}function ge(n){var i=function(a){return a.shadowRoot||n(a)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP};return i.acceptNode=i,i}function E(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.includeContext,d=n.includeOnlyTabbable,p=n.strategy;i||(i=document.documentElement);for(var g=_t.rules.except({onlyTabbable:d}),k=tt(i),D=k.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,p==="all"?Bf:ge(g),!1),F=[];D.nextNode();)D.currentNode.shadowRoot?(g(D.currentNode)&&F.push(D.currentNode),F=F.concat(E({context:D.currentNode.shadowRoot,includeOnlyTabbable:d,strategy:p}))):F.push(D.currentNode);return a&&(p==="all"?Rr(i)&&F.unshift(i):g(i)&&F.unshift(i)),F}function et(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.includeContext,d=n.includeOnlyTabbable,p=Ff(),g=i.querySelectorAll(p),k=_t.rules.except({onlyTabbable:d}),D=[].filter.call(g,k);return a&&k(i)&&D.unshift(i),D}function B(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.except,d=a===void 0?{flexbox:!1,scrollable:!1,shadow:!1,visible:!1,onlyTabbable:!1}:a;rr||(rr=Je());var p=pe({label:"is/tabbable",resolveDocument:!0,context:i});if(H.is.BLINK&&H.is.ANDROID&&H.majorVersion>42)return!1;var g=qe(p);if(g){if(H.is.WEBKIT&&H.is.IOS||ct(g)<0||!d.visible&&(H.is.BLINK||H.is.WEBKIT)&&!tr(g))return!1;var k=g.nodeName.toLowerCase();if(k==="object"){var D=H.name==="Chrome"&&H.majorVersion>=54||H.name==="Opera"&&H.majorVersion>=41;if(H.is.WEBKIT||H.is.BLINK&&!D)return!1}}var F=p.nodeName.toLowerCase(),X=ct(p),Se=X===null?null:X>=0;if(H.is.EDGE&&H.majorVersion>=14&&g&&p.ownerSVGElement&&0>X)return!0;var je=Se!==!1,ut=X!==null&&X>=0;if(p.hasAttribute("contenteditable"))return je;if(Hf.test(F)&&Se!==!0)return!1;if(H.is.WEBKIT&&H.is.IOS){var qt=F==="input"&&p.type==="text"||p.type==="password"||F==="select"||F==="textarea"||p.hasAttribute("contenteditable");if(!qt){var sr=window.getComputedStyle(p,null);qt=N(sr)}if(!qt)return!1}if(F==="use"&&X!==null&&(H.is.BLINK||H.is.WEBKIT&&H.majorVersion===9)||M(p,"svg a")&&p.hasAttribute("xlink:href")&&(je||p.focus&&!rr.focusSvgNegativeTabindexAttribute)||F==="svg"&&rr.focusSvgInIframe&&je)return!0;if(H.is.TRIDENT||H.is.EDGE){if(F==="svg")return rr.focusSvg?!0:p.hasAttribute("focusable")||ut;if(p.ownerSVGElement)return rr.focusSvgTabindexAttribute&&ut?!0:p.hasAttribute("focusable")}if(p.tabIndex===void 0)return Boolean(d.onlyTabbable);if(F==="audio"){if(!p.hasAttribute("controls"))return!1;if(H.is.BLINK)return!0}if(F==="video"){if(p.hasAttribute("controls")){if(H.is.BLINK||H.is.GECKO)return!0}else if(H.is.TRIDENT||H.is.EDGE)return!1}if(F==="object"&&(H.is.BLINK||H.is.WEBKIT)||F==="iframe")return!1;if(!d.scrollable&&H.is.GECKO){var si=window.getComputedStyle(p,null);if(Y(si))return je}if(H.is.TRIDENT||H.is.EDGE){if(F==="area"){var Kr=x(p);if(Kr&&ct(Kr)<0)return!1}var Zr=window.getComputedStyle(p,null);if(N(Zr))return p.tabIndex>=0;if(!d.flexbox&&we(Zr))return X!==null?ut:Nf(p)&&Wf(p);if(_(p,F))return!1;var zo=p.parentElement;if(zo){var Dv=zo.nodeName.toLowerCase(),Ma=window.getComputedStyle(zo,null);if(_(zo,F,Dv,Ma))return!1;if(we(Ma))return ut}}return p.tabIndex>=0}function b(n,i){return n.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}function z(n,i){return te(n,function(a){return i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING})}function J(n,i,a){var d=[];return i.forEach(function(p){var g=!0,k=n.indexOf(p);k===-1&&(k=z(n,p),g=!1),k===-1&&(k=n.length);var D=$e(a?a(p):p);D.length&&d.push({offset:k,replace:g,elements:D})}),d}function w(n,i){var a=0;i.sort(function(d,p){return d.offset-p.offset}),i.forEach(function(d){var p=d.replace?1:0,g=[d.offset+a,p].concat(d.elements);n.splice.apply(n,g),a+=d.elements.length-p})}function Ne(n){var i=n.nodeName.toLowerCase();return i==="input"||i==="textarea"||i==="select"||i==="button"}function at(n,i){var a=n.getAttribute("for");return a?i.getElementById(a):n.querySelector("input, select, textarea")}function lt(n){var i=n.parentNode,a=Hr({context:i,strategy:"strict"});return a.filter(Ne)[0]||null}function re(n,i){var a=Nr({context:i.body,strategy:"strict"});if(!a.length)return null;var d=Wr({list:a,elements:[n]}),p=d.indexOf(n);return p===d.length-1?null:d[p+1]}function Ze(n,i){if(!Vr.focusRedirectLegend)return null;var a=n.parentNode;return a.nodeName.toLowerCase()!=="fieldset"?null:Vr.focusRedirectLegend==="tabbable"?re(n,i):lt(n,i)}function Oe(n){if(!Vr.focusRedirectImgUsemap)return null;var i=Ke(n);return i&&i.querySelector("area")||null}function q(n){var i=dt({context:n}),a=i.slice(1).map(function(d){return{element:d,scrollTop:d.scrollTop,scrollLeft:d.scrollLeft}});return function(){a.forEach(function(d){d.element.scrollTop=d.scrollTop,d.element.scrollLeft=d.scrollLeft})}}function W(n){if(n.focus)return n.focus(),kt(n)?n:null;var i=Tn(n);try{return i.HTMLElement.prototype.focus.call(n),kt(n)?n:null}catch(d){var a=Ys(n);return a&&kt(n)?n:null}}function C(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.force;i?this.instances=0:this.instances--,this.instances||(this.disengage(),this._result=null)}function O(){return this.instances?(this.instances++,this._result):(this.instances++,this._result=this.engage()||{},this._result.disengage=C.bind(this),this._result)}function L(){}function T(){if(document.activeElement){if(document.activeElement!==Ao){var n=new Gf("active-element",{bubbles:!1,cancelable:!1,detail:{focus:document.activeElement,blur:Ao}});document.dispatchEvent(n),Ao=document.activeElement}}else document.body.focus();qr!==!1&&(qr=requestAnimationFrame(T))}function Ie(){qr=!0,Ao=document.activeElement,T()}function Me(){cancelAnimationFrame(qr),qr=!1}function ce(){for(var n=[document.activeElement];n[0]&&n[0].shadowRoot;)n.unshift(n[0].shadowRoot.activeElement);return n}function oe(){var n=da({context:document.activeElement});return[document.activeElement].concat(n)}function Xe(){this.context&&(this.context.forEach(this.disengage),this.context=null,this.engage=null,this.disengage=null)}function nm(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context;return this.context=$e(i||document),this.context.forEach(this.engage),{disengage:Xe.bind(this)}}function Ts(){}function Lr(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.parent,a=n.element,d=n.includeSelf;if(i)return function(p){return Boolean(d&&p===i||i.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_CONTAINED_BY)};if(a)return function(p){return Boolean(d&&a===p||p.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY)};throw new TypeError("util/compare-position#getParentComparator required either options.parent or options.element")}function im(n){var i=n.context,a=n.filter,d=function(F){var X=Lr({parent:F});return a.some(X)},p=[],g=function(F){return a.some(function(X){return F===X})?NodeFilter.FILTER_REJECT:d(F)?NodeFilter.FILTER_ACCEPT:(p.push(F),NodeFilter.FILTER_REJECT)};g.acceptNode=g;for(var k=tt(i),D=k.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,g,!1);D.nextNode(););return p}function yo(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=pe({label:"query/shadow-hosts",resolveDocument:!0,defaultToDocument:!0,context:i}),d=tt(i),p=d.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,Gn,!1),g=[];for(a.shadowRoot&&(g.push(a),g=g.concat(yo({context:a.shadowRoot})));p.nextNode();)g.push(p.currentNode),g=g.concat(yo({context:p.currentNode.shadowRoot}));return g}function sm(n){return Mo(n,!0)}function Os(n){return Mo(n,!1)}function $s(n){er({element:n,attribute:"aria-hidden",temporaryValue:"true"})}function am(n){er({element:n,attribute:"aria-hidden"})}function lm(n,i){var a=n.indexOf(i);if(a>0){var d=n.splice(a,1);return d.concat(n)}return n}function Ls(n,i){return Kn.tabsequenceAreaAtImgPosition&&(n=vv(n,i)),n=bv(n)}function cm(n){var i=n?null:!1;return{altKey:i,ctrlKey:i,metaKey:i,shiftKey:i}}function dm(n){var i=n.indexOf("*")!==-1,a=cm(i);return n.forEach(function(d){if(d!=="*"){var p=!0,g=d.slice(0,1);g==="?"?p=null:g==="!"&&(p=!1),p!==!0&&(d=d.slice(1));var k=Jn[d];if(!k)throw new TypeError('Unknown modifier "'+d+'"');a[k]=p}}),a}function um(n){var i=Ct[n]||parseInt(n,10);if(!i||typeof i!="number"||isNaN(i))throw new TypeError('Unknown key "'+n+'"');return[i].concat(Ct._alias[i]||[])}function pm(n,i){return!yv.some(function(a){return typeof n[a]=="boolean"&&Boolean(i[a])!==n[a]})}function zs(){Ut=0,ir=0}function Ps(n){n.isPrimary!==!1&&Ut++}function Ds(n){return n.isPrimary!==!1?n.touches?void(Ut=n.touches.length):void(window.setImmediate||window.setTimeout)(function(){Ut=Math.max(Ut-1,0)}):void 0}function Rs(n){switch(n.keyCode||n.which){case 16:case 17:case 18:case 91:case 93:return}ir++}function Bs(n){switch(n.keyCode||n.which){case 16:case 17:case 18:case 91:case 93:return}(window.setImmediate||window.setTimeout)(function(){ir=Math.max(ir-1,0)})}function mm(){return{pointer:Boolean(Ut),key:Boolean(ir)}}function fm(){Ut=ir=0,window.removeEventListener("blur",zs,!1),document.documentElement.removeEventListener("keydown",Rs,!0),document.documentElement.removeEventListener("keyup",Bs,!0),ya.forEach(function(n){document.documentElement.removeEventListener(n,Ps,!0)}),wa.forEach(function(n){document.documentElement.removeEventListener(n,Ds,!0)})}function vm(){return window.addEventListener("blur",zs,!1),document.documentElement.addEventListener("keydown",Rs,!0),document.documentElement.addEventListener("keyup",Bs,!0),ya.forEach(function(n){document.documentElement.addEventListener(n,Ps,!0)}),wa.forEach(function(n){document.documentElement.addEventListener(n,Ds,!0)}),{get:mm}}function gm(n){return n.hasAttribute("autofocus")}function hm(n){return n.tabIndex<=0}function bm(n){var i=n.getAttribute&&n.getAttribute("class")||"";return i===""?[]:i.split(" ")}function Fs(n,i,a){var d=bm(n),p=d.indexOf(i),g=p!==-1,k=a!==void 0?a:!g;k!==g&&(k||d.splice(p,1),k&&d.push(i),n.setAttribute("class",d.join(" ")))}function jn(n,i){return Fs(n,i,!1)}function Hs(n,i){return Fs(n,i,!0)}function St(n){var i="";if(n.type===Yn||n.type==="shadow-focus"){var a=Qn.get();i=$o||a.pointer&&"pointer"||a.key&&"key"||"script"}else n.type==="initial"&&(i="initial");document.documentElement.setAttribute("data-focus-source",i),n.type!==Oo&&(Gr[i]||Hs(document.documentElement,"focus-source-"+i),Gr[i]=!0,ti=i)}function xm(){return ti}function ym(n){return Gr[n]}function wm(n){$o=n}function Sm(){$o=!1}function km(){St({type:Oo}),ti=$o=null,Object.keys(Gr).forEach(function(n){jn(document.documentElement,"focus-source-"+n),Gr[n]=!1}),Qn.disengage(),ei&&ei.disengage(),document.removeEventListener("shadow-focus",St,!0),document.documentElement.removeEventListener(Yn,St,!0),document.documentElement.removeEventListener(Oo,St,!0),document.documentElement.removeAttribute("data-focus-source")}function Em(){return ei=Nn(),document.addEventListener("shadow-focus",St,!0),document.documentElement.addEventListener(Yn,St,!0),document.documentElement.addEventListener(Oo,St,!0),Qn=Sa(),St({type:"initial"}),{used:ym,current:xm,lock:wm,unlock:Sm}}function wo(n){var i=n||Bn();ri.cssShadowPiercingDeepCombinator||(i=i.slice(-1));var a=[].slice.call(document.querySelectorAll(oi),0),d=i.map(function(p){return dt({context:p})}).reduce(function(p,g){return g.concat(p)},[]);a.forEach(function(p){d.indexOf(p)===-1&&jn(p,Lo)}),d.forEach(function(p){a.indexOf(p)===-1&&Hs(p,Lo)})}function Ns(){ni=(window.setImmediate||window.setTimeout)(function(){wo()})}function Ws(){(window.clearImmediate||window.clearTimeout)(ni),wo()}function Vs(n){wo(n.detail.elements)}function _m(){ii&&ii.disengage(),(window.clearImmediate||window.clearTimeout)(ni),document.removeEventListener(Ca,Ns,!0),document.removeEventListener(_a,Ws,!0),document.removeEventListener("shadow-focus",Vs,!0),[].forEach.call(document.querySelectorAll(oi),function(n){jn(n,Lo)})}function Cm(){ri||(ri=Je(),oi=Pn("."+Lo)),ii=Nn(),document.addEventListener(Ca,Ns,!0),document.addEventListener(_a,Ws,!0),document.addEventListener("shadow-focus",Vs,!0),wo()}function An(n,i){var a=Math.max(n.top,i.top),d=Math.max(n.left,i.left),p=Math.max(Math.min(n.right,i.right),d),g=Math.max(Math.min(n.bottom,i.bottom),a);return{top:a,right:p,bottom:g,left:d,width:p-d,height:g-a}}function Im(){var n=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight;return{top:0,right:n,bottom:i,left:0,width:n,height:i}}function Us(n){var i=n.getBoundingClientRect(),a=n.offsetWidth-n.clientWidth,d=n.offsetHeight-n.clientHeight,p={top:i.top,left:i.left,right:i.right-a,bottom:i.bottom-d,width:i.width-a,height:i.height-d,area:0};return p.area=p.width*p.height,p}function Mm(n){var i=window.getComputedStyle(n,null),a="visible";return i.getPropertyValue("overflow-x")!==a&&i.getPropertyValue("overflow-y")!==a}function jm(n){return Mm(n)?n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth:!1}function Am(n){var i=dt({context:n}).slice(1).filter(jm);return i.length?i.reduce(function(a,d){var p=Us(d),g=An(p,a);return g.area=Math.min(p.area,a.area),g},Us(i[0])):null}var zr=function(){function n(i,a){for(var d=0;d<a.length;d++){var p=a[d];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(i,p.key,p)}}return function(i,a,d){return a&&n(i.prototype,a),d&&n(i,d),i}}(),qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tm=s(e("platform")),Gs=s(e("css.escape")),$e=function(n){if(!n)return[];if(Array.isArray(n))return n;if(n.nodeType!==void 0)return[n];if(typeof n=="string"&&(n=document.querySelectorAll(n)),n.length!==void 0)return[].slice.call(n,0);throw new TypeError("unexpected input "+String(n))},pe=function(n){var i=n.context,a=n.label,d=a===void 0?"context-to-element":a,p=n.resolveDocument,g=n.defaultToDocument,k=$e(i)[0];if(p&&k&&k.nodeType===Node.DOCUMENT_NODE&&(k=k.documentElement),!k&&g)return document.documentElement;if(!k)throw new TypeError(d+" requires valid options.context");if(k.nodeType!==Node.ELEMENT_NODE&&k.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)throw new TypeError(d+" requires options.context to be an Element");return k},Yt=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=pe({label:"get/shadow-host",context:i}),d=null;a;)d=a,a=a.parentNode;return d.nodeType===d.DOCUMENT_FRAGMENT_NODE&&d.host?d.host:null},tt=function(n){return n?n.nodeType===Node.DOCUMENT_NODE?n:n.ownerDocument||document:document},kt=function(n){var i=pe({label:"is/active-element",resolveDocument:!0,context:n}),a=tt(i);if(a.activeElement===i)return!0;var d=Yt({context:i});return!!(d&&d.shadowRoot.activeElement===i)},Tn=function(n){var i=tt(n);return i.defaultView||window},Om=function(n){var i=pe({label:"element/blur",context:n});if(!kt(i))return null;var a=i.nodeName.toLowerCase();if(a==="body")return null;if(i.blur)return i.blur(),document.activeElement;var d=Tn(i);try{d.HTMLElement.prototype.blur.call(i)}catch(k){var p=d.document&&d.document.body;if(!p)return null;var g=p.getAttribute("tabindex");p.setAttribute("tabindex","-1"),p.focus(),g?p.setAttribute("tabindex",g):p.removeAttribute("tabindex")}return d.document.activeElement},H=JSON.parse(JSON.stringify(Tm)),So=H.os.family||"",$m=So==="Android",Lm=So.slice(0,7)==="Windows",zm=So==="OS X",Pm=So==="iOS",Dm=H.layout==="Blink",Rm=H.layout==="Gecko",ko=H.layout==="Trident",Bm=H.layout==="EdgeHTML",Fm=H.layout==="WebKit",Hm=parseFloat(H.version),Eo=Math.floor(Hm);H.majorVersion=Eo,H.is={ANDROID:$m,WINDOWS:Lm,OSX:zm,IOS:Pm,BLINK:Dm,GECKO:Rm,TRIDENT:ko,EDGE:Bm,WEBKIT:Fm,IE9:ko&&Eo===9,IE10:ko&&Eo===10,IE11:ko&&Eo===11};var Nm=function(n){var i=l(),a={};return Object.keys(n).map(function(d){a[d]=u(i,n[d])}),f(i),a},On="1.4.1",Ks=typeof window!="undefined"&&window.navigator.userAgent||"",Zs="ally-supports-cache",ft=v(Zs);(ft.userAgent!==Ks||ft.version!==On)&&(ft={}),ft.userAgent=Ks,ft.version=On;var $n={get:function(){return ft},set:function(n){Object.keys(n).forEach(function(i){ft[i]=n[i]}),ft.time=new Date().toISOString(),S(Zs,ft)}},Xs=function(){var n=void 0;try{document.querySelector("html >>> :first-child"),n=">>>"}catch(i){try{document.querySelector("html /deep/ :first-child"),n="/deep/"}catch(a){n=""}}return n},Et="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Wm={element:"div",mutate:function(n){return n.innerHTML='<map name="image-map-tabindex-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="'+Et+'">',n.querySelector("area")}},Vm={element:"div",mutate:function(n){return n.innerHTML='<map name="image-map-tabindex-test"><area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" alt="" src="'+Et+'">',!1},validate:function(n,i,a){if(H.is.GECKO)return!0;var d=n.querySelector("area");return d.focus(),a.activeElement===d}},Um={element:"div",mutate:function(n){return n.innerHTML='<map name="image-map-area-href-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-area-href-test" alt="" src="'+Et+'">',n.querySelector("area")},validate:function(n,i,a){return H.is.GECKO?!0:a.activeElement===i}},qm={name:"can-focus-audio-without-controls",element:"audio",mutate:function(n){try{n.setAttribute("src",Et)}catch(i){}}},Gm="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",Km={element:"div",mutate:function(n){return n.innerHTML='<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#broken-image-map-test" alt="" src="'+Gm+'">',n.querySelector("area")}},Zm={element:"div",mutate:function(n){return n.setAttribute("tabindex","-1"),n.setAttribute("style","display: -webkit-flex; display: -ms-flexbox; display: flex;"),n.innerHTML='<span style="display: block;">hello</span>',n.querySelector("span")}},Xm={element:"fieldset",mutate:function(n){n.setAttribute("tabindex",0),n.setAttribute("disabled","disabled")}},Jm={element:"fieldset",mutate:function(n){n.innerHTML="<legend>legend</legend><p>content</p>"}},Ym={element:"span",mutate:function(n){n.setAttribute("style","display: -webkit-flex; display: -ms-flexbox; display: flex;"),n.innerHTML='<span style="display: block;">hello</span>'}},Qm={element:"form",mutate:function(n){n.setAttribute("tabindex",0),n.setAttribute("disabled","disabled")}},ef={element:"a",mutate:function(n){return n.href="#void",n.innerHTML='<img ismap src="'+Et+'" alt="">',n.querySelector("img")}},tf={element:"div",mutate:function(n){return n.innerHTML='<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="'+Et+'">',n.querySelector("img")}},rf={element:function(n,i){var a=i.createElement("iframe");n.appendChild(a);var d=a.contentWindow.document;return d.open(),d.close(),a},mutate:function(n){n.style.visibility="hidden";var i=n.contentWindow.document,a=i.createElement("input");return i.body.appendChild(a),a},validate:function(n){var i=n.contentWindow.document,a=i.querySelector("input");return i.activeElement===a}},of=!H.is.WEBKIT,nf=function(){return of},sf={element:"div",mutate:function(n){n.setAttribute("tabindex","invalid-value")}},af={element:"label",mutate:function(n){n.setAttribute("tabindex","-1")},validate:function(n,i,a){return n.offsetHeight,n.focus(),a.activeElement===n}},Js="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJzdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==",lf={element:"object",mutate:function(n){n.setAttribute("type","image/svg+xml"),n.setAttribute("data",Js),n.setAttribute("width","200"),n.setAttribute("height","50"),n.style.visibility="hidden"}},cf={name:"can-focus-object-svg",element:"object",mutate:function(n){n.setAttribute("type","image/svg+xml"),n.setAttribute("data",Js),n.setAttribute("width","200"),n.setAttribute("height","50")},validate:function(n,i,a){return H.is.GECKO?!0:a.activeElement===n}},df=!H.is.IE9,uf=function(){return df},pf={element:"div",mutate:function(n){return n.innerHTML='<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#focus-redirect-img-usemap" alt="" src="'+Et+'">',n.querySelector("img")},validate:function(n,i,a){var d=n.querySelector("area");return a.activeElement===d}},mf={element:"fieldset",mutate:function(n){return n.innerHTML='<legend>legend</legend><input tabindex="-1"><input tabindex="0">',!1},validate:function(n,i,a){var d=n.querySelector('input[tabindex="-1"]'),p=n.querySelector('input[tabindex="0"]');return n.focus(),n.querySelector("legend").focus(),a.activeElement===d&&"focusable"||a.activeElement===p&&"tabbable"||""}},ff={element:"div",mutate:function(n){return n.setAttribute("style","width: 100px; height: 50px; overflow: auto;"),n.innerHTML='<div style="width: 500px; height: 40px;">scrollable content</div>',n.querySelector("div")}},vf={element:"div",mutate:function(n){n.setAttribute("style","width: 100px; height: 50px;"),n.innerHTML='<div style="width: 500px; height: 40px;">scrollable content</div>'}},gf={element:"div",mutate:function(n){n.setAttribute("style","width: 100px; height: 50px; overflow: auto;"),n.innerHTML='<div style="width: 500px; height: 40px;">scrollable content</div>'}},hf={element:"details",mutate:function(n){return n.innerHTML="<summary>foo</summary><p>content</p>",n.firstElementChild}},Ys=function(n){var i=n.ownerSVGElement||n.nodeName.toLowerCase()==="svg";if(!i)return!1;var a=I();n.appendChild(a);var d=a.querySelector("input");return d.focus(),d.disabled=!0,n.removeChild(a),!0},bf={element:"div",mutate:function(n){return n.innerHTML=y('<text focusable="true">a</text>'),n.querySelector("text")},validate:$},xf={element:"div",mutate:function(n){return n.innerHTML=y('<text tabindex="0">a</text>'),n.querySelector("text")},validate:$},yf={element:"div",mutate:function(n){return n.innerHTML=y('<text tabindex="-1">a</text>'),n.querySelector("text")},validate:$},wf={element:"div",mutate:function(n){return n.innerHTML=y(['<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>','<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'].join("")),n.querySelector("use")},validate:$},Sf={element:"div",mutate:function(n){return n.innerHTML=y('<foreignObject tabindex="-1"><input type="text" /></foreignObject>'),n.querySelector("foreignObject")||n.getElementsByTagName("foreignObject")[0]},validate:$},kf=Boolean(H.is.GECKO&&typeof SVGElement!="undefined"&&SVGElement.prototype.focus),Ef=function(){return kf},_f={element:"div",mutate:function(n){return n.innerHTML=y(""),n.firstChild},validate:$},Cf={element:"div",mutate:function(n){n.setAttribute("tabindex","3x")}},If={element:"table",mutate:function(n,i,a){var d=a.createDocumentFragment();d.innerHTML="<tr><td>cell</td></tr>",n.appendChild(d)}},Mf={element:"video",mutate:function(n){try{n.setAttribute("src",Et)}catch(i){}}},jf=H.is.GECKO||H.is.TRIDENT||H.is.EDGE,Af=function(){return jf},Qs={cssShadowPiercingDeepCombinator:Xs,focusInZeroDimensionObject:nf,focusObjectSwf:uf,focusSvgInIframe:Ef,tabsequenceAreaAtImgPosition:Af},Tf={focusAreaImgTabindex:Wm,focusAreaTabindex:Vm,focusAreaWithoutHref:Um,focusAudioWithoutControls:qm,focusBrokenImageMap:Km,focusChildrenOfFocusableFlexbox:Zm,focusFieldsetDisabled:Xm,focusFieldset:Jm,focusFlexboxContainer:Ym,focusFormDisabled:Qm,focusImgIsmap:ef,focusImgUsemapTabindex:tf,focusInHiddenIframe:rf,focusInvalidTabindex:sf,focusLabelTabindex:af,focusObjectSvg:cf,focusObjectSvgHidden:lf,focusRedirectImgUsemap:pf,focusRedirectLegend:mf,focusScrollBody:ff,focusScrollContainerWithoutOverflow:vf,focusScrollContainer:gf,focusSummary:hf,focusSvgFocusableAttribute:bf,focusSvgTabindexAttribute:xf,focusSvgNegativeTabindexAttribute:yf,focusSvgUseTabindex:wf,focusSvgForeignobjectTabindex:Sf,focusSvg:_f,focusTabindexTrailingCharacters:Cf,focusTable:If,focusVideoWithoutControls:Mf},Qt=null,Je=function(){return Qt||(Qt=$n.get(),Qt.time||($n.set(A()),Qt=$n.get()),Qt)},Pr=void 0,Of=/^\s*(-|\+)?[0-9]+\s*$/,$f=/^\s*(-|\+)?[0-9]+.*$/,_o=function(n){Pr||(Pr=Je());var i=Pr.focusTabindexTrailingCharacters?$f:Of,a=pe({label:"is/valid-tabindex",resolveDocument:!0,context:n}),d=a.hasAttribute("tabindex"),p=a.hasAttribute("tabIndex");if(!d&&!p)return!1;var g=a.ownerSVGElement||a.nodeName.toLowerCase()==="svg";if(g&&!Pr.focusSvgTabindexAttribute)return!1;if(Pr.focusInvalidTabindex)return!0;var k=a.getAttribute(d?"tabindex":"tabIndex");return k==="-32768"?!1:Boolean(k&&i.test(k))},ct=function(n){if(!_o(n))return null;var i=n.hasAttribute("tabindex"),a=i?"tabindex":"tabIndex",d=parseInt(n.getAttribute(a),10);return isNaN(d)?-1:d},Co=void 0,ea=void 0,Ln={input:!0,select:!0,textarea:!0,button:!0,fieldset:!0,form:!0},ta=function(n){Co||(Co=Je(),Co.focusFieldsetDisabled&&delete Ln.fieldset,Co.focusFormDisabled&&delete Ln.form,ea=new RegExp("^("+Object.keys(Ln).join("|")+")$"));var i=pe({label:"is/native-disabled-supported",context:n}),a=i.nodeName.toLowerCase();return Boolean(ea.test(a))},ra=function(n){var i=n.element,a=n.attribute,d="data-cached-"+a,p=i.getAttribute(d);if(p===null){var g=i.getAttribute(a);if(g===null)return;i.setAttribute(d,g||""),i.removeAttribute(a)}else{var k=i.getAttribute(d);i.removeAttribute(d),i.setAttribute(a,k)}},er=function(n){var i=n.element,a=n.attribute,d=n.temporaryValue,p=n.saveValue,g="data-cached-"+a;if(d!==void 0){var k=p||i.getAttribute(a);i.setAttribute(g,k||""),i.setAttribute(a,d)}else{var D=i.getAttribute(g);i.removeAttribute(g),D===""?i.removeAttribute(a):i.setAttribute(a,D)}},Dr=function(){},Lf={log:Dr,debug:Dr,info:Dr,warn:Dr,error:Dr},zf=typeof console!="undefined"?console:Lf,Io=void 0,Mo=function(n,i){Io||(Io=Je());var a=pe({label:"element/disabled",context:n});i=Boolean(i);var d=a.hasAttribute("data-ally-disabled"),p=arguments.length===1;return ta(a)?p?a.disabled:(a.disabled=i,a):p?d:(d===i||ve(a,i),a)},dt=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=[],d=pe({label:"get/parents",context:i});d;)a.push(d),d=d.parentNode,d&&d.nodeType!==Node.ELEMENT_NODE&&(d=null);return a},Pf=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector"],zn=null,de=void 0;ae.except=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=function(a){return ae({context:a,except:n})};return i.rules=ae,i};var Rr=ae.except({}),Df=function(n){try{return n.contentDocument||n.contentWindow&&n.contentWindow.document||n.getSVGDocument&&n.getSVGDocument()||null}catch(i){return null}},Br=void 0,Pn=function(n){if(typeof Br!="string"){var i=Xs();i&&(Br=", html "+i+" ")}return Br?n+Br+n.replace(/\s*,\s*/g,",").split(",").join(Br):n},Dn=void 0,Rf=/^(area)$/;_e.except=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=function(a){return _e({context:a,except:n})};return i.rules=_e,i};var tr=_e.except({}),Wt=void 0,oa=function(n){Wt||(Wt=Je());var i=pe({label:"is/valid-area",context:n}),a=i.nodeName.toLowerCase();if(a!=="area")return!1;var d=i.hasAttribute("tabindex");if(!Wt.focusAreaTabindex&&d)return!1;var p=x(i);if(!p||!tr(p)||!Wt.focusBrokenImageMap&&(!p.complete||!p.naturalHeight||p.offsetWidth<=0||p.offsetHeight<=0))return!1;if(!Wt.focusAreaWithoutHref&&!i.href)return Wt.focusAreaTabindex&&d||Wt.focusAreaImgTabindex&&p.hasAttribute("tabindex");var g=dt({context:p}).slice(1).some(function(k){var D=k.nodeName.toLowerCase();return D==="button"||D==="a"});return!g},Rn=void 0,na=function(n){Rn||(Rn=Je());var i=pe({label:"is/disabled",context:n});if(i.hasAttribute("data-ally-disabled"))return!0;if(!ta(i))return!1;if(i.disabled)return!0;var a=dt({context:i});return a.some(Re)?!0:!!(!Rn.focusFormDisabled&&a.some(c))};Ae.except=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=function(a){return Ae({context:a,except:n})};return i.rules=Ae,i};var ia=Ae.except({}),vt=void 0;Te.except=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=function(a){return Te({context:a,except:n})};return i.rules=Te,i};var _t=Te.except({}),Bf=ge(Rr),Vt=void 0,Fr=void 0,Ff=function(){return Vt||(Vt=Je()),typeof Fr=="string"?Fr:(Fr=""+(Vt.focusTable?"table, td,":"")+(Vt.focusFieldset?"fieldset,":"")+"svg a,a[href],area[href],input, select, textarea, button,iframe, object, embed,keygen,"+(Vt.focusAudioWithoutControls?"audio,":"audio[controls],")+(Vt.focusVideoWithoutControls?"video,":"video[controls],")+(Vt.focusSummary?"summary,":"")+"[tabindex],[contenteditable]",Fr=Pn(Fr))},Hr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.includeContext,d=n.includeOnlyTabbable,p=n.strategy,g=p===void 0?"quick":p,k=pe({label:"query/focusable",resolveDocument:!0,defaultToDocument:!0,context:i}),D={context:k,includeContext:a,includeOnlyTabbable:d,strategy:g};if(g==="quick")return et(D);if(g==="strict"||g==="all")return E(D);throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]')},rr=void 0,Hf=/^(fieldset|table|td|body)$/;B.except=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=function(a){return B({context:a,except:n})};return i.rules=B,i};var Nf=Rr.rules.except({flexbox:!0}),Wf=B.except({flexbox:!0}),sa=B.except({}),Nr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.includeContext,d=n.includeOnlyTabbable,p=n.strategy,g=sa.rules.except({onlyTabbable:d});return Hr({context:i,includeContext:a,includeOnlyTabbable:d,strategy:p}).filter(g)},Vf=function(n){return n.sort(b)},Wr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.list,a=n.elements,d=n.resolveElement,p=i.slice(0),g=$e(a).slice(0);Vf(g);var k=J(p,g,d);return w(p,k),p},Vr=void 0,aa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.skipFocusable;Vr||(Vr=Je());var d=pe({label:"get/focus-redirect-target",context:i});if(!a&&_t(d))return null;var p=d.nodeName.toLowerCase(),g=tt(d);return p==="label"?at(d,g):p==="legend"?Ze(d,g):p==="img"?Oe(d,g):null},or=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.except,d=pe({label:"get/focus-target",context:i}),p=null,g=function(k){var D=_t.rules({context:k,except:a});return D?(p=k,!0):(p=aa({context:k,skipFocusable:!0}),Boolean(p))};return g(d)||dt({context:d}).slice(1).some(g),p},la={flexbox:!0,scrollable:!0,onlyTabbable:!0},Uf=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.defaultToAncestor,d=i.undoScrolling,p=pe({label:"element/focus",context:n}),g=_t.rules({context:p,except:la});if(!a&&!g)return null;var k=or({context:p,except:la});if(!k)return null;if(kt(k))return k;var D=void 0;d&&(D=q(k));var F=W(k);return D&&D(),F},qf={blur:Om,disabled:Mo,focus:Uf};typeof window!="undefined"&&function(){for(var n=0,i=["ms","moz","webkit","o"],a="",d="",p=0,g=i.length;g>p;++p)a=window[i[p]+"RequestAnimationFrame"],d=window[i[p]+"CancelAnimationFrame"]||window[i[p]+"CancelRequestAnimationFrame"];typeof window.requestAnimationFrame!="function"&&(window.requestAnimationFrame=window[a]||function(k){var D=new Date().getTime(),F=Math.max(0,16-(D-n)),X=window.setTimeout(function(){k(D+F)},F);return n=D+F,X}),typeof window.cancelAnimationFrame!="function"&&(window.cancelAnimationFrame=window[d]||function(k){clearTimeout(k)})}();var jo=typeof window!="undefined"&&window.CustomEvent||function(){};typeof jo!="function"&&(jo=function(n,i){var a=document.createEvent("CustomEvent");return!i&&(i={bubbles:!1,cancelable:!1,detail:void 0}),a.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),a},jo.prototype=window.Event.prototype);var Gf=jo,Ur=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.engage,a=n.disengage,d={engage:i||L,disengage:a||L,instances:0,_result:null};return O.bind(d)},Ao=void 0,qr=void 0,Kf=Ur({engage:Ie,disengage:Me}),ca=function(n){var i=pe({label:"is/shadowed",resolveDocument:!0,context:n});return Boolean(Yt({context:i}))},da=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=[],d=pe({label:"get/shadow-host-parents",context:i});d&&(d=Yt({context:d}));)a.push(d);return a},Bn=function(){return document.activeElement===null&&document.body.focus(),ca(document.activeElement)?oe():ce()},Fn=void 0,Hn=void 0;typeof document!="undefined"&&document.documentElement.createShadowRoot?function(){var n=void 0,i=void 0,a=function(){p(),(window.clearImmediate||window.clearTimeout)(n),n=(window.setImmediate||window.setTimeout)(function(){g()})},d=function(D){D.addEventListener("blur",a,!0),i=D},p=function(){i&&i.removeEventListener("blur",a,!0),i=null},g=function(){var D=Bn();if(D.length===1)return void p();d(D[0]);var F=new CustomEvent("shadow-focus",{bubbles:!1,cancelable:!1,detail:{elements:D,active:D[0],hosts:D.slice(1)}});document.dispatchEvent(F)},k=function(){(window.clearImmediate||window.clearTimeout)(n),g()};Fn=function(){document.addEventListener("focus",k,!0)},Hn=function(){(window.clearImmediate||window.clearTimeout)(n),i&&i.removeEventListener("blur",a,!0),document.removeEventListener("focus",k,!0)}}():Fn=Hn=function(){};var Nn=Ur({engage:Fn,disengage:Hn}),Zf={activeElement:Kf,shadowFocus:Nn},Wn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.engage,a=n.disengage,d={engage:i||Ts,disengage:a||Ts,context:null};return nm.bind(d)},Vn=void 0,ua=void 0,Xf=H.is.TRIDENT&&(H.is.IE10||H.is.IE11);Xf?function(){var n=function(i){var a=or({context:i.target,except:{flexbox:!0,scrollable:!0}});if(a&&a!==i.target){window.setImmediate(function(){a.focus()});var d=[].map.call(a.children,function(p){var g=p.style.visibility||"",k=p.style.transition||"";return p.style.visibility="hidden",p.style.transition="none",[p,g,k]});window.setImmediate(function(){d.forEach(function(p){p[0].style.visibility=p[1],p[0].style.transition=p[2]})})}};Vn=function(i){i.addEventListener("mousedown",n,!0)},ua=function(i){i.removeEventListener("mousedown",n,!0)}}():Vn=function(){};var Jf=Wn({engage:Vn,disengage:ua}),Un=void 0,pa=void 0,Yf=H.is.OSX&&(H.is.GECKO||H.is.WEBKIT);Yf?function(){var n=function(a){if(!a.defaultPrevented&&M(a.target,"input, button, button *")){var d=or({context:a.target});(window.setImmediate||window.setTimeout)(function(){d.focus()})}},i=function(a){if(!a.defaultPrevented&&M(a.target,"label, label *")){var d=or({context:a.target});d&&d.focus()}};Un=function(a){a.addEventListener("mousedown",n,!1),a.addEventListener("mouseup",i,!1)},pa=function(a){a.removeEventListener("mousedown",n,!1),a.removeEventListener("mouseup",i,!1)}}():Un=function(){};var Qf=Wn({engage:Un,disengage:pa}),qn=void 0,ma=void 0,ev=H.is.WEBKIT;ev?function(){var n=function(i){var a=or({context:i.target});!a||a.hasAttribute("tabindex")&&_o(a)||(a.setAttribute("tabindex",0),(window.setImmediate||window.setTimeout)(function(){a.removeAttribute("tabindex")},0))};qn=function(i){i.addEventListener("mousedown",n,!0),i.addEventListener("touchstart",n,!0)},ma=function(i){i.removeEventListener("mousedown",n,!0),i.removeEventListener("touchstart",n,!0)}}():qn=function(){};var tv=Wn({engage:qn,disengage:ma}),rv={pointerFocusChildren:Jf,pointerFocusInput:Qf,pointerFocusParent:tv},ov=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=tt(i),d=void 0;try{d=a.activeElement}catch(p){}return d&&d.nodeType||(d=a.body||a.documentElement),d},fa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.filter;if(i=pe({label:"get/insignificant-branches",defaultToDocument:!0,context:i}),a=$e(a),!a.length)throw new TypeError("get/insignificant-branches requires valid options.filter");return im({context:i,filter:a})},nv={activeElement:ov,activeElements:Bn,focusRedirectTarget:aa,focusTarget:or,insignificantBranches:fa,parents:dt,shadowHostParents:da,shadowHost:Yt},iv={activeElement:kt,disabled:na,focusRelevant:Rr,focusable:_t,onlyTabbable:ia,shadowed:ca,tabbable:sa,validArea:oa,validTabindex:_o,visible:tr},Gn=function(n){return n.shadowRoot?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP};Gn.acceptNode=Gn;for(var sv={childList:!0,subtree:!0},av=function(){function n(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.context,p=a.callback,g=a.config;o(this,n),this.config=g,this.disengage=this.disengage.bind(this),this.clientObserver=new MutationObserver(p),this.hostObserver=new MutationObserver(function(k){return k.forEach(i.handleHostMutation,i)}),this.observeContext(d),this.observeShadowHosts(d)}return zr(n,[{key:"disengage",value:function(){this.clientObserver&&this.clientObserver.disconnect(),this.clientObserver=null,this.hostObserver&&this.hostObserver.disconnect(),this.hostObserver=null}},{key:"observeShadowHosts",value:function(i){var a=this,d=yo({context:i});d.forEach(function(p){return a.observeContext(p.shadowRoot)})}},{key:"observeContext",value:function(i){this.clientObserver.observe(i,this.config),this.hostObserver.observe(i,sv)}},{key:"handleHostMutation",value:function(i){if(i.type==="childList"){var a=$e(i.addedNodes).filter(function(d){return d.nodeType===Node.ELEMENT_NODE});a.forEach(this.observeShadowHosts,this)}}}]),n}(),va=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.callback,d=n.config;if(typeof a!="function")throw new TypeError("observe/shadow-mutations requires options.callback to be a function");if((typeof d=="undefined"?"undefined":qs(d))!=="object")throw new TypeError("observe/shadow-mutations requires options.config to be an object");if(!window.MutationObserver)return{disengage:function(){}};var p=pe({label:"observe/shadow-mutations",resolveDocument:!0,defaultToDocument:!0,context:i}),g=new av({context:p,callback:a,config:d});return{disengage:g.disengage}},lv={attributes:!0,childList:!0,subtree:!0,attributeFilter:["tabindex","disabled","data-ally-disabled"]},cv=function(){function n(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.context,p=a.filter;o(this,n),this._context=$e(d||document.documentElement)[0],this._filter=$e(p),this._inertElementCache=[],this.disengage=this.disengage.bind(this),this.handleMutation=this.handleMutation.bind(this),this.renderInert=this.renderInert.bind(this),this.filterElements=this.filterElements.bind(this),this.filterParentElements=this.filterParentElements.bind(this);var g=Hr({context:this._context,includeContext:!0,strategy:"all"});this.renderInert(g),this.shadowObserver=va({context:this._context,config:lv,callback:function(k){return k.forEach(i.handleMutation)}})}return zr(n,[{key:"disengage",value:function(){this._context&&(Os(this._context),this._inertElementCache.forEach(function(i){return Os(i)}),this._inertElementCache=null,this._filter=null,this._context=null,this.shadowObserver&&this.shadowObserver.disengage(),this.shadowObserver=null)}},{key:"listQueryFocusable",value:function(i){return i.map(function(a){return Hr({context:a,includeContext:!0,strategy:"all"})}).reduce(function(a,d){return a.concat(d)},[])}},{key:"renderInert",value:function(i){var a=this,d=function(p){a._inertElementCache.push(p),sm(p)};i.filter(this.filterElements).filter(this.filterParentElements).filter(function(p){return!Mo(p)}).forEach(d)}},{key:"filterElements",value:function(i){var a=Lr({element:i,includeSelf:!0});return!this._filter.some(a)}},{key:"filterParentElements",value:function(i){var a=Lr({parent:i});return!this._filter.some(a)}},{key:"handleMutation",value:function(i){if(i.type==="childList"){var a=$e(i.addedNodes).filter(function(p){return p.nodeType===Node.ELEMENT_NODE});if(!a.length)return;var d=this.listQueryFocusable(a);this.renderInert(d)}else i.type==="attributes"&&this.renderInert([i.target])}}]),n}(),dv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.filter,d=new cv({context:i,filter:a});return{disengage:d.disengage}},uv={attributes:!1,childList:!0,subtree:!0},pv=function(){function n(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=i.context,d=i.filter;o(this,n),this._context=$e(a||document.documentElement)[0],this._filter=$e(d),this.disengage=this.disengage.bind(this),this.handleMutation=this.handleMutation.bind(this),this.isInsignificantBranch=this.isInsignificantBranch.bind(this);var p=fa({context:this._context,filter:this._filter});p.forEach($s),this.startObserver()}return zr(n,[{key:"disengage",value:function(){this._context&&([].forEach.call(this._context.querySelectorAll("[data-cached-aria-hidden]"),am),this._context=null,this._filter=null,this._observer&&this._observer.disconnect(),this._observer=null)}},{key:"startObserver",value:function(){var i=this;window.MutationObserver&&(this._observer=new MutationObserver(function(a){return a.forEach(i.handleMutation)}),this._observer.observe(this._context,uv))}},{key:"handleMutation",value:function(i){i.type==="childList"&&$e(i.addedNodes).filter(function(a){return a.nodeType===Node.ELEMENT_NODE}).filter(this.isInsignificantBranch).forEach($s)}},{key:"isInsignificantBranch",value:function(i){var a=dt({context:i});if(a.some(function(p){return p.getAttribute("aria-hidden")==="true"}))return!1;var d=Lr({element:i});return!this._filter.some(d)}}]),n}(),mv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.filter,d=new pv({context:i,filter:a});return{disengage:d.disengage}},fv=function(){function n(i){o(this,n),this._document=tt(i),this.maps={}}return zr(n,[{key:"getAreasFor",value:function(i){return this.maps[i]||this.addMapByName(i),this.maps[i]}},{key:"addMapByName",value:function(i){var a=Ge(i,this._document);a&&(this.maps[a.name]=Nr({context:a}))}},{key:"extractAreasFromList",value:function(i){return i.filter(function(a){var d=a.nodeName.toLowerCase();if(d!=="area")return!0;var p=a.parentNode;return this.maps[p.name]||(this.maps[p.name]=[]),this.maps[p.name].push(a),!1},this)}}]),n}(),vv=function(n,i){var a=i.querySelectorAll("img[usemap]"),d=new fv(i),p=d.extractAreasFromList(n);return a.length?Wr({list:p,elements:a,resolveElement:function(g){var k=g.getAttribute("usemap").slice(1);return d.getAreasFor(k)}}):p},gv=function(){function n(i,a){o(this,n),this.context=i,this.sortElements=a,this.hostCounter=1,this.inHost={},this.inDocument=[],this.hosts={},this.elements={}}return zr(n,[{key:"_registerHost",value:function(i){if(!i._sortingId){i._sortingId="shadow-"+this.hostCounter++,this.hosts[i._sortingId]=i;var a=Yt({context:i});a?(this._registerHost(a),this._registerHostParent(i,a)):this.inDocument.push(i)}}},{key:"_registerHostParent",value:function(i,a){this.inHost[a._sortingId]||(this.inHost[a._sortingId]=[]),this.inHost[a._sortingId].push(i)}},{key:"_registerElement",value:function(i,a){this.elements[a._sortingId]||(this.elements[a._sortingId]=[]),this.elements[a._sortingId].push(i)}},{key:"extractElements",value:function(i){return i.filter(function(a){var d=Yt({context:a});return d?(this._registerHost(d),this._registerElement(a,d),!1):!0},this)}},{key:"sort",value:function(i){var a=this._injectHosts(i);return a=this._replaceHosts(a),this._cleanup(),a}},{key:"_injectHosts",value:function(i){return Object.keys(this.hosts).forEach(function(a){var d=this.elements[a],p=this.inHost[a],g=this.hosts[a].shadowRoot;this.elements[a]=this._merge(d,p,g)},this),this._merge(i,this.inDocument,this.context)}},{key:"_merge",value:function(i,a,d){var p=Wr({list:i,elements:a});return this.sortElements(p,d)}},{key:"_replaceHosts",value:function(i){return Wr({list:i,elements:this.inDocument,resolveElement:this._resolveHostElement.bind(this)})}},{key:"_resolveHostElement",value:function(i){var a=Wr({list:this.elements[i._sortingId],elements:this.inHost[i._sortingId],resolveElement:this._resolveHostElement.bind(this)}),d=ct(i);return d!==null&&d>-1?[i].concat(a):a}},{key:"_cleanup",value:function(){Object.keys(this.hosts).forEach(function(i){delete this.hosts[i]._sortingId},this)}}]),n}(),hv=function(n,i,a){var d=new gv(i,a),p=d.extractElements(n);return p.length===n.length?a(n):d.sort(p)},bv=function(n){var i={},a=[],d=n.filter(function(g){var k=g.tabIndex;return k===void 0&&(k=ct(g)),0>=k||k===null||k===void 0?!0:(i[k]||(i[k]=[],a.push(k)),i[k].push(g),!1)}),p=a.sort().map(function(g){return i[g]}).reduceRight(function(g,k){return k.concat(g)},d);return p},Kn=void 0,Zn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.includeContext,d=n.includeOnlyTabbable,p=n.strategy;Kn||(Kn=Je());var g=$e(i)[0]||document.documentElement,k=Nr({context:g,includeContext:a,includeOnlyTabbable:d,strategy:p});return k=document.body.createShadowRoot&&H.is.BLINK?hv(k,g,Ls):Ls(k,g),a&&(k=lm(k,g)),k},Ct={tab:9,left:37,up:38,right:39,down:40,pageUp:33,"page-up":33,pageDown:34,"page-down":34,end:35,home:36,enter:13,escape:27,space:32,shift:16,capsLock:20,"caps-lock":20,ctrl:17,alt:18,meta:91,pause:19,insert:45,delete:46,backspace:8,_alias:{91:[92,93,224]}},To=1;26>To;To++)Ct["f"+To]=To+111;for(var nr=0;10>nr;nr++){var ga=nr+48,ha=nr+96;Ct[nr]=ga,Ct["num-"+nr]=ha,Ct._alias[ga]=[ha]}for(var Xn=0;26>Xn;Xn++){var ba=Xn+65,xv=String.fromCharCode(ba).toLowerCase();Ct[xv]=ba}var Jn={alt:"altKey",ctrl:"ctrlKey",meta:"metaKey",shift:"shiftKey"},yv=Object.keys(Jn).map(function(n){return Jn[n]}),wv=function(n){return n.split(/\s+/).map(function(i){var a=i.split("+"),d=dm(a.slice(0,-1)),p=um(a.slice(-1));return{keyCodes:p,modifiers:d,matchModifiers:pm.bind(null,d)}})},xa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i={},a=$e(n.context)[0]||document.documentElement;delete n.context;var d=$e(n.filter);delete n.filter;var p=Object.keys(n);if(!p.length)throw new TypeError("when/key requires at least one option key");var g=function(F){F.keyCodes.forEach(function(X){i[X]||(i[X]=[]),i[X].push(F)})};p.forEach(function(F){if(typeof n[F]!="function")throw new TypeError('when/key requires option["'+F+'"] to be a function');var X=function(Se){return Se.callback=n[F],Se};wv(F).map(X).forEach(g)});var k=function(F){if(!F.defaultPrevented){if(d.length){var X=Lr({element:F.target,includeSelf:!0});if(d.some(X))return}var Se=F.keyCode||F.which;i[Se]&&i[Se].forEach(function(je){je.matchModifiers(F)&&je.callback.call(a,F,D)})}};a.addEventListener("keydown",k,!1);var D=function(){a.removeEventListener("keydown",k,!1)};return{disengage:D}},Sv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context;return i||(i=document.documentElement),Zn(),xa({"?alt+?shift+tab":function(a){a.preventDefault();var d=Zn({context:i}),p=a.shiftKey,g=d[0],k=d[d.length-1],D=p?g:k,F=p?k:g;if(kt(D))return void F.focus();var X=void 0,Se=d.some(function(ut,qt){return kt(ut)?(X=qt,!0):!1});if(!Se)return void g.focus();var je=p?-1:1;d[X+je].focus()}})},kv={disabled:dv,hidden:mv,tabFocus:Sv},Ev={"aria-busy":{default:"false",values:["true","false"]},"aria-checked":{default:void 0,values:["true","false","mixed",void 0]},"aria-disabled":{default:"false",values:["true","false"]},"aria-expanded":{default:void 0,values:["true","false",void 0]},"aria-grabbed":{default:void 0,values:["true","false",void 0]},"aria-hidden":{default:"false",values:["true","false"]},"aria-invalid":{default:"false",values:["true","false","grammar","spelling"]},"aria-pressed":{default:void 0,values:["true","false","mixed",void 0]},"aria-selected":{default:void 0,values:["true","false",void 0]},"aria-atomic":{default:"false",values:["true","false"]},"aria-autocomplete":{default:"none",values:["inline","list","both","none"]},"aria-dropeffect":{default:"none",multiple:!0,values:["copy","move","link","execute","popup","none"]},"aria-haspopup":{default:"false",values:["true","false"]},"aria-live":{default:"off",values:["off","polite","assertive"]},"aria-multiline":{default:"false",values:["true","false"]},"aria-multiselectable":{default:"false",values:["true","false"]},"aria-orientation":{default:"horizontal",values:["vertical","horizontal"]},"aria-readonly":{default:"false",values:["true","false"]},"aria-relevant":{default:"additions text",multiple:!0,values:["additions","removals","text","all"]},"aria-required":{default:"false",values:["true","false"]},"aria-sort":{default:"none",other:!0,values:["ascending","descending","none"]}},_v={attribute:Ev,keycode:Ct},Ut=0,ir=0,ya=["touchstart","pointerdown","MSPointerDown","mousedown"],wa=["touchend","touchcancel","pointerup","MSPointerUp","pointercancel","MSPointerCancel","mouseup"],Sa=Ur({engage:vm,disengage:fm}),Cv={interactionType:Sa,shadowMutations:va},Iv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.sequence,d=n.strategy,p=n.ignoreAutofocus,g=n.defaultToContext,k=n.includeOnlyTabbable,D=-1;a||(i=$e(i||document.body)[0],a=Nr({context:i,includeOnlyTabbable:k,strategy:d})),a.length&&!p&&(D=te(a,gm)),a.length&&D===-1&&(D=te(a,hm));var F=_t.rules.except({onlyTabbable:k});return D===-1&&g&&i&&F(i)?i:a[D]||null},Mv={firstTabbable:Iv,focusable:Hr,shadowHosts:yo,tabbable:Nr,tabsequence:Zn},ka=typeof document!="undefined"&&"onfocusin"in document,Yn=ka?"focusin":"focus",Oo=ka?"focusout":"blur",Qn=void 0,ei=void 0,ti=null,$o=null,Gr={pointer:!1,key:!1,script:!1,initial:!1},jv=Ur({engage:Em,disengage:km}),ri=void 0,Ea=typeof document!="undefined"&&"onfocusin"in document,_a=Ea?"focusin":"focus",Ca=Ea?"focusout":"blur",Lo="ally-focus-within",oi=void 0,ni=void 0,ii=void 0,Av=Ur({engage:Cm,disengage:_m}),Tv={focusSource:jv,focusWithin:Av},Ov=function(i){var a=i.getBoundingClientRect(),d=Im();d.area=d.width*d.height;var p=d,g=Am(i);if(g){if(!g.width||!g.height)return 0;p=An(g,d),p.area=g.area}var k=An(a,p);if(!k.width||!k.height)return 0;var D=a.width*a.height,F=Math.min(D,p.area),X=Math.round(k.width)*Math.round(k.height)/F,Se=1e4,je=Math.round(X*Se)/Se;return Math.min(je,1)},Ia=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.callback,d=n.area;if(typeof a!="function")throw new TypeError("when/visible-area requires options.callback to be a function");typeof d!="number"&&(d=1);var p=pe({label:"when/visible-area",context:i}),g=void 0,k=null,D=function(){g&&cancelAnimationFrame(g)},F=function(){return!tr(p)||Ov(p)<d||a(p)===!1},X=function(){return F()?void k():void D()};return k=function(){g=requestAnimationFrame(X)},k(),{disengage:D}},$v=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.context,a=n.callback,d=n.area;if(typeof a!="function")throw new TypeError("when/focusable requires options.callback to be a function");var p=pe({label:"when/focusable",context:i}),g=function(X){return _t(X)?a(X):!1},k=tt(p),D=Ia({context:p,callback:g,area:d}),F=function X(){k.removeEventListener("focus",X,!0),D&&D.disengage()};return k.addEventListener("focus",F,!0),{disengage:F}},Lv={focusable:$v,key:xa,visibleArea:Ia},zv=typeof window!="undefined"&&window.ally,Pv={element:qf,event:Zf,fix:rv,get:nv,is:iv,maintain:kv,map:_v,observe:Cv,query:Mv,style:Tv,when:Lv,version:On,noConflict:function(){return typeof window!="undefined"&&window.ally===this&&(window.ally=zv),this}};r.exports=Pv},{"css.escape":2,platform:3}],2:[function(e,r,o){(function(s){(function(l,u){typeof o=="object"?r.exports=u(l):typeof t=="function"&&t.amd?t([],u.bind(l,l)):u(l)})(typeof s!="undefined"?s:this,function(l){if(l.CSS&&l.CSS.escape)return l.CSS.escape;var u=function(f){if(arguments.length==0)throw new TypeError("`CSS.escape` requires an argument.");for(var v,S=String(f),I=S.length,y=-1,j="",$=S.charCodeAt(0);++y<I;)v=S.charCodeAt(y),j+=v!=0?v>=1&&31>=v||v==127||y==0&&v>=48&&57>=v||y==1&&v>=48&&57>=v&&$==45?"\\"+v.toString(16)+" ":(y!=0||I!=1||v!=45)&&(v>=128||v==45||v==95||v>=48&&57>=v||v>=65&&90>=v||v>=97&&122>=v)?S.charAt(y):"\\"+S.charAt(y):"\uFFFD";return j};return l.CSS||(l.CSS={}),l.CSS.escape=u,u})}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],3:[function(e,r,o){(function(s){(function(){"use strict";function l(_){return _=String(_),_.charAt(0).toUpperCase()+_.slice(1)}function u(_,ae,te){var Ee={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return ae&&te&&/^Win/i.test(_)&&!/^Windows Phone /i.test(_)&&(Ee=Ee[/[\d.]+$/.exec(_)])&&(_="Windows "+Ee),_=String(_),ae&&te&&(_=_.replace(RegExp(ae,"i"),te)),_=v(_.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function f(_,ae){var te=-1,Ee=_?_.length:0;if(typeof Ee=="number"&&Ee>-1&&be>=Ee)for(;++te<Ee;)ae(_[te],te,_);else S(_,ae)}function v(_){return _=A(_),/^(?:webOS|i(?:OS|P))/.test(_)?_:l(_)}function S(_,ae){for(var te in _)N.call(_,te)&&ae(_[te],te,_)}function I(_){return _==null?l(_):Y.call(_).slice(8,-1)}function y(_,ae){var te=_!=null?typeof _[ae]:"number";return!/^(?:boolean|number|string|undefined)$/.test(te)&&(te=="object"?!!_[ae]:!0)}function j(_){return String(_).replace(/([ -])(?!$)/g,"$1?")}function $(_,ae){var te=null;return f(_,function(Ee,qe){te=ae(te,Ee,qe,_)}),te}function A(_){return String(_).replace(/^ +| +$/g,"")}function P(_){function ae(Me){return $(Me,function(ce,oe){return ce||RegExp("\\b"+(oe.pattern||j(oe))+"\\b","i").exec(_)&&(oe.label||oe)})}function te(Me){return $(Me,function(ce,oe,Xe){return ce||(oe[O]||oe[/^[a-z]+(?: +[a-z]+\b)*/i.exec(O)]||RegExp("\\b"+j(Xe)+"(?:\\b|\\w*\\d)","i").exec(_))&&Xe})}function Ee(Me){return $(Me,function(ce,oe){return ce||RegExp("\\b"+(oe.pattern||j(oe))+"\\b","i").exec(_)&&(oe.label||oe)})}function qe(Me){return $(Me,function(ce,oe){var Xe=oe.pattern||j(oe);return!ce&&(ce=RegExp("\\b"+Xe+"(?:/[\\d.]+|[ \\w.]*)","i").exec(_))&&(ce=u(ce,Xe,oe.label||oe)),ce})}function st(Me){return $(Me,function(ce,oe){var Xe=oe.pattern||j(oe);return!ce&&(ce=RegExp("\\b"+Xe+" *\\d+[.\\w_]*","i").exec(_)||RegExp("\\b"+Xe+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(_))&&((ce=String(oe.label&&!RegExp(Xe,"i").test(oe.label)?oe.label:ce).split("/"))[1]&&!/[\d.]+/.test(ce[0])&&(ce[0]+=" "+ce[1]),oe=oe.label||oe,ce=v(ce[0].replace(RegExp(Xe,"i"),oe).replace(RegExp("; *(?:"+oe+"[_-])?","i")," ").replace(RegExp("("+oe+")[-_.]?(\\w)","i"),"$1 $2"))),ce})}function Nt(Me){return $(Me,function(ce,oe){return ce||(RegExp(oe+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(_)||0)[1]||null})}function De(){return this.description||""}var le=Z,_e=_&&typeof _=="object"&&I(_)!="String";_e&&(le=_,_=null);var Ge=le.navigator||{},Ke=Ge.userAgent||"";_||(_=Ke);var x,Re,c=_e||m==Q,Ae=_e?!!Ge.likeChrome:/\bChrome\b/.test(_)&&!/internal|\n/i.test(Y.toString()),R="Object",Te=_e?R:"ScriptBridgingProxyObject",ge=_e?R:"Environment",E=_e&&le.java?"JavaPackage":I(le.java),et=_e?R:"RuntimeObject",B=/\bJava/.test(E)&&le.java,b=B&&I(le.environment)==ge,z=B?"a":"\u03B1",J=B?"b":"\u03B2",w=le.document||{},Ne=le.operamini||le.opera,at=ve.test(at=_e&&Ne?Ne["[[Class]]"]:I(Ne))?at:Ne=null,lt=_,re=[],Ze=null,Oe=_==Ke,q=Oe&&Ne&&typeof Ne.version=="function"&&Ne.version(),W=ae([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),C=Ee(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt","SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),O=st([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation 3","PlayStation 4","PlayStation Vita","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),L=te({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{"PlayStation 4":1,"PlayStation 3":1,"PlayStation Vita":1}}),T=qe(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(W&&(W=[W]),L&&!O&&(O=st([L])),(x=/\bGoogle TV\b/.exec(O))&&(O=x[0]),/\bSimulator\b/i.test(_)&&(O=(O?O+" ":"")+"Simulator"),C=="Opera Mini"&&/\bOPiOS\b/.test(_)&&re.push("running in Turbo/Uncompressed mode"),C=="IE"&&/\blike iPhone OS\b/.test(_)?(x=P(_.replace(/like iPhone OS/,"")),L=x.manufacturer,O=x.product):/^iP/.test(O)?(C||(C="Safari"),T="iOS"+((x=/ OS ([\d_]+)/i.exec(_))?" "+x[1].replace(/_/g,"."):"")):C!="Konqueror"||/buntu/i.test(T)?L&&L!="Google"&&(/Chrome/.test(C)&&!/\bMobile Safari\b/i.test(_)||/\bVita\b/.test(O))||/\bAndroid\b/.test(T)&&/^Chrome/.test(C)&&/\bVersion\//i.test(_)?(C="Android Browser",T=/\bAndroid\b/.test(T)?T:"Android"):C=="Silk"?(/\bMobi/i.test(_)||(T="Android",re.unshift("desktop mode")),/Accelerated *= *true/i.test(_)&&re.unshift("accelerated")):C=="PaleMoon"&&(x=/\bFirefox\/([\d.]+)\b/.exec(_))?re.push("identifying as Firefox "+x[1]):C=="Firefox"&&(x=/\b(Mobile|Tablet|TV)\b/i.exec(_))?(T||(T="Firefox OS"),O||(O=x[1])):(!C||(x=!/\bMinefield\b/i.test(_)&&/\b(?:Firefox|Safari)\b/.exec(C)))&&(C&&!O&&/[\/,]|^[^(]+?\)/.test(_.slice(_.indexOf(x+"/")+8))&&(C=null),(x=O||L||T)&&(O||L||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(T))&&(C=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(T)?T:x)+" Browser")):T="Kubuntu",q||(q=Nt(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))","Version",j(C),"(?:Firefox|Minefield|NetFront)"])),(x=W=="iCab"&&parseFloat(q)>3&&"WebKit"||/\bOpera\b/.test(C)&&(/\bOPR\b/.test(_)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(_)&&!/^(?:Trident|EdgeHTML)$/.test(W)&&"WebKit"||!W&&/\bMSIE\b/i.test(_)&&(T=="Mac OS"?"Tasman":"Trident")||W=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(C)&&"NetFront")&&(W=[x]),C=="IE"&&(x=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(_)||0)[1])?(C+=" Mobile",T="Windows Phone "+(/\+$/.test(x)?x:x+".x"),re.unshift("desktop mode")):/\bWPDesktop\b/i.test(_)?(C="IE Mobile",T="Windows Phone 8.x",re.unshift("desktop mode"),q||(q=(/\brv:([\d.]+)/.exec(_)||0)[1])):C!="IE"&&W=="Trident"&&(x=/\brv:([\d.]+)/.exec(_))&&(C&&re.push("identifying as "+C+(q?" "+q:"")),C="IE",q=x[1]),Oe){if(y(le,"global"))if(B&&(x=B.lang.System,lt=x.getProperty("os.arch"),T=T||x.getProperty("os.name")+" "+x.getProperty("os.version")),c&&y(le,"system")&&(x=[le.system])[0]){T||(T=x[0].os||null);try{x[1]=le.require("ringo/engine").version,q=x[1].join("."),C="RingoJS"}catch(Me){x[0].global.system==le.system&&(C="Narwhal")}}else typeof le.process=="object"&&!le.process.browser&&(x=le.process)?(C="Node.js",lt=x.arch,T=x.platform,q=/[\d.]+/.exec(x.version)[0]):b&&(C="Rhino");else I(x=le.runtime)==Te?(C="Adobe AIR",T=x.flash.system.Capabilities.os):I(x=le.phantom)==et?(C="PhantomJS",q=(x=x.version||null)&&x.major+"."+x.minor+"."+x.patch):typeof w.documentMode=="number"&&(x=/\bTrident\/(\d+)/i.exec(_))&&(q=[q,w.documentMode],(x=+x[1]+4)!=q[1]&&(re.push("IE "+q[1]+" mode"),W&&(W[1]=""),q[1]=x),q=C=="IE"?String(q[1].toFixed(1)):q[0]);T=T&&v(T)}q&&(x=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(q)||/(?:alpha|beta)(?: ?\d)?/i.exec(_+";"+(Oe&&Ge.appMinorVersion))||/\bMinefield\b/i.test(_)&&"a")&&(Ze=/b/i.test(x)?"beta":"alpha",q=q.replace(RegExp(x+"\\+?$"),"")+(Ze=="beta"?J:z)+(/\d+\+?/.exec(x)||"")),C=="Fennec"||C=="Firefox"&&/\b(?:Android|Firefox OS)\b/.test(T)?C="Firefox Mobile":C=="Maxthon"&&q?q=q.replace(/\.[\d.]+/,".x"):/\bXbox\b/i.test(O)?(T=null,O=="Xbox 360"&&/\bIEMobile\b/.test(_)&&re.unshift("mobile mode")):!/^(?:Chrome|IE|Opera)$/.test(C)&&(!C||O||/Browser|Mobi/.test(C))||T!="Windows CE"&&!/Mobi/i.test(_)?C=="IE"&&Oe&&le.external===null?re.unshift("platform preview"):(/\bBlackBerry\b/.test(O)||/\bBB10\b/.test(_))&&(x=(RegExp(O.replace(/ +/g," *")+"/([.\\d]+)","i").exec(_)||0)[1]||q)?(x=[x,/BB10/.test(_)],T=(x[1]?(O=null,L="BlackBerry"):"Device Software")+" "+x[0],q=null):this!=S&&O!="Wii"&&(Oe&&Ne||/Opera/.test(C)&&/\b(?:MSIE|Firefox)\b/i.test(_)||C=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(T)||C=="IE"&&(T&&!/^Win/.test(T)&&q>5.5||/\bWindows XP\b/.test(T)&&q>8||q==8&&!/\bTrident\b/.test(_)))&&!ve.test(x=P.call(S,_.replace(ve,"")+";"))&&x.name&&(x="ing as "+x.name+((x=x.version)?" "+x:""),ve.test(C)?(/\bIE\b/.test(x)&&T=="Mac OS"&&(T=null),x="identify"+x):(x="mask"+x,C=at?v(at.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(x)&&(T=null),Oe||(q=null)),W=["Presto"],re.push(x)):C+=" Mobile",(x=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(_)||0)[1])&&(x=[parseFloat(x.replace(/\.(\d)$/,".0$1")),x],C=="Safari"&&x[1].slice(-1)=="+"?(C="WebKit Nightly",Ze="alpha",q=x[1].slice(0,-1)):(q==x[1]||q==(x[2]=(/\bSafari\/([\d.]+\+?)/i.exec(_)||0)[1]))&&(q=null),x[1]=(/\bChrome\/([\d.]+)/i.exec(_)||0)[1],x[0]==537.36&&x[2]==537.36&&parseFloat(x[1])>=28&&W=="WebKit"&&(W=["Blink"]),Oe&&(Ae||x[1])?(W&&(W[1]="like Chrome"),x=x[1]||(x=x[0],530>x?1:532>x?2:532.05>x?3:533>x?4:534.03>x?5:534.07>x?6:534.1>x?7:534.13>x?8:534.16>x?9:534.24>x?10:534.3>x?11:535.01>x?12:535.02>x?"13+":535.07>x?15:535.11>x?16:535.19>x?17:536.05>x?18:536.1>x?19:537.01>x?20:537.11>x?"21+":537.13>x?23:537.18>x?24:537.24>x?25:537.36>x?26:W!="Blink"?"27":"28")):(W&&(W[1]="like Safari"),x=x[0],x=400>x?1:500>x?2:526>x?3:533>x?4:534>x?"4+":535>x?5:537>x?6:538>x?7:601>x?8:"8"),W&&(W[1]+=" "+(x+=typeof x=="number"?".x":/[.+]/.test(x)?"":"+")),C=="Safari"&&(!q||parseInt(q)>45)&&(q=x)),C=="Opera"&&(x=/\bzbov|zvav$/.exec(T))?(C+=" ",re.unshift("desktop mode"),x=="zvav"?(C+="Mini",q=null):C+="Mobile",T=T.replace(RegExp(" *"+x+"$"),"")):C=="Safari"&&/\bChrome\b/.exec(W&&W[1])&&(re.unshift("desktop mode"),C="Chrome Mobile",q=null,/\bOS X\b/.test(T)?(L="Apple",T="iOS 4.3+"):T=null),q&&q.indexOf(x=/[\d.]+$/.exec(T))==0&&_.indexOf("/"+x+"-")>-1&&(T=A(T.replace(x,""))),W&&!/\b(?:Avant|Nook)\b/.test(C)&&(/Browser|Lunascape|Maxthon/.test(C)||C!="Safari"&&/^iOS/.test(T)&&/\bSafari\b/.test(W[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(C)&&W[1])&&(x=W[W.length-1])&&re.push(x),re.length&&(re=["("+re.join("; ")+")"]),L&&O&&O.indexOf(L)<0&&re.push("on "+L),O&&re.push((/^on /.test(re[re.length-1])?"":"on ")+O),T&&(x=/ ([\d.+]+)$/.exec(T),Re=x&&T.charAt(T.length-x[0].length-1)=="/",T={architecture:32,family:x&&!Re?T.replace(x[0],""):T,version:x?x[1]:null,toString:function(){var Me=this.version;return this.family+(Me&&!Re?" "+Me:"")+(this.architecture==64?" 64-bit":"")}}),(x=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(lt))&&!/\bi686\b/i.test(lt)?(T&&(T.architecture=64,T.family=T.family.replace(RegExp(" *"+x),"")),C&&(/\bWOW64\b/i.test(_)||Oe&&/\w(?:86|32)$/.test(Ge.cpuClass||Ge.platform)&&!/\bWin64; x64\b/i.test(_))&&re.unshift("32-bit")):T&&/^OS X/.test(T.family)&&C=="Chrome"&&parseFloat(q)>=39&&(T.architecture=64),_||(_=null);var Ie={};return Ie.description=_,Ie.layout=W&&W[0],Ie.manufacturer=L,Ie.name=C,Ie.prerelease=Ze,Ie.product=O,Ie.ua=_,Ie.version=C&&q,Ie.os=T||{architecture:null,family:null,version:null,toString:function(){return"null"}},Ie.parse=P,Ie.toString=De,Ie.version&&re.unshift(q),Ie.name&&re.unshift(C),T&&C&&(T!=String(T).split(" ")[0]||T!=C.split(" ")[0]&&!O)&&re.push(O?"("+T+")":"on "+T),re.length&&(Ie.description=re.join(" ")),Ie}var U={function:!0,object:!0},Z=U[typeof window]&&window||this,Q=Z,ee=U[typeof o]&&o,ne=U[typeof r]&&r&&!r.nodeType&&r,se=ee&&ne&&typeof s=="object"&&s;!se||se.global!==se&&se.window!==se&&se.self!==se||(Z=se);var be=Math.pow(2,53)-1,ve=/\bOpera/,m=this,M=Object.prototype,N=M.hasOwnProperty,Y=M.toString,we=P();typeof t=="function"&&typeof t.amd=="object"&&t.amd?(Z.platform=we,t(function(){return we})):ee&&ne?S(we,function(_,ae){ee[ae]=_}):Z.platform=we}).call(this)}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}]},{},[1])(1)})});var Au,Tu=V(()=>{G();Tt();fr();Au=h`
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

  ${me("s",h`
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

  ${io(h`button`)}
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
`});var $u={};Po($u);var Ou,os=V(()=>{G();rt();Tu();Ou=class extends ie{static get properties(){return{message:{type:String},actionMessage:{type:String}}}show(){this.classList.add("show")}hide(){this.classList.remove("show")}doneClicked(){this.dispatchEvent(new CustomEvent("doneClicked"))}actionClicked(){this.dispatchEvent(new CustomEvent("actionClicked"))}static get styles(){return[xe,Au]}render(){return K`
      <div
        id="toast"
        class="toast"
        @keyup="${e=>e.keyCode===13?this.doneClicked:""}"
        @click="${this.doneClicked}"
      >
        <p id="message">${this.message}</p>
        ${this.actionMessage?K`
              <button
                id="action"
                @keyup="${e=>e.keyCode===13?this.actionClicked:""}"
                @click="${this.actionClicked}"
              >
                ${this.actionMessage}
              </button>
            `:""}
      </div>
    `}};customElements.define("vst-ui-toast",Ou)});var Nu={};It(Nu,{createFile:()=>_x,getCacheFile:()=>kx,getFile:()=>ss,readCacheJsonFile:()=>Ex,writeFile:()=>Hu});function ss(t){return new Promise((e,r)=>{t.file(e,r)})}function kx(t){return new Promise((e,r)=>{window.requestFileSystem(LocalFileSystem.PERSISTENT,0,o=>{o.root.getFile(t,{create:!1,exclusive:!1},s=>s.isFile?(async()=>{e(await ss(s))})():e(!1),()=>{e(!1)})})})}function Ex(t){return new Promise((e,r)=>{window.requestFileSystem(LocalFileSystem.PERSISTENT,0,o=>{o.root.getFile(t,{create:!1,exclusive:!1},s=>s.isFile?(async()=>{let l=await ss(s),u=new FileReader;u.onload=({target:{result:f}})=>{e(JSON.parse(f))},u.readAsText(l)})():r(!1))})})}function Hu(t,e,r){return new Promise((o,s)=>{t.createWriter(async l=>{if(l.onerror=s,r)try{l.seek(l.length)}catch(u){console.error("file doesn't exist!")}await l.write(e),t.file(o)})})}function _x(t,e){return new Promise((r,o)=>{window.requestFileSystem(LocalFileSystem.PERSISTENT,0,s=>{s.root.getFile(t,{create:!0,exclusive:!1},l=>{if(!e&&!l.isFile)return console.error(`Could not retrieve or cache ${t}. Please connect to the internet to get ${t}.`);(async()=>{let u=await Hu(l,e);r(u)})()})})})}var Wu=V(()=>{});var Vu={};It(Vu,{handleCordova:()=>Cx});function Cx(){return document.addEventListener("deviceready",async()=>{if(console.assert(window.cordova,{errorMessage:"deviceready event caught but no cordova module has been found.",event:"deviceready",file:"index.html"}),!window.cordova)return;let t=await fetch("https://ga-experiment-library.s3-us-west-2.amazonaws.com/experiment-manifest.json").then(r=>r.blob()).catch(r=>(console.error("unable to fetch manifest",r),!1)),{createFile:e}=await Promise.resolve().then(()=>(Wu(),Nu));e("experiment-manifest.json",t)},!1),null}var Uu=V(()=>{});var qu={};It(qu,{hostDevices:()=>Ix});function Ix(t){let e=r=>{t.postMessage(Be({type:"ADD_DEVICE_RESPONSE"},r))};navigator.serviceWorker.addEventListener("message",async({data:{type:r,apiName:o,orderCode:s=""}})=>{if(r==="ADD_DEVICE")try{let[l]=await window.vstRequestDevice[o](s);if(l&&l.deviceId)e({payload:[{deviceId:l.deviceId,name:l.name,id:l.id}]});else throw new Error("No device selected")}catch(l){e({error:l})}})}var Gu=V(()=>{});var Ku={};It(Ku,{proxyDeviceCalls:()=>Mx});function Mx(t){window.vstRequestDevice=new Proxy({},{get:(e,r)=>(o="")=>new Promise((s,l)=>{t.postMessage({type:"ADD_DEVICE",apiName:r,orderCode:o});let u=({data:f})=>{f.type==="ADD_DEVICE_RESPONSE"&&(f.error?l(f.error):s(f.payload),navigator.serviceWorker.removeEventListener("message",u))};navigator.serviceWorker.addEventListener("message",u)})})}var Zu=V(()=>{});function Xu(t,e,r){let o=`${t}-${e}`;return r&&(o+="-manual"),o}var Ju=V(()=>{});var Qu={};It(Qu,{blockId:()=>Ax,experimentId:()=>ls,hostId:()=>Yu,searchParams:()=>ke,sessionId:()=>jx});var wn,as,ke,Sn,mo,Yu,ls,jx,Ax,ep=V(()=>{Ju();wn=null;"launchQueue"in window&&window.launchQueue.setConsumer(t=>{t.targetURL&&(wn=new URL(t.targetURL).searchParams)});as=()=>new URLSearchParams(window.location.hash.substring(1)),ke=new URLSearchParams(window.location.search);if(wn)for(let t of wn.keys())ke.set(t,wn.get(t));Sn=new URLSearchParams;ke.has("blockid")&&(Sn.set("blockid",ke.get("blockid")),ke.delete("blockid"));ke.has("activityid")&&(Sn.set("activityid",ke.get("activityid")),ke.delete("activityid"));Array.from(Sn).length&&window.history.replaceState(null,null,`${window.location.pathname}?${ke.toString()}#${[as().toString(),Sn.toString()].filter(Boolean).join("&")}`);mo=as();window.addEventListener("hashchange",()=>{mo=as()});Yu=()=>{try{return ke.get("host")??window.location.host}catch{return null}},ls=()=>{if(!ke.has("lessonid"))return null;let t=ke.get("lessonid");return ke.has("experimentid")&&(t+=`-${ke.get("experimentid")}`),Xu(Yu(),t,ke.has("manual"))},jx=()=>ls()&&ke.has("userid")&&ke.get("classAssignmentId")?`${ls()}-${ke.get("userid")}-${ke.get("classAssignmentId")}`:null,Ax=()=>mo.has("blockid")&&mo.has("activityid")?`${mo.get("activityid")}-${mo.get("blockid")}`:null});var op=Do((kn,vo)=>{(function(){"use strict";var t={function:!0,object:!0},e=t[typeof window]&&window||this,r=e,o=t[typeof kn]&&kn,s=t[typeof vo]&&vo&&!vo.nodeType&&vo,l=o&&s&&typeof global=="object"&&global;l&&(l.global===l||l.window===l||l.self===l)&&(e=l);var u=Math.pow(2,53)-1,f=/\bOpera/,v=this,S=Object.prototype,I=S.hasOwnProperty,y=S.toString;function j(m){return m=String(m),m.charAt(0).toUpperCase()+m.slice(1)}function $(m,M,N){var Y={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return M&&N&&/^Win/i.test(m)&&!/^Windows Phone /i.test(m)&&(Y=Y[/[\d.]+$/.exec(m)])&&(m="Windows "+Y),m=String(m),M&&N&&(m=m.replace(RegExp(M,"i"),N)),m=P(m.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),m}function A(m,M){var N=-1,Y=m?m.length:0;if(typeof Y=="number"&&Y>-1&&Y<=u)for(;++N<Y;)M(m[N],N,m);else U(m,M)}function P(m){return m=se(m),/^(?:webOS|i(?:OS|P))/.test(m)?m:j(m)}function U(m,M){for(var N in m)I.call(m,N)&&M(m[N],N,m)}function Z(m){return m==null?j(m):y.call(m).slice(8,-1)}function Q(m,M){var N=m!=null?typeof m[M]:"number";return!/^(?:boolean|number|string|undefined)$/.test(N)&&(N=="object"?!!m[M]:!0)}function ee(m){return String(m).replace(/([ -])(?!$)/g,"$1?")}function ne(m,M){var N=null;return A(m,function(Y,we){N=M(N,Y,we,m)}),N}function se(m){return String(m).replace(/^ +| +$/g,"")}function be(m){var M=e,N=m&&typeof m=="object"&&Z(m)!="String";N&&(M=m,m=null);var Y=M.navigator||{},we=Y.userAgent||"";m||(m=we);var _=N||v==r,ae=N?!!Y.likeChrome:/\bChrome\b/.test(m)&&!/internal|\n/i.test(y.toString()),te="Object",Ee=N?te:"ScriptBridgingProxyObject",qe=N?te:"Environment",st=N&&M.java?"JavaPackage":Z(M.java),Nt=N?te:"RuntimeObject",De=/\bJava/.test(st)&&M.java,le=De&&Z(M.environment)==qe,_e=De?"a":"\u03B1",Ge=De?"b":"\u03B2",Ke=M.document||{},x=M.operamini||M.opera,Re=f.test(Re=N&&x?x["[[Class]]"]:Z(x))?Re:x=null,c,Ae=m,R=[],Te=null,ge=m==we,E=ge&&x&&typeof x.version=="function"&&x.version(),et,B=Ne([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),b=lt(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),z=Ze([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),J=at({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),w=re(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function Ne(C){return ne(C,function(O,L){return O||RegExp("\\b"+(L.pattern||ee(L))+"\\b","i").exec(m)&&(L.label||L)})}function at(C){return ne(C,function(O,L,T){return O||(L[z]||L[/^[a-z]+(?: +[a-z]+\b)*/i.exec(z)]||RegExp("\\b"+ee(T)+"(?:\\b|\\w*\\d)","i").exec(m))&&T})}function lt(C){return ne(C,function(O,L){return O||RegExp("\\b"+(L.pattern||ee(L))+"\\b","i").exec(m)&&(L.label||L)})}function re(C){return ne(C,function(O,L){var T=L.pattern||ee(L);return!O&&(O=RegExp("\\b"+T+"(?:/[\\d.]+|[ \\w.]*)","i").exec(m))&&(O=$(O,T,L.label||L)),O})}function Ze(C){return ne(C,function(O,L){var T=L.pattern||ee(L);return!O&&(O=RegExp("\\b"+T+" *\\d+[.\\w_]*","i").exec(m)||RegExp("\\b"+T+" *\\w+-[\\w]*","i").exec(m)||RegExp("\\b"+T+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(m))&&((O=String(L.label&&!RegExp(T,"i").test(L.label)?L.label:O).split("/"))[1]&&!/[\d.]+/.test(O[0])&&(O[0]+=" "+O[1]),L=L.label||L,O=P(O[0].replace(RegExp(T,"i"),L).replace(RegExp("; *(?:"+L+"[_-])?","i")," ").replace(RegExp("("+L+")[-_.]?(\\w)","i"),"$1 $2"))),O})}function Oe(C){return ne(C,function(O,L){return O||(RegExp(L+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(m)||0)[1]||null})}function q(){return this.description||""}if(B&&(B=[B]),/\bAndroid\b/.test(w)&&!z&&(c=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(m))&&(z=se(c[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),J&&!z?z=Ze([J]):J&&z&&(z=z.replace(RegExp("^("+ee(J)+")[-_.\\s]","i"),J+" ").replace(RegExp("^("+ee(J)+")[-_.]?(\\w)","i"),J+" $2")),(c=/\bGoogle TV\b/.exec(z))&&(z=c[0]),/\bSimulator\b/i.test(m)&&(z=(z?z+" ":"")+"Simulator"),b=="Opera Mini"&&/\bOPiOS\b/.test(m)&&R.push("running in Turbo/Uncompressed mode"),b=="IE"&&/\blike iPhone OS\b/.test(m)?(c=be(m.replace(/like iPhone OS/,"")),J=c.manufacturer,z=c.product):/^iP/.test(z)?(b||(b="Safari"),w="iOS"+((c=/ OS ([\d_]+)/i.exec(m))?" "+c[1].replace(/_/g,"."):"")):b=="Konqueror"&&/^Linux\b/i.test(w)?w="Kubuntu":J&&J!="Google"&&(/Chrome/.test(b)&&!/\bMobile Safari\b/i.test(m)||/\bVita\b/.test(z))||/\bAndroid\b/.test(w)&&/^Chrome/.test(b)&&/\bVersion\//i.test(m)?(b="Android Browser",w=/\bAndroid\b/.test(w)?w:"Android"):b=="Silk"?(/\bMobi/i.test(m)||(w="Android",R.unshift("desktop mode")),/Accelerated *= *true/i.test(m)&&R.unshift("accelerated")):b=="UC Browser"&&/\bUCWEB\b/.test(m)?R.push("speed mode"):b=="PaleMoon"&&(c=/\bFirefox\/([\d.]+)\b/.exec(m))?R.push("identifying as Firefox "+c[1]):b=="Firefox"&&(c=/\b(Mobile|Tablet|TV)\b/i.exec(m))?(w||(w="Firefox OS"),z||(z=c[1])):!b||(c=!/\bMinefield\b/i.test(m)&&/\b(?:Firefox|Safari)\b/.exec(b))?(b&&!z&&/[\/,]|^[^(]+?\)/.test(m.slice(m.indexOf(c+"/")+8))&&(b=null),(c=z||J||w)&&(z||J||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w))&&(b=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w)?w:c)+" Browser")):b=="Electron"&&(c=(/\bChrome\/([\d.]+)\b/.exec(m)||0)[1])&&R.push("Chromium "+c),E||(E=Oe(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",ee(b),"(?:Firefox|Minefield|NetFront)"])),(c=B=="iCab"&&parseFloat(E)>3&&"WebKit"||/\bOpera\b/.test(b)&&(/\bOPR\b/.test(m)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(m)&&!/^(?:Trident|EdgeHTML)$/.test(B)&&"WebKit"||!B&&/\bMSIE\b/i.test(m)&&(w=="Mac OS"?"Tasman":"Trident")||B=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(b)&&"NetFront")&&(B=[c]),b=="IE"&&(c=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(m)||0)[1])?(b+=" Mobile",w="Windows Phone "+(/\+$/.test(c)?c:c+".x"),R.unshift("desktop mode")):/\bWPDesktop\b/i.test(m)?(b="IE Mobile",w="Windows Phone 8.x",R.unshift("desktop mode"),E||(E=(/\brv:([\d.]+)/.exec(m)||0)[1])):b!="IE"&&B=="Trident"&&(c=/\brv:([\d.]+)/.exec(m))&&(b&&R.push("identifying as "+b+(E?" "+E:"")),b="IE",E=c[1]),ge){if(Q(M,"global"))if(De&&(c=De.lang.System,Ae=c.getProperty("os.arch"),w=w||c.getProperty("os.name")+" "+c.getProperty("os.version")),le){try{E=M.require("ringo/engine").version.join("."),b="RingoJS"}catch(C){(c=M.system)&&c.global.system==M.system&&(b="Narwhal",w||(w=c[0].os||null))}b||(b="Rhino")}else typeof M.process=="object"&&!M.process.browser&&(c=M.process)&&(typeof c.versions=="object"&&(typeof c.versions.electron=="string"?(R.push("Node "+c.versions.node),b="Electron",E=c.versions.electron):typeof c.versions.nw=="string"&&(R.push("Chromium "+E,"Node "+c.versions.node),b="NW.js",E=c.versions.nw)),b||(b="Node.js",Ae=c.arch,w=c.platform,E=/[\d.]+/.exec(c.version),E=E?E[0]:null));else Z(c=M.runtime)==Ee?(b="Adobe AIR",w=c.flash.system.Capabilities.os):Z(c=M.phantom)==Nt?(b="PhantomJS",E=(c=c.version||null)&&c.major+"."+c.minor+"."+c.patch):typeof Ke.documentMode=="number"&&(c=/\bTrident\/(\d+)/i.exec(m))?(E=[E,Ke.documentMode],(c=+c[1]+4)!=E[1]&&(R.push("IE "+E[1]+" mode"),B&&(B[1]=""),E[1]=c),E=b=="IE"?String(E[1].toFixed(1)):E[0]):typeof Ke.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(b)&&(R.push("masking as "+b+" "+E),b="IE",E="11.0",B=["Trident"],w="Windows");w=w&&P(w)}if(E&&(c=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(E)||/(?:alpha|beta)(?: ?\d)?/i.exec(m+";"+(ge&&Y.appMinorVersion))||/\bMinefield\b/i.test(m)&&"a")&&(Te=/b/i.test(c)?"beta":"alpha",E=E.replace(RegExp(c+"\\+?$"),"")+(Te=="beta"?Ge:_e)+(/\d+\+?/.exec(c)||"")),b=="Fennec"||b=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(w))b="Firefox Mobile";else if(b=="Maxthon"&&E)E=E.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(z))z=="Xbox 360"&&(w=null),z=="Xbox 360"&&/\bIEMobile\b/.test(m)&&R.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(b)||b&&!z&&!/Browser|Mobi/.test(b))&&(w=="Windows CE"||/Mobi/i.test(m)))b+=" Mobile";else if(b=="IE"&&ge)try{M.external===null&&R.unshift("platform preview")}catch(C){R.unshift("embedded")}else(/\bBlackBerry\b/.test(z)||/\bBB10\b/.test(m))&&(c=(RegExp(z.replace(/ +/g," *")+"/([.\\d]+)","i").exec(m)||0)[1]||E)?(c=[c,/BB10/.test(m)],w=(c[1]?(z=null,J="BlackBerry"):"Device Software")+" "+c[0],E=null):this!=U&&z!="Wii"&&(ge&&x||/Opera/.test(b)&&/\b(?:MSIE|Firefox)\b/i.test(m)||b=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(w)||b=="IE"&&(w&&!/^Win/.test(w)&&E>5.5||/\bWindows XP\b/.test(w)&&E>8||E==8&&!/\bTrident\b/.test(m)))&&!f.test(c=be.call(U,m.replace(f,"")+";"))&&c.name&&(c="ing as "+c.name+((c=c.version)?" "+c:""),f.test(b)?(/\bIE\b/.test(c)&&w=="Mac OS"&&(w=null),c="identify"+c):(c="mask"+c,Re?b=P(Re.replace(/([a-z])([A-Z])/g,"$1 $2")):b="Opera",/\bIE\b/.test(c)&&(w=null),ge||(E=null)),B=["Presto"],R.push(c));(c=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(m)||0)[1])&&(c=[parseFloat(c.replace(/\.(\d)$/,".0$1")),c],b=="Safari"&&c[1].slice(-1)=="+"?(b="WebKit Nightly",Te="alpha",E=c[1].slice(0,-1)):(E==c[1]||E==(c[2]=(/\bSafari\/([\d.]+\+?)/i.exec(m)||0)[1]))&&(E=null),c[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(m)||0)[1],c[0]==537.36&&c[2]==537.36&&parseFloat(c[1])>=28&&B=="WebKit"&&(B=["Blink"]),!ge||!ae&&!c[1]?(B&&(B[1]="like Safari"),c=(c=c[0],c<400?1:c<500?2:c<526?3:c<533?4:c<534?"4+":c<535?5:c<537?6:c<538?7:c<601?8:c<602?9:c<604?10:c<606?11:c<608?12:"12")):(B&&(B[1]="like Chrome"),c=c[1]||(c=c[0],c<530?1:c<532?2:c<532.05?3:c<533?4:c<534.03?5:c<534.07?6:c<534.1?7:c<534.13?8:c<534.16?9:c<534.24?10:c<534.3?11:c<535.01?12:c<535.02?"13+":c<535.07?15:c<535.11?16:c<535.19?17:c<536.05?18:c<536.1?19:c<537.01?20:c<537.11?"21+":c<537.13?23:c<537.18?24:c<537.24?25:c<537.36?26:B!="Blink"?"27":"28")),B&&(B[1]+=" "+(c+=typeof c=="number"?".x":/[.+]/.test(c)?"":"+")),b=="Safari"&&(!E||parseInt(E)>45)?E=c:b=="Chrome"&&/\bHeadlessChrome/i.test(m)&&R.unshift("headless")),b=="Opera"&&(c=/\bzbov|zvav$/.exec(w))?(b+=" ",R.unshift("desktop mode"),c=="zvav"?(b+="Mini",E=null):b+="Mobile",w=w.replace(RegExp(" *"+c+"$"),"")):b=="Safari"&&/\bChrome\b/.exec(B&&B[1])?(R.unshift("desktop mode"),b="Chrome Mobile",E=null,/\bOS X\b/.test(w)?(J="Apple",w="iOS 4.3+"):w=null):/\bSRWare Iron\b/.test(b)&&!E&&(E=Oe("Chrome")),E&&E.indexOf(c=/[\d.]+$/.exec(w))==0&&m.indexOf("/"+c+"-")>-1&&(w=se(w.replace(c,""))),w&&w.indexOf(b)!=-1&&!RegExp(b+" OS").test(w)&&(w=w.replace(RegExp(" *"+ee(b)+" *"),"")),B&&!/\b(?:Avant|Nook)\b/.test(b)&&(/Browser|Lunascape|Maxthon/.test(b)||b!="Safari"&&/^iOS/.test(w)&&/\bSafari\b/.test(B[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(b)&&B[1])&&(c=B[B.length-1])&&R.push(c),R.length&&(R=["("+R.join("; ")+")"]),J&&z&&z.indexOf(J)<0&&R.push("on "+J),z&&R.push((/^on /.test(R[R.length-1])?"":"on ")+z),w&&(c=/ ([\d.+]+)$/.exec(w),et=c&&w.charAt(w.length-c[0].length-1)=="/",w={architecture:32,family:c&&!et?w.replace(c[0],""):w,version:c?c[1]:null,toString:function(){var C=this.version;return this.family+(C&&!et?" "+C:"")+(this.architecture==64?" 64-bit":"")}}),(c=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Ae))&&!/\bi686\b/i.test(Ae)?(w&&(w.architecture=64,w.family=w.family.replace(RegExp(" *"+c),"")),b&&(/\bWOW64\b/i.test(m)||ge&&/\w(?:86|32)$/.test(Y.cpuClass||Y.platform)&&!/\bWin64; x64\b/i.test(m))&&R.unshift("32-bit")):w&&/^OS X/.test(w.family)&&b=="Chrome"&&parseFloat(E)>=39&&(w.architecture=64),m||(m=null);var W={};return W.description=m,W.layout=B&&B[0],W.manufacturer=J,W.name=b,W.prerelease=Te,W.product=z,W.ua=m,W.version=b&&E,W.os=w||{architecture:null,family:null,version:null,toString:function(){return"null"}},W.parse=be,W.toString=q,W.version&&R.unshift(E),W.name&&R.unshift(b),w&&b&&!(w==String(w).split(" ")[0]&&(w==b.split(" ")[0]||z))&&R.push(z?"("+w+")":"on "+w),R.length&&(W.description=R.join(" ")),W}var ve=be();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e.platform=ve,define(function(){return ve})):o&&s?U(ve,function(m,M){o[M]=m}):e.platform=ve}).call(kn)});var fs,ap,lp=V(()=>{fs={"session-ready-for-data-collection":()=>"","page-attributes":()=>"","set-experiment-name":({name:t})=>`name=${t}`,"sparkline-for-column":({baseColId:t,traceColId:e,pixelWidth:r})=>`baseColId=${t}, traceColId=${e}, pixelWidth=${r}`,"data-share-source":({sourceId:t})=>`sourceId=${t}`,"create-new-dataset":[t=>{let{name:e,type:r}=t;return`name=${e}, type=${r}`},t=>{let{dataSetId:e,foreignId:r}=t;return`dataSetId=${e}, foreignId=${r}`}],"create-new-column":[t=>{let{dataSetId:e,name:r,units:o}=t;return`dataSetId=${e}, name=${r}, units=${o}`},t=>{let{columnId:e,foreignId:r}=t;return`columnId=${e}, foreignId=${r}`}],"create-user-manual-column":t=>{let{name:e,unit:r,dataType:o}=t;return`name=${e}, unit=${r}, dataType=${o}`},"create-user-calc-column":t=>{let{name:e,unit:r,calcEquation:o}=t;return`name=${e}, unit=${r}, calcEquation=${o}`},"remove-column-group":({groupId:t})=>`groupId=${t}`,"update-dataset-properties":t=>{let{id:e}=t;return`id=${e}`},"update-column-group":t=>{let{groupId:e,name:r,units:o}=t;return`groupId=${e}, name=${r}, units=${o}`},"update-column-values":({id:t,values:e,trim:r})=>{let o=e.map(s=>`${s}`).join("\\n");return`id=${t}, trim=${r}\\n${o}`},"change-column-data-type":({id:t,type:e})=>`id=${t}, type=${e}`,"add-event-data":({id:t,value:e,readings:r})=>{let o=r.map(s=>`${s}`).join("\\n");return`id=${t}, value=${e}]
${o}`},"change-column-unit":({id:t,unit:e})=>`id=${t}, unit=${e}`,"change-column-properties":({id:t,color:e,symbol:r})=>`id=${t}, color=${e}, symbol=${r}`,"add-graph":[()=>"",({graphId:t})=>`graphId=${t}`],"set-meter-visibility":({visible:t})=>`visible=${t}`,"set-table-visibility":({visible:t})=>`visible=${t}`,"change-graph":({graphId:t,type:e})=>`graphId=${t}, type=${e} ...`,"add-graph-traces":({graphId:t,traces:e})=>{let r=e.map(o=>`baseColumnId=${o.baseColumnId}, traceColumnId=${o.traceColumnId}, isRightAxisTrace=${o.isRightAxisTrace}`).join("\\n");return`graphId=${t}\\n${r}`},"remove-graph-traces":({graphId:t,traces:e})=>{let r=e.map(o=>`baseColumnId=${o.baseColumnId}, traceColumnId=${o.traceColumnId}, isRightAxisTrace=${o.isRightAxisTrace}`).join("\\n");return`graphId=${t}\\n${r}`},"add-graph-curve-fit":({graphId:t,fitId:e,fitType:r,baseColumnId:o,traceColumnId:s})=>`graphId=${t}, fitId=${e}, fitType=${r}, baseColumnId=${o}, traceColumnId=${s}`,"remove-graph-curve-fit":({fitId:t})=>`fitId=${t}`,"add-graph-integral":({graphId:t,integralId:e,baseColumnId:r,traceColumnId:o})=>`graphId=${t}, integralId=${e}, baseColumnId=${r}, traceColumnId=${o}`,"remove-graph-integral":({integralId:t})=>`integralId=${t}`,"add-or-change-graph-peak-integral":t=>{let{graphId:e,integralId:r,baseColumnId:o,traceColumnId:s}=t;return`graphId=${e}, integralId=${r}, baseColumnId=${o}, traceColumnId=${s}`},"remove-graph-peak-integral":({integralId:t})=>`integralId=${t}`,"add-graph-stats":t=>{let{graphId:e,statsId:r,baseColumnId:o,traceColumnId:s}=t;return`graphId=${e}, statsId=${r}, baseColumnId=${o}, traceColumnId=${s}`},"remove-graph-stats":({statsId:t})=>`statsId=${t}`,"add-graph-annotation":t=>{let{parentId:e,annotationId:r}=t;return`parentId=${e}, annotationId=${r}`},"remove-graph-annotation":({annotationId:t})=>`annotationId=${t}`,"create-data-mark":t=>{let{dataSetId:e,duringCollection:r,traceColumnIds:o,text:s,rowIndex:l}=t;return`dataSetId=${e}, duringCollection=${r}, traceColumnIds=${o.join(" ")}, text=${s}, rowIndex=${l}`},"update-data-mark":t=>{let{dataSetId:e,duringCollection:r,traceColumnIds:o,text:s,rowIndex:l}=t;return`dataSetId=${e}, duringCollection=${r}, traceColumnIds=${o.join(" ")}, text=${s}, rowIndex=${l}`},"delete-data-mark":({dataMarkId:t})=>`dataMarkId=${t}`,"remove-dataset":({datasetId:t})=>`datasetId=${t}`,"check-recovery-file":()=>"","document-age":()=>"",export:({name:t,format:e,filepath:r,decimal:o,age:s})=>`name=${t}, format=${e}, filepath=${r}, decimal=${o}, age=${s}`,import:({path:t,format:e,content:r})=>`path=${t}, format=${e}, content=<${r.length} bytes>`,"document-meta-data":({path:t,format:e,content:r})=>`path=${t}, format=${e}, content=<${r.length} bytes>`,"set-session-subtype":({subtype:t})=>`subtype=${t}`,"set-notes-state":({text:t,visible:e})=>`text="${t}", visible=${e}`,"get-notes-state":()=>"","set-custom-curve-fit":({name:t,expression:e})=>`name=${t}, expression=${e}`,"get-custom-curve-fits":()=>"","get-calc-column-functions":()=>"","add-aux-graph":({parentGraphId:t,auxGraphType:e})=>`parentGraphId=${t}, auxGraphType=${e}`,"update-aux-graph":({auxGraphId:t})=>`auxGraphId=${t}`,"delete-aux-graph":({auxGraphId:t})=>`auxGraphId=${t}`},ap={"dw:data-set-added":t=>`id=${t.id}, name=${t.name}, type=${t.type}`,"dw:data-set-ready":t=>`id=${t.id}`,"dw:data-set-removed":t=>`id=${t.id}`,"dw:data-column-added":t=>`id=${t.id}, groupId=${t.groupId}, dataSetId=${t.dataSetId}, type=${t.type}`,"dw:data-column-removed":t=>`id=${t.id}`,"dw:data-column-updated":t=>`id=${t.id}`,"dw:data-set-updated":t=>`id=${t.id}', name=${t.name??""}`,"dw:unit-change-finished":t=>`columnId=${t.columnId}`,"dw:data-set-row-added":t=>t.map(r=>{let{dataSetId:o}=r,{rowIndex:s}=r,{count:l}=r;return`dataSetId=${o}, rowIndex=${s}, count=${l}`}).join("\\n"),"dw:data-column-values-updated":t=>t.map(r=>{let{columnId:o,rows:s,values:l,wholeColumnFlag:u}=r,f=[];for(let v=0;v<Math.min(s.length,l.length);v++)f.push(`row=${s[v]}, value=${l[v]}`);return`columnId=${o}, wholeColumn=${u}\\n${f.join("\\n")}`}).join("\\n"),"dw:data-column-live-readout-changed":t=>{let{columnId:e,value:r}=t;return`columnId=${e}, value=${r}`},"dw:data-graph-updated":t=>`index=${t.index}, type=${t.type}`,"dw:data-annotation-updated":t=>`id=${t.annotationId}`,"dw:data-video-updated":()=>"","dw:data-group-added":t=>{let{id:e,name:r,units:o,type:s}=t;return`id=${e}, name=${r}, units=${o} type=${s}`},"dw:data-group-removed":t=>`id=${t.id}`,"dw:data-group-properties-changed":t=>`id=${t.id} ...`,"dw:session-started":()=>"","dw:document-age-updated":()=>"","gc-collection-started":()=>"","collection-ended":()=>"","complete-collection":()=>"","trigger-reached":()=>"","prestore-reached":()=>"","replay-engine-update":()=>""}});var vs,cp,dp=V(()=>{vs={"start-bluetooth-discovery":()=>"","stop-bluetooth-discovery":()=>"","start-labquest-stream-discovery":()=>"","stop-labquest-stream-discovery":()=>"","connect-bluetooth-device":({deviceId:t})=>`deviceId=${t}`,"disconnect-device":({deviceId:t})=>`deviceId=${t}`,"enable-device-channel":({deviceId:t,channelId:e,enable:r})=>`deviceId=${t}, channelId=${e}, enable=${r}`,"identify-device":({deviceId:t})=>`deviceId=${t}`,"get-gdxdevice-map":({deviceId:t})=>`deviceId=${t}`,"write-device-attributes":({deviceID:t,attributes:e})=>{let r=e.map(o=>`id=${o.attribID}, value=${o.value}`).join("\\n");return`deviceID=${t}\\n${r}`},"start-calibration-process":({deviceId:t,processId:e})=>`deviceId=${t}, processId=${e}`,"start-calibration-step":({deviceId:t,processId:e,stepId:r,inputValue:o})=>`deviceId=${t}, processId=${e}, stepId=${r}, inputValue=${o}`,"update-calibration-step":({deviceId:t,processId:e,stepId:r,inputValue:o})=>`deviceId=${t}, processId=${e}, stepId=${r}, inputValue=${o}`,"stop-calibration-step":({deviceId:t,processId:e,stepId:r,keep:o})=>`deviceId=${t}, processId=${e}, stepId=${r}, keep=${o}`,"stop-calibration-process":({deviceId:t,processId:e,keep:r})=>`deviceId=${t}, processId=${e}, keep=${r}`,"reset-factory-calibration":({deviceId:t})=>`deviceId=${t}`,"using-factory-calibration":({deviceId:t})=>`deviceId=${t}`},cp={"devmgr:bluetooth-available":({available:t})=>`available=${t}`,"devmgr:bluetooth-device-discovered":t=>{let{id:e,name:r,type:o}=t;return`id=${e}, name=${r}, type=${o} ...`},"devmgr:bluetooth-device-removed":({id:t})=>`id=${t}`,"devmgr:bluetooth-device-updated":t=>{let{id:e,name:r,type:o}=t;return`id=${e}, name=${r}, type=${o} ...`},"devmgr:usb-device-added":t=>{let{id:e,name:r,type:o}=t;return`id=${e}, name=${r}, type=${o} ...`},"devmgr:usb-device-removed":({id:t})=>`id=${t}`,"devmgr:usb-device-updated":t=>{let{id:e,name:r,type:o}=t;return`id=${e}, name=${r}, type=${o} ...`},"devmgr:calibration-step-result":({id:t,result:e})=>{let{value:r,success:o}=e;return`id=${t}, value=${r}, success=${o}`},"devmgr:device-attributes-changed":({deviceId:t,deviceAttributes:e})=>{let{id:r,type:o,value:s,description:l}=e;return`deviceId=${t}, attrib: id=${r}, type=${o}, value=${s}, description="${l}" ...`}}});var pp={};It(pp,{RPCLogger:()=>up});var Dx,Rx,Bx,Fx,Hx,up,mp=V(()=>{lp();dp();Dx=t=>(Object.keys(t).forEach(e=>{let r=t[e];if(Array.isArray(r)){let[o]=r;t[e]=o}}),t),Rx=t=>{let e={};return Object.keys(t).forEach(r=>{let o=t[r];if(Array.isArray(o)){let[,s]=o;e[r]=s}}),e},Bx=Dx(Be(Be({},fs),vs)),Fx=Rx(Be(Be({},fs),vs)),Hx=Be(Be({},ap),cp),up=class{constructor(){this.emptyHandler=()=>"",this.startTime=Date.now(),this.msgLog=[]}get msgTimestamp(){return Date.now()-this.startTime}logRequest(e,r,o){let s=Bx[o.method]??this.emptyHandler;this.msgLog.push(`${e}->${r}: [${this.msgTimestamp}] Request[${o.id}]: **${o.method}** ${s(o.params)}`)}logErrorResponse(e,r,o,s){this.msgLog.push(`${e}-#red>${r}: [${this.msgTimestamp}] Error[${s.id}]: **${o}**: ${s.error.message}`)}logResponse(e,r,o,s){if(s.error){this.logErrorResponse(e,r,o,s);return}let l=Fx[o]??this.emptyHandler;this.msgLog.push(`${e}->${r}: [${this.msgTimestamp}] Response[${s.id}]: **${o}** ${l(s.result)}`)}logNotification(e,r,o){let s=Hx[o.method]??this.emptyHandler;this.msgLog.push(`${e}--#darkgrey>${r}: [${this.msgTimestamp}] Notification: **${o.method}** ${s(o.params)}`)}getLogString(){return this.msgLog.join(`
`)}clearLog(){this.msgLog.length=0}}});G();oo();yi();var wi=t=>new CustomEvent("close-dialog",{bubbles:!0,composed:!0,detail:t});rt();G();Tt();G();var Xl=(t,e)=>t==="dark"?h`
      :host(.dark:not(.light)) {
        ${e}
      }
    `:h``;var Jl=h`
  :host,
  html {
    /* brand colors */
    --vst-color-brand-400: hsl(180, 100%, 14%);
    --vst-color-brand-300: hsl(182, 100%, 23%);
    --vst-color-brand-200: hsl(184, 42%, 58%);
    --vst-color-brand-100: hsl(180deg 60% 92%);

    --vst-color-brand-dark: var(--vst-color-brand-400);
    --vst-color-brand: var(--vst-color-brand-300);
    --vst-color-brand-bg: var(--vst-color-brand-100);

    /* rebrand secondary colors - not currently in use, but here for reference */
    --vst-color-orange: hsl(19, 87%, 54%);
    --vst-color-gold: hsl(40, 97%, 59%);
    --vst-color-peach: hsl(26, 96%, 82%);
    --vst-color-chartreuse: hsl(73, 100%, 67%);

    --vst-color-secondary-dark: var(--vst-color-orange);
    --vst-color-secondary: var(--vst-color-gold);
    --vst-color-secondary-bg: var(--vst-color-peach);

    /* semantic colors */
    --vst-color-success-400: hsl(142deg 100% 20%);
    --vst-color-success-300: hsl(135deg 96% 28%);
    --vst-color-success-200: hsl(138deg 90% 35%);
    --vst-color-success-100: hsl(127deg 46% 93%);

    --vst-color-success-dark: var(--vst-color-success-400);
    --vst-color-success: var(--vst-color-success-300);
    --vst-color-success-ui: var(--vst-color-success-200);
    --vst-color-success-bg: var(--vst-color-success-100);

    --vst-color-warning-400: hsl(20deg 98% 36.9%);
    --vst-color-warning-300: hsl(19deg 87.1% 53.6%);
    --vst-color-warning-200: hsl(20deg 92% 64%);
    --vst-color-warning-100: hsl(32deg 100% 96.5%);

    --vst-color-warning: var(--vst-color-warning-300);
    --vst-color-warning-ui: var(--vst-color-warning-200);
    --vst-color-warning-bg: var(--vst-color-warning-100);

    --vst-color-info-300: hsl(219deg 86% 38%);
    --vst-color-info-200: hsl(214deg 94% 55%);
    --vst-color-info-100: hsl(211deg 60% 91%);

    --vst-color-info: var(--vst-color-info-300);
    --vst-color-info-ui: var(--vst-color-info-200);
    --vst-color-info-bg: var(--vst-color-info-100);

    --vst-color-important: hsl(266, 52%, 48%);
    --vst-color-important-bg: hsl(265, 49%, 89%);

    --vst-color-danger-400: hsl(0deg 98% 34%);
    --vst-color-danger-300: hsl(0deg 78% 47%);
    --vst-color-danger-200: hsl(0deg 89% 56%);
    --vst-color-danger-100: hsl(0deg 59% 90%);

    --vst-color-danger-dark: var(--vst-color-danger-400);
    --vst-color-danger: var(--vst-color-danger-300);
    --vst-color-danger-ui: var(--vst-color-danger-200);
    --vst-color-danger-bg: var(--vst-color-danger-100);
    --vst-color-danger-fg: var(--vst-color-danger-400);

    /* graph colors */
    --vst-color-graph-red: hsl(356, 70%, 49%);
    --vst-color-graph-baby-blue: hsl(206, 58%, 51%);
    --vst-color-graph-vomit: hsl(56, 72%, 42%);
    --vst-color-graph-blue: hsl(230, 54%, 43%);
    --vst-color-graph-pink: hsl(335, 69%, 63%);
    --vst-color-graph-purple: hsl(291, 38%, 28%);

    /* dark & light mode colors */
    --vst-color-dark-300: hsl(200deg 6% 10%);
    --vst-color-dark-200: hsl(200deg 4% 16%);
    --vst-color-dark-100: hsl(195deg 3% 25%);
    --vst-color-neutral: hsl(197deg 3% 46%);
    --vst-color-light-300: hsl(200deg 4% 69%);
    --vst-color-light-200: hsl(204deg 9% 89%);
    --vst-color-light-100: hsl(210deg 11% 96%);
    --vst-color-bg-dark: hsl(200deg, 10%, 7%);
    --vst-color-bg-light: #fefefe;

    /* foreground & background colors */
    --vst-color-fg-primary: var(--vst-color-dark-300);
    --vst-color-fg-secondary: var(--vst-color-dark-200);
    --vst-color-fg-tertiary: var(--vst-color-dark-100);
    --vst-color-bg-primary: var(--vst-color-light-300);
    --vst-color-bg-secondary: var(--vst-color-light-200);
    --vst-color-bg-tertiary: var(--vst-color-light-100);
    --vst-color-bg: var(--vst-color-bg-light);

    /* Elements */
    --vst-color-btn: var(--vst-color-fg-primary);
    --vst-color-btn-bg: var(--vst-color-bg);
    --vst-color-btn-bg-hover: var(--vst-color-bg);
    --vst-color-btn-bg-active: var(--vst-color-bg-tertiary);
    --vst-color-btn-border: var(--vst-color-neutral);
    --vst-color-btn-text-bg-hover: var(--vst-color-bg-tertiary);
    --vst-color-btn-danger: var(--vst-color-danger-400);
    --vst-color-btn-danger-hover: var(--vst-color-danger-400);
    --vst-color-btn-danger-bg-hover: var(--vst-color-danger-100);
    --vst-color-toolbar-bg: var(--vst-color-bg-secondary);
    --vst-color-btn-toolbar-bg: var(--vst-color-bg-secondary);
    --vst-color-btn-toolbar-bg-hover: var(--vst-color-bg);
    --vst-color-media-btn-bg-hover: var(--vst-color-bg-tertiary);
    --vst-color-icon-hover: var(--vst-color-bg-tertiary);
    --vst-color-btn-graph-bg: #fff;
    --vst-color-btn-graph-border: var(--vst-color-fg-tertiary);
    --vst-color-btn-graph-bg-hover: #fff;
    --vst-color-btn-graph-border-hover: var(--vst-color-fg-secondary);
    --vst-color-examine-handle-bg: var(--vst-color-bg-secondary);
    --vst-color-prediction-toolbar-bg: var(--vst-color-bg);
    --vst-color-sensor-bg: var(--vst-color-bg);
    --vst-color-proximity-connect-bg: var(--vst-color-warning-bg);
    --vst-color-proximity-connect-text: var(--vst-color-warning);
    --vst-color-connect-pane-bg: var(--vst-color-warning-bg);
    --vst-color-connect-pane-text: var(--vst-color-warning);
    --vst-color-inner-popover-bg: var(--vst-color-bg);
    --vst-grid-selected-background-color: var(--vst-color-info-bg);
    --vst-grid-selected-border-color: var(--vst-color-info);
    --vst-grid-body-background-color: var(--vst-color-bg);
    --vst-grid-border-color: var(--vst-color-bg-primary);
    --vst-shadow-btn-hover: var(--vst-shadow-m);
    --vst-color-sample-video-bg: var(--vst-color-bg);
    --vst-color-notes-bg: var(--vst-color-bg);
    --vst-opacity-disabled: 0.45;
    --vst-color-predictions-overlay-bg: rgba(255, 255, 255, 0.65);
    --vst-color-popover-border: transparent;
    --vst-color-text-brand: var(--vst-color-brand);
    --vst-color-text-brand-hover: var(--vst-color-brand-dark);
    --vst-color-text-success: var(--vst-color-success);
    --vst-color-text-success-hover: var(--vst-color-success-dark);
    --vst-color-text-info: var(--vst-color-info-ui);
    --vst-color-text-info-hover: var(--vst-color-info);
    --vst-color-text-warning: var(--vst-color-warning);
    --vst-color-text-warning-hover: var(--vst-color-warning);
    --vst-color-text-important: var(--vst-color-important);
    --vst-color-text-important-hover: var(--vst-color-important-dark);
    --vst-color-text-danger: var(--vst-color-danger);
    --vst-color-text-danger-hover: var(--vst-color-danger-dark);
    --vst-color-tag-brand-bg: var(--vst-color-brand-bg);
    --vst-color-tag-brand-border: var(--vst-color-brand-dark);
    --vst-color-tag-brand: var(--vst-color-brand-dark);
    --vst-color-tag-success-bg: var(--vst-color-success-bg);
    --vst-color-tag-success-border: var(--vst-color-success-dark);
    --vst-color-tag-success: var(--vst-color-success-dark);
    --vst-color-tag-info-bg: var(--vst-color-info-bg);
    --vst-color-tag-info-border: var(--vst-color-info);
    --vst-color-tag-info: var(--vst-color-info);
    --vst-color-tag-warning-bg: var(--vst-color-warning-bg);
    --vst-color-tag-warning-border: var(--vst-color-warning);
    --vst-color-tag-warning: var(--vst-color-warning);
    --vst-color-tag-important-bg: var(--vst-color-important-bg);
    --vst-color-tag-important-border: var(--vst-color-important);
    --vst-color-tag-important: var(--vst-color-important);
    --vst-color-tag-danger-bg: var(--vst-color-danger-bg);
    --vst-color-tag-danger-border: var(--vst-color-danger-dark);
    --vst-color-tag-danger: var(--vst-color-danger-dark);
    --vst-color-divider-thumb-bg: var(--vst-color-bg-tertiary);
    --vst-color-divider-thumb-border: var(--vst-color-bg-primary);
    --vst-color-divider-thumb-bg-active: var(--vst-color-fg-secondary);
    --vst-color-logo: #5a5b5d;
    --vst-color-input-bg: var(--vst-color-bg);
    --vst-color-bg-graph: var(--vst-color-bg);
    --vst-color-calibration-bg: var(--vst-color-success-bg);
    --vst-color-calibration-border: var(--vst-color-success-dark);
    --vst-color-calibration-rsr-bg: rgba(255, 255, 255, 0.7);
    --vst-color-calibration-rsr-border: transparent;
    --vst-color-required-device-disconnected: hsl(47deg 93% 94%);

    /* Font Family
    https://css-tricks.com/snippets/css/system-font-stack/ */
    --vst-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
      Cantarell, 'Helvetica Neue', sans-serif;
    --vst-font-family-mono: Consolas, Monaco, monospace;

    /* Font Size */
    /* Clamp prevents font sizes from getting too big or too small when a user changes their default font sizes */
    /* Safari 12 fallback, TODO: convert to clamp when we drop Safari 12 support */
    --vst-font-size-2xs: min(max(6px, 0.5rem), 12px);
    --vst-font-size-xs: min(max(8px, 0.75rem), 18px);
    --vst-font-size-s: min(max(10px, 0.875rem), 22px);
    --vst-font-size-m: min(max(12px, 1rem), 24px);
    --vst-font-size-l: min(max(20px, 1.5rem), 36px);
    --vst-font-size-xl: min(max(24px, 2rem), 48px);
    --vst-font-size-2xl: min(max(32px, 2.5rem), 72px);
    --vst-font-size-3xl: min(max(48px, 4rem), 96px);

    /* Line Height */
    --vst-line-height-s: 1.3;
    --vst-line-height-m: 1.5;

    /* Spacing */
    /* Use px for spacing to differentiate zoom from default font size change and keep ui from getting too big or too small at different font sizes */
    --vst-space-3xs: 2px;
    --vst-space-2xs: 4px;
    --vst-space-xs: 8px;
    --vst-space-s: 12px;
    --vst-space-m: 16px;
    --vst-space-l: 24px;
    --vst-space-xl: 32px;
    --vst-space-2xl: 48px;
    --vst-space-3xl: 64px;

    /* Sizing */
    /* Safari 12 fallback TODO: convert to clamp when we drop Safari 12 support */
    --vst-toolbar-height: min(max(32px, 3rem), 54px);
    --vst-dialog-header-height: min(max(28px, 2.75rem), 48px);
    --vst-required-device-border-size: 5px;

    --vst-icon-size-2xs: min(max(8px, 0.75rem), 16px);
    --vst-icon-size-xs: min(max(14px, 1rem), 20px);
    --vst-icon-size-s: min(max(16px, 1.25rem), 24px);
    --vst-icon-size-m: min(max(20px, 1.5rem), 28px);
    --vst-icon-size-l: min(max(28px, 2rem), 36px);

    /* Transition */
    --vst-transition-easing: cubic-bezier(0.4, 0, 0.2, 1);
    --vst-transition-speed-fast: 0.1s;
    --vst-transition-speed: 0.3s;
    --vst-transition-speed-slow: 0.5s;
    --vst-transition-fast: all var(--vst-transition-speed-fast) var(--vst-transition-easing);
    --vst-transition: all var(--vst-transition-speed) var(--vst-transition-easing);
    --vst-transition-slow: all var(--vst-transition-speed-slow) var(--vst-transition-easing);

    /* Animations */
    --startup-animation-duration: 0.4s;
    --startup-animation-timing-function: cubic-bezier(0.21, 0.1, 0.11, 0.95);
    --startup-animation-base-delay: 0.3s;
    --startup-animation-secondary-delay: calc(
      var(--startup-animation-base-delay) + var(--startup-animation-duration)
    );

    /* Border Radius */
    --vst-radius: 4px;
    --vst-radius-pill: 9999px;
    --vst-radius-circle: 50%;

    /* Shadow */
    --vst-shadow-xs: 0px 1px 1px rgba(0, 0, 0, 0.1);
    --vst-shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    --vst-shadow-m: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --vst-shadow-l: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    --vst-shadow-xl: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    /* Z-Index
(https://philipwalton.com/articles/what-no-one-told-you-about-z-index/) */
    --vst-z-graph-tools-btn: 149;
    --vst-z-toolbar: 100;
    --vst-z-selection: 125;
    --vst-z-annotation: 150;
    --vst-z-infobox: 175;
    --vst-z-graph-legend: 180;
    --vst-z-minigraph: 185;
    --vst-z-popover: 200;
    --vst-z-dialog: 300;
    --vst-z-soft-alert: 400;

    /* Breakpoints -  Used by JS to check what screen size we are */
    --vst-screen-size: xs;

    /* from globals - deprecated */
    --gutter: 0.5625rem;
    --transition-easing: cubic-bezier(0.4, 0, 0.2, 1);

    --transition-default-speed: 0.4s;
    --transition-fastest-speed: 0.125s;
    --transition-faster-speed: 0.25s;
    --transition-slower-speed: 0.6s;
    --transition-default: all var(--transition-default-speed) var(--transition-easing);
    --transition-faster: all var(--transition-faster-speed) var(--transition-easing);
    --transition-slower: all var(--transition-slower-speed) var(--transition-easing);

    --box-shadow-default-rotated: -1px 0 1px rgba(0, 0, 0, 0.1);
    --box-shadow-inset: inset 0 0 1px 1px rgba(0, 0, 0, 0.15);
    --box-shadow-inset-darker: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  ${Xl("dark",h`
      --vst-color-success-400: hsl(142deg 100% 20%);
      --vst-color-success-300: hsl(135deg 96% 28%);
      --vst-color-success-200: hsl(138deg 90% 35%);
      --vst-color-success-100: hsl(127deg 46% 93%);
      --vst-color-success-bg: var(--vst-color-success-400);

      --vst-color-warning-300: hsl(20, 95%, 68%);
      --vst-color-warning-200: hsl(21, 100%, 77%);
      --vst-color-warning-100: hsl(22, 100%, 86%);

      --vst-color-warning-bg: transparent;

      --vst-color-info-300: #1c3461;
      --vst-color-info-200: #1d4d8c;
      --vst-color-info-100: #b2d8f7;

      /* Danger */
      --vst-color-danger-400: #570f0f;
      --vst-color-danger-300: #a1201b;
      --vst-color-danger-200: #ff4e45;
      --vst-color-danger-100: #fcb6b1;

      --vst-color-fg-primary: var(--vst-color-light-100);
      --vst-color-fg-secondary: var(--vst-color-light-200);
      --vst-color-fg-tertiary: var(--vst-color-light-300);

      --vst-color-bg-primary: var(--vst-color-dark-100);
      --vst-color-bg-secondary: var(--vst-color-dark-200);
      --vst-color-bg-tertiary: var(--vst-color-dark-300);

      --vst-color-bg: var(--vst-color-bg-dark);

      /* Elements */
      --vst-color-btn-text-bg-hover: var(--vst-color-bg-secondary);
      --vst-color-btn-danger: var(--vst-color-danger-300);
      --vst-color-btn-danger-hover: var(--vst-color-fg-primary);
      --vst-color-btn-danger-bg-hover: var(--vst-color-danger-300);
      --vst-color-toolbar-bg: var(--vst-color-bg-secondary);
      --vst-color-btn-toolbar-bg: var(--vst-color-bg-secondary);
      --vst-color-btn-toolbar-bg-hover: var(--vst-color-bg-primary);
      --vst-color-media-btn-bg-hover: var(--vst-color-bg-primary);
      --vst-color-icon-hover: var(--vst-color-bg-secondary);
      --vst-color-btn-graph-bg: var(--vst-color-bg-secondary);
      --vst-color-btn-graph-border: var(--vst-color-neutral);
      --vst-color-btn-graph-bg-hover: var(--vst-color-bg-primary);
      --vst-color-btn-graph-border-hover: var(--vst-color-bg-primary);
      --vst-color-examine-handle-bg: var(--vst-color-bg-primary);
      --vst-color-prediction-toolbar-bg: var(--vst-color-bg-tertiary);
      --vst-color-sensor-bg: var(--vst-color-bg-primary);
      --vst-color-proximity-connect-bg: transparent;
      --vst-color-proximity-connect-text: var(--vst-color-warning-100);
      --vst-color-connect-pane-bg: transparent;
      --vst-color-connect-pane-text: var(--vst-color-warning-100);
      --vst-color-inner-popover-bg: var(--vst-color-bg-tertiary);
      --vst-grid-selected-background-color: var(--vst-color-bg-primary);
      --vst-grid-selected-border-color: var(--vst-color-neutral);
      --vst-grid-body-background-color: var(--vst-color-bg);
      --vst-grid-border-color: var(--vst-color-neutral);
      --vst-color-sample-video-bg: var(--vst-color-bg-tertiary);
      --vst-color-notes-bg: var(--vst-color-bg-tertiary);
      --vst-color-btn: var(--vst-color-fg-primary);
      --vst-color-btn-bg: var(--vst-color-bg-primary);
      --vst-color-btn-bg-hover: var(--vst-color-bg-secondary);
      --vst-color-btn-bg-active: var(--vst-color-bg-tertiary);
      --vst-color-btn-border: var(--vst-color-neutral);
      --vst-shadow-btn-hover: 0;
      --vst-opacity-disabled: 0.25;
      --vst-color-predictions-overlay-bg: rgba(0, 0, 0, 0.45);
      --vst-color-popover-border: var(--vst-color-neutral);
      --vst-color-text-brand: var(--vst-color-fg-primary);
      --vst-color-text-brand-hover: var(--vst-color-fg-primary);
      --vst-color-text-success: var(--vst-color-success);
      --vst-color-text-success-hover: var(--vst-color-success-dark);
      --vst-color-text-info: var(--vst-color-info-ui);
      --vst-color-text-info-hover: var(--vst-color-info);
      --vst-color-text-warning: var(--vst-color-warning);
      --vst-color-text-warning-hover: var(--vst-color-warning);
      --vst-color-text-important: var(--vst-color-important);
      --vst-color-text-important-hover: var(--vst-color-important-dark);
      --vst-color-text-danger: var(--vst-color-danger-200);
      --vst-color-text-danger-hover: var(--vst-color-danger-100);
      --vst-color-bg-brand: var(--vst-color-brand-bg);
      --vst-color-bg-success: var(--vst-color-success-bg);
      --vst-color-bg-warning: var(--vst-color-warning-bg);
      --vst-color-bg-important: var(--vst-color-important-bg);
      --vst-color-bg-danger: var(--vst-color-danger-bg);
      --vst-color-tag-brand-bg: var(--vst-color-brand);
      --vst-color-tag-brand-border: var(--vst-color-brand);
      --vst-color-tag-brand: var(--vst-color-fg-primary);
      --vst-color-tag-success-bg: var(--vst-color-success);
      --vst-color-tag-success-border: var(--vst-color-success);
      --vst-color-tag-success: var(--vst-color-fg-primary);
      --vst-color-tag-info-bg: var(--vst-color-info);
      --vst-color-tag-info-border: var(--vst-color-info);
      --vst-color-tag-info: var(--vst-color-fg-primary);
      --vst-color-tag-warning-bg: var(--vst-color-warning);
      --vst-color-tag-warning-border: var(--vst-color-warning);
      --vst-color-tag-warning: var(--vst-color-fg-primary);
      --vst-color-tag-important-bg: var(--vst-color-important);
      --vst-color-tag-important-border: var(--vst-color-important);
      --vst-color-tag-important: var(--vst-color-fg-primary);
      --vst-color-tag-danger-bg: var(--vst-color-danger);
      --vst-color-tag-danger-border: var(--vst-color-danger);
      --vst-color-tag-danger: var(--vst-color-fg-primary);
      --vst-color-divider-thumb-bg: var(--vst-color-fg-secondary);
      --vst-color-divider-thumb-border: var(--vst-color-neutral);
      --vst-color-divider-thumb-bg-active: var(--vst-color-bg-primary);
      --vst-color-logo: var(--vst-color-fg-primary);
      --vst-color-bg-graph: var(--vst-color-bg-secondary);
      --vst-color-calibration-bg: var(--vst-color-bg-secondary);
      --vst-color-calibration-border: var(--vst-color-neutral);
      --vst-color-calibration-rsr-bg: var(--vst-color-bg-secondary);
      --vst-color-calibration-rsr-border: var(--vst-color-neutral);
      --vst-color-input-bg: transparent;
      --vst-dark-outline-color: var(--vst-color-brand-100);
    `)}

  ${me("s",h`
      :host,
      html {
        --vst-screen-size: s;
      }
    `)}

  ${me("m",h`
      :host,
      html {
        --vst-screen-size: m;
      }
    `)}

  ${me("l",h`
      :host,
      html {
        --vst-screen-size: l;
      }
    `)}

  ${me("xl",h`
      :host,
      html {
        --vst-screen-size: xl;
      }
    `)}

  ${me(":host","s",h`
      :host,
      html {
        --vst-space-l: 2rem;
      }
    `)}
`;var Gp=gt(Yl());G();fr();var nc=h`
  :host {
    --btn-width: 10.7rem;
    background-color: var(--vst-color-bg);
    width: 100%;
    height: 100%;
  }
  .app {
    display: flex;
    flex-direction: column;
    height: calc(100% - var(--chrome-menubar-height, 0px));
    /* stylelint-disable-line length-zero-no-unit */
  }
  .masthead {
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    padding: 1.6rem 2.5rem 1.25rem;
    background-color: var(--vst-color-brand);
  }
  .masthead__logo {
    display: block;
    width: 11rem;
    margin-right: 1rem;
  }
  .masthead__tagline {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
  }
  .main {
    flex: 1;
    overflow: auto;
    background: var(--vst-color-bg);
  }
  .wrapper {
    margin: 2rem 2.5rem;
  }
  .footer {
    flex-shrink: 0;
    background: var(--vst-color-fg-tertiary);
    padding: 1.5rem 2.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
  }
  .device-list-header {
    display: flex;
    align-items: flex-start;
  }
  .device-list-header__update-all-btn {
    margin-left: auto;
    min-width: var(--btn-width);
  }

  ${ht(h`.device-list-header__update-all-btn`)}

  .device-list {
    font-size: 1.125rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .device-list__item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .device-list__item + .device-list__item {
    border-top: 1px solid var(--vst-color-bg-primary);
  }
  .device-list__firmware-wrapper {
    display: flex;
  }
  .device-list__firmware-primary,
  .device-list__firmware-secondary {
    font-size: 0.75rem;
    margin-right: 1em;
    color: var(--vst-color-fg-tertiary);
  }
  .device-list__meta,
  .device-list__action {
    flex: 1;
  }
  .device-list__action {
    text-align: right;
  }
  .device-list__action-btn {
    background-color: #dee680;
    border-color: transparent;
    font-size: 0.875rem;
    color: inherit;
    margin-top: 0.25rem;
    min-width: var(--btn-width);
  }

  ${ht(h`.device-list__action-btn`)}

  .device-list__update-progress {
    text-align: right;
    margin-left: 1rem;
  }

  .return-to-ga {
    background-color: transparent;
    font-size: 0.875rem;
    color: #fff;
    border-color: #fff;
  }

  ${ht(h`.return-to-ga`,"secondary")}

  .updating-device-message {
    margin: 0.5rem 0;
    font-weight: bold;
  }

  .progress {
    display: flex;
    flex-direction: column;
  }
  .progress__percent {
    margin-bottom: 0.5rem;
  }
  .progress__bar {
    appearance: none;
    background: var(--vst-color-bg-secondary);
    box-shadow: 0;
    border-radius: 0;
    border: 0;
    width: --btn-width;
    margin-left: auto;
    height: 3px;
  }
  .progress__bar[value] {
    appearance: none;
  }
  .progress__bar:not([value]) {
    appearance: none;
  }
  .progress__bar[value]::-webkit-progress-bar {
    background-color: var(--vst-color-bg-tertiary);
  }
  .progress__bar::-webkit-progress-value {
    background-color: var(--vst-color-brand);
    border-radius: 0;
    box-shadow: 0;
    transition: var(--transition-default);
  }
  .progress__bar::-moz-progress-bar {
    background-color: var(--vst-color-brand);
    border-radius: 0;
    box-shadow: 0;
    transition: var(--transition-default);
  }
`;var Ig=typeof global=="object"&&global&&global.Object===Object&&global,Zo=Ig;var Mg=typeof self=="object"&&self&&self.Object===Object&&self,jg=Zo||Mg||Function("return this")(),ye=jg;var Ag=ye.Symbol,Ye=Ag;var ic=Object.prototype,Tg=ic.hasOwnProperty,Og=ic.toString,so=Ye?Ye.toStringTag:void 0;function $g(t){var e=Tg.call(t,so),r=t[so];try{t[so]=void 0;var o=!0}catch(l){}var s=Og.call(t);return o&&(e?t[so]=r:delete t[so]),s}var sc=$g;var Lg=Object.prototype,zg=Lg.toString;function Pg(t){return zg.call(t)}var ac=Pg;var Dg="[object Null]",Rg="[object Undefined]",lc=Ye?Ye.toStringTag:void 0;function Bg(t){return t==null?t===void 0?Rg:Dg:lc&&lc in Object(t)?sc(t):ac(t)}var ot=Bg;function Fg(t){return t!=null&&typeof t=="object"}var Qe=Fg;var Hg="[object Symbol]";function Ng(t){return typeof t=="symbol"||Qe(t)&&ot(t)==Hg}var cc=Ng;function Wg(t,e){for(var r=-1,o=t==null?0:t.length,s=Array(o);++r<o;)s[r]=e(t[r],r,t);return s}var dc=Wg;var Vg=Array.isArray,pt=Vg;var Ug=1/0,uc=Ye?Ye.prototype:void 0,pc=uc?uc.toString:void 0;function mc(t){if(typeof t=="string")return t;if(pt(t))return dc(t,mc)+"";if(cc(t))return pc?pc.call(t):"";var e=t+"";return e=="0"&&1/t==-Ug?"-0":e}var fc=mc;function qg(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var mt=qg;var Gg="[object AsyncFunction]",Kg="[object Function]",Zg="[object GeneratorFunction]",Xg="[object Proxy]";function Jg(t){if(!mt(t))return!1;var e=ot(t);return e==Kg||e==Zg||e==Gg||e==Xg}var Xt=Jg;var Yg=ye["__core-js_shared__"],Xo=Yg;var vc=function(){var t=/[^.]+$/.exec(Xo&&Xo.keys&&Xo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Qg(t){return!!vc&&vc in t}var gc=Qg;var e1=Function.prototype,t1=e1.toString;function r1(t){if(t!=null){try{return t1.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var bt=r1;var o1=/[\\^$.*+?()[\]{}|]/g,n1=/^\[object .+?Constructor\]$/,i1=Function.prototype,s1=Object.prototype,a1=i1.toString,l1=s1.hasOwnProperty,c1=RegExp("^"+a1.call(l1).replace(o1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d1(t){if(!mt(t)||gc(t))return!1;var e=Xt(t)?c1:n1;return e.test(bt(t))}var hc=d1;function u1(t,e){return t==null?void 0:t[e]}var bc=u1;function p1(t,e){var r=bc(t,e);return hc(r)?r:void 0}var We=p1;var m1=We(ye,"WeakMap"),Jo=m1;var xc=Object.create,f1=function(){function t(){}return function(e){if(!mt(e))return{};if(xc)return xc(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),yc=f1;function v1(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e}var wc=v1;var g1=function(){try{var t=We(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),Ci=g1;function h1(t,e){for(var r=-1,o=t==null?0:t.length;++r<o&&e(t[r],r,t)!==!1;);return t}var Sc=h1;var b1=9007199254740991,x1=/^(?:0|[1-9]\d*)$/;function y1(t,e){var r=typeof t;return e=e??b1,!!e&&(r=="number"||r!="symbol"&&x1.test(t))&&t>-1&&t%1==0&&t<e}var kc=y1;function w1(t,e,r){e=="__proto__"&&Ci?Ci(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var Yo=w1;function S1(t,e){return t===e||t!==t&&e!==e}var Qo=S1;var k1=Object.prototype,E1=k1.hasOwnProperty;function _1(t,e,r){var o=t[e];(!(E1.call(t,e)&&Qo(o,r))||r===void 0&&!(e in t))&&Yo(t,e,r)}var en=_1;function C1(t,e,r,o){var s=!r;r||(r={});for(var l=-1,u=e.length;++l<u;){var f=e[l],v=o?o(r[f],t[f],f,r,t):void 0;v===void 0&&(v=t[f]),s?Yo(r,f,v):en(r,f,v)}return r}var Ot=C1;var I1=9007199254740991;function M1(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=I1}var tn=M1;function j1(t){return t!=null&&tn(t.length)&&!Xt(t)}var vr=j1;var A1=Object.prototype;function T1(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||A1;return t===r}var $t=T1;function O1(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}var Ec=O1;var $1="[object Arguments]";function L1(t){return Qe(t)&&ot(t)==$1}var Ii=L1;var _c=Object.prototype,z1=_c.hasOwnProperty,P1=_c.propertyIsEnumerable,D1=Ii(function(){return arguments}())?Ii:function(t){return Qe(t)&&z1.call(t,"callee")&&!P1.call(t,"callee")},rn=D1;function R1(){return!1}var Cc=R1;var Ic=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Mc=Ic&&typeof module=="object"&&module&&!module.nodeType&&module,B1=Mc&&Mc.exports===Ic,jc=B1?ye.Buffer:void 0,F1=jc?jc.isBuffer:void 0,H1=F1||Cc,gr=H1;var N1="[object Arguments]",W1="[object Array]",V1="[object Boolean]",U1="[object Date]",q1="[object Error]",G1="[object Function]",K1="[object Map]",Z1="[object Number]",X1="[object Object]",J1="[object RegExp]",Y1="[object Set]",Q1="[object String]",eh="[object WeakMap]",th="[object ArrayBuffer]",rh="[object DataView]",oh="[object Float32Array]",nh="[object Float64Array]",ih="[object Int8Array]",sh="[object Int16Array]",ah="[object Int32Array]",lh="[object Uint8Array]",ch="[object Uint8ClampedArray]",dh="[object Uint16Array]",uh="[object Uint32Array]",fe={};fe[oh]=fe[nh]=fe[ih]=fe[sh]=fe[ah]=fe[lh]=fe[ch]=fe[dh]=fe[uh]=!0;fe[N1]=fe[W1]=fe[th]=fe[V1]=fe[rh]=fe[U1]=fe[q1]=fe[G1]=fe[K1]=fe[Z1]=fe[X1]=fe[J1]=fe[Y1]=fe[Q1]=fe[eh]=!1;function ph(t){return Qe(t)&&tn(t.length)&&!!fe[ot(t)]}var Ac=ph;function mh(t){return function(e){return t(e)}}var hr=mh;var Tc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ao=Tc&&typeof module=="object"&&module&&!module.nodeType&&module,fh=ao&&ao.exports===Tc,Mi=fh&&Zo.process,vh=function(){try{var t=ao&&ao.require&&ao.require("util").types;return t||Mi&&Mi.binding&&Mi.binding("util")}catch(e){}}(),xt=vh;var Oc=xt&&xt.isTypedArray,gh=Oc?hr(Oc):Ac,on=gh;var hh=Object.prototype,bh=hh.hasOwnProperty;function xh(t,e){var r=pt(t),o=!r&&rn(t),s=!r&&!o&&gr(t),l=!r&&!o&&!s&&on(t),u=r||o||s||l,f=u?Ec(t.length,String):[],v=f.length;for(var S in t)(e||bh.call(t,S))&&!(u&&(S=="length"||s&&(S=="offset"||S=="parent")||l&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||kc(S,v)))&&f.push(S);return f}var nn=xh;function yh(t,e){return function(r){return t(e(r))}}var sn=yh;var wh=sn(Object.keys,Object),$c=wh;var Sh=Object.prototype,kh=Sh.hasOwnProperty;function Eh(t){if(!$t(t))return $c(t);var e=[];for(var r in Object(t))kh.call(t,r)&&r!="constructor"&&e.push(r);return e}var an=Eh;function _h(t){return vr(t)?nn(t):an(t)}var br=_h;function Ch(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Lc=Ch;var Ih=Object.prototype,Mh=Ih.hasOwnProperty;function jh(t){if(!mt(t))return Lc(t);var e=$t(t),r=[];for(var o in t)o=="constructor"&&(e||!Mh.call(t,o))||r.push(o);return r}var zc=jh;function Ah(t){return vr(t)?nn(t,!0):zc(t)}var xr=Ah;var Th=We(Object,"create"),yt=Th;function Oh(){this.__data__=yt?yt(null):{},this.size=0}var Pc=Oh;function $h(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Dc=$h;var Lh="__lodash_hash_undefined__",zh=Object.prototype,Ph=zh.hasOwnProperty;function Dh(t){var e=this.__data__;if(yt){var r=e[t];return r===Lh?void 0:r}return Ph.call(e,t)?e[t]:void 0}var Rc=Dh;var Rh=Object.prototype,Bh=Rh.hasOwnProperty;function Fh(t){var e=this.__data__;return yt?e[t]!==void 0:Bh.call(e,t)}var Bc=Fh;var Hh="__lodash_hash_undefined__";function Nh(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=yt&&e===void 0?Hh:e,this}var Fc=Nh;function yr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}yr.prototype.clear=Pc;yr.prototype.delete=Dc;yr.prototype.get=Rc;yr.prototype.has=Bc;yr.prototype.set=Fc;var ji=yr;function Wh(){this.__data__=[],this.size=0}var Hc=Wh;function Vh(t,e){for(var r=t.length;r--;)if(Qo(t[r][0],e))return r;return-1}var Lt=Vh;var Uh=Array.prototype,qh=Uh.splice;function Gh(t){var e=this.__data__,r=Lt(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():qh.call(e,r,1),--this.size,!0}var Nc=Gh;function Kh(t){var e=this.__data__,r=Lt(e,t);return r<0?void 0:e[r][1]}var Wc=Kh;function Zh(t){return Lt(this.__data__,t)>-1}var Vc=Zh;function Xh(t,e){var r=this.__data__,o=Lt(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}var Uc=Xh;function wr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}wr.prototype.clear=Hc;wr.prototype.delete=Nc;wr.prototype.get=Wc;wr.prototype.has=Vc;wr.prototype.set=Uc;var zt=wr;var Jh=We(ye,"Map"),Pt=Jh;function Yh(){this.size=0,this.__data__={hash:new ji,map:new(Pt||zt),string:new ji}}var qc=Yh;function Qh(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Gc=Qh;function e0(t,e){var r=t.__data__;return Gc(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Dt=e0;function t0(t){var e=Dt(this,t).delete(t);return this.size-=e?1:0,e}var Kc=t0;function r0(t){return Dt(this,t).get(t)}var Zc=r0;function o0(t){return Dt(this,t).has(t)}var Xc=o0;function n0(t,e){var r=Dt(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}var Jc=n0;function Sr(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Sr.prototype.clear=qc;Sr.prototype.delete=Kc;Sr.prototype.get=Zc;Sr.prototype.has=Xc;Sr.prototype.set=Jc;var Yc=Sr;function i0(t){return t==null?"":fc(t)}var Qc=i0;function s0(t,e){for(var r=-1,o=e.length,s=t.length;++r<o;)t[s+r]=e[r];return t}var ln=s0;var a0=sn(Object.getPrototypeOf,Object),cn=a0;function l0(){this.__data__=new zt,this.size=0}var ed=l0;function c0(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var td=c0;function d0(t){return this.__data__.get(t)}var rd=d0;function u0(t){return this.__data__.has(t)}var od=u0;var p0=200;function m0(t,e){var r=this.__data__;if(r instanceof zt){var o=r.__data__;if(!Pt||o.length<p0-1)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new Yc(o)}return r.set(t,e),this.size=r.size,this}var nd=m0;function kr(t){var e=this.__data__=new zt(t);this.size=e.size}kr.prototype.clear=ed;kr.prototype.delete=td;kr.prototype.get=rd;kr.prototype.has=od;kr.prototype.set=nd;var id=kr;function f0(t,e){return t&&Ot(e,br(e),t)}var sd=f0;function v0(t,e){return t&&Ot(e,xr(e),t)}var ad=v0;var ld=typeof exports=="object"&&exports&&!exports.nodeType&&exports,cd=ld&&typeof module=="object"&&module&&!module.nodeType&&module,g0=cd&&cd.exports===ld,dd=g0?ye.Buffer:void 0,ud=dd?dd.allocUnsafe:void 0;function h0(t,e){if(e)return t.slice();var r=t.length,o=ud?ud(r):new t.constructor(r);return t.copy(o),o}var pd=h0;function b0(t,e){for(var r=-1,o=t==null?0:t.length,s=0,l=[];++r<o;){var u=t[r];e(u,r,t)&&(l[s++]=u)}return l}var md=b0;function x0(){return[]}var dn=x0;var y0=Object.prototype,w0=y0.propertyIsEnumerable,fd=Object.getOwnPropertySymbols,S0=fd?function(t){return t==null?[]:(t=Object(t),md(fd(t),function(e){return w0.call(t,e)}))}:dn,Er=S0;function k0(t,e){return Ot(t,Er(t),e)}var vd=k0;var E0=Object.getOwnPropertySymbols,_0=E0?function(t){for(var e=[];t;)ln(e,Er(t)),t=cn(t);return e}:dn,un=_0;function C0(t,e){return Ot(t,un(t),e)}var gd=C0;function I0(t,e,r){var o=e(t);return pt(t)?o:ln(o,r(t))}var pn=I0;function M0(t){return pn(t,br,Er)}var hd=M0;function j0(t){return pn(t,xr,un)}var bd=j0;var A0=We(ye,"DataView"),mn=A0;var T0=We(ye,"Promise"),fn=T0;var O0=We(ye,"Set"),vn=O0;var xd="[object Map]",$0="[object Object]",yd="[object Promise]",wd="[object Set]",Sd="[object WeakMap]",kd="[object DataView]",L0=bt(mn),z0=bt(Pt),P0=bt(fn),D0=bt(vn),R0=bt(Jo),Jt=ot;(mn&&Jt(new mn(new ArrayBuffer(1)))!=kd||Pt&&Jt(new Pt)!=xd||fn&&Jt(fn.resolve())!=yd||vn&&Jt(new vn)!=wd||Jo&&Jt(new Jo)!=Sd)&&(Jt=function(t){var e=ot(t),r=e==$0?t.constructor:void 0,o=r?bt(r):"";if(o)switch(o){case L0:return kd;case z0:return xd;case P0:return yd;case D0:return wd;case R0:return Sd}return e});var Rt=Jt;var B0=Object.prototype,F0=B0.hasOwnProperty;function H0(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&F0.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Ed=H0;var N0=ye.Uint8Array,Ai=N0;function W0(t){var e=new t.constructor(t.byteLength);return new Ai(e).set(new Ai(t)),e}var _r=W0;function V0(t,e){var r=e?_r(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var _d=V0;var U0=/\w*$/;function q0(t){var e=new t.constructor(t.source,U0.exec(t));return e.lastIndex=t.lastIndex,e}var Cd=q0;var Id=Ye?Ye.prototype:void 0,Md=Id?Id.valueOf:void 0;function G0(t){return Md?Object(Md.call(t)):{}}var jd=G0;function K0(t,e){var r=e?_r(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Ad=K0;var Z0="[object Boolean]",X0="[object Date]",J0="[object Map]",Y0="[object Number]",Q0="[object RegExp]",eb="[object Set]",tb="[object String]",rb="[object Symbol]",ob="[object ArrayBuffer]",nb="[object DataView]",ib="[object Float32Array]",sb="[object Float64Array]",ab="[object Int8Array]",lb="[object Int16Array]",cb="[object Int32Array]",db="[object Uint8Array]",ub="[object Uint8ClampedArray]",pb="[object Uint16Array]",mb="[object Uint32Array]";function fb(t,e,r){var o=t.constructor;switch(e){case ob:return _r(t);case Z0:case X0:return new o(+t);case nb:return _d(t,r);case ib:case sb:case ab:case lb:case cb:case db:case ub:case pb:case mb:return Ad(t,r);case J0:return new o;case Y0:case tb:return new o(t);case Q0:return Cd(t);case eb:return new o;case rb:return jd(t)}}var Td=fb;function vb(t){return typeof t.constructor=="function"&&!$t(t)?yc(cn(t)):{}}var Od=vb;var gb="[object Map]";function hb(t){return Qe(t)&&Rt(t)==gb}var $d=hb;var Ld=xt&&xt.isMap,bb=Ld?hr(Ld):$d,zd=bb;var xb="[object Set]";function yb(t){return Qe(t)&&Rt(t)==xb}var Pd=yb;var Dd=xt&&xt.isSet,wb=Dd?hr(Dd):Pd,Rd=wb;var Sb=1,kb=2,Eb=4,Bd="[object Arguments]",_b="[object Array]",Cb="[object Boolean]",Ib="[object Date]",Mb="[object Error]",Fd="[object Function]",jb="[object GeneratorFunction]",Ab="[object Map]",Tb="[object Number]",Hd="[object Object]",Ob="[object RegExp]",$b="[object Set]",Lb="[object String]",zb="[object Symbol]",Pb="[object WeakMap]",Db="[object ArrayBuffer]",Rb="[object DataView]",Bb="[object Float32Array]",Fb="[object Float64Array]",Hb="[object Int8Array]",Nb="[object Int16Array]",Wb="[object Int32Array]",Vb="[object Uint8Array]",Ub="[object Uint8ClampedArray]",qb="[object Uint16Array]",Gb="[object Uint32Array]",ue={};ue[Bd]=ue[_b]=ue[Db]=ue[Rb]=ue[Cb]=ue[Ib]=ue[Bb]=ue[Fb]=ue[Hb]=ue[Nb]=ue[Wb]=ue[Ab]=ue[Tb]=ue[Hd]=ue[Ob]=ue[$b]=ue[Lb]=ue[zb]=ue[Vb]=ue[Ub]=ue[qb]=ue[Gb]=!0;ue[Mb]=ue[Fd]=ue[Pb]=!1;function gn(t,e,r,o,s,l){var u,f=e&Sb,v=e&kb,S=e&Eb;if(r&&(u=s?r(t,o,s,l):r(t)),u!==void 0)return u;if(!mt(t))return t;var I=pt(t);if(I){if(u=Ed(t),!f)return wc(t,u)}else{var y=Rt(t),j=y==Fd||y==jb;if(gr(t))return pd(t,f);if(y==Hd||y==Bd||j&&!s){if(u=v||j?{}:Od(t),!f)return v?gd(t,ad(u,t)):vd(t,sd(u,t))}else{if(!ue[y])return s?t:{};u=Td(t,y,f)}}l||(l=new id);var $=l.get(t);if($)return $;l.set(t,u),Rd(t)?t.forEach(function(U){u.add(gn(U,e,r,U,t,l))}):zd(t)&&t.forEach(function(U,Z){u.set(Z,gn(U,e,r,Z,t,l))});var A=S?v?bd:hd:v?xr:br,P=I?void 0:A(t);return Sc(P||t,function(U,Z){P&&(Z=U,U=t[Z]),en(u,Z,gn(U,e,r,Z,t,l))}),u}var Nd=gn;var Kb=1,Zb=4;function Xb(t){return Nd(t,Kb|Zb)}var Ti=Xb;function Jb(t){for(var e=-1,r=t==null?0:t.length,o={};++e<r;){var s=t[e];o[s[0]]=s[1]}return o}var Oi=Jb;var Yb="[object Map]",Qb="[object Set]",ex=Object.prototype,tx=ex.hasOwnProperty;function rx(t){if(t==null)return!0;if(vr(t)&&(pt(t)||typeof t=="string"||typeof t.splice=="function"||gr(t)||on(t)||rn(t)))return!t.length;var e=Rt(t);if(e==Yb||e==Qb)return!t.size;if($t(t))return!an(t).length;for(var r in t)if(tx.call(t,r))return!1;return!0}var $i=rx;var ox=0;function nx(t){var e=++ox;return Qc(t)+e}var Li=nx;function Wd(){let t=0;if(CSS.supports("padding-inline-start: constant(safe-area-inset-left)")||CSS.supports("padding-inline-start: env(safe-area-inset-left)")){let e=document.createElement("div");e.style.paddingLeft="constant(safe-area-inset-left)",e.style.paddingLeft="env(safe-area-inset-left)",document.body.appendChild(e);let r=parseInt(window.getComputedStyle(e).paddingLeft);document.body.removeChild(e),r>0&&(t=r)}return t}var Cr=class{constructor(e,r){this.toast=e,this.enabledContent=r,this.popovers=[],this.anchoredPopovers=[],this._popoverWrapperEl=void 0;let o=()=>{for(let s=0;s<this.popovers.length;++s)Cr.positionPopover(this.popovers[s])};window.addEventListener("resize",o),this.resizeObserver=new ResizeObserver(o)}async create(e,r={}){let{toast:o,enabledContent:s}=this;if(console.assert(e),!this._popoverWrapperEl){console.warn("no popover wrapper attached. Fallback to standard div");let I=document.querySelector("#app")||document.body,y=document.createElement("div");y.id="popover_wrapper",I.appendChild(y),this._popoverWrapperEl=y}let l=document.createElement(e);if(!customElements.get(l.tagName.toLowerCase()))throw Error(`Possible issue with childEl import verify spelling and that this ${e} component is being imported`);let u=r.popover||{};await Promise.resolve().then(()=>(Pi(),iu));let f=document.createElement("vst-core-popover");if(this.resizeObserver.observe(l),r.preventCancel&&(f.canClose=!1),r.preventCancelFromScreen&&(f.canCloseFromScreen=!1),r.properties){let{properties:I}=r;Object.keys(I).forEach(y=>{l[y]=I[y]})}f.setPopoverChild(l,u),this._popoverWrapperEl.appendChild(f),await f.updateComplete,f.shadowRoot.querySelector("#popover").style.visibility="hidden";let v=Li(),S={id:v,popoverEl:f,childEl:l,config:r,onRemove:()=>{},remove:()=>{S.onRemove(),f.remove(),this.resizeObserver.unobserve(l)}};return this.popovers.push(S),this._popoverWrapperEl.dispatchEvent(new CustomEvent("popover-creation",{bubbles:!0,composed:!0,detail:{id:v,title:r.popover.header?.title||e}})),requestAnimationFrame(()=>{setTimeout(()=>{Cr.positionPopover(S),f.shadowRoot.querySelector("#popover").style.visibility="";let{outsideTapEvents:I={}}=r,y=typeof I.click=="string"?I.click:"click";if(r.popover.type!=="dialog"){let U=!1,Z=()=>{U=!0,setTimeout(()=>{U=!1})};l.addEventListener(y,Z,!0),f.bind(document.querySelector("#app"),y,()=>{!U&&!r.preventCancel&&(f.dispatchEvent(new CustomEvent("close")),l.removeEventListener(y,Z,!0)),U=!1})}let j=[f,o.element],$=document.querySelector("vst-ui-chromebar");$&&j.push($),document.querySelector("#app").shadowRoot.querySelectorAll("vst-ui-soft-alert").forEach(U=>{j.push(U)});let P=r.popover.type==="dialog"?s.restrict(e,j):s.extend(e,j);S.onRemove=()=>P()})}),f}present(e,{popover:r,preventCancel:o,preventCancelFromScreen:s,outsideTapEvents:l,properties:u,events:f}){let{anchoredPopovers:v}=this;return new Promise((S,I)=>{let y,j=Q=>{let ee=Q;return(...ne)=>{ee(...ne),ee=()=>{}}},$=Q=>Q.anchor===r.anchor,A=j(()=>{y&&this.destroy(y);let Q=v.findIndex($);Q!==-1&&v.splice(Q,1)}),P=j(Q=>{A(),I(Q)}),U=j(Q=>{A(),S(Q)}),Z=j(Q=>U({cancelled:!0,reason:Q,message:`${e} popover cancelled. Reason: ${Q}.`}));try{(async()=>{if(r.type!=="dialog"&&r.anchor){let m=v.find($);if(m){m.close(),Z("toggle-existing-popover");return}let M={anchor:r.anchor,close:()=>{Z("popover-toggled-close")}};v.push(M)}y=await this.create(e,{popover:r,preventCancel:o,preventCancelFromScreen:s,outsideTapEvents:l,properties:u},!1);let Q=y.querySelector(e),be={component:Q,completeWorkflow:m=>{Q.dispatchEvent(new CustomEvent("complete-workflow",{detail:m}))},cancelWorkflow:()=>{Q.dispatchEvent(new CustomEvent("cancel-workflow"))},failWorkflow:m=>{Q.dispatchEvent(new CustomEvent("fail-workflow",{detail:m}))}},ve=typeof f=="function"?f(be):f;ve&&Object.keys(ve).forEach(m=>{y.bind(Q,m,(...M)=>{ve[m](...M)})}),y.bind(Q,"complete-workflow",m=>U(m.detail)),y.bind(Q,"fail-workflow",m=>P(m.detail)),y.bind(Q,"cancel-workflow",()=>Z("workflow-cancelled")),y.bind("close",()=>Z("popover-closed"))})()}catch(Q){P(Q)}})}destroy(e){try{let r=this.popovers.findIndex(l=>l.popoverEl===e),o=this.popovers.splice(r,1)[0],{id:s}=o;o.remove(),this._popoverWrapperEl.dispatchEvent(new CustomEvent("popover-removal",{bubbles:!0,composed:!0,detail:{id:s,title:o.config.popover.header?.title||o.childEl}}))}catch(r){console.warn(r)}}destroyAll(){this.popovers.map(e=>e.popoverEl).forEach(e=>e.close()),this.popovers=[]}popPopover(){let e=this.popovers.slice(-1)[0];return e?this.destroy(e.popoverEl):console.warn("no popovers to pop")}hasPopovers(){return this.popovers.length>0}hasDialogs(){let e=!1;return this.hasPopovers()&&this.popovers.forEach(r=>{r.config.popover.type==="dialog"&&(e=!0)}),e}getPopoverSelectorDebugInfo(){let{popoverSelector:e}=this;return e.getDebugInfo()}static positionPopover(e){let r=e.config.popover,{popoverEl:o}=e,{childEl:s}=e,l=r.type||"popover",u=e.popoverEl.shadowRoot.querySelector("#popover"),f="CENTER";if(l==="dialog")o.classList.add("dialog");else{u.classList.add(l),l==="contextmenu"&&e.popoverEl.addEventListener("contextmenu",ve=>{o.cancelClicked(),ve.preventDefault()}),r.orientation&&(f=r.orientation.toUpperCase());let v=document.documentElement.clientWidth,S=document.documentElement.clientHeight,y=(r.anchor||document.body).getBoundingClientRect(),j=y.width/2,$=y.height/2,A=s.getBoundingClientRect(),P=A.width/2,U=A.height/2,Z=8,Q,ee=(ve,m)=>{let M={},N=0;switch(ve){case"TOP":M.x=y.left+j-P,M.y=y.top-A.height-(Z+1);break;case"BOTTOM":M.x=y.left+j-P,M.y=y.bottom+Z-1;break;case"RIGHT":M.x=y.right+Z,M.y=y.top-U+$;break;case"LEFT":M.x=y.left-A.width-Z,M.y=y.top-U+$;break;case"CENTER":M.x=v/2-P,M.y=S/2-U;break;default:console.warn("no popover orientation hint - use TOP, LEFT, RIGHT, BOTTOM, or CENTER");break}l==="contextmenu"&&(M.x=r.extras.x,M.y=r.extras.y),"visualViewport"in window&&(N=window.visualViewport.offsetTop),u.style.left=`${M.x}px`,u.style.top=`${M.y+N}px`,m||Q()};Q=()=>{A=s.getBoundingClientRect(),v<A.width?(f="CENTER",ee(f,!0)):f==="LEFT"&&A.left<0?(v-y.right<A.width?f="CENTER":f="RIGHT",ee(f,!0)):f==="RIGHT"&&A.right>=v&&(y.left<A.width?f="CENTER":f="LEFT",ee(f,!0))},ee(f),u.classList.add(f.toLowerCase());let ne=u.getBoundingClientRect(),se=4;ne.top<=0&&(u.style.top=`${se}px`),ne.right>=v&&(u.style.left=`${v-ne.width-se}px`),ne.left<=0&&(u.style.left=`${se}px`),ne.bottom>=S&&(u.style.top=`${S-ne.height-se}px`);let be=Wd();parseFloat(u.style.left)<=se+be&&(u.style.left=`calc(${be}px + ${u.style.left})`),v-ne.width-parseFloat(u.style.left)<=se+be&&(u.style.left=`calc(${v-ne.width-se}px - ${be}px)`)}}};function bn(t){return new Promise(e=>e(t()))}var wt=Symbol("priv"),Hi=class{constructor(e,r){this[wt]={popoverManagerApi:new Cr(e,r)}}attachWrapper(e){this[wt].popoverManagerApi._popoverWrapperEl=e}presentPopover(e,{title:r,anchor:o,orientation:s,outsideTapEvents:l,properties:u,events:f,preventCancel:v}={}){return bn(()=>{let{popoverManagerApi:S}=this[wt],I=r===void 0?void 0:{title:r};return S.present(e,{popover:{anchor:o,orientation:s,header:I},outsideTapEvents:l,properties:u,events:f,preventCancel:v})})}presentPopoverList({title:e,anchor:r,orientation:o,items:s,direction:l}={}){return bn(()=>{let u={},f=({id:A,title:P})=>{if(typeof A!="string"||A.length===0)throw Error("item options in PopoverManager.presentPopoverList() config must have a string id.");if(u[A])throw Error(`id '${A}' is duplicated in PopoverManager.presentPopoverList() config. Must be unique.`);if(u[A]=!0,typeof P!="string"||P.length===0)throw Error(`menu item option with id ${A} in PopoverManager.presentPopoverList() is either missing a title property, or the title needs a non empty string.`);return!0},v=A=>A.filter(P=>Array.isArray(P)||f(P)&&(P.include===void 0||P.include)).map(P=>Array.isArray(P)?v(P):P),S=(A,P)=>Array.isArray(P)?P.reduce(S,A):(A[P.id]=U=>typeof P.selectAction=="function"?P.selectAction():typeof P.checkedChanged=="function"?P.checkedChanged(U):typeof P.selectionChanged=="function"?P.selectionChanged(U):!1,A),I=A=>Array.isArray(A)?A.map(I):A,y=v(s),j=y.reduce(S,{}),$=y.map(I).filter(A=>Array.isArray(A)&&A.length>0||!Array.isArray(A));return Promise.resolve().then(()=>(Fi(),uu)),this.presentPopover("vst-ui-listbox",{anchor:r,orientation:o,properties:{direction:l,view:{heading:e,items:$,icons:!1}},events:({completeWorkflow:A})=>({"list-item-clicked":P=>{A(P.detail)},"list-switch-changed":P=>{let[U,Z]=P.detail;j[U](Z)},"list-item-option-selected":P=>{let[U,Z]=P.detail;j[U](Z)}})}).then(A=>A&&A.cancelled?A:j[A]())})}presentDialog(e,{title:r,preventCancel:o,preventCancelFromScreen:s,properties:l,events:u}={}){return bn(()=>{let{popoverManagerApi:f}=this[wt],v=r===void 0?void 0:{title:r};return f.present(e,{popover:{type:"dialog",header:v},preventCancel:o,preventCancelFromScreen:s,properties:l,events:u})})}closeAll(){let{popoverManagerApi:e}=this[wt];e.destroyAll()}closeLast(){let{popoverManagerApi:e}=this[wt];e.popPopover()}hasPopovers(){let{popoverManagerApi:e}=this[wt];return e.hasPopovers()}hasDialogs(){let{popoverManagerApi:e}=this[wt];return e.hasDialogs()}getPopoverSelectorDebugInfo(){let{popoverManagerApi:e}=this[wt];return e.getPopoverSelectorDebugInfo()}};var hu=gt(Ir());ro();var Bt=!1,Wi={"rolling-counter-error":function(e){let{timestamp:r}=e,o=`Rolling counter error detected at time: ${r}`;Bt&&(console.error("Device Error:"),console.error(o),console.log(r)),typeof r=="number"&&r>=0&&this.emit("device-error",o)},"device-error":function(e){Bt&&(console.error("Device Error:"),console.error(e)),this.emit("device-error",e)},"fwupdate:update-status":function(e){e.hasOwnProperty("stage")?e.action==="begin"?(this.triggerStageBegin(e.deviceId,e.stage),Bt&&console.log(`STAGE[${e.deviceId}]: ${e.stage} action=${e.action}`)):e.action==="update"?(this.triggerStageUpdate(e.deviceId,e.stage,e.percent*100),Bt&&console.log(`STAGE[${e.deviceId}]: ${e.stage} action=${e.action} [ ${e.percent*100}% complete ]`)):e.action==="end"?(this.triggerStageEnd(e.deviceId,e.stage,e.success),Bt&&console.log(`STAGE[${e.deviceId}]: ${e.stage} action=${e.action} success=${e.success}`)):(this.triggerError(e.deviceId,`Invalid Action: ${e.action}`),Bt&&console.error(`Error[\${params.deviceId}]: invalid action: ${e.action}`)):e.hasOwnProperty("error")?(this.triggerError(e.deviceId,`Invalid Action: ${e.action}`),Bt&&console.error(`Error[${e.deviceId}] found during update: ${e.error}`)):(this.triggerError("unknown","Unknown status update"),Bt&&(console.log("Unknown status update..."),console.dir(e)))}};var mu=gt(Ir()),co=!1,ax=[2,3,4],lx=[6,7,9,10,13,15,16,17,18,25,26],fu=2295,cx=5538,dx=115;function Vi(t){return t.vendorId===cx&&t.productId===dx||t.vendorId===fu&&lx.includes(t.productId)}function Mr(t){return t.vendorId===fu&&ax.includes(t.productId)}var yn=function(){let{lastError:t}=window.chrome.runtime;Error.call(this,t.message),this.lastError=t};yn.prototype=Object.create(Error.prototype);yn.check=function(t){let e=!!window.chrome.runtime.lastError;return e&&t(new yn),!e};var vu=function(t){return yn.check(t)},uo=function(t){return{deviceId:typeof t.deviceId=="number"?t.deviceId:t.device,productId:t.productId,vendorId:t.vendorId,_usbId:t.device,_hidId:t.deviceId}},ux=function(t,e){let r={deviceId:null,productId:t.productId,vendorId:t.vendorId,_usbId:typeof t._usbId=="number"?t._usbId:e._usbId,_hidId:typeof t._hidId=="number"?t._hidId:e._hidId},o=typeof r._usbId=="number"?r._usbId:0,s=typeof r._hidId=="number"?r._hidId:0;return console.assert((s&4294901760)==0),console.assert((o&4294901760)==0),r.deviceId=o<<16&4294901760|s&65535,r},gu=class extends mu.default{constructor(){super();this.chomeHidAddedListener=null,this.chromeHidRemovedListener=null,this.chromeUsbAddedListener=null,this.chromeUsbRemovedListener=null,this.allDevices=[],this.pending={},this.pendingTimeout=null}getAttachedDevices(){return this.allDevices}findDeviceByVidPid(e,r){return this.allDevices.find(o=>o.vendorId===e&&o.productId===r)}_deviceAdded(e){console.assert(e&&e.productId),co&&(console.log("UsbDeviceDiscovery: device-added"),console.dir(e)),this.allDevices.push(e),this.emit("device-added",e)}_deviceRemoved(e,r){let o,s=this.allDevices.length;for(typeof r!="string"&&(r="deviceId"),o=0;o<s;++o)if(console.dir(this.allDevices[o]),this.allDevices[o][r]===e.deviceId){co&&(console.log("UsbDeviceDiscovery: device-removed"),console.dir(e));let l=this.allDevices.splice(o,1)[0];this.emit("device-removed",l);break}}_deviceAdded_BlacklistHID(e){let r=this.pending[e.productId];this.pending[e.productId]=ux(e,r||{}),co&&(console.log("UsbDeviceDiscovery._deviceAdded_BlacklistHID: device added"),console.dir(e)),clearTimeout(this.pendingTimeout),this.pendingTimeout=setTimeout(()=>{let{pending:o}=this;this.pending={},Object.keys(o).forEach(s=>{let l=o[s];l.deviceId!==null?this._deviceAdded(l):(this.pending[s]=l,console.error("Failed to resolve merged USB/HID device"),console.error(l)),clearTimeout(this.pendingTimeout),this.pendingTimeout=null})},250)}_deviceRemoved_BlacklistHID(e,r){this._deviceRemoved(e,r)}start(){function e(o){return o=o||{},new Promise((s,l)=>{window.chrome.hid.getDevices(o,u=>{vu(l)&&s(u)})})}function r(o){return o=o||{},new Promise((s,l)=>{window.chrome.usb.getDevices(o,u=>{vu(l)&&s(u)})})}e().then(o=>{o.forEach(s=>{s=uo(s),co&&(console.log("add device from HID STARTUP"),console.dir(s)),Mr(s)?this._deviceAdded_BlacklistHID(s):this._deviceAdded(s)})}),r().then(o=>{o.forEach(s=>{s=uo(s),co&&(console.log("add device from USB STARTUP"),console.dir(s)),Mr(s)?this._deviceAdded_BlacklistHID(s):Vi(s)||this._deviceAdded(s)})}),this._bindEvents()}_bindEvents(){this.chomeHidAddedListener=e=>{e=uo(e),Mr(e)?this._deviceAdded_BlacklistHID(e):this._deviceAdded(e)},this.chromeHidRemovedListener=e=>{let r=this.allDevices.find(o=>o._hidId===e);r&&(Mr(r)?this._deviceRemoved_BlacklistHID(r,"_hidId"):this._deviceRemoved(r))},this.chromeUsbAddedListener=e=>{e=uo(e),Mr(e)?this._deviceAdded_BlacklistHID(e):Vi(e)||this._deviceAdded(e)},this.chromeUsbRemovedListener=e=>{e=uo(e),Mr(e)?this._deviceRemoved_BlacklistHID(e,"_usbId"):Vi(e)||this._deviceRemoved(e)},window.chrome.hid.onDeviceAdded.addListener(this.chomeHidAddedListener),window.chrome.hid.onDeviceRemoved.addListener(this.chromeHidRemovedListener),window.chrome.usb.onDeviceAdded.addListener(this.chromeUsbAddedListener),window.chrome.usb.onDeviceRemoved.addListener(this.chromeUsbRemovedListener)}stop(){window.chrome.hid.onDeviceAdded.removeListener(this.chomeHidAddedListener),window.chrome.hid.onDeviceRemoved.removeListener(this.chromeHidRemovedListener),window.chrome.usb.onDeviceAdded.removeListener(this.chromeUsbAddedListener),window.chrome.usb.onDeviceRemoved.removeListener(this.chromeUsbRemovedListener),this.chomeHidAddedListener=null,this.chromeHidRemovedListener=null,this.chromeUsbAddedListener=null,this.chromeUsbRemovedListener=null}},Ui=window.chrome&&window.chrome.hid?gu:null;var px=5e3,mx="resources/firmware.json",qi=class extends hu.default{constructor({api:e,appManifest:r,deviceServerPorts:o}){super();this.api=e,this.appManifest=r,this.deviceServerPorts=o,this._pollDevicesTimerId=null,Object.keys(Wi).forEach(s=>this.api.on(s,Wi[s].bind(this)))}init(e={}){let{api:r}=this;this.deviceServerPorts&&(e.deviceServerPorts=this.deviceServerPorts);let o=()=>{!this.usbDiscovery&&Ui&&(this.usbDiscovery=new Ui,this.usbDiscovery.on("device-added",this.deviceAttached.bind(this)),this.usbDiscovery.on("device-removed",s=>{this.deviceDetached(s).then(()=>{this.emit("device-detached")})}),this.usbDiscovery.start())};return new Promise((s,l)=>{let u=f=>{e.firmwareInfo=f,r.init(e).then(v=>{this.experimentId=v.experimentId;{o();let S=()=>{r.pollDevices(this.experimentId),this._pollDevicesTimerId=setTimeout(S,2e3)};this._pollDevicesTimerId=setTimeout(S,0)}s(v)}).catch(l)};At.getJSON(mx).then(u).catch(f=>{console.error(f),u({})})})}uninit(e){return new Promise((r,o)=>{let s=!1,l=null,u=(...f)=>{clearTimeout(l),s?s=!0:r(...f)};clearTimeout(this._pollDevicesTimerId),this._pollDevicesTimerId=null,this.usbDiscovery&&this.usbDiscovery.stop(),setTimeout(()=>{console.warn("Native module uninit failed to complete, forcing."),u()},px),this.api.uninit(e).then(u,o)})}getDevices(){return new Promise((e,r)=>{this.api.getDevices().then(o=>{e(o.devices)}).catch(r)})}runUpdater(e){return this.api.runUpdater(e)}runUpdater_Test(e,r,o){return new Promise(s=>{let l=()=>{setTimeout(()=>{this.triggerStageBegin(e,"updater-validation"),setTimeout(()=>{this.triggerStageEnd(e,"updater-validation",!0),setTimeout(()=>this.triggerStageEnd(e,"device-updater",!0),100),setTimeout(()=>s({success:!0}),500)},0)},100)},u=()=>{o?setTimeout(()=>{this.triggerStageBegin(e,"ble-updater"),this.triggerStageUpdate(e,"ble-updater",0),setTimeout(()=>this.triggerStageUpdate(e,"ble-updater",25),1e3),setTimeout(()=>this.triggerStageUpdate(e,"ble-updater",50),2e3),setTimeout(()=>this.triggerStageUpdate(e,"ble-updater",75),3e3),setTimeout(()=>this.triggerStageUpdate(e,"ble-updater",100),4e3),setTimeout(()=>{this.triggerStageEnd(e,"ble-updater",!0),l()},4500)},100):l()},f=()=>{r?setTimeout(()=>{this.triggerStageBegin(e,"daq-updater"),this.triggerStageUpdate(e,"daq-updater",0),setTimeout(()=>this.triggerStageUpdate(e,"daq-updater",25),1e3),setTimeout(()=>this.triggerStageUpdate(e,"daq-updater",50),2e3),setTimeout(()=>this.triggerStageUpdate(e,"daq-updater",75),3e3),setTimeout(()=>this.triggerStageUpdate(e,"daq-updater",100),4e3),setTimeout(()=>{this.triggerStageEnd(e,"daq-updater",!0),u()},4500)},100):u()};this.triggerStageBegin(e,"device-updater"),f()})}triggerStageBegin(e,r){this.emit("stage-begin",{deviceId:e,stage:r})}triggerStageUpdate(e,r,o){this.emit("stage-update",{deviceId:e,stage:r,percent:o})}triggerStageEnd(e,r,o){this.emit("stage-end",{deviceId:e,stage:r,success:o})}triggerError(e,r){this.emit("error",{deviceId:e,error:r})}deviceAttached(e){return this.api.usbDeviceAttached(e)}deviceDetached(e){return this.api.usbDeviceDetached(e)}};var bu=gt(Ir()),Gi=class extends bu.default{constructor(e){super();this.rpc=e;let r={};["rolling-counter-error","device-error","fwupdate:update-status"].forEach(o=>{r[o]=(s,l)=>{let{params:u}=l;this.emit(o,u)}}),this.rpc.registerMethods(r,this)}init(e){return this.rpc.sendRequest("firmware-updater:init",e).then(()=>this.rpc.sendRequest("create-experiment").then(r=>r))}uninit(e){return this.rpc.sendRequest("firmware-updater:uninit",e)}pollDevices(e){return this.rpc.sendRequest("-poll-devices",{experimentId:e})}getDevices(){return this.rpc.sendRequest("firmware-updater:get-devices")}runUpdater(e){return this.rpc.sendRequest("firmware-updater:run-updater",e)}usbDeviceAttached(e){return this.rpc.sendRequest("firmware-updater:device-attached",e)}usbDeviceDetached(e){return this.rpc.sendRequest("firmware-updater:device-detached",e)}};var yu=gt(Zi());function fx(){let t=()=>{},e=[],r=null,o=()=>e.length>0?e[e.length-1]:null,s=()=>{r&&r.disengage(),r=null;let I=o();if(!I)return;let{filters:y,extensions:j}=I,$=y.slice();j.forEach(A=>{A.filters.forEach(P=>$.push(P))}),r=yu.default.maintain.disabled({filter:$})},l=I=>{let y=e.indexOf(I);y!==-1&&e.splice(y),s()},u=I=>{e.push(I),s()},f=I=>{let y=[],j=(A,P)=>{let U;for(U of A)U.nodeType===Node.ELEMENT_NODE&&P(U)},$=A=>{let P=A.shadowRoot;P&&(y.push(P),$(P)),j(A.children,$)};return j(I,A=>{y.push(A),$(A)}),y},v=(I,y=[])=>{let j=[],$=f(y),A={name:I,targets:y,filters:$,extensions:j,addExtension:P=>{j.push(P),s()},removeExtension:P=>{let U=j.indexOf(P);U!==-1&&j.splice(U)},remove:()=>{A.filters=null,A.extensions=null,A.refreshFocus=t,A.addExtension=t,A.removeExtension=t,A.remove=t,l(A)}};return u(A),A},S=(I,y,j)=>{let $=f(j),A={name:y,targets:j,filters:$,remove:()=>{I.removeExtension(A),A.filters=null,A.remove=t}};return I.addExtension(A),A};return{getDebugInfo:()=>e.map(({name:I,targets:y,filters:j,extensions:$})=>({name:I,targets:y,filters:j,extensions:$.map(({name:A,targets:P,filters:U})=>({name:A,targets:P,filters:U}))})),restrict:(I,y)=>{let j=v(I,y);return()=>{j.remove()}},extend:(I,y)=>{let j=o();if(!j)return t;let $=S(j,I,y);return()=>{$.remove()}}}}var wu={create:fx};var Su=gt(Ir()),Xi=Symbol("priv"),ku=class extends Su.default{constructor(){super();let e=getComputedStyle(document.documentElement).getPropertyValue("--base-font-size");this._accessibilityScale=parseFloat(e)}get scale(){return this._accessibilityScale}set scale(e){e!==this._accessibilityScale&&(this._accessibilityScale=e,document.documentElement.style.setProperty("--base-font-size",`${e}em`),this.emit("accessibility-scale-changed",this._accessibilityScale))}};function Eu(){return[Xi].baseFontSize=getComputedStyle(document.documentElement).getPropertyValue("--base-font-size"),[Xi].scale=parseFloat([Xi].baseFontSize),new ku}function _u(){let t={};function e(o,s){for(;t[o];)o++;s instanceof Promise?t[o]=()=>s():t[o]=s}function r(){let o=[],s=(u,f)=>u-f;return Object.keys(t).map(u=>parseInt(u)).sort(s).forEach(u=>{o.push(t[u])}),new Promise((u,f)=>{let v=()=>{let S=o.shift();S?S().then(v).catch(f):(t={},u())};v()})}return{add:e,execute:r}}var Ji=null,Yi=null;var Cu=null,Qi=async()=>{if(await Cu?.(),Ji){Ji();return}window.close()},vx=async t=>Yi?Yi(t):!0,Iu=(t=_u(),e=!1)=>({closeWindow(r=!1,o={type:void 0}){return vx(o)?r===!0||e?Qi():(o.returnValue=!1,e=!0,t.execute().then(Qi).catch(s=>{s.cancelClose?e=!1:(o.returnValue=!0,Qi())})):Promise.resolve()},onClose:{addBeforeClose(r){Cu=r},addPromise(r,o){t.add(r,o)}}});ro();var es=()=>window.chrome.runtime.getManifest().version_name,ts=()=>window.chrome.runtime.getManifest().name,rs=()=>window.chrome.runtime.getManifest().short_name;var po={},gx=()=>es?es():po.version,hx=()=>ts?ts():po.name,bx=()=>rs?rs():po.short_name,Mu=async()=>{try{void 0?po=await(void 0)():po=await At.getJSON("manifest.json")}catch(t){console.warn(t)}return{getAppVersion:gx,getAppName:hx,getAppShortName:bx}};var nt,Lu=()=>{let t=[],e=null,r=()=>{nt.show()},o=()=>{nt.hide(),clearTimeout(e),e=null},s=l=>{nt.message=l.message,l.options.action&&l.options.action.text&&(nt.actionMessage=l.options.action.text,nt.addEventListener("actionClicked",()=>{l.options.action.callback(),o()}));let u=()=>{nt.removeEventListener("transitionend",u),t.length>0&&s(t.shift())};r(),l.options.duration===1/0?e=null:e=setTimeout(()=>{o(),nt.addEventListener("transitionend",u)},l.options.duration)};return{async attachWrapper(l){await Promise.resolve().then(()=>(os(),$u)),nt=document.createElement("vst-ui-toast"),this.wrapperNode=l,this.wrapperNode.appendChild(nt),nt.addEventListener("doneClicked",()=>{o()})},makeToast(l,u={duration:this.LENGTH_SHORT}){this.wrapperNode||this.attachWrapper(document.body);let f={message:l,options:u};t.push(f),e===null&&s(t.shift())},hideToast(){o()},get element(){return nt},get LENGTH_SHORT(){return 1500},get LENGTH_MEDIUM(){return 5e3},get LENGTH_LONG(){return 1e4},get LENGTH_INDEFINITE(){return 1/0}}};var ns=null;var Ft=(t=0)=>new Promise(e=>setTimeout(e,t));var is={};try{is.EventTarget=new EventTarget().constructor}catch(t){(function(e,r){var o=e.create,s=e.defineProperty,l=u.prototype;f(l,"addEventListener",function(S,I,y){for(var j=r.get(this),$=j[S]||(j[S]=[]),A=0,P=$.length;A<P;A++)if($[A].listener===I)return;$.push({target:this,listener:I,options:y})}),f(l,"dispatchEvent",function(S){var I=r.get(this),y=I[S.type];return y&&(f(S,"target",this),f(S,"currentTarget",this),y.slice(0).forEach(v,S),delete S.currentTarget,delete S.target),!0}),f(l,"removeEventListener",function(S,I){for(var y=r.get(this),j=y[S]||(y[S]=[]),$=0,A=j.length;$<A;$++)if(j[$].listener===I){j.splice($,1);return}}),is.EventTarget=u;function u(){"use strict";r.set(this,o(null))}function f(S,I,y){s(S,I,{configurable:!0,writable:!0,value:y})}function v(S){var I=S.options;I&&I.once&&S.target.removeEventListener(this.type,S.listener),typeof S.listener=="function"?S.listener.call(S.target,this):S.listener.handleEvent(this)}})(Object,new WeakMap)}var zu=is.EventTarget;oo();var Pu=t=>{let e={};return e.dataSets=t.dataSets.map(r=>({id:r.id,type:r.type,name:r.name,position:r.position,columnIds:r.columnIds})),e.columns=t.columns.map(r=>({id:r.id,color:r.color,liveValue:r.liveValue,groupId:r.groupId,objectId:r.objectId,dataSetId:r.setId,symbol:r.symbol,values:r.values,updatedRows:r.updatedRows,context:r.context,dataType:r.dataType,allowAutomaticPrecision:r.allowAutomaticPrecision,automaticPrecision:r.automaticPrecision,scaleMode:r.autoscaleFromZero?"autoscale_from_zero":"",deletable:r.deletable,direction:r.direction,editable:r.editable,name:r.name,metered:r.metered,meterId:r.meterId,plotted:r.plotted,precision:{automatic:r.precision.automatic,precision:r.precision.precision,useSciNotation:r.precision.useSciNotation,useSigFigs:r.precision.useSigFigs},base:r.prefersBase,range:r.range,replaceDependent:r.replaceDependent,sensorId:r.sensorId,sensorMapId:r.sensorMapId,SMAXY:r.smaxy,struckRows:r.struckRows,type:r.type,units:r.units,wavelength:r.wavelength})),e.columnGroups=t.columnGroups.map(r=>({id:r.id,automaticPrecision:r.automaticPrecision,scaleMode:r.autoscaleFromZero?"autoscale_from_zero":"",calcCoefficients:r.calcCoefficients,calcDependentGroups:r.calcDependentGroups,calcEquation:r.calcEquation,customEq:r.customEq,calcUserEditable:r.calcUserEditable,color:r.color,deletable:r.deletable,editable:r.editable,metered:r.metered,meterId:r.meterId,name:r.name,plotted:r.plotted,precision:{automatic:r.precision.automatic,precision:r.precision.precision,useSciNotation:r.precision.useSciNotation,useSigFigs:r.precision.useSigFigs},base:r.prefersBase,range:r.range,replaceDependent:r.replaceDependent,SMAXY:r.smaxy,sensorId:r.sensorId,sensorMapId:r.sensorMapId,type:r.type,units:r.units,wavelength:r.wavelength,direction:r.direction})),e._graphInfos=t._graphInfos,e.sessionConfig=t.sessionConfig,e.experimentId=t.experimentId,e.isTriggeringEnabled=t.isTriggeringEnabled,e.meters=t.meters.map(r=>r.udmExport()),e};var Du=t=>{let e={};return e.sensors=t.sensors.map(r=>({uniqueId:r.id,autoId:r.autoId,key:r.sensorId,units:r.units,name:r.name,sensorInfo:r.sensorInfo,zeroOnCollect:r.zeroOnCollect,canZeroOnCollect:r.canZeroOnCollect,hasX4Mode:r.hasX4Mode,x4Mode:r.x4Mode,calibration:r.calibration,dataMode:r.dataMode})),e.interfaces=t.interfaces,e.ignoreSensors=t.ignoreSensors,e.softSensorIds=t.syncableSoftSensorIds,e};var Ru=t=>{let e={};return e.timeUnits=t.timeUnits,e.mode=t.mode,e.isTimeBased=t.isTimeBased,e.spectrumMode=t.spectrumMode,e.timeBasedParams=t.timeBasedParams,e.defaultTimeParams=t.defaultTimeParams,e.defaultEventParams=t.defaultEventParams,e.defaultDropCountingParams=t.defaultDropCountingParams,e.defaultFullSpectrumParams=t.defaultFullSpectrumParams,e.defaultPhotogateTimingParams=t.defaultPhotogateTimingParams,e.eventBasedParams=t.eventBasedParams,e};var wx=gt(Ir());var xx=(...t)=>t.reduce((e,r)=>(e[r]=r,e),{}),yx=xx("disconnected","connecting","connected","error");var Bk=Symbol("priv");var Nk=Symbol("priv");var Qk=Symbol("priv");var Bu=t=>{let e={};return e.usbDeviceList=t.usbDeviceList,e.bluetoothDeviceList=t.bluetoothDeviceList,e.bluetoothAvailable=t.bluetoothAvailable,e.bluetoothIsDiscovering=t.bluetoothIsDiscovering,e.bluetoothDiscoveryMode=t.bluetoothDiscoveryMode,e};var Fu=async t=>{let{dataCollection:e,dataWorld:r,deviceManager:o,sensorWorld:s}=t;return()=>{console.log("===== HOST SERVICE STATE (from host) =====");let l={dataCollection:Ru(e),dataWorld:Pu(r),deviceManager:Bu(o),sensorWorld:Du(s)};return console.dir(l),l}};var tp=class extends zu{constructor(e="DataCollection.js",r=!0,o="./sw.js"){super();this.nativeModulesScriptSource=e,this.appHasDeviceAccess=r,this.serviceWorkerLocation=o,this._updating=null,this.addEventListener("new-serviceworker-ready",()=>{this._newServiceWorkerReady=!0},{once:!0}),this._setupFrameMessageChannel=this.setupFrameMessageChannel.bind(this),window.addEventListener("message",this._setupFrameMessageChannel)}get authoringMode(){return this._authoringMode}set authoringMode(e){throw new Error(`authoringMode is read-only and cannot be changed here. The current value is ${this._authoringMode} and cannot be changed to ${e}`)}get activeServiceWorker(){return this.registration.active}get waitingServiceWorker(){return this.registration.waiting}get incomingServiceWorker(){return this.registration.installing}get allAvailableServiceworkers(){return[this.incomingServiceWorker,this.waitingServiceWorker,this.activeServiceWorker].filter(e=>e)}get priorInstalledServiceWorkerNeverUpdated(){return this.waitingServiceWorker&&this.activeServiceWorker}get newServiceWorkerReady(){return new Promise(e=>{this._newServiceWorkerReady?e(this):this.addEventListener("new-serviceworker-ready",()=>e(this),{once:!0})})}get isFirstInstallOfServiceWorker(){return this.incomingServiceWorker&&!this.activeServiceWorker}get isFirstInstallComplete(){return this.waitingServiceWorker?.state==="installed"&&!this.activeServiceWorker}get isUpdateInstallComplete(){return this.waitingServiceWorker?.state==="installed"&&this.activeServiceWorker}get updateComplete(){return new Promise(e=>this._updating!==null?e(window._updateAvailable):(this.addEventListener("update-available",()=>{e(!0)},{once:!0}),this.addEventListener("upate-not-found",()=>{e(!1)},{once:!0}),!0))}get _joinedSession(){return this.__joinedSession}set _joinedSession(e){this.__joinedSession=e,this.dispatchEvent(new Event("joined-session"))}get joinedSession(){return this._joinedSession?Promise.resolve(this.activeServiceWorker):new Promise(e=>{this.addEventListener("joined-session",()=>{e(this.activeServiceWorker)},{once:!0})})}async setupFrameMessageChannel(e){try{e.data.type==="CLIENT_FRAME_SETUP"&&(window._frameFeatures=e.data.frameFeatures,this._authoringMode=e.data.authoringMode)}catch(r){console.error(r)}e.data.type==="setup_message_channel"&&([this.hostMessageChannel]=e.ports,e.data.templateFile&&(this._templateFile=new File([e.data.templateFile],"template.gambl",{type:"application/x-gambl"})),e.data.demoMode&&(this._demoMode=e.data.demoMode),this._authoringMode=e.data.building,window.removeEventListener("message",this._setupFrameMessageChannel),delete this._setupFrameMessageChannel)}raiseEventsForIncomingMessages(){navigator.serviceWorker.addEventListener("message",({data:{type:e}})=>{this.dispatchEvent(new Event(e))})}finishInstallAndNotify(){this._updating=!0,this.raiseEventsForIncomingMessages(),this.incomingServiceWorker.addEventListener("statechange",()=>{this.isUpdateInstallComplete&&this.notifyUpdateAvailable()})}onInstallTakeControl(){!this.isFirstInstallComplete||(this._firstInstall=!0,navigator.serviceWorker.addEventListener("controllerchange",()=>{this.dispatchEvent(new Event("first-install-complete")),this.dispatchEvent(new Event("new-serviceworker-ready")),this.joinSession()},{once:!0}),this.waitingServiceWorker.postMessage({type:"FIRST_INSTALL"}))}async notifyHostInitialized(e){return this.hostMessageChannel?(this.getHostServiceState=await Fu(e),await this.newServiceWorkerReady,this.activeServiceWorker.postMessage({type:"WASM_READY"}),this.hostMessageChannel.postMessage("host_ready"),this):this}async init(){if(this.registration)return this;if(!("serviceWorker"in navigator)){let{handleCordova:e}=await Promise.resolve().then(()=>(Uu(),Vu));return e()}if(this.registration=await navigator.serviceWorker.register(this.serviceWorkerLocation,{scope:"./"}),this.allAvailableServiceworkers.forEach(e=>e.postMessage({type:window.location.search.includes("demo-mode")?"DEMO-MODE":"NOT-DEMO-MODE"})),this.registration){this.registration.addEventListener("updatefound",()=>this.finishInstallAndNotify());try{await this.registration.update(),await Ft()}catch(e){navigator.onLine?console.error(e):console.warn("Cannot perform a serviceworker update while offline. Skipping update.")}this._updating===null&&this.dispatchEvent(new Event("no-update-found")),this._updating=!1,this.priorInstalledServiceWorkerNeverUpdated&&this.notifyUpdateAvailable(),navigator.serviceWorker.addEventListener("controllerchange",()=>{this._firstInstall})}return this.isFirstInstallOfServiceWorker?this.incomingServiceWorker.addEventListener("statechange",()=>this.onInstallTakeControl()):(await navigator.serviceWorker.ready,this.dispatchEvent(new Event("new-serviceworker-ready")),this.joinSession()),this}notifyUpdateAvailable(){this.activeServiceWorker.postMessage({type:"SKIP_WAITING",claim:!0}),this._updating=!1}skipWaitingAndClaim(){this.waitingServiceWorker.postMessage({type:"SKIP_WAITING",claim:!0})}triggerNativeModulesLoad(){let e=document.querySelector("head"),r=document.createElement("script");r.src=this.nativeModulesScriptSource,e.append(r),window.frameElement?.toggleAttribute("host",!0)}async handleSessionMessages(e){let{data:r}=e,{type:o,host:s}=r;if(o==="JOINED"){if(s){if(this.triggerNativeModulesLoad(),this.appHasDeviceAccess){let{hostDevices:l}=await Promise.resolve().then(()=>(Gu(),qu));l(this.activeServiceWorker)}}else{if(window.__isSessionClient=!0,this.appHasDeviceAccess){let{proxyDeviceCalls:l}=await Promise.resolve().then(()=>(Zu(),Ku));l(this.activeServiceWorker)}window.frameElement?.toggleAttribute("host",!1)}window.wasmModuleReady?this.activeServiceWorker.postMessage({type:"WASM_READY"}):document.addEventListener("wasm-ready",()=>{this.activeServiceWorker.postMessage({type:"WASM_READY"})})}o==="WASM_READY"&&(typeof window.Module.postRun=="function"&&window.Module.postRun(),this._joinedSession=!0)}async joinSession(){}},fo=new tp;var cs=class{constructor(){this.blockResponses=!1;navigator.serviceWorker.addEventListener("message",async e=>{let{type:r,message:o}=e.data;r==="NATIVE_RESPONSE"&&(await this._hasOnmessage,this.checkResponseMessage(o),this.blockResponses||this.onmessage(o))})}checkResponseMessage(){}get _hasOnmessage(){return this.onmessage??(async()=>{for(;!this.onmessage;)await Ft(100);return!0})()}postMessage(e){fo.joinedSession.then(r=>{r.postMessage({type:"NATIVE_MESSAGE",message:e})})}},ds=class extends cs{constructor(){super();navigator.serviceWorker.addEventListener("message",e=>{let{type:r,message:o}=e.data;r==="NATIVE_MESSAGE"&&this.sendNativeMessage(o)}),window.Module&&(window.Module.onRPCServiceNotify=this.checkMessage.bind(this))}checkMessage(){let e=window.Module.vstBackendPollMsg();this._processMessage(e)}_processMessage(e){let r=e?.toJS?e.toJS():e;r&&this.onmessage&&fo.joinedSession.then(o=>{o.postMessage({type:"NATIVE_RESPONSE",message:r})})}_checkGetHostStateMessage(e){let r=!1;if(e.method==="GET_HOST_STATE"){console.assert(fo.getHostServiceState);let o={id:parseInt(e.id),jsonrpc:"2.0",result:Be({IS_HOST_SERVICE_STATE:!0},fo.getHostServiceState())};this._processMessage(o),r=!0}else e.method==="CLIENT_STATE_RESTORED"&&(r=!0);return r}sendNativeMessage(e){let r=0;this._checkGetHostStateMessage(e)||(e.method&&e.method.indexOf("vsta:")===0&&(r=1),e=new window.Module.ppVar(e),window.Module.vstBackendSendMsg(e,r),e.delete())}},Tx=t=>t.result?.IS_HOST_SERVICE_STATE,Ox=t=>!t.id,us=class extends cs{constructor(){super(...arguments);this.blockResponses=!0;this.addPending=!1;this.pending=[]}checkResponseMessage(e){this.blockResponses&&!Ox(e)?this.onmessage(e):this.addPending&&this.pending.push(e),this.blockResponses&&Tx(e)&&(this.addPending=!0,this.onmessage(e))}postMessage(e){e.method==="CLIENT_STATE_RESTORED"?(this.addPending=!1,this.blockResponses=!1,this.pending.forEach(r=>{this.onmessage(r)}),this.pending=[]):super.postMessage(e)}};async function rp(){return ns?ns():window.__isSessionClient?new us:new ds}var np=gt(op());ro();var $x="resources/featureflags.json",ps={feature:[]},go={feature:[]},ip={feature:[]},ms=np.default.name==="Chrome"&&window.chrome&&window.chrome.storage,Lx={getFF(){return new Promise(t=>{window.chrome.storage.local.get("userFeatureFlags",e=>{$i(e)?t(null):t(e.userFeatureFlags)})})},setFF(t){return new Promise(e=>{window.chrome.storage.local.set({userFeatureFlags:t},()=>{e()})})},removeFF(){return new Promise(t=>{window.chrome.storage.local.remove("userFeatureFlags",()=>{t()})})}},zx=()=>{let t={feature:[]};go&&go.feature?ps.feature.forEach(e=>{let r=go.feature.find(o=>o.name===e.name);r?t.feature.push(r):t.feature.push(e)}):t=ps,ip=Ti(t)},Px=async()=>{let t=await At.get($x),e=ms?await Lx.getFF():localStorage.getItem("userFeatureFlags");t&&(ps=JSON.parse(t)),(e&&ms||e&&!ms)&&(go=JSON.parse(e)),zx()};Px();var sp=t=>Oi(ip.feature.map(r=>[r.name,r.enabled]))[t];var Ht={PARSE_ERROR:-32700,INVALID_REQUEST:-32600,METHOD_NOT_FOUND:-32601,INVALID_PARAMS:-32602,INTERNAL_ERROR:-32603},Nx=1,ze;function ho(t){this.msgChannel=t,this.callbacks={}}ho.prototype.sendRequest=function(e,r,o){let s=o,l=r;typeof l=="function"&&(s=l,l=null);let u={id:Nx++,jsonrpc:"2.0",method:e,params:l};this.callbacks[u.id]={callback:s,method:e},ze&&ze.logRequest("FE","NM",u),this.msgChannel.postMessage(u)};ho.prototype.sendNotification=function(e,r){let o={jsonrpc:"2.0",method:e,params:r};ze&&ze.logNotification("FE","NM",o),this.msgChannel.postMessage(o)};ho.prototype._processResponse=function(e){if(String(e.jsonrpc)!=="2.0"){console.warn("Received non JSON-RPC 2.0 compliant message");return}if(typeof e.id=="number"){let{callback:r,method:o}=this.callbacks[e.id];ze&&ze.logResponse("NM","FE",o,e),typeof r=="function"?r(e):console.warn(`Unable to find callback for response.id=${e.id}`),delete this.callbacks[e.id]}else console.warn(`Received invalid response ID: ${e.id}`)};function jr(t,e){this.msgChannel=t,this.methods=e||{}}jr.prototype.addMethods=function(e,r=this){e?Object.keys(e).forEach(o=>{this.methods[o]={},this.methods[o].method=e[o],this.methods[o].context=r}):console.error("Incorrect params. Expected: methods")};jr.prototype.sendResponse=function(e,r){let o={jsonrpc:"2.0",id:e,result:r};ze&&ze.logResponse("FE","NM","",o),this.msgChannel.postMessage(o)};jr.prototype.sendErrorResponse=function(e,r,o){let s=o;typeof s!="string"&&(s="Server Error",r===Ht.PARSE_ERROR?s="Parse error":r===Ht.INVALID_REQUEST?s="Invalid Request":r===Ht.METHOD_NOT_FOUND?s="Method not found":r===Ht.INVALID_PARAMS?s="Invalid Parameter(s)":r===Ht.INTERNAL_ERROR&&(s="Internal Error"));let l={jsonrpc:"2.0",id:e,error:{code:r,message:s}};typeof e=="number"?(ze&&ze.logErrorResponse("NM","FE","",l),this.msgChannel.postMessage(l)):console.warn("RPC Error (response to notification)")};jr.prototype._processRequest=function(e){if(String(e.jsonrpc)!=="2.0"){console.warn("Received non JSON-RPC 2.0 compliant message");return}try{if(typeof e.method=="string"){let r=this.methods[e.method];if(!r)throw new Error(`handler not found for method ${e.method}`);let{method:o}=r;typeof o=="function"?(ze&&(e.id?ze.logRequest("NM","FE",e):ze.logNotification("NM","FE",e)),o.call(r.context,this,e)):this.sendErrorResponse(e.id,Ht.METHOD_NOT_FOUND,`Method '${e.method}' not found`)}else this.sendErrorResponse(null,Ht.INVALID_REQUEST)}catch(r){console.error(`rpc failed when processing request: ${e.method}`),console.error(r)}};function it(t,e){this.channel=t,this.methods=e||{},sp("ff-nm-rpc-logging")&&Promise.resolve().then(()=>(mp(),pp)).then(({RPCLogger:r})=>{ze=new r}).catch(r=>{console.error(r)}),this.origin=window.location.origin,window.location.protocol==="chrome-extension:"&&(this.origin="*"),this.server=new jr(this),this.client=new ho(this)}it.prototype.setChannel=function(e){this.channel=e};it.prototype.registerMethods=function(e,r){e?this.server.addMethods(e,r):console.error("Inncorrect paramaters. Expected: methods")};it.prototype.getClient=function(){return this.client};it.prototype.getServer=function(){return this.server};it.prototype.postMessage=function(e){this.origin?this.channel.postMessage(e,this.origin):this.channel.postMessage(e)};it.prototype.processMessage=function(e){e.method?this.server._processRequest(e):this.client._processResponse(e)};function fp(t){let e=t.error.message||"RPC Response Error";Error.call(this,e),this.response=t,this.error=t.error,this.message=e}fp.prototype=Object.create(Error.prototype);it.prototype.sendRequest=function(e,r){let{client:o}=this,s=r;return new Promise((l,u)=>{typeof s=="undefined"&&(s=null),o.sendRequest(e,s,f=>{f.error?u(new fp(f)):l(f.result)})})};it.prototype.sendNotification=function(...e){let{client:r}=this;r.sendNotification(e)};it.prototype.sendResponse=function(...e){let{server:r}=this;r.sendResponse(e)};it.prototype.getLogString=()=>ze?ze.getLogString():"";var En={RPCErrorCode:Ht,RPCMessageChannel:it,RPCMessageClient:ho,RPCMessageServer:jr};var{RPCMessageChannel:Wx}=En,_n=!1,He={startup:{progress:null,resolve:null,reject:null,module:null,listener:null}};function Vx(t){let e=null;return t&&(t instanceof ArrayBuffer||t.buffer&&t.buffer instanceof ArrayBuffer)&&(e=t.buffer?t.buffer:t),e}function vp(t){let e=t;return t&&typeof t=="object"&&!Array.isArray(t)&&(e={},Object.keys(t).forEach(r=>{let o=t[r];o=Vx(o)||vp(o),e[r]=o})),e}var gp=class extends Wx{postMessage(e){let r=typeof e!="string"?vp(e):e;super.postMessage(r)}};function Ux(t){_n&&(console.log("--- Module Started Loading ---"),console.dir(t))}function qx(t){let e="--- Module Progress: ",r,o;t.lengthComputable&&(r=t.total,o=t.loaded,He.startup.progress(o/r),e+=`${o/(r*100)}%`),_n&&console.log(e)}function Gx(t){_n&&(console.log("--- Module Did Load"),console.dir(t));let e=He.startup.module;He.rpc=new gp(e),He.rpc.origin=null,e.addEventListener("message",r=>He.rpc.processMessage(r.data)),He.startup.resolve({rpc:He.rpc,listener:He.startup.listener})}function Kx(t){_n&&(console.log("--- Module LoadEnd:"),console.dir(t))}function Zx(t){console.error("--- Module Error:"),console.error(t),He.startup.reject({message:"Native Client Startup Error",event:t})}function Xx(t){console.error("--- Module Abort:"),console.error(t),He.startup.reject({message:"Native Client Startup Aborted",event:t})}function Jx(t){console.error("--- Module Crash:"),console.error(t)}function Yx(t){let e=document.createElement("div");e.style.width="0",e.style.height="0",e.addEventListener("loadstart",Ux,!0),e.addEventListener("progress",qx,!0),e.addEventListener("load",Gx,!0),e.addEventListener("loadend",Kx,!0),e.addEventListener("error",Zx,!0),e.addEventListener("abort",Xx,!0),e.addEventListener("crash",Jx,!0),t=Oa(Be({},t),{width:0,height:0});let r=document.createElement("embed");return r.setAttribute("width",t.width),r.setAttribute("height",t.height),r.setAttribute("src",t.src),r.setAttribute("type",t.type),e.appendChild(r),{wrapper:e,module:r}}function Qx(t,e){let r=Yx({src:"resources/DataCollection.nmf",type:"application/x-pnacl"});He.startup.resolve=t,He.startup.reject=e,He.startup.module=r.module,He.startup.listener=r.wrapper,document.body.appendChild(r.wrapper)}var gs=async(t,e)=>(He.startup.progress=r=>{console.log(`load progress: ${parseInt(r*100)}%`),e(r*100)},new Promise((r,o)=>{Qx(l=>{let u={type:"query-background-page-device-server-ports"};chrome.runtime.sendMessage(u,f=>{f.type===u.type&&(f.error?o(f.error):(l.ports=f.ports,r(l)))})},o)}));var{RPCMessageChannel:hp}=En,e2=t=>{let e=[],r=null;function o(s){let l={data:s};r&&r.processMessage(s),e.forEach(u=>{u(l)})}return t.onmessage=o,r=new hp({postMessage:s=>{t.postMessage(s)},addEventListener:(s,l)=>{s==="message"&&e.push(l)}}),Promise.resolve({rpc:r,listener:document.createElement("embed")})},bp=async(t,e)=>gs?gs(hp,e):e2(t);function hs(t){window.chrome.power.requestKeepAwake(t)}function bs(){window.chrome.power.releaseKeepAwake()}var Ar=null;async function t2(t){if(hs)return hs(t);try{Ar=await navigator.wakeLock.requestWakeLock("screen"),Ar.addEventListener("release",()=>{Ar=null})}catch(e){console.warn(e.message)}return!0}function r2(){return bs?bs():(Ar&&Ar.release().then(()=>{Ar=null}),!0)}var xp=()=>({requestWakeLock:t2,releaseWakeLock:r2});var xs=!1;var o2=async()=>xs?xs():{success:!0},yp=()=>({requestBluetooth:o2});var ys=gt(Zi()),ws=null,wp=null;function Sp(){ws&&ws.disengage()}function n2(){return wp}function i2(t){return ys.default.maintain.disabled({filter:t})}function s2(t){Sp(),ws=ys.default.maintain.disabled({filter:t}),wp=t}var kp={disengage:Sp,getFilter:n2,maintainDisabled:i2,disable:s2};function Ep(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;let r=document.implementation.createHTMLDocument(),o=r.createElement("base"),s=r.createElement("a");return r.head.appendChild(o),r.body.appendChild(s),e&&(o.href=e),s.href=t,s.href}var _p=(()=>{let t=0,e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function Ve(t){let e=[];for(let r=0,o=t.length;r<o;r++)e.push(t[r]);return e}function Cn(t,e){let o=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return o?parseFloat(o.replace("px","")):0}function a2(t){let e=Cn(t,"border-left-width"),r=Cn(t,"border-right-width");return t.clientWidth+e+r}function l2(t){let e=Cn(t,"border-top-width"),r=Cn(t,"border-bottom-width");return t.clientHeight+e+r}function Ss(t,e={}){let r=e.width||a2(t),o=e.height||l2(t);return{width:r,height:o}}function Cp(){let t,e;try{e=process}catch(o){}let r=e&&e.env?e.env.devicePixelRatio:null;return r&&(t=parseInt(r,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}var Ue=16384;function Ip(t){(t.width>Ue||t.height>Ue)&&(t.width>Ue&&t.height>Ue?t.width>t.height?(t.height*=Ue/t.width,t.width=Ue):(t.width*=Ue/t.height,t.height=Ue):t.width>Ue?(t.height*=Ue/t.width,t.width=Ue):(t.width*=Ue/t.height,t.height=Ue))}function Mp(t,e={}){return t.toBlob?new Promise(r=>{t.toBlob(r,e.type?e.type:"image/png",e.quality?e.quality:1)}):new Promise(r=>{let o=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),s=o.length,l=new Uint8Array(s);for(let u=0;u<s;u+=1)l[u]=o.charCodeAt(u);r(new Blob([l],{type:e.type?e.type:"image/png"}))})}function Tr(t){return new Promise((e,r)=>{let o=new Image;o.decode=()=>e(o),o.onload=()=>e(o),o.onerror=r,o.crossOrigin="anonymous",o.decoding="async",o.src=t})}async function c2(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function jp(t,e,r){let o="http://www.w3.org/2000/svg",s=document.createElementNS(o,"svg"),l=document.createElementNS(o,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${r}`),s.setAttribute("viewBox",`0 0 ${e} ${r}`),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("externalResourcesRequired","true"),s.appendChild(l),l.appendChild(t),c2(s)}var Pe=(t,e)=>{if(t instanceof e)return!0;let r=Object.getPrototypeOf(t);return r===null?!1:r.constructor.name===e.name||Pe(r,e)};function d2(t){let e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function u2(t){return Ve(t).map(e=>{let r=t.getPropertyValue(e),o=t.getPropertyPriority(e);return`${e}: ${r}${o?" !important":""};`}).join(" ")}function p2(t,e,r){let o=`.${t}:${e}`,s=r.cssText?d2(r):u2(r);return document.createTextNode(`${o}{${s}}`)}function Ap(t,e,r){let o=window.getComputedStyle(t,r),s=o.getPropertyValue("content");if(s===""||s==="none")return;let l=_p();try{e.className=`${e.className} ${l}`}catch(f){return}let u=document.createElement("style");u.appendChild(p2(l,r,o)),e.appendChild(u)}function Tp(t,e){Ap(t,e,":before"),Ap(t,e,":after")}var Op="application/font-woff",$p="image/jpeg",m2={woff:Op,woff2:Op,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:$p,jpeg:$p,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function f2(t){let e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function Or(t){let e=f2(t).toLowerCase();return m2[e]||""}function v2(t){return t.split(/,/)[1]}function bo(t){return t.search(/^(data:)/)!==-1}function ks(t,e){return`data:${e};base64,${t}`}async function Es(t,e,r){let o=await fetch(t,e);if(o.status===404)throw new Error(`Resource "${o.url}" not found`);let s=await o.blob();return new Promise((l,u)=>{let f=new FileReader;f.onerror=u,f.onloadend=()=>{try{l(r({res:o,result:f.result}))}catch(v){u(v)}},f.readAsDataURL(s)})}var _s={};function g2(t,e,r){let o=t.replace(/\?.*/,"");return r&&(o=t),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),e?`[${e}]${o}`:o}async function $r(t,e,r){let o=g2(t,e,r.includeQueryParams);if(_s[o]!=null)return _s[o];r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let s;try{let l=await Es(t,r.fetchRequestInit,({res:u,result:f})=>(e||(e=u.headers.get("Content-Type")||""),v2(f)));s=ks(l,e)}catch(l){s=r.imagePlaceholder||"";let u=`Failed to fetch resource: ${t}`;l&&(u=typeof l=="string"?l:l.message),u&&console.warn(u)}return _s[o]=s,s}async function h2(t){let e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):Tr(e)}async function b2(t,e){if(t.currentSrc){let l=document.createElement("canvas"),u=l.getContext("2d");l.width=t.clientWidth,l.height=t.clientHeight,u==null||u.drawImage(t,0,0,l.width,l.height);let f=l.toDataURL();return Tr(f)}let r=t.poster,o=Or(r),s=await $r(r,o,e);return Tr(s)}async function x2(t){var e;try{if((e=t==null?void 0:t.contentDocument)===null||e===void 0?void 0:e.body)return await xo(t.contentDocument.body,{},!0)}catch(r){}return t.cloneNode(!1)}async function y2(t,e){return Pe(t,HTMLCanvasElement)?h2(t):Pe(t,HTMLVideoElement)?b2(t,e):Pe(t,HTMLIFrameElement)?x2(t):t.cloneNode(!1)}var w2=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function S2(t,e,r){var o,s;let l=[];return w2(t)&&t.assignedNodes?l=Ve(t.assignedNodes()):Pe(t,HTMLIFrameElement)&&((o=t.contentDocument)===null||o===void 0?void 0:o.body)?l=Ve(t.contentDocument.body.childNodes):l=Ve(((s=t.shadowRoot)!==null&&s!==void 0?s:t).childNodes),l.length===0||Pe(t,HTMLVideoElement)||await l.reduce((u,f)=>u.then(()=>xo(f,r)).then(v=>{v&&e.appendChild(v)}),Promise.resolve()),e}function k2(t,e){let r=e.style;if(!r)return;let o=window.getComputedStyle(t);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):Ve(o).forEach(s=>{let l=o.getPropertyValue(s);s==="font-size"&&l.endsWith("px")&&(l=`${Math.floor(parseFloat(l.substring(0,l.length-2)))-.1}px`),Pe(t,HTMLIFrameElement)&&s==="display"&&l==="inline"&&(l="block"),s==="d"&&e.getAttribute("d")&&(l=`path(${e.getAttribute("d")})`),r.setProperty(s,l,o.getPropertyPriority(s))})}function E2(t,e){Pe(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),Pe(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function _2(t,e){if(Pe(t,HTMLSelectElement)){let r=e,o=Array.from(r.children).find(s=>t.value===s.getAttribute("value"));o&&o.setAttribute("selected","")}}function C2(t,e){return Pe(e,Element)&&(k2(t,e),Tp(t,e),E2(t,e),_2(t,e)),e}async function I2(t,e){let r=t.querySelectorAll?t.querySelectorAll("use"):[];if(r.length===0)return t;let o={};for(let l=0;l<r.length;l++){let f=r[l].getAttribute("xlink:href");if(f){let v=t.querySelector(f),S=document.querySelector(f);!v&&S&&!o[f]&&(o[f]=await xo(S,e,!0))}}let s=Object.values(o);if(s.length){let l="http://www.w3.org/1999/xhtml",u=document.createElementNS(l,"svg");u.setAttribute("xmlns",l),u.style.position="absolute",u.style.width="0",u.style.height="0",u.style.overflow="hidden",u.style.display="none";let f=document.createElementNS(l,"defs");u.appendChild(f);for(let v=0;v<s.length;v++)f.appendChild(s[v]);t.appendChild(u)}return t}async function xo(t,e,r){return!r&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(o=>y2(o,e)).then(o=>S2(t,o,e)).then(o=>C2(t,o)).then(o=>I2(o,e))}var Lp=/url\((['"]?)([^'"]+?)\1\)/g,M2=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,j2=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function A2(t){let e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function T2(t){let e=[];return t.replace(Lp,(r,o,s)=>(e.push(s),r)),e.filter(r=>!bo(r))}async function O2(t,e,r,o,s){try{let l=r?Ep(e,r):e,u=Or(e),f;if(s){let v=await s(l);f=ks(v,u)}else f=await $r(l,u,o);return t.replace(A2(e),`$1${f}$3`)}catch(l){}return t}function $2(t,{preferredFontFormat:e}){return e?t.replace(j2,r=>{for(;;){let[o,,s]=M2.exec(r)||[];if(!s)return"";if(s===e)return`src: ${o};`}}):t}function Cs(t){return t.search(Lp)!==-1}async function In(t,e,r){if(!Cs(t))return t;let o=$2(t,r);return T2(o).reduce((l,u)=>l.then(f=>O2(f,u,e,r)),Promise.resolve(o))}async function Mn(t,e,r){var o;let s=(o=e.style)===null||o===void 0?void 0:o.getPropertyValue(t);if(s){let l=await In(s,null,r);return e.style.setProperty(t,l,e.style.getPropertyPriority(t)),!0}return!1}async function L2(t,e){await Mn("background",t,e)||await Mn("background-image",t,e),await Mn("mask",t,e)||await Mn("mask-image",t,e)}async function z2(t,e){let r=Pe(t,HTMLImageElement);if(!(r&&!bo(t.src))&&!(Pe(t,SVGImageElement)&&!bo(t.href.baseVal)))return;let o=r?t.src:t.href.baseVal,s=await $r(o,Or(o),e);await new Promise((l,u)=>{t.onload=l,t.onerror=u;let f=t;f.decode&&(f.decode=l),f.loading==="lazy"&&(f.loading="eager"),r?(t.srcset="",t.src=s):t.href.baseVal=s})}async function P2(t,e){let o=Ve(t.childNodes).map(s=>Is(s,e));await Promise.all(o).then(()=>t)}async function Is(t,e){Pe(t,Element)&&(await L2(t,e),await z2(t,e),await P2(t,e))}function zp(t,e){let{style:r}=t;e.backgroundColor&&(r.backgroundColor=e.backgroundColor),e.width&&(r.width=`${e.width}px`),e.height&&(r.height=`${e.height}px`);let o=e.style;return o!=null&&Object.keys(o).forEach(s=>{r[s]=o[s]}),t}var Pp={};async function Dp(t){let e=Pp[t];if(e!=null)return e;let o=await(await fetch(t)).text();return e={url:t,cssText:o},Pp[t]=e,e}async function Rp(t,e){let r=t.cssText,o=/url\(["']?([^"')]+)["']?\)/g,l=(r.match(/url\([^)]+\)/g)||[]).map(async u=>{let f=u.replace(o,"$1");return f.startsWith("https://")||(f=new URL(f,t.url).href),Es(f,e.fetchRequestInit,({result:v})=>(r=r.replace(u,`url(${v})`),[u,v]))});return Promise.all(l).then(()=>r)}function Bp(t){if(t==null)return[];let e=[],r=/(\/\*[\s\S]*?\*\/)/gi,o=t.replace(r,""),s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let v=s.exec(o);if(v===null)break;e.push(v[0])}o=o.replace(s,"");let l=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,u="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",f=new RegExp(u,"gi");for(;;){let v=l.exec(o);if(v===null){if(v=f.exec(o),v===null)break;l.lastIndex=f.lastIndex}else f.lastIndex=l.lastIndex;e.push(v[0])}return e}async function D2(t,e){let r=[],o=[];return t.forEach(s=>{if("cssRules"in s)try{Ve(s.cssRules||[]).forEach((l,u)=>{if(l.type===CSSRule.IMPORT_RULE){let f=u+1,v=l.href,S=Dp(v).then(I=>Rp(I,e)).then(I=>Bp(I).forEach(y=>{try{s.insertRule(y,y.startsWith("@import")?f+=1:s.cssRules.length)}catch(j){console.error("Error inserting rule from remote css",{rule:y,error:j})}})).catch(I=>{console.error("Error loading remote css",I.toString())});o.push(S)}})}catch(l){let u=t.find(f=>f.href==null)||document.styleSheets[0];s.href!=null&&o.push(Dp(s.href).then(f=>Rp(f,e)).then(f=>Bp(f).forEach(v=>{u.insertRule(v,s.cssRules.length)})).catch(f=>{console.error("Error loading remote stylesheet",f)})),console.error("Error inlining remote css file",l)}}),Promise.all(o).then(()=>(t.forEach(s=>{if("cssRules"in s)try{Ve(s.cssRules||[]).forEach(l=>{r.push(l)})}catch(l){console.error(`Error while reading CSS rules from ${s.href}`,l)}}),r))}function R2(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Cs(e.style.getPropertyValue("src")))}async function B2(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");let r=Ve(t.ownerDocument.styleSheets),o=await D2(r,e);return R2(o)}async function Fp(t,e){let r=await B2(t,e);return(await Promise.all(r.map(s=>{let l=s.parentStyleSheet?s.parentStyleSheet.href:null;return In(s.cssText,l,e)}))).join(`
`)}async function Hp(t,e){let r=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await Fp(t,e);if(r){let o=document.createElement("style"),s=document.createTextNode(r);o.appendChild(s),t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o)}}async function F2(t,e={}){let{width:r,height:o}=Ss(t,e),s=await xo(t,e,!0);return await Hp(s,e),await Is(s,e),zp(s,e),await jp(s,r,o)}async function H2(t,e={}){let{width:r,height:o}=Ss(t,e),s=await F2(t,e),l=await Tr(s),u=document.createElement("canvas"),f=u.getContext("2d"),v=e.pixelRatio||Cp(),S=e.canvasWidth||r,I=e.canvasHeight||o;return u.width=S*v,u.height=I*v,e.skipAutoScale||Ip(u),u.style.width=`${S}`,u.style.height=`${I}`,e.backgroundColor&&(f.fillStyle=e.backgroundColor,f.fillRect(0,0,u.width,u.height)),f.drawImage(l,0,0,u.width,u.height),u}async function Np(t,e={}){let r=await H2(t,e);return await Mp(r)}var Ms=null;var Wp=t=>{if(Ms)return Ms(t);let e=o=>!o.hidden,r=[...t.querySelectorAll(".app-graph")].filter(o=>!o.hidden);return t.classList.contains("app-graph")&&r.push(t),Np(t,{filter:e})};var js=null;var Vp=async()=>{try{if(js)await js();else return!0}catch(t){console.warn(t)}return!0};var As=t=>{window.chrome.runtime.sendMessage(t)};var N2=(t,e)=>{As?As(t,e):console.log(`no background page to send msg: ${t}`)},Up=()=>({sendMessage:N2});var W2=[],V2=t=>{W2.forEach(e=>e(t))};var qp=async()=>{await Vp();let t=await Promise.all([Iu(),Mu(),rp(),Up()]),e=t[0],r=t[1],o=t[2],s=t[3],l=await bp(o,V2),u=xp(),f=Lu(),v=Eu(),S=wu.create(),I=yp(),{rpc:y}=l,j=new qi({api:new Gi(y),deviceServerPorts:l.ports||null,appManifest:r}),$=new Hi(f,S);return{appLifecycle:e,appManifest:r,toast:f,accessibility:v,firmwareUpdater:j,popoverManager:$,ally:kp,capture:Wp,permissions:I,power:u,bgPageComm:s}};var Kp=class extends ie{static get properties(){return{deviceList:{type:Array},updatingDevice:{type:Boolean},updateError:{type:String},$services:{type:Object}}}constructor(){super();this.deviceList=[],this.updatingDevice=!1,this.updateError="",this.eventBinder=new mr,this.pollDevices=0}async firstUpdated(){this.$services=await qp();let{firmwareUpdater:e,popoverManager:r,appLifecycle:o}=this.$services;this.eventBinder.bindListeners({source:e,target:this,eventMap:{"stage-begin":"onFirmwareUpdaterStageBegin","stage-update":"onFirmwareUpdaterStageUpdate","stage-end":"onFirmwareUpdaterStageEnd",error:"onFirmwareUpdaterError"}});let s=this.shadowRoot.querySelector("#popover_wrapper");r.attachWrapper(s);let l=this.shadowRoot.querySelector("#toast_wrapper");this.$services.toast.attachWrapper(l),await e.init(),this.enableDevicePolling();let u=()=>this.updatingDevice?new Promise((f,v)=>{this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:he("Firmware Update in Progress"),choiceRequired:!0,content:he("Closing the application now may make your device permanently unusable."),actions:[{id:"force_close",message:he("Force Close"),variant:"danger",onClick:async()=>{v({cancelClose:!0}),this.dispatchEvent(wi("message_box"))}},{id:"cancel",message:he("Continue Update"),onClick:async()=>{f(),this.dispatchEvent(wi("message_box"))}}]}}}))}):Promise.resolve();o.onClose.addPromise(0,u)}connectedCallback(){if(super.connectedCallback(),this.eventBinder.bind(document,"close-app",this._exit.bind(this)),this.eventBinder.bind(window,"beforeunload",this._exit.bind(this)),Gp.default.name==="Chrome"){let e=document.createElement("vst-ui-chromebar"),r=document.querySelector("#app");document.body.insertBefore(e,r),document.body.style.setProperty("--chrome-menubar-height","32px")}}disconnectedCallback(){super.disconnectedCallback(),this.eventBinder.unbindAll()}stageBegin(e,r){if(this.updateError=null,this.disableButtons(!0),r==="device-updater"){let o=this._getDeviceByName(e);o.firmwareStatus={multiplier:1,totalStages:1,isUpdating:!0},o.ble.hasUpdate&&o.daq.hasUpdate&&(o.firmwareStatus.totalStages=2,o.firmwareStatus.multiplier=.5),o.updateProgress=1,this.requestUpdate()}}stageUpdate(e,r,o){let s=this._getDeviceByName(e),l=o*s.firmwareStatus.multiplier;s.firmwareStatus.totalStages===2&&r==="ble-updater"&&(l+=50),s.updateProgress=Math.max(0,Math.floor(l)-1),this.requestUpdate()}stageEnd(e,r,o){let s=this._getDeviceByName(e);o&&r==="daq"?s.daq.hasUpdate=!1:o&&r==="ble"?s.ble.hasUpdate=!1:o&&r==="device-updater"&&(s.firmwareStatus={multiplier:1,totalStages:1,isUpdating:!1},this.requestUpdate(),this.disableButtons(!1))}showError(e){this.updateError=e,this.disableButtons(!1)}hasUpdate(e){let r=this._getDeviceByName(e);return r&&(r.ble.hasUpdate||r.daq.hasUpdate)}disableButtons(e){this.shadowRoot.querySelectorAll("button").forEach(o=>{o.disabled=e})}_exit(e){let{appLifecycle:r}=this.$services;r.closeWindow(!1,e)}hasDevices(){return this.deviceList.length>0}numberOfDevicesToUpdate(){let e=0;return this.deviceList.forEach(r=>{(r.ble.hasUpdate||r.daq.hasUpdate)&&(e+=1)}),e}minutesRemaining(){return`${this.numberOfDevicesToUpdate()*2} ${this.getText("minutes")}`}_getDeviceByName(e){return this.deviceList.find(r=>r.name===e)}async updateFirmware(e){let{firmwareUpdater:r,power:o}=this.$services,s=this.deviceList[parseInt(e.target.dataset.deviceIndex)];console.assert(s),this.updatingDevice=!0,this.disableDevicePolling(),o.requestWakeLock("system");let l=f=>{f||this.showError(he("The firmware update failed.")),this.updatingDevice=!1,s.ble.hasUpdate=!1,s.daq.hasUpdate=!1,this.enableDevicePolling(),o.releaseWakeLock(),this.requestUpdate()},u=!1;try{await r.runUpdater(s.name),u=!0}catch(f){console.error(f)}l(u)}async returnToHostApp(){let{appLifecycle:e,bgPageComm:r}=this.$services,o=async()=>r.sendMessage("launch-ga",{async:!1});this.disableDevicePolling(),e.onClose.addPromise(Number.MAX_SAFE_INTEGER,o),document.dispatchEvent(new CustomEvent("close-app",{bubbles:!0,composed:!0}))}onFirmwareUpdaterStageBegin(e){let{deviceId:r,stage:o}=e;this.stageBegin(r,o)}onFirmwareUpdaterStageUpdate(e){let{deviceId:r,stage:o,percent:s}=e;this.stageUpdate(r,o,s)}onFirmwareUpdaterStageEnd(e){let{deviceId:r,stage:o,success:s}=e;this.stageEnd(r,o,s)}onFirmwareUpdaterError(e){let{error:r}=e;this.showError(r),console.error(r)}enableDevicePolling(){clearTimeout(this.pollDevices);let{firmwareUpdater:e}=this.$services,r=()=>{e.getDevices().then(o=>{let s=o.filter(l=>l.name.startsWith("GDX-TMP 0F3")?null:l);s.sort(l=>l.ble.hasUpdate||l.daq.hasUpdate?-1:1),this.deviceList=s,this.pollDevices=setTimeout(r,2e3)}).catch(o=>{console.error(o),this.pollDevices=setTimeout(r,2e3)})};r()}disableDevicePolling(){clearTimeout(this.pollDevices),this.pollDevices=0}static get styles(){return[xe,Jl,nc]}render(){return K`
      <div class="app">
        <header class="masthead">
          <vst-go-direct-firmware-logo
            class="masthead__logo"
            logo-color="#fff"
          ></vst-go-direct-firmware-logo>
          <div class="masthead__tagline">${he("Firmware Updater")}</div>
        </header>

        <main class="main">
          <div class="wrapper">
            ${this.hasDevices()?K`
                  ${this.updatingDevice?K`
                        <p class="caption" variant="error" margin="block-xs">
                          ${he("This update takes approximately two minutes.")}
                        </p>
                        <p class="caption" variant="error" margin="block-xs">
                          ${he("Important: Do not disconnect your sensor during the update. Disconnection may damage the sensor.")}
                        </p>
                      `:""}

                  <ul class="device-list">
                    ${this.deviceList.map((e,r)=>K`
                        <li class="device-list__item">
                          <div class="device-list__meta">
                            <div class="device-list__name">${e.name}</div>
                            <div class="device-list__firmware-wrapper">
                              <div class="device-list__firmware-primary">
                                ${he("Primary")}: ${e.daq.deviceVersion}
                              </div>
                              <div class="device-list__firmware-secondary">
                                ${he("Secondary")}: ${e.ble.deviceVersion}
                              </div>
                            </div>
                          </div>
                          <div class="device-list__action">
                            ${e.firmwareStatus&&e.firmwareStatus.isUpdating?K`
                                  <div class="device-list__update-progress progress">
                                    <div class="progress__percent">${e.updateProgress}%</div>
                                    <progress
                                      class="progress__bar"
                                      max="100"
                                      .value="${e.updateProgress}"
                                    ></progress>
                                  </div>
                                `:K`
                                  <button
                                    class="device-list__action-btn"
                                    @click="${this.updateFirmware}"
                                    ?hidden="${!this.hasUpdate(e.name)}"
                                    data-device-index="${r}"
                                    type="button"
                                  >
                                    ${he("Update Firmware")}
                                  </button>
                                  <div ?hidden="${this.hasUpdate(e.name)}">
                                    ${he("Up to date")}
                                  </div>
                                `}
                          </div>
                        </li>
                      `)}
                  </ul>
                `:K`<h2>${he("Plug in a Go Direct device via USB to update firmware.")}</h2>`}
            ${this.updateError?K`<p class="caption" variant="error">${this.updateError}</p>`:""}
          </div>
        </main>

        <footer class="footer">
          <button class="return-to-ga" @click="${this.returnToHostApp}">
            ${he("Return to Graphical Analysis")}
          </button>
        </footer>
      </div>

      <div class="popover-wrapper" id="popover_wrapper"></div>
      <div id="toast_wrapper"></div>
      <slot name="tooltip_wrapper"></slot>
    `}};customElements.define("vst-firmware-updater-app",Kp);G();var Zp=class extends ie{constructor(){super()}render(){return K`
      <!-- Inlining the SVG for now to prevent the delay / height jump of an image request -rl -->
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 256 44"
        style="enable-background:new 0 0 256 44;"
        xml:space="preserve"
      >
        <style type="text/css">
          .st0 {
            fill: #ffffff;
          }
        </style>
        <g>
          <g>
            <path
              class="st0"
              d="M244.7,5h-1.9v-1h5v1h-1.9v5.2h-1.1V5z M249.2,3.9h1.8l1.6,4.2l1.6-4.2h1.8v6.2h-1.1V5.4h0l-1.7,4.8h-0.9
          l-1.7-4.8h0v4.8h-1.1V3.9z"
            />
          </g>
          <path
            class="st0"
            d="M27.7,19.9c-0.8-2.6-3.2-4.5-6-4.5c-3.5,0-6.3,2.8-6.3,6.3c0,3.5,2.8,6.3,6.3,6.3c2.9,0,5.3-1.9,6-4.5h12
          c-0.9,9.2-8.6,16.3-18,16.3c-10,0-18.1-8.1-18.1-18.1S11.7,3.6,21.7,3.6c4.2,0,8.1,1.4,11.3,3.9l-3.7,3.7l13.1,4.4L38,2.5L35.5,5
          c-3.8-3.2-8.7-5-13.8-5C9.7,0,0,9.7,0,21.7s9.7,21.7,21.7,21.7s21.7-9.7,21.7-21.7v-1.8H27.7z M21.7,24.5c-1.5,0-2.8-1.2-2.8-2.8
          c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.2,2.8,2.8C24.5,23.2,23.2,24.5,21.7,24.5z"
          />
          <path
            class="st0"
            d="M84.2,11.2c-2.4-1.6-5-2.4-9.5-2.4c-7.9,0-13.2,5.8-13.2,13.5c0,8.1,5.8,13.5,13,13.5c3.4,0,4.3-0.3,5.5-0.6
          V26l-7.2-5.3h12.2v17.9c-1.9,0.6-5.1,1.5-10.5,1.5c-10.9,0-18.1-7-18.1-17.9c0-10.6,7.7-17.6,18.2-17.6c5,0,7.2,0.7,10.1,1.7
          L84.2,11.2z"
          />
          <path
            class="st0"
            d="M101,13.8c7.6,0,12.8,5.5,12.8,13.2c0,7.2-5.2,13.2-12.8,13.2c-7.6,0-12.8-6-12.8-13.2
          C88.2,19.3,93.3,13.8,101,13.8z M101,36.4c5.4,0,7.8-4.9,7.8-9.4c0-4.8-2.9-9.4-7.8-9.4c-5,0-7.9,4.6-7.9,9.4
          C93.1,31.4,95.5,36.4,101,36.4z"
          />
          <path
            class="st0"
            d="M125.6,5.1h10.2c10.2,0,18.3,6.3,18.3,16.9c0,11.5-7,17.5-18.3,17.5h-10.2V5.1z M130.5,35.2h5.2
          c8.5,0,13.2-4.1,13.2-13c0-8-5.5-12.8-12.6-12.8h-5.8V35.2z"
          />
          <rect x="158.3" y="14.4" class="st0" width="4.6" height="25.1" />
          <path
            class="st0"
            d="M168.4,14.4h4.3v3.9h0.1c1.2-2.6,3.9-4.5,6.6-4.5c1.4,0,2.1,0.1,3.1,0.3v4.1c-0.8-0.3-1.8-0.4-2.6-0.4
          c-4.1,0-6.9,3.9-6.9,10.3v11.4h-4.6V14.4z"
          />
          <path
            class="st0"
            d="M203.4,38.5c-1.8,0.6-3.8,1.6-7.9,1.6c-8.9,0-13-5.4-13-13.6c0-7.4,4.7-12.7,11.8-12.7
          c8.4,0,11.1,6.1,11.1,14.2h-17.9c0,5,3.9,8.4,8.3,8.4c3.1,0,6.6-1.6,7.7-2.5V38.5z M200.4,24.5c0-3.8-2.3-7-6.3-7
          c-4.5,0-6.4,3.7-6.8,7H200.4z"
          />
          <path
            class="st0"
            d="M225.4,18.6c-1.8-0.7-3.5-1.1-5-1.1c-5.2,0-8.1,4.6-8.1,9.4c0,4.5,2.4,9.4,8.4,9.4c1.6,0,3.5-0.5,5-1.4
          l0.3,4.1c-1.9,0.9-4.1,1-5.8,1c-7.6,0-12.8-6-12.8-13.2c0-7.6,5.1-13.2,12.8-13.2c1.9,0,4.3,0.4,5.6,1L225.4,18.6z"
          />
          <path
            class="st0"
            d="M245.2,18.1h-6.7v13.7c0,2.9,1.8,4.5,3.9,4.5c1.4,0,2.5-0.4,3.2-0.9v3.9c-1,0.3-2.5,0.7-3.9,0.7
          c-4.8,0-7.7-2.3-7.7-7.3V18.1h-5.7v-3.7h5.7V8.6l4.6-1.5v7.3h11.2L245.2,18.1z"
          />
          <circle class="st0" cx="160.6" cy="6.1" r="2.6" />
        </g>
      </svg>
    `}};customElements.define("vst-go-direct-firmware-logo",Zp);G();rt();G();fr();var Xp=h`
  .body-content {
    width: 30rem;
    max-inline-size: 100%;
    margin-block-end: var(--vst-space-l);
  }

  .btn-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  .btn {
    margin: 0 var(--vst-space-xs) 0 0;
  }
  .btn:last-child {
    margin-inline-end: 0;
  }

  ${ht(h`.btn-secondary`,"secondary")}
  ${ht(h`.btn-tertiary`,"tertiary")}
  ${ht(h`.btn-error`,"error")}

  .btn-left {
    margin-inline-end: auto;
  }

  .margin-inline-end-0 {
    margin-inline-end: 0;
  }
`;var U2=t=>`btn ${t.style}`,Jp=class extends ie{static get properties(){return{view:{type:Object}}}constructor(){super();this.view={title:"",body:"",bodyAsHTML:!1,buttons:[{id:"",message:"",style:""}]}}firstUpdated(){setTimeout(()=>{if(this.view.bodyAsHTML){let e=this.shadowRoot.querySelector("#body_content");e.innerHTML=this.view.body}})}buttonClicked(e){let{id:r}=e.target;this.dispatchEvent(new CustomEvent("button-clicked",{detail:{msg:r}}))}static get styles(){return[xe,Xp]}render(){return K`
      <p class="body-content" id="body_content">${this.view.body}</p>
      <div class="btn-container">
        ${this.view.buttons.map(e=>K`
              <button
                id="${e.id}"
                @click="${this.buttonClicked}"
                class="${U2(e)}"
              >
                ${e.message}
              </button>
            `)}
      </div>
    `}};customElements.define("vst-core-message-box",Jp);Pi();hn();Fi();Ri();os();G();rt();G();var Yp=h`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: calc(var(--vst-z-popover) - 1);
  }

  .background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    max-inline-size: 37.5rem;
  }

  .spinner {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    --vst-ui-spinner-color: var(--vst-color-text-brand);
    --vst-ui-spinner-thickness: 0.25rem;
  }

  .message-wrapper {
    display: flex;
    align-items: center;
  }

  .message {
    flex: 1;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
  }

  :host(.has-message) .message-wrapper {
    padding: 2.125em 1.75em;
    text-align: center;
    border-radius: var(--vst-radius);
  }

  :host(.has-message) .message {
    margin: 0 0 0 calc(var(--gutter) * 2);
  }

  :host([fillscreen]) {
    position: absolute;
  }
  :host([fillscreen]) .background {
    width: 100%;
    height: 100%;
    background: var(--vst-color-predictions-overlay-bg);
  }
`;G();var Qp=()=>new Promise(t=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(t)})});rt();var em=class extends ie{async firstUpdated(){await Qp(),this.shadowRoot.querySelector("div").setAttribute("active","")}static get styles(){return[xe,h`
        :host {
          --vst-ui-spinner-color: var(--vst-color-brand);
          --vst-ui-spinner-background-color: rgba(0, 0, 0, 0.02);
          --vst-ui-spinner-thickness: 0.2rem;

          width: 3rem;
          height: 3rem;
        }
        .spinner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: transparent;
          border: var(--vst-ui-spinner-thickness) solid var(--vst-ui-spinner-background-color);
          border-top: var(--vst-ui-spinner-thickness) solid var(--vst-ui-spinner-color);
        }

        .spinner[active] {
          animation: 0.75s spin linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `]}render(){return K`<div class="spinner"></div>`}};customElements.define("vst-ui-spinner",em);var tm=class extends ie{static get properties(){return{elements:{type:Array},message:{type:String},fillScreen:{type:Boolean,reflect:!0}}}constructor(){super();this.elements=[],this.message="",this.fillScreen=!1}firstUpdated(){this.elContainerEl=this.shadowRoot.getElementById("el_container")}updated(e){e.forEach((r,o)=>{o==="message"&&this._messageChanged()})}addElement(e){this.elements.push(e),this.elContainerEl.appendChild(e)}removeElements(){let e=this.elements.length;for(let r=0;r<e;++r){let o=this.elements.shift();Xt(o.destroy)?o.destroy():o.remove()}}_messageChanged(){this.message!==""?this.classList.add("has-message"):this.classList.remove("has-message")}static get styles(){return[xe,Yp]}render(){return K`
      <div class="background">
        <div class="wrapper">
          <div class="message-wrapper">
            <vst-ui-spinner class="spinner"></vst-ui-spinner>
            <p class="message" id="message">${this.message}</p>
          </div>
          <div class="el-container" id="el_container"></div>
        </div>
      </div>
    `}};customElements.define("vst-ui-wait",tm);G();zi();oo();rt();G();var rm=h`
  :host {
    display: block;
    height: var(--chrome-menubar-height, 32px);
    width: 100vw;
    background-color: var(--vst-color-bg-tertiary);
    border-bottom: 1px solid var(--vst-color-bg-primary);
  }

  .menubar {
    display: flex;
    align-items: center;
    height: var(--chrome-menubar-height, 32px);
    position: relative;
  }
  .menubar__title {
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    margin: 0;
    padding: 0;
    flex: 1;
    align-content: center;
    justify-content: center;
  }
  .menubar__btn-wrapper {
    display: flex;
    width: calc(var(--chrome-menubar-height, 32px) * 3);
    position: absolute;
    right: 0;
    top: 0;
  }
  .menubar__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: var(--chrome-menubar-height, 32px);
    height: var(--chrome-menubar-height, 32px);
    background-color: transparent;
    line-height: 0;
    outline: 0;
  }
  .menubar__btn:hover {
    background-color: var(--vst-color-bg-secondary);
  }
  .menubar__btn-icon {
    width: 10px;
    height: 10px;
  }
  .menubar--draggable {
    -webkit-app-region: drag;
  }
  .menubar--draggable button {
    -webkit-app-region: no-drag;
  }
`;hn();var om=class extends ie{static get properties(){return{appName:{type:String},isMaximized:{type:Boolean}}}constructor(){super();this.appName=document.title,this.isMaximized=!1,this.tapCount=0}closeClicked(){document.dispatchEvent(new CustomEvent("close-app",{bubbles:!0,composed:!0}))}minimizeClicked(){window.chrome.app.window.current().minimize()}toggleMaximizeClicked(){let e=window.chrome.app.window.current();e.isMaximized()?(e.restore(),this.isMaximized=!1):(e.maximize(),this.isMaximized=!0)}titleBarClicked(){this.tapCount++,this.tapCount===1&&setTimeout(()=>{this.tapCount>1&&this.toggleMaximizeClicked(),this.tapCount=0},250)}static get styles(){return[xe,rm]}render(){return K`
      <header
        class="menubar menubar--draggable"
        @keyup="${e=>e.keyCode===13?this.titleBarClicked:""}"
        @click="${this.titleBarClicked}"
      >
        <strong class="menubar__title">${this.appName}</strong>
        <div class="menubar__btn-wrapper">
          <button
            class="menubar__btn"
            @click="${this.minimizeClicked}"
            aria-label="${he("Minimize Application")}"
          >
            <vst-ui-icon
              class="menubar__btn-icon"
              color="#5a5a5a"
              .icon="${qd}"
            ></vst-ui-icon>
          </button>
          <button
            class="menubar__btn"
            @click="${this.toggleMaximizeClicked}"
            aria-label="${he("Maximize Application")}"
          >
            <vst-ui-icon
              class="menubar__btn-icon"
              color="#5a5a5a"
              .icon="${this.isMaximized?Gd:Ud}"
            ></vst-ui-icon>
          </button>
          <button
            class="menubar__btn"
            @click="${this.closeClicked}"
            aria-label="${he("Close Application")}"
          >
            <vst-ui-icon
              class="menubar__btn-icon"
              color="#5a5a5a"
              .icon="${Vd}"
            ></vst-ui-icon>
          </button>
        </div>
      </header>
    `}};customElements.define("vst-ui-chromebar",om);
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
/*! (c) Andrea Giammarchi - ISC */
/*! ally.js - v1.4.1 - https://allyjs.io/ - MIT License */
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
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
