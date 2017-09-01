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
import FirewallRule from './FirewallRule';





/**
* The FirewallRuleDetailsResponse model module.
* @module model/FirewallRuleDetailsResponse
* @version 1.2.0
*/
export default class FirewallRuleDetailsResponse {
    /**
    * Constructs a new <code>FirewallRuleDetailsResponse</code>.
    * @alias module:model/FirewallRuleDetailsResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FirewallRuleDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FirewallRuleDetailsResponse} obj Optional instance to populate.
    * @return {module:model/FirewallRuleDetailsResponse} The populated <code>FirewallRuleDetailsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirewallRuleDetailsResponse();

            
            
            

            if (data.hasOwnProperty('firewall_rule')) {
                obj['firewall_rule'] = FirewallRule.constructFromObject(data['firewall_rule']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/FirewallRule} firewall_rule
    */
    firewall_rule = undefined;








}

