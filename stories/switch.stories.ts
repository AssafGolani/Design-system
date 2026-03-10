import { Meta, StoryObj } from '@storybook/angular';
import { BrnSwitchImports } from '@spartan-ng/brain/switch';
import { HlmSwitchImports, HlmLabelDirective } from 'ds';

const meta: Meta = {
  title: 'Components/Switch',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [BrnSwitchImports, HlmSwitchImports, HlmLabelDirective],
    template: `
      <div class="flex items-center space-x-2">
        <brn-switch hlm id="airplane-mode">
          <brn-switch-thumb hlm />
        </brn-switch>
        <label hlmLabel for="airplane-mode">Airplane Mode</label>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    imports: [BrnSwitchImports, HlmSwitchImports, HlmLabelDirective],
    template: `
      <div class="flex items-center space-x-2">
        <brn-switch hlm id="disabled" disabled>
          <brn-switch-thumb hlm />
        </brn-switch>
        <label hlmLabel for="disabled" class="opacity-50">Disabled</label>
      </div>
    `,
  }),
};
