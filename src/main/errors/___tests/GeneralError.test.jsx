// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { shallow } from 'enzyme'

import { GeneralError } from '../GeneralError'

describe('GeneralError tests', () => {
  it('should render component', () => {
    const error = shallow(
      <GeneralError/>
    )

    expect(error.prop('msj')).toBe('Oops! Something went wrong')
    expect(error.prop('aid')).toBe('please report at https://github.com/gmullerb/basecode-react-ts')
  })
})
