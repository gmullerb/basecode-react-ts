// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as delay from 'delay'

import { CounterState } from './CounterState'
import { DeepReadonly } from 'deep-freeze'

async function goUp(prevState: DeepReadonly<CounterState>): Promise<DeepReadonly<CounterState>> {
  return delay(750, {
    value: {
      count: prevState.count + 1,
      updatedAt: new Date()
    }
  })
}

async function goDown(prevState: DeepReadonly<CounterState>): Promise<DeepReadonly<CounterState>> {
  return delay(750, {
    value: {
      count: prevState.count - 1,
      updatedAt: new Date()
    }
  })
}

export {
  goUp,
  goDown
}
