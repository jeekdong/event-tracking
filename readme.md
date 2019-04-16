# event-trace

> 一种无侵入式的打点解决方案

通过事件委托的方式添加打点事件，可以直观管理所有打点事件，摆脱凌乱的侵入式打点

## Install

```shell
$ npm i event-trace
// or
$ yarn add event-trace
```

## Usage

采用 ES6 语法引入 event-trace

```js
import eventTrace from 'event-trace'
```

通过 `script` 标签加载会暴露名为 `eventTrace` 的全局变量

### example

```js
eventTrace('#app', [
    {
        target: '.header',
        handle: () => {
            console.log('click header!')
        },
        delay: 300
    },
    {
        target: '.name',
        handle: (params) => {
            console.log('click name!', params.id)
        },
        params: ['id']
    }
], true)
```

## params

导入的 `eventTrace` 函数接受三个参数

* 第一个是需要绑定事件元素元素(可传入css选择器 或 DOM元素的引用)
* 第二个是配置对象，如下

```js
{
  target: '.header',  // css选择器
  params: ['id']      // 需要的参数(会从dom元素的 dataset 属性中取)
  handle: ({id}) => { // 打点事件处理程序
    console.log(id)   // 如果需要参数需要再params中指定
  },                  // 参数会以对象的形式传入，key为指定的参数名
  delay: 300          // 延时(执行完打点事件后多长时间执行后续事件) ,单位 ms，只在第三个参数为 true 时有效
}
```

* 第三个参数布尔变量，为 `true` 时先执行打点事件，再执行原有逻辑，为 `false` 时先执行原有逻辑，再执行打点事件