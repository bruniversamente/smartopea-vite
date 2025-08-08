'use strict';

/**
 * mensagem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mensagem.mensagem');
