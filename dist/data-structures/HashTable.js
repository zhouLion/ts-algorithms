var h=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var b=(c,n)=>{for(var r in n)h(c,r,{get:n[r],enumerable:!0})},k=(c,n,r,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let d of l(n))!g.call(c,d)&&d!==r&&h(c,d,{get:()=>n[d],enumerable:!(i=f(n,d))||i.enumerable});return c};var y=c=>k(h({},"__esModule",{value:!0}),c);var v={};b(v,{craeteHashTable:()=>p});module.exports=y(v);var p=(c=32)=>{let n={},r=Array(c).fill(()=>[]),i=e=>Array.from(e).reduce((u,s)=>u+s.charCodeAt(0),0)%r.length;return{get:e=>{let t=n[e];if(!t)return;let s=r[t].find(o=>o.key===e);return s?s.value:void 0},set:(e,t)=>{let u=i(e);n[e]=u;let s=r[u],o=s.find(a=>a.key===e);o?o.value=t:s.push({key:e,value:t})},has:e=>n[e]!==void 0,delete:e=>{let t=n[e];if(!t)return;let u=r[t],s=u.find(o=>o.key===e);if(!!s&&s){let o=u.splice(u.indexOf(s),1);return delete n[e],o}},get keys(){return n},get length(){return Object.values(r).reduce((e,t)=>t.length+e,0)}}};0&&(module.exports={craeteHashTable});
