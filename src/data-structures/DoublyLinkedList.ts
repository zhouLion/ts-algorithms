export type DoublyLinkedListNode<T> = {
  value: T;
  next: DoublyLinkedListNode<T> | null;
  previous: DoublyLinkedListNode<T> | null;
};

export function createDoublyLinkedListNode<T>(
  value: T,
  next = null,
  previous = null
): DoublyLinkedListNode<T> {
  return ({
    value,
    next,
    previous,
  });
}

export function createDoublyLinkedList<T>() {
  return ({
    head: null as DoublyLinkedListNode<T> | null,

    tail: null as DoublyLinkedListNode<T> | null,

    prepend(value: T) {
      const node = createDoublyLinkedListNode(value);
      if (this.head) {
        this.head.previous = node;
      } else {
        this.head = node;
      }

      if (!this.tail) {
        this.tail = node;
      }

      return this;
    },

    append(value: T) {
      const node = createDoublyLinkedListNode(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      }

      if (!this.tail) {
        this.tail = node;
      }
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      return this;
    },

    // TODO: Implement find()、 remove()
    // find(query: string | ((data: T) => boolean)) {
    //   if (!this.head) return null;
    //   let current = this.head;
    //   while (current) {
    //     if (typeof query === 'string') {
    //       if (current.value === query) {
    //         return current;
    //       }
    //     } else {
    //       if (query(current.value)) {
    //         return current;
    //       }
    //     }
    //     current = current.next;
    //   }
    //   return null;
    // },

    delete(value: T) {
      if (!this.head) {
        return null;
      }

      let deletedNode: DoublyLinkedListNode<T> | null = null;
      let currentNode: DoublyLinkedListNode<T> | null = this.head;

      while (currentNode) {
        if (currentNode.value === value) {
          deletedNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
    },

    deleteHead() {
      if (!this.head) {
        return null;
      }

      const deletedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
        this.head.previous = null;
      } else {
        this.head = this.tail = null;
      }

      return deletedHead;
    },

    deleteTail() {
      if (!this.tail) {
        return null;
      }

      if (this.head === this.tail) {
        const deletedTail = this.tail;
        this.head = this.tail = null;
        return deletedTail;
      }

      const deletedTail = this.tail;
      this.tail = this.tail.previous as DoublyLinkedListNode<T>;
      this.tail.next = null;
      return deletedTail;
    },
  });
}
