import { describe, expect, it } from "vitest";
import { createQueue } from "./Queue";

describe("🧪 Queue", () => {
  it("初始化创建时，值为空", () => {
    const queue = createQueue();

    expect(queue.items).toEqual([]);
    expect(queue.toString()).toEqual("[]");
  });

  it("put 方法", () => {
    const queue = createQueue();
    queue.put(1);
    expect(queue.items).toEqual([1]);
    expect(queue.toString()).toEqual("[1]");
  });

  it("poll 方法，FIFO", () => {
    const queue = createQueue();
    queue.put(1);
    queue.put(2);
    const result = queue.poll();

    expect(result).toEqual(1);
    expect(queue.items).toEqual([2]);
    expect(queue.toString()).toEqual("[2]");
  });

  it("poll 一个空队列，返回 undefined", () => {
    const queue = createQueue();
    const result = queue.poll();

    expect(result).toBeUndefined();
    expect(queue.items).toEqual([]);
    expect(queue.toString()).toEqual("[]");
  });

  it("items 只读", () => {
    const queue = createQueue();
    queue.put(1);
    queue.put(2);

    expect(() => {
      queue.items.push(3);
    }).toThrowError();

    expect(() => queue.items = []).toThrowError();
  });
});
