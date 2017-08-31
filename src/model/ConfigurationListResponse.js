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
import ConfigurationListResponseServerSizes from './ConfigurationListResponseServerSizes';





/**
* The ConfigurationListResponse model module.
* @module model/ConfigurationListResponse
* @version 1.2.0
*/
export default class ConfigurationListResponse {
    /**
    * Constructs a new <code>ConfigurationListResponse</code>.
    * @alias module:model/ConfigurationListResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ConfigurationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ConfigurationListResponse} obj Optional instance to populate.
    * @return {module:model/ConfigurationListResponse} The populated <code>ConfigurationListResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigurationListResponse();

            
            
            

            if (data.hasOwnProperty('server_sizes')) {
                obj['server_sizes'] = ConfigurationListResponseServerSizes.constructFromObject(data['server_sizes']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ConfigurationListResponseServerSizes} server_sizes
    */
    server_sizes = undefined;








}


