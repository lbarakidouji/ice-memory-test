/* eslint-disable no-console */
/*
 * @Author: Wayne
 * @Date: 2021-10-18 16:33:29
 * @LastEditTime: 2021-10-18 16:33:29
 * @LastEditors: Wayne
 */
// node模块
const fs = require('fs-extra'); // 文件模块
const path = require('path'); // 路径模块

// npm包
const inquirer = require('inquirer'); // 支持交互
const chalk = require('chalk'); // 修改终端字符串的样式
const ora = require('ora'); // 终端中loading、显示动态效果

const proPath = path.join(__dirname, '..', '..', 'production');
const distPath = path.join(__dirname, '..', 'dist');

console.log(chalk.black.bgYellow.bold('发布之前必须进行自测'));
inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'ready',
      message: '你确定要发布dist中的内容到 production中吗？',
    },
  ])
  .then((answer) => {
    if (answer.ready) {
      // console.log(proPath, distPath)
      const spinner = ora('正在进行发布操作');
      spinner.start(`清空${proPath}`);
      fs.emptyDir(proPath, (err) => {
        if (err) {
          console.log('删除文件出现错误', err);
          spinner.fail(err);
        } else {
          spinner.succeed();
          spinner.start(`复制${distPath} 到 ${proPath}`);
          fs.copy(distPath, proPath, (error) => {
            if (error) return console.error(error);
            spinner.succeed();
            console.log('拷贝成功');
          });
        }
      });
    }
  });
