import type { Meta, StoryObj } from '@storybook/svelte';

import Dialog from './Dialog.svelte';

const meta = {
  title: 'Action Components/Dialog',
  component: Dialog,
  args: {
    showDialog: true,
    showBackground: false,
    modalTitle: 'Modal title',
    modalText: 'Click on the X to close me',
  },
  argTypes: {
    showDialog: { control: 'boolean' },
    showBackground: { control: 'boolean' },
    modalTitle: { control: 'text' },
    modalText: { control: 'text' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackground: Story = {
  args: {
    showBackground: true,
    modalTitle: 'Confirm action',
    modalText: 'The dimmed backdrop helps focus attention on this dialog.',
  },
};

export const Closed: Story = {
  args: {
    showDialog: false,
    modalTitle: 'Hidden dialog',
    modalText: 'Use the “Show dialog” button to open this modal.',
  },
};

export const CustomContent: Story = {
  args: {
    showBackground: true,
    modalTitle: 'Delete project?',
    modalText: 'This cannot be undone. All related data will be removed permanently.',
  },
};

export const LongText: Story = {
  args: {
    showBackground: true,
    modalTitle: 'Terms of service',
    modalText:
      'By continuing you agree to our terms, privacy policy, and acceptable use guidelines. You can review the full documents on our website or contact support if you have questions.',
  },
};
