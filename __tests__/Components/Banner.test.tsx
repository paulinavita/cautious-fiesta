/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Container, ButtonBase } from '@components/Common'
import { Typography, Grid, Box } from '@mui/material'

console.error = jest.fn()
const setup = (mocks = {}) => {
  cleanup()
  jest.resetModules()
  jest.clearAllMocks()

  const Banner = require('@components/Home/Banner').default
  jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockReturnValue({
      t: jest.fn()
    })
  }))
  jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
      return <img alt="img" {...props} />
    },
  }))

  // const BannerComp = Banner()
  console.log(Banner)
  const wrapper = render(<Banner />)
  return { wrapper }
}

describe('Components: Banner', () => {
  it('Render: default render', () => {
    const { wrapper } = setup()
    // console.log(wrapper.debug())
    // expect(wrapper).toBeDefined()
  })
})