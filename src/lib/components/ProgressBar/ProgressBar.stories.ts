import type { Meta, StoryObj } from '@storybook/svelte';

import ProgressBar from './ProgressBar.svelte';

const meta = {
  title: 'Basic Components/ProgressBar',
  component: ProgressBar,
  args: {
    progressAmt: 52,
    tweenDuration: 400,
    animate: true,
    labelInside: true,
    labelTextOutside: 'This is a test',
    color: '#733635',
  },
  argTypes: {
    progressAmt: { control: 'number' },
    tweenDuration: { control: 'number' },
    animate: { control: 'boolean' },
    labelInside: { control: 'boolean' },
    labelTextOutside: { control: 'text' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    progressAmt: 0,
  },
};

export const Complete: Story = {
  args: {
    progressAmt: 100,
  },
};

export const Quarter: Story = {
  args: {
    progressAmt: 25,
  },
};

export const LabelOutside: Story = {
  args: {
    labelInside: false,
    labelTextOutside: 'Upload progress',
    progressAmt: 68,
  },
};

export const NoAnimation: Story = {
  args: {
    animate: false,
    progressAmt: 75,
  },
};

export const SlowTween: Story = {
  args: {
    tweenDuration: 1200,
    progressAmt: 80,
  },
};

export const CustomColor: Story = {
  args: {
    color: '#265573',
    progressAmt: 60,
  },
};

export const LongOutsideLabel: Story = {
  args: {
    labelInside: false,
    labelTextOutside: 'Installing updates — this may take a few minutes',
    progressAmt: 42,
  },
};
