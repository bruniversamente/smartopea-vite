'use strict';

/**
 * processo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processo.processo');
