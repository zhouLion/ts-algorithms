declare type LinkedNode<T> = {
    value: T;
    next: LinkedNode<T> | null;
};
declare function craeteLinkedNode<T>(value: T): LinkedNode<T>;
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
declare function createLinkedList<T>(): {
    head: LinkedNode<T> | null;
    tail: LinkedNode<T> | null;
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
    prepend(value: T): any;
    /**
     * 将元素插入到链表的头部
     * @param value
     * @description
     * ```
     * append(value)
     *  执行前: value 是要添加到列表的值
     *  执行后: value 被放置到列表的尾部
     *  另 n 为 构建的 LinkedListNode(value)
     *  另 head 指向 n
     *  若 tail 为 null, 则 tail 指向 n
     *```
    */
    append(value: T): any;
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
       *  如果 index w为 0
       *    另 调用 prepend(value)
       *  否则
       *    另 n 为 构建的 LinkedListNode(value)
       *    另 i 为 1
       *    将 p 指向 head
       *    只要 p 还有值，就循环
       *      另 i 递增 1
       *      且 将 p 指向 p.next
       *    如果 p 存在
       *      另 n.next 指向 p.next
       *      另 p.next 指向 n
       *   否则
       *      另 head 指向 n
       *      且 tail 指向 n
       * ```
       */
    insert: (value: T, index: number) => any;
    find(value: T): LinkedNode<T> | null;
    delete(value: unknown): any | null;
    deleteHead(): any | null;
    deleteTail(): any | null;
};

export { LinkedNode, craeteLinkedNode, createLinkedList };
