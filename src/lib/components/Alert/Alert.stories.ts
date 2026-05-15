import type { Meta, StoryObj } from '@storybook/svelte';

import Alert from './Alert.svelte';

const meta = {
  title: 'Action Components/Alert',
  component: Alert,
  args: {
    show: true,
    showIcon: true,
    type: 'info',
    title: 'Heads up',
    description: 'This is a short message shown inside the alert.',
    showAnimation: true,
  },
  argTypes: {
    show: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['', 'warn', 'dark', 'error', 'info', 'success'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    showAnimation: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Saved',
    description: 'Your changes were saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warn',
    title: 'Check your input',
    description: 'One or more fields need attention before you can continue.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Something went wrong',
    description: 'We could not complete the request. Please try again.',
  },
};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    type: 'info',
    title: 'Plain text alert',
    description: 'Icons are hidden for a simpler layout.',
  },
};

export const NoAnimation: Story = {
  args: {
    showAnimation: false,
    type: 'info',
    title: 'Static appearance',
    description: 'The fade-in animation is disabled.',
  },
};

export const Neutral: Story = {
  args: {
    type: '',
    title: 'Default style',
    description: 'No semantic type is selected.',
  },
};
