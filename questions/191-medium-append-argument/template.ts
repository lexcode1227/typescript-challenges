export type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer Args) => infer Return
	? (...args: [...Args, A]) => Return
	: Fn;
