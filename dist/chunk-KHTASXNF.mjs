var c=()=>{let o=[];return{push:(...n)=>o.push.bind(o,...n),pop:()=>o.pop(),valueof:()=>Object.freeze(o),toString:()=>`[${o.join(", ")}]`}};export{c as a};
