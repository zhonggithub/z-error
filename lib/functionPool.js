'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const ZError = require('./ZError');
const config = require('./config');
const getMessage = require('./util').getMessage;

/*
* @params {JSON} data 
* @params {Array} mandatory
* @params {JSON} itemFuns;
**/
exports.verify = (data, mandatory, itemFuns) => {
	let error = null;
	mandatory.some((item) => {
		if (!{}.hasOwnProperty.call(data, item)){
			const code = `MISSING_${item.toUpperCase()}`;
			const message = getMessage(code, config.lang || 'en');
			const description = `Can\'t find the ${item} of ${JSON.stringify(data)}`;
			error = new ZError('Error', code, config.lang || 'en', message, description);
			return true;
		}

		if (itemFuns && itemFuns[item] && itemFuns[item](data[item]) === false) {
			const code = `INVALIDE_${item.toUpperCase()}`;
			const message = getMessage(code, config.lang || 'en');
			const description = `invalid ${data[item]} of ${item}`;
			error = new ZError('Error', code, config.lang || 'en', message, description);
			return true;
		}
	});
	return error;
};

function readLocal(local) {
  const collections = {};
  const modelsDir = `${local}`;
  if (fs.existsSync(modelsDir)) {
    const files = fs.readdirSync(modelsDir);
    _.each(files, (v) => {
      if (v.lastIndexOf('index.js') === -1) {
        const model = require(`${modelsDir}/${v}`);
				collections[path.parse(v).name] = model;
      }
    });
  }
  return collections;
}

exports.setLocal = (lang, local) => {
	if (lang) {
		config.lang = lang;
	}
	if (local) {
		config.errorTable = readLocal(local);
	}
};
