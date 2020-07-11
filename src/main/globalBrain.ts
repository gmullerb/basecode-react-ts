// Copyright (c) 2020 Gonzalo Müller Bravo.
import { DeepReadonly } from 'deep-freeze'

import { CounterState } from './counter/CounterState'
import { GlobalState } from './GlobalState'

interface CounterData {
  id: string;
  data: CounterState;
}

function updateCounter(prevState: DeepReadonly<GlobalState>, counterData: DeepReadonly<CounterData>): DeepReadonly<GlobalState> {
  return counterData.id === 'counter1'
    ? {
        ...prevState,
        counter1: counterData.data
      }
    : {
        ...prevState,
        counter2: counterData.data
      }
}

export {
  CounterData,
  updateCounter
}
