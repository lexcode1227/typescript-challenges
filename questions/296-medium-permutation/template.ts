export type Permutation<T, $a extends Array<unknown> = [], Copy = T> = [T] extends [never]
	? $a
	: T extends T
		? Permutation<Exclude<Copy, T>, [...$a, T]>
		: never;