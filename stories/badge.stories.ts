import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { HlmBadgeDirective } from 'ds';

const meta: Meta<HlmBadgeDirective> = {
  title: 'Components/Badge',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<HlmBadgeDirective>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    imports: [HlmBadgeDirective],
    template: `<span hlmBadge ${argsToTemplate(args)}>Badge</span>`,
  }),
  args: {
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => ({
    imports: [HlmBadgeDirective],
    template: `
      <div class="flex flex-wrap gap-4">
        <span hlmBadge variant="default">Default</span>
        <span hlmBadge variant="secondary">Secondary</span>
        <span hlmBadge variant="destructive">Destructive</span>
        <span hlmBadge variant="outline">Outline</span>
      </div>
    `,
  }),
};
