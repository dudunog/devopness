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


import { LinkedResourceAttribute } from './linked-resource-attribute';

/**
 * Object with common attributes that identify a linked resource
 * @export
 * @interface LinkedResourceData
 */
export interface LinkedResourceData {
    /**
     * The unique ID of the resource
     * @type {number}
     * @memberof LinkedResourceData
     */
    id: number;
    /**
     * Resource name
     * @type {string}
     * @memberof LinkedResourceData
     */
    name: string;
    /**
     * The list of linked resource attributes
     * @type {Array<LinkedResourceAttribute>}
     * @memberof LinkedResourceData
     */
    extra_attributes?: Array<LinkedResourceAttribute>;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof LinkedResourceData
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof LinkedResourceData
     */
    updated_at?: string;
}

