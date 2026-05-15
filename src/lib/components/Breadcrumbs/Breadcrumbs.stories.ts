import type { Meta, StoryObj } from '@storybook/svelte';

import Breadcrumbs from './Breadcrumbs.svelte';

const shopTrail = [
  { text: 'Home', href: '/' },
  { text: 'Shop', href: '/shop' },
  { text: 'Kitchen', href: '/shop/kitchen' },
  { text: 'Mixers', href: '' },
];

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    divider: '/',
    iconFamily: '',
    iconName: '',
    breadcrumbItems: shopTrail,
  },
  argTypes: {
    divider: { control: 'text' },
    iconFamily: { control: 'text' },
    iconName: { control: 'text' },
    breadcrumbItems: { control: 'object' },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomDivider: Story = {
  args: {
    divider: '›',
  },
};

export const IconDivider: Story = {
  args: {
    divider: '>>',
    iconFamily: 'mdi',
    iconName: 'chevron-right',
  },
};

export const TwoLevels: Story = {
  args: {
    breadcrumbItems: [
      { text: 'Docs', href: '/docs' },
      { text: 'Getting started', href: '' },
    ],
  },
};

export const SingleCrumb: Story = {
  args: {
    breadcrumbItems: [{ text: 'Dashboard', href: '' }],
  },
};
