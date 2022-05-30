export function createQueue<T>() {
  const list: T[] = [];
  return Object.freeze({
    get list() {
      return list;
    },

    get length() {
      return list.length;
    },

    peek() {
      if (this.length === 0) {
        return null;
      }

      return list[0];
    },

    enqueue(...args: T[]) {
      list.push(...args);
      return this;
    },

    dequeue() {
      if (list.length === 0) {
        return null;
      }

      return list.shift();
    },

    toString() {
      return `Queue(${list.join(', ')})`;
    },
  });
}
