/**
 * Class responsible for the object manager.
 * @class ObjectManager
 */
declare class ObjectManager {
    #private;
    objectData: any;
    split: string;
    /**
     * @param {Object} [objectData] Source object to save the information.
     * @param {?String} [split] Query path separator.
     */
    constructor(objectData: object, split?: string | null);
    /**
     * Use this function to set values inside the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {Any} [value] A value to be set on the object.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any>}
     */
    set(...params: [string, any, Function?]): Promise<any>;
    /**
     * Use this function to get values inside the object.
     *
     * @param {String} [path] Path where the value will be get.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any>}
     */
    get(...params: [string, Function?]): Promise<any>;
    /**
     * Use this function to delete a specific value in the object.
     *
     * @param {String} [path] Path where the value will be deleted.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any>}
     */
    delete(...params: [string, Function?]): Promise<any>;
    /**
     * Use this function to update object elements.
     *
     * @param {String} [path] Path where the value will be update.
     * @param {Object} [value] Value in object to update elements of the initial object.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any>}
     */
    update(...params: [string, any, Function?]): Promise<any>;
    /**
     * Use this function to check the existence of a value in the object.
     *
     * @param {String} [path] Path where the value will be checked.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<boolean>}
     */
    has(...params: [string, Function?]): Promise<boolean>;
    /**
     * Use this function to insert/create an Array in the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {Any} [value] Value to be inserted into the Array.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any[]>}
     */
    push(...params: [string, any, Function?]): Promise<any[]>;
    /**
     * Use this function to return all the Keys of the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<string[]>}
     */
    keys(...params: [string, Function?]): Promise<string[]>;
    /**
     * Use this function to return all the Values of the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any[]>}
     */
    values(...params: [string, Function?]): Promise<string[]>;
    /**
     * Use this function to return all the Entries of the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<any[][]>}
     */
    entries(...params: [string, Function?]): Promise<any[][]>;
    /**
     * Use this function to transform an object into a string.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Promise<string>}
     */
    toJSON(...params: [string, Function?]): Promise<string>;
}
export { ObjectManager, ObjectManager as default };
