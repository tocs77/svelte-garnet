import type { Meta, StoryObj } from '@storybook/svelte';

import RadioButton from './RadioButton.svelte';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const meta = {
  title: 'Basic Components/RadioButton',
  component: RadioButton,
  argTypes: {
    selectOptions: { control: 'object' },
    legend: { control: 'text' },
    disabled: { control: 'boolean' },
    userSelected: { control: 'text' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLegend: Story = {
  args: {
    legend: 'Pick a fruit',
    selectOptions: fruitOptions,
    userSelected: 'apple',
  },
};

export const SecondSelected: Story = {
  args: {
    legend: 'Shipping speed',
    selectOptions: [
      { value: 'standard', label: 'Standard' },
      { value: 'express', label: 'Express' },
    ],
    userSelected: 'express',
  },
};

export const Disabled: Story = {
  args: {
    legend: 'Unavailable group',
    selectOptions: fruitOptions,
    userSelected: 'apple',
    disabled: true,
  },
};

export const DisabledWithSelection: Story = {
  args: {
    legend: 'Pre-selected but locked',
    selectOptions: fruitOptions,
    userSelected: 'banana',
    disabled: true,
  },
};
