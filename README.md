# z-error

## 如何使用

`npm install z-error`

```javascript
const { ZError, getMessage, verify, setLocal } = require('z-error');

// 设置错误码对照表目录
setLocal('zh_cn', `${__dirname}/local`);

let error = new ZError("erro", 1001);

error.getMessage();
error.getMessage('en');
getMessage(1001, 'zh_cn');

let err = verify({account: 'aa'}, ['password']);
err.toJSON();
err.getMessage('zh_cn');

err.lang = 'zh_cn';
err.getMessage();
err.lang = 'en';
err.getMessage();

// 校验account字典合法性
let err1 = verify({
  account: 'aa'
}, null, {
  account: (val) => {
    if (!val) {
      return false;
    }
    if (val.length < 4) {
      return false;
    }
    return true;
  }
});

// 校验是否含有password属性，并校验account合法性
err1 = verify({
  account: 'aa'
}, ['password'], {
  account: (val) => {
    if (!val) {
      return false;
    }
    if (val.length < 4) {
      return false;
    }
    return true;
  }
}, "MISSING_PARAMS", "ERR_PARAMS");
```
