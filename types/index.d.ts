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
     * @return {Object}
     */
    set(...params: [string, any, Function?]): any;
    /**
     * Use this function to get values inside the object.
     *
     * @param {String} [path] Path where the value will be get.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Any}
     */
    get(...params: [string, Function?]): any;
    /**
     * Use this function to delete a specific value in the object.
     *
     * @param {String} [path] Path where the value will be deleted.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Object}
     */
    delete(...params: [string, Function?]): any;
    /**
     * Use this function to update object elements.
     *
     * @param {String} [path] Path where the value will be update.
     * @param {Object} [value] Value in object to update elements of the initial object.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Object}
     */
    update(...params: [string, any, Function?]): any;
    /**
     * Use this function to check the existence of a value in the object.
     *
     * @param {String} [path] Path where the value will be checked.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Boolean}
     */
    has(...params: [string, Function?]): boolean;
    /**
     * Use this function to insert/create an Array in the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {Any} [value] Value to be inserted into the Array.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Object}
     */
    push(...params: [string, any, Function?]): any[];
    /**
     * Use this function to return all the Keys of the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Array}
     */
    keys(...params: [string, Function?]): string[];
    /**
     * Use this function to return all the Values of the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Array}
     */
    values(...params: [string, Function?]): string[];
    /**
     * Use this function to return all the Entries of the object.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {Array}
     */
    entries(...params: [string, Function?]): any[][];
    /**
     * Use this function to transform an object into a string.
     *
     * @param {String} [path] Path where the value will be set.
     * @param {?Function} [callback] Return the result in callback.
     *
     * @return {String}
     */
    toJSON(...params: [string, Function?]): string;
}
export { ObjectManager, ObjectManager as default };
