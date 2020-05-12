// Copyright (c) 2020 Gonzalo Müller Bravo.

import { CounterState, INITIAL_STATE as INITIAL_COUNTER_STATE } from './counter/CounterState'

interface GlobalState {
  token: string | null;
  counter1: CounterState;
  counter2: CounterState;
  error: boolean;
}

const INITIAL_STATE: Readonly<GlobalState> = {
  token: null,
  counter1: INITIAL_COUNTER_STATE,
  counter2: INITIAL_COUNTER_STATE,
  error: false
}

export {
  GlobalState,
  INITIAL_STATE
}
