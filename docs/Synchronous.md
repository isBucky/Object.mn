<div align="center">
  <h1>Synchronous Functions</h1>
  <p>Synchronous functions are basically functions that don't need Async/Await.</p>
  <p>They can also be used as a callback, passing a function in the parameters that returns the value of the query.</p>
</div>

# Set(...params)
> Use this function to set values inside the object.

- Params:
  - Path:
    - Type: `String`
    - Required: `true`
    - Example: `path/to/value`
  - Value:
    - Type: `Any`
    - Required: `true`
    - Example: `your value`
  - Callback:
    - Type: `Function`
    - Required: `false`
    - Example: `(data) => console.log(data)`

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