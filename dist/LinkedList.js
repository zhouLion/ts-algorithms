var h=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var d=(r,t)=>{for(var e in t)h(r,e,{get:t[e],enumerable:!0})},o=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of u(t))!a.call(r,n)&&n!==e&&h(r,n,{get:()=>t[n],enumerable:!(i=s(t,n))||i.enumerable});return r};var x=r=>o(h({},"__esModule",{value:!0}),r);var f={};d(f,{craeteLinkedNode:()=>l,createLinkedList:()=>c});module.exports=x(f);function l(r){return{value:r,next:null}}function c(){return{head:null,tail:null,prepend(t){let e=l(t);return this.head=e,!this.tail&&(this.tail=e),this},append(t){let e=l(t);return this.head?(this.tail&&(this.tail.next=e),this.tail=e,this):(this.head=e,this.tail=e,this)},insert:function(t,e){if(e=Math.max(0,e),e===0)this.prepend(t);else{let i={index:1,current:this.head},n=l(t);for(;i.current&&i.index!==e;)i.index++,i.current=i.current.next;i.current?(n.next=i.current,i.current=n):this.tail?(this.tail.next=n,this.tail=n):(this.head=n,this.tail=n)}return this},find(t){if(!this.head)return null;let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null},delete(t){if(!this.head)return null;let e=this.head;for(;e&&e.next;){if(e.next.value===t){e.next=e.next.next;break}e=e.next}return this},deleteHead(){return this.head?(this.head=this.head.next,this):null},deleteTail(){if(!this.head||!this.tail)return null;let t=this.head;for(;t.next!==this.tail&&t.next;)t=t.next;return this.tail=t,this}}}0&&(module.exports={craeteLinkedNode,createLinkedList});
