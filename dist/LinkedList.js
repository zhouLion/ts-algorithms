var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/data-structures/LinkedList.ts
var LinkedList_exports = {};
__export(LinkedList_exports, {
  craeteLinkedNode: () => craeteLinkedNode,
  createLinkedList: () => createLinkedList
});
module.exports = __toCommonJS(LinkedList_exports);
function craeteLinkedNode(value) {
  return {
    value,
    next: null
  };
}
function createLinkedList() {
  const linkedList = {
    head: null,
    tail: null,
    prepend(value) {
      const node = craeteLinkedNode(value);
      this.head = node;
      !this.tail && (this.tail = node);
      return this;
    },
    append(value) {
      const node = craeteLinkedNode(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      }
      this.tail && (this.tail.next = node);
      this.tail = node;
      return this;
    },
    insert: function(value, index) {
      index = Math.max(0, index);
      if (index === 0) {
        this.prepend(value);
      } else {
        const pointer = {
          index: 1,
          current: this.head
        };
        const node = craeteLinkedNode(value);
        while (pointer.current) {
          if (pointer.index === index)
            break;
          pointer.index++;
          pointer.current = pointer.current.next;
        }
        if (pointer.current) {
          node.next = pointer.current;
          pointer.current = node;
        } else {
          if (this.tail) {
            this.tail.next = node;
            this.tail = node;
          } else {
            this.head = node;
            this.tail = node;
          }
        }
      }
      return this;
    },
    find(value) {
      if (!this.head)
        return null;
      let current = this.head;
      while (current) {
        if (current.value === value)
          return current;
        current = current.next;
      }
      return null;
    },
    delete(value) {
      if (!this.head)
        return null;
      let current = this.head;
      while (current) {
        if (!current.next)
          break;
        if (current.next.value === value) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
      return this;
    },
    deleteHead() {
      if (!this.head)
        return null;
      this.head = this.head.next;
      return this;
    },
    deleteTail() {
      if (!this.head)
        return null;
      if (!this.tail)
        return null;
      let current = this.head;
      while (current.next !== this.tail) {
        if (!current.next)
          break;
        current = current.next;
      }
      this.tail = current;
      return this;
    }
  };
  return linkedList;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  craeteLinkedNode,
  createLinkedList
});
