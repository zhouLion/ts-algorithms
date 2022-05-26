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

// src/data-structures/Stack.ts
var Stack_exports = {};
__export(Stack_exports, {
  createStack: () => createStack
});
module.exports = __toCommonJS(Stack_exports);
function createStack(initialList) {
  const list = [];
  if (initialList && Array.isArray(initialList) && initialList.length) {
    list.push(...initialList);
  }
  const stack = {
    push(item) {
      list.push(item);
    },
    pop() {
      return list.pop();
    },
    peek() {
      return list[0];
    },
    isEmpty() {
      return list.length === 0;
    },
    size() {
      return list.length;
    },
    clear() {
      list.length = 0;
    },
    toArray() {
      return list.slice();
    },
    toString() {
      return list.join(", ");
    }
  };
  return stack;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createStack
});
