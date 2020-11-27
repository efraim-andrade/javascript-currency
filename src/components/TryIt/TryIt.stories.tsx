import { Meta, Story } from '@storybook/react/types-6-0'

import TryIt from '.'

export default {
  title: 'TryIt',
  component: TryIt
} as Meta

export const Basic: Story = (args) => <TryIt {...args} />
