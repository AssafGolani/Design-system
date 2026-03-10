import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/angular',
    options: {
      project: 'showcase',
    },
  },
  addons: [],
};

export default config;
