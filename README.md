# z-error

## 如何使用

npm install z-error

```javascript
const { ZError, getMessage, verify, setLocal } = require('z-error');

// 设置错误码
setLocal('zh_cn', `${__dirname}/local`);

let error = new ZError("erro", 1001);

error.getMessage();
error.getMessage('en');
getMessage(1001, 'zh_cn')

let err = verify({account: 'aa'}, ['password']);
err.toJSON();
err.getMessage('zh_cn');

err.lang = 'zh_cn';
err.getMessage();
err.lang = 'en';
err.getMessage();

let err1 = verify({
  account: 'aa'
}, null, {
  account: () => {
    return false;
  }
});

err1 = verify({
  account: 'aa'
}, ['password'], {
  account: () => {
    return false;
  }
}, "MISSING_PARAMS", "ERR_PARAMS");

err1 = verify({
  account: 'aa'
}, null, {
  account: () => {
    return false;
  }
}, "MISSING_PARAMS", "ERR_PARAMS");
```