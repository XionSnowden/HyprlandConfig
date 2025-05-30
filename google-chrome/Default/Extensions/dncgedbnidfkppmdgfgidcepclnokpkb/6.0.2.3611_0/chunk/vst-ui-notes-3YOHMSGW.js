import{a as xe}from"./chunk-232RLP5Z.js";import{a as Me}from"./chunk-LEB623JM.js";import{U as Se,W as Re,aa as we,ba as Le,ca as Ne,da as Oe,ea as De}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as Ce}from"./chunk-CRHRJPRJ.js";import"./chunk-XJAAGGJ2.js";import"./chunk-OTWO5H3C.js";import{b as Ae,c as be,h as ye}from"./chunk-BVG7RORO.js";import{c as f}from"./chunk-LI3RKPGW.js";import{f as yn,h as Sn}from"./chunk-CM6X6NVN.js";var Ie=yn((kt,Pt)=>{(function(x,r){typeof kt=="object"&&typeof Pt!="undefined"?Pt.exports=r():typeof define=="function"&&define.amd?define(r):(x=typeof globalThis!="undefined"?globalThis:x||self,x.DOMPurify=r())})(kt,function(){"use strict";let{entries:x,setPrototypeOf:r,isFrozen:N,getPrototypeOf:y,getOwnPropertyDescriptor:z}=Object,{freeze:T,seal:w,create:Ut}=Object,{apply:ft,construct:pt}=typeof Reflect!="undefined"&&Reflect;T||(T=function(i){return i}),w||(w=function(i){return i}),ft||(ft=function(i,c,a){return i.apply(c,a)}),pt||(pt=function(i,c){return new i(...c)});let tt=R(Array.prototype.forEach),zt=R(Array.prototype.pop),j=R(Array.prototype.push),et=R(String.prototype.toLowerCase),mt=R(String.prototype.toString),Ue=R(String.prototype.match),X=R(String.prototype.replace),ze=R(String.prototype.indexOf),Fe=R(String.prototype.trim),L=R(Object.prototype.hasOwnProperty),S=R(RegExp.prototype.test),q=$e(TypeError);function R(l){return function(i){for(var c=arguments.length,a=new Array(c>1?c-1:0),g=1;g<c;g++)a[g-1]=arguments[g];return ft(l,i,a)}}function $e(l){return function(){for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return pt(l,c)}}function s(l,i){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:et;r&&r(l,null);let a=i.length;for(;a--;){let g=i[a];if(typeof g=="string"){let D=c(g);D!==g&&(N(i)||(i[a]=D),g=D)}l[g]=!0}return l}function He(l){for(let i=0;i<l.length;i++)L(l,i)||(l[i]=null);return l}function I(l){let i=Ut(null);for(let[c,a]of x(l))L(l,c)&&(Array.isArray(a)?i[c]=He(a):a&&typeof a=="object"&&a.constructor===Object?i[c]=I(a):i[c]=a);return i}function nt(l,i){for(;l!==null;){let a=z(l,i);if(a){if(a.get)return R(a.get);if(typeof a.value=="function")return R(a.value)}l=y(l)}function c(){return null}return c}let Ft=T(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),dt=T(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ht=T(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ge=T(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),gt=T(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),We=T(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$t=T(["#text"]),Ht=T(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Et=T(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Gt=T(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),it=T(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Be=w(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ye=w(/<%[\w\W]*|[\w\W]*%>/gm),je=w(/\${[\w\W]*}/gm),Xe=w(/^data-[\-\w.\u00B7-\uFFFF]/),qe=w(/^aria-[\-\w]+$/),Wt=w(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ve=w(/^(?:\w+script|data):/i),Ke=w(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Bt=w(/^html$/i);var Yt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Be,ERB_EXPR:Ye,TMPLIT_EXPR:je,DATA_ATTR:Xe,ARIA_ATTR:qe,IS_ALLOWED_URI:Wt,IS_SCRIPT_OR_DATA:Ve,ATTR_WHITESPACE:Ke,DOCTYPE_NAME:Bt});let Ze=function(){return typeof window=="undefined"?null:window},Qe=function(i,c){if(typeof i!="object"||typeof i.createPolicy!="function")return null;let a=null,g="data-tt-policy-suffix";c&&c.hasAttribute(g)&&(a=c.getAttribute(g));let D="dompurify"+(a?"#"+a:"");try{return i.createPolicy(D,{createHTML(F){return F},createScriptURL(F){return F}})}catch(F){return console.warn("TrustedTypes policy "+D+" could not be created."),null}};function jt(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ze(),i=o=>jt(o);if(i.version="3.0.9",i.removed=[],!l||!l.document||l.document.nodeType!==9)return i.isSupported=!1,i;let{document:c}=l,a=c,g=a.currentScript,{DocumentFragment:D,HTMLTemplateElement:F,Node:_t,Element:Xt,NodeFilter:Tt,NamedNodeMap:tn=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:en,DOMParser:nn,trustedTypes:ot}=l,rt=Xt.prototype,on=nt(rt,"cloneNode"),rn=nt(rt,"nextSibling"),sn=nt(rt,"childNodes"),vt=nt(rt,"parentNode");if(typeof F=="function"){let o=c.createElement("template");o.content&&o.content.ownerDocument&&(c=o.content.ownerDocument)}let v,V="",{implementation:At,createNodeIterator:an,createDocumentFragment:ln,getElementsByTagName:cn}=c,{importNode:un}=a,O={};i.isSupported=typeof x=="function"&&typeof vt=="function"&&At&&At.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:bt,ERB_EXPR:yt,TMPLIT_EXPR:St,DATA_ATTR:fn,ARIA_ATTR:pn,IS_SCRIPT_OR_DATA:mn,ATTR_WHITESPACE:qt}=Yt,{IS_ALLOWED_URI:Vt}=Yt,m=null,Kt=s({},[...Ft,...dt,...ht,...gt,...$t]),d=null,Zt=s({},[...Ht,...Et,...Gt,...it]),p=Object.seal(Ut(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),K=null,Rt=null,Qt=!0,wt=!0,Jt=!1,te=!0,$=!1,k=!1,Lt=!1,Nt=!1,H=!1,st=!1,at=!1,ee=!0,ne=!1,dn="user-content-",Ot=!0,Z=!1,G={},W=null,ie=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),oe=null,re=s({},["audio","video","img","source","image","track"]),Dt=null,se=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),lt="http://www.w3.org/1998/Math/MathML",ct="http://www.w3.org/2000/svg",C="http://www.w3.org/1999/xhtml",B=C,Ct=!1,Mt=null,hn=s({},[lt,ct,C],mt),Q=null,gn=["application/xhtml+xml","text/html"],En="text/html",h=null,Y=null,_n=c.createElement("form"),ae=function(t){return t instanceof RegExp||t instanceof Function},xt=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Y&&Y===t)){if((!t||typeof t!="object")&&(t={}),t=I(t),Q=gn.indexOf(t.PARSER_MEDIA_TYPE)===-1?En:t.PARSER_MEDIA_TYPE,h=Q==="application/xhtml+xml"?mt:et,m=L(t,"ALLOWED_TAGS")?s({},t.ALLOWED_TAGS,h):Kt,d=L(t,"ALLOWED_ATTR")?s({},t.ALLOWED_ATTR,h):Zt,Mt=L(t,"ALLOWED_NAMESPACES")?s({},t.ALLOWED_NAMESPACES,mt):hn,Dt=L(t,"ADD_URI_SAFE_ATTR")?s(I(se),t.ADD_URI_SAFE_ATTR,h):se,oe=L(t,"ADD_DATA_URI_TAGS")?s(I(re),t.ADD_DATA_URI_TAGS,h):re,W=L(t,"FORBID_CONTENTS")?s({},t.FORBID_CONTENTS,h):ie,K=L(t,"FORBID_TAGS")?s({},t.FORBID_TAGS,h):{},Rt=L(t,"FORBID_ATTR")?s({},t.FORBID_ATTR,h):{},G=L(t,"USE_PROFILES")?t.USE_PROFILES:!1,Qt=t.ALLOW_ARIA_ATTR!==!1,wt=t.ALLOW_DATA_ATTR!==!1,Jt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,te=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$=t.SAFE_FOR_TEMPLATES||!1,k=t.WHOLE_DOCUMENT||!1,H=t.RETURN_DOM||!1,st=t.RETURN_DOM_FRAGMENT||!1,at=t.RETURN_TRUSTED_TYPE||!1,Nt=t.FORCE_BODY||!1,ee=t.SANITIZE_DOM!==!1,ne=t.SANITIZE_NAMED_PROPS||!1,Ot=t.KEEP_CONTENT!==!1,Z=t.IN_PLACE||!1,Vt=t.ALLOWED_URI_REGEXP||Wt,B=t.NAMESPACE||C,p=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ae(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(p.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ae(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(p.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(p.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),$&&(wt=!1),st&&(H=!0),G&&(m=s({},$t),d=[],G.html===!0&&(s(m,Ft),s(d,Ht)),G.svg===!0&&(s(m,dt),s(d,Et),s(d,it)),G.svgFilters===!0&&(s(m,ht),s(d,Et),s(d,it)),G.mathMl===!0&&(s(m,gt),s(d,Gt),s(d,it))),t.ADD_TAGS&&(m===Kt&&(m=I(m)),s(m,t.ADD_TAGS,h)),t.ADD_ATTR&&(d===Zt&&(d=I(d)),s(d,t.ADD_ATTR,h)),t.ADD_URI_SAFE_ATTR&&s(Dt,t.ADD_URI_SAFE_ATTR,h),t.FORBID_CONTENTS&&(W===ie&&(W=I(W)),s(W,t.FORBID_CONTENTS,h)),Ot&&(m["#text"]=!0),k&&s(m,["html","head","body"]),m.table&&(s(m,["tbody"]),delete K.tbody),t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!="function")throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');v=t.TRUSTED_TYPES_POLICY,V=v.createHTML("")}else v===void 0&&(v=Qe(ot,g)),v!==null&&typeof V=="string"&&(V=v.createHTML(""));T&&T(t),Y=t}},le=s({},["mi","mo","mn","ms","mtext"]),ce=s({},["foreignobject","desc","title","annotation-xml"]),Tn=s({},["title","style","font","a","script"]),ue=s({},[...dt,...ht,...Ge]),fe=s({},[...gt,...We]),vn=function(t){let e=vt(t);(!e||!e.tagName)&&(e={namespaceURI:B,tagName:"template"});let n=et(t.tagName),u=et(e.tagName);return Mt[t.namespaceURI]?t.namespaceURI===ct?e.namespaceURI===C?n==="svg":e.namespaceURI===lt?n==="svg"&&(u==="annotation-xml"||le[u]):Boolean(ue[n]):t.namespaceURI===lt?e.namespaceURI===C?n==="math":e.namespaceURI===ct?n==="math"&&ce[u]:Boolean(fe[n]):t.namespaceURI===C?e.namespaceURI===ct&&!ce[u]||e.namespaceURI===lt&&!le[u]?!1:!fe[n]&&(Tn[n]||!ue[n]):!!(Q==="application/xhtml+xml"&&Mt[t.namespaceURI]):!1},P=function(t){j(i.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){t.remove()}},It=function(t,e){try{j(i.removed,{attribute:e.getAttributeNode(t),from:e})}catch(n){j(i.removed,{attribute:null,from:e})}if(e.removeAttribute(t),t==="is"&&!d[t])if(H||st)try{P(e)}catch(n){}else try{e.setAttribute(t,"")}catch(n){}},pe=function(t){let e=null,n=null;if(Nt)t="<remove></remove>"+t;else{let _=Ue(t,/^[\r\n\t ]+/);n=_&&_[0]}Q==="application/xhtml+xml"&&B===C&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");let u=v?v.createHTML(t):t;if(B===C)try{e=new nn().parseFromString(u,Q)}catch(_){}if(!e||!e.documentElement){e=At.createDocument(B,"template",null);try{e.documentElement.innerHTML=Ct?V:u}catch(_){}}let E=e.body||e.documentElement;return t&&n&&E.insertBefore(c.createTextNode(n),E.childNodes[0]||null),B===C?cn.call(e,k?"html":"body")[0]:k?e.documentElement:E},me=function(t){return an.call(t.ownerDocument||t,t,Tt.SHOW_ELEMENT|Tt.SHOW_COMMENT|Tt.SHOW_TEXT,null)},An=function(t){return t instanceof en&&(typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof tn)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},de=function(t){return typeof _t=="function"&&t instanceof _t},M=function(t,e,n){!O[t]||tt(O[t],u=>{u.call(i,e,n,Y)})},he=function(t){let e=null;if(M("beforeSanitizeElements",t,null),An(t))return P(t),!0;let n=h(t.nodeName);if(M("uponSanitizeElement",t,{tagName:n,allowedTags:m}),t.hasChildNodes()&&!de(t.firstElementChild)&&S(/<[/\w]/g,t.innerHTML)&&S(/<[/\w]/g,t.textContent))return P(t),!0;if(!m[n]||K[n]){if(!K[n]&&Ee(n)&&(p.tagNameCheck instanceof RegExp&&S(p.tagNameCheck,n)||p.tagNameCheck instanceof Function&&p.tagNameCheck(n)))return!1;if(Ot&&!W[n]){let u=vt(t)||t.parentNode,E=sn(t)||t.childNodes;if(E&&u){let _=E.length;for(let A=_-1;A>=0;--A)u.insertBefore(on(E[A],!0),rn(t))}}return P(t),!0}return t instanceof Xt&&!vn(t)||(n==="noscript"||n==="noembed"||n==="noframes")&&S(/<\/no(script|embed|frames)/i,t.innerHTML)?(P(t),!0):($&&t.nodeType===3&&(e=t.textContent,tt([bt,yt,St],u=>{e=X(e,u," ")}),t.textContent!==e&&(j(i.removed,{element:t.cloneNode()}),t.textContent=e)),M("afterSanitizeElements",t,null),!1)},ge=function(t,e,n){if(ee&&(e==="id"||e==="name")&&(n in c||n in _n))return!1;if(!(wt&&!Rt[e]&&S(fn,e))){if(!(Qt&&S(pn,e))){if(!d[e]||Rt[e]){if(!(Ee(t)&&(p.tagNameCheck instanceof RegExp&&S(p.tagNameCheck,t)||p.tagNameCheck instanceof Function&&p.tagNameCheck(t))&&(p.attributeNameCheck instanceof RegExp&&S(p.attributeNameCheck,e)||p.attributeNameCheck instanceof Function&&p.attributeNameCheck(e))||e==="is"&&p.allowCustomizedBuiltInElements&&(p.tagNameCheck instanceof RegExp&&S(p.tagNameCheck,n)||p.tagNameCheck instanceof Function&&p.tagNameCheck(n))))return!1}else if(!Dt[e]){if(!S(Vt,X(n,qt,""))){if(!((e==="src"||e==="xlink:href"||e==="href")&&t!=="script"&&ze(n,"data:")===0&&oe[t])){if(!(Jt&&!S(mn,X(n,qt,"")))){if(n)return!1}}}}}}return!0},Ee=function(t){return t!=="annotation-xml"&&t.indexOf("-")>0},_e=function(t){M("beforeSanitizeAttributes",t,null);let{attributes:e}=t;if(!e)return;let n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d},u=e.length;for(;u--;){let E=e[u],{name:_,namespaceURI:A,value:U}=E,J=h(_),b=_==="value"?U:Fe(U);if(n.attrName=J,n.attrValue=b,n.keepAttr=!0,n.forceKeepAttr=void 0,M("uponSanitizeAttribute",t,n),b=n.attrValue,n.forceKeepAttr||(It(_,t),!n.keepAttr))continue;if(!te&&S(/\/>/i,b)){It(_,t);continue}$&&tt([bt,yt,St],ve=>{b=X(b,ve," ")});let Te=h(t.nodeName);if(!!ge(Te,J,b)){if(ne&&(J==="id"||J==="name")&&(It(_,t),b=dn+b),v&&typeof ot=="object"&&typeof ot.getAttributeType=="function"&&!A)switch(ot.getAttributeType(Te,J)){case"TrustedHTML":{b=v.createHTML(b);break}case"TrustedScriptURL":{b=v.createScriptURL(b);break}}try{A?t.setAttributeNS(A,_,b):t.setAttribute(_,b),zt(i.removed)}catch(ve){}}}M("afterSanitizeAttributes",t,null)},bn=function o(t){let e=null,n=me(t);for(M("beforeSanitizeShadowDOM",t,null);e=n.nextNode();)M("uponSanitizeShadowNode",e,null),!he(e)&&(e.content instanceof D&&o(e.content),_e(e));M("afterSanitizeShadowDOM",t,null)};return i.sanitize=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=null,n=null,u=null,E=null;if(Ct=!o,Ct&&(o="<!-->"),typeof o!="string"&&!de(o))if(typeof o.toString=="function"){if(o=o.toString(),typeof o!="string")throw q("dirty is not a string, aborting")}else throw q("toString is not a function");if(!i.isSupported)return o;if(Lt||xt(t),i.removed=[],typeof o=="string"&&(Z=!1),Z){if(o.nodeName){let U=h(o.nodeName);if(!m[U]||K[U])throw q("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof _t)e=pe("<!---->"),n=e.ownerDocument.importNode(o,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?e=n:e.appendChild(n);else{if(!H&&!$&&!k&&o.indexOf("<")===-1)return v&&at?v.createHTML(o):o;if(e=pe(o),!e)return H?null:at?V:""}e&&Nt&&P(e.firstChild);let _=me(Z?o:e);for(;u=_.nextNode();)he(u)||(u.content instanceof D&&bn(u.content),_e(u));if(Z)return o;if(H){if(st)for(E=ln.call(e.ownerDocument);e.firstChild;)E.appendChild(e.firstChild);else E=e;return(d.shadowroot||d.shadowrootmode)&&(E=un.call(a,E,!0)),E}let A=k?e.outerHTML:e.innerHTML;return k&&m["!doctype"]&&e.ownerDocument&&e.ownerDocument.doctype&&e.ownerDocument.doctype.name&&S(Bt,e.ownerDocument.doctype.name)&&(A="<!DOCTYPE "+e.ownerDocument.doctype.name+`>
`+A),$&&tt([bt,yt,St],U=>{A=X(A,U," ")}),v&&at?v.createHTML(A):A},i.setConfig=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(o),Lt=!0},i.clearConfig=function(){Y=null,Lt=!1},i.isValidAttribute=function(o,t,e){Y||xt({});let n=h(o),u=h(t);return ge(n,u,e)},i.addHook=function(o,t){typeof t=="function"&&(O[o]=O[o]||[],j(O[o],t))},i.removeHook=function(o){if(O[o])return zt(O[o])},i.removeHooks=function(o){O[o]&&(O[o]=[])},i.removeAllHooks=function(){O={}},i}var Je=jt();return Je})});var ut=Sn(Ie());var ke=Ae`
  .notes {
    background-color: var(--vst-color-bg);
    display: grid;
    grid-gap: var(--vst-space-2xs);
    grid-template-rows: auto 1fr;
    height: 100%;
    padding: var(--vst-space-l);
    position: relative;
    width: 100%;
  }

  #in,
  #out {
    background: var(--vst-color-notes-bg);
    border-radius: var(--vst-radius);
    border: 1px solid var(--vst-color-bg-primary);
    color: var(--vst-color-fg-primary);
    flex: 1;
    font-family: var(--vst-font-family);
    outline-color: var(--vst-color-bg-primary);
    overflow-y: auto;
    padding: var(--vst-space-s);
  }

  #in {
    -moz-user-select: text;
    -webkit-user-select: text;
    resize: none;
    user-select: text;
  }

  #in::placeholder {
    font-size: var(--vst-font-size-s);
  }

  #out * {
    user-select: text;
  }

  .toolbar {
    align-items: center;
    background: var(--vst-color-notes-bg);
    border-radius: var(--vst-radius);
    border: 1px solid var(--vst-color-bg-primary);
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    padding: var(--vst-space-3xs);
    white-space: nowrap;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .separator {
    background: var(--vst-color-bg-secondary);
    height: 1.25rem;
    width: 1px;
  }

  .btn[variant='icon'] {
    height: var(--vst-icon-size-m);
    margin: var(--vst-space-2xs);
    padding: var(--vst-space-2xs);
    width: var(--vst-icon-size-m);
  }

  .btn[variant='icon']:hover,
  .btn[variant='icon']:active,
  .select:hover {
    background-color: var(--vst-color-bg-secondary);
  }

  svg {
    width: 1rem;
  }

  select {
    height: var(--vst-space-l);
    inline-size: 6rem;
    min-inline-size: 6rem;
    padding: 0 var(--vst-space-2xs);
  }

  /* Markdown Styling */
  h1 {
    font-size: var(--vst-font-size-xl);
    margin: 0;
    margin-block-end: var(--vst-space-s);
  }

  h2 {
    font-size: var(--vst-font-size-l);
    margin: 0;
    margin-block-end: var(--vst-space-xs);
  }

  h3 {
    font-size: var(--vst-font-size-m);
    margin: 0;
    margin-block-end: var(--vst-space-2xs);
  }

  ul,
  ol {
    margin: 0;
    margin-block-end: var(--vst-space-xs);
    padding-inline-start: var(--vst-space-l);
  }

  blockquote {
    border-left: solid 2px var(--vst-color-fg-secondary);
    margin: var(--vst-space-2xs) 0;
    padding-inline-start: var(--vst-space-2xs);
  }

  sup,
  sub {
    font-size: var(--vst-font-size-2xs);
  }

  .btn[variant='icon'] vst-ui-icon {
    width: 1rem;
  }

  #text_type {
    background-color: transparent;
    border: none;
  }

  ::placeholder {
    color: var(--vst-color-fg-tertiary);
    opacity: 1;
  }
`;var Pe=class extends ye{static get properties(){return{previewMode:{type:Boolean},notes:{type:String}}}constructor(){super();this.previewMode=!1,this.notes="",ut.default.addHook("afterSanitizeAttributes",r=>(r.nodeType===1&&r.tagName.toUpperCase()==="A"&&(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener noreferrer"),r.setAttribute("class","link")),r)),ut.default.addHook("afterSanitizeElements",r=>(r.nodeType===1&&r.tagName.toUpperCase()==="IMG"&&r.setAttribute("crossorigin",""),r))}static get styles(){return[Ce,ke]}firstUpdated(){this.inEl=this.shadowRoot.querySelector("#in"),this.outEl=this.shadowRoot.querySelector("#out")}get _formattedNotes(){if(!this.notes)return"";let r=ut.default.sanitize(Me(this.notes));return xe(r)}_insertAtCursor(r){let N=this.inEl.selectionStart,y=this.inEl.selectionEnd;this.inEl.value=`${this.inEl.value.substring(0,N)}${r}${this.inEl.value.substring(N,y)}${this.inEl.value.substring(y,this.inEl.value.length)}`,this.inEl.selectionStart=N+this.inEl.value.substring(N,y).length+r.length,this.inEl.selectionEnd=N+this.inEl.value.substring(N,y).length+r.length,this.inEl.focus(),this.notes=this.inEl.value}_wrapCursor(r,N){let y=this.inEl.selectionStart,z=this.inEl.selectionEnd;this.inEl.value=`${this.inEl.value.substring(0,y)}${r}${this.inEl.value.substring(y,z)}${N}${this.inEl.value.substring(z,this.inEl.value.length)}`,this.inEl.selectionStart=y+this.inEl.value.substring(y,z).length+r.length,this.inEl.selectionEnd=y+this.inEl.value.substring(y,z).length+r.length,this.inEl.focus(),this.notes=this.inEl.value}_formatText({target:{value:r}}){r==="h1"?this._insertAtCursor("# "):r==="h2"?this._insertAtCursor("## "):r==="h3"?this._insertAtCursor("### "):r==="quote"?this._insertAtCursor("> "):r==="sub"?this._wrapCursor("<sub>","</sub>"):r==="sup"?this._wrapCursor("<sup>","</sup>"):r==="code"&&this._wrapCursor("`","`")}_handleInput(r){this.notes=r.target.value,this.dispatchEvent(new CustomEvent("notes-updated",{detail:r.target.value}))}_togglePreview(){this.previewMode=!this.previewMode}render(){return be`
      <div class="notes">
        <div class="toolbar">
          <button
            id="bold"
            class="btn"
            variant="icon"
            aria-label="${f("Bold")}"
            ?disabled="${this.previewMode}"
            @click="${()=>this._wrapCursor("__","__")}"
          >
            <vst-ui-icon size="s" .icon="${De}" color="var(--vst-color-fg-primary)"></vst-ui-icon>
          </button>
          <button
            id="italic"
            class="btn"
            variant="icon"
            aria-label="${f("Italic")}"
            ?disabled="${this.previewMode}"
            @click="${()=>this._wrapCursor("_","_")}"
          >
            <vst-ui-icon
              size="s"
              .icon="${Oe}"
              color="var(--vst-color-fg-primary)"
            ></vst-ui-icon>
          </button>
          <div class="separator" margin="inline-2xs"></div>
          <select
            id="text_type"
            aria-label="Formatting Options"
            ?disabled="${this.previewMode}"
            @change="${this._formatText}"
          >
            <option value="p">${f("Paragraph")}</option>
            <option value="h1">${f("Heading 1")}</option>
            <option value="h2">${f("Heading 2")}</option>
            <option value="h3">${f("Heading 3")}</option>
            <option value="quote">${f("Quote")}</option>
            <option value="sub">${f("Subscript")}</option>
            <option value="sup">${f("Superscript")}</option>
            <option value="code">${f("Code")}</option>
          </select>
          <button
            class="btn"
            variant="icon"
            aria-label="${f("Bullet list")}"
            id="bullet_list"
            ?disabled="${this.previewMode}"
            @click="${()=>this._insertAtCursor(`- ${f("list item")}
- ${f("list item")}
- ${f("list item")}`)}"
          >
            <vst-ui-icon
              size="s"
              .icon="${Ne}"
              color="var(--vst-color-fg-primary)"
            ></vst-ui-icon>
          </button>
          <button
            class="btn"
            variant="icon"
            aria-label="${f("Number list")}"
            id="number_list"
            ?disabled="${this.previewMode}"
            @click="${()=>this._insertAtCursor(`1. ${f("list item")}
2. ${f("list item")}
3. ${f("list item")}`)}"
          >
            <vst-ui-icon
              size="s"
              .icon="${Le}"
              color="var(--vst-color-fg-primary)"
            ></vst-ui-icon>
          </button>
          <div class="separator" margin="inline-2xs"></div>
          <button
            class="btn"
            aria-label="${f("Link")}"
            variant="icon"
            id="url"
            ?disabled="${this.previewMode}"
            @click="${()=>this._wrapCursor("*[","](url)*")}"
          >
            <vst-ui-icon
              size="s"
              .icon="${we}"
              color="var(--vst-color-fg-primary)"
            ></vst-ui-icon>
          </button>
          <div class="separator" margin="inline-2xs"></div>
          <button
            class="btn"
            id="edit_btn"
            variant="icon"
            aria-label="${this.previewMode?f("Preview mode"):f("Edit mode")}"
            @click="${this._togglePreview}"
          >
            <vst-ui-icon
              size="s"
              color="var(--vst-color-fg-secondary);"
              .icon="${this.previewMode?Re:Se}"
            ></vst-ui-icon>
          </button>
        </div>
        <textarea
          id="in"
          placeholder="${f("Use this area to take notes in markdown or plain text about your experiment. To see the formatting applied, switch into preview mode.")}"
          .value="${this.notes}"
          @input="${r=>this._handleInput(r)}"
          ?hidden="${this.previewMode}"
        ></textarea>

        <div id="out" ?hidden="${!this.previewMode}">${this._formattedNotes}</div>
      </div>
    `}};customElements.define("vst-ui-notes",Pe);
/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */
