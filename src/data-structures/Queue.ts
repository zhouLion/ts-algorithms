export type Queue<T> = {
  put(value: T): void;
  valueof(): T[];
  poll(): T | undefined;
  toString(): string;
}

export const createQueue = <T>(): Queue<T> => {
  const list: T[] = [];
  const put = list.unshift;
  const poll = list.pop;
  const valueof = () => list;
  const toString = () => `[${list.join(', ')}]`;
  return { put, poll, valueof, toString };
};
