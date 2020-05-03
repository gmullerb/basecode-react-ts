// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { AsyncCounter1 } from './counter/AsyncCounter1'
import { AsyncCounter2 } from './counter/AsyncCounter2'
import { GeneralError } from './errors/GeneralError'
import { GlobalErrorCatcher } from './GlobalErrorCatcher'
import { GlobalReducerProvider } from './GlobalReducerProvider'
import { Home } from './home/Home'
import { RestEcho } from './echo/RestEcho'
import { Switch } from 'react-router'

export function RoutedContainer(): React.ReactElement {
  return (
    <GlobalErrorCatcher>
      <GlobalReducerProvider>
        <BrowserRouter>
          <Switch>
            <Route
              path='/error'
              component={GeneralError}
            />
            <Route
              path='/async1'
              component={AsyncCounter1}
            />
            <Route
              path='/async2'
              component={AsyncCounter2}
            />
            <Route
              path='/rest'
              component={RestEcho}
            />
            <Route
              path='/'
              component={Home}
            />
          </Switch>
        </BrowserRouter>
      </GlobalReducerProvider>
    </GlobalErrorCatcher>
  )
}
