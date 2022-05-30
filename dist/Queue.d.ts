declare function createQueue<T>(): Readonly<{
    readonly list: T[];
    readonly length: number;
    peek(): T | null;
    enqueue(...args: T[]): any;
    dequeue(): T | null | undefined;
    toString(): string;
}>;

export { createQueue };
