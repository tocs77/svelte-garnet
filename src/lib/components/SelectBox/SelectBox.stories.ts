import type { Meta, StoryObj } from '@storybook/svelte';

import SelectBox from './SelectBox.svelte';

/** `id` must match each option’s 1-based position (`i + 1`) so `index` stays in sync with `selected`. */
const fruitOptions = [
  { id: 1, value: 'apple', label: 'Apple' },
  { id: 2, value: 'banana', label: 'Banana' },
  { id: 3, value: 'cherry', label: 'Cherry' },
];

const meta = {
  title: 'Action Components/SelectBox',
  component: SelectBox,
  args: {
    selectOptions: fruitOptions,
    index: 1,
    label: 'Test dropdown:',
  },
  argTypes: {
    selectOptions: { control: 'object' },
    index: { control: 'number' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Choose a fruit',
    selectOptions: fruitOptions,
    index: 1,
  },
};

export const SecondSelected: Story = {
  args: {
    label: 'Shipping speed',
    selectOptions: [
      { id: 1, value: 'standard', label: 'Standard' },
      { id: 2, value: 'express', label: 'Express' },
    ],
    index: 2,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable',
    selectOptions: fruitOptions,
    index: 1,
    disabled: true,
  },
};

export const DisabledWithSelection: Story = {
  args: {
    label: 'Locked with a selection',
    selectOptions: fruitOptions,
    index: 2,
    disabled: true,
  },
};
