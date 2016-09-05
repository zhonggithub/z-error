'use strict';
module.exports = require('./lib/ZError');
module.exports.errorCode2Text = require('./lib/errorCodeTable').errorCode2Text;
module.exports.formatParam2Code = require('./lib/errorCodeTable').formatParam2Code;
