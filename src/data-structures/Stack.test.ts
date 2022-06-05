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
    expect(stack.items.length).toBe(1);
    expect(stack.toString()).toBe("[1]");
  });

  it("pop 方法", () => {
    const stack = createStack();
    stack.push(1);
    stack.push(2);

    const value = stack.pop();
    expect(value).toBe(2);
    expect(stack.items.length).toBe(1);
    expect(stack.toString()).toBe("[1]");
  });

  it("items 得到预期的值", () => {
    const stack = createStack();
    stack.push(1);

    expect(stack.items).toEqual([1]);
    expect(stack.items.length).toBe(1);
    stack.push(2);

    expect(stack.items).toEqual([1, 2]);
    expect(stack.items.length).toBe(2);
  });

  it("items 为 readonly", () => {
    const stack = createStack();
    stack.push(1);

    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      stack.items = [];
    }).toThrowError();
  });

  it("toString 方法", () => {
    const stack = createStack();
    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe("[1,2]");
  });
});
