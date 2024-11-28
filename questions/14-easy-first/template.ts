export type First<T extends any[] | never> = T extends [] ? never : T[0]
