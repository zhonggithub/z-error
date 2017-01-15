'use strict';

const errorCodeTable = require('./errorTable');
const ZError = require('./ZError');
const config = require('./config');

/*
* @params {JSON} data 
* @params {Array} mandatory 
**/
exports.verify = (data, mandatory) => {
    let error = null;
    mandatory.some((item) => {
        if (!data.hasOwnProperty(item)) {
            const code = errorCodeTable.missingParam2Code(item);
            const message = errorCodeTable.getMessage(code, config.local || 'en'); // errorCodeTable.errorCode2Text(code);
            const description = 'Can\'t find the ' + item + ' field.';
            error = new ZError('Error', 422, code, config.local || 'en', message, description);
            return true;
        }
    });
    return error;
};

exports.setLocal = (local) => {
    config.local = local;
};
