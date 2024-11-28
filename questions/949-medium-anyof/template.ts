type False = false | 0 | [] | { [K: string]: never } | "" | undefined | null;

export type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest]
	? F extends False
		? AnyOf<Rest>
		: true
	: false;

