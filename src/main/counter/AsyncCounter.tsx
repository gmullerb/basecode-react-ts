// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { AsyncReducerProvider } from 'react-reducer-provider'
import { CounterContainer } from './CounterContainer'
import { CounterState } from './CounterState'
import { DeepReadonly } from 'deep-freeze'
import { Link } from 'react-router-dom'
import { reduce } from './CounterActions'

interface Props {
  title: string;
  counterId: string;
  initialState: CounterState;
}

export function AsyncCounter({ title, counterId, initialState }: DeepReadonly<Props>): React.ReactElement {
  return (
    <AsyncReducerProvider
      name={counterId}
      reducer={reduce}
      initialState={initialState}
    >
      <div className='title'>{title}</div>
      <CounterContainer counterId={counterId}/>
      <Link
        to='/'
        className='button is-link is-small is-outlined'
      >
        Home
      </Link>
    </AsyncReducerProvider>
  )
}
