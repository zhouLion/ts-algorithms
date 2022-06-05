export type LinkedNode<T = unknown> = {
  value: T;
  next: LinkedNode;
}

export function craeteLinkedNode(value: unknown): LinkedNode {
  return {
    value,
    next: null as unknown as LinkedNode,
  };
}

export function createLinkedList<T>() {
  let head = craeteLinkedNode(null);
  let tail = head;

  const linkedList = {
    get head() {
      return head;
    },

    get tail() {
      return tail;
    },

    prepend(value: T) {
      const node = craeteLinkedNode(value);
      head = node;
      !tail && (tail = node);
      return this;
    },

    append(value: T) {
      const node = craeteLinkedNode(value);
      if (!head) {
        head = node;
        tail = node;
        return this;
      }
      tail && (tail.next = node);
      tail = node;
      return this;
    },

    insert(value: T, index: number) {
      index = Math.max(0, index);
      if (index === 0) {
        this.prepend(value);
      } else {
        const pointer = {
          index: 1,
          current: head,
        };
        const node = craeteLinkedNode(value);
        while (pointer.current) {
          if (pointer.index === index) break;
          pointer.index++;
          pointer.current = pointer.current.next;
        }
        if (pointer.current) {
          node.next = pointer.current;
          pointer.current = node;
        } else {
          if (tail) {
            tail.next = node;
            tail = node;
          } else {
            head = node;
            tail = node;
          }
        }
      }
      return this;
    },

    find(value: T) {
      if (!head) return null;
      let current = head;
      while (current) {
        if (current.value === value) return current;
        current = current.next;
      }
      return null;
    },

    delete(value: unknown) {
      if (!head) return null;
      let current = head;
      while (current) {
        if (!current.next) break;
        if (current.next.value === value) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
      return this;
    },

    deleteHead() {
      if (!head) return null;
      head = head.next;
      return this;
    },

    deleteTail() {
      if (!head) return null;
      if (!tail) return null;
      let current = head;
      while (current.next !== tail) {
        if (!current.next) break;

        current = current.next;
      }
      tail = current;
      return this;
    },
  };

  return linkedList;
}
