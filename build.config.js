/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-require-imports */
/*
 * @Author: Wayne
 * @Date: 2021-10-18 16:19:57
 * @LastEditTime: 2021-12-16 10:32:48
 * @LastEditors: weiman
 */
const proxyMap = require('./config/proxy');
const themeMap = require('./config/antdTheme');

const { PROXY_KEY, THEME } = process.env;

module.exports = {
  publicPath: './',
  hash: true,
  vendor: true,
  outputDir: 'dist',
  // store: false,
  define: {
    TSIETHEME: THEME.split('-')[1] === '浅色' ? 'light' : 'dark',
    THEMENAME: THEME,
  },
  proxy: PROXY_KEY
    ? proxyMap[PROXY_KEY]
    : {
        '/web': {
          target: 'https://192.168.3.224:8083/lf',
          pathRewrite: {
            '/web': '/web',
          },
          enable: true,
        },
      },
  lessLoaderOptions: {
    modifyVars: {
      ...themeMap[THEME]['modify-vars'],
    },
    math: 0,
  },
  plugins: [
    [
      'build-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
    [
      'build-plugin-antd',
      {
        disableModularImport: true,
        themeConfig: THEME
          ? {
              ...themeMap[THEME]['build-plugin-antd-theme'],
            }
          : {
              'primary-color': '#295EF3',
              'link-color': 'rgb(0, 0, 0, 0.65)',
              'text-color': 'rgb(0, 0, 0, 0.65)',
              'table-header-bg': '#242c3b',
            },
      },
    ],
  ],
};
