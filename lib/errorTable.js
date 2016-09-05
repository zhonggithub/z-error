/**
 * ProjectName: z-error
 * FileName: errorTable.js
 * Version: 0.0.1
 * Author: Zz
 * CreatedAt: 2016/9/5
 * Description:
 */
const fs = require('fs');
let assert = require('assert');

let errorTable = null;
try{
    const data = fs.readFileSync(__dirname+'/lib/errorTable.json');
    errorTable = JSON.parse(data);
}
catch (err){
    console.warn('may be read file errorTable.json fail or json parse error!');
}

let missingReg = new RegExp('^Missing ');
let missingParam2Code = {};
for(let property in errorTable){
    missingParam2Code[property] = {};
    for(let item in errorTable[property][item]){
        if(missingReg.test(errorTable[property][item])){
            let strV = errorTable[property][item].split( /[ .]/);
            assert(strV.length>=2);
            assert(strV[0] === 'Missing');

            let text = strV[1];
            for( let i=2; i<strV.length; i++){
                text += strV[i].substring(0,1).toUpperCase() + strV[i].substring(1);
            }
            missingParam2Code[text] = Number(property);
        }
    }
}