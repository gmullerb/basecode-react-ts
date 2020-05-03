// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { GeneralError } from './errors/GeneralError'

interface GlobalErrorCatcherState {
  hasError: boolean;
}

// Error Boundary/getDerivedStateFromError only works with Class Component
// eslint-disable-next-line react/prefer-es6-class
export class GlobalErrorCatcher extends React.Component<ContainerProp, GlobalErrorCatcherState> {
  public state: GlobalErrorCatcherState = {
    hasError: false
  }

  public static getDerivedStateFromError(): GlobalErrorCatcherState { // eslint-disable-line id-match, id-length
    return {
      hasError: true
    }
  }

  public render(): React.ReactNode {
    return this.state.hasError
      ? <GeneralError/>
      : this.props.children
  }
}
