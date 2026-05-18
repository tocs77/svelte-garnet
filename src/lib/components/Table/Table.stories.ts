import type { Meta, StoryObj } from '@storybook/svelte';

import Table from './Table.svelte';

const meta = {
  title: 'Basic Components/Table',
  component: Table,
  args: {
    columnCount: 4,
    rowCount: 4,
    itemCount: 16,
    border: '',
    displayImages: false,
    label: 'Test Label',
    imageLabel: 'untitled',
    displayImageLabels: false,
  },
  argTypes: {
    columnCount: { control: 'number' },
    rowCount: { control: 'number' },
    itemCount: { control: 'number' },
    border: { control: 'text' },
    displayImages: { control: 'boolean' },
    label: { control: 'text' },
    imageLabel: { control: 'text' },
    displayImageLabels: { control: 'boolean' },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoByTwo: Story = {
  args: {
    columnCount: 2,
    rowCount: 2,
    itemCount: 4,
    label: '2×2 grid',
  },
};

export const WithImages: Story = {
  args: {
    columnCount: 2,
    rowCount: 2,
    itemCount: 4,
    displayImages: true,
    label: 'Image cells',
  },
};

export const WithImageLabels: Story = {
  args: {
    columnCount: 2,
    rowCount: 2,
    itemCount: 4,
    displayImages: true,
    displayImageLabels: true,
    imageLabel: 'Sample photo',
    label: 'Labeled images',
  },
};

export const Empty: Story = {
  args: {
    itemCount: 0,
    label: 'No cells',
  },
};

export const SingleCell: Story = {
  args: {
    columnCount: 1,
    rowCount: 1,
    itemCount: 1,
    label: 'One cell',
  },
};

export const CustomBorder: Story = {
  args: {
    border: '2px dashed #265573',
    label: 'Custom border',
  },
};
