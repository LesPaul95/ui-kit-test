module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y'],
  typescript: {
    check: true,
  }
};
