declare type Stack = {
    push(value: unknown): void;
    pop(): unknown;
    valueof(): readonly unknown[];
    toString(): string;
};
declare const createStack: <T>() => {
    push: (...args: T[]) => (...args: T[]) => number;
    pop: () => T | undefined;
    valueof: () => readonly T[];
    toString: () => string;
};

export { Stack, createStack };
