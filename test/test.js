'use strict';
const ZError = require('../index').ZError;
const errorCode2Text = require('../index').errorCode2Text;
const formatParam2Code = require('../index').formatParam2Code;
const getMessage = require('../index').getMessage;
const verify = require('../index').verify;
const setLocal = require('../index').setLocal;
setLocal('zh-cn');

let error = new ZError("erro", 400, 1001);
console.log(error.name);
console.log(error);
console.log(error.getMessage());
console.log(error.getMessage('en'));
console.log(error.stack);
console.log(errorCode2Text(1001));
console.log(formatParam2Code('accout'));
console.log(getMessage(1001, 'zh-cn'));
let err = verify({account: 'aa'}, ['password']);
console.log(err);
console.log(err.getMessage('zh-cn'));
err.local = 'zh-cn';
console.log(err.getMessage())