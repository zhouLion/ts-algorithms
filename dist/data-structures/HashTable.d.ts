declare const craeteHashTable: (hashTableSize?: number) => {
    get: (key: string) => unknown;
    set: (key: string, value: unknown) => void;
    has: (key: string) => boolean;
    delete: (key: string) => {
        key: string;
        value: unknown;
    }[] | undefined;
    readonly keys: Record<string, number>;
    readonly length: number;
};

export { craeteHashTable };
