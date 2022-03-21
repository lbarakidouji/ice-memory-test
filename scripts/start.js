const inquirer = require('inquirer');
const { spawn } = require('child_process');
const proxyMap = require('../config/proxy.js');
const themeMap = require('../config/antdTheme');

console.log('\x1B[32m%s\x1b[0m', '🥳 欢迎启动清能互联电网负荷预测管理系统');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'proxy',
      message: '⊙ 请选择接口代理：',
      choices: Object.keys(proxyMap),
    },
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
      [`PROXY_KEY=${answers.proxy}`, `THEME=${answers.theme}`, 'icejs', 'start', '--config', './build.config.js'],
      {
        stdio: 'inherit',
      },
    );

    return true;
  })
  .catch((error) => {
    console.log('[debug]: error', error);
  });
