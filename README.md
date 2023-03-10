# :four_leaf_clover: **WebdriverIo + Docker + Allure Report** :four_leaf_clover:
## Project description
- Created 20 tests in WebdriverIO for testing the Telnyx website: https://telnyx.com/

## Technologies
- Node.js: 16.14.2
- Java 8 or above
- Docker desktop app
- JDK 17

## Project set up
1. Clone the project `git clone https://github.com/PZhannet/WebdriverIO-Telnyx`
2. Move to the 5.1WebdriverIoTelnyx folder `cd -5.1WebdriverIoTelnyx`
3. Run `npm i` (install node.js dependencies)

## Usage
- To run tests in headless mode in Chrome and Firefox browsers:  
```sh
ENV=prod|dev npm run wdio  
```
- To run tests in headless mode in Chrome browser:  
```sh
ENV=prod|dev npm run wdio:chrome  
```
- To run tests in headless mode in Firefox browser:  
```sh
ENV=prod|dev npm run wdio:firefox  
```
- To run single test in headless mode in Chrome browser:  
```sh
ENV=prod|dev  npx wdio run ./wdio.conf.chrome.js --spec ./config/test/specs/{name}.e2e.js  
```
- To run single test in headless mode in Firefox browser:  
```sh
ENV=prod|dev npx wdio run ./config/wdio.conf.firefox.js --spec ./test/specs/{name}.e2e.js  
```
- Generate and open allure report:  
```sh
npm run allure:generate  
```

## Run tests in Docker
- Build image:  
```sh
npm run docker:build  
```
- Run container:  
```sh
ENV=prod|dev npm run wdio:docker  
```
## GitHub Pages:

To see the automatically generated HTML report with test execution:
- <a href="https://pzhannet.github.io/WebdriverIO-Telnyx/"> Report </a>


