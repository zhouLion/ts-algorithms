declare type Queue<T> = {
    put(value: T): void;
    valueof(): readonly T[];
    poll(): T | undefined;
    toString(): string;
};
declare const createQueue: <T>() => Queue<T>;

export { Queue, createQueue };
