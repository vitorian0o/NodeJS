# First Program in Node.js

This section demonstrates the simplest program you can write in Node.js, which is a "Hello World" program. 

## Files in this directory

- **`programa.js`**: A JavaScript file that logs "Hello world Node!" to the console.

## Explanation of `programa.js`

Below is the content of the `programa.js` file:

```javascript
console.log("Hello world Node!");
```

### What is Happening Here?

1. **`console.log()`**:
   - This is a built-in JavaScript function used to print output to the console. In this case, it outputs the string `"Hello world Node!"` to the terminal.
   
2. **How JavaScript Works in Node.js**:
   - JavaScript, traditionally a language for web browsers, is now also used on the server side with Node.js. In a browser, JavaScript is executed inside the browser's environment, while in Node.js, JavaScript runs on the server side using the V8 engine (the same engine that powers Google Chrome).
   - Node.js extends JavaScript’s capabilities by adding server-side features, such as access to the file system, networking, and creating web servers, which are not available in a browser environment.

### Key Points:
1. **Node.js**: 
   - Node.js is a runtime environment for executing JavaScript on the server side. It uses the V8 JavaScript engine (also used in Chrome) to run JavaScript code.
   - Unlike a browser, which has its own APIs and features, Node.js provides built-in modules like `fs`, `http`, `path`, etc., to interact with the operating system and handle server-side operations.

2. **JavaScript in Node.js**:
   - The JavaScript you write in Node.js is essentially the same JavaScript you use in a browser. The major difference is that Node.js adds additional APIs and allows you to interact with the system.
   - Node.js is especially popular for building scalable and fast web applications due to its non-blocking, event-driven architecture.

## How to Run

1. Ensure that Node.js is installed on your machine.
2. Open the terminal or command prompt.
3. Navigate to the directory where `programa.js` is located.
4. Run the following command:

   ```bash
   node programa.js
   ```

You should see the output:

Hello world Node!