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
ENV=prod|dev npm run wdio `#E9FCD3`
```
- To run tests in headless mode in Chrome browser:  
```sh
ENV=prod|dev npm run wdio:chrome `#E9FCD3`
```
- To run tests in headless mode in Firefox browser:  
```sh
ENV=prod|dev npm run wdio:firefox `#E9FCD3`
```
- To run single test in headless mode in Chrome browser:  
```sh
ENV=prod|dev  npx wdio run ./wdio.conf.chrome.js --spec ./test/specs/{name}.e2e.js `#E9FCD3`
```
- To run single test in headless mode in Firefox browser:  
```sh
ENV=prod|dev npx wdio run ./wdio.conf.firefox.js --spec ./test/specs/{name}.e2e.js `#E9FCD3`
```
- Generate and open allure report:  
```sh
npm run allure:generate `#E9FCD3`
```

## Run tests in Docker
- Build image:  
```sh
npm run docker:build `#E9FCD3`
```
- Run container:  
```sh
ENV=prod|dev npm run wdio:docker `#E9FCD3`
```
## GitHub Pages:

To see the automatically generated HTML report with test execution:
- <a href="https://pzhannet.github.io/WebdriverIO-Telnyx/"> Report </a>


