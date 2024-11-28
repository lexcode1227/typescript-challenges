export type KebabCase<S extends string> = S extends '' ? '': S extends `${infer L}${infer Rest}` 
    ? `${Lowercase<L>}${Rest extends Uncapitalize<Rest> ? '' : '-'}${KebabCase<Rest>}`
    : S