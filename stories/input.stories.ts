import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { HlmInputDirective, HlmLabelDirective } from 'ds';

const meta: Meta<HlmInputDirective> = {
  title: 'Components/Input',
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    error: {
      control: 'select',
      options: ['auto', true, false],
    },
  },
};

export default meta;
type Story = StoryObj<HlmInputDirective>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    imports: [HlmInputDirective],
    template: `<input hlmInput ${argsToTemplate(args)} type="email" placeholder="Email" class="max-w-sm" />`,
  }),
  args: {
    size: 'default',
  },
};

export const Sizes: Story = {
  render: () => ({
    imports: [HlmInputDirective],
    template: `
      <div class="flex flex-col gap-4 max-w-sm">
        <input hlmInput size="sm" placeholder="Small" />
        <input hlmInput size="default" placeholder="Default" />
        <input hlmInput size="lg" placeholder="Large" />
      </div>
    `,
  }),
};

export const WithLabel: Story = {
  render: () => ({
    imports: [HlmInputDirective, HlmLabelDirective],
    template: `
      <div class="grid w-full max-w-sm gap-1.5">
        <label hlmLabel for="email">Email</label>
        <input hlmInput type="email" id="email" placeholder="Email" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    imports: [HlmInputDirective],
    template: `<input hlmInput disabled placeholder="Disabled" class="max-w-sm" />`,
  }),
};

export const WithError: Story = {
  render: () => ({
    imports: [HlmInputDirective],
    template: `<input hlmInput [error]="true" placeholder="Error state" class="max-w-sm" />`,
  }),
};
