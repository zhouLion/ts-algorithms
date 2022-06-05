import { describe, expect, it } from "vitest";
import { createStack } from "./Stack";

describe("🧪 Stack", () => {
  it("初始化的 stack 应该是空的", () => {
    const stack = createStack();
    expect(stack.items).toEqual([]);
    expect(stack.toString()).toBe("[]");
  });

  it("push 方法", () => {
    const stack = createStack();
    stack.push(1);
    expect(stack.toString()).toBe("[1]");
  });
});
