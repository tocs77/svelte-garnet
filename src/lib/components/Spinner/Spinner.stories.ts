import type { Meta, StoryObj } from '@storybook/svelte';

import Spinner from './Spinner.svelte';

const meta = {
  title: 'Basic Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
    duration: { control: 'text' },
    size: { control: 'text' },
    variant: {
      control: 'select',
      options: ['circle', 'jumper'],
    },
    unit: { control: 'text' },
    pause: { control: 'boolean' },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: '96',
  },
};

export const Fast: Story = {
  args: {
    duration: '0.35s',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#2563eb',
  },
};

export const Compact: Story = {
  args: {
    size: '28',
    duration: '1s',
  },
};

export const Jumper: Story = {
  args: {
    variant: 'jumper',
  },
};

export const JumperLarge: Story = {
  args: {
    variant: 'jumper',
    size: '80',
    duration: '0.9s',
  },
};

export const JumperCustomColor: Story = {
  args: {
    variant: 'jumper',
    size: '48',
    color: '#7c3aed',
    duration: '1s',
  },
};
