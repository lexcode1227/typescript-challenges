type StringToTuple<S extends string> = S extends `${infer Char}${infer Rest}`
    ? [Char, ...StringToTuple<Rest>]
    : [];

export type LengthOfString<S extends string> = StringToTuple<S>["length"];
