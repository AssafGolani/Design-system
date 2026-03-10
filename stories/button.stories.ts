import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { HlmButtonDirective } from 'ds';

const meta: Meta<HlmButtonDirective> = {
  title: 'Components/Button',
  decorators: [
    (story) => ({
      ...story(),
      template: `<div class="flex flex-wrap items-center gap-4">${story().template}</div>`,
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<HlmButtonDirective>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    imports: [HlmButtonDirective],
    template: `<button hlmBtn ${argsToTemplate(args)}>Button</button>`,
  }),
  args: {
    variant: 'default',
    size: 'default',
  },
};

export const AllVariants: Story = {
  render: () => ({
    imports: [HlmButtonDirective],
    template: `
      <button hlmBtn variant="default">Default</button>
      <button hlmBtn variant="secondary">Secondary</button>
      <button hlmBtn variant="destructive">Destructive</button>
      <button hlmBtn variant="outline">Outline</button>
      <button hlmBtn variant="ghost">Ghost</button>
      <button hlmBtn variant="link">Link</button>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    imports: [HlmButtonDirective],
    template: `
      <button hlmBtn size="sm">Small</button>
      <button hlmBtn size="default">Default</button>
      <button hlmBtn size="lg">Large</button>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    imports: [HlmButtonDirective],
    template: `
      <button hlmBtn disabled>Disabled</button>
      <button hlmBtn variant="outline" disabled>Disabled Outline</button>
    `,
  }),
};
