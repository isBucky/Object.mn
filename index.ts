'use strict';

/**
 * Class used to generate custom errors.
 * 
 * @class ObjectManagerError
 * @extends {TypeError}
 */
class ObjectManagerError extends TypeError {
  constructor(...args: any[]) {
    super(args.join(' '));
  }
}

/**
 * Class responsible for the object manager.
 * @class ObjectManager
 */
export default class ObjectManager {
    public objectData: any;
    public split: string;

  /**
   * @param {Object} [objectData] Source object to save the information.
   * @param {?String} [split] Query path separator.
   */
  constructor(objectData: object, split: string | null = null) {
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
   * @param {String} [path] Path where the value will be set.
   * @param {Any} [value] A value to be set on the object.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Object}
   */
  public set(...params: [string, any, Function?]): any {
    let { path, value, callbackData } = this.#resolveParams(true, ...params),
      pathSplit = path.split(this.split).filter(Boolean);
      
    try {
      if (!pathSplit.length) {
        if (typeof value !== 'object') throw new ObjectManagerError('For this the value has to be an object, received:', typeof value);
        for (let key in value) this.objectData[key] = (value[key] ?? null);
        return this.#resolveCallback(callbackData!, this.objectData);
      }
      
      let currentObjectData = this.objectData,
        lastKeyPath = pathSplit.pop();
        
      for (let key of pathSplit) currentObjectData = (currentObjectData[key] = 
        currentObjectData[key]
          ? !(typeof currentObjectData[key] == 'string')
            ? currentObjectData[key]
            : {}
          : {});
      currentObjectData[lastKeyPath!] = value;
      
      return this.#resolveCallback(callbackData!, currentObjectData);
    } catch(err) { throw err; }
  }
  
  /**
   * Use this function to get values inside the object.
   * 
   * @param {String} [path] Path where the value will be get.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Any}
   */
  public get(...params: [string, Function?]): any {
    let { path, callbackData } = this.#resolveParams(false, ...params),
      pathSplit = path.split(this.split).filter(Boolean);
    if (!pathSplit.length) return this.objectData;
    
    try {
      return this.#resolveCallback(callbackData!,
        pathSplit.reduce((data, key) => {
          if (Array.isArray(data)) data = Object.assign({}, data);
          return (data ?? {})[key];
        }, this.objectData));
    } catch(_) { return this.#resolveCallback(callbackData!, null); }
  }
  
  /**
   * Use this function to delete a specific value in the object.
   * 
   * @param {String} [path] Path where the value will be deleted.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Object}
   */
  public delete(...params: [string, Function?]): any {
    let { path, callbackData } = this.#resolveParams(false, ...params),
      pathSplit = path.split(this.split).filter(Boolean);
      
    try {
      if (!pathSplit.length) {
        delete this.objectData; this.objectData = {};
        return this.#resolveCallback(callbackData!, this.objectData);
      }
      
      let currentObjectData = this.objectData,
        lastKeyPath = pathSplit.pop();
        
      for (let key of path) currentObjectData = (currentObjectData[key] = (currentObjectData[key] ?? {}));
        delete currentObjectData[lastKeyPath!];
        
      return this.#resolveCallback(callbackData!, this.objectData);
    } catch(_) {}
  }
  
  /**
   * Use this function to update object elements.
   * 
   * @param {String} [path] Path where the value will be update.
   * @param {Object} [value] Value in object to update elements of the initial object.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Object}
   */
  public update(...params: [string, any, Function?]): any {
    let { path, value, callbackData } = this.#resolveParams(true, ...params);
    if (typeof value !== 'object') throw new ObjectManagerError('The value can only be of type object, received:', typeof value);
    
    if (path == this.split) {
      this.set(path, value);
      this.#resolveCallback(callbackData!, this.objectData);
    }
    
    for (let key in value) this.set(path + this.split + key, value[key]);
    return this.#resolveCallback(callbackData!, this.objectData);
  }
  
  /**
   * Use this function to check the existence of a value in the object.
   * 
   * @param {String} [path] Path where the value will be checked.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Boolean}
   */
  public has(...params: [string, Function?]): boolean {
    let { path, callbackData } = this.#resolveParams(false, ...params);
    return this.#resolveCallback(callbackData!, !!this.get(path));
  }
  
  /**
   * Use this function to insert/create an Array in the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {Any} [value] Value to be inserted into the Array.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Object}
   */
  public push(...params: [string, any, Function?]): any[] {
    let { path, value, callbackData } = this.#resolveParams(true, ...params);
    try {
      let data = this.get(path);
      if (!Array.isArray(data)) data = [];
      
      value = Array.isArray(value) ? value : [value];
        data.push(...value);
      return this.set(path, data, callbackData);
    } catch(_) { return this.#resolveCallback(callbackData!, null); }
  }
  
  /**
   * Use this function to return all the Keys of the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Array}
   */
  public keys(...params: [string, Function?]): string[] {
    let { path, callbackData } = this.#resolveParams(false, ...params);
    return this.#resolveCallback(callbackData!, Object.keys(this.get(path) ?? {}));
  }
  
  /**
   * Use this function to return all the Values of the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Array}
   */
  public values(...params: [string, Function?]): string[] {
    let { path, callbackData } = this.#resolveParams(false, ...params);
    return this.#resolveCallback(callbackData!, Object.values(this.get(path) ?? {}));
  }
  
  /**
   * Use this function to return all the Entries of the object.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {Array}
   */
  public entries(...params: [string, Function?]): any[][] {
    let { path, callbackData } = this.#resolveParams(false, ...params);
    return this.#resolveCallback(callbackData!, Object.entries(this.get(path) ?? {}));
  }
  
  /**
   * Use this function to transform an object into a string.
   * 
   * @param {String} [path] Path where the value will be set.
   * @param {?Function} [callback] Return the result in callback.
   * 
   * @return {String}
   */
  public toJSON(...params: [string, Function?]): string {
    let { path, callbackData } = this.#resolveParams(false, ...params);
    return this.#resolveCallback(callbackData!, JSON.stringify(this.get(path) ?? {}));
  }
  
  /**
   * This function is used to check the parameters of functions.
   * 
   * @private
   * @param {Boolean} [requiredValue] Is the "value" parameter mandatory?
   * @param {Any} [...params] Parameters passed by the function.
   * 
   * @return {Object}
   */
  #resolveParams(requiredValue: boolean, ...params: [string, any, Function?]): { path: string; value: any; callbackData?: Function; } {
    let [path, value, callbackData] = params;
    
    if (!path || typeof path !== 'string') throw new ObjectManagerError('The path has to be a string, reveived:', typeof path);
    if (requiredValue && !value && value !== 0) throw new ObjectManagerError('You have not set a valid value, received:', typeof value);
    if (requiredValue && typeof value == 'function') throw new ObjectManagerError('The value cannot be of type Function!');
    if (typeof value == 'function') {
      callbackData = value; value = undefined;
    } else if (!requiredValue) value = undefined;
    
    return { path, value, callbackData };
  }
  
  /**
   * This function is used to decide whether to use the callback or not.
   * 
   * @private
   * @param {Function} [callbackData] Function that will be executed passing the information in the parameters.
   * @param {Any} [data] Value that will be passed in the callback parameter, if used.
   * 
   * @return {Any | Undefined}
   */
  #resolveCallback(callbackData: Function, data: any) {
    if (callbackData && typeof callbackData == 'function') return callbackData(data);
    else return data;
  }
}