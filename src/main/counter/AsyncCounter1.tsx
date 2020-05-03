// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { AsyncCounter } from './AsyncCounter'
import { GlobalState } from '../GlobalState'
import { useReducerState } from 'react-reducer-provider'

export function AsyncCounter1(): React.ReactElement {
  const { counter1 } = useReducerState<GlobalState>()
  return (
    <AsyncCounter
      title='Counter 1'
      counterId='counter1'
      initialState={counter1}
    />
  )
}
