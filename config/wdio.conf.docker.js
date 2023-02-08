const {config} = require("./wdio.conf");
const dockerConfig  = {
    ...config,
    services: [],
    maxInstances: 1,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    capabilities: [
        {
          maxInstances: 1,
          browserName: 'chrome',
          acceptInsecureCerts: true,
          'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080', '--allow-insecure-localhost']
          },
        },
        {
          maxInstances: 1,
          browserName: 'firefox',
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: ['--headless']
          },
        }
        ],
};
exports.config = dockerConfig;
