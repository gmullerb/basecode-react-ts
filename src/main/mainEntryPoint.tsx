// Copyright (c) 2020 Gonzalo Müller Bravo.
import './reactEnvironment'

import * as React from 'react'
import { render } from 'react-dom'

import { RoutedContainer } from './RoutedContainer'

render(
  <React.StrictMode>
    <RoutedContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
