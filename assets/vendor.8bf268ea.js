function l(){}function A(t){return t()}function q(){return Object.create(null)}function _(t){t.forEach(A)}function z(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function M(t,...e){if(t==null)return l;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function R(t,e,n){t.$$.on_destroy.push(M(e,n))}function U(t,e){t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function W(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function Y(){return C(" ")}function Z(){return C("")}function tt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t){return Array.from(t.childNodes)}function nt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function st(t,e){t.value=e==null?"":e}function rt(t,e,n){t.classList[n?"add":"remove"](e)}let $;function p(t){$=t}const m=[],L=[],g=[],N=[],F=Promise.resolve();let x=!1;function G(){x||(x=!0,F.then(O))}function w(t){g.push(t)}const E=new Set;let b=0;function O(){const t=$;do{for(;b<m.length;){const e=m[b];b++,p(e),H(e.$$)}for(p(null),m.length=0,b=0;L.length;)L.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];E.has(n)||(E.add(n),n())}g.length=0}while(m.length);for(;N.length;)N.pop()();x=!1,E.clear(),p(t)}function H(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const y=new Set;let a;function ut(){a={r:0,c:[],p:a}}function ot(){a.r||_(a.c),a=a.p}function I(t,e){t&&t.i&&(y.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(y.has(t))return;y.add(t),a.c.push(()=>{y.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function it(t){t&&t.c()}function J(t,e,n,r){const{fragment:u,on_mount:h,on_destroy:f,after_update:o}=t.$$;u&&u.m(e,n),r||w(()=>{const c=h.map(A).filter(z);f?f.push(...c):_(c),t.$$.on_mount=[]}),o.forEach(w)}function K(t,e){const n=t.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){t.$$.dirty[0]===-1&&(m.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(t,e,n,r,u,h,f,o=[-1]){const c=$;p(t);const s=t.$$={fragment:null,ctx:null,props:h,update:l,not_equal:u,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};f&&f(s.root);let k=!1;if(s.ctx=n?n(t,e.props||{},(i,j,...v)=>{const S=v.length?v[0]:j;return s.ctx&&u(s.ctx[i],s.ctx[i]=S)&&(!s.skip_bound&&s.bound[i]&&s.bound[i](S),k&&Q(t,i)),j}):[],s.update(),k=!0,_(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const i=D(e.target);s.fragment&&s.fragment.l(i),i.forEach(P)}else s.fragment&&s.fragment.c();e.intro&&I(t.$$.fragment),J(t,e.target,e.anchor,e.customElement),O()}p(c)}class at{$destroy(){K(this,1),this.$destroy=l}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const d=[];function lt(t,e=l){let n;const r=new Set;function u(o){if(T(t,o)&&(t=o,n)){const c=!d.length;for(const s of r)s[1](),d.push(s,t);if(c){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function h(o){u(o(t))}function f(o,c=l){const s=[o,c];return r.add(s),r.size===1&&(n=e(u)||l),o(t),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:u,update:h,subscribe:f}}export{at as S,V as a,U as b,Z as c,P as d,X as e,Y as f,nt as g,W as h,ft as i,it as j,et as k,rt as l,st as m,l as n,J as o,tt as p,I as q,ct as r,T as s,C as t,K as u,R as v,lt as w,ot as x,ut as y};