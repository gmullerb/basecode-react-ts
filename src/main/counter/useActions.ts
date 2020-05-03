// Copyright (c) 2020 Gonzalo Müller Bravo.
import { Async, useReducer, useReducerDispatcher } from 'react-reducer-provider'
import { GlobalAction, GlobalActions } from '../GlobalAction'
import { useCallback, useState } from 'react'

import { CounterAction } from './CounterActions'
import { CounterState } from './CounterState'
import { DeepReadonly } from 'deep-freeze'

interface CounterData {
  on: boolean
  state: CounterState
  goDown: VoidFunction
  goUp: VoidFunction
}

export function useActions(counterId: string): DeepReadonly<CounterData> {
  const dispatchToGlobal = useReducerDispatcher<GlobalAction>()
  const [ on, setOn ] = useState(false)
  const [ state, dispatch ] = useReducer<CounterState, CounterAction, Async>(counterId)
  return {
    on,
    state,
    goUp: useCallback(() => {
      setOn(true)
      dispatch(CounterAction.UP)
        .then(() => {
          dispatchToGlobal({ // to be improved with next version of react-reducer-provider
            type: GlobalActions.UPDATE_COUNTER,
            data: {
              id: counterId,
              data: state
            }
          })
          setOn(false)
        })
    }, [ counterId, state, dispatch, dispatchToGlobal, setOn ]),
    goDown: useCallback(() => {
      setOn(true)
      dispatch(CounterAction.DOWN)
        .then(() => {
          dispatchToGlobal({ // to be improved with next version of react-reducer-provider
            type: GlobalActions.UPDATE_COUNTER,
            data: {
              id: counterId,
              data: state
            }
          })
          setOn(false)
        })
    }, [ counterId, state, dispatch, dispatchToGlobal, setOn ])
  }
}
