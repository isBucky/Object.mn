<div align="center">
  <h1>Object.mn</h1>
  <p>An npm with various functions to manage objects.</p>
  <p>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://img.shields.io/npm/v/object.mn?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://img.shields.io/npm/dt/object.mn?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/object.mn"><img src="https://nodei.co/npm/object.mn.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

# Installation:
```sh
npm install object.mn --save

yarn add object.mn
```

# Important:
This npm needs version 16+ of NodeJs, otherwise errors may occur!

# Functions:
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

# Examples:
## Set:
```js
const
  object = require('object.mn'),
  data = {};
  
// No callback:
object.set(data, 'npm/object.mn', 'best');
console.log(data); // Output: { npm: { 'object.mn': 'best' } }

// With callback:
object.set(data, 'npm/object.mn', 'best', function(values) {
  return console.log(values);  // Output: { npm: { 'object.mn': 'best' } }
});
```

## Get:
```js
const
  object = require('object.mn'),
  data = { npm: { 'object.mn': 'best' } };
  
// No callback:
console.log(object.get(data, 'npm'));

// With callback:
object.get(data, 'npm', function(values) {
  return console.log(values);  // Output: { 'object.mn': 'best' } 
});
```

## Delete:
```js
const
  object = require('object.mn'),
  data = {
    npm: { 'object.mn': 'best' },
    key: 'value'
  };
  
// No callback:
console.log(object.delete(data, 'key'));  // Output: { npm: { 'object.mn': 'best' } }

// With callback:
object.delete(data, 'key', function(values) {
  return console.log(values);  // Output: { npm: { 'object.mn': 'best' } }
});
```

## Update:
```js
const
  object = require('object.mn'),
  data = {
    npm: {},
    key: 'value'
  };
  
// No callback:
console.log(object.update(data, 'npm', {
  'object.mn': 'best'
}));  // Output: { npm: { 'object.mn': 'best' } }

// With callback:
object.update(data, 'npm', { 'object.mn': 'best' }, function(values) {
  return console.log(values);  // Output: { npm: { 'object.mn': 'best' } }
});
```

## Has:
```js
const
  object = require('object.mn'),
  data = { key: 'value', key2: 'value2' };
  
// No callback:
console.log(object.has(data, 'key')); // Output: true
console.log(object.has(data, 'key3')); // Output: false

// With callback:
object.has(data, 'key', function(value) {
  return console.log(value); // Output: true
});

object.has(data, 'key3', function(value) {
  return console.log(value); // Output: false
});
```

## Push:
```js
const
  object = require('object.mn'),
  data = {};
  
// No callback:
object.push(data, 'array', 'values');
console.log(data); // Output: { array: [ 'values' ] }

// With callback:
object.push(data, 'array', 'values', function(values) {
  return console.log(values); // Output: { array: [ 'values' ] }
});
```

## Keys:
```js
const
  object = require('object.mn'),
  data = {
    key: 'value',
    values: {
      key2: 'value'
    }
  };
  
// No callback:
console.log(object.keys(data, '/')); // Output:  ['key', 'values']

// With callback:
object.keys(data, '/', function(values) {
  return console.log(values); // Output: ['key', 'values']
});
```

## ToJSON:
```js
const
  object = require('object.mn'),
  data = { npm: { 'object.mn': 'best' } };
  
// No callback:
console.log(object.toJSON(data, '/')); // Output: {"npm":{"object.mn":"best"}}

// With callback:
object.toJSON(data, '/', function(values) {
  return console.log(values); // Output: {"npm":{"object.mn":"best"}}
});
```

## Values:
```js
const
  object = require('object.mn'),
  data = { npm: { 'object.mn': 'best' } };
    
  // No callback:
  console.log(object.values(data, '/')); // Output: [ { 'object.mn': 'best' } ]
  
  // With callback:
  object.values(data, '/', function(values) {
    return console.log(values); // Output: [ { 'object.mn': 'best' } ]
  });
```

## Entries:
```js
const
  object = require('object.mn'),
  data = { npm: { 'object.mn': 'best' } };
    
  // No callback:
  console.log(object.values(data, '/')); // Output: [ [ 'npm', { 'object.mn': 'best' } ] ]
  
  // With callback:
  object.values(data, '/', function(values) {
    return console.log(values); // Output: [ [ 'npm', { 'object.mn': 'best' } ] ]
  });
```