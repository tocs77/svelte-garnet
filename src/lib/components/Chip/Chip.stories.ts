import type { Meta, StoryObj } from '@storybook/svelte';

import Chip from './Chip.svelte';

const meta = {
  title: 'Navigation/Chip',
  component: Chip,
  argTypes: {
    active: { control: 'boolean' },
    close: { control: 'boolean' },
    chipContent: { control: 'text' },
    selected: { control: 'boolean' },
    outline: { control: 'boolean' },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    chipContent: 'Design',
  },
};

export const WithClose: Story = {
  args: {
    chipContent: 'Removable',
    close: true,
  },
};

export const Selected: Story = {
  args: {
    chipContent: 'Selected',
    selected: true,
  },
};

export const Outline: Story = {
  args: {
    chipContent: 'Outline',
    outline: true,
  },
};

export const SelectedOutline: Story = {
  args: {
    chipContent: 'Filter',
    selected: true,
    outline: true,
  },
};
