// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { GoDownButton } from './GoDownButton'
import { GoUpButton } from './GoUpButton'
import { ResultDetail } from './ResultDetail'
import { useActions } from './useActions'

interface Props {
  readonly counterId: string
}

export function CounterContainer({ counterId }: Props): React.ReactElement {
  const { on, state, goDown, goUp } = useActions(counterId)
  return (
    <div className='box'>
      <div className='buttons'>
        <GoUpButton
          disabled={on}
          onClick={goUp}
        />
        <GoDownButton
          disabled={on}
          onClick={goDown}
        />
      </div>
      <ResultDetail result={state} />
    </div>
  )
}
