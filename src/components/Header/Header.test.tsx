import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '~/utils/tests/helpers'

import Header from '.'

describe('components - <Header />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Header />)

    expect(screen.getByLabelText(/js-currency-logo/i)).toBeInTheDocument()
    expect(screen.getByText(/javascript/i)).toBeInTheDocument()
    expect(screen.getByText(/currency/i)).toBeInTheDocument()
  })
})
