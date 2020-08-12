module.exports = {
  stories: [
    '../src/core/**/*.stories.@([tj]s|mdx)',
    '../src/components/**/*.stories.@([tj]s|mdx)',
  ],
  addons: [
    'storybook-addon-themes',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
  ],
  webpackFinal: async config => {
    config.module.rules = [
      {
        test: /\.md$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
      ...config.module.rules.filter(rule => rule.test.source !== '\\.md$'),
    ];

    return config;
  },
};
