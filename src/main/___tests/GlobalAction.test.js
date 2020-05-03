// Copyright (c) 2020 Gonzalo Müller Bravo.
import { GlobalActions, reduce } from '../GlobalAction'

describe('GlobalActions tests', () => {
  it('should reduce GlobalActions.ERROR', () => {
    const result = reduce({
      error: false
    }, {
      type: GlobalActions.ERROR
    })

    expect(result).toEqual({
      error: true
    })
  })

  it('should reduce to previous when no action type', () => {
    const result = reduce({
      error: false
    }, {
    })

    expect(result).toEqual({
      error: false
    })
  })
})
