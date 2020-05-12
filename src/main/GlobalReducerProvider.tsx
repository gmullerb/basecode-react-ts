// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { INITIAL_STATE } from './GlobalState'
import { reduce } from './GlobalAction'
import { SyncReducerProvider } from 'react-reducer-provider'

function GlobalReducerProvider({ children }: ContainerProp): React.ReactElement {
  return (
    <SyncReducerProvider
      reducer={reduce}
      initialState={INITIAL_STATE}
    >
      {children}
    </SyncReducerProvider>
  )
}

export {
  GlobalReducerProvider
}
