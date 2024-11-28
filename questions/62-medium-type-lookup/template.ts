export type LookUp<U, T> = U extends { type: infer Key} ? (T extends Key ? U : never) : never
