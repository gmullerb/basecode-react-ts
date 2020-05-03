// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import { GeneralError } from '../GeneralError'
import { shallow } from 'enzyme'

describe('GeneralError tests', () => {
  it('should render component', () => {
    const error = shallow(
      <GeneralError/>
    )

    expect(error.prop('msj')).toBe('Oops! Something went wrong')
    expect(error.prop('aid')).toBe('please report at https://adistancia.com')
  })
})
