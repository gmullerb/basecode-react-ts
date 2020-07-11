// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { DeepReadonly } from 'deep-freeze'

export function GoUpButton({ disabled, onClick }: DeepReadonly<ButtonsProps>): React.ReactElement {
  return (
    <button className='button is-success' disabled={disabled} onClick={onClick}>
      Go up!
    </button>
  )
}
