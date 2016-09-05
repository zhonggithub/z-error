'use strict';

const errorCodeTable = require('./errorCodeTable');
const ZError = require('./ZError');

/*
* @params {JSON} data 
* @params {Array} mandatory 
**/
exports.verify = (data, mandatory) => {
    mandatory.some(function (item) {
        if (!data.hasOwnProperty(item)) {
            const code = errorCodeTable.missingParam2Code(item);
            const message = errorCodeTable.errorCode2Text(code);
            const description = 'Can\'t find the ' + item + ' field.';
            return new ZError('Error', code, description, message);
        }
    });
    return null;
};
