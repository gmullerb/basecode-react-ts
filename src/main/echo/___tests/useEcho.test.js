// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as MockableReact from 'react'

import * as MockableFetchEcho from '../echoBrain'
import { useEcho } from '../useEcho'

describe('useEcho tests', () => {
  let given = null
  const mockSetter = jasmine.createSpy()

  beforeAll(() => {
    spyOn(MockableFetchEcho, 'fetchEcho')
      .and
      .callFake(() => given)
    spyOn(MockableReact, 'useState')
      .and
      .callFake(initial => [ initial, mockSetter ])
  })

  it('should handle Ok', async () => {
    given = Promise.resolve('result text')
    const { handleSubmit } = useEcho()

    await handleSubmit('from text')

    expect(mockSetter).toHaveBeenCalledWith(true)
    expect(mockSetter).toHaveBeenCalledWith(jasmine.stringMatching(/result text in \d+ms/))
    expect(mockSetter).toHaveBeenCalledWith(false)
  })

  it('should handle error', async () => {
    given = Promise.reject()

    const { handleSubmit } = useEcho()

    await handleSubmit('from text')

    expect(mockSetter).toHaveBeenCalledWith(true)
    expect(mockSetter).toHaveBeenCalledWith('NETWORK ERROR, TRY LATER ;)')
    expect(mockSetter).toHaveBeenCalledWith(false)
  })
})
