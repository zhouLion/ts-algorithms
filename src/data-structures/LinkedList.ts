export type LinkedNode<T> = {
  value: T;
  next: LinkedNode<T> | null;
}

/**
 * @description
 * # 链表
 * 在计算机科学中, 一个 **链表** 是数据元素的线性集合, 元素的线性顺序不是由它们在内存中的物理位置给出的。
 *
 * 相反, 每个元素指向下一个元素。它是由一组节点组成的数据结构,这些节点一起,表示序列。
 *
 * 在最简单的形式下，每个节点由数据和到序列中下一个节点的引用(换句话说，链接)组成。
 *
 * 这种结构允许在迭代期间有效地从序列中的任何位置插入或删除元素。
 *
 * 更复杂的变体添加额外的链接，允许有效地插入或删除任意元素引用。
 *
 * 链表的一个缺点是访问时间是线性的(而且难以管道化)。
 *
 * 更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置。
 */
export type LinkedList<T> = {
  head: LinkedNode<T> | null;
  tail: LinkedNode<T> | null;
  size: number;
  /**
   * 将元素插入到链表的头部
   * @param value
   * @description
   * ```
   * append(value)
   *  执行前: value 是要添加到列表的值
   *  执行后: value 被放置到列表的尾部
   *  另 n 为 构建的 LinkedListNode(value)
   *  如果 head 为 空
   *    另 head 为 n
   *    且 tail 为 n
   *  否则
   *    另 tail.next 为 n
   *    且 tail 为 n
   *```
   */
  append(value: T): LinkedList<T>;

  /**
   * 将元素添加到链表的尾部
   * @param value
   * @description
   * ```
   * prepend(value)
      执行前: value 是要添加到列表的值
      执行后: value 被放置到列表的头部
      另 n 为 构建的 LinkedListNode(value)
      且 n.next 为 head
      且 head 为 n
      如果 tail 为空
        另 tail 为 n
   * ```
   */
  prepend(value: T): LinkedList<T>;

  /**
   * 将元素插入到链表的指定位置
   * @param value
   * @param index
   * @description
   * ```
   * insert(value, index)
   *  执行前: value 是要添加到列表的值
   *         index 是要添加到列表的位置
   *  执行后: value 被放置到列表的指定位置
   *  另 n 为 构建的 LinkedListNode(value)
   *  如果 index = 0
   *    另 n.next 为 head
   *    且 head 为 n
   *    如果 tail 为空
   *      另 tail 为 n
   *  否则
   *    另 i 为 1
   *    只要 i < index，就循环
   *      另 i 为 i + 1
   *      且 p 为 p.next
   *    另 n.next 为 p.next
   *    且 p.next 为 n
   *    如果 tail 为 p
   *      另 tail 为 n
   * ```
   */
  insert(value: T, index: number): LinkedList<T>;

  /**
   * 搜索链表中的元素
   * @param value
   * @description
   * ```
   * contains(value)
   *  执行前: value 是要搜索的值
   *  执行后: 返回值为 true 或 false
   *  另 n 为 head
   *  只要 n 不为空且 n.value 不等于 value，就循环
   *    另 n 为 n.next
   *  如果 n 为空
   *    直接返回值 false
   *  否则
   *    直接返回值 true
   * ```
   */
  contains(value: T): boolean;

  /**
   * 移除链表中的元素
   * @param value
   * @description
   * ```
   * remove(value)
   *  执行前: value 是要删除的值
   *  执行后: value 若从链表删除, 返回 true, 否则返回 false
   *  另 n 为 head
   *  如果 n.value 为 value
   *    如果 head = tail
   *      另 head 为 ø
   *      且 tail 为 ø
   *    否则
   *      另 head 为 head.next
   *    返回 true
   *  只要 n.next 不为空 且 n.next.value 不等于 value，就循环
   *    另 n 为 n.next
   *  如果 n.next 不为空
   *    如果 n.next = tail
   *      另 tail 为 n
   *    另 n.next 为 n.next.next
   *    返回 true
   *  返回 false
   *```
   */
  remove(value: T): boolean;

  /**
   *
   * @param head
   */
  traverse(head: LinkedNode<T>): T[];
  reverseTraversal(head: LinkedNode<T>, tail: LinkedNode<T>): T[];
  toArray(): T[];
  fromArray(array: T[]): void;
  toString(): string;
}

export function craeteLinkedNode<T>(value: T): LinkedNode<T> {
  return {
    value,
    next: null,
  };
}

export function createLinkedList<T>(): LinkedList<T>;
export function createLinkedList<T>(): LinkedList<T> {
  const linkedList: LinkedList<T> = {
    head: null,
    tail: null,
    prepend(value: T) {
      const node = craeteLinkedNode(value);
      const { head, tail } = this
      node.next = head;
      this.head = node;
      if (!tail) {
        this.tail = node;
      }
      return this;
    },
    append(value: T) {
      debugger
      const node = craeteLinkedNode(value);
      const { head } = this
      if (!head) {
        this.head = node;
        this.tail = node;
        return this;
      }
      this.tail = node;
      this.tail.next = node;
      return this;
    },
    insert: function (value: T, index: number): LinkedList<T> {
      throw new Error("Function not implemented.");
    },
    contains: function (head: LinkedNode<T>, value: T): boolean {
      throw new Error("Function not implemented.");
    },
    remove: function (head: LinkedNode<T>, value: T): boolean {
      throw new Error("Function not implemented.");
    },
    traverse: function (head: LinkedNode<T>): T[] {
      throw new Error("Function not implemented.");
    },
    reverseTraversal: function (head: LinkedNode<T>, tail: LinkedNode<T>): T[] {
      throw new Error("Function not implemented.");
    },
    toArray: function (): T[] {
      throw new Error("Function not implemented.");
    },
    fromArray: function (array: T[]): void {
      throw new Error("Function not implemented.");
    },
  };
  return linkedList;
}
