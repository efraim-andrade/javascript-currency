import { screen } from '@testing-library/react'

import { renderWithTheme } from '~/utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render the Input with the label and default top position', () => {
    renderWithTheme(<Input label="insira um calculo" />)
    // const container = screen.getByLabelText('field')
    // console.log(
    //   '🚀 ~ file: Input.test.tsx ~ line 21 ~ it ~ container',
    //   container
    // )
    // expect(screen.getByText(/insira um calculo/i)).toBeInTheDocument()
    // expect(screen.getByLabelText('field')).toHaveStyle({
    //   flexDirection: 'column'
    // })
  })
  // it('should render label with bottom position', () => {
  //   renderWithTheme(<Input label="insira um calculo" labelPosition="bottom" />)
  //   expect(container).toHaveStyle({
  //     flexDirection: 'column-reverse'
  //   })
  // })
})
