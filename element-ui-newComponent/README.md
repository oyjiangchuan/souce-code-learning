1. 驼峰命名规则
  - `lowerCamelCase`：第一个词的首字母小写，后面每个词的首字母大写（小驼峰）如：`newValue`
  - `UpperCamelCase`：所有词的首字母大写（大驼峰又称帕斯卡）如：`NewValue`

2. 匈牙利命名规则
  - 变量中每个词的首字母大写，然后变量名最前面再加一个小写字母，表示这个变量数据类型 如：`oNewValue`：`o`代表`object`类型

3. `file-save`包进行文件的写入操作
  <!-- ...... -->

4. `process.argv`参数[node, file, arg1, arg2] 比如执行 `node bin/new.js button 按钮`，打印的参数如下：
```js
process.argv = [
  '/Users/ouyangjiangchuan/.nvm/versions/node/v12.16.1/bin/node',
  '/Users/ouyangjiangchuan/demo/vue2-oui/bin/new.js',
  'button',
  '按钮'
]
```
  - node代表node环境 如：`/Users/ouyangjiangchuan/.nvm/versions/node/v12.16.1/bin/node`
  - file代表当前执行脚本文件名 如：`/Users/ouyangjiangchuan/demo/vue2-oui/bin/new.js`
  - arg1代表传入的参数1 如：`button`
  - arg2代表传入的参数2 如：`按钮`

5. `Make`命令的学习和`Makefile`文件的配置
  把代码变成可执行文件，叫做编译（`compile`）；
  先编译这个，还是先编译那个（即编译的安排），叫做构建（`build`）
  `Make`是最常用的构建工具：控制编译顺序的工具


6. `fs.readFileSync`读取的是buffer类型的二进制文件流，可以使用``模版字符串转化为utf-8格式