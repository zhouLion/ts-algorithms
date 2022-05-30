declare type DoublyLinkedListNode<T> = {
    value: T;
    next: DoublyLinkedListNode<T> | null;
    previous: DoublyLinkedListNode<T> | null;
};
declare function createDoublyLinkedListNode<T>(value: T, next?: null, previous?: null): DoublyLinkedListNode<T>;
declare function createDoublyLinkedList<T>(): {
    head: DoublyLinkedListNode<T> | null;
    tail: DoublyLinkedListNode<T> | null;
    prepend(value: T): {
        head: DoublyLinkedListNode<T> | null;
        tail: DoublyLinkedListNode<T> | null;
        prepend(value: T): any;
        append(value: T): any;
        delete(value: T): null | undefined;
        deleteHead(): DoublyLinkedListNode<T> | null;
        deleteTail(): DoublyLinkedListNode<T> | null;
    };
    append(value: T): {
        head: DoublyLinkedListNode<T> | null;
        tail: DoublyLinkedListNode<T> | null;
        prepend(value: T): any;
        append(value: T): any;
        delete(value: T): null | undefined;
        deleteHead(): DoublyLinkedListNode<T> | null;
        deleteTail(): DoublyLinkedListNode<T> | null;
    };
    delete(value: T): null | undefined;
    deleteHead(): DoublyLinkedListNode<T> | null;
    deleteTail(): DoublyLinkedListNode<T> | null;
};

export { DoublyLinkedListNode, createDoublyLinkedList, createDoublyLinkedListNode };
