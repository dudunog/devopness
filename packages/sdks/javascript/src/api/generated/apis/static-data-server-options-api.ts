/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ServerOptions } from '../../generated/models';

/**
 * StaticDataServerOptionsApiService - Auto-generated
 */
export class StaticDataServerOptionsApiService extends ApiBaseService {
    /**
     * 
     * @summary List `Server` options
     */
    public async getStaticServerOptions(): Promise<ApiResponse<ServerOptions>> {

        let queryString = '';

        const requestUrl = '/static/server-options' + (queryString? `?${queryString}` : '');

        const response = await this.get <ServerOptions>(requestUrl);
        return new ApiResponse(response);
    }
}