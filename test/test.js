'use strict';
let ZError = require('../index');
let errorCode2Text = require('../index').errorCode2Text;
let formatParam2Code = require('../index').formatParam2Code;
let getMessage = require('../index').getMessage;
let verify = require('../index').verify;

let error = new ZError("erro", 1001, 'zh-cn');
console.log(error.name);
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
console.log(err.getMessage());
