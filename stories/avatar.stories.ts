import { Meta, StoryObj } from '@storybook/angular';
import { BrnAvatarImports } from '@spartan-ng/brain/avatar';
import { HlmAvatarImports } from 'ds';

const meta: Meta = {
  title: 'Components/Avatar',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [BrnAvatarImports, HlmAvatarImports],
    template: `
      <brn-avatar hlm>
        <span brnAvatarFallback hlmAvatarFallback>AG</span>
      </brn-avatar>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    imports: [BrnAvatarImports, HlmAvatarImports],
    template: `
      <div class="flex items-center gap-4">
        <brn-avatar hlm size="sm">
          <span brnAvatarFallback hlmAvatarFallback>SM</span>
        </brn-avatar>
        <brn-avatar hlm>
          <span brnAvatarFallback hlmAvatarFallback>MD</span>
        </brn-avatar>
        <brn-avatar hlm size="lg">
          <span brnAvatarFallback hlmAvatarFallback>LG</span>
        </brn-avatar>
      </div>
    `,
  }),
};
