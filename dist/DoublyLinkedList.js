var s=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var o=(t,e)=>{for(var i in e)s(t,i,{get:e[i],enumerable:!0})},r=(t,e,i,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of u(e))!a.call(t,l)&&l!==i&&s(t,l,{get:()=>e[l],enumerable:!(d=h(e,l))||d.enumerable});return t};var L=t=>r(s({},"__esModule",{value:!0}),t);var p={};o(p,{createDoublyLinkedList:()=>T,createDoublyLinkedListNode:()=>n});module.exports=L(p);function n(t,e=null,i=null){return{value:t,next:e,previous:i}}function T(){return{head:null,tail:null,prepend(t){let e=n(t);return this.head?this.head.previous=e:this.head=e,this.tail||(this.tail=e),this},append(t){let e=n(t);return this.head?(this.tail||(this.tail=e),this.tail.next=e,e.previous=this.tail,this.tail=e,this):(this.head=e,this.tail=e,this)},delete(t){if(!this.head)return null;let e=null,i=this.head;for(;i;){if(i.value===t){e=i;break}i=i.next}},deleteHead(){if(!this.head)return null;let t=this.head;return this.head.next?(this.head=this.head.next,this.head.previous=null):this.head=this.tail=null,t},deleteTail(){if(!this.tail)return null;if(this.head===this.tail){let e=this.tail;return this.head=this.tail=null,e}let t=this.tail;return this.tail=this.tail.previous,this.tail.next=null,t}}}0&&(module.exports={createDoublyLinkedList,createDoublyLinkedListNode});
