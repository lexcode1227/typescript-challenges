type RepeatedKeys<K, K1> = K extends K1 ? K : never

type KeyType<O, O1> = {
    [K in (keyof O) | (keyof O1)]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}

export type Diff<O, O1> = Omit<KeyType<O, O1>, RepeatedKeys<keyof O, keyof O1>>
