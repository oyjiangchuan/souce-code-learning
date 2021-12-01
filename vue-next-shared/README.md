1. `Object.freeze()`只能冻结最外层对象

2. 正则中^符号在开头，则表示是什么开头，而在其他地方是指非；$符合在结尾，则表示是以什么结尾

3. `startsWith`为`ES6`新增方法

4. `Object.assign({}, {})`把后个对象合并到前一个，并返回前一个对象

5. `splice`其实是一个很耗性能的方法 删除数组中的一项，其他元素都要移动位置

6. `.call(val, key)`方法 返回一个`this`指向当前val的立即执行函数 val参数为`this`指向

7. `ES6`提供了`Map`数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。`Object`结构提供了“字符串—值”的对应，`Map`结构提供了“值—值”的对应，是一种更完善的 `Hash`结构实现 如果需要“键值对”的数据结构，`Map`比`Object`更合适

8. `symbol`ES6新的原始数据类型，表示独一无二的值

9. `typeof`函数返回值
  - `undefined` // undefined
  - `object` // [] {} null
  - `boolean` // Boolean
  - `number` // Number
  - `bigint` 
  - `string` // String
  - `symobl` // Symobl
  - `function` // Function

10. `NaN`的定义、`parseInt`第二个参数是进制、字符串能用数组取值的形式取值、`charAt`与数组形式不同的是 取不到值会返回空字符串''，数组形式取值取不到则是`undefined`

11. `!!`一般用来将后面的表达式转换为布尔型的数据

12. js中`replace`函数的用法
  - 第二个参数中含`$1 $2` 代表分组捕获到的内容
  - 第二个参数为函数 前面正则匹配到的内容作为后面函数的参数

13. `Object.is`该方法用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致。 不同之处只有两个：一是+0不等于-0，而是 NaN 等于自身
```js
Object.is(+0, -0) // false
+0 === -0 // true
Object.is(NaN, NaN) // true
NaN === NaN // false
```

14. 使用`Object.defineProperty`为对象定义属性 除了`value`的默认值为`undefined`以外，其他的默认值都为`false`
  > `value` —— 当试图获取属性时所返回的值 <br>
  > `writable` —— 该属性是否可写 <br>
  > `enumerable` —— 该属性在for in循环中是否会被枚举 <br>
  > `configurable` —— 该属性是否可被删除 <br>
  > `set()` —— 该属性的更新操作所调用的函数 <br>
  > `get()` —— 获取属性值时所调用的函数 <br>

  - 另外，数据描述符（其中属性为：`enumerable`，`configurable`，`value`，`writable`）与存取描述符（其中属性为`enumerable`，`configurable`，`set()`，`get()`）之间是有互斥关系的。在定义了`set()`和`get()`之后，描述符会认为存取操作已被 定义了，其中再定义`value`和`writable`会引起错误

15. `isNaN`本意用来判断是不是`NaN`，但不准确，ES6新增了`Number.isNaN`
```js
isNaN('a') // true
Number.isNaN('a') // false
Number.isNaN(NaN) // true
```

16. `globalThis` 包含全局的`this`值
  - 在以前，从不同的`JavaScript`环境中获取全局对象需要不同的语句
  > 在`Web`中，可以通过`window、self`或者 `frames`取到全局对象 <br>
  > 在`Web Workers`中，只有`self`可以 <br>
  > 在`Node.js`中，它们都无法获取，必须使用 `global` <br>
  > 在严格模式和模块环境下，`this`会返回`undefined` <br>
  - 
  - 