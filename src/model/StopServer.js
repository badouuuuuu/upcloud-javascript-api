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
* The StopServer model module.
* @module model/StopServer
* @version 1.2.0
*/
export default class StopServer {
    /**
    * Constructs a new <code>StopServer</code>.
    * @alias module:model/StopServer
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>StopServer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StopServer} obj Optional instance to populate.
    * @return {module:model/StopServer} The populated <code>StopServer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StopServer();

            
            
            

            if (data.hasOwnProperty('stop_type')) {
                obj['stop_type'] = ApiClient.convertToType(data['stop_type'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Type of stop operation performed on the server.
    * @member {module:model/StopServer.StopTypeEnum} stop_type
    * @default 'soft'
    */
    stop_type = 'soft';
    /**
    * The stop timeout in seconds.
    * @member {Number} timeout
    */
    timeout = undefined;






    /**
    * Allowed values for the <code>stop_type</code> property.
    * @enum {String}
    * @readonly
    */
    static StopTypeEnum = {
    
        /**
         * value: "soft"
         * @const
         */
        "soft": "soft",
    
        /**
         * value: "hard"
         * @const
         */
        "hard": "hard"    
    };



}

