var TsAlgorithms=(()=>{var o=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var g=(n,e)=>{for(var t in e)o(n,t,{get:e[t],enumerable:!0})},y=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of T(e))!k.call(n,r)&&r!==t&&o(n,r,{get:()=>e[r],enumerable:!(i=f(e,r))||i.enumerable});return n};var V=n=>y(o({},"__esModule",{value:!0}),n);var v={};g(v,{craeteLinkedNode:()=>a,createGraph:()=>G,createGraphEdge:()=>p,createGraphVertex:()=>l,createLinkedList:()=>S,createStack:()=>m});function l(n,e){return{value:n,key:e(n)}}function p(n,e,t=0){return{startVertex:n,endVertex:e,weight:t}}function G(n=!1){let e=[],t=[];return Object.freeze({isDirected:n,get vertices(){return e},get edges(){return t},createGraphEdge:p,createGraphVertex:l,addVertex(r){let s=this.getVertex(r.key);return s?(s.value=r.value,this):(e.push(r),this)},getVertex(r){return e.find(s=>s.key===r)},addEdge(r){return this.addVertex(r.startVertex).addVertex(r.endVertex).edges.push(r),this},neighbors(r){return this.edges.filter(s=>s.startVertex===r||s.endVertex===r)},toJSON(){let{isDirected:r}=this,s=e.map(h=>{let{key:u,value:d}=h;return{key:u,value:d}}),c=t.map(h=>{let{startVertex:u,endVertex:d,weight:x}=h;return{start:u.key,end:d.key,weight:x}});return{isDirected:r,vertices:s,edges:c}}})}function m(n){let e=[];return n&&Array.isArray(n)&&n.length&&e.push(...n),{push(i){e.push(i)},pop(){return e.pop()},peek(){return e[0]},isEmpty(){return e.length===0},size(){return e.length},clear(){e.length=0},toArray(){return e.slice()},toString(){return e.join(", ")}}}function a(n){return{value:n,next:null}}function S(){return{head:null,tail:null,prepend(e){let t=a(e);return this.head=t,!this.tail&&(this.tail=t),this},append(e){let t=a(e);return this.head?(this.tail&&(this.tail.next=t),this.tail=t,this):(this.head=t,this.tail=t,this)},insert:function(e,t){if(t=Math.max(0,t),t===0)this.prepend(e);else{let i={index:1,current:this.head},r=a(e);for(;i.current&&i.index!==t;)i.index++,i.current=i.current.next;i.current?(r.next=i.current,i.current=r):this.tail?(this.tail.next=r,this.tail=r):(this.head=r,this.tail=r)}return this},find(e){if(!this.head)return null;let t=this.head;for(;t;){if(t.value===e)return t;t=t.next}return null},delete(e){if(!this.head)return null;let t=this.head;for(;t&&t.next;){if(t.next.value===e){t.next=t.next.next;break}t=t.next}return this},deleteHead(){return this.head?(this.head=this.head.next,this):null},deleteTail(){if(!this.head||!this.tail)return null;let e=this.head;for(;e.next!==this.tail&&e.next;)e=e.next;return this.tail=e,this}}}return V(v);})();
