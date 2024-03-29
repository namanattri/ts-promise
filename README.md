[![Promises/A+ logo](https://promisesaplus.com/assets/logo-small.png)](https://promisesaplus.com/)

# ts-promise
Promises/A+ specifications implementation with TypeScript

## How to quickly run test suite?
Simply run the following command, as the [Promises/A+ Compliance Test Suite](https://github.com/promises-aplus/promises-tests) has already been added by me as dev dependency.

```bash
npm run test
```

## Where to find code?

Look inside [src/](https://github.com/namanattri/ts-promise/tree/master/src) to find typescript well structured, documented and linted code. Look inside [lib/](https://github.com/namanattri/ts-promise/tree/master/lib) for transpiled tsc to js code.

Implementation is written in typescript. I have used [TypeScript-Babel-Starter](https://github.com/Microsoft/TypeScript-Babel-Starter#readme) instructions for transpiling.

## Dev Dependencies

```javascript
"devDependencies": {
  "@babel/cli": "^7.2.3",
  "@babel/core": "^7.3.4",
  "@babel/plugin-proposal-class-properties": "^7.3.4",
  "@babel/plugin-proposal-object-rest-spread": "^7.3.4",
  "@babel/preset-env": "^7.3.4",
  "@babel/preset-typescript": "^7.3.3",
  "promises-aplus-tests": "^2.1.2",
  "tslint": "^5.14.0",
  "typescript": "^3.3.3333"
}
```

## Linting
I have used tslint for linting with basic configuration in [tslint.json](https://github.com/namanattri/ts-promise/blob/master/tslint.json) as:

```javascript
{
  "defaultSeverity": "error",
  "extends": [
      "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
      "interface-name": false
  },
  "rulesDirectory": []
}
```

## Other Available Scripts
Other available cli scripts as they appear in [package.json](https://github.com/namanattri/ts-promise/blob/master/package.json)

```javascript
"scripts": {
  "type-check": "tsc --noEmit",
  "type-check:watch": "npm run type-check -- --watch",
  "build": "npm run lint && npm run build:types && npm run build:js",
  "build:types": "tsc --emitDeclarationOnly",
  "build:js": "babel src --out-dir lib --extensions \".ts,.tsx\" --source-maps inline",
  "lint": "tslint -c tslint.json 'src/**/*.ts'",
  "test": "promises-aplus-tests ./lib/Adapter"
}
```

## Example use case of MyPromise

```javascript
let MyPromise = require('./lib/MyPromise').default;

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() < 0.5) {
      resolve("success");
    } else {
      reject(new Error("failed"));
    }
  }, 5 * 1000);
});

promise.then(value => {
  console.log("Promise resolved with value: " + value);
}).catch(err => {
  console.log("Promise rejected with error: " + err.message);
});
```