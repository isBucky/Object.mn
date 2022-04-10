<div align="center">
  <h1>Synchronous Functions</h1>
  <p><strong>Synchronous functions are basically functions that don't need Async/Await.</strong></p>
  <p><strong>They can also be used as a callback, passing a function in the parameters that returns the value of the query.</strong></p>
</div>

# Table of methods
- [Set()](#setparams)
- [Get()](#getparams)
- [Delete()](#deleteparams)

# Set(...params)
> Use this function to set values inside the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Value
    - Type: `Any`
    - Required: `true`
    - Example: `your value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L49)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.set('path/to/value', true)); // output: { value: true }
console.log(myObject); // output: { path: { to: { value: true } } }

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  console.log(data); // output: { value: true }
  console.log(myObject); // output: { path: { to: { value: true } } }
});
~~~

# Get(...params)
> Use this function to get values inside the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L78)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let
  myObject = {
    path: {
      to: { value: true }
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
let data = myObjectManager.get('path/to/value');
console.log(data); // output: true

// Using callback:
myObjectManager.get('path/to/value', (data) => {
  console.log(data); // output: true
});
~~~

# Delete(...params)
> Use this function to delete a specific value in the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L98)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let
  myObject = {
    path: {
      to: { value: true }
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.delete('path/to/value')); // output: { path: { to: {} } }
console.log(myObject); // output: { path: { to: {} } }

// Using callback:
myObjectManager.delete('path/to/value', (data) => {
  console.log(data); // output: { path: { to: {} } }
  console.log(myObject); // output: { path: { to: {} } }
});
~~~

# Set(...params)
> Use this function to set values inside the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Value
    - Type: `Any`
    - Required: `true`
    - Example: `your value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L49)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.set('path/to/value', true)); // output: { value: true }
console.log(myObject); // output: { path: { to: { value: true } } }

// Using callback:
myObjectManager.set('path/to/value', true, (data) => {
  console.log(data); // output: { value: true }
  console.log(myObject); // output: { path: { to: { value: true } } }
});
~~~