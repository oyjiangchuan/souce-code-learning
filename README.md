1. `Object.freeze()`只能冻结最外层对象

2. 正则中^符号在开头，则表示是什么开头，而在其他地方是指非；$符合在结尾，则表示是以什么结尾

3. `startsWith`为`ES6`新增方法

4. `Object.assign({}, {})`把后个对象合并到前一个，并返回前一个对象

5. `splice`其实是一个很耗性能的方法 删除数组中的一项，其他元素都要移动位置

6. `.call(val, key)`方法 返回一个`this`指向当前val的立即执行函数 val参数为`this`指向

7. `ES6`提供了`Map`数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。`Object`结构提供了“字符串—值”的对应，`Map`结构提供了“值—值”的对应，是一种更完善的 `Hash`结构实现 如果需要“键值对”的数据结构，`Map`比`Object`更合适

8. `symbol`ES6新的原始数据类型，表示独一无二的值

9. `typeof`函数返回值
  - `undefined` // 
  - `object`
  - `boolean`
  - `number`
  - `bigint`
  - `string`
  - `symobl`
  - `function`

10. `NaN`的定义、`parseInt`第二个参数是进制、字符串能用数组取值的形式取值、`charAt`与数组形式不同的是 取不到值会返回空字符串''，数组形式取值取不到则是`undefined`