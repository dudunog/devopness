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
import { Deployment } from '../../generated/models';
import { DeploymentCreate } from '../../generated/models';
import { DeploymentRelation } from '../../generated/models';

/**
 * ApplicationsDeploymentsApiService - Auto-generated
 */
export class ApplicationsDeploymentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Trigger a new deployment for current application
     * @param {number} applicationId Numeric ID of the application to be deployed
     * @param {DeploymentCreate} [deploymentCreate] A JSON object containing deployment parameters
     */
    public async deployApplication(applicationId: number, deploymentCreate?: DeploymentCreate): Promise<ApiResponse<Deployment>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'deployApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/deployments' + (queryString? `?${queryString}` : '');

        const response = await this.post <Deployment, DeploymentCreate>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), deploymentCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all deployments belonging to an application
     * @param {number} applicationId Numeric ID of the application to get deployments from
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listApplicationDeployments(applicationId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<DeploymentRelation>>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'listApplicationDeployments');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/applications/{application_id}/deployments' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<DeploymentRelation>>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }
}