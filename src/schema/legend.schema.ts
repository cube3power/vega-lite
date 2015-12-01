import {isObject} from '../util';

export interface Legend {
  orient?: string;
  title?: string;
  format?: string;
  values?: Array<any>;
  properties?: any; //TODO declare VgLegendProperties
}

export function isLegend(object: any): object is Legend {
  return isObject(object);
}

export var legend = {
  default: true,
  description: 'Properties of a legend or boolean flag for determining whether to show it.',
  oneOf: [{
    type: 'object',
    properties: {
      orient: {
        type: 'string',
        default: undefined,
        description: 'The orientation of the legend. One of "left" or "right". This determines how the legend is positioned within the scene. The default is "right".'
      },
      title: {
        type: 'string',
        default: undefined,
        description: 'A title for the legend. (Shows field name and its function by default.)'
      },
      format: {
        type: 'string',
        default: undefined,
        description: 'An optional formatting pattern for legend labels. Vega uses D3\'s format pattern.'
      },
      values: {
        type: 'array',
        default: undefined,
        description: 'Explicitly set the visible legend values.'
      },
      properties: {
        type: 'object',
        default: undefined,
        description: 'Optional mark property definitions for custom legend styling. '
      }
    }
  }, {
    type: 'boolean'
  }]
};