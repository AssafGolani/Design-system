import { Meta, StoryObj } from '@storybook/angular';
import { BrnTabsImports } from '@spartan-ng/brain/tabs';
import {
  HlmTabsImports,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
  HlmCardDescriptionDirective,
  HlmCardContentDirective,
  HlmCardFooterDirective,
  HlmButtonDirective,
  HlmInputDirective,
  HlmLabelDirective,
} from 'ds';

const meta: Meta = {
  title: 'Components/Tabs',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [
      BrnTabsImports,
      HlmTabsImports,
      HlmCardDirective,
      HlmCardHeaderDirective,
      HlmCardTitleDirective,
      HlmCardDescriptionDirective,
      HlmCardContentDirective,
      HlmCardFooterDirective,
      HlmButtonDirective,
      HlmInputDirective,
      HlmLabelDirective,
    ],
    template: `
      <div brnTabs="account" hlm class="w-[400px]">
        <div hlmTabsList class="grid w-full grid-cols-2">
          <button hlmTabsTrigger brnTabsTrigger="account">Account</button>
          <button hlmTabsTrigger brnTabsTrigger="password">Password</button>
        </div>
        <div hlmTabsContent brnTabsContent="account">
          <div hlmCard>
            <div hlmCardHeader>
              <h3 hlmCardTitle>Account</h3>
              <p hlmCardDescription>Make changes to your account here.</p>
            </div>
            <div hlmCardContent class="space-y-2">
              <div class="space-y-1">
                <label hlmLabel for="name">Name</label>
                <input hlmInput id="name" value="Pedro Duarte" />
              </div>
              <div class="space-y-1">
                <label hlmLabel for="username">Username</label>
                <input hlmInput id="username" value="@peduarte" />
              </div>
            </div>
            <div hlmCardFooter>
              <button hlmBtn>Save changes</button>
            </div>
          </div>
        </div>
        <div hlmTabsContent brnTabsContent="password">
          <div hlmCard>
            <div hlmCardHeader>
              <h3 hlmCardTitle>Password</h3>
              <p hlmCardDescription>Change your password here.</p>
            </div>
            <div hlmCardContent class="space-y-2">
              <div class="space-y-1">
                <label hlmLabel for="current">Current password</label>
                <input hlmInput id="current" type="password" />
              </div>
              <div class="space-y-1">
                <label hlmLabel for="new">New password</label>
                <input hlmInput id="new" type="password" />
              </div>
            </div>
            <div hlmCardFooter>
              <button hlmBtn>Save password</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
