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
import { Daemon } from '../../generated/models';
import { DaemonRestart } from '../../generated/models';
import { DaemonUpdate } from '../../generated/models';

/**
 * DaemonsApiService - Auto-generated
 */
export class DaemonsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given Background process
     * @param {number} daemonId Numeric ID of the daemon to be deleted
     */
    public async deleteDaemon(daemonId: number): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'deleteDaemon');
        }
        
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a background process by ID
     * @param {number} daemonId Numeric ID of the daemon to get
     */
    public async getDaemon(daemonId: number): Promise<ApiResponse<Daemon>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'getDaemon');
        }
        
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Daemon>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Restart a background process
     * @param {number} daemonId Numeric ID of the daemon to restart
     * @param {DaemonRestart} daemonRestart A JSON object containing the environment id
     */
    public async restartDaemon(daemonId: number, daemonRestart: DaemonRestart): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'restartDaemon');
        }
        if (daemonRestart === null || daemonRestart === undefined) {
            throw new ArgumentNullException('daemonRestart', 'restartDaemon');
        }
        
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}/restart' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, DaemonRestart>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))), daemonRestart);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing background process
     * @param {number} daemonId Numeric ID of the daemon to update
     * @param {DaemonUpdate} daemonUpdate A JSON object containing daemon data
     */
    public async updateDaemon(daemonId: number, daemonUpdate: DaemonUpdate): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'updateDaemon');
        }
        if (daemonUpdate === null || daemonUpdate === undefined) {
            throw new ArgumentNullException('daemonUpdate', 'updateDaemon');
        }
        
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, DaemonUpdate>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))), daemonUpdate);
        return new ApiResponse(response);
    }
}