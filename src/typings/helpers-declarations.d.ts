// Copyright (c) 2020 Gonzalo Müller Bravo.

// Copyright (c) 2020 Gonzalo Müller Bravo.

declare global {

  type Nullable<T> = T | null

  type Undefinable<T> = T | undefined

  type NullUndefinable<T> = T | null | undefined

  type FalseNullUndefinable<T> = T | null | undefined | false

  type Json = {} | []
}

export {}
