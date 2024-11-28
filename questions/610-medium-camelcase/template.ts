export type CamelCase<S extends string> = S extends `${infer L}-${infer U}${infer Rest}` 
    ? U extends '-' 
        ? `${L}-${CamelCase<`${U}${Rest}`>}` 
        : U extends Uppercase<U> 
            ? `${L}-${Uppercase<U>}${CamelCase<Rest>}` 
            : `${L}${Uppercase<U>}${CamelCase<Rest>}` 
    : S