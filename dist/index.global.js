var TsAlgorithms=(()=>{var d=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var y=(r,e)=>{for(var t in e)d(r,t,{get:e[t],enumerable:!0})},L=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of k(e))!g.call(r,n)&&n!==t&&d(r,n,{get:()=>e[n],enumerable:!(i=f(e,n))||i.enumerable});return r};var b=r=>L(d({},"__esModule",{value:!0}),r);var D={};y(D,{craeteLinkedNode:()=>l,createDoublyLinkedList:()=>G,createDoublyLinkedListNode:()=>o,createGraph:()=>N,createGraphEdge:()=>c,createGraphVertex:()=>p,createLinkedList:()=>v,createQueue:()=>m,createStack:()=>V});function p(r,e){return{value:r,key:e(r)}}function c(r,e,t=0){return{startVertex:r,endVertex:e,weight:t}}function N(r=!1){let e=[],t=[];return Object.freeze({isDirected:r,get vertices(){return e},get edges(){return t},createGraphEdge:c,createGraphVertex:p,addVertex(n){let s=this.getVertex(n.key);return s?(s.value=n.value,this):(e.push(n),this)},getVertex(n){return e.find(s=>s.key===n)},addEdge(n){return this.addVertex(n.startVertex).addVertex(n.endVertex).edges.push(n),this},neighbors(n){return this.edges.filter(s=>s.startVertex===n||s.endVertex===n)},toJSON(){let{isDirected:n}=this,s=e.map(u=>{let{key:h,value:a}=u;return{key:h,value:a}}),x=t.map(u=>{let{startVertex:h,endVertex:a,weight:T}=u;return{start:h.key,end:a.key,weight:T}});return{isDirected:n,vertices:s,edges:x}}})}function V(r){let e=[];return r&&Array.isArray(r)&&r.length&&e.push(...r),{push(i){e.push(i)},pop(){return e.pop()},peek(){return e[0]},isEmpty(){return e.length===0},size(){return e.length},clear(){e.length=0},toArray(){return e.slice()},toString(){return e.join(", ")}}}function l(r){return{value:r,next:null}}function v(){return{head:null,tail:null,prepend(e){let t=l(e);return this.head=t,!this.tail&&(this.tail=t),this},append(e){let t=l(e);return this.head?(this.tail&&(this.tail.next=t),this.tail=t,this):(this.head=t,this.tail=t,this)},insert:function(e,t){if(t=Math.max(0,t),t===0)this.prepend(e);else{let i={index:1,current:this.head},n=l(e);for(;i.current&&i.index!==t;)i.index++,i.current=i.current.next;i.current?(n.next=i.current,i.current=n):this.tail?(this.tail.next=n,this.tail=n):(this.head=n,this.tail=n)}return this},find(e){if(!this.head)return null;let t=this.head;for(;t;){if(t.value===e)return t;t=t.next}return null},delete(e){if(!this.head)return null;let t=this.head;for(;t&&t.next;){if(t.next.value===e){t.next=t.next.next;break}t=t.next}return this},deleteHead(){return this.head?(this.head=this.head.next,this):null},deleteTail(){if(!this.head||!this.tail)return null;let e=this.head;for(;e.next!==this.tail&&e.next;)e=e.next;return this.tail=e,this}}}function o(r,e=null,t=null){return{value:r,next:e,previous:t}}function G(){return{head:null,tail:null,prepend(r){let e=o(r);return this.head?this.head.previous=e:this.head=e,this.tail||(this.tail=e),this},append(r){let e=o(r);return this.head?(this.tail||(this.tail=e),this.tail.next=e,e.previous=this.tail,this.tail=e,this):(this.head=e,this.tail=e,this)},delete(r){if(!this.head)return null;let e=null,t=this.head;for(;t;){if(t.value===r){e=t;break}t=t.next}},deleteHead(){if(!this.head)return null;let r=this.head;return this.head.next?(this.head=this.head.next,this.head.previous=null):this.head=this.tail=null,r},deleteTail(){if(!this.tail)return null;if(this.head===this.tail){let e=this.tail;return this.head=this.tail=null,e}let r=this.tail;return this.tail=this.tail.previous,this.tail.next=null,r}}}function m(){let r=[];return Object.freeze({get list(){return r},get length(){return r.length},peek(){return this.length===0?null:r[0]},enqueue(...e){return r.push(...e),this},dequeue(){return r.length===0?null:r.shift()},toString(){return`Queue(${r.join(", ")})`}})}return b(D);})();
