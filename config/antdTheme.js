/* eslint-disable @typescript-eslint/no-require-imports */
/*
 * @Author: Wayne
 * @Date: 2021-11-10 16:59:35
 * @LastEditTime: 2021-11-15 16:58:29
 * @LastEditors: Wayne
 */
const southernPowerGridDarkBlue = require('../src/style/theme/southern-power-grid-dark-blue');
const southernPowerGridLightBlue = require('../src/style/theme/southern-power-grid-light-blue');
const stateGridGreen = require('../src/style/theme/state-grid-green');
const { getThemeVariables } = require('antd/dist/theme');

const dark = getThemeVariables({
  dark: true, // 开启暗黑模式
});

const getAntdTheme = (themeName) => {
  const themeList = {
    '南网蓝-深色': {
      'build-plugin-antd-theme': {
        ...dark,
        // custom
        // layout
        'layout-body-background': '#000',
        'layout-header-background': '#242c3b',
        'layout-trigger-background': '#295EF3',
        'layout-header-padding': '0px',

        // basic
        'primary-color': '#295EF3',
        'component-background': '#242C3B',

        // border
        'border-color-base': '#818181',
        'border-radius-base': '5px',

        // Menu
        'menu-dark-bg': '#242C3B',

        // Table
        'table-border-color': '#295EF3',
        'table-header-bg': '#242C3B',

        // form
        'form-error-input-bg': 'transparent',

        // Card
        'card-head-padding': '0px',
      },
      'modify-vars': { ...southernPowerGridDarkBlue },
    },
    '南网蓝-浅色': {
      'build-plugin-antd-theme': {
        'primary-color': '#295EF3',
        'link-color': '#fff',
      },
      'modify-vars': { ...southernPowerGridLightBlue },
    },
    '国网绿-浅色': {
      'build-plugin-antd-theme': {
        'primary-color': '#006F6B',
      },
      'modify-vars': { ...stateGridGreen },
    },
  };
  return themeList[themeName];
};

module.exports = {
  '南网蓝-深色': getAntdTheme('南网蓝-深色'),
  '南网蓝-浅色': getAntdTheme('南网蓝-浅色'),
  '国网绿-浅色': getAntdTheme('国网绿-浅色'),
};
