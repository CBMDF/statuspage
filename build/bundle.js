var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function i(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function h(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}let $;function b(e){$=e}function v(){if(!$)throw new Error("Function called outside component initialization");return $}function y(e){v().$$.on_mount.push(e)}const _=[],w=[],x=[],k=[],j=Promise.resolve();let N=!1;function E(e){x.push(e)}let S=!1;const C=new Set;function A(){if(!S){S=!0;do{for(let e=0;e<_.length;e+=1){const t=_[e];b(t),P(t.$$)}for(b(null),_.length=0;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];C.has(t)||(C.add(t),t())}x.length=0}while(_.length);for(;k.length;)k.pop()();N=!1,S=!1,C.clear()}}function P(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const R=new Set;let q;function z(e,t){e&&e.i&&(R.delete(e),e.i(t))}function B(e,t,n,r){if(e&&e.o){if(R.has(e))return;R.add(e),q.c.push((()=>{R.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function L(e,t){const n=t.token={};function o(e,o,s,c){if(t.token!==n)return;t.resolved=c;let a=t.ctx;void 0!==s&&(a=a.slice(),a[s]=c);const l=e&&(t.current=e)(a);let i=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==o&&e&&(q={r:0,c:[],p:q},B(e,1,1,(()=>{t.blocks[n]=null})),q.r||r(q.c),q=q.p)})):t.block.d(1),l.c(),z(l,1),l.m(t.mount(),t.anchor),i=!0),t.block=l,t.blocks&&(t.blocks[o]=l),i&&A()}if((s=e)&&"object"==typeof s&&"function"==typeof s.then){const n=v();if(e.then((e=>{b(n),o(t.then,1,t.value,e),b(null)}),(e=>{if(b(n),o(t.catch,2,t.error,e),b(null),!t.hasCatch)throw e})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}var s}function I(e){e&&e.c()}function O(e,n,s){const{fragment:c,on_mount:a,on_destroy:l,after_update:i}=e.$$;c&&c.m(n,s),E((()=>{const n=a.map(t).filter(o);l?l.push(...n):r(n),e.$$.on_mount=[]})),i.forEach(E)}function T(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){-1===e.$$.dirty[0]&&(_.push(e),N||(N=!0,j.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,o,s,c,a,i,u=[-1]){const d=$;b(t);const f=o.props||{},p=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(p.ctx=s?s(t,f,((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),m&&D(t,e)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(l)}else p.fragment&&p.fragment.c();o.intro&&z(t.$$.fragment),O(t,o.target,o.anchor),A()}b(d)}class H{$destroy(){T(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var M={component:"component",incident:"incident",service_status:"Service Status",past_incidents:"Past incidents",loading:"loading",error:"error",operational:"operational","performance issues":"performance issues","major outage":"major outage","partial outage":"partial outage",registered:"registered",updated:"updated",closed:"closed","rate limit exceeded":"API rate limit exceeded.",reset_time:"You can try again at: ",reloading_in:"Reloading in",seconds:"seconds"},G={component:"componente",incident:"incidente",service_status:"Status dos Serviços",past_incidents:"Incidentes anteriores",loading:"carregando",error:"erro",operational:"operacional","performance issues":"problemas de desempenho","major outage":"indisponível","partial outage":"parcialmente indisponível",registered:"registrado",updated:"atualizado",closed:"fechado","rate limit exceeded":"Limite de uso da API excedido.",reset_time:"Você poderá tentar novamente em: ",reloading_in:"Atualizando em",seconds:"segundos"},V={en:M,pt_BR:G},X=Object.freeze({__proto__:null,en:M,pt_BR:G,default:V});const Y=function(){const e=navigator.language||navigator.userLanguage;return["en","pt-BR"].includes(e)?e:"en"}().replace("-","_");function J(e){return X[Y][e]}function K(e){return null==e||""==e?"--":(e=new Date(e)).toLocaleString("pt-BR")}function Q(t){let n,r,o;return{c(){n=u("div"),r=d(t[0]),m(n,"class",o="alert alert-"+t[1]),m(n,"role","alert")},m(e,t){a(e,n,t),c(n,r)},p(e,[t]){1&t&&g(r,e[0]),2&t&&o!==(o="alert alert-"+e[1])&&m(n,"class",o)},i:e,o:e,d(e){e&&l(n)}}}function U(e,t,n){let{message:r=""}=t,{type:o="primary"}=t;return e.$$set=e=>{"message"in e&&n(0,r=e.message),"type"in e&&n(1,o=e.type)},[r,o]}class W extends H{constructor(e){super(),F(this,e,U,Q,s,{message:0,type:1})}}function Z(e,t,n){const r=e.slice();return r[4]=t[n],r}function ee(e,t,n){const r=e.slice();return r[1]=t[n],r}function te(e){let t,n,r,o,s,i,p,$=e[1].title+"",b=e[4].name+"";return{c(){t=u("div"),n=u("div"),r=d($),o=f(),s=u("div"),i=d(b),p=f(),m(n,"class","col-md-8"),m(s,"class","col-md-4 label  svelte-1m34x7f"),h(s,"background","#"+e[4].color),m(t,"class","row component svelte-1m34x7f")},m(e,l){a(e,t,l),c(t,n),c(n,r),c(t,o),c(t,s),c(s,i),c(t,p)},p(e,t){1&t&&$!==($=e[1].title+"")&&g(r,$),1&t&&b!==(b=e[4].name+"")&&g(i,b),1&t&&h(s,"background","#"+e[4].color)},d(e){e&&l(t)}}}function ne(e){let t,n=("operational"==e[4].name||"performance issues"==e[4].name||"major outage"==e[4].name||"partial outage"==e[4].name)&&te(e);return{c(){n&&n.c(),t=p()},m(e,r){n&&n.m(e,r),a(e,t,r)},p(e,r){"operational"==e[4].name||"performance issues"==e[4].name||"major outage"==e[4].name||"partial outage"==e[4].name?n?n.p(e,r):(n=te(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&l(t)}}}function re(e){let t,n=e[1].labels,r=[];for(let t=0;t<n.length;t+=1)r[t]=ne(Z(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=p()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);a(e,t,n)},p(e,o){if(1&o){let s;for(n=e[1].labels,s=0;s<n.length;s+=1){const c=Z(e,n,s);r[s]?r[s].p(c,o):(r[s]=ne(c),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){i(r,e),e&&l(t)}}}function oe(t){let n,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=re(ee(t,r,e));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();n=p()},m(e,t){for(let n=0;n<o.length;n+=1)o[n].m(e,t);a(e,n,t)},p(e,[t]){if(1&t){let s;for(r=e[0],s=0;s<r.length;s+=1){const c=ee(e,r,s);o[s]?o[s].p(c,t):(o[s]=re(c),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:e,o:e,d(e){i(o,e),e&&l(n)}}}function se(e,t,n){let{issues:r}=t;return e.$$set=e=>{"issues"in e&&n(0,r=e.issues)},[r]}class ce extends H{constructor(e){super(),F(this,e,se,oe,s,{issues:0})}}function ae(e,t,n){const r=e.slice();return r[4]=t[n],r}function le(e,t,n){const r=e.slice();return r[1]=t[n],r}function ie(e){let t,n,r,o,s,i,p,h,$,b,v,y,_,w,x,k,j,N,E,S,C,A,P,R=e[1].title+"",q=e[1].body+"",z=J("registered")+"",B=K(e[1].created_at)+"",L=J("updated")+"",I=K(e[1].updated_at)+"",O=J("closed")+"",T=K(e[1].closed_at)+"";return{c(){t=u("div"),n=u("div"),r=d(R),o=f(),s=u("div"),i=u("div"),p=d(q),h=f(),$=u("div"),b=u("div"),v=d(z),y=d(":\r\n          "),_=d(B),w=d("\r\n          -\r\n          "),x=d(L),k=d(":\r\n          "),j=d(I),N=d("\r\n          -\r\n          "),E=d(O),S=d(":\r\n          "),C=d(T),A=f(),P=u("hr"),m(n,"class","col-md-12 incident-title svelte-1lsnqto"),m(t,"class","row incident"),m(i,"class","col-md-12"),m(s,"class","row"),m(b,"class","col-md-12"),m($,"class","row incident-update svelte-1lsnqto")},m(e,l){a(e,t,l),c(t,n),c(n,r),a(e,o,l),a(e,s,l),c(s,i),c(i,p),a(e,h,l),a(e,$,l),c($,b),c(b,v),c(b,y),c(b,_),c(b,w),c(b,x),c(b,k),c(b,j),c(b,N),c(b,E),c(b,S),c(b,C),a(e,A,l),a(e,P,l)},p(e,t){1&t&&R!==(R=e[1].title+"")&&g(r,R),1&t&&q!==(q=e[1].body+"")&&g(p,q),1&t&&B!==(B=K(e[1].created_at)+"")&&g(_,B),1&t&&I!==(I=K(e[1].updated_at)+"")&&g(j,I),1&t&&T!==(T=K(e[1].closed_at)+"")&&g(C,T)},d(e){e&&l(t),e&&l(o),e&&l(s),e&&l(h),e&&l($),e&&l(A),e&&l(P)}}}function ue(e){let t,n="incident"==e[4].name&&ie(e);return{c(){n&&n.c(),t=p()},m(e,r){n&&n.m(e,r),a(e,t,r)},p(e,r){"incident"==e[4].name?n?n.p(e,r):(n=ie(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&l(t)}}}function de(e){let t,n=e[1].labels,r=[];for(let t=0;t<n.length;t+=1)r[t]=ue(ae(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=p()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);a(e,t,n)},p(e,o){if(1&o){let s;for(n=e[1].labels,s=0;s<n.length;s+=1){const c=ae(e,n,s);r[s]?r[s].p(c,o):(r[s]=ue(c),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){i(r,e),e&&l(t)}}}function fe(t){let n,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=de(le(t,r,e));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();n=p()},m(e,t){for(let n=0;n<o.length;n+=1)o[n].m(e,t);a(e,n,t)},p(e,[t]){if(1&t){let s;for(r=e[0],s=0;s<r.length;s+=1){const c=le(e,r,s);o[s]?o[s].p(c,t):(o[s]=de(c),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:e,o:e,d(e){i(o,e),e&&l(n)}}}function pe(e,t,n){let{issues:r}=t;return e.$$set=e=>{"issues"in e&&n(0,r=e.issues)},[r]}class me extends H{constructor(e){super(),F(this,e,pe,fe,s,{issues:0})}}function ge(t){let n,r;return n=new W({props:{type:"danger",message:t[2]}}),{c(){I(n.$$.fragment)},m(e,t){O(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){B(n.$$.fragment,e),r=!1},d(e){T(n,e)}}}function he(t){let n,r,o,s,c,i,d,p;return o=new ce({props:{issues:t[1]}}),d=new me({props:{issues:t[1]}}),{c(){n=u("div"),n.textContent=""+J("component"),r=f(),I(o.$$.fragment),s=f(),c=u("div"),c.textContent=""+J("incident"),i=f(),I(d.$$.fragment),m(n,"class","row section svelte-1oyxeyu"),m(c,"class","row section svelte-1oyxeyu")},m(e,t){a(e,n,t),a(e,r,t),O(o,e,t),a(e,s,t),a(e,c,t),a(e,i,t),O(d,e,t),p=!0},p:e,i(e){p||(z(o.$$.fragment,e),z(d.$$.fragment,e),p=!0)},o(e){B(o.$$.fragment,e),B(d.$$.fragment,e),p=!1},d(e){e&&l(n),e&&l(r),T(o,e),e&&l(s),e&&l(c),e&&l(i),T(d,e)}}}function $e(t){let n,r;return n=new W({props:{type:"primary",message:J("loading")+"..."}}),{c(){I(n.$$.fragment)},m(e,t){O(n,e,t),r=!0},p:e,i(e){r||(z(n.$$.fragment,e),r=!0)},o(e){B(n.$$.fragment,e),r=!1},d(e){T(n,e)}}}function be(e){let t,n,r,o={ctx:e,current:null,token:null,hasCatch:!0,pending:$e,then:he,catch:ge,value:1,error:2,blocks:[,,,]};return L(n=e[0],o),{c(){t=p(),o.block.c()},m(e,n){a(e,t,n),o.block.m(e,o.anchor=n),o.mount=()=>t.parentNode,o.anchor=t,r=!0},p(t,[n]){{const r=(e=t).slice();r[1]=r[2]=o.resolved,o.block.p(r,n)}},i(e){r||(z(o.block),r=!0)},o(e){for(let e=0;e<3;e+=1){B(o.blocks[e])}r=!1},d(e){e&&l(t),o.block.d(e),o.token=null,o=null}}}function ve(e){y((async()=>{}));return[(async()=>{let e="https://api.github.com/repos/ricardomaia/statuspage/issues?state=all";e="issues.json";const t=await fetch("issues.json");if(t.ok)return t.json();if("404"==t.status)throw Error("Network error");if("403"==t.status){let e=K(new Date(1e3*t.headers.get("X-RateLimit-Reset")));throw Error(`${J(t.statusText)} ${J("reset_time")} ${e}`)}})()]}class ye extends H{constructor(e){super(),F(this,e,ve,be,s,{})}}function _e(t){let n,r,o,s,i,p,h,$=J("reloading_in")+"",b=J("seconds")+"";return{c(){n=u("div"),r=d($),o=d(":\r\n  "),s=d(t[0]),i=f(),p=d(b),h=d("."),m(n,"class","row page-refresh svelte-1vkkpn1")},m(e,t){a(e,n,t),c(n,r),c(n,o),c(n,s),c(n,i),c(n,p),c(n,h)},p(e,[t]){1&t&&g(s,e[0])},i:e,o:e,d(e){e&&l(n)}}}function we(e,t,n){let r=0;let o;return y((async()=>{setInterval((()=>{o>0&&n(1,r++,r),o<=0&&location.reload()}),1e3)})),e.$$.update=()=>{2&e.$$.dirty&&n(0,o=60-r)},[o]}class xe extends H{constructor(e){super(),F(this,e,we,_e,s,{})}}function ke(t){let n;return{c(){n=u("div"),n.textContent="logo",m(n,"class","logo svelte-1c052gy")},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}class je extends H{constructor(e){super(),F(this,e,null,ke,s,{})}}function Ne(t){let n,r,o,s,i,d,p,g;return o=new je({}),p=new xe({}),{c(){n=u("div"),r=u("div"),I(o.$$.fragment),s=u("span"),s.textContent=""+J("service_status"),i=f(),d=u("div"),I(p.$$.fragment),m(s,"class","app-title svelte-oh5hlr"),m(r,"class","col-md-8"),m(d,"class","col-md-4"),m(n,"class","row")},m(e,t){a(e,n,t),c(n,r),O(o,r,null),c(r,s),c(n,i),c(n,d),O(p,d,null),g=!0},p:e,i(e){g||(z(o.$$.fragment,e),z(p.$$.fragment,e),g=!0)},o(e){B(o.$$.fragment,e),B(p.$$.fragment,e),g=!1},d(e){e&&l(n),T(o),T(p)}}}class Ee extends H{constructor(e){super(),F(this,e,null,Ne,s,{})}}function Se(t){let n;return{c(){n=u("div"),n.innerHTML='<div class="col"><a class="github-button" href="https://github.com/ricardomaia" data-size="large" data-show-count="true" aria-label="Follow @ricardomaia on GitHub">@ricardomaia</a></div> \n  <div class="col powered svelte-1y2kqgw">Powered by\n    <a href="https://github.com/ricardomaia/statuspage" target="_blank">Status Page</a></div>',m(n,"class","row")},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}class Ce extends H{constructor(e){super(),F(this,e,null,Se,s,{})}}function Ae(t){let n,r,o,s,i,d,p,g,h,$;return i=new Ee({}),p=new ye({}),h=new Ce({}),{c(){n=u("script"),o=f(),s=u("div"),I(i.$$.fragment),d=f(),I(p.$$.fragment),g=f(),I(h.$$.fragment),n.async=!0,n.defer=!0,n.src!==(r="https://buttons.github.io/buttons.js")&&m(n,"src","https://buttons.github.io/buttons.js"),m(s,"id","wrapper"),m(s,"class","svelte-trf69a")},m(e,t){c(document.head,n),a(e,o,t),a(e,s,t),O(i,s,null),c(s,d),O(p,s,null),c(s,g),O(h,s,null),$=!0},p:e,i(e){$||(z(i.$$.fragment,e),z(p.$$.fragment,e),z(h.$$.fragment,e),$=!0)},o(e){B(i.$$.fragment,e),B(p.$$.fragment,e),B(h.$$.fragment,e),$=!1},d(e){l(n),e&&l(o),e&&l(s),T(i),T(p),T(h)}}}return new class extends H{constructor(e){super(),F(this,e,null,Ae,s,{})}}({target:document.querySelector("#app")})}();
//# sourceMappingURL=bundle.js.map
