const config = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/preset-create-react-app",
    '@storybook/addon-actions',
    '@storybook/addon-controls',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: "webpack5",
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      }],
    });

    return config;
  },
  docs: {
    autodocs: "tag",
  },
};

module.exports = config;
