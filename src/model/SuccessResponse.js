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
import SuccessResponseStorages from './SuccessResponseStorages';





/**
* The SuccessResponse model module.
* @module model/SuccessResponse
* @version 1.0.0
*/
export default class SuccessResponse {
    /**
    * Constructs a new <code>SuccessResponse</code>.
    * @alias module:model/SuccessResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SuccessResponse} obj Optional instance to populate.
    * @return {module:model/SuccessResponse} The populated <code>SuccessResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessResponse();

            
            
            

            if (data.hasOwnProperty('storages')) {
                obj['storages'] = SuccessResponseStorages.constructFromObject(data['storages']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/SuccessResponseStorages} storages
    */
    storages = undefined;








}


