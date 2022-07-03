import { cleanup, render } from '@testing-library/react'
import Index from '../pages/index'

jest.mock('next/head', () => () => 'Head')
jest.mock('@components/Home', () => () => 'PokedexHomepage')

console.error = jest.fn()

const setup = (mocks = {}) => {
  cleanup()
  jest.resetModules()
  jest.clearAllMocks()

  // const Index = require('@pages/index').default
  const wrapper = render(Index)
  return { wrapper }
}

describe('Home', () => {
  it('Render: default render', () => {
    const { wrapper } = setup()
    expect(wrapper).toBeDefined()
  })
})