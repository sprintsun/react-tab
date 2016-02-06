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
git clone [git@github.com:sprintsun/react-tab.git]
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

### Tab.props

| 参数       | 说明                                        | 类型      |  可选值        | 默认值  |
|------------|---------------------------------------------|-----------|----------------|---------|
|  cls      |  组件class                       | string    |                         |  aloha-file-upload|
|  style      |  自定义样式                      | object    |                         |  {}|
|  actived      |  指定激活的TabPanel                             | string       |  TabPanel中指定的tabKey  |  null      |
|  onSwitch   |  切换Tab时的回调函数                           | function  |                |  noop   |

### TabPanel.props

| 参数       | 说明                                        | 类型      |  可选值        | 默认值  |
|------------|---------------------------------------------|-----------|----------------|---------|
|  cls      |  组件class                       | string    |                         |  aloha-file-upload|
|  style      |  自定义样式                      | object    |                         |  {}|
|  actived      |  指定激活的TabPanel                             | string       |  TabPanel中指定的tabKey  |  null      |
|  onSwitch   |  切换Tab时的回调函数                           | function  |                |  noop   |


## License

@mtfe/react-tab is released under the MIT license.
