// Copyright (c) 2020 Gonzalo Müller Bravo.
import 'whatwg-fetch'

import { DeepReadonly } from 'deep-freeze'

export async function fetchEcho(text: string): Promise<string> {
  return window.fetch(
    `${ENV.apiHost}${ENV.apiPort ? `:${ENV.apiPort}` : '' }`, {
      method: 'POST',
      // headers: {
      //   Authorization: `Bearer ${token}` // Required by JWT
      // },
      body: text
    }
  )
    .then(async function (response: DeepReadonly<Response>) {
      return response.ok
        ? response.text()
        : Promise.reject()
    })
}
