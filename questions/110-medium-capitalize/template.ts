export type Capitalize<S extends string> = S extends `${infer L}${infer Rest}`
	? `${Uppercase<L>}${Rest}`
	: S;
