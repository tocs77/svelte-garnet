import type { Meta, StoryObj } from '@storybook/svelte';

import Slider from './Slider.svelte';

const meta = {
  title: 'Basic Components/Slider',
  component: Slider,
  argTypes: {
    id: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    val: { control: 'number' },
    disabled: { control: 'boolean' },
    ticks: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Brightness',
    id: 'brightness-slider',
    val: 60,
  },
};

export const CustomRange: Story = {
  args: {
    label: 'Pick a number (0–10)',
    id: 'small-range-slider',
    min: 0,
    max: 10,
    step: 1,
    val: 7,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable',
    id: 'disabled-slider',
    val: 40,
    disabled: true,
  },
};

export const WithTicks: Story = {
  args: {
    label: 'Volume',
    id: 'volume-slider',
    val: 50,
    ticks: true,
  },
};
