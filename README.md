# z-error

* verify： 校验字段有效性，合法性。检验不通过返回ZError对象，否则返回null
* ZError： 错误提示，继承Error。name表示错误名称，code表示错误码，message表示code对应的提示信息，description错误描述。status表示restful api 状态码
* setLocal：设置多语言错误对照码

## 如何使用

`npm install z-error`

```javascript
const { ZError, getMessage, getErrCodeTable, verify, setLocal } = require('z-error');

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

// 校验account属性值合法性
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

// 1，自定义属性缺失及属性合法性错误提示前缀
// 2，校验是否含有password属性，并校验account合法性
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
