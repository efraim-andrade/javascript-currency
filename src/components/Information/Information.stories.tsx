import { Meta, Story } from '@storybook/react/types-6-0'

import Information from '.'

export default {
  title: 'Information',
  component: Information
} as Meta

export const Basic: Story = (args) => <Information {...args} />
