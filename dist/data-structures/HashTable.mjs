var k=(o=32)=>{let c={},u=Array(o).fill(()=>[]),d=e=>Array.from(e).reduce((s,t)=>s+t.charCodeAt(0),0)%u.length;return{get:e=>{let n=c[e];if(!n)return;let t=u[n].find(r=>r.key===e);return t?t.value:void 0},set:(e,n)=>{let s=d(e);c[e]=s;let t=u[s],r=t.find(i=>i.key===e);r?r.value=n:t.push({key:e,value:n})},has:e=>c[e]!==void 0,delete:e=>{let n=c[e];if(!n)return;let s=u[n],t=s.find(r=>r.key===e);if(!!t&&t){let r=s.splice(s.indexOf(t),1);return delete c[e],r}},get keys(){return c},get length(){return Object.values(u).reduce((e,n)=>n.length+e,0)}}};export{k as craeteHashTable};