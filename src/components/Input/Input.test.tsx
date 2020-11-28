import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '~/utils/tests/helpers'

import Input from './index'

describe('<Input />', () => {
  it('should render the Input with the label and default top position', () => {
    renderWithTheme(<Input label="insira um calculo" />)

    expect(screen.getByText(/insira um calculo/i)).toBeInTheDocument()

    expect(screen.getByLabelText('field-container')).toHaveStyleRule(
      'flex-direction',
      'column'
    )
  })

  it('should render label with bottom position', () => {
    renderWithTheme(<Input label="insira um calculo" labelPosition="bottom" />)

    expect(screen.getByLabelText('field-container')).toHaveStyleRule(
      'flex-direction',
      'column-reverse'
    )
  })

  it('should not be able to edit field if is disabled', () => {
    renderWithTheme(
      <Input
        label="insira um calculo"
        labelPosition="bottom"
        disabled
        placeholder="0"
      />
    )

    const input = screen.getByPlaceholderText(/0/i)

    userEvent.type(input, '452')

    expect(input).toHaveValue('')
  })

  it('should be able to change the classes', () => {
    renderWithTheme(
      <Input
        disabled
        placeholder="placeh"
        labelPosition="bottom"
        label="insira um calculo"
        className="text-black bg-primary placeholder-black border-mainBg"
      />
    )

    const input = screen.getByPlaceholderText(/placeh/i)

    expect(input).toHaveClass('bg-primary')
    expect(input).toHaveClass('text-black')
  })
})
