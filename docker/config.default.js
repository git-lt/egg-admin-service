'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
    logger: {
      consoleLevel: 'DEBUG',
    },
    mongoose: {
      clients: {
        back: {
          url: 'mongodb://127.0.0.1/back',
          options: {},
        },
      },
    },
    view: {
      root: path.join(appInfo.baseDir, 'app/assets'),
      mapping: {
        '.html': 'nunjucks',
      },
    },
    static: {
      prefix: '/',
      dir: [path.join(appInfo.baseDir, 'app/assets'),path.join(appInfo.baseDir, 'app/public')]
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.cluster = {
    listen: {
      path: '',
      port: 3000,
      hostname: '',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515465031562_6723';

  return config;
};
