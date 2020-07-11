// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { DeepReadonly } from 'deep-freeze'

export function GoDownButton({ disabled, onClick }: DeepReadonly<ButtonsProps>): React.ReactElement {
  return (
    <button className='button is-warning' disabled={disabled} onClick={onClick}>
      Go down!
    </button>
  )
}
