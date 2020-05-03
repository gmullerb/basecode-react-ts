// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { GlobalErrorCatcher } from '../GlobalErrorCatcher'
import { shallow } from 'enzyme'

describe('GlobalErrorCatcher tests', () => {
  it('should set error', () => {
    expect(GlobalErrorCatcher.getDerivedStateFromError()).toEqual({
      hasError: true
    })
  })

  it('should render children', () => {
    const catcher = shallow(
      <GlobalErrorCatcher>
        <div>Children</div>
      </GlobalErrorCatcher>
    )

    expect(catcher.html()).toContain('Children')
  })

  it('should render error', () => {
    const catcher = shallow(
      <GlobalErrorCatcher>
        <div>Children</div>
      </GlobalErrorCatcher>
    )

    catcher.setState({
      hasError: true
    })

    expect(catcher.exists('GeneralError')).toBe(true)
  })
})
