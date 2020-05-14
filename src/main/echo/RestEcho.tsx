// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { LabeledImage } from '../gadgets/LabeledImage'
import { Link } from 'react-router-dom'
import styles from './RestEcho.css'
import { useEcho } from './useEcho'

const enum RestEchoFieldsName {
  from = 'from'
}

function extractData(form: HTMLFormElement): string { // eslint-disable-line @typescript-eslint/prefer-readonly-parameter-types
  return (form[RestEchoFieldsName.from] as HTMLInputElement).value // eslint-disable-line id-match
}

function processForm(event: React.FormEvent<HTMLFormElement>): HTMLFormElement { // eslint-disable-line
  event.preventDefault()
  event.stopPropagation()
  return event.currentTarget
}

export function RestEcho(): React.ReactElement {
  const { echoText, disabled, handleSubmit } = useEcho()
  return (
    <React.Fragment>
      <form
        className='box'
        onSubmit={async event => handleSubmit(extractData(processForm(event)))} // eslint-disable-line
      >
        <div className='field'>
          <label className='label'>Text to send:</label>
          <input
            name={RestEchoFieldsName.from}
            type='text'
            className='input is-primary'
            disabled={disabled}
          />
        </div>
        <button
          data-x='rest-echo-button'
          className='button is-primary'
          disabled={disabled}
        >
          <LabeledImage
            image='imgs/go.svg'
            label='Send'
            imageClassName='contained-vertical-image'
          />
        </button>
        <div className='field'>
          <label className='label'>Result:</label>
          <div
            data-x='rest-echo-result'
            className={`box ${styles.result}`}
          >
            {echoText}
          </div>
        </div>
      </form>
      <Link
        to='/'
        className='button is-link is-small is-outlined'
      >
        Home
      </Link>
    </React.Fragment>
  )
}
