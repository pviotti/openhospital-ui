// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Graphics,
    GraphicsFromJSON,
    GraphicsToJSON,
} from './';

/**
 * 
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * 
     * @type {number}
     * @memberof Image
     */
    accelerationPriority?: number;
    /**
     * 
     * @type {Graphics}
     * @memberof Image
     */
    graphics?: Graphics;
    /**
     * 
     * @type {object}
     * @memberof Image
     */
    source?: object;
}

export function ImageFromJSON(json: any): Image {
    return {
        'accelerationPriority': !exists(json, 'accelerationPriority') ? undefined : json['accelerationPriority'],
        'graphics': !exists(json, 'graphics') ? undefined : GraphicsFromJSON(json['graphics']),
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function ImageToJSON(value?: Image): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'accelerationPriority': value.accelerationPriority,
        'graphics': GraphicsToJSON(value.graphics),
        'source': value.source,
    };
}


