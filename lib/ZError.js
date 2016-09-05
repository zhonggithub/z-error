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

  getMessage(local){
    switch(local){
      case 'zh-cn':{
        
      }break;  
      default:
        return this.message;  
    } 
  }
}
module.exports = ZError;
