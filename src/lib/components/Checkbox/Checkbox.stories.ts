import type { Meta, StoryObj } from '@storybook/svelte';

import Checkbox from './Checkbox.svelte';

const meta = {
  title: 'Basic Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable option',
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    label: 'Pre-selected but locked',
    checked: true,
    disabled: true,
  },
};
