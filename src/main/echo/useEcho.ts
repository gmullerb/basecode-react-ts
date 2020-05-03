// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { fetchEcho } from './echoBrain'

interface EchoData {
  disabled: boolean,
  echoText: string,
  handleSubmit: (text: string) => Promise<void>
}

export function useEcho(): EchoData {
  const [ disabled, setDisabled ] = React.useState(false)
  const [ echoText, setEchoText ] = React.useState('')
  return {
    disabled,
    echoText,
    handleSubmit: async (text: string): Promise<void> => {
      const at = Date.now()
      setDisabled(true)
      await fetchEcho(text)
        .then(echo => setEchoText(`${echo} in ${Date.now() - at}ms`))
        .catch(() => setEchoText('NETWORK ERROR, TRY LATER ;)'))
        .finally(() => setDisabled(false))
    }
  }
}
