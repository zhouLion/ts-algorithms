export type LinkedNode<T> = {
    value: T;
    next: LinkedNode<T> | null;
}

/**
 * @description
 * # 链表
 *
 * 在计算机科学中, 一个 **链表** 是数据元素的线性集合, 元素的线性顺序不是由它们在内存中的物理位置给出的。 相反, 每个元素指向下一个元素。它是由一组节点组成的数据结构,这些节点一起,表示序列。
 *
 * 在最简单的形式下，每个节点由数据和到序列中下一个节点的引用(换句话说，链接)组成。这种结构允许在迭代期间有效地从序列中的任何位置插入或删除元素。
 *
 * 更复杂的变体添加额外的链接，允许有效地插入或删除任意元素引用。链表的一个缺点是访问时间是线性的(而且难以管道化)。
 *
 * 更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置。
 */
export type LinkedList<T> = {
    head: LinkedNode<T> | null;
    tail: LinkedNode<T> | null;
    size: number;
    prepend(value: T): LinkedList<T>;
    append(value: T): LinkedList<T>;
    contains(head: LinkedNode<T>, value: T): boolean;
    remove(head: LinkedNode<T>, value: T): boolean;
    traverse(head: LinkedNode<T>): T[];
    reverseTraversal(head: LinkedNode<T>, tail: LinkedNode<T>): T[];
    toArray(): T[];
    fromArray(array: T[]): void;
    toString(): string;
}

export function craeteLinkedNode<T>(value: T): LinkedNode<T>;
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
        size: 0,
        prepend(value: T) {
            const node = craeteLinkedNode(value);
            linkedList.head = node;
            if (!linkedList.tail) {
                linkedList.tail = node;
            }
            return linkedList;
        },
        append(value: T) {
            const node = craeteLinkedNode(value);

            if (!linkedList.head) {
                linkedList.head = node;
                linkedList.tail = node;

                return linkedList;
            }
            linkedList.tail = node;
            linkedList.tail.next = node;
            return linkedList;
        },
        
    };
    return linkedList;
};