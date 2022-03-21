/* eslint-disable @iceworks/best-practices/no-http-url */
/*
 * @Author: Wayne
 * @Date: 2021-10-18 16:21:53
 * @LastEditTime: 2022-01-25 13:33:35
 * @LastEditors: LvShun
 */
const getProxy = (target, pathRewrite) => {
  return {
    '/web': {
      target,
      pathRewrite: {
        '/web': pathRewrite,
      },
      enable: true,
    },
  };
};

module.exports = {
  YApi: getProxy('http://yapi.devops.tsintergy.com/mock/101053/', ''),
  RAP2: getProxy('http://120.78.68.3:8088', '/app/mock/27'),
  线上99测试环境: getProxy('http://192.168.3.99/dnlf_zy', '/web'),
  广东: getProxy('http://192.168.3.99/lf_gd_v3', '/web'),
  宏宇: getProxy('http://192.168.3.224:8600', '/web'),
  志明: getProxy('http://192.168.3.206:8083', '/lf/web'),
  晨哥: getProxy('http://192.168.3.229:8400', '/lf/web'),
  念忠: getProxy('http://192.168.3.122:8600', '/web'),
};
