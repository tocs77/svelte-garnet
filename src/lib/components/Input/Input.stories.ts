import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

const meta = {
  title: 'Basic Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    inputName: { control: 'text' },
    disabled: { control: 'boolean' },
    fieldID: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    inputName: 'username',
    fieldID: 'username-field',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    placeholder: 'You cannot type here',
    disabled: true,
    fieldID: 'disabled-field',
  },
};

export const Prefilled: Story = {
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
    fieldID: 'email-field',
    value: 'hello@garnetui.dev',
  },
};
