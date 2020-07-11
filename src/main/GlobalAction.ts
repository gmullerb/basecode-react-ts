// Copyright (c) 2020 Gonzalo Müller Bravo.
import { Action } from 'react-reducer-provider'
import { DeepReadonly } from 'deep-freeze'

import { GlobalState } from './GlobalState'
import { CounterData, updateCounter } from './globalBrain'

const enum GlobalActions {
  AUTH,
  ERROR,
  UPDATE_COUNTER
}

type GlobalActionData = string | undefined | CounterData

interface GlobalAction extends Action<GlobalActions, GlobalActionData> {}

function reduce(prevState: DeepReadonly<GlobalState>, action: DeepReadonly<GlobalAction>): DeepReadonly<GlobalState> {
  switch (action.type) {
    case GlobalActions.AUTH:
      return {
        ...prevState,
        token: action.data as string
      }
    case GlobalActions.UPDATE_COUNTER:
      return updateCounter(prevState, action.data as CounterData)
    case GlobalActions.ERROR:
      return {
        ...prevState,
        error: true
      }
    default:
      return prevState
  }
}

export {
  GlobalAction,
  GlobalActions,
  GlobalActionData,
  reduce
}
