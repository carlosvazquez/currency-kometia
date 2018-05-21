# currency-kometia

[![Coverage Status](https://coveralls.io/repos/github/carlosvazquez/currency-kometia/badge.svg?branch=master)](https://coveralls.io/github/carlosvazquez/currency-kometia?branch=master)

[![Build Status](https://travis-ci.org/carlosvazquez/currency-kometia.svg?branch=master)](https://travis-ci.org/carlosvazquez/currency-kometia)

> parse an integer to currency format

## Install
This project uses node and npm. Go check them out if you don't have them locally installed.

> npm install --save currency-kometia

> yarn add --save currency-kometia

## Import
Using ES6 modules

```js
import currency from 'currency-kometia'
```

Using CommonJS modules

```js 
var currency = require('currency-kometia')
```

```js
var CURRENCY = 'MX'

currency(100000, CURRENCY);
currency(100000);

```
## License
MIT
