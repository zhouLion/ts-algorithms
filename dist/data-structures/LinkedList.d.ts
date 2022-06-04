declare type LinkedNode<T> = {
    value: T;
    next: LinkedNode<T> | null;
};
declare function craeteLinkedNode<T>(value: T): LinkedNode<T>;
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
