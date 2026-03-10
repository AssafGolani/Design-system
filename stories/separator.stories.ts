import { Meta, StoryObj } from '@storybook/angular';
import { BrnSeparatorImports } from '@spartan-ng/brain/separator';
import { HlmSeparatorDirective } from 'ds';

const meta: Meta = {
  title: 'Components/Separator',
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => ({
    imports: [BrnSeparatorImports, HlmSeparatorDirective],
    template: `
      <div class="max-w-sm">
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
          <p class="text-sm text-muted-foreground">An open-source UI component library.</p>
        </div>
        <brn-separator hlm class="my-4" />
        <p class="text-sm">Content below separator</p>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
    imports: [BrnSeparatorImports, HlmSeparatorDirective],
    template: `
      <div class="flex h-5 items-center space-x-4 text-sm">
        <span>Blog</span>
        <brn-separator hlm orientation="vertical" />
        <span>Docs</span>
        <brn-separator hlm orientation="vertical" />
        <span>Source</span>
      </div>
    `,
  }),
};
