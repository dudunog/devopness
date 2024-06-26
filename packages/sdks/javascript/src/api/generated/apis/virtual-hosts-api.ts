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
import { ApiError } from '../../generated/models';
import { VirtualHost } from '../../generated/models';

/**
 * VirtualHostsApiService - Auto-generated
 */
export class VirtualHostsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given virtual host
     * @param {number} virtualHostId The ID of the virtual host.
     */
    public async deleteVirtualHost(virtualHostId: number): Promise<ApiResponse<void>> {
        if (virtualHostId === null || virtualHostId === undefined) {
            throw new ArgumentNullException('virtualHostId', 'deleteVirtualHost');
        }

        let queryString = '';

        const requestUrl = '/virtual-hosts/{virtual_host_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"virtual_host_id"}}`, encodeURIComponent(String(virtualHostId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get an virtual host by ID
     * @param {number} virtualHostId The ID of the virtual host.
     */
    public async getVirtualHost(virtualHostId: number): Promise<ApiResponse<VirtualHost>> {
        if (virtualHostId === null || virtualHostId === undefined) {
            throw new ArgumentNullException('virtualHostId', 'getVirtualHost');
        }

        let queryString = '';

        const requestUrl = '/virtual-hosts/{virtual_host_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <VirtualHost>(requestUrl.replace(`{${"virtual_host_id"}}`, encodeURIComponent(String(virtualHostId))));
        return new ApiResponse(response);
    }
}
