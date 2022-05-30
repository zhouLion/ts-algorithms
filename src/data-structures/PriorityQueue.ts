export function createProrityQueue<T>() {
  const priorities = new Map<T, number>();
  const items = new Set();

  return {
    add(item: T, priority = 0) {
      priorities.set(item, priority);
      return this;
    }
  }
}
