// Copyright (c) 2020 Gonzalo Müller Bravo.

interface CounterState {
  count: number,
  updatedAt: Nullable<Date>
}

const INITIAL_STATE: Readonly<CounterState> = {
  count: 0,
  updatedAt: null
}

export {
  CounterState,
  INITIAL_STATE
}
