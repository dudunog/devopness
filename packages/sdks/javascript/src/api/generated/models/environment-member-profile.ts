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


import { EnvironmentTeam } from './environment-team';

/**
 * 
 * @export
 * @interface EnvironmentMemberProfile
 */
export interface EnvironmentMemberProfile {
    /**
     * The ID of the member
     * @type {number}
     * @memberof EnvironmentMemberProfile
     */
    id: number;
    /**
     * Member\'s full name
     * @type {string}
     * @memberof EnvironmentMemberProfile
     */
    name: string;
    /**
     * Member\'s email
     * @type {string}
     * @memberof EnvironmentMemberProfile
     */
    email: string;
    /**
     * Tells if the user is active or not
     * @type {boolean}
     * @memberof EnvironmentMemberProfile
     */
    active: boolean;
    /**
     * 
     * @type {Array<EnvironmentTeam>}
     * @memberof EnvironmentMemberProfile
     */
    teams: Array<EnvironmentTeam>;
}
