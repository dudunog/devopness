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


import { ActionStatus } from './action-status';

/**
 * Action step executed on server
 * @export
 * @interface ActionStep
 */
export interface ActionStep {
    /**
     * The unique id of the action step
     * @type {number}
     * @memberof ActionStep
     */
    id: number;
    /**
     * The unique id of the action linked to this step
     * @type {number}
     * @memberof ActionStep
     */
    action_id: number;
    /**
     * The unique id of the action server linked to this step
     * @type {number}
     * @memberof ActionStep
     */
    action_server_id: number;
    /**
     * The Id of the server on which the action must be performed
     * @type {number}
     * @memberof ActionStep
     */
    server_id: number;
    /**
     * Name of the action describing your purpose
     * @type {string}
     * @memberof ActionStep
     */
    name: string;
    /**
     * The execution order of the given step
     * @type {number}
     * @memberof ActionStep
     */
    order: number;
    /**
     * 
     * @type {ActionStatus}
     * @memberof ActionStep
     */
    status: ActionStatus;
    /**
     * The date and time when the action started execution (i.e., left the `pending/queued` status)
     * @type {string}
     * @memberof ActionStep
     */
    started_at?: string | null;
    /**
     * The date and time when the action has finished execution
     * @type {string}
     * @memberof ActionStep
     */
    completed_at?: string | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ActionStep
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ActionStep
     */
    updated_at?: string;
}
