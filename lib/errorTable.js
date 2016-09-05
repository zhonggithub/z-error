/**
 * ProjectName: z-error
 * FileName: errorTable.js
 * Version: 0.0.1
 * Author: Zz
 * CreatedAt: 2016/9/5
 * Description:
 */
const fs = require('fs');

let errorTable = null;
try{
    const data = fs.readFileSync(__dirname+'/lib/errorTable.json');
    errorTable = JSON.parse(data);
}
catch (err){
    console.warn('may be read file errorTable.json fail or json parse error!');
}

