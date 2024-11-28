type MyOmit<T, K> = {
    [P in Exclude <keyof T, K>]: T[P]
}

export type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P]
} & MyOmit<T, K>
