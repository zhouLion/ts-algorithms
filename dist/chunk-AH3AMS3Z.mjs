var i=()=>{let t=[];return{put:(...e)=>t.unshift.bind(t,...e),poll:()=>t.pop(),valueof:()=>Object.freeze(t),toString:()=>`[${t.join(", ")}]`}};export{i as a};
