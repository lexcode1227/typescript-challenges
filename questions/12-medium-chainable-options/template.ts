export type Chainable<T extends Object = {}> = {
  option<key extends string, value> (key: string, value: any): Chainable< {
      [P in keyof T as P extends key ? never : P]: T[P];
  } & Record<key, value>>
  get(): T
}
