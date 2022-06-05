export type Queue<T> = {
  items: readonly T[];
  put(value: T): void;
  poll(): T | undefined;
  toString(): string;
}

export const createQueue = <T>(): Queue<T> => {
  const list: T[] = [];
  const put = (...args: T[]) => list.unshift(...args);
  const poll = () => list.pop();
  const toString = () => `[${list.join(',')}]`;

  return {
    get items() {
      return list;
    },
    put,
    poll,
    toString
  };
};
