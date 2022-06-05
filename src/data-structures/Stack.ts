export type Stack = {
  push(value: unknown): void;
  pop(): unknown;
  valueof(): readonly unknown[];
  toString(): string;
}

// 采用数组去实现栈，因为它足够简单
export const createStack = <T>() => {
  const items: T[] = [];
  const push = (...args: T[]) => items.push.bind(null, ...args);
  const pop = () => items.pop();
  const valueof = () => Object.freeze(items);
  const toString = () => `[${items.join(',')}]`;
  return {
    get items() {
      return valueof();
    },
    push,
    pop,
    valueof,
    toString
  };
};
