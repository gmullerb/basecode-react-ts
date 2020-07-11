// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { ErrorDetail } from './ErrorDetail'

export function GeneralError(): React.ReactElement {
  return (
    <ErrorDetail msj='Oops! Something went wrong' aid='please report at https://github.com/gmullerb/basecode-react-ts'/>
  )
}
