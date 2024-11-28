export type Last<T extends any[]> = T["length"] extends 1
	? T[number]
	: T extends [infer First, ...infer Rest]
		? Last<Rest>
		: never;