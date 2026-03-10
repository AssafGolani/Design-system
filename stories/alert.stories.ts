import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import {
  HlmAlertDirective,
  HlmAlertTitleDirective,
  HlmAlertDescriptionDirective,
} from 'ds';

const meta: Meta<HlmAlertDirective> = {
  title: 'Components/Alert',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
};

export default meta;
type Story = StoryObj<HlmAlertDirective>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    imports: [HlmAlertDirective, HlmAlertTitleDirective, HlmAlertDescriptionDirective],
    template: `
      <div hlmAlert ${argsToTemplate(args)} class="max-w-lg">
        <h5 hlmAlertTitle>Heads up!</h5>
        <p hlmAlertDescription>You can add components to your app using the CLI.</p>
      </div>
    `,
  }),
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  render: () => ({
    imports: [HlmAlertDirective, HlmAlertTitleDirective, HlmAlertDescriptionDirective],
    template: `
      <div hlmAlert variant="destructive" class="max-w-lg">
        <h5 hlmAlertTitle>Error</h5>
        <p hlmAlertDescription>Your session has expired. Please log in again.</p>
      </div>
    `,
  }),
};
