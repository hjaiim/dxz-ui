# Button 按钮

## 基本用法

### 按钮类型

需要传递type属性,支持 **default、primary、danger、warn** 四种类型，默认为 **default**

::: demo
```html
<dxz-button>默认按钮</dxz-button>
<dxz-button type="primary" >主要按钮</dxz-button>
<dxz-button type="danger"  >危险按钮</dxz-button>
<dxz-button type="warn"    >警告按钮</dxz-button>
```
:::

### 按钮事件

直接在组件上绑定@click即可,不需要特殊传递事件

::: demo
```html

<template>
    <dxz-button @click="handleClick">点我一下</dxz-button>
</template>

<script>
export default{
    methods:{
        handleClick(){
            alert('这是个弹窗')
        }
    }
}
</script>
```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| type     | 按钮类型       | string  | `default` `primary` `danger`  `warn` | `default` |


### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| click    | 点击操作 |          |

