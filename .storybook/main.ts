import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-themes', '@storybook/addon-vitest'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
export default config;