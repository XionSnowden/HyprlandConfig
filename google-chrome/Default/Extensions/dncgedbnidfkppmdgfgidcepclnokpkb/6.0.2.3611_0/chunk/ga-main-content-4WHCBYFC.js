import"./chunk-XBSFSEPK.js";import"./chunk-2YUGMIP3.js";import"./chunk-TJ6NNFSA.js";import{a as Yt}from"./chunk-ZAKMYXQF.js";import"./chunk-25C2FLTR.js";import{a as js}from"./chunk-AIJT5QXX.js";import{a as nl}from"./chunk-FDV75E2D.js";import{a as ie}from"./chunk-R6LDBG7J.js";import{a as Ta,b as il,c as gi}from"./chunk-QLWYRWMY.js";import{a as Ir}from"./chunk-BCP675JF.js";import"./chunk-YDEDSSMD.js";import{b as Vs,c as Aa,f as be}from"./chunk-BLUX6CJK.js";import{a as Qi,b as is,e as Fs,f as ci,g as tn}from"./chunk-4YBGNFWQ.js";import{A as Ga,B as Wa,E as vt,a as nn,b as nt,c as fi,d as Se,e as Ba,f as al,g as ol,h as rl,i as Oa,j as ll,k as cl,l as dl,m as dn,n as mi,p as hl,q as ul,r as Fa,s as pl,t as gl,u as hn,v as za}from"./chunk-LYSQIBIX.js";import{b as Ra,c as Da,e as $a,f as La}from"./chunk-SI5R733D.js";import{a as fl}from"./chunk-G7LRX6NT.js";import{a as ns}from"./chunk-Z6SXIBNK.js";import{a as Ve,b as Ne}from"./chunk-5GHRE4BP.js";import{a as le}from"./chunk-JWPGNWQB.js";import{d as cn}from"./chunk-IBBROPNX.js";import"./chunk-BZBFFOH5.js";import{a as Yr,c as Kr,d as me}from"./chunk-OOYYGJTO.js";import{b as Ma,c as Zr}from"./chunk-J6L6J5R7.js";import"./chunk-DQXOKHFD.js";import{a as Xh}from"./chunk-YJ5KKARE.js";import{a as Bt,b as ln,c as Xr}from"./chunk-NNBWZ6HI.js";import"./chunk-KBTFUBYZ.js";import{a as We}from"./chunk-QTI25AH7.js";import"./chunk-A7ZJ67EZ.js";import"./chunk-SEYYHBSH.js";import{a as Ws}from"./chunk-HOPQVMFY.js";import{c as se}from"./chunk-TWAD4QJO.js";import{c as qt,e as xr,f as Ia,i as vr,m as _e,q as li,r as yr,t as _r,v as fe,y as wr,z as Ji}from"./chunk-IMQHRNK4.js";import{a as Ce}from"./chunk-MGJOXMXS.js";import{i as Qr,j as Jr}from"./chunk-6PXAOD22.js";import"./chunk-374UYNGS.js";import{a as pi,b as tl,f as el}from"./chunk-H5EO627A.js";import"./chunk-4OSIXHXT.js";import"./chunk-V4FTYK2W.js";import"./chunk-3YSPJCIY.js";import{a as ys}from"./chunk-KFWGEN4K.js";import"./chunk-HTT347OR.js";import{a as hi}from"./chunk-PTKZDLN6.js";import{a as as}from"./chunk-PL6DDC6Q.js";import{b as Cr,d as Sr,f as we,j as sn}from"./chunk-SSPC3AL5.js";import{A as Pr,G as Gs,Q as Pa,R as Mr,T as Tr,W as Ar,Y as on,a as Er,fa as Rr,ga as Dr,ha as $r,ia as Lr,ja as Br,ka as Or,la as Fr,ma as zr,na as Gr,o as je,oa as Wr,pa as jr,qa as Vr,ra as Nr,s as an,sa as Hr,t as Ea,ta as Ur,u as zs,ua as qr,v as kr,xa as rn,z as ka}from"./chunk-TB2MSUH5.js";import"./chunk-MUB3DQUZ.js";import{c as ut}from"./chunk-CRHRJPRJ.js";import{a as sl}from"./chunk-CWRGSBHN.js";import{a as vs}from"./chunk-PIPETCCX.js";import"./chunk-XJAAGGJ2.js";import{a as ui}from"./chunk-OTWO5H3C.js";import{b as rt,c as q,d as di,f as en,h as ht}from"./chunk-BVG7RORO.js";import{a as Ge}from"./chunk-MM5FGF5D.js";import{b as Vt}from"./chunk-WFJOWCXF.js";import{c as k,d as br,e as ri}from"./chunk-LI3RKPGW.js";import{a as Zh}from"./chunk-3AUSJ54I.js";import{a as tt,b as wt,d as Ca,e as oi,f as Kh,h as Sa}from"./chunk-CM6X6NVN.js";var _h=Kh((dr,hr)=>{(function(i,t){typeof define=="function"&&define.amd?define([],t):typeof hr=="object"&&typeof dr!="undefined"?hr.exports=t():i.Papa=t()})(dr,function i(){"use strict";var t=typeof self!="undefined"?self:typeof window!="undefined"?window:t!==void 0?t:{},e=!t.document&&!!t.postMessage,s=e&&/blob:/i.test((t.location||{}).protocol),n={},a=0,o={parse:function(x,_){var S=(_=_||{}).dynamicTyping||!1;if(w(S)&&(_.dynamicTypingFunction=S,S={}),_.dynamicTyping=S,_.transform=!!w(_.transform)&&_.transform,_.worker&&o.WORKERS_SUPPORTED){var A=function(){if(!o.WORKERS_SUPPORTED)return!1;var M=(E=t.URL||t.webkitURL||null,B=i.toString(),o.BLOB_URL||(o.BLOB_URL=E.createObjectURL(new Blob(["(",B,")();"],{type:"text/javascript"})))),F=new t.Worker(M),E,B;return F.onmessage=f,F.id=a++,n[F.id]=F}();return A.userStep=_.step,A.userChunk=_.chunk,A.userComplete=_.complete,A.userError=_.error,_.step=w(_.step),_.chunk=w(_.chunk),_.complete=w(_.complete),_.error=w(_.error),delete _.worker,void A.postMessage({input:x,config:_,workerId:A.id})}var D=null;return o.NODE_STREAM_INPUT,typeof x=="string"?D=_.download?new c(_):new h(_):x.readable===!0&&w(x.read)&&w(x.on)?D=new u(_):(t.File&&x instanceof File||x instanceof Object)&&(D=new d(_)),D.stream(x)},unparse:function(x,_){var S=!1,A=!0,D=",",M=`\r
`,F='"',E=F+F,B=!1,P=null,T=!1;(function(){if(typeof _=="object"){if(typeof _.delimiter!="string"||o.BAD_DELIMITERS.filter(function(K){return _.delimiter.indexOf(K)!==-1}).length||(D=_.delimiter),(typeof _.quotes=="boolean"||typeof _.quotes=="function"||Array.isArray(_.quotes))&&(S=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(B=_.skipEmptyLines),typeof _.newline=="string"&&(M=_.newline),typeof _.quoteChar=="string"&&(F=_.quoteChar),typeof _.header=="boolean"&&(A=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");P=_.columns}_.escapeChar!==void 0&&(E=_.escapeChar+F),typeof _.escapeFormulae=="boolean"&&(T=_.escapeFormulae)}})();var I=new RegExp(g(F),"g");if(typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(x)){if(!x.length||Array.isArray(x[0]))return H(null,x,B);if(typeof x[0]=="object")return H(P||et(x[0]),x,B)}else if(typeof x=="object")return typeof x.data=="string"&&(x.data=JSON.parse(x.data)),Array.isArray(x.data)&&(x.fields||(x.fields=x.meta&&x.meta.fields),x.fields||(x.fields=Array.isArray(x.data[0])?x.fields:et(x.data[0])),Array.isArray(x.data[0])||typeof x.data[0]=="object"||(x.data=[x.data])),H(x.fields||[],x.data||[],B);throw new Error("Unable to serialize unrecognized input");function et(K){if(typeof K!="object")return[];var L=[];for(var $ in K)L.push($);return L}function H(K,L,$){var U="";typeof K=="string"&&(K=JSON.parse(K)),typeof L=="string"&&(L=JSON.parse(L));var j=Array.isArray(K)&&0<K.length,N=!Array.isArray(L[0]);if(j&&A){for(var O=0;O<K.length;O++)0<O&&(U+=D),U+=V(K[O],O);0<L.length&&(U+=M)}for(var W=0;W<L.length;W++){var Z=j?K.length:L[W].length,J=!1,Q=j?Object.keys(L[W]).length===0:L[W].length===0;if($&&!j&&(J=$==="greedy"?L[W].join("").trim()==="":L[W].length===1&&L[W][0].length===0),$==="greedy"&&j){for(var Y=[],lt=0;lt<Z;lt++){var st=N?K[lt]:lt;Y.push(L[W][st])}J=Y.join("").trim()===""}if(!J){for(var ct=0;ct<Z;ct++){0<ct&&!Q&&(U+=D);var ot=j&&N?K[ct]:ct;U+=V(L[W][ot],ct)}W<L.length-1&&(!$||0<Z&&!Q)&&(U+=M)}}return U}function V(K,L){if(K==null)return"";if(K.constructor===Date)return JSON.stringify(K).slice(1,25);T===!0&&typeof K=="string"&&K.match(/^[=+\-@].*$/)!==null&&(K="'"+K);var $=K.toString().replace(I,E),U=typeof S=="boolean"&&S||typeof S=="function"&&S(K,L)||Array.isArray(S)&&S[L]||function(j,N){for(var O=0;O<N.length;O++)if(-1<j.indexOf(N[O]))return!0;return!1}($,o.BAD_DELIMITERS)||-1<$.indexOf(D)||$.charAt(0)===" "||$.charAt($.length-1)===" ";return U?F+$+F:$}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r",`
`,'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!e&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=m,o.ParserHandle=p,o.NetworkStreamer=c,o.FileStreamer=d,o.StringStreamer=h,o.ReadableStreamStreamer=u,t.jQuery){var r=t.jQuery;r.fn.parse=function(x){var _=x.config||{},S=[];return this.each(function(M){if(!(r(this).prop("tagName").toUpperCase()==="INPUT"&&r(this).attr("type").toLowerCase()==="file"&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var F=0;F<this.files.length;F++)S.push({file:this.files[F],inputElem:this,instanceConfig:r.extend({},_)})}),A(),this;function A(){if(S.length!==0){var M,F,E,B,P=S[0];if(w(x.before)){var T=x.before(P.file,P.inputElem);if(typeof T=="object"){if(T.action==="abort")return M="AbortError",F=P.file,E=P.inputElem,B=T.reason,void(w(x.error)&&x.error({name:M},F,E,B));if(T.action==="skip")return void D();typeof T.config=="object"&&(P.instanceConfig=r.extend(P.instanceConfig,T.config))}else if(T==="skip")return void D()}var I=P.instanceConfig.complete;P.instanceConfig.complete=function(et){w(I)&&I(et,P.file,P.inputElem),D()},o.parse(P.file,P.instanceConfig)}else w(x.complete)&&x.complete()}function D(){S.splice(0,1),A()}}}function l(x){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(_){var S=C(_);S.chunkSize=parseInt(S.chunkSize),_.step||_.chunk||(S.chunkSize=null),this._handle=new p(S),(this._handle.streamer=this)._config=S}.call(this,x),this.parseChunk=function(_,S){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var A=this._config.beforeFirstChunk(_);A!==void 0&&(_=A)}this.isFirstChunk=!1,this._halted=!1;var D=this._partialLine+_;this._partialLine="";var M=this._handle.parse(D,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var F=M.meta.cursor;this._finished||(this._partialLine=D.substring(F-this._baseIndex),this._baseIndex=F),M&&M.data&&(this._rowCount+=M.data.length);var E=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)t.postMessage({results:M,workerId:o.WORKER_ID,finished:E});else if(w(this._config.chunk)&&!S){if(this._config.chunk(M,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);M=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(M.data),this._completeResults.errors=this._completeResults.errors.concat(M.errors),this._completeResults.meta=M.meta),this._completed||!E||!w(this._config.complete)||M&&M.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),E||M&&M.meta.paused||this._nextChunk(),M}this._halted=!0},this._sendError=function(_){w(this._config.error)?this._config.error(_):s&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:_,finished:!1})}}function c(x){var _;(x=x||{}).chunkSize||(x.chunkSize=o.RemoteChunkSize),l.call(this,x),this._nextChunk=e?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(S){this._input=S,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),e||(_.onload=y(this._chunkLoaded,this),_.onerror=y(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!e),this._config.downloadRequestHeaders){var S=this._config.downloadRequestHeaders;for(var A in S)_.setRequestHeader(A,S[A])}if(this._config.chunkSize){var D=this._start+this._config.chunkSize-1;_.setRequestHeader("Range","bytes="+this._start+"-"+D)}try{_.send(this._config.downloadRequestBody)}catch(M){this._chunkError(M.message)}e&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:_.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(S){var A=S.getResponseHeader("Content-Range");return A===null?-1:parseInt(A.substring(A.lastIndexOf("/")+1))}(_),this.parseChunk(_.responseText)))},this._chunkError=function(S){var A=_.statusText||S;this._sendError(new Error(A))}}function d(x){var _,S;(x=x||{}).chunkSize||(x.chunkSize=o.LocalChunkSize),l.call(this,x);var A=typeof FileReader!="undefined";this.stream=function(D){this._input=D,S=D.slice||D.webkitSlice||D.mozSlice,A?((_=new FileReader).onload=y(this._chunkLoaded,this),_.onerror=y(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var D=this._input;if(this._config.chunkSize){var M=Math.min(this._start+this._config.chunkSize,this._input.size);D=S.call(D,this._start,M)}var F=_.readAsText(D,this._config.encoding);A||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(D){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(D.target.result)},this._chunkError=function(){this._sendError(_.error)}}function h(x){var _;l.call(this,x=x||{}),this.stream=function(S){return _=S,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var S,A=this._config.chunkSize;return A?(S=_.substring(0,A),_=_.substring(A)):(S=_,_=""),this._finished=!_,this.parseChunk(S)}}}function u(x){l.call(this,x=x||{});var _=[],S=!0,A=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(D){this._input=D,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):S=!0},this._streamData=y(function(D){try{_.push(typeof D=="string"?D:D.toString(this._config.encoding)),S&&(S=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(M){this._streamError(M)}},this),this._streamError=y(function(D){this._streamCleanUp(),this._sendError(D)},this),this._streamEnd=y(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function p(x){var _,S,A,D=Math.pow(2,53),M=-D,F=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,E=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,B=this,P=0,T=0,I=!1,et=!1,H=[],V={data:[],errors:[],meta:{}};if(w(x.step)){var K=x.step;x.step=function(O){if(V=O,U())$();else{if($(),V.data.length===0)return;P+=O.data.length,x.preview&&P>x.preview?S.abort():(V.data=V.data[0],K(V,B))}}}function L(O){return x.skipEmptyLines==="greedy"?O.join("").trim()==="":O.length===1&&O[0].length===0}function $(){if(V&&A&&(N("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),A=!1),x.skipEmptyLines)for(var O=0;O<V.data.length;O++)L(V.data[O])&&V.data.splice(O--,1);return U()&&function(){if(!V)return;function W(J,Q){w(x.transformHeader)&&(J=x.transformHeader(J,Q)),H.push(J)}if(Array.isArray(V.data[0])){for(var Z=0;U()&&Z<V.data.length;Z++)V.data[Z].forEach(W);V.data.splice(0,1)}else V.data.forEach(W)}(),function(){if(!V||!x.header&&!x.dynamicTyping&&!x.transform)return V;function W(J,Q){var Y,lt=x.header?{}:[];for(Y=0;Y<J.length;Y++){var st=Y,ct=J[Y];x.header&&(st=Y>=H.length?"__parsed_extra":H[Y]),x.transform&&(ct=x.transform(ct,st)),ct=j(st,ct),st==="__parsed_extra"?(lt[st]=lt[st]||[],lt[st].push(ct)):lt[st]=ct}return x.header&&(Y>H.length?N("FieldMismatch","TooManyFields","Too many fields: expected "+H.length+" fields but parsed "+Y,T+Q):Y<H.length&&N("FieldMismatch","TooFewFields","Too few fields: expected "+H.length+" fields but parsed "+Y,T+Q)),lt}var Z=1;return!V.data.length||Array.isArray(V.data[0])?(V.data=V.data.map(W),Z=V.data.length):V.data=W(V.data,0),x.header&&V.meta&&(V.meta.fields=H),T+=Z,V}()}function U(){return x.header&&H.length===0}function j(O,W){return Z=O,x.dynamicTypingFunction&&x.dynamicTyping[Z]===void 0&&(x.dynamicTyping[Z]=x.dynamicTypingFunction(Z)),(x.dynamicTyping[Z]||x.dynamicTyping)===!0?W==="true"||W==="TRUE"||W!=="false"&&W!=="FALSE"&&(function(J){if(F.test(J)){var Q=parseFloat(J);if(M<Q&&Q<D)return!0}return!1}(W)?parseFloat(W):E.test(W)?new Date(W):W===""?null:W):W;var Z}function N(O,W,Z,J){var Q={type:O,code:W,message:Z};J!==void 0&&(Q.row=J),V.errors.push(Q)}this.parse=function(O,W,Z){var J=x.quoteChar||'"';if(x.newline||(x.newline=function(lt,st){lt=lt.substring(0,1048576);var ct=new RegExp(g(st)+"([^]*?)"+g(st),"gm"),ot=(lt=lt.replace(ct,"")).split("\r"),at=lt.split(`
`),bt=1<at.length&&at[0].length<ot[0].length;if(ot.length===1||bt)return`
`;for(var Dt=0,Et=0;Et<ot.length;Et++)ot[Et][0]===`
`&&Dt++;return Dt>=ot.length/2?`\r
`:"\r"}(O,J)),A=!1,x.delimiter)w(x.delimiter)&&(x.delimiter=x.delimiter(O),V.meta.delimiter=x.delimiter);else{var Q=function(lt,st,ct,ot,at){var bt,Dt,Et,re;at=at||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var $t=0;$t<at.length;$t++){var ye=at[$t],ze=0,It=0,pe=0;Et=void 0;for(var Wt=new m({comments:ot,delimiter:ye,newline:st,preview:10}).parse(lt),ge=0;ge<Wt.data.length;ge++)if(ct&&L(Wt.data[ge]))pe++;else{var jt=Wt.data[ge].length;It+=jt,Et!==void 0?0<jt&&(ze+=Math.abs(jt-Et),Et=jt):Et=jt}0<Wt.data.length&&(It/=Wt.data.length-pe),(Dt===void 0||ze<=Dt)&&(re===void 0||re<It)&&1.99<It&&(Dt=ze,bt=ye,re=It)}return{successful:!!(x.delimiter=bt),bestDelimiter:bt}}(O,x.newline,x.skipEmptyLines,x.comments,x.delimitersToGuess);Q.successful?x.delimiter=Q.bestDelimiter:(A=!0,x.delimiter=o.DefaultDelimiter),V.meta.delimiter=x.delimiter}var Y=C(x);return x.preview&&x.header&&Y.preview++,_=O,S=new m(Y),V=S.parse(_,W,Z),$(),I?{meta:{paused:!0}}:V||{meta:{paused:!1}}},this.paused=function(){return I},this.pause=function(){I=!0,S.abort(),_=w(x.chunk)?"":_.substring(S.getCharIndex())},this.resume=function(){B.streamer._halted?(I=!1,B.streamer.parseChunk(_,!0)):setTimeout(B.resume,3)},this.aborted=function(){return et},this.abort=function(){et=!0,S.abort(),V.meta.aborted=!0,w(x.complete)&&x.complete(V),_=""}}function g(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(x){var _,S=(x=x||{}).delimiter,A=x.newline,D=x.comments,M=x.step,F=x.preview,E=x.fastMode,B=_=x.quoteChar===void 0?'"':x.quoteChar;if(x.escapeChar!==void 0&&(B=x.escapeChar),(typeof S!="string"||-1<o.BAD_DELIMITERS.indexOf(S))&&(S=","),D===S)throw new Error("Comment character same as delimiter");D===!0?D="#":(typeof D!="string"||-1<o.BAD_DELIMITERS.indexOf(D))&&(D=!1),A!==`
`&&A!=="\r"&&A!==`\r
`&&(A=`
`);var P=0,T=!1;this.parse=function(I,et,H){if(typeof I!="string")throw new Error("Input must be a string");var V=I.length,K=S.length,L=A.length,$=D.length,U=w(M),j=[],N=[],O=[],W=P=0;if(!I)return $t();if(E||E!==!1&&I.indexOf(_)===-1){for(var Z=I.split(A),J=0;J<Z.length;J++){if(O=Z[J],P+=O.length,J!==Z.length-1)P+=A.length;else if(H)return $t();if(!D||O.substring(0,$)!==D){if(U){if(j=[],bt(O.split(S)),ye(),T)return $t()}else bt(O.split(S));if(F&&F<=J)return j=j.slice(0,F),$t(!0)}}return $t()}for(var Q=I.indexOf(S,P),Y=I.indexOf(A,P),lt=new RegExp(g(B)+g(_),"g"),st=I.indexOf(_,P);;)if(I[P]!==_)if(D&&O.length===0&&I.substring(P,P+$)===D){if(Y===-1)return $t();P=Y+L,Y=I.indexOf(A,P),Q=I.indexOf(S,P)}else{if(Q!==-1&&(Q<Y||Y===-1)){if(!(Q<st)){O.push(I.substring(P,Q)),P=Q+K,Q=I.indexOf(S,P);continue}var ct=ze(Q,st,Y);if(ct&&ct.nextDelim!==void 0){Q=ct.nextDelim,st=ct.quoteSearch,O.push(I.substring(P,Q)),P=Q+K,Q=I.indexOf(S,P);continue}}if(Y===-1)break;if(O.push(I.substring(P,Y)),re(Y+L),U&&(ye(),T))return $t();if(F&&j.length>=F)return $t(!0)}else for(st=P,P++;;){if((st=I.indexOf(_,st+1))===-1)return H||N.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:j.length,index:P}),Et();if(st===V-1)return Et(I.substring(P,st).replace(lt,_));if(_!==B||I[st+1]!==B){if(_===B||st===0||I[st-1]!==B){Q!==-1&&Q<st+1&&(Q=I.indexOf(S,st+1)),Y!==-1&&Y<st+1&&(Y=I.indexOf(A,st+1));var ot=Dt(Y===-1?Q:Math.min(Q,Y));if(I[st+1+ot]===S){O.push(I.substring(P,st).replace(lt,_)),I[P=st+1+ot+K]!==_&&(st=I.indexOf(_,P)),Q=I.indexOf(S,P),Y=I.indexOf(A,P);break}var at=Dt(Y);if(I.substring(st+1+at,st+1+at+L)===A){if(O.push(I.substring(P,st).replace(lt,_)),re(st+1+at+L),Q=I.indexOf(S,P),st=I.indexOf(_,P),U&&(ye(),T))return $t();if(F&&j.length>=F)return $t(!0);break}N.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:j.length,index:P}),st++}}else st++}return Et();function bt(It){j.push(It),W=P}function Dt(It){var pe=0;if(It!==-1){var Wt=I.substring(st+1,It);Wt&&Wt.trim()===""&&(pe=Wt.length)}return pe}function Et(It){return H||(It===void 0&&(It=I.substring(P)),O.push(It),P=V,bt(O),U&&ye()),$t()}function re(It){P=It,bt(O),O=[],Y=I.indexOf(A,P)}function $t(It){return{data:j,errors:N,meta:{delimiter:S,linebreak:A,aborted:T,truncated:!!It,cursor:W+(et||0)}}}function ye(){M($t()),j=[],N=[]}function ze(It,pe,Wt){var ge={nextDelim:void 0,quoteSearch:void 0},jt=I.indexOf(_,pe+1);if(pe<It&&It<jt&&(jt<Wt||Wt===-1)){var ai=I.indexOf(S,jt);if(ai===-1)return ge;jt<ai&&(jt=I.indexOf(_,jt+1)),ge=ze(ai,jt,Wt)}else ge={nextDelim:It,quoteSearch:pe};return ge}},this.abort=function(){T=!0},this.getCharIndex=function(){return P}}function f(x){var _=x.data,S=n[_.workerId],A=!1;if(_.error)S.userError(_.error,_.file);else if(_.results&&_.results.data){var D={abort:function(){A=!0,b(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(w(S.userStep)){for(var M=0;M<_.results.data.length&&(S.userStep({data:_.results.data[M],errors:_.results.errors,meta:_.results.meta},D),!A);M++);delete _.results}else w(S.userChunk)&&(S.userChunk(_.results,D,_.file),delete _.results)}_.finished&&!A&&b(_.workerId,_.results)}function b(x,_){var S=n[x];w(S.userComplete)&&S.userComplete(_),S.terminate(),delete n[x]}function v(){throw new Error("Not implemented.")}function C(x){if(typeof x!="object"||x===null)return x;var _=Array.isArray(x)?[]:{};for(var S in x)_[S]=C(x[S]);return _}function y(x,_){return function(){x.apply(_,arguments)}}function w(x){return typeof x=="function"}return s&&(t.onmessage=function(x){var _=x.data;if(o.WORKER_ID===void 0&&_&&(o.WORKER_ID=_.workerId),typeof _.input=="string")t.postMessage({workerId:o.WORKER_ID,results:o.parse(_.input,_.config),finished:!0});else if(t.File&&_.input instanceof File||_.input instanceof Object){var S=o.parse(_.input,_.config);S&&t.postMessage({workerId:o.WORKER_ID,results:S,finished:!0})}}),(c.prototype=Object.create(l.prototype)).constructor=c,(d.prototype=Object.create(l.prototype)).constructor=d,(h.prototype=Object.create(h.prototype)).constructor=h,(u.prototype=Object.create(l.prototype)).constructor=u,o})});var Qh=["rgba(216,38,47,1)","rgba(59,139,204,1)","rgba(186,178,30,1)","rgba(51,69,170,1)","rgba(226,96,148,1)","rgba(91,44,99,1)"],ml=i=>{let t=0,e=n=>{let a=Qh,o=t,r=null,l=(()=>{let c={};return Array.from(i).forEach(d=>{d.getLeftTraces().forEach(h=>{c[h.getColor()]=!0})}),d=>c[d]===void 0})();if(n&&a.indexOf(n)>=0&&l(n)&&(r=n),!r){let c;for(c=0;c<a.length&&(r=a[(o+c)%a.length],!l(r));++c);c===0&&(t++,t%=a.length)}return r};return i.forEach(n=>n.setGetTraceColor(e)),{reset:()=>{t=0},getNext:e}};var bl=(i,t)=>{let{closestXPt:e,isGestureFinished:s,examineHidden:n}=i?.graph_1||{},{coreGraphEls:[a]=[]}=t,o=a&&a.getBaseColumn();return!o||n||!t.synchronizeExaminePinAndTable()?-1:o&&s?o.values.findIndex(r=>r===e):t.tableExamineIndex};var un=rt`
  vst-core-content-layout {
    --min-size: 25%;
    --drag-handle-size: 4px;
    --orientation: portrait;

    --panel1-size: 66%;
    --panel2-size: calc(100% - var(--panel1-size));
    --panel3-size: 50%;
    --panel4-size: calc(100% - var(--panel3-size));
    --col1-size: 66%;
    --col2-size: calc(100% - var(--col1-size));
  }

  ${ui("m",rt`
      vst-core-content-layout {
        --min-size: 15%;
      }
    `)}

  :host {
    display: flex;
    height: 100%;
    flex: 1;
    overflow: hidden;
  }

  .content-layout {
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 0;
    background-color: var(--vst-color-bg);
  }

  /* Portrait Grids */
  .content-layout--visible-2 {
    grid-template-rows: minmax(var(--min-size), var(--panel1-size)) var(--drag-handle-size) minmax(
        var(--min-size),
        var(--panel2-size)
      );
  }

  .content-layout--visible-3 {
    grid-template-rows:
      minmax(var(--min-size), var(--panel1-size)) var(--drag-handle-size) minmax(
        var(--min-size),
        var(--panel2-size)
      )
      var(--drag-handle-size) minmax(var(--min-size), var(--panel3-size));
  }

  .content-layout--visible-4 {
    grid-template-rows: minmax(var(--min-size), var(--col1-size)) var(--drag-handle-size) minmax(
        var(--min-size),
        var(--col2-size)
      );
  }

  .content-layout--visible-4 .content-layout__subgrid {
    display: grid;
  }

  .content-layout--visible-4 .content-layout__subgrid-1 {
    grid-template-rows: minmax(var(--min-size), var(--panel1-size)) var(--drag-handle-size) minmax(
        var(--min-size),
        var(--panel2-size)
      );
  }

  .content-layout--visible-4 .content-layout__subgrid-2 {
    grid-template-rows: minmax(var(--min-size), var(--panel3-size)) var(--drag-handle-size) minmax(
        var(--min-size),
        var(--panel4-size)
      );
  }

  /* Divider Styling */
  .content-layout__divider {
    border: 0;
    padding: 0;
    cursor: row-resize;
    position: relative;
    background-color: var(--vst-color-bg-primary);
    z-index: 2;
    block-size: 100%;
    inline-size: 100%;
  }

  .content-layout__divider:focus {
    box-shadow: none;
  }

  .content-layout__divider:focus::after {
    box-shadow: var(--vst-outline);
  }

  .content-layout__divider:not(:focus-visible)::after {
    box-shadow: none;
  }

  #panel_divider_1 {
    z-index: 3;
  }
  .content-layout__divider:hover {
    background-color: var(--vst-color-bg-light);
  }

  .content-layout__divider:focus {
    outline: 0;
  }

  .content-layout__divider:focus::after {
    background: var(--vst-color-bg);
  }

  .content-layout__divider::after {
    display: block;
    content: '';
    width: 2rem;
    height: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--vst-color-divider-thumb-bg);
    border: 1px solid var(--vst-color-divider-thumb-border);
    border-radius: 0.1875rem;
  }

  .content-layout__divider:active::after {
    background: var(--vst-color-divider-thumb-bg-active);
  }

  /* Portrait Divider Positioning */
  #panel_divider_1 {
    grid-row: 2 / 3;
  }

  #panel_divider_2 {
    grid-row: 4 / 5;
  }

  .content-layout--visible-4 .content-layout__divider {
    grid-row: auto !important;
  }

  /* Animations */
  /* TODO: fix this in a permanant way, this is a temp fix for iOS on GA 4.11 */
  /* .content-layout__panel:not(#video), */
  .content-layout__divider {
    animation-name: slideIn;
    animation-duration: var(--startup-animation-duration);
    animation-timing-function: var(--startup-animation-timing-function);
    animation-iteration-count: 1;
    animation-delay: var(--startup-animation-base-delay);
    transform: translateX(100%);
    animation-fill-mode: forwards;
  }

  .content-layout__divider {
    animation-name: fadeIn;
    animation-delay: var(--startup-animation-secondary-delay);
    opacity: 0;
    transform: none;
  }

  @media (prefers-reduced-motion), print {
    .content-layout__panel:not(#video),
    .content-layout__divider {
      animation: none;
      transform: none;
      opacity: 1;
    }
  }

  ${Jr}
  ${Qr}

  ${ui("landscape",rt`
      vst-core-content-layout {
        --orientation: landscape;
        --panel1-size: 66%;
      }

      /* Landscape Grids */
      .content-layout--visible-2 {
        grid-template-rows: 100%;
        grid-template-columns: minmax(var(--min-size), var(--panel1-size)) var(--drag-handle-size) minmax(
            var(--min-size),
            1fr
          );
      }
      .content-layout--visible-3 {
        --panel2-size: calc(100% - var(--panel3-size));
        grid-template-rows: minmax(var(--min-size), var(--panel2-size)) var(--drag-handle-size) minmax(
            var(--min-size),
            var(--panel3-size)
          );
        grid-template-columns: minmax(var(--min-size), var(--panel1-size)) var(--drag-handle-size) minmax(
            var(--min-size),
            1fr
          );
      }

      .content-layout--visible-4 {
        grid-template-rows: 100%;
        grid-template-columns: minmax(var(--min-size), var(--col1-size)) var(--drag-handle-size) minmax(
            var(--min-size),
            var(--col2-size)
          );
      }

      .content-layout__subgrid-1 {
        grid-template-rows: minmax(var(--min-size), var(--panel1-size)) var(--drag-handle-size) minmax(
            var(--min-size),
            var(--panel2-size)
          );
      }

      .content-layout__subgrid-2 {
        grid-template-rows: minmax(var(--min-size), var(--panel3-size)) var(--drag-handle-size) minmax(
            var(--min-size),
            var(--panel4-size)
          );
      }

      /* Landscape Panels */
      /* What we want is the first item with a certain class to be big one. Since nth-of-type can't do a class some adjacent magic is needed
    https://stackoverflow.com/questions/6447045/css3-selector-first-of-type-with-class-name */
      .content-layout--visible-3 ::slotted(.content-layout__panel:not([hidden])) {
        grid-row: 1 / -1;
      }

      .content-layout__panel:not([hidden]) ~ .content-layout__panel:not([hidden]) {
        grid-row: auto;
      }

      /* Landscape Divider Styling */
      .content-layout__divider--divider1,
      .content-layout--visible-2 .content-layout__divider--divider2 {
        cursor: col-resize;
      }
      .content-layout__divider--divider1::after,
      .content-layout--visible-2 .content-layout__divider--divider2::after {
        width: 1rem;
        height: 2rem;
      }

      .content-layout__divider--divider1::after {
        left: 25%;
      }

      /* Landscape Divider Positioning */
      #panel_divider_1 {
        grid-row: 1 / -1;
        grid-column: 2 / 3;
      }

      .content-layout--visible-2 #panel_divider_2 {
        grid-row: 1 / -1;
        grid-column: 2 / 3;
      }

      .content-layout--visible-3 #panel_divider_2 {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
      }

      .content-layout--visible-4 .content-layout__divider {
        grid-row: auto !important;
        grid-column: auto !important;
      }
    `)}
`;var xl=({detail:{currentPoint:i,code:t,shift:e}},{points:s,precision:n,analysisStore:a})=>{let o=s.length,r=s.indexOf(s.find(c=>parseFloat(c[0]).toFixed(n)===parseFloat(i.value).toFixed(n)));t==="ArrowRight"?r=e?Math.ceil(r+o/10):r+1:t==="ArrowLeft"&&(r=e?Math.floor(r-o/10):r-1),r<0&&(r=0),r>o-1&&(r=o-1);let l=s[r][0];a?.updateExaminePosition({xPosition:l,closestXPt:l})};var vl=(i,t,e)=>{let s=async l=>{let c={traceDataSets:[],analysisItems:[],infoBoxData:{}},{tracesInfo:d=[]}=l,h=i.dataWorld.manualFits.find(T=>T.id===l.manualFitId),{baseColumnId:u,coefficients:p,fitType:g,yColumnId:m}=h,f=d.find(T=>parseInt(T.xid,10)===u&&parseInt(T.yid,10)===m);if(d.length===0||!f)return c;let v=i.dataWorld.manualFits.filter(T=>f.xid===`${T.baseColumnId}`&&f.yid===`${T.yColumnId}`).findIndex(T=>T===h),C=t.getBaseRange(),y=(T,I,et)=>T*I+et;function w(T,I){let H=T.reduce((V,K,L)=>V+(K-I[L])**2,0)/T.length;return Math.sqrt(H)}let[x,_]=p,{coefficients:S,y:A}=Vs.getFitById(g),D=i.dataWorld.getColumnById(u),M=i.dataWorld.getColumnById(m),F=[C.min,y(x,C.min,_)],E=[C.max,y(x,C.max,_)],B=Kr(f.traceColor,v*60+60),P=w(D.filteredValues.map(T=>y(x,T,_)),M.filteredValues);return h.setStats({rmse:P}),c.analysisItems.push(wt(tt({},f),{coeffs:S})),c.traceDataSets.push({dataPoints:[F,E],traceColor:B,yColumnId:f.yid,axis:f.axis}),c.infoBoxData={curveFitName:k("Manual Fit"),manualFit:h,showUncertainty:!1,relatedTrace:f,curveFitInfo:[{coefficients:[{name:"m",value:ln(x,5)},{name:"b",value:ln(_,5)}],rmse:ln(P,5),traceColor:B,y:A,yUnits:M.units}]},c},n=l=>{let{range:c,curveFitType:d,tracesInfo:h=[],showUncertainty:u}=l,p=Vs.getFit(d),g=p?k(p.name,"mathematical"):"",m=p?p.coefficients.length:0,f=[],b=[],v=[],C=h.map(async y=>{try{let w=e(y.xid)||"",x=e(y.yid)||"";await i.vstAnalysis.setUseRadians(w!=="\xB0");let _=await i.calculateFitByType(d,y.xid,y.yid,c);if(_?.error)b.push({traceColor:y.traceColor,error:_.error}),f.push({dataPoints:[],traceColor:y.traceColor,yColumnId:y.yid,axis:y.axis}),v.push(wt(tt({},y),{coeffs:new Array(m)}));else{let{coefficients:S=[],fitInfo:A={}}=_;A.traceColor=y.traceColor,A.yUnits=x;let D=t.getBaseRange(),M=Math.abs(D.max-D.min)/t.getPxWidth(),F=await i.computeTraceByType(d,S,D,M);b.push(A),f.push({dataPoints:F.points,traceColor:y.traceColor,yColumnId:y.yid,axis:y.axis}),v.push(wt(tt({},y),{coeffs:S,rmse:Number(A.rmse),correlation:Number(A.r)}))}}catch(w){console.error(w),f.push({dataPoints:[],traceColor:"rgba(0,0,0,1)",yColumnId:y.yid,axis:y.axis})}});return Promise.all(C).then(()=>({traceDataSets:f,analysisItems:v,infoBoxData:{curveFitName:g,showUncertainty:u,curveFitInfo:b}}))},a=l=>{let{range:c}=l,d=[],h=[],u=[];return l.tracesInfo.forEach(p=>{let g=i.calculateIntegralAndGetData(p.xid,p.yid,c)||{};if(g.success){let m=e(p.xid)||"",f=e(p.yid)||"",b=m.length&&f.length?"\u22C5":"";d.push({dataPoints:g.integralData,traceColor:p.traceColor,axis:p.axis}),h.push({integralValue:Bt.getValue(g.integralValue),traceColor:p.traceColor,units:`${f}${b}${m}`}),u.push(tt({},p))}else d.push({dataPoints:[],traceColor:"rgba(0,0,0,1)",axis:p.axis}),u.push(tt({},p)),h.push({})}),Promise.resolve({traceDataSets:d,infoBoxData:h,analysisItems:u})},o=l=>{let{range:c,isRangeIndexBased:d}=l,h=[],u={xStats:{deltaX:d?"":Bt.getValue(c.max-c.min)},yStats:[]};return l.tracesInfo.forEach(p=>{let{success:g,stats:m,error:f}=i.calculateStatistics(p.xid,p.yid,c,d);if(g){let b=e(p.yid)||"";h.push(tt({},p));let v=C=>typeof C=="number"?Bt.getValue(C):`"${C}"`;u.yStats.push({yUnits:b,traceColor:p.traceColor,deltaY:Bt.getValue(m.max.y-m.min.y),samples:m.points.length,mean:Bt.getValue(m.mean),stdDev:Bt.getValue(m.stdDev),min:{value:Bt.getValue(m.min.y),at:v(m.min.x)},max:{value:Bt.getValue(m.max.y),at:v(m.max.x)}})}else f&&console.error(f)}),Promise.resolve({infoBoxData:u,analysisItems:h})};return l=>{let c={},d=[];return Object.values(l).forEach(h=>{let{id:u}=h;switch(h.analysisType){case"curveFits":d.push(n(h).then(p=>{c[u]=p}));break;case"integrals":d.push(a(h).then(p=>{c[u]=p}));break;case"statistics":d.push(o(h).then(p=>{c[u]=p}));break;case"manual-fits":d.push(s(h).then(p=>{c[u]=p}));break;default:d.push(Promise.resolve().then(()=>{c[u]={}}));break}}),Promise.all(d).then(()=>c)}};var yl=(i,t)=>{let e=[],s=1,n=h=>(u,p)=>{let m={curveFits:{add:i.addGraphCurveFit.bind(i),remove:i.removeGraphCurveFit.bind(i)},integrals:{add:i.addGraphIntegral.bind(i),remove:i.removeGraphIntegral.bind(i)},"manual-fits":{add:async()=>{},remove:async()=>{}},statistics:{add:i.addGraphStats.bind(i),remove:i.removeGraphStats.bind(i)}}[p.type][h],f={fitId:p.udmId,integralId:p.udmId,statsId:p.udmId,baseColumnId:p.xid,traceColumnId:p.yid,xMin:p.range.min,xMax:p.range.max};p.type==="curveFits"&&Object.assign(f,_r(p,["coeffs","rmse","correlation","fitType","showUncertainty"]));let b=h==="remove"?p.udmId:f;return m(u,b).then(({fitId:v,integralId:C,statsId:y}={})=>({udmId:v||C||y})).catch(v=>console.error(v))},a=n("add"),o=n("remove"),r=n("add");return{updateUdmWithAppState:async(h,u)=>{let p=Object.values(u).reduce((y,{analysisItems:w=[],range:x,analysisType:_,curveFitType:S,id:A,showUncertainty:D})=>[...y,...w.map(M=>wt(tt({},M),{range:x,type:_,fitType:S,selectionId:A,showUncertainty:D}))],[]),g=y=>w=>y.xid===w.xid&&y.yid===w.yid&&y.selectionId===w.selectionId&&y.type===w.type,m=y=>!e.find(g(y)),f=y=>!p.find(g(y)),b=e.filter(f),v=p.filter(m),C=p.filter(y=>!m(y));return b.forEach(y=>{let w=e.findIndex(g(y));e.splice(w,1),y.udmId&&o(h,y)}),await Promise.all(v.map(async y=>{let w=s++;e.push(wt(tt({},y),{middlewareId:w}));let{udmId:x}=await a(h,y);y.udmId=x;let _=D=>D.middlewareId===w,S=e.find(_);!S?o(h,wt(tt({},S),{udmId:x})):(S.udmId=x,S.udmUpdateRequested&&(S.udmUpdateRequested=!1,r(h,S)))})),await Promise.all(C.map(async y=>{let w=e.find(g(y));w.range=tt({},y.range),w.coeffs=y.coeffs,w.rmse=y.rmse,w.correlation=y.correlation,w.fitType=y.fitType,w.showUncertainty=y.showUncertainty,w.udmId?(r(h,w),y.udmId=w.udmId):w.udmUpdateRequested=!0})),{addedAnalysis:v,changedAnalysis:C}},updateAppWithUdmState:h=>{["curveFits","integrals","manual-fits","statistics"].forEach(u=>{if(h[u]){let p=h[u].reduce((g,m)=>{let{range:{min:f,max:b}={},fitType:v,infoBox:C,showUncertainty:y=!1,id:w=0}=m,x=w!==0&&u==="manual-fits"?w:0,_=`${f}-${b}-${u}-${v}${x?"-":""}${x||""}`,{analysisItems:S=[]}=g[_]||{};return wt(tt({},g),{[_]:{range:{min:f,max:b},curveFitType:v,infoBox:C,analysisItems:[...S,m],showUncertainty:y,manualFitId:x}})},{});Object.values(p).forEach(g=>{let m=Ji("selection-");g.analysisItems.forEach(v=>{e.push({middlewareId:s++,selectionId:m,type:u,range:tt({},g.range),fitType:v.fitType,xid:`${v.baseColumnId}`,yid:`${v.traceColumnId}`,udmId:v.fitId||v.integralId||v.statisticId||v.manualFitId,showUncertainty:g.showUncertainty})});let f=g.analysisItems.some(v=>i.getColumnById(v.baseColumnId)?.isCategorical),b={infoBox:g.infoBox,autoGenerated:!0,permanent:!0,range:g.range,curveFitType:g.curveFitType,analysisType:u,isRangeIndexBased:f,showUncertainty:g.showUncertainty,manualFitId:g.manualFitId};t(b,()=>m)})}})},reset:()=>{e=[]},_getAnalysisState:()=>e}};var _l=class extends ht{static get properties(){return{frequencyData:{type:Array}}}static get styles(){return[ut,rt`
        .flex {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .peak-frequency-wrapper {
          padding: var(--vst-space-xs);
          padding-inline-end: var(--vst-space-2xs);
        }

        .peak-frequency-wrapper .flex:not(:first-child) {
          margin-block-start: var(--vst-space-2xs);
        }
      `]}render(){return q`
      <div class="peak-frequency-wrapper">
        <h3 class="heading" margin="block-start-0 block-end-2xs" size="s">
          ${k("Peak Frequency")}
        </h3>
        ${this.frequencyData.map(({name:t,color:e,frequency:s})=>q`
            <div class="flex">
              <vst-ui-icon size="xs" .icon="${Tr}" color="${e}"></vst-ui-icon>
              <p class="caption" margin="inline-start-2xs">
                ${this.frequencyData.length>1?`${t} - `:""}${s}
              </p>
            </div>
          `)}
      </div>
    `}};customElements.define("ga-fft-peak-frequency",_l);var wl=class extends ht{static get properties(){return{removeLinearTrend:{type:Boolean,reflect:!0},useWindowing:{type:Boolean,reflect:!0}}}static get styles(){return ut}constructor(){super();this.removeLinearTrend=!0,this.useWindowing=!0}_toggleRemoveLinearTrend({detail:t}){this.dispatchEvent(new CustomEvent("fft-options-updated",{detail:{removeLinearTrend:t},bubbles:!0,composed:!0}))}_toggleUseWindowing({detail:t}){this.dispatchEvent(new CustomEvent("fft-options-updated",{detail:{useWindowing:t},bubbles:!0,composed:!0}))}render(){return q`
      <vst-ui-switch
        margin="block-end-xs"
        .checked="${this.removeLinearTrend}"
        .label="${k("Remove Linear Trend")}"
        @switch-changed="${this._toggleRemoveLinearTrend}"
      ></vst-ui-switch>
      <vst-ui-switch
        .checked="${this.useWindowing}"
        .label="${k("Use Windowing")}"
        @switch-changed="${this._toggleUseWindowing}"
      ></vst-ui-switch>
    `}};customElements.define("ga-fft-options",wl);var Cl=class extends ht{static get properties(){return{selectedViewMode:{type:String},showFFTOptions:{type:Boolean},removeLinearTrend:{type:Boolean,reflect:!0},useWindowing:{type:Boolean,reflect:!0}}}static get styles(){return[ut,rt`
        .fft-menu {
          display: flex;
          border: 1px solid var(--vst-color-bg-primary);
          border-radius: var(--vst-radius);
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: var(--vst-color-bg-graph);
          z-index: calc(
            var(--vst-z-selection) + 2
          ); /* added to show the settings popover in front of the examine pin line */
          height: 34px;
        }

        .fft-menu [selected],
        .fft-menu [selected]:hover {
          background: var(--vst-color-brand);
        }

        .fft-menu .btn {
          border-radius: 0;
        }

        .fft-menu vst-style-tooltip:first-child .btn {
          border-radius: var(--vst-radius) 0 0 var(--vst-radius);
        }

        .fft-menu vst-style-tooltip:last-child .btn {
          border-radius: 0 var(--vst-radius) var(--vst-radius) 0;
        }

        vst-style-tooltip .tooltip {
          block-size: 100%;
        }
      `]}constructor(){super();this.selectedViewMode="aux-view",this.showFFTOptions=!1,this.removeLinearTrend=!0,this.useWindowing=!0}_setViewMode(t){this.selectedViewMode=t,this.dispatchEvent(new CustomEvent("fft-view-mode-updated",{detail:t,bubbles:!0,composed:!0}))}_cancelFFT(){this.dispatchEvent(new CustomEvent("fft-cancelled",{bubbles:!0,composed:!0}))}_devCopyToClipboard(){this.dispatchEvent(new CustomEvent("fft-dev-copy-to-clipboard",{bubbles:!0,composed:!0}))}_toggleFFTOptions(){this.showFFTOptions=!this.showFFTOptions}render(){return q`
      <div class="fft-menu">
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="default_graph_view_btn"
            @click="${()=>this._setViewMode("source-view")}"
            ?selected="${this.selectedViewMode==="source-view"}"
          >
            <vst-ui-icon
              .icon="${zs}"
              color="${this.selectedViewMode==="source-view"?"var(--vst-color-bg-light)":"var(--vst-color-fg-primary)"}"
            >
            </vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start">${k("Show Original Graph")}</span>
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="fft_graph_view_btn"
            @click="${()=>this._setViewMode("aux-view")}"
            ?selected="${this.selectedViewMode==="aux-view"}"
          >
            <vst-ui-icon
              .icon="${rn}"
              size="s"
              color="${this.selectedViewMode==="aux-view"?"var(--vst-color-bg-light)":"var(--vst-color-fg-primary)"}"
            >
            </vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Show FFT")}</span>
        </vst-style-tooltip>
        <vst-ui-dropdown
          ?open="${this.showFFTOptions}"
          position="top-right"
          @closed="${this._toggleFFTOptions}"
        >
          <vst-style-tooltip slot="anchor">
            <button
              class="btn"
              id="fft_options_btn"
              variant="icon"
              @click="${this._toggleFFTOptions}"
            >
              <vst-ui-icon .icon="${an}" size="s"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-start-end">${k("FFT options")}</span>
          </vst-style-tooltip>
          <ga-fft-options
            slot="content"
            ?useWindowing="${this.useWindowing}"
            ?removeLinearTrend="${this.removeLinearTrend}"
          ></ga-fft-options>
        </vst-ui-dropdown>
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="fft_dev_clipboard_btn"
            @click="${this._devCopyToClipboard}"
            ?hidden="${!se("ff-ga-fft-dev-clipboard")}"
          >
            <vst-ui-icon .icon="${on}" size="s"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Copy to clipboard")}</span>
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button class="btn" variant="icon" id="close_fft_btn" @click="${this._cancelFFT}">
            <vst-ui-icon .icon="${je}" size="s"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Close FFT")}</span>
        </vst-style-tooltip>
      </div>
    `}};customElements.define("ga-fft-btn-group",Cl);var Sl=class extends ht{static get properties(){return{binWidth:{type:Number,reflect:!0},binStart:{type:Number,reflect:!0}}}static get styles(){return ut}constructor(){super();this.binWidth=1,this.binStart=.5}_setBinWidth({target:{value:t}}){let e=parseFloat(t);Number.isNaN(e)||e<=0||this.dispatchEvent(new CustomEvent("histogram-options-updated",{detail:{binWidth:e},bubbles:!0,composed:!0}))}_setBinStart({target:{value:t}}){let e=parseFloat(t);Number.isNaN(e)||this.dispatchEvent(new CustomEvent("histogram-options-updated",{detail:{binStart:e},bubbles:!0,composed:!0}))}render(){return q`
      <div class="stack" gap="m">
        <label class="label stack" gap="xs">
          <span>${k("Bin Width")}</span>
          <input
            type="number"
            @input="${this._setBinWidth}"
            step="any"
            min="1e-6"
            .value="${this.binWidth}"
          />
        </label>
        <label class="label stack" gap="xs">
          <span>${k("Bin Start Value")}</span>
          <input type="number" @input="${this._setBinStart}" step="any" .value="${this.binStart}" />
        </label>
      </div>
    `}};customElements.define("ga-histogram-options",Sl);var Il=class extends ht{static get properties(){return{selectedViewMode:{type:String},showHistogramOptions:{type:Boolean},binWidth:{type:Number,reflect:!0},binStart:{type:Number,reflect:!0}}}static get styles(){return[ut,rt`
        .histogram-menu {
          display: flex;
          border: 1px solid var(--vst-color-bg-primary);
          border-radius: var(--vst-radius);
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: var(--vst-color-bg-graph);
          z-index: calc(
            var(--vst-z-selection) + 2
          ); /* added to show the settings popover in front of the examine pin line */
          height: 34px;
        }

        .histogram-menu [selected],
        .histogram-menu [selected]:hover {
          background: var(--vst-color-brand);
        }

        .histogram-menu .btn {
          border-radius: 0;
        }

        .histogram-menu vst-style-tooltip:first-child .btn {
          border-radius: var(--vst-radius) 0 0 var(--vst-radius);
        }

        .histogram-menu vst-style-tooltip:last-child .btn {
          border-radius: 0 var(--vst-radius) var(--vst-radius) 0;
        }
      `]}constructor(){super();this.showHistogramOptions=!1,this.binWidth=1,this.binStart=.5}_setViewMode(t){this.selectedViewMode=t,this.dispatchEvent(new CustomEvent("histogram-view-mode-updated",{detail:t,bubbles:!0,composed:!0}))}_cancelHistogram(){this.dispatchEvent(new CustomEvent("histogram-cancelled",{bubbles:!0,composed:!0}))}_devCopyToClipboard(){this.dispatchEvent(new CustomEvent("histogram-dev-copy-to-clipboard",{bubbles:!0,composed:!0}))}_toggleHistogramOptions(){this.showHistogramOptions=!this.showHistogramOptions}render(){return q`
      <div class="histogram-menu">
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="default_graph_view_btn"
            @click="${()=>this._setViewMode("source-view")}"
            ?selected="${this.selectedViewMode==="source-view"}"
          >
            <vst-ui-icon
              .icon="${zs}"
              color="${this.selectedViewMode==="source-view"?"var(--vst-color-bg-light)":"var(--vst-color-fg-primary)"}"
            >
            </vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Show Original Graph")}</span>
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="histogram_graph_view_btn"
            @click="${()=>this._setViewMode("aux-view")}"
            ?selected="${this.selectedViewMode==="aux-view"}"
          >
            <vst-ui-icon
              .icon="${rn}"
              size="s"
              color="${this.selectedViewMode==="aux-view"?"var(--vst-color-bg-light)":"var(--vst-color-fg-primary)"}"
            >
            </vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Show Histogram")}</span>
        </vst-style-tooltip>
        <vst-ui-dropdown
          ?open="${this.showHistogramOptions}"
          position="top-right"
          @closed="${this._toggleHistogramOptions}"
        >
          <vst-style-tooltip slot="anchor">
            <button
              class="btn"
              id="histogram_options_btn"
              variant="icon"
              @click="${this._toggleHistogramOptions}"
            >
              <vst-ui-icon .icon="${an}" size="s"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-start-end">${k("Histogram options")}</span>
          </vst-style-tooltip>
          <ga-histogram-options
            slot="content"
            binWidth="${this.binWidth}"
            binStart="${this.binStart}"
          ></ga-histogram-options>
        </vst-ui-dropdown>
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="histogram_dev_clipboard_btn"
            @click="${this._devCopyToClipboard}"
            ?hidden="${!se("ff-ga-histogram-dev-clipboard")}"
          >
            <vst-ui-icon .icon="${on}" size="s"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Copy To Clipboard")}</span>
        </vst-style-tooltip>
        <vst-style-tooltip>
          <button
            class="btn"
            variant="icon"
            id="close_histogram_btn"
            @click="${this._cancelHistogram}"
          >
            <vst-ui-icon .icon="${je}" size="s"></vst-ui-icon>
          </button>
          <span role="tooltip" position="block-start-end">${k("Close Histogram")}</span>
        </vst-style-tooltip>
      </div>
    `}};customElements.define("ga-histogram-btn-group",Il);var bi=class extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s}};function ja(i){return i}var xi=class{constructor(t,e,s,n){var a;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,r)=>{this.unsubscribe&&(this.unsubscribe!==r&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,r)),this.unsubscribe=r},this.host=t,e.context!==void 0){let o=e;this.context=o.context,this.callback=o.callback,this.subscribe=(a=o.subscribe)!==null&&a!==void 0&&a}else this.context=e,this.callback=s,this.subscribe=n!=null&&n;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new bi(this.context,this.t,this.subscribe))}};var Va=class{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(let[e,s]of this.callbacks)e(this.o,s)},t!==void 0&&(this.value=t)}get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,()=>{this.callbacks.delete(t)})),t(this.value)}clearCallbacks(){this.callbacks.clear()}};var El=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,Object.setPrototypeOf(this,new.target.prototype)}},vi=class extends Va{constructor(t,e,s){super(e.context!==void 0?e.initialValue:s),this.onContextRequest=n=>{n.context===this.context&&n.composedPath()[0]!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,n.subscribe))},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new El(this.context))}};var Na=({strEl:i,strEls:t,str:e,maxWidth:s})=>{let n=e.replace(/\s/g,"");if(s&&i&&i.style.setProperty("max-inline-size",s),i?(i.style.setProperty("overflow",""),i.classList.remove("str--truncate"),i.classList.add("str-container--truncate")):t&&t.forEach(a=>{a.classList.add("str-container"),a.classList.add("str-container--truncate"),a.style.setProperty("overflow",""),a.classList.remove("str--truncate")}),/[a-zA-Z]+\d+(\.\d+)?velocity$/i.test(n)){let a=n.match(/[a-zA-Z]+\d+(\.\d+)?velocity$/i)[0],o=a.match(/^[a-zA-Z]+/i)[0],r=a.match(/\d+(\.\d+)?/)[0],l=a.match(/velocity$/i)[0];return q`
      <span class="str__inner--truncate str--truncate">${o}</span>
      <span>${r}</span>
      <span class="str__inner--truncate str--truncate">${l}</span>
    `}if(/\d+(\.\d+)?$/.test(n)){let a=n.match(/[a-zA-Z]+/g)[0],o=n.match(/\d+(\.\d+)?$/)[0];return q`
      <span class="str__inner--truncate str--truncate"> ${a} </span>
      <span>${o}</span>
    `}return i&&(i.style.setProperty("overflow","hidden"),i.classList.add("str--truncate")),q`${n}`},kl=rt`
  .str-container {
    position: relative;
  }

  .str-container--truncate {
    display: flex;
  }

  .str__inner--truncate {
    position: relative;
    overflow: hidden;
  }

  .str--truncate::after {
    display: block;
    font-weight: normal;
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--vst-color-bg-secondary);
  }
`;var Ha=class{constructor(t,e,s,n,a){this._xAxis=t,this._yAxis=e,this._rightAxis=s,this._element=n,this._handler=a,this.handlePinch=this.handlePinch.bind(this),n.addEventListener("touchstart",this.handlePinch),n.addEventListener("touchmove",this.handlePinch),n.addEventListener("touchend",this.handlePinch),n.addEventListener("touchcancel",this.handlePinch)}handlePinch(t){if(t.touches.length!==2)return;let{_xAxis:e,_yAxis:s,_rightAxis:n}=this,{x1:a,y1:o,x2:r,y2:l}=this._adjustEventPositions(t),{type:c}=t;if(c==="touchstart"){this._xStartRange=e.range,this._yStartRange=s.range,this._startPoint1={x:e.c2p(a),y:s.c2p(o)},this._startPoint2={x:e.c2p(r),y:s.c2p(l)},n&&(this._rightStartRange=n.range,this._rightStartY1=n.c2p(o),this._rightStartY2=n.c2p(l)),this._startingDistance=Math.hypot(this._startPoint2.x-this._startPoint1.x,this._startPoint2.y-this._startPoint1.y);let y=Math.abs(Math.atan2(l-o,r-a));y=y>Math.PI/2?Math.PI-y:y;let w=Math.PI/8,x=3*Math.PI/8;y>=0&&y<w?this._pinchType="horizontal":w<=y&&y<=x?this._pinchType="diagonal":this._pinchType="vertical"}let d,h,u,p;e.overrideScaleRange(this._xStartRange,y=>{d=y.c2p(a),u=y.c2p(r)}),s.overrideScaleRange(this._yStartRange,y=>{h=y.c2p(o),p=y.c2p(l)});let g=this._startingDistance/Math.hypot(u-d,p-h),m=this._startPoint1.x-(d-this._xStartRange.min)*g,f=this._startPoint2.x+(this._xStartRange.max-u)*g,b=this._startPoint1.y-(h-this._yStartRange.min)*g,v=this._startPoint2.y+(this._yStartRange.max-p)*g;if(Number.isNaN(g)||m>=f||b>=v)return;switch(this._pinchType){case"horizontal":b=this._yStartRange.min,v=this._yStartRange.max;break;case"vertical":m=this._xStartRange.min,f=this._xStartRange.max;break;default:}let C={gestureEnding:c==="touchend"||c==="touchcancel",base:{min:m,max:f},left:{min:b,max:v}};this._rightAxis&&(n.overrideScaleRange(this._rightStartRange,y=>{h=y.c2p(o),p=y.c2p(l)}),this._pinchType==="horizontal"?(b=this._rightStartRange.min,v=this._rightStartRange.max):(b=this._rightStartY1-(h-this._rightStartRange.min)*g,v=this._rightStartY2+(this._rightStartRange.max-p)*g),C.right={min:b,max:v}),this._handler(C)}_adjustEventPositions(t){let[e,s]=t.touches,{top:n,left:a}=this._element.getBoundingClientRect();return{x1:e.pageX-a,y1:e.pageY-n,x2:s.pageX-a,y2:s.pageY-n}}};function Pl(i,t,e,s){let n=i.group,a=n.color,o=n.calcDependentGroups,r=[...new Set(t.leftColumnIds.map(h=>e.getColumnById(h).group))],l=t.getLeftColumnIds().map(h=>e.getColumnById(h));if(i.color){let h=i.color;return l.find(p=>p.color===h)?s(h):h}let c=r.find(h=>h.calcDependentGroups.includes(n.id)),d;if(a)d=a;else if(o.length>0){for(let h=0;h<o.length;++h){let u=e.getColumnGroupById(o[h]);if(u.calcDependentGroups.length===0){let p=u.color;if(p){d=p;break}else{let g=u.columns.find(v=>v.setId===i.setId),m=g&&t.getTrace(g.id),f=l.find(v=>v.group.calcDependentGroups.find(C=>e.getColumnGroupById(C).columns.find(y=>y.id===g.id))),b=f&&f.id!==i.id;!m&&!b&&(d=g.color||s(i.color));break}}}d=d||s(i.color)}else d=s(i.color);return d}function pn(i,t){return new Promise(e=>{this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:Vt(k("Delete Column %s?"),t.name),content:k("Column will be deleted in all data sets. The deletion cannot be undone."),actions:[{id:"cancel",message:k("Cancel"),variant:"text",onClick:()=>{this.dispatchEvent(Ge("message_box")),e(!1)}},{id:"delete",message:k("Delete"),variant:"danger",onClick:async()=>{await i.removeColumnGroup(t.id),this.dispatchEvent(Ge("message_box")),e(!0)}}]}}}))})}function gn(i,t){this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:Vt(k("Delete %s?"),t.name),content:k("This deletion can't be undone."),actions:[{id:"cancel",message:k("Cancel"),variant:"text",onClick:()=>{this.dispatchEvent(Ge("message_box"))}},{id:"delete",message:k("Delete"),variant:"danger",onClick:async()=>{await i.removeDataSet(t.id),this.dispatchEvent(Ge("message_box"))}}]}}}))}var Ml=Sa(Xh());var Ie=i=>i!=null&&!Number.isNaN(i),os=class extends Ml.default{constructor(t,e={}){super();this.experimentId=e.experimentId||0,this.id=Ji("trace-"),this.graph=t,this.getGraphBaseRange=t.getBaseRange.bind(t),this.getGraphLeftRange=t.getLeftRange.bind(t),this.getGraphRightRange=t.getRightRange.bind(t),this.type=e.type||"regular",this.symbol=e.symbol,this.axis=e.axis,this.fillPoint=e.fillPoint??!0,this.drawOptions={},this.type!=="regular"&&(this.drawOptions={lines:!0,points:!1}),this.yColumn=e.yColumn,this.baseColumn=e.baseColumn,this.range=Fs(),this.seriesData=[],this.lastRowIndex=-1,this.trimAllSeriesData(),this.latestBucket=null,this.numPointsFromLatestBucket=0,this.color=e.color||"#000000",this.lineWeight=e.lineWeight||2,this.updateSymbol(this.symbol),console.assert(this.graph),console.assert(this.yColumn),console.assert(this.baseColumn)}static generateSeriesData(t,e,s){let n=[],a=-1/0,o=!0,r={baseMin:1/0,baseMax:-1/0,yMin:1/0,yMax:-1/0,valid:!1};for(let l=0;l<t.length;++l){let c=t[l],d=e[c],h=s[c];Ie(d)&&Ie(h)&&(n.push([d,h]),r.baseMin=Math.min(r.baseMin,d),r.baseMax=Math.max(r.baseMax,d),r.yMin=Math.min(r.yMin,h),r.yMax=Math.max(r.yMax,h),r.valid=!0,o=o&&a<d,a=d)}return{data:n,dataRange:r,isIncreasing:o}}getIndexOffsetFromSeries(t){return t-this.yColumn.values.filter((e,s)=>s<t&&(this.yColumn.isRowStruck(s)||!Ie(e))).length}static trimData(t,e,s,n,a){let o=[],r=a?[a]:[];function l(u,p){let g=r.find(m=>m.xIndex===u);return g?g.points.push(p):(g={xIndex:u,x:u*e,points:[p],avg:{xSum:0,ySum:0,count:0},min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},r.push(g)),g}let c=t.length;for(let u=0;u<c;++u){let[p,g]=t[u],m=l(Math.floor(p/e),t[u]);g<m.min.y&&(m.min.x=p,m.min.y=g),g>m.max.y&&(m.max.x=p,m.max.y=g),m.avg.xSum+=p,m.avg.ySum+=g,m.avg.count++}let d=0,h=r.length;for(let u=0;u<h;++u){let p=r[u];p&&(p.avg.count===1?(o.push(p.points[0]),d=1):p.max.y-p.min.y>s*2?p.points.length<n?(o.push(...p.points),d=p.points.length):(o.push([p.min.x,p.min.y]),o.push([p.max.x,p.max.y]),d=2):(o.push([p.avg.xSum/p.avg.count,p.avg.ySum/p.avg.count]),d=1))}return{trimmedData:o,lastBucket:r[r.length-1],lastBucketPointsCount:d}}get hasErrorBars(){return this.baseColumn.group.errorBarType!==me.NONE||this.yColumn.group.errorBarType!==me.NONE}};Object.assign(os.prototype,{getBaseColumn(){return this.baseColumn},getColor(){return this.color},getPlotSizeInfo(){let i=this.graph.plotAreaPxWidth,t=this.graph.plotAreaPxHeight,e=this.getGraphBaseRange(),s=this.axis==="right"?this.getGraphRightRange():this.getGraphLeftRange(),n=(e.max-e.min)/i,a=(s.max-s.min)/t;return{pxWidth:i,pxHeight:t,baseDistPerPx:n,yDistPerPx:a}},appendToSeriesDataAndRange(i){let t=this.baseColumn.filteredValues,e=this.yColumn.filteredValues,{data:s,dataRange:n}=os.generateSeriesData(i,t,e),{baseMin:a,baseMax:o,yMin:r,yMax:l,valid:c}=n,d=wt(tt({},Fs()),{base:{min:a,max:o,valid:c},[this.axis]:{min:r,max:l,valid:c}});if(c&&s.length>0){let{pxHeight:h,baseDistPerPx:u,yDistPerPx:p}=this.getPlotSizeInfo(),g=os.trimData(s,u,p,h,this.latestBucket),{trimmedData:m,lastBucket:f,lastBucketPointsCount:b}=g;this.lastRowIndex=i[i.length-1],this.numPointsFromLatestBucket>0?this.seriesData.splice(-this.numPointsFromLatestBucket,this.numPointsFromLatestBucket,...m):this.seriesData.splice(this.seriesData.length,0,...m),this.range=ci([this.range,d]),this.latestBucket=f,this.numPointsFromLatestBucket=b,this.emit("data-points-updated")}},updateAllSeriesDataAndRange({notify:i}={}){let t=this.baseColumn.filteredValues,e=this.yColumn.filteredValues,s=this.baseColumn.filteredValues.map((p,g)=>g),{data:n,dataRange:a,isIncreasing:o}=os.generateSeriesData(s,t,e),{baseMin:r,baseMax:l,yMin:c,yMax:d,valid:h}=a,u=wt(tt({},Fs()),{base:{min:r,max:l,valid:h},[this.axis]:{min:c,max:d,valid:h}});if(this.lastRowIndex=n.length-1,o){let{pxHeight:p,baseDistPerPx:g,yDistPerPx:m}=this.getPlotSizeInfo(),f=os.trimData(n,g,m,p),{trimmedData:b,lastBucket:v,lastBucketPointsCount:C}=f;this.seriesData=b,this.latestBucket=v,this.numPointsFromLatestBucket=C}else this.seriesData=n;this.range=u,i&&this.emit("data-points-updated")},updateSymbol(i){this.symbol=i,this.fillPoint=!this.symbol.includes("Outline");let t={circleSymbol:Rr,circleOutlineSymbol:Dr,squareSymbol:$r,squareOutlineSymbol:Lr,diamondSymbol:Br,diamondOutlineSymbol:Or,rectangleSymbol:Fr,rectangleOutlineSymbol:zr,rectangleInvertedSymbol:Gr,rectangleInvertedOutlineSymbol:Wr,plusSymbol:jr,plusOutlineSymbol:Vr,triangleSymbol:Nr,triangleOutlineSymbol:Hr,triangleInvertedSymbol:Ur,triangleInvertedOutlineSymbol:qr};this.drawOptions.symbol=(e,s)=>{let n=t[`${this.symbol}Symbol`],[a,o]=n.viewBox.split(" ").slice(-2),r=document.createElement("canvas");[r.width,r.height]=[a,o];let l=r.getContext("2d"),c=new Path2D(n.paths[0]);c.closePath(),l.strokeStyle=s,l.lineWidth=n.lineWidth||2,l.fillStyle=s,n.stroke?l.stroke(c):l.fill(c);let d=document.createElement("canvas"),h=d.getContext("2d");return r.width>r.height?(d.width=2*(n.graphSizeModifier||1)*e,d.height=d.width*(o/a)):(d.height=2*(n.graphSizeModifier||1)*e,d.width=d.height*a/o),h.drawImage(r,d.width/4,d.height/4,d.width/2,d.height/2),d},this.emit("point-symbols-updated")},trimAllSeriesData(){this.updateAllSeriesDataAndRange({notify:!1})},_onValuesChanged(i,t){let{values:e}=t,s=i.every((r,l,c)=>r-l===c[0]),n=i[0]===e.length-i.length,a=i.some(r=>r<=this.lastRowIndex);s&&n&&!a?this.appendToSeriesDataAndRange(i):this.updateAllSeriesDataAndRange({notify:!0})},_onStrikethroughChanged(){this.updateAllSeriesDataAndRange({notify:!0})},bindAll(){this.yColumn.on("row-values-updated",this._onValuesChanged,this),this.yColumn.on("strikethrough-changed",this._onStrikethroughChanged,this),this.yColumn.on("symbol-changed",this.updateSymbol,this),this.baseColumn.on("row-values-updated",this._onValuesChanged,this),this.baseColumn.on("strikethrough-changed",this._onStrikethroughChanged,this),this.baseColumn.on("column-dataType-updated",i=>{this.emit("base-column-data-type-updated",i)})},unbindAll(){this.yColumn.off("row-values-updated",this._onValuesChanged,this),this.yColumn.off("strikethrough-changed",this._onStrikethroughChanged,this),this.yColumn.off("symbol-changed",this.updateSymbol,this),this.baseColumn.off("row-values-updated",this._onValuesChanged,this),this.baseColumn.off("strikethrough-changed",this._onStrikethroughChanged,this),this.baseColumn.off("column-dataType-updated")},getDataPoints(){let i=this.baseColumn.filteredValues,t=this.yColumn.filteredValues,e=Math.min(i.length,t.length),s=[];for(let n=0;n<e;n++)s.push([i[n],t[n]]);return s},getYValuesInBaseRange(i=this.range.base){let t=this.baseColumn.filteredValues,e=this.yColumn.filteredValues,s=Math.min(t.length,e.length),n=[];for(let a=0;a<s;a++)t[a]>=i.min&&t[a]<=i.max&&n.push(e[a]);return n}});function Ns(i,t,e=document.body){let s;i.addEventListener("pointerdown",n=>{n.stopPropagation(),e.style.setProperty("touch-action","none"),s=n.target,t({currentTarget:s,target:s,detail:{state:"start",x:n.x,y:n.y}});let a=o=>{o.stopPropagation(),t({currentTarget:s,target:s,detail:{state:"moving",x:o.x,y:o.y}})};e.addEventListener("pointerup",o=>{o.stopPropagation(),e.removeEventListener("pointermove",a),e.style.removeProperty("touch-action"),t({currentTarget:s,target:s,detail:{state:"end",x:o.x,y:o.y}})},{once:!0}),e.addEventListener("pointermove",a)})}function xe(){}var Ua=function(){let i=0;return function(){return i++}}();function yt(i){return i===null||typeof i=="undefined"}function St(i){if(Array.isArray&&Array.isArray(i))return!0;let t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function gt(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}var Lt=i=>(typeof i=="number"||i instanceof Number)&&isFinite(+i);function Kt(i,t){return Lt(i)?i:t}function ft(i,t){return typeof i=="undefined"?t:i}var qa=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:i/t,fn=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function kt(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function _t(i,t,e,s){let n,a,o;if(St(i))if(a=i.length,s)for(n=a-1;n>=0;n--)t.call(e,i[n],n);else for(n=0;n<a;n++)t.call(e,i[n],n);else if(gt(i))for(o=Object.keys(i),a=o.length,n=0;n<a;n++)t.call(e,i[o[n]],o[n])}function Hs(i,t){let e,s,n,a;if(!i||!t||i.length!==t.length)return!1;for(e=0,s=i.length;e<s;++e)if(n=i[e],a=t[e],n.datasetIndex!==a.datasetIndex||n.index!==a.index)return!1;return!0}function yi(i){if(St(i))return i.map(yi);if(gt(i)){let t=Object.create(null),e=Object.keys(i),s=e.length,n=0;for(;n<s;++n)t[e[n]]=yi(i[e[n]]);return t}return i}function Tl(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Al(i,t,e,s){if(!Tl(i))return;let n=t[i],a=e[i];gt(n)&&gt(a)?Ft(n,a,s):t[i]=yi(a)}function Ft(i,t,e){let s=St(t)?t:[t],n=s.length;if(!gt(i))return i;e=e||{};let a=e.merger||Al;for(let o=0;o<n;++o){if(t=s[o],!gt(t))continue;let r=Object.keys(t);for(let l=0,c=r.length;l<c;++l)a(r[l],i,t,e)}return i}function _s(i,t){return Ft(i,t,{merger:Rl})}function Rl(i,t,e){if(!Tl(i))return;let s=t[i],n=e[i];gt(s)&&gt(n)?_s(s,n):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=yi(n))}var Dl={"":i=>i,x:i=>i.x,y:i=>i.y};function Ee(i,t){return(Dl[t]||(Dl[t]=su(t)))(i)}function su(i){let t=$l(i);return e=>{for(let s of t){if(s==="")break;e=e&&e[s]}return e}}function $l(i){let t=i.split("."),e=[],s="";for(let n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function _i(i){return i.charAt(0).toUpperCase()+i.slice(1)}var Xt=i=>typeof i!="undefined",ke=i=>typeof i=="function",mn=(i,t)=>{if(i.size!==t.size)return!1;for(let e of i)if(!t.has(e))return!1;return!0};function Ya(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}var Pt=Math.PI,Ct=2*Pt,Ll=Ct+Pt,wi=Number.POSITIVE_INFINITY,Bl=Pt/180,Mt=Pt/2,Us=Pt/4,Ka=Pt*2/3,Zt=Math.log10,ce=Math.sign;function bn(i){let t=Math.round(i);i=ws(i,t,i/1e3)?t:i;let e=Math.pow(10,Math.floor(Zt(i))),s=i/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function Xa(i){let t=[],e=Math.sqrt(i),s;for(s=1;s<e;s++)i%s==0&&(t.push(s),t.push(i/s));return e===(e|0)&&t.push(e),t.sort((n,a)=>n-a).pop(),t}function rs(i){return!isNaN(parseFloat(i))&&isFinite(i)}function ws(i,t,e){return Math.abs(i-t)<e}function Za(i,t){let e=Math.round(i);return e-t<=i&&e+t>=i}function xn(i,t,e){let s,n,a;for(s=0,n=i.length;s<n;s++)a=i[s][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function ne(i){return i*(Pt/180)}function Ci(i){return i*(180/Pt)}function vn(i){if(!Lt(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function yn(i,t){let e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s),a=Math.atan2(s,e);return a<-.5*Pt&&(a+=Ct),{angle:a,distance:n}}function Si(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function Ol(i,t){return(i-t+Ll)%Ct-Pt}function ae(i){return(i%Ct+Ct)%Ct}function Cs(i,t,e,s){let n=ae(i),a=ae(t),o=ae(e),r=ae(a-n),l=ae(o-n),c=ae(n-a),d=ae(n-o);return n===a||n===o||s&&a===o||r>l&&c<d}function Ot(i,t,e){return Math.max(t,Math.min(e,i))}function Qa(i){return Ot(i,-32768,32767)}function qs(i,t,e,s=1e-6){return i>=Math.min(t,e)-s&&i<=Math.max(t,e)+s}function Ii(i,t,e){e=e||(o=>i[o]<t);let s=i.length-1,n=0,a;for(;s-n>1;)a=n+s>>1,e(a)?n=a:s=a;return{lo:n,hi:s}}var He=(i,t,e,s)=>Ii(i,e,s?n=>i[n][t]<=e:n=>i[n][t]<e),Ja=(i,t,e)=>Ii(i,e,s=>i[s][t]>=e);function to(i,t,e){let s=0,n=i.length;for(;s<n&&i[s]<t;)s++;for(;n>s&&i[n-1]>e;)n--;return s>0||n<i.length?i.slice(s,n):i}var Fl=["push","pop","shift","splice","unshift"];function eo(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Fl.forEach(e=>{let s="_onData"+_i(e),n=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...a){let o=n.apply(this,a);return i._chartjs.listeners.forEach(r=>{typeof r[s]=="function"&&r[s](...a)}),o}})})}function _n(i,t){let e=i._chartjs;if(!e)return;let s=e.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(Fl.forEach(a=>{delete i[a]}),delete i._chartjs)}function wn(i){let t=new Set,e,s;for(e=0,s=i.length;e<s;++e)t.add(i[e]);return t.size===s?i:Array.from(t)}var Cn=function(){return typeof window=="undefined"?function(i){return i()}:window.requestAnimationFrame}();function Sn(i,t,e){let s=e||(o=>Array.prototype.slice.call(o)),n=!1,a=[];return function(...o){a=s(o),n||(n=!0,Cn.call(window,()=>{n=!1,i.apply(t,a)}))}}function so(i,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(i,t,s)):i.apply(this,s),t}}var io=i=>i==="start"?"left":i==="end"?"right":"center",In=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2;function En(i,t,e){let s=t.length,n=0,a=s;if(i._sorted){let{iScale:o,_parsed:r}=i,l=o.axis,{min:c,max:d,minDefined:h,maxDefined:u}=o.getUserBounds();h&&(n=Ot(Math.min(He(r,o.axis,c).lo,e?s:He(t,l,o.getPixelForValue(c)).lo),0,s-1)),u?a=Ot(Math.max(He(r,o.axis,d,!0).hi+1,e?0:He(t,l,o.getPixelForValue(d),!0).hi+1),n,s)-n:a=s-n}return{start:n,count:a}}function kn(i){let{xScale:t,yScale:e,_scaleRanges:s}=i,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return i._scaleRanges=n,!0;let a=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,n),a}var Pn=i=>i===0||i===1,zl=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*Ct/e)),Gl=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*Ct/e)+1,Ss={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Mt)+1,easeOutSine:i=>Math.sin(i*Mt),easeInOutSine:i=>-.5*(Math.cos(Pt*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>Pn(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>Pn(i)?i:zl(i,.075,.3),easeOutElastic:i=>Pn(i)?i:Gl(i,.075,.3),easeInOutElastic(i){let t=.1125,e=.45;return Pn(i)?i:i<.5?.5*zl(i*2,t,e):.5+.5*Gl(i*2-1,t,e)},easeInBack(i){let t=1.70158;return i*i*((t+1)*i-t)},easeOutBack(i){let t=1.70158;return(i-=1)*i*((t+1)*i+t)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Ss.easeOutBounce(1-i),easeOutBounce(i){let t=7.5625,e=2.75;return i<1/e?t*i*i:i<2/e?t*(i-=1.5/e)*i+.75:i<2.5/e?t*(i-=2.25/e)*i+.9375:t*(i-=2.625/e)*i+.984375},easeInOutBounce:i=>i<.5?Ss.easeInBounce(i*2)*.5:Ss.easeOutBounce(i*2-1)*.5+.5};function Ei(i){return i+.5|0}var ls=(i,t,e)=>Math.max(Math.min(i,e),t);function ki(i){return ls(Ei(i*2.55),0,255)}function cs(i){return ls(Ei(i*255),0,255)}function Ue(i){return ls(Ei(i/2.55)/100,0,1)}function Wl(i){return ls(Ei(i*100),0,100)}var de={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},no=[..."0123456789ABCDEF"],iu=i=>no[i&15],nu=i=>no[(i&240)>>4]+no[i&15],Mn=i=>(i&240)>>4==(i&15),au=i=>Mn(i.r)&&Mn(i.g)&&Mn(i.b)&&Mn(i.a);function ou(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&de[i[1]]*17,g:255&de[i[2]]*17,b:255&de[i[3]]*17,a:t===5?de[i[4]]*17:255}:(t===7||t===9)&&(e={r:de[i[1]]<<4|de[i[2]],g:de[i[3]]<<4|de[i[4]],b:de[i[5]]<<4|de[i[6]],a:t===9?de[i[7]]<<4|de[i[8]]:255})),e}var ru=(i,t)=>i<255?t(i):"";function lu(i){var t=au(i)?iu:nu;return i?"#"+t(i.r)+t(i.g)+t(i.b)+ru(i.a,t):void 0}var cu=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function jl(i,t,e){let s=t*Math.min(e,1-e),n=(a,o=(a+i/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[n(0),n(8),n(4)]}function du(i,t,e){let s=(n,a=(n+i/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[s(5),s(3),s(1)]}function hu(i,t,e){let s=jl(i,1,.5),n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)s[n]*=1-t-e,s[n]+=t;return s}function uu(i,t,e,s,n){return i===n?(t-e)/s+(t<e?6:0):t===n?(e-i)/s+2:(i-t)/s+4}function ao(i){let t=255,e=i.r/t,s=i.g/t,n=i.b/t,a=Math.max(e,s,n),o=Math.min(e,s,n),r=(a+o)/2,l,c,d;return a!==o&&(d=a-o,c=r>.5?d/(2-a-o):d/(a+o),l=uu(e,s,n,d,a),l=l*60+.5),[l|0,c||0,r]}function oo(i,t,e,s){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,s)).map(cs)}function ro(i,t,e){return oo(jl,i,t,e)}function pu(i,t,e){return oo(hu,i,t,e)}function gu(i,t,e){return oo(du,i,t,e)}function Vl(i){return(i%360+360)%360}function fu(i){let t=cu.exec(i),e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?ki(+t[5]):cs(+t[5]));let n=Vl(+t[2]),a=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=pu(n,a,o):t[1]==="hsv"?s=gu(n,a,o):s=ro(n,a,o),{r:s[0],g:s[1],b:s[2],a:e}}function mu(i,t){var e=ao(i);e[0]=Vl(e[0]+t),e=ro(e),i.r=e[0],i.g=e[1],i.b=e[2]}function bu(i){if(!i)return;let t=ao(i),e=t[0],s=Wl(t[1]),n=Wl(t[2]);return i.a<255?`hsla(${e}, ${s}%, ${n}%, ${Ue(i.a)})`:`hsl(${e}, ${s}%, ${n}%)`}var Nl={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Hl={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function xu(){let i={},t=Object.keys(Hl),e=Object.keys(Nl),s,n,a,o,r;for(s=0;s<t.length;s++){for(o=r=t[s],n=0;n<e.length;n++)a=e[n],r=r.replace(a,Nl[a]);a=parseInt(Hl[o],16),i[r]=[a>>16&255,a>>8&255,a&255]}return i}var Tn;function vu(i){Tn||(Tn=xu(),Tn.transparent=[0,0,0,0]);let t=Tn[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var yu=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function _u(i){let t=yu.exec(i),e=255,s,n,a;if(!!t){if(t[7]!==s){let o=+t[7];e=t[8]?ki(o):ls(o*255,0,255)}return s=+t[1],n=+t[3],a=+t[5],s=255&(t[2]?ki(s):ls(s,0,255)),n=255&(t[4]?ki(n):ls(n,0,255)),a=255&(t[6]?ki(a):ls(a,0,255)),{r:s,g:n,b:a,a:e}}}function wu(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Ue(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}var lo=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Ys=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Cu(i,t,e){let s=Ys(Ue(i.r)),n=Ys(Ue(i.g)),a=Ys(Ue(i.b));return{r:cs(lo(s+e*(Ys(Ue(t.r))-s))),g:cs(lo(n+e*(Ys(Ue(t.g))-n))),b:cs(lo(a+e*(Ys(Ue(t.b))-a))),a:i.a+e*(t.a-i.a)}}function An(i,t,e){if(i){let s=ao(i);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=ro(s),i.r=s[0],i.g=s[1],i.b=s[2]}}function Ul(i,t){return i&&Object.assign(t||{},i)}function ql(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=cs(i[3]))):(t=Ul(i,{r:0,g:0,b:0,a:1}),t.a=cs(t.a)),t}function Su(i){return i.charAt(0)==="r"?_u(i):fu(i)}var Pi=class{constructor(t){if(t instanceof Pi)return t;let e=typeof t,s;e==="object"?s=ql(t):e==="string"&&(s=ou(t)||vu(t)||Su(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Ul(this._rgb);return t&&(t.a=Ue(t.a)),t}set rgb(t){this._rgb=ql(t)}rgbString(){return this._valid?wu(this._rgb):void 0}hexString(){return this._valid?lu(this._rgb):void 0}hslString(){return this._valid?bu(this._rgb):void 0}mix(t,e){if(t){let s=this.rgb,n=t.rgb,a,o=e===a?.5:e,r=2*o-1,l=s.a-n.a,c=((r*l==-1?r:(r+l)/(1+r*l))+1)/2;a=1-c,s.r=255&c*s.r+a*n.r+.5,s.g=255&c*s.g+a*n.g+.5,s.b=255&c*s.b+a*n.b+.5,s.a=o*s.a+(1-o)*n.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=Cu(this._rgb,t._rgb,e)),this}clone(){return new Pi(this.rgb)}alpha(t){return this._rgb.a=cs(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=Ei(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return An(this._rgb,2,t),this}darken(t){return An(this._rgb,2,-t),this}saturate(t){return An(this._rgb,1,t),this}desaturate(t){return An(this._rgb,1,-t),this}rotate(t){return mu(this._rgb,t),this}};function Yl(i){return new Pi(i)}function co(i){if(i&&typeof i=="object"){let t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Is(i){return co(i)?i:Yl(i)}function Rn(i){return co(i)?i:Yl(i).saturate(.5).darken(.1).hexString()}var ds=Object.create(null),Dn=Object.create(null);function Mi(i,t){if(!t)return i;let e=t.split(".");for(let s=0,n=e.length;s<n;++s){let a=e[s];i=i[a]||(i[a]=Object.create(null))}return i}function ho(i,t,e){return typeof t=="string"?Ft(Mi(i,t),e):Ft(Mi(i,""),t)}var Kl=class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,s)=>Rn(s.backgroundColor),this.hoverBorderColor=(e,s)=>Rn(s.borderColor),this.hoverColor=(e,s)=>Rn(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return ho(this,t,e)}get(t){return Mi(this,t)}describe(t,e){return ho(Dn,t,e)}override(t,e){return ho(ds,t,e)}route(t,e,s,n){let a=Mi(this,t),o=Mi(this,s),r="_"+e;Object.defineProperties(a,{[r]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let l=this[r],c=o[n];return gt(l)?Object.assign({},c,l):ft(l,c)},set(l){this[r]=l}}})}},pt=new Kl({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Xl(i){return!i||yt(i.size)||yt(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Ks(i,t,e,s,n){let a=t[n];return a||(a=t[n]=i.measureText(n).width,e.push(n)),a>s&&(s=a),s}function uo(i,t,e,s){s=s||{};let n=s.data=s.data||{},a=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},a=s.garbageCollect=[],s.font=t),i.save(),i.font=t;let o=0,r=e.length,l,c,d,h,u;for(l=0;l<r;l++)if(h=e[l],h!=null&&St(h)!==!0)o=Ks(i,n,a,o,h);else if(St(h))for(c=0,d=h.length;c<d;c++)u=h[c],u!=null&&!St(u)&&(o=Ks(i,n,a,o,u));i.restore();let p=a.length/2;if(p>e.length){for(l=0;l<p;l++)delete n[a[l]];a.splice(0,p)}return o}function qe(i,t,e){let s=i.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*s)/s+n}function $n(i,t){t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore()}function Ti(i,t,e,s){po(i,t,e,s,null)}function po(i,t,e,s,n){let a,o,r,l,c,d,h=t.pointStyle,u=t.rotation,p=t.radius,g=(u||0)*Bl;if(h&&typeof h=="object"&&(a=h.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){i.save(),i.translate(e,s),i.rotate(g),i.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),i.restore();return}if(!(isNaN(p)||p<=0)){switch(i.beginPath(),h){default:n?i.ellipse(e,s,n/2,p,0,0,Ct):i.arc(e,s,p,0,Ct),i.closePath();break;case"triangle":i.moveTo(e+Math.sin(g)*p,s-Math.cos(g)*p),g+=Ka,i.lineTo(e+Math.sin(g)*p,s-Math.cos(g)*p),g+=Ka,i.lineTo(e+Math.sin(g)*p,s-Math.cos(g)*p),i.closePath();break;case"rectRounded":c=p*.516,l=p-c,o=Math.cos(g+Us)*l,r=Math.sin(g+Us)*l,i.arc(e-o,s-r,c,g-Pt,g-Mt),i.arc(e+r,s-o,c,g-Mt,g),i.arc(e+o,s+r,c,g,g+Mt),i.arc(e-r,s+o,c,g+Mt,g+Pt),i.closePath();break;case"rect":if(!u){l=Math.SQRT1_2*p,d=n?n/2:l,i.rect(e-d,s-l,2*d,2*l);break}g+=Us;case"rectRot":o=Math.cos(g)*p,r=Math.sin(g)*p,i.moveTo(e-o,s-r),i.lineTo(e+r,s-o),i.lineTo(e+o,s+r),i.lineTo(e-r,s+o),i.closePath();break;case"crossRot":g+=Us;case"cross":o=Math.cos(g)*p,r=Math.sin(g)*p,i.moveTo(e-o,s-r),i.lineTo(e+o,s+r),i.moveTo(e+r,s-o),i.lineTo(e-r,s+o);break;case"star":o=Math.cos(g)*p,r=Math.sin(g)*p,i.moveTo(e-o,s-r),i.lineTo(e+o,s+r),i.moveTo(e+r,s-o),i.lineTo(e-r,s+o),g+=Us,o=Math.cos(g)*p,r=Math.sin(g)*p,i.moveTo(e-o,s-r),i.lineTo(e+o,s+r),i.moveTo(e+r,s-o),i.lineTo(e-r,s+o);break;case"line":o=n?n/2:Math.cos(g)*p,r=Math.sin(g)*p,i.moveTo(e-o,s-r),i.lineTo(e+o,s+r);break;case"dash":i.moveTo(e,s),i.lineTo(e+Math.cos(g)*p,s+Math.sin(g)*p);break}i.fill(),t.borderWidth>0&&i.stroke()}}function Es(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function Ln(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function Bn(i){i.restore()}function go(i,t,e,s,n){if(!t)return i.lineTo(e.x,e.y);if(n==="middle"){let a=(t.x+e.x)/2;i.lineTo(a,t.y),i.lineTo(a,e.y)}else n==="after"!=!!s?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function fo(i,t,e,s){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function Xs(i,t,e,s,n,a={}){let o=St(t)?t:[t],r=a.strokeWidth>0&&a.strokeColor!=="",l,c;for(i.save(),i.font=n.string,Iu(i,a),l=0;l<o.length;++l)c=o[l],r&&(a.strokeColor&&(i.strokeStyle=a.strokeColor),yt(a.strokeWidth)||(i.lineWidth=a.strokeWidth),i.strokeText(c,e,s,a.maxWidth)),i.fillText(c,e,s,a.maxWidth),Eu(i,e,s,c,a),s+=n.lineHeight;i.restore()}function Iu(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),yt(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function Eu(i,t,e,s,n){if(n.strikethrough||n.underline){let a=i.measureText(s),o=t-a.actualBoundingBoxLeft,r=t+a.actualBoundingBoxRight,l=e-a.actualBoundingBoxAscent,c=e+a.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=n.decorationWidth||2,i.moveTo(o,d),i.lineTo(r,d),i.stroke()}}function Zs(i,t){let{x:e,y:s,w:n,h:a,radius:o}=t;i.arc(e+o.topLeft,s+o.topLeft,o.topLeft,-Mt,Pt,!0),i.lineTo(e,s+a-o.bottomLeft),i.arc(e+o.bottomLeft,s+a-o.bottomLeft,o.bottomLeft,Pt,Mt,!0),i.lineTo(e+n-o.bottomRight,s+a),i.arc(e+n-o.bottomRight,s+a-o.bottomRight,o.bottomRight,Mt,0,!0),i.lineTo(e+n,s+o.topRight),i.arc(e+n-o.topRight,s+o.topRight,o.topRight,0,-Mt,!0),i.lineTo(e+o.topLeft,s)}var ku=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Pu=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Zl(i,t){let e=(""+i).match(ku);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}var Mu=i=>+i||0;function Ai(i,t){let e={},s=gt(t),n=s?Object.keys(t):t,a=gt(i)?s?o=>ft(i[o],i[t[o]]):o=>i[o]:()=>i;for(let o of n)e[o]=Mu(a(o));return e}function On(i){return Ai(i,{top:"y",right:"x",bottom:"y",left:"x"})}function hs(i){return Ai(i,["topLeft","topRight","bottomLeft","bottomRight"])}function Qt(i){let t=On(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Nt(i,t){i=i||{},t=t||pt.font;let e=ft(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=ft(i.style,t.style);s&&!(""+s).match(Pu)&&(console.warn('Invalid font style specified: "'+s+'"'),s="");let n={family:ft(i.family,t.family),lineHeight:Zl(ft(i.lineHeight,t.lineHeight),e),size:e,style:s,weight:ft(i.weight,t.weight),string:""};return n.string=Xl(n),n}function Qs(i,t,e,s){let n=!0,a,o,r;for(a=0,o=i.length;a<o;++a)if(r=i[a],r!==void 0&&(t!==void 0&&typeof r=="function"&&(r=r(t),n=!1),e!==void 0&&St(r)&&(r=r[e%r.length],n=!1),r!==void 0))return s&&!n&&(s.cacheable=!1),r}function mo(i,t,e){let{min:s,max:n}=i,a=fn(t,(n-s)/2),o=(r,l)=>e&&r===0?0:r+l;return{min:o(s,-Math.abs(a)),max:o(n,a)}}function Pe(i,t){return Object.assign(Object.create(i),t)}function Ri(i,t=[""],e=i,s,n=()=>i[0]){Xt(s)||(s=ec("_fallback",i));let a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:e,_fallback:s,_getTarget:n,override:o=>Ri([o,...i],t,e,s)};return new Proxy(a,{deleteProperty(o,r){return delete o[r],delete o._keys,delete i[0][r],!0},get(o,r){return Ql(o,r,()=>Ou(r,t,i,o))},getOwnPropertyDescriptor(o,r){return Reflect.getOwnPropertyDescriptor(o._scopes[0],r)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(o,r){return sc(o).includes(r)},ownKeys(o){return sc(o)},set(o,r,l){let c=o._storage||(o._storage=n());return o[r]=c[r]=l,delete o._keys,!0}})}function us(i,t,e,s){let n={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:Fn(i,s),setContext:a=>us(i,a,e,s),override:a=>us(i.override(a),t,e,s)};return new Proxy(n,{deleteProperty(a,o){return delete a[o],delete i[o],!0},get(a,o,r){return Ql(a,o,()=>Au(a,o,r))},getOwnPropertyDescriptor(a,o){return a._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(a,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(a,o,r){return i[o]=r,delete a[o],!0}})}function Fn(i,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=i;return{allKeys:n,scriptable:e,indexable:s,isScriptable:ke(e)?e:()=>e,isIndexable:ke(s)?s:()=>s}}var Tu=(i,t)=>i?i+_i(t):t,bo=(i,t)=>gt(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ql(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t))return i[t];let s=e();return i[t]=s,s}function Au(i,t,e){let{_proxy:s,_context:n,_subProxy:a,_descriptors:o}=i,r=s[t];return ke(r)&&o.isScriptable(t)&&(r=Ru(t,r,i,e)),St(r)&&r.length&&(r=Du(t,r,i,o.isIndexable)),bo(t,r)&&(r=us(r,n,a&&a[t],o)),r}function Ru(i,t,e,s){let{_proxy:n,_context:a,_subProxy:o,_stack:r}=e;if(r.has(i))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+i);return r.add(i),t=t(a,o||s),r.delete(i),bo(i,t)&&(t=xo(n._scopes,n,i,t)),t}function Du(i,t,e,s){let{_proxy:n,_context:a,_subProxy:o,_descriptors:r}=e;if(Xt(a.index)&&s(i))t=t[a.index%t.length];else if(gt(t[0])){let l=t,c=n._scopes.filter(d=>d!==l);t=[];for(let d of l){let h=xo(c,n,i,d);t.push(us(h,a,o&&o[i],r))}}return t}function Jl(i,t,e){return ke(i)?i(t,e):i}var $u=(i,t)=>i===!0?t:typeof i=="string"?Ee(t,i):void 0;function Lu(i,t,e,s,n){for(let a of t){let o=$u(e,a);if(o){i.add(o);let r=Jl(o._fallback,e,n);if(Xt(r)&&r!==e&&r!==s)return r}else if(o===!1&&Xt(s)&&e!==s)return null}return!1}function xo(i,t,e,s){let n=t._rootScopes,a=Jl(t._fallback,e,s),o=[...i,...n],r=new Set;r.add(s);let l=tc(r,o,e,a||e,s);return l===null||Xt(a)&&a!==e&&(l=tc(r,o,a,l,s),l===null)?!1:Ri(Array.from(r),[""],n,a,()=>Bu(t,e,s))}function tc(i,t,e,s,n){for(;e;)e=Lu(i,t,e,s,n);return e}function Bu(i,t,e){let s=i._getTarget();t in s||(s[t]={});let n=s[t];return St(n)&&gt(e)?e:n}function Ou(i,t,e,s){let n;for(let a of t)if(n=ec(Tu(a,i),e),Xt(n))return bo(i,n)?xo(e,s,i,n):n}function ec(i,t){for(let e of t){if(!e)continue;let s=e[i];if(Xt(s))return s}}function sc(i){let t=i._keys;return t||(t=i._keys=Fu(i._scopes)),t}function Fu(i){let t=new Set;for(let e of i)for(let s of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function zn(i,t,e,s){let{iScale:n}=i,{key:a="r"}=this._parsing,o=new Array(s),r,l,c,d;for(r=0,l=s;r<l;++r)c=r+e,d=t[c],o[r]={r:n.parse(Ee(d,a),c)};return o}var zu=Number.EPSILON||1e-14,Js=(i,t)=>t<i.length&&!i[t].skip&&i[t],ic=i=>i==="x"?"y":"x";function nc(i,t,e,s){let n=i.skip?t:i,a=t,o=e.skip?t:e,r=Si(a,n),l=Si(o,a),c=r/(r+l),d=l/(r+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;let h=s*c,u=s*d;return{previous:{x:a.x-h*(o.x-n.x),y:a.y-h*(o.y-n.y)},next:{x:a.x+u*(o.x-n.x),y:a.y+u*(o.y-n.y)}}}function Gu(i,t,e){let s=i.length,n,a,o,r,l,c=Js(i,0);for(let d=0;d<s-1;++d)if(l=c,c=Js(i,d+1),!(!l||!c)){if(ws(t[d],0,zu)){e[d]=e[d+1]=0;continue}n=e[d]/t[d],a=e[d+1]/t[d],r=Math.pow(n,2)+Math.pow(a,2),!(r<=9)&&(o=3/Math.sqrt(r),e[d]=n*o*t[d],e[d+1]=a*o*t[d])}}function Wu(i,t,e="x"){let s=ic(e),n=i.length,a,o,r,l=Js(i,0);for(let c=0;c<n;++c){if(o=r,r=l,l=Js(i,c+1),!r)continue;let d=r[e],h=r[s];o&&(a=(d-o[e])/3,r[`cp1${e}`]=d-a,r[`cp1${s}`]=h-a*t[c]),l&&(a=(l[e]-d)/3,r[`cp2${e}`]=d+a,r[`cp2${s}`]=h+a*t[c])}}function ac(i,t="x"){let e=ic(t),s=i.length,n=Array(s).fill(0),a=Array(s),o,r,l,c=Js(i,0);for(o=0;o<s;++o)if(r=l,l=c,c=Js(i,o+1),!!l){if(c){let d=c[t]-l[t];n[o]=d!==0?(c[e]-l[e])/d:0}a[o]=r?c?ce(n[o-1])!==ce(n[o])?0:(n[o-1]+n[o])/2:n[o-1]:n[o]}Gu(i,n,a),Wu(i,a,t)}function Gn(i,t,e){return Math.max(Math.min(i,e),t)}function ju(i,t){let e,s,n,a,o,r=Es(i[0],t);for(e=0,s=i.length;e<s;++e)o=a,a=r,r=e<s-1&&Es(i[e+1],t),!!a&&(n=i[e],o&&(n.cp1x=Gn(n.cp1x,t.left,t.right),n.cp1y=Gn(n.cp1y,t.top,t.bottom)),r&&(n.cp2x=Gn(n.cp2x,t.left,t.right),n.cp2y=Gn(n.cp2y,t.top,t.bottom)))}function vo(i,t,e,s,n){let a,o,r,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")ac(i,n);else{let c=s?i[i.length-1]:i[0];for(a=0,o=i.length;a<o;++a)r=i[a],l=nc(c,r,i[Math.min(a+1,o-(s?0:1))%o],t.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,c=r}t.capBezierPoints&&ju(i,e)}function Wn(){return typeof window!="undefined"&&typeof document!="undefined"}function Di(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function jn(i,t,e){let s;return typeof i=="string"?(s=parseInt(i,10),i.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=i,s}var Vn=i=>window.getComputedStyle(i,null);function oc(i,t){return Vn(i).getPropertyValue(t)}var Vu=["top","right","bottom","left"];function ks(i,t,e){let s={};e=e?"-"+e:"";for(let n=0;n<4;n++){let a=Vu[n];s[a]=parseFloat(i[t+"-"+a+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}var Nu=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Hu(i,t){let e=i.touches,s=e&&e.length?e[0]:i,{offsetX:n,offsetY:a}=s,o=!1,r,l;if(Nu(n,a,i.target))r=n,l=a;else{let c=t.getBoundingClientRect();r=s.clientX-c.left,l=s.clientY-c.top,o=!0}return{x:r,y:l,box:o}}function Ye(i,t){if("native"in i)return i;let{canvas:e,currentDevicePixelRatio:s}=t,n=Vn(e),a=n.boxSizing==="border-box",o=ks(n,"padding"),r=ks(n,"border","width"),{x:l,y:c,box:d}=Hu(i,e),h=o.left+(d&&r.left),u=o.top+(d&&r.top),{width:p,height:g}=t;return a&&(p-=o.width+r.width,g-=o.height+r.height),{x:Math.round((l-h)/p*e.width/s),y:Math.round((c-u)/g*e.height/s)}}function Uu(i,t,e){let s,n;if(t===void 0||e===void 0){let a=Di(i);if(!a)t=i.clientWidth,e=i.clientHeight;else{let o=a.getBoundingClientRect(),r=Vn(a),l=ks(r,"border","width"),c=ks(r,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,s=jn(r.maxWidth,a,"clientWidth"),n=jn(r.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:s||wi,maxHeight:n||wi}}var yo=i=>Math.round(i*10)/10;function _o(i,t,e,s){let n=Vn(i),a=ks(n,"margin"),o=jn(n.maxWidth,i,"clientWidth")||wi,r=jn(n.maxHeight,i,"clientHeight")||wi,l=Uu(i,t,e),{width:c,height:d}=l;if(n.boxSizing==="content-box"){let h=ks(n,"border","width"),u=ks(n,"padding");c-=u.width+h.width,d-=u.height+h.height}return c=Math.max(0,c-a.width),d=Math.max(0,s?Math.floor(c/s):d-a.height),c=yo(Math.min(c,o,l.maxWidth)),d=yo(Math.min(d,r,l.maxHeight)),c&&!d&&(d=yo(c/2)),{width:c,height:d}}function Nn(i,t,e){let s=t||1,n=Math.floor(i.height*s),a=Math.floor(i.width*s);i.height=n/s,i.width=a/s;let o=i.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==s||o.height!==n||o.width!==a?(i.currentDevicePixelRatio=s,o.height=n,o.width=a,i.ctx.setTransform(s,0,0,s,0,0),!0):!1}var wo=function(){let i=!1;try{let t={get passive(){return i=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}return i}();function Hn(i,t){let e=oc(i,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Ke(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Co(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:s==="middle"?e<.5?i.y:t.y:s==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function So(i,t,e,s){let n={x:i.cp2x,y:i.cp2y},a={x:t.cp1x,y:t.cp1y},o=Ke(i,n,e),r=Ke(n,a,e),l=Ke(a,t,e),c=Ke(o,r,e),d=Ke(r,l,e);return Ke(c,d,e)}var rc=new Map;function qu(i,t){t=t||{};let e=i+JSON.stringify(t),s=rc.get(e);return s||(s=new Intl.NumberFormat(i,t),rc.set(e,s)),s}function Ps(i,t,e){return qu(t,e).format(i)}var Yu=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Ku=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function $i(i,t,e){return i?Yu(t,e):Ku()}function Io(i,t){let e,s;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=s)}function Eo(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function lc(i){return i==="angle"?{between:Cs,compare:Ol,normalize:ae}:{between:qs,compare:(t,e)=>t-e,normalize:t=>t}}function cc({start:i,end:t,count:e,loop:s,style:n}){return{start:i%e,end:t%e,loop:s&&(t-i+1)%e==0,style:n}}function Xu(i,t,e){let{property:s,start:n,end:a}=e,{between:o,normalize:r}=lc(s),l=t.length,{start:c,end:d,loop:h}=i,u,p;if(h){for(c+=l,d+=l,u=0,p=l;u<p&&o(r(t[c%l][s]),n,a);++u)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:i.style}}function ko(i,t,e){if(!e)return[i];let{property:s,start:n,end:a}=e,o=t.length,{compare:r,between:l,normalize:c}=lc(s),{start:d,end:h,loop:u,style:p}=Xu(i,t,e),g=[],m=!1,f=null,b,v,C,y=()=>l(n,C,b)&&r(n,C)!==0,w=()=>r(a,b)===0||l(a,C,b),x=()=>m||y(),_=()=>!m||w();for(let S=d,A=d;S<=h;++S)v=t[S%o],!v.skip&&(b=c(v[s]),b!==C&&(m=l(b,n,a),f===null&&x()&&(f=r(b,n)===0?S:A),f!==null&&_()&&(g.push(cc({start:f,end:S,loop:u,count:o,style:p})),f=null),A=S,C=b));return f!==null&&g.push(cc({start:f,end:h,loop:u,count:o,style:p})),g}function Po(i,t){let e=[],s=i.segments;for(let n=0;n<s.length;n++){let a=ko(s[n],i.points,t);a.length&&e.push(...a)}return e}function Zu(i,t,e,s){let n=0,a=t-1;if(e&&!s)for(;n<t&&!i[n].skip;)n++;for(;n<t&&i[n].skip;)n++;for(n%=t,e&&(a+=n);a>n&&i[a%t].skip;)a--;return a%=t,{start:n,end:a}}function Qu(i,t,e,s){let n=i.length,a=[],o=t,r=i[t],l;for(l=t+1;l<=e;++l){let c=i[l%n];c.skip||c.stop?r.skip||(s=!1,a.push({start:t%n,end:(l-1)%n,loop:s}),t=o=c.stop?l:null):(o=l,r.skip&&(t=l)),r=c}return o!==null&&a.push({start:t%n,end:o%n,loop:s}),a}function Mo(i,t){let e=i.points,s=i.options.spanGaps,n=e.length;if(!n)return[];let a=!!i._loop,{start:o,end:r}=Zu(e,n,a,s);if(s===!0)return dc(i,[{start:o,end:r,loop:a}],e,t);let l=r<o?r+n:r,c=!!i._fullLoop&&o===0&&r===n-1;return dc(i,Qu(e,o,l,c),e,t)}function dc(i,t,e,s){return!s||!s.setContext||!e?t:Ju(i,t,e,s)}function Ju(i,t,e,s){let n=i._chart.getContext(),a=hc(i.options),{_datasetIndex:o,options:{spanGaps:r}}=i,l=e.length,c=[],d=a,h=t[0].start,u=h;function p(g,m,f,b){let v=r?-1:1;if(g!==m){for(g+=l;e[g%l].skip;)g-=v;for(;e[m%l].skip;)m+=v;g%l!=m%l&&(c.push({start:g%l,end:m%l,loop:f,style:b}),d=b,h=m%l)}}for(let g of t){h=r?h:g.start;let m=e[h%l],f;for(u=h+1;u<=g.end;u++){let b=e[u%l];f=hc(s.setContext(Pe(n,{type:"segment",p0:m,p1:b,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:o}))),tp(f,d)&&p(h,u-1,g.loop,d),m=b,d=f}h<u-1&&p(h,u-1,g.loop,d)}return c}function hc(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function tp(i,t){return t&&JSON.stringify(i)!==JSON.stringify(t)}var uc=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,n){let a=e.listeners[n],o=e.duration;a.forEach(r=>r({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Cn.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;let a=s.items,o=a.length-1,r=!1,l;for(;o>=0;--o)l=a[o],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),r=!0):(a[o]=a[a.length-1],a.pop());r&&(n.draw(),this._notify(n,s,t,"progress")),a.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);!e||(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let s=e.items,n=s.length-1;for(;n>=0;--n)s[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},Xe=new uc,pc="transparent",sp={boolean(i,t,e){return e>.5?t:i},color(i,t,e){let s=Is(i||pc),n=s.valid&&Is(t||pc);return n&&n.valid?n.mix(s,e).hexString():t},number(i,t,e){return i+(t-i)*e}},gc=class{constructor(t,e,s,n){let a=e[s];n=Qs([t.to,n,a,t.from]);let o=Qs([t.from,a,n]);this._active=!0,this._fn=t.fn||sp[t.type||typeof o],this._easing=Ss[t.easing]||Ss.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);let n=this._target[this._prop],a=s-this._start,o=this._duration-a;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=Qs([t.to,e,n,t.from]),this._from=Qs([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,s=this._duration,n=this._prop,a=this._from,o=this._loop,r=this._to,l;if(this._active=a!==r&&(o||e<s),!this._active){this._target[n]=r,this._notify(!0);return}if(e<0){this._target[n]=a;return}l=e/s%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(a,r,l)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){let e=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][e]()}},ip=["x","y","borderWidth","radius","tension"],np=["color","borderColor","backgroundColor"];pt.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});var ap=Object.keys(pt.animation);pt.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:i=>i!=="onProgress"&&i!=="onComplete"&&i!=="fn"});pt.set("animations",{colors:{type:"color",properties:np},numbers:{type:"number",properties:ip}});pt.describe("animations",{_fallback:"animation"});pt.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:i=>i|0}}}});var To=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!gt(t))return;let e=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{let n=t[s];if(!gt(n))return;let a={};for(let o of ap)a[o]=n[o];(St(n.properties)&&n.properties||[s]).forEach(o=>{(o===s||!e.has(o))&&e.set(o,a)})})}_animateOptions(t,e){let s=e.options,n=rp(t,s);if(!n)return[];let a=this._createAnimations(n,s);return s.$shared&&op(t.options.$animations,s).then(()=>{t.options=s},()=>{}),a}_createAnimations(t,e){let s=this._properties,n=[],a=t.$animations||(t.$animations={}),o=Object.keys(e),r=Date.now(),l;for(l=o.length-1;l>=0;--l){let c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,e));continue}let d=e[c],h=a[c],u=s.get(c);if(h)if(u&&h.active()){h.update(u,d,r);continue}else h.cancel();if(!u||!u.duration){t[c]=d;continue}a[c]=h=new gc(u,t,c,d),n.push(h)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let s=this._createAnimations(t,e);if(s.length)return Xe.add(this._chart,s),!0}};function op(i,t){let e=[],s=Object.keys(t);for(let n=0;n<s.length;n++){let a=i[s[n]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function rp(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function fc(i,t){let e=i&&i.options||{},s=e.reverse,n=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:s?a:n,end:s?n:a}}function lp(i,t,e){if(e===!1)return!1;let s=fc(i,e),n=fc(t,e);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function cp(i){let t,e,s,n;return gt(i)?(t=i.top,e=i.right,s=i.bottom,n=i.left):t=e=s=n=i,{top:t,right:e,bottom:s,left:n,disabled:i===!1}}function mc(i,t){let e=[],s=i._getSortedDatasetMetas(t),n,a;for(n=0,a=s.length;n<a;++n)e.push(s[n].index);return e}function bc(i,t,e,s={}){let n=i.keys,a=s.mode==="single",o,r,l,c;if(t!==null){for(o=0,r=n.length;o<r;++o){if(l=+n[o],l===e){if(s.all)continue;break}c=i.values[l],Lt(c)&&(a||t===0||ce(t)===ce(c))&&(t+=c)}return t}}function dp(i){let t=Object.keys(i),e=new Array(t.length),s,n,a;for(s=0,n=t.length;s<n;++s)a=t[s],e[s]={x:a,y:i[a]};return e}function xc(i,t){let e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function hp(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function up(i){let{min:t,max:e,minDefined:s,maxDefined:n}=i.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function pp(i,t,e){let s=i[t]||(i[t]={});return s[e]||(s[e]={})}function vc(i,t,e,s){for(let n of t.getMatchingVisibleMetas(s).reverse()){let a=i[n.index];if(e&&a>0||!e&&a<0)return n.index}return null}function yc(i,t){let{chart:e,_cachedMeta:s}=i,n=e._stacks||(e._stacks={}),{iScale:a,vScale:o,index:r}=s,l=a.axis,c=o.axis,d=hp(a,o,s),h=t.length,u;for(let p=0;p<h;++p){let g=t[p],{[l]:m,[c]:f}=g,b=g._stacks||(g._stacks={});u=b[c]=pp(n,d,m),u[r]=f,u._top=vc(u,o,!0,s.type),u._bottom=vc(u,o,!1,s.type)}}function Ao(i,t){let e=i.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function gp(i,t){return Pe(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function fp(i,t,e){return Pe(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Li(i,t){let e=i.controller.index,s=i.vScale&&i.vScale.axis;if(!!s){t=t||i._parsed;for(let n of t){let a=n._stacks;if(!a||a[s]===void 0||a[s][e]===void 0)return;delete a[s][e]}}}var Ro=i=>i==="reset"||i==="none",_c=(i,t)=>t?i:Object.assign({},i),mp=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:mc(e,!0),values:null},he=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=xc(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Li(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,s=this.getDataset(),n=(h,u,p,g)=>h==="x"?u:h==="r"?g:p,a=e.xAxisID=ft(s.xAxisID,Ao(t,"x")),o=e.yAxisID=ft(s.yAxisID,Ao(t,"y")),r=e.rAxisID=ft(s.rAxisID,Ao(t,"r")),l=e.indexAxis,c=e.iAxisID=n(l,a,o,r),d=e.vAxisID=n(l,o,a,r);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&_n(this._data,this),t._stacked&&Li(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(gt(e))this._data=dp(e);else if(s!==e){if(s){_n(s,this);let n=this._cachedMeta;Li(n),n._parsed=[]}e&&Object.isExtensible(e)&&eo(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,s=this.getDataset(),n=!1;this._dataCheck();let a=e._stacked;e._stacked=xc(e.vScale,e),e.stack!==s.stack&&(n=!0,Li(e),e.stack=s.stack),this._resyncElements(t),(n||a!==e._stacked)&&yc(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:s,_data:n}=this,{iScale:a,_stacked:o}=s,r=a.axis,l=t===0&&e===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],d,h,u;if(this._parsing===!1)s._parsed=n,s._sorted=!0,u=n;else{St(n[t])?u=this.parseArrayData(s,n,t,e):gt(n[t])?u=this.parseObjectData(s,n,t,e):u=this.parsePrimitiveData(s,n,t,e);let p=()=>h[r]===null||c&&h[r]<c[r];for(d=0;d<e;++d)s._parsed[d+t]=h=u[d],l&&(p()&&(l=!1),c=h);s._sorted=l}o&&yc(this,u)}parsePrimitiveData(t,e,s,n){let{iScale:a,vScale:o}=t,r=a.axis,l=o.axis,c=a.getLabels(),d=a===o,h=new Array(n),u,p,g;for(u=0,p=n;u<p;++u)g=u+s,h[u]={[r]:d||a.parse(c[g],g),[l]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,n){let{xScale:a,yScale:o}=t,r=new Array(n),l,c,d,h;for(l=0,c=n;l<c;++l)d=l+s,h=e[d],r[l]={x:a.parse(h[0],d),y:o.parse(h[1],d)};return r}parseObjectData(t,e,s,n){let{xScale:a,yScale:o}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,c=new Array(n),d,h,u,p;for(d=0,h=n;d<h;++d)u=d+s,p=e[u],c[d]={x:a.parse(Ee(p,r),u),y:o.parse(Ee(p,l),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){let n=this.chart,a=this._cachedMeta,o=e[t.axis],r={keys:mc(n,!0),values:e._stacks[t.axis]};return bc(r,o,a.index,{mode:s})}updateRangeFromParsed(t,e,s,n){let a=s[e.axis],o=a===null?NaN:a,r=n&&s._stacks[e.axis];n&&r&&(n.values=r,o=bc(n,a,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){let s=this._cachedMeta,n=s._parsed,a=s._sorted&&t===s.iScale,o=n.length,r=this._getOtherScale(t),l=mp(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=up(r),u,p;function g(){p=n[u];let m=p[r.axis];return!Lt(p[t.axis])||d>m||h<m}for(u=0;u<o&&!(!g()&&(this.updateRangeFromParsed(c,t,p,l),a));++u);if(a){for(u=o-1;u>=0;--u)if(!g()){this.updateRangeFromParsed(c,t,p,l);break}}return c}getAllParsedValues(t){let e=this._cachedMeta._parsed,s=[],n,a,o;for(n=0,a=e.length;n<a;++n)o=e[n][t.axis],Lt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,s=e.iScale,n=e.vScale,a=this.getParsed(t);return{label:s?""+s.getLabelForValue(a[s.axis]):"",value:n?""+n.getLabelForValue(a[n.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=cp(ft(this.options.clip,lp(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,s=this._cachedMeta,n=s.data||[],a=e.chartArea,o=[],r=this._drawStart||0,l=this._drawCount||n.length-r,c=this.options.drawActiveElementsOnTop,d;for(s.dataset&&s.dataset.draw(t,a,r,l),d=r;d<r+l;++d){let h=n[d];h.hidden||(h.active&&c?o.push(h):h.draw(t,a))}for(d=0;d<o.length;++d)o[d].draw(t,a)}getStyle(t,e){let s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){let n=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let o=this._cachedMeta.data[t];a=o.$context||(o.$context=fp(this.getContext(),t,o)),a.parsed=this.getParsed(t),a.raw=n.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=gp(this.chart.getContext(),this.index)),a.dataset=n,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=s,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){let n=e==="active",a=this._cachedDataOpts,o=t+"-"+e,r=a[o],l=this.enableOptionSharing&&Xt(s);if(r)return _c(r,l);let c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),h=n?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),d),p=Object.keys(pt.elements[t]),g=()=>this.getContext(s,n),m=c.resolveNamedOptions(u,p,g,h);return m.$shared&&(m.$shared=l,a[o]=Object.freeze(_c(m,l))),m}_resolveAnimations(t,e,s){let n=this.chart,a=this._cachedDataOpts,o=`animation-${e}`,r=a[o];if(r)return r;let l;if(n.options.animation!==!1){let d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),u=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(u,this.getContext(t,s,e))}let c=new To(n,l&&l.animations);return l&&l._cacheable&&(a[o]=Object.freeze(c)),c}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ro(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let s=this.resolveDataElementOptions(t,e),n=this._sharedOptions,a=this.getSharedOptions(s),o=this.includeOptions(e,a)||a!==n;return this.updateSharedOptions(a,e,s),{sharedOptions:a,includeOptions:o}}updateElement(t,e,s,n){Ro(n)?Object.assign(t,s):this._resolveAnimations(e,n).update(t,s)}updateSharedOptions(t,e,s){t&&!Ro(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,n){t.active=n;let a=this.getStyle(e,n);this._resolveAnimations(e,s,n).update(t,{options:!n&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,s=this._cachedMeta.data;for(let[r,l,c]of this._syncList)this[r](l,c);this._syncList=[];let n=s.length,a=e.length,o=Math.min(a,n);o&&this.parse(0,o),a>n?this._insertElements(n,a-n,t):a<n&&this._removeElements(a,n-a)}_insertElements(t,e,s=!0){let n=this._cachedMeta,a=n.data,o=t+e,r,l=c=>{for(c.length+=e,r=c.length-1;r>=o;r--)c[r]=c[r-e]};for(l(a),r=t;r<o;++r)a[r]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),s&&this.updateElements(a,t,e,"reset")}updateElements(t,e,s,n){}_removeElements(t,e){let s=this._cachedMeta;if(this._parsing){let n=s._parsed.splice(t,e);s._stacked&&Li(s,n)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,s,n]=t;this[e](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};he.defaults={};he.prototype.datasetElementType=null;he.prototype.dataElementType=null;function bp(i,t){if(!i._cache.$bar){let e=i.getMatchingVisibleMetas(t),s=[];for(let n=0,a=e.length;n<a;n++)s=s.concat(e[n].controller.getAllParsedValues(i));i._cache.$bar=wn(s.sort((n,a)=>n-a))}return i._cache.$bar}function xp(i){let t=i.iScale,e=bp(t,i.type),s=t._length,n,a,o,r,l=()=>{o===32767||o===-32768||(Xt(r)&&(s=Math.min(s,Math.abs(o-r)||s)),r=o)};for(n=0,a=e.length;n<a;++n)o=t.getPixelForValue(e[n]),l();for(r=void 0,n=0,a=t.ticks.length;n<a;++n)o=t.getPixelForTick(n),l();return s}function vp(i,t,e,s){let n=e.barThickness,a,o;return yt(n)?(a=t.min*e.categoryPercentage,o=e.barPercentage):(a=n*s,o=1),{chunk:a/s,ratio:o,start:t.pixels[i]-a/2}}function yp(i,t,e,s){let n=t.pixels,a=n[i],o=i>0?n[i-1]:null,r=i<n.length-1?n[i+1]:null,l=e.categoryPercentage;o===null&&(o=a-(r===null?t.end-t.start:r-a)),r===null&&(r=a+a-o);let c=a-(a-Math.min(o,r))/2*l;return{chunk:Math.abs(r-o)/2*l/s,ratio:e.barPercentage,start:c}}function _p(i,t,e,s){let n=e.parse(i[0],s),a=e.parse(i[1],s),o=Math.min(n,a),r=Math.max(n,a),l=o,c=r;Math.abs(o)>Math.abs(r)&&(l=r,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:a,min:o,max:r}}function wc(i,t,e,s){return St(i)?_p(i,t,e,s):t[e.axis]=e.parse(i,s),t}function Cc(i,t,e,s){let n=i.iScale,a=i.vScale,o=n.getLabels(),r=n===a,l=[],c,d,h,u;for(c=e,d=e+s;c<d;++c)u=t[c],h={},h[n.axis]=r||n.parse(o[c],c),l.push(wc(u,h,a,c));return l}function Do(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function wp(i,t,e){return i!==0?ce(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Cp(i){let t,e,s,n,a;return i.horizontal?(t=i.base>i.x,e="left",s="right"):(t=i.base<i.y,e="bottom",s="top"),t?(n="end",a="start"):(n="start",a="end"),{start:e,end:s,reverse:t,top:n,bottom:a}}function Sp(i,t,e,s){let n=t.borderSkipped,a={};if(!n){i.borderSkipped=a;return}if(n===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:r,reverse:l,top:c,bottom:d}=Cp(i);n==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===s?n=c:(e._bottom||0)===s?n=d:(a[Sc(d,o,r,l)]=!0,n=c)),a[Sc(n,o,r,l)]=!0,i.borderSkipped=a}function Sc(i,t,e,s){return s?(i=Ip(i,t,e),i=Ic(i,e,t)):i=Ic(i,t,e),i}function Ip(i,t,e){return i===t?e:i===e?t:i}function Ic(i,t,e){return i==="start"?t:i==="end"?e:i}function Ep(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}var ve=class extends he{parsePrimitiveData(t,e,s,n){return Cc(t,e,s,n)}parseArrayData(t,e,s,n){return Cc(t,e,s,n)}parseObjectData(t,e,s,n){let{iScale:a,vScale:o}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?r:l,d=o.axis==="x"?r:l,h=[],u,p,g,m;for(u=s,p=s+n;u<p;++u)m=e[u],g={},g[a.axis]=a.parse(Ee(m,c),u),h.push(wc(Ee(m,d),g,o,u));return h}updateRangeFromParsed(t,e,s,n){super.updateRangeFromParsed(t,e,s,n);let a=s._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:s,vScale:n}=e,a=this.getParsed(t),o=a._custom,r=Do(o)?"["+o.start+", "+o.end+"]":""+n.getLabelForValue(a[n.axis]);return{label:""+s.getLabelForValue(a[s.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){let a=n==="reset",{index:o,_cachedMeta:{vScale:r}}=this,l=r.getBasePixel(),c=r.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,n);for(let p=e;p<e+s;p++){let g=this.getParsed(p),m=a||yt(g[r.axis])?{base:l,head:l}:this._calculateBarValuePixels(p),f=this._calculateBarIndexPixels(p,d),b=(g._stacks||{})[r.axis],v={horizontal:c,base:m.base,enableBorderRadius:!b||Do(g._custom)||o===b._top||o===b._bottom,x:c?m.head:f.center,y:c?f.center:m.head,height:c?f.size:Math.abs(m.size),width:c?Math.abs(m.size):f.size};u&&(v.options=h||this.resolveDataElementOptions(p,t[p].active?"active":n));let C=v.options||t[p].options;Sp(v,C,b,o),Ep(v,C,d.ratio),this.updateElement(t[p],p,v,n)}}_getStacks(t,e){let{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),a=s.options.stacked,o=[],r=l=>{let c=l.controller.getParsed(e),d=c&&c[l.vScale.axis];if(yt(d)||isNaN(d))return!0};for(let l of n)if(!(e!==void 0&&r(l))&&((a===!1||o.indexOf(l.stack)===-1||a===void 0&&l.stack===void 0)&&o.push(l.stack),l.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,s){let n=this._getStacks(t,s),a=e!==void 0?n.indexOf(e):-1;return a===-1?n.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,s=e.iScale,n=[],a,o;for(a=0,o=e.data.length;a<o;++a)n.push(s.getPixelForValue(this.getParsed(a)[s.axis],a));let r=t.barThickness;return{min:r||xp(e),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:s},options:{base:n,minBarLength:a}}=this,o=n||0,r=this.getParsed(t),l=r._custom,c=Do(l),d=r[e.axis],h=0,u=s?this.applyStack(e,r,s):d,p,g;u!==d&&(h=u-d,u=d),c&&(d=l.barStart,u=l.barEnd-l.barStart,d!==0&&ce(d)!==ce(l.barEnd)&&(h=0),h+=d);let m=!yt(n)&&!c?n:h,f=e.getPixelForValue(m);if(this.chart.getDataVisibility(t)?p=e.getPixelForValue(h+u):p=f,g=p-f,Math.abs(g)<a){g=wp(g,e,o)*a,d===o&&(f-=g/2);let b=e.getPixelForDecimal(0),v=e.getPixelForDecimal(1),C=Math.min(b,v),y=Math.max(b,v);f=Math.max(Math.min(f,y),C),p=f+g}if(f===e.getPixelForValue(o)){let b=ce(g)*e.getLineWidthForValue(o)/2;f+=b,g-=b}return{size:g,base:f,head:p,center:p+g/2}}_calculateBarIndexPixels(t,e){let s=e.scale,n=this.options,a=n.skipNull,o=ft(n.maxBarThickness,1/0),r,l;if(e.grouped){let c=a?this._getStackCount(t):e.stackCount,d=n.barThickness==="flex"?yp(t,e,n,c):vp(t,e,n,c),h=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0);r=d.start+d.chunk*h+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else r=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(o,e.min*e.ratio);return{base:r-l/2,head:r+l/2,center:r,size:l}}draw(){let t=this._cachedMeta,e=t.vScale,s=t.data,n=s.length,a=0;for(;a<n;++a)this.getParsed(a)[e.axis]!==null&&s[a].draw(this._ctx)}};ve.id="bar";ve.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};ve.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};var Un=class extends he{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,n){let a=super.parsePrimitiveData(t,e,s,n);for(let o=0;o<a.length;o++)a[o]._custom=this.resolveDataElementOptions(o+s).radius;return a}parseArrayData(t,e,s,n){let a=super.parseArrayData(t,e,s,n);for(let o=0;o<a.length;o++){let r=e[s+o];a[o]._custom=ft(r[2],this.resolveDataElementOptions(o+s).radius)}return a}parseObjectData(t,e,s,n){let a=super.parseObjectData(t,e,s,n);for(let o=0;o<a.length;o++){let r=e[s+o];a[o]._custom=ft(r&&r.r&&+r.r,this.resolveDataElementOptions(o+s).radius)}return a}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,{xScale:s,yScale:n}=e,a=this.getParsed(t),o=s.getLabelForValue(a.x),r=n.getLabelForValue(a.y),l=a._custom;return{label:e.label,value:"("+o+", "+r+(l?", "+l:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,n){let a=n==="reset",{iScale:o,vScale:r}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),d=o.axis,h=r.axis;for(let u=e;u<e+s;u++){let p=t[u],g=!a&&this.getParsed(u),m={},f=m[d]=a?o.getPixelForDecimal(.5):o.getPixelForValue(g[d]),b=m[h]=a?r.getBasePixel():r.getPixelForValue(g[h]);m.skip=isNaN(f)||isNaN(b),c&&(m.options=l||this.resolveDataElementOptions(u,p.active?"active":n),a&&(m.options.radius=0)),this.updateElement(p,u,m,n)}}resolveDataElementOptions(t,e){let s=this.getParsed(t),n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));let a=n.radius;return e!=="active"&&(n.radius=0),n.radius+=ft(s&&s._custom,a),n}};Un.id="bubble";Un.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};Un.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function kp(i,t,e){let s=1,n=1,a=0,o=0;if(t<Ct){let r=i,l=r+t,c=Math.cos(r),d=Math.sin(r),h=Math.cos(l),u=Math.sin(l),p=(C,y,w)=>Cs(C,r,l,!0)?1:Math.max(y,y*e,w,w*e),g=(C,y,w)=>Cs(C,r,l,!0)?-1:Math.min(y,y*e,w,w*e),m=p(0,c,h),f=p(Mt,d,u),b=g(Pt,c,h),v=g(Pt+Mt,d,u);s=(m-b)/2,n=(f-v)/2,a=-(m+b)/2,o=-(f+v)/2}return{ratioX:s,ratioY:n,offsetX:a,offsetY:o}}var ti=class extends he{constructor(t,e){super(t,e);this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let a=l=>+s[l];if(gt(s[t])){let{key:l="value"}=this._parsing;a=c=>+Ee(s[c],l)}let o,r;for(o=t,r=t+e;o<r;++o)n._parsed[o]=a(o)}}_getRotation(){return ne(this.options.rotation-90)}_getCircumference(){return ne(this.options.circumference)}_getRotationExtents(){let t=Ct,e=-Ct;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)){let n=this.chart.getDatasetMeta(s).controller,a=n._getRotation(),o=n._getCircumference();t=Math.min(t,a),e=Math.max(e,a+o)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:s}=e,n=this._cachedMeta,a=n.data,o=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,r=Math.max((Math.min(s.width,s.height)-o)/2,0),l=Math.min(qa(this.options.cutout,r),1),c=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:u,ratioY:p,offsetX:g,offsetY:m}=kp(h,d,l),f=(s.width-o)/u,b=(s.height-o)/p,v=Math.max(Math.min(f,b)/2,0),C=fn(this.options.radius,v),y=Math.max(C*l,0),w=(C-y)/this._getVisibleDatasetWeightTotal();this.offsetX=g*C,this.offsetY=m*C,n.total=this.calculateTotal(),this.outerRadius=C-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,e){let s=this.options,n=this._cachedMeta,a=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*a/Ct)}updateElements(t,e,s,n){let a=n==="reset",o=this.chart,r=o.chartArea,c=o.options.animation,d=(r.left+r.right)/2,h=(r.top+r.bottom)/2,u=a&&c.animateScale,p=u?0:this.innerRadius,g=u?0:this.outerRadius,{sharedOptions:m,includeOptions:f}=this._getSharedOptions(e,n),b=this._getRotation(),v;for(v=0;v<e;++v)b+=this._circumference(v,a);for(v=e;v<e+s;++v){let C=this._circumference(v,a),y=t[v],w={x:d+this.offsetX,y:h+this.offsetY,startAngle:b,endAngle:b+C,circumference:C,outerRadius:g,innerRadius:p};f&&(w.options=m||this.resolveDataElementOptions(v,y.active?"active":n)),b+=C,this.updateElement(y,v,w,n)}}calculateTotal(){let t=this._cachedMeta,e=t.data,s=0,n;for(n=0;n<e.length;n++){let a=t._parsed[n];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(s+=Math.abs(a))}return s}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?Ct*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ps(e._parsed[t],s.options.locale);return{label:n[t]||"",value:a}}getMaxBorderWidth(t){let e=0,s=this.chart,n,a,o,r,l;if(!t){for(n=0,a=s.data.datasets.length;n<a;++n)if(s.isDatasetVisible(n)){o=s.getDatasetMeta(n),t=o.data,r=o.controller;break}}if(!t)return 0;for(n=0,a=t.length;n<a;++n)l=r.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,n=t.length;s<n;++s){let a=this.resolveDataElementOptions(s);e=Math.max(e,a.offset||0,a.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(ft(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}};ti.id="doughnut";ti.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};ti.descriptors={_scriptable:i=>i!=="spacing",_indexable:i=>i!=="spacing"};ti.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(i){let t=i.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:e}}=i.legend.options;return t.labels.map((s,n)=>{let o=i.getDatasetMeta(0).controller.getStyle(n);return{text:s,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:e,hidden:!i.getDataVisibility(n),index:n}})}return[]}},onClick(i,t,e){e.chart.toggleDataVisibility(t.index),e.chart.update()}},tooltip:{callbacks:{title(){return""},label(i){let t=i.label,e=": "+i.formattedValue;return St(t)?(t=t.slice(),t[0]+=e):t+=e,t}}}}};var ue=class extends he{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:s,data:n=[],_dataset:a}=e,o=this.chart._animationsDisabled,{start:r,count:l}=En(e,n,o);this._drawStart=r,this._drawCount=l,kn(e)&&(r=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!a._decimated,s.points=n;let c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:c},t),this.updateElements(n,r,l,t)}updateElements(t,e,s,n){let a=n==="reset",{iScale:o,vScale:r,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,n),u=o.axis,p=r.axis,{spanGaps:g,segment:m}=this.options,f=rs(g)?g:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||a||n==="none",v=e>0&&this.getParsed(e-1);for(let C=e;C<e+s;++C){let y=t[C],w=this.getParsed(C),x=b?y:{},_=yt(w[p]),S=x[u]=o.getPixelForValue(w[u],C),A=x[p]=a||_?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,w,l):w[p],C);x.skip=isNaN(S)||isNaN(A)||_,x.stop=C>0&&Math.abs(w[u]-v[u])>f,m&&(x.parsed=w,x.raw=c.data[C]),h&&(x.options=d||this.resolveDataElementOptions(C,y.active?"active":n)),b||this.updateElement(y,C,x,n),v=w}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return s;let a=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,a,o)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};ue.id="line";ue.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};ue.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};var Me=class extends he{constructor(t,e){super(t,e);this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ps(e._parsed[t].r,s.options.locale);return{label:n[t]||"",value:a}}parseObjectData(t,e,s,n){return zn.bind(this)(t,e,s,n)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{let a=this.getParsed(n).r;!isNaN(a)&&this.chart.getDataVisibility(n)&&(a<e.min&&(e.min=a),a>e.max&&(e.max=a))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,s=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),a=Math.max(n/2,0),o=Math.max(s.cutoutPercentage?a/100*s.cutoutPercentage:1,0),r=(a-o)/t.getVisibleDatasetCount();this.outerRadius=a-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,s,n){let a=n==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,h=c.yCenter,u=c.getIndexAngle(0)-.5*Pt,p=u,g,m=360/this.countVisibleElements();for(g=0;g<e;++g)p+=this._computeAngle(g,n,m);for(g=e;g<e+s;g++){let f=t[g],b=p,v=p+this._computeAngle(g,n,m),C=o.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;p=v,a&&(l.animateScale&&(C=0),l.animateRotate&&(b=v=u));let y={x:d,y:h,innerRadius:0,outerRadius:C,startAngle:b,endAngle:v,options:this.resolveDataElementOptions(g,f.active?"active":n)};this.updateElement(f,g,y,n)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?ne(this.resolveDataElementOptions(t,e).angle||s):0}};Me.id="polarArea";Me.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};Me.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(i){let t=i.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:e}}=i.legend.options;return t.labels.map((s,n)=>{let o=i.getDatasetMeta(0).controller.getStyle(n);return{text:s,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:e,hidden:!i.getDataVisibility(n),index:n}})}return[]}},onClick(i,t,e){e.chart.toggleDataVisibility(t.index),e.chart.update()}},tooltip:{callbacks:{title(){return""},label(i){return i.chart.data.labels[i.dataIndex]+": "+i.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};var $o=class extends ti{};$o.id="pie";$o.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};var qn=class extends he{getLabelAndValue(t){let e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,n){return zn.bind(this)(t,e,s,n)}update(t){let e=this._cachedMeta,s=e.dataset,n=e.data||[],a=e.iScale.getLabels();if(s.points=n,t!=="resize"){let o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);let r={_loop:!0,_fullLoop:a.length===n.length,options:o};this.updateElement(s,void 0,r,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,s,n){let a=this._cachedMeta.rScale,o=n==="reset";for(let r=e;r<e+s;r++){let l=t[r],c=this.resolveDataElementOptions(r,l.active?"active":n),d=a.getPointPositionForValue(r,this.getParsed(r).r),h=o?a.xCenter:d.x,u=o?a.yCenter:d.y,p={x:h,y:u,angle:d.angle,skip:isNaN(h)||isNaN(u),options:c};this.updateElement(l,r,p,n)}}};qn.id="radar";qn.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};qn.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};var Te=class{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){let{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return rs(this.x)&&rs(this.y)}getProps(t,e){let s=this.$animations;if(!e||!s)return this;let n={};return t.forEach(a=>{n[a]=s[a]&&s[a].active()?s[a]._to:this[a]}),n}};Te.defaults={};Te.defaultRoutes=void 0;var Ec={values(i){return St(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";let s=this.chart.options.locale,n,a=i;if(e.length>1){let c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),a=Pp(i,e)}let o=Zt(Math.abs(a)),r=Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),Ps(i,s,l)},logarithmic(i,t,e){if(i===0)return"0";let s=i/Math.pow(10,Math.floor(Zt(i)));return s===1||s===2||s===5?Ec.numeric.call(this,i,t,e):""}};function Pp(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var Yn={formatters:Ec};pt.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(i,t)=>t.lineWidth,tickColor:(i,t)=>t.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Yn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});pt.route("scale.ticks","color","","color");pt.route("scale.grid","color","","borderColor");pt.route("scale.grid","borderColor","","borderColor");pt.route("scale.title","color","","color");pt.describe("scale",{_fallback:!1,_scriptable:i=>!i.startsWith("before")&&!i.startsWith("after")&&i!=="callback"&&i!=="parser",_indexable:i=>i!=="borderDash"&&i!=="tickBorderDash"});pt.describe("scales",{_fallback:"scale"});pt.describe("scale.ticks",{_scriptable:i=>i!=="backdropPadding"&&i!=="callback",_indexable:i=>i!=="backdropPadding"});function Mp(i,t){let e=i.options.ticks,s=e.maxTicksLimit||Tp(i),n=e.major.enabled?Rp(t):[],a=n.length,o=n[0],r=n[a-1],l=[];if(a>s)return Dp(t,l,n,a/s),l;let c=Ap(n,t,s);if(a>0){let d,h,u=a>1?Math.round((r-o)/(a-1)):null;for(Kn(t,l,c,yt(u)?0:o-u,o),d=0,h=a-1;d<h;d++)Kn(t,l,c,n[d],n[d+1]);return Kn(t,l,c,r,yt(u)?t.length:r+u),l}return Kn(t,l,c),l}function Tp(i){let t=i.options.offset,e=i._tickSize(),s=i._length/e+(t?0:1),n=i._maxLength/e;return Math.floor(Math.min(s,n))}function Ap(i,t,e){let s=$p(i),n=t.length/e;if(!s)return Math.max(n,1);let a=Xa(s);for(let o=0,r=a.length-1;o<r;o++){let l=a[o];if(l>n)return l}return Math.max(n,1)}function Rp(i){let t=[],e,s;for(e=0,s=i.length;e<s;e++)i[e].major&&t.push(e);return t}function Dp(i,t,e,s){let n=0,a=e[0],o;for(s=Math.ceil(s),o=0;o<i.length;o++)o===a&&(t.push(i[o]),n++,a=e[n*s])}function Kn(i,t,e,s,n){let a=ft(s,0),o=Math.min(ft(n,i.length),i.length),r=0,l,c,d;for(e=Math.ceil(e),n&&(l=n-s,e=l/Math.floor(l/e)),d=a;d<0;)r++,d=Math.round(a+r*e);for(c=Math.max(a,0);c<o;c++)c===d&&(t.push(i[c]),r++,d=Math.round(a+r*e))}function $p(i){let t=i.length,e,s;if(t<2)return!1;for(s=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==s)return!1;return s}var Lp=i=>i==="left"?"right":i==="right"?"left":i,kc=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e;function Pc(i,t){let e=[],s=i.length/t,n=i.length,a=0;for(;a<n;a+=s)e.push(i[Math.floor(a)]);return e}function Bp(i,t,e){let s=i.ticks.length,n=Math.min(t,s-1),a=i._startPixel,o=i._endPixel,r=1e-6,l=i.getPixelForTick(n),c;if(!(e&&(s===1?c=Math.max(l-a,o-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<a-r||l>o+r)))return l}function Op(i,t){_t(i,e=>{let s=e.gc,n=s.length/2,a;if(n>t){for(a=0;a<n;++a)delete e.data[s[a]];s.splice(0,n)}})}function Bi(i){return i.drawTicks?i.tickLength:0}function Mc(i,t){if(!i.display)return 0;let e=Nt(i.font,t),s=Qt(i.padding);return(St(i.text)?i.text.length:1)*e.lineHeight+s.height}function Fp(i,t){return Pe(i,{scale:t,type:"scale"})}function zp(i,t,e){return Pe(i,{tick:e,index:t,type:"tick"})}function Gp(i,t,e){let s=io(i);return(e&&t!=="right"||!e&&t==="right")&&(s=Lp(s)),s}function Wp(i,t,e,s){let{top:n,left:a,bottom:o,right:r,chart:l}=i,{chartArea:c,scales:d}=l,h=0,u,p,g,m=o-n,f=r-a;if(i.isHorizontal()){if(p=In(s,a,r),gt(e)){let b=Object.keys(e)[0],v=e[b];g=d[b].getPixelForValue(v)+m-t}else e==="center"?g=(c.bottom+c.top)/2+m-t:g=kc(i,e,t);u=r-a}else{if(gt(e)){let b=Object.keys(e)[0],v=e[b];p=d[b].getPixelForValue(v)-f+t}else e==="center"?p=(c.left+c.right)/2-f+t:p=kc(i,e,t);g=In(s,o,n),h=e==="left"?-Mt:Mt}return{titleX:p,titleY:g,maxWidth:u,rotation:h}}var ps=class extends Te{constructor(t){super();this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:n}=this;return t=Kt(t,Number.POSITIVE_INFINITY),e=Kt(e,Number.NEGATIVE_INFINITY),s=Kt(s,Number.POSITIVE_INFINITY),n=Kt(n,Number.NEGATIVE_INFINITY),{min:Kt(t,s),max:Kt(e,n),minDefined:Lt(t),maxDefined:Lt(e)}}getMinMax(t){let{min:e,max:s,minDefined:n,maxDefined:a}=this.getUserBounds(),o;if(n&&a)return{min:e,max:s};let r=this.getMatchingVisibleMetas();for(let l=0,c=r.length;l<c;++l)o=r[l].controller.getMinMax(this,t),n||(e=Math.min(e,o.min)),a||(s=Math.max(s,o.max));return e=a&&e>s?s:e,s=n&&e>s?e:s,{min:Kt(e,Kt(s,e)),max:Kt(s,Kt(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){kt(this.options.beforeUpdate,[this])}update(t,e,s){let{beginAtZero:n,grace:a,ticks:o}=this.options,r=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=mo(this,a,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let l=r<this.ticks.length;this._convertTicksToLabels(l?Pc(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Mp(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){kt(this.options.afterUpdate,[this])}beforeSetDimensions(){kt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){kt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),kt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){kt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,s,n,a;for(s=0,n=t.length;s<n;s++)a=t[s],a.label=kt(e.callback,[a.value,s,t],this)}afterTickToLabelConversion(){kt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){kt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,s=this.ticks.length,n=e.minRotation||0,a=e.maxRotation,o=n,r,l,c;if(!this._isVisible()||!e.display||n>=a||s<=1||!this.isHorizontal()){this.labelRotation=n;return}let d=this._getLabelSizes(),h=d.widest.width,u=d.highest.height,p=Ot(this.chart.width-h,0,this.maxWidth);r=t.offset?this.maxWidth/s:p/(s-1),h+6>r&&(r=p/(s-(t.offset?.5:1)),l=this.maxHeight-Bi(t.grid)-e.padding-Mc(t.title,this.chart.options.font),c=Math.sqrt(h*h+u*u),o=Ci(Math.min(Math.asin(Ot((d.highest.height+6)/r,-1,1)),Math.asin(Ot(l/c,-1,1))-Math.asin(Ot(u/c,-1,1)))),o=Math.max(n,Math.min(a,o))),this.labelRotation=o}afterCalculateLabelRotation(){kt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){kt(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:s,title:n,grid:a}}=this,o=this._isVisible(),r=this.isHorizontal();if(o){let l=Mc(n,e.options.font);if(r?(t.width=this.maxWidth,t.height=Bi(a)+l):(t.height=this.maxHeight,t.width=Bi(a)+l),s.display&&this.ticks.length){let{first:c,last:d,widest:h,highest:u}=this._getLabelSizes(),p=s.padding*2,g=ne(this.labelRotation),m=Math.cos(g),f=Math.sin(g);if(r){let b=s.mirror?0:f*h.width+m*u.height;t.height=Math.min(this.maxHeight,t.height+b+p)}else{let b=s.mirror?0:m*h.width+f*u.height;t.width=Math.min(this.maxWidth,t.width+b+p)}this._calculatePadding(c,d,f,m)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,n){let{ticks:{align:a,padding:o},position:r}=this.options,l=this.labelRotation!==0,c=r!=="top"&&this.axis==="x";if(this.isHorizontal()){let d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),u=0,p=0;l?c?(u=n*t.width,p=s*e.height):(u=s*t.height,p=n*e.width):a==="start"?p=e.width:a==="end"?u=t.width:a!=="inner"&&(u=t.width/2,p=e.width/2),this.paddingLeft=Math.max((u-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((p-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;a==="start"?(d=0,h=t.height):a==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){kt(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)yt(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,s=this.ticks;e<s.length&&(s=Pc(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length)}return t}_computeLabelSizes(t,e){let{ctx:s,_longestTextCache:n}=this,a=[],o=[],r=0,l=0,c,d,h,u,p,g,m,f,b,v,C;for(c=0;c<e;++c){if(u=t[c].label,p=this._resolveTickFontOptions(c),s.font=g=p.string,m=n[g]=n[g]||{data:{},gc:[]},f=p.lineHeight,b=v=0,!yt(u)&&!St(u))b=Ks(s,m.data,m.gc,b,u),v=f;else if(St(u))for(d=0,h=u.length;d<h;++d)C=u[d],!yt(C)&&!St(C)&&(b=Ks(s,m.data,m.gc,b,C),v+=f);a.push(b),o.push(v),r=Math.max(b,r),l=Math.max(v,l)}Op(n,e);let y=a.indexOf(r),w=o.indexOf(l),x=_=>({width:a[_]||0,height:o[_]||0});return{first:x(0),last:x(e-1),widest:x(y),highest:x(w),widths:a,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return Qa(this._alignToPixels?qe(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let s=e[t];return s.$context||(s.$context=zp(this.getContext(),t,s))}return this.$context||(this.$context=Fp(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=ne(this.labelRotation),s=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),a=this._getLabelSizes(),o=t.autoSkipPadding||0,r=a?a.widest.width+o:0,l=a?a.highest.height+o:0;return this.isHorizontal()?l*s>r*n?r/s:l/n:l*n<r*s?l/s:r/n}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,s=this.chart,n=this.options,{grid:a,position:o}=n,r=a.offset,l=this.isHorizontal(),d=this.ticks.length+(r?1:0),h=Bi(a),u=[],p=a.setContext(this.getContext()),g=p.drawBorder?p.borderWidth:0,m=g/2,f=function(P){return qe(s,P,g)},b,v,C,y,w,x,_,S,A,D,M,F;if(o==="top")b=f(this.bottom),x=this.bottom-h,S=b-m,D=f(t.top)+m,F=t.bottom;else if(o==="bottom")b=f(this.top),D=t.top,F=f(t.bottom)-m,x=b+m,S=this.top+h;else if(o==="left")b=f(this.right),w=this.right-h,_=b-m,A=f(t.left)+m,M=t.right;else if(o==="right")b=f(this.left),A=t.left,M=f(t.right)-m,w=b+m,_=this.left+h;else if(e==="x"){if(o==="center")b=f((t.top+t.bottom)/2+.5);else if(gt(o)){let P=Object.keys(o)[0],T=o[P];b=f(this.chart.scales[P].getPixelForValue(T))}D=t.top,F=t.bottom,x=b+m,S=x+h}else if(e==="y"){if(o==="center")b=f((t.left+t.right)/2);else if(gt(o)){let P=Object.keys(o)[0],T=o[P];b=f(this.chart.scales[P].getPixelForValue(T))}w=b-m,_=w-h,A=t.left,M=t.right}let E=ft(n.ticks.maxTicksLimit,d),B=Math.max(1,Math.ceil(d/E));for(v=0;v<d;v+=B){let P=a.setContext(this.getContext(v)),T=P.lineWidth,I=P.color,et=P.borderDash||[],H=P.borderDashOffset,V=P.tickWidth,K=P.tickColor,L=P.tickBorderDash||[],$=P.tickBorderDashOffset;C=Bp(this,v,r),C!==void 0&&(y=qe(s,C,T),l?w=_=A=M=y:x=S=D=F=y,u.push({tx1:w,ty1:x,tx2:_,ty2:S,x1:A,y1:D,x2:M,y2:F,width:T,color:I,borderDash:et,borderDashOffset:H,tickWidth:V,tickColor:K,tickBorderDash:L,tickBorderDashOffset:$}))}return this._ticksLength=d,this._borderValue=b,u}_computeLabelItems(t){let e=this.axis,s=this.options,{position:n,ticks:a}=s,o=this.isHorizontal(),r=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=a,u=Bi(s.grid),p=u+d,g=h?-d:p,m=-ne(this.labelRotation),f=[],b,v,C,y,w,x,_,S,A,D,M,F,E="middle";if(n==="top")x=this.bottom-g,_=this._getXAxisLabelAlignment();else if(n==="bottom")x=this.top+g,_=this._getXAxisLabelAlignment();else if(n==="left"){let P=this._getYAxisLabelAlignment(u);_=P.textAlign,w=P.x}else if(n==="right"){let P=this._getYAxisLabelAlignment(u);_=P.textAlign,w=P.x}else if(e==="x"){if(n==="center")x=(t.top+t.bottom)/2+p;else if(gt(n)){let P=Object.keys(n)[0],T=n[P];x=this.chart.scales[P].getPixelForValue(T)+p}_=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")w=(t.left+t.right)/2-p;else if(gt(n)){let P=Object.keys(n)[0],T=n[P];w=this.chart.scales[P].getPixelForValue(T)}_=this._getYAxisLabelAlignment(u).textAlign}e==="y"&&(l==="start"?E="top":l==="end"&&(E="bottom"));let B=this._getLabelSizes();for(b=0,v=r.length;b<v;++b){C=r[b],y=C.label;let P=a.setContext(this.getContext(b));S=this.getPixelForTick(b)+a.labelOffset,A=this._resolveTickFontOptions(b),D=A.lineHeight,M=St(y)?y.length:1;let T=M/2,I=P.color,et=P.textStrokeColor,H=P.textStrokeWidth,V=_;o?(w=S,_==="inner"&&(b===v-1?V=this.options.reverse?"left":"right":b===0?V=this.options.reverse?"right":"left":V="center"),n==="top"?c==="near"||m!==0?F=-M*D+D/2:c==="center"?F=-B.highest.height/2-T*D+D:F=-B.highest.height+D/2:c==="near"||m!==0?F=D/2:c==="center"?F=B.highest.height/2-T*D:F=B.highest.height-M*D,h&&(F*=-1)):(x=S,F=(1-M)*D/2);let K;if(P.showLabelBackdrop){let L=Qt(P.backdropPadding),$=B.heights[b],U=B.widths[b],j=x+F-L.top,N=w-L.left;switch(E){case"middle":j-=$/2;break;case"bottom":j-=$;break}switch(_){case"center":N-=U/2;break;case"right":N-=U;break}K={left:N,top:j,width:U+L.width,height:$+L.height,color:P.backdropColor}}f.push({rotation:m,label:y,font:A,color:I,strokeColor:et,strokeWidth:H,textOffset:F,textAlign:V,textBaseline:E,translation:[w,x],backdrop:K})}return f}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-ne(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:s,mirror:n,padding:a}}=this.options,o=this._getLabelSizes(),r=t+a,l=o.widest.width,c,d;return e==="left"?n?(d=this.right+a,s==="near"?c="left":s==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-r,s==="near"?c="right":s==="center"?(c="center",d-=l/2):(c="left",d=this.left)):e==="right"?n?(d=this.left+a,s==="near"?c="right":s==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+r,s==="near"?c="left":s==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:s,top:n,width:a,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,n,a,o),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let n=this.ticks.findIndex(a=>a.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){let e=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,o,r=(l,c,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(e.display)for(a=0,o=n.length;a<o;++a){let l=n[a];e.drawOnChartArea&&r({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&r({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{grid:s}}=this,n=s.setContext(this.getContext()),a=s.drawBorder?n.borderWidth:0;if(!a)return;let o=s.setContext(this.getContext(0)).lineWidth,r=this._borderValue,l,c,d,h;this.isHorizontal()?(l=qe(t,this.left,a)-a/2,c=qe(t,this.right,o)+o/2,d=h=r):(d=qe(t,this.top,a)-a/2,h=qe(t,this.bottom,o)+o/2,l=c=r),e.save(),e.lineWidth=n.borderWidth,e.strokeStyle=n.borderColor,e.beginPath(),e.moveTo(l,d),e.lineTo(c,h),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let s=this.ctx,n=this._computeLabelArea();n&&Ln(s,n);let a=this._labelItems||(this._labelItems=this._computeLabelItems(t)),o,r;for(o=0,r=a.length;o<r;++o){let l=a[o],c=l.font,d=l.label;l.backdrop&&(s.fillStyle=l.backdrop.color,s.fillRect(l.backdrop.left,l.backdrop.top,l.backdrop.width,l.backdrop.height));let h=l.textOffset;Xs(s,d,0,h,c,l)}n&&Bn(s)}drawTitle(){let{ctx:t,options:{position:e,title:s,reverse:n}}=this;if(!s.display)return;let a=Nt(s.font),o=Qt(s.padding),r=s.align,l=a.lineHeight/2;e==="bottom"||e==="center"||gt(e)?(l+=o.bottom,St(s.text)&&(l+=a.lineHeight*(s.text.length-1))):l+=o.top;let{titleX:c,titleY:d,maxWidth:h,rotation:u}=Wp(this,l,e,r);Xs(t,s.text,0,0,a,{color:s.color,maxWidth:h,rotation:u,textAlign:Gp(r,e,n),textBaseline:"middle",translation:[c,d]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,s=ft(t.grid&&t.grid.z,-1);return!this._isVisible()||this.draw!==ps.prototype.draw?[{z:e,draw:n=>{this.draw(n)}}]:[{z:s,draw:n=>{this.drawBackground(),this.drawGrid(n),this.drawTitle()}},{z:s+1,draw:()=>{this.drawBorder()}},{z:e,draw:n=>{this.drawLabels(n)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[],a,o;for(a=0,o=e.length;a<o;++a){let r=e[a];r[s]===this.id&&(!t||r.type===t)&&n.push(r)}return n}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return Nt(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},Oi=class{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),s;Np(e)&&(s=this.register(e));let n=this.items,a=t.id,o=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in n||(n[a]=t,jp(t,o,s),this.override&&pt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){let e=this.items,s=t.id,n=this.scope;s in e&&delete e[s],n&&s in pt[n]&&(delete pt[n][s],this.override&&delete ds[s])}};function jp(i,t,e){let s=Ft(Object.create(null),[e?pt.get(e):{},pt.get(t),i.defaults]);pt.set(t,s),i.defaultRoutes&&Vp(t,i.defaultRoutes),i.descriptors&&pt.describe(t,i.descriptors)}function Vp(i,t){Object.keys(t).forEach(e=>{let s=e.split("."),n=s.pop(),a=[i].concat(s).join("."),o=t[e].split("."),r=o.pop(),l=o.join(".");pt.route(a,n,l,r)})}function Np(i){return"id"in i&&"defaults"in i}var Tc=class{constructor(){this.controllers=new Oi(he,"datasets",!0),this.elements=new Oi(Te,"elements"),this.plugins=new Oi(Object,"plugins"),this.scales=new Oi(ps,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(n=>{let a=s||this._getRegistryForType(n);s||a.isForType(n)||a===this.plugins&&n.id?this._exec(t,a,n):_t(n,o=>{let r=s||this._getRegistryForType(o);this._exec(t,r,o)})})}_exec(t,e,s){let n=_i(t);kt(s["before"+n],[],s),e[t](s),kt(s["after"+n],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){let n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}},zt=new Tc,gs=class extends he{update(t){let e=this._cachedMeta,{data:s=[]}=e,n=this.chart._animationsDisabled,{start:a,count:o}=En(e,s,n);if(this._drawStart=a,this._drawCount=o,kn(e)&&(a=0,o=s.length),this.options.showLine){let{dataset:r,_dataset:l}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!l._decimated,r.points=s;let c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!n,options:c},t)}this.updateElements(s,a,o,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=zt.getElement("line")),super.addElements()}updateElements(t,e,s,n){let a=n==="reset",{iScale:o,vScale:r,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(e,n),h=this.getSharedOptions(d),u=this.includeOptions(n,h),p=o.axis,g=r.axis,{spanGaps:m,segment:f}=this.options,b=rs(m)?m:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||a||n==="none",C=e>0&&this.getParsed(e-1);for(let y=e;y<e+s;++y){let w=t[y],x=this.getParsed(y),_=v?w:{},S=yt(x[g]),A=_[p]=o.getPixelForValue(x[p],y),D=_[g]=a||S?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,x,l):x[g],y);_.skip=isNaN(A)||isNaN(D)||S,_.stop=y>0&&Math.abs(x[p]-C[p])>b,f&&(_.parsed=x,_.raw=c.data[y]),u&&(_.options=h||this.resolveDataElementOptions(y,w.active?"active":n)),v||this.updateElement(w,y,_,n),C=x}this.updateSharedOptions(h,n,d)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let r=0;for(let l=e.length-1;l>=0;--l)r=Math.max(r,e[l].size(this.resolveDataElementOptions(l))/2);return r>0&&r}let s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!e.length)return n;let a=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,a,o)/2}};gs.id="scatter";gs.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};gs.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(i){return"("+i.label+", "+i.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function Ms(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Xn=class{constructor(t){this.options=t||{}}init(t){}formats(){return Ms()}parse(t,e){return Ms()}format(t,e){return Ms()}add(t,e,s){return Ms()}diff(t,e,s){return Ms()}startOf(t,e,s){return Ms()}endOf(t,e){return Ms()}};Xn.override=function(i){Object.assign(Xn.prototype,i)};var Hp={_date:Xn};function Up(i,t,e,s){let{controller:n,data:a,_sorted:o}=i,r=n._cachedMeta.iScale;if(r&&t===r.axis&&t!=="r"&&o&&a.length){let l=r._reversePixels?Ja:He;if(s){if(n._sharedOptions){let c=a[0],d=typeof c.getRange=="function"&&c.getRange(t);if(d){let h=l(a,t,e-d),u=l(a,t,e+d);return{lo:h.lo,hi:u.hi}}}}else return l(a,t,e)}return{lo:0,hi:a.length-1}}function Fi(i,t,e,s,n){let a=i.getSortedVisibleDatasetMetas(),o=e[t];for(let r=0,l=a.length;r<l;++r){let{index:c,data:d}=a[r],{lo:h,hi:u}=Up(a[r],t,o,n);for(let p=h;p<=u;++p){let g=d[p];g.skip||s(g,c,p)}}}function qp(i){let t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(s,n){let a=t?Math.abs(s.x-n.x):0,o=e?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function Lo(i,t,e,s,n){let a=[];return!n&&!i.isPointInArea(t)||Fi(i,e,t,function(r,l,c){!n&&!Es(r,i.chartArea,0)||r.inRange(t.x,t.y,s)&&a.push({element:r,datasetIndex:l,index:c})},!0),a}function Yp(i,t,e,s){let n=[];function a(o,r,l){let{startAngle:c,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=yn(o,{x:t.x,y:t.y});Cs(h,c,d)&&n.push({element:o,datasetIndex:r,index:l})}return Fi(i,e,t,a),n}function Kp(i,t,e,s,n,a){let o=[],r=qp(e),l=Number.POSITIVE_INFINITY;function c(d,h,u){let p=d.inRange(t.x,t.y,n);if(s&&!p)return;let g=d.getCenterPoint(n);if(!(!!a||i.isPointInArea(g))&&!p)return;let f=r(t,g);f<l?(o=[{element:d,datasetIndex:h,index:u}],l=f):f===l&&o.push({element:d,datasetIndex:h,index:u})}return Fi(i,e,t,c),o}function Bo(i,t,e,s,n,a){return!a&&!i.isPointInArea(t)?[]:e==="r"&&!s?Yp(i,t,e,n):Kp(i,t,e,s,n,a)}function Ac(i,t,e,s,n){let a=[],o=e==="x"?"inXRange":"inYRange",r=!1;return Fi(i,e,t,(l,c,d)=>{l[o](t[e],n)&&(a.push({element:l,datasetIndex:c,index:d}),r=r||l.inRange(t.x,t.y,n))}),s&&!r?[]:a}var Xp={evaluateInteractionItems:Fi,modes:{index(i,t,e,s){let n=Ye(t,i),a=e.axis||"x",o=e.includeInvisible||!1,r=e.intersect?Lo(i,n,a,s,o):Bo(i,n,a,!1,s,o),l=[];return r.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{let d=r[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(i,t,e,s){let n=Ye(t,i),a=e.axis||"xy",o=e.includeInvisible||!1,r=e.intersect?Lo(i,n,a,s,o):Bo(i,n,a,!1,s,o);if(r.length>0){let l=r[0].datasetIndex,c=i.getDatasetMeta(l).data;r=[];for(let d=0;d<c.length;++d)r.push({element:c[d],datasetIndex:l,index:d})}return r},point(i,t,e,s){let n=Ye(t,i),a=e.axis||"xy",o=e.includeInvisible||!1;return Lo(i,n,a,s,o)},nearest(i,t,e,s){let n=Ye(t,i),a=e.axis||"xy",o=e.includeInvisible||!1;return Bo(i,n,a,e.intersect,s,o)},x(i,t,e,s){let n=Ye(t,i);return Ac(i,n,"x",e.intersect,s)},y(i,t,e,s){let n=Ye(t,i);return Ac(i,n,"y",e.intersect,s)}}},Rc=["left","top","right","bottom"];function zi(i,t){return i.filter(e=>e.pos===t)}function Dc(i,t){return i.filter(e=>Rc.indexOf(e.pos)===-1&&e.box.axis===t)}function Gi(i,t){return i.sort((e,s)=>{let n=t?s:e,a=t?e:s;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function Zp(i){let t=[],e,s,n,a,o,r;for(e=0,s=(i||[]).length;e<s;++e)n=i[e],{position:a,options:{stack:o,stackWeight:r=1}}=n,t.push({index:e,box:n,pos:a,horizontal:n.isHorizontal(),weight:n.weight,stack:o&&a+o,stackWeight:r});return t}function Qp(i){let t={};for(let e of i){let{stack:s,pos:n,stackWeight:a}=e;if(!s||!Rc.includes(n))continue;let o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=a}return t}function Jp(i,t){let e=Qp(i),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t,a,o,r;for(a=0,o=i.length;a<o;++a){r=i[a];let{fullSize:l}=r.box,c=e[r.stack],d=c&&r.stackWeight/c.weight;r.horizontal?(r.width=d?d*s:l&&t.availableWidth,r.height=n):(r.width=s,r.height=d?d*n:l&&t.availableHeight)}return e}function tg(i){let t=Zp(i),e=Gi(t.filter(c=>c.box.fullSize),!0),s=Gi(zi(t,"left"),!0),n=Gi(zi(t,"right")),a=Gi(zi(t,"top"),!0),o=Gi(zi(t,"bottom")),r=Dc(t,"x"),l=Dc(t,"y");return{fullSize:e,leftAndTop:s.concat(a),rightAndBottom:n.concat(l).concat(o).concat(r),chartArea:zi(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:a.concat(o).concat(r)}}function $c(i,t,e,s){return Math.max(i[e],t[e])+Math.max(i[s],t[s])}function Lc(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function eg(i,t,e,s){let{pos:n,box:a}=e,o=i.maxPadding;if(!gt(n)){e.size&&(i[n]-=e.size);let h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?a.height:a.width),e.size=h.size/h.count,i[n]+=e.size}a.getPadding&&Lc(o,a.getPadding());let r=Math.max(0,t.outerWidth-$c(o,i,"left","right")),l=Math.max(0,t.outerHeight-$c(o,i,"top","bottom")),c=r!==i.w,d=l!==i.h;return i.w=r,i.h=l,e.horizontal?{same:c,other:d}:{same:d,other:c}}function sg(i){let t=i.maxPadding;function e(s){let n=Math.max(t[s]-i[s],0);return i[s]+=n,n}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function ig(i,t){let e=t.maxPadding;function s(n){let a={left:0,top:0,right:0,bottom:0};return n.forEach(o=>{a[o]=Math.max(t[o],e[o])}),a}return s(i?["left","right"]:["top","bottom"])}function Wi(i,t,e,s){let n=[],a,o,r,l,c,d;for(a=0,o=i.length,c=0;a<o;++a){r=i[a],l=r.box,l.update(r.width||t.w,r.height||t.h,ig(r.horizontal,t));let{same:h,other:u}=eg(t,e,r,s);c|=h&&n.length,d=d||u,l.fullSize||n.push(r)}return c&&Wi(n,t,e,s)||d}function Zn(i,t,e,s,n){i.top=e,i.left=t,i.right=t+s,i.bottom=e+n,i.width=s,i.height=n}function Bc(i,t,e,s){let n=e.padding,{x:a,y:o}=t;for(let r of i){let l=r.box,c=s[r.stack]||{count:1,placed:0,weight:1},d=r.stackWeight/c.weight||1;if(r.horizontal){let h=t.w*d,u=c.size||l.height;Xt(c.start)&&(o=c.start),l.fullSize?Zn(l,n.left,o,e.outerWidth-n.right-n.left,u):Zn(l,t.left+c.placed,o,h,u),c.start=o,c.placed+=h,o=l.bottom}else{let h=t.h*d,u=c.size||l.width;Xt(c.start)&&(a=c.start),l.fullSize?Zn(l,a,n.top,u,e.outerHeight-n.bottom-n.top):Zn(l,a,t.top+c.placed,u,h),c.start=a,c.placed+=h,a=l.right}}t.x=a,t.y=o}pt.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var Qn={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){let e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,s){if(!i)return;let n=Qt(i.options.layout.padding),a=Math.max(t-n.width,0),o=Math.max(e-n.height,0),r=tg(i.boxes),l=r.vertical,c=r.horizontal;_t(i.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});let d=l.reduce((m,f)=>f.box.options&&f.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/d,hBoxMaxHeight:o/2}),u=Object.assign({},n);Lc(u,Qt(s));let p=Object.assign({maxPadding:u,w:a,h:o,x:n.left,y:n.top},n),g=Jp(l.concat(c),h);Wi(r.fullSize,p,h,g),Wi(l,p,h,g),Wi(c,p,h,g)&&Wi(l,p,h,g),sg(p),Bc(r.leftAndTop,p,h,g),p.x+=p.w,p.y+=p.h,Bc(r.rightAndBottom,p,h,g),i.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},_t(r.chartArea,m=>{let f=m.box;Object.assign(f,i.chartArea),f.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},Oo=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,n){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):s)}}isAttached(t){return!0}updateConfig(t){}},Oc=class extends Oo{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},Jn="$chartjs",ng={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Fc=i=>i===null||i==="";function ag(i,t){let e=i.style,s=i.getAttribute("height"),n=i.getAttribute("width");if(i[Jn]={initial:{height:s,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Fc(n)){let a=Hn(i,"width");a!==void 0&&(i.width=a)}if(Fc(s))if(i.style.height==="")i.height=i.width/(t||2);else{let a=Hn(i,"height");a!==void 0&&(i.height=a)}return i}var zc=wo?{passive:!0}:!1;function og(i,t,e){i.addEventListener(t,e,zc)}function rg(i,t,e){i.canvas.removeEventListener(t,e,zc)}function lg(i,t){let e=ng[i.type]||i.type,{x:s,y:n}=Ye(i,t);return{type:e,chart:t,native:i,x:s!==void 0?s:null,y:n!==void 0?n:null}}function ta(i,t){for(let e of i)if(e===t||e.contains(t))return!0}function cg(i,t,e){let s=i.canvas,n=new MutationObserver(a=>{let o=!1;for(let r of a)o=o||ta(r.addedNodes,s),o=o&&!ta(r.removedNodes,s);o&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function dg(i,t,e){let s=i.canvas,n=new MutationObserver(a=>{let o=!1;for(let r of a)o=o||ta(r.removedNodes,s),o=o&&!ta(r.addedNodes,s);o&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}var ji=new Map,Gc=0;function Wc(){let i=window.devicePixelRatio;i!==Gc&&(Gc=i,ji.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function hg(i,t){ji.size||window.addEventListener("resize",Wc),ji.set(i,t)}function ug(i){ji.delete(i),ji.size||window.removeEventListener("resize",Wc)}function pg(i,t,e){let s=i.canvas,n=s&&Di(s);if(!n)return;let a=Sn((r,l)=>{let c=n.clientWidth;e(r,l),c<n.clientWidth&&e()},window),o=new ResizeObserver(r=>{let l=r[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return o.observe(n),hg(i,a),o}function Fo(i,t,e){e&&e.disconnect(),t==="resize"&&ug(i)}function gg(i,t,e){let s=i.canvas,n=Sn(a=>{i.ctx!==null&&e(lg(a,i))},i,a=>{let o=a[0];return[o,o.offsetX,o.offsetY]});return og(s,t,n),n}var jc=class extends Oo{acquireContext(t,e){let s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(ag(t,e),s):null}releaseContext(t){let e=t.canvas;if(!e[Jn])return!1;let s=e[Jn].initial;["height","width"].forEach(a=>{let o=s[a];yt(o)?e.removeAttribute(a):e.setAttribute(a,o)});let n=s.style||{};return Object.keys(n).forEach(a=>{e.style[a]=n[a]}),e.width=e.width,delete e[Jn],!0}addEventListener(t,e,s){this.removeEventListener(t,e);let n=t.$proxies||(t.$proxies={}),o={attach:cg,detach:dg,resize:pg}[e]||gg;n[e]=o(t,e,s)}removeEventListener(t,e){let s=t.$proxies||(t.$proxies={}),n=s[e];if(!n)return;({attach:Fo,detach:Fo,resize:Fo}[e]||rg)(t,e,n),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,n){return _o(t,e,s,n)}isAttached(t){let e=Di(t);return!!(e&&e.isConnected)}};function fg(i){return!Wn()||typeof OffscreenCanvas!="undefined"&&i instanceof OffscreenCanvas?Oc:jc}var Vc=class{constructor(){this._init=[]}notify(t,e,s,n){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let a=n?this._descriptors(t).filter(n):this._descriptors(t),o=this._notify(a,t,e,s);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,s,n){n=n||{};for(let a of t){let o=a.plugin,r=o[s],l=[e,n,a.options];if(kt(r,l,o)===!1&&n.cancelable)return!1}return!0}invalidate(){yt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let s=t&&t.config,n=ft(s.options&&s.options.plugins,{}),a=mg(s);return n===!1&&!e?[]:xg(t,a,n,e)}_notifyStateChanges(t){let e=this._oldCache||[],s=this._cache,n=(a,o)=>a.filter(r=>!o.some(l=>r.plugin.id===l.plugin.id));this._notify(n(e,s),t,"stop"),this._notify(n(s,e),t,"start")}};function mg(i){let t={},e=[],s=Object.keys(zt.plugins.items);for(let a=0;a<s.length;a++)e.push(zt.getPlugin(s[a]));let n=i.plugins||[];for(let a=0;a<n.length;a++){let o=n[a];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function bg(i,t){return!t&&i===!1?null:i===!0?{}:i}function xg(i,{plugins:t,localIds:e},s,n){let a=[],o=i.getContext();for(let r of t){let l=r.id,c=bg(s[l],n);c!==null&&a.push({plugin:r,options:vg(i.config,{plugin:r,local:e[l]},c,o)})}return a}function vg(i,{plugin:t,local:e},s,n){let a=i.pluginScopeKeys(t),o=i.getOptionScopes(s,a);return e&&t.defaults&&o.push(t.defaults),i.createResolver(o,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function zo(i,t){let e=pt.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function yg(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function _g(i,t){return i===t?"_index_":"_value_"}function wg(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function Go(i,t){return i==="x"||i==="y"?i:t.axis||wg(t.position)||i.charAt(0).toLowerCase()}function Cg(i,t){let e=ds[i.type]||{scales:{}},s=t.scales||{},n=zo(i.type,t),a=Object.create(null),o=Object.create(null);return Object.keys(s).forEach(r=>{let l=s[r];if(!gt(l))return console.error(`Invalid scale configuration for scale: ${r}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);let c=Go(r,l),d=_g(c,n),h=e.scales||{};a[c]=a[c]||r,o[r]=_s(Object.create(null),[{axis:c},l,h[c],h[d]])}),i.data.datasets.forEach(r=>{let l=r.type||i.type,c=r.indexAxis||zo(l,t),h=(ds[l]||{}).scales||{};Object.keys(h).forEach(u=>{let p=yg(u,c),g=r[p+"AxisID"]||a[p]||p;o[g]=o[g]||Object.create(null),_s(o[g],[{axis:p},s[g],h[u]])})}),Object.keys(o).forEach(r=>{let l=o[r];_s(l,[pt.scales[l.type],pt.scale])}),o}function Nc(i){let t=i.options||(i.options={});t.plugins=ft(t.plugins,{}),t.scales=Cg(i,t)}function Hc(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function Sg(i){return i=i||{},i.data=Hc(i.data),Nc(i),i}var Uc=new Map,qc=new Set;function ea(i,t){let e=Uc.get(i);return e||(e=t(),Uc.set(i,e),qc.add(e)),e}var Vi=(i,t,e)=>{let s=Ee(t,e);s!==void 0&&i.add(s)},Yc=class{constructor(t){this._config=Sg(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Hc(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),Nc(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ea(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ea(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ea(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,s=this.type;return ea(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let s=this._scopeCache,n=s.get(t);return(!n||e)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,e,s){let{options:n,type:a}=this,o=this._cachedScopes(t,s),r=o.get(e);if(r)return r;let l=new Set;e.forEach(d=>{t&&(l.add(t),d.forEach(h=>Vi(l,t,h))),d.forEach(h=>Vi(l,n,h)),d.forEach(h=>Vi(l,ds[a]||{},h)),d.forEach(h=>Vi(l,pt,h)),d.forEach(h=>Vi(l,Dn,h))});let c=Array.from(l);return c.length===0&&c.push(Object.create(null)),qc.has(e)&&o.set(e,c),c}chartOptionScopes(){let{options:t,type:e}=this;return[t,ds[e]||{},pt.datasets[e]||{},{type:e},pt,Dn]}resolveNamedOptions(t,e,s,n=[""]){let a={$shared:!0},{resolver:o,subPrefixes:r}=Kc(this._resolverCache,t,n),l=o;if(Eg(o,e)){a.$shared=!1,s=ke(s)?s():s;let c=this.createResolver(t,s,r);l=us(o,s,c)}for(let c of e)a[c]=l[c];return a}createResolver(t,e,s=[""],n){let{resolver:a}=Kc(this._resolverCache,t,s);return gt(e)?us(a,e,void 0,n):a}};function Kc(i,t,e){let s=i.get(t);s||(s=new Map,i.set(t,s));let n=e.join(),a=s.get(n);return a||(a={resolver:Ri(t,e),subPrefixes:e.filter(r=>!r.toLowerCase().includes("hover"))},s.set(n,a)),a}var Ig=i=>gt(i)&&Object.getOwnPropertyNames(i).reduce((t,e)=>t||ke(i[e]),!1);function Eg(i,t){let{isScriptable:e,isIndexable:s}=Fn(i);for(let n of t){let a=e(n),o=s(n),r=(o||a)&&i[n];if(a&&(ke(r)||Ig(r))||o&&St(r))return!0}return!1}var kg="3.9.1",Pg=["top","bottom","left","right","chartArea"];function Xc(i,t){return i==="top"||i==="bottom"||Pg.indexOf(i)===-1&&t==="x"}function Zc(i,t){return function(e,s){return e[i]===s[i]?e[t]-s[t]:e[i]-s[i]}}function Qc(i){let t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),kt(e&&e.onComplete,[i],t)}function Mg(i){let t=i.chart,e=t.options.animation;kt(e&&e.onProgress,[i],t)}function Jc(i){return Wn()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}var sa={},td=i=>{let t=Jc(i);return Object.values(sa).filter(e=>e.canvas===t).pop()};function Tg(i,t,e){let s=Object.keys(i);for(let n of s){let a=+n;if(a>=t){let o=i[n];delete i[n],(e>0||a>t)&&(i[a+e]=o)}}}function Ag(i,t,e,s){return!e||i.type==="mouseout"?null:s?t:i}var oe=class{constructor(t,e){let s=this.config=new Yc(e),n=Jc(t),a=td(n);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||fg(n)),this.platform.updateConfig(s);let r=this.platform.acquireContext(n,o.aspectRatio),l=r&&r.canvas,c=l&&l.height,d=l&&l.width;if(this.id=Ua(),this.ctx=r,this.canvas=l,this.width=d,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Vc,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=so(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],sa[this.id]=this,!r||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Xe.listen(this,"complete",Qc),Xe.listen(this,"progress",Mg),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:a}=this;return yt(t)?e&&a?a:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Nn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return $n(this.canvas,this.ctx),this}stop(){return Xe.stop(this),this}resize(t,e){Xe.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let s=this.options,n=this.canvas,a=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(n,t,e,a),r=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,!!Nn(this,r,!0)&&(this.notifyPlugins("resize",{size:o}),kt(s.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};_t(e,(s,n)=>{s.id=n})}buildOrUpdateScales(){let t=this.options,e=t.scales,s=this.scales,n=Object.keys(s).reduce((o,r)=>(o[r]=!1,o),{}),a=[];e&&(a=a.concat(Object.keys(e).map(o=>{let r=e[o],l=Go(o,r),c=l==="r",d=l==="x";return{options:r,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),_t(a,o=>{let r=o.options,l=r.id,c=Go(l,r),d=ft(r.type,o.dtype);(r.position===void 0||Xc(r.position,c)!==Xc(o.dposition))&&(r.position=o.dposition),n[l]=!0;let h=null;if(l in s&&s[l].type===d)h=s[l];else{let u=zt.getScale(d);h=new u({id:l,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(r,t)}),_t(n,(o,r)=>{o||delete s[r]}),_t(s,o=>{Qn.configure(this,o,o.options),Qn.addBox(this,o)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((n,a)=>n.index-a.index),s>e){for(let n=e;n<s;++n)this._destroyDatasetMeta(n);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Zc("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,n)=>{e.filter(a=>a===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,s,n;for(this._removeUnreferencedMetasets(),s=0,n=e.length;s<n;s++){let a=e[s],o=this.getDatasetMeta(s),r=a.type||this.config.type;if(o.type&&o.type!==r&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=r,o.indexAxis=a.indexAxis||zo(r,this.options),o.order=a.order||0,o.index=s,o.label=""+a.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{let l=zt.getController(r),{datasetElementType:c,dataElementType:d}=pt.datasets[r];Object.assign(l.prototype,{dataElementType:zt.getElement(d),datasetElementType:c&&zt.getElement(c)}),o.controller=new l(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){_t(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,d=this.data.datasets.length;c<d;c++){let{controller:h}=this.getDatasetMeta(c),u=!n&&a.indexOf(h)===-1;h.buildOrUpdateElements(u),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),n||_t(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Zc("z","_idx"));let{_active:r,_lastEvent:l}=this;l?this._eventHandler(l,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){_t(this.scales,t=>{Qn.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!mn(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:s,start:n,count:a}of e){let o=s==="_removeElements"?-a:a;Tg(t,n,o)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,s=a=>new Set(t.filter(o=>o[0]===a).map((o,r)=>r+","+o.splice(1).join(","))),n=s(0);for(let a=1;a<e;a++)if(!mn(n,s(a)))return;return Array.from(n).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Qn.update(this,this.width,this.height,t);let e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],_t(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,a)=>{n._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,ke(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let s=this.getDatasetMeta(t),n={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Xe.has(this)?this.attached&&!Xe.running(this)&&Xe.start(this):(this.draw(),Qc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:s,height:n}=this._resizeBeforeDraw;this._resize(s,n),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,s=[],n,a;for(n=0,a=e.length;n<a;++n){let o=e[n];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,s=t._clip,n=!s.disabled,a=this.chartArea,o={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(n&&Ln(e,{left:s.left===!1?0:a.left-s.left,right:s.right===!1?this.width:a.right+s.right,top:s.top===!1?0:a.top-s.top,bottom:s.bottom===!1?this.height:a.bottom+s.bottom}),t.controller.draw(),n&&Bn(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return Es(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,n){let a=Xp.modes[e];return typeof a=="function"?a(this,t,s,n):[]}getDatasetMeta(t){let e=this.data.datasets[t],s=this._metasets,n=s.filter(a=>a&&a._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Pe(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){let s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){let n=s?"show":"hide",a=this.getDatasetMeta(t),o=a.controller._resolveAnimations(void 0,n);Xt(e)?(a.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(a,{visible:s}),this.update(r=>r.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Xe.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),$n(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete sa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,s=(a,o)=>{e.addEventListener(this,a,o),t[a]=o},n=(a,o,r)=>{a.offsetX=o,a.offsetY=r,this._eventHandler(a)};_t(this.options.events,a=>s(a,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,s=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)},o,r=()=>{n("attach",r),this.attached=!0,this.resize(),s("resize",a),s("detach",o)};o=()=>{this.attached=!1,n("resize",a),this._stop(),this._resize(0,0),s("attach",r)},e.isAttached(this.canvas)?r():o()}unbindEvents(){_t(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},_t(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){let n=s?"set":"remove",a,o,r,l;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+n+"DatasetHoverStyle"]()),r=0,l=t.length;r<l;++r){o=t[r];let c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[n+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],s=t.map(({datasetIndex:a,index:o})=>{let r=this.getDatasetMeta(a);if(!r)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:r.data[o],index:o}});!Hs(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}_updateHoverStyles(t,e,s){let n=this.options.hover,a=(l,c)=>l.filter(d=>!c.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=a(e,t),r=s?t:a(t,e);o.length&&this.updateHoverStyle(o,n.mode,!1),r.length&&n.mode&&this.updateHoverStyle(r,n.mode,!0)}_eventHandler(t,e){let s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;let a=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(a||s.changed)&&this.render(),this}_handleEvent(t,e,s){let{_active:n=[],options:a}=this,o=e,r=this._getActiveElements(t,n,s,o),l=Ya(t),c=Ag(t,this._lastEvent,s,l);s&&(this._lastEvent=null,kt(a.onHover,[t,r,this],this),l&&kt(a.onClick,[t,r,this],this));let d=!Hs(r,n);return(d||e)&&(this._active=r,this._updateHoverStyles(r,n,e)),this._lastEvent=c,d}_getActiveElements(t,e,s,n){if(t.type==="mouseout")return[];if(!s)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,n)}},ed=()=>_t(oe.instances,i=>i._plugins.invalidate()),fs=!0;Object.defineProperties(oe,{defaults:{enumerable:fs,value:pt},instances:{enumerable:fs,value:sa},overrides:{enumerable:fs,value:ds},registry:{enumerable:fs,value:zt},version:{enumerable:fs,value:kg},getChart:{enumerable:fs,value:td},register:{enumerable:fs,value:(...i)=>{zt.add(...i),ed()}},unregister:{enumerable:fs,value:(...i)=>{zt.remove(...i),ed()}}});function sd(i,t,e){let{startAngle:s,pixelMargin:n,x:a,y:o,outerRadius:r,innerRadius:l}=t,c=n/r;i.beginPath(),i.arc(a,o,r,s-c,e+c),l>n?(c=n/l,i.arc(a,o,l,e+c,s-c,!0)):i.arc(a,o,n,e+Mt,s-Mt),i.closePath(),i.clip()}function Rg(i){return Ai(i,["outerStart","outerEnd","innerStart","innerEnd"])}function Dg(i,t,e,s){let n=Rg(i.options.borderRadius),a=(e-t)/2,o=Math.min(a,s*t/2),r=l=>{let c=(e-Math.min(a,l))*s/2;return Ot(l,0,Math.min(a,c))};return{outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:Ot(n.innerStart,0,o),innerEnd:Ot(n.innerEnd,0,o)}}function ei(i,t,e,s){return{x:e+i*Math.cos(t),y:s+i*Math.sin(t)}}function Wo(i,t,e,s,n,a){let{x:o,y:r,startAngle:l,pixelMargin:c,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-c,0),u=d>0?d+s+e+c:0,p=0,g=n-l;if(s){let P=d>0?d-s:0,T=h>0?h-s:0,I=(P+T)/2,et=I!==0?g*I/(I+s):g;p=(g-et)/2}let m=Math.max(.001,g*h-e/Pt)/h,f=(g-m)/2,b=l+f+p,v=n-f-p,{outerStart:C,outerEnd:y,innerStart:w,innerEnd:x}=Dg(t,u,h,v-b),_=h-C,S=h-y,A=b+C/_,D=v-y/S,M=u+w,F=u+x,E=b+w/M,B=v-x/F;if(i.beginPath(),a){if(i.arc(o,r,h,A,D),y>0){let I=ei(S,D,o,r);i.arc(I.x,I.y,y,D,v+Mt)}let P=ei(F,v,o,r);if(i.lineTo(P.x,P.y),x>0){let I=ei(F,B,o,r);i.arc(I.x,I.y,x,v+Mt,B+Math.PI)}if(i.arc(o,r,u,v-x/u,b+w/u,!0),w>0){let I=ei(M,E,o,r);i.arc(I.x,I.y,w,E+Math.PI,b-Mt)}let T=ei(_,b,o,r);if(i.lineTo(T.x,T.y),C>0){let I=ei(_,A,o,r);i.arc(I.x,I.y,C,b-Mt,A)}}else{i.moveTo(o,r);let P=Math.cos(A)*h+o,T=Math.sin(A)*h+r;i.lineTo(P,T);let I=Math.cos(D)*h+o,et=Math.sin(D)*h+r;i.lineTo(I,et)}i.closePath()}function $g(i,t,e,s,n){let{fullCircles:a,startAngle:o,circumference:r}=t,l=t.endAngle;if(a){Wo(i,t,e,s,o+Ct,n);for(let c=0;c<a;++c)i.fill();isNaN(r)||(l=o+r%Ct,r%Ct==0&&(l+=Ct))}return Wo(i,t,e,s,l,n),i.fill(),l}function Lg(i,t,e){let{x:s,y:n,startAngle:a,pixelMargin:o,fullCircles:r}=t,l=Math.max(t.outerRadius-o,0),c=t.innerRadius+o,d;for(e&&sd(i,t,a+Ct),i.beginPath(),i.arc(s,n,c,a+Ct,a,!0),d=0;d<r;++d)i.stroke();for(i.beginPath(),i.arc(s,n,l,a,a+Ct),d=0;d<r;++d)i.stroke()}function Bg(i,t,e,s,n,a){let{options:o}=t,{borderWidth:r,borderJoinStyle:l}=o,c=o.borderAlign==="inner";!r||(c?(i.lineWidth=r*2,i.lineJoin=l||"round"):(i.lineWidth=r,i.lineJoin=l||"bevel"),t.fullCircles&&Lg(i,t,c),c&&sd(i,t,n),Wo(i,t,e,s,n,a),i.stroke())}var ms=class extends Te{constructor(t){super();this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,s){let n=this.getProps(["x","y"],s),{angle:a,distance:o}=yn(n,{x:t,y:e}),{startAngle:r,endAngle:l,innerRadius:c,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),u=this.options.spacing/2,g=ft(h,l-r)>=Ct||Cs(a,r,l),m=qs(o,c+u,d+u);return g&&m}getCenterPoint(t){let{x:e,y:s,startAngle:n,endAngle:a,innerRadius:o,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:l,spacing:c}=this.options,d=(n+a)/2,h=(o+r+c+l)/2;return{x:e+Math.cos(d)*h,y:s+Math.sin(d)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:s}=this,n=(e.offset||0)/2,a=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=s>Ct?Math.floor(s/Ct):0,s===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let r=0;if(n){r=n/2;let c=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(c)*r,Math.sin(c)*r),this.circumference>=Pt&&(r=n)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;let l=$g(t,this,r,a,o);Bg(t,this,r,a,l,o),t.restore()}};ms.id="arc";ms.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};ms.defaultRoutes={backgroundColor:"backgroundColor"};function id(i,t,e=t){i.lineCap=ft(e.borderCapStyle,t.borderCapStyle),i.setLineDash(ft(e.borderDash,t.borderDash)),i.lineDashOffset=ft(e.borderDashOffset,t.borderDashOffset),i.lineJoin=ft(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=ft(e.borderWidth,t.borderWidth),i.strokeStyle=ft(e.borderColor,t.borderColor)}function Og(i,t,e){i.lineTo(e.x,e.y)}function Fg(i){return i.stepped?go:i.tension||i.cubicInterpolationMode==="monotone"?fo:Og}function nd(i,t,e={}){let s=i.length,{start:n=0,end:a=s-1}=e,{start:o,end:r}=t,l=Math.max(n,o),c=Math.min(a,r),d=n<o&&a<o||n>r&&a>r;return{count:s,start:l,loop:t.loop,ilen:c<l&&!d?s+c-l:c-l}}function zg(i,t,e,s){let{points:n,options:a}=t,{count:o,start:r,loop:l,ilen:c}=nd(n,e,s),d=Fg(a),{move:h=!0,reverse:u}=s||{},p,g,m;for(p=0;p<=c;++p)g=n[(r+(u?c-p:p))%o],!g.skip&&(h?(i.moveTo(g.x,g.y),h=!1):d(i,m,g,u,a.stepped),m=g);return l&&(g=n[(r+(u?c:0))%o],d(i,m,g,u,a.stepped)),!!l}function Gg(i,t,e,s){let n=t.points,{count:a,start:o,ilen:r}=nd(n,e,s),{move:l=!0,reverse:c}=s||{},d=0,h=0,u,p,g,m,f,b,v=y=>(o+(c?r-y:y))%a,C=()=>{m!==f&&(i.lineTo(d,f),i.lineTo(d,m),i.lineTo(d,b))};for(l&&(p=n[v(0)],i.moveTo(p.x,p.y)),u=0;u<=r;++u){if(p=n[v(u)],p.skip)continue;let y=p.x,w=p.y,x=y|0;x===g?(w<m?m=w:w>f&&(f=w),d=(h*d+y)/++h):(C(),i.lineTo(y,w),g=x,h=0,m=f=w),b=w}C()}function jo(i){let t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Gg:zg}function Wg(i){return i.stepped?Co:i.tension||i.cubicInterpolationMode==="monotone"?So:Ke}function jg(i,t,e,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,s)&&n.closePath()),id(i,t.options),i.stroke(n)}function Vg(i,t,e,s){let{segments:n,options:a}=t,o=jo(t);for(let r of n)id(i,a,r.style),i.beginPath(),o(i,t,r,{start:e,end:e+s-1})&&i.closePath(),i.stroke()}var Ng=typeof Path2D=="function";function Hg(i,t,e,s){Ng&&!t.options.segment?jg(i,t,e,s):Vg(i,t,e,s)}var Ts=class extends Te{constructor(t){super();this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){let n=s.spanGaps?this._loop:this._fullLoop;vo(this._points,s,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Mo(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){let s=this.options,n=t[e],a=this.points,o=Po(this,{property:e,start:n,end:n});if(!o.length)return;let r=[],l=Wg(s),c,d;for(c=0,d=o.length;c<d;++c){let{start:h,end:u}=o[c],p=a[h],g=a[u];if(p===g){r.push(p);continue}let m=Math.abs((n-p[e])/(g[e]-p[e])),f=l(p,g,m,s.stepped);f[e]=t[e],r.push(f)}return r.length===1?r[0]:r}pathSegment(t,e,s){return jo(this)(t,this,e,s)}path(t,e,s){let n=this.segments,a=jo(this),o=this._loop;e=e||0,s=s||this.points.length-e;for(let r of n)o&=a(t,this,r,{start:e,end:e+s-1});return!!o}draw(t,e,s,n){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Hg(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};Ts.id="line";Ts.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};Ts.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};Ts.descriptors={_scriptable:!0,_indexable:i=>i!=="borderDash"&&i!=="fill"};function ad(i,t,e,s){let n=i.options,{[e]:a}=i.getProps([e],s);return Math.abs(t-a)<n.radius+n.hitRadius}var Ae=class extends Te{constructor(t){super();this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,s){let n=this.options,{x:a,y:o}=this.getProps(["x","y"],s);return Math.pow(t-a,2)+Math.pow(e-o,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return ad(this,t,"x",e)}inYRange(t,e){return ad(this,t,"y",e)}getCenterPoint(t){let{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);let s=e&&t.borderWidth||0;return(e+s)*2}draw(t,e){let s=this.options;this.skip||s.radius<.1||!Es(this,e,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,Ti(t,s,this.x,this.y))}getRange(){let t=this.options||{};return t.radius+t.hitRadius}};Ae.id="point";Ae.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};Ae.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function od(i,t){let{x:e,y:s,base:n,width:a,height:o}=i.getProps(["x","y","base","width","height"],t),r,l,c,d,h;return i.horizontal?(h=o/2,r=Math.min(e,n),l=Math.max(e,n),c=s-h,d=s+h):(h=a/2,r=e-h,l=e+h,c=Math.min(s,n),d=Math.max(s,n)),{left:r,top:c,right:l,bottom:d}}function bs(i,t,e,s){return i?0:Ot(t,e,s)}function Ug(i,t,e){let s=i.options.borderWidth,n=i.borderSkipped,a=On(s);return{t:bs(n.top,a.top,0,e),r:bs(n.right,a.right,0,t),b:bs(n.bottom,a.bottom,0,e),l:bs(n.left,a.left,0,t)}}function qg(i,t,e){let{enableBorderRadius:s}=i.getProps(["enableBorderRadius"]),n=i.options.borderRadius,a=hs(n),o=Math.min(t,e),r=i.borderSkipped,l=s||gt(n);return{topLeft:bs(!l||r.top||r.left,a.topLeft,0,o),topRight:bs(!l||r.top||r.right,a.topRight,0,o),bottomLeft:bs(!l||r.bottom||r.left,a.bottomLeft,0,o),bottomRight:bs(!l||r.bottom||r.right,a.bottomRight,0,o)}}function Yg(i){let t=od(i),e=t.right-t.left,s=t.bottom-t.top,n=Ug(i,e/2,s/2),a=qg(i,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:a},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,a.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(n.b,n.r))}}}}function Vo(i,t,e,s){let n=t===null,a=e===null,r=i&&!(n&&a)&&od(i,s);return r&&(n||qs(t,r.left,r.right))&&(a||qs(e,r.top,r.bottom))}function Kg(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Xg(i,t){i.rect(t.x,t.y,t.w,t.h)}function No(i,t,e={}){let s=i.x!==e.x?-t:0,n=i.y!==e.y?-t:0,a=(i.x+i.w!==e.x+e.w?t:0)-s,o=(i.y+i.h!==e.y+e.h?t:0)-n;return{x:i.x+s,y:i.y+n,w:i.w+a,h:i.h+o,radius:i.radius}}var Re=class extends Te{constructor(t){super();this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:s,backgroundColor:n}}=this,{inner:a,outer:o}=Yg(this),r=Kg(o.radius)?Zs:Xg;t.save(),(o.w!==a.w||o.h!==a.h)&&(t.beginPath(),r(t,No(o,e,a)),t.clip(),r(t,No(a,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),r(t,No(a,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,s){return Vo(this,t,e,s)}inXRange(t,e){return Vo(this,t,null,e)}inYRange(t,e){return Vo(this,null,t,e)}getCenterPoint(t){let{x:e,y:s,base:n,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+n)/2:e,y:a?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};Re.id="bar";Re.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};Re.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var Db=new WeakMap;var Ni={average(i){if(!i.length)return!1;let t,e,s=0,n=0,a=0;for(t=0,e=i.length;t<e;++t){let o=i[t].element;if(o&&o.hasValue()){let r=o.tooltipPosition();s+=r.x,n+=r.y,++a}}return{x:s/a,y:n/a}},nearest(i,t){if(!i.length)return!1;let e=t.x,s=t.y,n=Number.POSITIVE_INFINITY,a,o,r;for(a=0,o=i.length;a<o;++a){let l=i[a].element;if(l&&l.hasValue()){let c=l.getCenterPoint(),d=Si(t,c);d<n&&(n=d,r=l)}}if(r){let l=r.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function De(i,t){return t&&(St(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Ze(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Zg(i,t){let{element:e,datasetIndex:s,index:n}=t,a=i.getDatasetMeta(s).controller,{label:o,value:r}=a.getLabelAndValue(n);return{chart:i,label:o,parsed:a.getParsed(n),raw:i.data.datasets[s].data[n],formattedValue:r,dataset:a.getDataset(),dataIndex:n,datasetIndex:s,element:e}}function rd(i,t){let e=i.chart.ctx,{body:s,footer:n,title:a}=i,{boxWidth:o,boxHeight:r}=t,l=Nt(t.bodyFont),c=Nt(t.titleFont),d=Nt(t.footerFont),h=a.length,u=n.length,p=s.length,g=Qt(t.padding),m=g.height,f=0,b=s.reduce((y,w)=>y+w.before.length+w.lines.length+w.after.length,0);if(b+=i.beforeBody.length+i.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),b){let y=t.displayColors?Math.max(r,l.lineHeight):l.lineHeight;m+=p*y+(b-p)*l.lineHeight+(b-1)*t.bodySpacing}u&&(m+=t.footerMarginTop+u*d.lineHeight+(u-1)*t.footerSpacing);let v=0,C=function(y){f=Math.max(f,e.measureText(y).width+v)};return e.save(),e.font=c.string,_t(i.title,C),e.font=l.string,_t(i.beforeBody.concat(i.afterBody),C),v=t.displayColors?o+2+t.boxPadding:0,_t(s,y=>{_t(y.before,C),_t(y.lines,C),_t(y.after,C)}),v=0,e.font=d.string,_t(i.footer,C),e.restore(),f+=g.width,{width:f,height:m}}function Qg(i,t){let{y:e,height:s}=t;return e<s/2?"top":e>i.height-s/2?"bottom":"center"}function Jg(i,t,e,s){let{x:n,width:a}=s,o=e.caretSize+e.caretPadding;if(i==="left"&&n+a+o>t.width||i==="right"&&n-a-o<0)return!0}function tf(i,t,e,s){let{x:n,width:a}=e,{width:o,chartArea:{left:r,right:l}}=i,c="center";return s==="center"?c=n<=(r+l)/2?"left":"right":n<=a/2?c="left":n>=o-a/2&&(c="right"),Jg(c,i,t,e)&&(c="center"),c}function ld(i,t,e){let s=e.yAlign||t.yAlign||Qg(i,e);return{xAlign:e.xAlign||t.xAlign||tf(i,t,e,s),yAlign:s}}function ef(i,t){let{x:e,width:s}=i;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function sf(i,t,e){let{y:s,height:n}=i;return t==="top"?s+=e:t==="bottom"?s-=n+e:s-=n/2,s}function cd(i,t,e,s){let{caretSize:n,caretPadding:a,cornerRadius:o}=i,{xAlign:r,yAlign:l}=e,c=n+a,{topLeft:d,topRight:h,bottomLeft:u,bottomRight:p}=hs(o),g=ef(t,r),m=sf(t,l,c);return l==="center"?r==="left"?g+=c:r==="right"&&(g-=c):r==="left"?g-=Math.max(d,u)+n:r==="right"&&(g+=Math.max(h,p)+n),{x:Ot(g,0,s.width-t.width),y:Ot(m,0,s.height-t.height)}}function ia(i,t,e){let s=Qt(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-s.right:i.x+s.left}function dd(i){return De([],Ze(i))}function nf(i,t,e){return Pe(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function hd(i,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}var na=class extends Te{constructor(t){super();this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&e.options.animation&&s.animations,a=new To(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=nf(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:s}=e,n=s.beforeTitle.apply(this,[t]),a=s.title.apply(this,[t]),o=s.afterTitle.apply(this,[t]),r=[];return r=De(r,Ze(n)),r=De(r,Ze(a)),r=De(r,Ze(o)),r}getBeforeBody(t,e){return dd(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){let{callbacks:s}=e,n=[];return _t(t,a=>{let o={before:[],lines:[],after:[]},r=hd(s,a);De(o.before,Ze(r.beforeLabel.call(this,a))),De(o.lines,r.label.call(this,a)),De(o.after,Ze(r.afterLabel.call(this,a))),n.push(o)}),n}getAfterBody(t,e){return dd(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){let{callbacks:s}=e,n=s.beforeFooter.apply(this,[t]),a=s.footer.apply(this,[t]),o=s.afterFooter.apply(this,[t]),r=[];return r=De(r,Ze(n)),r=De(r,Ze(a)),r=De(r,Ze(o)),r}_createItems(t){let e=this._active,s=this.chart.data,n=[],a=[],o=[],r=[],l,c;for(l=0,c=e.length;l<c;++l)r.push(Zg(this.chart,e[l]));return t.filter&&(r=r.filter((d,h,u)=>t.filter(d,h,u,s))),t.itemSort&&(r=r.sort((d,h)=>t.itemSort(d,h,s))),_t(r,d=>{let h=hd(t.callbacks,d);n.push(h.labelColor.call(this,d)),a.push(h.labelPointStyle.call(this,d)),o.push(h.labelTextColor.call(this,d))}),this.labelColors=n,this.labelPointStyles=a,this.labelTextColors=o,this.dataPoints=r,r}update(t,e){let s=this.options.setContext(this.getContext()),n=this._active,a,o=[];if(!n.length)this.opacity!==0&&(a={opacity:0});else{let r=Ni[s.position].call(this,n,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);let l=this._size=rd(this,s),c=Object.assign({},r,l),d=ld(this.chart,s,c),h=cd(s,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:r.x,caretY:r.y}}this._tooltipItems=o,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,n){let a=this.getCaretPosition(t,s,n);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,s){let{xAlign:n,yAlign:a}=this,{caretSize:o,cornerRadius:r}=s,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:h}=hs(r),{x:u,y:p}=t,{width:g,height:m}=e,f,b,v,C,y,w;return a==="center"?(y=p+m/2,n==="left"?(f=u,b=f-o,C=y+o,w=y-o):(f=u+g,b=f+o,C=y-o,w=y+o),v=f):(n==="left"?b=u+Math.max(l,d)+o:n==="right"?b=u+g-Math.max(c,h)-o:b=this.caretX,a==="top"?(C=p,y=C-o,f=b-o,v=b+o):(C=p+m,y=C+o,f=b+o,v=b-o),w=C),{x1:f,x2:b,x3:v,y1:C,y2:y,y3:w}}drawTitle(t,e,s){let n=this.title,a=n.length,o,r,l;if(a){let c=$i(s.rtl,this.x,this.width);for(t.x=ia(this,s.titleAlign,s),e.textAlign=c.textAlign(s.titleAlign),e.textBaseline="middle",o=Nt(s.titleFont),r=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,l=0;l<a;++l)e.fillText(n[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r,l+1===a&&(t.y+=s.titleMarginBottom-r)}}_drawColorBox(t,e,s,n,a){let o=this.labelColors[s],r=this.labelPointStyles[s],{boxHeight:l,boxWidth:c,boxPadding:d}=a,h=Nt(a.bodyFont),u=ia(this,"left",a),p=n.x(u),g=l<h.lineHeight?(h.lineHeight-l)/2:0,m=e.y+g;if(a.usePointStyle){let f={radius:Math.min(c,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},b=n.leftForLtr(p,c)+c/2,v=m+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,Ti(t,f,b,v),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Ti(t,f,b,v)}else{t.lineWidth=gt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;let f=n.leftForLtr(p,c-d),b=n.leftForLtr(n.xPlus(p,1),c-d-2),v=hs(o.borderRadius);Object.values(v).some(C=>C!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,Zs(t,{x:f,y:m,w:c,h:l,radius:v}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Zs(t,{x:b,y:m+1,w:c-2,h:l-2,radius:v}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(f,m,c,l),t.strokeRect(f,m,c,l),t.fillStyle=o.backgroundColor,t.fillRect(b,m+1,c-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){let{body:n}=this,{bodySpacing:a,bodyAlign:o,displayColors:r,boxHeight:l,boxWidth:c,boxPadding:d}=s,h=Nt(s.bodyFont),u=h.lineHeight,p=0,g=$i(s.rtl,this.x,this.width),m=function(S){e.fillText(S,g.x(t.x+p),t.y+u/2),t.y+=u+a},f=g.textAlign(o),b,v,C,y,w,x,_;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=ia(this,f,s),e.fillStyle=s.bodyColor,_t(this.beforeBody,m),p=r&&f!=="right"?o==="center"?c/2+d:c+2+d:0,y=0,x=n.length;y<x;++y){for(b=n[y],v=this.labelTextColors[y],e.fillStyle=v,_t(b.before,m),C=b.lines,r&&C.length&&(this._drawColorBox(e,t,y,g,s),u=Math.max(h.lineHeight,l)),w=0,_=C.length;w<_;++w)m(C[w]),u=h.lineHeight;_t(b.after,m)}p=0,u=h.lineHeight,_t(this.afterBody,m),t.y-=a}drawFooter(t,e,s){let n=this.footer,a=n.length,o,r;if(a){let l=$i(s.rtl,this.x,this.width);for(t.x=ia(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",o=Nt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,r=0;r<a;++r)e.fillText(n[r],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,n){let{xAlign:a,yAlign:o}=this,{x:r,y:l}=t,{width:c,height:d}=s,{topLeft:h,topRight:u,bottomLeft:p,bottomRight:g}=hs(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(r+h,l),o==="top"&&this.drawCaret(t,e,s,n),e.lineTo(r+c-u,l),e.quadraticCurveTo(r+c,l,r+c,l+u),o==="center"&&a==="right"&&this.drawCaret(t,e,s,n),e.lineTo(r+c,l+d-g),e.quadraticCurveTo(r+c,l+d,r+c-g,l+d),o==="bottom"&&this.drawCaret(t,e,s,n),e.lineTo(r+p,l+d),e.quadraticCurveTo(r,l+d,r,l+d-p),o==="center"&&a==="left"&&this.drawCaret(t,e,s,n),e.lineTo(r,l+h),e.quadraticCurveTo(r,l,r+h,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,s=this.$animations,n=s&&s.x,a=s&&s.y;if(n||a){let o=Ni[t.position].call(this,this._active,this._eventPosition);if(!o)return;let r=this._size=rd(this,t),l=Object.assign({},o,this._size),c=ld(e,t,l),d=cd(t,l,c,e);(n._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=r.width,this.height=r.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),s=this.opacity;if(!s)return;this._updateAnimationTarget(e);let n={width:this.width,height:this.height},a={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;let o=Qt(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=s,this.drawBackground(a,t,n,e),Io(t,e.textDirection),a.y+=o.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),Eo(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let s=this._active,n=t.map(({datasetIndex:r,index:l})=>{let c=this.chart.getDatasetMeta(r);if(!c)throw new Error("Cannot find a dataset at index "+r);return{datasetIndex:r,element:c.data[l],index:l}}),a=!Hs(s,n),o=this._positionChanged(n,e);(a||o)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let n=this.options,a=this._active||[],o=this._getActiveElements(t,a,e,s),r=this._positionChanged(o,t),l=e||!Hs(o,a)||r;return l&&(this._active=o,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,n){let a=this.options;if(t.type==="mouseout")return[];if(!n)return e;let o=this.chart.getElementsAtEventForMode(t,a.mode,a,s);return a.reverse&&o.reverse(),o}_positionChanged(t,e){let{caretX:s,caretY:n,options:a}=this,o=Ni[a.position].call(this,t,e);return o!==!1&&(s!==o.x||n!==o.y)}};na.positioners=Ni;var ud={id:"tooltip",_element:na,positioners:Ni,afterInit(i,t,e){e&&(i.tooltip=new na({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){let t=i.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",e)===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){let e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:xe,title(i){if(i.length>0){let t=i[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:xe,beforeBody:xe,beforeLabel:xe,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");let e=i.formattedValue;return yt(e)||(t+=e),t},labelColor(i){let e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){let e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:xe,afterBody:xe,beforeFooter:xe,footer:xe,afterFooter:xe}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var af=(i,t,e,s)=>(typeof t=="string"?(e=i.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function of(i,t,e,s){let n=i.indexOf(t);if(n===-1)return af(i,t,e,s);let a=i.lastIndexOf(t);return n!==a?e:n}var rf=(i,t)=>i===null?null:Ot(Math.round(i),0,t),Qe=class extends ps{constructor(t){super(t);this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let s=this.getLabels();for(let{index:n,label:a}of e)s[n]===a&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(yt(t))return null;let s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:of(s,t,ft(e,t),this._addedLabels),rf(e,s.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){let t=this.min,e=this.max,s=this.options.offset,n=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)n.push({value:o});return n}getLabelForValue(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};Qe.id="category";Qe.defaults={ticks:{callback:Qe.prototype.getLabelForValue}};function lf(i,t){let e=[],s=1e-14,{bounds:n,step:a,min:o,max:r,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:u}=i,p=a||1,g=d-1,{min:m,max:f}=t,b=!yt(o),v=!yt(r),C=!yt(c),y=(f-m)/(h+1),w=bn((f-m)/g/p)*p,x,_,S,A;if(w<s&&!b&&!v)return[{value:m},{value:f}];A=Math.ceil(f/w)-Math.floor(m/w),A>g&&(w=bn(A*w/g/p)*p),yt(l)||(x=Math.pow(10,l),w=Math.ceil(w*x)/x),n==="ticks"?(_=Math.floor(m/w)*w,S=Math.ceil(f/w)*w):(_=m,S=f),b&&v&&a&&Za((r-o)/a,w/1e3)?(A=Math.round(Math.min((r-o)/w,d)),w=(r-o)/A,_=o,S=r):C?(_=b?o:_,S=v?r:S,A=c-1,w=(S-_)/A):(A=(S-_)/w,ws(A,Math.round(A),w/1e3)?A=Math.round(A):A=Math.ceil(A));let D=Math.max(vn(w),vn(_));x=Math.pow(10,yt(l)?D:l),_=Math.round(_*x)/x,S=Math.round(S*x)/x;let M=0;for(b&&(u&&_!==o?(e.push({value:o}),_<o&&M++,ws(Math.round((_+M*w)*x)/x,o,pd(o,y,i))&&M++):_<o&&M++);M<A;++M)e.push({value:Math.round((_+M*w)*x)/x});return v&&u&&S!==r?e.length&&ws(e[e.length-1].value,r,pd(r,y,i))?e[e.length-1].value=r:e.push({value:r}):(!v||S===r)&&e.push({value:S}),e}function pd(i,t,{horizontal:e,minRotation:s}){let n=ne(s),a=(e?Math.sin(n):Math.cos(n))||.001,o=.75*t*(""+i).length;return Math.min(t/a,o)}var Hi=class extends ps{constructor(t){super(t);this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return yt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds(),{min:n,max:a}=this,o=l=>n=e?n:l,r=l=>a=s?a:l;if(t){let l=ce(n),c=ce(a);l<0&&c<0?r(0):l>0&&c>0&&o(0)}if(n===a){let l=1;(a>=Number.MAX_SAFE_INTEGER||n<=Number.MIN_SAFE_INTEGER)&&(l=Math.abs(a*.05)),r(a+l),t||o(n-l)}this.min=n,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,s=this.getTickLimit();s=Math.max(2,s);let n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,o=lf(n,a);return t.bounds==="ticks"&&xn(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){let t=this.ticks,e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){let n=(s-e)/Math.max(t.length-1,1)/2;e-=n,s+=n}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Ps(t,this.chart.options.locale,this.options.ticks.format)}},Je=class extends Hi{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=Lt(t)?t:0,this.max=Lt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,s=ne(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};Je.id="linear";Je.defaults={ticks:{callback:Yn.formatters.numeric}};function gd(i){return i/Math.pow(10,Math.floor(Zt(i)))===1}function cf(i,t){let e=Math.floor(Zt(t.max)),s=Math.ceil(t.max/Math.pow(10,e)),n=[],a=Kt(i.min,Math.pow(10,Math.floor(Zt(t.min)))),o=Math.floor(Zt(a)),r=Math.floor(a/Math.pow(10,o)),l=o<0?Math.pow(10,Math.abs(o)):1;do n.push({value:a,major:gd(a)}),++r,r===10&&(r=1,++o,l=o>=0?1:l),a=Math.round(r*Math.pow(10,o)*l)/l;while(o<e||o===e&&r<s);let c=Kt(i.max,a);return n.push({value:c,major:gd(a)}),n}var Ho=class extends ps{constructor(t){super(t);this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let s=Hi.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Lt(s)&&s>0?s:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=Lt(t)?Math.max(0,t):null,this.max=Lt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),s=this.min,n=this.max,a=l=>s=t?s:l,o=l=>n=e?n:l,r=(l,c)=>Math.pow(10,Math.floor(Zt(l))+c);s===n&&(s<=0?(a(1),o(10)):(a(r(s,-1)),o(r(n,1)))),s<=0&&a(r(n,-1)),n<=0&&o(r(s,1)),this._zero&&this.min!==this._suggestedMin&&s===r(this.min,0)&&a(r(s,-1)),this.min=s,this.max=n}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},s=cf(e,this);return t.bounds==="ticks"&&xn(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Ps(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=Zt(t),this._valueRange=Zt(this.max)-Zt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Zt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};Ho.id="logarithmic";Ho.defaults={ticks:{callback:Yn.formatters.logarithmic,major:{enabled:!0}}};function Uo(i){let t=i.ticks;if(t.display&&i.display){let e=Qt(t.backdropPadding);return ft(t.font&&t.font.size,pt.font.size)+e.height}return 0}function df(i,t,e){return e=St(e)?e:[e],{w:uo(i,t.string,e),h:e.length*t.lineHeight}}function fd(i,t,e,s,n){return i===s||i===n?{start:t-e/2,end:t+e/2}:i<s||i>n?{start:t-e,end:t}:{start:t,end:t+e}}function hf(i){let t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),s=[],n=[],a=i._pointLabels.length,o=i.options.pointLabels,r=o.centerPointLabels?Pt/a:0;for(let l=0;l<a;l++){let c=o.setContext(i.getPointLabelContext(l));n[l]=c.padding;let d=i.getPointPosition(l,i.drawingArea+n[l],r),h=Nt(c.font),u=df(i.ctx,h,i._pointLabels[l]);s[l]=u;let p=ae(i.getIndexAngle(l)+r),g=Math.round(Ci(p)),m=fd(g,d.x,u.w,0,180),f=fd(g,d.y,u.h,90,270);uf(e,t,p,m,f)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=pf(i,s,n)}function uf(i,t,e,s,n){let a=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e)),r=0,l=0;s.start<t.l?(r=(t.l-s.start)/a,i.l=Math.min(i.l,t.l-r)):s.end>t.r&&(r=(s.end-t.r)/a,i.r=Math.max(i.r,t.r+r)),n.start<t.t?(l=(t.t-n.start)/o,i.t=Math.min(i.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/o,i.b=Math.max(i.b,t.b+l))}function pf(i,t,e){let s=[],n=i._pointLabels.length,a=i.options,o=Uo(a)/2,r=i.drawingArea,l=a.pointLabels.centerPointLabels?Pt/n:0;for(let c=0;c<n;c++){let d=i.getPointPosition(c,r+o+e[c],l),h=Math.round(Ci(ae(d.angle+Mt))),u=t[c],p=mf(d.y,u.h,h),g=gf(h),m=ff(d.x,u.w,g);s.push({x:d.x,y:p,textAlign:g,left:m,top:p,right:m+u.w,bottom:p+u.h})}return s}function gf(i){return i===0||i===180?"center":i<180?"left":"right"}function ff(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function mf(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function bf(i,t){let{ctx:e,options:{pointLabels:s}}=i;for(let n=t-1;n>=0;n--){let a=s.setContext(i.getPointLabelContext(n)),o=Nt(a.font),{x:r,y:l,textAlign:c,left:d,top:h,right:u,bottom:p}=i._pointLabelItems[n],{backdropColor:g}=a;if(!yt(g)){let m=hs(a.borderRadius),f=Qt(a.backdropPadding);e.fillStyle=g;let b=d-f.left,v=h-f.top,C=u-d+f.width,y=p-h+f.height;Object.values(m).some(w=>w!==0)?(e.beginPath(),Zs(e,{x:b,y:v,w:C,h:y,radius:m}),e.fill()):e.fillRect(b,v,C,y)}Xs(e,i._pointLabels[n],r,l+o.lineHeight/2,o,{color:a.color,textAlign:c,textBaseline:"middle"})}}function md(i,t,e,s){let{ctx:n}=i;if(e)n.arc(i.xCenter,i.yCenter,t,0,Ct);else{let a=i.getPointPosition(0,t);n.moveTo(a.x,a.y);for(let o=1;o<s;o++)a=i.getPointPosition(o,t),n.lineTo(a.x,a.y)}}function xf(i,t,e,s){let n=i.ctx,a=t.circular,{color:o,lineWidth:r}=t;!a&&!s||!o||!r||e<0||(n.save(),n.strokeStyle=o,n.lineWidth=r,n.setLineDash(t.borderDash),n.lineDashOffset=t.borderDashOffset,n.beginPath(),md(i,e,a,s),n.closePath(),n.stroke(),n.restore())}function vf(i,t,e){return Pe(i,{label:e,index:t,type:"pointLabel"})}var As=class extends Hi{constructor(t){super(t);this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=Qt(Uo(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=Lt(t)&&!isNaN(t)?t:0,this.max=Lt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Uo(this.options))}generateTickLabels(t){Hi.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{let n=kt(this.options.pointLabels.callback,[e,s],this);return n||n===0?n:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){let t=this.options;t.display&&t.pointLabels.display?hf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,n))}getIndexAngle(t){let e=Ct/(this._pointLabels.length||1),s=this.options.startAngle||0;return ae(t*e+ne(s))}getDistanceFromCenterForValue(t){if(yt(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(yt(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let s=e[t];return vf(this.getContext(),t,s)}}getPointPosition(t,e,s=0){let n=this.getIndexAngle(t)-Mt+s;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:s,right:n,bottom:a}=this._pointLabelItems[t];return{left:e,top:s,right:n,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let s=this.ctx;s.save(),s.beginPath(),md(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:s,grid:n}=e,a=this._pointLabels.length,o,r,l;if(e.pointLabels.display&&bf(this,a),n.display&&this.ticks.forEach((c,d)=>{if(d!==0){r=this.getDistanceFromCenterForValue(c.value);let h=n.setContext(this.getContext(d-1));xf(this,h,r,a)}}),s.display){for(t.save(),o=a-1;o>=0;o--){let c=s.setContext(this.getPointLabelContext(o)),{color:d,lineWidth:h}=c;!h||!d||(t.lineWidth=h,t.strokeStyle=d,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,r=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),l=this.getPointPosition(o,r),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;let n=this.getIndexAngle(0),a,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((r,l)=>{if(l===0&&!e.reverse)return;let c=s.setContext(this.getContext(l)),d=Nt(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,o=t.measureText(r.label).width,t.fillStyle=c.backdropColor;let h=Qt(c.backdropPadding);t.fillRect(-o/2-h.left,-a-d.size/2-h.top,o+h.width,d.size+h.height)}Xs(t,r.label,0,-a,d,{color:c.color})}),t.restore()}drawTitle(){}};As.id="radialLinear";As.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Yn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(i){return i},padding:5,centerPointLabels:!1}};As.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};As.descriptors={angleLines:{_fallback:"grid"}};var aa={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Jt=Object.keys(aa);function yf(i,t){return i-t}function bd(i,t){if(yt(t))return null;let e=i._adapter,{parser:s,round:n,isoWeekday:a}=i._parseOpts,o=t;return typeof s=="function"&&(o=s(o)),Lt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(n&&(o=n==="week"&&(rs(a)||a===!0)?e.startOf(o,"isoWeek",a):e.startOf(o,n)),+o)}function xd(i,t,e,s){let n=Jt.length;for(let a=Jt.indexOf(i);a<n-1;++a){let o=aa[Jt[a]],r=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(r*o.size))<=s)return Jt[a]}return Jt[n-1]}function _f(i,t,e,s,n){for(let a=Jt.length-1;a>=Jt.indexOf(e);a--){let o=Jt[a];if(aa[o].common&&i._adapter.diff(n,s,o)>=t-1)return o}return Jt[e?Jt.indexOf(e):0]}function wf(i){for(let t=Jt.indexOf(i)+1,e=Jt.length;t<e;++t)if(aa[Jt[t]].common)return Jt[t]}function vd(i,t,e){if(!e)i[t]=!0;else if(e.length){let{lo:s,hi:n}=Ii(e,t),a=e[s]>=t?e[s]:e[n];i[a]=!0}}function Cf(i,t,e,s){let n=i._adapter,a=+n.startOf(t[0].value,s),o=t[t.length-1].value,r,l;for(r=a;r<=o;r=+n.add(r,1,s))l=e[r],l>=0&&(t[l].major=!0);return t}function yd(i,t,e){let s=[],n={},a=t.length,o,r;for(o=0;o<a;++o)r=t[o],n[r]=o,s.push({value:r,major:!1});return a===0||!e?s:Cf(i,s,n,e)}var Ui=class extends ps{constructor(t){super(t);this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){let s=t.time||(t.time={}),n=this._adapter=new Hp._date(t.adapters.date);n.init(e),_s(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:bd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,s=t.time.unit||"day",{min:n,max:a,minDefined:o,maxDefined:r}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!r&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!o||!r)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=Lt(n)&&!isNaN(n)?n:+e.startOf(Date.now(),s),a=Lt(a)&&!isNaN(a)?a:+e.endOf(Date.now(),s)+1,this.min=Math.min(n,a-1),this.max=Math.max(n+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){let t=this.options,e=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);let a=this.min,o=this.max,r=to(n,a,o);return this._unit=e.unit||(s.autoSkip?xd(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):_f(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:wf(this._unit),this.initOffsets(n),t.reverse&&r.reverse(),yd(this,r,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t){let e=0,s=0,n,a;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?s=a:s=(a-this.getDecimalForValue(t[t.length-2]))/2);let o=t.length<3?.5:.25;e=Ot(e,0,o),s=Ot(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){let t=this._adapter,e=this.min,s=this.max,n=this.options,a=n.time,o=a.unit||xd(a.minUnit,e,s,this._getLabelCapacity(e)),r=ft(a.stepSize,1),l=o==="week"?a.isoWeekday:!1,c=rs(l)||l===!0,d={},h=e,u,p;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":o),t.diff(s,e,o)>1e5*r)throw new Error(e+" and "+s+" are too far apart with stepSize of "+r+" "+o);let g=n.ticks.source==="data"&&this.getDataTimestamps();for(u=h,p=0;u<s;u=+t.add(u,r,o),p++)vd(d,u,g);return(u===s||n.bounds==="ticks"||p===1)&&vd(d,u,g),Object.keys(d).sort((m,f)=>m-f).map(m=>+m)}getLabelForValue(t){let e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}_tickFormatFunction(t,e,s,n){let a=this.options,o=a.time.displayFormats,r=this._unit,l=this._majorUnit,c=r&&o[r],d=l&&o[l],h=s[e],u=l&&d&&h&&h.major,p=this._adapter.format(t,n||(u?d:c)),g=a.ticks.callback;return g?kt(g,[p,e,s],this):p}generateTickLabels(t){let e,s,n;for(e=0,s=t.length;e<s;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){let e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,s=this.ctx.measureText(t).width,n=ne(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(n),o=Math.sin(n),r=this._resolveTickFontOptions(0).size;return{w:s*a+r*o,h:s*o+r*a}}_getLabelCapacity(t){let e=this.options.time,s=e.displayFormats,n=s[e.unit]||s.millisecond,a=this._tickFormatFunction(t,0,yd(this,[t],this._majorUnit),n),o=this._getLabelSize(a),r=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return r>0?r:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;let n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,s=n.length;e<s;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,s;if(t.length)return t;let n=this.getLabels();for(e=0,s=n.length;e<s;++e)t.push(bd(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return wn(t.sort(yf))}};Ui.id="time";Ui.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function oa(i,t,e){let s=0,n=i.length-1,a,o,r,l;e?(t>=i[s].pos&&t<=i[n].pos&&({lo:s,hi:n}=He(i,"pos",t)),{pos:a,time:r}=i[s],{pos:o,time:l}=i[n]):(t>=i[s].time&&t<=i[n].time&&({lo:s,hi:n}=He(i,"time",t)),{time:a,pos:r}=i[s],{time:o,pos:l}=i[n]);let c=o-a;return c?r+(l-r)*(t-a)/c:r}var qo=class extends Ui{constructor(t){super(t);this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=oa(e,this.min),this._tableRange=oa(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:s}=this,n=[],a=[],o,r,l,c,d;for(o=0,r=t.length;o<r;++o)c=t[o],c>=e&&c<=s&&n.push(c);if(n.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,r=n.length;o<r;++o)d=n[o+1],l=n[o-1],c=n[o],Math.round((d+l)/2)!==c&&a.push({time:c,pos:o/(r-1)});return a}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(oa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return oa(this._table,s*this._tableRange+this._minPos,!0)}};qo.id="timeseries";qo.defaults=Ui.defaults;var ra={errorBarLineWidth:{v:[1,3]},errorBarColor:{v:["#2c2c2c","#1f1f1f"]},errorBarWhiskerLineWidth:{v:[1,3]},errorBarWhiskerRatio:{v:[.2,.25]},errorBarWhiskerSize:{v:[20,24]},errorBarWhiskerColor:{v:["#2c2c2c","#1f1f1f"]}},Yo={_scriptable:!0,_indexable:i=>i!=="v"},_d=Object.keys(ra);function Ko(i,t){let e=Array.isArray(i)?i:[i],s=Array.isArray(t)?t:[t];if(e.length===s.length)return e.map((a,o)=>[a,s[o]]);let n=Math.max(e.length,s.length);return Array(n).map((a,o)=>[e[o%e.length],s[o%s.length]])}function te(i,t){if(typeof i=="string"||typeof i=="number")return i;let e=Array.isArray(i)?i:i.v;return e[t%e.length]}function Xo(i,t,e){let s=te(t.errorBarWhiskerRatio,e);return i!=null&&s>0?i*s*.5:te(t.errorBarWhiskerSize,e)*.5}function Sf(i,t,e,s,n){n.save(),n.translate(i.x,0);let a=Ko(t??i.y,e??i.y);a.reverse().forEach(([o,r],l)=>{let c=a.length-l-1,d=Xo(i.width,s,c);n.lineWidth=te(s.errorBarLineWidth,c),n.strokeStyle=te(s.errorBarColor,c),n.beginPath(),n.moveTo(0,o),n.lineTo(0,r),n.stroke(),n.lineWidth=te(s.errorBarWhiskerLineWidth,c),n.strokeStyle=te(s.errorBarWhiskerColor,c),n.beginPath(),n.moveTo(-d,o),n.lineTo(d,o),n.moveTo(-d,r),n.lineTo(d,r),n.stroke()}),n.restore()}function If(i,t,e,s,n){n.save(),n.translate(0,i.y);let a=Ko(t??i.x,e??i.x);a.reverse().forEach(([o,r],l)=>{let c=a.length-l-1,d=Xo(i.height,s,c);n.lineWidth=te(s.errorBarLineWidth,c),n.strokeStyle=te(s.errorBarColor,c),n.beginPath(),n.moveTo(o,0),n.lineTo(r,0),n.stroke(),n.lineWidth=te(s.errorBarWhiskerLineWidth,c),n.strokeStyle=te(s.errorBarWhiskerColor,c),n.beginPath(),n.moveTo(o,-d),n.lineTo(o,d),n.moveTo(r,-d),n.lineTo(r,d),n.stroke()}),n.restore()}function wd(i,t){var e,s,n,a;let o=i.getProps(["x","y","width","height","xMin","xMax","yMin","yMax"]);(o.xMin!=null||o.xMax!=null)&&If(o,(e=o.xMin)!==null&&e!==void 0?e:null,(s=o.xMax)!==null&&s!==void 0?s:null,i.options,t),(o.yMin!=null||o.yMax!=null)&&Sf(o,(n=o.yMin)!==null&&n!==void 0?n:null,(a=o.yMax)!==null&&a!==void 0?a:null,i.options,t)}function Ef(i,t,e,s,n){n.save(),n.translate(i.x,i.y);let a=(i.startAngle+i.endAngle)/2,o=Math.cos(a),r=Math.sin(a),l={x:-r,y:o},c=Math.sqrt(l.x*l.x+l.y*l.y);l.x/=c,l.y/=c;let d=Ko(t??i.outerRadius,e??i.outerRadius);d.reverse().forEach(([h,u],p)=>{let g=d.length-p-1,m=h*o,f=h*r,b=u*o,v=u*r,C=Xo(null,s,g),y=l.x*C,w=l.y*C;n.lineWidth=te(s.errorBarLineWidth,g),n.strokeStyle=te(s.errorBarColor,g),n.beginPath(),n.moveTo(m,f),n.lineTo(b,v),n.stroke(),n.lineWidth=te(s.errorBarWhiskerLineWidth,g),n.strokeStyle=te(s.errorBarWhiskerColor,g),n.beginPath(),n.moveTo(m+y,f+w),n.lineTo(m-y,f-w),n.moveTo(b+y,v+w),n.lineTo(b-y,v-w),n.stroke()}),n.restore()}function kf(i,t){let e=i.getProps(["x","y","startAngle","endAngle","rMin","rMax","outerRadius"]);(e.rMin!=null||e.rMax!=null)&&Ef(e,e.rMin,e.rMax,i.options,t)}var ts=class extends Re{draw(t){super.draw(t),wd(this,t)}};ts.id="barWithErrorBar";ts.defaults=tt(tt({},Re.defaults),ra);ts.defaultRoutes=Re.defaultRoutes;ts.descriptors=Yo;var Ht=class extends Ae{draw(t,e){super.draw.call(this,t,e),wd(this,t)}};Ht.id="pointWithErrorBar";Ht.defaults=tt(tt({},Ae.defaults),ra);Ht.defaultRoutes=Ae.defaultRoutes;Ht.descriptors=Yo;var Rs=class extends ms{draw(t){super.draw(t),kf(this,t)}};Rs.id="arcWithErrorBar";Rs.defaults=tt(tt({},ms.defaults),ra);Rs.defaultRoutes=ms.defaultRoutes;Rs.descriptors=Yo;var Zo=["xMin","xMax","yMin","yMax"];function Cd(i){return i?Zo.slice(0,2):Zo.slice(2)}function qi(i,t,e,s,n){let a=[`${s.axis}Min`,`${s.axis}Max`],o=s.getBasePixel();for(let r of a){let l=t[r];Array.isArray(l)?i[r]=l.map(c=>n?o:s.getPixelForValue(c,e)):typeof l=="number"&&(i[r]=n?o:s.getPixelForValue(l,e))}}function Pf(i,t,e,s,n){let a=n.animation,o=[`${e.axis}Min`,`${e.axis}Max`],r=l=>{let c=e.getDistanceFromCenterForValue(l),d=a.animateScale?0:c;return s?d:c};for(let l of o){let c=t[l];Array.isArray(c)?i[l]=c.map(r):typeof c=="number"&&(i[l]=r(c))}}function Qo(i){return Array.isArray(i)?i.slice().reverse():i}function Sd(i){let t=Cd(i.element.horizontal),e=ud.defaults.callbacks.label.call(this,i),s=i.chart.data.datasets[i.datasetIndex].data[i.dataIndex];return s==null||t.every(n=>s[n]==null)?e:`${e} (${Qo(s[t[0]])} .. ${s[t[1]]})`}function Mf(i){let t=i.chart.data.datasets[i.datasetIndex].data[i.dataIndex],e=(s,n)=>{let a=Cd(n);return t==null||a.every(o=>t[o]==null)?s:`${s} [${Qo(t[a[0]])} .. ${t[a[1]]}]`};return`(${e(i.label,!0)}, ${e(i.parsed.y,!1)})`}function Tf(i){let t=Me.overrides.plugins.tooltip.callbacks.label.call(this,i),e=i.chart.data.datasets[i.datasetIndex].data[i.dataIndex],s=["rMin","rMax"];return e==null||s.every(n=>e[n]==null)?t:`${t} [${Qo(e[s[0]])} .. ${e[s[1]]}]`}var Id={color(i,t,e){let s=i||"transparent",n=t||"transparent";if(s===n)return t;let a=Is(s),o=a.valid&&Is(n);return o&&o.valid?o.mix(a,e).hexString():t},number(i,t,e){return i===t?t:i+(t-i)*e}};function Ed(i,t,e,s,n){if(typeof i===s&&typeof t===s)return n(i,t,e);if(Array.isArray(i)&&Array.isArray(t))return i.map((o,r)=>n(o,t[r],e));let a=o=>o&&Array.isArray(o.v);return a(i)&&a(t)?{v:i.v.map((o,r)=>n(o,t.v[r],e))}:t}function Af(i,t,e){return Ed(i,t,e,"number",Id.number)}function Rf(i,t,e){return Ed(i,t,e,"string",Id.color)}var la={animations:{numberArray:{fn:Af,properties:Zo.concat(_d.filter(i=>!i.endsWith("Color")),["rMin","rMax"])},colorArray:{fn:Rf,properties:_d.filter(i=>i.endsWith("Color"))}}};function ca(i,t){let{axis:e}=i;i.axis=`${e}MinMin`;let{min:s}=t(i);i.axis=`${e}MaxMax`;let{max:n}=t(i);return i.axis=e,{min:s,max:n}}function kd(i,t,e){return Array.isArray(t)?e(...t):typeof t=="number"?t:i}function si(i,t,e,s,n){let a=typeof t=="string"?t:t.axis,o=`${a}Min`,r=`${a}Max`,l=`${a}MinMin`,c=`${a}MaxMax`;for(let d=0;d<n;d+=1){let h=d+s,u=i[d];u[o]=e[h][o],u[r]=e[h][r],u[l]=kd(u[a],u[o],Math.min),u[c]=kd(u[a],u[r],Math.max)}}function Pd(i,t,e,s){let{axis:n}=t,a=t.getLabels();for(let o=0;o<s;o+=1){let r=o+e,l=i[o];l[n]=t.parse(a[r],r)}}function da(i,t,e,s=[],n=[]){zt.addControllers(e),Array.isArray(s)?zt.addElements(...s):zt.addElements(s),Array.isArray(n)?zt.addScales(...n):zt.addScales(n);let a=t;return a.type=i,a}var $e=class extends ve{getMinMax(t,e){return ca(t,s=>super.getMinMax(s,e))}parseObjectData(t,e,s,n){let a=super.parseObjectData(t,e,s,n);return si(a,t.vScale,e,s,n),Pd(a,t.iScale,s,n),a}updateElement(t,e,s,n){typeof e=="number"&&qi(s,this.getParsed(e),e,this._cachedMeta.vScale,n==="reset"),super.updateElement(t,e,s,n)}};$e.id="barWithErrorBars";$e.defaults=Ft({},[ve.defaults,la,{dataElementType:ts.id}]);$e.overrides=Ft({},[ve.overrides,{plugins:{tooltip:{callbacks:{label:Sd}}}}]);$e.defaultRoutes=ve.defaultRoutes;var Md=class extends oe{constructor(t,e){super(t,da("barWithErrorBars",e,$e,ts,[Je,Qe]))}};Md.id=$e.id;var Le=class extends ue{getMinMax(t,e){return ca(t,s=>super.getMinMax(s,e))}parseObjectData(t,e,s,n){let a=super.parseObjectData(t,e,s,n);si(a,t.vScale,e,s,n);let o=t.iScale;return o.type==="linear"||o.type==="logarithmic"?si(a,t.iScale,e,s,n):Pd(a,t.iScale,s,n),a}updateElement(t,e,s,n){t instanceof Ht&&typeof e=="number"&&this.updateElementScale(e,s,n),super.updateElement(t,e,s,n)}updateElementScale(t,e,s){qi(e,this.getParsed(t),t,this._cachedMeta.vScale,s==="reset");let n=this._cachedMeta.iScale;(n.type==="linear"||n.type==="logarithmic")&&qi(e,this.getParsed(t),t,this._cachedMeta.iScale,s==="reset")}updateElements(t,e,s,n){let a=n==="reset",r=this.chart._animationsDisabled||a||n==="none";if(super.updateElements(t,e,s,n),!!r)for(let l=e;l<e+s;++l){let c=t[l];c instanceof Ht&&this.updateElementScale(l,c,n)}}};Le.id="lineWithErrorBars";Le.defaults=Ft({},[ue.defaults,la,{dataElementType:Ht.id}]);Le.overrides=Ft({},[ue.overrides,{plugins:{tooltip:{callbacks:{label:Sd}}}}]);Le.defaultRoutes=ue.defaultRoutes;var Td=class extends oe{constructor(t,e){super(t,da("lineWithErrorBars",e,Le,Ht,[Je,Qe]))}};Td.id=Le.id;var Be=class extends gs{getMinMax(t,e){return ca(t,s=>super.getMinMax(s,e))}parseObjectData(t,e,s,n){let a=super.parseObjectData(t,e,s,n);return si(a,t.xScale,e,s,n),si(a,t.yScale,e,s,n),a}updateElement(t,e,s,n){t instanceof Ht&&typeof e=="number"&&this.updateElementScale(e,s,n),super.updateElement(t,e,s,n)}updateElementScale(t,e,s){qi(e,this.getParsed(t),t,this._cachedMeta.xScale,s==="reset"),qi(e,this.getParsed(t),t,this._cachedMeta.yScale,s==="reset")}updateElements(t,e,s,n){let a=n==="reset",r=this.chart._animationsDisabled||a||n==="none";if(super.updateElements(t,e,s,n),!!r)for(let l=e;l<e+s;++l){let c=t[l];c instanceof Ht&&this.updateElementScale(l,c,n)}}};Be.id="scatterWithErrorBars";Be.defaults=Ft({},[gs.defaults,la,{dataElementType:Ht.id}]);Be.overrides=Ft({},[gs.overrides,{plugins:{tooltip:{callbacks:{label:Mf}}}}]);Be.defaultRoutes=ue.defaultRoutes;var Ad=class extends oe{constructor(t,e){super(t,da("scatterWithErrorBars",e,Be,Ht,[Je]))}};Ad.id=Be.id;var Ds=class extends Me{getMinMaxImpl(t){let e=this._cachedMeta,s={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((n,a)=>{let o=this.getParsed(a)[t.axis];Number.isNaN(o)||!this.chart.getDataVisibility(a)||(o<s.min&&(s.min=o),o>s.max&&(s.max=o))}),s}getMinMax(t){return ca(t,e=>this.getMinMaxImpl(e))}countVisibleElements(){let t=this._cachedMeta;return t.data.reduce((e,s,n)=>!Number.isNaN(t._parsed[n].r)&&this.chart.getDataVisibility(n)?e+1:e,0)}parseObjectData(t,e,s,n){let a=new Array(n),o=t.rScale;for(let r=0;r<n;r+=1){let l=r+s,c=e[l],d=o.parse(c[o.axis],l);a[r]={[o.axis]:d}}return si(a,o,e,s,n),a}updateElement(t,e,s,n){typeof e=="number"&&Pf(s,this.getParsed(e),this._cachedMeta.rScale,n==="reset",this.chart.options),super.updateElement(t,e,s,n)}updateElements(t,e,s,n){let a=this.chart.scales.r,o=a.getDistanceFromCenterForValue;a.getDistanceFromCenterForValue=function(l){return typeof l=="number"?o.call(this,l):o.call(this,l.r)},super.updateElements(t,e,s,n),a.getDistanceFromCenterForValue=o}};Ds.id="polarAreaWithErrorBars";Ds.defaults=Ft({},[Me.defaults,la,{dataElementType:Rs.id}]);Ds.overrides=Ft({},[Me.overrides,{plugins:{tooltip:{callbacks:{label:Tf}}}}]);Ds.defaultRoutes=Me.defaultRoutes;var Rd=class extends oe{constructor(t,e){super(t,da("polarAreaWithErrorBars",e,Ds,Rs,[As]))}};Rd.id=Ds.id;var Jo=class extends Qi{constructor(t,e,s){super();this.autoscaleMode="",this.axisBox=document.createElement("div"),this.axisBtnEl=document.createElement("button"),this.defaultOptions={display:!0,position:"bottom",type:"linear",axis:"x",min:0,max:1,title:{display:!0,text:"x"},offset:!1,grid:{color:({tick:{value:n}={}})=>n===0?this._gridAxisColor:this._gridLineColor,lineWidth:n=>{if(!n.tick)return 1;let{tick:{value:a}}=n;return a===0?2:1},tickLength:4,tickWidth:0,offset:!1},ticks:{font:{family:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',size:12},color:()=>this._tickLabelColor,includeBounds:!1}},console.assert(t,"must supply graph"),this.graph=t,this.id=e,this.options=tt(tt({},xr(this.defaultOptions)),s),we(()=>{console.assert(Ws.colorMode),requestAnimationFrame(()=>{let{coreGraphEl:n}=this.graph,a=getComputedStyle(n).getPropertyValue("--vst-color-bg-primary"),o=getComputedStyle(n).getPropertyValue("--vst-color-fg-primary");this._gridLineColor=a,this._gridAxisColor=o,this._tickLabelColor=o,this.graph.plot.update()})})}get name(){return this.options.name}get direction(){return this.options.axis}get categorical(){return this.graph.categorical&&this.direction==="x"}get rangePx(){return{min:this._dataPointSpaceToCanvasPlotSpace(this.options.min),max:this._dataPointSpaceToCanvasPlotSpace(this.options.max)}}get plotOffset(){return this.options.axis==="x"?this.graph.plot.scales[this.id].left:this.graph.plot.scales[this.id].top}get labelSize(){return this.graph.scales[this.id][this.options.axis==="x"?"height":"width"]}get range(){return{min:this.options.min,max:this.options.max}}get rangeLength(){return Math.abs(this.options.max-this.options.min)}get indexRange(){if(this.categorical){let t=this.graph.plot.data.datasets[0]?.data;return{min:0,max:t.length-1}}return console.warn("Axis 'index' is only defined for a categorical axis"),null}_dataPointSpaceToCanvasPlotSpace(t){return this.graph.plot.scales[this.id].getPixelForValue(t)||0}p2c(t){return(this.graph.plot.scales[this.id].getPixelForValue(t)||0)-this.plotOffset}_canvasPlotSpaceToDataPointSpace(t){return this.graph.plot.scales[this.id].getValueForPixel(t)||0}overrideScaleRange(t,e){let{min:s,max:n}=t,a=this.graph.plot.scales[this.id];console.assert(a,"Scale must be non-null.");let o=a.min,r=a.max;a.min=s,a.max=n,a.configure();try{e(this)}catch(l){console.error(l)}a.min=o,a.max=r,a.configure()}c2p(t){return this.graph.plot.scales[this.id].getValueForPixel(t+this.plotOffset)||0}p2i(t){return this.categorical?Math.round(t):(console.warn("Axis 'index' is only defined for a categorical axis"),null)}i2p(t){return this.categorical?t:(console.warn("Axis 'index' is only defined for a categorical axis"),null)}overTicks(t){return this.options.axis==="x"?t<this._dataPointSpaceToCanvasPlotSpace(this.options.min):t>this._dataPointSpaceToCanvasPlotSpace(this.options.min)}getRange(){return this.range}setRange({min:t,max:e},s=!0){let n=t===e?e+1:e;this.options.min=t,this.options.max=n,s&&this.dispatchEvent(new CustomEvent("axis-range-updated",{detail:{min:t,max:n}}))}translate(t,e=!0){if(this.categorical)return{min:this.options.min,max:this.options.max};let s={min:this.options.min-t,max:this.options.max-t};return e&&this.setRange(s),s}};var Dd=5,Df=80,$f=10,Lf=1200;oe.register(ve,Re,ts,$e,Qe,Je,ue,Ts,Le,Ae,Ht,Be,{id:"VstIntegralFill",beforeDatasetDraw(i,t){if(!t.meta?.dataset||t.meta.dataset.options.fill!=="vst-integral")return;let{data:e,dataset:{options:{backgroundColor:s}},vScale:n}=t.meta,{ctx:a,chartArea:{left:o,top:r,width:l,height:c}}=i,d=n.getPixelForValue(0);a.save(),a.beginPath(),a.rect(o,r,l,c),a.clip(),a.fillStyle=s,a.fill(new Path2D(`
          M${e[0].x},${d}
          L${e.map(h=>`${h.x} ${h.y}`).join("L")}
          L${e[e.length-1].x},${d}
          Z`)),a.restore()}},{id:"VstPeakIntegralFill",beforeDatasetDraw(i,t){if(!t.meta?.dataset||t.meta.dataset.options.fill!=="vst-peak-integral")return;let{data:e,dataset:{options:{backgroundColor:s}},vScale:n}=t.meta,{ctx:a}=i,o=e.at(0),r=e.at(-1),l=n.getPixelForValue(0);a.save(),a.beginPath(),a.clip(new Path2D(`
          M ${o.x},${l}
          L ${t.meta.data.map(c=>`${c.x},${c.y}`).join("L")}
          L ${r.x},${l}
          Z
        `)),a.beginPath(),a.fillStyle=s,a.fill(new Path2D(`
          M ${o.x},0
          L ${o.x},${o.y}
          L ${r.x},${r.y}
          L ${r.x},0
          z
        `)),a.restore()}});oe.defaults.font.family='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';oe.defaults.font.size=12;function $s(i){return i.map(t=>({x:t[0],y:t[1]}))}function tr(i){i.ticks.length<=1||i.min<=0&&i.max>=0&&!i.ticks.find(t=>t.value===0)&&i.ticks.push({value:0,label:"0"})}var er={set:{name:"DEPRECATED SET ACTIONS",errs:[]},call:{name:"DEPRECATED FUNCTION CALLS",errs:[]},access:{name:"DEPRECATED INTERNAL ACCESSES",errs:[]}},sr=i=>{!1&&console.warn(i)},$d=!0;setTimeout(()=>{$d=!1,Object.values(er).forEach(i=>{sr(`${i.name}: ${i.errs.length} instances`),i.errs.forEach(t=>{sr(t)})})},7e3);function ir(i,t){if($d){let e=new Error(t);er[i].errs.find(s=>s.stack===e.stack)||er[i].errs.push(e)}else sr(t)}function Bf(i){let t=i.shadowRoot.querySelector(".graph");return{root:t,wrapper:t.querySelector(".graph-wrapper"),chartCanvas:t.querySelector("#chart_canvas"),baseAxis:t.querySelector(".graph-base-axis"),leftAxis:t.querySelector(".graph-left-axis"),rightAxis:t.querySelector(".graph-right-axis"),box:t.querySelector("#event_box"),plotBox:t.querySelector("#plot_box"),baseAxisBtnEl:t.querySelector(".base-axis-label"),leftAxisBtnEl:t.querySelector(".left-axis-label"),rightAxisBtnEl:t.querySelector(".right-axis-label")}}var es=class extends Qi{static get defaultConfig(){return{type:"line",options:{animation:!1,maintainAspectRatio:!1,responsive:!0,plugins:{legend:{display:!1},Filler:!1}}}}get categorical(){return this._categorical}set categorical(t){this._categorical=t;let e=this.getAxis("base");e.options.beginAtZero=this._categorical,e.options.type=this._categorical?"category":"linear"}get _scales(){return Object.fromEntries(this.axes.map(t=>[t.id,t.options]))}_axisOptions(){return[[this,"x",{display:!0,position:"bottom",name:"base",axis:"x",min:0,max:1,title:{display:!1,text:"x"},afterFit:tr,afterUpdate:()=>{let t=this.plot.data.datasets.filter(e=>e.type==="bar");for(let e of t){e.barThickness=void 0;let{min:s,max:n}=this.plot.scales.x;e.data.filter(({x:o})=>o>=s&&o<=n).length>this.plotAreaPxWidth/2&&(e.barThickness=2)}}}],[this,"yAxis1",{display:!0,position:"left",name:"left",axis:"y",min:0,max:1,title:{display:!1,text:"y"},afterFit:tr,afterUpdate:t=>{if(!this.graphGroup||!this.graphGroup.graphInstances||this.coreGraphEl.hidden)return;this._originalYAxisWidth=t.width;let e=this.graphGroup.graphInstances.filter(n=>n!==this&&n._originalYAxisWidth&&!n.coreGraphEl.hidden),s=e.map(n=>n._originalYAxisWidth);t.width=Math.max(t.width,...s),t.width!==this._priorYAxisWidth&&!this._artificalYAxisUpdate&&e.forEach(async n=>{clearTimeout(n._updateYAxisTimeout),n._artificalYAxisUpdate=!0,n._updateYAxisTimeout=setTimeout(()=>n.plot.update(),50)}),delete this._artificalYAxisUpdate,this._priorYAxisWidth=t.width}}],[this,"yAxis2",{grid:{drawTicks:!0,drawOnChartArea:!1},display:!1,position:"right",name:"right",axis:"y",min:0,max:1,title:{display:!1,text:"y"},afterFit:tr}]]}constructor(t){super();this.rawTracePairs=[],this.isInterpolating=!1,this.hideFits=!1,this.hideIntegrals=!1,this.hideTangents=!1,this.hidePeakIntegrals=!1,this._categorical=!1,this.drawOptions={bars:!1,lines:!0,points:!1,symbol:"circle"},this.el=Bf(t),this.coreGraphEl=t,this.graphGroup=this.coreGraphEl.parentNode.host.closest("#graph_group"),this.axes=this._axisOptions().map(s=>new Jo(...s)),this.axes.forEach(s=>{s.addEventListener("axis-range-updated",({detail:{min:n,max:a}})=>{this.dispatchEvent(new CustomEvent("axis-range-updated",{detail:{min:n,max:a,axis:s}}))})}),this.plot=new oe(this.el.chartCanvas,es.defaultConfig),this.update();let e={};Ns(this.coreGraphEl,s=>{let{currentTarget:n,detail:{state:a,x:o,y:r}}=s;if(this.coreGraphEl.disableAxisTranslate||n!==this.coreGraphEl)return;let l=()=>{let h=this.coreGraphEl.shadowRoot.querySelector("#chart_canvas").getBoundingClientRect();if(!(o>=h.left&&o<=h.right&&r>=h.top&&r<=h.bottom))return;e.started=!0,e.lastPoint={x:o,y:r},e.chartRect=this.el.chartCanvas.getBoundingClientRect(),e.axisY=this.getAxis("left"),e.axisX=this.getAxis("base");let u=o-e.chartRect.x,p=r-e.chartRect.y;e.axisX.overTicks(u)&&(e.movingY=!0,this.dispatchEvent(new CustomEvent("axis-moving-started"))),e.axisY.overTicks(p)&&(e.movingX=!0,this.dispatchEvent(new CustomEvent("axis-moving-started")))},c=()=>{!e.started||(e.movingX=!1,e.movingY=!1,this.setGestureRanges({gestureEnding:!0}),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("axis-moving-ended"))}))},d=()=>{if(!e.started)return;let h={gestureEnding:!1};if(e.movingX){let u=e.axisX.c2p(0)-e.axisX.c2p(e.lastPoint.x-o);h.base=e.axisX.translate(u,!1)}if(e.movingY){let u=e.axisY.c2p(0)-e.axisY.c2p(e.lastPoint.y-r);h.left=e.axisY.translate(u,!1)}this.setGestureRanges(h),e.lastPoint={x:o,y:r}};a==="start"&&l(),a==="end"&&c(),a==="moving"&&d()},this.coreGraphEl)}get plotBox(){let t=this.getAxis("left").rangePx,e=this.getAxis("base").rangePx;return{height:t.min-t.max,width:e.max-e.min}}get readOnly(){return this}get plotAreaPxWidth(){return this.plot.width}get plotAreaPxHeight(){return this.plot.height}get plotSize(){return{width:this.plot.chartArea.width,height:this.plot.chartArea.height}}get root(){return this.el.root}static _getPointSize(t,e,s){return e.includes(t)||s.some(({startIndex:n,endIndex:a})=>t>=n&&t<=a)?Dd/2:0}static _getSegmentBorderSize(t,e){return e.some(({startIndex:s,endIndex:n})=>t.p0DataIndex>=s&&t.p1DataIndex<=n)?Dd:void 0}getAxis(t){return this.axes.find(e=>e.options.name===t)}getAxisRange(t){return this.getAxis(t).range}getBaseRange(){return this.getAxisRange("base")}getLeftRange(){return this.getAxisRange("left")}getRightRange(){return this.getAxisRange("right")}getLeftColumnIds(){return this.coreGraphEl.getLeftTraces().map(t=>t.yColumn.id)}setAxisRange(t,{min:e,max:s}){!Number.isNaN(e)&&!Number.isNaN(s)&&(this.getAxis(t).setRange({min:e,max:s}),this.update())}setBaseRange(t,e){this.setAxisRange("base",{min:t,max:e})}setLeftRange(t,e){this.setAxisRange("left",{min:t,max:e})}setRightRange(t,e){this.setAxisRange("right",{min:t,max:e})}_pointConvertion({x:t,y:e},s){let n=this.getAxis("base"),a=this.getAxis("left");return{x:n[s](t),y:a[s](e)}}pointToCanvas(t){return this._pointConvertion(t,"p2c")}canvasToPoint(t){return this._pointConvertion(t,"c2p")}resize(){this.plot.resize(),this.update()}setRightAxisEnabled(t){this.getAxis("right").options.display=!!t,this.update()}setScalingModes(t){this.axes.filter(({name:e})=>t[e]).forEach(e=>{e.autoscaleMode=t[e.name]})}showBars(t){this.drawOptions.bars=t,this.getAxis("base").options.offset=t,this.coreGraphEl.updatePlotData()}showLines(t){this.drawOptions.lines=t,this.coreGraphEl.updatePlotData()}showPoints(t){this.drawOptions.points=t,this.coreGraphEl.updatePlotData()}_pointRadiusCalculation(t,e){if(!e)return 0;let{x:s,y:n}=e,{left:a,top:o,right:r,bottom:l}=this.plot.chartArea;return s<a||s>r||n<o||n>l||!(t?.drawOptions?.points??this.drawOptions.points)?0:t.pointSizeFactor?t.lineWeight*t.pointSizeFactor:t.lineWeight*1.5*this.coreGraphEl.accessibilityScale}async updateData(t,e){let{errorBars:s,traces:n,fitTraces:a,manualFitTraces:o,integralTraces:r,tangentTraces:l,peakIntegralTracesData:c}=t,d={},h=this.hideTangents?[]:l.flatMap(({axis:m,tangentLines:f})=>f.map(b=>({backgroundColor:"rgba(0,0,0,1)",borderColor:"rgba(0,0,0,1)",borderWidth:b.lineWidthFactor*this.coreGraphEl.accessibilityScale,data:$s(b.data),ignoreAutoscale:!0,pointRadius:0,showLine:!0,yAxisID:m==="right"?"yAxis2":"yAxis1"}))),u=m=>{let f=es.defaultConfig.type;return this.drawOptions.bars&&m.type!=="prediction"&&(f="bar"),this.drawOptions.bars&&m.hasErrorBars&&(f=$e.id),this.drawOptions.lines&&m.hasErrorBars&&(f=Le.id),this.drawOptions.points&&m.hasErrorBars&&(f=Be.id),f},p=m=>{let f=1.5,b=7,v=2,C=this.drawOptions.points?m.lineWeight*f*this.coreGraphEl.accessibilityScale+v:0,y=m.hasErrorBars?b:0;return Math.max(C,y)},g=[...h,...this.rawTracePairs.map(m=>({type:this.drawOptions.bars?"bar":es.defaultConfig.type,backgroundColor:m.color,borderColor:m.color,borderWidth:m.lineWeight,data:$s(m.points),ignoreAutoscale:!0,pointRadius:({element:f})=>this._pointRadiusCalculation(m,f),clip:m.lineWeight*m.pointSizeFactor+2,showLine:m?.drawOptions?.lines??this.drawOptions.lines,yaxisID:"yAxis1"})),...n.map((m,f)=>{let b=this.coreGraphEl.annotations.filter(x=>x.containsTargetColumn(m.yColumn.id)),v=b.filter(x=>x.type===be.POINT).map(x=>x.getPointIndexForColumn(m.yColumn.id)),C=b.filter(x=>x.type===be.RANGE).map(x=>x.getRangeIndexesForColumn(m.yColumn.id)),y=v.map(x=>m.getIndexOffsetFromSeries(x)),w=C.map(({startIndex:x,endIndex:_})=>({startIndex:m.getIndexOffsetFromSeries(x),endIndex:m.getIndexOffsetFromSeries(_)}));return{type:u(m,s[f].length),backgroundColor:m.fillPoint?m.color:null,borderColor:m.color,borderWidth:m.lineWeight*this.coreGraphEl.accessibilityScale,borderJoinStyle:"round",data:$s(m.seriesData).map((x,_)=>{let[S,A]=s[f][_];return S&&([x.xMin,x.xMax]=S),A&&([x.yMin,x.yMax]=A),x}),errorBarColor:this.coreGraphEl.colorMode==="dark"?"#ffffff":"#000000",errorBarWhiskerColor:this.coreGraphEl.colorMode==="dark"?"#ffffff":"#000000",errorBarWhiskerSize:13,errorBarLineWidth:2,errorBarWhiskerLineWidth:2,pointRadius:({element:x})=>this._pointRadiusCalculation(m,x),pointWithErrorBarRadius:({element:x})=>this._pointRadiusCalculation(m,x),clip:p(m),pointStyle:({dataIndex:x})=>{let _=es._getPointSize(x,y,w);if(typeof m.drawOptions?.symbol=="function"){if(!d[`${m.id}${_?"-highlight":""}`]){let S=m.lineWeight*5*this.coreGraphEl.accessibilityScale+_;d[`${m.id}${_?"-highlight":""}`]=m.drawOptions.symbol(S,m.color)}return d[`${m.id}${_?"-highlight":""}`]}return"circle"},showLine:m?.drawOptions?.lines??this.drawOptions.lines,yAxisID:m.axis==="right"?"yAxis2":"yAxis1",segment:{borderWidth:x=>es._getSegmentBorderSize(x,w)}}}),...this.hideFits?[]:a.map(m=>({backgroundColor:is(m.traceColor,"0.5"),borderColor:is(m.traceColor,"0.5"),borderWidth:this.coreGraphEl.defaultLineWeight*3*this.coreGraphEl.accessibilityScale,data:$s(m.dataPoints),ignoreAutoscale:!0,pointRadius:0,showLine:!0,yAxisID:m.axis==="right"?"yAxis2":"yAxis1"})),...this.hideFits?[]:o.map(m=>({backgroundColor:m.traceColor,borderColor:m.traceColor,data:$s(m.dataPoints),ignoreAutoscale:!0,pointRadius:0,showLine:!0,yAxisID:m.axis==="right"?"yAxis2":"yAxis1"})),...this.hideIntergrals?[]:r.map(m=>({backgroundColor:is(m.traceColor,"0.5"),borderColor:is(m.traceColor,"0.5"),borderWidth:0,data:$s(m.dataPoints),fill:"vst-integral",ignoreAutoscale:!0,pointRadius:0,showLine:!0,yAxisID:m.axis==="right"?"yAxis2":"yAxis1"})),...c.map(m=>({backgroundColor:is(m.traceColor,"0.5"),data:$s(m.peakSeriesData),fill:"vst-peak-integral",pointRadius:0,showLine:!1}))];e&&(this.coreGraphEl.scaleLargerToNewData||this.coreGraphEl.fitToNewData)&&this.autoscale(this.drawOptions.bars),this.plot.data={datasets:g},this.plot.options.scales=this._scales,this.drawOptions.bars&&(this.categorical?(this.plot.data.labels=n.map(m=>m.baseColumn.values).reduce((m,f)=>m.concat(f),[]).filter((m,f,b)=>b.indexOf(m)===f),this.setAxisRange("base",{min:0,max:this.plot.data.labels.length})):this.plot.data.labels=n.map(m=>m.seriesData.map(f=>f[0])).flat()),this.plot.update(),this.dispatchEvent(new CustomEvent("chart-data-updated")),this.dispatchEvent(new CustomEvent("data-values-updated",{composed:!0,bubbles:!0}))}autoscale(t){let e=this.coreGraphEl.fitToNewData?"to-fit":"larger",s=this.coreGraphEl.getAutoscaledRanges({autoscaleSize:e,autoscaleFromZero:t}),n=li(s,(a,o)=>`${o}Range`);this.coreGraphEl.dispatchEvent(new CustomEvent("automatic-autoscale",{detail:{rangeUpdates:n}}))}update(){let t=performance.now();this.plot.options.scales=this._scales,this.plot.update(),this.coreGraphEl._recalcBoxes(),this.dispatchEvent(new CustomEvent("graph-grid-updated")),this._lastUpdateDuration=performance.now()-t}setGestureRanges(t){let{gestureEnding:e}=t;["left","right","base"].forEach(n=>{let a=t[n];if(a){let{min:o,max:r}=a;this.getAxis(n).setRange({min:o,max:r},e)}}),this._throttleInterval||(this._throttleInterval=Df),this._lastUpdateDuration>this._throttleInterval&&(this._throttleInterval=this._lastUpdateDuration+$f,this._throttledUpdate?.cancel(),this._throttledUpdate=fe(this.update.bind(this),this._throttleInterval,{leading:!0})),this._throttledUpdate?this._throttledUpdate():this.update();let s=()=>{["left","right","base"].forEach(n=>{let a=this.getAxis(n);a?.setRange(a.getRange())}),this._lastUpdateDuration=null,this._throttleInterval=null,this._throttledUpdate?.cancel(),this._throttledUpdate=null,this._gestureCancelTimerId=null};this._gestureCancelTimerId&&clearTimeout(this._gestureCancelTimerId),this._gestureCancelTimerId=setTimeout(s.bind(this),Lf),e&&s()}};var ha=ja(Symbol("graph-options"));var Ld=rt`
  :host {
    --tick-width: 0px;
    /*  stylelint-disable length-zero-no-unit */
    --vertical-axis-width: 3.125rem;
    --label-size: 0.67em;
    --graph-tools-color: #000;
    display: flex;
    flex: 1;
    position: relative;
    background: var(--vst-color-bg-primary);
    width: 100%;
    height: 100%;
  }

  /*  GRAPH STYLES */
  .graph {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: var(--vst-color-bg-graph);
  }

  .graph-wrapper {
    background: var(--vst-color-bg-graph);
    display: flex;
    flex-direction: row;
    position: relative;
    flex: 1;
    justify-content: space-between;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: calc(100% - var(--vertical-axis-width) - var(--tick-width));
    position: relative;
  }

  #event_box,
  #base_axis_box,
  #left_axis_box,
  #right_axis_box {
    position: absolute;
  }

  :host(:not([right-axis-enabled])) #right_axis_box {
    display: none;
  }

  #event_box {
    display: flex;
    flex: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  #event_box > * {
    flex: 1;
    user-select: text;
  }

  #base_axis_box {
    right: 0;
    bottom: 0;
    cursor: ew-resize;
  }

  #left_axis_box {
    top: 0;
    left: 0;
    height: 100%;
    cursor: ns-resize;
  }

  #right_axis_box {
    top: 0;
    right: 0;
    height: 100%;
    cursor: ns-resize;
  }

  :host([axis-translate-disabled]) #base_axis_box {
    cursor: default;
  }

  :host([axis-translate-disabled]) #left_axis_box {
    cursor: default;
  }

  :host([axis-translate-disabled]) #right_axis_box {
    cursor: default;
  }

  /*  .graph-title, */
  .graph-left-axis,
  .graph-right-axis,
  .graph-base-axis {
    flex: 0 1 auto;
  }

  .graph-placeholder {
    position: relative;
    flex: 1;
    padding-block-start: 1em;
    max-width: calc(100% - 1em);
  }

  #chart_canvas {
    width: 100%;
    height: 100%;
  }

  .title:not([margin]) {
    width: inherit;
    text-align: center;
    margin: var(--vst-space-xs) 0 calc(-1 * var(--vst-space-xs)) 0;
    position: relative;
    z-index: 1;
    /*  this fixes it from getting cutoff for some reason */
  }

  .graph-axis-label-unset {
    color: #646464;
  }

  .graph-base-axis {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    /*  height: 40px; */
    width: 100%;
  }

  .graph-left-axis {
    position: relative;
    flex: 1;
    /*  if you remove this the y-axix alignment across all graphs will break :( */
    min-inline-size: var(--vertical-axis-width);
  }

  .graph-right-axis {
    position: relative;
    flex: 1;
    /*  if you remove this the y-axix alignment across all graphs will break :( */
    min-inline-size: var(--vertical-axis-width);
  }

  .left-axis-label-wrapper,
  .right-axis-label-wrapper {
    display: flex;
    justify-content: center;
    pointer-events: none;
    transform: rotate(-90deg);
    transform-origin: left;
    position: absolute;
    bottom: 1.125rem;
    left: 50%;
    text-align: center;
    margin: 0;
    z-index: calc(var(--vst-z-toolbar) - 1);
    width: 100%;
  }

  ${pi(rt`.base-axis-label,
  .left-axis-label,
  .right-axis-label`)}

  .base-axis-label,
  .left-axis-label,
  .right-axis-label {
    position: relative;
    pointer-events: auto;
    background: var(--vst-color-btn-graph-bg);
    border: 1px solid var(--vst-color-btn-graph-border);
    border-radius: var(--vst-radius);
    padding: var(--vst-space-xs) var(--vst-space-s);
    font-size: var(--label-size);
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-inline-size: 100%;
    color: var(--vst-color-fg-primary);
    margin: var(--vst-space-xs);
    z-index: var(--vst-z-toolbar);
    transition: all 0.3s;
    align-items: center;
    justify-content: center;
  }

  .base-axis-wrapper {
    position: relative;
  }

  .base-axis-label:hover,
  .left-axis-label:hover,
  .right-axis-label:hover,
  .base-axis-label:active,
  .left-axis-label:active,
  .right-axis-label:active {
    box-shadow: var(--vst-shadow-s);
    border-color: var(--vst-color-btn-graph-border-hover);
    background: var(--vst-color-btn-graph-bg-hover);
  }

  .base-axis-label[disabled],
  .left-axis-label[disabled],
  .right-axis-label[disabled] {
    border-color: transparent;
    box-shadow: none;
    cursor: default;
  }

  .left-axis-label,
  .right-axis-label {
    display: flex;
  }
  .left-axis-label__colname-color-wrapper,
  .right-axis-label__colname-color-wrapper {
    padding: 0 0.35em;
    overflow: hidden;
  }
  .left-axis-label__color-indicator-wrapper,
  .right-axis-label__color-indicator-wrapper {
    display: flex;
    flex: 1;
  }
  .left-axis-label__color-indicator,
  .right-axis-label__color-indicator {
    flex: 1;
    height: 0.125rem;
  }
  .left-axis-label__colname-wrapper,
  .right-axis-label__colname-wrapper {
    display: flex;
    justify-content: center;
  }
  .left-axis-label__colname,
  .right-axis-label__colname {
    overflow: hidden;
    text-overflow: clip;
  }
  .left-axis-label__colunits,
  .right-axis-label__colunits {
    margin-inline-start: 0.1875rem;
    flex-shrink: 0;
  }

  #plot_box {
    position: absolute;
    cursor: crosshair;
  }

  .rainbow-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    pointer-events: none;
  }

  .graph-actions {
    position: absolute;
    bottom: var(--vst-space-xs);
    left: var(--vst-space-xs);
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    grid-gap: var(--vst-space-xs);
    z-index: var(--vst-z-graph-tools-btn);
  }

  ${pi(rt`.graph-actions__btn`)}
  .graph-actions__btn {
    font-size: 1em;
    width: 2.25em;
    height: 2.25em;
    background: transparent;
    padding: 0;
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: var(--vst-radius);
    transition: var(--transition-default);
  }
  .graph-actions__btn:hover {
    border-color: var(--vst-color-bg-primary);
    box-shadow: var(--vst-shadow-xs);
  }
  .graph-actions__btn:hover icon-graph-tools {
    opacity: 1;
  }
  .graph-actions__btn:active {
    box-shadow: var(--vst-shadow-xs), var(--box-shadow-inset);
  }
  .btn[variant='graph'].graph-actions__btn--look-at-me {
    --icon-color: var(--vst-color-info);
    background-color: var(--vst-color-info-bg);
    border-color: var(--vst-color-info);
  }
  .btn[variant='graph'].graph-actions__btn--look-at-me:hover {
    transition: none;
    background-color: var(--vst-color-bg-secondary);
    border-color: var(--vst-color-info);
  }
  .btn[variant='graph'].graph-actions__btn--look-at-me:active {
    box-shadow: var(--box-shadow-inset);
  }
  .btn[variant='graph'].graph-actions__btn--look-at-me vst-ui-icon {
    opacity: 1;
  }
  .graph-actions ::slotted(.btn) {
    --btn-font-size: 1em;
    --btn-height: 2.25em;
    --btn-icon-side-length: 1.5rem;
    --btn-icon-margin-inline-start: calc((2.25em - 1.5rem) / 2);
  }
  .btn[variant='graph'] vst-ui-icon {
    margin: 0 auto;
    display: block;
    --vst-ui-icon-color: var(--icon-color, var(--vst-color-fg-primary));
  }

  /* ////////////////////////////// */
  /*  Overrides while downloading an image */
  /*  Hide all the graph actions buttons */
  :host(.download-image) {
    /*  hide the borders */
    /*  TODO: fix minigraph alignment issues on export. For now we hide it. */
  }
  :host(.download-image) .graph-actions__btn {
    display: none;
  }
  :host(.download-image) .left-axis-label,
  :host(.download-image) .right-axis-label,
  :host(.download-image) .base-axis-label {
    border: 0;
  }
  :host(.download-image) ::slotted([slot='mini_graph']) {
    display: none;
  }
  :host(.download-image) paper-tooltip {
    display: none;
  }

  /* ////////////////////////////// */
  /*  Mini Graph */
  /*  TODO: I'm not in love with this putting these styles here because they should probably be in mini-graph.css.js.  If we put it there, we need to use custom properties for each of these overrides. For now this keeps us from using ::shadow however. */
  :host(.mini-graph) {
    --vertical-axis-width: 1.5rem;
    background: var(--vst-color-bg-secondary);
    width: 12rem;
    height: 8.5rem;
    font-size: 0.8rem;
  }
  :host(.mini-graph) .graph-title {
    display: none;
  }
  :host(.mini-graph) .base-axis-label,
  :host(.mini-graph) .left-axis-label,
  :host(.mini-graph) .right-axis-label {
    padding: 0;
  }
  :host(.mini-graph) .graph-left-axis,
  :host(.mini-graph) .graph-right-axis {
    min-inline-size: 0;
    width: 1.125rem;
    flex: none;
  }
  :host(.mini-graph) .left-axis-label-wrapper,
  :host(.mini-graph) .right-axis-label-wrapper {
    height: auto;
    left: 0.75em;
    bottom: 1em;
  }

  ::slotted(vst-ui-draggable.legend) {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: var(--vst-z-graph-legend);
    border: 1px solid var(--vst-color-bg-primary);
    box-shadow: var(--vst-shadow-s);
  }
`;var Bd=i=>class extends i{constructor(){super(...arguments);this._handleDocumentClick=t=>{this.outsideClickCallbackFn(t)&&this.handleOutsideClick(t)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleDocumentClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick)}handleOutsideClick(){console.error("OutsideClickReceiver: `handleOutsideClick` must be overridden.")}outsideClickCallbackFn(t){return!t.composedPath().includes(this)}};var Od=rt`
  /*
    .menu-container is a two-column grid positioned such that the selection is
    at 50% width. When the right half extends past the parent element bounds,
    the intersection observer applies the .menu-container--left-attached class,
    which swaps the menu into the left half.
  */
  .menu-container {
    bottom: 0;
    display: none;
    grid-template-areas: 'left-side right-side';
    grid-template-columns: repeat(2, 1fr);
    left: var(--left);
    position: absolute;
    top: 0;
    transform: translate(-50%, 0%);
    width: max-content;
    z-index: calc(var(--vst-z-popover) - 1);
    align-items: start;
  }
  .menu {
    /* .menu starts on the right half, appearing right of the selection */
    grid-area: right-side;
    max-height: 100%;
    overflow-y: auto;
    pointer-events: all;
  }
  .menu-container--left-attached .menu {
    /* swap .menu to the other side, appearing inside the selection */
    grid-area: left-side;
  }
  #show-menu-button {
    background: none;
    border: none;
    left: var(--left);
    padding: 0.5rem;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
  }
  .menu,
  #show-menu-button {
    z-index: calc(var(--vst-z-popover) - 1);
  }

  ${ui("m",rt`
      .menu-container {
        display: grid;
      }
    `)}
`;var Fd=class extends Bd(ht){static get properties(){return{_hidden:{state:!0},_leftAttached:{state:!0}}}static get styles(){return[ut,js,Od]}constructor(){super();this._ignoreFirstOutsideClick=!0,this._attachmentObserver=null,this._graphContext=new xi(this,ha,void 0,!0)}disconnectedCallback(){super.disconnectedCallback();let t=this.shadowRoot.querySelector(".menu-container");this._attachmentObserver.unobserve(t)}firstUpdated(){this._setUpMenuIntersectionObserver()}_createMenuItem({disabled:t=!1,id:e,text:s}={}){return q`
      <li role="presentation">
        <button
          id="${e}-button"
          class="menu-item"
          ?disabled=${t}
          role="menuitem"
          @click=${n=>this._dispatchGraphToolsEvent(n,e)}
        >
          ${s}
        </button>
      </li>
    `}_dispatchGraphToolsEvent(t,e){this.dispatchEvent(new CustomEvent("graph-tools-item-clicked",{composed:!0,bubbles:!0,detail:{target:t.target,type:e}}))}_handleClose(){this._hidden=!0}_setUpMenuIntersectionObserver(){let t=this.shadowRoot.querySelector(".menu-container"),e=this.parentElement;this._attachmentObserver=new IntersectionObserver(s=>{let n=s.at(0);this._leftAttached=n.intersectionRatio<1&&n.boundingClientRect.left>n.rootBounds.left},{root:e,threshold:[0,1]}),this._attachmentObserver.observe(t)}handleOutsideClick(){this._ignoreFirstOutsideClick||this._handleClose(),this._ignoreFirstOutsideClick=!1}render(){let t={"menu-container--left-attached":this._leftAttached};return q`
      <div class="menu-container ${Ir(t)}" ?hidden=${this._hidden}>
        <ul id="menu" class="menu" role="menu">
          <li role="presentation">
            <button class="menu-item" role="menuitem" @click=${this._handleClose}>
              ${k("Close Menu")}
            </button>
          </li>
          ${ie(!this._graphContext.value?.hideStatistics,()=>this._createMenuItem({id:"statistics",disabled:this._graphContext.value?.disableStatistics,text:k("View Statistics")}))}
          ${ie(!this._graphContext.value?.hideIntegral,()=>this._createMenuItem({id:"integral",disabled:this._graphContext.value?.disableIntegral,text:k("View Integral")}))}
          ${ie(!this._graphContext.value?.hideCurveFit,()=>this._createMenuItem({id:"curve_fit",disabled:this._graphContext.value?.disableCurveFit,text:k("Apply Curve Fit")}))}
          ${ie(!this._graphContext.value?.hideFFT,()=>this._createMenuItem({id:"fft",disabled:this._graphContext.value?.disableFFT,text:k("Apply FFT")}))}
          ${ie(!this._graphContext.value?.hideHistogram,()=>this._createMenuItem({id:"histogram",disabled:this._graphContext.value?.disableHistogram,text:k("Apply Histogram")}))}
          ${ie(!this._graphContext.value?.hideStrikethrough,()=>this._createMenuItem({id:"strikethrough",disabled:this._graphContext.value?.disableStrikethrough,text:k("Strikethrough")}))}
          ${ie(!this._graphContext.value?.hideStrikethrough,()=>this._createMenuItem({id:"restore-all-data",disabled:this._graphContext.value?.disableRestoreAll,text:k("Restore All")}))}
          ${ie(!this._graphContext.value?.hideAddAnnotation,()=>this._createMenuItem({id:"annotation",disabled:this._graphContext.value?.disableAddAnnotation,text:k("Add Annotation")}))}
        </ul>
      </div>
      ${ie(this._hidden,()=>q`
          <button
            id="show-menu-button"
            type="button"
            aria-haspopup="menu"
            aria-controls="menu"
            @click=${()=>{this._hidden=!1}}
          >
            <vst-ui-icon
              .icon=${Pr}
              color="var(--vst-color-fg-primary)"
            ></vst-ui-icon>
            <span visually-hidden>${k("Show Menu")}</span>
          </button>
        `)}
    `}};customElements.define("vst-ui-graph-context-menu",Fd);var Ls=class extends Ce(as(ht)){static get observableProperties(){return{colorMode:Ws,authorized:ys}}static get properties(){return{_contextMenuLeft:{state:!0},accessibilityScale:{type:Number},activeAxis:{type:String},autoscalePadding:{type:Number},axisScalingModes:{type:Object},baseColumnId:{type:String},baseColumnLabel:{type:String},baseUnits:{type:String},containsCategorical:{type:Boolean},dataManager:{type:Object},defaultBottomAxisName:{type:String},defaultVerticalAxisName:{type:String},disableAxisLabelBtns:{type:Boolean},disableAxisTranslate:{type:Boolean},disableGraphTools:{type:Boolean},disableMenu:{type:Boolean},enableFft:{type:Boolean},enableHistogram:{type:Boolean},hidden:{type:Boolean},hideGraphActionBtns:{type:Boolean},interpolateEnabled:{type:Boolean},isConfiguratorView:{type:Boolean},isInFFTMode:{type:Boolean},isInHistogramMode:{type:Boolean},isSessionEmpty:{type:Boolean},isLegendDisabled:{type:Boolean},isLegendVisible:{type:Boolean,reflect:!0},isMiniGraphDisabled:{type:Boolean,reflect:!0},isMiniGraphVisible:{type:Boolean,reflect:!0},labelSize:{type:Number},leftColumnIds:{type:Array},leftColumnLabels:{type:Array},miniGraphSupported:{type:Boolean,reflect:!0},options:{type:Object},rawTracePairs:{type:Array},rightAxisEnabled:{type:Boolean,reflect:!0},rightColumnIds:{type:Array},rightColumnLabels:{type:Array},selectionsById:{type:Object},shouldTruncateLeftLabels:{type:Boolean},shouldTruncateRightLabels:{type:Boolean},splitSelectionsData:{type:Object},tangentEnabled:{type:Boolean},tempSelection:{type:Object},traces:{type:Array},udmId:{type:Number}}}constructor(){super();this._contextMenuLeft="0",this._deferredErrorBarColumnIds=new Set,this._fftProOnlyPopoverRef=Ve(),this._addGraphManualFitTracesPopoverRef=Ve(),this._graphOptionsContextProvider=new vi(this,ha),this._histogramProOnlyPopoverRef=Ve(),this._manualFitProOnlyPopoverRef=Ve(),this._restoreAllProOnlyPopoverRef=Ve(),this._strikethroughProOnlyPopoverRef=Ve(),this._throttleUpdate=fe(t=>{this._internalUpdate(t)},100),this.accessibilityScale=1,this.disableAxisTranslate=!1,this.disableAxisLabelBtns=!1,this.disableGraphTools=!1,this.disableMenu=!1,this.enableFft=!1,this.enableHistogram=!1,this.hideGraphActionBtns=!1,this.labelSize=.67,this.leftColumnIds=[],this.rightColumnIds=[],this.isLegendVisible=!1,this.isMiniGraphVisible=!1,this.isSessionEmpty=!0,this.miniGraphSupported=!1,this.isMiniGraphDisabled=!1,this.interpolateEnabled=!1,this.tangentEnabled=!1,this.tempSelection=!1,this.udmId=0,this.leftColumnLabels=[],this.rightColumnLabels=[],this.shouldTruncateLeftLabels=!1,this.shouldTruncateRightLabels=!1,this.pendingGraphUpdate={},this.pendingTracesUpdate=[],this.baseColumnGroup=null,this.baseColumn=null,this.autoscalePadding=.1,this.fitToNewData=!1,this.scaleLargerToNewData=!1,this.traces=[],this.defaultLineWeight=2,this.isInFFTMode=!1,this.isInHistogramMode=!1,this.containsCategorical=!1,this.isLegendDisabled=!1,this.isConfiguratorView=!1,this.fitTraces=[],this.integralTraces=[],this.manualFitTraces=[],this.tangentTraces=[],this.peakIntegralTracesData=[],this.getNextTraceColor=()=>"#000000",this._useResizeObserver=!1,"ResizeObserver"in window&&(this._useResizeObserver=!0),sn(this,{manualFits:Cr})}get _manualFitTargets(){return this.getLeftTraces().map(t=>({name:`${this.$dataWorld.getDataSets().find(s=>s.columnIds.includes(t.yColumn.id)&&s.columnIds.includes(t.baseColumn.id)).name}|${t.yColumn.name}`,trace:t}))}_deleteTempSelection(){this.tempSelection&&this.dispatchEvent(new CustomEvent("selection-deleted",{detail:this.tempSelection.id}))}_handleAddManualFitClicked(t){if(this.leftColumnIds.length>1)this._addGraphManualFitTracesPopoverRef.value.show();else{let[e]=this.getLeftTraces();e&&this.dispatchGraphToolsEvent(t,{type:"manual-fit",trace:e})}}_handleColumnGroupAdded(t){t.errorBarColumnId&&this._deferredErrorBarColumnIds.add(t.errorBarColumnId),t.on("error-bar-type-changed",this._handleErrorBarParametersChanged,this),t.on("error-bar-value-changed",this._handleErrorBarParametersChanged,this),t.on("error-bar-column-id-changed",({columnId:e})=>{e?this._deferredErrorBarColumnIds.add(e):this._deferredErrorBarColumnIds.delete(e),this._handleErrorBarParametersChanged()})}_handleErrorBarParametersChanged(){this.updatePlotData({allowSpecialAutoscale:!0})}_handleDataSetDeleted(t){let{detail:e}=t;gn.call(this,this.$dataWorld,{id:e.id,name:e.name})}static calculateErrorValue(t,e,s,n){let a;switch(e){case me.FIXED:{let o=Math.abs(parseFloat(s));if(Number.isNaN(o))break;a=[t-o,t+o];break}case me.PERCENTAGE:{let o=Math.abs(parseFloat(s));if(Number.isNaN(o))break;let r=Math.abs(t*o/100);a=[t-r,t+r];break}case me.COLUMN:{let o=Math.abs(n);a=[t-o,t+o];break}default:break}return a}get resized(){return new Promise(t=>{if(!this.resizing){t();return}this.addEventListener("core-graph-resize-finished",()=>{t()},{passive:!0,once:!0})})}_continueOrShowProOnlyMessage(t,e){if(this.authorized)return!0;switch(t){case"fft":this._fftProOnlyPopoverRef.value.for=e,this._fftProOnlyPopoverRef.value.show();break;case"histogram":this._histogramProOnlyPopoverRef.value.for=e,this._histogramProOnlyPopoverRef.value.show();break;case"restore-all-data":this._restoreAllProOnlyPopoverRef.value.for=e,this._restoreAllProOnlyPopoverRef.value.show();break;case"strikethrough":this._strikethroughProOnlyPopoverRef.value.for=e,this._strikethroughProOnlyPopoverRef.value.show();break;case"manual-fit":this._manualFitProOnlyPopoverRef.value.for=e,this._manualFitProOnlyPopoverRef.value.show();break;default:return!0}return!1}createRenderRoot(){let t=super.createRenderRoot();return t.addEventListener("graph-tools-item-clicked",e=>{this._continueOrShowProOnlyMessage(e.detail.type,e.detail.target)||e.stopPropagation()}),t}firstUpdated(){this.$dataWorld=this.requestService("dataWorld"),this.$sensorWorld=this.requestService("sensorWorld"),this.$dataCollection=this.requestService("dataCollection"),this.$popoverManager=this.requestService("popoverManager"),this._updateTraceList(),this.eventBinder=new le,this.defaultBottomAxisName=k("[ x-axis ]"),this.defaultVerticalAxisName=k("[ y-axis ]"),this.initGraph(),this.refreshBaseLabel(),this.refreshLeftLabel(),this.refreshRightLabel(),this.predictionsEl=this.querySelector("vst-core-graph-predictions"),this.miniGraphWrapper=this.querySelector("#graph_mini_wrapper"),this.graphToolsPopoverEl=this.shadowRoot.querySelector("#graph_tools_popover"),this.graphToolsBtnEl=this.shadowRoot.querySelector("#graph_tools_btn"),this.autoscaleBtnEl=this.shadowRoot.querySelector("#autoscale_btn"),this.chartCanvas=this.shadowRoot.querySelector("#chart_canvas"),this.leftAxisLabelWrapper=this.shadowRoot.querySelector(".left-axis-label-wrapper"),this.rightAxisLabelWrapper=this.shadowRoot.querySelector(".right-axis-label-wrapper"),this.leftAxisLabel=this.shadowRoot.querySelector(".left-axis-label"),this.rightAxisLabel=this.shadowRoot.querySelector(".right-axis-label");let t=this.querySelector("vst-core-graph-analysis"),e=this.querySelector("vst-sa-spectrum-analysis");if(this.leftPlotManagerPopoverEl=this.shadowRoot.querySelector("#graph_left_plot_manager_popover"),this.annotations=this.$dataWorld.annotations,this.analysisEl=t||e,this.hasCoreAnalysis=Boolean(t),this.analysisEl&&(this.analysisEl.coreGraphEl=this,this.analysisEl.graphInstance=this.graphInstance,this.analysisEl.graphId=this.id),this._graphInstance.resize(),this._useResizeObserver){let s=fe(this.resizeGraph.bind(this),30);this.resizeObserver=new ResizeObserver(()=>{s(),this.resizing=!0,clearTimeout(this._resizeFinished),this._resizeFinished=setTimeout(()=>{this.resizing=!1,this.dispatchEvent(new CustomEvent("core-graph-resize-finished",{detail:this,composed:!0,bubbles:!0}))},1e3)}),this.resizeObserver.observe(this);let n=fe(l=>{this.leftAxisLabelWidth=l[0].contentRect.width,this.shouldTruncateLeftLabels=this.leftAxisLabelWidth+40>=this.leftAxisLabelWrapperWidth,this.requestUpdate()},30),a=fe(l=>{this.rightAxisLabelWidth=l[0].contentRect.width,this.shouldTruncateRightLabels=this.rightAxisLabelWidth+40>=this.rightAxisLabelWrapperWidth,this.requestUpdate()},30),o=fe(l=>{this.leftAxisLabelWrapperWidth=l[0].contentRect.width},30),r=fe(l=>{this.rightAxisLabelWrapperWidth=l[0].contentRect.width},30);this._leftAxisLabelResizeObserver=new ResizeObserver(n),this._leftAxisLabelWrapperResizeObserver=new ResizeObserver(o),this._rightAxisLabelResizeObserver=new ResizeObserver(a),this._rightAxisLabelWrapperResizeObserver=new ResizeObserver(r),this._leftAxisLabelResizeObserver.observe(this.leftAxisLabel),this._leftAxisLabelWrapperResizeObserver.observe(this.leftAxisLabelWrapper),this._rightAxisLabelResizeObserver.observe(this.rightAxisLabel),this._rightAxisLabelWrapperResizeObserver.observe(this.rightAxisLabelWrapper)}this.eventBinder.bindListeners({source:this.$dataWorld,target:this,eventMap:{"column-added":"onColumnAdded","column-group-added":"_handleColumnGroupAdded","column-removed":"onColumnRemoved","column-group-unit-change-finished":"onColumnGroupUnitsChanged","column-strikethrough-changed":"onColumnStrikethroughChanged"}})}updated(t){t.forEach(async(e,s)=>{switch(s){case"accessibilityScale":this._accessibilityScaleChanged(this.accessibilityScale);break;case"containsCategorical":this.dispatchEvent(new CustomEvent("contains-categorical-changed",{detail:this.containsCategorical,bubbles:!0,composed:!0}));break;case"colorMode":this.updatePlotData();break;case"labelSize":this._labelSizeChanged(this.labelSize);break;case"rightAxisEnabled":this._rightAxisEnabledChanged(this.rightAxisEnabled);break;case"baseColumnId":this._baseColumnIdChanged(this.baseColumnId);break;case"leftColumnIds":this._leftColumnIdsChanged(this.leftColumnIds,e),this._labelSizeChanged(this.labelSize),this._updateTraceList(),this.adjustGraphForCategorical();break;case"rightColumnIds":this._rightColumnIdsChanged(this.rightColumnIds,e),this._labelSizeChanged(this.labelSize),this._updateTraceList(),this.adjustGraphForCategorical();break;case"options":this._optionsChanged(this.options,e);break;case"tempSelection":this._updateHighlightGraphTools(this.tempSelection);break;case"udmId":this._notifyUdmIdChanged(this.udmId);break;case"axisScalingModes":this._scalingModesChanged(this.axisScalingModes);break;case"hidden":this._hiddenChanged(this.hidden);break;case"selectionsById":this.tempSelection=Ls._computeTempSelection(this.selectionsById);break;case"rawTracePairs":this._rawTracePairsChanged(this.rawTracePairs),this._updateTraceList();break;case"splitSelectionsData":this.setSplitSelectionsData(this.splitSelectionsData);break;case"isLegendVisible":this._optionsChanged({legend:this.isLegendVisible},{legend:e});break;case"tangentEnabled":this._optionsChanged({tangent:this.tangentEnabled},{tangent:e});break;case"interpolateEnabled":this._optionsChanged({interpolate:this.interpolateEnabled},{interpolate:e});break;default:}})}disconnectedCallback(){this._useResizeObserver&&this.resizeObserver.unobserve(this),this.eventBinder.unbindAll()}_getTraceList(t=this.activeAxis){let{$dataWorld:e}=this,s=`${t}ColumnIds`,n=[...e.getDataSets().map(c=>({id:c.id,name:c.name,columnIds:c.columnIds}))],a=[...e.getColumns().filter(c=>c.group.id!==this?.getBaseColumn()?.group.id).map(c=>({id:c.id,name:c.name,units:c.units,setId:c.setId,groupId:c.groupId,color:Yr(c.color),symbol:c.symbol,deletable:c.deletable,range:c.range,plotted:this[s]?.includes(c.id)}))],o=[...e.getSpecialDataSets().filter(c=>c.type==="prediction").map(c=>({id:c.id,name:c.name,baseColumnId:c.columnIds[0],traceColId:c.columnIds[1],isActive:!!this.getTrace(c.columnIds[1],t)}))],r=[...e.getSpecialDataSets().filter(c=>c.type==="graph-match").map(c=>({id:c.id,name:c.name,baseColumnId:c.columnIds[0],traceColId:c.columnIds[1],isActive:!!this.getTrace(c.columnIds[1],t)}))];return{baseColumnGroup:this?.getBaseColumn()?.group,columns:a,graphMatches:r,predictions:o,dataSets:n}}_updateTraceList(){if(!this.$dataWorld)return;let{dataSets:t,columns:e,predictions:s,graphMatches:n}=this._getTraceList(this.activeAxis);this.plotManagerTraceList={dataSets:t,columns:e,predictions:s,graphMatches:n},this.requestUpdate()}initGraph(){this._graphInstance=new es(this),this._graphInstance.addEventListener("axis-range-updated",({detail:{min:t,max:e,axis:s}})=>{let n={};n[`${s.name}Range`]={min:t,max:e},this.updateOptions(n)}),this.dispatchEvent(new CustomEvent("graph-instance-created",{composed:!0,bubbles:!0,detail:this._graphInstance})),this.graphInstance=this._graphInstance.readOnly,this.shadowRoot.appendChild(this._graphInstance.root),this.gestures=new Ha(this._graphInstance.getAxis("base"),this._graphInstance.getAxis("left"),this._graphInstance.getAxis("right"),this,t=>{this._graphInstance.setGestureRanges(t)}),window.graphs=window.graphs||[],window.graphs.push(this._graphInstance)}graphToolsHandler(t){this.dispatchEvent(new CustomEvent("graph-tools-clicked",{detail:t}))}dispatchGraphToolsEvent(t,e,s=!1){this._continueOrShowProOnlyMessage(e.type,t?.target??{})&&(s||this.graphToolsPopoverEl.hide(),this.dispatchEvent(new CustomEvent("graph-tools-item-clicked",{detail:e})))}onAutoscaleButtonClick(){let{tempSelection:t}=this,e;if(t){let s={min:t.range.min,max:t.range.max};this._deleteTempSelection(),e={baseRange:s,leftRange:this.getAutoscaledLeftRange(s)}}else{let s=this.getAutoscaledRanges();e=li(s,(n,a)=>`${a}Range`)}this.updateUserAutoscale(e,!!t)}baseAxisClicked(t){let{$dataWorld:e,$popoverManager:s}=this,n=wr(e.getColumns(),d=>d.groupId),a=n.map(d=>d?.group.getNameUnits()),o=d=>{let h=n[d];this.setBaseColumnId(h.id),setTimeout(()=>{this.autoscale()})},r=[],l=this.getBaseColumn()?.group?.getNameUnits(),c;n.forEach((d,h)=>{l===a[h]&&(c=`${h}`),r.push({id:`${h}`,title:a[h],selectAction:()=>o(h)})}),n.length===0&&r.push({id:"0",title:k("No Columns"),disabled:"disabled"}),s.presentPopoverList({items:r,icons:!1,checkmarks:!0,active:c,anchor:t.target,orientation:"top"})}async _replaceDependentTraces(t){let{$dataWorld:e}=this;if(t.type==="calc"&&t.replaceDependent&&t.group.calcDependentGroups.length&&t.plotted){let s=t.group.calcDependentGroups.map(l=>e.getColumnGroupById(l)),n=this._getTraceList("left"),a=this._getTraceList("right"),o=[],r=[];s.forEach(l=>{l.columns.forEach(c=>{let d=n.columns.find(u=>u.id===c.id),h=a.columns.find(u=>u.id===c.id);d?.plotted&&o.push(c),h?.plotted&&r.push(c)})}),o.length&&(o.forEach(l=>this.updateRemoveColumn(l.id,"left")),this.updateAddColumn(t.id,"left")),r.length&&(o.forEach(l=>this.updateRemoveColumn(l.id,"right")),this.updateAddColumn(t.id,"right")),await this.updateComplete,await this.updateComplete,t.dataSet.type==="regular"&&t.values.length>0&&this.autoscale({autoscaleSize:"normal"})}}onColumnAdded(t){this._replaceDependentTraces(t),t.on("values-changed",()=>{this._deferredErrorBarColumnIds.has(t.group.id)&&this._handleErrorBarParametersChanged()})}onColumnRemoved(t){this.leftColumnIds.includes(t.id)&&this.updateRemoveColumn(t.id,"left"),this.rightColumnIds.includes(t.id)&&this.updateRemoveColumn(t.id,"right");let e=this.getTracesByBaseColId(t.id),s=this.getTracesByColId(t.id);if([...e,...s].forEach(({yColumn:n,axis:a})=>{this.removeTrace(n.id,a),this.autoscale()}),this?.baseColumnGroup?.id===t?.groupId&&t.group.columns.length===0&&this.removeBaseColumn(),t.id===this?.baseColumnId){let n=this.getBaseColumn();n&&this.setBaseColumnId(n.id)}t.group.errorBarColumnId&&(this._deferredErrorBarColumnIds.delete(t.group.errorBarColumnId),this._handleErrorBarParametersChanged())}onColumnGroupUnitsChanged(t){let{$dataWorld:e}=this,s=this._getTraceList("left").columns.filter(a=>a.plotted),n=this._getTraceList("right").columns.filter(a=>a.plotted);if(this?.baseColumn?.groupId===t.id){this.dispatchEvent(new CustomEvent("base-units-updated",{detail:t.units}));return}if(s.find(a=>a.groupId===t.id))if(!e.isCurrentDataSetEmpty()&&this.baseColumn)this.autoscale({axes:["base","left"]});else{let{min:a,max:o}=tn(s);this.updateOptions({leftRange:{min:a,max:o}})}if(n.find(a=>a.groupId===t.id))if(!e.isCurrentDataSetEmpty()&&this.baseColumn)this.autoscale({axes:["base","right"]});else{let{min:a,max:o}=tn(n);this.updateOptions({rightRange:{min:a,max:o}})}}onColumnStrikethroughChanged(){this.requestUpdate()}async plotManagerColumnSelected({detail:{columnId:t}}){let e=this.activeAxis==="right"?"left":"right";this.updateAddColumn(t),this.updateRemoveColumn(t,e),await this.updateComplete,await this.updateComplete,this._updateVerticalRange()}containsActiveCategoricalTraces(){return this._getTraceList(this.activeAxis).columns.filter(t=>t?.plotted).map(t=>this.getBaseColumn(t?.setId)).some(t=>t?.dataType===Ma.TEXT)}adjustGraphForCategorical(t=[]){if(this.isInHistogramMode||this.isInFFTMode)return;let e=this.containsActiveCategoricalTraces()||t.some(s=>s.baseColumn?.dataType===Ma.TEXT);this.containsCategorical=e,this.graphInstance.categorical=e,e&&this.updateOptions({appearance:{bars:!0,lines:!1,points:!1}})}async plotManagerColumnDeselected({detail:{columnId:t}}){this.updateRemoveColumn(t),await this.updateComplete,await this.updateComplete,this._updateVerticalRange()}plotManagerColumnDeleted({detail:t}){pn.bind(this,this.$dataWorld,this.$dataWorld.getColumnGroupById(t))()}async plotManagerColumnTraceUpdated({detail:{columnId:t,color:e,symbol:s}}){await this.$dataWorld.updateColumnAppearance(t,e,s)}plotManagerSpecialDatasetSelected(t){let{columnId:e,type:s}=t.detail,n=()=>({axes:this.$dataWorld.isCollecting?[this.activeAxis]:["base",this.activeAxis]});this.addTrace(e),s==="prediction"&&this.autoscale(n())}plotManagerSpecialDatasetDeselected(t){let{columnId:e}=t.detail;this.removeTrace(e)}async plotManagerShowDataSetOptions(t){let{$dataWorld:e,$popoverManager:s}=this,{item:n}=t.detail,{name:a}=e.getDataSetByID(n.id);await import("./vst-core-rename-HNBIUZL5.js"),s.presentDialog("vst-core-rename",{title:k("Rename Data Set","general","Dialog title"),properties:{name:a,nameDescription:k("Data Set Name"),nameMaxLength:100,nameMaxLengthError:Vt(k("Data set name has %s character limit."),String(100))},events:({component:o,completeWorkflow:r,cancelWorkflow:l})=>({save:()=>{e.updateDataSet(n.id,{name:o.name}),r()},cancel:()=>{l()}})})}plotManagerShowPredictionOptions(t){let{$dataWorld:e,$popoverManager:s}=this,{item:n,anchor:a}=t.detail,o=async()=>{await import("./vst-core-rename-HNBIUZL5.js"),s.presentDialog("vst-core-rename",{title:k("Rename Prediction"),properties:{name:n.name,nameDescription:k("Prediction Name"),nameMaxLength:100,nameMaxLengthError:Vt(k("Prediction name has %s character limit."),String(100))},events:({component:r,completeWorkflow:l,cancelWorkflow:c})=>({save:()=>{e.updateDataSet(n.id,{name:r.name}),l()},cancel:()=>{c()}})})};s.presentPopoverList({anchor:a,orientation:"right",items:[{id:"rename_prediction",title:k("Rename Prediction"),selectAction:o},{id:"delete_data_set",title:k("Delete Prediction"),selectAction(){return e.removeDataSet(n.id).catch(r=>console.error(r))}}]})}plotManagerShowGraphMatchOptions(t){let{$dataWorld:e,$popoverManager:s}=this,{item:n,anchor:a}=t.detail;s.presentPopoverList({anchor:a,orientation:"right",items:[{id:"delete_data_set",title:k("Delete Graph Match"),selectAction(){return e.removeDataSet(n.id).catch(o=>console.error(o))}}]})}_togglePlotManagerPopover(t){import("./vst-core-graph-plot-manager-SDO6HFPO.js"),t==="left"&&this.shadowRoot.querySelector("#graph_left_plot_manager_popover").show(),t==="right"&&this.shadowRoot.querySelector("#graph_right_plot_manager_popover").show(),this.activeAxis=t,this._updateTraceList(),this.requestUpdate()}_updateVerticalRange(t=this.activeAxis){let{$dataWorld:e}=this,s=this._getTraceList(t).columns.filter(a=>a.plotted),n=()=>({axes:e.isCollecting?[t]:["base",t]});if(e.isCurrentDataSetEmpty()&&s.length){let{min:a,max:o}=tn(s);this.updateOptions({leftRange:{min:a,max:o}})}else s.length&&this.autoscale(n())}_onInterpolateSwitchChanged({detail:t}){this?.analysisEl?.fireExamineSettingsUpdate({interpolate:t,tangentEnabled:!1}),t||this?.analysisEl?.fireExaminePositionUpdate({xPosition:this.analysisEl?.examinePin?.examinePosition?.closestXPt})}_onTangentSwitchChanged({detail:t}){this?.analysisEl?.fireExamineSettingsUpdate({interpolate:!1,tangentEnabled:t})}getClosestX(t){return this.analysisEl.getClosestX(t)}_labelSizeChanged(t=this.labelSize){if(this.leftAxisLabel&&this._graphInstance){this.style.setProperty("--label-size",`${t}em`);let e=this.leftAxisLabel.clientHeight+18;this.style.setProperty("--vertical-axis-width",`${e}px`),this.resizeGraph()}}_calculateContextMenuLeft(){if(this.tempSelection?.range){let{max:t,min:e}=this.tempSelection.range,s=Math.max(t,e);return this.graphInstance.getAxis("base").p2c(s)}return 0}resizeGraph(){this._graphInstance&&(this._graphInstance.resize(),this.dispatchEvent(new CustomEvent("resize"))),this._contextMenuLeft=this._calculateContextMenuLeft()}static _computeTempSelection(t={}){return Object.values(t).find(e=>!e.permanent)}_generateErrorBars(t){let{errorBarType:e,errorBarValue:s,errorBarColumnId:n}=t.baseColumn.group,{errorBarType:a,errorBarValue:o,errorBarColumnId:r}=t.yColumn.group,l=[],c=[];return e===me.COLUMN&&n&&(l=this.$dataWorld.getColumnGroupById(n).columns.find(d=>d.setId===t.baseColumn.setId).values),a===me.COLUMN&&r&&(c=this.$dataWorld.getColumnGroupById(r).columns.find(d=>d.setId===t.yColumn.setId).values),t.seriesData.map((d,h)=>{let[u,p]=d,g=Ls.calculateErrorValue(u,e,s,l[h]),m=Ls.calculateErrorValue(p,a,o,c[h]);return[g,m]})}_updateHighlightGraphTools(t){if(this._contextMenuLeft=this._calculateContextMenuLeft(),this.autoscaleBtnEl){let e=this.autoscaleBtnEl.querySelector("vst-ui-icon"),s=this.shadowRoot.querySelector('#autoscale_btn_container [role="tooltip"]');t?(this.autoscaleBtnEl.classList.add("graph-actions__btn--look-at-me"),s.innerText=k("Zoom to Selection"),e.icon=Mr):(this.autoscaleBtnEl.classList.remove("graph-actions__btn--look-at-me"),s.innerText=k("Zoom to all Data"),e.icon=Pa)}}_notifyUdmIdChanged(t){t!==0&&this.dispatchEvent(new CustomEvent("udm-id-set",{detail:t}))}updateOptions(t,e=Se.USER){this.dispatchEvent(new CustomEvent("options-change",{detail:wt(tt({},t),{actor:e})}))}_accessibilityScaleChanged(){this._graphInstance&&(this.updatePlotData(),this.resizeGraph())}_scalingModesChanged(t,e){if(this._graphInstance&&!_e(t,e)){this._graphInstance.setScalingModes(t);let s={};["base","left","right"].forEach(n=>{t[n]&&(s[`${n}ScalingMode`]=t[n])}),Object.keys(s).length!==0&&this.updateUdm(s)}}_rightAxisEnabledChanged(t){t&&(this.rightPlotManagerPopoverEl=this.shadowRoot.querySelector("#graph_right_plot_manager_popover")),this._graphInstance&&(this._graphInstance.setRightAxisEnabled(t),this.resizeGraph()),this.updateUdm({rightAxisEnabled:t})}async _hiddenChanged(t){!this._graphInstance||(await this.updateComplete,t||(this._labelSizeChanged(),await nl(),this.updatePlotData()))}_optionsChanged(t={},e={}){if(!!this._graphInstance){if(this._contextMenuLeft=this._calculateContextMenuLeft(),this.updateUdm(t),(!e.title&&t.title||e.title&&!t.title)&&this.resizeGraph(),!_e(t.appearance,e.appearance)){let{lines:s,points:n,bars:a}=t.appearance;this._graphInstance.showBars(a),this._graphInstance.showLines(s),this._graphInstance.showPoints(n),this.updateUdm({lines:s,points:n,bars:a}),t.appearance?.bars!==e.appearance?.bars&&this.autoscale()}if(!_e(t.baseRange,e.baseRange)){let{baseRange:s}=t,n=this._graphInstance.getAxis("base").getRange(),a=o=>Number.isFinite(o)||typeof o=="string";s.min=a(s.min)?s.min:n.min,s.max=a(s.max)?s.max:n.max,this._graphInstance.setBaseRange(s.min,s.max),this.updateUdm({xMin:s.min,xMax:s.max}),this._graphInstance.addEventListener("graph-grid-updated",()=>{this.traces.forEach(o=>o.trimAllSeriesData())},{once:!0}),this._graphInstance.addEventListener("axis-moving-started",()=>{let o=this.querySelector("vst-core-graph-analysis");o&&(o.axisMoving=!0),this.dispatchEvent(new CustomEvent("axis-moving-started"))}),this._graphInstance.addEventListener("axis-moving-ended",()=>{let o=this.querySelector("vst-core-graph-analysis");o&&(o.axisMoving=!1)})}if(!_e(t.leftRange,e.leftRange)){let{leftRange:s}=t,n=this._graphInstance.getAxis("left").getRange();s.min=Number.isFinite(s.min)?s.min:n.min,s.max=Number.isFinite(s.max)?s.max:n.max,this._graphInstance.setLeftRange(s.min,s.max),this.updateUdm({yMin:s.min,yMax:s.max})}if(!_e(t.rightRange,e.rightRange)){let{rightRange:s}=t,n=this._graphInstance.getAxis("right").getRange();s.min=Number.isFinite(s.min)?s.min:n.min,s.max=Number.isFinite(s.max)?s.max:n.max,this._graphInstance.setRightRange(s.min,s.max),this.updateUdm({rightYMin:s.min,rightYMax:s.max})}t.labelSize!==e.labelSize&&(this.labelSize=parseFloat(t.labelSize),this.resizeGraph())}}_rawTracePairsChanged(t){this._graphInstance.rawTracePairs=t,this.updatePlotData()}_leftColumnIdsChanged(t=[],e=[]){!this.graphInstance||(e.forEach(s=>{t.includes(s)||this.removeTrace(s,"left")}),t.forEach(s=>{e.includes(s)||this.addTrace(s,"left")}),Array.isArray(t)&&this.refreshVerticalAxisLabel("left"),this.dispatchEvent(new CustomEvent("regular-traces-updated")))}_rightColumnIdsChanged(t=[],e=[]){!this.graphInstance||(e.forEach(s=>{t.includes(s)||this.removeTrace(s,"right")}),t.forEach(s=>{e.includes(s)||this.addTrace(s,"right")}),Array.isArray(t)&&this.refreshVerticalAxisLabel("right"),this.dispatchEvent(new CustomEvent("regular-traces-updated")))}setGetTraceColor(t){this.getNextTraceColor=t}addTrace(t,e="left"){let{$dataWorld:s}=this,n=s.getColumnById(t),a=s.getDataSetByID(n?.setId),o=this.getBaseColumn(a?.id);if(!o&&a){let h=a.columnIds[0];o=s.getColumnById(h)}if(!n||!o){console.warn(`Unable to add trace for columnId=${t}`);return}let r=null,l="rgba(120,120,120,0.7)",c="circle",d=6;if(!this.baseColumn){console.warn(`attempting to add trace ${t} before base column set!`);return}if(!this.getTrace(t,e)){let h=n.group;["regular","fft","histogram"].includes(a.type)&&(n.color?l=n.color:(l=Pl(n,this,s,this.getNextTraceColor.bind(this)),n.color=l),n.symbol&&(c=n.symbol),d=this.defaultLineWeight*this.accessibilityScale),r=new os(this._graphInstance,{type:a.type,yColumn:n,baseColumn:o,axis:e,color:l,lineWeight:d,symbol:c,experimentId:s.experimentId}),this.traces=[...this.traces,r],r.bindAll(),r.on("data-points-updated",()=>this.updatePlotData({allowSpecialAutoscale:!0})),r.on("point-symbols-updated",()=>this.updatePlotData()),r.on("base-column-data-type-updated",()=>{this.adjustGraphForCategorical()});let u=e==="left"?this.refreshLeftLabel:this.refreshRightLabel;if(["name","units","wavelength"].forEach(p=>{h.on(`${p}-changed`,u,this)}),n.on("color-changed",p=>{let g=this.getTrace(n.id,e);g&&(g.color=p,this.refreshVerticalAxisLabel(e),this.updatePlotData())}),r.type==="prediction"&&a.on("name-changed",u,this),this.udmId===0)this.pendingTracesUpdate.push(r);else{let p=r.getBaseColumn(),g;p?g=p.id:([g]=a.columnIds,console.assert(g!==t));let m=[{baseColumnId:parseInt(g),traceColumnId:parseInt(t),isRightAxisTrace:e==="right",experimentId:r.experimentId}];!s.importing&&!s.sessionClosing&&s.addGraphTraces(this.udmId,m).catch(f=>{console.warn(f)})}return u.bind(this)(),this.updatePlotData(),r}}removeTrace(t,e="left"){let s=this.getTrace(t,e);if(s){this.traces=this.traces.filter(a=>a.id!==s.id||a.axis!==e),s.off("data-points-updated"),s.off("point-symbols-updated"),s.off("base-column-data-type-updated");let n=e==="left"?this.refreshLeftLabel:this.refreshRightLabel;if(["name","units","wavelength"].forEach(a=>{s.yColumn.group?.off(`${a}-changed`,n,this)}),n.bind(this)(),s.unbindAll(),this.updatePlotData({allowSpecialAutoscale:!0}),this.udmId===0){let a=this.pendingTracesUpdate.indexOf(s);a!==-1&&(this.pendingTracesUpdate[a]=null)}else if(s.getBaseColumn()){let a=[{baseColumnId:parseInt(s.getBaseColumn().id),traceColumnId:parseInt(t),isRightAxisTrace:e==="right",experimentId:s.experimentId}];this.$dataWorld.removeGraphTraces(this.udmId,a)}}}removeRegularTraces(){this.traces.filter(e=>e.type==="regular").forEach(e=>this.removeTrace(e.yColumn.id,e.axis))}removeTracesByType(t){this.traces.filter(s=>s.type===t).forEach(s=>this.removeTrace(s.yColumn.id,s.axis))}getAllRegularTraces(){return this.traces.filter(t=>t.type==="regular")}getLeftTraces(){return this.traces.filter(t=>t.axis==="left"&&t.type==="regular")}getTrace(t,e=this.activeAxis){return this.traces.find(s=>s.yColumn.id===`${t}`&&s.axis===e)}getTracesByColId(t){return this.traces.filter(e=>e.yColumn.id===`${t}`)}getTracesByBaseColId(t,e=this.activeAxis){return this.traces.filter(s=>s.baseColumn.id===`${t}`&&s.axis===e)}getTraceByTraceId(t){return this.traces.find(e=>e.id===t)}getTracesByType(t){return this.traces.filter(e=>e.type===t)}getAnalysisTraces(){let{rightAxisEnabled:t}=this;return this.traces.filter(e=>["regular","fft","histogram"].includes(e.type)&&(e.axis==="left"||t))}setBaseColumnId(t){this.dispatchEvent(new CustomEvent("graph-base-column-id-update",{detail:{baseColumnId:t}}))}updateAddColumn(t,e=this.activeAxis){this.dispatchEvent(new CustomEvent("axis-column-id-added",{detail:{columnId:t,axis:e}}))}updateRemoveColumn(t,e=this.activeAxis){this.dispatchEvent(new CustomEvent("axis-column-id-removed",{detail:{columnId:t,axis:e}}))}updateColumnIds(t=[],e=this.activeAxis){this.dispatchEvent(new CustomEvent("axis-column-ids-updated",{detail:{columnIds:t,axis:e}}))}updateScalingMode({detail:t}){this.dispatchEvent(new CustomEvent("axis-scaling-mode-changed",{detail:t}))}updateAutomaticAutoscale(t){this.dispatchEvent(new CustomEvent("automatic-autoscale",{detail:{rangeUpdates:t}}))}updateUserAutoscale(t,e){this.dispatchEvent(new CustomEvent("user-requested-autoscale",{detail:{rangeUpdates:t,isZoomToSelectionRange:e}}))}updateRightAxisEnabled(t){this.dispatchEvent(new CustomEvent("right-axis-enabled-update",{detail:t}))}get selections(){let t=[];return this.analysisEl?[t]=this.analysisEl:console.warn("vst-core-graph-analysis not found"),t}get hasTrace(){return Boolean(this.getAllRegularTraces().length)}get manualFits(){return this.$dataWorld?.manualFits.filter(t=>t.graphId===this.udmId)||[]}getBaseRange(){return this._graphInstance.getAxisRange("base")}getBaseIndexRange(){return this._graphInstance.getAxis("base").indexRange}getLeftRange(){return this._graphInstance.getAxisRange("left")}getLeftColumnIds(){return this._graphInstance?this._graphInstance.getLeftColumnIds():[]}setSelectionsData(t){let e=Object.values(t).filter(c=>c.analysisType==="curveFits"),s=Object.values(t).filter(c=>c.analysisType==="manual-fits"),n=Object.values(t).filter(c=>c.analysisType==="integrals"),a=e.reduce((c,d)=>[...c,...d.traceDataSets],[]),o=s.reduce((c,d)=>[...c,...d.traceDataSets],[]),r=n.reduce((c,d)=>[...c,...d.traceDataSets],[]);(this.fitTraces.length||this.integralTraces.length||this.manualFitTraces.length||a.length||r.length||o.length)&&(this.fitTraces=a,this.manualFitTraces=o,this.integralTraces=r,this.updatePlotData())}setSplitSelectionsData(t){this.peakIntegralTracesData=[...Object.values(t).map(({peakSeriesData:e,traceInfo:s})=>({peakSeriesData:e,traceColor:s.color,traceAxis:s.axis}))],this.updatePlotData()}addTangentTrace(t){this.tangentTraces.push(t)}removeAllTangentTraces(){this.tangentTraces.length&&(this.tangentTraces=[],this.updatePlotData())}_internalUpdate(t=!1){let e=a=>a.axis!=="right"||this.rightAxisEnabled,s=this.traces.filter(e);this.adjustGraphForCategorical(s);let n={errorBars:s.map(a=>this._generateErrorBars(a)),traces:s,fitTraces:this.fitTraces,manualFitTraces:this.manualFitTraces,integralTraces:this.integralTraces,tangentTraces:this.tangentTraces,peakIntegralTracesData:this.peakIntegralTracesData};this._graphInstance.updateData(n,t)}updatePlotData({allowSpecialAutoscale:t=!1}={}){this._throttleUpdate(t)}updateUdm(t){let{$dataWorld:e}=this;this.udmId===0?this.pendingGraphUpdate=tt(tt({},this.pendingGraphUpdate),t):e.changeGraphProperties(this.udmId,t)}async addGraphToUdm(){let{$dataWorld:t}=this,e=this.graphInstance.getAxisRange("base"),s=this.graphInstance.getAxisRange("left"),n={};n.visible=!this.parentNode.host.hidden,n.xMin=e.min,n.xMax=e.max,n.yMin=s.min,n.yMax=s.max,{bars:n.bars,lines:n.lines,points:n.points}=this.options.appearance,n.title=this.options.title;let{graphId:a}=await t.addGraph(n);this.udmId=a,this.$dataWorld.registerGraphId(this.id,this.udmId);let[,o]=this.id.split("_");if(await t.changeGraphProperties(this.udmId,wt(tt({},this.pendingGraphUpdate),{index:parseInt(o)})),this.pendingGraphUpdate={},this.pendingTracesUpdate.length>0){let r=[];if(this.pendingTracesUpdate.forEach(l=>{l!==null&&r.push({baseColumnId:parseInt(this.baseColumnId),traceColumnId:parseInt(l.yColumn.id),isRightAxisTrace:l.axis==="right",experimentId:t.session.experimentId})}),this.pendingTracesUpdate=[],r.length>0)try{t.addGraphTraces(this.udmId,r)}catch(l){console.warn(l)}}}applyImportedGraphState(t){this.udmId=t.graphId,this.$dataWorld.registerGraphId(this.id,this.udmId),t.curveFits&&t.curveFits.length>0&&(t.traces=t.traces.filter(p=>!t.curveFits.find(g=>g.fitId===p.traceColumnId))),t.baseColumnId&&this.setBaseColumnId(`${t.baseColumnId}`);let e={};e.appearance={lines:t.lines,points:t.points,bars:t.bars};let{min:s,max:n}=this._graphInstance.getBaseRange();(s!==t.xMin||n!==t.xMax)&&(e.baseRange={min:t.xMin,max:t.xMax});let a=this._graphInstance.getLeftRange(),o=a.min,r=a.max;(o!==t.yMin||r!==t.yMax)&&(e.leftRange={min:t.yMin,max:t.yMax}),t.title&&(e.title=t.title);let{min:l,max:c}=this._graphInstance.getRightRange();(l!==t.rightYMin||c!==t.rightYMax)&&(e.rightRange={min:t.rightYMin,max:t.rightYMax}),this.updateOptions(e,Se.AUTOMATIC),this.updateRightAxisEnabled(!!t.rightAxisEnabled);let d=this._graphInstance.getAxis("base").autoscaleMode,h=this._graphInstance.getAxis("left").autoscaleMode,u=this._graphInstance.getAxis("right").autoscaleMode;if((d!==t.baseScalingMode||h!==t.leftScalingMode||u!==t.rightScalingMode)&&this.updateScalingMode({detail:{base:t.baseScalingMode,left:t.leftScalingMode,right:t.rightScalingMode}}),["left","right"].forEach(p=>this.updateColumnIds([],p)),t.traces){let p={left:[],right:[]};t.traces.forEach(async g=>{let{$dataWorld:m}=this,f=g.isRightAxisTrace?"right":"left",b=`${g.traceColumnId}`,v=`${g.baseColumnId}`,C=m.getColumnById(v),y=m.getDataSetByID(C.setId);if(y.type==="regular"){let w=m.getColumnById(b);w&&p[f].push(w.id)}else if(y.type==="prediction"||y.type==="graph-match"){let{parentNode:w={}}=this,{updateComplete:x}=w.host||{};await(x||Promise.resolve()),await this.updateComplete,this.addTrace(y.columnIds[1],f)}}),["left","right"].forEach(g=>{let m=p[g];m.length&&this.updateColumnIds([...new Set(m)],g)})}if(t.annotations){if(!this.hasCoreAnalysis)throw new Error("vst-core-analysis not enabled");t.annotations.forEach(p=>{this.analysisEl.importAnnotation(p)})}t.legend&&(this.isLegendVisible=t.legend,this.dispatchGraphToolsEvent(null,{type:"graph_legend",checked:t.legend},!0)),t.tangent&&(this.tangentEnabled=t.tangent,this?.analysisEl?.fireExamineSettingsUpdate({interpolate:!1,tangentEnabled:t.tangent})),t.interpolate&&!this.tangentEnabled&&(this.interpolateEnabled=t.interpolate,this?.analysisEl?.fireExamineSettingsUpdate({interpolate:t.interpolate,tangentEnabled:!1})),this.dispatchEvent(new CustomEvent("graph-entity-options-update",{detail:{options:t,entity:this._graphInstance}}))}_baseColumnIdChanged(t){if(!!this.graphInstance&&(this.analysisEl&&(!this.baseColumnGroup||!this.baseColumnGroup.columns.map(e=>e.id).includes(t))&&this.dispatchEvent(new CustomEvent("obsolete-analysis")),!this.baseColumn||this.baseColumn.id!==t)){let e=this.$dataWorld.getColumnById(t);if(!e)this.removeBaseColumn();else{let s=e.group;this.baseColumnGroup=s,this.baseColumn=e,s.columns.forEach(n=>{this.leftColumnIds.includes(n.id)&&this.updateRemoveColumn(n.id,"left"),this.rightColumnIds.includes(n.id)&&this.updateRemoveColumn(n.id,"right")}),this.refreshBaseLabel(),this.updatePlotData({allowSpecialAutoscale:!0}),["name","units"].forEach(n=>{s.on(`${n}-changed`,()=>{this.refreshBaseLabel()})}),this.updateUdm({baseColumnId:t})}this.removeRegularTraces(),this.leftColumnIds.forEach(s=>this.addTrace(s,"left")),this.rightColumnIds.forEach(s=>this.addTrace(s,"right")),this.dispatchEvent(new CustomEvent("regular-traces-updated"))}}removeBaseColumn(){this.removeRegularTraces(),this.baseColumnGroup=null,this.baseColumn=null,this.refreshBaseLabel(),this.updatePlotData({allowSpecialAutoscale:!0})}getBaseColumn(t){let{$dataWorld:e}=this,s=t;if(!this.baseColumnGroup||!e.getDataSets||!e.getColumnForGroupAndSet)return null;if(t==null){let n=e.getDataSets(),a=n[n.length-1];s=a?a.id:null}return e.getColumnForGroupAndSet(this.baseColumnGroup.id,s)}refreshBaseLabel(){let t=null;this.baseColumnGroup?t=this.baseColumnGroup.getNameUnits():t=this.defaultBottomAxisName,this.baseColumnLabel=t}refreshLeftLabel(){this.refreshVerticalAxisLabel("left")}refreshRightLabel(){this.refreshVerticalAxisLabel("right")}refreshVerticalAxisLabel(t){let e=this.generateVerticalAxisLabelItems(t,this.defaultVerticalAxisName);t==="left"?this.leftColumnLabels=e:t==="right"&&(this.rightColumnLabels=e)}generateVerticalAxisLabelItems(t="left",e){let{$dataWorld:s}=this,n=this.traces.filter(r=>r.axis===t),a=`${t}ColumnIds`,o=[];if(n.length>0){n.forEach(l=>{let{yColumn:c}=l,d=c.group;if(d)if(c.special){let u=s.getDataSetByID(c.setId),p;l.type==="fft"?p=k("Amplitude"):l.type==="histogram"?p=k("Frequency"):p=u.name,o.push({text:p,colors:[l.color]})}else o.push({text:d.name,units:d.units,colors:[l.color]})});let r=[];return o.forEach(l=>{let c=r.find(d=>d.text===l.text);c?c.colors=c.colors.concat(l.colors):r.push(l)}),r}return this[a].length?(this[a].forEach(r=>{let l=s.getColumnById(r);l?o.push({text:l.name,units:l.units,colors:["transparent"]}):o.push({text:e})}),o):[{text:e}]}getVerticalMinMaxSmaxyFromZero(t="left",e){let s=null,n=null,a=0,o=!1;return this.traces.filter(l=>l.type!=="graph-match").filter(l=>l.axis===t).forEach(l=>{let c=this.$dataWorld.getColumnById(l.yColumn.id),d=e?l.getYValuesInBaseRange(e):c.filteredValues;for(let h=0;h<d.length;++h){let u=d[h];Number.isNaN(u)||(s===null&&n===null?(s=u,n=u):(u<s&&(s=u),u>n&&(n=u)))}c.smaxy>a&&(a=c.smaxy),!o&&c.autoscaleFromZero&&(o=!0)}),{min:s,max:n,smaxy:a,autoscaleFromZero:o}}_autoscaleBaseLarger(t){let{dataExtremes:e,currentRanges:{base:s}}=t,{max:n}=s,a=1e-8;return e.base.max>n+a&&(e.base.max>n*1.2?n=e.base.max:n*=1.2),{min:e.base.min,max:n}}_autoscaleVerticalLarger(t){let{dataExtremes:e,currentRanges:s,axis:n}=t,{min:a,max:o}=s[n],r=o-a,l=e[n].min,c=e[n].max;return l<a&&(a=l-r*.2),c>o&&(o=c+r*.2),{min:a,max:o}}_autoscaleBaseToFit(t){let{currentRanges:{base:e},dataExtremes:s}=t,{min:n,max:a}=s.base;if(this.baseColumn&&this.baseColumn.values.length===1){let{min:o}=e;n===a&&(n=Math.min(n,o),a=Math.max(a,o))}return{min:n,max:a}}_autoscaleVerticalToFit(t){let{dataExtremes:e,currentRanges:s,axis:n}=t,a=e[n].min,o=e[n].max;if(this.baseColumn&&this.baseColumn.values.length===1){let{min:r,max:l}=s[n];a===o&&(a=Math.min(a,r),o=Math.max(o,l))}return{min:a,max:o}}_autoscaleBaseNormal(t){let{padding:e,currentRanges:{base:s},dataExtremes:n,axis:a}=t,{min:o,max:r}=n[a];return{min:o!==null?o-e.left:s.min,max:r!==null?r+e.right:s.max}}_autoscaleVerticalAxisNormal(t){let{padding:e,ignoreSmaxy:s,currentRanges:n,axis:a,padBottomSixPercent:o,baseAxisRegion:r}=t,l=n[a],{min:c,max:d,smaxy:h,autoscaleFromZero:u}=this.getVerticalMinMaxSmaxyFromZero(a,r),p=(d-c)*this.autoscalePadding,g=o?(d-c)*.06:0,m=p+e.bottom+g,f=p+e.top,b=!s&&h!==0,v=b?h:m,C=b?h:f,y={min:c!==null?c-v:l.min,max:d!==null?d+C:l.max};return u&&(Math.abs(y.max)>=Math.abs(y.min)?y.min=0:y.max=0),y}getAutoscaledLeftRange(t){return this._autoscaleVerticalAxisNormal({axis:"left",currentRanges:{left:this._graphInstance.getLeftRange()},padding:{top:0,left:0,bottom:0,right:0},baseAxisRegion:t})}getDataExtremes(){return ci(this.traces.map(t=>t.range))}getErrorBarExtremes(){return ci(this.traces.filter(t=>t.baseColumn.group.errorBarType!==me.NONE||t.yColumn.group.errorBarType!==me.NONE).map(t=>{let e=[],s=[],n=Fs();return this._generateErrorBars(t).forEach(([a,o])=>{a&&e.push(a),o&&s.push(o)}),e&&e.some(Boolean)&&(n.base={min:Math.min(...e.map(a=>a[0]).filter(Number.isFinite)),max:Math.max(...e.map(a=>a[1]).filter(Number.isFinite)),valid:!0}),s&&s.some(Boolean)&&(n.left={min:Math.min(...s.map(a=>a[0]).filter(Number.isFinite)),max:Math.max(...s.map(a=>a[1]).filter(Number.isFinite)),valid:!0}),n}))}getAutoscaledRanges({autoscaleSize:t="normal",autoscaleFromZero:e=!1,axes:s,ignoreSmaxy:n,padding:a,padBottomSixPercent:o}={}){a=tt({top:0,left:0,bottom:0,right:0},a);let r=this.getDataExtremes(),l=this.getErrorBarExtremes(),c=g=>{let m={"base-axis-normal":"_autoscaleBaseNormal","left-axis-normal":"_autoscaleVerticalAxisNormal","right-axis-normal":"_autoscaleVerticalAxisNormal","base-axis-to-fit":"_autoscaleBaseToFit","left-axis-to-fit":"_autoscaleVerticalToFit","right-axis-to-fit":"_autoscaleVerticalToFit","base-axis-larger":"_autoscaleBaseLarger","left-axis-larger":"_autoscaleVerticalLarger","right-axis-larger":"_autoscaleVerticalLarger"},f={base:this._graphInstance.getBaseRange(),left:this._graphInstance.getLeftRange(),right:this._graphInstance.getRightRange()},b=m[`${g}-axis-${t}`],v={padding:a,ignoreSmaxy:n,dataExtremes:r,currentRanges:f,axis:g,padBottomSixPercent:o};if(b&&this[b]){let C=this[b](v);return e&&g!=="base"&&(C.min=Math.min(C.min,0),C.max=Math.max(C.max,0)),C.min=Math.min(C.min,l[g].min),C.max=Math.max(C.max,l[g].max),C}return f[g]},d=g=>g!=="right"||this.rightAxisEnabled,h=["base","left","right"];return(s&&s.length?s.filter(g=>h.includes(g)):h).filter(d).filter(g=>r[g].valid).reduce((g,m)=>wt(tt({},g),{[m]:c(m)}),{})}autoscale(t={},e="automatic"){let s=t;this.options.appearance.bars&&(s.autoscaleFromZero=!0);let n=this.getAutoscaledRanges(s),a=li(n,(o,r)=>`${r}Range`);e===Se.AUTOMATIC?this.updateAutomaticAutoscale(a):e===Se.USER&&this.updateUserAutoscale(a)}enableScaleLargerToNewData(){this.scaleLargerToNewData=!0}disableScaleLargerToNewData(){this._throttleUpdate?.flush(),this.scaleLargerToNewData=!1}enableFitToNewData(){this.fitToNewData=!0}disableFitToNewData(){this.fitToNewData=!1}getTraceDataSetIds(){let t=new Set;return[...this.leftColumnIds,...this.rightColumnIds].forEach(e=>{let s=this.$dataWorld.getColumnById(e);s&&t.add(s.setId)}),Array.from(t.values())}_toggleGraphToolsPopover(){this.graphToolsPopoverEl.show()}get _canStrikeThrough(){return this.tempSelection}get _canRestoreAll(){return this.$dataWorld?this.getTraceDataSetIds().some(e=>this.$dataWorld.checkHasStruckRowsForDataSet(e)):!1}_recalcBoxes(){let t=this.shadowRoot.querySelector("#graph"),e=this.shadowRoot.querySelector("#chart_canvas");if(this.graphInstance){let s=this.shadowRoot.querySelector("#plot_box"),n=this.graphInstance.plot.chartArea;s.style.height=`${n.height}px`,s.style.width=`${n.width}px`,s.style.left=`${n.left+e.closest("#graph_box").offsetLeft}px`,s.style.top=`${n.top+e.offsetTop}px`}this.traces.forEach(s=>s.trimAllSeriesData()),t.querySelector(".left-axis-label-wrapper").style.width=`${e.offsetHeight}px`,t.querySelector(".right-axis-label-wrapper").style.width=`${e.offsetHeight}px`,this.analysisEl&&(this.analysisEl.updateExamineAndTangent(),this.dispatchEvent(new CustomEvent("update-all-curve-fits")))}static get styles(){return[ut,js,kl,Ld,rt`
        #graph_tools_menu {
          max-block-size: 75vh;
          overflow-y: auto;
          min-inline-size: 11.25rem;
          max-inline-size: 25rem;
        }
      `]}render(){let t=this.$dataWorld?.getSession()?.isCollecting,e=this.containsCategorical||!this.hasTrace||this.isSessionEmpty,s=this.manualFits.length>=3||this.getLeftTraces().length===0||this.containsCategorical,n=this.containsCategorical||!this.hasTrace||this.isSessionEmpty||this.rightAxisEnabled,a=!this.hasTrace||this.isSessionEmpty||this.rightAxisEnabled,o=this.containsCategorical||!this.hasTrace||this.isSessionEmpty,r=!this._canRestoreAll,l=!this.hasTrace||this.isSessionEmpty,c=!this._canStrikeThrough,d=!this.analysisEl||this.isInFFTMode||this.isInHistogramMode,h=!this.hasCoreAnalysis||this.isInHistogramMode&&!se("ff-ga-histogram-analysis"),u=!this.hasCoreAnalysis||!this.enableFft||this.isInHistogramMode,p=!this.hasCoreAnalysis||!this.enableHistogram||this.isInHistogramMode,g=!this.hasCoreAnalysis||this.isInHistogramMode&&!se("ff-ga-histogram-analysis")||!1,m=!this.hasCoreAnalysis||this.isInHistogramMode&&!se("ff-ga-histogram-analysis"),f=!1;return this._graphOptionsContextProvider.setValue({disableAddAnnotation:t,disableCurveFit:e,disableFFT:n,disableHistogram:a,disableIntegral:o,disableRestoreAll:r,disableStatistics:l,disableStrikethrough:c,hideAddAnnotation:d,hideCurveFit:h,hideFFT:u,hideHistogram:p,hideIntegral:g,hideStatistics:m,hideStrikethrough:f}),q`
      <div class="graph" id="graph">
        ${this?.options?.title?q` <h2 class="title" id="graph_title">${this.options.title}</h2> `:""}
        <div class="graph-wrapper">
          <div class="graph-left-axis">
            <div class="left-axis-label-wrapper">
              <button
                aria-label="${k("Left Axis")}"
                id="left_axis_label"
                class="left-axis-label"
                @click="${()=>this._togglePlotManagerPopover("left")}"
                ?disabled="${this.disableAxisLabelBtns}"
              >
                ${this.leftColumnLabels.map(b=>q`
                    <div class="left-axis-label__colname-color-wrapper">
                      <div class="left-axis-label__color-indicator-wrapper">
                        ${b.colors?b.colors.map(v=>q`
                                <div
                                  class="left-axis-label__color-indicator"
                                  .style="background-color:${v}"
                                ></div>
                              `):""}
                      </div>
                      <div class="left-axis-label__colname-wrapper">
                        <span class="left-axis-label__colname">
                          ${this.shouldTruncateLeftLabels?Na({strEls:this.shadowRoot.querySelectorAll(".left-axis-label__colname"),str:b.text}):b.text}
                        </span>
                        ${b.units?q` <span class="left-axis-label__colunits">(${b.units})</span> `:""}
                      </div>
                    </div>
                  `)}
              </button>
            </div>
            ${vs(!this.disableAxisLabelBtns,q`
                <vst-ui-popover
                  placement="right"
                  id="graph_left_plot_manager_popover"
                  for="left_axis_label"
                >
                  <vst-core-graph-plot-manager
                    .dataSets="${this.plotManagerTraceList?.dataSets}"
                    .disableDelete=${this.$dataWorld?.sessionType==="DataShare"}
                    .predictions="${this.plotManagerTraceList?.predictions}"
                    .graphMatches="${this.plotManagerTraceList?.graphMatches}"
                    .columns="${this.plotManagerTraceList?.columns}"
                    @column-deleted="${this.plotManagerColumnDeleted}"
                    @column-selected="${this.plotManagerColumnSelected}"
                    @column-deselected="${this.plotManagerColumnDeselected}"
                    @column-trace-updated="${this.plotManagerColumnTraceUpdated}"
                    @dataset-deleted=${this._handleDataSetDeleted}
                    @special-dataset-selected="${this.plotManagerSpecialDatasetSelected}"
                    @special-dataset-deselected="${this.plotManagerSpecialDatasetDeselected}"
                    @show-data-set-options="${this.plotManagerShowDataSetOptions}"
                    @show-prediction-options="${this.plotManagerShowPredictionOptions}"
                    @show-graph-match-options="${this.plotManagerShowGraphMatchOptions}"
                  ></vst-core-graph-plot-manager>
                </vst-ui-popover>
              `)}
          </div>
          <div id="graph_box" class="flex-col">
            <div class="graph-placeholder">
              <canvas id="chart_canvas"></canvas>
            </div>
            <div class="base-axis-wrapper">
              <div class="graph-baseAxis graph-base-axis">
                <button
                  aria-label="${k("Base Axis")}"
                  class="base-axis-label"
                  @click="${this.baseAxisClicked}"
                  ?disabled="${this.disableAxisLabelBtns}"
                  id="base_column_label"
                >
                  ${this.baseColumnLabel}
                </button>
                <vst-ui-tooltip
                  for="#base_column_label"
                  placement="top"
                  content="${k("Change x-axis")}"
                ></vst-ui-tooltip>
              </div>
              <slot name="fft-btn-group"></slot>
              <slot name="histogram-btn-group"></slot>
            </div>
          </div>
          <div class="graph-right-axis" ?hidden="${!this.rightAxisEnabled}">
            <div class="right-axis-label-wrapper">
              <button
                aria-label="${k("Right Axis")}"
                id="right_axis_label"
                class="right-axis-label"
                @click="${()=>this._togglePlotManagerPopover("right")}"
                ?disabled="${this.disableAxisLabelBtns}"
              >
                ${this.rightColumnLabels.map(b=>q`
                    <div class="right-axis-label__colname-color-wrapper">
                      <div class="right-axis-label__color-indicator-wrapper">
                        ${b.colors?b.colors.map(v=>q`
                                <div
                                  class="right-axis-label__color-indicator"
                                  .style="background-color:${v}"
                                ></div>
                              `):""}
                      </div>
                      <div class="right-axis-label__colname-wrapper">
                        <span class="right-axis-label__colname">
                          ${this.shouldTruncateRightLabels?Na({strEls:this.shadowRoot.querySelectorAll(".right-axis-label__colname"),str:b.text}):b.text}
                        </span>
                        ${b.units?q` <span class="right-axis-label__colunits">(${b.units})</span> `:""}
                      </div>
                    </div>
                  `)}
              </button>
            </div>
            ${vs(this.rightAxisEnabled&&!this.disableAxisLabelBtns,q`
                <vst-ui-popover
                  placement="left"
                  id="graph_right_plot_manager_popover"
                  for="right_axis_label"
                >
                  <vst-core-graph-plot-manager
                    .dataSets="${this.plotManagerTraceList?.dataSets}"
                    .disableDelete=${this.$dataWorld?.sessionType==="DataShare"}
                    .predictions="${this.plotManagerTraceList?.predictions}"
                    .graphMatches="${this.plotManagerTraceList?.graphMatches}"
                    .columns="${this.plotManagerTraceList?.columns}"
                    @column-deleted="${this.plotManagerColumnDeleted}"
                    @column-selected="${this.plotManagerColumnSelected}"
                    @column-deselected="${this.plotManagerColumnDeselected}"
                    @column-trace-updated="${this.plotManagerColumnTraceUpdated}"
                    @dataset-deleted=${this._handleDataSetDeleted}
                    @special-dataset-selected="${this.plotManagerSpecialDatasetSelected}"
                    @special-dataset-deselected="${this.plotManagerSpecialDatasetDeselected}"
                    @show-data-set-options="${this.plotManagerShowDataSetOptions}"
                    @show-prediction-options="${this.plotManagerShowPredictionOptions}"
                    @show-graph-match-options="${this.plotManagerShowGraphMatchOptions}"
                  ></vst-core-graph-plot-manager>
                </vst-ui-popover>
              `)}
          </div>
          <div id="event_box">
            <div id="plot_box">
              ${ie(this.tempSelection&&!this.tempSelection.highlightOnly&&!this.disableMenu&&!this.isInFFTMode&&!this.isInHistogramMode,()=>q`
                  <vst-ui-graph-context-menu
                    style="--left:${this._contextMenuLeft}px"
                  ></vst-ui-graph-context-menu>
                `)}
              <slot name="mini_graph"></slot>
              <slot name="graph_legend"></slot>
              <slot name="analysis"></slot>
              <div class="rainbow-wrapper">
                <slot name="rainbow"></slot>
              </div>
            </div>
          </div>
          ${this.rightAxisEnabled?q`
                <vst-ui-tooltip
                  for="#left_axis_label"
                  placement="right"
                  content="${k("Change left y-axis")}"
                ></vst-ui-tooltip>
              `:q`
                <vst-ui-tooltip
                  for="#left_axis_label"
                  placement="right"
                  content="${k("Change y-axis")}"
                ></vst-ui-tooltip>
              `}
          <vst-ui-tooltip
            for="#right_axis_label"
            placement="left"
            content="${k("Change right y-axis")}"
          ></vst-ui-tooltip>
        </div>
      </div>

      <div class="graph-actions">
        ${vs(!this.hideGraphActionBtns&&!this.disableGraphTools,q`
            <vst-style-tooltip slot="graph-tools">
              <button
                aria-label="${k("Graph Options")}"
                class="btn"
                id="graph_tools_btn"
                variant="graph"
                @click="${this._toggleGraphToolsPopover}"
              >
                <vst-ui-icon .icon="${zs}"></vst-ui-icon>
              </button>
              <span role="tooltip" position="block-start-start">${k("Graph Options")}</span>
            </vst-style-tooltip>
          `)}
        ${this.hideGraphActionBtns?"":q`
              <vst-style-tooltip id="autoscale_btn_container">
                <button
                  aria-label="${k("Zoom to all Data")}"
                  class="btn"
                  variant="graph"
                  id="autoscale_btn"
                  @click="${this.onAutoscaleButtonClick}"
                >
                  <vst-ui-icon .icon="${Pa}"></vst-ui-icon>
                </button>
                <span
                  role="tooltip"
                  position="${this.disableGraphTools?"block-start-start":"block-start"}"
                  >${k("Zoom to all Data")}</span
                >
              </vst-style-tooltip>
            `}
        <slot name="additional-action-btn" class="graph-actions__btn"></slot>
      </div>
      <vst-ui-popover
        placement="right"
        id="graph_tools_popover"
        for="graph_tools_btn"
        ?hidden="${this.disableMenu}"
      >
        <ul class="menu" id="graph_tools_menu">
          <li ?hidden="${this.isInHistogramMode}">
            <vst-ui-switch
              id="graph_legend"
              label="${k("Graph Legend")}"
              label-placement="left"
              ?checked="${this.isLegendVisible}"
              ?disabled="${this.isLegendDisabled}"
              @switch-changed="${b=>this.dispatchGraphToolsEvent(b,{type:"graph_legend",checked:b.target.checked},!0)}"
            ></vst-ui-switch>
          </li>
          <li ?hidden="${this.isInHistogramMode||!this.miniGraphSupported}">
            <vst-ui-switch
              id="mini_graph"
              label="${k("Graph Inset")}"
              label-placement="left"
              ?checked="${this.isMiniGraphVisible}"
              ?disabled="${this.isMiniGraphDisabled}"
              @switch-changed="${b=>this.dispatchGraphToolsEvent(b,{type:"mini_graph",checked:b.target.checked},!0)}"
            ></vst-ui-switch>
          </li>

          ${vs(this.isInFFTMode||this.isInHistogramMode,en,q`
              <li class="menu-divider" role="presentation"></li>
              <li ?hidden="${!this.hasCoreAnalysis}">
                <vst-ui-switch
                  id="interpolate"
                  label="${k("Interpolate")}"
                  label-placement="left"
                  ?checked="${this.interpolateEnabled}"
                  @switch-changed="${this._onInterpolateSwitchChanged}"
                  ?disabled="${this.containsCategorical}"
                ></vst-ui-switch>
              </li>
              <li ?hidden="${!this.hasCoreAnalysis}">
                <vst-ui-switch
                  id="tangent"
                  label="${k("Tangent")}"
                  label-placement="left"
                  ?checked="${this.tangentEnabled}"
                  @switch-changed="${this._onTangentSwitchChanged}"
                  ?disabled="${this.containsCategorical||!this.hasTrace||this.isSessionEmpty}"
                ></vst-ui-switch>
              </li>
            `)}
          ${vs(this.isInFFTMode||this.isInHistogramMode&&!se("ff-ga-histogram-analysis"),en,q`
              <li class="menu-divider" role="presentation"></li>
              <li ?hidden=${m} id="statistics">
                <button
                  @click="${b=>this.dispatchGraphToolsEvent(b,{type:"statistics"})}"
                  ?disabled="${l}"
                >
                  ${k("View Statistics")}
                </button>
              </li>
              <li ?hidden=${g}>
                <button
                  id="integral"
                  ?disabled=${o}
                  @click="${b=>this.dispatchGraphToolsEvent(b,{type:"integral"})}"
                >
                  ${k("View Integral")}
                </button>
              </li>
              <li ?hidden=${h}>
                <button
                  id="curve_fit"
                  ?disabled=${e}
                  @click="${b=>this.dispatchGraphToolsEvent(b,{target:this.graphToolsBtnEl,type:"curve_fit"})}"
                >
                  ${k("Apply Curve Fit")}
                </button>
              </li>
              <li ?hidden="${u}">
                <button
                  id="apply_fft_btn"
                  ?disabled=${n}
                  @click=${b=>this.dispatchGraphToolsEvent(b,{type:"fft"},!this.authorized)}
                >
                  ${k("Apply FFT")}
                </button>
              </li>
              <li ?hidden=${p}>
                <button
                  id="apply_histogram_btn"
                  ?disabled="${a}"
                  @click="${b=>this.dispatchGraphToolsEvent(b,{type:"histogram"},!this.authorized)}"
                >
                  ${k("Apply Histogram")}
                </button>
              </li>
              <li ?hidden=${f}>
                <button
                  id="apply-strikethrough"
                  ?disabled=${c}
                  @click=${b=>this.dispatchGraphToolsEvent(b,{type:"strikethrough"},!this.authorized)}
                >
                  ${k("Strikethrough")}
                </button>
              </li>
              <li ?hidden=${f}>
                <button
                  id="restore-all-data"
                  ?disabled=${r}
                  @click=${b=>this.dispatchGraphToolsEvent(b,{type:"restore-all-data"},!this.authorized)}
                >
                  ${k("Restore All")}
                </button>
              </li>
            `)}

          <li class="menu-divider" role="presentation"></li>

          <li ?hidden="${d}" id="annotation">
            <button
              id="add-annotation-btn"
              @click=${b=>this.dispatchGraphToolsEvent(b,{type:"annotation"})}
              ?disabled="${t}"
            >
              ${k("Add Annotation")}
            </button>
          </li>
          <li
            ?hidden=${!se("ff-manual-linear-fit")||this.isInFFTMode||this.isInHistogramMode}
          >
            <button
              id="add-manual-fit"
              @click=${this._handleAddManualFitClicked}
              ?disabled=${s}
            >
              <div class="inline" style="--justify: space-between;">
                <div>
                  ${k("Add Manual Fit")}
                  ${ie(this.leftColumnIds.length>1,()=>q`<vst-ui-icon .icon=${Er} style="width: 10px;"></vst-ui-icon>`)}
                </div>
              </div>
            </button>
            <vst-ui-popover
              placement="right"
              id="manual-fit-traces-popover"
              for="add-manual-fit"
              ${Ne(this._addGraphManualFitTracesPopoverRef)}
            >
              <ul class="menu">
                ${We(this._manualFitTargets,b=>b.trace.id,b=>q`
                    <li>
                      <button
                        type="button"
                        @click=${v=>this.dispatchGraphToolsEvent(v,{type:"manual-fit",trace:b.trace})}
                      >
                        <div class="inline">
                          <div>
                            ${b.name}&nbsp;
                            <vst-style-tooltip style="--background-color: var(--vst-color-brand);">
                              <vst-ui-icon
                                size="xs"
                                .icon="${kr}"
                                color="var(--vst-color-fg-tertiary)"
                              ></vst-ui-icon>
                              <span role="tooltip" position="block-start-start">
                                ${k(`
                                  The selected trace will be used for RMSE
                                  calculation against the model line.
                                `)}
                              </span>
                            </vst-style-tooltip>
                          </div>
                        </div>
                      </button>
                    </li>
                  `)}
              </ul>
            </vst-ui-popover>
          </li>
          <li ?hidden="${!this.predictionsEl||this.isInFFTMode||this.isInHistogramMode}">
            <button
              id="prediction"
              @click="${b=>this.dispatchGraphToolsEvent(b,{type:"prediction"})}"
              ?disabled="${this.$dataWorld?.getSession()?.isCollecting}"
            >
              ${k("Add Prediction")}
            </button>
          </li>
          <li
            ?hidden="${this?.$dataWorld?.getGraphMatchColumns().length===0||this?.$dataCollection?.mode!=="time-based"||this.isInFFTMode||this.isInHistogramMode}"
          >
            <button
              id="graph_match"
              @click="${b=>this.dispatchGraphToolsEvent(b,{target:this.graphToolsBtnEl,type:"graph_match"})}"
              ?disabled="${this.$dataWorld?.getSession()?.isCollecting}"
            >
              ${k("Add Graph Match")}
            </button>
          </li>
          <li>
            <button
              id="graph_options"
              @click="${b=>this.dispatchGraphToolsEvent(b,{target:this.graphToolsBtnEl,type:"graph_options"})}"
            >
              ${k("Edit Graph Options")}
            </button>
          </li>
        </ul>
      </vst-ui-popover>
      ${vs(this.disableMenu,en,q`
          <vst-ui-popover
            id="strikethrough-pro-preview-popover"
            for="apply-strikethrough"
            placement="right"
            ${Ne(this._strikethroughProOnlyPopoverRef)}
          >
            <p class="body" margin="s">
              ${k("Activate to strikethough rows")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          </vst-ui-popover>
          <vst-ui-popover
            id="fft_pro_preview_popover"
            for="apply_fft_btn"
            placement="right"
            ${Ne(this._fftProOnlyPopoverRef)}
          >
            <p class="body" margin="s">
              ${k("Activate to apply FFT")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          </vst-ui-popover>
          <vst-ui-popover
            id="histogram_pro_preview_popover"
            for="apply_histogram_btn"
            placement="right"
            ${Ne(this._histogramProOnlyPopoverRef)}
          >
            <p class="body" margin="s">
              ${k("Activate to apply Histogram")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          </vst-ui-popover>
          <vst-ui-popover
            id="restore-all-pro-preview-popover"
            for="restore-all-data"
            placement="right"
            ${Ne(this._restoreAllProOnlyPopoverRef)}
          >
            <p class="body" margin="s">
              ${k("Activate to restore all struck rows")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          </vst-ui-popover>
          <vst-ui-popover
            id="manual-fit-pro-preview-popover"
            for="add-manual-fit"
            placement="right"
            ${Ne(this._manualFitProOnlyPopoverRef)}
          >
            <p class="body" margin="s">
              ${k("Activate to add manual fit")}
              <vst-ui-pro-info></vst-ui-pro-info>
            </p>
          </vst-ui-popover>
        `)}
      <slot name="predictions"></slot>
    `}};customElements.define("vst-core-graph",Ls);var zd=rt`
  :host {
    background-color: var(--vst-color-bg);
    border: 1px solid var(--vst-color-bg-primary);
    display: block;
    font-size: 0.875rem;
    overflow: hidden;
    position: absolute;
    z-index: var(--vst-z-annotation);
  }

  :host([editing]) {
    border: 1px solid var(--vst-color-brand-300);
    border-radius: 4px;
    z-index: var(--vst-z-popover);
  }

  :host([editing]) .annotation__actions,
  :host([editing]) .annotation__form {
    display: flex;
  }

  :host([editing]) .annotation__static {
    display: none;
  }

  .annotation__static {
    cursor: pointer;
    font-family: var(--vst-font-family);
    font-size: 1em;
    max-inline-size: 15rem;
    padding: 0.5em 0.675em;
    white-space: normal;
  }

  .annotation__form {
    display: none;
    padding: 0.5em 0.5em 0.5em 0;
    width: 15rem;
  }

  .annotation__input {
    background-color: var(--vst-color-bg);
    border: 1px solid var(--vst-color-bg-secondary);
    border-radius: 4px;
    color: var(--vst-color-fg-primary);
    flex: 1;
    font-family: var(--vst-font-family);
    font-size: 1em;
    line-height: var(--vst-line-height-m);
    padding: 0.5em 0.675em;
    width: 100%;
  }

  input#annotation_input.annotation__input:hover {
    border: 1px solid var(--vst-color-brand-300);
  }

  input#annotation_input.annotation__input:focus,
  input#annotation_input.annotation__input:active {
    border: 2px solid var(--vst-color-brand-300);
    outline: none;
  }

  ${pi(rt`.annotation__actions`)}
  .annotation__actions {
    align-items: center;
    background-color: transparent;
    border: 0;
    justify-content: center;
  }
`;var ua=1e3,Gd=class extends ns(ht){constructor(){super();this._handleOutsideClick=t=>{this.annotation.editingGraphId===this.graphUdmId&&!t.composedPath().includes(this)&&this._save()};this._hasMoved=!1,this._text="",this.annotation=null,this.bounds=null}static get properties(){return{_text:{state:!0},_hasMoved:{state:!0},annotation:{type:Object},bounds:{type:Object},graphUdmId:{type:Number}}}static get styles(){return[ut,zd]}get pixelInset(){let{x:t,y:e}=this.annotation.getPositionOnGraph(this.graphUdmId);return{x:t/ua*this.bounds.width,y:e/ua*this.bounds.height}}get textElement(){return this.renderRoot.querySelector("#annotation_input")}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}firstUpdated(){let t=this.renderRoot.querySelector(".annotation");this._text=this.annotation.text,Yt(t,"tap",()=>{this._edit()}),Yt(t,"track",this._handleDrag.bind(this)),Yt(t,"up",e=>e.stopPropagation(e)),this.addEventListener("keydown",e=>{e.keyCode===27&&this._save()}),we(()=>{this.annotation.editingGraphId===this.graphUdmId&&this.graphUdmId!==0?(this.setAttribute("editing",""),requestAnimationFrame(()=>{this.textElement&&this.textElement.focus()})):this.removeAttribute("editing"),requestAnimationFrame(()=>{this._dispatchPositionUpdated()})}),we(()=>{this._text=this.annotation.text})}updated(){if(!this._hasMoved){let{x:t,y:e}=this.pixelInset;this._setPosition(t,e)}}_calculateBoundedPosition(t=0,e=0){let{x:s,y:n}=this.pixelInset,a=this.getBoundingClientRect();return{x:qt(s+t,0,this.bounds.width-a.width),y:qt(n+e,0,this.bounds.height-a.height)}}_dispatchPositionUpdated(){this.dispatchEvent(new CustomEvent("position-updated",{detail:{annotation:this.annotation}}))}_edit(){this.annotation.setEditingOnGraph(this.graphUdmId),this.resize()}_handleDrag(t){if(t.preventDefault(),t.stopPropagation(),this.annotation.editingGraphId===this.graphUdmId)return;let{dx:e,dy:s,state:n}=t.detail,{x:a,y:o}=this._calculateBoundedPosition(e,s);n==="start"?(this.style.willChange="transform",this._hasMoved=!0):n==="track"?(this._setPosition(a,o),this._dispatchPositionUpdated()):n==="end"&&(this.style.removeProperty("will-change"),this.annotation.setPositionOnGraph(this.graphUdmId,{x:a/this.bounds.width*ua,y:o/this.bounds.height*ua}))}_handleTextChange(t){this._text=t.target.value}_save(){this._text.length>0&&(this.annotation.setEditingOnGraph(0),this.annotation.setText(this._text)),this.resize()}_setPosition(t,e){this.style.transform=`translate(${t}px, ${e}px)`}deleteAnnotation(){this.dispatchEvent(new CustomEvent("annotation-deleted",{detail:this.annotation}))}resize(){let{x:t,y:e}=this._calculateBoundedPosition();this._setPosition(t,e),this._dispatchPositionUpdated()}render(){return q`
      <div
        class="annotation"
        id="annotation"
        @keyup="${({key:t})=>{t==="Enter"&&this._edit()}}"
      >
        <div class="annotation__static">${this.annotation.text}</div>
        <div class="annotation__overflow"></div>
        <vst-ui-form @submit="${this._save}">
          <form class="annotation__form" id="${this.id}">
            <div class="annotation__actions" id="annotation_actions">
              <button
                id="delete-annotation"
                class="btn"
                variant="icon"
                type="button"
                @click="${this.deleteAnnotation}"
                @keydown="${t=>{t.shiftKey&&t.key==="Tab"&&this._save()}}"
              >
                <vst-ui-icon class="annotation__actions-icon" .icon="${Gs}"></vst-ui-icon>
              </button>
            </div>
            <input
              class="annotation__input"
              id="annotation_input"
              type="text"
              placeholder="${k("Enter an annotation")}"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              .value="${this.annotation.text}"
              @input="${this._handleTextChange}"
              @keyup="${t=>{t.key==="Enter"&&t.stopPropagation()}}"
              @keydown="${t=>{!t.shiftKey&&t.key==="Tab"&&this._save()}}"
            />
          </form>
        </vst-ui-form>
      </div>
    `}};customElements.define("vst-ui-graph-annotation",Gd);var Wd=rt`
  .stack > div + div {
    margin-block-start: 0;
  }

  [inset] > * {
    --inset: 0;
  }

  :host {
    width: max-content;
  }

  /*clipping path creates the triangle shape if just on container it breaks*/
  :host(:not([editing])) .container {
    border-radius: var(--vst-radius) 0 0 var(--vst-radius);
    clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
  }

  :host([editing]) .container {
    border-radius: var(--vst-radius);
  }

  #data-mark-container-inner {
    background: var(--vst-color-bg);
    padding-inline-end: var(--vst-space-xl);
    position: relative;
    white-space: normal;
  }

  #data-mark-container-outer {
    background: var(--vst-color-bg);
    box-shadow: 0px var(--vst-color-brand-300);
    padding: 1px;
  }

  :host(:not([editing])) #data-mark-container-outer:hover {
    background: var(--vst-color-brand-300);
  }

  :host(:not([editing])) #data-mark-container-outer:focus,
  :host(:not([editing])) #data-mark-container-outer:active {
    background: var(--vst-color-brand-300);
    box-shadow: var(--vst-shadow-s);
  }

  #outside {
    flex-wrap: nowrap;
  }

  p,
  input,
  label {
    line-height: var(--vst-line-height-s);
    max-inline-size: 15ch;
  }

  #data-mark-notes-input {
    border: 1px;
    border-radius: var(--vst-radius);
    flex: 1;
    margin: var(--vst-space-xs);
    margin-top: 2px;
    padding: var(--vst-space-2xs);
  }

  #data-mark-notes-input:focus {
    --vst-outline-offset: 0px;
  }

  #edit-data-mark-btn {
    padding: 4px;
  }

  #delete-data-mark-btn {
    padding: var(--vst-space-2xs);
  }

  #delete-data-mark-btn:hover,
  #edit-data-mark-btn:hover {
    border: 1px solid var(--vst-color-brand-300);
  }

  #edit-data-mark-btn:active,
  #edit-data-mark-btn:focus {
    background: var(--vst-color-brand-300);
    border: 1px solid var(--vst-color-brand-300);
    color: #ffffff;
  }

  :host(([editing])) .container {
    border-radius: var(--vst-radius);
    clip-path: polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%);
  }

  :host(:not([editing])) #data-mark-container-outer {
    background: var(--vst-color-bg-primary);
    padding: 1px;
  }

  :host([editing]) #data-mark-container-outer {
    background: var(--vst-color-bg);
    border: solid 1px var(--vst-color-bg-primary);
    padding: 1px;
  }

  .inline > div {
    justify-content: var(--justify, flex-end);
  }

  .note {
    height: auto;
    width: 90%;
    word-break: break-word;
  }
`;var jd=class extends ht{static get properties(){return{data:{type:Array},editing:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},note:{type:String},dataMarkId:{type:Number},dragging:{type:Boolean}}}constructor(){super();this.data=[],this.editing=!1,this.open=!1,this.note="",this.dataMarkId=0,this.dragging=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("click",t=>{let e=t.composedPath().includes(this);this.setDataMarkOpen(e),e||this.setEditing(e)})}async updated(t){t.forEach(async(e,s)=>{let n=()=>{this.dispatchEvent(new CustomEvent("data-mark-size-changed",{bubbles:!0,composed:!0}))};switch(s){case"note":n();break;case"editing":this.editing&&this.shadowRoot.querySelector("#data-mark-notes-input").focus(),n();break;case"open":n();break;case"data":this.data.length&&!this.dragging&&n();break;default:break}})}static get styles(){return[ut,Wd]}inputChanged({target:{value:t}}){this.note!==t&&this.updateNote(t)}deleteDataMark(){this.dispatchEvent(new CustomEvent("data-mark-deleted",{detail:{id:this.dataMarkId}}))}setEditing(t){this.dragging||(t&&this.setDataMarkOpen(!1),this.dispatchEvent(new CustomEvent("edit-state-changed",{detail:{dataMarkId:this.dataMarkId,editing:t}})))}setDataMarkOpen(t){this.dragging||(this.open=t)}updateNote(t){this.dispatchEvent(new CustomEvent("note-updated",{detail:{dataMarkId:this.dataMarkId,value:t}}))}render(){return q`
      <div id="data-mark-container-outer" class="container" tabindex="0">
        <div
          class="stack container"
          id="data-mark-container-inner"
          inset="xs"
          @keyup="${t=>t.keyCode===13?this.setDataMarkOpen(!0):""}"
        >
          <div class="inline" gap="xs">
            <div id="outside">
              <button
                class="btn"
                variant="icon"
                size="xs"
                id="delete-data-mark-btn"
                ?hidden="${!this.editing}"
                @click="${this.deleteDataMark}"
              >
                <vst-ui-icon .icon="${Gs}"></vst-ui-icon>
              </button>
              ${this.editing||this.open?q`
                    <button
                      class="btn"
                      variant="icon"
                      size="xs"
                      id="edit-data-mark-btn"
                      @click=${t=>{this.setEditing(!this.editing),t.stopPropagation()}}
                    >
                      <vst-ui-icon .icon="${Ar}"></vst-ui-icon>
                    </button>
                  `:""}
              <div class="stack">
                ${this.data.map(t=>q`
                    <div class="box">
                      <div class="inline" gap="2xs">
                        <div>
                          <p class="label" size="s">${t.key}:</p>
                          ${t.units?q` <p class="caption">${t.value} ${t.units}</p> `:q` <p class="caption">${t.value}</p> `}
                        </div>
                      </div>
                    </div>
                  `)}
              </div>
            </div>
          </div>
          <p class="caption note" space="2xs" ?hidden="${!this.note||this.editing}">
            ${this.note}
          </p>
        </div>
        <div class="inline" id="notes-wrapper" ?hidden="${!this.editing}">
          <div>
            <input
              id="data-mark-notes-input"
              placeholder="${k("Note")}"
              .value=${this.note}
              @input=${this.inputChanged}
              @keyup=${t=>{t.key==="Enter"&&(this.setEditing(!1),t.stopPropagation())}}
            />

            <p class="note" space="2xs" ?hidden="${!this.note||this.editing}">${this.note}</p>
          </div>
        </div>
      </div>
    `}};customElements.define("vst-ui-data-mark",jd);var Yi=(i,t)=>i.yColumn.values.length>=t.rowIndex+1&&!Number.isNaN(i.yColumn.values[t.rowIndex])&&t.setId===i.yColumn.setId;var Vd=rt`
  :host {
    --y-value-flag-height: 1.75rem;
    /*  this value gets accessed by core-graph-analysis.js while determining if the y-point flags overlap each other */
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  :host(.hidden) {
    display: none;
  }

  .analysis-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: text;
    --vst-outline-offset: 0px;
  }

  .analysis-wrapper:focus {
    border-radius: var(--vst-radius);
  }

  .analysis-wrapper:not(:focus-visible) {
    border-radius: 0;
  }

  .data-mark-wrapper,
  .selection-wrapper,
  .annotation-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .data-mark-wrapper {
    overflow: hidden;
  }

  vst-ui-draggable {
    z-index: var(--vst-z-infobox);
  }

  /* clip-path is incompatible with $capture service */
  /* TODO: make everything draw to the canvas and drop the $capture service */
  :host(:not([readonly])) #examine_selection_wrapper {
    clip-path: polygon(0 0, 0 100vh, 100% 100vh, 100% 0);
  }

  :host(:not([readonly])) .annotation-wrapper {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
  }

  vst-ui-draggable,
  vst-ui-graph-annotation {
    pointer-events: all;
  }
  vst-ui-data-mark {
    cursor: pointer;
  }

  #manual-fit-handles button {
    background: transparent;
    border: 1px solid transparent;
    height: 30px;
    margin: 8px;
    position: absolute;
    transform: translate(-23px, -23px) /*rotate(45deg)*/;
    width: 30px;
    z-index: calc(var(--vst-z-selection) + 1);

    &:nth-child(1),
    &:nth-child(3) {
      cursor: move;
    }

    &:nth-child(2) {
      cursor: move;
    }
  }
  #manual-fit-handles button svg {
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
  }
  #manual-fit-handles button svg:nth-child(1) {
    height: 53px;
    transform: translate(-13px, -13px);
    width: 53px;
  }
  #manual-fit-handles button svg:nth-child(2) {
    height: 20px;
    transform: translate(4px, 4px);
    width: 20px;
  }

  .graph-examine-wrapper.is-tracking .graph-examine,
  .graph-examine-wrapper.is-tracking .point-highlight {
    transition: none;
  }

  .graph-examine {
    position: absolute;
    height: 100%;
    padding: 0 0.875rem;
    cursor: ew-resize;
    transition: left 200ms var(--transition-easing);
    z-index: calc(var(--vst-z-selection) + 1);
  }
  .graph-examine__pin {
    position: relative;
    width: 1px;
    height: 100%;
    background: var(--vst-color-fg-primary);
  }

  .graph-examine__handle vst-ui-icon {
    width: 0.375rem;
    --vst-ui-icon-color: var(--vst-color-fg-tertiary);
  }

  .graph-examine__handle {
    background-color: var(--vst-color-examine-handle-bg);
    border: 1px solid var(--vst-color-examine-handle-bg);
  }

  .graph-examine__handle--flip-right {
    transform: translateX(0);
  }
  .graph-examine__handle--flip-left {
    transform: translateX(calc(-100% - 1px));
  }
  .graph-examine__handle[read-only] {
    display: block;
  }
  .graph-examine__handle[read-only] vst-ui-icon {
    display: none;
  }

  ${el(rt`.graph-examine__delete`,"cancel")}
  .graph-examine__delete {
    width: 2rem;
    height: 2rem;
    position: absolute;
    z-index: calc(var(--vst-z-selection) + 1);
    top: 0;
    left: 0.875rem;
    transition: var(--transition-faster);
  }
  .graph-examine__delete--flip-left {
    transform: translateX(-100%);
  }

  .point-overflow-window {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 2rem;
    left: 1.05rem;
    max-block-size: calc(100% - 2rem);
    font-size: 0.75rem;
    white-space: nowrap;
    background: rgba(255, 255, 255, 0.95);
    border-radius: var(--vst-radius);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .point-overflow-window--tangent {
    left: 2.175rem;
  }
  .point-overflow-window__y-value {
    padding: 0.15em 0.5em;
  }

  .point-highlight {
    position: absolute;
    z-index: calc(var(--vst-z-selection) - 1);
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 100%;
    border: 0.1875rem solid;
    background: #000;
    box-shadow: 0px 0px 0px 2px var(--vst-color-bg-graph);
    transform: translate(-50%, -50%);
    transition: all 100ms var(--transition-easing);
  }
  .point-highlight__y-value {
    display: block;
    position: absolute;
    height: var(--y-value-flag-height, 1.75rem);
    z-index: var(--vst-z-selection);
    font-size: 0.75rem;
    padding: 0.4em 0.5em;
    white-space: nowrap;
    background: var(--bg);
    border-radius: var(--vst-radius);
    transform: translate(0.5625rem, -0.75rem);
    transition: all 250ms var(--transition-easing);
    border: 1px solid var(--vst-color-bg-primary);
  }
  .point-highlight--tangent .point-highlight__y-value {
    transform: translate(1.6875rem, -1.25rem);
  }

  .flip-y-flag-left .point-highlight__y-value {
    transform: translate(calc(-100% - 0.5625rem), -0.625rem);
  }

  .flip-y-flag-left .point-highlight--tangent .point-highlight__y-value {
    transform: translate(calc(-100% - 1.375rem), -1.25rem);
  }

  .flip-y-flag-left .point-overflow-window {
    transform: translateX(calc(-100% - 1.05rem));
  }

  .flip-y-flag-left .point-overflow-window--tangent {
    transform: translateX(calc(-100% - 3.17rem));
  }

  .data-mark,
  .annotation-hairline {
    position: absolute;
    height: 100%;
    z-index: calc(var(--vst-z-selection) + 1);
  }
  svg#hairlines {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  svg#hairlines line {
    stroke: var(--vst-color-fg-tertiary);
  }
`;var Of=!1;function Nd(i,t,e,s,n){let a=t-n,o=i.sort((h,u)=>parseFloat(h.top)>parseFloat(u.top)?1:parseFloat(u.top)>parseFloat(h.top)?-1:0).map(h=>(h.flagTop=parseFloat(h.top),h.flagTop>s-a?h.flagTop=s-a+n:h.flagTop<e&&(h.flagTop=e),h));function r(h){let u=[],p;return h.forEach(g=>{(!p||g.flagTop<p.flagTop+a)&&p&&u.push([p,g]),p=g}),u}let l=0,c=o.length*a;for(;r(o).length&&l<c;)l++,r(o).forEach(h=>{for(;h[1].flagTop-h[0].flagTop<=a;)h[0].flagTop>e?h[0].flagTop--:h[0].flagTop=e,h[1].flagTop>=s-a+n?h[1].flagTop--:h[1].flagTop++});return Of&&console.log(`Loops taken: ${l}.  Loops allowed: ${c}`),o.map(h=>(h.flagTop=`${h.flagTop-parseFloat(h.top)}px`,h))}var pa=1e3,ga=30,Hd=5;function Ud(i,t=1){let e=i.split("."),s=e[1];return s=s.replace("f",""),s=parseInt(s)+t,`${e[0]}.${s}f`}var Ut=class extends Ce(ns(as(ht))){static get observableProperties(){return{colorMode:Ws}}static get properties(){return{_bracketPositions:{state:!0},_dataMarks:{type:Array},_dataMarksData:{state:!0},_infoBoxPositions:{state:!0},_isDataMarkMoving:{type:Boolean},_manualFitPosition:{state:!0},_manualFitPositionPx:{state:!0},activeManualFit:{type:Object},graphId:{type:String},pinching:{type:Boolean},selections:{type:Array},interpolate:{type:Boolean,reflect:!0},tangent:{type:Boolean,reflect:!0},examineHidden:{type:Boolean},examinePx:{type:Number},examineUnits:{type:String},xPoint:{type:Object},yPoints:{type:Array},examineFormatSt:{type:String},examinePreventClose:{type:Boolean,reflect:!0},examineFlagsAllFit:{type:Boolean},examinePin:{hasChanged(t,e){return!_e(t,e)},type:Object},selectionsWithData:{type:Object},splitSelections:{type:Object},readOnly:{type:Boolean,reflect:!0},dataMarks:{type:Array},parentGraphId:{type:Number},leftTraces:{type:Array},isCollecting:{type:Boolean},dataMarkBoxPositions:{type:Object},isReplayActive:{type:Boolean}}}constructor(){super();this.$dataWorld=null,this._bracketPositions={},this._dataMarksData=[],this._infoBoxPositions={},this._isDataMarkMoving=!1,this._manualFitPosition=null,this._manualFitPositionPx=null,this._startingManualFitPositionPx=null,this._startX=null,this.graphId="",this.activeManualFit=null,this.pinching=!1,this.selections=[],this.interpolate=!1,this.tangent=!1,this.examineHidden=!0,this.examinePx=0,this.examineUnits="",this.xPoint={},this.yPoints=[],this.examineFormatSt="%.2f",this.examinePreventClose=!1,this.examineFlagsAllFit=!0,this.examinePin={},this.selectionsWithData={},this.splitSelections={},this.readOnly=!1,this.dataMarks=[],this._dataMarks=[],this.coreGraphEl={},this.graphInstance={},this.isCollecting=!1,this.dataMarkBoxPositions={},this.leftTraces=[],this._dataMarkWrapperRef=Ve(),this.isReplayActive=!1,sn(this,{_completeManualFitUpdate:Sr})}firstUpdated(){[this.$accessibility,this.$dataWorld,this.$dataAnalysis,this.$popoverManager]=this.requestServices(["accessibility","dataWorld","dataAnalysis","popoverManager"]),this.graph=this.parentElement,this.yPoints=[],this.tapCount=0,this.examWrapperEl=this.shadowRoot.querySelector("#graph_examine_wrapper"),this.examEl=this.shadowRoot.querySelector("#graph_examine"),this.analysisWrapperEl=this.shadowRoot.querySelector("#analysis_wrapper"),this.graphExamineHandleEl=this.shadowRoot.querySelector("#graph_examine_handle"),this.pointYValueEls=this.shadowRoot.querySelectorAll(".point-overflow-window__y-value",".point-highlight__y-value"),this.selectionWrapperEl=this.shadowRoot.querySelector("#selection_wrapper"),this.annotationWrapperEl=this.shadowRoot.querySelector("#annotation_wrapper"),this.getSelectionWrapperBoundRect=this.selectionWrapperEl.getBoundingClientRect.bind(this.selectionWrapperEl),this.boundGetClosestX=this.getClosestX.bind(this),Yt(this.analysisWrapperEl,"track",this.selectionHandler.bind(this)),Yt(this.analysisWrapperEl,"down",this.selectionHandler.bind(this)),Yt(this.analysisWrapperEl,"up",this.examineHandler.bind(this)),this.shadowRoot.querySelectorAll("#manual-fit-handles button").forEach(e=>{Yt(e,"track",this._handleManualFitDrag.bind(this)),Yt(e,"down",s=>{s.stopPropagation(),s.detail.sourceEvent.stopPropagation()}),Yt(e,"up",s=>{s.stopPropagation(),s.detail.sourceEvent.stopPropagation()})}),Yt(this.examEl,"track",this.examineHandler.bind(this)),Yt(this.graphExamineHandleEl,"track",this.examineHandler.bind(this)),this.pointYValueEls.forEach(e=>{Yt(e,"track",this.examineHandler.bind(this))});let t=fe(this.updateExamineAndTangent.bind(this),300);this._handleGraphResize=()=>{this._updateManualFitHandles(),t(),requestAnimationFrame(()=>this._triggerAnnotationPositionUpdate())},this.graph.addEventListener("resize",this._handleGraphResize),this.addEventListener("touchstart",e=>{e.touches.length>1&&(this.pinching=!0)}),this.addEventListener("touchend",e=>{this.pinching&&e.touches.length===0&&(this.pinching=!1)}),this.addEventListener("touchcancel",e=>{this.pinching&&e.touches.length===0&&(this.pinching=!1)}),this.addEventListener("selection-deleted",e=>{let s=e.detail,o=this._bracketPositions,{[s]:n}=o,a=oi(o,[Ca(s)]);this._bracketPositions=tt({},a)}),this.graphInstance.addEventListener("data-values-updated",()=>{this._triggerAnnotationPositionUpdate()}),this.graphInstance.addEventListener("graph-grid-updated",()=>{let e=this.graphInstance.getAxis("base");this.selections.forEach(s=>{let{range:{max:n}}=s;s.infoBoxPosition.x=e.p2c(n)}),this._triggerAnnotationPositionUpdate()}),this.addEventListener("infobox-position-changed",e=>{let{selectionId:s,bracketPositions:n,infoBoxPosition:a,isDragging:o=!1}=e.detail,r=this.graphInstance.getAxis("base"),l=this.selections.find(c=>c.id===s);if(l&&(!this._infoBoxPositions[s]||!a))this._infoBoxPositions=wt(tt({},this._infoBoxPositions),{[s]:{x:r.p2c(l.range.max),y:0}});else if(a){let{x:c,y:d,isCollapsed:h}=a;this._infoBoxPositions=wt(tt({},this._infoBoxPositions),{[s]:{x:c,y:d}});let u=this.selectionsWithData[s]||{},p=u.udmId||u.manualFitId||0;!o&&p&&this.$dataWorld.setInfoBoxInfo(p,{x:this.basePxToPercent(c),y:this.leftPxToPercent(d),isCollapsed:h})}n&&(this._bracketPositions=wt(tt({},this._bracketPositions),{[s]:n}))}),this.graphInstance.addEventListener("graph-grid-updated",this.handleDataMarksGridUpdate.bind(this)),this._autorunCancel1=we(()=>{this.$dataWorld._dataMarks.forEach(()=>{}),this.dataMarks=this.getDataMarksForActiveTraces()}),this._autorunCancel2=we(()=>{let e=[];this.$dataWorld._dataMarks.forEach(s=>{s.appearanceInfo.forEach(n=>{n.graphId===this.parentGraphId&&e.push({id:s.id,x:n.position.x,y:n.position.y})})}),_e(this._cachedDataMarkPositions,e)||(e.forEach(s=>{this.dataMarkBoxPositions[s.id]&&s.x!==-1&&s.y!==-1&&(this.dataMarkBoxPositions[s.id].x=this.basePercentToPx(s.x),this.dataMarkBoxPositions[s.id].y=this.leftPercentToPx(s.y))}),this.requestUpdate(),this._cachedDataMarkPositions=e)}),this.eventBinder=new le,this.eventBinder.bindListeners({source:this.$dataWorld,target:this,eventMap:{"column-group-updated":"updateDataMarksData","column-values-changed":"updateDataMarksData","column-name-changed":"updateDataMarksData"}})}willUpdate(t){t.has("activeManualFit")&&(this._manualFitPositionPx=null,this._updateManualFitHandles())}updated(t){t.forEach((e,s)=>{switch(s){case"examinePin":this._examinePinChanged(this.examinePin,e);break;case"selectionsWithData":this._selectionsWithDataChanged(this.selectionsWithData,e);break;case"leftTraces":this.dataMarks=this.getDataMarksForActiveTraces(),this.resetInactiveDataMarkLocations(),this.updateDataMarksData(),this.readOnly||this.updateDataMarkBoxPositions();break;case"dataMarks":this.updateDataMarksData(),this.removeOldDataMarkLines(),this.requestUpdate();break;default:}})}disconnctedCallback(){super.disconnctedCallback(),this.graph.removeEventListener("resize",this._handleGraphResize),this.eventBinder.unbindAll(),this._autorunCancel1&&this._autorunCancel1(),this._autorunCancel2&&this._autorunCancel2()}_checkThatAnnotationRangeIsOnGraph(t,e){let s=e.baseColumn.id,n=this.graphInstance.getBaseRange(),a=this.graphInstance.getLeftRange(),o=0,r=0;switch(t.type){case be.FREE:return!0;case be.POINT:{let m=t.getPointIndexForColumn(s);o=m,r=m;break}case be.RANGE:{let{startIndex:m,endIndex:f}=t.getRangeIndexesForColumn(s);o=m,r=f;break}default:return!1}let l=e.yColumn.values.slice(o,r+1).filter(Ie),c=Math.min(...l),d=Math.max(...l),h=e.baseColumn.values.slice(o,r+1).filter(Ie),u=Math.min(...h),p=Math.max(...h),g=e.baseColumn.struckRows.filter(m=>m>=o&&m<=r);return c<=a.max&&d>=a.min&&u<=n.max&&p>=n.min&&g.length<h.length}_completeManualFitUpdate(){this._manualFitPosition=this._manualFitPlotPosition,this.activeManualFit.coefficients=this._manualFitCoefficients,this.dispatchEvent(new CustomEvent("manual-fit-position-changed",{bubbles:!0,composed:!0,detail:this._manualFitCoefficients}))}_createHairlineSvg(t){return this._getTargetsForAnnotation(t).map(e=>di`
        <line
          class="annotation-hairline"
          data-annotation-id=${t.id}
          data-target-column-id=${e.columnId}
        />
      `)}_handleManualFitDrag(t){t.stopPropagation(),t.detail.sourceEvent instanceof Touch||t.detail.sourceEvent.stopPropagation();let{state:e}=t.detail;if(t.type!=="track")return;if(e==="start"){this._startingManualFitPositionPx=tt({},this._manualFitPositionPx);return}if(e==="end"){this._startingManualFitPositionPx=null;return}let s=t.composedPath().at(0),{handle:n}=s.dataset,{x:a,y:o}=t.detail,r=this.getBoundingClientRect();this._translateManualFitHandles(n,a,o,r),this._completeManualFitUpdate()}_handleManualFitKeydown(t){let{code:e,shiftKey:s}=t;if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(e))return;let n=t.composedPath().at(0),a=this.getBoundingClientRect(),{handle:o}=n.dataset;this._startingManualFitPositionPx=tt({},this._manualFitPositionPx);let r=this._manualFitPositionPx[`x${o}`]+a.left,l=this._manualFitPositionPx[`y${o}`]+a.top,c=s?50:10;switch(e){case"ArrowUp":l-=c;break;case"ArrowRight":r+=c;break;case"ArrowDown":l+=c;break;case"ArrowLeft":r-=c;break;default:break}this._translateManualFitHandles(o,r,l,a),this._completeManualFitUpdate()}_getTargetsForAnnotation(t){let e=this.coreGraphEl.getAnalysisTraces().map(s=>s.yColumn.id);return t.targetRecords.filter(s=>e.includes(s.columnId))}_translateManualFitHandles(t,e,s,n){let{_startingManualFitPositionPx:a}=this,o=tt({},this._manualFitPositionPx);function r(l,c,d,h){(d||d===0)&&(l[`x${c}`]=d),(h||h===0)&&(l[`y${c}`]=h)}switch(t){case"1":{r(o,t,qt(e-n.left,0,o.x2-5),qt(s-n.top,0,n.height));let{x1:l,y1:c,x2:d,x3:h,y3:u}=o,p=(u-c)/(h-l);r(o,"2",null,p*(d-l)+c);break}case"2":{let l=a.x1-a.x2,c=a.y1-a.y2,d=a.x3-a.x2,h=a.y3-a.y2,u=qt(e+l-n.left,0,n.width),p=qt(s+c-n.top,0,n.height),g=qt(e-n.left,0,n.width),m=qt(s-n.top,0,n.height),f=qt(e+d-n.left,0,n.width),b=qt(s+h-n.top,0,n.height),v=u>0&&u<n.width&&f>0&&f<n.width,C=p>0&&p<n.height&&b>0&&b<n.height;r(o,t,v?g:null,C?m:null),r(o,"1",v?u:null,C?p:null),r(o,"3",v?f:null,C?b:null);break}case"3":{r(o,t,qt(e-n.left,o.x2+5,n.width),qt(s-n.top,0,n.height));let{x1:l,y1:c,x2:d,x3:h,y3:u}=o,p=(u-c)/(h-l);r(o,"2",null,p*(d-l)+c);break}default:break}this._manualFitPositionPx=o}_triggerAnnotationPositionUpdate(){this.shadowRoot.querySelectorAll("vst-ui-graph-annotation").forEach(e=>{e.resize()})}_updateManualFitHandles(){if(!this.activeManualFit)return;let t=this._manualFitPositionPx!==null,e=this.graphInstance.getAxis("base"),s=this.graphInstance.getAxis("left"),[n,a]=this.activeManualFit.coefficients,{min:o,max:r}=e.range,l=r-o,c=d=>n*d+a;this._manualFitPositionPx={x1:e.p2c(t?this._manualFitPosition.x1:o+l*.2),y1:s.p2c(t?this._manualFitPosition.y1:c(o+l*.2)),x2:e.p2c(t?this._manualFitPosition.x2:o+l*.5),y2:s.p2c(t?this._manualFitPosition.y2:c(o+l*.5)),x3:e.p2c(t?this._manualFitPosition.x3:o+l*.8),y3:s.p2c(t?this._manualFitPosition.y3:c(o+l*.8))},this._manualFitPosition=this._manualFitPlotPosition}async _examinePinChanged(t={},e={}){let{examineSettings:s}=t;if(!s)return;let[n,a]=[t,e].map(({examinePosition:r={}})=>r.examineHidden),o=n!==a;this.tangent=s.tangentEnabled,this.interpolate=s.interpolate,this.examineHidden=n,o&&await this.updateComplete,this.updateExamineAndTangent()}async _selectionsWithDataChanged(t={}){await import("./vst-core-graph-selection-NH3OD376.js");let e=this.selections.map(r=>r.id),s=Object.keys(t);Ia(s,e).forEach(r=>{let l=this.createSelection(wt(tt({},t[r]),{id:r}));this.selections.push(l)}),Ia(e,s).forEach(r=>{this.getSelectionElementById(r).remove();let h=this._bracketPositions,{[r]:l}=h,c=oi(h,[Ca(r)]);this._bracketPositions=tt({},c);let d=this.selections.findIndex(u=>u.id===r);d>-1&&this.selections.splice(d,1)});let{rightAxisEnabled:o}=this.coreGraphEl;s.forEach(r=>{let l=t[r],c=this.getSelectionElementById(r);c.highlightOnly=l.highlightOnly,c.udmId=l.udmId,c.permanent=l.permanent,c.enabledAnalysisType=l.analysisType,c.infoBoxData=l.infoBoxData,c.traces=this.coreGraphEl?.traces.filter(d=>d.axis==="left"||o),c&&!_e(c.range,l.range)&&(c.range=l.range),this.bindInfoBox(c,l.analysisType)})}updateDataMarksData(){this.isReplayActive||(this.dataMarks.forEach(t=>{this._dataMarksData[t.id]=this.getDataMarkData(t)}),this.requestUpdate())}async handleDataMarksGridUpdate(){this.readOnly||(this.dataMarks.forEach(t=>{let{width:e}=this.dataMarkBoxPositions[t.id],s=this.dataMarkToBasePxLocation(t),n=this.dataMarkToLeftPxLocation(t),a=s-e,o=s>0,{x:r}=t.getPositionOnGraph(this.parentGraphId);o?o&&a<0&&r===-1?t.setPositionOnGraph(this.parentGraphId,{x:this.basePxToPercent(s-a+Hd),y:this.leftPxToPercent(n-ga)}):this.isReplayActive&&t.setPositionOnGraph(this.parentGraphId,{x:this.basePxToPercent(s),y:this.leftPxToPercent(n-ga)}):t.setPositionOnGraph(this.parentGraphId,{x:-1,y:-1}),t.setHasMoved(this.parentGraphId,!1)}),this.updateDataMarkBoxPositions(),this.dataMarks=[],await this.updateComplete,this.dataMarks=this.getDataMarksForActiveTraces())}resetInactiveDataMarkLocations(){let t=this.leftTraces.map(s=>s.yColumn.setId);this.$dataWorld.getDataMarksForGraph(this.parentGraphId).filter(s=>!t.includes(s.setId)).forEach(s=>{s.setPositionOnGraph(this.parentGraphId,{x:-1,y:-1}),s.setHasMoved(this.parentGraphId,!1)})}handleDataMarkMoving(t){let{state:e}=t.detail;e==="start"&&(this._isDataMarkMoving=!0),e==="end"&&(this._isDataMarkMoving=!1)}handleDataMarkTextUpdate(t){let{dataMarkId:e,value:s}=t.detail,n=this.$dataWorld.getDataMarksForGraph(this.parentGraphId).find(a=>a.id===e);!n||n.setText(s)}handleDataMarkEditingUpdate(t){let{dataMarkId:e,editing:s}=t.detail,n=this.$dataWorld.getDataMarksForGraph(this.parentGraphId).find(a=>a.id===e);n&&n.setEditingOnGraph(s?this.parentGraphId:0)}handleDeleteDataMark(t){let{id:e}=t.detail;this.dispatchEvent(new CustomEvent("open-dialog",{bubbles:!0,composed:!0,detail:{dialog:"message_box",params:{title:k("Delete Data Mark"),content:k("Do you want to permanently delete this data mark?"),actions:[{id:"cancel",message:k("Cancel"),variant:"text",onClick:async()=>{this.dispatchEvent(Ge("message_box"))}},{id:"delete",message:k("Delete"),variant:"danger",onClick:async()=>{this.dispatchEvent(Ge("message_box"));let s=this.$dataWorld.getDataMarksForGraph(this.parentGraphId).find(n=>n.id===e);this.$dataWorld.removeDataMark(s)}}]},onClose:()=>{}}}))}_findDataMarkBaseColumn(t){let e=this.$dataWorld.getColumnsForSet(t.setId).filter(s=>s.prefersBase).find(s=>s.type==="time");return e||(e=this.$dataWorld.getColumnsForSet(t.setId).find(s=>s.name===k("Time"))),e||console.warn(`Could not find base column for dataMark ${t.id}`),e}getDataMarkData(t){let e=this._findDataMarkBaseColumn(t),s=[{key:e.name,value:e.getFormattedValue(this.getDataMarkCoordinate(t,!0)),units:e.units}];return this.leftTraces.filter(n=>t.setId===n.yColumn.setId).forEach(n=>{let{yColumn:a}=n,o={key:a.name,value:a.getFormattedValue(this.getDataMarkCoordinate(t,!1,a.id)),units:a.units};s.push(o)}),s}getDataMarkCoordinate(t,e,s){return e?this._findDataMarkBaseColumn(t).values[t.rowIndex]:this.$dataWorld.getColumnById(s).values[t.rowIndex]}dataMarkToBasePxLocation(t){let e=this._findDataMarkBaseColumn(t);return e?this.graphInstance.getAxis("base").p2c(e.values[t.rowIndex]):0}dataMarkToLeftPxLocation(t,e){let s=this.leftTraces.find(r=>Yi(r,t)),n=s?s.yColumn.id:null,a=e||n,o=this.$dataWorld.getColumnById(a);return o?this.graphInstance.getAxis("left").p2c(o.values[t.rowIndex]):0}findActiveColumnIdForDataMark(t){let e=this.leftTraces.find(s=>t.setId===s.yColumn.setId);return e?e.yColumn.id:null}basePxToPercent(t){return Math.round(t/this.getBoundingClientRect().width*pa)}leftPxToPercent(t){return Math.round(t/this.getBoundingClientRect().height*pa)}basePercentToPx(t){return this.getBoundingClientRect().width*t/pa}leftPercentToPx(t){return this.getBoundingClientRect().height*t/pa}getBaseDataMarkElLocation(t){if(this.readOnly)return this.dataMarkBoxPositions[t.id]?this.dataMarkBoxPositions[t.id].x:this.dataMarkToBasePxLocation(t);let{x:e}=t.getPositionOnGraph(this.parentGraphId),s=this.basePercentToPx(e);return e!==-1?s:this.dataMarkToBasePxLocation(t)}getLeftDataMarkElLocation(t){if(this.readOnly)return this.dataMarkBoxPositions[t.id]?this.dataMarkBoxPositions[t.id].y:this.dataMarkToLeftPxLocation(t);let{y:e}=t.getPositionOnGraph(this.parentGraphId),s=this.leftPercentToPx(e);return e!==-1?s:this.dataMarkToLeftPxLocation(t)-ga}updateDataMarkElPosition(t){let{isInitialPlacement:e,draggableId:s,draggableRect:n,absolutePosition:{centerRight:{x:a,y:o},topLeft:{x:r}}}=t.detail,{width:l}=n;if(Object.values(JSON.parse(JSON.stringify(n))).every(m=>m===0))return;let d=!e&&!this._isDataMarkMoving,h=this.dataMarks.find(m=>m.id===s),u=this.dataMarkToBasePxLocation(h)>0,p=e&&r<0&&u,g=p?Hd-r:0;e||h.setHasMoved(this.parentGraphId,!0),this.dataMarkBoxPositions[s]={x:a+g,y:o,isInitialPlacement:e,width:l},(p||d)&&!this.readOnly&&h.setPositionOnGraph(this.parentGraphId,{x:this.basePxToPercent(a+g),y:this.leftPxToPercent(o)}),this.requestUpdate()}getDataMarksForActiveTraces(){let t=this.leftTraces.map(s=>s.yColumn.setId);return this.$dataWorld.getDataMarksForGraph(this.parentGraphId).filter(s=>t.includes(s.setId)&&(this.leftTraces.some(n=>Yi(n,s))||this.isReplayActive))}removeOldDataMarkLines(){let t=this.dataMarks.map(s=>s.id.toString());Object.keys(this.dataMarkBoxPositions).forEach(s=>{t.includes(s)||delete this.dataMarkBoxPositions[s]})}async addDataMark(){let t=this.$dataWorld.getColumnById(this.graph.baseColumnId).group,[e]=this.coreGraphEl.leftColumnIds;if(t&&e){let s=this.$dataWorld.getColumnById(e).values.length-1,n=this.$dataWorld.getGraphUdmIds();this.$dataWorld.addDataMark(s,this.$dataWorld.currentDataSet.id,n)}}updateDataMarkBoxPositions(){this.dataMarks.forEach(t=>{let e=this.dataMarkToBasePxLocation(t),s=this.dataMarkToLeftPxLocation(t)-ga,n=this.dataMarkBoxPositions[t.id],a=n?n.isInitialPlacement:!0,o=n?n.width:0,{x:r,y:l}=t.getPositionOnGraph(this.parentGraphId);(r===-1||l===-1)&&(this.dataMarkBoxPositions[t.id]={x:e,y:s,isInitialPlacement:a,width:o})})}_updateAnnotationHairline(t){let{annotation:e}=t.detail,s=t.target.getBoundingClientRect(),n=this.annotationWrapperEl.getBoundingClientRect();e.type!==be.FREE&&this._getTargetsForAnnotation(e).forEach(a=>{let o=this.coreGraphEl.getAnalysisTraces().find(g=>g.yColumn.id===a.columnId),r=this.graphInstance.getAxis("base"),l=this.graphInstance.getAxis(o.axis),c,d;if(e.type===be.POINT){let g=e.getPointIndexForColumn(o.baseColumn.id),m=o.getIndexOffsetFromSeries(g),[f,b]=o.seriesData[m];c=r.p2c(f),d=l.p2c(b)}else if(e.type===be.RANGE){let{startIndex:g,endIndex:m}=e.getRangeIndexesForColumn(o.baseColumn.id),f=o.getIndexOffsetFromSeries(g),b=o.getIndexOffsetFromSeries(m),v=o.seriesData.slice(f,b+1),C=!(v.length%2),y=Math.floor((v.length-1)/2),[w,x]=v.at(y),_=Math.floor(v.length/2),[S,A]=v.at(_),[D,M]=C?[(w+S)/2,(x+A)/2]:[S,A];c=r.p2c(D),d=l.p2c(M)}let h=s.left-n.left+s.width/2,u=s.top-n.top+s.height/2,p=this.shadowRoot.querySelector(`line[data-annotation-id="${e.id}"][data-target-column-id="${a.columnId}"]`);p&&(p.setAttribute("x1",c),p.setAttribute("y1",d),p.setAttribute("x2",h),p.setAttribute("y2",u))})}tapHandler(t){t.key==="Enter"&&(this.fireExaminePositionUpdate({examineHidden:!1}),setTimeout(()=>this.graphExamineHandleEl.focus(),0)),!this.pinching&&(this.tapCount++,this.tapCount===1&&setTimeout(()=>{this.tapCount!==1&&this.dblClickHandler.call(this,t),this.tapCount=0},300))}dblClickHandler(){this.readOnly||(this.fireExaminePositionUpdate({examineHidden:!0}),this.graph.autoscale(void 0,Se.USER))}examineHandler(t){if(this.axisMoving)return;let{graphInstance:e}=this,{$popoverManager:s}=this,n;if(n=this.pinching,n=n||s.hasPopovers()&&!s.hasDialogs(),!n)if(this.isSelecting)this.isSelecting=!1;else{this.dispatchEvent(new CustomEvent("delete-temp-selection"));let a=this.getBoundingClientRect(),o=t.detail.x-a.left;a.right-t.detail.x<0&&(o=a.width-1),t.detail.x-a.left<0&&(o=0),t.type==="track"&&(this.isExamineTracking=t.detail.state==="track",t.stopPropagation());let r=e.getAxis("base"),l=this.coreGraphEl.containsCategorical,c=p=>this.getClosestX({px:p}).pt,d=p=>Math.round(r.p2i(r.c2p(p))),h=l?d(o):c(o),u=l?d(o):r.c2p(o);this.fireExaminePositionUpdate({closestXPt:h,xPosition:this.interpolate?u:h,isGestureFinished:t.type==="up",examineHidden:!1,isRangeIndexBased:l})}}fireExaminePositionUpdate(t){this.dispatchEvent(new CustomEvent("examine-positioning-changed",{detail:{graphId:this.graphId,positionUpdate:t}}))}fireExamineSettingsUpdate(t){this.dispatchEvent(new CustomEvent("examine-settings-changed",{detail:{graphId:this.graphId,settingsUpdate:t}}))}_isXFlagInView(t,e,s){let n=e.querySelector(".graph-examine__handle"),a=this.shadowRoot.querySelector(".graph-examine__delete"),r=n.getBoundingClientRect().width/2;t<r?n.classList.add("graph-examine__handle--flip-right"):n.classList.remove("graph-examine__handle--flip-right"),t>s.width-r?(n.classList.add("graph-examine__handle--flip-left"),a?.classList.add("graph-examine__delete--flip-left")):(n.classList.remove("graph-examine__handle--flip-left"),a?.classList.remove("graph-examine__delete--flip-left"))}_isYFlagsInView(t,e,s,n){let a=s?this.shadowRoot.querySelector(".point-highlight__y-value"):this.shadowRoot.querySelector(".point-overflow-window");if(a){let o=a.getBoundingClientRect();n.width-t<o.width?e.classList.add("flip-y-flag-left"):e.classList.remove("flip-y-flag-left")}}updateExamineAndTangent(){let{interpolate:t,tangent:e,examEl:s,examWrapperEl:n,examineFlagsAllFit:a,graphInstance:o,coreGraphEl:r,examinePin:l}=this;if(!l)return;let{examinePosition:{xPosition:c,examineHidden:d=!0,isRangeIndexBased:h}={}}=l,u=this.getBoundingClientRect(),p=r&&r.baseColumn,g=H=>o.getAxis(H),m=g("base");if(c===null||!(s&&o))return;let f=p?.group?.units??"",b=p?.formatStr??"%.0f",v=h?m.i2p(c):this.getClosestX({pt:c}).pt,C=h?this.getPointsForX({index:c}):this.getPointsForX({xPoint:v}),y=m.p2c(v);this._isXFlagInView(y,s,u),setTimeout(()=>{this._isYFlagsInView(y,n,a,u)});let w,x;if(t){let H=o.getAxis("base").p2c(c),V=this.getClosestX({px:H});w=Ut.toInterpolatedYPoint(Ut.calculateInterpolatedPoints(V,this.getPointsForX.bind(this),H)),x=Ut.formatInterpolatedYPoint(g),b=Ud(b,2)}else if(e){let H=(...V)=>this.$dataAnalysis.computeTangentSlope(...V);w=Ut.getComputeYPointWithTangentInfo(H),x=Ut.formatYPoint(g,k)}else w=Ut.toYPoint,x=Ut.formatYPoint(g,k);let _=C.map(w),S=Ut.toXPoint(_[0],C[0],v),A=Ut.formatXValue(b,S,f),M=_.map(x).filter(H=>parseFloat(H.top)<=u.height&&parseFloat(H.top)>=0),F=this.$accessibility,E=parseFloat(window.getComputedStyle(document.body).fontSize);e?this.style.setProperty("--y-value-flag-height","3rem"):this.style.removeProperty("--y-value-flag-height");let B=this.examEl.querySelector(".graph-examine__delete"),P=parseFloat(getComputedStyle(this).getPropertyValue("--y-value-flag-height"))*E*F.scale,T=F.scale*9,I=parseFloat(u.height),et=B?B.clientTop+B.clientHeight:0;this.examineFlagsAllFit=M.length*(P-T)<=I-et,this.examineFlagsAllFit?this.yPoints=Nd(M,P,et,I,T):this.yPoints=M,this.xPoint=A,this.examinePx=Ut.calculateExaminePos(o.getAxis("base"),S,s.offsetWidth),r.removeAllTangentTraces(),e&&!d&&(_.forEach(({baseColId:H,yColId:V,slope:K,axis:L})=>{let $={accessibilityScale:r.accessibilityScale,getAxis:j=>o.getAxis(j)},U=this.$dataAnalysis.generateTangentTraceData(H,V,S,K,L,$);r.addTangentTrace(U)}),r.updatePlotData())}static calculateExaminePos(t,e,s){return t.p2c(e)-s/2}static toXPoint({xPoint:t}={},{point:{x:e}}={point:{}},s){return t||e||s}static toYPoint({yCol:t,yUnits:e,traceColor:s,point:n,axis:a}){return{formatStr:t&&t.formatStr,xPoint:n.x,yPoint:n.y,units:e,color:s,point:n,axis:a}}static getComputeYPointWithTangentInfo(t){return e=>{let{point:s,baseUnits:n,yUnits:a,baseColId:o,yColId:r}=e,l=t(o,r,s.x);return wt(tt({},Ut.toYPoint(e)),{slope:l.success?l.slope:Number.NaN,slopeUnits:n?`${a||1}/${n}`:`${a}`,baseColId:o,yColId:r})}}static toInterpolatedYPoint(t){return({yCol:e,traceColor:s,yUnits:n,point:a,axis:o},r)=>{let{xPoint:l,yPoint:c}=t(r);return{formatStr:e&&e.formatStr,xPoint:l,yPoint:c,units:n,color:s,point:a,axis:o}}}static formatXValue(t="%.2f",e,s){return{value:typeof e=="number"?Vt(t,e):e,units:s}}static formatYPoint(t,e){return({yPoint:s,xPoint:n,units:a,point:o,color:r,slope:l,slopeUnits:c,formatStr:d="%.2f",axis:h="left"})=>{let u=t("base"),p=t(h);return{value:Vt(d,s),units:a,top:`${p.p2c(s)}px`,left:`${u.p2c(n)}px`,point:o,slope:Number.isNaN(l)?e("Not defined","mathematical"):Number.parseFloat(l).toPrecision(3),slopeUnits:c,traceColor:r}}}static formatInterpolatedYPoint(t){return({yPoint:e,xPoint:s,units:n,point:a,color:o,formatStr:r="%.2f",axis:l="left"})=>{let c=t("base"),d=t(l);return{value:Vt(Ud(r,2),e),units:n,top:`${d.p2c(e)}px`,left:`${c.p2c(s)}px`,point:a,traceColor:is(o,1)}}}static calculateInterpolatedPoints(t,e,s){let{px:n,pt:a,nextClosest:o,closestBelow:r,closestAbove:l}=t,c={px:n,pt:a},d,h;r&&l?(d=r,h=l):(d=c.pt<o.pt?c:o,h=c.pt>o.pt?c:o);let u=(s-d.px)/(h.px-d.px);u=isFinite(u)?u:0;let p=h.pt*u+(1-u)*d.pt,g=e({xPoint:d.pt}),m=e({xPoint:h.pt});return f=>{let b=0;return g[f]?m[f]?b=m[f].point.y*u+(1-u)*g[f].point.y:b=g[f].point.y*u:b=m[f].point.y*u,{xPoint:p,yPoint:b}}}selectionHandler(t){if(this.pinching||this.axisMoving||this._isDataMarkMoving)return;let e=this.getBoundingClientRect(),{state:s}=t.detail,n={},a=t.detail.x-e.left;if(t.type==="down"&&(this._startX=a),s==="track"&&this._startX){if(t.detail.dx>25||t.detail.dx<-25||this.isSelecting){this.isSelecting=!0,this.examWrapperEl&&!this.examineHidden&&this.fireExaminePositionUpdate({examineHidden:!0}),t.detail.dx<0?n={min:Math.max(a,0),max:this._startX}:n={min:this._startX,max:Math.min(a,e.width)};let o=this.graphInstance.getAxis("base"),r=d=>this.getClosestX({px:d}).pt,l=d=>Math.round(o.p2i(o.c2p(d))),c=this.coreGraphEl.containsCategorical?l:r;this.dispatchEvent(new CustomEvent("new-selection-gesture",{detail:{graphId:this.graphId,currentRange:yr(n,c),isRangeIndexBased:this.coreGraphEl.containsCategorical}}))}}else s==="end"&&(this._startX=null,setTimeout(()=>{this.isSelecting=!1}),this.dispatchEvent(new CustomEvent("new-selection-gesture-end")))}deleteExamineHandler(t){this.pinching||(this.fireExaminePositionUpdate({examineHidden:!0}),t.stopPropagation())}infoBoxMoveHandler(t,e){let s=t.shadowRoot.querySelector("#header"),n=s.getBoundingClientRect().height,a=s.getBoundingClientRect().width,o=this.getBoundingClientRect(),r=e.detail,{state:l}=r,c=()=>{requestAnimationFrame(()=>{let{boxTopAtStart:d,boxLeftAtStart:h}=this.infoBoxMoveHandler,{dy:u,dx:p}=r;d+u<o.top&&u<0?u=o.top-d:d+u+n>o.bottom&&u>0&&(u=o.bottom-d-n),h+p<o.left&&p<0?p=o.left-h:h+p+a>o.right&&p>0&&(p=o.right-h-a),t.translateYLength=`${u}px`,t.translateXLength=`${p}px`})};if(l==="start")t.classList.add("translating"),this.infoBoxMoveHandler.boxTopAtStart=t.getBoundingClientRect().top,this.infoBoxMoveHandler.boxLeftAtStart=t.getBoundingClientRect().left;else if(l==="track")c();else if(l==="end"){let d=t.getBoundingClientRect();requestAnimationFrame(()=>{t.topOffset=`${(d.top-o.top)/o.height*100}%`,t.translateYLength="",t.leftOffset=t.flippedLeft?d.right-o.left:d.left-o.left,t.translateXLength="",setTimeout(()=>{t.classList.remove("translating")})})}}createSelection(t){let e=document.createElement("vst-core-graph-selection");if(e.graphInstance=this.graphInstance,e.getClosestX=this.boundGetClosestX,e.readOnly=this.readOnly,this.selectionWrapperEl.appendChild(e),e.id=t.id,e.permanent=t.permanent,e.range=t.range,e.isRangeIndexBased=t.isRangeIndexBased,t.min!==void 0&&t.max!==void 0&&(e.min=t.min,e.max=t.max),t.persistForSession&&(e.persistForSession=t.persistForSession),t.infoBox&&t.infoBox.x!==-1&&t.infoBox.y!==-1){let{x:s,y:n,isCollapsed:a}=t.infoBox;e.infoBoxPosition={x:this.basePercentToPx(s),y:this.leftPercentToPx(n),isCollapsed:a}}return e}async _deleteAnnotation(t){await this.$dataWorld.removeGraphAnnotation(t).catch(e=>{console.error(e)}),this.coreGraphEl.updatePlotData()}async addAnnotation(t=!1){try{let e=await this.$dataWorld.addGraphAnnotation(this.graph.udmId,{}),s=this.coreGraphEl.getAnalysisTraces();if(!e.id)throw new Error("No udmId generated for annotation");if(t){if(!this.examineHidden)s.forEach(n=>{let a=n.baseColumn.values.findIndex((o,r)=>o===this.examinePin.examinePosition.xPosition&&Ie(n.yColumn.values[r]));a>-1&&(e.setPointTarget(n.baseColumn.id,a),e.setPointTarget(n.yColumn.id,a))});else if(this.selections.filter(n=>!n.permanent).length){let n=this.selections.at(-1),a=this.selectionsWithData[n.id],{min:o,max:r}=a.range;o!==r?s.forEach(c=>{let d=c.baseColumn.values.findIndex((u,p)=>u>=o&&u<r&&Ie(c.yColumn.values[p])),h=vr(c.baseColumn.values,(u,p)=>u<=r&&p>d&&Ie(c.yColumn.values[p]));d>-1&&h>-1&&(e.setRangeTarget(c.baseColumn.id,d,h),e.setRangeTarget(c.yColumn.id,d,h))}):s.forEach(c=>{let d=c.baseColumn.values.findIndex(h=>h===o);d>-1&&Ie(c.yColumn.values[d])&&(e.setPointTarget(c.baseColumn.id,d),e.setPointTarget(c.yColumn.id,d))})}}e.setEditingOnGraph(this.graph.udmId),e.setPositionOnGraph(this.graph.udmId,{x:500,y:500}),this.coreGraphEl.updatePlotData()}catch(e){console.error(e)}}async bindInfoBox(t,e){if(!e)return;await t.updateComplete,await this.updateComplete;let{infoBoxEl:s}=t;s&&(s.eventBinder&&(s.eventBinder.unbindAll(),s.eventBinder=null),s.style.display="none",s.offsetHeight,s.style.display="",s.eventBinder=new le,s.eventBinder.on(s,"infobox-moving",n=>{this.pinching||this.infoBoxMoveHandler(s,n)}))}getGraphBaseRange(){return this.graphInstance?this.graphInstance.getBaseRange():{}}getGraphPxWidth(){return this.clientWidth}getSelectionElementById(t){return this.selections.find(e=>e.id===t)}getBaseColumn(){return this.coreGraphEl.getBaseColumn()}_getBaseColumnUnits(){let t=this.getBaseColumn();return t?t.group.units:null}_getBaseColumnFormatString(){let t=this.getBaseColumn();return t?t.formatStr:"%0.3f"}getClosestX({px:t,pt:e}){let s=this.graphInstance.getAxis("base"),n=e??s.c2p(t),a;this.interpolate&&this.coreGraphEl.fitTraces.length?a=this.coreGraphEl.fitTraces.map(u=>u.dataPoints):a=this.coreGraphEl.getAnalysisTraces().map(u=>u.getDataPoints());let o={xVal:null,delta:1/0,index:-1},r={closest:wt(tt({},o),{xVal:n}),nextClosest:tt({},o),closestBelow:tt({},o),closestAbove:tt({},o)};a.forEach(u=>{for(let p=0;p<u.length;p++){let g=u[p][0],m=u[p][1];if(!Number.isNaN(g)&&!Number.isNaN(m)){let f={xVal:g,delta:Math.abs(n-g),index:p};r=Ut._updateClosestPoints(n,r,f)}}});let{closest:l,nextClosest:c,closestBelow:d,closestAbove:h}=r;return{pt:l.xVal,px:s.p2c(l.xVal),index:l.index,nextClosest:c.xVal!==null?{pt:c.xVal,px:s.p2c(c.xVal)}:null,closestBelow:d.xVal!==null?{pt:d.xVal,px:s.p2c(d.xVal)}:null,closestAbove:h.xVal!==null?{pt:h.xVal,px:s.p2c(h.xVal)}:null}}static _updateClosestPoints(t,e,s){let{closest:n,nextClosest:a,closestBelow:o,closestAbove:r}=e;return s.delta<n.delta?(a=n,n=tt({},s)):s.delta<a.delta&&(a=tt({},s)),s.xVal<=t&&s.delta<o.delta&&(o=tt({},s)),s.xVal>=t&&s.delta<r.delta&&(r=tt({},s)),{closest:n,nextClosest:a,closestBelow:o,closestAbove:r}}getPointsForX({xPoint:t,index:e}){let{fitTraces:s}=this.coreGraphEl,n=[],a;this.interpolate&&s.length>0?a=s.map(({traceColor:c,yColumnId:d,dataPoints:h,axis:u})=>({traceColor:c,yColumnId:d,dataPoints:h,axis:u})):a=this.coreGraphEl.getAnalysisTraces().map(c=>({traceColor:c.color,yColumnId:c.yColumn.id,dataPoints:c.getDataPoints(),yColumn:c.yColumn,baseColumn:c.baseColumn,axis:c.axis}));let r=c=>Number.isFinite(c)||typeof c=="string",l=(c,d)=>Number.isFinite(t)?Math.abs(c-t)<1e-13:d===e;return a.forEach(c=>{let d=c.dataPoints;for(let h=0;h<d.length;h++){let u=d[h][0],p=d[h][1];if(r(u)&&r(p)&&l(u,h)){let g=c.baseColumn||void 0,m=c.yColumn||this.$dataWorld.getColumnById(c.yColumnId);n.push({yCol:m,baseColId:g?g.id:void 0,yColId:c.yColumnId,baseUnits:g?g.group.units:"",yUnits:m?m.group.units:"",traceColor:c.traceColor,axis:c.axis,point:{index:h,x:u,y:p}})}}}),n}_handleExamineKeydown(t){this.dispatchEvent(new CustomEvent("examine-key-pressed",{detail:{currentPoint:this.xPoint,code:t.code,shift:t.shiftKey}}))}static get styles(){return[ut,Vd]}get _manualFitCoefficients(){let{x1:t,y1:e,x3:s,y3:n}=this._manualFitPlotPosition,a=(n-e)/(s-t),o=e-a*t;return[a,o]}get _manualFitPlotPosition(){let t=this.graphInstance.getAxis("base"),e=this.graphInstance.getAxis("left");return{x1:t.c2p(this._manualFitPositionPx.x1),y1:e.c2p(this._manualFitPositionPx.y1),x2:t.c2p(this._manualFitPositionPx.x2),y2:e.c2p(this._manualFitPositionPx.y2),x3:t.c2p(this._manualFitPositionPx.x3),y3:e.c2p(this._manualFitPositionPx.y3)}}get examineOffGraph(){let{xPosition:t=0}=this.examinePin?.examinePosition??{},{min:e=0,max:s=1}=this.coreGraphEl?.options?.baseRange??{};return t>s||t<e}get visibleAnnotations(){return this.$dataWorld?.annotations.filter(t=>t.type===be.FREE&&t.isShownOnGraph(this.graph.udmId)||this.coreGraphEl.getAnalysisTraces().some(e=>t.containsTargetColumn(e.yColumn.id)&&this._checkThatAnnotationRangeIsOnGraph(t,e)))||[]}render(){let t=this.annotationWrapperEl?.getBoundingClientRect(),e=()=>q`
      <svg><path style="fill:#c1d5d7;" d="m 23.793256,29.787531 v 10.040485 h -3.651084 l 6.389399,12.778796 6.389398,-12.778796 H 29.269884 V 29.787531 l 0.45451,-0.519171 h 10.040482 v 3.651087 L 52.54367,26.530045 39.764876,20.140647 v 3.651085 H 29.724394 l -0.45451,-0.516121 V 13.235127 h 3.651085 L 26.531571,0.45633011 20.142172,13.235127 h 3.651084 v 10.040484 l -0.517647,0.516121 H 13.235123 V 20.140647 L 0.45633011,26.530045 13.235123,32.919447 V 29.26836 h 10.040486 z"></svg>
      <svg viewBox="0 0 24 24"><path style="fill: var(--vst-color-bg-graph); stroke: var(--vst-color-fg-tertiary);" d="M12 1L23 12L12 23L1 12Z"></svg>
    `;return q`
      <div
        class="analysis-wrapper"
        id="analysis_wrapper"
        tabindex="0"
        @keyup="${s=>s.key==="Enter"?this.tapHandler(s):""}"
        @click="${this.tapHandler}"
      >
        <div id="examine_selection_wrapper">
          <svg id="hairlines">
            ${We(Object.entries(this._bracketPositions),([s])=>s,([s,n])=>n.map(a=>di`
                   <line
                    class="${s}"
                    style=${sl({stroke:a.color})}
                    x1="${this._infoBoxPositions[s].x}"
                    y1="${this._infoBoxPositions[s].y}"
                    x2="${a.x}"
                    y2="${a.y}"
                   />`))}
            ${We(this.dataMarks,s=>s.id,s=>this.leftTraces.filter(n=>Yi(n,s)).map(n=>di`<circle class="data-mark" cx="${this.dataMarkToBasePxLocation(s)}" cy="${this.dataMarkToLeftPxLocation(s,n.yColumn.id)}" r="2"/>`))}
            ${We(this.dataMarks,s=>s.id,s=>this.leftTraces.filter(n=>Yi(n,s)).map(n=>di`
                        <line
                         class="data-mark"
                         x1="${this.dataMarkToBasePxLocation(s)}"
                         y1="${this.dataMarkToLeftPxLocation(s,n.yColumn.id)}"
                         x2="${this.dataMarkBoxPositions[s.id.toString()]?.x||this.dataMarkToBasePxLocation(s)}"
                         y2="${this.dataMarkBoxPositions[s.id.toString()]?.y||this.dataMarkToLeftPxLocation(s,n.yColumn.id)}"
                        />`))}
            ${We(this.visibleAnnotations,s=>s.id,s=>this._createHairlineSvg(s))}
          </svg>
          <div
            class="graph-examine-wrapper ${this.isExamineTracking?"is-tracking":""}"
            id="graph_examine_wrapper"
            ?hidden="${this.examineHidden||this.examineOffGraph}"
          >
            <div class="graph-examine" id="graph_examine" style="left: ${this.examinePx}px;">
              ${this.examinePreventClose?"":q`
                    <button
                      class="graph-examine__delete"
                      id="graph_examine_delete"
                      ?hidden="${this.readOnly}"
                      @click="${this.deleteExamineHandler}"
                    >
                      <vst-ui-icon class="icon-close" .icon="${je}"></vst-ui-icon>
                    </button>
                  `}
              <div class="graph-examine__pin">
                <div
                  class="graph-examine__handle drag-handle"
                  id="graph_examine_handle"
                  tabindex="0"
                  ?read-only="${this.readOnly}"
                  @keydown="${this._handleExamineKeydown}"
                >
                  <vst-ui-icon .icon="${Ea}"></vst-ui-icon>
                  <div>
                    <span>${this.xPoint.value}</span>
                    <span>${this.xPoint.units}</span>
                  </div>
                  <vst-ui-icon .icon="${Ea}"></vst-ui-icon>
                </div>
              </div>

              ${this.examineFlagsAllFit?"":q`
                    <ul
                      class="point-overflow-window ${this.tangent?"point-overflow-window--tangent":""}"
                      @mouseup="${s=>s.stopPropagation()}"
                      @touchend="${s=>s.stopPropagation()}"
                    >
                      ${this.yPoints.map(s=>q`
                          ${this.tangent?q`
                                <li
                                  class="point-overflow-window__y-value"
                                  style="color: ${s.traceColor};"
                                >
                                  <div>${s.value} ${s.units}</div>
                                  <div>
                                    ${k("Slope")}: ${s.slope} ${s.slopeUnits}
                                  </div>
                                </li>
                              `:""}
                          ${this.interpolate?q`
                                <li
                                  class="point-overflow-window__y-value"
                                  style="background-color: ${s.traceColor}; color: #fff;"
                                >
                                  ${s.value} ${s.units}
                                </li>
                              `:""}
                          ${!this.interpolate&&!this.tangent?q`
                                <li
                                  class="point-overflow-window__y-value"
                                  style="color: ${s.traceColor};"
                                >
                                  ${s.value} ${s.units}
                                </li>
                              `:""}
                        `)}
                    </ul>
                  `}
            </div>

            ${this.examineFlagsAllFit?q`
                  ${this.yPoints.map(s=>this.tangent?q`
                          <div
                            class="point-highlight point-highlight--tangent"
                            style="top: ${s.top}; left: ${s.left}; border-color: ${s.traceColor};"
                          >
                            <div
                              class="point-highlight__y-value"
                              style="top: ${s.flagTop}; --bg: ${this.colorMode==="dark"?"var(--vst-color-bg-primary)":"rgba(255,255,255,0.95)"}; color: ${this.colorMode==="dark"?"var(--vst-color-fg-primary)":s.traceColor};"
                            >
                              <div>${s.value} ${s.units}</div>
                              <div>${k("Slope")}: ${s.slope} ${s.slopeUnits}</div>
                            </div>
                          </div>
                        `:q`
                          ${this.interpolate?q`
                                <div
                                  class="point-highlight"
                                  style="top: ${s.top}; left: ${s.left}; border-color: ${s.traceColor};"
                                >
                                  <div
                                    class="point-highlight__y-value"
                                    style="top: ${s.flagTop}; --bg: ${this.colorMode==="dark"?"var(--vst-color-bg-primary)":s.traceColor}; color: ${this.colorMode==="dark"?"var(--vst-color-fg-primary)":"var(--vst-color-bg)"};"
                                  >
                                    ${s.value} ${s.units}
                                  </div>
                                </div>
                              `:q`
                                <div
                                  class="point-highlight"
                                  style="top: ${s.top}; left: ${s.left}; border-color: ${s.traceColor};"
                                >
                                  <div
                                    class="point-highlight__y-value"
                                    style="top: ${s.flagTop}; --bg: ${this.colorMode==="dark"?"var(--vst-color-bg-primary)":"rgba(255,255,255,0.95)"};  color: ${this.colorMode==="dark"?"var(--vst-color-fg-primary)":s.traceColor};"
                                  >
                                    ${s.value} ${s.units}
                                  </div>
                                </div>
                              `}
                        `)}
                `:q`
                  ${this.yPoints.map(s=>q`
                      <div
                        class="point-highlight"
                        style="top: ${s.top}; left: ${s.left}; border-color: ${s.traceColor};"
                      ></div>
                    `)}
                `}
          </div>
          <div class="selection-wrapper" id="selection_wrapper">
            ${Object.values(this.splitSelections).map(s=>q`
                  <vst-ui-split-selection
                    .id="${s.id}"
                    .splitRegions="${s.splitRegions}"
                    .graphInstance="${this.graphInstance}"
                    .getPlotRegionBoundingRect="${this.getSelectionWrapperBoundRect}"
                    .getClosestX="${this.boundGetClosestX}"
                  >
                  </vst-ui-split-selection>
                `)}
          </div>
          <div id="manual-fit-handles" ?hidden=${!this.activeManualFit||this.readOnly}>
            <button
              type="button"
              style="left: ${this._manualFitPositionPx?.x1}px; top: ${this._manualFitPositionPx?.y1}px;"
              data-handle="1"
              @keydown=${this._handleManualFitKeydown}
            >
              ${e()}
              <span visually-hidden>${k("Left manual fit handle")}</span>
            </button>
            <button
              type="button"
              style="left: ${this._manualFitPositionPx?.x2}px; top: ${this._manualFitPositionPx?.y2}px;"
              data-handle="2"
              @keydown=${this._handleManualFitKeydown}
            >
              ${e()}
              <span visually-hidden>${k("Center manual fit handle")}</span>
            </button>
            <button
              type="button"
              style="left: ${this._manualFitPositionPx?.x3}px; top: ${this._manualFitPositionPx?.y3}px;"
              data-handle="3"
              @keydown=${this._handleManualFitKeydown}
            >
              ${e()}
              <span visually-hidden>${k("Right manual fit handle")}</span>
            </button>
          </div>
          <div class="data-mark-wrapper" id="data-mark-wrapper" ${Ne(this._dataMarkWrapperRef)}>
            ${We(this.dataMarks,s=>s.id,s=>q`<vst-ui-draggable
                  .xPos=${this.getBaseDataMarkElLocation(s)}
                  .yPos=${this.getLeftDataMarkElLocation(s)}
                  style="${!s.getHasMoved(this.parentGraphId)||this.readOnly?"position: absolute; ":"position: fixed;"}transform: translate(-100%, -50%);"
                  .draggableId=${s.id}
                  .dragContainer=${this._dataMarkWrapperRef.value}
                  emitPositionOn="data-mark-size-changed"
                  @draggable-moved=${this.updateDataMarkElPosition}
                >
                  <vst-ui-data-mark
                    ?hidden=${!this.leftTraces.some(n=>!Number.isNaN(n.yColumn.values[s.rowIndex]))}
                    .note=${s.text}
                    .data=${this._dataMarksData[s.id]||[]}
                    .isShown=${s.isShown}
                    .position=${s.position}
                    .dataMarkId=${s.id}
                    .editing=${s.editingGraphId===this.parentGraphId}
                    @note-updated=${this.handleDataMarkTextUpdate}
                    @edit-state-changed=${this.handleDataMarkEditingUpdate}
                    @data-mark-deleted=${this.handleDeleteDataMark}
                    @track=${this.handleDataMarkMoving}
                    @up=${n=>{n.stopPropagation()}}
                  ></vst-ui-data-mark>
                </vst-ui-draggable> `)}
          </div>
        </div>
        <div class="annotation-wrapper" id="annotation_wrapper">
          ${We(this.visibleAnnotations,s=>s.id,s=>q`
              <vst-ui-graph-annotation
                .annotation=${s}
                .bounds=${t}
                .graphUdmId=${this.graph.udmId}
                @position-updated=${n=>this._updateAnnotationHairline(n)}
                @annotation-deleted=${()=>this._deleteAnnotation(s)}
              >
              </vst-ui-graph-annotation>
            `)}
        </div>
      </div>
    `}};customElements.define("vst-core-graph-analysis",Ut);var nr={},Tt=class extends nn(vt)(Ce(ns(as(ht)))){static get properties(){return{_activeManualFit:{state:!0},_isReplayActive:{state:!0},_isSelecting:{state:!0},_isSessionEmpty:{state:!0},accessibilityScale:{type:Number},auxGraphAxisScalingModes:{type:Object},auxGraphBaseId:{type:String},auxGraphExaminePinConfig:{type:Object},auxGraphLeftIds:{type:Array},auxGraphMode:{type:String},auxGraphOptions:{type:Object},auxGraphViewMode:{type:String},blockInfo:{type:Object},export:{type:Boolean},fftRemoveLinearTrend:{type:Boolean},fftUseWindowing:{type:Boolean},fftPeakFrequencies:{type:Array},fftShowPeakFrequencyLegend:{type:Boolean},graph:{type:Object},graphModeTransition:{type:Object},hidden:{type:Boolean,reflect:!0},histogramBinWidth:{type:Number},histogramBinStart:{type:Number},id:{type:String},importedGraphState:{type:Object},isCollecting:{type:Boolean},leftTraces:{type:Array},readonly:{type:Boolean},selectionsById:{type:Object},selectionsWithData:{type:Object},showColumnOptions:{type:Boolean},visibleTraces:{type:Array}}}constructor(){super();this._activeManualFit=null,this._isSelecting=!1,this._isSessionEmpty=!0,this.graph={},this.fftPeakFrequencies=[],this.selectionsById={},this.accessibilityScale=1,this.importedGraphState={},this.visibleTraces=[],this.leftTraces=[],this.isCollecting=!1,this._isReplayActive=!1,this._hasBeenImported=!1,this.histogramAnalysisStore=null,this._resetAuxGraphSettings()}stateChanged(t){if(this._isSessionEmpty=t.isSessionEmpty,t.graphs){let e=(this.graph||{}).baseColumnId;this.graph=t.graphs[this.id],e!==(this.graph||{}).baseColumnId&&this.dispatchEvent(new CustomEvent("graph-base-id-change",{composed:!0,bubbles:!0,detail:{graphs:Object.values(t.graphs)}})),this.requestUpdate()}this.accessibilityScale=t.accessibility.scale}async updated(t){t.forEach(async(e,s)=>{switch(s){case"visibleTraces":this.leftTraces=this.visibleTraces.filter(n=>n.axis!=="right"),this._visibleTracesChanged(this.visibleTraces);break;case"selectionsById":this._onSelectionsByIdChanged(this.selectionsById,e);break;case"graph":this.graph.isLegendVisible&&import("./vst-ui-draggable-QT27HE6C.js"),this._graphStateChanged(this.graph,e);break;case"blockInfo":this.blockInfoChanged();break;default:}})}shouldUpdate(){return this.graph}async firstUpdated(){if([this.$dataWorld,this.$dataCollection,this.$sensorWorld,this.$dataAnalysis,this.$popoverManager,this.$toast,this.$udm]=this.requestServices(["dataWorld","dataCollection","sensorWorld","dataAnalysis","popoverManager","toast","udm"]),this.$gaReplayService=this.requestService("gaReplayService"),this.coreGraphEl=this.shadowRoot.querySelector("vst-core-graph.default-graph"),this.fftCoreGraphEl=this.shadowRoot.querySelector("vst-core-graph.fft-graph"),this.histogramCoreGraphEl=this.shadowRoot.querySelector("vst-core-graph.histogram-graph"),this._addGraphToUdmEvent=new CustomEvent("add-graph-to-udm",{detail:this.coreGraphEl}),this.eventBinder=new le,this.debouncedGraphTracesUpdated=Ra(()=>this.onGraphTracesUpdated(),100),this.debouncedApplySelectionsAnalysis=Ra(()=>this._applySelectionsAnalysis(),100),this.eventBinder.bindListeners({source:this.$dataWorld,target:this,eventMap:{"session-started":"onSessionStarted","session-closing":"onSessionClosing","session-ended":"onSessionEnded","data-set-ready":"onDataSetReady","data-set-added":"_cleanupCurrentAnalysis","collection-preparing":"onCollectionPreparing","collection-stopped":"onCollectionStopped","imported-graph-state-ready":"onImportedGraphStateReady","column-strikethrough-changed":"debouncedApplySelectionsAnalysis","column-values-changed":"debouncedApplySelectionsAnalysis"}}),await this.coreGraphEl.updateComplete,this.graphInstance=this.coreGraphEl.graphInstance,this.dispatchEvent(new CustomEvent("core-graph-ready",{detail:this.coreGraphEl})),this.legendWrappers=[...this.shadowRoot.querySelectorAll("[slot=graph_legend]")],this.legendWrappers.forEach(e=>{e.dragContainer=this}),this.coreGraphEl.analysisEl){let{coreGraphEl:e}=this,s={getLeftRange:e.getLeftRange.bind(e),getBaseRange:e.getBaseRange.bind(e),getPxWidth:e.analysisEl.getGraphPxWidth.bind(e.analysisEl)},n=d=>{let h=this.$dataWorld.getColumnById(d);return h&&h.group.units};this.getAnalysisDataForSelections=vl(this.$dataAnalysis,s,n);let a=(...d)=>this.analysisStore.createSelection(...d),{updateUdmWithAppState:o,updateAppWithUdmState:r,reset:l,_getAnalysisState:c}=yl(this.$dataWorld,a);this.updateUdmAnalysis=o,this.applyImportedAnalysisState=r,this.resetAnalysisMiddleware=l,this._getAnalysisMiddlewareState=c}this.addObservableProperty({store:this.analysisStore,key:"selections",property:"selectionsById"}),new le().bindListeners({source:this.$gaReplayService,target:this,eventMap:{"replay-status-change":"toggleReplayStatus"}})}toggleReplayStatus({isReplayActive:t}){this._isReplayActive=t}disconnectedCallback(){super.disconnectedCallback(),this.eventBinder.unbindAll()}_analysisSessionStarted(){let{coreGraphEl:t}=this,{analysisEl:e,hasCoreAnalysis:s}=t;s&&(e.fireExaminePositionUpdate({examineHidden:!0}),e.fireExamineSettingsUpdate({interpolate:!1,tangentEnabled:!1}))}_handleInfoBoxClicked(t){let{manualFit:e}=t.detail.infoBoxData;e&&(this._activeManualFit=e)}_removeManualFitsIfCategorical({detail:t}){t&&this._cleanUpManualFits()}async onSessionStarted({imported:t,sessionType:e}){this._analysisSessionStarted(),t?this.importedGraphState&&(await this._applyGraphInfo(this.importedGraphState),this.importedGraphState=null):this.dispatchEvent(this._addGraphToUdmEvent),e==="ManualEntry"&&this.coreGraphEl.enableFitToNewData()}async blockInfoChanged(){if(await this.$dataWorld.blockSynced,this._analysisSessionStarted(),this.blockInfo.graphIds.length<3)this.dispatchEvent(this._addGraphToUdmEvent);else{let t=this.blockInfo.graphIds[this.graphNumber-1],e=await this.$dataWorld.getInfoForGraphId(t);console.assert(e),e?.graphId||(e={graphId:t}),await this._applyGraphInfo(e)}}async _applyGraphInfo(t){let{$dataWorld:e}=this,s=await e.getCustomCurveFits();await this.$dataAnalysis.hydrateCustomFits(s),t.graphId&&this.coreGraphEl.applyImportedGraphState(t),t["manual-fits"]=this.$dataWorld.manualFits.filter(o=>o.graphId===t.graphId),this.applyImportedAnalysisState(La(t,["integrals","curveFits","manual-fits","statistics"]));let n=t.currentAuxGraphId,a=nr[n];a&&(this._reloadAuxGraphs(a),delete nr[n])}onSessionClosing(){this._cleanupCurrentAnalysis(),this.resetAnalysisMiddleware(),this.coreGraphEl.removeBaseColumn(),this.coreGraphEl.removeRegularTraces(),this.coreGraphEl.disableFitToNewData(),this.legendWrappers.forEach(t=>{t.resetPosition&&t.resetPosition()}),this._activeManualFit=null}onSessionEnded(){this._hasBeenImported=!1,this.coreGraphEl.udmId=0,this.$dataWorld.clearGraphId(this.id),this.analysisStore?.reset(),this._resetAuxGraphSettings()}onDataSetReady(t){let{$dataWorld:e,coreGraphEl:s}=this;if(t.type==="regular"&&(e.sessionType==="DataCollection"||e.sessionType==="ManualEntry")){let n=s.leftColumnIds.map(o=>{let r=e.getColumnById(o)?.groupId;return e.getColumnsForSet(e.currentDataSet.id).find(d=>d.groupId===r)?.id}),a=s.rightColumnIds.map(o=>{let r=e.getColumnById(o)?.groupId;return e.getColumnsForSet(e.currentDataSet.id).find(d=>d.groupId===r)?.id});vt.dispatch(hn(n,this.id,"left")),vt.dispatch(hn(a,this.id,"right"))}}onCollectionPreparing(){let{coreGraphEl:t}=this;this._cleanupCurrentAnalysis(),this.$dataWorld.sessionType==="DataCollection"&&(t.disableScaleLargerToNewData(),t.disableFitToNewData(),this.$dataCollection.mode.match("events")?t.enableFitToNewData():t.getTracesByType("graph-match").length===0&&t.enableScaleLargerToNewData())}onCollectionStopped(){let{coreGraphEl:t}=this;if(this.$dataWorld.sessionType==="DataCollection"){t.disableScaleLargerToNewData(),t.disableFitToNewData();let e=!t.getTracesByType("graph-match").length;this.$dataCollection.mode.match("events")&&e&&t.autoscale()}}onImportedGraphStateReady(t){t.type==="normal"&&this.graphNumber===t.index&&!this._hasBeenImported?(this.importedGraphState=tt({},t),this._hasBeenImported=!0):(t.type==="fft"||t.type==="histogram")&&(nr[t.graphId]=tt({},t))}async _graphStateChanged(t={},e={}){if(!Da(t.rightAxisEnabled,e.rightAxisEnabled)){let s=n=>n.axis!=="right"||t.rightAxisEnabled;this.visibleTraces=this.coreGraphEl.getAllRegularTraces().filter(s),await this.updateComplete,this.coreGraphEl.updatePlotData()}}onGraphTracesUpdated(){let t=e=>e.axis!=="right"||this.graph.rightAxisEnabled;this.visibleTraces=this.coreGraphEl.getAllRegularTraces().filter(t)}onUserRequestedAutoscale({detail:{rangeUpdates:t,isZoomToSelectionRange:e}}){let s=e?k("Zoom to Selection"):k("Zoom to all Data");this.$toast.makeToast(s,{duration:2e3}),vt.dispatch(hl(this.id,t))}async onApplyCurveFit(t){let e=(a,o)=>{if(o)this._updateDefaultAnalysisSelection({analysisType:"curveFits",curveFitType:a,permanent:!1});else{let r=Tt._firstNonPermanentSelectionKey(this.selectionsById);this.analysisStore.modifySelection(r,{curveFitType:a})}},s=()=>{let a=Tt._firstNonPermanentSelectionKey(this.selectionsById),o=this.selectionsById[a];o.autoGenerated?this.analysisStore.deleteSelection(o.id):this.analysisStore.modifySelection(a,{analysisType:"",curveFitType:""})},n=()=>{let a=Tt._firstNonPermanentSelectionKey(this.selectionsById);this.analysisStore.modifySelection(a,{permanent:!0})};await import("./vst-core-curvefit-selector-42W2PDKQ.js"),ys.authorized&&await import("./vst-core-custom-curvefit-JHN4JEGY.js"),this.$popoverManager.presentPopover("vst-core-curvefit-selector",{anchor:t,orientation:"right",properties:{selectedFit:Vs.getFit("LINEAR"),supportedFits:Vs.fits},events:({completeWorkflow:a})=>({"curve-fit-selected":o=>{let{fitType:r,isInitialSelection:l}=o.detail;e(r,l)},"curve-fit-canceled":()=>{s(),a()},"curve-fit-applied":()=>{n(),a()}})}).then(a=>{a?.cancelled&&s()})}onAddGraphMatch(t,e){let s=[];e.forEach(n=>{let a={id:n.id,title:k(n.group.name,"sensormap"),selectAction:()=>this.dispatchEvent(new CustomEvent("add-graph-match",{detail:n.id}))};s.push(a)}),this.$popoverManager.presentPopoverList({items:s,anchor:t,orientation:"right"})}onEditGraphOptions(t){let{options:e,scalingModes:s,rightAxisEnabled:n}=this.graph||{},a={graphOptions:e,scalingModes:s,rightAxisEnabled:n},o=(r,l)=>{switch(r){case"scalingModes":Object.entries(l).forEach(([c,d])=>{vt.dispatch(Oa(this.id,c,d))});break;case"rightAxisEnabled":vt.dispatch(Fa(this.id,l)),this.graph.isLegendVisible&&vt.dispatch(dn(this.id,!1));break;default:vt.dispatch(mi(this.id,{[r]:l},Se.USER));break}};this.showGraphOptionsPopover(t,a,o)}async showGraphOptionsPopover(t,e,s=()=>{}){let{graphOptions:n,scalingModes:a,rightAxisEnabled:o}=e,{title:r,appearance:l,lineWeight:c,labelSize:d,baseRange:h,leftRange:u,rightRange:p}=n,g={};this.auxGraphMode==="fft"?g={title:{hidden:!0},appearance:{hidden:!0},scaling:{hidden:!0}}:this.auxGraphMode==="histogram"&&(g={appearance:{hidden:!0},title:{hidden:!0}});let m={title:r,appearance:l,categorical:this.coreGraphEl.containsCategorical,lineWeight:c,labelSize:d,baseMin:Bt.sigFig(h.min,4),baseMax:Bt.sigFig(h.max,4),leftMin:Bt.sigFig(u.min,4),leftMax:Bt.sigFig(u.max,4),rightMin:Bt.sigFig(p.min,4),rightMax:Bt.sigFig(p.max,4),baseScaling:a.base,leftScaling:a.left,rightScaling:a.right,rightAxisEnabled:o,optionsOverrides:g},f=b=>({detail:v})=>s(b,v);await import("./vst-core-graph-options-TYBXAPIS.js"),await import("./vst-ui-pro-only-SYPF3LW5.js"),this.$popoverManager.presentPopover("vst-core-graph-options",{title:k("Graph Options"),anchor:t,orientation:"right",properties:m,events:()=>({"title-changed":f("title"),"appearance-changed":f("appearance"),"base-range-changed":f("baseRange"),"left-range-changed":f("leftRange"),"right-range-changed":f("rightRange"),"line-weight-changed":f("lineWeight"),"label-size-changed":f("labelSize"),"right-axis-toggled":f("rightAxisEnabled"),"scaling-mode-changed":f("scalingModes")})})}_cleanupCurrentAnalysis({addedDataSet:t}={}){let{coreGraphEl:e,graphInstance:s}=this;e&&e.hasCoreAnalysis&&s&&(!t||t.type==="regular")&&(e.analysisEl.fireExaminePositionUpdate({examineHidden:!0}),vt.dispatch(za(this.id)),this.analysisStore.reset(),e.removeAllTangentTraces())}_cleanUpManualFits(){let t=this.visibleTraces.map(s=>s.yColumn.id),e=this.visibleTraces.map(s=>s.baseColumn.id);this.$dataWorld.manualFits.filter(s=>s.graphId===this.graph.udmId&&(!t.includes(`${s.yColumnId}`)||!e.includes(`${s.baseColumnId}`)||this.coreGraphEl.containsCategorical)).forEach(s=>{let n=Object.values(this.analysisStore.selections).find(a=>a.manualFitId===s.id);n&&this.analysisStore.deleteSelection(n.id),this.$dataWorld.removeGraphManualFit(s),this._activeManualFit===s&&(this._activeManualFit=null)})}_updateDefaultAnalysisSelection(t){let{coreGraphEl:e}=this,s=Tt._firstNonPermanentSelectionKey(this.selectionsById);if(s)this.analysisStore.modifySelection(s,t);else{let n=this.coreGraphEl.containsCategorical,{baseRange:a=null}=t,o,r;if(n){let l=e.getBaseIndexRange();[o,r]=[l.min,l.max]}else if(a)o=a.min,r=a.max;else{let l=e.getBaseRange();[o,r]=[l.min,l.max].map(c=>e.getClosestX({pt:c}).pt)}this.analysisStore.createSelection(wt(tt({},t),{autoGenerated:!0,range:{min:o,max:r},isRangeIndexBased:n}))}}static _firstNonPermanentSelectionKey(t){let[e]=Object.entries(t).find(([,s])=>!s.permanent&&!s.highlightOnly)||[];return e}_visibleTracesChanged(t=[]){let{coreGraphEl:e,$dataWorld:s}=this;e&&e.hasCoreAnalysis&&t.length?this._updateAllAnalysis():s.importing||this._cleanupCurrentAnalysis(),!s.importing&&!this.readonly&&this._cleanUpManualFits()}_onSelectionsByIdChanged(t={},e={}){Da(t,e)||this.debouncedApplySelectionsAnalysis()}_updateAllAnalysis(){let{coreGraphEl:t}=this;t.hasCoreAnalysis&&t.analysisEl.updateExamineAndTangent(),this._applySelectionsAnalysis()}async _applySelectionsAnalysis(){let{selectionsById:t,visibleTraces:e,coreGraphEl:s}=this,{rightAxisEnabled:n}=this.graph;if(!this.getAnalysisDataForSelections)return;let a=c=>c.axis==="left"||n,o=$a(t,c=>wt(tt({},c),{tracesInfo:e.filter(a).map(d=>({xid:d.baseColumn.id,yid:d.yColumn.id,name:d.yColumn.name,traceColor:d.color,axis:d.axis}))})),r=await this.getAnalysisDataForSelections(o),l=$a(o,(c,d)=>tt(tt({},c),r[d]));if(s.setSelectionsData(l),!this.readonly){let{addedAnalysis:c,changedAnalysis:d}=await this.updateUdmAnalysis(this.coreGraphEl.udmId,l);c.forEach(h=>{let{selectionId:u,udmId:p}=h;l[u].udmId=p}),d.forEach(h=>{let{selectionId:u,udmId:p}=h;l[u].udmId=p})}this.selectionsWithData=l}_getSelectionElementById(t){let{coreGraphEl:{analysisEl:e}={}}=this;return e&&e.getSelectionElementById(t)}async _handleGraphToolsEvent({detail:t}){switch(t?.type){case"graph_legend":import("./vst-core-graph-legend-K36QPFRH.js"),vt.dispatch(dn(this.id,t?.checked));break;case"statistics":this._updateDefaultAnalysisSelection({analysisType:"statistics",permanent:!0});break;case"integral":this._updateDefaultAnalysisSelection({analysisType:"integrals",permanent:!0});break;case"curve_fit":this.onApplyCurveFit(t.target);break;case"annotation":this.coreGraphEl.analysisEl.addAnnotation(ys.authorized).then(()=>this.deleteTempSelection());break;case"prediction":import("./vst-core-graph-predictions-R2END3YQ.js"),vt.dispatch(Ba({graphId:this.id}));break;case"graph_match":this.onAddGraphMatch(t.target,this.$dataWorld.getGraphMatchColumns());break;case"graph_options":this.onEditGraphOptions(t.target);break;case"fft":this._enterFFTMode();break;case"histogram":this._enterHistogramMode();break;case"strikethrough":this._strikethroughRows();break;case"restore-all-data":this._restoreAllData();break;case"manual-fit":{let{trace:e}=t;console.assert(e);let{baseColumn:{id:s},yColumn:{id:n}}=e,a=this.coreGraphEl.graphInstance.getAxis("base"),o=this.coreGraphEl.graphInstance.getAxis("left"),{min:r,max:l}=a.range,{min:c,max:d}=o.range,h=(d-c)/(l-r),u=c-h*r,p=await this.$dataWorld.addGraphManualFit(this.graph.udmId,{baseColumnId:s,yColumnId:n,coefficients:[h,u]});this._activeManualFit=p,this._updateDefaultAnalysisSelection({analysisType:"manual-fits",permanent:!0,manualFitId:p.id});break}default:}}get examinePin(){let{examinePosition:t={},examineSettings:e={}}=this.analysisStore||{};return{examinePosition:t,examineSettings:e}}get graphNumber(){let t=0;try{t=parseInt(this.id.replace("graph_",""))}catch(e){console.error(e)}return t}updateExaminePinPosition({detail:{positionUpdate:t}}){this.analysisStore?.updateExaminePosition(t),this._activeManualFit=null}updateExaminePinSettings({detail:{settingsUpdate:t}}){this.analysisStore?.updateExamineSettings(t)}handleNewSelectionGesture({detail:{currentRange:t,isRangeIndexBased:e}}){this._isSelecting=!0,this.analysisStore.handleNewSelectionGesture({dragRange:t,isRangeIndexBased:e})}modifySelection({detail:{elementId:t,selectionId:e,selectionUpdates:s={}}={}}){this.analysisStore.modifySelection(e||t,s)}deleteSelection({detail:t}){let{manualFitId:e}=this.analysisStore.selections[t];if(e){let s=this.$dataWorld.manualFits.find(n=>n.id===e);this._activeManualFit=null,this.$dataWorld.removeGraphManualFit(s)}this.analysisStore.deleteSelection(t)}deleteTempSelection(){this.analysisStore.deleteTempSelection()}static openDrawPredictions({detail:{graphEl:t}}){import("./vst-core-graph-predictions-R2END3YQ.js"),vt.dispatch(Ba({graphId:t.id}))}static closeDrawPredictions({detail:{graphEl:t}}){vt.dispatch(al({graphId:t.id}))}static updateGraphBaseUnits({target:{id:t},detail:{baseUnits:e}}){vt.dispatch(dl(t,e))}static updateGraphBaseColumnId({target:{id:t},detail:{baseColumnId:e}}){vt.dispatch(cl(t,e))}static updateGraphEntityOptions({target:{id:t},detail:{options:e,entity:s}}){vt.dispatch(ll({options:e,entity:s,graphId:t}))}static updateGraphOptions(n){var{target:{id:t},detail:a}=n,o=a,{actor:e=Se.USER}=o,s=oi(o,["actor"]);vt.dispatch(mi(t,s,e))}static updateAutomaticAutoscale({target:{id:t},detail:{rangeUpdates:e}}){vt.dispatch(rl(t,e))}static updateGraphUdmId({target:{id:t},detail:e}){vt.dispatch(ul(t,e))}static updateAxisScalingMode({target:{id:t},detail:e}){Object.entries(e).forEach(([s,n])=>{vt.dispatch(Oa(t,s,n))})}static addColumnId({target:{id:t},detail:{columnId:e,axis:s}}){vt.dispatch(pl(e,t,s))}static removeColumnId({target:{id:t},detail:{columnId:e,axis:s}}){vt.dispatch(gl(e,t,s))}static updateColumnIds({target:{id:t},detail:{columnIds:e,axis:s}}){vt.dispatch(hn(e,t,s))}static cleanUpAnalysis({target:{id:t}}){vt.dispatch(za(t))}updateRightAxisEnabled({detail:t}){vt.dispatch(Fa(this.id,t))}static hideLegend(){vt.dispatch(dn(this.id,!1))}static get styles(){return[ut,js,rt`
        .legend {
          display: flex;
          background: var(--vst-color-bg);
        }

        .legend vst-core-graph-legend {
          flex-shrink: 0;
        }

        .btn[variant='icon'] vst-ui-icon {
          width: 1rem;
          height: 1rem;
        }

        .download-image .btn[variant='icon'] {
          display: none;
        }

        #legend_close_btn {
          align-self: flex-start;
        }
      `]}async _enterFFTMode(){let{baseColumnId:t,columnIds:e}=this.graph,s,n=Tt._firstNonPermanentSelectionKey(this.selectionsById);if(n)s=this.selectionsById[n]?.range;else{let o=this.coreGraphEl.getBaseRange(),[r,l]=[o.min,o.max].map(c=>this.coreGraphEl.getClosestX({pt:c}).pt);this.analysisStore.createSelection({autoGenerated:!0,permanent:!1,range:{min:r,max:l}}),s={min:r,max:l}}this.auxGraphRange=tt({},s);let a={removeLinearTrend:this.fftRemoveLinearTrend,useWindowing:this.fftUseWindowing};await this._applyNewFFTColumns(t,e.left,s,a),this._startAuxGraphMode("fft")}async _reloadFFT(t,e){this.auxGraphId=t,this.auxGraphRange={min:e.rangeMin,max:e.rangeMax},this.fftRemoveLinearTrend=e.removeLinearTrend,this.fftUseWindowing=e.windowType!=="NONE";let s={removeLinearTrend:this.fftRemoveLinearTrend,useWindowing:this.fftUseWindowing},n=e.columnBindings[0].inputBaseId??0,a=e.columnBindings.map(o=>o.inputTraceId);this._applyNewFFTColumns(n,a,this.auxGraphRange,s),this._startAuxGraphMode("fft")}async _applyNewFFTColumns(t,e,s,{removeLinearTrend:n=!0,useWindowing:a=!0}){let{$dataWorld:o,$dataAnalysis:r}=this,l=a?"WINDOW_HANN":"NONE";this.fftPeakFrequencies=[],await this._removeAuxGraphDatasets();let c=o.getColumnById(t)?.groupId,d=e.map(g=>async()=>{let{setId:m,color:f,name:b}=o.getColumnById(g)||{},v=o.getColumnForGroupAndSet(c,m)?.id,{frequencyVals:C,amplitudeVals:y,peakFrequency:w,binWidth:x}=await r.computeFFT(v,g,n,l,s),_=await o.createAuxDataSet("fft",C,y,{traceColId:g,baseColId:t});return{name:b,fftSet:_,color:f,peakFrequency:w,binWidth:x,traceColId:g,baseColId:t}}),h=[];for(let g of d)h.push(await g());this.fftPeakFrequencies=h.map(({name:g,color:m,peakFrequency:f,binWidth:b})=>({name:g,frequency:Vt("%.2f-%.2f Hz",f,f+b),color:m})),[this.auxGraphBaseId]=h.map(({fftSet:g})=>g.columnIds[0]),this.auxGraphLeftsIds=h.map(({fftSet:g})=>g.columnIds[1]);let u=e.map((g,m)=>({inputBaseId:t,inputTraceId:g,outputBaseId:h[m].fftSet.columnIds[0],outputTraceId:h[m].fftSet.columnIds[1]}));h.forEach(g=>{let[m,f]=g.fftSet.columnIds,b=o.getColumnById(m);b&&(b.formatStr="%.2f");let v=o.getColumnById(f);v&&(v.color=g.color)});let p={removeLinearTrend:n,windowType:l,restrictRange:!!s,rangeMin:s.min,rangeMax:s.max,columnBindings:u};this.auxGraphId===0?this.auxGraphId=await o.addAuxGraph(this.graph.udmId,"fft",p):await o.updateAuxGraphInfo(this.auxGraphId,p),await this.fftCoreGraphEl.updateComplete,await this.fftCoreGraphEl.updateComplete,this.fftCoreGraphEl.autoscale()}_updateFFTOptions({detail:{removeLinearTrend:t=this.fftRemoveLinearTrend,useWindowing:e=this.fftUseWindowing}}){let{baseColumnId:s,columnIds:n}=this.graph;this.fftRemoveLinearTrend=t,this.fftUseWindowing=e,this.auxGraphViewMode="aux-view",this._applyNewFFTColumns(s,n.left,this.auxGraphRange,{removeLinearTrend:t,useWindowing:e})}_FFTSetShowPeakFrequencyLegend(t){t&&import("./vst-ui-draggable-QT27HE6C.js"),this.fftShowPeakFrequencyLegend=t}_onFFTGraphToolsEvent({detail:t}){let e=(n,a)=>{this.auxGraphOptions=cn(this.auxGraphOptions,n,a)},s={graphOptions:this.auxGraphOptions,scalingModes:this.auxGraphAxisScalingModes,rightAxisEnabled:!1};switch(t?.type){case"graph_legend":this.fftShowPeakFrequencyLegend=t?.checked;break;case"graph_options":this.showGraphOptionsPopover(t.target,s,e);break;default:}}async _enterHistogramMode(){let{columnIds:t}=this.graph,e,s=Tt._firstNonPermanentSelectionKey(this.selectionsById);if(s)e=this.selectionsById[s]?.range;else{let n=this.coreGraphEl.getBaseRange(),[a,o]=[n.min,n.max].map(r=>this.coreGraphEl.getClosestX({pt:r}).pt);this.analysisStore.createSelection({autoGenerated:!0,permanent:!1,range:{min:a,max:o}}),e={min:a,max:o}}this.auxGraphRange=tt({},e),this.histogramAnalysisStore=new gi(`histogram_${this.id}`),this.addObservableProperty({store:this.histogramAnalysisStore,key:"examinePosition",property:"histogramExaminePosition"}),await this._updateHistogramCalculation(t.left,this.histogramBinWidth,this.histogramBinStart),this._updateHistogramOnColumnNameChange(t.left),this._startAuxGraphMode("histogram")}async _reloadHistogram(t,e){this.auxGraphId=t,this.auxGraphRange={min:e.rangeMin,max:e.rangeMax},this.histogramBinWidth=e.binWidth,this.histogramBinStart=e.binStart,this.histogramAnalysisStore=new gi(`histogram_${this.id}`),this.addObservableProperty({store:this.histogramAnalysisStore,key:"examinePosition",property:"histogramExaminePosition"});let s=[];e.columnBindings.forEach(a=>{let{inputColumn:o,outputBaseId:r,outputTraceId:l}=a;s.push(o),this.auxColumnIdMap[`${o}`]={baseId:`${r}`,traceId:`${l}`}}),this._updateHistogramCalculation(s,this.histogramBinWidth,this.histogramBinStart),this._updateHistogramOnColumnNameChange(s);let n=(...a)=>this.histogramAnalysisStore.createSelection(...a);this.applyImportedAnalysisState(La(e,["curveFits","statistics"]),n),this._startAuxGraphMode("histogram")}async _strikethroughRows(){let{baseColumnId:t}=this.graph,e=this.$dataWorld.getColumnById(t)?.groupId,s=Tt._firstNonPermanentSelectionKey(this.selectionsById);if(e&&s){let n=[],a=this.coreGraphEl.getTraceDataSetIds(),o=this.selectionsById[s]?.range,{min:r,max:l}=o;a.forEach(c=>{let d=this.$dataWorld.getColumnForGroupAndSet(e,c);if(d){let h=Number.MAX_SAFE_INTEGER,u=Number.MIN_SAFE_INTEGER;d.values.forEach((p,g)=>{p>=r&&p<=l&&(g<h&&(h=g),g>u&&(u=g))}),h!==Number.MAX_SAFE_INTEGER&&u!==Number.MIN_SAFE_INTEGER&&n.push(this.$dataWorld.strikeRows(c,h,u-h+1))}}),await Promise.all(n)}this.deleteTempSelection()}async _restoreAllData(){let t=this.coreGraphEl.getTraceDataSetIds();await Promise.all(t.map(e=>this.$dataWorld.unstrikeAllRowsForSet(e))),this.deleteTempSelection()}async _fetchOrAddAuxColumns(t,e){let{baseId:s,traceId:n}=this.auxColumnIdMap[e]||{baseId:0,traceId:0};return(!s||!n)&&([s,n]=(await this.$dataWorld.createAuxDataSet(t,[],[],{traceColId:0,baseColId:0})).columnIds,this.auxColumnIdMap[e]={baseId:s,traceId:n}),{baseId:s,traceId:n}}async _updateHistogramCalculation(t=this.histogramInputColumns,e=this.histogramBinWidth,s=this.histogramBinStart,n=this.auxGraphRange){let a=new Set,o=0,r=[],l=[],c=new Set;for(let u=0;u<t.length;u++){let p=t[u],g=this.$dataWorld.getColumnById(p),{name:m,units:f}=g;a.add(`${m}${f.length?` (${f})`:""} `);let{bins:b,counts:v}=await this.$dataAnalysis.computeHistogram(this.graph.baseColumnId,p,e,s,n);b.forEach(_=>c.add(_));let{baseId:C,traceId:y}=await this._fetchOrAddAuxColumns("histogram",p),w=this.$dataWorld.getColumnById(C),x=this.$dataWorld.getColumnById(y);w.replaceAllValues(b),x.replaceAllValues(v),w.formatStr="%.2f",x.color=g.color,o||(o=C),l.push(y),r.push({inputColumn:p,outputBaseId:C,outputTraceId:y})}let d=this.$dataWorld.getColumnById(o);d.name=Array.from(a).join("");let h={binWidth:e,binStart:s,rangeMin:n.min,rangeMax:n.max,columnBindings:r};this.auxGraphId===0?this.auxGraphId=await this.$dataWorld.addAuxGraph(this.graph.udmId,"histogram",h):await this.$dataWorld.updateAuxGraphInfo(this.auxGraphId,h),this.auxGraphBaseId=o,this.auxGraphLeftsIds=l,this.histogramInputColumns=t,this.histogramBinWidth=e,this.histogramBinStart=s,await this.histogramCoreGraphEl.updateComplete,await this.histogramCoreGraphEl.updateComplete,this.histogramCoreGraphEl.autoscale()}_updateHistogramOnColumnNameChange(t){t.forEach(e=>{let s=this.$dataWorld.getColumnById(e).groupId,n=this.$dataWorld.getColumnGroupById(s);n.on("name-changed",()=>{this._updateHistogramCalculation()}),n.on("units-changed",()=>{this._updateHistogramCalculation()})})}_updateHistogramOptions({detail:{binWidth:t=this.histogramBinWidth,binStart:e=this.histogramBinStart}}){this.histogramBinWidth=parseFloat(t),this.histogramBinStart=parseFloat(e),this._updateHistogramCalculation()}_histogramUpdateExaminePinSettings({detail:{settingsUpdate:t}}){this.histogramAnalysisStore?.updateExamineSettings(t)}_onHistogramGraphToolsEvent({detail:t}){let e=(n,a)=>{this.auxGraphOptions=cn(this.auxGraphOptions,n,a)},s={graphOptions:this.auxGraphOptions,scalingModes:this.auxGraphAxisScalingModes,rightAxisEnabled:!1};switch(t?.type){case"graph_options":this.showGraphOptionsPopover(t.target,s,e);break;default:}}_resetAuxGraphSettings(){this.auxGraphBaseId=null,this.auxGraphLeftsIds=[],this.auxGraphRange={},this.auxGraphId&&this.$dataWorld.deleteAuxGraph(this.auxGraphId),this.auxGraphId=0,this.auxGraphMode="none",this.auxGraphViewMode="default",this.histogramInputColumns=[],this.auxColumnIdMap={},this.auxGraphOptions=wt(tt({},Ga),{appearance:{bars:!0}}),this.auxGraphExaminePinConfig={examinePosition:il,examineSettings:Ta},this.auxGraphAxisScalingModes=tt({},Wa),this.fftRemoveLinearTrend=!0,this.fftUseWindowing=!0,this.fftPeakFrequencies=[],this.fftShowPeakFrequencyLegend=!1,this.histogramBinWidth=1,this.histogramBinStart=.5,this.histogramBaseId=0,this.histogramLeftIds=[],this.histogramGraphOptions=wt(tt({},Ga),{appearance:{bars:!0}}),this.histogramAxisScalingModes=tt({},Wa)}_startAuxGraphMode(t){this.auxGraphMode=t,t==="fft"&&(this.fftShowPeakFrequencyLegend=!0),this.auxGraphViewMode="aux-view",this._incrementAuxGraphCount()}_cancelAuxGraphMode(){this._removeAuxGraphDatasets(),this._resetAuxGraphSettings(),this._decrementAuxGraphCount(),this.auxGraphMode==="histogram"&&this.removeObservableProperties(["histogramExaminePosition"])}_removeAuxGraphDatasets(){let{$dataWorld:t}=this;this.auxGraphId!==0&&this.auxGraphLeftsIds.map(e=>t.removeAuxDataSet(this.auxGraphMode,e))}_incrementAuxGraphCount(){this.dispatchEvent(new CustomEvent("increment-aux-count",{bubbles:!0,composed:!0}))}_decrementAuxGraphCount(){this.dispatchEvent(new CustomEvent("decrement-aux-count",{bubbles:!0,composed:!0}))}_reloadAuxGraphs(t){switch(t.type){case"fft":this._reloadFFT(t.graphId,t.fftInfo);break;case"histogram":this._reloadHistogram(t.graphId,t.histogramInfo);break;default:console.warn(`Unknown auxilliary graph type on reload: ${t.type}`)}}_onAuxGraphViewModeChanged({detail:t}){console.assert(t==="aux-view"||t==="source-view"),this.auxGraphViewMode!==t&&(this.auxGraphViewMode=t,this.requestUpdate())}_auxGraphOptionsUpdated({detail:t}){this.auxGraphOptions=tt(tt({},this.auxGraphOptions),t)}_auxScalingModesUpdated({detail:t}){this.auxGraphAxisScalingModes=tt(tt({},this.auxGraphAxisScalingModes),t)}_onAuxGraphUserAutoscale({detail:{rangeUpdates:t,isZoomToSelectionRange:e}}){let s=e?k("Zoom to Selection"):k("Zoom to all Data");this.$toast.makeToast(s,{duration:2e3}),this.auxGraphOptions=tt(tt({},this.auxGraphOptions),t)}_onAuxGraphAutoAutoscale({detail:{rangeUpdates:t}}){this.auxGraphOptions=tt(tt({},this.auxGraphOptions),t)}_auxGraphExaminePositionUpdate({detail:{positionUpdate:t}}){this.auxGraphMode==="histogram"&&this.histogramAnalysisStore?this.histogramAnalysisStore?.updateExaminePosition(t):this.auxGraphExaminePinConfig=cn(this.auxGraphExaminePinConfig,"examinePosition",t)}get histogramExaminePin(){return{examinePosition:this.histogramExaminePosition,examineSettings:Ta}}async _copyAuxDataToClipboard(){let{$dataWorld:t}=this,e=[];if(this.auxGraphBaseId&&Array.isArray(this.auxGraphLeftsIds)){let n=t.getColumnById(this.auxGraphBaseId),a=this.auxGraphLeftsIds.map(o=>t.getColumnById(o));if(n){let{values:o}=n;for(let r=0;r<o.length;++r){let l=`${o[r]}	`;a.forEach(c=>{l+=`${c.values[r]}	`}),e.push(l)}}}await navigator.clipboard.writeText(e.join(`
`));let s=`${this.auxGraphMode==="fft"?"FFT":"Histogram"} DataSet Copied to Clipboard`;e.length===0&&(s+=" FAILED"),this.$toast.makeToast(s,{duration:2e3})}get _showHistogramAuxView(){return this.auxGraphMode==="histogram"&&this.auxGraphViewMode==="aux-view"}get _showFFTAuxView(){return this.auxGraphMode==="fft"&&this.auxGraphViewMode==="aux-view"}get _showDefaultGraph(){return this.auxGraphMode==="none"||this.auxGraphViewMode==="source-view"}dispatchGraphResize(){this.dispatchEvent(new CustomEvent("resize"))}updateGraphUdmId(t){Tt.updateGraphUdmId(t);let e=t.detail;this.$udm.blockInfo?.graphIds&&(this.$udm.blockInfo.graphIds=[...this.$udm.blockInfo.graphIds,e])}get FFTGraphTemplate(){return q`
      <vst-core-graph
        id="fft_${this.id}"
        class="fft-graph"
        isInFFTMode
        legendMenuLabelText="${k("Peak Frequency")}"
        @resize="${this.dispatchGraphResize}"
        ?hidden="${this.hidden||!this._showFFTAuxView}"
        disableAxisLabelBtns
        .baseColumnId="${this.auxGraphBaseId}"
        .isSessionEmpty=${this._isSessionEmpty}
        .leftColumnIds="${this.auxGraphLeftsIds}"
        .options="${this.auxGraphOptions}"
        .accessibilityScale="${this.accessibilityScale}"
        .isLegendVisible="${this.fftShowPeakFrequencyLegend}"
        ?disableMenu="${this.readonly}"
        @graph-tools-item-clicked="${this._onFFTGraphToolsEvent}"
        @options-change="${this._auxGraphOptionsUpdated}"
        @user-requested-autoscale="${this._onAuxGraphUserAutoscale}"
        @automatic-autoscale="${this._onAuxGraphAutoAutoscale}"
      >
        <vst-core-graph-analysis
          slot="analysis"
          ?readonly="${this.readonly}"
          .examinePin="${this.auxGraphExaminePinConfig}"
          @examine-positioning-changed="${this._auxGraphExaminePositionUpdate}"
        >
        </vst-core-graph-analysis>
        <vst-ui-draggable
          class="legend"
          slot="graph_legend"
          id="fft_legend_wrapper"
          ?hidden="${!this.fftShowPeakFrequencyLegend}"
        >
          <ga-fft-peak-frequency
            .frequencyData="${this.fftPeakFrequencies}"
          ></ga-fft-peak-frequency>
          <vst-style-tooltip>
            <button
              id="legend_close_btn"
              class="btn"
              size="s"
              variant="icon"
              @click="${()=>this._FFTSetShowPeakFrequencyLegend(!1)}"
            >
              <vst-ui-icon .icon="${je}" color="var(--vst-color-fg-tertiary)"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-start-end"
              >${k("Close Peak Frequency")}</span
            >
          </vst-style-tooltip>
        </vst-ui-draggable>
        <ga-fft-btn-group
          slot="fft-btn-group"
          ?hidden="${!this.auxGraphMode==="fft"||this.export}"
          .selectedViewMode="${this.auxGraphViewMode}"
          @fft-cancelled="${this._cancelAuxGraphMode}"
          @fft-view-mode-updated="${this._onAuxGraphViewModeChanged}"
          @fft-options-updated="${this._updateFFTOptions}"
          @fft-dev-copy-to-clipboard="${this._copyAuxDataToClipboard}"
          ?useWindowing="${this.fftUseWindowing}"
          ?removeLinearTrend="${this.fftRemoveLinearTrend}"
        ></ga-fft-btn-group>
      </vst-core-graph>
    `}get histogramGraphTemplate(){return q`
      <vst-core-graph
        id="histogram_${this.id}"
        class="histogram-graph"
        isInHistogramMode
        disableAxisLabelBtns
        @resize="${this.dispatchGraphResize}"
        ?hidden="${this.hidden||!this._showHistogramAuxView}"
        .baseColumnId="${this.auxGraphBaseId}"
        .isSessionEmpty=${this._isSessionEmpty}
        .leftColumnIds="${this.auxGraphLeftsIds}"
        .options="${this.auxGraphOptions}"
        .accessibilityScale="${this.accessibilityScale}"
        ?disableMenu="${this.readonly}"
        @graph-tools-item-clicked="${this._onHistogramGraphToolsEvent}"
        @options-change="${this._auxGraphOptionsUpdated}"
        @user-requested-autoscale="${this._onAuxGraphUserAutoscale}"
        @automatic-autoscale="${this._onAuxGraphAutoAutoscale}"
      >
        <vst-core-graph-analysis
          slot="analysis"
          ?readonly="${this.readonly}"
          .examinePin="${this.histogramExaminePin}"
          @examine-positioning-changed="${this._auxGraphExaminePositionUpdate}"
        >
        </vst-core-graph-analysis>
        <!-- TODO: do we need to show legend? -->
        <ga-histogram-btn-group
          slot="histogram-btn-group"
          ?hidden="${this.auxGraphMode!=="histogram"||this.export}"
          .selectedViewMode="${this.auxGraphViewMode}"
          @histogram-cancelled="${this._cancelAuxGraphMode}"
          @histogram-view-mode-updated="${this._onAuxGraphViewModeChanged}"
          @histogram-options-updated="${this._updateHistogramOptions}"
          @histogram-dev-copy-to-clipboard="${this._copyAuxDataToClipboard}"
          .binWidth="${this.histogramBinWidth}"
          .binStart="${this.histogramBinStart}"
        ></ga-histogram-btn-group>
      </vst-core-graph>
    `}render(){return q`
      <vst-core-graph
        id="${this.id}"
        class="default-graph"
        enablefft="true"
        enableHistogram="true"
        ?isInFFTMode="${this.auxGraphMode==="fft"}"
        ?isInHistogramMode="${this.auxGraphMode==="histogram"}"
        @resize="${this.dispatchGraphResize}"
        ?hidden="${this.hidden||!this._showDefaultGraph}"
        ?disableAxisLabelBtns="${this.readonly||this.auxGraphMode!=="none"}"
        ?hideGraphActionBtns="${this.readonly}"
        ?disableGraphTools="${fl.disabledFeatures.has("graph-options")}"
        ?disableMenu="${this.readonly||this._isSelecting}"
        .baseColumnId="${this.graph.baseColumnId}"
        .baseUnits="${this.graph.baseUnits}"
        .isSessionEmpty=${this._isSessionEmpty}
        .leftColumnIds="${this.graph.columnIds.left}"
        .isLegendDisabled="${this.graph.rightAxisEnabled}"
        .rightColumnIds="${this.graph.columnIds.right}"
        .autoscalePadding="${this.graph.autoscalePadding}"
        .options="${this.graph.options}"
        .axisScalingModes="${this.graph.scalingModes}"
        .rightAxisEnabled="${this.graph.rightAxisEnabled}"
        .accessibilityScale="${this.accessibilityScale}"
        .selectionsById="${this.selectionsById}"
        .isLegendVisible="${this.graph.isLegendVisible}"
        .interpolateEnabled="${this.analysisStore?.examineSettings?.interpolate}"
        .tangentEnabled="${this.analysisStore?.examineSettings?.tangentEnabled}"
        @axis-moving-started=${()=>{this._activeManualFit=null}}
        @contains-categorical-changed=${this._removeManualFitsIfCategorical}
        @graph-tools-item-clicked="${this._handleGraphToolsEvent}"
        @graph-base-column-id-update="${Tt.updateGraphBaseColumnId}"
        @graph-entity-options-update="${Tt.updateGraphEntityOptions}"
        @data-values-updated="${this._updateAllAnalysis}"
        @base-units-updated="${Tt.updateGraphBaseUnits}"
        @left-or-right-axis-clicked="${this.onLeftOrRightAxisClicked}"
        @update-all-curve-fits="${this.debouncedApplySelectionsAnalysis}"
        @obsolete-analysis="${Tt._cleanupCurrentAnalysis}"
        @regular-traces-updated="${this.debouncedGraphTracesUpdated}"
        @right-axis-enabled-update="${this.updateRightAxisEnabled}"
        @udm-id-set="${this.updateGraphUdmId}"
        @options-change="${Tt.updateGraphOptions}"
        @selection-deleted="${this.deleteSelection}"
        @selection-modified="${this.modifySelection}"
        @axis-column-id-added="${Tt.addColumnId}"
        @axis-column-id-removed="${Tt.removeColumnId}"
        @axis-column-ids-updated="${Tt.updateColumnIds}"
        @axis-scaling-mode-changed="${Tt.updateAxisScalingMode}"
        @automatic-autoscale="${Tt.updateAutomaticAutoscale}"
        @user-requested-autoscale="${this.onUserRequestedAutoscale}"
      >
        <vst-core-graph-analysis
          slot="analysis"
          ?hidden="${this.auxGraphMode!=="none"}"
          ?readonly="${this.readonly}"
          .activeManualFit=${this._activeManualFit}
          .examinePin="${this.examinePin}"
          .manualFitPosition=${this.analysisStore?.manualFitPosition}
          .selectionsWithData="${this.selectionsWithData}"
          .parentGraphId=${this.coreGraphEl?.udmId}
          .isCollecting=${this.isCollecting}
          .leftTraces=${this.leftTraces}
          .isReplayActive=${this._isReplayActive}
          @examine-key-pressed="${t=>{xl(t,{points:this.leftTraces[0].seriesData,precision:3,analysisStore:this.analysisStore}),this._activeManualFit=null}}"
          @examine-positioning-changed="${this.updateExaminePinPosition}"
          @examine-settings-changed="${this.updateExaminePinSettings}"
          @infobox-clicked=${this._handleInfoBoxClicked}
          @manual-fit-position-changed=${()=>{this._applySelectionsAnalysis()}}
          @delete-temp-selection="${this.deleteTempSelection}"
          @new-selection-gesture="${this.handleNewSelectionGesture}"
          @new-selection-gesture-end="${()=>{this._isSelecting=!1}}"
          @touchstart=${t=>{t.touches.length>1&&(this._activeManualFit=null)}}
        >
        </vst-core-graph-analysis>
        <vst-core-graph-predictions
          slot="predictions"
          .graphId="${this.id}"
          ?readonly="${this.readonly}"
          .examinePin="${this.examinePin}"
          .graphModeTransition="${this.graphModeTransition}"
          .isActive="${this.graph.isDrawPredictionsActive}"
          @examine-positioning-changed="${this.updateExaminePinPosition}"
          @open-predictions="${Tt.openDrawPredictions}"
          @close-predictions="${Tt.closeDrawPredictions}"
        >
        </vst-core-graph-predictions>
        <vst-ui-draggable
          class="legend"
          slot="graph_legend"
          id="graph_legend_wrapper"
          ?hidden="${!this.graph.isLegendVisible}"
        >
          <vst-core-graph-legend .leftTraces="${this.leftTraces}"></vst-core-graph-legend>
          <vst-style-tooltip>
            <button
              id="legend_close_btn"
              class="btn"
              size="s"
              variant="icon"
              @click="${Tt.hideLegend}"
            >
              <vst-ui-icon .icon="${je}" color="var(--vst-color-fg-tertiary)"></vst-ui-icon>
            </button>
            <span role="tooltip" position="block-start-end">${k("Close graph legend")}</span>
          </vst-style-tooltip>
        </vst-ui-draggable>
        <ga-fft-btn-group
          slot="fft-btn-group"
          ?hidden="${this.auxGraphMode!=="fft"}"
          .selectedViewMode="${this.auxGraphViewMode}"
          @fft-cancelled="${this._cancelAuxGraphMode}"
          @fft-view-mode-updated="${this._onAuxGraphViewModeChanged}"
          @fft-options-updated="${this._updateFFTOptions}"
          @fft-dev-copy-to-clipboard="${this._copyAuxDataToClipboard}"
          ?useWindowing="${this.fftUseWindowing}"
          ?removeLinearTrend="${this.fftRemoveLinearTrend}"
        ></ga-fft-btn-group>
        <ga-histogram-btn-group
          slot="histogram-btn-group"
          ?hidden="${this.auxGraphMode!=="histogram"}"
          .selectedViewMode="${this.auxGraphViewMode}"
          @histogram-cancelled="${this._cancelAuxGraphMode}"
          @histogram-view-mode-updated="${this._onAuxGraphViewModeChanged}"
          @histogram-options-updated="${this._updateHistogramOptions}"
          @histogram-dev-copy-to-clipboard="${this._copyAuxDataToClipboard}"
          .binWidth="${this.histogramBinWidth}"
          .binStart="${this.histogramBinStart}"
        ></ga-histogram-btn-group>
      </vst-core-graph>

      <!-- FFT graph -->
      ${this.FFTGraphTemplate}

      <!-- Histogram graph -->
      ${this.histogramGraphTemplate}
    `}};customElements.define("ga-graph",Tt);var Oe=0,Gt=null,ee=null,Ki=null,fa=null,qd=null,ma=null,ar="",or=null,rr=null,Yd=null,Xi=null,Bs=(i,t,e)=>Math.min(Math.max(t,i),e),Kd={init(i,t,e,s){Gt=i,Ki=i.querySelectorAll(".content-layout__panel"),Oe=parseFloat(getComputedStyle(Gt).getPropertyValue("--min-size")),Ns(t,this._handleDividerResize.bind(this)),Ns(e,this._handleDividerResize.bind(this)),s&&Ns(s,this._handleDividerResize.bind(this))},_handleDividerResize(i){let{state:t,x:e,y:s}=i.detail,n=()=>{if(ar==="portrait"){let d=Bs(fa.height+Xi,Oe,ee.height)/ee.height*100;Gt.style.setProperty("--panel1-size",`${d}%`)}else{let d=Bs(fa.width+Yd,Oe,ee.width)/ee.width*100;Gt.style.setProperty("--panel1-size",`${d}%`)}},a=()=>{let c=qd.height+ma.height-Oe,h=Bs(ma.height-Xi,Oe,c)/ee.height*100;Gt.style.setProperty("--panel3-size",`${h}%`)},o=()=>{if(ar==="portrait"){let d=Bs(s,Oe,ee.height-Oe)/ee.height*100;Gt.style.setProperty("--col1-size",`${d}%`)}else{let d=Bs(e,Oe,ee.width)/ee.width*100;Gt.style.setProperty("--col1-size",`${d}%`)}},r=()=>{let d=Bs(fa.height+Xi,Oe,ee.height)/ee.height*100;Gt.style.setProperty("--panel1-size",`${d}%`)},l=()=>{let d=Bs(ma.height+Xi,Oe,ee.height)/ee.height*100;Gt.style.setProperty("--panel3-size",`${d}%`)};t==="start"?(or=e,rr=s,ar=getComputedStyle(Gt).getPropertyValue("--orientation").trim(),ee=Gt.getBoundingClientRect(),Ki=Gt.querySelectorAll(".content-layout__panel:not([hidden]"),fa=Ki[0].getBoundingClientRect(),Gt.visiblePanels>=3&&(qd=Ki[1].getBoundingClientRect(),ma=Ki[2].getBoundingClientRect())):t==="moving"&&(e!==or||s!==rr)&&(Yd=e-or,Xi=s-rr,Gt.visiblePanels===2?n():Gt.visiblePanels===3?i.currentTarget.id==="panel_divider_1"?n():i.currentTarget.id==="panel_divider_2"&&a():Gt.visiblePanels===4&&(i.currentTarget.id==="panel_divider_1"?o():i.currentTarget.id==="panel_divider_2"?r():i.currentTarget.id==="panel_divider_3"&&l()))}};var Xd=class extends ht{static get properties(){return{showGraphs:{type:Boolean},showTable:{type:Boolean},showMeter:{type:Boolean},showVideo:{type:Boolean},showNotes:{type:Boolean},showConfigurator:{type:Boolean},visiblePanels:{type:Number}}}constructor(){super();this.showGraphs=!1,this.showTable=!1,this.showMeter=!1,this.showVideo=!1,this.showNotes=!1,this.showConfigurator=!1,this.visiblePanels=0}updated(){this._getVisiblePanels(),this._initResizePanels()}_getVisiblePanels(){this.visiblePanels=(this.showGraphs?1:0)+(this.showTable?1:0)+(this.showMeter?1:0)+(this.showVideo?1:0)+(this.showConfigurator?1:0)+(this.showNotes?1:0),this.dispatchEvent(new CustomEvent("visible-panels-changed",{detail:{visiblePanels:this.visiblePanels},bubbles:!0,composed:!0}))}_initResizePanels(){let t=this.shadowRoot.querySelector("#panel_divider_1"),e=this.shadowRoot.querySelector("#panel_divider_2"),s=null;this.visiblePanels===4&&(s=this.shadowRoot.querySelector("#panel_divider_3")),Kd.init(this,t,e,s)}_handleDividerKeyPress({code:t,shiftKey:e},s){let n,a,o=parseInt(getComputedStyle(this).getPropertyValue("--min-size"));this.visiblePanels<4?(n=parseInt(getComputedStyle(this).getPropertyValue(s==="x"?"--panel1-size":"--panel3-size")),a=s==="x"?"--panel1-size":"--panel3-size"):(s==="x"&&(n=parseInt(getComputedStyle(this).getPropertyValue("--col1-size")),a="--col1-size"),s==="y1"&&(n=parseInt(getComputedStyle(this).getPropertyValue("--panel1-size")),a="--panel1-size"),s==="y2"&&(n=parseInt(getComputedStyle(this).getPropertyValue("--panel3-size")),a="--panel3-size")),this.visiblePanels===3&&a==="--panel3-size"?(t===(s==="x"?"ArrowLeft":"ArrowUp")&&(n=e?n+10:n+1),t===(s==="x"?"ArrowRight":"ArrowDown")&&(n=e?n-10:n-1)):(t===(s==="x"?"ArrowLeft":"ArrowUp")&&(n=e?n-10:n-1),t===(s==="x"?"ArrowRight":"ArrowDown")&&(n=e?n+10:n+1)),n<o&&(n=o),n>100-o&&(n=100-o),this.style.setProperty(a,`${n}%`)}static get styles(){return[ut,un]}render(){return q`${this.visiblePanels===4?q`<div class="content-layout content-layout--visible-4" id="content_layout">
          <div class="content-layout__subgrid content-layout__subgrid-1">
            <slot name="priority-1"></slot>
            <button
              class="content-layout__divider"
              id="panel_divider_2"
              aria-label="${k("Vertical Divider")}"
              @keydown="${t=>this._handleDividerKeyPress(t,"y1")}"
            ></button>
            <slot name="priority-2"></slot>
          </div>
          <button
            class="content-layout__divider content-layout__divider--divider1"
            id="panel_divider_1"
            @keydown="${t=>this._handleDividerKeyPress(t,"x")}"
            aria-label="${window.matchMedia("(orientation: landscape)").matches?k("Horizontal Divider"):k("Vertical Divider")}"
          ></button>
          <div class="content-layout__subgrid content-layout__subgrid-2">
            <slot name="priority-3"></slot>
            <button
              class="content-layout__divider"
              id="panel_divider_3"
              @keydown="${t=>this._handleDividerKeyPress(t,"y2")}"
              aria-label="${k("Vertical Divider")}"
            ></button>
            <slot name="priority-4"></slot>
          </div>
        </div> `:q`
          <div
            class="content-layout content-layout--visible-${this.visiblePanels}"
            id="content_layout"
          >
            <slot name="priority-1"></slot>
            <button
              class="content-layout__divider content-layout__divider--divider1"
              id="panel_divider_1"
              ?hidden="${this.visiblePanels<2}"
              aria-label="${window.matchMedia("(orientation: landscape)").matches?k("Horizontal Divider"):k("Vertical Divider")}"
              @keydown="${t=>this._handleDividerKeyPress(t,"x")}"
            ></button>
            <slot name="priority-2"></slot>
            <button
              class="content-layout__divider"
              id="panel_divider_2"
              ?hidden="${this.visiblePanels<3}"
              @keydown="${t=>this._handleDividerKeyPress(t,"y")}"
              aria-label="${k("Vertical Divider")}"
            ></button>
            <slot name="priority-3"></slot>
            <button class="content-layout__divider" id="panel_divider_3" hidden></button>
            <slot name="priority-4"></slot>
          </div>
        `}`}};customElements.define("vst-core-content-layout",Xd);var lr=Sa(Zh());var Zd=class extends ht{static get properties(){return{disabled:{type:Boolean,reflect:!0},accept:{type:String},multiple:{type:Boolean},focused:{type:Boolean}}}constructor(){super();this.accept="",this.multiple=!1,this.disabled=!1,this.focused=!1}handleSlotChange(){(lr.default.os.family==="iOS"||lr.default.os.family==="OS X"&&navigator.maxTouchPoints>0)&&this.shadowRoot.querySelector("slot").assignedElements().forEach(e=>{e.style.pointerEvents="none"})}handleChange(t){t.preventDefault();let e=t.target.files[0];this.dispatchEvent(new CustomEvent("selected",{detail:{file:e,filepath:e.name}}))}handleInputFocus(){this.focused=!0}handleInputBlur(){this.focused=!1}static get styles(){return[ut,rt`
        .file-picker__input {
          /* visually hidden mixin */
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .file-picker__label {
          display: block;
        }

        /* mimic native browser focus styles */
        .file-picker__label--focused {
          outline: var(--vst-color-info-bg) auto 5px;
          outline-color: -webkit-focus-ring-color;
        }

        @-moz-document url-prefix() {
          .file-picker__label--focused {
            outline: 1px dotted #212121;
          }
        }
      `]}render(){return q`
      <div class="file-picker">
        <label
          class="file-picker__label ${this.focused?"file-picker__label--focused":""}"
          id="file_picker_label"
        >
          <input
            class="file-picker__input"
            type="file"
            accept="${this.accept}"
            ?disabled="${this.disabled}"
            id="file_picker_input"
            @change="${this.handleChange}"
            @focus="${this.handleInputFocus}"
            @blur="${this.handleInputBlur}"
          />
          <slot @slotchange="${this.handleSlotChange}" class="file-picker__content"></slot>
        </label>
      </div>
    `}};customElements.define("vst-ui-file-import",Zd);var Qd=class extends ht{constructor(){super();this.graphInstances=[];this._resizeVisibleGraphs=this._resizeVisibleGraphs.bind(this)}static get styles(){return[rt`
        :host {
          display: grid;
          grid-auto-rows: 1fr;
          block-size: 100%;
        }

        :host([disabled]) {
          display: none;
        }
      `]}async firstUpdated(){this.addEventListener("graph-instance-created",({detail:t})=>{this.graphInstances.push(t)}),this.connectedGraphs=[...this.querySelectorAll(".app-graph")],await this.updateComplete,this.connectedGraphs.forEach(t=>{t.addEventListener("hidden-changed",()=>{this._resizeVisibleGraphs()})}),this._resizeVisibleGraphs(),window.addEventListener("resize",this._resizeVisibleGraphs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._resizeVisibleGraphs)}_resizeVisibleGraphs(){this.connectedGraphs.forEach(t=>{let{coreGraphEl:e}=t;e&&e.graphInstance&&!t.hidden&&(e.resizeGraph(),e.updatePlotData())})}render(){return q`<slot name="graph"></slot>`}};customElements.define("vst-core-graph-group",Qd);var Jd=({rowCache:i,headerCache:t,gridLayout:e,accumulator:s,scrollState:n})=>{let{gridBodyViewportEl:a,rowHeight:o}=e,{onScroll:r}=n,l=c=>{let{scrollTop:d}=c.target,h=parseFloat(window.getComputedStyle(document.documentElement).fontSize),u=parseInt(d/(o*h)),{columnDataList:p}=t;r(),i.rerender(s,p,u)&&s.applyChanges(),c.preventDefault&&c.preventDefault()};a.addEventListener("scroll",l)};var th=({gridLayout:i,scrollState:t})=>{let{gridHeaderViewportEl:e,gridBodyEl:s}=i,{onScroll:n}=t,a=!1,o=!1,r=()=>{if(o){o=!1;return}n(),a=!0,s.scrollLeft=e.scrollLeft};e.addEventListener("scroll",r);let l=()=>{if(a){a=!1;return}n(),o=!0,e.scrollLeft=s.scrollLeft};s.addEventListener("scroll",l)};var eh=({onScrollHandler:i})=>{let t=0;return{suppressUiNotfication:()=>{t++},onScroll:()=>{i(t===0),t>0&&t--}}};var sh=({rowHeight:i,borderSize:t,sidebarWidth:e,scrollerSize:s,padding:n,cellWidth:a,totalHeaderRows:o,gridEl:r,prepareGrid:l})=>{let c=r.querySelector(".grid_header"),d=r.querySelector(".grid_header_sidebar_block"),h=r.querySelector(".grid_header_viewport_container"),u=r.querySelector(".grid_header_viewport"),p=r.querySelector(".grid_body_viewport"),g=r.querySelector(".grid_body_container"),m=r.querySelector(".grid_body"),f=r.querySelector(".grid_body_sidebar"),b=E=>`${E}px`,v=E=>`${E}rem`,C=E=>`${E/parseFloat(window.getComputedStyle(document.documentElement).fontSize)}`,y=E=>`${E*parseFloat(window.getComputedStyle(document.documentElement).fontSize)}`,w=0,x=()=>{let E=r.clientHeight>100?r.clientHeight:0,B=r.clientWidth>100?r.clientWidth:0,P=i*o,T=B-y(e+s),I=E-y(P+s);d.style.width=v(e),d.style.height=v(P),h.style.width=b(T),h.style.height=b(E),h.style.left=v(e),u.style.width=b(T),u.style.height=b(E),p.style.height=b(I),p.style["max-width"]=b(B),p.style["min-width"]=b(B),p.style.top=v(P),f.style["min-width"]=v(e),g.style["max-width"]=b(T),g.style.width=b(T),g.style.left=v(e),m.style["max-width"]=b(T),m.style.width=b(T),w=Math.ceil(p.offsetHeight/y(i))},_=E=>{let B=C(E*y(i)),P=v(B);g.style.height=P,m.style.height=P,f.style.height=P},S=E=>{let B=a*E;return v(B)},A=()=>{},D=()=>{x();let E=parseInt(p.scrollTop/y(i));A(w,E)};x(),D(),new ResizeObserver(()=>{D()}).observe(r);let F=E=>{A=E};return l({gridEl:r,gridHeaderEl:c,gridBodyViewportEl:p}),{extendgridBodyEl:_,calcColspanRem:S,itemsPerScreen:w,rowHeight:i,borderSize:t,sidebarWidth:e,scrollerSize:s,padding:n,cellWidth:a,onResize:F,resize:D,gridEl:r,gridHeaderEl:c,gridHeaderSidebarBlockEl:d,gridHeaderViewportContainerEl:h,gridHeaderViewportEl:u,gridBodyViewportEl:p,gridBodyContainerEl:g,gridBodyEl:m,gridBodySidebarEl:f}};var ih=({prepareGridCell:i,prepareRowSidebar:t,gridEl:e,length:s})=>{let n=document.createElement("div");n.className="grid_body_row";let a=document.createElement("div");a.className="grid_body_sidebar_row";let o=document.createElement("p");o.className="grid_body_sidebar_cell",a.appendChild(o);let r=[],l=()=>{let f=document.createElement("div");f.classList.add("grid_body_cell"),f.addEventListener("paste",v=>{let C=v.clipboardData.getData("text");document.dispatchEvent(new CustomEvent("promoted-paste",{detail:v.clipboardData.getData("text")}))}),f.addEventListener("copy",()=>{document.dispatchEvent(new CustomEvent("promoted-copy"))}),f.addEventListener("cut",()=>{document.dispatchEvent(new CustomEvent("promoted-cut"))});let b=i({gridEl:e,cellEl:f});return{cellEl:f,update:b}};for(let f=0;f<s;f++){let b=l();r.push(b);let{cellEl:v}=b;n.appendChild(v)}let c=f=>{let b=l();r.push(b);let{cellEl:v}=b;return f.queueRender(()=>{n.appendChild(v)}),b},d=(f,b)=>{if(b>=r.length)return;let v=l(),C=r[b],{cellEl:y}=v,{cellEl:w}=C;return r.splice(b,0,v),f.queueRender(()=>{n.insertBefore(y,w)}),v},h=(f,b)=>{let{cellEl:v}=r.splice(b,1)[0];f.queueRender(()=>{v.remove()})},u=(f,b,v)=>{let{update:C}=r[v];C(f,b)},p=t({gridEl:e,sidebarCellEl:o});return{get length(){return r.length},appendCell:c,insertCell:d,removeCell:h,updateRow:(f,b)=>{p(b);for(let v=0;v<r.length;v++){let{update:C}=r[v],y=f[v];C(y,b)}},updateCell:u,getCell:f=>r[f],rowEl:n,sidebarCellEl:o,sidebarEl:a}};var nh=({gridLayout:i,prepareRowSidebar:t,prepareGridCell:e,minRows:s})=>{let{rowHeight:n,sidebarWidth:a,gridEl:o,gridBodyEl:r,gridBodySidebarEl:l}=i,c=3,d=[],h=[],u=0,p=0,g=0,m=2,f=0,b=()=>{h=[]},v=(L,$,U)=>{u=$+m,p=u*c,g=u*(c-2),h=d,d=[];for(let j=0;j<p;j++){if(h.length>0){let J=h.pop();d.push(J);continue}let N=ih({prepareRowSidebar:t,prepareGridCell:e,gridEl:o,length:U.length});d.push(N);let{rowEl:O,sidebarEl:W,updateRow:Z}=N;N.hide=()=>{O.style.display="none",W.style.display="none",W.style.transform=O.style.transform="translate3d(0px, 0px, 0px)"},N.show=(J,Q)=>{Z(J,Q),W.style.transform=O.style.transform=`translate3d(0px, ${Q*n}rem, 0px)`,O.style.display=N.rowElDisplayStyle,W.style.display=N.sidebarElDisplayStyle},N.rowElDisplayStyle=O.style.display,N.sidebarElDisplayStyle=W.style.display,L.queueRender(()=>{O.style.position="absolute",O.style.height=`${n}rem`,W.style.position="absolute",W.style.height=`${n}rem`,W.style["max-height"]=`${n}rem`,W.style.width=`${a}rem`,r.appendChild(O),l.appendChild(W),N.hide()})}for(let j=0;h.length>0;++j){let{rowEl:N,sidebarEl:O}=h.pop();L.queueRender(()=>{N.remove(),O.remove()})}},C=0,y=0,w=!0,x=()=>{let L=h;h=d,d=L},_=(L,$,U)=>{let j=$+p;x(),L.queueRender(()=>{for(let N=$;N<j;N++){let O=N-$,W=h[O];d[O]=W,N<f?W.show(U,N):W.hide()}}),C=$},S=(L,$,U)=>{if($-C>=p-1){_(L,$,U);return}let N=$-C,O=p-N,W=$+p;x(),L.queueRender(()=>{for(let Z=$;Z<W;Z++){let J=Z-$;if(J<O){let Q=J+N;d[J]=h[Q]}else{let Q=J-O,Y=h[Q];d[J]=Y,Z<f?Y.show(U,Z):Y.hide()}}}),C=$},A=(L,$,U)=>{if(C-$>=p-1){_(L,$,U);return}let N=C-$,O=p-N,W=$+p;x(),L.queueRender(()=>{for(let Z=$;Z<W;Z++){let J=Z-$;if(J<N){let Q=J+O,Y=h[Q];d[J]=h[Q],Z<f?Y.show(U,Z):Y.hide()}else{let Q=J-N,Y=h[Q];Y&&(d[J]=Y)}}}),C=$},D=(L,$,U)=>{let j=U-y;if(y=U,j===0)return!1;let N=j>0,O=N!==w;if(w=N,N){if(U-C<g)return!1;let Y=U-1;return S(L,Y,$),!0}if(O){let Q=U-C,Y=u-Q+g;Y=C<Y?C:Y;let lt=C-Y;return A(L,lt,$),!0}let W=U-C;if(W>=g)return!1;let Z=u-W+g;Z=C<Z?C:Z;let J=C-Z;return J===C?!1:(A(L,J,$),!0)},M=(L,$,U,j)=>{let N=C,O=N+p,W=O>f?f:O;if(U>=N&&U<W&&j>=0&&j<$.length){let Z=U-N,{updateCell:J}=d[Z],Q=$[j];L.queueRender(()=>{J(Q,U,j)})}},F=(L,$)=>{let U=C,j=U+p;for(let N=U;N<j;N++){let O=N-U,{appendCell:W}=d[O];W(L).update($,N)}},E=(L,$,U)=>{let j=C,N=j+p;for(let O=j;O<N;O++){let W=O-j,{insertCell:Z}=d[W];Z(L,U).update($,O)}},B=(L,$)=>{let U=C,j=U+p;for(let N=U;N<j;N++){let O=N-U,{removeCell:W}=d[O];W(L,$)}},P=(L,$,U)=>{if(!($<s||$===f))if(i.extendgridBodyEl($),f>$){let j=C,N=$-u;N<0&&(N=0),j>N&&(j=N),f=$,_(L,j,U)}else{let N=C+p,O=f;if(f=$,N>O){let W=N<$?N:$;L.queueRender(()=>{for(let Z=O;Z<W;Z++){let J=Z-C;d[J].show(U,Z)}})}}},T=()=>C,I=()=>{let $=C+p;return($>f?f:$)-1};return{initCache:v,rerender:D,updateCell:M,appendColumn:F,insertColumn:E,removeColumn:B,changeTotalRows:P,getRenderedLastRowIndex:I,getRenderedStartRowIndex:T,getCachedRow:L=>d[L],resize:(L,$,U,j)=>{if($!==u+m){let N=U>$?U-$:0;v(L,$,j),_(L,N,j)}},clear:b,getCellElement:(L,$)=>{let U=T(),j=I();if($>=U&&$<=j&&L>=0){let N=$-U,O=d[N];if(L<=O.length){let{cellEl:W}=O.getCell(L);return W}return}},getRowSidebarElement:L=>{let $=T(),U=I();if(L>=$&&L<=U){let j=L-$,{sidebarCellEl:N}=d[j];return N}},get totalRows(){return f},get cachedItemsLen(){return p}}};var ah=()=>{let i=null,t=null,e=null,s=()=>{if(!e){let f=0;for(let b=i;b!==null;b=b.next)b.index=f,f++;e={listLength:f}}},n=(f,b)=>{e=null;let v={previous:null,next:null,index:null,value:f};return b?(v.next=b,v.previous=b.previous,b.previous=v,v.previous?v.previous.next=v:i=v):i?(i.previous=v,v.next=i,i=v):i=t=v,v},a=f=>(s(),f?f.index:-1),o=f=>f===i,r=f=>f===t,l=(f,b)=>{e=null;let v={previous:null,next:null,index:null,value:f};return b?(v.previous=b,v.next=b.next,b.next=v,v.next?v.next.previous=v:t=v):t?(t.next=v,v.previous=t,t=v):i=t=v,e=null,v},c=f=>{e=null;let{previous:b,next:v}=f;b?b.next=v:i=v,v?v.previous=b:t=b,f.previous=f.next=null,f.value=null,f.index=null},d=()=>{let f=[];for(let b=i;b!==null;b=b.next)f.push(b.value);return f},h=f=>{let b=[];for(let v=i;v!==null;v=v.next)b.push(f(v.value));return b},u=f=>{let b=0;for(let v=i;v!==null;v=v.next)f(v.value,b),b++},p=f=>{let{next:b}=f;return b?b.value:null},g=f=>{let{previous:b}=f;return b?b.value:null},m=()=>(s(),e.listLength);return{insertBefore:n,insertAfter:l,remove:c,toArray:d,map:h,forEach:u,indexOf:a,valueBefore:g,valueAfter:p,isFirst:o,isLast:r,get length(){return m()}}};var oh=({gridLayout:i,prepareHeaders:t})=>{let e=[],s=[],n=t.length,{gridHeaderViewportEl:a,gridEl:o}=i,r=[],l=y=>s[y].cellList,c=(y,w)=>{let x=w?w.rowIndex+1:0;if(x>=n)throw Error("Can not add a child to parent deeper than number of header rows");let _=document.createElement("div");_.className="grid_header_cell";let{prepareHeader:S}=s[x],A=S({headerCellEl:_,gridEl:o});return{rowIndex:x,update:A,children:[],parent:w,headerData:y,headerCellEl:_,colspan:1,resizeColspan:!1,rowCellHandle:null}},d=y=>{let{parent:w}=y,x=!w,_=x?e:w.children;return{isTopRow:x,parent:w,siblings:_}},h=(y,w,x)=>{let{rowCellHandle:_,headerCellEl:S}=y,A=x.valueAfter(_);if(A){let{headerCellEl:D}=A;return M=>M.queueRender(()=>{w.insertBefore(S,D)})}return D=>D.queueRender(()=>{w.appendChild(S)})},u=y=>{!y||y.resizeColspan||(y.resizeColspan=!0,u(y.parent))},p=()=>{let y=w=>{if(w.resizeColspan){let{children:x,headerCellEl:_}=w;w.resizeColspan=!1,w.colspan=x.length>0?x.reduce((A,D)=>A+=D.colspan,0):1;let S=i.calcColspanRem(w.colspan);_.style.minWidth=S,_.style.width=S,_.style.maxWidth=S}};for(let w=s.length-1;w>=0;w--){let{cellList:x}=s[w];x.forEach(y)}},g=y=>{let{rowEl:w,cellList:x}=s[y.rowIndex],{siblings:_}=d(y),S=y.parent;if(_.length>0){let A=_[_.length-1].rowCellHandle;y.rowCellHandle=x.insertAfter(y,A)}else if(!S)y.rowCellHandle=x.insertAfter(y,null);else{let A=s[S.rowIndex].cellList;if(A.isFirst(S.rowCellHandle))y.rowCellHandle=x.insertBefore(y);else{let D=A.valueBefore(S.rowCellHandle),F=D.children[D.children.length-1].rowCellHandle;y.rowCellHandle=x.insertAfter(y,F)}}return _.push(y),u(y),h(y,w,x)},m=(y,w)=>{let{rowEl:x,cellList:_}=s[y.rowIndex],{siblings:S}=d(y),A=S[w].rowCellHandle;return y.rowCellHandle=_.insertBefore(y,A),S.splice(w,0,y),u(y),h(y,x,_)},f=y=>{let{headerCellEl:w}=y,{siblings:x}=d(y),_=l(y.rowIndex),S=x.indexOf(y);return x.splice(S,1),_.remove(y.rowCellHandle),u(y.parent),A=>A.queueRender(()=>{w.remove()})},b=()=>{let y=s[n-1].cellList;r.splice(0),y.forEach(w=>{r.push(w.headerData)})},v=()=>{t.forEach((y,w)=>{let x=document.createElement("div"),_=ah();x.className="grid_header_row",a.appendChild(x);let S={rowEl:x,rowIndex:w,cellList:_,prepareHeader:y};s.push(S)})},C=(...y)=>{let w=e,x=null;for(let _ of y){if(_<0||_>=w.length){x=null;break}x=w[_],w=x.children}if(x)return x.headerCellEl};return v(),{createHeaderCell:c,createAppend:g,createInsert:m,createRemove:f,resizeCells:p,resolveCacheData:b,getRowCellList:l,getHeaderElement:C,get columnDataList(){return r},get rootHeaderCells(){return e},get totalHeaderRows(){return n}}};var ba=()=>{let i=[];return{queueRender:t=>{i.push(t)},applyChanges:()=>{i.forEach(t=>t()),i.splice(0)}}};var rh=({gridLayout:i,rowCache:t,headerCache:e,scrollState:s})=>{let n=()=>t.totalRows,a=()=>e.columnDataList.length,o=(M,F={})=>{let E=(K,L,$)=>{let U,j=N=>({data:O,children:W=[]},Z=null)=>{let J=e.createHeaderCell(O,Z),Q=N(J);if(K.push(Q),K.push(Y=>Y.queueRender(()=>{J.update(J.headerData)})),J.rowIndex===e.totalHeaderRows-1){let Y=e.getRowCellList(J.rowIndex);if(Y.isLast(J.rowCellHandle))L.push(lt=>t.appendColumn(lt,O));else{let lt=Y.indexOf(J.rowCellHandle);L.push(st=>t.insertColumn(st,O,lt))}}else W.forEach(Y=>U(Y,J))};return U=j(N=>e.createAppend(N)),j($)},B=K=>{let L=[],$=[];E(L,$,j=>e.createAppend(j))(K),L.forEach(j=>j(M)),$.forEach(j=>j(M)),F.refreshHeaderCache=!0},P=()=>t.getRenderedStartRowIndex(),T=()=>t.getRenderedLastRowIndex();return{get renderedStartRowIndex(){return P()},get renderedLastRowIndex(){return T()},appendHeader:B,insertHeader:(K,L)=>{let $=[],U=[];E($,U,N=>e.createInsert(N,K))(L),$.forEach(N=>N(M)),U.forEach(N=>N(M)),F.refreshHeaderCache=!0},updateCell:(K,L)=>{t.updateCell(M,e.columnDataList,K,L)},getHeader:K=>{let L=e.totalHeaderRows-1,$=(U,j)=>{if(j>=U.length)return null;let N=U[j],W={remove:()=>{let Z=[],J=[],Q=Y=>{if(Y.rowIndex===L){let ct=e.getRowCellList(Y.rowIndex).indexOf(Y.rowCellHandle);J.push(ot=>t.removeColumn(ot,ct))}else{let{children:st}=Y,ct=st.length-1;for(let ot=ct;ot>=0;ot--){let at=st[ot];Q(at)}}let lt=e.createRemove(Y);Z.push(lt)};Q(N),Z.forEach(Y=>Y(M)),J.forEach(Y=>Y(M)),F.refreshHeaderCache=!0}};if(N.rowIndex===L){let Z=e.getRowCellList(N.rowIndex),J=Q=>{let Y=Z.indexOf(N.rowCellHandle);t.updateCell(M,e.columnDataList,Q,Y)};W.refreshCell=J}else{let Z=Y=>$(N.children,Y),J=Y=>{let lt=[],st=[];E(lt,st,ot=>e.createAppend(ot))(Y,N),lt.forEach(ot=>ot(M)),st.forEach(ot=>ot(M)),F.refreshHeaderCache=!0},Q=(Y,lt)=>{let st=[],ct=[];E(st,ct,at=>e.createInsert(at,Y))(lt,N),st.forEach(at=>at(M)),ct.forEach(at=>at(M)),F.refreshHeaderCache=!0};W.getChildHeader=Z,W.appendChildHeader=J,W.insertChildHeader=Q}return W};return $(e.rootHeaderCells,K)},changeTotalRows:K=>{t.changeTotalRows(M,K,e.columnDataList)}}},r=M=>{let F=ba(),E={refreshHeaderCache:!1},B=o(F,E);M(B),E.refreshHeaderCache&&e.resolveCacheData(),e.resizeCells(),F.applyChanges()},l=()=>{let{gridHeaderViewportEl:M,gridBodyViewportEl:F,gridBodyEl:E}=i;M.style.overflow=F.style.overflow=E.style.overflow="hidden"},c=()=>{let{gridHeaderViewportEl:M,gridBodyViewportEl:F,gridBodyEl:E}=i;M.style.overflow=F.style.overflow=E.style.overflow=""},d=!1,h=()=>d,u=M=>{d=M,d?l():c()},p=(M,F,E)=>{if(F>n())return;let B=null,P=null,{columnDataList:T}=e,{gridBodyViewportEl:I,gridBodyEl:et}=i,H=t.getCachedRow(0),V=H.getCell(0);if(M!==null){let K=T.indexOf(M);if(K===-1)return;let L=V.cellEl.offsetWidth,$=L*K,U=$+L;if(E){let j=et.offsetWidth,N=et.scrollLeft,O=N+j;U>O?B=$-j+L:$<N&&(B=$)}else B=$}if(F!==null){let K=H.rowEl.offsetHeight,L=K*F,$=L+K;if(E){let U=I.offsetHeight,j=I.scrollTop,N=j+U;$>N?P=L-U+K:L<j&&(P=L)}else P=L}B!==null&&(s.suppressUiNotfication(),et.scrollLeft=B),P!==null&&(s.suppressUiNotfication(),I.scrollTop=P)},g=(M,F)=>{let{gridBodyEl:E,gridBodyViewportEl:B}=i,P=E.getBoundingClientRect(),T=B.getBoundingClientRect(),I=M<P.left,et=M>P.right,H=F<T.top,V=F>T.bottom;return{isLeft:I,isRight:et,isTop:H,isBottom:V,isInside:!I&&!et&&!H&&!V,equals:$=>$.isLeft===I&&$.isRight===et&&$.isTop===H&&$.isBottom===V}},m=M=>{let{gridBodyEl:F}=i,{columnDataList:E}=e,P=t.getCachedRow(0).getCell(0),T=E.indexOf(M);if(T===-1)return{};let I=P.cellEl.offsetWidth,et=I*T,H=et+I,V=F.offsetWidth,K=F.scrollLeft,L=K+V;return{outsideRight:H>L,outsideLeft:et<K}},f=M=>{if(M>n())return{};let{gridBodyViewportEl:F}=i,B=t.getCachedRow(0).rowEl.offsetHeight,P=B*M,T=P+B,I=F.offsetHeight,et=F.scrollTop,H=et+I;return{outsideBottom:T>H,outsideTop:P<et}},b=(M,F)=>t.getCellElement(M,F),v=M=>t.getRowSidebarElement(M),C=(...M)=>e.getHeaderElement(...M),y=()=>{let{gridEl:M}=i;M.tabIndex=1,M.focus()},w=()=>{let{gridBodyViewportEl:M,rowHeight:F}=i,{scrollTop:E}=M;return Math.floor(E/F)},x=()=>{let{gridBodyViewportEl:M,rowHeight:F}=i,{scrollTop:E}=M,B=M.getBoundingClientRect(),T=(E+B.height)/F,I=Math.floor(T);return I-T==0&&I>0?I-1:I},_=()=>{let{gridBodyEl:M}=i,{columnDataList:F}=e,P=t.getCachedRow(0).getCell(0).cellEl.offsetWidth,{scrollLeft:T}=M,I=Math.floor(T/P);return F[I]},S=()=>{let{gridBodyEl:M}=i,{columnDataList:F}=e,P=t.getCachedRow(0).getCell(0).cellEl.offsetWidth,{scrollLeft:T}=M,I=M.getBoundingClientRect(),H=(T+I.width)/P,V=Math.floor(H),K=V-H==0&&V>0?V-1:V;return F[K]};return{get totalRows(){return n()},get totalColumns(){return a()},get topVisibleRowIndex(){return w()},get bottomVisibleRowIndex(){return x()},get leftVisibleColumn(){return _()},get rightVisibleColumn(){return S()},get scrollDisabled(){return h()},set scrollDisabled(M){u(M)},applyChanges:r,scrollTo:p,getRelativePosition:g,getRelativeRowInfo:f,getRelativeColumnInfo:m,getCellElement:b,getRowSidebarElement:v,getHeaderElement:C,focus:y,clear:()=>{t.clear()},resize:()=>{i.resize()}}};var xa=()=>{},lh=({gridEl:i,padding:t=.3125,borderSize:e=.0625,sidebarWidth:s=3.75,scrollerSize:n=.9375,rowHeight:a=2,cellWidth:o=6.25,prepareHeaders:r=[],prepareRowSidebar:l=()=>xa,prepareGridCell:c=()=>xa,prepareGrid:d=xa,minRows:h=10,onScroll:u=xa}={})=>{let p=h>1?h:1,g=r.length,m=ba(),f=sh({rowHeight:a,borderSize:e,sidebarWidth:s,scrollerSize:n,padding:t,cellWidth:o,totalHeaderRows:g,gridEl:i,prepareGrid:d}),b=nh({gridLayout:f,prepareGridCell:c,prepareRowSidebar:l,minRows:p}),v=oh({gridLayout:f,prepareHeaders:r}),C=eh({onScrollHandler:u});th({scrollState:C,gridLayout:f}),Jd({scrollState:C,gridLayout:f,rowCache:b,headerCache:v,accumulator:m}),f.onResize((w,x)=>{b.resize(m,w,x,v.columnDataList),m.applyChanges()});let y=rh({gridLayout:f,rowCache:b,headerCache:v,scrollState:C});return b.initCache(m,f.itemsPerScreen,v.columnDataList),b.changeTotalRows(m,p,v.columnDataList),m.applyChanges(),y};var G=Symbol("priv");var ch=({interactionContext:i,dataSetGrid:t})=>({gridEl:e})=>{let{events:s}=i;e.oncontextmenu=()=>!1,s.registerGridEvent(e,"grid-touch-tap",()=>{i.clear()}),s.registerSystemEvent(e,"keydown",a=>{let o={},r=46,l=8,c=37,d=38,h=39,u=40;a.which===d?o.upKey=!0:a.which===u?o.downKey=!0:a.which===h?o.rightKey=!0:a.which===c?o.leftKey=!0:a.keyCode===r||a.keyCode===l?o.deleteKey=!0:(a.ctrlKey||a.metaKey||a.altKey)&&a.key.length===1&&a.key[0]==="a"?o.ctrlA=!0:o.unknown=!0,o.shiftKey=a.shiftKey;let p=(m,f,b)=>{if(i.activeRowSelection(m)&&f>=0&&f<=t.totalRows-1){let{grid:v}=t[G];i.closeSelectContextMenu(),b?i.uiExpandRowSelection(f):i.uiStartRowSelection(f),v.scrollTo(null,f,!0)}},g=(m,f)=>{let b=i.getInteractionInfo();if(b.columnsSelected){let v=b.endCol;if(i.activeColumnSelection(v)){let C=v.gridPosition,y=m?C+1:C-1,w=t[G].getRawColumns();if(y>=0&&y<w.length){let x=w[y];i.closeSelectContextMenu(),f?i.uiExpandColumnSelection(x):i.uiStartColumnSelection(x);let{grid:_}=t[G];_.scrollTo(x,null,!0),a.preventDefault()}}}else if(b.dataSetsSelected){let v=b.endDataSet;if(i.activeDataSetSelection(v)){let C=v.position,y=m?C+1:C-1,{dataSets:w}=t[G];if(y>=0&&y<w.length){let x=w.findByIndex(y);i.closeSelectContextMenu(),f?i.uiExpandDataSetSelection(x):i.uiStartDataSetSelection(x);let{grid:_}=t[G],S=x[G].columns,A=m?S.length-1:0,D=S.findByIndex(A);_.scrollTo(D,null,!0),a.preventDefault()}}}};if(o.upKey){let f=i.getInteractionInfo().endRowIndex;p(f,f-1,o.shiftKey)}else if(o.downKey){let f=i.getInteractionInfo().endRowIndex;p(f,f+1,o.shiftKey)}else o.rightKey?g(!0,o.shiftKey):o.leftKey?g(!1,o.shiftKey):o.deleteKey?(i.executeDelete(),a.preventDefault()):o.ctrlA&&(i.uiSelectAll(),a.preventDefault())});let n=-1;s.registerSystemEvent(document,"keydown",a=>{a.shiftKey&&(n=a.keyCode,i.shiftSelected=!0)}),s.registerSystemEvent(document,"keyup",a=>{a.keyCode===n&&(i.shiftSelected=!1)}),s.registerGridEvent(document,"grid-touch-select-move",a=>{let{clientX:o,clientY:r}=a.detail;i.checkOverscroll(o,r)}),s.registerGridEvent(e,"grid-touch-select-start",()=>{i.scrollDisabled=!0}),s.registerGridEvent(document,"grid-touch-select",()=>{if(i.uiSelectionOccurring){i.uiEndSelection(),i.clearOverscroll(),i.scrollDisabled=!1;let a=i.getInteractionInfo(),{grid:o}=t[G],r;if(a.cellReselect)r=a.cellReselect.cellEl,i.selectContextMenuOpen&&i.closeSelectContextMenu();else if(a.dataSetsSelected){let l=a.endDataSet.position;r=o.getHeaderElement(l)}else if(a.columnsSelected){let l=a.endCol.dataSet.position,c=a.endCol.position;r=o.getHeaderElement(l,c)}else a.rowsSelected?r=o.getRowSidebarElement(a.endRowIndex):a.cellsSelected&&(r=o.getCellElement(a.endColIndex,a.endRowIndex));if(r){let{left:l,top:c,width:d,height:h}=r.getBoundingClientRect(),u=l+Math.round(d/2),p=c+Math.round(h/2);i.toggleSelectContextMenu({cellEl:r,clientX:u,clientY:p,isTouch:!0})}}}),s.registerGridEvent(e,"grid-mouse-select-start",()=>{i.clear()}),s.registerGridEvent(document,"grid-mouse-select-move",a=>{let{clientX:o,clientY:r}=a.detail;i.checkOverscroll(o,r)}),s.registerGridEvent(e,"grid-mouse-select",()=>{i.uiSelectionOccurring&&(i.uiEndSelection(),i.clearOverscroll(),i.scrollDisabled=!1)})};var dh=({interactionContext:i})=>{let{events:t}=i,e=s=>{s.tabIndex=1,s.focus()};return({sidebarCellEl:s,gridEl:n})=>{let a=document.createElement("span"),o=0;return s.appendChild(a),t.registerGridEvent(s,"grid-touch-tap",r=>{r.preventDefault(),r.stopPropagation(),i.uiStartRowSelection(o),e(n)},!1),t.registerGridEvent(s,"grid-touch-select-start",()=>{i.uiStartRowSelection(o),e(n)},!1),t.registerGridEvent(s,"grid-touch-select-enter",()=>{i.uiExpandRowSelection(o),e(n)},!1),t.registerGridEvent(s,"grid-mouse-select-start",r=>{r.preventDefault(),r.stopPropagation(),i.shiftSelected&&i.rowsSelected?(i.scrollDisabled=!0,i.uiExpandRowSelection(o)):i.activeRowSelection(o)?i.clear():(i.scrollDisabled=!0,i.uiStartRowSelection(o)),e(n)},!1),t.registerGridEvent(s,"grid-mouse-select-enter",r=>{r.preventDefault(),r.stopPropagation(),i.uiExpandRowSelection(o),e(n)},!1),t.registerGridEvent(s,"grid-mouse-context-menu",r=>{i.activeRowSelection(o)||i.uiStartRowSelection(o);let{clientX:l,clientY:c}=r.detail;i.toggleSelectContextMenu({clientX:l,clientY:c,isTouch:!1,cellEl:s}),r.stopPropagation()}),r=>{a.innerText=r+1,o=r}}};var hh=({interactionContext:i})=>({cellEl:t})=>{let e={rowIndex:null,column:null,selectAll:!1,isReverting:!1,isEditing:!1,isDeepEdit:!1,isSelected:!1,isFocused:!1,readonly:null,tapRowIndex:null,cellText:null,checkToExtend:!0},{events:s}=i,n=navigator.userAgent.match(/Android/i),a=navigator.userAgent.match(/iPhone/i),o=document.createElement("span"),r=document.createElement("input"),l=n||a,c={type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1};r.classList.add("grid_text"),Object.assign(r,c);let d=()=>{},h,u,p,g;u=()=>{r.style.display="inline",t.classList.add("shows_text"),p=g,h=d},g=()=>{r.style.display="none",t.classList.remove("shows_text"),h=u,p=d},h=u,p=g;let m,f,b,v;f=()=>{o.style.display="inline",m=d,b=v},v=()=>{o.style.display="none",b=d,m=f},b=v,m=f,b(),p(),t.appendChild(o),t.appendChild(r);let C=37,y=38,w=39,x=40,_=9,S=13,A=27,D=46,M=8,F=({key:T})=>{if(T.length!==1)return!1;let I=T.charCodeAt(0);return I>=32&&I<=126};s.registerSystemEvent(t,"keydown",T=>{let I={};if(T.keyCode===_?I.tabKey=!0:T.keyCode===S?I.enterKey=!0:T.which===y?I.upKey=!0:T.which===x?I.downKey=!0:T.which===C?I.leftKey=!0:T.keyCode===w?I.rightKey=!0:T.keyCode===A?I.escapeKey=!0:T.keyCode===D||T.keyCode===M?I.deleteKey=!0:F(T)?(I.inputCharacter=!0,I.char=T.key):I.unknown=!0,I.shiftKey=T.shiftKey,I.actionKey=T.ctrlKey||T.metaKey||T.altKey,I.escapeKey)T.preventDefault(),e.isReverting=!0,i.startCellSelection(e.column,e.rowIndex);else if(e.isDeepEdit&&(I.leftKey||I.rightKey||I.upKey||I.downKey))T.stopPropagation();else if(!e.isDeepEdit&&I.actionKey&&I.enterKey)T.stopPropagation(),T.preventDefault(),i.deepEditCell(e.column,e.rowIndex);else if(I.escapeKey)T.preventDefault(),e.isFocused&&e.isEditing&&(e.isReverting=!0,i.startCellSelection(e.column,e.rowIndex));else if(I.inputCharacter)e.isEditing&&I.char==="a"&&I.actionKey?(T.preventDefault(),T.stopPropagation(),e.selectAll=!0,i.editCell(e.column,e.rowIndex,!0)):e.isFocused&&!e.isEditing&&!I.actionKey&&(!i.hasSelection||i.singleCellSelected(e.column,e.rowIndex))&&(T.preventDefault(),e.replaceEdit={value:I.char},i.editCell(e.column,e.rowIndex,!0));else if(I.deleteKey)e.isEditing&&T.stopPropagation();else if(e.isFocused&&!I.unknown){T.preventDefault();let et=e.rowIndex,{column:H}=e,V=H.dataSet.grid,{dataSets:K}=V[G],{dataSetLength:L}=V,$=I.downKey||I.tabKey&&!I.shiftKey&&H.gridPosition===V.colspan-1?null:r.value;I.enterKey&&!I.shiftKey&&!e.readonly&&($=null),i.checkToExtend(et,$);let U=(O,W)=>{let{totalRows:Z}=V,J=O.position,{dataSet:Q}=O,{columns:Y}=Q[G],lt=Q.colspan,st=Q.position,ct=null,ot=(at,bt)=>{ct={column:at,rowIndex:bt}};if(I.upKey){let at=W-1;at>=0&&ot(O,at)}else if(I.downKey){let at=W+1;at!==Z&&ot(O,at)}else if(!I.shiftKey&&!I.leftKey||I.rightKey)if(J===lt-1){if(I.enterKey){let at=W+1,bt=Y.findByIndex(0);at!==Z&&ot(bt,at)}else if(I.tabKey||I.rightKey)if(st===L-1){if(I.tabKey){let at=W+1,bt=K.findByIndex(0)[G].columns.findByIndex(0);at!==Z&&ot(bt,at)}}else{let at=K.findByIndex(st+1)[G].columns.findByIndex(0);ot(at,W)}}else{let at=Y.findByIndex(J+1);ot(at,W)}else if(J===0){if(I.enterKey){let at=W-1;if(at!==-1){let bt=Y.findByIndex(Q.colspan-1);ot(bt,at)}}else if(I.tabKey||I.leftKey)if(st===0){if(I.tabKey){let at=W-1;if(at!==-1){let bt=K.findByIndex(L-1),Dt=bt[G].columns.findByIndex(bt.colspan-1);ot(Dt,at)}}}else{let at=K.findByIndex(st-1),bt=at[G].columns.findByIndex(at.colspan-1);ot(bt,W)}}else{let at=Y.findByIndex(J-1);ot(at,W)}return ct},j=U(H,et);if(e.column.dataSet.columns.find(O=>!O.readonly)&&I.enterKey)do j=U(H,et),j&&(H=j.column,et=j.rowIndex);while(j&&j.column.readonly);j?I.enterKey||I.tabKey?(e.checkToExtend=!1,i.clear(),j.column&&j.column.readonly?i.uiStartCellSelection(j.column,j.rowIndex):l?i.deepEditCell(j.column,j.rowIndex):i.startCellSelection(j.column,j.rowIndex)):I.shiftKey&&i.activeCellSelection(e.column,e.rowIndex)?(e.checkToExtend=!1,i.uiExpandCellSelection(j.column,j.rowIndex)):i.startCellSelection(j.column,j.rowIndex):e.isEditing&&i.startCellSelection(e.column,e.rowIndex)}}),s.registerGridEvent(t,"grid-touch-tap",T=>{let I=e.column.dataSet.grid,{grid:et}=I[G];e.isSelected?i.toggledTouchContextMenu||!i.selectContextMenuOpen?i.clear():i.closeSelectContextMenu():et.isDeepEditing?i.deepEditCell(e.column,e.rowIndex):i.uiStartCellSelection(e.column,e.rowIndex),e.tapRowIndex=e.rowIndex,T.stopPropagation()},!1),s.registerGridEvent(t,"grid-touch-edit",T=>{!e.isEditing&&e.tapRowIndex===e.rowIndex&&i.deepEditCell(e.column,e.rowIndex),T.stopPropagation()}),s.registerGridEvent(t,"grid-touch-select-start",()=>{e.isSelected?i.uiSetCellReselect(t,e.column,e.rowIndex):i.uiStartCellSelection(e.column,e.rowIndex)}),s.registerGridEvent(t,"grid-touch-select-move",()=>{i.uiClearCellReselect()}),s.registerGridEvent(t,"grid-touch-select-enter",()=>{i.uiExpandCellSelection(e.column,e.rowIndex)}),s.registerGridEvent(t,"grid-mouse-context-menu",T=>{e.isSelected||i.uiStartCellSelection(e.column,e.rowIndex);let{clientX:I,clientY:et}=T.detail;i.toggleSelectContextMenu({clientX:I,clientY:et,isTouch:!1,cellEl:t}),T.stopPropagation()}),s.registerGridEvent(t,"grid-mouse-edit",T=>{!e.isEditing&&e.tapRowIndex===e.rowIndex&&i.deepEditCell(e.column,e.rowIndex),T.stopPropagation()}),s.registerGridEvent(t,"grid-mouse-select-start",T=>{e.tapRowIndex=e.rowIndex,i.shiftSelected&&i.cellsSelected?(i.uiExpandCellSelection(e.column,e.rowIndex),i.scrollDisabled=!0):i.activeCellSelection(e.column,e.rowIndex)?i.clear():(i.uiStartCellSelection(e.column,e.rowIndex),i.scrollDisabled=!0),T.stopPropagation()}),s.registerGridEvent(t,"grid-mouse-select-enter",T=>{i.uiExpandCellSelection(e.column,e.rowIndex),T.stopPropagation()});let E=T=>{r.value=T},B=T=>{o.innerText=null,T?o.innerText=T:o.innerText=""},P={};return(T,I)=>{let et=T!==e.column||e.rowIndex!==I;e.rowIndex=I,e.column=T,et&&(e.isEditing=null,e.isSelected=null,e.cellText=P,e.readonly=T.readonly);let H=T[G].getCellData(I);T.readonly?t.classList.add("readonly"):t.classList.remove("readonly"),H.isDeepEdit?r.classList.add("deepedit"):r.classList.remove("deepedit"),T?.context.isRowStruck&&T.context.isRowStruck(I)?t.classList.add("grid_body_cell_strikethrough"):t.classList.remove("grid_body_cell_strikethrough"),t.tabIndex=void 0,H.isSelected?(t.classList.add("selected"),H.isFocused&&(t.tabIndex=1,t.focus())):t.classList.remove("selected");let V;if(H.isEditing!==e.isEditing)if(H.isEditing){V=e.replaceEdit?e.replaceEdit.value:H.getText(),b(),E(V),h();let K=()=>{e.replaceEdit?r.focus():window.vstMobileScreenGeometry==="notched"?(document.activeElement!==r&&(document.activeElement.blur(),document.activeElement.focus()),r.focus()):r.select()};if(n){let L=document.querySelector("#vst_grid_keyboard_input");L||(L=document.createElement("input"),Object.assign(L,c),L.id="vst_grid_keyboard_input",L.style.left="-99999em",L.style.position="absolute",document.body.appendChild(L)),L.focus(),setTimeout(()=>{K(),e.column.dataSet.grid.scrollToRow(e.rowIndex-1)})}else K()}else!et&&!e.isReverting&&H.setValue(r.value)&&(e.checkToExtend&&i.checkToExtend(I),i.notifyUIChange([{column:T,rowIndex:I}])),V=H.getText(),p(),B(V),m();else V=H.getText(),e.selectAll?(r.select(),r.focus()):!e.replaceEdit&&V!==e.cellText&&(H.isEditing?E(V):B(V));e.checkToExtend=!0,e.isEditing=H.isEditing,e.isDeepEdit=H.isDeepEdit,e.isSelected=H.isSelected,e.isFocused=H.isFocused,e.isReverting=!1,e.replaceEdit=e.isEditing?e.replaceEdit:null,e.selectAll=!1,e.cellText=V}};var uh=({interactionContext:i,renderDataSetContext:t,renderColumnContext:e})=>{let{events:s}=i,n=r=>{r.tabIndex=1,r.focus()};return[({headerCellEl:r,gridEl:l})=>c=>{s.registerGridEvent(r,"grid-touch-select-start",()=>{i.uiStartDataSetSelection(c),n(l)}),s.registerGridEvent(r,"grid-touch-select-enter",()=>{i.uiExpandDataSetSelection(c),n(l)}),s.registerGridEvent(r,"grid-mouse-select-start",d=>{i.shiftSelected&&i.dataSetsSelected?(i.uiExpandDataSetSelection(c),i.scrollDisabled=!0):i.activeDataSetSelection(c)?i.clear():(i.uiStartDataSetSelection(c),i.scrollDisabled=!0),n(l),d.stopPropagation()}),s.registerGridEvent(r,"grid-mouse-select-enter",()=>{i.uiExpandDataSetSelection(c),n(l)}),s.registerGridEvent(r,"grid-mouse-context-menu",d=>{i.activeDataSetSelection(c)||i.uiStartDataSetSelection(c);let{clientX:h,clientY:u}=d.detail;i.toggleSelectContextMenu({clientX:h,clientY:u,isTouch:!1,cellEl:r}),d.stopPropagation()}),c[G].renderContext=t({dataSet:c,headerCellEl:r}),c[G].renderContext(c.context)},({headerCellEl:r,gridEl:l})=>c=>{s.registerGridEvent(r,"grid-touch-select-start",()=>{i.uiStartColumnSelection(c),n(l)}),s.registerGridEvent(r,"grid-touch-select-enter",()=>{i.uiExpandColumnSelection(c),n(l)}),s.registerGridEvent(r,"grid-mouse-select-start",d=>{i.shiftSelected&&i.columnsSelected?(i.uiExpandColumnSelection(c),i.scrollDisabled=!0):i.activeColumnSelection(c)?i.clear():(i.uiStartColumnSelection(c),i.scrollDisabled=!0),n(l),d.stopPropagation()}),s.registerGridEvent(r,"grid-mouse-select-enter",()=>{i.uiExpandColumnSelection(c),n(l)}),s.registerGridEvent(r,"grid-mouse-context-menu",d=>{i.activeColumnSelection(c)||i.uiStartColumnSelection(c);let{clientX:h,clientY:u}=d.detail;i.toggleSelectContextMenu({clientX:h,clientY:u,isTouch:!1,cellEl:r}),d.stopPropagation()}),c[G].renderContext=e({column:c,headerCellEl:r}),c[G].renderContext(c.context)}]};var va=()=>{let i=[],t={},e=(n,a)=>{i.splice(a,1),delete t[n]},s={};return{append:(n,a)=>{t[n]||(t[n]=a,i.push({key:n,value:a}))},insert:(n,a,o)=>{t[a]||(t[a]=o,i.splice(n,0,{key:a,value:o}))},hasKey:n=>!!t[n],removeByIndex:n=>{let{key:a}=s||i[n];a&&e(a,n)},removeByKey:n=>{let a=i.findIndex(({key:o})=>o===n);a!==-1&&e(n,a)},clear:()=>{i.splice(0,1),Object.keys(t).forEach(n=>{delete t[n]})},findByIndex:n=>(i[n]||s).value,findByKey:n=>t[n],indexForKey:n=>i.findIndex(a=>a.key===n),keyForIndex:n=>(i[n]||s).key,forEach:n=>{for(let a=0;a<i.length;a++){let{key:o,value:r}=i[a];n(r,o,a)}},reverse:n=>{for(let a=i.length-1;a>=0;a--){let{key:o,value:r}=i[a];n(r,o,a)}},map:n=>i.map(({key:a,value:o},r)=>n(o,a,r)),reduce:(n,a)=>{let o=(r,{key:l,value:c},d)=>n(r,c,l,d);return i.reduce(o,a)},every:n=>i.every(({value:a,key:o},r)=>n(a,o,r)),some:n=>i.some(({value:a,key:o},r)=>n(a,o,r)),toList:()=>i.map(n=>n.value),get length(){return i.length}}};var Zi=(i,t,e)=>{if(typeof t!="string")throw Error(`${e} parameter id needs a string value`);if(i.hasKey(t))throw Error(`a ${e} with id '${t}' already exists.`)};var ph=({dataSet:i,maxLength:t})=>{let{grid:e}=i.grid[G],{columns:s}=i[G],n=e.totalRows;e.applyChanges(a=>{let o=s.map(l=>({data:l})),r={data:i,children:o};a.appendHeader(r),t>n&&a.changeTotalRows(t)})};var gh=({dataSetGrid:i})=>{let{grid:t,minRows:e}=i[G],s=i.dataSetLength-1;t.applyChanges(n=>{for(let a=s;a>=0;a--)n.getHeader(a).remove();n.changeTotalRows(e)})};var cr=({newColumns:i,dataSet:t,maxLength:e,append:s=!1,index:n=0})=>{let a=t.grid,{grid:o}=a[G],r=o.length,l=t.position;o.applyChanges(c=>{let d=c.getHeader(l);s?i.forEach(h=>{d.appendChildHeader({data:h})}):i.forEach((h,u)=>{let p=n+u;d.insertChildHeader(p,{data:h})}),e>r&&c.changeTotalRows(e)})};var ii=(i,...t)=>(t.forEach(e=>{let s=Object.keys(e).reduce((n,a)=>(n[a]=Object.getOwnPropertyDescriptor(e,a),n),{});Object.getOwnPropertySymbols(e).forEach(n=>{let a=Object.getOwnPropertyDescriptor(e,n);a.enumerable&&(s[n]=a)}),Object.defineProperties(i,s)}),i);var fh=({column:i})=>{let t=i.position,{dataSet:e}=i,s=e.position,{grid:n}=e.grid[G];n.applyChanges(a=>{a.getHeader(s).getChildHeader(t).remove()})};var Fe=(i,t=0)=>i.reduce((s,n)=>{let a=n[G].values.length;return a>s?a:s},t)+1;var mh=({cellResolver:i,column:t})=>{let e=[],s=[],n=m=>{for(let f=0;f<e.length;f++){let b=e[f];s[f]=i.valueToText(b,t,!1),m&&m(f)}},a=(m,f)=>e[m]===f,o=m=>{let f=m.length,b=f;for(let v=f-1;v>=0&&i.isEmpty(m[v]);v--)b-=1;return m.length=b,m};return{get length(){return e.length},load:m=>{e=m,n()},refresh:n,trimArray:o,trimCollection:()=>{s.length=o(e).length},getAll:()=>e,setAll:(m,f)=>{let b=e;e=m,s.length=e.length;for(let v=0;v<e.length;v++){let C=e[v];b[v]!==m[v]&&(s[v]=i.valueToText(C,t,!1),f(v))}for(let v=e.length;v<b.length;v++)i.isEmpty(b[v])||f(v)},getSingle:m=>e[m],setSingle:(m,f,b="")=>{e[m]=f,s[m]=i.valueToText(f,t,!1)},matches:a,getEditText:m=>{let f=e[m];return i.valueToText(f,t,!0)},getReadText:m=>{let f=s[m];return f===void 0?"":f}}};var ya=({id:i,context:t,readonly:e=!1,values:s,dataSet:n,cellResolver:a,interactionContext:o,resolvePositions:r}={})=>{let l={},c=mh({cellResolver:a,column:l}),d=()=>{c.trimCollection()},h=E=>{t=E,l[G].renderContext(t)},u=(E,B)=>{let P=a.textToValue(B);return P.isAlphanumeric&&c.getSingle(E)!==P.value?(c.setSingle(E,P.value,P.value),!0):!P.parseFailed&&c.getSingle(E)!==P.value?(c.setSingle(E,P.value),!0):!1},p=E=>{let{isEditing:B,isDeepEdit:P,isFocused:T,isSelected:I}=o.getCellState(l,E);return{getText:B?()=>c.getEditText(E):()=>c.getReadText(E),setValue:V=>u(E,V),isSelected:I,isEditing:B,isDeepEdit:P,isFocused:T}},g=E=>{n.grid[G].grid.scrollTo(l,null,E)},m=(E,B)=>{n.grid[G].grid.scrollTo(l,E,B)},f=-1,b=E=>{f=E},v=-1,C=E=>{v=E},y=()=>{if(n[G].columns.length===1)throw Error("Datasets must have at least one column");o.clear(),fh({column:l});let{columns:E}=l.dataSet[G];E.removeByKey(l.id),r(),f=-1,v=-1},w=()=>{let E=n.grid,{grid:B}=E[G];B.applyChanges(P=>{c.refresh(T=>P.updateCell(T,f))})},x=()=>{h(t)},_=(E=[])=>{let B=E.slice(0);c.trimArray(B);let P=n.grid,{grid:T}=P[G],I=P[G].getRawColumns(),et=T.totalRows,H=Fe(I,B.length);T.applyChanges(V=>{H>et&&V.changeTotalRows(H),c.setAll(B,K=>V.updateCell(K,f))})},S=()=>c.getAll().slice(0),A=E=>c[E],D=(E,B)=>{if(!c.matches(E,B)){let P=n.grid,{grid:T}=P[G],I=P[G].getRawColumns();c.setSingle(E,B),c.trimCollection();let et=T.totalRows,H=Fe(I,s.length);T.applyChanges(V=>{H>et&&V.changeTotalRows(H),V.updateCell(E,f)})}},M=()=>{c.load(s.slice(0))},F=E=>{e=!!E,w()};return ii(l,{get id(){return i},get context(){return t},set context(E){h(E)},get readonly(){return e},set readonly(E){F(E)},get dataSet(){return n},get position(){return v},get gridPosition(){return f},getValues:S,setValues:_,getValue:A,setValue:D,refresh:w,refreshHeader:x,remove:y,scrollTo:g,scrollToCell:m,[G]:{values:c,getCellData:p,trimValues:d,setContext:()=>{},setPosition:C,setGridPosition:b,load:M}})};var bh=({dataSet:i,columns:t,cellResolver:e,interactionContext:s,resolvePositions:n})=>{if(t.length<1)throw Error("dataSet needs at least one column.");let a=va(),o=g=>Zi(a,g,"column"),r=(g,m,f)=>{if(o(g),f(g))throw Error(m)};t.forEach(({id:g,context:m,readonly:f,values:b}={})=>{Zi(a,g,"column");let v=ya({id:g,context:m,readonly:f,values:b,dataSet:i,cellResolver:e,interactionContext:s,resolvePositions:n});a.append(v.id,v)});let l=()=>a.length,c=()=>a.toList(),d=g=>a.findByKey(g),h=(g,m)=>r(g,`column config '${g}' has duplicate`,f=>{let{length:b}=m.filter(v=>v.id===f);return b>1});return{getColspan:l,getColumns:c,getColumnById:d,appendColumns:(g=[])=>{s.clear();let m=g.map(({id:v,context:C,readonly:y,values:w=[]}={})=>(h(v,g),ya({id:v,context:C,readonly:y,values:w,dataSet:i,cellResolver:e,interactionContext:s,resolvePositions:n})));m.forEach(v=>a.append(v.id,v)),m.forEach(v=>v[G].load());let{columns:f}=i.grid,b=Fe(f);return n(),cr({newColumns:m,dataSet:i,maxLength:b,append:!0}),m},insertColumns:(g=0,m=[])=>{s.clear();let f=m.map(({id:y,context:w,readonly:x,values:_=[]}={})=>{if(h(y,m),g>=a.length)throw Error(`index ${g} for column ${y} is out of bounds.`);return ya({id:y,context:w,readonly:x,values:_,dataSet:i,cellResolver:e,interactionContext:s,resolvePositions:n})}),b=g;f.forEach(y=>{a.insert(b,y.id,y),b++}),f.forEach(y=>y[G].load());let{columns:v}=i.grid,C=Fe(v);return n(),cr({newColumns:f,dataSet:i,maxLength:C,index:g}),f},columns:a}};var xh=({dataSet:i})=>{let t=i.position,{grid:e}=i.grid[G];e.applyChanges(s=>{s.getHeader(t).remove()})};var vh=({id:i,context:t,columns:e=[],dataSetGrid:s,cellResolver:n,interactionContext:a,resolvePositions:o}={})=>{let r=x=>r.getColumnById(x),{getColspan:l,getColumns:c,getColumnById:d,appendColumns:h,insertColumns:u,columns:p}=bh({dataSet:r,columns:e,cellResolver:n,interactionContext:a,resolvePositions:o}),g=-1,m=x=>{g=x},f=-1,b=x=>{f=x},v=()=>{let{columns:x}=r[G],_=x.findByIndex(0);s[G].grid.scrollTo(_,null)},C=x=>{t=x,r[G].renderContext(t)},y=()=>{a.clear(),xh({dataSet:r});let{dataSets:x}=s[G];x.removeByKey(i),o(),g=-1,f=-1},w=()=>{p.forEach(x=>{x[G].load()})};return ii(r,{get id(){return i},get context(){return t},set context(x){C(x)},get columns(){return c()},get colspan(){return l()},get gridPosition(){return g},get position(){return f},get grid(){return s},getColumnById:d,appendColumns:h,insertColumns:u,remove:y,scrollTo:v,[G]:{columns:p,setContext:()=>{},setPosition:b,setGridPosition:m,load:w}})};var yh=({dataSetGrid:i,cellResolver:t,interactionContext:e})=>{let s=va(),n=[],a=!0,o=()=>n.slice(0),r=()=>n.length,l=()=>n,c=()=>s.toList(),d=()=>{n=[],a=!0;let b=0;for(let v=0;v<s.length;v++){let C=s.findByIndex(v);C[G].setGridPosition(b),C[G].setPosition(v);let{columns:y}=C[G];for(let w=0;w<y.length;w++){let x=y.findByIndex(w);x[G].setGridPosition(b),x[G].setPosition(w),b++,a=a&&x.readonly,n.push(x)}}};return{addDataSet:({id:b,context:v,columns:C}={})=>{e.clear(),Zi(s,b,"dataset");let y=vh({id:b,context:v,columns:C,dataSetGrid:i,cellResolver:t,interactionContext:e,resolvePositions:d});s.append(y.id,y),y[G].load(),d();let w=o(),x=Fe(w);return ph({dataSet:y,gridColumns:w,maxLength:x}),y},getDataSet:b=>s.findByKey(b),getLength:()=>s.length,getColumns:o,getColspan:r,getDataSets:c,getReadonly:()=>a,clear:()=>{e.clear(),gh({dataSetGrid:i}),s.clear(),d()},dataSets:s,refreshHeaders:()=>{s.forEach(b=>{b[G].columns.forEach(v=>{v.refreshHeader()})})},getRawColumns:l}};var pr=Sa(_h());var Ff=new Intl.NumberFormat(void 0,{maximumFractionDigits:20}),zf=1111 .toLocaleString().replace(/1/g,""),Gf=1.1 .toLocaleString().replace(/1/g,""),Wf=(-1).toLocaleString().replace(/1/g,""),wh={thousand:zf,decimal:Gf,negativeSign:Wf},ur=(i,t=Ff)=>{if(!Number.isNaN(parseFloat(i))){if(typeof t.formatToParts=="function"){let n=a=>{let o=a.type==="minusSign",r=a.type==="group",l=a.value;return o?l="-":r?l="":l};return t.formatToParts(i).reduce((a,o)=>a+n(o),"")}let e=i<0,s=t.format(Math.abs(i)).replace(wh.thousandSeparator,"");return e?`-${s}`:s}return""},Ch=(i="",t=wh)=>{if(t.thousand!==""){let n=new RegExp(`\\${t.thousand}`,"g");i=i.replace(n,"")}let e=new RegExp(`\\${t.decimal}`),s=new RegExp(`\\${t.negativeSign}`);return parseFloat(i.replace(e,".").replace(s,"-"))};var{cordova:_a}=window,gr=()=>{let i=t=>{if(!t)return!1;if(t.tagName==="INPUT")return!0;let{shadowRoot:e}=t;return e?i(e.activeElement):!1};return i(document.activeElement)},Sh=({getSelection:i,dataSetGrid:t,callbacks:e,cellResolver:s,allowsAlphanumeric:n})=>{let a=_a&&_a.plugins&&_a.plugins.clipboard?_a.plugins.clipboard:null,o=null,r=null,l=()=>{r&&(r.closeUI(),r=null)},c=()=>{let{grid:E}=t[G];E.scrollDisabled=!1},d=()=>{let{grid:E}=t[G];E.scrollDisabled=!0},h=E=>{let B=E.columns||t[G].getRawColumns(),P=E.rows?E.rows.start:0,T=E.rows?E.rows.end:t.totalRows-1,I=B.length,{grid:et}=t[G],H=[];et.applyChanges(V=>{for(let K=0;K<I;K++){let L=B[K];if(!L.readonly){let{values:$}=L[G];for(let U=P;U<=T;U++){let j=L.gridPosition;$.setSingle(U,s.emptyValue),V.updateCell(U,j),H.push({column:L,rowIndex:U,value:s.emptyValue})}$.trimCollection()}}}),e.onUserInputChange(H)},u=E=>{h(E),l()},p=E=>{let B=(E.columns||t[G].getRawColumns()).map(H=>H[G].values),P=E.rows?E.rows.start:0,T=E.rows?E.rows.end:t.totalRows-1,I=[],et=B.length;for(let H=P;H<=T;H++){let V=[];I.push(V);for(let K=0;K<et;K++){let $=B[K].getSingle(H);if(n){let U=ur($);U.length?V.push(U):V.push($)}else V.push(ur($))}}return window.csv=pr,pr.unparse(I,{delimiter:"	"})},g=(E,B)=>{let P=p(B);o=P,E&&(window.getSelection().toString()===""?E.clipboardData.setData("text/plain",P):E.clipboardData.setData("text/plain",window.getSelection().toString()))},m=(E,B)=>{g(E,B),l()},f=()=>!document.getSelection().isCollapsed,b=E=>{if(gr())return;let B=i();B&&(m(E,B),!f()&&E&&E.preventDefault())},v=()=>{!i()||(navigator.clipboard?(async()=>{try{await navigator.clipboard.writeText(p(i()))}catch(B){b()}})():document.execCommand("copy")||createNativeSelection()&&document.execCommand("copy")||b())};document.addEventListener("copy",b),document.addEventListener("promoted-copy",v);let C=(E,B)=>{let P=W=>ri(W.trim())?W.replace(",","."):W,T=E.split(`
`).map(W=>W.split("	").map(Z=>P(Z)).join("	")).join(`
`),I=pr.parse(T,{delimitersToGuess:[" ","	"]}).data,et=I.length===0?0:I[0].length,H=I.length>0?I.length:0,V=t[G].getRawColumns(),K=B.columns||V,L=()=>{let W=V.indexOf(K[0]),Z=W+H;return V.slice(W,Z)},$=K.length>=H?K:L(),U=$.length,j=B.rows?B.rows.start:0,{grid:N}=t[G],O=[];N.applyChanges(W=>{for(let Q=0,Y=0;Y<et&&Q<U;Q++,Y++){let lt=$[Q],{values:st}=lt[G];if(!lt.readonly)for(let ct=j,ot=0;ot<I.length;ct++,ot++){let bt=I[ot][Y]??"",Dt=s.textToValue(`${Ch(bt)}`),Et,re=lt.gridPosition;n?(Et=Dt.parseFailed?bt.length&&bt!=="NaN"?bt:s.emptyValue:Dt.value,st.setSingle(ct,Et,bt)):(Et=Dt.parseFailed?s.emptyValue:Dt.value,st.setSingle(ct,Et)),W.updateCell(ct,re),O.push({column:lt,rowIndex:ct,value:Et})}st.trimCollection()}$.filter(Q=>!Q.readonly).forEach(Q=>{Q[G].trimValues()});let Z=t.totalRows,J=Fe(t[G].getRawColumns());J>Z&&W.changeTotalRows(J),l()}),e.onUserInputChange(O)},y=()=>{let E=i();E&&o&&C(o,E)},w=E=>{if(gr())return;let B=i(),P=E.clipboardData.getData("text");P&&B&&C(P,B)},x=({detail:E})=>{let B=i();E&&B&&C(E,B)};document.addEventListener("paste",w),document.addEventListener("promoted-paste",x);let _=(E,B)=>{g(E,B),h(B),l()},S=E=>{if(gr())return;let B=i();B&&(_(E,B),!f()&&E&&E.preventDefault())},A=()=>{let E=i();E&&(v(),h(E),l())};document.addEventListener("cut",S),document.addEventListener("promoted-cut",A);let D,M=({clientX:E,clientY:B,cellEl:P,isTouch:T,onContextClose:I})=>{if(r&&(r.closeUI(),r=null,T))return;r={closeUI:()=>{I(),r.customCloseFn&&(r.customCloseFn(),r.clearClipboardHandle()),c()}};let et=!1,H,V=()=>{H.copy=H.cut=H.paste=H.delete=H.close=()=>{}},K=()=>{r&&r.clipboard===H&&r.closeUI(),V()},L=()=>{if(!f()){let O=document.getSelection(),W=document.createElement("textarea"),Z=p(i());W.value=Z,document.body.appendChild(W),setTimeout(()=>document.body.removeChild(W));let J=document.createRange();return J.selectNode(W),O.addRange(J),!O.isCollapsed}},$=()=>{let O=i(),W=p(O);a&&a.copy(W)},U=()=>{$();let O=i();h(O)},j=()=>{a&&a.paste(O=>{let W=i();O&&W&&C(O,W)})},N=()=>a!==null;H={get isTouch(){return T},copy:()=>{et||(et=!0,N()?($(),l()):v())},cut:()=>{if(!et)if(et=!0,N())U(),l();else{let O=i();O&&(v(),h(O))}},paste:O=>{et||(et=!0,N()?(j(),l()):(navigator.clipboard||{}).readText&&!((window.chrome||{}).app||{}).runtime?(async()=>{let W=await navigator.clipboard.readText(),Z=i();C(W,Z)})():document.execCommand("paste")||(o?y():O&&typeof O=="function"&&O()))},delete:()=>{et||(et=!0,D())},close:()=>{K()},onClose:O=>{r.customCloseFn=O}},r.clipboard=H,r.clearClipboardHandle=V,d(),e.onShowSelectContextMenu({cellEl:P,clientX:E,clientY:B,clipboard:H})};D=()=>{let E=i();E&&u(E),l()};let F=()=>!!r;return{get menuOpen(){return F()},toggleSelectContextMenu:M,executeDelete:D,closeContextMenu:l}};var Ih=200,Eh=200,kh=400,Ph=({dataSetGrid:i,getInteraction:t,getUiSelectionOccurring:e,uiExpandDataSetSelection:s,uiExpandRowSelection:n,uiExpandColumnSelection:a,uiExpandCellSelection:o})=>{let r=null,l=()=>{r&&(clearInterval(r.intervalHandle),r=null)};return{checkOverscroll:(d,h)=>{let u=i[G].grid.getRelativePosition(d,h),p=t(),g=e();if(u.isInside||!p||p.editingCell||!g){l();return}if(!r){let m=(y,w)=>{r={bounds:u};let x=()=>{y(t(),!r.moved),r&&(r.moved=!0)};r.intervalHandle=setInterval(x,w)},f=(y,w)=>{let x=y.endRowIndex,{grid:_}=i[G];if(w&&_.getRelativeRowInfo(x).outsideTop)_.scrollTo(null,x,!0);else if(x>0){let S=x-1;_.scrollTo(null,S,!0),y.rowsSelected?n(S):o(y.endCol,S)}else l()},b=(y,w)=>{let x=y.endRowIndex,{grid:_}=i[G];if(w&&_.getRelativeRowInfo(x).outsideBottom)_.scrollTo(null,x,!0);else if(x<i.totalRows-1){let S=x+1;_.scrollTo(null,S,!0),y.rowsSelected?n(S):o(y.endCol,S)}else l()},v=(y,w)=>{if(y.dataSetsSelected){let x=y.endDataSetIndex,{grid:_}=i[G],{dataSets:S}=i[G],A=()=>{if(x>0){let D=x-1,M=S.findByIndex(D),{columns:F}=M[G],E=F.findByIndex(0);_.scrollTo(E,null,!0),s(M)}else l()};if(w){let D=x,M=S.findByIndex(D),{columns:F}=M[G],E=F.findByIndex(0);_.getRelativeColumnInfo(E).outsideLeft?_.scrollTo(E,null,!0):A()}else A()}else{let x=y.endColIndex,{grid:_}=i[G],S=i[G].getRawColumns(),A=()=>{if(x>0){let D=x-1,M=S[D];_.scrollTo(M,null,!0),y.columnsSelected?a(M):o(M,y.endRowIndex)}else l()};if(w){let M=S[x];_.getRelativeColumnInfo(M).outsideLeft?_.scrollTo(M,null,!0):A()}else A()}},C=(y,w)=>{if(y.dataSetsSelected){let x=y.endDataSetIndex,{grid:_}=i[G],{dataSets:S}=i[G],A=()=>{if(x<S.length-1){let D=x+1,M=S.findByIndex(D),{columns:F}=M[G],E=F.findByIndex(F.length-1);_.scrollTo(E,null,!0),s(M)}else l()};if(w){let D=x,M=S.findByIndex(D),{columns:F}=M[G],E=F.findByIndex(F.length-1);_.getRelativeColumnInfo(E).outsideRight?_.scrollTo(E,null,!0):A()}else A()}else{let x=y.endColIndex,{grid:_}=i[G],S=i[G].getRawColumns(),A=()=>{if(x<S.length-1){let D=x+1,M=S[D];_.scrollTo(M,null,!0),y.columnsSelected?a(M):o(M,y.endRowIndex)}else l()};if(w){let M=S[x];_.getRelativeColumnInfo(M).outsideRight?_.scrollTo(M,null,!0):A()}else A()}};if(u.isTop&&!p.columnsSelected&&!p.dataSetsSelected)u.isLeft=u.isRight=!1,m(f,Ih);else if(u.isBottom&&!p.columnsSelected&&!p.dataSetsSelected)u.isLeft=u.isRight=!1,m(b,Ih);else if(u.isLeft&&!p.rowsSelected){u.isTop=u.isBottom=!1;let y=p.dataSetsSelected?kh:Eh;m(v,y)}else if(u.isRight&&!p.rowsSelected){u.isTop=u.isBottom=!1;let y=p.dataSetsSelected?kh:Eh;m(C,y)}return}(!u.isLeft&&r.bounds.isLeft||!u.isRight&&r.bounds.isRight||!u.isTop&&r.bounds.isTop||!u.isBottom&&r.bounds.isBottom)&&l()},clearOverscroll:l}};var Mh=({dataSetGrid:i,cellResolver:t,callbacks:e,gridTouchEvents:s,allowsAlphanumeric:n})=>{let a=null,o=null,r=!1,l=!1,c=()=>l,d=R=>{l=R},h=()=>s.interactionsDisabled,u=R=>{s.interactionsDisabled=R},p=()=>i[G].grid.scrollDisabled,g=R=>{i[G].grid.scrollDisabled=R},m=()=>h()&&p(),f=R=>{R?(u(!0),g(!0)):(u(!1),g(!1))},b=(R,z,X=void 0,it=void 0)=>R>z?X!==void 0?X:R:it!==void 0?it:z,v=(R,z,X=void 0,it=void 0)=>R<=z?X!==void 0?X:R:it!==void 0?it:z,C=null,y=(R,z)=>{let{grid:X}=i[G];X.applyChanges(it=>{for(let xt=R;xt<=z;xt++)for(let At=0;At<X.totalColumns;At++)it.updateCell(xt,At)})},w=(R,z)=>{let{grid:X}=i[G];X.applyChanges(it=>{let xt=it.renderedStartRowIndex,At=it.renderedLastRowIndex;for(let mt=xt;mt<=At;mt++)for(let Rt=R;Rt<=z;Rt++)it.updateCell(mt,Rt)})},x=(R,z)=>{let{dataSets:X}=i[G],it=X.findByIndex(R),xt=X.findByIndex(z),mt=it[G].columns.findByIndex(0).gridPosition,Rt=xt[G].columns,xs=Rt.findByIndex(Rt.length-1).gridPosition;w(mt,xs)},_=(R,z)=>{let{grid:X}=i[G];X.applyChanges(it=>{it.updateCell(z,R)})},S=(R,z,X,it)=>{let{grid:xt}=i[G];xt.applyChanges(At=>{for(let mt=X;mt<=it;mt++)for(let Rt=R;Rt<=z;Rt++)At.updateCell(mt,Rt)})},A=()=>!!a,D=(R,z)=>{if(a&&a.cellsSelected){let X=v(a.startColIndex,a.endColIndex),it=b(a.startColIndex,a.endColIndex),xt=v(a.startRowIndex,a.endRowIndex),At=b(a.startRowIndex,a.endRowIndex),mt=R.gridPosition;return mt>=X&&mt<=it&&z>=xt&&z<=At}return!1},M=R=>{if(a&&a.rowsSelected){let z=v(a.startRowIndex,a.endRowIndex),X=b(a.startRowIndex,a.endRowIndex);return R>=z&&R<=X}return!1},F=R=>{if(a&&a.columnsSelected){let z=v(a.startColIndex,a.endColIndex),X=b(a.startColIndex,a.endColIndex),it=R.gridPosition;return it>=z&&it<=X}return!1},E=R=>{if(a&&a.dataSetsSelected){let z=v(a.startDataSetIndex,a.endDataSetIndex),X=b(a.startDataSetIndex,a.endDataSetIndex),it=R.position;return it>=z&&it<=X}return!1},B=(R,z)=>a&&a.cellsSelected&&a.startCol===R&&a.endCol===R&&a.startRowIndex===z&&a.endRowIndex===z,P=R=>a&&a.rowsSelected&&a.startRowIndex===R&&a.endRowIndex===R,T=R=>a&&a.columnsSelected&&a.startCol===R&&a.endCol===R,I=R=>a&&a.dataSetsSelected&&a.startDataSet===R&&a.endDataSet===R,et=()=>a&&!a.editingCell,H=()=>{let R=tt({},a);return R.cellReselect&&(R.cellReselect=tt({},R.cellReselect)),R},V=()=>{C(),a={allSelected:!0,allRows:!0,allColumns:!0},y(0,i.totalRows-1)},K=R=>{C(),a={rowsSelected:!0,startRowIndex:R,endRowIndex:R},y(a.startRowIndex,a.endRowIndex)},L=R=>{if(a&&a.rowsSelected){let z=v(a.startRowIndex,a.endRowIndex),X=b(a.startRowIndex,a.endRowIndex);R<z?z=R:R>X&&(X=R),a.endRowIndex=R,y(z,X)}},$=(R,z)=>{let X=!1,it=!1,xt=!1,At=!1;if(a)if(a.allSelected)X=!0;else if(a.rowsSelected){let mt=v(a.startRowIndex,a.endRowIndex),Rt=b(a.startRowIndex,a.endRowIndex);X=z>=mt&&z<=Rt}else if(a.columnsSelected){let mt=R.gridPosition,Rt=v(a.startColIndex,a.endColIndex),xs=b(a.startColIndex,a.endColIndex);X=mt>=Rt&&mt<=xs}else if(a.dataSetsSelected){let mt=R.dataSet.position,Rt=v(a.startDataSetIndex,a.endDataSetIndex),xs=b(a.startDataSetIndex,a.endDataSetIndex);X=mt>=Rt&&mt<=xs}else if(a.cellsSelected){let mt=R.gridPosition,Rt=v(a.startColIndex,a.endColIndex),xs=b(a.startColIndex,a.endColIndex),qh=v(a.startRowIndex,a.endRowIndex),Yh=b(a.startRowIndex,a.endRowIndex);X=mt>=Rt&&mt<=xs&&z>=qh&&z<=Yh,it=mt===a.endColIndex&&z===a.endRowIndex}else a.editingCell&&(xt=it=R.gridPosition===a.colIndex&&z===a.rowIndex,At=xt&&a.deepEdit);return{isSelected:X,isFocused:it,isEditing:xt,isDeepEdit:At}},U=R=>{C();let z=R.position;a={dataSetsSelected:!0,startDataSetIndex:z,startDataSet:R,endDataSetIndex:z,endDataSet:R},x(z,z)},j=R=>{if(a&&a.dataSetsSelected){let z=R.position,X=v(a.startDataSetIndex,a.endDataSetIndex),it=b(a.startDataSetIndex,a.endDataSetIndex);z<X?X=z:z>it&&(it=z),a.endDataSet=R,a.endDataSetIndex=z,x(X,it)}},N=R=>{C();let z=R.gridPosition;a={columnsSelected:!0,startColIndex:z,startCol:R,endColIndex:z,endCol:R},w(z,z)},O=R=>{if(a)if(a.columnsSelected){let z=R.gridPosition,X=v(a.startColIndex,a.endColIndex),it=b(a.startColIndex,a.endColIndex);z<X?X=z:z>it&&(it=z),a.endCol=R,a.endColIndex=z,w(X,it)}else a.dataSetsSelected&&j(R.dataSet)},W=(R,z)=>{C();let X=R.gridPosition;a={cellsSelected:!0,startCol:R,startColIndex:X,endCol:R,endColIndex:X,startRowIndex:z,endRowIndex:z},S(X,X,z,z)},Z=(R,z)=>{if(a){if(a.rowsSelected)L(z);else if(a.columnsSelected)O(R);else if(a.dataSetsSelected)j(R.dataSet);else if(a.cellsSelected){let X=R.gridPosition,it=v(a.startColIndex,a.endColIndex),xt=b(a.startColIndex,a.endColIndex);X<it?it=X:X>xt&&(xt=X),a.endCol=R,a.endColIndex=X;let At=v(a.startRowIndex,a.endRowIndex),mt=b(a.startRowIndex,a.endRowIndex);z<At?At=z:z>mt&&(mt=z),a.endRowIndex=z,S(it,xt,At,mt)}}},J=(R,z)=>{if(C(),!R.readonly){let X=R.gridPosition;a={editingCell:!0,deepEdit:!0,colIndex:X,rowIndex:z};let{grid:it}=i[G];it.isDeepEditing=!0,it.scrollTo(R,z,!0),_(X,z)}},Q=(R,z,X=!1)=>{if(X||C(),!R.readonly){let it=R.gridPosition;a={editingCell:!0,deepEdit:!1,colIndex:it,rowIndex:z};let{grid:xt}=i[G];xt.scrollTo(R,z,!0),_(it,z)}},Y=R=>{let z=R.map(({column:X,rowIndex:it})=>({column:X,rowIndex:it,value:X[G].values.getSingle(it)}));e.onUserInputChange(z)},lt=(R,z)=>{let X=v(R,z),it=b(R,z);return i[G].getRawColumns().slice(X,it+1)},st=(R,z)=>{let X=v(R,z),it=b(R,z);return i.dataSets.slice(X,it+1)},ct=()=>{if(a&&!a.editingCell){let R={};if(a.rowsSelected||a.cellsSelected?R.rows={start:v(a.startRowIndex,a.endRowIndex),end:b(a.startRowIndex,a.endRowIndex)}:R.allRows=!0,a.columnsSelected||a.cellsSelected)R.columns=lt(a.startColIndex,a.endColIndex),R.dataSets=[];else if(a.dataSetsSelected){let z=st(a.startDataSetIndex,a.endDataSetIndex),xt=z[0][G].columns.findByIndex(0).gridPosition,mt=z[z.length-1][G].columns,Rt=mt.findByIndex(mt.length-1).gridPosition;R.dataSets=z,R.columns=lt(xt,Rt)}else R.allColumns=!0,R.allDataSets=!0;return R}return null};o=Sh({dataSetGrid:i,getSelection:ct,cellResolver:t,callbacks:e,allowsAlphanumeric:n});let ot=()=>{e.onUiSelection(ct())},at=()=>{V(),ot()},bt=R=>{K(R),r=!0,ot()},Dt=R=>{L(R),r=!0,ot()},Et=(R,z)=>{W(R,z),r=!0,ot()},re=(R,z)=>{Z(R,z),r=!0,ot()},$t=R=>{N(R),r=!0,ot()},ye=R=>{O(R),r=!0,ot()},ze=R=>{U(R),r=!0,ot()},It=R=>{j(R),r=!0,ot()},pe=()=>{r=!1},{checkOverscroll:Wt,clearOverscroll:ge}=Ph({dataSetGrid:i,getInteraction:()=>a,getUiSelectionOccurring:()=>r,uiStartColumnSelection:$t,uiExpandColumnSelection:ye,uiStartRowSelection:bt,uiExpandRowSelection:Dt,uiStartDataSetSelection:ze,uiExpandDataSetSelection:It,uiStartCellSelection:Et,uiExpandCellSelection:re}),jt=()=>a&&a.toggledTouchContextMenu,ai=({clientX:R,clientY:z,cellEl:X,isTouch:it})=>{a.toggledTouchContextMenu=!1;let xt=()=>{a&&it&&(a.toggledTouchContextMenu=!0)};o.toggleSelectContextMenu({cellEl:X,clientX:R,clientY:z,isTouch:it,onContextClose:xt})},zh=()=>{o.closeContextMenu()},Gh=()=>o.executeDelete(),Wh=(R,z,X)=>{a&&(a.cellReselect={cellEl:R,column:z,rowIndex:X},r=!0)},jh=()=>{if(a.cellReselect){let{column:R,rowIndex:z}=a.cellReselect;a.cellReselect=null,Et(R,z)}};C=()=>{if(a){if(a.allSelected)a=null,y(0,i.totalRows-1);else if(a.rowsSelected){let z=v(a.startRowIndex,a.endRowIndex),X=b(a.startRowIndex,a.endRowIndex);a=null,y(z,X)}else if(a.columnsSelected){let z=v(a.startColIndex,a.endColIndex),X=b(a.startColIndex,a.endColIndex);a=null,w(z,X)}else if(a.dataSetsSelected){let z=v(a.startDataSetIndex,a.endDataSetIndex),X=b(a.startDataSetIndex,a.endDataSetIndex);a=null,x(z,X)}else if(a.cellsSelected){let z=v(a.startColIndex,a.endColIndex),X=b(a.startColIndex,a.endColIndex),it=v(a.startRowIndex,a.endRowIndex),xt=b(a.startRowIndex,a.endRowIndex);a=null,w(z,X,it,xt)}else if(a.editingCell){let{colIndex:z}=a,{rowIndex:X}=a;a=null,_(z,X)}}o.closeContextMenu();let{grid:R}=i[G];R.isDeepEditing=!1,a=null};let Vh=(R,z=null)=>{if(!i.readonly){let{totalRows:X}=i,it=z!==null,xt=it?t.textToValue(z):null;if(R===X-1&&(!it||!t.isEmpty(xt.value)&&!xt.parseFailed)){let{grid:At}=i[G];At.applyChanges(mt=>{mt.changeTotalRows(X+1)})}}},Nh=(R,z,X)=>{let{grid:it}=i[G];it.scrollTo(R,z,!0),X?re(R,z):(C(),R.readonly?Et(R,z):Q(R,z))},Hh=()=>{if(a&&a.editingCell)_(a.colIndex,a.rowIndex);else if(a&&a.cellsSelected)_(a.endColIndex,a.endRowIndex);else{let{grid:R}=i[G];R.focus()}},Uh=()=>o.menuOpen;return{get hasInteractions(){return A()},get hasSelection(){return et()},get gridDisabled(){return m()},set gridDisabled(R){f(R)},get scrollDisabled(){return p()},set scrollDisabled(R){g(R)},get interactionsDisabled(){return h()},set interactionsDisabled(R){u(R)},get toggledTouchContextMenu(){return jt()},get selectContextMenuOpen(){return Uh()},get uiSelectionOccurring(){return r},get shiftSelected(){return c()},set shiftSelected(R){d(R)},get cellsSelected(){return!!a&&a.cellsSelected},get rowsSelected(){return!!a&&a.rowsSelected},get columnsSelected(){return!!a&&a.columnsSelected},get dataSetsSelected(){return!!a&&a.dataSetsSelected},get events(){return s},activeCellSelection:D,activeRowSelection:M,activeColumnSelection:F,activeDataSetSelection:E,singleCellSelected:B,singleColumnSelected:T,singleRowSelected:P,singleDataSetSelected:I,selectAll:V,startRowSelection:K,expandRowSelection:L,startCellSelection:W,expandCellSelection:Z,startColumnSelection:N,expandColumnSelection:O,startDataSetSelection:U,expandDataSetSelection:j,uiSelectAll:at,uiStartRowSelection:bt,uiExpandRowSelection:Dt,uiStartCellSelection:Et,uiExpandCellSelection:re,uiStartColumnSelection:$t,uiExpandColumnSelection:ye,uiStartDataSetSelection:ze,uiExpandDataSetSelection:It,uiEndSelection:pe,getCellState:$,editCell:Q,deepEditCell:J,focusCell:Nh,focus:Hh,clear:C,notifyUIChange:Y,getSelection:ct,toggleSelectContextMenu:ai,closeSelectContextMenu:zh,executeDelete:Gh,checkToExtend:Vh,checkOverscroll:Wt,clearOverscroll:ge,getInteractionInfo:H,uiSetCellReselect:Wh,uiClearCellReselect:jh}};var Th=({interactionContext:i,dataSetGrid:t})=>({getSelection:()=>i.getSelection(),select:({all:a=null,rowIndex:o=null,endRowIndex:r=null,column:l=null,endColumn:c=null,dataSet:d=null,endDataSet:h=null,scrollTo:u=!0}={})=>{let p=null,g=null;a?i.selectAll():d!==null||h!==null?(h===null?h=d:d===null&&(d=h),i.startDataSetSelection(d),i.expandDataSetSelection(h),p=d[G].columns.findByIndex(0)):(o!==null?r=r!==null?r:o:r!==null&&(o=r),l!==null?c=c!==null?c:l:c!==null&&(l=c),o!==null&&(g=o<r?o:r),l!==null&&(p=l.gridPosition<c.gridPosition?l:c),o!==null&&l!==null?(i.startCellSelection(l,o),i.expandCellSelection(c,r)):o!==null?(i.startRowSelection(o),i.expandRowSelection(r)):l!==null&&(i.startColumnSelection(l),i.expandColumnSelection(c))),(g!==null||p!==null)&&u&&t[G].grid.scrollTo(p,g)},scrollToRow:(a,o)=>{t[G].grid.scrollTo(null,a,o)}});var Ah=(i={})=>{let t=h=>String(h),e=h=>l("success",h),s=h=>h==null,n="",{valueToText:a=t,textToValue:o=e,isEmpty:r=s}=i,l=(h,u=void 0)=>(console.assert(h==="success"||h==="failure"||h==="alphanumeric"||h=="empty"),{value:u,parseFailed:h==="failure"||h==="alphanumeric",isEmpty:h==="empty",isAlphanumeric:h==="alphanumeric"});return{valueToText:(h,u,p)=>r(h)?n:a(h,u,p),textToValue:h=>o(h,l),isEmpty:r}};var jf=300,Vf=300,ss=!1,dt={},Os={},ni=(i,t)=>{let e,s=document,n=50;for(;s!==null&&n-- >0;)e=s.elementFromPoint(i,t),s=e?e.shadowRoot:null;return e},Rh=({dataSetGrid:i,onUiScroll:t,gridEl:e})=>{let s=g=>{dt.scrolled=!0;try{g&&t()}catch(m){console.error("error on vst-grid scroll")}},n=()=>{Os.timeoutHandle&&clearTimeout(Os.timeoutHandle),Os={}},a=(g,m)=>{let{type:f,element:b}=Os;return n(),f===g&&m===b?!0:(Os.type=g,Os.element=m,Os.timeoutHandle=setTimeout(()=>n(),Vf),!1)},o=(g,m)=>(f,b)=>{e.addEventListener(f,v=>{m(v)&&b(v)})},r=o("touch begin event",()=>!dt.mouse),l=o("mouse begin event",()=>!dt.touch),c=o("mouse event",()=>dt.mouse),d=o("touch event",()=>dt.touch),h=(g,m,f={})=>{if(!g)return;f.dataSetGrid=i;let b=new CustomEvent(m,{bubbles:!0,composed:!0,detail:f});g.dispatchEvent(b)};return l("mousedown",g=>{let{clientX:m,clientY:f}=g,b=g.buttons===2;dt={mouse:!0,startElement:ni(m,f),rightClick:b,clientX:m,clientY:f},h(dt.startElement,"grid-pre-click"),dt.rightClick?h(dt.startElement,"grid-pre-left-click"):h(dt.startElement,"grid-pre-right-click"),!ss&&(b?h(dt.startElement,"grid-mouse-context-menu",{clientX:m,clientY:f}):(dt.lastSelectedElement=dt.startElement,dt.inGridSelection=!0,h(dt.startElement,"grid-mouse-select-start",{clientX:m,clientY:f})))}),c("mousemove",g=>{if(ss||g.buttons===0||dt.rightClick)return;let{clientX:m,clientY:f}=g,b=ni(m,f);dt.inGridSelection&&h(b,"grid-mouse-select-move",{clientX:m,clientY:f}),dt.lastSelectedElement!==b&&(h(b,"grid-mouse-select-enter",{clientX:m,clientY:f}),dt.lastSelectedElement=b)}),c("mouseup",g=>{if(setTimeout(()=>dt={}),ss||dt.rightClick)return;let{clientX:m,clientY:f}=g;if(!a("mouse",dt.startElement))h(dt.startElement,"grid-mouse-select",{clientX:m,clientY:f});else{let v=ni(m,f);h(v,"grid-mouse-edit",{clientX:m,clientY:f})}}),r("touchstart",g=>{let{touches:m}=g,{clientX:f,clientY:b}=m[0]||{};dt={touch:!0,startElement:ni(f,b),clientX:f,clientY:b},m.length===1&&(ss||(dt.selectionStartHandle=setTimeout(()=>{dt.scrolled||(dt.inGridSelection=!0,h(dt.startElement,"grid-touch-select-start",{clientX:f,clientY:b}))},jf)))}),d("touchmove",g=>{if(ss)return;let{touches:m}=g;if(m.length!==1)return;let{clientX:f,clientY:b}=m[0];if(dt.clientX=f,dt.clientY=b,dt.inGridSelection){let v=ni(f,b);h(v,"grid-touch-select-move",{clientX:f,clientY:b}),dt.lastSelectedElement!==v&&(h(v,"grid-touch-select-enter",{clientX:f,clientY:b}),dt.lastSelectedElement=v,g.stopPropagation(),g.cancelable&&g.preventDefault())}}),d("touchend",g=>{if(setTimeout(()=>{dt={}}),h(dt.startElement,"grid-pre-touchend"),ss)return;let{clientX:m,clientY:f}=dt;if(dt.inGridSelection){let b=ni(m,f);h(b,"grid-touch-select",{clientX:m,clientY:f})}else if(!dt.scrolled){let b=dt.selectionStartHandle;clearTimeout(b);let v=a("touch",dt.startElement)?"grid-touch-edit":"grid-touch-tap";h(dt.startElement,v,{clientX:m,clientY:f})}g.stopPropagation(),g.cancelable&&g.preventDefault()}),{get interactionsDisabled(){return ss},set interactionsDisabled(g){ss=g},registerGridEvent:(g,m,f,...b)=>{let v=C=>{C.detail.dataSetGrid===i&&f(C)};g.addEventListener(m,v,...b)},registerSystemEvent:(g,m,f,...b)=>{let v=C=>{ss||f(C)};g.addEventListener(m,v,...b)},onScroll:s}};var fr=({gridEl:i,padding:t=.3125,borderSize:e=.0625,sidebarWidth:s=3.75,scrollerSize:n=.9375,itemHeight:a=2,itemWidth:o=6.25,allowsAlphanumeric:r=!1,cellResolver:l,minRows:c=10,onShowSelectContextMenu:d=()=>{},onUiSelection:h=()=>{},onUserInputChange:u=()=>{},onUiScroll:p=()=>{},renderDataSetContext:g=()=>{},renderColumnContext:m=()=>{}})=>{let f=Y=>f.getDataSet(Y);i.style.setProperty("--vst-grid-cell-width",`${o}rem`);let b={onShowSelectContextMenu:d,onUiSelection:h,onUserInputChange:u},v=Rh({dataSetGrid:f,onUiScroll:p,gridEl:i}),C=Ah(l),y=Mh({dataSetGrid:f,cellResolver:C,callbacks:b,gridTouchEvents:v,allowsAlphanumeric:r}),w=Th({interactionContext:y,dataSetGrid:f}),x=ch({interactionContext:y,dataSetGrid:f}),_=hh({interactionContext:y}),S=dh({interactionContext:y,dataSetGrid:f}),A=uh({interactionContext:y,renderDataSetContext:g,renderColumnContext:m}),{select:D,scrollToRow:M,getSelection:F}=w,B=lh({gridEl:i,padding:t,borderSize:e,sidebarWidth:s,scrollerSize:n,rowHeight:a,cellWidth:o,prepareHeaders:A,prepareGridCell:_,prepareRowSidebar:S,prepareGrid:x,minRows:c,onScroll:Y=>v.onScroll(Y)}),{addDataSet:P,getDataSet:T,getLength:I,getDataSets:et,getColumns:H,getColspan:V,getRawColumns:K,dataSets:L,getReadonly:$,clear:U,refreshHeaders:j}=yh({dataSetGrid:f,cellResolver:C,interactionContext:y}),{clear:N}=y,{clear:O}=B,W=()=>B.resize(),Z=()=>B.totalRows,J=()=>y.focus(),Q=()=>{M(0,!0),O(),U()};return ii(f,{get dataSetLength(){return I()},get totalRows(){return Z()},get colspan(){return V()},get selection(){return w},get columns(){return H()},get dataSets(){return et()},get readonly(){return $()},get disabled(){return y.gridDisabled},set disabled(Y){y.gridDisabled=Y},get scrollDisabled(){return y.scrollDisabled},set scrollDisabled(Y){y.scrollDisabled=Y},get interactionsDisabled(){return y.interactionsDisabled},set interactionsDisabled(Y){y.interactionsDisabled=Y},get topVisibleRowIndex(){return B.topVisibleRowIndex},get bottomVisibleRowIndex(){return B.bottomVisibleRowIndex},get leftVisibleColumn(){return B.leftVisibleColumn},get rightVisibleColumn(){return B.rightVisibleColumn},addDataSet:P,getDataSet:T,select:D,scrollToRow:M,getSelection:F,clearInterations:N,deepEditCell:y.deepEditCell,focus:J,clear:Q,resize:W,refreshHeaders:j,[G]:{dataSets:L,grid:B,minRows:c,getRawColumns:K}})};var mr=rt`
  /* CSS custom properties for theming */
  /* --vst-grid-border-color */
  /* --vst-grid-selected-background-color */
  /* --vst-grid-selected-border-color */
  /* --vst-grid-readonly-selected-background-color */
  /* --vst-grid-header-background-color */
  /* --vst-grid-header-font-family */
  /* --vst-grid-header-text-color */
  /* --vst-grid-body-background-color */
  /* --vst-grid-body-font-family */
  /* --vst-grid-body-text-color */
  /* CSS custom properties which are set by javascript when the grid is instiantiated. Overriding them is foolish. */
  /* --vst-grid-cell-width */
  /* must be duplicated in javascript TODO: Make these custom properties so we don't need the JS duplication. */
  :host {
    --vst-grid-row-height: 2rem;
    --vst-grid-border-size: 0.0625rem;
    --vst-grid-sidebar-width: 3.75rem;
    --vst-grid-scroller-size: 0.9375rem;
    --vst-grid-padding: 0.3125rem;
    --vst-grid-cell-width: 6.25rem;
    --vst-grid-colspan-test: 2;
    /* others */
    /* --vst-grid-border-color: #888; */
    /* --vst-grid-selected-background-color: #ccccff;
    --vst-grid-readonly-selected-background-color: #eeeeff; */
    --vst-grid-header-background-color: #bbb;
    --vst-grid-header-text-color: #000;
    --vst-grid-header-font-family: sans-serif;
    /* --vst-grid-body-background-color: var(--vst-color-bg); */
    --vst-grid-body-text-color: #000;
    --vst-grid-body-font-family: monospace;
    --vst-grid-total-height: 100%;
    --vst-grid-total-width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .grid_container {
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    display: flex;
    height: var(--vst-grid-total-height);
    width: var(--vst-grid-total-width);
    color: var(--vst-grid-body-text-color);
    font-size: var(--vst-font-size-xs);
    font-variant-numeric: tabular-nums;
    outline: none;
  }

  .grid_header {
    position: absolute;
    font-family: var(--vst-grid-header-font-family);
  }

  .grid_header_sidebar {
    position: absolute;
  }

  .grid_header_sidebar_block {
    border-style: solid;
    border-color: var(--vst-grid-border-color);
    border-width: var(--vst-grid-border-size) var(--vst-grid-border-size)
      var(--vst-grid-border-size) var(--vst-grid-border-size);
    background-color: var(--vst-grid-header-background-color);
    overflow: hidden;
  }

  .grid_header_viewport_container {
    overflow: hidden;
    position: absolute;
  }

  .grid_header_viewport {
    overflow-x: auto;
    overflow-y: hidden;
    position: absolute;
    border-style: solid;
    border-color: var(--vst-grid-border-color);
    border-width: 0 0 var(--vst-grid-border-size) 0;
    -webkit-overflow-scrolling: touch;
  }

  .grid_header_row {
    /* font-weight: bold; */
    display: flex;
    align-items: center;
  }

  .grid_header_row:nth-last-child(1) .grid_header_cell {
    border-width: var(--vst-grid-border-size) var(--vst-grid-border-size)
      var(--vst-grid-border-size) 0 !important;
  }

  .grid_header_cell {
    display: flex;
    align-items: center;
    border-width: var(--vst-grid-border-size) var(--vst-grid-border-size) 0 0;
    height: var(--vst-grid-row-height);
    border-style: solid;
    border-color: var(--vst-grid-border-color);
    padding: var(--vst-grid-padding);
    background-color: var(--vst-grid-header-background-color);
    color: var(--vst-grid-header-text-color);
    min-width: var(--vst-grid-cell-width, var(--vst-grid-cell-width));
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.35;
    font-size: var(--vst-font-size-xs);
  }

  .grid_header_cell.data_set_header {
    min-width: calc(
      var(--vst-grid-cell-width) * --vst-grid-colspan-test +
        ((var(--vst-grid-padding) * 2) + var(--vst-grid-border-size)) *
        (var(--vst-grid-colspan-test) - 1)
    );
  }

  .grid_body_viewport {
    height: 100%;
    max-width: 100%;
    overflow: auto;
    position: absolute;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
  }

  .grid_body_sidebar {
    min-width: var(--vst-grid-sidebar-width);
    position: absolute;
  }

  .grid_body_sidebar_cell {
    display: table-cell;
    width: var(--vst-grid-sidebar-width);
    min-width: var(--vst-grid-sidebar-width);
    max-width: var(--vst-grid-sidebar-width);
    height: var(--vst-grid-row-height);
    max-height: var(--vst-grid-row-height);
    border-style: solid;
    border-color: var(--vst-grid-border-color);
    border-width: 0 var(--vst-grid-border-size) var(--vst-grid-border-size)
      var(--vst-grid-border-size);
    color: var(--vst-grid-header-text-color);
    font-family: var(--vst-grid-header-font-family);
    font-size: var(--vst-font-size-xs);
    background-color: var(--vst-grid-header-background-color);
    padding: var(--vst-grid-padding);
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  .grid_dataset_header_cell_title,
  .grid_header_cell_title > span,
  .grid_body_sidebar_cell > span,
  .grid_body_cell > span {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  .grid_body_container {
    position: relative;
    overflow: hidden;
  }

  .grid_body {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    position: absolute;
    padding-bottom: 0.9375rem;
    font-family: var(--vst-grid-body-font-family);
  }

  .grid_body::-webkit-scrollbar {
    /* webkit/blink specific hack to hide the extra scrollbar. Will need to address firefox/ie if we go to browser */
    display: none;
  }

  .grid_body_cell {
    border-width: 0 var(--vst-grid-border-size) var(--vst-grid-border-size) 0;
    block-size: var(--vst-grid-row-height);
    display: table-cell;
    border-style: solid;
    border-color: var(--vst-grid-border-color);
    padding: var(--vst-space-2xs) var(--vst-space-xs);
    position: relative;
    background-color: var(--vst-grid-body-background-color);
    min-inline-size: var(--vst-grid-cell-width, var(--vst-grid-cell-width));
    max-inline-size: var(--vst-grid-cell-width, var(--vst-grid-cell-width));
    text-align: end;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    cursor: pointer;
  }

  .grid_body_cell:focus {
    --vst-outline: 0 0 0 0.125rem var(--vst-color-brand) inset;
  }

  .grid_body_cell > input {
    inline-size: 100%;
    text-align: end;
    font-size: var(--vst-font-size-xs);
    background: transparent;
    color: var(--vst-color-fg-primary);
  }

  .grid_text {
    --padding: var(--vst-space-2xs) var(--vst-space-xs);
    max-inline-size: calc(var(--vst-grid-cell-width, var(--vst-grid-cell-width)) - 1px);
    --border: 0;
    --border-radius: 0;
    margin: 0;
    block-size: var(--vst-grid-row-height);
  }

  .grid_text.deepedit {
    font-weight: 600;
    --border: 2px solid var(--vst-color-brand);
    --font-size: var(--vst-font-size-xs);
  }

  .grid_body_cell.selected,
  .grid_body_cell.readonly.selected {
    background-color: var(--vst-grid-selected-background-color);
  }

  .grid_body_cell.shows_text {
    padding: 0;
  }

  /* styling for cells that have been struck-through */
  .grid_body_cell_strikethrough:after {
    content: '';
    border-top: 1px solid var(--vst-color-fg-tertiary);
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
`;var Dh=rt`
  :host {
    --vst-grid-border-size: 1px;
    --vst-grid-header-background-color: var(--vst-color-bg-secondary);
    --vst-grid-header-font-family: var(--vst-font-family);
    --vst-grid-header-text-color: var(--vst-color-fg-primary);
    --vst-grid-body-font-family: var(--vst-font-family);
    --vst-grid-body-text-color: var(--vst-color-fg-primary);
    background: var(--vst-color-bg-secondary);
    overflow: hidden;
    position: relative;
    height: 100%;
    /*  vst-grid variables */
  }

  :host([disabled]) {
    display: none;
  }

  /*  Overrides specific to how the table sits in our app. */
  .grid_header_sidebar_block {
    border-width: 0 var(--vst-grid-border-size) var(--vst-grid-border-size)
      var(--vst-grid-border-size);
  }

  .grid_header_viewport {
    border-width: 0;
  }

  .grid-column-header.grid_header_cell_title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
  }

  .grid_header_cell_name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .grid_header_cell_name::after {
    /* Add a nbsp after the name part */
    content: '\\a0';
  }

  .grid-header-units {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /*  elements added dynamically to the table */
  .grid_header_cell {
    border-width: 0 var(--vst-grid-border-size) 0 0;
    padding: 0;
  }

  .grid_header_cell_title,
  .grid_dataset_header_cell_title {
    flex: 1;
    margin: 0 0.1875rem;
    max-block-size: 2rem;
  }

  .grid_dataset_header_cell_title {
    font-weight: bold;
  }

  ${tl(rt`.grid_header_cell_btn`)}
  .grid_header_cell_btn {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 1.75rem;
    height: 2rem;
    margin-inline-start: -0.3125rem;
    background: transparent;
    padding: 0;
    border: 0;
  }
  .grid_header_cell_btn:hover {
    opacity: 1;
  }

  .grid_header_cell_btn_icon {
    width: 1.125rem;
    height: 1.125rem;
    --vst-ui-icon-color: var(--vst-color-fg-tertiary);
  }

  vst-ui-dialog {
    --dialog-padding: var(--vst-space-l);
  }
`;var $h=({id:i,name:t,units:e,readonly:s=!1,format:n,isRowStruck:a,values:o})=>({id:i,context:{id:i,name:t,units:e,format:n,isRowStruck:a},readonly:s,values:o}),Lh=class extends Ce(ht){static get properties(){return{_isCategoricalConfirmationDialogOpen:{state:!0},disabled:{type:Boolean,reflect:!0},scrollDisabled:{type:Boolean,reflect:!0},interactionsDisabled:{type:Boolean,reflect:!0},cellWidth:{type:Number,reflect:!0},examinePinIndex:{type:Number},dataSets:{type:Array,reflect:!0},hidden:{type:Boolean},showColumnOptions:{type:Boolean},columnOptionSettings:{type:Object},alphanumeric:{type:Boolean},extractSelectedWavelength:{type:Boolean}}}constructor(){super();this.$dataWorld=null,this._isCategoricalConfirmationDialogOpen=!1,this._cachedUserChanges=null,this._userInputChangeResults=null,this.disabled=!1,this.scrollDisabled=!1,this.interactionsDisabled=!1,this.cellWidth=6.25,this.dataSets=[{}],this.columnOptionSettings={},this.alphanumeric=!1,this.extractSelectedWavelength=!1,this._suppressUpdates=!1,this._cachedColumnIds=new Set}updated(t){t.forEach((e,s)=>{s==="disabled"?this._disabledChanged(this.disabled):s==="scrollDisabled"?this._scrollDisabledChanged(this.scrollDisabled):s==="interactionsDisabled"?this._interactionsDisabledChanged(this.interactionsDisabled):s==="examinePinIndex"?this.selectRow(this.examinePinIndex):s==="hidden"&&(this.hidden||requestAnimationFrame(()=>{this.resizeGrid(),this.refreshHeaders()}))})}async firstUpdated(){[this.$dataWorld,this.$popoverManager,this.$sensorWorld,this.$toast]=this.requestServices(["dataWorld","popoverManager","sensorWorld","toast"]),this.newDataSets={},this.eventBinder=new le,this.eventBinder.bindListeners({source:this.$dataWorld,target:this,eventMap:{"data-set-added":"onDataWorldDataSetAdded","column-added":"onDataWorldColumnAdded","dataset-name-changed":"onDataWorldDataSetNameChanged","column-removed":"onDataWorldColumnRemoved","column-format-string-changed":"onDataWorldColumnFormatStringChanged","column-group-updated":"onDataWorldColumnGroupUpdated","column-strikethrough-changed":"onDataWorldColumnStrikethroughChanged","column-values-changed":"onDataWorldColumnValuesChanged","collection-triggered":"onDataWorldCollectionTriggered","collection-stopped":"onDataWorldCollectionStopped","session-ended":"onDataWorldSessionEnded","rpc-time-warning":"_onRPCTimeWarning"}});let t=this.shadowRoot.querySelector("#placeholder"),e=(s,n)=>{s.addEventListener("click",()=>{setTimeout(n)}),s.addEventListener("touchstart",()=>{setTimeout(n)}),["grid-mouse-select-start","grid-touch-select-start","grid-touch-select"].forEach(o=>{this.eventBinder.bind(s,o,r=>r.stopPropagation())})};this.grid=fr({gridEl:t,padding:.3125,borderSize:.0625,sidebarWidth:3.75,scrollerSize:.9375,itemHeight:2,itemWidth:this.cellWidth,allowsAlphanumeric:this.alphanumeric,cellResolver:{textToValue:(s,n)=>{let a=s.trim();if(a.length>0){let o=Number(br(a));return ri(a)?n("success",o):this.alphanumeric?n("alphanumeric",a):n("failure")}return n("empty")},valueToText:(s,n,a)=>a||!n.context.format?String(s):n.context.format(s),isEmpty:Zr.isValueEmpty},onUserInputChange:async s=>{let{$dataWorld:n}=this,a=!1,o=s.reduce((r,l)=>{let{column:{id:c},rowIndex:d,value:h}=l,u=r[c],p=n.getColumnById(c);p.dataType==="numeric"&&h!==void 0&&!ri(h)&&(a=!0),u||(u=r[c]={id:c,column:p,values:[...p.values],changedRows:[]});let{values:g,changedRows:m}=u;return g[d]=h,m.push(d),r},{});a?(await import("./vst-ui-categorical-confirmation-VAPLOCY2.js"),this._isCategoricalConfirmationDialogOpen=!0,this._userInputChangeResults=o,this._cachedUserChanges=s):this._updateDataWorldColumns(o)},onUiSelection:s=>{s.allColumns&&!s.allRows&&s.rows.start===s.rows.end&&this.dispatchEvent(new CustomEvent("row-clicked",{detail:{rowIndex:s.rows.start}}))},onUiScroll:()=>{this.autoScrollOnCollection=!1},onShowSelectContextMenu:async({clipboard:s,cellEl:n})=>{let{$dataWorld:a,$popoverManager:o}=this,{deletable:r,pasteable:l}=s,c=this.grid.getSelection();function d(){return c.allColumns&&c.allDataSets?a.getDataSets().map(f=>f.id):[c.columns[0].dataSet.id]}function h({allRows:f}={}){if(c.allRows||f){let b=d().reduce((v,C)=>Math.max(v,...a.getColumnsForSet(C)?.map(y=>y.values.length)),0);return{start:0,count:b}}return{start:c.rows.start,count:c.rows.end-c.rows.start+1}}let u=a.dataSets.filter(f=>f.type===Aa.FFT||f.type===Aa.HISTOGRAM).length>0,p=!u&&!["IA","SA"].includes("GA"),g=!u&&d().some(f=>a.checkHasStruckRowsForDataSet(f)),m;s.onClose(()=>{m()}),await import("./vst-core-clipboard-DUFKYTZY.js"),o.presentPopover("vst-core-clipboard",{anchor:n,orientation:"top",properties:{deletable:r,pasteable:l,showStrikethrough:p,showRestoreAll:g,onCut:()=>{s.cut()},onCopy:()=>{s.copy()},onPaste:()=>{s.paste(()=>{this.$toast=this.requestService("toast"),this.$toast.makeToast(k("Paste action is unavailable using the edit menu. Use CTRL-V or CMD-V to paste."),{duration:5e3})})},onStrikethrough:async()=>{let{start:f,count:b}=h();await Promise.all(d().map(v=>this.$dataWorld.strikeRows(v,f,b,!0))),m()},onRestoreAll:async()=>{let{start:f,count:b}=h({allRows:!0});await Promise.all(d().map(v=>this.$dataWorld.unstrikeRows(v,f,b))),m()}},preventCancel:!0,outsideTapEvents:{touchend:"grid-pre-touchend",click:"grid-pre-click"},events:f=>{m=f.completeWorkflow}}).then(f=>{f&&f.cancelled&&setTimeout(()=>{s.close()})})},renderDataSetContext:({headerCellEl:s,dataSet:n})=>{let a=document.createElement("span");a.classList.add("grid_dataset_header_cell_title");let o=document.createElement("button");o.classList.add("grid_header_cell_btn"),o.id=`grid_header_dataset_cell_btn_${n.id}`;let r=document.createElement("vst-ui-icon");r.classList.add("grid_header_cell_btn_icon"),r.icon=ka,import("./vst-ui-tooltip-CRZHHIPK.js");let l=document.createElement("vst-ui-tooltip");return l.content=k("Data Set Options"),l.for=`#grid_header_dataset_cell_btn_${n.id}`,l.placement="bottom",o.appendChild(r),s.appendChild(a),s.appendChild(o),this.shadowRoot.appendChild(l),e(o,()=>{let{$dataWorld:c,$popoverManager:d}=this,{name:h}=c.getDataSetByID(n.id),u=async()=>{await import("./vst-core-rename-HNBIUZL5.js"),d.presentDialog("vst-core-rename",{title:k("Rename Data Set","general","Dialog title"),properties:{name:h,nameDescription:k("Data Set Name"),nameMaxLength:100,nameMaxLengthError:Vt(k("Data set name has %s character limit."),String(100))},events:({component:g,completeWorkflow:m,cancelWorkflow:f})=>({save:()=>{c.updateDataSet(n.id,{name:g.name}),m()},cancel:()=>{f()}})})},p=()=>c.createNewDataSet();d.presentPopoverList({anchor:o,orientation:"bottom",items:[{id:"rename_data_set",title:k("Rename Data Set","general","Column options popover item"),selectAction:u},{id:"add_new_data_set",title:k("Add New Data Set"),include:c.sessionType==="ManualEntry",selectAction:p},{id:"delete_data_set",title:k("Delete Data Set","general","Column options popover item"),selectAction:gn.bind(this,c,{id:n.id,name:h}),disabled:c.sessionType==="DataShare"}]})}),c=>{a.innerText=c.name}},renderColumnContext:({headerCellEl:s,column:n})=>{let a=document.createElement("div");a.classList.add("grid_header_cell_title","grid-column-header");let o=document.createElement("span");o.classList.add("grid_header_cell_name");let r=document.createElement("span");r.classList.add("grid-header-units");let l=document.createElement("button");l.id=`grid_header_column_cell_btn_${n.id}`,l.classList.add("grid_header_cell_btn");let c=document.createElement("vst-ui-icon");c.classList.add("grid_header_cell_btn_icon"),c.icon=ka;let d=document.createElement("vst-ui-tooltip");d.content=k("Column Options"),d.for=`#grid_header_column_cell_btn_${n.id}`,d.placement="bottom",l.appendChild(c),s.appendChild(a),a.appendChild(o),a.appendChild(r),s.appendChild(l),this.shadowRoot.appendChild(d),e(l,()=>{let{$dataWorld:u,$popoverManager:p}=this,{group:g}=u.getColumnById(n.id),m=g.id,f=()=>{let C={sourceGroupId:m,sourceColumnId:n.id,columnAction:"edit",title:k("Column Options"),onColumnTraceUpdated:async(y,w,x)=>{await this.$dataWorld.updateColumnAppearance(y,w,x)}};this.dispatchEvent(new CustomEvent("open-dialog",{bubble:!0,composed:!0,detail:{dialog:"column_options",params:{columnOptionSettings:C}}})),this.requestUpdate()},b=()=>{let C={sourceGroupId:m,sourceColumnId:n.id,columnAction:"add",columnType:"manual",title:k("Add Manual Column")};this.dispatchEvent(new CustomEvent("open-dialog",{bubble:!0,composed:!0,detail:{dialog:"column_options",params:{columnOptionSettings:C}}})),this.requestUpdate()},v=()=>{let C={sourceGroupId:m,sourceColumnId:n.id,columnAction:"add",columnType:"calc",title:k("Add Calculated Column"),onCalcColumnCreated:y=>this.dispatchEvent(new CustomEvent("calc-column-created",{composed:!0,bubbles:!0,detail:y}))};this.dispatchEvent(new CustomEvent("open-dialog",{bubble:!0,composed:!0,detail:{dialog:"column_options",params:{columnOptionSettings:C}}})),this.requestUpdate()};p.presentPopoverList({anchor:l,orientation:"bottom",items:[{id:"column_options",title:k("Column Options"),selectAction:f},{id:"add_manual_column",title:k("Add Manual Column"),selectAction:b},{id:"add_calc_column",title:k("Add Calculated Column"),selectAction:v},{id:"delete_column",title:k("Delete Column"),include:g.deletable,selectAction:pn.bind(this,u,g)}]})});let h=u=>{let p=u.name.match(/@ \d{3} nm$/);return p?{name:u.name.slice(0,p.index).trim(),selectedWavelength:` ${p[0]}`}:u};return u=>{let{units:p}=u,{name:g,selectedWavelength:m=""}=this.extractSelectedWavelength?h(u):u;o.textContent=g,p?r.textContent=`${m} (${p})`:m?r.textContent=`${m}`:r.textContent=""}}}),this.grid.disabled=this.disabled,this.grid.scrollDisabled=this.scrollDisabled,this.grid.interactionsDisabled=this.interactionsDisabled,await this.updateComplete,this.resizeGrid()}_updateDataWorldColumns(t){Object.values(t).forEach(({id:e,values:s,changedRows:n})=>{this.$dataWorld.updateColumnValues(e,s,n,!0)}),this._cachedUserChanges=null,this._userInputChangeResults=null}_updateCellFocus(){this.shadowRoot.querySelector(".selected")?.focus()}_resetCellFocus(t){let{column:e,rowIndex:s}=t[0];this.grid.deepEditCell(e,s),this.shadowRoot.querySelector(".deepedit").value="",this._cachedUserChanges=null,this._userInputChangeResults=null}onDataWorldDataSetAdded(t){this.newDataSets[t.id]=!0}onDataWorldColumnAdded(t){if(t.special)return;if(this._noUpdates){this._cachedColumnIds.add(t.id);return}let{$dataWorld:e}=this,{collecting:s,autoScrollOnCollection:n}=this;!this.newDataSets[t.setId]&&!this.hasDataSet(t.setId)&&(this.newDataSets[t.setId]=!0);let a=r=>this.alphanumeric&&typeof r=="string"?String(r):t.group.getFormattedValue(r),o=s&&n;if(this.newDataSets[t.setId]){let r=e.getDataSetByID(t.setId),c=e.getColumnsForSet(t.setId).map(d=>({id:d.id,name:d.group.name,units:d.group.units,values:d.values,readonly:!d.editable,isRowStruck:d.isRowStruck.bind(d),format:a}));this.addDataSet({id:r.id,name:r.name,columns:c,scrollToRow:o}),delete this.newDataSets[t.setId]}else{let l=e.getOrderedColumnsForSet(t.setId).findIndex(c=>c.id===t.id);this.addColumn({id:t.id,name:t.group.name,units:t.group.units,position:l,values:t.values,readonly:!t.editable,isRowStruck:t.isRowStruck.bind(t),format:a,dataSetId:t.setId,scrollToRow:o})}}onDataWorldDataSetNameChanged(t){t.type==="regular"&&this.updateDataSetName({id:t.id,name:t.name})}onDataWorldColumnRemoved(t){if(t.special)return;let{_cachedColumnIds:e}=this;e.has(t.id)&&(e.delete(t.id),this._noUpdates)||this.removeColumn({id:t.id,dataSetId:t.setId})}onDataWorldColumnFormatStringChanged(t){if(t.special||this._noUpdates)return;let e=s=>this.alphanumeric&&typeof s=="string"?String(s):t.group.getFormattedValue(s);this.updateColumnFormatter({id:t.id,dataSetId:t.setId,format:e})}onDataWorldColumnGroupUpdated(t){this._noUpdates||t.columns.forEach(e=>this.updateColumnName({id:e.id,dataSetId:e.setId,name:e.group.name,units:e.group.units}))}onDataWorldColumnValuesChanged(t,e){if(t.special)return;if(this._noUpdates){this._cachedColumnIds.add(t.id);return}let s=this.$dataWorld.getColumnById(t.id);this.updateColumnValues({id:t.id,dataSetId:t.setId,values:e,scrollToRow:this.collecting&&this.autoScrollOnCollection}),s.group.checkAutomaticPrecision()}onDataWorldCollectionTriggered(){this.collecting=!0,this.autoScrollOnCollection=!0,this.interactionsDisabled=!0}onDataWorldCollectionStopped(){this.collecting=!1,this.interactionsDisabled=!1,this._uncacheUpdates()}onDataWorldColumnStrikethroughChanged(t){let{grid:e}=this;e(t.dataSet.id)(t.id).refresh()}onDataWorldSessionEnded(){this.clearGrid(),this._suppressUpdates=!1,this._cachedColumnIds.clear()}get _noUpdates(){return this.collecting&&this._suppressUpdates}_onRPCTimeWarning(t){let{duration:e,rpcId:s}=t,n=100;!this._suppressUpdates&&e>=n&&(s==="dw:data-column-added"||s==="dw:data-group-properties-changed")&&(console.warn(`RPC method ${s} took ${e} ms. Table will suppress updates during data collection.`),this._suppressUpdates=!0)}_uncacheUpdates(){let{_cachedColumnIds:t}=this,{$dataWorld:e}=this,[s]=t,n=e.getColumnById(s);try{n&&this.onDataWorldColumnAdded(n)}catch(a){console.warn(a)}t.clear()}addDataSet({id:t,name:e,columns:s,scrollToRow:n=!0}){let{grid:a,autoScrollDisabled:o}=this;if(s.length===0)throw Error("need at least on column with dataset");let r=s.map($h);n&&!o&&a.scrollToRow(0,!0),a.addDataSet({id:t,context:{name:e},columns:r}).scrollTo(),this._disableMoreBtns()}hasDataSet(t){let{grid:e}=this;return!!e.getDataSet(t)}addColumn(t){let{grid:e,autoScrollDisabled:s}=this,{dataSetId:n,scrollToRow:a=!0,position:o}=t,r=e(n),l=$h(t);a&&!s&&e.scrollToRow(0,!0),o>=r.colspan?r.appendColumns([l])[0].scrollTo():r.insertColumns(o,[l])[0].scrollTo(),this._disableMoreBtns()}scrollToColumn(t){let e=this.$dataWorld.getColumnById(t);this.grid(e.dataSet.id).getColumnById(t).scrollTo()}calcColumnCreated(t){this.dispatchEvent(new CustomEvent("calc-column-created",{detail:t}))}updateColumnName({id:t,dataSetId:e,name:s,units:n}){let{grid:a}=this,o=a(e);if(o){let r=o(t),{context:l}=r;l.name=s,l.units=n,r.context=l}}updateDataSetName({id:t,name:e}){let{grid:s}=this,n=s(t),{context:a}=n;a.name=e,n.context=a}updateColumnFormatter({id:t,dataSetId:e,format:s}){let{grid:n}=this,a=n(e)(t),{context:o}=a;o.format=s,a.refresh()}updateColumnValues({id:t,dataSetId:e,values:s,scrollToRow:n=!0}){let{grid:a,disableAutoScroll:o}=this;if(a(e)(t).setValues(s),!o&&n){let r=s.length>0?s.length-1:0;a.scrollToRow(r,!0)}}refreshHeaders(){let{grid:t}=this;t.refreshHeaders()}removeColumn({id:t,dataSetId:e}){let{grid:s}=this,n=s(e),a=n(t);n.colspan>1?a.remove():n.remove()}clearGrid(){let{grid:t}=this;t.clear()}resizeGrid(){let{grid:t}=this;t.resize()}selectRow(t){let{grid:e}=this;e&&t!==void 0&&e.select({rowIndex:t})}clearInterations(){let{grid:t}=this;t.clearInterations()}_disabledChanged(t){let{grid:e}=this;e&&(e.disabled=t)}_scrollDisabledChanged(t){let{grid:e}=this;e&&(e.scrollDisabled=t)}_interactionsDisabledChanged(t){let{grid:e}=this;e&&(e.interactionsDisabled=t),this._disableMoreBtns()}_disableMoreBtns(){Array.from(this.shadowRoot.querySelectorAll(".grid_header_cell_btn")).forEach(e=>{e.disabled=this.interactionsDisabled})}gridTapped(){this.$dataWorld.sessionType==="DataCollection"&&this.$dataWorld.isSessionEmpty&&this.$sensorWorld.sensors.length===0&&!hi()&&(this.$dataWorld.resetSession("ManualEntry"),this.$toast.makeToast(k("Mode changed to Manual Entry."),{duration:5e3})),this.$popoverManager.closeAll(),this.autoScrollOnCollection=!0}static get styles(){return[ut,mr,Dh]}renderDialogs(){return q` <vst-ui-dialog
      @dialog-close="${()=>{this._isCategoricalConfirmationDialogOpen=!1}}"
      id="categorical-confirmation"
      ?open="${this._isCategoricalConfirmationDialogOpen}"
    >
      <h2 slot="header">${k("Entering Categorical Mode")}</h2>
      <vst-ui-categorical-confirmation
        @categorical-canceled="${()=>{this._resetCellFocus(this._cachedUserChanges),this._isCategoricalConfirmationDialogOpen=!1}}"
        @categorical-confirmed="${()=>{this._updateDataWorldColumns(this._userInputChangeResults),this._updateCellFocus(),this._isCategoricalConfirmationDialogOpen=!1}}"
        slot="content"
      ></vst-ui-categorical-confirmation>
    </vst-ui-dialog>`}render(){return q`
      <div
        class="grid_container"
        tabindex="-1"
        id="placeholder"
        @click="${this.gridTapped}"
        @touchstart="${this.gridTapped}"
        @keydown="${t=>t.keycode===13?this.gridTapped:""}"
      >
        <div class="grid_header">
          <div class="grid_header_sidebar">
            <div class="grid_header_sidebar_block">&nbsp;</div>
          </div>
          <div class="grid_header_viewport_container">
            <div class="grid_header_viewport"></div>
          </div>
        </div>
        <div class="grid_body_viewport">
          <div class="grid_body_sidebar"></div>
          <div class="grid_body_container">
            <div class="grid_body"></div>
          </div>
        </div>
      </div>

      ${this.renderDialogs()}
    `}};customElements.define("vst-core-table",Lh);var Nf=[k("1 Graph"),k("2 Graph"),k("3 Graph")],Bh=class extends ht{static get properties(){return{graphCount:{type:Number}}}constructor(){super();this.graphCount=1}static get styles(){return[ut,rt`
        :host {
          --min: fit-content;
        }
        vst-ui-accordion {
          padding: 4px;
          border: 1px solid var(--vst-color-bg-secondary);
          border-radius: var(--vst-radius);
          background: var(--vst-color-bg);
          inline-size: 100%;
        }

        .heading[size='s'] {
          font-weight: 500;
        }

        ul {
          margin: 0;
        }

        li {
          inline-size: 100%;
        }

        vst-core-graph-options {
          margin: 0;
          padding: 0 var(--vst-space-m) var(--vst-space-m) 0;
        }
      `]}_handleGraphDisplayChange(t){this.dispatchEvent(new CustomEvent("graph-display-changed",{bubbles:!0,composed:!0,detail:parseInt(t.target.value)}))}render(){return q`
      <div class="stack">
        <vst-ui-accordion open>
          <h3 class="heading" size="s" slot="label">${k("Graph Options")}</h3>
          <div class="stack" gap="xs" slot="content" inset="0">
            <label class="label inline" style="--align: center" gap="xs" inset="0">
              <div>
                <span>${k("Graph Display")}</span>
                <select id="graph_display" @change="${this._handleGraphDisplayChange}">
                  ${Nf.map((t,e)=>q` <option
                        ?selected=${this.graphCount===e+1}
                        .value=${(e+1).toString()}
                      >
                        ${t}
                      </option>`)}
                </select>
              </div>
            </label>
          </div>
        </vst-ui-accordion>
        <vst-ui-accordion hidden>
          <h3 class="heading" size="s" slot="label">${k("Other Options")}</h3>
          <ul class="stack" inset="s" gap="s" slot="content">
            <li>
              <vst-ui-switch
                id="graph_legend"
                label="${k("Graph Legend")}"
                label-placement="left"
                size="s"
              ></vst-ui-switch>
            </li>
            <li>
              <vst-ui-switch
                id="mini_graph"
                label="${k("Graph Inset")}"
                label-placement="left"
                size="s"
              ></vst-ui-switch>
            </li>
            <li>
              <vst-ui-switch
                id="interpolate"
                label="${k("Interpolate")}"
                label-placement="left"
                size="s"
              ></vst-ui-switch>
            </li>
            <li>
              <vst-ui-switch
                id="tangent"
                label="${k("Tangent")}"
                label-placement="left"
                size="s"
              ></vst-ui-switch>
            </li>
          </ul>
        </vst-ui-accordion>
      </div>
    `}};customElements.define("vst-ui-graph-block-settings",Bh);var Oh=class extends ht{static get properties(){return{enabledSensorsIds:{type:Array},meterSize:{type:String},sensors:{type:Array}}}static get styles(){return[ut,rt`
        vst-ui-accordion {
          padding: 4px;
          border: 1px solid var(--vst-color-bg-secondary);
          border-radius: var(--vst-radius);
          background: var(--vst-color-bg);
          inline-size: 100%;
        }

        .heading[size='s'] {
          font-weight: 500;
        }

        .stack {
          margin: 0;
        }

        .stack > div {
          inline-size: 100%;
        }

        .radio-block {
          display: flex;
          align-items: center;
        }
      `]}constructor(){super();this.enabledSensorIds=null,this.meterSize="",this.sensors=null}_handleMeterSizeChange(t){let{target:{value:e}}=t,s=new CustomEvent("meter-size-changed",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(s)}_handleEnabledSensorsChange(){let t=Array.from(this.shadowRoot.querySelectorAll("input[name=sensors-enabled]:checked")).map(s=>s.value),e=new CustomEvent("enabled-sensors-changed",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)}render(){return q`
      <vst-ui-accordion open>
        <h3 class="heading" size="s" slot="label">${k("Meter View Options")}</h3>
        <form class="stack" id="container" inset="m" gap="s" slot="content">
          <fieldset class="inline" inset="0">
            <div>
              <legend class="label" margin="block-end-xs">${k("Meter Size")}</legend>
              <div class="radio-block">
                <input
                  type="radio"
                  id="meter-large"
                  name="meter-size"
                  ?checked=${this.meterSize==="large"}
                  value="large"
                  @input=${this._handleMeterSizeChange}
                />
                <label for="meter-large" class="caption">${k("Large")}</label>
              </div>
              <div class="radio-block">
                <input
                  type="radio"
                  id="meter-medium"
                  name="meter-size"
                  ?checked=${this.meterSize==="medium"}
                  value="medium"
                  @input=${this._handleMeterSizeChange}
                />
                <label for="meter-medium" class="caption">${k("Medium")}</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="label" margin="block-end-xs">${k("Display Meters")}</legend>
            <div class="stack" gap="xs" inset="0">
              ${this.sensors?.length?this.sensors.map(t=>q`
                      <label class="inline" inset="xs" gap="0">
                        <div>
                          <div class="checkbox">
                            <input
                              type="checkbox"
                              name="sensors-enabled"
                              value=${t.sensorId}
                              ?checked=${this.enabledSensorIds?.includes(t.sensorId)}
                              @input=${this._handleEnabledSensorsChange}
                            />
                            <span class="check"></span>
                          </div>
                          <span class="caption">${t.name}</span>
                        </div>
                      </label>
                    `):q`<i>${k("No Sensors Connected")}</i>`}
            </div>
          </fieldset>
        </form>
      </vst-ui-accordion>
    `}};customElements.define("vst-ui-meter-block-settings",Oh);var Fh=class extends ht{static get properties(){return{title:{type:String},dataSets:{type:Array},columns:{type:Array}}}constructor(){super();this.title="",this.dataSets=[],this.columns=[]}static get styles(){return[ut,rt`
        vst-ui-accordion {
          padding: 4px;
          border: 1px solid var(--vst-color-bg-secondary);
          border-radius: var(--vst-radius);
          background: var(--vst-color-bg);
          inline-size: 100%;
        }

        .heading[size='s'] {
          font-weight: 500;
          margin-inline-end: 8px;
        }

        ul {
          margin: 0;
        }

        li {
          inline-size: 100%;
        }

        vst-core-graph-options {
          margin: 0;
          padding: var(--vst-space-m);
          inline-size: 100%;
        }

        .label {
          white-space: nowrap;
        }
      `]}_toggleDataSetColumns(t){let e=this.columns.filter(n=>n.setId===t),s=e.every(n=>n.plotted);e.forEach(n=>{s?n.plotted=!1:n.plotted=!0;let a=s?"column-deselected":"column-selected";this.dispatchEvent(new CustomEvent(a,{detail:{columnId:n.id,setId:t}}))})}render(){return q`
      <div class="stack">
        <vst-ui-accordion open>
          <h3 class="heading" size="s" slot="label">${k("Dataset View Options")}</h3>
          <ul class="stack" inset="s" gap="s" slot="content">
            <li>
              <h3 class="label" margin="block-end-xs">${k("Displayed Datasets")}</h3>
              ${this.dataSets?.map(t=>q`
                    <label class="inline" inset="xs" gap="0">
                      <div>
                        <div class="checkbox">
                          <input type="checkbox" />
                          <span class="check"></span>
                        </div>
                        <span class="caption">${t.name}</span>
                      </div>
                    </label>
                  `)}
            </li>
            <li class="stack" inset="0" gap="0">
              <h3 class="label" margin="block-end-xs">${k("Displayed Columns")}</h3>
              ${this.columns.map(t=>q`
                    <label class="inline" inset="xs" gap="0">
                      <div>
                        <div class="checkbox">
                          <input type="checkbox" />
                          <span class="check"></span>
                        </div>
                        <span class="caption">${t.name}</span>
                      </div>
                    </label>
                  `)}
            </li>
          </ul>
        </vst-ui-accordion>
      </div>
    `}};customElements.define("vst-ui-table-block-settings",Fh);var wa=class extends nn(vt)(Ce(ns(as(ht)))){static get properties(){return{_frameFeatures:{state:!0},_meterSize:{state:!0},_notesText:{state:!0},_sensorIds:{state:!0},_sensors:{state:!0},graphModeTransition:{type:Object},dataSets:{type:Array},columns:{type:Array},metersize:{type:String},layout:{type:Object},videoSrc:{type:String},tableExamineIndex:{type:Number},isCollecting:{type:Boolean}}}static get observableProperties(){return{examinePositions:fi,table:nt,meter:nt,video:nt,authorized:ys,configurator:nt,graph_1:nt,graph_2:nt,graph_3:nt,notes:nt}}constructor(){super();this.dataSets=[],this.columns=[],this.coreGraphEls=[],this._notesText="",this._sensors=null,this._sensorIds=null,this.videoSrc=null,this.isCollecting=!1,this.analysisStores={},this._graphsToAddToUdm=[{id:"graph_1"},{id:"graph_2"},{id:"graph_3"}],["graph_1","graph_2","graph_3"].forEach(e=>{this.analysisStores[e]=new gi(e,fi)}),hi()&&import("./FrameFeatures-EN7KYCUN.js").then(({frameFeatures:e})=>{this._frameFeatures=e})}async firstUpdated(){await document.querySelector("ga-app").initialized,[this.$dataWorld,this.$dataCollection,this.$gaAppService,this.$gaReplayService,this.$sensorWorld,this.$udm]=this.requestServices(["dataWorld","dataCollection","gaAppService","gaReplayService","sensorWorld","udm"]),this.videoSrc=this.$gaAppService.videoUrl,this.$dataWorld.on("session-ended",()=>{this.videoSrc="",this._graphsToAddToUdm=[{id:"graph_1"},{id:"graph_2"},{id:"graph_3"}],fi.resetLinks()}),this.$dataWorld.on("session-started",async()=>{this._notesText=await this.$dataWorld.getNotesText()}),se("ff-science-works")&&(this.$dataWorld.on("session-started",async()=>{this.table&&(this.dataSets=[...this.$dataWorld.dataSets],this.columns=[...this.$dataWorld.columns])}),this.$sensorWorld.on("sensor-ready",async()=>{this.configurator&&(this._sensors=[...this.$sensorWorld.sensors],this._sensorIds=[...this.$sensorWorld.sensors.map(t=>t.sensorId)])}),this.$sensorWorld.on("sensor-removed",async()=>{this.configurator&&(this._sensors=[...this.$sensorWorld.sensors],this._sensorIds=[...this.$sensorWorld.sensors.map(t=>t.sensorId)])})),this.$gaAppService.on("video-src-changed",this.onVideoSrcChanged.bind(this)),we(()=>{this.blockInfo=this.$udm.blockInfo;let t=(e,s)=>{let a=this.shadowRoot.getElementById(e)?.graph?.udmId;a&&this.$dataWorld.changeGraphProperties(a,{visible:s})};t("graph_1",nt.graph_1),t("graph_2",nt.graph_2),t("graph_3",nt.graph_3),(!se("ff-science-works")||!this.configurator)&&(this._meterSize=nt.meter&&!nt.graph_1&&!nt.table?"large":"medium")})}updated(t){t.has("examinePositions")&&(this.scrubReplayVideo(this.examinePositions),this.tableExamineIndex=bl(this.examinePositions,this)),t.has("meter")&&this.meter&&import("./vst-core-meter-container-OLILVTVZ.js"),t.has("video")&&this.video&&this.authorized&&import("./ga-video-EJR7IEHL.js")}scrubReplayVideo(t={}){if(!this.$gaReplayService)return;let{xPosition:e,examineHidden:s}=t.graph_1||{},{graphs:{graph_1:{baseColumnId:n}={}}={}}=vt.getState()||{},a=this.$dataWorld.getColumnById(n);if(!a)return;let{videoSync:o,linkVideoToExamine:r}=this.$gaReplayService,{videoSyncTime:l,dataSyncTime:c}=o,d=c-l,h=Xr(e,a.units,"s")-d;this.videoEl=this.shadowRoot.querySelector("#video"),this.videoEl&&r&&!s&&Number.isFinite(e)&&Number.isFinite(h)&&this.videoEl.scrubVideo(h)}async setGraphColors({detail:t}){if(!this.connectedGraphEls){let e=this.shadowRoot.querySelector("#graph_group");await e.updateComplete,this.connectedGraphEls=e.connectedGraphs}if(this.coreGraphEls.push(t),this.coreGraphEls.length===this.connectedGraphEls.length){let e=ml(this.coreGraphEls);await document.querySelector("ga-app").initialized,this.$dataWorld.off("session-ended",e.reset),this.$dataWorld.on("session-ended",e.reset)}}updateExamineOnRowClicked({detail:{rowIndex:t}}){let e=this.coreGraphEls[0],{analysisEl:{examinePin:{examinePosition:{examineHidden:s=!0}={}}={}}={}}=e,n=e.getBaseColumn();if(!s&&this.synchronizeExaminePinAndTable()&&n&&t<n.values.length){let a=n.values[t];fi.updateExaminePosition(e.id,{xPosition:a,closestXPt:a,isGestureFinished:void 0})}}synchronizeExaminePinAndTable(){let{coreGraphEls:[t]=[]}=this,e=!0,s=t.getBaseColumn(),o=t.getLeftTraces().map(l=>l.yColumn.setId).map(l=>this.$dataWorld.getColumnForSet(s,l)).map(l=>l.values);return o.sort((l,c)=>l.length-c.length),(o.pop()||[]).forEach((l,c)=>{o.map(h=>h[c]).forEach(h=>{e=e&&!(l&&h&&l!==h)})}),e}addGraphMatch({detail:t}){let{$dataWorld:e,$dataCollection:s}=this,n=new le,a=this.coreGraphEls[0],o=e.getColumnById(t),r=this.$dataWorld.getMatchTypeForColumn(o.id),l=`${k(r)} ${k("Target")}`,c=()=>{function h(g){let m=3.2808,f={min:0,max:2};return g.toUpperCase()==="VELOCITY"&&(f.min=-2),(o.units==="ft"||o.units==="ft/s")&&(f.min*=m,f.max*=m),f}let u=()=>new Promise((g,m)=>{this.coreGraphEls.forEach(x=>{x.removeTracesByType("graph-match")});let f=s.timeBasedParams,b=Bt.convertTimeUnits(f.duration,"s",f.units),v=a.getBaseColumn();(!v||v.type!=="time")&&(e.currentDataSet.columnIds.forEach(x=>{let _=e.getColumnById(x);_.type==="time"&&(v=_)}),a.setBaseColumnId(v.id));let C=e.getColumnForSet(o)?.id,y=e.generateMatchPoints(o.id,o.groupId),w={name:l,columnId:o.id,matchType:r,matchGroupId:o.groupId};e.createGraphMatch(y,w).then(({traceColId:x,matchType:_})=>{let S=h(_);vt.dispatch(mi("graph_1",{leftRange:{min:S.min,max:S.max},baseRange:{max:b}})),a.leftColumnIds.forEach(A=>a.updateRemoveColumn(A,"left")),a.removeTracesByType("graph-match"),a.addTrace(x,"left"),nt.updateLayout({graph_1:!0,meter:!1}),a.updateAddColumn(C,"left"),g()}).catch(x=>{m(x)})});(()=>new Promise((g,m)=>{let f=s.timeBasedParams;if(f.duration<10||f.continuous){f.duration=f.duration>10?f.duration:10,f.continuous=!1;let b=!1,v=n.on(s,"collection-params-changed",()=>{v.off(),b=!0,g()}),C=y=>{console.error(y),v.off(),m(y)};s.setCollectionParams("time-based",f).then(()=>{setTimeout(()=>{b||C(new Error("collection-params-changed timed-out"))},3e3)},C)}else g()}))().then(()=>{u().then(()=>{nt.updateLayout({graph_1:!0,graph_2:!1,graph_3:!1})}).catch(g=>{console.error(g)})}).catch(g=>{console.error(g)})};(()=>new Promise((h,u)=>{e.isCurrentDataSetEmpty()?h():e.createNewDataSet().then(h).catch(u)}))().then(()=>{c()}).catch(h=>{console.error(h)})}onVideoSrcChanged({src:t}){this.videoSrc=t,import("./vst-ui-icon-MDSMNGLG.js"),this.video&&this.videoSrc&&!this.authorized&&nt.updateLayout({video:!1})}async _handleImportVideo(t){let{file:e}=t.detail;try{await this.$gaAppService.updateVideo(e)}catch(s){console.error(s)}}async _deleteVideo(){try{await this.$gaAppService.removeVideo()}catch(t){console.error(t)}}async processAddGraphToUdmQueue(){if(await document.querySelector("ga-app").initialized,this.__addGraphToUdmInProcess||this._graphsToAddToUdm.length===0||!(this._graphsToAddToUdm[0]instanceof HTMLElement))return;this.__addGraphToUdmInProcess=!0,await this._graphsToAddToUdm.shift().addGraphToUdm(),this.__addGraphToUdmInProcess=!1,this.processAddGraphToUdmQueue()}queueAddGraphToUdm({detail:t}){let e=this._graphsToAddToUdm.findIndex(s=>s.id===t.id);this._graphsToAddToUdm[e]=t,this.processAddGraphToUdmQueue()}static calcColumnCreated({detail:t}=event){vt.dispatch(ol(t))}static get styles(){return[ut,un,rt`
        :host {
          flex: 1;
          display: flex;
          flex-direction: column;
          --video-toolbar-height: 2rem;
        }

        #video_panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--vst-color-bg);
        }

        #video_toolbar {
          background-color: var(--vst-color-bg-secondary);
          height: var(--video-toolbar-height);
          display: flex;
          justify-content: flex-end;
          inline-size: 100%;
          block-size: fit-content;
        }

        #delete_video_btn {
          --vst-ui-icon-color: var(--vst-color-fg-primary);
          background-color: transparent;
          border: 0;
        }

        #delete_video_btn:hover,
        #delete_video_btn:active {
          --vst-ui-icon-color: var(--vst-color-brand);
        }

        #video {
          width: 100%;
          height: calc(100% - var(--video-toolbar-height));
          flex-grow: 1;
        }

        /* this is used allow picture-in-picture video while video pane is hidden */
        [visually-hidden] {
          top: 0;
          /* this just puts the hidden panel at the far right of the page, so when exiting
          picture-in-picture the video will callapse roughly where the video pane will reopen*/
          left: 92vw;
        }
      `]}_configuratorSettingsTemplate(){if(nt.graph_1||nt.graph_2||nt.graph_3){let t;return nt.graph_3?t=3:nt.graph_2?t=2:t=1,q`
        <vst-ui-graph-block-settings
          fixed
          .graphCount=${t}
          @graph-display-changed=${wa._handleGraphViewChanged}
        ></vst-ui-graph-block-settings>
      `}return nt.table?q`
        <vst-ui-table-block-settings
          .columns=${this.columns}
          .dataSets=${this.dataSets}
        ></vst-ui-table-block-settings>
      `:nt.meter?q`
        <vst-ui-meter-block-settings
          .sensors=${this._sensors}
          .enabledSensorIds=${this._sensorIds}
          .meterSize=${this._meterSize}
          @enabled-sensors-changed=${({detail:t})=>{this._sensorIds=t}}
          @meter-size-changed=${({detail:t})=>{this._meterSize=t}}
        ></vst-ui-meter-block-settings>
      `:""}static _handleGraphViewChanged({detail:t}){let e={graph_1:!1,graph_2:!1,graph_3:!1};for(let s=1;s<=t;s++)e[`graph_${s}`]=!0;nt.updateLayout(e)}_updateVisiblePanels({detail:t}){nt.notes&&import("./vst-ui-notes-3YOHMSGW.js"),this.visiblePanels=t.visiblePanels}_renderNotes(){return q`<vst-ui-notes
      class="content-layout__panel content-layout__panel--auto"
      slot="${this.visiblePanels===4&&window.matchMedia("(orientation: landscape)").matches?"priority-3":"priority-4"}"
      id="notes"
      ?hidden="${!nt.notes}"
      .notes="${this._notesText}"
      .previewMode="${this._notesText!==""}"
      @notes-updated="${({detail:t})=>this.$dataWorld.setNotesText(t)}"
    ></vst-ui-notes>`}render(){return q`
      <h2 visually-hidden>${k("Main Content")}</h2>
      <vst-core-content-layout
        .showGraphs="${nt.graph_1}"
        .showTable="${nt.table}"
        .showMeter="${nt.meter}"
        .showVideo="${nt.video&&this.authorized}"
        .showConfigurator="${nt.configurator}"
        .showNotes="${nt.notes&&this.authorized}"
        @visible-panels-changed="${this._updateVisiblePanels}"
      >
        <div
          class="content-layout__panel"
          slot="priority-1"
          ?hidden="${!nt.graph_1&&!nt.graph_2&&!nt.graph_3}"
        >
          <h3 visually-hidden>${k("Graphs")}</h3>
          <vst-core-graph-group id="graph_group" slot="graphs">
            <h3 visually-hidden ?hidden="${!nt.graph_1}">${k("Graph 1")}</h3>
            <ga-graph
              class="app-graph"
              id="graph_1"
              slot="graph"
              ?hidden="${!nt.graph_1}"
              .graphModeTransition="${this.graphModeTransition}"
              .analysisStore="${this.analysisStores.graph_1}"
              .isCollecting=${this.isCollecting}
              .blockInfo="${this.blockInfo}"
              @core-graph-ready="${this.setGraphColors}"
              @add-graph-match="${this.addGraphMatch}"
              @add-graph-to-udm="${this.queueAddGraphToUdm}"
            >
            </ga-graph>
            <h3 visually-hidden ?hidden="${!nt.graph_2}">${k("Graph 2")}</h3>
            <ga-graph
              class="app-graph"
              id="graph_2"
              slot="graph"
              ?hidden="${!nt.graph_2}"
              .graphModeTransition="${this.graphModeTransition}"
              .analysisStore="${this.analysisStores.graph_2}"
              .isCollecting=${this.isCollecting}
              .blockInfo="${this.blockInfo}"
              @core-graph-ready="${this.setGraphColors}"
              @add-graph-match="${this.addGraphMatch}"
              @add-graph-to-udm="${this.queueAddGraphToUdm}"
            >
            </ga-graph>
            <h3 visually-hidden ?hidden="${!nt.graph_3}">${k("Graph 3")}</h3>
            <ga-graph
              class="app-graph"
              id="graph_3"
              slot="graph"
              ?hidden="${!nt.graph_3}"
              .graphModeTransition="${this.graphModeTransition}"
              .analysisStore="${this.analysisStores.graph_3}"
              .isCollecting=${this.isCollecting}
              .blockInfo="${this.blockInfo}"
              @core-graph-ready="${this.setGraphColors}"
              @add-graph-match="${this.addGraphMatch}"
              @add-graph-to-udm="${this.queueAddGraphToUdm}"
            >
            </ga-graph>
          </vst-core-graph-group>
        </div>

        <h3 visually-hidden ?hidden="${!nt.table}">${k("Table")}</h3>
        <vst-core-table
          id="table"
          slot="priority-2"
          data-category="table"
          ?alphanumeric="${this.authorized}"
          @row-clicked="${this.updateExamineOnRowClicked}"
          @calc-column-created="${this.calcColumnCreated}"
          .examinePinIndex="${this.tableExamineIndex}"
          class="content-layout__panel"
          ?hidden="${!nt.table}"
        >
        </vst-core-table>

        <h3 visually-hidden ?hidden="${!nt.meter}">${k("Meters")}</h3>
        <vst-core-meter-container
          slot="priority-3"
          class="content-layout__panel"
          ?hidden="${!nt.meter}"
          .metersize="${this._meterSize}"
          .isCollecting=${this.isCollecting}
          color="${window.matchMedia("(prefers-color-scheme: dark)").matches?"var(--vst-color-dark-100":"rgba(216, 38, 47, 1)"}"
        ></vst-core-meter-container>

        <h3 visually-hidden ?hidden="${!nt.configurator}">
          ${k("Configurator")}
        </h3>
        <div
          class="content-layout__panel}"
          id="configurator_panel"
          slot="priority-4"
          ?hidden="${!nt.configurator}"
          ?visually-hidden="${!nt.configurator}"
        >
          ${this._configuratorSettingsTemplate()}
        </div>

        <h3
          visually-hidden
          ?hidden="${!(nt.video&&this.authorized)&&!this.videoSrc}"
        >
          ${k("Video")}
        </h3>
        <div
          class="content-layout__panel ${this.videoSrc?"has-video":""}"
          id="video_panel"
          slot="priority-4"
          ?hidden="${!(nt.video&&this.authorized)&&!this.videoSrc}"
          ?visually-hidden="${!(nt.video&&this.authorized)&&this.videoSrc}"
        >
          ${this.videoSrc?q`
                <div id="video_toolbar">
                  <vst-style-tooltip>
                    <button
                      ?hidden=${hi()&&this._frameFeatures?.disabledFeatures.has("video-view")}
                      class="btn"
                      variant="icon"
                      size="s"
                      id="delete_video_btn"
                      @click="${this._deleteVideo}"
                    >
                      <vst-ui-icon .icon="${Gs}"></vst-ui-icon>
                    </button>
                    <span role="tooltip" position="block-end-end">${k("Delete Video")}</span>
                  </vst-style-tooltip>
                </div>
                <ga-video
                  id="video"
                  .src="${this.videoSrc}"
                  @enter-pnp="${()=>nt.updateLayout({video:!1})}"
                  @exit-pnp="${()=>nt.updateLayout({video:!0})}"
                ></ga-video>
              `:q`
                <vst-ui-file-import
                  accept="video/mp4,video/x-m4v,video/ogg,video/x-matroska,video/webm,video/*,.ogg,.mp4,.mp4v,.mpg4,.mkv,.mov,.webm"
                  @selected="${this._handleImportVideo}"
                >
                  <span class="btn" variant="primary"> ${k("Import Video")} </span>
                </vst-ui-file-import>
              `}
        </div>

        ${this._renderNotes()}
      </vst-core-content-layout>
    `}};customElements.define("ga-main-content",wa);export{wa as GaMainContent};
/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
