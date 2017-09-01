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
import PriceListResponse from '../model/PriceListResponse';

/**
* Prices service.
* @module api/PricesApi
* @version 1.2.0
*/
export default class PricesApi {

    /**
    * Constructs a new PricesApi. 
    * @alias module:api/PricesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listPrices operation.
     * @callback module:api/PricesApi~listPricesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List prices
     * Returns a list resource prices.
     * @param {module:api/PricesApi~listPricesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceListResponse}
     */
    listPrices(callback) {
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
      let accepts = [];
      let returnType = PriceListResponse;

      return this.apiClient.callApi(
        '/price', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}