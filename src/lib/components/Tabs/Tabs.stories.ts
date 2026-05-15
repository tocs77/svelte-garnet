import type { Meta, StoryObj } from '@storybook/svelte';

import Tabs from './Tabs.svelte';

import tabItems from './tabsdata.json';

type TabItem = {
  id: number;
  name: string;
  text: string;
};

const twoTabs: TabItem[] = [
  { id: 1, name: 'Overview', text: 'Overview panel content.' },
  { id: 2, name: 'Details', text: 'Details panel content.' },
];

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  args: {
    activeTabValue: 1,
    items: tabItems as TabItem[],
  },
  argTypes: {
    activeTabValue: { control: 'number' },
    items: { control: 'object' },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondTabActive: Story = {
  args: {
    activeTabValue: 2,
  },
};

export const ThirdTabActive: Story = {
  args: {
    activeTabValue: 3,
  },
};

export const TwoTabs: Story = {
  args: {
    items: twoTabs,
    activeTabValue: 1,
  },
};

export const SingleTab: Story = {
  args: {
    items: [{ id: 1, name: 'Dashboard', text: 'Only one tab panel is shown here.' }],
    activeTabValue: 1,
  },
};
