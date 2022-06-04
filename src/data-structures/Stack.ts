export type Stack = {
  push(value: unknown): void;
  pop(): unknown;
  valueof(): unknown[];
  toString(): string;
}

export const createStack = <T>() => {
  // 采用数组去实现栈，因为它足够简单
  const items: T[] = [];
  const push = items.push;
  const pop = items.pop;
  const valueof = () => items;
  const toString = () => `[${items.join(', ')}]`;
  return { push, pop, valueof, toString };
};
