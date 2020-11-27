import { renderWithTheme } from '~/utils/tests/helpers'

import TryIt from '.'

describe('<TryIt />', () => {
  it('should render the TryIt', () => {
    renderWithTheme(<TryIt />)
  })
})
