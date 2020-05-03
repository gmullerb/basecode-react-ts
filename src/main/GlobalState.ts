// Copyright (c) 2020 Gonzalo Müller Bravo.

import { CounterState, INITIAL_STATE } from './counter/CounterState'

interface GlobalState {
  token: string | null;
  counter1: CounterState;
  counter2: CounterState;
  error: boolean;
}

const initialState: GlobalState = {
  token: null,
  counter1: INITIAL_STATE,
  counter2: INITIAL_STATE,
  error: false
}

export {
  GlobalState,
  initialState
}
