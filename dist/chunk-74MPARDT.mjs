function u(){let e=[];return Object.freeze({get list(){return e},get length(){return e.length},peek(){return this.length===0?null:e[0]},enqueue(...t){return e.push(...t),this},dequeue(){return e.length===0?null:e.shift()},toString(){return`Queue(${e.join(", ")})`}})}export{u as a};