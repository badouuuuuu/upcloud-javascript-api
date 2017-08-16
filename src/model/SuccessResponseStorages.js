/**
 * Upcloud api
 * Upcloud api specification
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import Storage from './Storage';





/**
* The SuccessResponseStorages model module.
* @module model/SuccessResponseStorages
* @version 1.0.0
*/
export default class SuccessResponseStorages {
    /**
    * Constructs a new <code>SuccessResponseStorages</code>.
    * @alias module:model/SuccessResponseStorages
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SuccessResponseStorages</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SuccessResponseStorages} obj Optional instance to populate.
    * @return {module:model/SuccessResponseStorages} The populated <code>SuccessResponseStorages</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessResponseStorages();

            
            
            

            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], [Storage]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Storage>} storage
    */
    storage = undefined;








}


