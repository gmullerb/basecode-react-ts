// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { ErrorDetail } from '../ErrorDetail'
import { shallow } from 'enzyme'

describe('ErrorDetail tests', () => {
  it('should render component', () => {
    const error = shallow(
      <ErrorDetail
        msj='theMsj'
        aid='theAid'
      />
    )

    expect(error.find('h1').text()).toBe('theMsj')
    expect(error.find('h2').text()).toBe('theAid')
  })
})
