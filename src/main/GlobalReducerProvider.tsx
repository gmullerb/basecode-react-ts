// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { initialState } from './GlobalState'
import { reduce } from './GlobalAction'
import { SyncReducerProvider } from 'react-reducer-provider'

function GlobalReducerProvider({ children }: ContainerProp): React.ReactElement {
  return (
    <SyncReducerProvider
      reducer={reduce}
      initialState={initialState}
    >
      {children}
    </SyncReducerProvider>
  )
}

export {
  GlobalReducerProvider
}
