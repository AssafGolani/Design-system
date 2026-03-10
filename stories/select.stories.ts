import { Meta, StoryObj } from '@storybook/angular';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from 'ds';

const meta: Meta = {
  title: 'Components/Select',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [BrnSelectImports, HlmSelectImports],
    template: `
      <brn-select placeholder="Select a fruit" class="w-56">
        <button brnSelectTrigger hlm>
          <brn-select-value hlmSelectValue />
        </button>
        <brn-select-content hlm>
          <div brnSelectGroup>
            <label brnSelectLabel hlmSelectLabel>Fruits</label>
            <div brnOption hlmSelectOption value="apple">Apple</div>
            <div brnOption hlmSelectOption value="banana">Banana</div>
            <div brnOption hlmSelectOption value="blueberry">Blueberry</div>
            <div brnOption hlmSelectOption value="grapes">Grapes</div>
            <div brnOption hlmSelectOption value="pineapple">Pineapple</div>
          </div>
        </brn-select-content>
      </brn-select>
    `,
  }),
};
