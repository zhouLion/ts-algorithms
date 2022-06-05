import { describe, expect, it } from "vitest";
import {
  createLinkedList,
  // craeteLinkedNode,
} from "./LinkedList";

describe('🧪 LinkedList', () => {
  it('初始化创建时，head 与 tail 相等', () => {
    const linkedList = createLinkedList();
    expect(linkedList.head.value).toBeNull();
    expect(linkedList.tail.value).toBeNull();
    expect(linkedList.head).toEqual(linkedList.tail);
  });

  it('测试方法 append 是否生效', () => {
    const linkedList = createLinkedList();

    linkedList.append(1);

    expect(linkedList.head.value).toBe('1');
    expect(linkedList.tail.next).toBeNull();
  });
});
