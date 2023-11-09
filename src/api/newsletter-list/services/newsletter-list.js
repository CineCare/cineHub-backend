'use strict';

/**
 * newsletter-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter-list.newsletter-list');
