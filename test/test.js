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
console.log(err.toJSON());
console.log(err.getMessage('zh_cn'));
err.lang = 'zh_cn';
console.log(err.getMessage())
err.lang = 'en';
console.log(err.getMessage());

let err1 = verify({
    account: 'aa'
}, null, {
    account: () => {
        return false;
    }
});
console.log(err1);
console.log('-----start stack------');
console.log(err1.stack);
console.log('-----end stack------');

err1 = verify({
    account: 'aa',
    password: 'a'
}, ['password', 'accountRoleId'], null, "MISSING_PARAMS", "ERR_PARAMS");

console.log(err1)

err1 = verify({
    account: 'aa'
}, null, {
    account: () => {
        return false;
    }
}, "MISSING_PARAMS", "ERR_PARAMS");
console.log(err1);
