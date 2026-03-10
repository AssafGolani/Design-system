import { Meta, StoryObj } from '@storybook/angular';
import { BrnDialogImports } from '@spartan-ng/brain/dialog';
import {
  HlmDialogImports,
  HlmButtonDirective,
  HlmInputDirective,
  HlmLabelDirective,
} from 'ds';

const meta: Meta = {
  title: 'Components/Dialog',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [BrnDialogImports, HlmDialogImports, HlmButtonDirective, HlmInputDirective, HlmLabelDirective],
    template: `
      <brn-dialog>
        <button brnDialogTrigger hlmBtn>Edit Profile</button>
        <ng-template brnDialogContent>
          <div hlmDialogContent>
            <div hlmDialogHeader>
              <h3 hlmDialogTitle brnDialogTitle>Edit profile</h3>
              <p hlmDialogDescription brnDialogDescription>
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <label hlmLabel class="text-right">Name</label>
                <input hlmInput class="col-span-3" value="Pedro Duarte" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <label hlmLabel class="text-right">Username</label>
                <input hlmInput class="col-span-3" value="@peduarte" />
              </div>
            </div>
            <div hlmDialogFooter>
              <button hlmBtn brnDialogClose>Save changes</button>
            </div>
          </div>
        </ng-template>
      </brn-dialog>
    `,
  }),
};
