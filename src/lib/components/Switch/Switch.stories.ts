import type { Meta, StoryObj } from '@storybook/svelte';

import Switch from './Switch.svelte';

const meta = {
  title: 'Basic Components/Switch',
  component: Switch,
  args: {
    id: 'switch-default',
    label: 'Enable notifications',
    css: '',
    size: '',
    isChecked: false,
    disabled: false,
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    css: { control: 'text' },
    size: { control: 'text' },
    isChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
    label: 'Dark mode',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Unavailable setting',
  },
};

export const CheckedDisabled: Story = {
  args: {
    isChecked: true,
    disabled: true,
    label: 'Locked on',
  },
};

export const NoLabel: Story = {
  args: {
    label: '',
    id: 'switch-no-label',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'Automatically sync changes across all connected devices',
    id: 'switch-long-label',
  },
};

export const CustomId: Story = {
  args: {
    id: 'notifications-switch',
    label: 'Email alerts',
  },
};
