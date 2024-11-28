// export type If<C, T, F> = C extends boolean ? T : F
export type If<C extends boolean, T, F> = C extends true ? T : F;