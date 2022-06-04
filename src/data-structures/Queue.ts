export type Queue<T> = {
  put(value: T): void;
  valueof(): readonly T[];
  poll(): T | undefined;
  toString(): string;
}

export const createQueue = <T>(): Queue<T> => {
  const list: T[] = [];
  const put = (...args: T[]) => list.unshift.bind(list, ...args);
  const poll = () => list.pop();
  const valueof = () => Object.freeze(list);
  const toString = () => `[${list.join(', ')}]`;

  return { put, poll, valueof, toString };
};
