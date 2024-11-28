type MapObj<T> = {
	[A in keyof T]: T[A];
};
export type Merge<F, S> = MapObj<
    { [K in keyof F as K extends keyof S ? never : K]: F[K] } 
    & 
    { [K in keyof S]: S[K] }
>