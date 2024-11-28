export type DeepReadonly<T extends Object> = {
    readonly [k in keyof T]: T[k] extends (...arg: any) => any
    ? T[k]
		: T[k] extends { [k: string]: any }
			? DeepReadonly<T[k]>
			: T[k];
}
