import type { Meta, StoryObj } from '@storybook/svelte';

import Accordion, { type AccordionData } from './Accordion.svelte';

import accordionData from './accordiondata.json';

const twoSections: AccordionData[] = [
  { title: 'Shipping', text: 'We ship within 2 business days.' },
  { title: 'Returns', text: '30-day return policy.' },
];

const meta = {
  title: 'Action Components/Accordion',
  component: Accordion,
  args: {
    data: accordionData as AccordionData[],
    defaultOpen: false,
  },
  argTypes: {
    data: { control: 'object' },
    defaultOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InitiallyOpen: Story = {
  args: {
    defaultOpen: true,
  },
};

export const TwoSections: Story = {
  args: {
    data: twoSections,
  },
};

export const SingleSection: Story = {
  args: {
    data: [{ title: 'Only panel', text: 'All content lives in this single expandable section.' }],
  },
};

export const LongContent: Story = {
  args: {
    data: [
      {
        title: 'Terms of use',
        text: 'This is a longer block of placeholder copy so you can see how the accordion behaves when panel text wraps across multiple lines in the default layout.',
      },
      {
        title: 'Privacy',
        text: 'Another paragraph with enough words to exercise scrolling and line height inside the expanded region.',
      },
    ],
  },
};

export const ManyPanels: Story = {
  args: {
    data: [
      { title: 'One', text: 'First panel body.' },
      { title: 'Two', text: 'Second panel body.' },
      { title: 'Three', text: 'Third panel body.' },
      { title: 'Four', text: 'Fourth panel body.' },
      { title: 'Five', text: 'Fifth panel body.' },
    ],
  },
};
