# Difference Between Traditional Module Exporting and `.mjs` Files in Node.js

In Node.js, you can create and export modules in two different ways: using CommonJS (the default module system in Node.js) and using the newer ES Modules (ESM) format. The way you export and import modules differs between these two systems, especially when dealing with `.mjs` files.

## CommonJS (Traditional Node.js Module System)

In CommonJS, which is the default system in Node.js, you export a module using the `module.exports` object and import it using the `require()` function.

### Example: CommonJS Module

```javascript
// math.js (CommonJS)
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
```

To import and use the module:

```javascript
// app.js
const math = require('./math');

console.log(math.add(5, 3)); // Output: 8
```

This system is widely used in Node.js applications, and the .js extension is typically used for CommonJS modules.

## ES Modules (Using `.mjs` files)

With ES Modules, you use the export and import keywords to export and import modules. This syntax is similar to what is used in the browser's JavaScript.

### To use ES Modules, you need to either:

1. Change the file extension to .mjs, or
2. Use "type": "module" in your package.json to enable the ESM syntax in .js files.

Example: ES Module

```javascript
// math.mjs (ES Module)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

To import and use the module:

```javascript
// app.mjs
import * as math from './math.mjs';

console.log(math.add(5, 3)); // Output: 8
```

## Key Differences

### Syntax:
- **CommonJS**: Uses `module.exports` to export and `require()` to import.
- **ES Modules**: Uses `export` and `import` statements.

### File Extensions:
- **CommonJS**: Typically uses `.js`.
- **ES Modules**: Requires `.mjs` file extension or setting `"type": "module"` in `package.json`.

### Synchronous vs Asynchronous:
- **CommonJS**: `require()` is synchronous.
- **ES Modules**: `import` can be asynchronous when using dynamic imports (`import()`).

## Which Should You Use?
- **Use CommonJS** if you're working with older Node.js codebases or packages that haven't adopted ESM.
- **Use ES Modules** if you prefer modern JavaScript syntax or you're working on projects that will be used both in Node.js and the browser.

By understanding the differences between CommonJS and ES Modules, you can choose the right module system for your Node.js application and ensure compatibility with modern JavaScript standards.