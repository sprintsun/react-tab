# @mtfe/react-tab
---
[![NPM version](http://npm.sankuai.com/badge/v/@mtfe/react-tab.svg?style=flat-square)](http://npm.sankuai.com/package/@mtfe/react-tab)
[![Build Status](http://castle.sankuai.com/api/badge/liuxijin/turbo-component)](http://castle.sankuai.com/gh/liuxijin/turbo-component)

## Install

```
npm --registry=http://r.npm.sankuai.com install @mtfe/react-tab
```

## Development

```
git clone [Please fill your git repo here]
npm --registry=http://r.npm.sankuai.com install
npm start
```

## Usage

```js
var Component = require('@mtfe/react-tab');
var React = require('react');
React.render(<Component />, container);
```

## API

### props


| 参数       | 说明                                        | 类型      |  可选值        | 默认值  |
|------------|---------------------------------------------|-----------|----------------|---------|
|  name      |  指定显示的名字                             | int       |  任意非负整数  |  0      |
|  onClick   |  点击时的回调函数                           | function  |                |  noop   |

## License

@mtfe/react-tab is released under the MIT license.
