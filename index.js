'use strict';

/**
 * Class used to generate custom errors.
 * 
 * @class ObjectManagerError
 * @extends {TypeError}
 */
class ObjectManagerError extends TypeError {
  constructor(...args) {
    super(args.join(' '));
  }
}

/**
 * Class responsible for the object manager.
 * @class ObjectManager
 */
class ObjectManager {
  /**
   * @param {Object} [objectData] Source object to save the information.
   * @param {String} [split] Query path separator.
   */
  constructor(objectData, split = null) {
    if (!objectData || typeof objectData !== 'object') throw new ObjectManagerError('You haven\'t defined an object to be managed, received:', typeof objectData);
    if (split && typeof split !== 'string') throw new ObjectManagerError('You have not defined a valid split, received:', typeof split);
    
    /**
     * Here is the object you defined to be managed.
     * @type {Object}
     */
    this.objectData = objectData;
    /**
     * This variable contains the query path separator.
     * @type {String}
     */
    this.split = (!split || !split.length) ? '/' : split;
  }
  
  /**
   * 
   * 
   * @param {String} [path]
   * @param {Any} [value]
   * @param {Function} [callback]
   * 
   * @return {Object}
   */
  set(...args) {
    let { path, value, callbackData } = this.#resolveParams(true, ...args);
      path = path.split(this.split).filter(Boolean);
      
    try {
      if (!path.length) {
        if (typeof value !== 'object') throw new ObjectManagerError('For this the value has to be an object, received:', typeof value);
        for (let key in value) this.objectData[key] = (value[key] ?? null);
        return this.#resolveCallback(callbackData, this.objectData);
      }
      
      let currentObjectData = this.objectData,
        lastKeyPath = path.pop();
        
      for (let key of path) currentObjectData = (currentObjectData[key] = (currentObjectData[key] ?? {}));
        currentObjectData[lastKeyPath] = value;
        
      return this.#resolveCallback(callbackData, currentObjectData);
    } catch(err) { throw err; }
  }
  
  /**
   * 
   * @param {String} [path]
   * @param {Function} [callback]
   * 
   * @return {Any}
   */
  get(...args) {
    let { path, callbackData } = this.#resolveParams(false, ...args);
    
    path = path.split(this.split).filter(Boolean);
    if (!path.length) return this.objectData;
    
    try {
      return this.#resolveCallback(callbackData,
        path.reduce((a, b) => (a ?? {})[b], this.objectData));
    } catch(_) { return this.#resolveCallback(callbackData, null); }
  }
  
  /**
   * 
   * @param {String} [path]
   * @param {Function} [callbackl]
   * 
   * @return {Object}
   */
  delete(...args) {
    let { path, callbackData } = this.#resolveParams(false, ...args);
      path = path.split(this.split).filter(Boolean);
      
    try {
      if (!path.length) {
        delete this.objectData; this.objectData = {};
        return this.#resolveCallback(callbackData, this.objectData);
      }
      
      let currentObjectData = this.objectData,
        lastKeyPath = path.pop();
        
      for (let key of path) currentObjectData = (currentObjectData[key] = (currentObjectData[key] ?? {}));
        delete currentObjectData[lastKeyPath];
        
      return this.#resolveCallback(callbackData, this.objectData);
    } catch(_) {}
  }
  
  /**
   * 
   * @param {String} []
   * @param {Object} []
   * @param {Function} []
   */
  update(...args) {
    let { path, value, callbackData } = this.#resolveParams(true, ...args);
    if (typeof value !== 'object') throw new ObjectManagerError('The value can only be of type object, received:', typeof value);
    
    if (path == this.split) {
      this.set(path, value);
      this.#resolveCallback(callbackData, this.objectData);
    }
    
    for (let key in value) this.set(path + this.split + key, value[key]);
    return this.#resolveCallback(callbackData, this.objectData);
  }
  
  has(...args) {
    let { path, callbackData } = this.#resolveCallback(false, ...args);
    return this.#resolveCallback(callbackData, !!this.get(path));
  }
  
  push(...args) {
    let { path, value, callbackData } = this.#resolveParams(true, ...args);
    try {
      let data = this.get(path);
      if (!Array.isArray(data)) data = [];
      
      value = Array.isArray(value) ? value : [value];
        data.push(...value);
      return this.set(path, data, callbackData);
    } catch(_) { return this.#resolveCallback(callbackData, null); }
  }
  
  keys(...args) {
    let { path, callbackData } = this.#resolveParams(false, ...args);
    return this.#resolveCallback(callbackData, Object.keys(this.get(path) ?? {}));
  }
  
  values(...args) {
    let { path, callbackData } = this.#resolveParams(false, ...args);
    return this.#resolveCallback(callbackData, Object.values(this.get(path) ?? {}));
  }
  
  entries(...args) {
    let { path, callbackData } = this.#resolveParams(false, ...args);
    return this.#resolveCallback(callbackData, Object.entries(this.get(path) ?? {}));
  }
  
  toJSON(...args) {
    let { path, callbackData } = this.#resolveParams(false, ...args);
    return this.#resolveCallback(callbackData, JSON.stringify(this.get(path) ?? {}));
  }
  
  #resolveParams(requiredValue, ...args) {
    let [path, value, callbackData] = args;
    
    if (!path || typeof path !== 'string') throw new ObjectManagerError('The path has to be a string, reveived:', typeof path);
    if (requiredValue && !value && value !== 0) throw new ObjectManagerError('You have not set a valid value, received:', typeof value);
    if (requiredValue && typeof value == 'function') throw new ObjectManagerError('The value cannot be of type Function!');
    if (typeof value == 'function') {
      callbackData = value; value = undefined;
    } else if (!requiredValue) value = undefined;
    
    return { path, value, callbackData };
  }
  
  #resolveCallback(callbackData, data) {
    if (callbackData && typeof callbackData == 'function') return callbackData(data);
    else return data;
  }
}

module.exports = ObjectManager;