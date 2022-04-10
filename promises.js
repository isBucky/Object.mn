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
   * @param {?String} [split] Query path separator.
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
   * Use this function to set values inside the object.
   * 
   * @param {String} [path] Path where the value will be set. Path where the value will be set.
   * @param {Any} [value] A value to be set on the object.
   * @param {?Function} [callback] Return the result in callback. Return the result in callback.
   * 
   * @return {Promise<Object>}
   */
  async set(...params) {
    let { path, value } = await this.#resolveParams(true, ...params);
      path = path.split(this.split).filter(Boolean);
      
    try {
      if (!path.length) {
        if (typeof value !== 'object') throw new ObjectManagerError('For this the value has to be an object, received:', typeof value);
        for (let key in value) this.objectData[key] = (value[key] ?? null);
        return this.objectData;
      }
      
      let currentObjectData = this.objectData,
        lastKeyPath = path.pop();
        
      for (let key of path) currentObjectData = (currentObjectData[key] = (currentObjectData[key] ?? {}));
        currentObjectData[lastKeyPath] = value;
        
      return currentObjectData;
    } catch(err) { throw err; }
  }
  
  /**
   * Use this function to get values inside the object.
   * 
   * @param {String} [path] Path where the value will be get.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Any>}
   */
  async get(...params) {
    let { path } = await this.#resolveParams(false, ...params);
    
    path = path.split(this.split).filter(Boolean);
    if (!path.length) return this.objectData;
    
    try {
      return path.reduce((a, b) => (a ?? {})[b], this.objectData);
    } catch(_) { return null; }
  }
  
  /**
   * Use this function to delete a specific value in the object.
   * 
   * @param {String} [path] Path where the value will be deleted.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Object>}
   */
  async delete(...params) {
    let { path } = await this.#resolveParams(false, ...params);
      path = path.split(this.split).filter(Boolean);
      
    try {
      if (!path.length) {
        delete this.objectData; this.objectData = {};
        return this.objectData;
      }
      
      let currentObjectData = this.objectData,
        lastKeyPath = path.pop();
        
      for (let key of path) currentObjectData = (currentObjectData[key] = (currentObjectData[key] ?? {}));
        delete currentObjectData[lastKeyPath];
        
      return this.objectData;
    } catch(_) {}
  }
  
  /**
   * Use this function to update object elements.
   * 
   * @param {String} [path] Path where the value will be update.
   * @param {Object} [value] Value in object to update elements of the initial object.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Object>}
   */
  async update(...params) {
    let { path, value } = await this.#resolveParams(true, ...params);
    if (typeof value !== 'object') throw new ObjectManagerError('The value can only be of type object, received:', typeof value);
    
    if (path == this.split) {
      await this.set(path, value);
      this.objectData;
    }
    
    for (let key in value) await this.set(path + this.split + key, value[key]);
    return this.objectData;
  }
  
  /**
   * Use this function to check the existence of a value in the object.
   * 
   * @param {String} [path] Path where the value will be checked.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Boolean>}
   */
  async has(...params) {
    let { path } = await this.#resolveParams(false, ...params);
    return !!(await this.get(path));
  }
  
  /**
   * Use this function to insert/create an Array in the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {Any} [value] Value to be inserted into the Array.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Object>}
   */
  async push(...params) {
    let { path, value } = await this.#resolveParams(true, ...params);
    try {
      let data = await this.get(path);
      if (!Array.isArray(data)) data = [];
      
      value = Array.isArray(value) ? value : [value];
        data.push(...value);
      return this.set(path, data);
    } catch(_) { return null; }
  }
  
  /**
   * Use this function to return all the Keys of the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Array>}
   */
  async keys(...params) {
    let { path } = await this.#resolveParams(false, ...params);
    return Object.keys((await this.get(path)) ?? {});
  }
  
  /**
   * Use this function to return all the Values of the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Array>}
   */
  async values(...params) {
    let { path } = await this.#resolveParams(false, ...params);
    return Object.values((await this.get(path)) ?? {});
  }
  
  /**
   * Use this function to return all the Entries of the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<Array>}
   */
  async entries(...params) {
    let { path } = await this.#resolveParams(false, ...params);
    return Object.entries((await this.get(path)) ?? {});
  }
  
  /**
   * Use this function to transform an object into a string.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Promise<String>}
   */
  async toJSON(...params) {
    let { path } = await this.#resolveParams(false, ...params);
    return JSON.stringify((await this.get(path)) ?? {});
  }
  
  /**
   * This function is used to check the parameters of functions.
   * 
   * @private
   * @param {Boolean} [requiredValue] Is the "value" parameter mandatory?
   * @param {Any} [...params] Parameters passed by the function.
   * 
   * @return {Promise<Object>}
   */
  async #resolveParams(requiredValue, ...params) {
    let [path, value] = params;
    
    if (!path || typeof path !== 'string') throw new ObjectManagerError('The path has to be a string, reveived:', typeof path);
    if (requiredValue && !value && value !== 0) throw new ObjectManagerError('You have not set a valid value, received:', typeof value);
    if (requiredValue && typeof value == 'function') throw new ObjectManagerError('The value cannot be of type Function!');
    
    return { path, value };
  }
}

module.exports = ObjectManager;