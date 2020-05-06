// Copyright (c) 2020 Gonzalo Müller Bravo.
import { goDown, goUp } from './counterBrain'

import { CounterState } from './CounterState'
import { DeepReadonly } from 'deep-freeze'

const enum CounterAction {
  UP,
  DOWN
}

async function reduce(prevState: DeepReadonly<CounterState>, action: CounterAction): Promise<DeepReadonly<CounterState>> {
  switch (action) {
    case CounterAction.UP:
      return goUp(prevState)
    case CounterAction.DOWN:
      return goDown(prevState)
    default:
      return prevState
  }
}

export {
  CounterAction,
  reduce
}
