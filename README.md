<div align="center">
  <h1>Object.mn</h1>
  <p>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://img.shields.io/npm/v/object.mn?style=flat-square&maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://img.shields.io/npm/dt/object.mn?style=flat-square&maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://img.shields.io/github/languages/code-size/isBucky/Object.mn?style=flat-square&maxAge=3600" alt="NPM size" /></a>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://img.shields.io/npm/l/object.mn?style=flat-square&maxAge=3600" alt="NPM license" /></a>
  </p>
  <p><a href="https://www.npmjs.com/package/object.mn"><img src="https://nodei.co/npm/object.mn.png?downloads=true&stars=true" alt="NPM Banner"></a></p>
  <p><strong>An npm with various functions to manage objects.</strong></p>
</div>

# Installation
> Your Node.js must be version 16.6.0 or higher!

~~~sh
# Using npm:
npm install object.mn --save

# Using yarn:
yarn add object.mn
~~~

# Introduction
~~~javascript
// Supports ES6 and CommonJS
import ObjectManager from 'object.mn';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
console.log(myObjectManager);
~~~

# Functions and options
## []
## [myObjectManager.set(...params)](./index.js#49)
- Params:
  - Path: `Path where the value will be set.`
  - Value: `A value to be set on the object.`
  - Callback?: `Return the result in callback.`

~~~javascript
import ObjectManager from 'object.mn';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject); // Output: { path: { to: { value: true } } }

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data); // Output: { path: { to: { value: true } } }
});
~~~

| Name | Params |
| ---- | ------ |
| `set` | `Object` `path` `values` `split` `callback` |
| `get` | `Object` `path` `split` `callback` |
| `delete` | `Object` `path` `split` `callback` |
| `update` | `Object` `path` `object value` `split` `callback` |
| `has` | `Object` `path` `split` `callback` |
| `push` | `Object` `path` `values``split` `callback` |
| `keys` | `Object` `path` `split` `callback` |
| `toJSON` | `Object` `path` `split` `callback` |
| `values` | `Object` `path` `split` `callback` |
| `entries` | `Object` `path` `split` `callback` |