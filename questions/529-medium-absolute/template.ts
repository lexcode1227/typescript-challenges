type RemoveSymbol<S extends string> = S extends `${infer Matched extends `${number}`}${infer Rest}`
	? `${Matched}${RemoveSymbol<Rest>}`
	: S extends `${infer Left}${infer Matched extends `${number}`}`
		? `${RemoveSymbol<Left>}${Matched}`
		: "";

export type Absolute<T extends number | string | bigint> = RemoveSymbol<`${T}`>