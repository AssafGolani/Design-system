import { Meta, StoryObj } from '@storybook/angular';
import { HlmLabelDirective } from 'ds';

const meta: Meta<HlmLabelDirective> = {
  title: 'Components/Label',
};

export default meta;
type Story = StoryObj<HlmLabelDirective>;

export const Default: Story = {
  render: () => ({
    imports: [HlmLabelDirective],
    template: `<label hlmLabel>Your email address</label>`,
  }),
};

export const Disabled: Story = {
  render: () => ({
    imports: [HlmLabelDirective],
    template: `<label hlmLabel class="opacity-50">Disabled label</label>`,
  }),
};
