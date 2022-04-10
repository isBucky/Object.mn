<div align="center">
  <h1>Synchronous Functions</h1>
  <p><strong>Synchronous functions are basically functions that don't need Async/Await.</strong></p>
  <p><strong>They can also be used as a callback, passing a function in the parameters that returns the value of the query.</strong></p>
</div>

# Table of methods
- [Set(...params)](#setparams)
- [Get(...params)](#getparams)
- [Delete(...params)](#deleteparams)
- [Update(...params)](#updateparams)
- [Has(...params)](#hasparams)
- [Push(...params)](#pushparams)
- [Keys(...params)](#keysparams)
- [Values(...params)](#valuesparams)
- [Entries(...params)](#entriesparams)
- [ToJSON(...params)](#tojsonparams)

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
    - Example: `'your value'`
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
      to: { value: 'myValue' }
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
let data = myObjectManager.get('path/to/value');
console.log(data); // output: 'myValue'

// Using callback:
myObjectManager.get('path/to/value', console.log); // output: 'myValue'
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

# Update(...params)
> Use this function to update object elements..

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Value
    - Type: `Object`
    - Required: `true`
    - Example: `{ key: 'value' }`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L127)**

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
console.log(myObjectManager.update('path/to', {
  value: false,
  key: 'value'
})); // output: { path: { to: { value: false, key: 'value' } } }
console.log(myObject); // output: { path: { to: { value: false, key: 'value' } }

// Using callback:
myObjectManager.update('path/to', {
  value: false,
  key: 'value'
}, (data) => {
  console.log(data); // output: { path: { to: { value: false, key: 'value' } }
  console.log(myObject); // output: { path: { to: { value: false, key: 'value' } }
});
~~~

# Has(...params)
> Use this function to check the existence of a value in the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L148)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let myObject = { key: 'value' },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.has('key')); // output: true
console.log(myObjectManager.has('value')); // output: false

// Using callback:
myObjectManager.had('key', console.log); // output: true
myObjectManager.had('value', console.log); // output: false
~~~

# Push(...params)
> Use this function to insert/create an Array in the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Value
    - Type: `Any`
    - Required: `true`
    - Example: `'your value'`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L162)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.push('github/profiles', [
  'isBucky',
  '7Silva',
  '7Johnsz'
])); // output: { github: { profiles: ['isBucky', '7Silva', '7Johnsz'] } }
console.log(myObject); // output: { github: { profiles: ['isBucky', '7Silva', '7Johnsz'] } }

// Using callback:
myObjectManager.set('github/profiles', [
  'isBucky',
  '7Silva',
  '7Johnsz'
], (data) => {
  console.log(data); // output: { github: { profiles: ['isBucky', '7Silva', '7Johnsz'] } }
  console.log(myObject); // output: { github: { profiles: ['isBucky', '7Silva', '7Johnsz'] } }
});
~~~

# Keys(...params)
> Use this function to return all the keys of the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L182)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.keys('user')); // output: ['name', 'age']
console.log(myObjectManager.keys('/')); // output: ['user']

// Using callback:
myObjectManager.keys('user', console.log); // output: ['name', 'age']
myObjectManager.keys('/', console.log); // output: ['user']
~~~

# Values(...params)
> Use this function to return all the Values of the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L195)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.values('user')); // output: ['Bucky', '17']
console.log(myObjectManager.values('/')); // output: [{ name: 'Bucky', age: 17 }]

// Using callback:
myObjectManager.values('user', console.log); // output: ['Bucky', '17']
myObjectManager.valued('/', console.log); // output: [{ name: 'Bucky', age: 17 }]
~~~

# Entries(...params)
> Use this function to return all the Entries of the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L208)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.entries('user')); // output: [ [ 'name', 'Bucky' ], [ 'age', 17 ] ]
console.log(myObjectManager.entries('/')); // output: [ [ 'user', { name: 'Bucky', age: 17 } ] ]

// Using callback:
myObjectManager.entries('uset', console.log); // output: [ [ 'name', 'Bucky' ], [ 'age', 17 ] ]
myObjectManager.entries('/', console.log); // output: [ [ 'user', { name: 'Bucky', age: 17 } ] ]
~~~

# ToJSON(...params)
> Use this function to transform an object into a string.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Callback
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

- **If you want to see the code, [click here!](../index.js#L221)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
// Without using callback:
console.log(myObjectManager.toJSON('user')); // output: "{"name":"Bucky","age":17}"
console.log(myObjectManager.toJSON('/')); // output: "{"user":{"name":"Bucky","age":17}}"

// Using callback:
myObjectManager.toJSON('uset', console.log); // output: "{"name":"Bucky","age":17}"
myObjectManager.toJSON('/', console.log); // output: "{"user":{"name":"Bucky","age":17}}"
~~~