// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import { Home } from '../home/Home'
import { RoutedContainer } from '../RoutedContainer'

describe('RoutedContainer tests', () => {
  beforeEach(() => {
    spyOn(BrowserRouter.prototype, 'render')
      .and
      .callFake(function () {
        /* eslint-disable no-invalid-this */
        return (
          <div>
            {this.props.children}
          </div>
        )
        /* eslint-enable no-invalid-this */
      })
  })

  it('should render Main component', () => {
    const main = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <RoutedContainer/>
      </MemoryRouter>
    )

    expect(main.contains(Home)).toBe(true)
  })
})
