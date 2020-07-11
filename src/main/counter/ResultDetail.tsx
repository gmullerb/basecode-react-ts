// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { DeepReadonly } from 'deep-freeze'

import { CounterState } from './CounterState'

interface Props {
  result: CounterState
}

export function ResultDetail({ result: { count, updatedAt }}: DeepReadonly<Props>): React.ReactElement {
  return (
    <React.Fragment>
      <div className='title'>
        Count:{count}
      </div>
      <div className='subtitle'>
        At:{updatedAt ? updatedAt.toUTCString() : 'Not updated'}
      </div>
    </React.Fragment>
  )
}
