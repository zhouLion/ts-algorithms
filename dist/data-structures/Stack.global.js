var TsAlgorithms=(()=>{var s=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var i=(o,n)=>{for(var e in n)s(o,e,{get:n[e],enumerable:!0})},k=(o,n,e,p)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of c(n))!a.call(o,t)&&t!==e&&s(o,t,{get:()=>n[t],enumerable:!(p=r(n,t))||p.enumerable});return o};var l=o=>k(s({},"__esModule",{value:!0}),o);var S={};i(S,{createStack:()=>v});var v=()=>{let o=[];return{push:(...u)=>o.push.bind(o,...u),pop:()=>o.pop(),valueof:()=>Object.freeze(o),toString:()=>`[${o.join(", ")}]`}};return l(S);})();
