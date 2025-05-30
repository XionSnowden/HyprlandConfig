import{a as l,b as d,c as h}from"./chunk-XJAAGGJ2.js";import{e as a}from"./chunk-BVG7RORO.js";var m=d(class extends h{constructor(e){var s;if(super(e),e.type!==l.ATTRIBUTE||e.name!=="class"||((s=e.strings)===null||s===void 0?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(s=>e[s]).join(" ")+" "}update(e,[s]){var i,r;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in s)s[t]&&!((i=this.st)===null||i===void 0?void 0:i.has(t))&&this.nt.add(t);return this.render(s)}let n=e.element.classList;this.nt.forEach(t=>{t in s||(n.remove(t),this.nt.delete(t))});for(let t in s){let o=!!s[t];o===this.nt.has(t)||((r=this.st)===null||r===void 0?void 0:r.has(t))||(o?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return a}});export{m as a};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
