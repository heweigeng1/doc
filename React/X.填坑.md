# 整理遇到的问题

1. 事件传参方法

```js
// 事件 传参方法
    reset = (record,event) => {
        console.log(record);
    }
```

```html
 <a onClick={this.reset.bind(this,record)}>abc</a>
```

2. 后台接收不到参数

```js
export async function userSearch(payload) {
  return request('http://localhost:6832/management/user/search', {
    method: 'POST',
    body: payload,
  })
}
```

> method: 'POST', POST必须为大写