'use strict';

const getMessage = require('./errorTable').getMessage;
const config = require('./config');

class ZError extends Error{
  constructor(name = '', status = 500, code = '', local = 'en', message = '', description = ''){
    super();
    this.name = name;
    this.code = code;
    this.local = local;
    this.message = message || (code ? getMessage(code, config.local || local) : '');
    this.description = description;
    this.status = status;	
  }

  getMessage(local){
    if(!this.code)
        return '';
    let tmpLocal = config.local || local || this.local;
    return getMessage(this.code, tmpLocal);
  }
}

module.exports = ZError;
