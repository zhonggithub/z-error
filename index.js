'use strict';
const ZError = require('./lib/ZError');
const errorCode2Text = require('./lib/errorTable').errorCode2Text;
const formatParam2Code = require('./lib/errorTable').formatParam2Code;
const getMessage = require('./lib/errorTable').getMessage;
const verify = require('./lib/functionPool').verify;
const setLocal = require('./lib/functionPool').setLocal;

module.exports = { ZError, errorCode2Text, formatParam2Code, getMessage, verify, setLocal };