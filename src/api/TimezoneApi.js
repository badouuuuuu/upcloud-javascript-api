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


import ApiClient from "../ApiClient";
import TimezoneListResponse from '../model/TimezoneListResponse';

/**
* Timezone service.
* @module api/TimezoneApi
* @version 1.2.0
*/
export default class TimezoneApi {

    /**
    * Constructs a new TimezoneApi. 
    * @alias module:api/TimezoneApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listTimezones operation.
     * @callback module:api/TimezoneApi~listTimezonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimezoneListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List timezones
     * Returns a list of available timezones. Timezones are used to set the hardware clock for servers.
     * @param {module:api/TimezoneApi~listTimezonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimezoneListResponse}
     */
    listTimezones(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TimezoneListResponse;

      return this.apiClient.callApi(
        '/timezone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}