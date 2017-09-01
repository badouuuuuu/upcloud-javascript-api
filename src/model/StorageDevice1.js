/**
 * Upcloud api
 * The UpCloud API consists of operations used to control resources on UpCloud. The API is a web service interface. HTTPS is used to connect to the API. The API follows the principles of a RESTful web service wherever possible. The base URL for all API operations is  https://api.upcloud.com/. All API operations require authentication.
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The StorageDevice1 model module.
* @module model/StorageDevice1
* @version 1.2.0
*/
export default class StorageDevice1 {
    /**
    * Constructs a new <code>StorageDevice1</code>.
    * @alias module:model/StorageDevice1
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StorageDevice1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StorageDevice1} obj Optional instance to populate.
    * @return {module:model/StorageDevice1} The populated <code>StorageDevice1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageDevice1();

            
            
            

            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], 'String');
            }
        }
        return obj;
    }

    /**
    * The UUID of the storage to be loaded in the CD-ROM device.
    * @member {String} storage
    */
    storage = undefined;








}

