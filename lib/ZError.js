'use strict';

const getMessage = require('./util').getMessage;
const config = require('./config');

class ZError extends Error {
  constructor(name = '', code = '', lang = 'en', message = '', description = '', status = 200){
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = name;
    this.code = code;
    this.lang = lang;
    this.message = message || (code ? getMessage(code, config.lang || lang) : '');
    this.description = description;
    this.status = status;
  }

  getMessage(lang){
    if(!this.code)
      return '';
    let tmpLang = lang || this.lang || config.lang;
    return getMessage(this.code, tmpLang);
  }
  
  toJson() {
    return {
      code: this.code,
      message: this.message,
      description: this.description,
      status: this.status,
    }
  }

  toJSON() {
    return this.toJson();
  }
}

module.exports = ZError;
