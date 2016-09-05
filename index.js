'use strict';
module.exports = require('./lib/ZError');
module.exports.errorCode2Text = require('./lib/errorTable').errorCode2Text;
module.exports.formatParam2Code = require('./lib/errorTable').formatParam2Code;
module.exports.getMessage = require('./lib/errorTable').getMessage;
module.exports.verify = require('./lib/functionPool').verify;