### Prerequisites
You will need [git](https://git-scm.com/) and [node.js](https://nodejs.org/) before running.

## Installing / Getting started
Clone and install dependencies
1. `https://github.com/cfviotti/youlead-test.git`
2. `cd youlead-test`
3. `npm i`

### Setting up locally
```shell
npm run dev
```
This will run dev config stored under `/configuration`, serving a local webpack-dev-server under `localhost:3000`

### Building for deployment
```shell
npm run build
```
This will run production config stored under `/configuration`, compiling static files under `/dist` for deployment