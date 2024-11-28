export type TupleToObject<T extends readonly any[]> = {
    [Key in T[number]]: Key
}
