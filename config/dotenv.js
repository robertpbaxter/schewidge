/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (/* env */) {
  return {
    clientAllowedKeys: ['CLINICIAN_ID', 'CLIENT_PORTAL_BASE_URL'],
    fastbootAllowedKeys: [],
    failOnMissingKey: true,
    path: path.join(path.dirname(__dirname), '.env'),
  };
};
