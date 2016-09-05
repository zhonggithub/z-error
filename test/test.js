'use strict';
let ZError = require('../index');
let errorCode2Text = require('../index').errorCode2Text;
let formatParam2Code = require('../index').formatParam2Code;

let error = new ZError("erro", 1030);
console.log(error.name);
console.log(errorCode2Text(1050));
console.log(formatParam2Code('accout'));
