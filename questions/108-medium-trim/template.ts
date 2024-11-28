export type Trim<S extends string> = S extends ` ${infer Rest}` | `\t${infer Rest}` | `\n${infer Rest}` | `${infer Rest} ` | `${infer Rest}\t` | `${infer Rest}\n` 
    ? Trim<Rest> 
    : S;