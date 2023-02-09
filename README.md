# # **WebdriverIo + Docker + Allure Report** :sunglasses:
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
- Run tests:  
```sh
npm run wdio
```
- Generate and open allure report:  
```sh
npm run allure:generate
```

## Run tests in Docker
- Build image:  
```sh
docker-compose -f ./docker/docker-compose.yml up 
```
- Run container:  
```sh
npm run wdio:docker
```

