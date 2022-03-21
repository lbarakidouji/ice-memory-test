/*
 * @Author: Wayne
 * @Date: 2021-11-11 13:31:44
 * @LastEditTime: 2021-11-11 13:34:46
 * @LastEditors: Wayne
 */
const inquirer = require('inquirer');
const { spawn } = require('child_process');

const themeMap = require('../config/antdTheme');

console.log('\x1B[32m%s\x1b[0m', '📦 即将打包清能互联电网负荷预测管理系统');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'theme',
      message: '⊙ 请选择主题颜色：',
      choices: Object.keys(themeMap),
    },
  ])
  .then((answers) => {
    spawn(
      /^win/.test(process.platform) ? 'cross-env.cmd' : 'cross-env',
      [
        `THEME=${answers.theme}`,
        'icejs',
        'build',
        '--config',
        './build.config.js',
      ],
      {
        stdio: 'inherit',
      },
    );

    return true;
  })
  .catch((error) => {
    console.log('[debug]: error', error);
  });
