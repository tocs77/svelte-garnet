import type { Meta, StoryObj } from '@storybook/svelte';

import Alarm from './Alarn.svelte';

const meta = {
  title: 'Action Components/Alarm',
  component: Alarm,
  args: {
    notifications: 26,
    label: 'This is a test label',
    countColor: '#733635',
    countBackgroundColor: '#f4f4f4',
    filled: false,
    small: false,
  },
  argTypes: {
    notifications: { control: 'number' },
    label: { control: 'text' },
    countColor: { control: 'color' },
    countBackgroundColor: { control: 'color' },
    filled: { control: 'boolean' },
    small: { control: 'boolean' },
  },
} satisfies Meta<typeof Alarm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoNotifications: Story = {
  args: {
    notifications: 0,
    label: 'All caught up',
  },
};

export const SingleNotification: Story = {
  args: {
    notifications: 1,
    label: 'New message',
  },
};

export const HighCount: Story = {
  args: {
    notifications: 99,
    label: 'Inbox',
  },
};

export const Filled: Story = {
  args: {
    filled: true,
    label: 'Filled bell icon',
  },
};

export const Small: Story = {
  args: {
    small: true,
    notifications: 8,
    label: 'Compact alarm',
  },
};

export const CustomColors: Story = {
  args: {
    countColor: '#ffffff',
    countBackgroundColor: '#265573',
    notifications: 12,
    label: 'Custom badge colors',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'Notifications for your team workspace',
    notifications: 4,
  },
};
