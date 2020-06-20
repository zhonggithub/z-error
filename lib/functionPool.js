'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const ZError = require('./ZError');
const config = require('./config');
const getMessage = require('./util').getMessage;

function toLine(name) {
	if (!name) {
		return '';
	}
	const tmp = name.replace(/([A-Z])/g, '_$1').toLowerCase();
	if (tmp[0] === '_') {
		return tmp.slice(1);
	}
	return tmp;
}

/*
* @params {JSON} data 
* @params {Array} mandatory
* @params {JSON} itemFuns;
**/
exports.verify = (data, mandatory, itemFuns, missingParamsPrefix="MISSING", invalideParams="INVALIDE") => {
	let error = null;
	if (mandatory) {
		mandatory.some((item) => {
			if (!{}.hasOwnProperty.call(data, item)){
				const code = `${missingParamsPrefix}_${toLine(item).toUpperCase()}`;
				const message = getMessage(code, config.lang || 'en');
				const description = `Can\'t find the ${item} of ${JSON.stringify(data)}`;
				error = new ZError('Error', code, message || code, description, 400, config.lang || 'en');
				return true;
			}
		});
	}
	
	if (error || !itemFuns) {
		return error;
	}
	for (const item in itemFuns) {
		if ({}.hasOwnProperty.call(data, item)) {
			if (itemFuns[item](data[item]) === false) {
				const code = `${invalideParams}_${toLine(item).toUpperCase()}`;
				const message = getMessage(code, config.lang || 'en');
				const description = `invalid ${data[item]} of ${item}`;
				error = new ZError('Error', code, message || code, description, 422, config.lang || 'en');
				return error;
			}
		}
	}
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
