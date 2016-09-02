'use strict'

const errorCodeTable = require('./errorCodeTable');
class ZError extends Error{
  constructor(name = '', code = '', description = '', message = '', stack = ''){
    super();
    this.name = name ? name : '';
    this.code = code ? code : '';
    this.message = message ? message : (code ? errorCodeTable.errorCode2Text(code) : '');
    this.description = description ? description : '';
    this.stack = stack ? stack : this.stack;
  }
}

let err = new ZError('DBError', 1011);
console.log(err.name);
console.log(err.message);
console.log(err.stack);
