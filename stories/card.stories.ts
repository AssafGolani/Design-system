import { Meta, StoryObj } from '@storybook/angular';
import {
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
  title: 'Components/Card',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    imports: [
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
      <div hlmCard class="w-[350px]">
        <div hlmCardHeader>
          <h3 hlmCardTitle>Create project</h3>
          <p hlmCardDescription>Deploy your new project in one-click.</p>
        </div>
        <div hlmCardContent>
          <div class="grid w-full gap-1.5">
            <label hlmLabel for="name">Name</label>
            <input hlmInput id="name" placeholder="Name of your project" />
          </div>
        </div>
        <div hlmCardFooter class="flex justify-between">
          <button hlmBtn variant="outline">Cancel</button>
          <button hlmBtn>Deploy</button>
        </div>
      </div>
    `,
  }),
};

export const Simple: Story = {
  render: () => ({
    imports: [
      HlmCardDirective,
      HlmCardHeaderDirective,
      HlmCardTitleDirective,
      HlmCardDescriptionDirective,
      HlmCardContentDirective,
    ],
    template: `
      <div hlmCard class="w-[350px]">
        <div hlmCardHeader>
          <h3 hlmCardTitle>Notifications</h3>
          <p hlmCardDescription>You have 3 unread messages.</p>
        </div>
        <div hlmCardContent>
          <p>Card content goes here.</p>
        </div>
      </div>
    `,
  }),
};
