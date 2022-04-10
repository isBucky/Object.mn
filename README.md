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
  /**
   * You can use these parameters below to configure the manager:
   * 
   * @param {Object} [object] Source object to save the information.
   * @param {?String} [split] Query path separator.
   */
  myObjectManager = new ObjectManager(myObject, /* '/' */);
  
console.log(myObjectManager);
~~~

# Functions and options

## [Set(...params)](./index.js#49)
**Use this function to set values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Value**:
    - **Type:** `Any`
    - **Required:** `true`
    - **Example:** `your value`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject);

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data);
});
~~~

## [Get(...params)](./index.js#78)
**Use this function to get values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
let data = myObjectManager.get('path/to/value');
console.log(data);

// Using callback:
myObjectManager.get('path/to/value', (data) => {
  return console.log(data);
});
~~~

## [Delete(...params)](./index.js#98)
**Use this function to delete a specific value in the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.delete('path/to/value');
console.log(myObject);

// Using callback:
myObjectManager.delete('path/to/value', (data) => {
  return console.log(data);
});
~~~

## [Set(...params)](./index.js#49)
**Use this function to set values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Value**:
    - **Type:** `Any`
    - **Required:** `true`
    - **Example:** `your value`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject);

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data);
});
~~~

## [Set(...params)](./index.js#49)
**Use this function to set values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Value**:
    - **Type:** `Any`
    - **Required:** `true`
    - **Example:** `your value`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject);

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data);
});
~~~

## [Set(...params)](./index.js#49)
**Use this function to set values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Value**:
    - **Type:** `Any`
    - **Required:** `true`
    - **Example:** `your value`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject);

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data);
});
~~~

## [Set(...params)](./index.js#49)
**Use this function to set values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Value**:
    - **Type:** `Any`
    - **Required:** `true`
    - **Example:** `your value`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject);

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data);
});
~~~

## [Set(...params)](./index.js#49)
**Use this function to set values inside the object.**

- **Params**:
  - **Path**:
    - **Type**: `String`
    - **Required**: `true`
    - **Example**: `'path/to/value'`
  - **Value**:
    - **Type:** `Any`
    - **Required:** `true`
    - **Example:** `your value`
  - **Callback**:
    - **Type:** `Function`
    - **Required:** `False`
    - **Example:** `(data) => console.log(data)`
  
~~~javascript
// Without using callback:
myObjectManager.set('path/to/value', true);
console.log(myObject);

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  return console.log(data);
});
~~~