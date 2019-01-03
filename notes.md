# Testing JavaScript

To require globals, export your functions to the global object:
```js
global.someFunction = someFunction
```

Then require the file when running node:
```bash
node --require ./globals-file.js ./test-file.js
```
