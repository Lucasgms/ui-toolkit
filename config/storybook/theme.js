const $darkBlue = 'rgb(0, 40, 104)';
const $lightGreenBlue = 'rgb(4, 247, 247)';
const $lightNeutral = 'rgb(244, 247, 251)';
// const $neutral = 'rgb(208, 221, 234)';
const $darkNeutral = 'rgb(48, 69, 92)';
const $mediumNeutral = 'rgb(123, 146, 171)';

const $transparent = 'transparent';
const $white = 'rgb(255, 255, 255)';

const $colorPrimary = $darkBlue;
const $colorSecondary = $lightGreenBlue;

const $borderRadius = 2;

export const theme = {
  base: 'light',

  colorPrimary: $colorPrimary,
  colorSecondary: $colorSecondary,

  // UI
  appBg: $white,
  appContentBg: $lightNeutral,
  appBorderColor: $transparent,
  appBorderRadius: $borderRadius,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: $darkNeutral,
  textInverseColor: $white,

  // Toolbar default and active colors
  barTextColor: $mediumNeutral,
  barSelectedColor: $white,
  barBg: $colorPrimary,

  // Form colors
  inputBg: $white,
  inputBorder: $lightNeutral,
  inputTextColor: $darkNeutral,
  inputBorderRadius: $borderRadius,

  brandTitle: 'Guardian',
  brandUrl: 'https://www.contabilizei.com.br/',
  brandImage: 'https://www.contabilizei.com.br/_nuxt/img/8655c4a.svg',
};
