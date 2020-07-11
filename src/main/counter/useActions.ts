// Copyright (c) 2020 Gonzalo Müller Bravo.
import { Async, useReducer, useReducerDispatcher } from 'react-reducer-provider'
import { useCallback, useState } from 'react'
import { DeepReadonly } from 'deep-freeze'

import { GlobalAction, GlobalActions } from '../GlobalAction'

import { CounterAction } from './CounterActions'
import { CounterState } from './CounterState'

interface CounterData {
  on: boolean
  state: CounterState
  goDown: VoidFunction
  goUp: VoidFunction
}

export function useActions(counterId: string): DeepReadonly<CounterData> {
  const dispatchToGlobal = useReducerDispatcher<DeepReadonly<GlobalAction>>()
  const [ on, setOn ] = useState(false)
  const [ state, dispatch ] = useReducer<CounterState, CounterAction, Async<Readonly<CounterState>>>(counterId)
  return {
    on,
    state,
    goUp: useCallback(() => {
      setOn(true)
      dispatch(CounterAction.UP)
        .then(newState => {
          dispatchToGlobal({ // to be improved with next version of react-reducer-provider
            type: GlobalActions.UPDATE_COUNTER,
            data: {
              id: counterId,
              data: newState
            }
          })
          setOn(false)
        })
    }, [ counterId, dispatch, dispatchToGlobal, setOn ]),
    goDown: useCallback(() => {
      setOn(true)
      dispatch(CounterAction.DOWN)
        .then(newState => {
          dispatchToGlobal({ // to be improved with next version of react-reducer-provider
            type: GlobalActions.UPDATE_COUNTER,
            data: {
              id: counterId,
              data: newState
            }
          })
          setOn(false)
        })
    }, [ counterId, dispatch, dispatchToGlobal, setOn ])
  }
}
