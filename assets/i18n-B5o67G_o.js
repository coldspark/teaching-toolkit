import{d as Se,h as st,i as rn,o as an,a as ln,c as le,w as be,F as ot,g as ct,e as sn,b as on,r as cn,s as un,f as fn,T as _n,j as mn}from"./index-DijxDX1V.js";/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const _e=typeof window<"u",Q=(e,t=!1)=>t?Symbol.for(e):Symbol(e),En=(e,t,n)=>gn({l:e,k:t,s:n}),gn=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),k=e=>typeof e=="number"&&isFinite(e),dn=e=>ut(e)==="[object Date]",me=e=>ut(e)==="[object RegExp]",ge=e=>b(e)&&Object.keys(e).length===0,V=Object.assign,Nn=Object.create,P=(e=null)=>Nn(e);function ve(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Tn=Object.prototype.hasOwnProperty;function te(e,t){return Tn.call(e,t)}const U=Array.isArray,h=e=>typeof e=="function",E=e=>typeof e=="string",F=e=>typeof e=="boolean",L=e=>e!==null&&typeof e=="object",On=e=>L(e)&&h(e.then)&&h(e.catch),it=Object.prototype.toString,ut=e=>it.call(e),b=e=>{if(!L(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},bn=e=>e==null?"":U(e)||b(e)&&e.toString===it?JSON.stringify(e,null,2):String(e);function In(e,t=""){return e.reduce((n,r,a)=>a===0?n+r:n+t+r,"")}function de(e){let t=e;return()=>++t}function Ln(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const ue=e=>!L(e)||U(e);function fe(e,t){if(ue(e)||ue(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:a}=n.pop();Object.keys(r).forEach(s=>{s!=="__proto__"&&(L(r[s])&&!L(a[s])&&(a[s]=Array.isArray(r[s])?[]:P()),ue(a[s])||ue(r[s])?a[s]=r[s]:n.push({src:r[s],des:a[s]}))})}}/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const An=/\{([0-9a-zA-Z]+)\}/g;function Cn(e,...t){return t.length===1&&Rn(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(An,(n,r)=>t.hasOwnProperty(r)?t[r]:"")}const Rn=e=>e!==null&&typeof e=="object",pn={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},w={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Pn={[w.EXPECTED_TOKEN]:"Expected token: '{0}'",[w.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[w.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[w.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[w.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[w.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[w.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[w.EMPTY_PLACEHOLDER]:"Empty placeholder",[w.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[w.INVALID_LINKED_FORMAT]:"Invalid linked format",[w.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[w.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[w.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[w.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[w.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[w.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function ft(e,t,n={}){const{domain:r,messages:a,args:s}=n,l=Cn((a||Pn)[e]||"",...s||[]),f=new SyntaxError(String(l));return f.code=e,f.domain=r,f}/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const z=[];z[0]={w:[0],i:[3,0],"[":[4],o:[7]};z[1]={w:[1],".":[2],"[":[4],o:[7]};z[2]={w:[2],i:[3,0],0:[3,0]};z[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};z[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};z[5]={"'":[4,0],o:8,l:[5,0]};z[6]={'"':[4,0],o:8,l:[6,0]};const Sn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Dn(e){return Sn.test(e)}function hn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function Fn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function yn(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Dn(t)?hn(t):"*"+t}function Mn(e){const t=[];let n=-1,r=0,a=0,s,l,f,c,u,g,m;const _=[];_[0]=()=>{l===void 0?l=f:l+=f},_[1]=()=>{l!==void 0&&(t.push(l),l=void 0)},_[2]=()=>{_[0](),a++},_[3]=()=>{if(a>0)a--,r=4,_[0]();else{if(a=0,l===void 0||(l=yn(l),l===!1))return!1;_[1]()}};function d(){const O=e[n+1];if(r===5&&O==="'"||r===6&&O==='"')return n++,f="\\"+O,_[0](),!0}for(;r!==null;)if(n++,s=e[n],!(s==="\\"&&d())){if(c=Fn(s),m=z[r],u=m[c]||m.l||8,u===8||(r=u[0],u[1]!==void 0&&(g=_[u[1]],g&&(f=s,g()===!1))))return;if(r===7)return t}}const ke=new Map;function Un(e,t){return L(e)?e[t]:null}function vn(e,t){if(!L(e))return null;let n=ke.get(t);if(n||(n=Mn(t),n&&ke.set(t,n)),!n)return null;const r=n.length;let a=e,s=0;for(;s<r;){const l=a[n[s]];if(l===void 0||h(a))return null;a=l,s++}return a}const kn=e=>e,wn=e=>"",Wn="text",Vn=e=>e.length===0?"":In(e),xn=bn;function we(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Gn(e){const t=k(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(k(e.named.count)||k(e.named.n))?k(e.named.count)?e.named.count:k(e.named.n)?e.named.n:t:t}function $n(e,t){t.count||(t.count=e),t.n||(t.n=e)}function jn(e={}){const t=e.locale,n=Gn(e),r=L(e.pluralRules)&&E(t)&&h(e.pluralRules[t])?e.pluralRules[t]:we,a=L(e.pluralRules)&&E(t)&&h(e.pluralRules[t])?we:void 0,s=T=>T[r(n,T.length,a)],l=e.list||[],f=T=>l[T],c=e.named||P();k(e.pluralIndex)&&$n(n,c);const u=T=>c[T];function g(T){const D=h(e.messages)?e.messages(T):L(e.messages)?e.messages[T]:!1;return D||(e.parent?e.parent.message(T):wn)}const m=T=>e.modifiers?e.modifiers[T]:kn,_=b(e.processor)&&h(e.processor.normalize)?e.processor.normalize:Vn,d=b(e.processor)&&h(e.processor.interpolate)?e.processor.interpolate:xn,O=b(e.processor)&&E(e.processor.type)?e.processor.type:Wn,S={list:f,named:u,plural:s,linked:(T,...D)=>{const[M,I]=D;let C="text",p="";D.length===1?L(M)?(p=M.modifier||p,C=M.type||C):E(M)&&(p=M||p):D.length===2&&(E(M)&&(p=M||p),E(I)&&(C=I||C));const j=g(T)(S),W=C==="vnode"&&U(j)&&p?j[0]:j;return p?m(p)(W,C):W},message:g,type:O,interpolate:d,normalize:_,values:V(P(),l,c)};return S}const _t=pn.__EXTEND_POINT__,Z=de(_t),Yn={NOT_FOUND_KEY:_t,FALLBACK_TO_TRANSLATE:Z(),CANNOT_FORMAT_NUMBER:Z(),FALLBACK_TO_NUMBER_FORMAT:Z(),CANNOT_FORMAT_DATE:Z(),FALLBACK_TO_DATE_FORMAT:Z(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Z(),__EXTEND_POINT__:Z()},mt=w.__EXTEND_POINT__,ee=de(mt),Y={INVALID_ARGUMENT:mt,INVALID_DATE_ARGUMENT:ee(),INVALID_ISO_DATE_ARGUMENT:ee(),NOT_SUPPORT_NON_STRING_MESSAGE:ee(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:ee(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:ee(),NOT_SUPPORT_LOCALE_TYPE:ee(),__EXTEND_POINT__:ee()};function B(e){return ft(e,null,void 0)}function De(e,t){return t.locale!=null?We(t.locale):We(e.locale)}let Te;function We(e){if(E(e))return e;if(h(e)){if(e.resolvedOnce&&Te!=null)return Te;if(e.constructor.name==="Function"){const t=e();if(On(t))throw B(Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Te=t}else throw B(Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw B(Y.NOT_SUPPORT_LOCALE_TYPE)}function Hn(e,t,n){return[...new Set([n,...U(t)?t:L(t)?Object.keys(t):E(t)?[t]:[n]])]}function Et(e,t,n){const r=E(n)?n:Ee,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let s=a.__localeChainCache.get(r);if(!s){s=[];let l=[n];for(;U(l);)l=Ve(s,l,t);const f=U(t)||!b(t)?t:t.default?t.default:null;l=E(f)?[f]:f,U(l)&&Ve(s,l,!1),a.__localeChainCache.set(r,s)}return s}function Ve(e,t,n){let r=!0;for(let a=0;a<t.length&&F(r);a++){const s=t[a];E(s)&&(r=Bn(e,t[a],n))}return r}function Bn(e,t,n){let r;const a=t.split("-");do{const s=a.join("-");r=Xn(e,s,n),a.splice(-1,1)}while(a.length&&r===!0);return r}function Xn(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const a=t.replace(/!/g,"");e.push(a),(U(n)||b(n))&&n[a]&&(r=n[a])}return r}const Kn="9.14.2",Ne=-1,Ee="en-US",xe="",Ge=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Jn(){return{upper:(e,t)=>t==="text"&&E(e)?e.toUpperCase():t==="vnode"&&L(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&E(e)?e.toLowerCase():t==="vnode"&&L(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&E(e)?Ge(e):t==="vnode"&&L(e)&&"__v_isVNode"in e?Ge(e.children):e}}let Qn,gt;function zn(e){gt=e}let dt;function qn(e){dt=e}let Nt=null;const $e=e=>{Nt=e},Zn=()=>Nt;let je=0;function er(e={}){const t=h(e.onWarn)?e.onWarn:Ln,n=E(e.version)?e.version:Kn,r=E(e.locale)||h(e.locale)?e.locale:Ee,a=h(r)?Ee:r,s=U(e.fallbackLocale)||b(e.fallbackLocale)||E(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a,l=b(e.messages)?e.messages:Oe(a),f=b(e.datetimeFormats)?e.datetimeFormats:Oe(a),c=b(e.numberFormats)?e.numberFormats:Oe(a),u=V(P(),e.modifiers,Jn()),g=e.pluralRules||P(),m=h(e.missing)?e.missing:null,_=F(e.missingWarn)||me(e.missingWarn)?e.missingWarn:!0,d=F(e.fallbackWarn)||me(e.fallbackWarn)?e.fallbackWarn:!0,O=!!e.fallbackFormat,A=!!e.unresolving,S=h(e.postTranslation)?e.postTranslation:null,T=b(e.processor)?e.processor:null,D=F(e.warnHtmlMessage)?e.warnHtmlMessage:!0,M=!!e.escapeParameter,I=h(e.messageCompiler)?e.messageCompiler:Qn,C=h(e.messageResolver)?e.messageResolver:gt||Un,p=h(e.localeFallbacker)?e.localeFallbacker:dt||Hn,j=L(e.fallbackContext)?e.fallbackContext:void 0,W=e,N=L(W.__datetimeFormatters)?W.__datetimeFormatters:new Map,ce=L(W.__numberFormatters)?W.__numberFormatters:new Map,ne=L(W.__meta)?W.__meta:{};je++;const K={version:n,cid:je,locale:r,fallbackLocale:s,messages:l,modifiers:u,pluralRules:g,missing:m,missingWarn:_,fallbackWarn:d,fallbackFormat:O,unresolving:A,postTranslation:S,processor:T,warnHtmlMessage:D,escapeParameter:M,messageCompiler:I,messageResolver:C,localeFallbacker:p,fallbackContext:j,onWarn:t,__meta:ne};return K.datetimeFormats=f,K.numberFormats=c,K.__datetimeFormatters=N,K.__numberFormatters=ce,K}const Oe=e=>({[e]:P()});function he(e,t,n,r,a){const{missing:s,onWarn:l}=e;if(s!==null){const f=s(e,n,t,a);return E(f)?f:t}else return t}function se(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function tr(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function nr(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(tr(e,t[r]))return!0;return!1}const rr=["t","type"];function ar(e){return lr(e,rr)}function lr(e,t,n){for(let r=0;r<t.length;r++){const a=t[r];if(te(e,a)&&e[a]!=null)return e[a]}return n}function ae(e){return L(e)&&ar(e)===0&&(te(e,"b")||te(e,"body"))}const Ye=()=>"",X=e=>h(e);function He(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:s,fallbackLocale:l,messages:f}=e,[c,u]=Ie(...t),g=F(u.missingWarn)?u.missingWarn:e.missingWarn,m=F(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,_=F(u.escapeParameter)?u.escapeParameter:e.escapeParameter,d=!!u.resolvedMessage,O=E(u.default)||F(u.default)?F(u.default)?s?c:()=>c:u.default:n?s?c:()=>c:"",A=n||O!=="",S=De(e,u);_&&sr(u);let[T,D,M]=d?[c,S,f[S]||P()]:Tt(e,c,S,l,m,g),I=T,C=c;if(!d&&!(E(I)||ae(I)||X(I))&&A&&(I=O,C=I),!d&&(!(E(I)||ae(I)||X(I))||!E(D)))return a?Ne:c;let p=!1;const j=()=>{p=!0},W=X(I)?I:Ot(e,c,D,I,C,j);if(p)return I;const N=ir(e,D,M,u),ce=jn(N),ne=or(e,W,ce);return r?r(ne,c):ne}function sr(e){U(e.list)?e.list=e.list.map(t=>E(t)?ve(t):t):L(e.named)&&Object.keys(e.named).forEach(t=>{E(e.named[t])&&(e.named[t]=ve(e.named[t]))})}function Tt(e,t,n,r,a,s){const{messages:l,onWarn:f,messageResolver:c,localeFallbacker:u}=e,g=u(e,r,n);let m=P(),_,d=null;const O="translate";for(let A=0;A<g.length&&(_=g[A],m=l[_]||P(),(d=c(m,t))===null&&(d=m[t]),!(E(d)||ae(d)||X(d)));A++)if(!nr(_,g)){const S=he(e,t,_,s,O);S!==t&&(d=S)}return[d,_,m]}function Ot(e,t,n,r,a,s){const{messageCompiler:l,warnHtmlMessage:f}=e;if(X(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||t,u}if(l==null){const u=()=>r;return u.locale=n,u.key=t,u}const c=l(r,cr(e,n,a,r,f,s));return c.locale=n,c.key=t,c.source=r,c}function or(e,t,n){return t(n)}function Ie(...e){const[t,n,r]=e,a=P();if(!E(t)&&!k(t)&&!X(t)&&!ae(t))throw B(Y.INVALID_ARGUMENT);const s=k(t)?String(t):(X(t),t);return k(n)?a.plural=n:E(n)?a.default=n:b(n)&&!ge(n)?a.named=n:U(n)&&(a.list=n),k(r)?a.plural=r:E(r)?a.default=r:b(r)&&V(a,r),[s,a]}function cr(e,t,n,r,a,s){return{locale:t,key:n,warnHtmlMessage:a,onError:l=>{throw s&&s(l),l},onCacheKey:l=>En(t,n,l)}}function ir(e,t,n,r){const{modifiers:a,pluralRules:s,messageResolver:l,fallbackLocale:f,fallbackWarn:c,missingWarn:u,fallbackContext:g}=e,_={locale:t,modifiers:a,pluralRules:s,messages:d=>{let O=l(n,d);if(O==null&&g){const[,,A]=Tt(g,d,t,f,c,u);O=l(A,d)}if(E(O)||ae(O)){let A=!1;const T=Ot(e,d,t,O,d,()=>{A=!0});return A?Ye:T}else return X(O)?O:Ye}};return e.processor&&(_.processor=e.processor),r.list&&(_.list=r.list),r.named&&(_.named=r.named),k(r.plural)&&(_.pluralIndex=r.plural),_}function Be(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:l}=e,{__datetimeFormatters:f}=e,[c,u,g,m]=Le(...t),_=F(g.missingWarn)?g.missingWarn:e.missingWarn;F(g.fallbackWarn)?g.fallbackWarn:e.fallbackWarn;const d=!!g.part,O=De(e,g),A=l(e,a,O);if(!E(c)||c==="")return new Intl.DateTimeFormat(O,m).format(u);let S={},T,D=null;const M="datetime format";for(let p=0;p<A.length&&(T=A[p],S=n[T]||{},D=S[c],!b(D));p++)he(e,c,T,_,M);if(!b(D)||!E(T))return r?Ne:c;let I=`${T}__${c}`;ge(m)||(I=`${I}__${JSON.stringify(m)}`);let C=f.get(I);return C||(C=new Intl.DateTimeFormat(T,V({},D,m)),f.set(I,C)),d?C.formatToParts(u):C.format(u)}const bt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Le(...e){const[t,n,r,a]=e,s=P();let l=P(),f;if(E(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw B(Y.INVALID_ISO_DATE_ARGUMENT);const u=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();f=new Date(u);try{f.toISOString()}catch{throw B(Y.INVALID_ISO_DATE_ARGUMENT)}}else if(dn(t)){if(isNaN(t.getTime()))throw B(Y.INVALID_DATE_ARGUMENT);f=t}else if(k(t))f=t;else throw B(Y.INVALID_ARGUMENT);return E(n)?s.key=n:b(n)&&Object.keys(n).forEach(c=>{bt.includes(c)?l[c]=n[c]:s[c]=n[c]}),E(r)?s.locale=r:b(r)&&(l=r),b(a)&&(l=a),[s.key||"",f,s,l]}function Xe(e,t,n){const r=e;for(const a in n){const s=`${t}__${a}`;r.__datetimeFormatters.has(s)&&r.__datetimeFormatters.delete(s)}}function Ke(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:l}=e,{__numberFormatters:f}=e,[c,u,g,m]=Ae(...t),_=F(g.missingWarn)?g.missingWarn:e.missingWarn;F(g.fallbackWarn)?g.fallbackWarn:e.fallbackWarn;const d=!!g.part,O=De(e,g),A=l(e,a,O);if(!E(c)||c==="")return new Intl.NumberFormat(O,m).format(u);let S={},T,D=null;const M="number format";for(let p=0;p<A.length&&(T=A[p],S=n[T]||{},D=S[c],!b(D));p++)he(e,c,T,_,M);if(!b(D)||!E(T))return r?Ne:c;let I=`${T}__${c}`;ge(m)||(I=`${I}__${JSON.stringify(m)}`);let C=f.get(I);return C||(C=new Intl.NumberFormat(T,V({},D,m)),f.set(I,C)),d?C.formatToParts(u):C.format(u)}const It=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ae(...e){const[t,n,r,a]=e,s=P();let l=P();if(!k(t))throw B(Y.INVALID_ARGUMENT);const f=t;return E(n)?s.key=n:b(n)&&Object.keys(n).forEach(c=>{It.includes(c)?l[c]=n[c]:s[c]=n[c]}),E(r)?s.locale=r:b(r)&&(l=r),b(a)&&(l=a),[s.key||"",f,s,l]}function Je(e,t,n){const r=e;for(const a in n){const s=`${t}__${a}`;r.__numberFormatters.has(s)&&r.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const ur="9.14.2",Lt=Yn.__EXTEND_POINT__,H=de(Lt);H(),H(),H(),H(),H(),H(),H(),H(),H();const At=Y.__EXTEND_POINT__,x=de(At),G={UNEXPECTED_RETURN_TYPE:At,INVALID_ARGUMENT:x(),MUST_BE_CALL_SETUP_TOP:x(),NOT_INSTALLED:x(),NOT_AVAILABLE_IN_LEGACY_MODE:x(),REQUIRED_VALUE:x(),INVALID_VALUE:x(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:x(),NOT_INSTALLED_WITH_PROVIDE:x(),UNEXPECTED_ERROR:x(),NOT_COMPATIBLE_LEGACY_VUE_I18N:x(),BRIDGE_SUPPORT_VUE_2_ONLY:x(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:x(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:x(),__EXTEND_POINT__:x()};function $(e,...t){return ft(e,null,void 0)}const Ce=Q("__translateVNode"),Re=Q("__datetimeParts"),pe=Q("__numberParts"),fr=Q("__setPluralRules"),_r=Q("__injectWithOption"),Pe=Q("__dispose");function oe(e){if(!L(e))return e;for(const t in e)if(te(e,t))if(!t.includes("."))L(e[t])&&oe(e[t]);else{const n=t.split("."),r=n.length-1;let a=e,s=!1;for(let l=0;l<r;l++){if(n[l]in a||(a[n[l]]=P()),!L(a[n[l]])){s=!0;break}a=a[n[l]]}s||(a[n[r]]=e[t],delete e[t]),L(a[n[r]])&&oe(a[n[r]])}return e}function Ct(e,t){const{messages:n,__i18n:r,messageResolver:a,flatJson:s}=t,l=b(n)?n:U(r)?P():{[e]:P()};if(U(r)&&r.forEach(f=>{if("locale"in f&&"resource"in f){const{locale:c,resource:u}=f;c?(l[c]=l[c]||P(),fe(u,l[c])):fe(u,l)}else E(f)&&fe(JSON.parse(f),l)}),a==null&&s)for(const f in l)te(l,f)&&oe(l[f]);return l}function mr(e){return e.type}function Er(e,t,n){let r=L(t.messages)?t.messages:P();"__i18nGlobal"in n&&(r=Ct(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const a=Object.keys(r);a.length&&a.forEach(s=>{e.mergeLocaleMessage(s,r[s])});{if(L(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(l=>{e.mergeDateTimeFormat(l,t.datetimeFormats[l])})}if(L(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(l=>{e.mergeNumberFormat(l,t.numberFormats[l])})}}}function Qe(e){return fn(_n,null,e,0)}const ze=()=>[],gr=()=>!1;let qe=0;function Ze(e){return(t,n,r,a)=>e(n,r,ct()||void 0,a)}function Rt(e={},t){const{__root:n,__injectWithOption:r}=e,a=n===void 0,s=e.flatJson,l=_e?cn:un,f=!!e.translateExistCompatible;let c=F(e.inheritLocale)?e.inheritLocale:!0;const u=l(n&&c?n.locale.value:E(e.locale)?e.locale:Ee),g=l(n&&c?n.fallbackLocale.value:E(e.fallbackLocale)||U(e.fallbackLocale)||b(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:u.value),m=l(Ct(u.value,e)),_=l(b(e.datetimeFormats)?e.datetimeFormats:{[u.value]:{}}),d=l(b(e.numberFormats)?e.numberFormats:{[u.value]:{}});let O=n?n.missingWarn:F(e.missingWarn)||me(e.missingWarn)?e.missingWarn:!0,A=n?n.fallbackWarn:F(e.fallbackWarn)||me(e.fallbackWarn)?e.fallbackWarn:!0,S=n?n.fallbackRoot:F(e.fallbackRoot)?e.fallbackRoot:!0,T=!!e.fallbackFormat,D=h(e.missing)?e.missing:null,M=h(e.missing)?Ze(e.missing):null,I=h(e.postTranslation)?e.postTranslation:null,C=n?n.warnHtmlMessage:F(e.warnHtmlMessage)?e.warnHtmlMessage:!0,p=!!e.escapeParameter;const j=n?n.modifiers:b(e.modifiers)?e.modifiers:{};let W=e.pluralRules||n&&n.pluralRules,N;N=(()=>{a&&$e(null);const o={version:ur,locale:u.value,fallbackLocale:g.value,messages:m.value,modifiers:j,pluralRules:W,missing:M===null?void 0:M,missingWarn:O,fallbackWarn:A,fallbackFormat:T,unresolving:!0,postTranslation:I===null?void 0:I,warnHtmlMessage:C,escapeParameter:p,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};o.datetimeFormats=_.value,o.numberFormats=d.value,o.__datetimeFormatters=b(N)?N.__datetimeFormatters:void 0,o.__numberFormatters=b(N)?N.__numberFormatters:void 0;const i=er(o);return a&&$e(i),i})(),se(N,u.value,g.value);function ne(){return[u.value,g.value,m.value,_.value,d.value]}const K=le({get:()=>u.value,set:o=>{u.value=o,N.locale=u.value}}),St=le({get:()=>g.value,set:o=>{g.value=o,N.fallbackLocale=g.value,se(N,u.value,o)}}),Dt=le(()=>m.value),ht=le(()=>_.value),Ft=le(()=>d.value);function yt(){return h(I)?I:null}function Mt(o){I=o,N.postTranslation=o}function Ut(){return D}function vt(o){o!==null&&(M=Ze(o)),D=o,N.missing=M}const q=(o,i,R,y,J,ie)=>{ne();let re;try{a||(N.fallbackContext=n?Zn():void 0),re=o(N)}finally{a||(N.fallbackContext=void 0)}if(R!=="translate exists"&&k(re)&&re===Ne||R==="translate exists"&&!re){const[nn,Wr]=i();return n&&S?y(n):J(nn)}else{if(ie(re))return re;throw $(G.UNEXPECTED_RETURN_TYPE)}};function Me(...o){return q(i=>Reflect.apply(He,null,[i,...o]),()=>Ie(...o),"translate",i=>Reflect.apply(i.t,i,[...o]),i=>i,i=>E(i))}function kt(...o){const[i,R,y]=o;if(y&&!L(y))throw $(G.INVALID_ARGUMENT);return Me(i,R,V({resolvedMessage:!0},y||{}))}function wt(...o){return q(i=>Reflect.apply(Be,null,[i,...o]),()=>Le(...o),"datetime format",i=>Reflect.apply(i.d,i,[...o]),()=>xe,i=>E(i))}function Wt(...o){return q(i=>Reflect.apply(Ke,null,[i,...o]),()=>Ae(...o),"number format",i=>Reflect.apply(i.n,i,[...o]),()=>xe,i=>E(i))}function Vt(o){return o.map(i=>E(i)||k(i)||F(i)?Qe(String(i)):i)}const xt={normalize:Vt,interpolate:o=>o,type:"vnode"};function Gt(...o){return q(i=>{let R;const y=i;try{y.processor=xt,R=Reflect.apply(He,null,[y,...o])}finally{y.processor=null}return R},()=>Ie(...o),"translate",i=>i[Ce](...o),i=>[Qe(i)],i=>U(i))}function $t(...o){return q(i=>Reflect.apply(Ke,null,[i,...o]),()=>Ae(...o),"number format",i=>i[pe](...o),ze,i=>E(i)||U(i))}function jt(...o){return q(i=>Reflect.apply(Be,null,[i,...o]),()=>Le(...o),"datetime format",i=>i[Re](...o),ze,i=>E(i)||U(i))}function Yt(o){W=o,N.pluralRules=W}function Ht(o,i){return q(()=>{if(!o)return!1;const R=E(i)?i:u.value,y=Ue(R),J=N.messageResolver(y,o);return f?J!=null:ae(J)||X(J)||E(J)},()=>[o],"translate exists",R=>Reflect.apply(R.te,R,[o,i]),gr,R=>F(R))}function Bt(o){let i=null;const R=Et(N,g.value,u.value);for(let y=0;y<R.length;y++){const J=m.value[R[y]]||{},ie=N.messageResolver(J,o);if(ie!=null){i=ie;break}}return i}function Xt(o){const i=Bt(o);return i??(n?n.tm(o)||{}:{})}function Ue(o){return m.value[o]||{}}function Kt(o,i){if(s){const R={[o]:i};for(const y in R)te(R,y)&&oe(R[y]);i=R[o]}m.value[o]=i,N.messages=m.value}function Jt(o,i){m.value[o]=m.value[o]||{};const R={[o]:i};if(s)for(const y in R)te(R,y)&&oe(R[y]);i=R[o],fe(i,m.value[o]),N.messages=m.value}function Qt(o){return _.value[o]||{}}function zt(o,i){_.value[o]=i,N.datetimeFormats=_.value,Xe(N,o,i)}function qt(o,i){_.value[o]=V(_.value[o]||{},i),N.datetimeFormats=_.value,Xe(N,o,i)}function Zt(o){return d.value[o]||{}}function en(o,i){d.value[o]=i,N.numberFormats=d.value,Je(N,o,i)}function tn(o,i){d.value[o]=V(d.value[o]||{},i),N.numberFormats=d.value,Je(N,o,i)}qe++,n&&_e&&(be(n.locale,o=>{c&&(u.value=o,N.locale=o,se(N,u.value,g.value))}),be(n.fallbackLocale,o=>{c&&(g.value=o,N.fallbackLocale=o,se(N,u.value,g.value))}));const v={id:qe,locale:K,fallbackLocale:St,get inheritLocale(){return c},set inheritLocale(o){c=o,o&&n&&(u.value=n.locale.value,g.value=n.fallbackLocale.value,se(N,u.value,g.value))},get availableLocales(){return Object.keys(m.value).sort()},messages:Dt,get modifiers(){return j},get pluralRules(){return W||{}},get isGlobal(){return a},get missingWarn(){return O},set missingWarn(o){O=o,N.missingWarn=O},get fallbackWarn(){return A},set fallbackWarn(o){A=o,N.fallbackWarn=A},get fallbackRoot(){return S},set fallbackRoot(o){S=o},get fallbackFormat(){return T},set fallbackFormat(o){T=o,N.fallbackFormat=T},get warnHtmlMessage(){return C},set warnHtmlMessage(o){C=o,N.warnHtmlMessage=o},get escapeParameter(){return p},set escapeParameter(o){p=o,N.escapeParameter=o},t:Me,getLocaleMessage:Ue,setLocaleMessage:Kt,mergeLocaleMessage:Jt,getPostTranslationHandler:yt,setPostTranslationHandler:Mt,getMissingHandler:Ut,setMissingHandler:vt,[fr]:Yt};return v.datetimeFormats=ht,v.numberFormats=Ft,v.rt=kt,v.te=Ht,v.tm=Xt,v.d=wt,v.n=Wt,v.getDateTimeFormat=Qt,v.setDateTimeFormat=zt,v.mergeDateTimeFormat=qt,v.getNumberFormat=Zt,v.setNumberFormat=en,v.mergeNumberFormat=tn,v[_r]=r,v[Ce]=Gt,v[Re]=jt,v[pe]=$t,v}const Fe={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function dr({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,a)=>[...r,...a.type===ot?a.children:[a]],[]):t.reduce((n,r)=>{const a=e[r];return a&&(n[r]=a()),n},P())}function pt(e){return ot}const Nr=Se({name:"i18n-t",props:V({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>k(e)||!isNaN(e)}},Fe),setup(e,t){const{slots:n,attrs:r}=t,a=e.i18n||ye({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(m=>m!=="_"),l=P();e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=E(e.plural)?+e.plural:e.plural);const f=dr(t,s),c=a[Ce](e.keypath,f,l),u=V(P(),r),g=E(e.tag)||L(e.tag)?e.tag:pt();return st(g,u,c)}}}),et=Nr;function Tr(e){return U(e)&&!E(e[0])}function Pt(e,t,n,r){const{slots:a,attrs:s}=t;return()=>{const l={part:!0};let f=P();e.locale&&(l.locale=e.locale),E(e.format)?l.key=e.format:L(e.format)&&(E(e.format.key)&&(l.key=e.format.key),f=Object.keys(e.format).reduce((_,d)=>n.includes(d)?V(P(),_,{[d]:e.format[d]}):_,P()));const c=r(e.value,l,f);let u=[l.key];U(c)?u=c.map((_,d)=>{const O=a[_.type],A=O?O({[_.type]:_.value,index:d,parts:c}):[_.value];return Tr(A)&&(A[0].key=`${_.type}-${d}`),A}):E(c)&&(u=[c]);const g=V(P(),s),m=E(e.tag)||L(e.tag)?e.tag:pt();return st(m,g,u)}}const Or=Se({name:"i18n-n",props:V({value:{type:Number,required:!0},format:{type:[String,Object]}},Fe),setup(e,t){const n=e.i18n||ye({useScope:e.scope,__useComponent:!0});return Pt(e,t,It,(...r)=>n[pe](...r))}}),tt=Or,br=Se({name:"i18n-d",props:V({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Fe),setup(e,t){const n=e.i18n||ye({useScope:e.scope,__useComponent:!0});return Pt(e,t,bt,(...r)=>n[Re](...r))}}),nt=br;function Ir(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function Lr(e){const t=l=>{const{instance:f,modifiers:c,value:u}=l;if(!f||!f.$)throw $(G.UNEXPECTED_ERROR);const g=Ir(e,f.$),m=rt(u);return[Reflect.apply(g.t,g,[...at(m)]),g]};return{created:(l,f)=>{const[c,u]=t(f);_e&&e.global===u&&(l.__i18nWatcher=be(u.locale,()=>{f.instance&&f.instance.$forceUpdate()})),l.__composer=u,l.textContent=c},unmounted:l=>{_e&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:f})=>{if(l.__composer){const c=l.__composer,u=rt(f);l.textContent=Reflect.apply(c.t,c,[...at(u)])}},getSSRProps:l=>{const[f]=t(l);return{textContent:f}}}}function rt(e){if(E(e))return{path:e};if(b(e)){if(!("path"in e))throw $(G.REQUIRED_VALUE,"path");return e}else throw $(G.INVALID_VALUE)}function at(e){const{path:t,locale:n,args:r,choice:a,plural:s}=e,l={},f=r||{};return E(n)&&(l.locale=n),k(a)&&(l.plural=a),k(s)&&(l.plural=s),[t,f,l]}function Ar(e,t,...n){const r=b(n[0])?n[0]:{},a=!!r.useI18nComponentName;(F(r.globalInstall)?r.globalInstall:!0)&&([a?"i18n":et.name,"I18nT"].forEach(l=>e.component(l,et)),[tt.name,"I18nN"].forEach(l=>e.component(l,tt)),[nt.name,"I18nD"].forEach(l=>e.component(l,nt))),e.directive("t",Lr(t))}const Cr=Q("global-vue-i18n");function Rr(e={},t){const n=F(e.globalInjection)?e.globalInjection:!0,r=!0,a=new Map,[s,l]=pr(e),f=Q("");function c(m){return a.get(m)||null}function u(m,_){a.set(m,_)}function g(m){a.delete(m)}{const m={get mode(){return"composition"},get allowComposition(){return r},async install(_,...d){if(_.__VUE_I18N_SYMBOL__=f,_.provide(_.__VUE_I18N_SYMBOL__,m),b(d[0])){const S=d[0];m.__composerExtend=S.__composerExtend,m.__vueI18nExtend=S.__vueI18nExtend}let O=null;n&&(O=Ur(_,m.global)),Ar(_,m,...d);const A=_.unmount;_.unmount=()=>{O&&O(),m.dispose(),A()}},get global(){return l},dispose(){s.stop()},__instances:a,__getInstance:c,__setInstance:u,__deleteInstance:g};return m}}function ye(e={}){const t=ct();if(t==null)throw $(G.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw $(G.NOT_INSTALLED);const n=Pr(t),r=Dr(n),a=mr(t),s=Sr(e,a);if(s==="global")return Er(r,e,a),r;if(s==="parent"){let c=hr(n,t,e.__useComponent);return c==null&&(c=r),c}const l=n;let f=l.__getInstance(t);if(f==null){const c=V({},e);"__i18n"in a&&(c.__i18n=a.__i18n),r&&(c.__root=r),f=Rt(c),l.__composerExtend&&(f[Pe]=l.__composerExtend(f)),yr(l,t,f),l.__setInstance(t,f)}return f}function pr(e,t,n){const r=sn();{const a=r.run(()=>Rt(e));if(a==null)throw $(G.UNEXPECTED_ERROR);return[r,a]}}function Pr(e){{const t=rn(e.isCE?Cr:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw $(e.isCE?G.NOT_INSTALLED_WITH_PROVIDE:G.UNEXPECTED_ERROR);return t}}function Sr(e,t){return ge(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Dr(e){return e.mode==="composition"?e.global:e.global.__composer}function hr(e,t,n=!1){let r=null;const a=t.root;let s=Fr(t,n);for(;s!=null;){const l=e;if(e.mode==="composition"&&(r=l.__getInstance(s)),r!=null||a===s)break;s=s.parent}return r}function Fr(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function yr(e,t,n){an(()=>{},t),ln(()=>{const r=n;e.__deleteInstance(t);const a=r[Pe];a&&(a(),delete r[Pe])},t)}const Mr=["locale","fallbackLocale","availableLocales"],lt=["t","rt","d","n","tm","te"];function Ur(e,t){const n=Object.create(null);return Mr.forEach(a=>{const s=Object.getOwnPropertyDescriptor(t,a);if(!s)throw $(G.UNEXPECTED_ERROR);const l=on(s.value)?{get(){return s.value.value},set(f){s.value.value=f}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,a,l)}),e.config.globalProperties.$i18n=n,lt.forEach(a=>{const s=Object.getOwnPropertyDescriptor(t,a);if(!s||!s.value)throw $(G.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,s)}),()=>{delete e.config.globalProperties.$i18n,lt.forEach(a=>{delete e.config.globalProperties[`$${a}`]})}}zn(vn);qn(Et);const vr={failed:"Action failed",success:"Action was successful"},kr={"en-US":vr},xr=mn(({app:e})=>{const t=Rr({locale:"en-US",legacy:!1,messages:kr});e.use(t)});export{xr as default};
