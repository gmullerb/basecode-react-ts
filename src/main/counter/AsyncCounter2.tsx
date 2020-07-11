// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { useReducerState } from 'react-reducer-provider'

import { GlobalState } from '../GlobalState'

import { AsyncCounter } from './AsyncCounter'

export function AsyncCounter2(): React.ReactElement {
  const { counter2 } = useReducerState<GlobalState>()
  return (
    <AsyncCounter title='Counter 2' counterId='counter2' initialState={counter2}/>
  )
}
