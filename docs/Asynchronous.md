<div align="center">
  <h1>Asynchronous Functions</h1>
  <p><strong>Funções assíncronas são basicamente funções que precisam usar Async/Await.</strong></p>
  <p><strong>But to get access to async functions, you have to import 'object.mn/promises'.</strong></p>
</div>

# Table of methods
- [await await Set(...params)](#await-setparams)
- [await await Get(...params)](#await-getparams)
- [await Delete(...params)](#await-deleteparams)
- [await Update(...params)](#await-updateparams)
- [await Has(...params)](#await-hasparams)
- [await Push(...params)](#await-pushparams)
- [await Keys(...params)](#await-keysparams)
- [await Values(...params)](#await-valuesparams)
- [await Entries(...params)](#await-entriesparams)
- [await ToJSON(...params)](#await-tojsonparams)

# await Set(...params)
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

- **If you want to see the code, [click here!](../index.js#L49)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(await myObjectManager.set('path/to/value', true)); // output: { value: true }
  console.log(myObject); // output: { path: { to: { value: true } } }
})();
~~~

# await Get(...params)
> Use this function to get values inside the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L78)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    path: {
      to: { value: 'myValue' }
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  let data = await myObjectManager.get('path/to/value');
  console.log(data); // output: 'myValue'
})();
~~~

# await Delete(...params)
> Use this function to delete a specific value in the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L97)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    path: {
      to: { value: true }
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(await myObjectManager.delete('path/to/value')); // output: { path: { to: {} } }
  console.log(myObject); // output: { path: { to: {} } }
})();
~~~

# await Update(...params)
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

- **If you want to see the code, [click here!](../index.js#L126)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    path: {
      to: { value: true }
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(await myObjectManager.update('path/to', {
    value: false,
    key: 'value'
  })); // output: { path: { to: { value: false, key: 'value' } } }
  console.log(myObject); // output: { path: { to: { value: false, key: 'value' } }
})();
~~~

# await Has(...params)
> Use this function to check the existence of a value in the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L147)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let myObject = { key: 'value' },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(myObjectManager.has('key')); // output: true
  console.log(myObjectManager.has('value')); // output: false
}();
~~~

# await Push(...params)
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

- **If you want to see the code, [click here!](../index.js#L161)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let myObject = {},
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(myObjectManager.push('github/profiles', [
    'isBucky',
    '7Silva',
    '7Johnsz'
  ])); // output: { github: { profiles: ['isBucky', '7Silva', '7Johnsz'] } }
  console.log(myObject); // output: { github: { profiles: ['isBucky', '7Silva', '7Johnsz'] } }
})();
~~~

# await Keys(...params)
> Use this function to return all the keys of the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L181)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(await myObjectManager.keys('user')); // output: ['name', 'age']
  console.log(await myObjectManager.keys('/')); // output: ['user']
})();
~~~

# await Values(...params)
> Use this function to return all the Values of the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L194)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(myObjectManager.values('user')); // output: ['Bucky', '17']
  console.log(myObjectManager.values('/')); // output: [{ name: 'Bucky', age: 17 }]
})();
~~~

# await Entries(...params)
> Use this function to return all the Entries of the object.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L207)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(myObjectManager.entries('user')); // output: [ [ 'name', 'Bucky' ], [ 'age', 17 ] ]
  console.log(myObjectManager.entries('/')); // output: [ [ 'user', { name: 'Bucky', age: 17 } ] ]
})();
~~~

# await ToJSON(...params)
> Use this function to transform an object into a string.

- Params
  - Path
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`

- **If you want to see the code, [click here!](../index.js#L220)**

---

## Example
~~~javascript
import ObjectManager from 'object.mn/promises';

let
  myObject = {
    user: {
      name: 'Bucky',
      age: 17
    }
  },
  myObjectManager = new ObjectManager(myObject);
  
(async() => {
  // Without using callback:
  console.log(myObjectManager.toJSON('user')); // output: "{"name":"Bucky","age":17}"
  console.log(myObjectManager.toJSON('/')); // output: "{"user":{"name":"Bucky","age":17}}"
})();
~~~