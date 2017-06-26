'use strict';
const ZError = require('./lib/ZError');
const getMessage = require('./lib/util').getMessage;
const verify = require('./lib/functionPool').verify;
const setLocal = require('./lib/functionPool').setLocal;

module.exports = { ZError, getMessage, verify, setLocal };