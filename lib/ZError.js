'use strict'

const errorTable = require('./errorTable').errorTabel;
const errorCode2Text = require('./errorTable').errorCode2Text;

class ZError extends Error{
  constructor(name = '', code = '', description = '', message = '', stack = ''){
    super();
    this.name = name ? name : '';
    this.code = code ? code : '';
    this.message = message ? message : (code ? errorCode2Text(code) : '');
    this.description = description ? description : '';
    this.stack = stack ? stack : this.stack;
  }

  getMessage(local){
    if(!this.code)
        return '';
    switch(local){
      case 'zh-cn':{
        return errorTable[local][this.code];
      }break;  
      default:
        return errorTable.en[this.code];  
    } 
  }
}
module.exports = ZError;
