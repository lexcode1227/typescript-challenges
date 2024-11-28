export declare function PromiseAll<T extends []>(values: readonly [...T]): Promise<
    {
        [k in keyof T]: Awaited<T[k]>
    }
    >
