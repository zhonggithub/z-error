'use strict';
const ZError = require('./lib/ZError');
const getMessage = require('./lib/util').getMessage;
const getErrCodeTable = require('./lib/util').getErrCodeTable;
const verify = require('./lib/functionPool').verify;
const setLocal = require('./lib/functionPool').setLocal;

module.exports = { ZError, getMessage, getErrCodeTable, verify, setLocal };