'use strict';

const getMessage = require('./util').getMessage;
const config = require('./config');

class ZError extends Error {
  constructor(name = '', code = '', lang = 'en', message = '', description = '', httpCode=200){
    super();
    this.name = name;
    this.code = code;
    this.lang = lang;
    this.message = message || (code ? getMessage(code, config.lang || lang) : '');
    this.description = description;
    this.httpCode = httpCode;
  }

  getMessage(lang){
    if(!this.code)
      return '';
    let tmpLang = lang || this.lang || config.lang;
    return getMessage(this.code, tmpLang);
  }

  set httpCode (code) {
    this.httpCode = code;
  }

  set code (code) {
    this.code = code;
  }
}

module.exports = ZError;
