import type { Meta, StoryObj } from '@storybook/svelte';

import Tooltip from './Tooltip.svelte';

const defaultTip = 'Hover or focus the ? button to see this message.';

const htmlTip =
  '<strong>Note:</strong> You can use <em>HTML</em> in the tip when <code>showHtml</code> is enabled.';

const longTip =
  'This tooltip includes more detail than usual. Use it for field-level help, policy notes, or short explanations that do not fit beside the label.';

const meta = {
  title: 'Action Components/Tooltip',
  component: Tooltip,
  args: {
    id: 'tooltip',
    label: 'Help',
    tip: defaultTip,
    timeout: 400,
    showHtml: false,
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    tip: { control: 'text' },
    timeout: { control: 'number' },
    showHtml: { control: 'boolean' },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FastOpen: Story = {
  args: {
    timeout: 0,
    label: 'Quick help',
    tip: 'Appears immediately when you hover the trigger.',
  },
};

export const SlowOpen: Story = {
  args: {
    timeout: 800,
    label: 'Delayed help',
    tip: 'This tooltip waits longer before opening.',
  },
};

export const WithHtml: Story = {
  args: {
    showHtml: true,
    label: 'Formatted help',
    tip: htmlTip,
  },
};

export const LongTip: Story = {
  args: {
    label: 'Extended help',
    tip: longTip,
  },
};

export const CustomId: Story = {
  args: {
    id: 'billing-tooltip',
    label: 'Billing help',
    tip: 'Charges are processed at the end of each billing cycle.',
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Password requirements',
    tip: 'Use at least 12 characters with a mix of letters, numbers, and symbols.',
  },
};
