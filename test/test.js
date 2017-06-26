'use strict';
const ZError = require('../index').ZError;
const getMessage = require('../index').getMessage;
const verify = require('../index').verify;
const setLocal = require('../index').setLocal;
console.log(`${__dirname}/local`);
setLocal('zh_cn', `${__dirname}/local`);

let error = new ZError("erro", 1001);
console.log(error.name);
console.log(error);
console.log(error.getMessage());
console.log(error.getMessage('en'));
// console.log(error.stack);
console.log(getMessage(1001, 'zh_cn'));
let err = verify({account: 'aa'}, ['password']);
console.log(err);
console.log(err.getMessage('zh_cn'));
err.lang = 'zh_cn';
console.log(err.getMessage())
err.lang = 'en';
console.log(err.getMessage())