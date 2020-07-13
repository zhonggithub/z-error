/*
 * @Author: Zz
 * @Date: 2017-06-26 09:05:57
 * @Last Modified by: Zz
 * @Last Modified time: 2017-06-26 09:51:12
 */
const config = require('./config');

exports.getMessage = (code, lang) => {
	if(!code){
		return '';
	}
	if (!config.errorTable[lang]) {
		return '';
	}
	return config.errorTable[lang][code] || '';
}

exports.getErrCodeTable = (lang) => {
	if (!lang) {
		return null;
	}
	return config.errorTable[lang] || null;
}