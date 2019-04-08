import React from 'react'
import { shallow } from 'enzyme'
import { Index } from '../../pages'

describe('index page', () => {
  it('renders without crashing', () => {
    expect(shallow(<Index />).exists()).toBe(true)
  })
})
