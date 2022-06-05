export type Stack = {
  push(value: unknown): void;
  pop(): unknown;
  toString(): string;
}

// 采用数组去实现栈，因为它足够简单
export const createStack = <T>() => {
  const items: T[] = [];

  return {
    push: (...args: T[]) => items.push(...args),
    pop: () => items.pop(),
    toString: () => `[${items.join(',')}]`,
    get items() {
      return items;
    },
  };
};
