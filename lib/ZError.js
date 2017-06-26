'use strict';

const getMessage = require('./util').getMessage;
const config = require('./config');

class ZError extends Error {
  constructor(name = '', code = '', lang = 'en', message = '', description = ''){
    super();
    this.name = name;
    this.code = code;
    this.lang = lang;
    this.message = message || (code ? getMessage(code, config.lang || lang) : '');
    this.description = description;
  }

  getMessage(lang){
    if(!this.code)
      return '';
    let tmpLang = lang || this.lang || config.lang;
    return getMessage(this.code, tmpLang);
  }
}

module.exports = ZError;
