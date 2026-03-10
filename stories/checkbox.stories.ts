import { Meta, StoryObj } from '@storybook/angular';
import { BrnCheckboxImports } from '@spartan-ng/brain/checkbox';
import { HlmCheckboxImports, HlmLabelDirective } from 'ds';

const meta: Meta = {
  title: 'Components/Checkbox',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [BrnCheckboxImports, HlmCheckboxImports, HlmLabelDirective],
    template: `
      <div class="flex items-center space-x-2">
        <hlm-checkbox>
          <brn-checkbox id="terms">
            <hlm-checkbox-checkicon />
          </brn-checkbox>
        </hlm-checkbox>
        <label hlmLabel for="terms">Accept terms and conditions</label>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    imports: [BrnCheckboxImports, HlmCheckboxImports, HlmLabelDirective],
    template: `
      <div class="flex items-center space-x-2">
        <hlm-checkbox>
          <brn-checkbox id="disabled" disabled>
            <hlm-checkbox-checkicon />
          </brn-checkbox>
        </hlm-checkbox>
        <label hlmLabel for="disabled" class="opacity-50">Disabled checkbox</label>
      </div>
    `,
  }),
};
